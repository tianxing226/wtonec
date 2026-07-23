# Wtonec

Wtonec 是一个面向微信与 QQ 的 Android LSPosed/Xposed 双宿主语音模块。单个 APK 同时声明微信 `com.tencent.mm` 和 QQ `com.tencent.mobileqq` 作用域，在聊天页面提供悬浮球和语音面板。

## 当前版本

- 版本：`1.5.11`
- versionCode：`687`
- applicationId：`dev.wtonec`
- 主推 APK：`Wtonec-v1.5.11-vc687-standard-universal-dual-host-release-hardened.apk`
- 兼容 APK：`Wtonec-v1.5.11-vc687-legacy-universal-dual-host-release-hardened.apk`
- ABI：`arm64-v8a`、`armeabi-v7a`
- minSdk / targetSdk：`28 / 37`
- Standard APK SHA-256：`C159214381A0572105A0491E2F5E3B74E954E3F3A23D0D1030759E1E165A19B7`
- Legacy APK SHA-256：`33E63109A79E38FCB782DF6BAB369541950F27AC08EE257110EB30141C4FB91C`
- Release 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

v1.5.11 直接使用已审计的 Standard/Legacy Hardened APK；本次 GitHub 发布过程不重新构建、不运行 Gradle/Cargo 测试。既有交付报告记录单元测试、Lint、签名、zipalign 和 APK 审计结果；目标设备上的宿主行为仍以实际装机为准。

## 主要功能

- **微信模块**：微信聊天页悬浮球、语音模式长按入口、预设/克隆/语音包/设置面板。
- **QQ 模块**：QQ NT 聊天页悬浮球、QQ 语音发送链、私聊和群聊适配框架。
- Fish Audio 预设音色、克隆音色 ID、轻颜音色和 Android 系统 TTS。
- 文字转语音、试听、生成、保存、生成并发送。
- 本地语音包导入、搜索、排序、试听、重命名、导出、删除和发送。
- 在线语音目录、下载、缓存、取消、重试、试听和发送。
- MP3/其他音频本地解码、Tencent SILK 兼容编码和宿主语音发送。
- API Key 加密保存、共享配置 Bridge、DEX 缓存、运行日志和本地安全证据页。
- 液态玻璃、Miuix 浅色和 AMOLED 深色面板。

## 安装与激活

1. 从 [项目 Release](https://github.com/tianxing226/wtonec/releases) 或 [Xposed 官方 Release](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases) 下载 APK。
2. 在 LSPosed 中启用 Wtonec。
3. 根据使用目标勾选作用域：
   - 微信：`com.tencent.mm`
   - QQ：`com.tencent.mobileqq`
4. 完全结束对应的微信或 QQ 进程后重新启动。
5. 首次启动按提示完成对应宿主的 DEX 匹配，再完整重启一次宿主。
6. 进入私聊或群聊，点击悬浮球或使用宿主语音入口打开面板。

微信和 QQ 的 Hook、DEX 缓存、会话状态和宿主目录分别隔离。只使用微信时可以只勾选微信作用域，只使用 QQ 时可以只勾选 QQ 作用域。

## API Key

Fish Audio、轻颜和克隆音色需要自己的 Tiax API Key：

1. 访问 [Tiax 官网](https://www.tiax.pw/) 注册账号。
2. 登录 [Tiax 用户中心](https://www.tiax.pw/user/) 获取 API Key。
3. 在 Wtonec 设置页填写并保存。
4. 微信和 QQ 通过受控的加密配置 Bridge 使用同一份 Key；Bridge 不可用时使用本地加密缓存。

系统 TTS、本地语音包和公开在线样例不读取 Tiax Key。文档、截图和日志中统一使用 `YOUR_API_KEY`，请勿提交真实 Key。

## 使用流程

### 微信模块

进入微信聊天页，将输入栏切换到语音模式，长按微信语音按钮，或点击悬浮球打开面板。确认面板顶部显示正确的当前会话后，再试听、生成或发送。

### QQ 模块

进入 QQ NT 私聊或群聊，点击悬浮球，或使用已适配的 QQ 语音入口打开面板。发送前确认当前 QQ 会话和账号信息。QQ 版本差异可能影响 AIO、Contact、回调和语音气泡行为，实际兼容性以目标设备验证结果为准。

### 音频格式

接口返回 MP3 或其他音频后，Wtonec 在本地完成解码、单声道处理、24 kHz 重采样和 Tencent SILK 编码，再交给微信或 QQ 的正常语音发送链。直接修改文件扩展名不构成兼容格式转换。

## 数据目录

宿主副本按包名分开：

```text
/storage/emulated/0/Android/data/com.tencent.mm/Wtonec/
/storage/emulated/0/Android/data/com.tencent.mobileqq/Wtonec/
```

语音包、索引、日志、崩溃诊断、DEX 缓存和任务缓存的详细说明见 [数据目录、备份与清理](docs/STORAGE.md)。模块还维护受签名保护的 canonical 语音库，通过 PFD/Binder 与两个宿主同步。

## 文档

- [文档导航](docs/README.md)
- [安装与首次启动](docs/GETTING_STARTED.md)
- [双宿主说明](docs/DUAL_HOST.md)
- [功能使用](docs/USAGE.md)
- [API Key](docs/API_KEY.md)
- [数据目录](docs/STORAGE.md)
- [隐私说明](docs/PRIVACY.md)
- [常见问题](docs/TROUBLESHOOTING.md)
- [Release v1.5.11](docs/RELEASE_1.5.11.md)
- [免责声明](docs/DISCLAIMER.md)
- [Xposed 官方仓库与版本规则](docs/XPOSED_REPOSITORY.md)
- [公开样例范围](docs/PUBLIC_SOURCE_SCOPE.md)

## 项目入口

- 项目仓库：[tianxing226/wtonec](https://github.com/tianxing226/wtonec)
- Xposed 官方模块仓库：[Xposed-Modules-Repo/dev.wtonec](https://github.com/Xposed-Modules-Repo/dev.wtonec)
- GitHub Pages：[tianxing226.github.io/wtonec](https://tianxing226.github.io/wtonec/)
- 官网：[tiax.pw](https://www.tiax.pw/)

## 公开范围

公共仓库提供项目介绍、使用文档、截图、静态网站、少量独立 Kotlin 样例和 Release APK。正式 Hook、DEX matcher、微信/QQ 内部调用、编解码、JNI/Rust、Bridge、签名和加固实现保留在私有工程。

## 免责声明

Wtonec 仅供学习、研究与技术交流使用。使用者应遵守所在地法律法规、软件平台规则及第三方服务条款，并自行承担安装、配置、升级、内容来源和使用行为产生的责任。

本项目与微信、QQ、腾讯、LSPosed、Fish Audio、Tiax 及其他内容来源不存在隶属、合作、官方授权或背书关系，相关名称与商标归各权利主体所有。严禁用于侵犯隐私、传播侵权内容、欺诈、骚扰、批量滥用、干扰平台服务或其他违法用途。第三方接口、内容许可、价格和可用性以对应服务方规则为准。详细内容见 [使用说明与责任边界](docs/DISCLAIMER.md)。

## 反馈与隐私

反馈前请遮盖 API Key、Token、签名 URL、微信/QQ 账号、联系人、会话标识、输入文字和本地路径。Wtonec 不自动上传日志、安全扫描报告或本地语音包。
