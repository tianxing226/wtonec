# Android Kotlin 公开样例

这些文件是 Wtonec 独立整理的公开样例，用于说明用户模式、数据形态、Tiax 请求参数关系和语音工作流契约。它们不包含可运行的微信模块实现，也不代表正式应用的内部结构。

## 目录

```text
src/main/kotlin/dev/wtonec/publicsample/
├── PublicVoiceMode.kt
├── PublicVoiceModels.kt
├── TiaxRequestExample.kt
└── VoiceWorkflowContract.kt
```

## 参数示例

预设音色使用 `ys`：

```kotlin
TiaxRequestExample.build(
    text = "TEXT",
    apiKey = "YOUR_API_KEY",
    presetVoice = "1",
)
```

克隆音色使用 `kl`：

```kotlin
TiaxRequestExample.build(
    text = "TEXT",
    apiKey = "YOUR_API_KEY",
    cloneVoiceId = "VOICE_ID",
)
```

`ys` 与 `kl` 二选一。样例只负责构造 URI 和描述接口，不发起网络请求，也不包含音频下载、转码、缓存或发送代码。

## 边界

公开样例不是完整 SDK，也不包含 Xposed/LSPosed、DexKit、微信内部调用、MP3/SILK、JNI、SAF、Overlay、Key 加密、签名或加固实现。完整边界见 [公开样例范围](../../docs/PUBLIC_SOURCE_SCOPE.md)。
