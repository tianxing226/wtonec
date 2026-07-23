# Wtonec v1.5.11

- versionName：`1.5.11`
- versionCode：`687`
- applicationId：`dev.wtonec`
- 微信作用域：`com.tencent.mm`
- QQ 作用域：`com.tencent.mobileqq`
- 项目 Tag：`v1.5.11`
- Xposed Tag：`687-1.5.11`

## 本次更新

- 移除 Wtonec 在微信和 QQ 宿主进程中的 MMKV 依赖与 `MMKV.initialize` 调用。
- APK 不再携带 Wtonec 自有 `libmmkv.so`，降低与宿主 MMKV 的 Java、JNI、SONAME 和全局状态碰撞风险。
- Wtonec 宿主配置迁移到独立 SharedPreferences；共享 API Key、自定义音色、本地语音包和播报规则沿用现有配置桥。
- Release 启动阶段停用实验性 native signal 拦截和旧 flag 驱动的进程级 Hook 路径。
- 保留微信/QQ 双宿主、DEX 缓存、系统 TTS、克隆音色、本地语音包、在线语音和 Tencent SILK 发送链。

## 下载与校验

推荐安装 Standard Universal；Legacy Universal 用于兼容特定旧运行环境。

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| `Wtonec-v1.5.11-vc687-standard-universal-dual-host-release-hardened.apk` | 11,897,358 bytes | `C159214381A0572105A0491E2F5E3B74E954E3F3A23D0D1030759E1E165A19B7` |
| `Wtonec-v1.5.11-vc687-legacy-universal-dual-host-release-hardened.apk` | 11,880,461 bytes | `33E63109A79E38FCB782DF6BAB369541950F27AC08EE257110EB30141C4FB91C` |

正式签名证书 SHA-256：

```text
BFC2894D0996204A0B6A629C4F9020116098ED7EAF22DD27391051B5BAB704E9
```

本次 GitHub 发布直接使用已有 v1.5.11 交付产物，发布过程中不重新构建、不运行 Gradle/Cargo 测试。目标设备上的微信/QQ Hook 和语音行为以实际装机结果为准。

## 免责声明

Wtonec 仅供学习、研究与技术交流使用。使用者应遵守所在地法律法规、软件平台规则及第三方服务条款，并自行承担安装、配置、升级、内容来源和使用行为产生的责任。项目与微信、QQ、腾讯、LSPosed、Fish Audio、Tiax 及其他服务提供方不存在隶属、合作、官方授权或背书关系。严禁用于侵犯隐私、传播侵权内容、欺诈、骚扰、批量滥用、干扰平台服务或其他违法用途。详见 [使用说明与责任边界](DISCLAIMER.md)。
