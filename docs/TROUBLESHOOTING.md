# 故障排查

## 长按语音按钮没有出现面板

1. 确认 LSPosed 中已启用 Wtonec。
2. 确认当前微信实例已加入模块作用域。
3. 完全结束微信进程后重新启动。
4. 打开 Wtonec 主页核对模块激活状态。
5. 等待 DEX 匹配完整结束。
6. 进入聊天，将输入栏切换到语音模式后长按微信语音按钮。
7. 查看 `/storage/emulated/0/Android/data/com.tencent.mm/Wtonec/logs/` 中当天日志。

## 每次启动都要求更新 DEX

- 检查微信是否刚升级、降级或收到热更新。
- 完成一次全部匹配后，完整结束并重新启动微信。
- 保留 `dex_cache/.fingerprint.json`、`dex_cache/diagnostics.json` 和当天日志。
- 核对目录是否被系统清理工具、脚本或文件同步工具反复删除。
- 从设置页清理 DEX 后会触发一次完整匹配。

## 生成按钮停用

- 确认输入文字不为空且不超过 500 字。
- 确认已选择预设音色或克隆音色。
- 确认设置页显示 API Key 已保存。
- 克隆模式检查 Fish Audio 音色 ID 是否包含多余空格。

## 接口请求失败

- 查看 [Tiax 接口实时详情](https://www.tiax.pw/api_details.php?id=7)。
- 检查网络、账户余额、Key 状态和调用记录。
- 使用短文本和单个预设音色重新测试。
- 反馈时保留 HTTP 状态、时间和错误类型，同时遮盖 Key。

## MP3 导入异常

- 从 Android 系统文件选择器重新选择文件。
- 使用真实可解码 MP3，而不是只修改扩展名的其他格式。
- 确认文件大小不超过 20 MiB。
- 确认音频时长适合微信语音发送，当前发送上限为 60 秒。
- 取消文件选择会正常结束本次导入，不建立语音包条目。

## 语音包存在但试听或发送失败

- 检查 `wtonec/voices/` 中同一 UUID 的 `.mp3` 和 `.amr` 是否成对存在。
- 检查目录或 JSON 索引是否被手工移动、覆盖或从其他设备直接复制。
- 删除失效条目后重新导入原始 MP3，让 Wtonec 重建语音数据和索引。
- 发送前确认当前聊天没有切换。

## 文件管理器看不到 Android/data

Android 11+ 分区存储会限制普通文件管理器。优先使用应用内导入、导出、日志和清理入口；ADB 可见性由 Android 版本、ROM 和设备策略决定。路径详情见 [STORAGE.md](STORAGE.md)。

## 闪退或错误页面

准备以下材料：

- Wtonec 版本、versionCode 和 APK SHA-256；
- Android、微信和 LSPosed 版本；
- 问题时间、聊天类型和复现步骤；
- `logs/Wtonec-yyyy-MM-dd.log`；
- `crashes/wtonec-crash-<timestamp>.log`；
- DEX 问题对应的 `dex_cache/diagnostics.json`。

日志和截图中应遮盖 API Key、账号、联系人、会话标识、输入文字、音色 ID、设备标识和本地隐私路径。
