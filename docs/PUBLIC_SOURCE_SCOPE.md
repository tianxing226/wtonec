# 公开样例范围

## 仓库定位

`tianxing226/wtonec` 是 Wtonec 的主项目资料仓库；`Xposed-Modules-Repo/dev.wtonec` 是官方模块收录与 APK 分发仓库。公开内容包括功能介绍页、使用文档、实机截图、Release 和少量独立 Kotlin 样例。

仓库根目录当前没有 `LICENSE` 或 `NOTICE` 文件。公开样例为重新整理的独立实现，没有复制第三方项目代码，也没有新增第三方依赖。

## 公开内容

- `PublicVoiceMode.kt`：预设、克隆和本地语音包模式枚举。
- `PublicVoiceModels.kt`：简化音色、语音包、请求和生成状态模型。
- `TiaxRequestExample.kt`：使用 `android.net.Uri.Builder` 展示 `msg / ys / kl / apikey` 参数关系。
- `VoiceWorkflowContract.kt`：输入、生成、试听、保存和发送接口定义。
- `docs/`：安装、Key、使用、存储、隐私和问题排查文档。
- `assets/`：已公开的 Wtonec 实机页面截图。
- 静态功能介绍页及 Pages 工作流。

公开 Kotlin 样例共 4 个文件，目标总行数低于 300 行，每个文件低于 100 行。样例只描述公开数据形态和调用契约，不构成可安装模块或完整 SDK。

## 保留私有

- LSPosed/Xposed 入口、模块加载与 Hook 实现。
- 微信语音按钮监听、长按入口和当前会话定位。
- DexKit matcher、fingerprint、描述符、缓存实现和微信内部标识。
- 微信消息、数据库、内部服务和发送协议适配。
- MP3 解码、微信语音编码、JNI、Rust、native 导出和音频目录定位。
- Activity 代理、SAF 回调、Overlay 与宿主窗口生命周期实现。
- API Key 加密实现、Keystore 标识、配置键和迁移逻辑。
- Release 签名、证书校验、R8 mapping、字符串保护、完整性校验和加固配置。
- 崩溃报告、运行日志、缓存、构建产物、密钥库、本机配置和用户数据。

## 发布门禁

- 真实 API Key、Token、私钥、KeyStore、mapping 和日志扫描命中数为零。
- 公开 Kotlin 不引用 Xposed、DexKit、JNI、Rust、微信内部类或私有存储键。
- 示例统一使用 `YOUR_API_KEY`、`VOICE_ID`、`TEXT` 等占位值。
- APK 只作为 GitHub Release 二进制资产发布，不进入仓库提交。
- 网站、文档和样例以 Wtonec 作为唯一项目身份。
