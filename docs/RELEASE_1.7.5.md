# Wtonec 1.7.5 更新说明

## 本次更新

1. 表情包分为「在线 / 本地」，统一使用紧凑三列图片网格，点击图片直接发送。
2. 新增斗了个图、发表情两个在线来源，支持合集、加载更多和图片缓存；本地导入、收藏和删除继续保留。
3. 修复微信静态图片、GIF 和抖音图片已发出却提示回执超时的问题。
4. 小红书新增适配 **9.50.0（9500803）**，保留 **9.49.1（9491803）**；抖音适配 **40.7.0（400701）**。
5. 优化在线/本地切换栏，增强液态玻璃的折射和边缘高光。

斗了个图支持关键词搜索；发表情遵循网站公开规则，仅筛选已加载内容，不提供全站搜索。

## 安装提醒

- Android 9 及以上，需要可用的 LSPosed/Xposed 环境；一个通用 APK，包含 ARM64 与 ARMv7。
- 包名和正式签名沿用 1.7.4，可直接覆盖安装，保留已有数据。
- 更新后完全关闭并重启已启用的宿主；出现匹配提示时，按提示完成后重启宿主。
- **抖音、小红书需在 Wtonec「设置」中开启对应悬浮入口。**

## 下载与校验

- [GitHub 下载](https://github.com/tianxing226/wtonec/releases/tag/v1.7.5)
- [Xposed 仓库下载](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/tag/707-1.7.5)
- 版本：**1.7.5 / 707**；包名：`dev.wtonec.final`。
- 安装包：`Wtonec-1.7.5-707-universal.apk`；大小：**14,776,048 字节（约 14.09 MiB）**。
- SHA-256：`84af89bfe0ce5042412f27ff93e25a197eb97284750113a5a8c05c5359be0626`。

本版通过 1,073 项单元测试、正式签名与加固检查，已安装到 USB 真机和 MuMu。微信、抖音表情发送回执已由测试者在真机确认；不同主题、群聊及异常网络场景的完整组合仍未全部验证。

[数据与配置目录](https://github.com/tianxing226/wtonec/blob/main/docs/DIRECTORIES.md) · [使用教程](https://github.com/tianxing226/wtonec/blob/main/docs/QUICK_TUTORIAL.md)
