# Wtonec v1.6.9（698）发布说明

Wtonec v1.6.9 面向 Android 15 / LSPosed，继续使用单 APK 覆盖微信与 QQ 两个宿主：

```text
微信：com.tencent.mm
QQ：com.tencent.mobileqq
```

## 构建身份

- versionName：`1.6.9`
- versionCode：`698`
- applicationId：`dev.wtonec`
- Xposed Tag：`698-1.6.9`
- ABI：`arm64-v8a`、`armeabi-v7a`
- minSdk / targetSdk：`28 / 37`
- 变体：`standardRelease`

## Release APK

| 文件 | 大小 | SHA-256 |
|---|---:|---|
| `Wtonec-v1.6.9-vc698-standard-universal-dual-host-release-hardened.apk` | 13,973,520 bytes | `2FDFD019D603234A1049077D95BE248BD27503CAF72BE5D7258624267A782A26` |

签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

下载入口：

- [项目 Release](https://github.com/tianxing226/wtonec/releases/tag/v1.6.9)
- [Xposed 官方 Release](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/tag/698-1.6.9)

## 本次更新

- 液态玻璃面板改为背景采样、模糊、surface tint、描边、高光和局部 acrylic 分层；硬件 Canvas 与软件 Canvas 使用一致布局和主题 token，避免根节点透明导致宿主内容穿透。
- 统一 canonical 配置快照携带 `schemaVersion`、`revision`、`updatedAt` 与 `operationId`，采用临时文件、flush/fsync、原子替换和 read-back 校验；微信与 QQ 通过失效通知主动拉取完整快照。
- 面板风格由同一 `ThemeSnapshot` 驱动，跨宿主主题 revision、ACK 和缓存迁移路径保持一致。
- Fish Audio 目录更新到 296 项，新增 291–305 号音色；轻颜免费、系统 TTS、MiniMax 隐藏快捷方括号语气控件，MiniMax emotion 参数保持独立并显示参考价 0.2 元/次。
- 新增 ElevenLabs 文字转语音区域与音色管理；收到的微信/QQ 语音可从长按菜单进入 ElevenLabs 克隆流程，返回 Voice ID 后写入本地列表。
- 安全页支持 OpenAI-compatible/第三方 API 地址、Key 和模型发现配置；凭据与 Tiax Key 分离并由 Android Keystore 加密保存。
- 直连源站网络路径清理旧 CDN 过滤分支，保留 HTTPS、超时、错误分类和本地诊断；聊天入口增加重绑与会话校验保护。
- 保留微信和 QQ 的私聊、群聊适配框架、生成、试听、保存和发送链路；当前宿主兼容性继续以设备矩阵为准。

## 验证摘要

- 单元测试：`195 suites / 796 tests / 0 failures / 0 errors / 0 skipped`。
- Lint：`73 warnings / 0 errors`。
- R8：`1,648` 个第一方类中 `1,615` 个重命名，重命名比例 `97.9976%`；发布包开启 minify、资源压缩和 full mode。
- APK：AAPT2 badging、zipalign、APK Signature Scheme v3、DEX、资源、native 和敏感字符串静态审计通过。
- 两台 MuMu Android 15（`127.0.0.1:5555`、`127.0.0.1:16384`）已安装当前 APK，设备端 SHA-256 与上表一致；两台实例均检测到微信。

## 设备证据边界

本次门禁为 `PASS_STATIC_PENDING_DEVICE`。两台设备均未安装 QQ 包，因此 QQ NT 私聊/群聊入口、跨宿主同步 ACK、真实生成/试听/发送/回放和复杂背景截图矩阵保留为 `PENDING_DEVICE`。静态测试和安装校验不替代这些宿主运行时证据。

## 安装步骤

1. 下载上表中的 Standard Universal Hardened APK，并核对 SHA-256。
2. 在 LSPosed 启用 `dev.wtonec`，按需勾选 `com.tencent.mm` 和 `com.tencent.mobileqq`。
3. 完全结束已启用的宿主进程，再重新启动；宿主升级后按提示重新匹配 DEX。
4. 在聊天页打开悬浮球或语音入口，确认面板顶部显示当前宿主和会话。

公有仓库只提供文档、静态网站、独立样例和 Release APK；完整 Hook、DEX、Bridge、JNI/Rust、签名和加固实现位于私有工程。
