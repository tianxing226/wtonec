# Xposed 官方仓库

Wtonec 已收录到 [Xposed-Modules-Repo/dev.wtonec](https://github.com/Xposed-Modules-Repo/dev.wtonec)。该仓库用于 Xposed 模块中心展示和 APK 分发；[tianxing226/wtonec](https://github.com/tianxing226/wtonec) 用于 GitHub Pages、使用文档和项目归档。

## 当前版本

- Xposed Tag：`680-1.5.4`
- 项目 Tag：`v1.5.4`
- versionName：`1.5.4`
- versionCode：`680`
- applicationId：`dev.wtonec`
- 微信作用域：`com.tencent.mm`
- QQ 作用域：`com.tencent.mobileqq`
- APK：`Wtonec-v1.5.4-vc680-standard-universal-dual-host-release-hardened.apk`
- APK 大小：`12,265,913 bytes`
- APK SHA-256：`3A251F2A67529FABA8042F18AB8775B6339F5E0ACB09BAEF0F4AB5D8559E161F`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

## 发布规则

1. 两个仓库使用同一份已验证 Standard Universal Hardened APK。
2. Xposed Tag 使用 `versionCode-versionName`，项目 Tag 使用 `vversionName`。
3. Release 发布后重新下载资产并复核大小、SHA-256、包名、版本、双宿主 scope 和签名。
4. 私有实现、Keystore、签名配置、API Key、mapping、日志和缓存不进入公开 Git 提交。
5. README 与仓库描述同时包含“微信模块”“QQ 模块”“LSPosed/Xposed 模块”和两个标准包名，便于模块中心检索。

## 证据边界

v1.5.4 已通过 Standard/Legacy 单元测试、Lint、构建和 APK 静态审计。构建机发布时没有连接 Android 真机，QQ PTT 气泡、对端接收、双宿主 Bridge 和具体 QQ 版本兼容性仍需设备验证。
