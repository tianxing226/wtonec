# 数据与配置目录

当前模块包名为 `dev.wtonec.final`。以下以 Android 主用户为例，`<宿主包>` 可替换为下表中的包名，`<运行包>` 表示当前运行 Wtonec 的模块或宿主包。

| 应用 | 包名 |
|---|---|
| Wtonec | `dev.wtonec.final` |
| 微信 | `com.tencent.mm` |
| QQ | `com.tencent.mobileqq` |
| 小红书 | `com.xingin.xhs` |
| 抖音 | `com.ss.android.ugc.aweme` |

## 配置文件

模块配置位于 `/data/user/0/dev.wtonec.final/`：

| 内容 | 相对该目录的位置 |
|---|---|
| 主题、面板等应用设置 | `shared_prefs/wtonec_app_settings.xml` |
| 统一配置、悬浮入口及宿主确认状态 | `files/wtonec_shared_bridge/`，包括 `wtonec_config_v2.json` |
| 加密 API 配置 | `shared_prefs/wtonec_shared_secure_config_v2.xml`；其他 API 配置使用 `wtonec_openai_secure_v1.xml`、`wtonec_ai_provider_secure_v1.xml` |

宿主运行偏好位于 `/data/user/0/<宿主包>/shared_prefs/`，通用文件为 `wtonec_prefs.xml`。专用配置文件如下：

| 宿主 | 配置文件 |
|---|---|
| 微信 | `com.tencent.mm_preferences.xml` |
| QQ | `com.tencent.mobileqq_wtonec_preferences.xml` |
| 小红书 | `com.xingin.xhs_wtonec_preferences.xml` |
| 抖音 | `com.ss.android.ugc.aweme_wtonec_preferences.xml` |

## 素材与缓存

| 内容 | 目录 |
|---|---|
| 共享本地表情主库 | `/data/user/0/dev.wtonec.final/files/wtonec/shared-stickers/`，图片与 `index-v1.json` 一起保存 |
| 宿主表情副本与索引 | `/data/user/0/<宿主包>/files/wtonec/stickers/` |
| 共享语音主库 | `/storage/emulated/0/Android/data/dev.wtonec.final/files/Wtonec/voices/` |
| 宿主语音数据 | `/storage/emulated/0/Android/data/<宿主包>/Wtonec/wtonec/voices/` |
| 宿主语音元数据 | `/storage/emulated/0/Android/data/<宿主包>/Wtonec/wtonec/metadata/` |
| 在线表情图片缓存 | `/data/user/0/<运行包>/cache/wtonec/online-stickers/` |
| 语音生成、试听与在线语音缓存 | `/storage/emulated/0/Android/data/<运行包>/cache/Wtonec/`，下含 `wtonec-jobs/`、`wtonec-previews/`、`wtonec-online/` |
| 语音、模板和报告导出 | 由系统文件选择器选择位置，没有固定的公共导出目录 |

共享语音的外部目录不可用时，会退回模块私有 `files/Wtonec/voices/`。部分设备将 `/data/user/0/` 显示为 `/data/data/`；多用户、分身和工作资料的路径由系统决定。

## 备份与清理

- 应用私有目录通常需要 Root 才能从文件管理器访问；Android 11+ 也可能限制 `Android/data`，优先使用内置导入、导出与管理功能。
- 同包名、同签名覆盖安装会保留数据。卸载或清除数据前先备份重要语音、表情和设置；`voices/`、`shared-stickers/` 是素材库，不是缓存。
- 等待下载、生成和发送结束后再清理缓存，保留素材与对应索引。API 配置使用 Android Keystore 加密，单独复制配置 XML 不能保证跨设备恢复。

这里只公开路径与文件名，请勿把实际配置、Key 或聊天文件发到公开仓库。

[备份与清理](STORAGE.md) · [返回说明目录](README.md)
