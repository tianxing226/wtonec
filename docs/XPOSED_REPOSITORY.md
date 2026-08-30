# Xposed 官方仓库

Wtonec 已收录到 https://github.com/Xposed-Modules-Repo/dev.wtonec 。该仓库用于 Xposed 模块中心展示和 APK 分发；https://github.com/tianxing226/wtonec 用于 GitHub Pages、使用文档和项目归档。

## 当前版本

- Xposed Tag：698-1.6.9
- 项目 Tag：v1.6.9
- versionName：1.6.9
- versionCode：698
- applicationId：dev.wtonec
- 微信作用域：com.tencent.mm
- QQ 作用域：com.tencent.mobileqq
- 推荐 APK：Wtonec-v1.6.9-vc698-standard-universal-dual-host-release-hardened.apk
- Standard 大小：13,973,520 bytes
- Standard SHA-256：2FDFD019D603234A1049077D95BE248BD27503CAF72BE5D7258624267A782A26
- 签名证书 SHA-256：BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9

## 发布规则

1. Xposed Tag 使用 versionCode-versionName，项目 Tag 使用 vversionName。
2. 两个公开仓库的 v1.6.9 Release 使用同一 Standard Universal Hardened APK。
3. 私有实现、Keystore、签名配置、API Key、mapping、日志和缓存保留在私有工程。
4. README 与仓库描述同时包含微信模块、QQ 模块、LSPosed/Xposed 模块和两个标准包名。

## 证据边界

当前最终报告记录 195 个测试套件、796 项测试、0 failures/errors/skipped，Lint 73 warnings / 0 errors，APK 静态审计通过，第一方 R8 重命名比例 97.9976%。两台 MuMu Android 15 实例已安装并校验 APK；微信/QQ 具体宿主面板、ACK、生成发送和版本兼容性按报告标记为 `PENDING_DEVICE`，QQ 因设备未安装包而保留待验。

Legacy Universal 资产继续保留在 696-1.6.7 Release：
https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/tag/696-1.6.7
