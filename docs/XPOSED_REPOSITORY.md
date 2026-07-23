# Xposed 官方仓库

Wtonec 已收录到 [Xposed-Modules-Repo/dev.wtonec](https://github.com/Xposed-Modules-Repo/dev.wtonec)。该仓库用于 Xposed 模块中心展示和 APK 分发；[tianxing226/wtonec](https://github.com/tianxing226/wtonec) 用于 GitHub Pages、使用文档和项目归档。

## 当前版本

- Xposed Tag：`687-1.5.11`
- 项目 Tag：`v1.5.11`
- versionName：`1.5.11`
- versionCode：`687`
- applicationId：`dev.wtonec`
- 微信作用域：`com.tencent.mm`
- QQ 作用域：`com.tencent.mobileqq`
- 推荐 APK：`Wtonec-v1.5.11-vc687-standard-universal-dual-host-release-hardened.apk`
- 兼容 APK：`Wtonec-v1.5.11-vc687-legacy-universal-dual-host-release-hardened.apk`
- Standard 大小：`11,897,358 bytes`
- Legacy 大小：`11,880,461 bytes`
- Standard SHA-256：`C159214381A0572105A0491E2F5E3B74E954E3F3A23D0D1030759E1E165A19B7`
- Legacy SHA-256：`33E63109A79E38FCB782DF6BAB369541950F27AC08EE257110EB30141C4FB91C`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

## 发布规则

1. 两个仓库使用同一组 Standard/Legacy Universal Hardened APK。
2. Xposed Tag 使用 `versionCode-versionName`，项目 Tag 使用 `vversionName`。
3. Release 发布后重新下载资产并复核大小、SHA-256、包名、版本、双宿主 scope 和签名。
4. 私有实现、Keystore、签名配置、API Key、mapping、日志和缓存不进入公开 Git 提交。
5. README 与仓库描述同时包含“微信模块”“QQ 模块”“LSPosed/Xposed 模块”和两个标准包名，便于模块中心检索。

## 证据边界

v1.5.11 直接使用既有已审计产物。本次 GitHub 同步不重新构建或运行测试；目标设备中的微信/QQ Hook、语音发送和具体宿主版本兼容性以实际装机结果为准。
