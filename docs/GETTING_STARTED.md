# 安装与首次启动

## 准备

- Android 9（API 28）及以上。
- LSPosed 已正常安装。
- 微信标准包名：`com.tencent.mm`。
- QQ 标准包名：`com.tencent.mobileqq`。
- 从 [Xposed 官方 Releases](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases) 下载最新 Standard Universal Hardened APK。

Fish Audio、轻颜和克隆音色需要网络及自己的 Tiax API Key；Android 系统 TTS、本地语音包和公开在线样例不读取该 Key。

## 安装与作用域

1. 安装 Wtonec APK。
2. 打开 LSPosed，在模块列表中启用 Wtonec。
3. 根据需要勾选一个或两个作用域：
   - 微信模块：`com.tencent.mm`
   - QQ 模块：`com.tencent.mobileqq`
4. 完全结束已勾选宿主的全部进程。
5. 重新打开微信或 QQ。

一个 APK 同时支持两个宿主。只使用微信时勾选微信即可，只使用 QQ 时勾选 QQ 即可。

## 首次 DEX 匹配

微信和 QQ 使用独立的 DEX 指纹与缓存：

1. 打开目标宿主。
2. 出现 DEX 更新页后开始匹配。
3. 等待对应宿主的必需项目完成。
4. 完全结束该宿主并再次启动。
5. 确认后续冷启动可以回读缓存。

宿主升级、降级、热更新或 split APK 发生变化后，Wtonec 会按新指纹重新匹配。匹配期间保持目标宿主在前台。

## 打开语音面板

### 微信

1. 进入私聊或群聊。
2. 将微信输入栏切换到语音模式。
3. 长按微信语音按钮，或点击已启用的悬浮球。
4. 确认面板顶部显示正确的微信会话。

### QQ

1. 进入 QQ NT 私聊或群聊。
2. 点击聊天页悬浮球，或使用已适配的 QQ 语音入口。
3. 确认面板顶部显示正确的 QQ 会话和账号。

QQ 的 AIO、Contact 和消息接口会随版本变化。当前 APK 已包含双宿主 scope 和 QQ 发送适配，具体版本的实际发送结果以真机验证为准。

## 首次生成

- Fish Audio/轻颜：在“设置”中保存自己的 Tiax API Key。
- 系统 TTS：直接选择“系统 TTS”，可调整语速、音调或打开系统语音设置。
- 本地语音包：导入受支持音频后即可试听、保存或发送。
- 在线语音包：选择来源、试听、下载、保存或直接发送；来源状态随对应站点变化。

## 更新

安装新版 APK 后，完整结束并重启已启用的每个宿主。升级前建议导出重要 MP3，并记录版本、versionCode、APK SHA-256 和签名证书摘要。
