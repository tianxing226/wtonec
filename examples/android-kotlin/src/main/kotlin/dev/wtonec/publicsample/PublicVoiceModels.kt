package dev.wtonec.publicsample

data class PublicVoice(
    val id: String,
    val displayName: String,
    val mode: PublicVoiceMode,
)

data class PublicVoicePackItem(
    val id: String,
    val displayName: String,
    val durationMs: Long,
)

data class PublicVoiceRequest(
    val text: String,
    val voice: PublicVoice,
)

enum class PublicGenerationStage {
    IDLE,
    GENERATING,
    READY,
    FAILED,
}

data class PublicGenerationState(
    val stage: PublicGenerationStage = PublicGenerationStage.IDLE,
    val progress: Float = 0f,
    val message: String? = null,
)
