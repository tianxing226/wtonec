# Xposed 官方仓库

Wtonec 已收录到 [Xposed-Modules-Repo/dev.wtonec](https://github.com/Xposed-Modules-Repo/dev.wtonec)。该仓库用于 Xposed 模块中心展示和 APK 分发；[tianxing226/wtonec](https://github.com/tianxing226/wtonec) 用于 GitHub Pages、使用文档和项目归档。

## 当前版本

- Xposed Tag：`696-1.6.7`
- 项目 Tag：`v1.6.7`
- versionName：`1.6.7`
- versionCode：`696`
- applicationId：`dev.wtonec`
- 微信作用域：`com.tencent.mm`
- QQ 作用域：`com.tencent.mobileqq`
- 推荐 APK：`Wtonec-v1.6.7-vc696-standard-universal-dual-host-release-hardened.apk`
- 兼容 APK：`Wtonec-v1.6.7-vc696-legacy-universal-dual-host-release-hardened.apk`
- Standard 大小：`13,317,610 bytes`
- Legacy 大小：`13,317,093 bytes`
- Standard SHA-256：`B728611E2789F7F19B8F8C05271FD8A069F664BC2B8DD71F23D52FAD29E2DE81`
- Legacy SHA-256：`9A7A8C688A9BD07261A88E363622283157D1FE4AE072BFB53ED505264D036CFA`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

## 发布规则

1. 两个公开仓库使用同一组 Standard/Legacy Universal Hardened 正式签名 APK。
2. Xposed Tag 使用 `versionCode-versionName`，项目 Tag 使用 `vversionName`。
3. Release 发布后重新下载资产并复核大小、SHA-256、包名、版本、双宿主 scope 和签名。
4. 私有实现、Keystore、签名配置、API Key、mapping、日志和缓存不进入公开 Git 提交。
5. README 与仓库描述同时包含“微信模块”“QQ 模块”“LSPosed/Xposed 模块”和两个标准包名，便于模块中心检索。

## 证据边界

v1.6.7 同时发布 Standard/Legacy Universal Hardened。本轮同一源码构建输出 18 个 APK，两份 Universal Release 均回读为 `dev.wtonec`、`1.6.7 (696)` 和历史正式证书。GitHub 同步阶段不重新构建或运行测试。既有报告记录 695/695 单测、六变体 Lint和 Release 静态审计；覆盖安装、微信/QQ 悬浮窗、图标宿主 ACK、语音发送和具体宿主版本兼容性标记为 `PENDING_DEVICE`。
