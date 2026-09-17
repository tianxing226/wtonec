# Wtonec v1.7.2（701）

本次更新聚焦新版微信语音发送兼容，沿用现有正式签名及加固链。

## 更新内容

- 修复微信 **8.0.78 / versionCode 3180** 中“微信语音发送链返回失败”的调用签名兼容问题。
- 支持新版5参数调用形态，保留旧版3/4参数兼容分支；先完整验证方法签名，再进入发送。
- 已进入宿主提交阶段的请求不自动重复 fallback，降低重复消息风险。
- 微信左下角语音切换图标的长按面板入口、液态玻璃、QQ、表情包和语音生成流程保持原状。
- 延续 R8、LSParanoid、资源收缩和自有音频 SO 的 AES-GCM 加密封装；两个 ABI 保留必要 Xposed/JNI 入口。

## 安装包

优先选择 **Standard**。仅使用传统 Xposed 入口的框架可选择 **Legacy**。两者应用 ID 相同，通常安装其中一个即可。两个 Universal APK 均包含 arm64-v8a / armeabi-v7a。

| 变体 | 文件 | 字节数 | SHA-256 |
|---|---|---:|---|
| Standard Universal | `Wtonec-v1.7.2-vc701-standard-universal-release-hardened.apk` | 14,597,688 | `ac1cc6beeee1b3eb8084e21848f335d2723a18b7341a1a7ddd0bba14b8f7076f` |
| Legacy Universal | `Wtonec-v1.7.2-vc701-legacy-universal-release-hardened.apk` | 14,580,759 | `4e6277223c2b45dd5f2bf87271c7b5467af63b52e8c7ef8439b2e534bdfb7f4c` |

正式证书 SHA-256：`bfc2894d0996204a0b6a629c4f9020116098ed7eaf22dd27391051b5bab704e9`。

安装后完全重启所选宿主，按提示完成必要的 DEX 匹配。调试证书测试包与正式证书包属于不同签名轨道；保持原有配置和登录数据，避免为覆盖安装而直接清空数据。

## 验证范围

- StandardDebug、LegacyDebug 各 **211 suites / 887 tests / 0 failures / 0 errors / 0 skipped**，包含29项新增发送契约与回执行为测试。
- 用户已在微信8.0.78确认加固测试包恢复发送；该证据对应 standardHardenedDebug，独立于正式 Release 静态验收。
- 两个正式包均通过签名、ZIP 对齐、R8 映射、自有 native 导出面、加密封装回读和篡改检测。
- 旧版微信完整实机矩阵、指定群聊和最终正式包实机矩阵仍单独标为待验证，静态测试不替代设备验收。

下载：
- [项目 Release](https://github.com/tianxing226/wtonec/releases/tag/v1.7.2)
- [Xposed 模块仓库 Release](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/tag/701-1.7.2)
