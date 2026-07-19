# Wtonec

Wtonec 是用于微信 `com.tencent.mm` 的 Android LSPosed/Xposed 语音模块。进入聊天页后，长按微信语音按钮即可打开语音面板。

> 官网：[tianxing226.github.io/wtonec](https://tianxing226.github.io/wtonec/)<br>
> 下载：[Xposed 官方 Releases](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases)

## 快速开始

1. 下载并安装最新的 Hardened Universal APK。
2. 在 LSPosed 中启用 Wtonec，并勾选微信 `com.tencent.mm`。
3. 完全结束微信进程后重新打开；首次启动按提示完成 DEX 匹配，再重启一次微信。
4. 进入私聊或群聊，将输入栏切换到语音模式，长按微信语音按钮打开 Wtonec。
5. 输入文字，选择语音来源，试听或直接发送到当前聊天。

## 语音来源

| 来源 | 用途 | 是否需要 Tiax API Key |
|---|---|---|
| Fish Audio | 预设音色、试听和克隆音色 | 是 |
| 轻颜免费 | 在线音色生成 | 是 |
| 系统 TTS | 使用 Android 当前默认语音引擎 | 否 |
| 本地语音包 | 导入、保存、试听和发送 MP3 | 否 |

Key 获取：访问 [Tiax 官网](https://www.tiax.pw/) 注册并登录 [Tiax 用户中心](https://www.tiax.pw/user/)，然后在 Wtonec“设置”中保存自己的 Key。系统 TTS 与本地语音包不读取 Key。

## 主要功能

- Fish Audio 预设、试听、收藏和自定义音色 ID。
- 轻颜免费音色与 Android 系统 TTS。
- 文本模板、语气标签、语速和音调调节。
- 本地语音包导入、保存、重命名、导出和发送。
- 将收到的微信语音保存到 Wtonec 语音包。
- 液态玻璃、Miuix 浅色和 AMOLED 深色面板。
- DEX 缓存适配、运行日志和本地安全证据扫描。

安全扫描只读取设备当前可见的本地证据，结果受 Android 权限、Root 状态和 LSPosed 可见性影响；报告保存在用户选择的位置，不上传扫描数据。

## 当前版本

- 版本：`1.3.2`（`673`）
- applicationId：`dev.wtonec`
- 文件：`Wtonec-v1.3.2-vc673-standard-universal-release-hardened.apk`
- ABI：`arm64-v8a`、`armeabi-v7a`
- SHA-256：`6DEB493E4B18CF9540569E69C53BDD8C44843A86EB2A5483A95E6E722222A212`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

Windows 校验：

```powershell
Get-FileHash .\Wtonec-v1.3.2-vc673-standard-universal-release-hardened.apk -Algorithm SHA256
```

## 文档

- [安装与首次启动](docs/GETTING_STARTED.md)
- [功能使用](docs/USAGE.md)
- [API Key](docs/API_KEY.md)
- [常见问题](docs/TROUBLESHOOTING.md)
- [数据目录](docs/STORAGE.md)
- [隐私说明](docs/PRIVACY.md)
- [使用说明](docs/DISCLAIMER.md)

本公开仓库仅提供项目介绍、使用文档、截图和独立样例。正式模块的 Hook、DEX、音频发送、JNI/Rust 与加固实现不在公开源码范围内。
