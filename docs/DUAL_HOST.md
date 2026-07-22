# 微信与 QQ 双宿主说明

Wtonec `1.5.4` 使用一个 `dev.wtonec` APK，同时声明：

```text
com.tencent.mm
com.tencent.mobileqq
```

## 架构

宿主无关层负责音色、TTS、在线/本地语音包、下载、音频处理、面板和任务状态；微信与 QQ 各自实现会话捕获、入口、DEX 和语音发送器。

```text
共享语音与 UI
├── 微信 Host Adapter
│   ├── ChatFooter / 当前会话
│   ├── 微信 WT 与长按入口
│   └── 微信语音发送链
└── QQ Host Adapter
    ├── AIO / Contact / UID-UIN
    ├── QQ WT 与协作式语音入口
    └── QQ NT PTT 发送链
```

## WT 入口

- 微信与 QQ 使用同一套聊天页 WT 浮动入口控制器。
- 入口挂载到当前聊天 Activity 的 `android.R.id.content`，不申请系统悬浮窗权限。
- 两个宿主分别保存开关与拖动位置。
- Activity、AIO 或会话结束时清理入口和弱引用。
- 打开面板前再次验证当前会话，降低生成期间切换聊天造成的误发风险。

## QQ NT PTT

QQ 发送链执行：

```text
会话校验
-> Tencent SILK 检查
-> nonce 去重
-> PTT 原子暂存
-> createPttElement
-> sendMsg
-> callback / timeout
```

发送成功状态由回调驱动，而不是只根据反射方法返回。暂存文件在 ACK 后继续保留一段时间，供 QQ 媒体线程读取。

## 共享配置与语音库

- API Key 由模块 UID 的 canonical Keystore store 持有。
- 微信和 QQ 经 UID、包名和签名检查后访问 Bridge。
- 语音包 canonical 索引按 SILK SHA-256 去重。
- 每个宿主仍保留自己的可读副本、DEX 缓存和故障日志。
- Bridge 暂时断开时保留本地功能和最后有效缓存。

## 当前验证状态

- `REPRODUCED(static)`：双 scope、Host Adapter、会话校验、nonce、PTT 暂存、回调状态机、共享目录契约、单元测试和 APK 审计。
- `PENDING_DEVICE`：真实 QQ NT 的 QRoute/Contact 兼容、私聊/群聊气泡、播放、对端接收、双宿主 Bridge、入口生命周期和截图效果。

反馈 QQ 问题时请提供 QQ 版本、versionCode、Android、LSPosed、会话类型、日志时间段和对端接收结果，并遮盖账号和会话数据。

