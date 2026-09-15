# Wtonec v1.7.1（700）发布说明

Wtonec v1.7.1 继续以单 APK 覆盖微信与 QQ NT，重点修复 QQ 私聊/群聊液态玻璃一致性、悬浮窗聊天路由和 QQ DEX 缓存恢复，并完成 Release 加固构建。

## Release APK

| 文件 | 大小 | SHA-256 |
|---|---:|---|
| `Wtonec-v1.7.1-vc700-standard-universal-release-hardened.apk` | 14,581,308 bytes | `6B05CD8C3760AE1D0B948D6E9BB7B1C00883E89AD1EC3EA6B52508CBAEB8630A` |

签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

下载入口：

- [项目 Release](https://github.com/tianxing226/wtonec/releases/tag/v1.7.1)
- [Xposed 官方 Release](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/tag/700-1.7.1)

## 本次更新

- QQ 私聊和群聊统一使用已验证的液态玻璃材质路径，保持面板层级、背景采样、模糊和 tint 一致。
- 修复聊天界面点击悬浮窗按钮时偶发进入 QQ 管理模式而不是语音面板的问题。
- 修复 QQ AIO 会话重建、私聊/群聊切换和输入栏重新绑定时的旧会话误用。
- QQ DEX 缓存验证达到 3/3，微信 DEX 缓存验证达到 4/4。
- Release 与 hardenedDebug 开启 R8、LSParanoid、资源收缩和原生层加固。
- Release APK 中的音频/崩溃 JNI SO 使用 AES-GCM 封装，运行时完成认证、ABI 校验和私有 code cache 加载。
- 保留 Xposed、JNI、DexKit 和序列化边界，避免加固影响现有宿主功能。

## 验证摘要

- StandardDebug：858 tests，0 failures / 0 errors / 0 skipped。
- LegacyDebug：858 tests，0 failures / 0 errors / 0 skipped。
- hardenedDebug 原生冒烟：WAV、SILK、PCM、MP3 全链路通过。
- Release：签名、zipalign、R8、SO 导出面、AES-GCM round-trip 和篡改拒绝检查通过。

公共仓库只提供文档、静态网站、独立样例和 Release APK；完整实现源码位于 private 仓库。
