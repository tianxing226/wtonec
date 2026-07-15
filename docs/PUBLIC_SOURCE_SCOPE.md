# 公开源码范围

## 审计结论

本仓库只公开功能介绍页、文档、实机截图和少量重新整理的 Kotlin 示例。公开样例与私有应用实现相互独立，仅描述通用数据形态与调用契约。

发布检查时，仓库根目录未发现现有 `LICENSE` 或 `NOTICE` 文件。本次没有从第三方项目复制实现，也没有引入新的第三方依赖或授权文本。

## 本次允许公开

- `PublicVoiceMode.kt`：预设、克隆和本地语音包模式枚举。
- `PublicVoiceModels.kt`：简化的音色、语音包、请求和生成状态模型。
- `TiaxRequestExample.kt`：使用 `android.net.Uri.Builder` 展示 `msg / ys / kl / apikey` 参数关系。
- `VoiceWorkflowContract.kt`：输入、生成、试听、保存和发送的接口定义。
- `docs/`：安装、Key、使用、隐私和边界说明。
- `assets/`：已公开的 Wtonec 实机页面截图。
- 静态功能介绍页及 Pages 工作流。

## 明确保留私有

- Xposed、LSPosed、libxposed 入口与模块加载链。
- 微信语音按钮 Hook、长按监听、当前会话定位和语音发送实现。
- DexKit matcher、fingerprint、缓存、描述符和微信内部类信息。
- 微信数据库操作、内部服务调用和消息协议适配。
- MP3 解码、SILK 编码、JNI、Rust、native 导出和音频目录定位。
- Activity 代理、SAF 回调、Overlay 和宿主窗口生命周期实现。
- API Key 加密、Keystore 别名、私有存储键和迁移逻辑。
- Release 签名、证书校验、R8 mapping、字符串保护、完整性校验和加固配置。
- 崩溃报告、运行日志、缓存、构建产物、密钥库、本机路径和用户数据。

## 发布门禁

- 公开 Kotlin 文件不超过 4 个，每个文件不超过 100 行，总计不超过 300 行。
- 真实 API Key、Token、证书私钥、KeyStore、mapping 和日志扫描命中数为零。
- 公开样例不引用 Xposed、DexKit、JNI、Rust、微信内部类或私有存储键。
- 示例只使用 `YOUR_API_KEY`、`VOICE_ID`、`TEXT` 等占位值。
- APK 仅作为 GitHub Release 二进制产物发布，不进入源码提交。


