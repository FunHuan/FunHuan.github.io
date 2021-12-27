- 架构原则,总结AKF最常用的15个架构原则如下:
  1. N+1设计。永远不少于两个，通常为三个。
  2. 回滚设计。确保系统可以回滚到以前发布过的任何版本。
  3. 禁用设计。能够关闭任何发布的功能。
  4. 监控设计。在设计阶段就必须要考虑监控，而不是在实施完
     成之后补充。
  5. 设计多活数据中心。不要被一个数据中心的解决方案把自
     己限制住。
  6. 使用成熟的技术。只用确实好用的技术。
  7. 异步设计。只有在绝对必要的时候才进行同步调用。
  8. 无状态系统。只有当业务确实需要的时候，才使用状态
  9. 水平扩展非垂直升级。永远不要依赖更大、更快的系统
  10. 设计至少要有两个步骤的前瞻性。在扩展性问题发生前考
      虑好下一步的行动计划。
  11. 非核心则购买。如果不是你最擅长的，也提供不了差异化
      的竞争优势则直接购买。
  12. 使用商品化硬件。在大多数情况下，便宜的是最好的
  13. 小构建，小发布，快试错。全部研发要小构建，不断选
      代、让系统不断地成长
  14. 隔离故障。实现故障隔离设计，通过断路保护避免故障传
      拂和交叉影响。
  15. 自动化。设计和构建自动化的过程。如果机器可以做，就
      不要依赖于人。


