# API Key 获取与配置

## 哪些功能需要 Key

| 功能 | 需要 Key |
|---|---|
| Fish Audio 预设与克隆音色 | 是 |
| 轻颜免费音色 | 是 |
| Android 系统 TTS | 否 |
| 本地语音包 | 否 |

## 获取 Key

1. 打开 [Tiax 官网](https://www.tiax.pw/) 并注册。
2. 登录 [Tiax 用户中心](https://www.tiax.pw/user/)。
3. 在 API 密钥管理区域获取自己的 Key。
4. 查看接口状态、余额和调用记录。

## 保存到 Wtonec

1. 在微信聊天页长按语音按钮。
2. 打开 Wtonec“设置”。
3. 填写 `Tiax API Key` 并保存。

Key 由 Android Keystore 支持的 AES/GCM 加密后保存，不写入语音目录、日志或公开仓库。

## 常见问题

- 提示未配置：重新保存 Key，并完整重启微信。
- 在线生成失败：检查网络、接口状态、余额、文字长度和音色参数。
- 克隆失败：确认 Fish Audio 音色 ID 没有多余空格。
- 系统 TTS 异常：与 Key 无关，请检查系统默认语音引擎和语言数据。

截图、日志和问题反馈中请遮盖 Key。
