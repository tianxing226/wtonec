package dev.wtonec.publicsample

interface VoiceWorkflowContract {
    suspend fun generate(input: PublicVoiceRequest): PublicGenerationState

    suspend fun preview(): Result<Unit>

    suspend fun save(displayName: String): Result<PublicVoicePackItem>

    suspend fun send(): Result<Unit>
}
