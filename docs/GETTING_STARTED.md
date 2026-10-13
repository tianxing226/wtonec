# 安装与首次使用

Wtonec 可以在微信、QQ、小红书和抖音聊天中使用文字转语音、语音包和表情包。

## 安装条件

- Android 9 及以上，ARM64 / ARMv7 设备。
- 已安装并能正常使用 LSPosed/Xposed。
- 使用标准版微信、QQ、小红书或抖音；[适配版本与包名](DUAL_HOST.md)。

## 安装步骤

1. 从 [GitHub](https://github.com/tianxing226/wtonec/releases/latest) 或 [Xposed 仓库](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/latest) 下载 `Wtonec-1.7.5-707-universal.apk` 并安装。
2. 打开模块管理器，启用新版 Wtonec。
3. 在作用域中勾选需要使用的应用：微信、QQ、小红书、抖音，可以按需选择。
4. 完全关闭所选应用后重新打开。
5. 如果出现适配匹配提示，按页面说明完成匹配，再重启对应应用。

**升级提示：**从 1.7.4（`dev.wtonec.final`）升级可直接覆盖安装，保留原有设置和素材，无需卸载。更早的不同包名版本请先导出重要语音，再启用新版、停用旧模块。

## 第一次使用

**抖音、小红书必须先在 Wtonec「设置」页面开启对应应用的悬浮窗入口，才能在聊天页点击悬浮球使用。**

1. 进入私聊或群聊，点击 Wtonec 悬浮球打开面板。微信也可切换到语音输入后长按语音按钮。
2. 确认面板对应当前聊天，选择音色并输入文字。
3. 在线音色如提示需要 Key，先到“设置”保存自己的 [API Key](API_KEY.md)。
4. 先试听，确认后保存或发送。

**所有音色和功能均免费，无需充值。** 系统 TTS、本地语音包不需要 Tiax API Key；在线生成、克隆和在线素材需要可用网络。

## 更新以后

重新检查模块作用域，并完全关闭、重启已启用的应用。若应用本身更新后出现适配提示，重新完成匹配。

[完整教程](http://i8c.cn/VpGwB) · [功能说明](USAGE.md) · [常见问题](TROUBLESHOOTING.md)
