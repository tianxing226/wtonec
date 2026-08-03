# Wtonec v1.6.7

- versionName：`1.6.7`
- versionCode：`696`
- applicationId：`dev.wtonec`
- 项目 Tag：`v1.6.7`
- Xposed Tag：`696-1.6.7`
- 微信 scope：`com.tencent.mm`
- QQ scope：`com.tencent.mobileqq`

## 发布资产

本版同时公开发布 Standard 与 Legacy Universal Hardened 正式签名 APK：

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| `Wtonec-v1.6.7-vc696-standard-universal-dual-host-release-hardened.apk` | 13,317,610 bytes | `B728611E2789F7F19B8F8C05271FD8A069F664BC2B8DD71F23D52FAD29E2DE81` |
| `Wtonec-v1.6.7-vc696-legacy-universal-dual-host-release-hardened.apk` | 13,317,093 bytes | `9A7A8C688A9BD07261A88E363622283157D1FE4AE072BFB53ED505264D036CFA` |

两份资产来自同一次最新源码构建，均回读为 `dev.wtonec`、`1.6.7 (696)`，并使用下列历史正式证书。

Release 签名证书 SHA-256：

```text
BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9
```

该证书与 v1.5.11 正式版本一致，用于保持正式版本的覆盖升级签名链。

## 主要变更

- 修复签名配置漂移，正式 Release 恢复历史生产证书，并加入证书摘要回归门禁。
- 修复悬浮窗图标选择后仍显示旧图标：选择状态使用严格递增 revision，并携带 `iconId`、SHA-256、目标宿主，经 PFD 安装、校验、原子提交和宿主 ACK 后更新界面。
- renderer 缓存键纳入宿主、图标 ID、revision、SHA-256 和 density；fallback 不再冒充真实资源加载成功。
- 微信与 QQ 分别持久化图标与 ACK，宿主安装完成后立即刷新现有悬浮入口。
- 修复微信悬浮窗消失：恢复微信主进程入口与 schema v6 迁移，图标解析失败时显示可诊断默认图标，不中断悬浮窗创建。
- 保留微信、QQ、语音、TTS、悬浮窗和现有稳定能力；LSPosed scope 仅包含 `com.tencent.mm` 与 `com.tencent.mobileqq`。
- 156 个本地图标资源随 APK 打包；内置资源由模块 Resources 解码，自定义图标使用宿主私有副本。
- 面板主题与应用界面主题解耦，并保留液态玻璃显示修复和主题持久化。
- 清理废弃的 QueryReceiver 回退链，悬浮设置与公告规则通过 Binder 受控同步。

## 验证结果

- 单元测试：`695 / 695` 通过，共 172 个测试套件。
- Lint：6 个变体全部通过，`0` error，`0` fatal。
- APK：Standard/Legacy x Debug/HardenedDebug/Release x arm64-v8a/armeabi-v7a/universal，共 `18 / 18` 构建成功。
- 当前 Universal Release：AAPT2 回读包名与版本一致，apksigner 回读历史正式证书一致。
- 既有静态门禁：AAPT2、zipalign、apksigner、R8、DEX、资源、字符串和双宿主 scope 审计通过。
- Release gate：`BUILD_SUCCESSFUL_PENDING_DEVICE`。

## 证据边界

- `SOURCE`：版本、scope、配置迁移、图标 revision/ACK、renderer 与微信入口来自当前源码。
- `REPRODUCED`：既有测试、Lint 与静态审计报告，以及本轮 18 APK 构建、两份 Universal Release 大小、SHA-256、包名、版本和证书回读结果。
- `PENDING_DEVICE`：覆盖安装、微信/QQ 实际悬浮窗像素、宿主 ACK 和进程重启恢复仍需目标设备验收。

本次 GitHub 发布仅同步文档、源码记录和上述 Standard/Legacy APK，不在公开仓库重新执行构建或测试。
