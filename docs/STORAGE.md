# 数据目录、备份与清理

本页目录结构根据当前私有实现中的 `BuildConfig.TAG`、路径常量、语音仓库、DEX 存储、日志策略、崩溃管理和 SAF 导入导出逻辑整理。

## 主目录

标准微信包名为 `com.tencent.mm`，Wtonec 外部数据根目录为：

```text
/storage/emulated/0/Android/data/com.tencent.mm/Wtonec/
```

多开、工作资料或修改包名版本会将 `com.tencent.mm` 替换为实际宿主包名。每个宿主实例使用独立目录、DEX 缓存和语音索引。

## 确认存在的布局

```text
/storage/emulated/0/Android/data/com.tencent.mm/Wtonec/
├── wtonec/
│   ├── voices/
│   │   ├── <uuid>.mp3
│   │   └── <uuid>.amr
│   └── metadata/
│       ├── voices.txt
│       ├── voices-metadata.json
│       ├── custom-voices.json
│       └── local-voices.json
├── dex_cache/
│   ├── .dex-cache.lock
│   ├── .fingerprint.json
│   ├── diagnostics.json
│   └── item-<cache-id>.json
├── logs/
│   └── Wtonec-yyyy-MM-dd.log
└── crashes/
    ├── wtonec-crash-<timestamp>.log
    ├── pending_crash.flag
    └── pending_java_crash.flag

/storage/emulated/0/Android/data/com.tencent.mm/cache/Wtonec/
└── wtonec-jobs/
    └── <job-id-or-request-hash>/
        ├── source.mp3
        ├── import.mp3
        ├── voice.amr
        └── <temporary>.part
```

目录按功能首次使用时创建。同一任务目录通常只出现其中部分文件。

## 目录与清理影响

| 位置 | 文件类型与用途 | 是否适合清理 | 清理影响与备份建议 |
|---|---|---|---|
| `wtonec/voices/` | UUID 命名的 `.mp3` 与 `.amr` 成对文件 | 通过语音包页面删除 | 手工删除会让索引指向缺失文件；重要 MP3 先导出 |
| `wtonec/metadata/` | 音色目录、自定义音色、语音包索引、ETag/更新时间和校验摘要 | 按配置用途谨慎处理 | `custom-voices.json` 和 `local-voices.json` 包含用户配置；迁移优先记录音色 ID 并重新导入 MP3 |
| `dex_cache/` | 宿主指纹、匹配条目、诊断摘要和跨进程锁 | 从设置页清理 | 清理后下次启动执行完整 DEX 匹配；定位重复更新时先保留 `diagnostics.json` 和 `.fingerprint.json` |
| `logs/` | `Wtonec-yyyy-MM-dd.log` | 导出问题日志后清理 | 自动轮转保留近期日志；日志可能包含会话标识、文本和本地路径 |
| `crashes/` | Java/native 崩溃日志和待处理标记 | 问题确认后从日志页面清理 | 管理器最多保留 50 个最新崩溃文件；反馈前遮盖隐私字段 |
| `cache/Wtonec/wtonec-jobs/` | 生成/导入过程的 MP3、微信语音数据和临时文件 | 可从设置页清理 | 不影响已保存到 `wtonec/voices/` 的语音包；缓存上限约 256 MiB，超过 30 天的旧任务会被回收 |

`.amr` 文件承载 Wtonec 生成的微信语音数据，扩展名不表示普通 AMR 音频。日常分享和备份使用 MP3 导出功能。

## 导入与导出

### 导入

1. 在“语音包”页点击导入。
2. Android 系统文件选择器返回所选文件 URI。
3. Wtonec 检查 MIME 类型和 20 MiB 大小限制。
4. 文件临时写入 `wtonec-jobs/<job-id>/import.mp3`。
5. MP3 校验并生成微信语音数据后，成对复制到 `wtonec/voices/`。
6. `local-voices.json` 更新索引，导入任务临时文件被清理。

### 导出

1. 在语音包条目中点击导出。
2. 系统创建文件界面让使用者选择目标位置和文件名。
3. Wtonec 将对应 MP3 写入所选 URI。

导出文件位置由使用者选择，通常不在 Wtonec 主目录中。

## Android 11+ 访问说明

Android 分区存储会限制普通文件管理器浏览 `Android/data`。推荐管理顺序：

1. 使用 Wtonec 内置导入、导出、日志查看和清理入口。
2. 使用 Android 系统文件选择器保存或选择 MP3。
3. 在设备策略允许时使用 ADB 查看和备份。
4. 由设备高级管理环境处理完整目录备份。

ADB 只读查看示例：

```bash
adb shell ls -la /sdcard/Android/data/com.tencent.mm/Wtonec/
adb shell ls -la /sdcard/Android/data/com.tencent.mm/cache/Wtonec/wtonec-jobs/
```

备份示例：

```bash
adb pull /sdcard/Android/data/com.tencent.mm/Wtonec/ ./Wtonec-backup/
```

目录是否对 `adb shell` 可见由 Android 版本、ROM、调试策略和设备权限决定。

## 推荐备份流程

1. 逐条导出重要 MP3。
2. 记录自定义 Fish Audio 音色 ID、名称和备注。
3. 导出与问题相关的运行日志和崩溃日志。
4. 记录 Wtonec、Android、微信和 LSPosed 版本。
5. 记录当前 APK SHA-256。
6. 再执行微信清数据、卸载微信、跨设备迁移或系统存储清理。

`local-voices.json` 保存当前环境的绝对路径。跨设备、跨 Android 用户、跨微信包名或跨多开实例时，推荐在目标环境重新导入 MP3，让 Wtonec 重建路径和索引。

## 推荐清理顺序

1. 导出仍需保留的 MP3。
2. 在语音包页面删除不再使用的条目。
3. 在设置页清理语音任务缓存。
4. 仅在需要重新匹配时清理 DEX 缓存。
5. 导出问题日志后清理运行日志与崩溃记录。
6. 完整结束微信进程，再执行目录级维护。

避免直接编辑 JSON、DEX 条目、锁文件、崩溃标记和运行中的临时文件。应用内操作会同步维护音频、索引和当前状态。
