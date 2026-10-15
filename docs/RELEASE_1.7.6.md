# Wtonec 1.7.6 更新说明

## 本次更新

1. 原「安全」页改为「适配」，按应用展示 89 项版本，每行 3 个。
2. 趣味语音盒内置 182 个语音包目录和音频直链，打开目录更快。
3. 新增 tiax 表情来源，收录 217 个合集和 43,365 条图片关系；分类直接显示，支持关键词搜索。
4. 表情包新增「最近使用」，方便快速再次发送，并增加 tiax 搜索推荐提示。
5. 修复小红书群聊面板绑定问题，优化在线素材异常提示。

目录内置，音频和图片按需联网下载并缓存；部分远程素材可能失效。

## 安装提醒

- Android 9 及以上，需要可用的 LSPosed/Xposed 环境；通用 APK 包含 ARM64 与 ARMv7。
- 包名和正式签名沿用 1.7.4 / 1.7.5，可直接覆盖安装，保留已有设置和素材。
- 更新后完全关闭并重启已启用的宿主；出现匹配提示时按页面说明完成。
- 抖音、小红书需在 Wtonec「设置」中开启对应悬浮入口。

## 下载与校验

- [GitHub 下载](https://github.com/tianxing226/wtonec/releases/tag/v1.7.6)
- [Xposed 仓库下载](https://github.com/Xposed-Modules-Repo/dev.wtonec/releases/tag/708-1.7.6)
- 版本：**1.7.6 / 708**；包名：`dev.wtonec.final`。
- 安装包：`Wtonec-1.7.6-708-universal.apk`；大小：**15,763,047 字节（约 15.03 MiB）**。
- SHA-256：`d814c55197a430dc681696ecace1a7eeb2d3a702fec3c6edad142d052f192df3`。

本版通过 1,064 项单元测试、签名与加固检查。适配目录不代表全部版本均已逐一实测，完整收发场景仍需按实际环境验证。

[数据与配置目录](https://github.com/tianxing226/wtonec/blob/main/docs/DIRECTORIES.md) · [使用教程](https://github.com/tianxing226/wtonec/blob/main/docs/QUICK_TUTORIAL.md)

