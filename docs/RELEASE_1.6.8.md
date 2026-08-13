# Wtonec v1.6.8（697）发布说明

Wtonec v1.6.8 面向 Android 15 / LSPosed，继续使用单 APK 覆盖微信与 QQ 两个宿主：

- 微信：com.tencent.mm
- QQ：com.tencent.mobileqq
- applicationId：dev.wtonec
- versionName：1.6.8
- versionCode：697
- Xposed Tag：697-1.6.8

## 下载

本次 Release 发布 Standard Universal Hardened 正式签名 APK：

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| Wtonec-v1.6.8-vc697-standard-universal-dual-host-release-hardened.apk | 13,793,844 bytes | 0AF92213A77AE84B921DAA4D924800EB4C1A4C3FCF67A4CE18017B35708F9205 |

签名证书 SHA-256：BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9。

Legacy Universal 资产继续保留在 v1.6.7 Release：
https://github.com/tianxing226/wtonec/releases/tag/v1.6.7

## 本版更新

- 统一配置快照与跨宿主主题 revision：面板风格、Provider 参数、入口状态和 Key 元数据使用 canonical revision/opId，微信与 QQ 通过失效通知后完整拉取，旧 revision 受 stale guard 保护。
- 主题跨宿主刷新：森林绿、海盐蓝等面板 token 从同一 ThemeSnapshot 读取，应用界面主题与语音面板风格保持独立。
- 液态玻璃：恢复硬件 Canvas 的 blur/lens/vibrancy/highlight 效果；软件 Canvas 使用 acrylic fallback，正文内容保持独立绘制，避免整面板一起变淡。
- CDN 网络：对 www.tiax.pw 使用过滤后的公共 DNS/DoH 优先策略，丢弃污染、回环和私网候选，并保留原始 HTTPS Host/SNI/证书校验。
- 微信/QQ 入口：聊天页短暂重绑时保持会话证据和重试，不把私聊或群聊误路由到管理模式弹窗。
- Provider 能力裁剪：Fish Audio 保留快捷语气标签；轻颜免费、系统 TTS、MiniMax 隐藏不适用的快捷标签和入口；MiniMax emotion 独立于方括号标签，并显示参考价格 0.2 元/次。
- Release 加固：R8、资源收缩、DEX/资源/native 扫描与敏感字符串审计结果随项目报告归档。

## 既有交付证据

- 单元测试：191 suites / 775 tests / 0 failures / 0 errors / 0 skipped。
- APK 静态审计：PASS；双宿主 scope 为 com.tencent.mm 与 com.tencent.mobileqq。
- 第一方 R8：1,574 mapped，1,541 renamed，33 retained，重命名比例 97.9034%。
- 设备证据：MuMu Android 15 两个 serial 已有安装/启动记录；宿主面板视觉、跨宿主 ACK、Key 运行态、Provider 生成发送和完整循环项目按报告标记为 PENDING_DEVICE。

## 安装

1. 在 LSPosed 中安装并启用 APK。
2. 作用域勾选微信和/或 QQ。
3. 完全结束目标宿主进程后重新启动。
4. 首次匹配完成后再次重启宿主，再从私聊或群聊进入面板。

完整步骤见 安装与首次启动、双宿主说明 和故障排查文档。