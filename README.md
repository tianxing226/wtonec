# Wtonec

Wtonec 是用于微信 `com.tencent.mm` 的 Android LSPosed/Xposed 语音模块。进入微信聊天页面后，长按微信语音按钮即可打开 Wtonec 语音面板。

- 官网：[tianxing226.github.io/wtonec](https://tianxing226.github.io/wtonec/)
- 项目仓库：[tianxing226/wtonec](https://github.com/tianxing226/wtonec)
- LSPosed 模块仓库：[Xposed-Modules-Repo/dev.wtonec](https://github.com/Xposed-Modules-Repo/dev.wtonec)
- 下载：[Xposed 官方 Releases](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases)

## 安装使用

1. 下载并安装最新的 `Standard Universal Hardened Release`。
2. 在 LSPosed 中启用 Wtonec，并勾选微信 `com.tencent.mm`。
3. 完全结束微信进程后重新打开。
4. 首次运行按提示完成 DEX 匹配，然后再次重启微信。
5. 进入私聊或群聊，将输入栏切换到语音模式。
6. 长按微信语音按钮打开 Wtonec，选择语音来源后试听、保存或发送。

## API Key

Fish Audio、轻颜语音和克隆音色需要用户自己的 Tiax API Key：

1. 访问 [Tiax 官网](https://www.tiax.pw/) 注册账号。
2. 登录 [Tiax 用户中心](https://www.tiax.pw/user/) 获取 Key。
3. 在 Wtonec“设置”中填写并保存 Key。

Android 系统 TTS、本地语音包和匿名在线语音包不读取 Tiax Key。

## 主要功能

- Fish Audio 预设音色、试听、收藏和自定义音色 ID。
- 轻颜免费音色与 Android 系统默认 TTS。
- 本地语音包导入、试听、重命名、分类、导出和发送。
- 将收到的微信语音保存到 Wtonec 语音包。
- 在线语音包搜索、试听、保存、直接发送和下载任务管理。
- 文本模板、语气标签、语速和音调调节。
- 液态玻璃、Miuix 浅色和 AMOLED 深色面板。
- DEX 缓存适配、运行日志和本地安全证据扫描。

在线内容由对应来源实时提供；单个来源临时失效时，本地语音、系统 TTS 和其他语音功能仍可继续使用。


## 当前版本

- 版本：`1.4.0`（`675`）
- applicationId：`dev.wtonec`
- 文件：`Wtonec-v1.4.0-vc675-standard-universal-release-hardened.apk`
- ABI：`arm64-v8a`、`armeabi-v7a`
- SHA-256：`91A00C20C935E1B0C1257AA401E5BA4FEB67BE25028112111432C757D89CC12B`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

Windows 校验：

```powershell
Get-FileHash .\Wtonec-v1.4.0-vc675-standard-universal-release-hardened.apk -Algorithm SHA256
```

## 文档

- [安装与首次启动](docs/GETTING_STARTED.md)
- [功能使用](docs/USAGE.md)
- [API Key](docs/API_KEY.md)
- [常见问题](docs/TROUBLESHOOTING.md)
- [数据目录](docs/STORAGE.md)
- [隐私说明](docs/PRIVACY.md)
- [使用说明](docs/DISCLAIMER.md)

本公共仓库只提供项目介绍、使用文档、实机截图和 Release 安装包。正式模块的 Hook、DEX、音频发送、JNI/Rust 及加固实现不在公共源码范围内。
