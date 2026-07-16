# Wtonec

Wtonec 是独立维护的 Android 微信语音工具。它在微信聊天页提供文字转语音、Fish Audio 自定义音色、本地语音包管理，以及面向当前会话的语音生成和发送流程。

本仓库是 Wtonec 的主项目资料仓库，用于发布功能介绍页、使用文档、实机截图、Release 和 4 个独立 Kotlin 样例。Xposed Modules Repo 中的 `dev.wtonec` 仓库用于官方模块收录与 APK 分发；两处公开仓库均不包含正式模块的私有实现。

## 项目入口

- [功能介绍页](https://tianxing226.github.io/wtonec/)
- [完整文档](docs/README.md)
- [数据目录说明](docs/STORAGE.md)
- [公开 Kotlin 样例](examples/android-kotlin/README.md)
- [Xposed 官方仓库](https://github.com/Xposed-Modules-Repo/dev.wtonec)
- [Xposed 官方 Releases](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases)
- [项目归档 Releases](https://github.com/tianxing226/wtonec/releases)
- [Xposed 仓库与同步说明](docs/XPOSED_REPOSITORY.md)
- [Tiax API 服务](https://www.tiax.pw/)

## 功能概览

- **预设音色**：搜索、选择和试听服务方音色，输入文字后生成 MP3 或直接发送到当前聊天。
- **克隆音色**：保存多个 Fish Audio 音色 ID，自定义名称并快速切换。
- **本地语音包**：导入 MP3，执行试听、搜索、排序、重命名、删除、导出和发送。
- **微信内面板**：在私聊或群聊中长按微信语音按钮打开“预设 / 克隆 / 语音包 / 设置”面板。
- **本地音频处理**：接口返回 MP3 后，在设备上生成微信语音发送所需的数据。
- **状态与诊断**：显示模块激活、DEX 匹配、构建身份、运行日志和崩溃诊断状态。

## 运行环境

| 项目 | 要求 |
|---|---|
| Android | Android 9（API 28）及以上 |
| 模块环境 | 已正常运行的 LSPosed 环境 |
| 作用域 | 微信，标准包名为 `com.tencent.mm` |
| 网络 | 文字转语音时需要访问接口服务 |
| API Key | 使用者从 Tiax 用户中心获取并自行配置 |

Wtonec 通过 DEX 匹配适配微信内部版本变化。微信升级、降级或热更新后，首次启动可能重新执行匹配。

## 安装与首次启动

1. 从 [Xposed 官方 Releases](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases) 下载 APK 并安装。
2. 打开 LSPosed，在模块列表中启用 Wtonec。
3. 进入模块作用域并勾选微信。
4. 从最近任务划掉微信；必要时在系统应用信息中结束微信进程。
5. 重新打开微信，等待首次 DEX 匹配完成。
6. 进入私聊或群聊，将输入区切换到语音模式。
7. 长按输入栏中的微信语音按钮，确认 Wtonec 面板出现。
8. 打开面板“设置”，填写自己的 Tiax API Key 并保存。

DEX 匹配成功后，后续冷启动会回读缓存。完整安装检查见 [GETTING_STARTED.md](docs/GETTING_STARTED.md)。

## 三种语音工作流

### 预设音色

在“预设”页输入不超过 500 字的文本，搜索并选择音色，然后试听、生成或生成并发送。接口价格、音色数量和服务状态以 [实时接口详情](https://www.tiax.pw/api_details.php?id=7) 为准。

### 克隆音色

在“克隆”页添加 Fish Audio 音色 ID 和显示名称。Wtonec 会保存多个自定义条目，生成时通过 `kl` 参数选择对应音色。

### 本地语音包

在“语音包”页通过 Android 系统文件选择器导入 MP3。单个导入文件上限为 20 MiB；导入完成后，Wtonec 保存 MP3、微信语音数据和索引。重要音频可通过导出功能另存为 MP3。

完整操作见 [USAGE.md](docs/USAGE.md)。

## 数据目录

标准微信对应的 Wtonec 主目录为：

```text
/storage/emulated/0/Android/data/com.tencent.mm/Wtonec/
```

确认存在的主要目录如下：

| 目录 | 用途 |
|---|---|
| `wtonec/voices/` | 已保存或导入的 MP3 与微信语音数据 |
| `wtonec/metadata/` | 音色目录、自定义音色和语音包索引 |
| `dex_cache/` | 微信版本指纹、DEX 匹配结果和诊断摘要 |
| `logs/` | `Wtonec-yyyy-MM-dd.log` 运行日志 |
| `crashes/` | Java 与 native 崩溃诊断文件 |

生成任务缓存位于：

```text
/storage/emulated/0/Android/data/com.tencent.mm/cache/Wtonec/wtonec-jobs/
```

Android 11 及以上版本会限制普通文件管理器访问 `Android/data`。日常管理优先使用应用内导入、导出、日志和清理功能。精确文件类型、备份顺序、ADB 示例和清理影响见 [STORAGE.md](docs/STORAGE.md)。

## API Key 与隐私

生成语音时，输入文字 `msg`、预设音色 `ys` 或克隆音色 `kl`，以及 `apikey` 会发送到 Tiax 接口。API Key 使用 Android Keystore 支持的 AES/GCM 加密后保存，不写入上述外部数据目录。

日志、语音索引和崩溃信息可能包含文本预览、音色名称、文件路径、微信版本和功能阶段。分享诊断材料前，应遮盖 API Key、账号、联系人、会话标识、输入文字和本地路径。详见 [PRIVACY.md](docs/PRIVACY.md)。

## 安全页状态

当前安全页展示状态模型和扩展接口。Hook 环境、模块清单、进程信号、权限和数据访问风险等扫描执行逻辑处于后续开发阶段，页面不生成虚假的模块列表、安全评分或风险结论。

## Release 与文件校验

当前公开版本：[Wtonec v1.1.0 (669)](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/tag/v1.1.0)

- 文件：`Wtonec-v1.1.0-vc669-standard-universal-release-hardened.apk`
- applicationId：`dev.wtonec`
- versionCode：`669`
- ABI：`arm64-v8a`、`armeabi-v7a`
- APK SHA-256：`8EFB69EBC682ABBB7EF16282AA0726C0F5D49ECF53246E1C0D8DC214820B9348`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`
- 项目归档：[tianxing226/wtonec v1.1.0](https://github.com/tianxing226/wtonec/releases/tag/v1.1.0)

Windows 校验命令：

```powershell
Get-FileHash .\Wtonec-v1.1.0-vc669-standard-universal-release-hardened.apk -Algorithm SHA256
```

## 实机界面

<p>
  <img src="assets/wtonec-home.jpg" alt="Wtonec 主页：模块和语音功能状态" width="230">
  <img src="assets/wtonec-settings.jpg" alt="Wtonec 设置页：宿主、DEX 缓存和模块选项" width="230">
  <img src="assets/wtonec-security.jpg" alt="Wtonec 安全页：扫描框架开发状态" width="230">
  <img src="assets/wtonec-about.jpg" alt="Wtonec 关于页：版本、说明和构建信息" width="230">
</p>

## 获取帮助

- 安装、激活和首次 DEX：[GETTING_STARTED.md](docs/GETTING_STARTED.md)
- API Key 获取与配置：[API_KEY.md](docs/API_KEY.md)
- 功能使用：[USAGE.md](docs/USAGE.md)
- 数据、备份与清理：[STORAGE.md](docs/STORAGE.md)
- 故障排查：[TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)
- 使用说明与责任边界：[DISCLAIMER.md](docs/DISCLAIMER.md)
- 公开样例边界：[PUBLIC_SOURCE_SCOPE.md](docs/PUBLIC_SOURCE_SCOPE.md)
- Xposed 官方仓库：[XPOSED_REPOSITORY.md](docs/XPOSED_REPOSITORY.md)
