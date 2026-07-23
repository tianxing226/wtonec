# 数据目录、备份与清理

Wtonec `1.5.11` 同时支持微信 `com.tencent.mm` 和 QQ `com.tencent.mobileqq`。两个宿主保存各自可直接访问的副本，模块应用另外维护受控的 canonical 配置和语音库。

## 宿主目录

```text
微信：/storage/emulated/0/Android/data/com.tencent.mm/Wtonec/
QQ：  /storage/emulated/0/Android/data/com.tencent.mobileqq/Wtonec/
```

对应任务缓存通常位于：

```text
/storage/emulated/0/Android/data/<host-package>/cache/Wtonec/
```

多开、工作资料或修改包名版本会把 `<host-package>` 替换为实际宿主包名。LSPosed scope 和当前版本只面向标准微信及标准 QQ 包名。

## 宿主副本布局

实际子目录按功能首次使用时创建：

```text
Wtonec/
├── wtonec/
│   ├── voices/
│   │   ├── <voice-id>.mp3
│   │   └── <voice-id>.amr
│   └── metadata/
│       ├── voices.txt
│       ├── voices-metadata.json
│       ├── custom-voices.json
│       ├── local-voices.json
│       └── shared-voice-catalog-v1.json
├── dex_cache/
│   ├── .dex-cache.lock
│   ├── .fingerprint.json
│   ├── diagnostics.json
│   └── item-<cache-id>.json
├── logs/
│   └── Wtonec-yyyy-MM-dd.log
└── crashes/
    ├── wtonec-crash-<timestamp>.log
    └── pending_*.flag

cache/Wtonec/
├── wtonec-jobs/<job-id>/
└── ptt/wtonec-*.silk
```

`.amr` 是现有宿主兼容文件名，文件内部可能承载 Tencent SILK 数据。日常分享和备份使用应用内 MP3 导出。

## Canonical 共享语音库

模块 `dev.wtonec` 的 externalFilesDir 下维护逻辑目录：

```text
Wtonec/voices/
├── .index-v1.json
├── voice-<SILK-SHA256-prefix>.mp3
└── voice-<SILK-SHA256-prefix>.amr
```

该目录由模块 UID 持有。微信和 QQ 通过受签名约束的 Binder/PFD Bridge 读取或写入，不依赖跨 UID 直接访问文件路径。

- canonical 索引按 SILK SHA-256 去重。
- 微信和 QQ 的标签、分类和最近使用时间可以合并。
- Bridge 断开时保留宿主本地副本与最后有效目录缓存。
- 重新连接后继续同步缺失条目，不清空既有语音包。

## 目录与清理影响

| 位置 | 用途 | 推荐操作 | 清理影响 |
|---|---|---|---|
| `wtonec/voices/` | 当前宿主可读取的 MP3/SILK 副本 | 从语音包页面管理 | 手工删除可能留下失效索引；重要 MP3 先导出 |
| `wtonec/metadata/` | 音色、自定义 ID、语音包和共享目录缓存 | 按配置用途保留 | 清理会丢失本地索引或触发重新同步 |
| `dex_cache/` | 当前宿主版本指纹、匹配结果和诊断 | 从设置页清理 | 下次启动重新执行该宿主 DEX 匹配 |
| `logs/` / `crashes/` | 运行日志和崩溃诊断 | 导出问题证据后清理 | 影响后续问题定位 |
| `cache/Wtonec/wtonec-jobs/` | 生成、下载、导入和转码缓存 | 从设置页清理 | 不影响已保存语音包 |
| `cache/Wtonec/ptt/` | QQ PTT 暂存与 ACK 保留文件 | 由 Wtonec 自动回收 | 发送过程清理可能造成 QQ 读取失败 |
| canonical `Wtonec/voices/` | 两宿主共享的权威语音库 | 使用应用内语音包功能 | 清理会影响两个宿主的后续同步 |

QQ PTT 成功回调后仍会保留暂存文件一段时间，供 QQ 媒体线程继续读取。Wtonec 只回收自己创建的 `wtonec-*.silk`、`.ack` 和 `.part` 文件。

## 导入与导出

### 导入

1. 在“语音包”页打开系统文件选择器。
2. Wtonec 校验文件类型、大小和可解码性。
3. 音频写入任务临时目录并转换为宿主语音格式。
4. 文件和索引原子写入当前宿主副本。
5. 通过 PFD/Bridge 尝试同步 canonical 语音库。

### 导出

1. 在语音包条目中选择导出。
2. 通过系统创建文件界面选择位置和名称。
3. Wtonec 将对应 MP3 写入目标 URI。

## Android 11+ 访问

Android 分区存储会限制普通文件管理器浏览 `Android/data`。推荐顺序：

1. 使用 Wtonec 内置导入、导出、日志和清理入口。
2. 使用 Android 系统文件选择器。
3. 在设备策略允许时使用 ADB 查看和备份。

只读查看示例：

```bash
adb shell ls -la /sdcard/Android/data/com.tencent.mm/Wtonec/
adb shell ls -la /sdcard/Android/data/com.tencent.mobileqq/Wtonec/
```

目录是否对 `adb shell` 可见取决于 Android 版本、ROM、调试策略和设备权限。

## 推荐备份流程

1. 逐条导出重要 MP3。
2. 记录自定义 Fish Audio 音色 ID、名称和备注。
3. 导出相关日志和崩溃报告。
4. 记录 Wtonec、Android、微信、QQ 和 LSPosed 版本。
5. 记录当前 APK SHA-256。
6. 再进行宿主清数据、卸载、跨设备迁移或系统存储清理。

保持 JSON、DEX 条目、锁文件、崩溃标记和运行中的临时文件由 Wtonec 管理。应用内操作会同步维护音频、索引和状态。
