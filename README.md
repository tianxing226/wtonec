# Wtonec

Wtonec 是面向 Android 微信聊天场景的语音工作台，提供文字转语音、Fish Audio 自定义音色、本地语音包管理，以及将生成结果发送到当前会话的完整体验。

> 本仓库公开功能介绍页、使用文档、实机截图和少量独立 Kotlin 样例。Hook、DEX 匹配、音频发送、编解码、JNI 与加固实现保留在私有工程中。

## 项目入口

- [功能介绍页](https://tianxing226.github.io/wtonec/)
- [项目文档](docs/README.md)
- [公开 Kotlin 样例](examples/android-kotlin/README.md)
- [版本发布](https://github.com/tianxing226/wtonec/releases)
- [Tiax API 服务](https://www.tiax.pw/)

## 主要功能

- **预设音色**：搜索和选择服务方提供的音色，输入文字后试听、生成或生成并发送。
- **克隆音色**：保存多个 Fish Audio 音色 ID，在生成时快速切换。
- **本地语音包**：导入、搜索、试听、重命名、删除、导出和发送常用音频。
- **微信内面板**：进入聊天页后长按语音按钮打开 Wtonec。
- **本地音频处理**：接口返回 MP3 后，由应用完成微信语音发送所需的后续处理。
- **配置与状态**：集中管理 API Key、DEX 缓存、模块状态和本地缓存。

## 快速开始

1. 从 [Releases](https://github.com/tianxing226/wtonec/releases) 获取 APK 并安装。
2. 在 LSPosed 中启用 Wtonec，并将微信加入模块作用域。
3. 完全结束微信进程后重新打开，首次启动等待 DEX 匹配完成。
4. 打开任意聊天，长按微信语音按钮进入 Wtonec 面板。
5. 在“设置”页填写自己的 API Key，然后选择音色并生成语音。

完整步骤见 [安装与首次启动](docs/GETTING_STARTED.md)、[API Key 配置](docs/API_KEY.md) 和 [使用教程](docs/USAGE.md)。

## 实机界面

<p>
  <img src="assets/wtonec-home.jpg" alt="Wtonec 主页：模块和语音功能状态" width="230">
  <img src="assets/wtonec-settings.jpg" alt="Wtonec 设置页：宿主、DEX 缓存和模块选项" width="230">
  <img src="assets/wtonec-security.jpg" alt="Wtonec 安全页：待开发的扫描框架状态" width="230">
  <img src="assets/wtonec-about.jpg" alt="Wtonec 关于页：版本、说明和构建信息" width="230">
</p>

图片依次为主页、设置、安全和关于页面。安全页当前展示接口框架与开发状态，不生成扫描结论。

## 公开代码范围

公开样例共 4 个 Kotlin 文件，只演示模式枚举、简化数据模型、请求参数互斥和工作流接口。它们不构成可安装模块，也不包含微信内部调用或核心实现。范围审计见 [PUBLIC_SOURCE_SCOPE.md](docs/PUBLIC_SOURCE_SCOPE.md)。

## 隐私提示

生成语音时，输入文字、所选音色参数和 API Key 会提交给接口服务方。请妥善管理自己的 Key，并阅读 [隐私说明](docs/PRIVACY.md)。接口价格、状态和服务规则以 [Tiax 当前页面](https://www.tiax.pw/api_details.php?id=7) 为准。

