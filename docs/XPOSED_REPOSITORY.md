# Xposed 官方仓库与发布同步

## 仓库分工

- 主项目资料仓库：<https://github.com/tianxing226/wtonec>
- Xposed 官方仓库：<https://github.com/Xposed-Modules-Repo/dev.wtonec>
- 功能介绍页：<https://tianxing226.github.io/wtonec/>

主项目资料仓库维护网站、文档、截图、公开 Kotlin 样例和 Release 归档。Xposed 官方仓库用于模块目录收录、用户下载和正式 APK 分发。正式 Hook、DEX、音频编码、微信发送、签名和加固实现保持私有。

## 官方仓库格式调研

发布前核对了以下 Xposed Modules Repo 仓库：

| 仓库 | 公开形态 | 可复用惯例 |
|---|---|---|
| [com.sal.privacykit](https://github.com/Xposed-Modules-Repo/com.sal.privacykit) | Release 与文档 | README 写明包名、作用域、安装步骤、APK 和 SHA-256 |
| [eu.hxreborn.phdp](https://github.com/Xposed-Modules-Repo/eu.hxreborn.phdp) | 项目镜像 | Description 使用模块显示名，配置 Homepage 和 Xposed/LSPosed Topics |
| [com.kinginu.pixelmask](https://github.com/Xposed-Modules-Repo/com.kinginu.pixelmask) | 自动同步 Release | Tag 与 APK 名包含版本信息，Release Notes 说明兼容性与修复 |
| [io.github.lsposed.disableflagsecure](https://github.com/Xposed-Modules-Repo/io.github.lsposed.disableflagsecure) | 精简 Release | 公开正式 Release，APK 作为独立资产上传 |
| [eu.hxreborn.tfs](https://github.com/Xposed-Modules-Repo/eu.hxreborn.tfs) | 版本化发布 | Tag 同时表达 versionCode 与 versionName，正文记录升级要求 |

Wtonec 采用独立的官方分发仓库，保留用户文档、截图和公开样例，不复制 GitHub Pages 部署工作流。仓库 Description 保持非空，每个正式版本提供非草稿、非预发布的 GitHub Release 和已签名 APK。

## 当前正式版本

- Tag：`v1.1.0`
- versionCode：`669`
- applicationId：`dev.wtonec`
- 作用域：`com.tencent.mm`
- APK：`Wtonec-v1.1.0-vc669-standard-universal-release-hardened.apk`
- SHA-256：`8EFB69EBC682ABBB7EF16282AA0726C0F5D49ECF53246E1C0D8DC214820B9348`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`

## 发布同步清单

1. 从主项目资料仓库最新 `main` 创建官方仓库内容快照。
2. 排除 `.github/workflows/pages.yml`、本机文件、缓存、日志、密钥和私有实现。
3. 更新官方仓库 Description、Homepage 和 Topics。
4. 创建与版本对应的 Tag 和正式 Release。
5. 上传已验证的 Standard Universal Release APK。
6. 从官方 Release 重新下载 APK，复核大小、SHA-256、包名、版本和签名。
7. 检查模块目录收录状态及 README、图片和文档链接。

后续版本继续使用相同签名证书。发布密钥、GitHub Token、R8 mapping 和构建机配置不进入任一公开仓库。
