# 安装与首次启动

## 准备

- Android 9（API 28）及以上。
- LSPosed 已正常安装。
- 微信标准包名为 `com.tencent.mm`。
- 从 [Xposed 官方 Releases](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases) 下载最新 Hardened Universal APK。

Fish Audio、轻颜和克隆音色需要网络及自己的 Tiax API Key；系统 TTS 与本地语音包无需 Key。

## 安装

1. 安装 APK。
2. 打开 LSPosed，在模块列表中启用 Wtonec。
3. 在作用域中勾选微信 `com.tencent.mm`。
4. 完全结束微信进程并重新打开。

## 首次 DEX 匹配

1. 出现 DEX 更新页后点击开始匹配。
2. 等待所有必需项目成功。
3. 完全结束微信并再次启动。
4. 确认后续冷启动可以直接读取缓存。

微信升级、降级或热更新后，Wtonec 可能重新匹配。匹配期间保持微信在前台。

## 打开语音面板

1. 进入私聊或群聊。
2. 将微信输入栏切换到语音模式。
3. 长按微信语音按钮。
4. 确认面板顶部显示的是当前聊天。

普通点击仍执行微信原有操作；长按用于打开 Wtonec。

## 首次生成

- 在线音色：在“设置”中保存自己的 Tiax API Key，再选择 Fish Audio 或轻颜。
- 系统 TTS：直接选择“系统 TTS”，无需 Key；可调整语速、音调或打开系统语音设置。
- 本地语音包：导入 MP3 后可直接试听、保存或发送。

## 更新

安装新版 APK 后重新结束并启动微信。升级前建议导出重要 MP3，并记录当前版本与 SHA-256。
