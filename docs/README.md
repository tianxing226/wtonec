# Wtonec 文档

Wtonec `1.6.9 (698)` 是一个面向微信与 QQ 的 LSPosed/Xposed 双宿主语音模块，applicationId 为 `dev.wtonec`。

建议按以下顺序阅读：

1. [安装与首次启动](GETTING_STARTED.md)
2. [微信与 QQ 双宿主说明](DUAL_HOST.md)
3. [API Key 获取与配置](API_KEY.md)
4. [功能使用](USAGE.md)
5. [故障排查](TROUBLESHOOTING.md)

其他资料：

- [数据目录、备份与清理](STORAGE.md)
- [隐私与网络请求](PRIVACY.md)
- [使用说明与责任边界](DISCLAIMER.md)
- [v1.6.9 发布说明](RELEASE_1.6.9.md)
- [v1.6.8 发布说明（历史）](RELEASE_1.6.8.md)
- [v1.6.7 发布说明（历史）](RELEASE_1.6.7.md)
- [v1.5.11 发布说明（历史）](RELEASE_1.5.11.md)
- [公开样例范围](PUBLIC_SOURCE_SCOPE.md)
- [Xposed 仓库与版本规则](XPOSED_REPOSITORY.md)

宿主作用域：

```text
微信：com.tencent.mm
QQ：com.tencent.mobileqq
```

宿主数据目录：

```text
/storage/emulated/0/Android/data/com.tencent.mm/Wtonec/
/storage/emulated/0/Android/data/com.tencent.mobileqq/Wtonec/
```

v1.6.9 静态证据记录 195 个测试套件、796 项测试、Lint 73 warnings / 0 errors，APK 静态审计通过；微信/QQ 宿主面板、ACK、生成发送和具体版本兼容性继续按设备矩阵记录。两台 MuMu Android 15 实例的安装包 SHA-256 与发布产物一致，QQ 设备项因未安装 QQ 保持 `PENDING_DEVICE`。
