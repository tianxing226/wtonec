# Xposed 官方仓库

Wtonec 已收录到 [Xposed-Modules-Repo/dev.wtonec](https://github.com/Xposed-Modules-Repo/dev.wtonec)。该仓库用于模块中心展示和 APK 分发；[tianxing226/wtonec](https://github.com/tianxing226/wtonec) 用于官网、文档和项目归档。

## 当前版本

- Xposed Tag：`673-1.3.2`
- 项目 Tag：`v1.3.2`
- versionName：`1.3.2`
- versionCode：`673`
- applicationId：`dev.wtonec`
- 作用域：`com.tencent.mm`
- APK：`Wtonec-v1.3.2-vc673-standard-universal-release-hardened.apk`
- SHA-256：`6DEB493E4B18CF9540569E69C53BDD8C44843A86EB2A5483A95E6E722222A212`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

## 发布规则

1. 两个仓库使用同一份已验证 Hardened Universal APK。
2. Xposed Tag 使用 `versionCode-versionName`，主项目 Tag 使用 `vversionName`。
3. Release 发布后复核文件大小、SHA-256、包名、版本和签名。
4. 私有实现、Keystore、签名配置、API Key、mapping、日志和缓存不进入公开仓库。
