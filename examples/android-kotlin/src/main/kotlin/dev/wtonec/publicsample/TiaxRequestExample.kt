package dev.wtonec.publicsample

import android.net.Uri

/** Demonstrates parameter selection only; networking is intentionally omitted. */
object TiaxRequestExample {
    fun build(
        text: String,
        apiKey: String,
        presetVoice: String? = null,
        cloneVoiceId: String? = null,
    ): Uri {
        require(text.isNotBlank()) { "TEXT is required" }
        require(apiKey.isNotBlank()) { "YOUR_API_KEY is required" }
        require((presetVoice == null) xor (cloneVoiceId == null)) {
            "Choose exactly one of presetVoice or cloneVoiceId"
        }

        return Uri.Builder()
            .scheme("https")
            .authority("www.tiax.pw")
            .appendPath("API")
            .appendPath("yuyin.php")
            .appendQueryParameter("msg", text.trim())
            .apply {
                presetVoice?.let { appendQueryParameter("ys", it.trim()) }
                cloneVoiceId?.let { appendQueryParameter("kl", it.trim()) }
            }
            .appendQueryParameter("apikey", apiKey.trim())
            .build()
    }
}
