(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{718:function(e,v,r){"use strict";r.r(v);var _=r(4),l=Object(_.a)({},(function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"rocketmq架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq架构"}},[e._v("#")]),e._v(" RocketMQ架构")]),e._v(" "),r("ul",[r("li",[e._v("rocketmq 架构设计\n"),r("ul",[r("li",[e._v("producer")]),e._v(" "),r("li",[e._v("consumer")]),e._v(" "),r("li",[e._v("nameserver")]),e._v(" "),r("li",[e._v("broker\n"),r("ul",[r("li",[e._v("Remoting Module")]),e._v(" "),r("li",[e._v("Client Manager")]),e._v(" "),r("li",[e._v("Store Service")]),e._v(" "),r("li",[e._v("HA Service")]),e._v(" "),r("li",[e._v("Index Service")])])])])]),e._v(" "),r("li",[e._v("部署结构\n"),r("ul",[r("li",[e._v("producer、consumer、broker、nameserver")])])])]),e._v(" "),r("h2",{attrs:{id:"通信机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通信机制"}},[e._v("#")]),e._v(" 通信机制")]),e._v(" "),r("ul",[r("li",[e._v("消息编解码")]),e._v(" "),r("li",[e._v("同步、异步、单向")]),e._v(" "),r("li",[e._v("reactor多线程模型")])]),e._v(" "),r("h2",{attrs:{id:"消息存储"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息存储"}},[e._v("#")]),e._v(" 消息存储")]),e._v(" "),r("ul",[r("li",[e._v("消息存储架构\n"),r("ul",[r("li",[e._v("ConsumerQueue")]),e._v(" "),r("li",[e._v("commitLog\n"),r("ul",[r("li",[e._v("minOffset")]),e._v(" "),r("li",[e._v("consumerOffset")]),e._v(" "),r("li",[e._v("maxOffset")])])]),e._v(" "),r("li",[e._v("IndexFile")])])]),e._v(" "),r("li",[e._v("PageCache与Mmap")]),e._v(" "),r("li",[e._v("消息刷盘（同步、异步）")]),e._v(" "),r("li",[e._v("消息查询\n"),r("ul",[r("li",[e._v("IndexFile (按照key或者MessageId)")])])])]),e._v(" "),r("h2",{attrs:{id:"消息类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息类型"}},[e._v("#")]),e._v(" 消息类型")]),e._v(" "),r("ul",[r("li",[e._v("普通消息")]),e._v(" "),r("li",[e._v("顺序消息（顺序消息实现，指定队列，消费这执行队列消费）")]),e._v(" "),r("li",[e._v("定时延时消息")]),e._v(" "),r("li",[e._v("事务消息")])]),e._v(" "),r("h2",{attrs:{id:"消息投递"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息投递"}},[e._v("#")]),e._v(" 消息投递")]),e._v(" "),r("ul",[r("li",[e._v("发送方式（同步、异步）")]),e._v(" "),r("li",[e._v("消息消费")]),e._v(" "),r("li",[e._v("广播消费与集群消费")]),e._v(" "),r("li",[e._v("消息消费重试")])]),e._v(" "),r("h2",{attrs:{id:"负载均衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[e._v("#")]),e._v(" 负载均衡")]),e._v(" "),r("ul",[r("li",[e._v("producer负载均衡\n"),r("ul",[r("li",[e._v("随机")]),e._v(" "),r("li",[e._v("sendLatencyFaultEnable 开启则 随机+过滤not available (按时间做退避)")])])]),e._v(" "),r("li",[e._v("consumer负载均衡\n"),r("ul",[r("li",[e._v("pull")]),e._v(" "),r("li",[e._v("push")]),e._v(" "),r("li",[e._v("按照consumer 和 messagequeue 做排序后平均分配")])])])]),e._v(" "),r("h2",{attrs:{id:"思考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[e._v("#")]),e._v(" 思考")]),e._v(" "),r("ul",[r("li",[e._v("如何保证高可用 ？\n"),r("ul",[r("li",[e._v("broker采用master-slave架构")]),e._v(" "),r("li",[e._v("发送端负载时候使用时间退避")]),e._v(" "),r("li",[e._v("消费消息实现重试机制")])])]),e._v(" "),r("li",[e._v("如何保证可靠性（丢失、重复消费）？\n"),r("ul",[r("li",[e._v("发送端丢失，确认，设置重试次数或者业务自己实现重试")]),e._v(" "),r("li",[e._v("broker丢失，一般刷盘改为同步刷盘，尽量少丢失")]),e._v(" "),r("li",[e._v("消费丢失，没有收到消费确认的，自动重试")]),e._v(" "),r("li",[e._v("重复消费，接口做幂等处理，不能幂等加入消费id消费过滤。")])])]),e._v(" "),r("li",[e._v("NameServer 一致性问题？\n"),r("ul",[r("li",[e._v("NameServer  是一个ap的模型，server之前不进行通信，broker和每个nameserver 同步信息")])])]),e._v(" "),r("li",[e._v("事务消息二阶段如何从half队列中找到原始消息？\n"),r("ul",[r("li",[e._v("sendMessageInTransaction--\x3esend--\x3e sendResult--\x3eendTransaction--\x3eendTransactionOneWay--\x3eEndTransactionProcessor --\x3e TransactionalMessageServiceImpl.commitMessage --\x3e getHalfMessageByOffset")]),e._v(" "),r("li",[e._v("利用sendResult 的 offsetMsgId 解析出MessageId 在解析出coommitLog的offset 通过offset直接获取原消息")])])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("参考资料：")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/apache/rocketmq/blob/master/docs/cn/architecture.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ官方文档-架构设计"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/myseries/p/13153797.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ入门介绍"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1543490",target:"_blank",rel:"noopener noreferrer"}},[e._v("RocketMQ NameServer深入剖析"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);v.default=l.exports}}]);