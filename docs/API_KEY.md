# API Key 获取与配置

## 哪些功能需要 Key

| 功能 | 需要 Tiax API Key |
|---|---|
| Fish Audio 预设与克隆音色 | 是 |
| 轻颜音色 | 是 |
| Android 系统 TTS | 否 |
| 本地/共享语音包 | 否 |
| 公开在线语音样例 | 否 |

## 获取 Key

1. 打开 [Tiax 官网](https://www.tiax.pw/) 并注册。
2. 登录 [Tiax 用户中心](https://www.tiax.pw/user/)。
3. 在 API 密钥管理区域获取自己的 Key。
4. 查看接口状态、余额、价格和调用记录。

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
- 微信可用而 QQ 未同步：先打开 Wtonec 独立应用，再重启 QQ 检查 Bridge 状态。
- 在线生成失败：检查网络、接口状态、余额、文字长度和音色参数。
- 克隆失败：确认 Fish Audio 音色 ID 没有多余空格。
- 系统 TTS 异常：检查系统默认语音引擎和语言数据。

示例统一使用 `YOUR_API_KEY`。截图、日志和问题反馈中请遮盖真实 Key。
