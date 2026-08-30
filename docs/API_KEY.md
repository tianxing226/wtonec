# API Key 获取与配置

## 哪些功能需要 Key

| 功能 | 需要 Tiax API Key |
|---|---|
| Fish Audio 预设与克隆音色 | 是 |
| 轻颜音色 | 是 |
| ElevenLabs 文字转语音与克隆音色 | 是（Tiax 账户配额） |
| Android 系统 TTS | 否 |
| 本地/共享语音包 | 否 |
| 公开在线语音样例 | 否 |

安全页的 AI 扫描使用独立的第三方配置，不复用 Tiax Key：可填写 OpenAI-compatible API 地址、API Key 和模型名称，也可从兼容的 `/v1/models` 端点发现模型。

## 获取 Key

1. 打开 [Tiax 官网](https://www.tiax.pw/) 并注册。
2. 登录 [Tiax 用户中心](https://www.tiax.pw/user/)。
3. 在 API 密钥管理区域获取自己的 Key。
4. 查看接口状态、余额、价格和调用记录。

## 配置第三方 AI 接口

1. 打开 Wtonec“安全”页，进入 AI 扫描配置。
2. 填写兼容接口的基础地址，例如 `https://api.example.com/v1`，再填写自己的 Key。
3. 点击获取模型，选择用于本地扫描的模型并保存。
4. 开始扫描后，模块仅发送当前设备的模块、宿主和本地配置摘要；报告保存在设备本地。

地址、Key 和模型与 Tiax 配置分开保存。Key 使用 Android Keystore 加密密文封装，不写入公开导出 JSON 或日志；示例统一使用 `https://api.example.com/v1`、`YOUR_AI_API_KEY` 和 `MODEL_ID`。

## 保存到 Wtonec

1. 打开 Wtonec 独立应用，或从微信/QQ 语音面板进入“设置”。
2. 填写 `Tiax API Key` 并保存。
3. 返回目标宿主重新打开语音面板。

当前版本由模块 UID 的 canonical store 保存共享 Key：

- Android Keystore 别名由模块持有。
- 明文使用 AES/GCM 加密后保存。
- 微信和 QQ 经 UID、包名和签名检查后访问。
- Bridge 断开时使用有时限的宿主加密缓存。
- 系统 TTS 路径不读取 Key。

## 常见问题

- 提示未配置：重新保存 Key，再完整重启当前宿主。
- 微信可用而 QQ 未同步：在设置页保存一次 canonical 快照，关闭并重启两个宿主；检查配置 revision 和失效通知状态。
- 在线生成失败：检查网络、接口状态、余额、文字长度和音色参数。
- 克隆失败：确认 Fish Audio 音色 ID 没有多余空格。
- 系统 TTS 异常：检查系统默认语音引擎和语言数据。

示例统一使用 `YOUR_API_KEY`。截图、日志和问题反馈中请遮盖真实 Key。
