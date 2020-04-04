# GC算法及收集器

## GC的概念
垃圾收集 Garbage Collection 通常被称为“GC”，它诞生于1960年 MIT 的 Lisp 语言，经过半个多世纪，目前已经十分成熟了。

jvm 中，程序计数器、虚拟机栈、本地方法栈都是线程私有的，它们随线程而生，随线程而灭。栈帧随着方法的进入和退出做入栈和出栈操作，实现了自动的内存清理。
因此，我们的内存垃圾回收主要集中于 java 堆和方法区中，在程序运行期间，这部分内存的分配和使用都是动态的.

## 对象存活判断

判断对象是否存活一般有两种方式：

- **引用计数：** 每个对象有一个引用计数属性，新增一个引用时计数加1，引用释放时计数减1，计数为0时可以回收。此方法简单，但是无法解决对象相互循环引用的问题。

- **可达性分析（Reachability Analysis）：** 从GC Roots开始向下搜索，搜索所走过的路径称为引用链。当一个对象到GC Roots没有任何引用链相连时，则证明此对象是不可用的。不可达对象。

>在java中，可作为GC Roots的对象有：
>
>1.虚拟机栈（栈帧中的本地变量表）中引用的对象；
>
>2.方法区中的类静态属性引用的对象；
>
>3.方法区中常量引用的对象；
>
>4.本地方法栈中JNI（即一般说的Native方法）中引用的对象

关于GC Roots具体说明（建议看下）
- [Java中什么样的对象才能作为gc root，gc roots有哪些呢？](https://www.zhihu.com/question/50381439)
- [Help Eclipse --- Garbage Collection Roots](https://help.eclipse.org/2020-03/index.jsp?topic=%2Forg.eclipse.mat.ui.help%2Fconcepts%2Fgcroots.html&cp=37_2_3)

## 垃圾收集算法

### 标记清除(Mark-Sweep)

- **“标记-清除”（Mark-Sweep）** 
算法分为“标记”和“清除”两个阶段：首先标记出所有需要回收的对象（引用计数法或者可达性分析），在标记完成后统一回收掉所有被标记的对象。
它是最基础的收集算法，后续的收集算法都是基于这种思路并对其缺点进行改进而得到的。

- **缺点：**
它的主要缺点有两个：一个是效率问题，标记和清除过程的效率都不高；另外一个是空间问题，标记清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致，当程序在以后的运行过程中需要分配较大对象时无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。

<img src="java/assets/jvm/mark-sweep.jpg" width="600"/>

### 复制(Copying)

- **“复制”（Copying）** 
复制算法在标记清除算法的基础上，针对内存碎片问题做了一下优化，此算法把内存分为大小相同的两块，每次在使用的时候只使用其中的一块。
当一块内存用完的时候。把存活对象复制到另外的一块中，然后清除当前这块中的所有的对象，如此反复。
- **缺点：**
使用当前算法，解决了内存碎片化严重的问题，但是存在缺陷就是每次只使用一般的空间，空间利用率受到影响。同时对于存活周期长的对象，复制次数多。

<img src="java/assets/jvm/copying.jpg" width="600"/>

### 标记整理(Mark-Compact)
复制收集算法在对象存活率较高时就要执行较多的复制操作，效率将会变低。更关键的是，如果不想浪费50%的空间，就需要有额外的空间进行分配担保，
以应对被使用的内存中所有对象都100%存活的极端情况，所以在老年代一般不能直接选用这种算法。

根据老年代的特点，有人提出了另外一种“标记-整理”（Mark-Compact）算法，标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象进行清理，
而是让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存

<img src="java/assets/jvm/mark-compact.jpg" width="600"/>

### 分代收集算法(Generational Collection)
GC分代的基于一个假设：绝大部分对象的生命周期都非常短暂，存活时间短。

“分代收集”（Generational Collection）算法，把Java堆分为新生代和老年代，这样就可以根据各个年代的特点采用最适当的收集算法。
- 新生代中，每次垃圾收集时都发现有大批对象死去，只有少量存活，那就选用复制算法，只需要付出少量存活对象的复制成本就可以完成收集。
- 老年代中因为对象存活率高、没有额外空间对它进行分配担保，就必须使用“标记-清理”或“标记-整理”算法来进行回收。

## 垃圾收器及常用组合

- 新生代
  - Serial收集器（单线程）
  - ParNew收集器（多线程）
  - Parallel Scavenge收集器

- 老年代
  - Serial Old(MSC)收集器
  - Parallel Old收集器
  - CMS(Concurrent Mark Sweep)收集器

- 新老年代都适合
  - G1收集器
  
参考：[常见JVM垃圾收集器一览](https://www.jianshu.com/p/ab2b0d97d3f8)

--- 
参考链接
- [jvm系列(三):java GC算法 垃圾收集器](https://www.cnblogs.com/ityouknow/p/5614961.html)
- [常见JVM垃圾收集器一览](https://www.jianshu.com/p/ab2b0d97d3f8)