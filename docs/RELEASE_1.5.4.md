# Wtonec v1.5.4

- versionName：`1.5.4`
- versionCode：`680`
- applicationId：`dev.wtonec`
- 项目 Tag：`v1.5.4`
- Xposed Tag：`680-1.5.4`

## 本次更新

- 单 APK 同时支持微信 `com.tencent.mm` 和 QQ `com.tencent.mobileqq` 作用域。
- 微信与 QQ 使用共享的 WT 聊天页入口、语音面板、音频管线和在线语音功能。
- 增加 QQ NT 会话校验、PTT Element、回调状态、nonce 去重、原子暂存、ACK 保留和失败阶段分类。
- API Key 改由模块 canonical Keystore store 持有，通过受控 Bridge 与两个宿主同步。
- 本地语音包增加 canonical 索引、SHA-256 去重和跨宿主 PFD 同步。
- 在线语音来源包含 Wtonec 目录、铃声多多和爱给网，并支持缓存回退、下载、取消和重试。
- 液态玻璃共用 BackdropSession，降低面板乳白遮挡并保留低版本材质回退。
- 清理冗余源码、资源和旧标识，并完成 DEX/native 静态审计。

## 安装

1. 下载 Standard Universal Dual-host Hardened APK。
2. 在 LSPosed 中启用 Wtonec。
3. 勾选微信、QQ 或两个作用域。
4. 完整结束目标宿主后重新打开。
5. 首次启动按提示完成该宿主 DEX 匹配。
6. 进入私聊或群聊，使用 WT 或对应语音入口打开面板。

## 校验

- 文件：`Wtonec-v1.5.4-vc680-standard-universal-dual-host-release-hardened.apk`
- 大小：`12,265,913 bytes`
- ABI：`arm64-v8a`、`armeabi-v7a`
- minSdk / targetSdk：`28 / 37`
- APK SHA-256：`3A251F2A67529FABA8042F18AB8775B6339F5E0ACB09BAEF0F4AB5D8559E161F`
- 签名证书 SHA-256：`BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9`
- 构建 identity：`wtonec-20260722T031320Z-dirty-b20c5c66ec76-standard-release`

## 自动化结果

- Standard Debug：`433/433` tests PASS。
- Legacy Debug：`433/433` tests PASS。
- 合计：`866` tests，`0` failures，`0` errors，`0` skipped。
- Standard/Legacy Debug 和 Release Lint：PASS。
- Standard/Legacy Debug 和 Release Assemble：PASS。
- 12 个构建 APK：`auditPass=true`。
- 已知调试 Key：源码和 APK 均为 0 命中。

## 运行边界

发布构建机没有连接 Android 真机。微信/QQ 冷启动、WT 入口、共享 Bridge、在线来源真实试听/发送、QQ PTT 气泡和液态玻璃效果仍列为待装机验证。

APK 内置的模块管理器简介仍沿用微信语音文案；本 Release 的 scope、README、Release Notes 和网站已明确标记微信/QQ 双宿主。后续 APK 构建会同步更新内置简介。
