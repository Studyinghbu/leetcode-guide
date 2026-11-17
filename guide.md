# 力扣面试经典 150 题 · Python 学习手册

整理日期：2026-11-17。范围：面试经典 150 题，不是热题 100，两份题单有重合。

官方题单：https://leetcode.cn/studyplan/top-interview-150/

## 怎样使用这份手册

1. 点击每题原题链接，先读输入、输出、数据范围和示例。本手册不重复收录完整题面。
2. 自己思考 15～25 分钟。卡住时先看思路，暂时遮住代码。
3. 在力扣选择 Python3，保留题目函数签名，填写实现，然后运行、提交。
4. 做完后用自己的话解释：为什么这样做、为什么不会漏解、时间和空间消耗是多少。
5. 次日不看答案重写；一周后复习错题。先练基础模块，再做回溯、图和动态规划。

## 面试时如何给出答案

按“澄清题意 → 简单方案 → 优化依据 → 写代码 → 验证 → 复杂度”表达。
例如两数之和：先说枚举两数需要 O(n²)；再说明用字典保存已见数字的位置，每次查找 target-x；先查再存，避免重复使用同一个元素；最后说明平均时间 O(n)、额外空间 O(n)。

验证时检查：最小输入、空输入（题目允许时）、重复值、负数、边界索引；链表检查断链和成环，树检查空子树，动态规划检查初始化和遍历顺序。

## Python 环境与代码说明

网页版无需安装环境。每题代码独立使用，不能把 150 个 Solution 类合并运行。ListNode、TreeNode、Node 等结构通常由力扣提供；本地运行需要自己补充定义和调用示例。
参考实现可能省略平台预置的导入。按代码需要添加下面的标准库导入（不要求每题全部添加）：

```python
from typing import List, Optional
from collections import defaultdict, Counter, deque, OrderedDict
from functools import cache, lru_cache
from itertools import pairwise, accumulate
from heapq import heappush, heappop, heapify, heapreplace, heappushpop
from bisect import bisect_left, bisect_right
from math import inf, gcd, sqrt
from random import choice, randint
```

遇到深递归输入时要留意 Python 递归深度，必要时改用显式栈。涉及 Python 负数位运算的题，注意题目要求的 32 位范围。

## 来源与许可

本手册按官方题单主题重新编排。每题解法说明与 Python 参考实现摘编自 **Doocs / leetcode 项目及其贡献者**，并在每题提供来源链接；整理工作包括筛选首个完整解法、去除其他语言与完整题面、添加学习指引、索引和可搜索页面。不是声称全部代码为本次原创。
源项目：https://github.com/doocs/leetcode 。本手册依 **CC BY-SA 4.0** 共享：https://creativecommons.org/licenses/by-sa/4.0/ 。原题版权归相应权利人所有。
已检查 150 道题数量、唯一题号、代码完整性和 Python 语法；未逐题提交力扣评测，复杂度说明保留来源分析，实际提交结果以平台为准。

## 题目目录


### 数组与字符串

- [88. 合并两个有序数组](#q88)
- [27. 移除元素](#q27)
- [26. 删除有序数组中的重复项](#q26)
- [80. 删除有序数组中的重复项 II](#q80)
- [169. 多数元素](#q169)
- [189. 轮转数组](#q189)
- [121. 买卖股票的最佳时机](#q121)
- [122. 买卖股票的最佳时机 II](#q122)
- [55. 跳跃游戏](#q55)
- [45. 跳跃游戏 II](#q45)
- [274. H 指数](#q274)
- [380. O(1) 时间插入、删除和获取随机元素](#q380)
- [238. 除了自身以外数组的乘积](#q238)
- [134. 加油站](#q134)
- [135. 分发糖果](#q135)
- [42. 接雨水](#q42)
- [13. 罗马数字转整数](#q13)
- [12. 整数转罗马数字](#q12)
- [58. 最后一个单词的长度](#q58)
- [14. 最长公共前缀](#q14)
- [151. 反转字符串中的单词](#q151)
- [6. Z 字形变换](#q6)
- [28. 找出字符串中第一个匹配项的下标](#q28)
- [68. 文本左右对齐](#q68)

### 双指针

- [125. 验证回文串](#q125)
- [392. 判断子序列](#q392)
- [167. 两数之和 II - 输入有序数组](#q167)
- [11. 盛最多水的容器](#q11)
- [15. 三数之和](#q15)

### 滑动窗口

- [209. 长度最小的子数组](#q209)
- [3. 无重复字符的最长子串](#q3)
- [30. 串联所有单词的子串](#q30)
- [76. 最小覆盖子串](#q76)

### 矩阵

- [36. 有效的数独](#q36)
- [54. 螺旋矩阵](#q54)
- [48. 旋转图像](#q48)
- [73. 矩阵置零](#q73)
- [289. 生命游戏](#q289)

### 哈希表

- [383. 赎金信](#q383)
- [205. 同构字符串](#q205)
- [290. 单词规律](#q290)
- [242. 有效的字母异位词](#q242)
- [49. 字母异位词分组](#q49)
- [1. 两数之和](#q1)
- [202. 快乐数](#q202)
- [219. 存在重复元素 II](#q219)
- [128. 最长连续序列](#q128)

### 区间

- [228. 汇总区间](#q228)
- [56. 合并区间](#q56)
- [57. 插入区间](#q57)
- [452. 用最少数量的箭引爆气球](#q452)

### 栈

- [20. 有效的括号](#q20)
- [71. 简化路径](#q71)
- [155. 最小栈](#q155)
- [150. 逆波兰表达式求值](#q150)
- [224. 基本计算器](#q224)

### 链表

- [141. 环形链表](#q141)
- [2. 两数相加](#q2)
- [21. 合并两个有序链表](#q21)
- [138. 随机链表的复制](#q138)
- [92. 反转链表 II](#q92)
- [25. K 个一组翻转链表](#q25)
- [19. 删除链表的倒数第 N 个结点](#q19)
- [82. 删除排序链表中的重复元素 II](#q82)
- [61. 旋转链表](#q61)
- [86. 分隔链表](#q86)
- [146. LRU 缓存](#q146)

### 二叉树

- [104. 二叉树的最大深度](#q104)
- [100. 相同的树](#q100)
- [226. 翻转二叉树](#q226)
- [101. 对称二叉树](#q101)
- [105. 从前序与中序遍历序列构造二叉树](#q105)
- [106. 从中序与后序遍历序列构造二叉树](#q106)
- [117. 填充每个节点的下一个右侧节点指针 II](#q117)
- [114. 二叉树展开为链表](#q114)
- [112. 路径总和](#q112)
- [129. 求根节点到叶节点数字之和](#q129)
- [124. 二叉树中的最大路径和](#q124)
- [173. 二叉搜索树迭代器](#q173)
- [222. 完全二叉树的节点个数](#q222)
- [236. 二叉树的最近公共祖先](#q236)

### 二叉树层序遍历

- [199. 二叉树的右视图](#q199)
- [637. 二叉树的层平均值](#q637)
- [102. 二叉树的层序遍历](#q102)
- [103. 二叉树的锯齿形层序遍历](#q103)

### 二叉搜索树

- [530. 二叉搜索树的最小绝对差](#q530)
- [230. 二叉搜索树中第 K 小的元素](#q230)
- [98. 验证二叉搜索树](#q98)

### 图

- [200. 岛屿数量](#q200)
- [130. 被围绕的区域](#q130)
- [133. 克隆图](#q133)
- [399. 除法求值](#q399)
- [207. 课程表](#q207)
- [210. 课程表 II](#q210)

### 图的广度优先搜索

- [909. 蛇梯棋](#q909)
- [433. 最小基因变化](#q433)
- [127. 单词接龙](#q127)

### 字典树

- [208. 实现 Trie (前缀树)](#q208)
- [211. 添加与搜索单词 - 数据结构设计](#q211)
- [212. 单词搜索 II](#q212)

### 回溯

- [17. 电话号码的字母组合](#q17)
- [77. 组合](#q77)
- [46. 全排列](#q46)
- [39. 组合总和](#q39)
- [52. N 皇后 II](#q52)
- [22. 括号生成](#q22)
- [79. 单词搜索](#q79)

### 分治

- [108. 将有序数组转换为二叉搜索树](#q108)
- [148. 排序链表](#q148)
- [427. 建立四叉树](#q427)
- [23. 合并 K 个升序链表](#q23)

### 最大子数组

- [53. 最大子数组和](#q53)
- [918. 环形子数组的最大和](#q918)

### 二分查找

- [35. 搜索插入位置](#q35)
- [74. 搜索二维矩阵](#q74)
- [162. 寻找峰值](#q162)
- [33. 搜索旋转排序数组](#q33)
- [34. 在排序数组中查找元素的第一个和最后一个位置](#q34)
- [153. 寻找旋转排序数组中的最小值](#q153)
- [4. 寻找两个正序数组的中位数](#q4)

### 堆

- [215. 数组中的第K个最大元素](#q215)
- [502. IPO](#q502)
- [373. 查找和最小的 K 对数字](#q373)
- [295. 数据流的中位数](#q295)

### 位运算

- [67. 二进制求和](#q67)
- [190. 颠倒二进制位](#q190)
- [191. 位1的个数](#q191)
- [136. 只出现一次的数字](#q136)
- [137. 只出现一次的数字 II](#q137)
- [201. 数字范围按位与](#q201)

### 数学

- [9. 回文数](#q9)
- [66. 加一](#q66)
- [172. 阶乘后的零](#q172)
- [69. x 的平方根](#q69)
- [50. Pow(x, n)](#q50)
- [149. 直线上最多的点数](#q149)

### 一维动态规划

- [70. 爬楼梯](#q70)
- [198. 打家劫舍](#q198)
- [139. 单词拆分](#q139)
- [322. 零钱兑换](#q322)
- [300. 最长递增子序列](#q300)

### 多维动态规划

- [120. 三角形最小路径和](#q120)
- [64. 最小路径和](#q64)
- [63. 不同路径 II](#q63)
- [5. 最长回文子串](#q5)
- [97. 交错字符串](#q97)
- [72. 编辑距离](#q72)
- [123. 买卖股票的最佳时机 III](#q123)
- [188. 买卖股票的最佳时机 IV](#q188)
- [221. 最大正方形](#q221)

## 数组与字符串


<a id="q88"></a>

### 88. 合并两个有序数组

[打开原题](https://leetcode.cn/problems/merge-sorted-array) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0088.Merge%20Sorted%20Array/README.md)

### 方法一：双指针



> **思考**
>
> 另开数组、从前往后双指针合并再写回 $\textit{nums1}$，结果正确。 $m + n \le 200$，时间没有压力，却要 $O(m + n)$ 额外空间，也不满足原地改写。
>
> 从前往后写会覆盖 $\textit{nums1}$ 里尚未读出的数。空位却集中在尾部。因此可以从后往前：先放置当前较大者，不会踩到未处理元素。
>
> 用 $i$、 $j$ 分别扫两段有效末尾， $k$ 写合并后的末尾，直到 $\textit{nums2}$ 耗尽即可。



我们注意到数组的有序性，可以使用双指针的方法，从后向前遍历两个数组，每次取两个数组中较大的一个放进合并后的数组的最后面。

具体地，我们用两个指针 $i$ 和 $j$ 分别指向两个数组的末尾，用一个指针 $k$ 指向合并后的数组的末尾。每次比较两个数组的末尾元素，将较大的元素放在合并后的数组的末尾，然后将指针向前移动一位，重复这个过程，直到两个数组的指针都指向了数组的开头。

时间复杂度 $O(m + n)$，空间复杂度 $O(1)$。其中 $m$ 和 $n$ 分别是两个数组的长度。

**Python 参考答案**

```python
class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        k = m + n - 1
        i, j = m - 1, n - 1
        while j >= 0:
            if i >= 0 and nums1[i] > nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1
```


<a id="q27"></a>

### 27. 移除元素

[打开原题](https://leetcode.cn/problems/remove-element) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0027.Remove%20Element/README.md)

### 方法一：一次遍历



> **思考**
>
> 题目要求原地移除所有等于 $\textit{val}$ 的元素。若另开数组拷贝剩余元素，时间 $O(n)$， $n \le 100$ 可以接受，但多一次分配并不必要。
>
> 若每次删除都把后面的元素整体前移，最坏时间 $O(n^2)$。评测只要求前 $k$ 个位置覆盖全部非 $\textit{val}$ 元素，相对顺序可以改变。
>
> 因此不必真正「删除」，把需要保留的值依次覆盖到数组前部即可。用 $k$ 记录已写下的个数，遇 $x \neq \textit{val}$ 则写入 $\textit{nums}[k]$ 并将 $k$ 加一。一遍扫描，额外空间 $O(1)$。



我们用变量 $k$ 记录当前不等于 $\textit{val}$ 的元素个数。

遍历数组 $\textit{nums}$，如果当前元素 $x$ 不等于 $\textit{val}$，则将 $x$ 赋值给 $\textit{nums}[k]$，并将 $k$ 自增 $1$。

最后返回 $k$ 即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        k = 0
        for x in nums:
            if x != val:
                nums[k] = x
                k += 1
        return k
```


<a id="q26"></a>

### 26. 删除有序数组中的重复项

[打开原题](https://leetcode.cn/problems/remove-duplicates-from-sorted-array) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0026.Remove%20Duplicates%20from%20Sorted%20Array/README.md)

### 方法一：一次遍历



> **思考**
>
> 数组已经按非递减排列，重复元素必然相邻。若另开哈希表记录已经出现过的值再写回数组，时间 $O(n)$。在 $n \le 3\times 10^4$ 的数据范围下可以接受，但题目要求原地修改，额外的线性空间并不必要。
>
> 因此判断当前值是否该保留，只需看它是否等于已经写下的最后一个数，而不必全局查表。为此用 $k$ 同时充当写指针与去重后的长度：仅当尚未写下任何元素，或当前值与 $\textit{nums}[k-1]$ 不同时，才覆盖到位置 $k$。一遍扫描，额外空间 $O(1)$。



我们用一个变量 $k$ 记录当前已经处理好的数组的长度，初始时 $k=0$，表示空数组。

然后我们从左到右遍历数组，对于遍历到的每个元素 $x$，如果 $k=0$ 或者 $x \neq \textit{nums}[k-1]$，我们就将 $x$ 放到 $\textit{nums}[k]$ 的位置，然后 $k$ 自增 $1$。否则， $x$ 与 $\textit{nums}[k-1]$ 相同，我们直接跳过这个元素。继续遍历，直到遍历完整个数组。

这样，当遍历结束时， $\textit{nums}$ 中前 $k$ 个元素就是我们要求的答案，且 $k$ 就是答案的长度。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组的长度。

补充：

原问题要求最多相同的数字最多出现 $1$ 次，我们可以扩展至相同的数字最多保留 $k$ 个。

- 由于相同的数字最多保留 $k$ 个，那么原数组的前 $k$ 个元素我们可以直接保留；
- 对于后面的数字，能够保留的前提是：当前数字 $x$ 与前面已保留的数字的倒数第 $k$ 个元素比较，不同则保留，相同则跳过。

相似题目：

- [80. 删除有序数组中的重复项 II](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0080.Remove%20Duplicates%20from%20Sorted%20Array%20II/README.md)

**Python 参考答案**

```python
class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        k = 0
        for x in nums:
            if k == 0 or x != nums[k - 1]:
                nums[k] = x
                k += 1
        return k
```


<a id="q80"></a>

### 80. 删除有序数组中的重复项 II

[打开原题](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0080.Remove%20Duplicates%20from%20Sorted%20Array%20II/README.md)

### 方法一：一次遍历



> **思考**
>
> 另开数组、每个值最多抄写两次可以完成，但题目要求原地修改且额外空间为 $O(1)$。 $n \le 3 \times 10^4$，应当一趟完成。
>
> 由于数组有序，相同值必然相邻。问题 26 保留一次，本题保留至多两次。用 $k$ 表示已保留前缀的长度：当前值 $x$ 可以写入，当且仅当已保留不足两个，或它与倒数第二个保留值不同——否则即为第三次出现。写入 $\textit{nums}[k]$ 后令 $k$ 加一，扫完返回 $k$。



我们用一个变量 $k$ 记录当前已经处理好的数组的长度，初始时 $k=0$，表示空数组。

然后我们从左到右遍历数组，对于遍历到的每个元素 $x$，如果 $k \lt 2$ 或者 $x \neq \textit{nums}[k-2]$，我们就将 $x$ 放到 $\textit{nums}[k]$ 的位置，然后 $k$ 自增 $1$。否则， $x$ 与 $\textit{nums}[k-2]$ 相同，我们直接跳过这个元素。继续遍历，直到遍历完整个数组。

这样，当遍历结束时， $\textit{nums}$ 中前 $k$ 个元素就是我们要求的答案，且 $k$ 就是答案的长度。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组的长度。

补充：

原问题要求最多相同的数字最多出现 $2$ 次，我们可以扩展至相同的数字最多保留 $k$ 个。

- 由于相同的数字最多保留 $k$ 个，那么原数组的前 $k$ 个元素我们可以直接保留；
- 对于后面的数字，能够保留的前提是：当前数字 $x$ 与前面已保留的数字的倒数第 $k$ 个元素比较，不同则保留，相同则跳过。

相似题目：

- [26. 删除有序数组中的重复项](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0026.Remove%20Duplicates%20from%20Sorted%20Array/README.md)

**Python 参考答案**

```python
class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        k = 0
        for x in nums:
            if k < 2 or x != nums[k - 2]:
                nums[k] = x
                k += 1
        return k
```


<a id="q169"></a>

### 169. 多数元素

[打开原题](https://leetcode.cn/problems/majority-element) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0169.Majority%20Element/README.md)

### 方法一：摩尔投票法



> **思考**
>
> 多数元素出现次数超过 $\lfloor n/2\rfloor$，题目保证存在。哈希计数或排序都能做，进阶要 $O(n)$ 时间、 $O(1)$ 空间。 $n\le 5\times 10^4$。
>
> 摩尔投票把不同元素两两抵消：计数器归零就换候选人。多数元素无法被完全抵消，一趟结束后的候选人即答案，无需第二趟确认。



摩尔投票法的基本步骤如下：

初始化元素 $m$，并初始化计数器 $\textit{cnt}=0$。接下来，对于输入列表中每一个元素 $x$：

1. 如果 $\textit{cnt}=0$，那么 $m=x$ 并且 $\textit{cnt}=1$；
1. 否则，如果 $m=x$，那么 $\textit{cnt} = \textit{cnt} + 1$，否则 $\textit{cnt} = \textit{cnt} - 1$。

一般而言，摩尔投票法需要对输入的列表进行**两次遍历**。在第一次遍历中，我们生成候选值 $m$，如果存在多数，那么该候选值就是多数值。在第二次遍历中，只需要简单地计算候选值的频率，以确认是否是多数值。由于本题已经明确说明存在多数值，所以第一次遍历结束后，直接返回 $m$ 即可，无需二次遍历确认是否是多数值。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        cnt = m = 0
        for x in nums:
            if cnt == 0:
                m, cnt = x, 1
            else:
                cnt += 1 if m == x else -1
        return m
```


<a id="q189"></a>

### 189. 轮转数组

[打开原题](https://leetcode.cn/problems/rotate-array) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0189.Rotate%20Array/README.md)

### 方法一：三次翻转



> **思考**
>
> 右旋 $k$ 步。开新数组再拷回是 $O(n)$ 空间； $n\le 10^5$，进阶要原地。右旋 $k$ 位等于「后 $k$ 个移到前面」。整体反转后，前 $k$ 与后 $n-k$ 再各自反转，三段翻转完成轮换，只交换元素。



我们不妨记数组长度为 $n$，然后将 $k$ 对 $n$ 取模，得到实际需要旋转的步数 $k$。

接下来，我们进行三次翻转，即可得到最终结果：

1. 将整个数组翻转
2. 将前 $k$ 个元素翻转
3. 将后 $n - k$ 个元素翻转

举个例子，对于数组 $[1, 2, 3, 4, 5, 6, 7]$, $k = 3$, $n = 7$, $k \bmod n = 3$。

1. 第一次翻转，将整个数组翻转，得到 $[7, 6, 5, 4, 3, 2, 1]$。
2. 第二次翻转，将前 $k$ 个元素翻转，得到 $[5, 6, 7, 4, 3, 2, 1]$。
3. 第三次翻转，将后 $n - k$ 个元素翻转，得到 $[5, 6, 7, 1, 2, 3, 4]$，即为最终结果。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组长度。

**Python 参考答案**

```python
class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        def reverse(i: int, j: int):
            while i < j:
                nums[i], nums[j] = nums[j], nums[i]
                i, j = i + 1, j - 1

        n = len(nums)
        k %= n
        reverse(0, n - 1)
        reverse(0, k - 1)
        reverse(k, n - 1)
```


<a id="q121"></a>

### 121. 买卖股票的最佳时机

[打开原题](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0121.Best%20Time%20to%20Buy%20and%20Sell%20Stock/README.md)

### 方法一：枚举 + 维护前缀最小值



> **思考**
>
> 只能买卖一次，枚举所有买入卖出下标对是 $O(n^2)$； $n$ 可达 $10^5$。对固定卖出日，最优买入价是它之前的最低价。扫描时维护前缀最小值，用当天价格减它更新答案，再把当天纳入前缀最小。



我们可以枚举数组 $\textit{nums}$ 每个元素作为卖出价格，那么我们需要在前面找到一个最小值作为买入价格，这样才能使得利润最大化。

因此，我们用一个变量 $mi$ 维护数组 $\textit{nums}$ 的前缀最小值。接下来遍历数组 $\textit{nums}$，对于每个元素 $v$，计算其与前面元素的最小值 $mi$ 的差值，更新答案为差值的最大值。然后更新 $mi = \min(mi, v)$。继续遍历数组 $\textit{nums}$，直到遍历结束。

最后返回答案即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        ans, mi = 0, inf
        for v in prices:
            ans = max(ans, v - mi)
            mi = min(mi, v)
        return ans
```


<a id="q122"></a>

### 122. 买卖股票的最佳时机 II

[打开原题](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0122.Best%20Time%20to%20Buy%20and%20Sell%20Stock%20II/README.md)

### 方法一：贪心



> **思考**
>
> 可以交易任意次，但不能同时持有。把一段上涨拆成相邻两天的差价再求和，与「谷买峰卖」得到的利润相同。 $n \le 3\times 10^4$。因此遍历相邻两天，只累加正差价。



从第二天开始，如果当天股价大于前一天股价，则在前一天买入，当天卖出，即可获得利润。如果当天股价小于前一天股价，则不买入，不卖出。也即是说，所有上涨交易日都做买卖，所有下跌交易日都不做买卖，最终获得的利润是最大的。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组 $\textit{prices}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        return sum(max(0, b - a) for a, b in pairwise(prices))
```


<a id="q55"></a>

### 55. 跳跃游戏

[打开原题](https://leetcode.cn/problems/jump-game) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0055.Jump%20Game/README.md)

### 方法一：贪心



> **思考**
>
> 题目只关心最后一个下标是否可达。从每个位置展开全部跳跃，或用动态规划判断每个下标能否到达，最坏时间均为 $O(n^2)$。 $n \le 10^4$ 偏紧，且不必记下中间每一步如何跳。
>
> 能到达的下标构成一段前缀：维护当前最远可达位置 $mx$，若出现 $i > mx$，则之后均不可达。
>
> 因此从左扫描，用 $i + \textit{nums}[i]$ 更新 $mx$；若能扫完全部下标，终点即可达。



我们用变量 $mx$ 维护当前能够到达的最远下标，初始时 $mx = 0$。

我们从左到右遍历数组，对于遍历到的每个位置 $i$，如果 $mx \lt i$，说明当前位置无法到达，直接返回 `false`。否则，我们可以通过跳跃从位置 $i$ 到达的最远位置为 $i+\textit{nums}[i]$，我们用 $i+\textit{nums}[i]$ 更新 $mx$ 的值，即 $mx = \max(mx, i + \textit{nums}[i])$。

遍历结束，直接返回 `true`。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组的长度。

相似题目：

- [45. 跳跃游戏 II](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0045.Jump%20Game%20II/README.md)
- [1024. 视频拼接](https://github.com/doocs/leetcode/blob/main/solution/1000-1099/1024.Video%20Stitching/README.md)
- [1326. 灌溉花园的最少水龙头数目](https://github.com/doocs/leetcode/blob/main/solution/1300-1399/1326.Minimum%20Number%20of%20Taps%20to%20Open%20to%20Water%20a%20Garden/README.md)

**Python 参考答案**

```python
class Solution:
    def canJump(self, nums: list[int]) -> bool:
        mx = 0
        for i, x in enumerate(nums):
            if mx < i:
                return False
            mx = max(mx, i + x)
        return True
```


<a id="q45"></a>

### 45. 跳跃游戏 II

[打开原题](https://leetcode.cn/problems/jump-game-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0045.Jump%20Game%20II/README.md)

### 方法一：贪心



> **思考**
>
> 若令 $f[i]$ 为到达下标 $i$ 的最少跳跃次数，再从每个 $i$ 去更新其一步可达的区间，最坏时间 $O(n^2)$。 $n \le 10^4$，且题目保证可达终点，我们只需终点的最少次数，不必为每个下标都算出精确步数。
>
> 第 $k$ 步能覆盖的位置构成一段连续区间，该段内能探到的最远位置，就是第 $k+1$ 步的覆盖右端。维护「当前这一跳的边界」即可按层扩展。
>
> 因此线性扫描时记录下一跳能到的最远位置；走到当前边界就不得不跳一次，并把边界更新为该最远位置。按层贪心等价于 BFS，却不必使用队列。



我们可以用变量 $mx$ 记录当前位置能够到达的最远位置，用变量 $\textit{last}$ 记录上一次跳跃到的位置，用变量 $\textit{ans}$ 记录跳跃的次数。

接下来，我们遍历 $[0,..n - 2]$ 的每一个位置 $i$，对于每一个位置 $i$，我们可以通过 $i + \textit{nums}[i]$ 计算出当前位置能够到达的最远位置，我们用 $mx$ 来记录这个最远位置，即 $mx = \max(mx, i + \textit{nums}[i])$。接下来，判断当前位置是否到达了上一次跳跃的边界，即 $i = \textit{last}$，如果到达了，那么我们就需要进行一次跳跃，将 $\textit{last}$ 更新为 $mx$，并且将跳跃次数 $\textit{ans}$ 增加 $1$。

最后，我们返回跳跃的次数 $\textit{ans}$ 即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是数组的长度。

相似题目：

- [55. 跳跃游戏](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0055.Jump%20Game/README.md)
- [1024. 视频拼接](https://github.com/doocs/leetcode/blob/main/solution/1000-1099/1024.Video%20Stitching/README.md)
- [1326. 灌溉花园的最少水龙头数目](https://github.com/doocs/leetcode/blob/main/solution/1300-1399/1326.Minimum%20Number%20of%20Taps%20to%20Open%20to%20Water%20a%20Garden/README.md)

**Python 参考答案**

```python
class Solution:
    def jump(self, nums: list[int]) -> int:
        ans = mx = last = 0
        for i, x in enumerate(nums[:-1]):
            mx = max(mx, i + x)
            if last == i:
                ans += 1
                last = mx
        return ans
```


<a id="q274"></a>

### 274. H 指数

[打开原题](https://leetcode.cn/problems/h-index) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0274.H-Index/README.md)

### 方法一：排序



> **思考**
>
> $h$ 指数是最大的 $h$ 使得至少 $h$ 篇论文引用不少于 $h$。降序排序后， $\textit{citations}[h-1]\ge h$ 即满足，从大到小找第一个即可。



我们可以先对数组 $\textit{citations}$ 按照元素值从大到小进行排序。然后我们从大到小枚举 $h$ 值，如果某个 $h$ 值满足 $\textit{citations}[h-1] \geq h$，则说明有至少 $h$ 篇论文分别被引用了至少 $h$ 次，直接返回 $h$ 即可。如果没有找到这样的 $h$ 值，说明所有的论文都没有被引用，返回 $0$。

时间复杂度 $O(n \log n)$，空间复杂度 $O(\log n)$。其中 $n$ 是数组 $\textit{citations}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def hIndex(self, citations: list[int]) -> int:
        citations.sort(reverse=True)
        for h in range(len(citations), 0, -1):
            if citations[h - 1] >= h:
                return h
        return 0
```


<a id="q380"></a>

### 380. O(1) 时间插入、删除和获取随机元素

[打开原题](https://leetcode.cn/problems/insert-delete-getrandom-o1) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0380.Insert%20Delete%20GetRandom%20O%281%29/README.md)

### 方法一：哈希表 + 动态列表



> **思考**
>
> 集合支持插入、删除与等概率随机，均须 $O(1)$。仅哈希表无法按下标随机；仅动态数组删除为 $O(n)$。
>
> 数组存元素，哈希表存下标。插入追加到末尾；删除时与末尾交换再弹出，并更新被换元素的下标。随机即在数组上 `choice`。



我们定义一个动态列表 $q$，用于存储集合中的元素，定义一个哈希表 $d$，用于存储每个元素在 $q$ 中的下标。

插入元素时，如果元素已经存在于哈希表 $d$ 中，直接返回 `false`；否则，我们将元素插入到动态列表 $q$ 的末尾，同时将元素和其在 $q$ 中的下标插入到哈希表 $d$ 中，最后返回 `true`。

删除元素时，如果元素不存在于哈希表 $d$ 中，直接返回 `false`；否则，我们从哈希表中获取元素在列表 $q$ 中的下标 $i$，然后将列表 $q$ 的最后一个元素 $q[-1]$ 与 $q[i]$ 交换，然后将哈希表中 $q[-1]$ 的下标更新为 $i$，最后将 $q$ 的最后一个元素删除，同时将元素从哈希表中删除，最后返回 `true`。

获取随机元素时，我们从动态列表 $q$ 中随机选择一个元素返回即可。

时间复杂度 $O(1)$，空间复杂度 $O(n)$。其中 $n$ 为集合中元素的个数。

**Python 参考答案**

```python
class RandomizedSet:
    def __init__(self):
        self.d = {}
        self.q = []

    def insert(self, val: int) -> bool:
        if val in self.d:
            return False
        self.d[val] = len(self.q)
        self.q.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.d:
            return False
        i = self.d[val]
        self.d[self.q[-1]] = i
        self.q[i] = self.q[-1]
        self.q.pop()
        self.d.pop(val)
        return True

    def getRandom(self) -> int:
        return choice(self.q)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```


<a id="q238"></a>

### 238. 除了自身以外数组的乘积

[打开原题](https://leetcode.cn/problems/product-of-array-except-self) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0238.Product%20of%20Array%20Except%20Self/README.md)

### 方法一：两次遍历



> **思考**
>
> 除自身外的乘积等于左侧积乘右侧积。若先开两个数组存前缀、后缀积，空间不是常数。
>
> 先从左往右把前缀积写入答案，再从右往左用一个变量累乘后缀并乘入答案，从而只用输出数组。



我们定义两个变量 $\textit{left}$ 和 $\textit{right}$，分别表示当前元素左边所有元素的乘积和右边所有元素的乘积。初始时 $\textit{left}=1$, $\textit{right}=1$。定义一个长度为 $n$ 的答案数组 $\textit{ans}$。

我们先从左到右遍历数组，对于遍历到的第 $i$ 个元素，我们用 $\textit{left}$ 更新 $\textit{ans}[i]$，然后 $\textit{left}$ 乘以 $\textit{nums}[i]$。

然后，我们从右到左遍历数组，对于遍历到的第 $i$ 个元素，我们更新 $\textit{ans}[i]$ 为 $\textit{ans}[i] \times \textit{right}$，然后 $\textit{right}$ 乘以 $\textit{nums}[i]$。

遍历结束后，返回答案数组 $\textit{ans}$。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        n = len(nums)
        ans = [0] * n
        left = right = 1
        for i, x in enumerate(nums):
            ans[i] = left
            left *= x
        for i in range(n - 1, -1, -1):
            ans[i] *= right
            right *= nums[i]
        return ans
```


<a id="q134"></a>

### 134. 加油站

[打开原题](https://leetcode.cn/problems/gas-station) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0134.Gas%20Station/README.md)

### 方法一：从任意起点开始遍历



> **思考**
>
> 问能否走完一圈以及从哪一站出发。 $n\le 10^5$，从每个起点模拟一圈是 $O(n^2)$。总油量小于总消耗则无解。
>
> 从某站出发油量为负，说明起点必须更靠前才能「补贴」这段亏空。代码从末站起向前扩起点、向后扩终点，亏空时把 $i$ 左移补油，每个站进出一次，最后看剩余是否非负。



我们用 $i$, $j$ 分别标记起点和终点，用 $s$ 表示当前剩余汽油，而 $\textit{cnt}$ 表示当前行驶过的加油站数量。初始时，我们将起点设在最后一个位置，即 $i=n-1$。

开始行驶，移动 $j$。若发现当前剩余汽油小于 $0$，说明当前 $i$ 作为起点不符合要求，我们将起点 $i$ 循环左移，并且更新剩余汽油，直至剩余汽油是非负数。

当行驶过的加油站数量达到 $n$ 时，结束行驶过程。若此时剩余汽油 $s$ 仍然小于 $0$，说明不存在这样的起点，返回 $-1$。否则，返回起点 $i$。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 表示加油站的数量。

**Python 参考答案**

```python
class Solution:
    def canCompleteCircuit(self, gas: list[int], cost: list[int]) -> int:
        n = len(gas)
        i = j = n - 1
        cnt = s = 0
        while cnt < n:
            s += gas[j] - cost[j]
            cnt += 1
            j = (j + 1) % n
            while s < 0 and cnt < n:
                i -= 1
                s += gas[i] - cost[i]
                cnt += 1
        return -1 if s < 0 else i
```


<a id="q135"></a>

### 135. 分发糖果

[打开原题](https://leetcode.cn/problems/candy) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0135.Candy/README.md)

### 方法一：两次遍历



> **思考**
>
> 相邻评分更高的人必须拿更多糖，求最少总数。 $n\le 5\times 10^4$，按评分排序再分配可以，但要小心相等评分。左右约束互相独立：从左扫一遍满足「比左边高则多一颗」，从右再扫一遍满足右边，每人取两侧要求的较大值，两边的递增链都不会被破坏。



我们初始化两个数组 $\textit{left}$ 和 $\textit{right}$，其中 $\textit{left}[i]$ 表示当前孩子比左边孩子评分高时，当前孩子至少应该获得的糖果数，而 $\textit{right}[i]$ 表示当前孩子比右边孩子评分高时，当前孩子至少应该获得的糖果数。初始时 $\textit{left}[i]=1$, $\textit{right}[i]=1$。

我们从左到右遍历一遍，如果当前孩子比左边孩子评分高，则 $\textit{left}[i]=\textit{left}[i-1]+1$；同理，我们从右到左遍历一遍，如果当前孩子比右边孩子评分高，则 $\textit{right}[i]=\textit{right}[i+1]+1$。

最后，我们遍历一遍评分数组，每个孩子至少应该获得的糖果数为 $\textit{left}[i]$ 和 $\textit{right}[i]$ 中的最大值，将它们累加起来即为答案。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是评分数组的长度。

**Python 参考答案**

```python
class Solution:
    def candy(self, ratings: list[int]) -> int:
        n = len(ratings)
        left = [1] * n
        right = [1] * n
        for i in range(1, n):
            if ratings[i] > ratings[i - 1]:
                left[i] = left[i - 1] + 1
        for i in range(n - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                right[i] = right[i + 1] + 1
        return sum(max(a, b) for a, b in zip(left, right))
```


<a id="q42"></a>

### 42. 接雨水

[打开原题](https://leetcode.cn/problems/trapping-rain-water) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0042.Trapping%20Rain%20Water/README.md)

### 方法一：动态规划



> **思考**
>
> 位置 $i$ 能接的雨水量等于 $\min(\textit{leftMax}, \textit{rightMax}) - \textit{height}[i]$。若对每个 $i$ 都向左右重新扫描最高柱，时间复杂度为 $O(n^2)$。 $n \le 2 \times 10^4$，容易超时。
>
> 左侧最高只取决于 $i$ 及其左边，右侧最高只取决于 $i$ 及其右边，都可以线性预处理。用两个数组分别记录每个位置「含自身」的左侧最高柱与右侧最高柱，再对每个位置取两侧最小值减去自身高度并求和。



我们定义 $\textit{left}[i]$ 表示下标 $i$ 位置及其左边的最高柱子的高度，定义 $\textit{right}[i]$ 表示下标 $i$ 位置及其右边的最高柱子的高度。那么下标 $i$ 位置能接的雨水量为 $\min(\textit{left}[i], \textit{right}[i]) - \textit{height}[i]$。我们遍历数组，计算出 $\textit{left}[i]$ 和 $\textit{right}[i]$，最后答案为 $\sum_{i=0}^{n-1} \min(\textit{left}[i], \textit{right}[i]) - \textit{height}[i]$。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为数组的长度。

**Python 参考答案**

```python
class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)
        left = [height[0]] * n
        right = [height[-1]] * n
        for i in range(1, n):
            left[i] = max(left[i - 1], height[i])
            right[n - i - 1] = max(right[n - i], height[n - i - 1])
        return sum(min(l, r) - h for l, r, h in zip(left, right, height))
```


<a id="q13"></a>

### 13. 罗马数字转整数

[打开原题](https://leetcode.cn/problems/roman-to-integer) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0013.Roman%20to%20Integer/README.md)

### 方法一：哈希表 + 模拟



> **思考**
>
> 从左到右扫描，遇到 $\textit{IV}$、 $\textit{IX}$ 等六种减法组合再特殊处理，其余字符直接累加，在 $|s| \le 15$ 的范围内可以接受，但特例容易遗漏。
>
> 一个字符应当减去，当且仅当它比右侧相邻字符小；末位永远是加。因此不必枚举那六种组合。我们可以用哈希表记录每个字符的数值，从左到右比较相邻两位以决定正负，最后补上末位即可。



我们先用哈希表 $d$ 记录每个字符对应的数值，然后从左到右遍历字符串 $s$，如果当前字符对应的数值小于右边字符对应的数值，则减去当前字符对应的数值，否则加上当前字符对应的数值。

时间复杂度 $O(n)$，空间复杂度 $O(m)$。其中 $n$ 和 $m$ 分别为字符串 $s$ 的长度和字符集的大小。

**Python 参考答案**

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        d = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        return sum((-1 if d[a] < d[b] else 1) * d[a] for a, b in pairwise(s)) + d[s[-1]]
```


<a id="q12"></a>

### 12. 整数转罗马数字

[打开原题](https://leetcode.cn/problems/integer-to-roman) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0012.Integer%20to%20Roman/README.md)

### 方法一：贪心



> **思考**
>
> 按千、百、十、个分别查表，再单独处理 $4$、 $9$ 的减法写法，在 $1 \le \textit{num} \le 3999$ 的范围内可以接受，但普通累加与减法形式要分成两套规则，分支多、容易遗漏。
>
> 注意到，若把 $\textit{CM}=900$、 $\textit{CD}=400$、 $\textit{XC}=90$ 等也视为独立面额，罗马数字就变成一组从大到小的固定面值。题目保证表示唯一，因此每次选取还能放下的最大面额一定合法。我们按面额从大到小扫描，当前剩余值不小于该面额时便减去并拼接对应符号。



我们可以先将所有可能的符号 $cs$ 和对应的数值 $vs$ 列出来，然后从大到小枚举每个数值 $vs[i]$，每次尽可能多地使用该数值对应的符号 $cs[i]$，直到数字 $\textit{num}$ 变为 $0$。

时间复杂度 $O(m)$，空间复杂度 $O(m)$。其中 $m$ 为符号的个数。

**Python 参考答案**

```python
class Solution:
    def intToRoman(self, num: int) -> str:
        cs = ('M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I')
        vs = (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
        ans = []
        for c, v in zip(cs, vs):
            while num >= v:
                num -= v
                ans.append(c)
        return ''.join(ans)
```


<a id="q58"></a>

### 58. 最后一个单词的长度

[打开原题](https://leetcode.cn/problems/length-of-last-word) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0058.Length%20of%20Last%20Word/README.md)

### 方法一：逆向遍历 + 双指针



> **思考**
>
> 题目保证至少有一个单词，答案只取决于最后一个单词的长度。若按空格切分再取末段， $n \le 10^4$ 可以通过，但会扫完整串并分配若干子串。
>
> 中间的单词无需处理。最后一个单词贴在串尾，其右侧可能还有空格。
>
> 因此从右向左先跳过尾部空格，再继续走到该单词的左边界，两端下标之差即为长度。



我们从字符串 $s$ 末尾开始遍历，找到第一个不为空格的字符，即为最后一个单词的最后一个字符，下标记为 $i$。然后继续向前遍历，找到第一个为空格的字符，即为最后一个单词的第一个字符的前一个字符，记为 $j$。那么最后一个单词的长度即为 $i - j$。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为字符串 $s$ 长度。

**Python 参考答案**

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        while i >= 0 and s[i] == ' ':
            i -= 1
        j = i
        while j >= 0 and s[j] != ' ':
            j -= 1
        return i - j
```


<a id="q14"></a>

### 14. 最长公共前缀

[打开原题](https://leetcode.cn/problems/longest-common-prefix) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0014.Longest%20Common%20Prefix/README.md)

### 方法一：字符比较



> **思考**
>
> 拿第一个字符串作为候选前缀，再依次用其余字符串去截短它，时间复杂度为 $O(nm)$。 $n, m \le 200$，可以接受。字典树也能维护公共前缀，但对这道题而言结构过重。
>
> 公共前缀只会变短：某一列一旦对不上，更长的前缀不可能存在。把各串按列对齐，第 $i$ 列全部相同，才可能把前缀延长到位置 $i$。因此以 $\textit{strs}[0]$ 为基准按列比较，遇到长度不够或字符不同就立即返回，不必先建树。



我们以第一个字符串 $\textit{strs}[0]$ 为基准，依次比较后面的字符串的第 $i$ 个字符是否与 $\textit{strs}[0]$ 的第 $i$ 个字符相同，如果相同则继续比较下一个字符，否则返回 $\textit{strs}[0]$ 的前 $i$ 个字符。

遍历结束，说明所有字符串的前 $i$ 个字符都相同，返回 $\textit{strs}[0]$ 即可。

时间复杂度 $O(nm)$，空间复杂度 $O(1)$。其中 $n$ 和 $m$ 分别为字符串数组的长度以及字符串的最小长度。

**Python 参考答案**

```python
class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        for i in range(len(strs[0])):
            for s in strs[1:]:
                if len(s) <= i or s[i] != strs[0][i]:
                    return s[:i]
        return strs[0]
```


<a id="q151"></a>

### 151. 反转字符串中的单词

[打开原题](https://leetcode.cn/problems/reverse-words-in-a-string) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0151.Reverse%20Words%20in%20a%20String/README.md)

### 方法一：双指针



> **思考**
>
> 要反转单词顺序并挤掉多余空格。 $n\le 10^4$。用双指针扫描，跳过空格后截出每个单词，收集后再整体反转拼接，首尾与词间空格自然消失。



我们可以使用双指针 $i$ 和 $j$，每次找到一个单词，将其添加到结果列表中，最后将结果列表反转，再拼接成字符串即可。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为字符串的长度。

**Python 参考答案**

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        words = []
        i, n = 0, len(s)
        while i < n:
            while i < n and s[i] == " ":
                i += 1
            if i < n:
                j = i
                while j < n and s[j] != " ":
                    j += 1
                words.append(s[i:j])
                i = j
        return " ".join(words[::-1])
```


<a id="q6"></a>

### 6. Z 字形变换

[打开原题](https://leetcode.cn/problems/zigzag-conversion) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0006.Zigzag%20Conversion/README.md)

### 方法一：模拟



> **思考**
>
> 按照 Z 字形将字符填入网格再按行读出，时间与空间均为线性。 $n \le 10^3$ 可以接受，然而网格中多数位置为空，列这一维并不出现在最终输出中。
>
> 决定答案的只有每个字符所在的行，以及同一行内的相对顺序。行号沿 $0,1,\ldots,\textit{numRows}-1$ 往复变化，到达顶端或底端后改变方向。
>
> 为此只需维护 $\textit{numRows}$ 个列表，用方向变量 $k$ 在边界处取反。将 $k$ 的初值设为 $-1$，遇到第一行时立即翻转为向下。当 $\textit{numRows}=1$ 时顶与底重合，应直接返回原串，否则会在同一行上反复转向。



我们用一个二维数组 $g$ 来模拟 Z 字形排列的过程，其中 $g[i][j]$ 表示第 $i$ 行第 $j$ 列的字符。初始时 $i = 0$，另外我们定义一个方向变量 $k$，初始时 $k = -1$，表示向上走。

我们从左到右遍历字符串 $s$，每次遍历到一个字符 $c$，将其追加到 $g[i]$ 中。如果此时 $i = 0$ 或者 $i = \textit{numRows} - 1$，说明当前字符位于 Z 字形排列的拐点，我们将 $k$ 的值反转，即 $k = -k$。接下来，我们将 $i$ 的值更新为 $i + k$，即向上或向下移动一行。继续遍历下一个字符，直到遍历完字符串 $s$，我们返回 $g$ 中所有行拼接后的字符串即可。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为字符串 $s$ 的长度。

**Python 参考答案**

```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        g = [[] for _ in range(numRows)]
        i, k = 0, -1
        for c in s:
            g[i].append(c)
            if i == 0 or i == numRows - 1:
                k = -k
            i += k
        return ''.join(chain(*g))
```


<a id="q28"></a>

### 28. 找出字符串中第一个匹配项的下标

[打开原题](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0028.Find%20the%20Index%20of%20the%20First%20Occurrence%20in%20a%20String/README.md)

### 方法一：遍历



> **思考**
>
> 若以 $\textit{haystack}$ 的每个位置 $i$ 为起点，检查长度为 $m$ 的子串是否等于 $\textit{needle}$，时间复杂度为 $O((n-m)m)$。在 $n,m \le 10^4$ 的数据范围下可以接受。
>
> 我们只关心第一次出现的下标，因此一旦某起点匹配成功即可返回；失配则换下一个 $i$，不必收集全部出现位置。窗口之间不复用比较结果，直接比对即可，额外空间 $O(1)$。



以字符串 $\textit{haystack}$ 的每一个字符为起点与字符串 $\textit{needle}$ 进行比较，若发现能够匹配的索引，直接返回即可。

假设字符串 $\textit{haystack}$ 长度为 $n$，字符串 $\textit{needle}$ 长度为 $m$，则时间复杂度为 $O((n-m)m)$，空间复杂度 $O(1)$。

**Python 参考答案**

```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n, m = len(haystack), len(needle)
        for i in range(n - m + 1):
            if haystack[i : i + m] == needle:
                return i
        return -1
```


<a id="q68"></a>

### 68. 文本左右对齐

[打开原题](https://leetcode.cn/problems/text-justification) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0068.Text%20Justification/README.md)

### 方法一：模拟



> **思考**
>
> 题目要求尽可能多地往每一行放置单词，再用空格补齐到 $\textit{maxWidth}$。单词数不超过 $300$、行宽不超过 $100$，从左到右贪心取词即可，不必回溯。
>
> 复杂度并不构成瓶颈，需要仔细处理的是空格分配：最后一行以及只含一个单词的行必须左对齐；其余行应将多余空格尽量均分，不能均分时左侧间隙多放一格。因此先取出本行能放下的单词，再按是否为末行、单词数是否为 $1$ 分成两种排版。



根据题意模拟即可，注意，如果是最后一行，或者这一行只有一个单词，那么要左对齐，否则要均匀分配空格。

时间复杂度 $O(L)$，空间复杂度 $O(L)$。其中 $L$ 为所有单词的长度之和。

**Python 参考答案**

```python
class Solution:
    def fullJustify(self, words: list[str], maxWidth: int) -> list[str]:
        ans = []
        i, n = 0, len(words)
        while i < n:
            t = []
            cnt = len(words[i])
            t.append(words[i])
            i += 1
            while i < n and cnt + 1 + len(words[i]) <= maxWidth:
                cnt += 1 + len(words[i])
                t.append(words[i])
                i += 1
            if i == n or len(t) == 1:
                left = ' '.join(t)
                right = ' ' * (maxWidth - len(left))
                ans.append(left + right)
                continue
            space_width = maxWidth - (cnt - len(t) + 1)
            w, m = divmod(space_width, len(t) - 1)
            row = []
            for j, s in enumerate(t[:-1]):
                row.append(s)
                row.append(' ' * (w + (1 if j < m else 0)))
            row.append(t[-1])
            ans.append(''.join(row))
        return ans
```


## 双指针


<a id="q125"></a>

### 125. 验证回文串

[打开原题](https://leetcode.cn/problems/valid-palindrome) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0125.Valid%20Palindrome/README.md)

### 方法一：双指针



> **思考**
>
> 判断忽略大小写与非字母数字后的串是否回文。先筛出合法字符再反转比较， $n \le 2\times 10^5$ 时间可以，但要额外 $O(n)$ 空间。
>
> 回文只需对称位置相等。两端指针同时向中间走：遇到非法字符就跳过，合法字符则忽略大小写比较。一次扫描、常数空间即可。



我们用双指针 $i$ 和 $j$ 分别指向字符串 $s$ 的两端，接下来循环以下过程，直至 $i \geq j$：

1. 如果 $s[i]$ 不是字母或数字，指针 $i$ 右移一位，继续下一次循环；
1. 如果 $s[j]$ 不是字母或数字，指针 $j$ 左移一位，继续下一次循环；
1. 如果 $s[i]$ 和 $s[j]$ 的小写形式不相等，返回 `false`；
1. 否则，指针 $i$ 右移一位，指针 $j$ 左移一位，继续下一次循环。

循环结束，返回 `true`。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是字符串 $s$ 的长度。

**Python 参考答案**

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        i, j = 0, len(s) - 1
        while i < j:
            if not s[i].isalnum():
                i += 1
            elif not s[j].isalnum():
                j -= 1
            elif s[i].lower() != s[j].lower():
                return False
            else:
                i, j = i + 1, j - 1
        return True
```


<a id="q392"></a>

### 392. 判断子序列

[打开原题](https://leetcode.cn/problems/is-subsequence) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0392.Is%20Subsequence/README.md)

### 方法一：双指针



> **思考**
>
> 判断 $s$ 是否为 $t$ 的子序列。对 $s$ 每个字符在 $t$ 中找下一个出现即可。双指针一次扫描。
>
> $i$ 指向 $s$， $j$ 扫 $t$：相等则 $i$ 前进。 $i$ 走到末尾则是子序列。



我们定义两个指针 $i$ 和 $j$，分别指向字符串 $s$ 和 $t$ 的初始位置。每次我们比较两个指针指向的字符，如果相同，则两个指针同时右移；如果不同，则只有 $j$ 右移。当指针 $i$ 移动到字符串 $s$ 的末尾时，说明 $s$ 是 $t$ 的子序列。

时间复杂度 $O(m + n)$，空间复杂度 $O(1)$。其中 $m$ 和 $n$ 分别是字符串 $s$ 和 $t$ 的长度。

**Python 参考答案**

```python
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = j = 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)
```


<a id="q167"></a>

### 167. 两数之和 II - 输入有序数组

[打开原题](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0167.Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted/README.md)

### 方法一：二分查找



> **思考**
>
> 有序数组上的两数之和，下标从 $1$ 计，恰好一对答案。哈希表是 $O(n)$ 空间。对每个 $\textit{numbers}[i]$ 在右侧二分 $\textit{target}-\textit{numbers}[i]$， $n\le 3\times 10^4$，时间 $O(n \log n)$，空间 $O(1)$。



我们注意到数组按照非递减顺序排列，因此对于每个 $\textit{numbers}[i]$，可以通过二分查找的方式找到 $\textit{target} - \textit{numbers}[i]$ 的位置，如果存在，那么返回 $[i + 1, j + 1]$ 即可。

时间复杂度 $O(n \log n)$，空间复杂度 $O(1)$。其中 $n$ 为数组 $\textit{numbers}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        n = len(numbers)
        for i in range(n - 1):
            x = target - numbers[i]
            j = bisect_left(numbers, x, lo=i + 1)
            if j < n and numbers[j] == x:
                return [i + 1, j + 1]
```


<a id="q11"></a>

### 11. 盛最多水的容器

[打开原题](https://leetcode.cn/problems/container-with-most-water) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0011.Container%20With%20Most%20Water/README.md)

### 方法一：双指针



> **思考**
>
> 若枚举所有下标对 $(i, j)$，面积为 $\min(\textit{height}[i], \textit{height}[j]) \times (j - i)$，时间复杂度为 $O(n^2)$。 $n \le 10^5$，无法通过。
>
> 容器的高度由较短的那根线决定。从最宽的区间 $[0, n-1]$ 出发：若向内移动较高的一端，宽度减小，高度仍受较短边限制，面积不会变大。因此每次应当舍弃较短的那根，尝试碰到更高的边。用左右指针向中间收缩，每次移动较矮的一侧，每个下标至多访问一次。



我们使用两个指针 $l$ 和 $r$ 分别指向数组的左右两端，即 $l = 0$，而 $r = n - 1$，其中 $n$ 是数组的长度。

接下来，我们使用变量 $\textit{ans}$ 记录容器的最大容量，初始化为 $0$。

然后，我们开始进行循环，每次循环中，我们计算当前容器的容量，即 $\textit{min}(\textit{height}[l], \textit{height}[r]) \times (r - l)$，并将其与 $\textit{ans}$ 进行比较，将较大值赋给 $\textit{ans}$。然后，我们判断 $\textit{height}[l]$ 和 $\textit{height}[r]$ 的大小，如果 $\textit{height}[l] < \textit{height}[r]$，移动 $r$ 指针不会使得结果变得更好，因为容器的高度由较短的那根垂直线决定，所以我们移动 $l$ 指针。反之，我们移动 $r$ 指针。

遍历结束后，返回 $\textit{ans}$ 即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{height}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def maxArea(self, height: list[int]) -> int:
        l, r = 0, len(height) - 1
        ans = 0
        while l < r:
            t = min(height[l], height[r]) * (r - l)
            ans = max(ans, t)
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return ans
```


<a id="q15"></a>

### 15. 三数之和

[打开原题](https://leetcode.cn/problems/3sum) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0015.3Sum/README.md)

### 方法一：排序 + 双指针



> **思考**
>
> 三重循环枚举后再用集合去重，时间复杂度为 $O(n^3)$。 $n \le 3000$，无法通过。固定一个数后，问题退化为两数之和，哈希表可以将时间降至 $O(n^2)$，但去重较繁琐，也需要额外空间。
>
> 题目并不要求三元组按原顺序返回。先将数组排序，重复元素会相邻，便于跳过；有序之后，两数之和可以用左右指针在线性时间内完成。若 $\textit{nums}[i] > 0$，其后均为正数，三数之和不可能为 $0$，可以直接结束。因此排序后枚举第一个数，在右侧用双指针夹逼即可。



我们注意到，题目不要求我们按照顺序返回三元组，因此我们不妨先对数组进行排序，这样就可以方便地跳过重复的元素。

接下来，我们枚举三元组的第一个元素 $\textit{nums}[i]$，其中 $0 \leq i \lt n - 2$。对于每个 $i$，我们可以通过维护两个指针 $j = i + 1$ 和 $k = n - 1$，从而找到满足 $\textit{nums}[i] + \textit{nums}[j] + \textit{nums}[k] = 0$ 的 $j$ 和 $k$。在枚举的过程中，我们需要跳过重复的元素，以避免出现重复的三元组。

具体判断逻辑如下：

如果 $i \gt 0$ 并且 $\textit{nums}[i] = \textit{nums}[i - 1]$，则说明当前枚举的元素与上一个元素相同，我们可以直接跳过，因为不会产生新的结果。

如果 $\textit{nums}[i] \gt 0$，则说明当前枚举的元素大于 $0$，则三数之和必然无法等于 $0$，结束枚举。

否则，我们令左指针 $j = i + 1$，右指针 $k = n - 1$，当 $j \lt k$ 时，执行循环，计算三数之和 $x = \textit{nums}[i] + \textit{nums}[j] + \textit{nums}[k]$，并与 $0$ 比较：

- 如果 $x \lt 0$，则说明 $\textit{nums}[j]$ 太小，我们需要将 $j$ 右移一位。
- 如果 $x \gt 0$，则说明 $\textit{nums}[k]$ 太大，我们需要将 $k$ 左移一位。
- 否则，说明我们找到了一个合法的三元组，将其加入答案，并将 $j$ 右移一位，将 $k$ 左移一位，同时跳过所有重复的元素，继续寻找下一个合法的三元组。

枚举结束后，我们即可得到三元组的答案。

时间复杂度 $O(n^2)$，空间复杂度 $O(\log n)$。其中 $n$ 为数组的长度。

**Python 参考答案**

```python
class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        n = len(nums)
        ans = []
        for i in range(n - 2):
            if nums[i] > 0:
                break
            if i and nums[i] == nums[i - 1]:
                continue
            j, k = i + 1, n - 1
            while j < k:
                x = nums[i] + nums[j] + nums[k]
                if x < 0:
                    j += 1
                elif x > 0:
                    k -= 1
                else:
                    ans.append([nums[i], nums[j], nums[k]])
                    j, k = j + 1, k - 1
                    while j < k and nums[j] == nums[j - 1]:
                        j += 1
                    while j < k and nums[k] == nums[k + 1]:
                        k -= 1
        return ans
```


## 滑动窗口


<a id="q209"></a>

### 209. 长度最小的子数组

[打开原题](https://leetcode.cn/problems/minimum-size-subarray-sum) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0209.Minimum%20Size%20Subarray%20Sum/README.md)

### 方法一：前缀和 + 二分查找



> **思考**
>
> 枚举全部子数组求和需 $O(n^2)$。元素均为正整数，前缀和单调递增，固定左端后最短右端可用二分定位。
>
> 为此先求前缀和 $s$，对每个 $s[i]$ 二分最小的 $j$ 使 $s[j] \ge s[i]+\textit{target}$，用 $j-i$ 更新最短长度。



我们先预处理出数组 $\textit{nums}$ 的前缀和数组 $s$，其中 $s[i]$ 表示数组 $\textit{nums}$ 前 $i$ 项元素之和。由于数组 $\textit{nums}$ 中的元素都是正整数，因此数组 $s$ 也是单调递增的。另外，我们初始化答案 $\textit{ans} = n + 1$，其中 $n$ 为数组 $\textit{nums}$ 的长度。

接下来，我们遍历前缀和数组 $s$，对于其中的每个元素 $s[i]$，我们可以通过二分查找的方法找到满足 $s[j] \geq s[i] + \textit{target}$ 的最小下标 $j$，如果 $j \leq n$，则说明存在满足条件的子数组，我们可以更新答案，即 $\textit{ans} = \min(\textit{ans}, j - i)$。

最后，如果 $\textit{ans} \leq n$，则说明存在满足条件的子数组，返回 $\textit{ans}$，否则返回 $0$。

时间复杂度 $O(n \log n)$，空间复杂度 $O(n)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        n = len(nums)
        s = list(accumulate(nums, initial=0))
        ans = n + 1
        for i, x in enumerate(s):
            j = bisect_left(s, x + target)
            if j <= n:
                ans = min(ans, j - i)
        return ans if ans <= n else 0
```


<a id="q3"></a>

### 3. 无重复字符的最长子串

[打开原题](https://leetcode.cn/problems/longest-substring-without-repeating-characters) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0003.Longest%20Substring%20Without%20Repeating%20Characters/README.md)

### 方法一：滑动窗口



> **思考**
>
> 若枚举所有子串再判断是否含有重复字符，时间复杂度至少为 $O(n^2)$。 $n \le 10^5$，无法通过。
>
> 子串之间大量重叠：一旦区间 $[l, r]$ 已经不含重复字符，右端再纳入字符 $c$ 时，只需处理 $c$ 是否在窗口内再次出现，而不必重新扫描整段。若出现重复，合法解不可能再包含左侧多出来的那个 $c$，应当右移 $l$。用计数表维护 $\textit{cnt}[c]$，大于 $1$ 时收缩左端，直到 $c$ 只出现一次；此时当前窗口就是以 $r$ 结尾的最长无重复子串。



我们可以用两个指针 $l$ 和 $r$ 维护一个滑动窗口，使其始终满足窗口内没有重复字符，初始时 $l$ 和 $r$ 都指向字符串的第一个字符。用一个哈希表或者长度为 $128$ 的数组 $\textit{cnt}$ 来记录每个字符出现的次数，其中 $\textit{cnt}[c]$ 表示字符 $c$ 出现的次数。

接下来，我们依次移动右指针 $r$，每次移动时，将 $\textit{cnt}[s[r]]$ 的值加 $1$，然后判断当前窗口 $[l, r]$ 内 $\textit{cnt}[s[r]]$ 是否大于 $1$，如果大于 $1$，说明当前窗口内有重复字符，我们需要移动左指针 $l$，直到窗口内没有重复字符为止。然后，我们更新答案 $\textit{ans} = \max(\textit{ans}, r - l + 1)$。

最终，我们返回答案 $\textit{ans}$ 即可。

时间复杂度 $O(n)$，空间复杂度 $O(|\Sigma|)$。其中 $n$ 为字符串的长度，而 $\Sigma$ 表示字符集，这里 $\Sigma$ 的大小为 $128$。

**Python 参考答案**

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        cnt = Counter()
        ans = l = 0
        for r, c in enumerate(s):
            cnt[c] += 1
            while cnt[c] > 1:
                cnt[s[l]] -= 1
                l += 1
            ans = max(ans, r - l + 1)
        return ans
```


<a id="q30"></a>

### 30. 串联所有单词的子串

[打开原题](https://leetcode.cn/problems/substring-with-concatenation-of-all-words) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0030.Substring%20with%20Concatenation%20of%20All%20Words/README.md)

### 方法一：哈希表 + 滑动窗口



> **思考**
>
> 串联子串的长度固定为 $n\cdot k$。若枚举 $s$ 的每个起点再判断该窗口是否为 $\textit{words}$ 的某个排列，每个窗口还需切成 $n$ 段，时间约为 $O(mnk)$。在 $m \le 10^4$、 $n \le 5000$、 $k \le 30$ 的范围下无法通过。
>
> 单词等长，合法窗口的起点必然落在模 $k$ 的同一剩余类中，且相邻窗口只相差一个单词。因此词频可以用哈希表沿窗口差分维护，而不必每个起点重新统计。对齐方式只有 $k$ 种。
>
> 为此对每个余数 $i \in [0, k)$ 维护一个滑动窗口：右端每次纳入一个长为 $k$ 的词；词不在 $\textit{cnt}$ 中则整窗作废；某词次数过多则收缩左端；窗口恰好含 $n$ 个词时记下左端。每个字符进出窗口常数次，总时间 $O(mk)$。



我们用哈希表 $\textit{cnt}$ 统计 $\textit{words}$ 中每个单词出现的次数，用哈希表 $\textit{cnt1}$ 统计当前滑动窗口中每个单词出现的次数。我们记字符串 $s$ 的长度为 $m$，字符串数组 $\textit{words}$ 中单词的数量为 $n$，每个单词的长度为 $k$。

我们可以枚举滑动窗口的起点 $i$，其中 $0 \lt i \lt k$。对于每个起点，我们维护一个滑动窗口，左边界为 $l$，右边界为 $r$，滑动窗口中的单词个数为 $t$，另外用一个哈希表 $\textit{cnt1}$ 统计滑动窗口中每个单词出现的次数。

每一次，我们提取字符串 $s[r:r+k]$，如果 $s[r:r+k]$ 不在哈希表 $\textit{cnt}$ 中，说明当前滑动窗口中的单词不合法，我们将左边界 $l$ 更新为 $r$，同时将哈希表 $\textit{cnt1}$ 清空，单词个数 $t$ 重置为 0。如果 $s[r:r+k]$ 在哈希表 $\textit{cnt}$ 中，说明当前滑动窗口中的单词合法，我们将单词个数 $t$ 加 1，将哈希表 $\textit{cnt1}$ 中 $s[r:r+k]$ 的次数加 1。如果 $\textit{cnt1}[s[r:r+k]]$ 大于 $\textit{cnt}[s[r:r+k]]$，说明当前滑动窗口中 $s[r:r+k]$ 出现的次数过多，我们需要将左边界 $l$ 右移，直到 $\textit{cnt1}[s[r:r+k]] = \textit{cnt}[s[r:r+k]]$。如果 $t = n$，说明当前滑动窗口中的单词正好合法，我们将左边界 $l$ 加入答案数组。

时间复杂度 $O(mk)$，空间复杂度 $O(nk)$。其中 $m$ 和 $n$ 分别是字符串 $s$ 和字符串数组 $\textit{words}$ 的长度，而 $k$ 是字符串数组 $\textit{words}$ 中单词的长度。

**Python 参考答案**

```python
class Solution:
    def findSubstring(self, s: str, words: list[str]) -> list[int]:
        cnt = Counter(words)
        m, n = len(s), len(words)
        k = len(words[0])
        ans = []
        for i in range(k):
            l = r = i
            cnt1 = Counter()
            while r + k <= m:
                t = s[r : r + k]
                r += k
                if cnt[t] == 0:
                    l = r
                    cnt1.clear()
                    continue
                cnt1[t] += 1
                while cnt1[t] > cnt[t]:
                    rem = s[l : l + k]
                    l += k
                    cnt1[rem] -= 1
                if r - l == n * k:
                    ans.append(l)
        return ans
```


<a id="q76"></a>

### 76. 最小覆盖子串

[打开原题](https://leetcode.cn/problems/minimum-window-substring) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0076.Minimum%20Window%20Substring/README.md)

### 方法一：计数 + 双指针



> **思考**
>
> 若枚举 $s$ 的所有子串再检查是否覆盖 $t$，窗口有 $O(m^2)$ 个， $m \le 10^5$ 无法通过。进阶要求 $O(m+n)$。
>
> 覆盖一旦成立，左端多余字符可以移出窗口；尚未覆盖则只能继续右扩。因此维护 $t$ 的字符配额 $\textit{need}$、窗口计数 $\textit{window}$，并用 $\textit{cnt}$ 记录已经凑齐的必要出现次数，判断覆盖只需常数时间。右指针扫描 $s$，窗口合法时尽量收缩左端并记录最短区间。



我们用一个哈希表或数组 $\textit{need}$ 统计字符串 $t$ 中每个字符出现的次数，用另一个哈希表或数组 $\textit{window}$ 统计滑动窗口中每个字符出现的次数。另外，定义两个指针 $l$ 和 $r$ 分别指向窗口的左右边界，变量 $\textit{cnt}$ 表示窗口中已经包含了 $t$ 中的多少个字符，变量 $k$ 和 $mi$ 分别表示最小覆盖子串的起始位置和长度。

我们从左到右遍历字符串 $s$，对于当前遍历到的字符 $s[r]$：

- 我们将其加入窗口中，即 $\textit{window}[s[r]] = \textit{window}[s[r]] + 1$，如果此时 $\textit{need}[s[r]] \geq \textit{window}[s[r]]$，则说明 $s[r]$ 是一个「必要的字符」，我们将 $\textit{cnt}$ 加一。
- 如果 $\textit{cnt}$ 等于 $t$ 的长度，说明此时窗口中已经包含了 $t$ 中的所有字符，我们就可以尝试更新最小覆盖子串的起始位置和长度了。如果 $r - l + 1 < mi$，说明当前窗口表示的子串更短，我们就更新 $mi = r - l + 1$ 和 $k = l$。
- 然后，我们尝试移动左边界 $l$，如果此时 $\textit{need}[s[l]] \geq \textit{window}[s[l]]$，则说明 $s[l]$ 是一个「必要的字符」，移动左边界时会把 $s[l]$ 这个字符从窗口中移除，因此我们需要将 $\textit{cnt}$ 减一，然后更新 $\textit{window}[s[l]] = \textit{window}[s[l]] - 1$，并将 $l$ 右移一位。
- 如果 $\textit{cnt}$ 与 $t$ 的长度不相等，说明此时窗口中还没有包含 $t$ 中的所有字符，我们就不需要移动左边界了，直接将 $r$ 右移一位，继续遍历即可。

遍历结束，如果没有找到最小覆盖子串，返回空字符串，否则返回 $s[k:k+mi]$ 即可。

时间复杂度 $O(m + n)$，空间复杂度 $O(|\Sigma|)$。其中 $m$ 和 $n$ 分别是字符串 $s$ 和 $t$ 的长度；而 $|\Sigma|$ 是字符集的大小，本题中 $|\Sigma| = 128$。

**Python 参考答案**

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = Counter(t)
        window = Counter()
        cnt = l = 0
        k, mi = -1, inf
        for r, c in enumerate(s):
            window[c] += 1
            if need[c] >= window[c]:
                cnt += 1
            while cnt == len(t):
                if r - l + 1 < mi:
                    mi = r - l + 1
                    k = l
                if need[s[l]] >= window[s[l]]:
                    cnt -= 1
                window[s[l]] -= 1
                l += 1
        return "" if k < 0 else s[k : k + mi]
```


## 矩阵


<a id="q36"></a>

### 36. 有效的数独

[打开原题](https://leetcode.cn/problems/valid-sudoku) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0036.Valid%20Sudoku/README.md)

### 方法一：一次遍历



> **思考**
>
> 对每个已填数字再扫描它所在的行、列与宫，棋盘仅为 $9 \times 9$，时间可以接受。同一行、列、宫却会被反复访问。
>
> 判定有效性只需知道「这一行 / 列 / 宫是否已经出现过数字 $v$」。我们可以用三张布尔表 $\textit{row}[i][v]$、 $\textit{col}[j][v]$、 $\textit{sub}[k][v]$ 在一次遍历中记录，其中宫号 $k = \lfloor i/3 \rfloor \times 3 + \lfloor j/3 \rfloor$。若碰到已经出现过的数字，立即返回假。



有效的数独满足以下三个条件：

- 每一行中的数字都不重复；
- 每一列中的数字都不重复；
- 每一个 $3 \times 3$ 的宫格中的数字都不重复。

遍历数独，对于每个数字，判断其所在的行、列 以及 $3 \times 3$ 的宫格是否已经出现过该数字，如果是，则返回 `false`。遍历结束，返回 `true`。

时间复杂度 $O(C)$，空间复杂度 $O(C)$。其中 $C$ 是数独中的空格数。本题中 $C=81$。

**Python 参考答案**

```python
class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        row = [[False] * 9 for _ in range(9)]
        col = [[False] * 9 for _ in range(9)]
        sub = [[False] * 9 for _ in range(9)]
        for i in range(9):
            for j in range(9):
                c = board[i][j]
                if c == '.':
                    continue
                num = int(c) - 1
                k = i // 3 * 3 + j // 3
                if row[i][num] or col[j][num] or sub[k][num]:
                    return False
                row[i][num] = True
                col[j][num] = True
                sub[k][num] = True
        return True
```


<a id="q54"></a>

### 54. 螺旋矩阵

[打开原题](https://leetcode.cn/problems/spiral-matrix) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0054.Spiral%20Matrix/README.md)

### 方法一：模拟



> **思考**
>
> 矩阵规模至多 $10 \times 10$，按层剥皮、每层四向走一圈再收缩边界可以通过，但剩下一行或一列时边界很容易写错。
>
> 螺旋的本质是沿当前方向前进，下一步越界或已访问则右转。四种方向可用数组循环切换，访问过的格子用 $\textit{vis}$ 标记。
>
> 从左上角出发走满 $m \times n$ 步，即可得到遍历序列。



我们可以模拟整个遍历的过程，用 $i$ 和 $j$ 分别表示当前访问到的元素的行和列，用 $k$ 表示当前的方向，用数组或哈希表 $\textit{vis}$ 记录每个元素是否被访问过。每次我们访问到一个元素后，将其标记为已访问，然后按照当前的方向前进一步，如果前进一步后发现越界或者已经访问过，则改变方向继续前进，直到遍历完整个矩阵。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别是矩阵的行数和列数。

**Python 参考答案**

```python
class Solution:
    def spiralOrder(self, matrix: list[list[int]]) -> list[int]:
        m, n = len(matrix), len(matrix[0])
        dirs = (0, 1, 0, -1, 0)
        vis = [[False] * n for _ in range(m)]
        i = j = k = 0
        ans = []
        for _ in range(m * n):
            ans.append(matrix[i][j])
            vis[i][j] = True
            x, y = i + dirs[k], j + dirs[k + 1]
            if x < 0 or x >= m or y < 0 or y >= n or vis[x][y]:
                k = (k + 1) % 4
            i += dirs[k]
            j += dirs[k + 1]
        return ans
```


<a id="q48"></a>

### 48. 旋转图像

[打开原题](https://leetcode.cn/problems/rotate-image) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0048.Rotate%20Image/README.md)

### 方法一：原地翻转



> **思考**
>
> 顺时针旋转 $90^\circ$ 的映射是 $\textit{matrix}[i][j] \to \textit{matrix}[j][n-1-i]$。若新开矩阵按此赋值，时间和空间都是 $O(n^2)$。 $n \le 20$ 时额外空间足够，但题目要求原地修改。
>
> 该映射可拆成两个可原地完成的操作：先上下翻转，再沿主对角线翻转（转置）。
>
> $(i, j)$ 先到 $(n-1-i, j)$，再转到 $(j, n-1-i)$，恰好是目标位置。两次交换即可，额外空间 $O(1)$。



根据题目要求，我们实际上需要将 $\textit{matrix}[i][j]$ 旋转至 $\textit{matrix}[j][n - i - 1]$。

我们可以先对矩阵进行上下翻转，即 $\textit{matrix}[i][j]$ 和 $\textit{matrix}[n - i - 1][j]$ 进行交换，然后再对矩阵进行主对角线翻转，即 $\textit{matrix}[i][j]$ 和 $\textit{matrix}[j][i]$ 进行交换。这样就能将 $\textit{matrix}[i][j]$ 旋转至 $\textit{matrix}[j][n - i - 1]$ 了。

时间复杂度 $O(n^2)$，空间复杂度 $O(1)$。其中 $n$ 是矩阵的边长。

**Python 参考答案**

```python
class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        n = len(matrix)
        for i in range(n >> 1):
            for j in range(n):
                matrix[i][j], matrix[n - i - 1][j] = matrix[n - i - 1][j], matrix[i][j]
        for i in range(n):
            for j in range(i):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
```


<a id="q73"></a>

### 73. 矩阵置零

[打开原题](https://leetcode.cn/problems/set-matrix-zeroes) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0073.Set%20Matrix%20Zeroes/README.md)

### 方法一：数组标记



> **思考**
>
> 若遇到 $0$ 立刻把该行该列清零，尚未扫描到的原有 $0$ 会被覆盖，后续无法区分哪些零是原始的。另开一份 $O(mn)$ 矩阵再写回可以避免混淆，但进阶已经否定这笔空间。 $m, n \le 200$，两遍扫描在时间上可行。
>
> 因此先记录「哪些行、哪些列应当置零」，再统一修改。长度为 $m$ 的行标记与长度为 $n$ 的列标记已经足够：第一遍遇零只打标，第二遍按标记置零。额外空间从 $O(mn)$ 降到 $O(m+n)$，尚未达到进阶要求的常数空间。



设矩阵的行数和列数分别为 $m$ 和 $n$。我们用长度为 $m$ 的数组 $\textit{row}$ 和长度为 $n$ 的数组 $\textit{col}$ 记录哪些行、列需要被置零。

先遍历矩阵，遇到零元素就把对应行、列标记为 $\textit{true}$。即若 $\textit{matrix}[i][j] = 0$，则 $\textit{row}[i] = \textit{col}[j] = \textit{true}$。

再遍历一遍矩阵，根据 $\textit{row}$ 和 $\textit{col}$ 的标记更新元素。若 $\textit{row}[i]$ 或 $\textit{col}[j]$ 为 $\textit{true}$，就把 $\textit{matrix}[i][j]$ 置零。

时间复杂度 $O(mn)$，空间复杂度 $O(m + n)$。其中 $m$ 和 $n$ 分别为矩阵的行数和列数。

**Python 参考答案**

```python
class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        m, n = len(matrix), len(matrix[0])
        row = [False] * m
        col = [False] * n
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    row[i] = col[j] = True
        for i in range(m):
            for j in range(n):
                if row[i] or col[j]:
                    matrix[i][j] = 0
```


<a id="q289"></a>

### 289. 生命游戏

[打开原题](https://leetcode.cn/problems/game-of-life) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0289.Game%20of%20Life/README.md)

### 方法一：原地标记



> **思考**
>
> 下一状态依赖当前八邻，若当场改写会污染尚未处理的格子。可用中间状态：活变死记 $2$，死变活记 $-1$，统计邻居时仍把正数视为活。
>
> 扫完后再把 $2$ 落成 $0$、 $-1$ 落成 $1$，从而原地完成。



我们不妨定义两个新的状态，其中状态 $2$ 表示活细胞在下一个状态转为死细胞，状态 $-1$ 表示死细胞在下一个状态转为活细胞。那么，对于当前遍历到的格子，如果格子大于 $0$，就表示当前格子是活细胞，否则就是死细胞。

因此，我们可以遍历整个面板，对于每个格子，统计其周围的活细胞数目，用变量 $\textit{live}$ 表示。如果当前格子是活细胞，那么当 $\textit{live} \lt 2$ 或者 $\textit{live} \gt 3$ 时，当前格子的下一个状态是死细胞，即状态 $2$；如果当前格子是死细胞，那么当 $\textit{live} = 3$ 时，当前格子的下一个状态是活细胞，即状态 $-1$。

最后，我们再遍历一遍面板，将状态 $2$ 的格子更新为死细胞，将状态 $-1$ 的格子更新为活细胞。

时间复杂度 $O(mn)$，空间复杂度 $O(1)$。其中 $m$ 和 $n$ 分别是面板的行数和列数。我们需要遍历整个面板。

**Python 参考答案**

```python
class Solution:
    def gameOfLife(self, board: list[list[int]]) -> None:
        m, n = len(board), len(board[0])
        for i in range(m):
            for j in range(n):
                live = -board[i][j]
                for x in range(i - 1, i + 2):
                    for y in range(j - 1, j + 2):
                        if 0 <= x < m and 0 <= y < n and board[x][y] > 0:
                            live += 1
                if board[i][j] and (live < 2 or live > 3):
                    board[i][j] = 2
                if board[i][j] == 0 and live == 3:
                    board[i][j] = -1
        for i in range(m):
            for j in range(n):
                if board[i][j] == 2:
                    board[i][j] = 0
                elif board[i][j] == -1:
                    board[i][j] = 1
```


## 哈希表


<a id="q383"></a>

### 383. 赎金信

[打开原题](https://leetcode.cn/problems/ransom-note) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0383.Ransom%20Note/README.md)

### 方法一：哈希表或数组



> **思考**
>
> 判断 `ransomNote` 的字母是否都能从 `magazine` 中取出。多重集合包含关系。
>
> 统计杂志字母频次，再扫勒索信逐个减一；任一字母减成负数则不够。字母表大小为 $26$。



我们可以用一个哈希表或长度为 $26$ 的数组 $\textit{cnt}$ 记录字符串 `magazine` 中所有字符出现的次数。然后遍历字符串 `ransomNote`，对于其中的每个字符 $c$，我们将其从 $\textit{cnt}$ 的次数减 $1$，如果减 $1$ 之后的次数小于 $0$，说明 $c$ 在 `magazine` 中出现的次数不够，因此无法构成 `ransomNote`，返回 $\textit{false}$ 即可。

否则，遍历结束后，说明 `ransomNote` 中的每个字符都可以在 `magazine` 中找到对应的字符，因此返回 $\textit{true}$。

时间复杂度 $O(m + n)$，空间复杂度 $O(C)$。其中 $m$ 和 $n$ 分别为字符串 $\textit{ransomNote}$ 和 $\textit{magazine}$ 的长度；而 $C$ 为字符集的大小，本题中 $C = 26$。

**Python 参考答案**

```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        cnt = Counter(magazine)
        for c in ransomNote:
            cnt[c] -= 1
            if cnt[c] < 0:
                return False
        return True
```


<a id="q205"></a>

### 205. 同构字符串

[打开原题](https://leetcode.cn/problems/isomorphic-strings) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0205.Isomorphic%20Strings/README.md)

### 方法一：哈希表或数组



> **思考**
>
> 同构要求 $s$ 与 $t$ 的字符一一对应；仅记录单向映射无法发现多对一。两串等长且字符集有限，一遍扫描即可判定。
>
> 为此维护 $d_1,d_2$ 分别记录 $s\to t$ 与 $t\to s$，一旦与已有映射冲突则返回否，否则更新后继续。



我们可以用两个哈希表或数组 $d_1$ 和 $d_2$ 记录 $s$ 和 $t$ 中字符的映射关系。

遍历 $s$ 和 $t$，如果 $d_1$ 和 $d_2$ 中对应的字符映射关系不同，则返回 `false`，否则更新 $d_1$ 和 $d_2$ 中对应的字符映射关系。遍历结束，说明 $s$ 和 $t$ 是同构的，返回 `true`。

时间复杂度 $O(n)$，空间复杂度 $O(C)$。其中 $n$ 为字符串 $s$ 的长度；而 $C$ 为字符集大小，本题中 $C = 256$。

**Python 参考答案**

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        d1 = {}
        d2 = {}
        for a, b in zip(s, t):
            if (a in d1 and d1[a] != b) or (b in d2 and d2[b] != a):
                return False
            d1[a] = b
            d2[b] = a
        return True
```


<a id="q290"></a>

### 290. 单词规律

[打开原题](https://leetcode.cn/problems/word-pattern) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0290.Word%20Pattern/README.md)

### 方法一：哈希表



> **思考**
>
> 模式与单词须一一对应，长度不等则否。与同构字符串相同，用两张表分别记录字符到单词、单词到字符。
>
> 一旦与已有映射冲突则失败。



我们先将字符串 $s$ 按照空格分割成单词数组 $ws$，如果 $\textit{pattern}$ 和 $ws$ 的长度不相等，直接返回 `false`。否则，我们使用两个哈希表 $d_1$ 和 $d_2$，分别记录 $\textit{pattern}$ 和 $ws$ 中每个字符和单词的对应关系。

接下来，我们遍历 $\textit{pattern}$ 和 $ws$，对于每个字符 $a$ 和单词 $b$，如果 $d_1$ 中存在 $a$ 的映射，且映射的单词不是 $b$，或者 $d_2$ 中存在 $b$ 的映射，且映射的字符不是 $a$，则返回 `false`。否则，我们将 $a$ 和 $b$ 的映射分别加入 $d_1$ 和 $d_2$ 中。

遍历结束后，返回 `true`。

时间复杂度 $O(m + n)$，空间复杂度 $O(m + n)$。其中 $m$ 和 $n$ 分别是 $\textit{pattern}$ 和字符串 $s$ 的长度。

**Python 参考答案**

```python
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        ws = s.split()
        if len(pattern) != len(ws):
            return False
        d1 = {}
        d2 = {}
        for a, b in zip(pattern, ws):
            if (a in d1 and d1[a] != b) or (b in d2 and d2[b] != a):
                return False
            d1[a] = b
            d2[b] = a
        return True
```


<a id="q242"></a>

### 242. 有效的字母异位词

[打开原题](https://leetcode.cn/problems/valid-anagram) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0242.Valid%20Anagram/README.md)

### 方法一：计数



> **思考**
>
> 字母异位词当且仅当字符计数相同。长度不等则可立即否决。
>
> 统计 $s$ 的频次，再扫 $t$ 递减；若某字符减到负数则不是。



我们先判断两个字符串的长度是否相等，如果不相等，说明两个字符串中的字符肯定不同，返回 `false`。

否则，我们用哈希表或者一个长度为 $26$ 的数组来记录字符串 $s$ 中每个字符出现的次数，然后遍历另一个字符串 $t$，每遍历到一个字符，就将哈希表中对应的字符次数减一，如果减一后的次数小于 $0$，说明该字符在两个字符串中出现的次数不同，返回 `false`。如果遍历完两个字符串后，哈希表中的所有字符次数都为 $0$，说明两个字符串中的字符出现次数相同，返回 `true`。

时间复杂度 $O(n)$，空间复杂度 $O(C)$。其中 $n$ 是字符串的长度；而 $C$ 是字符集的大小，本题中 $C=26$。

**Python 参考答案**

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        cnt = Counter(s)
        for c in t:
            cnt[c] -= 1
            if cnt[c] < 0:
                return False
        return True
```


<a id="q49"></a>

### 49. 字母异位词分组

[打开原题](https://leetcode.cn/problems/group-anagrams) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0049.Group%20Anagrams/README.md)

### 方法一：哈希表



> **思考**
>
> 若两两判断是否字母异位，即使对每个串先排序再比较，时间仍为 $O(n^2k \log k)$。 $n \le 10^4$、 $k \le 100$，平方比较容易超时。
>
> 一组异位词排序后得到同一个串，该串可以作为分组的键，不必再成对比较。
>
> 因此以排序后的字符串为键、原串列表为值，扫一遍放入哈希表。同一键自然聚到一起。



1. 遍历字符串，对每个字符串按照**字符字典序**排序，得到一个新的字符串。
2. 以新字符串为 `key`，`[str]` 为 `value`，存入哈希表当中（`HashMap<String, List<String>>`）。
3. 后续遍历得到相同 `key` 时，将其加入到对应的 `value` 当中即可。

以 `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]` 为例，遍历结束时，哈希表的状况：

| key     | value                   |
| ------- | ----------------------- |
| `"aet"` | `["eat", "tea", "ate"]` |
| `"ant"` | `["tan", "nat"] `       |
| `"abt"` | `["bat"] `              |

最后返回哈希表的 `value` 列表即可。

时间复杂度 $O(nk \log k)$。其中 $n$ 和 $k$ 分别是字符串数组的长度和字符串的最大长度。

**Python 参考答案**

```python
class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        d = defaultdict(list)
        for s in strs:
            k = ''.join(sorted(s))
            d[k].append(s)
        return list(d.values())
```


<a id="q1"></a>

### 1. 两数之和

[打开原题](https://leetcode.cn/problems/two-sum) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0001.Two%20Sum/README.md)

### 方法一：哈希表



> **思考**
>
> 若枚举所有数对，时间复杂度为 $O(n^2)$。在 $n \le 10^4$ 的数据范围下可以接受，但题目进阶要求更优的算法。
>
> 对当前元素 $x$，我们需要判断此前是否出现过 $\textit{target} - x$。这是一个查找问题，使用哈希表可以将查找从线性扫描降至期望常数时间。遍历数组的同时，将「值 $\to$ 下标」写入哈希表：遇到 $x$ 时先查询 $\textit{target} - x$ 是否已经出现，若已出现则返回两个下标，否则再将 $x$ 插入。
>
> 插入的时机需要注意：必须先查询、再插入。若先插入再查询，当 $\textit{nums} = [3,3]$ 且 $\textit{target} = 6$ 时，会把同一个下标使用两次。先查后插，配到的一定是更早出现的下标。



我们可以使用一个哈希表 $d$ 来存储每个元素及其对应的索引。

遍历数组 $\textit{nums}$，对于当前元素 $\textit{nums}[i]$，我们首先判断 $\textit{target} - \textit{nums}[i]$ 是否在哈希表 $d$ 中，如果在 $d$ 中，说明 $\textit{target}$ 值已经找到，返回 $\textit{target} - \textit{nums}[i]$ 的索引和 $i$ 即可。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        d = {}
        for i, x in enumerate(nums):
            if (y := target - x) in d:
                return [d[y], i]
            d[x] = i
```


<a id="q202"></a>

### 202. 快乐数

[打开原题](https://leetcode.cn/problems/happy-number) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0202.Happy%20Number/README.md)

### 方法一：哈希表 + 模拟



> **思考**
>
> 按定义反复取各位平方和即可判定，但序列既可能到达 $1$，也可能陷入循环。平方和会迅速落入有限范围，因此可用哈希表记录出现过的数。
>
> 若再现则存在环、不是快乐数；若变为 $1$ 则是。模拟与判重同步进行，空间与值域规模相当。



将每次转换后的数字存入哈希表，如果出现重复数字，说明进入了循环，不是快乐数。否则，如果转换后的数字为 $1$，说明是快乐数。

时间复杂度 $O(\log n)$，空间复杂度 $O(\log n)$。

**Python 参考答案**

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        vis = set()
        while n != 1 and n not in vis:
            vis.add(n)
            x = 0
            while n:
                n, v = divmod(n, 10)
                x += v * v
            n = x
        return n == 1
```


<a id="q219"></a>

### 219. 存在重复元素 II

[打开原题](https://leetcode.cn/problems/contains-duplicate-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0219.Contains%20Duplicate%20II/README.md)

### 方法一：哈希表



> **思考**
>
> 除值相等外，还要求下标差不超过 $k$。排序会打乱下标，需额外记录位置。
>
> 哈希表保存每个值最近一次出现的下标，扫到相同值时检查间距即可。



我们用一个哈希表 $d$ 存放最近遍历到的数以及对应的下标。

遍历数组 $\textit{nums}$，对于当前遍历到的元素 $\textit{nums}[i]$，如果在哈希表中存在，并且下标与当前元素的下标之差不超过 $k$，则返回 $\textit{true}$，否则将当前元素加入哈希表中。

遍历结束后，返回 $\textit{false}$。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:
        d = {}
        for i, x in enumerate(nums):
            if x in d and i - d[x] <= k:
                return True
            d[x] = i
        return False
```


<a id="q128"></a>

### 128. 最长连续序列

[打开原题](https://leetcode.cn/problems/longest-consecutive-sequence) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0128.Longest%20Consecutive%20Sequence/README.md)

### 方法一：哈希表



> **思考**
>
> 排序后扫连续段是 $O(n \log n)$，题目要求 $O(n)$。 $n \le 10^5$。放入哈希集合后，从每个尚未删除的 $x$ 向右延伸，直到断掉，并把这段长度记在起点上，供更早的起点拼接。每个数进出集合一次。



我们可以用一个哈希表 $s$ 存储数组中所有的元素，用一个变量 $\textit{ans}$ 记录最长连续序列的长度，用一个哈希表 $d$ 记录每个元素 $x$ 所在的连续序列的长度。

接下来，我们遍历数组中每个元素 $x$，用一个临时变量 $y$ 记录当前连续序列的最大值，初始时 $y = x$。然后，我们不断尝试匹配 $y+1, y+2, y+3, \dots$，直到匹配不到为止，过程中将匹配到的元素从哈希表 $s$ 中移除。那么，当前元素 $x$ 所在的连续序列的长度即为 $d[x] = d[y] + y - x$，然后更新答案 $\textit{ans} = \max(\textit{ans}, d[x])$。

遍历结束后，返回答案 $\textit{ans}$ 即可。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        s = set(nums)
        ans = 0
        d = defaultdict(int)
        for x in nums:
            y = x
            while y in s:
                s.remove(y)
                y += 1
            d[x] = d[y] + y - x
            ans = max(ans, d[x])
        return ans
```


## 区间


<a id="q228"></a>

### 228. 汇总区间

[打开原题](https://leetcode.cn/problems/summary-ranges) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0228.Summary%20Ranges/README.md)

### 方法一：双指针



> **思考**
>
> 数组已有序且无重复，连续段即相邻差为 $1$ 的最长区间。一次扫描即可切分。
>
> 双指针 $i,j$ 标出一段，直到 $\textit{nums}[j+1]\neq \textit{nums}[j]+1$，再格式化为单点或 $a{\to}b$。



我们可以用双指针 $i$ 和 $j$ 找出每个区间的左右端点。

遍历数组，当 $j + 1 < n$ 且 $\textit{nums}[j + 1] = \textit{nums}[j] + 1$ 时，指针 $j$ 向右移动，否则区间 $[i, j]$ 已经找到，将其加入答案，然后将指针 $i$ 移动到 $j + 1$ 的位置，继续寻找下一个区间。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组长度。

**Python 参考答案**

```python
class Solution:
    def summaryRanges(self, nums: list[int]) -> list[str]:
        def f(i: int, j: int) -> str:
            return str(nums[i]) if i == j else f'{nums[i]}->{nums[j]}'

        i = 0
        n = len(nums)
        ans = []
        while i < n:
            j = i
            while j + 1 < n and nums[j + 1] == nums[j] + 1:
                j += 1
            ans.append(f(i, j))
            i = j + 1
        return ans
```


<a id="q56"></a>

### 56. 合并区间

[打开原题](https://leetcode.cn/problems/merge-intervals) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0056.Merge%20Intervals/README.md)

### 方法一：排序 + 一次遍历



> **思考**
>
> 重叠关系在无序时难以定位。若反复任取区间与其余区间两两合并，最坏时间 $O(n^2)$，且合并顺序杂乱。 $n \le 10^4$ 偏紧。
>
> 按左端点排序后，一个区间只会与「当前尚未闭合的那段」重叠：后续区间的起点更大，不可能跳过中间再叠回来。
>
> 因此排序后扫一遍，用一对端点维护正在合并的区间，一旦与下一个断开就写入答案。



我们可以将区间按照左端点升序排列，然后遍历区间进行合并操作。

具体的合并操作如下。

我们先将第一个区间加入答案，然后依次考虑之后的每个区间：

- 如果答案数组中最后一个区间的右端点小于当前考虑区间的左端点，说明两个区间不会重合，因此我们可以直接将当前区间加入答案数组末尾；
- 否则，说明两个区间重合，我们需要用当前区间的右端点更新答案数组中最后一个区间的右端点，将其置为二者的较大值。

最后，我们返回答案数组即可。

时间复杂度 $O(n \log n)$，空间复杂度 $O(\log n)$。其中 $n$ 为区间个数。

**Python 参考答案**

```python
class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort()
        ans = []
        st, ed = intervals[0]
        for s, e in intervals[1:]:
            if ed < s:
                ans.append([st, ed])
                st, ed = s, e
            else:
                ed = max(ed, e)
        ans.append([st, ed])
        return ans
```


<a id="q57"></a>

### 57. 插入区间

[打开原题](https://leetcode.cn/problems/insert-interval) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0057.Insert%20Interval/README.md)

### 方法一：排序 + 区间合并



> **思考**
>
> 原区间已按左端排好且互不重叠。将 $\textit{newInterval}$ 并入列表后，即可当作普通的「合并区间」处理： $n \le 10^4$，排序加一次扫描的 $O(n \log n)$ 可以通过。
>
> 这一写法没有用上「已经有序」的条件，但实现最短，把插入化归为已有过程。



我们可以先将新区间 $\textit{newInterval}$ 加入到区间列表 `intervals` 中，然后按照区间合并的常规方法进行合并。

时间复杂度 $O(n \log n)$，空间复杂度 $O(n)$。其中 $n$ 是区间的数量。

**Python 参考答案**

```python
class Solution:
    def insert(
        self, intervals: list[list[int]], newInterval: list[int]
    ) -> list[list[int]]:
        def merge(intervals: list[list[int]]) -> list[list[int]]:
            intervals.sort()
            ans = [intervals[0]]
            for s, e in intervals[1:]:
                if ans[-1][1] < s:
                    ans.append([s, e])
                else:
                    ans[-1][1] = max(ans[-1][1], e)
            return ans

        intervals.append(newInterval)
        return merge(intervals)
```


<a id="q452"></a>

### 452. 用最少数量的箭引爆气球

[打开原题](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0400-0499/0452.Minimum%20Number%20of%20Arrows%20to%20Burst%20Balloons/README.md)

### 方法一：排序 + 贪心



> **思考**
>
> 一支箭射穿所有覆盖该点的气球，求最少箭数。这与「用最少点刺穿所有区间」相同。
>
> 按右端升序：当前箭钉在上一个被射中气球的右端；下一个左端若超过该点，必须新射一箭并更新钉点。
>
> 钉在已选区间的右端，能覆盖尽可能多的后续气球；按右端排序保证这一贪心最优。



我们可以将所有气球按照右端点升序排序，然后从左到右遍历气球，维护当前的箭所能覆盖的最右端点 $\textit{last}$，如果当前气球的左端点 $a$ 大于 $\textit{last}$，说明当前箭无法覆盖当前气球，需要额外射出一支箭，那么答案加一，同时更新 $\textit{last}$ 为当前气球的右端点 $b$。

遍历结束后，即可得到答案。

时间复杂度 $O(n \log n)$，空间复杂度 $O(\log n)$。其中 $n$ 为气球的数量。

相似题目：

- [757. 设置交集大小至少为 2](https://github.com/doocs/leetcode/blob/main/solution/0700-0799/0757.Set%20Intersection%20Size%20At%20Least%20Two/README.md)

**Python 参考答案**

```python
class Solution:
    def findMinArrowShots(self, points: list[list[int]]) -> int:
        ans, last = 0, -inf
        for a, b in sorted(points, key=lambda x: x[1]):
            if a > last:
                ans += 1
                last = b
        return ans
```


## 栈


<a id="q20"></a>

### 20. 有效的括号

[打开原题](https://leetcode.cn/problems/valid-parentheses) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0020.Valid%20Parentheses/README.md)

### 方法一：栈



> **思考**
>
> 把已经相邻的 $()$、 $[]$ 和 $\{\}$ 反复从字符串中删去，直到不能再删，结果是正确的。每一轮都要重新扫描， $n \le 10^4$ 时最坏会退化成 $O(n^2)$，括号层层嵌套时也容易超时。
>
> 瓶颈在于配对并不只看相邻的两个字符。后出现的左括号必须先被闭合，更早的左括号还要留在原处；像 $([)]$ 这种交错，局部删除已经无法把字符串消成空串。
>
> 于是匹配是后进先出的：当前右括号唯一合法的对象，就是最近一个尚未闭合的左括号。栈用来记录这些尚未完成的匹配。读到左括号时，把与之对应的右括号压入栈顶，也就是把下一次允许出现的右括号放在最上面；读到右括号时只和栈顶比较。不相等说明类型或顺序已经错了。扫完之后栈里还有元素，则说明仍有左括号没有闭合。



用哈希表 $d$ 记录每种左括号对应的右括号，用栈 $\textit{stk}$ 保存尚未匹配的右括号。从左到右扫描字符串 $s$。当前字符是左括号时，将 $d$ 中对应的右括号压入 $\textit{stk}$；当前字符是右括号时，若 $\textit{stk}$ 为空，或弹出的栈顶与该字符不相等，则返回 `false`。

扫描结束后，若 $\textit{stk}$ 为空，说明每一对括号都按正确的类型和顺序闭合，返回 `true`；否则仍有左括号没有闭合，返回 `false`。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为字符串 $s$ 的长度。

**Python 参考答案**

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stk = []
        d = {'(': ')', '[': ']', '{': '}'}
        for c in s:
            if c in d:
                stk.append(d[c])
            elif not stk or stk.pop() != c:
                return False
        return not stk
```


<a id="q71"></a>

### 71. 简化路径

[打开原题](https://leetcode.cn/problems/simplify-path) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0071.Simplify%20Path/README.md)

### 方法一：栈



> **思考**
>
> Unix 风格路径由目录名与斜杠组成，规范过程需要消除多余斜杠、当前目录 `'.'` 以及返回上级 `'..'`。反复字符串替换在 $n \le 3000$ 时时间上可以接受，但连续斜杠与连续 `'..'` 叠加时规则交叉，顺序不易一次写对。
>
> 路径的本质是目录的进退：有效名字应能被 `'..'` 撤销，空段与 `'.'` 不改变当前位置。这是后进先出的结构，因此用栈保存从根到当前的目录序列。按 `'/'` 切分后逐段处理，根之上不能再退，最后将栈中目录拼成规范路径。



我们先将路径按照 `'/'` 分割成若干个子串，然后遍历每个子串，根据子串的内容进行如下操作：

- 若子串为空，或者为 `'.'`，则不做任何操作，因为 `'.'` 表示当前目录；
- 若子串为 `'..'`，则需要将栈顶元素弹出，因为 `'..'` 表示上一级目录；
- 若子串为其他字符串，则将该子串入栈，因为该子串表示当前目录的子目录。

最后，我们将栈中的所有元素按照从栈底到栈顶的顺序拼接成字符串，即为简化后的规范路径。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为路径的长度。

**Python 参考答案**

```python
class Solution:
    def simplifyPath(self, path: str) -> str:
        stk = []
        for s in path.split('/'):
            if not s or s == '.':
                continue
            if s == '..':
                if stk:
                    stk.pop()
            else:
                stk.append(s)
        return '/' + '/'.join(stk)
```


<a id="q155"></a>

### 155. 最小栈

[打开原题](https://leetcode.cn/problems/min-stack) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0155.Min%20Stack/README.md)

### 方法一：双栈



> **思考**
>
> 栈的 $\textit{getMin}$ 要与 $\textit{push}/\textit{pop}$ 一样 $O(1)$。每次扫描栈底是线性的，调用可达 $3\times 10^4$。最小值只在入栈更小元素或弹出当前最小时变化，因此再维护一个同步的最小栈：每次压入 $\min(x, \text{当前最小})$，弹出时两栈一起弹。



我们用两个栈来实现，其中 `stk1` 用来存储数据，`stk2` 用来存储当前栈中的最小值。初始时，`stk2` 中存储一个极大值。

- 当我们向栈中压入一个元素 $x$ 时，我们将 $x$ 压入 `stk1`，并将 `min(x, stk2[-1])` 压入 `stk2`。
- 当我们从栈中弹出一个元素时，我们将 `stk1` 和 `stk2` 的栈顶元素都弹出。
- 当我们要获取当前栈中的栈顶元素时，我们只需要返回 `stk1` 的栈顶元素即可。
- 当我们要获取当前栈中的最小值时，我们只需要返回 `stk2` 的栈顶元素即可。

每个操作的时间复杂度为 $O(1)$。整体的空间复杂度为 $O(n)$，其中 $n$ 为栈中元素的个数。

**Python 参考答案**

```python
class MinStack:
    def __init__(self):
        self.stk1 = []
        self.stk2 = [inf]

    def push(self, val: int) -> None:
        self.stk1.append(val)
        self.stk2.append(min(val, self.stk2[-1]))

    def pop(self) -> None:
        self.stk1.pop()
        self.stk2.pop()

    def top(self) -> int:
        return self.stk1[-1]

    def getMin(self) -> int:
        return self.stk2[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
```


<a id="q150"></a>

### 150. 逆波兰表达式求值

[打开原题](https://leetcode.cn/problems/evaluate-reverse-polish-notation) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0150.Evaluate%20Reverse%20Polish%20Notation/README.md)

### 方法一



> **思考**
>
> 逆波兰式把运算符写在操作数后面，求值顺序已经确定，不必处理括号与优先级。 $n\le 10^4$。遇到数字入栈，遇到运算符弹出两个操作数计算再压回，栈中始终是尚未消费的中间结果，最后只剩答案。

**复杂度（整理补充）**：时间 O(n)，辅助空间 O(n)，n 为 token 数量。

**Python 参考答案**

```python
import operator


class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        opt = {
            "+": operator.add,
            "-": operator.sub,
            "*": operator.mul,
            "/": operator.truediv,
        }
        s = []
        for token in tokens:
            if token in opt:
                s.append(int(opt[token](s.pop(-2), s.pop(-1))))
            else:
                s.append(int(token))
        return s[0]
```


<a id="q224"></a>

### 224. 基本计算器

[打开原题](https://leetcode.cn/problems/basic-calculator) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0224.Basic%20Calculator/README.md)

### 方法一：栈



> **思考**
>
> 表达式含括号与正负号，不能从左到右直接累加。括号内是一段独立求和，需要在进入时保存外层结果与符号。
>
> 用栈在遇到 $($ 时压入当前 $\textit{ans}$ 与 $\textit{sign}$，括号内重新累计；遇到 $)$ 再弹出，把内层结果乘上外层符号后加回。数字按当前符号并入 $\textit{ans}$。



我们用一个栈 $\textit{stk}$ 来保存当前的计算结果和操作符，用一个变量 $\textit{sign}$ 保存当前的符号，变量 $\textit{ans}$ 保存最终的计算结果。

接下来，我们遍历字符串 $s$ 的每一个字符：

- 如果当前字符是数字，那么我们用一个循环将后面的连续数字都读进来，然后用当前的符号将其加或者减到 $\textit{ans}$ 中。
- 如果当前字符是 `'+'`，我们修改变量 $\textit{sign}$ 为正号。
- 如果当前字符是 `'-'`，我们修改变量 $\textit{sign}$ 为负号。
- 如果当前字符是 `'('`，我们把当前的 $\textit{ans}$ 和 $\textit{sign}$ 入栈，并分别置空置 1，重新开始计算新的 $\textit{ans}$ 和 $\textit{sign}$。
- 如果当前字符是 `')'`，我们弹出栈顶的两个元素，一个是操作符，一个是括号前计算好的数字，我们将当前的数字乘上操作符，再加上之前的数字，作为新的 $\textit{ans}$。

遍历完字符串 $s$ 之后，我们返回 $\textit{ans}$。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是字符串 $s$ 的长度。

**Python 参考答案**

```python
class Solution:
    def calculate(self, s: str) -> int:
        stk = []
        ans, sign = 0, 1
        i, n = 0, len(s)
        while i < n:
            if s[i].isdigit():
                x = 0
                j = i
                while j < n and s[j].isdigit():
                    x = x * 10 + int(s[j])
                    j += 1
                ans += sign * x
                i = j - 1
            elif s[i] == "+":
                sign = 1
            elif s[i] == "-":
                sign = -1
            elif s[i] == "(":
                stk.append(ans)
                stk.append(sign)
                ans, sign = 0, 1
            elif s[i] == ")":
                ans = stk.pop() * ans + stk.pop()
            i += 1
        return ans
```


## 链表


<a id="q141"></a>

### 141. 环形链表

[打开原题](https://leetcode.cn/problems/linked-list-cycle) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0141.Linked%20List%20Cycle/README.md)

### 方法一：哈希表



> **思考**
>
> 判断链表是否有环。 $n\le 10^4$。走过的节点放进哈希表，再次出现即有环；走到空则无环。实现直接，空间 $O(n)$。进阶要求常数空间。



我们可以遍历链表，用一个哈希表 $s$ 记录每个节点。当某个节点二次出现时，则表示存在环，直接返回 `true`。否则链表遍历结束，返回 `false`。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是链表中的节点数。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        s = set()
        while head:
            if head in s:
                return True
            s.add(head)
            head = head.next
        return False
```


<a id="q2"></a>

### 2. 两数相加

[打开原题](https://leetcode.cn/problems/add-two-numbers) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0002.Add%20Two%20Numbers/README.md)

### 方法一：模拟



> **思考**
>
> 题目已经将个位放在链表头部，按位逆序存放，本质上就是竖式加法。若先把链表转成整数再相加，反而绕开了这一结构，也需要处理大整数。
>
> 两条链的长度可能不同，最高位还可能产生额外进位。每一位都是「当前两位数字（缺省为 $0$）与进位 $\textit{carry}$ 之和」，再拆出个位和新的进位。从哑节点依次接上答案节点，两个指针同步前进；循环条件应为 $l_1$、 $l_2$ 或 $\textit{carry}$ 仍未结束，否则像 $[9] + [1]$ 这样的情况会丢失最后的进位。



我们同时遍历两个链表 $l_1$ 和 $l_2$，并使用变量 $\textit{carry}$ 表示当前是否有进位。

每次遍历时，我们取出对应链表的当前位，计算它们与进位 $\textit{carry}$ 的和，然后更新进位的值，最后将当前位的值加入答案链表。如果两个链表都遍历完了，并且进位为 $0$ 时，遍历结束。

最后我们返回答案链表的头节点即可。

时间复杂度 $O(\max(m, n))$，空间复杂度 $O(1)$。其中 $m$ 和 $n$ 分别为两个链表的长度。我们需要遍历两个链表的全部位置，而处理每个位置只需要 $O(1)$ 的时间。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        dummy = ListNode()
        carry, curr = 0, dummy
        while l1 or l2 or carry:
            s = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
            carry, val = divmod(s, 10)
            curr.next = ListNode(val)
            curr = curr.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next
```


<a id="q21"></a>

### 21. 合并两个有序链表

[打开原题](https://leetcode.cn/problems/merge-two-sorted-lists) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0021.Merge%20Two%20Sorted%20Lists/README.md)

### 方法一：递归



> **思考**
>
> 两条链表均已按非递减排列。若取出全部节点值再排序并重建，时间复杂度为 $O((m+n) \log(m+n))$，且没有利用有序这一条件。
>
> 合并时，答案的下一个节点必为当前两个头结点中的较小者。选定之后，剩余部分仍是两条有序链表，与原问题同构；若其中一侧已空，则另一侧整段即为剩余结果。
>
> 因此问题具有最优子结构，可以用递归求解：每次留下较小的头，再合并两条剩余链表。递归深度与节点总数同阶，本题长度不超过 $50$，额外空间 $O(m+n)$ 可以接受。



我们先判断链表 $l_1$ 和 $l_2$ 是否为空，若其中一个为空，则返回另一个链表。否则，我们比较 $l_1$ 和 $l_2$ 的头节点：

- 若 $l_1$ 的头节点的值小于等于 $l_2$ 的头节点的值，则递归调用函数 $\textit{mergeTwoLists}(l_1.\textit{next}, l_2)$，并将 $l_1$ 的头节点与返回的链表头节点相连，返回 $l_1$ 的头节点。
- 否则，递归调用函数 $\textit{mergeTwoLists}(l_1, l_2.\textit{next})$，并将 $l_2$ 的头节点与返回的链表头节点相连，返回 $l_2$ 的头节点。

时间复杂度 $O(m + n)$，空间复杂度 $O(m + n)$。其中 $m$ 和 $n$ 分别为两个链表的长度。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(
        self, list1: Optional[ListNode], list2: Optional[ListNode]
    ) -> Optional[ListNode]:
        if list1 is None or list2 is None:
            return list1 or list2
        if list1.val <= list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2
```


<a id="q138"></a>

### 138. 随机链表的复制

[打开原题](https://leetcode.cn/problems/copy-list-with-random-pointer) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0138.Copy%20List%20with%20Random%20Pointer/README.md)

### 方法一：哈希表 + 模拟



> **思考**
>
> 复制带随机指针的链表。随机指针可能指向任意节点或空，先复制 $\textit{next}$ 再复制 $\textit{random}$ 时，目标节点可能尚未建出。 $n\le 1000$。
>
> 第一遍沿 $\textit{next}$ 建新链，并用哈希表记下原节点到副本的映射；第二遍按映射接好 $\textit{random}$。



我们可以定义一个虚拟头节点 $\textit{dummy}$，用一个指针 $\textit{tail}$ 指向虚拟头节点，然后遍历链表，将链表中的每个节点都复制一份，并将每个节点及其复制节点的对应关系存储在哈希表 $d$ 中，同时连接好复制节点的 $\textit{next}$ 指针。

接下来再遍历链表，根据哈希表中存储的对应关系，将复制节点的 $\textit{random}$ 指针连接好。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为链表的长度。

**Python 参考答案**

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""


class Solution:
    def copyRandomList(self, head: "Optional[Node]") -> "Optional[Node]":
        d = {}
        dummy = tail = Node(0)
        cur = head
        while cur:
            node = Node(cur.val)
            tail.next = node
            tail = tail.next
            d[cur] = node
            cur = cur.next
        cur = head
        while cur:
            d[cur].random = d[cur.random] if cur.random else None
            cur = cur.next
        return dummy.next
```


<a id="q92"></a>

### 92. 反转链表 II

[打开原题](https://leetcode.cn/problems/reverse-linked-list-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0092.Reverse%20Linked%20List%20II/README.md)

### 方法一：模拟



> **思考**
>
> 可以把 $[\textit{left}, \textit{right}]$ 整段切出、反转后再接回去，但 $\textit{left} = 1$ 时头结点会被换掉，还要同时记住多个断点，容易写漏。进阶要求一趟扫描完成。
>
> 若把区间内的结点依次头插到区间前驱之后，即可就地反转，不必单独再拼接。虚拟头挡住 $\textit{left} = 1$ 的边界：先走到第 $\textit{left}-1$ 个结点，再把头插做 $\textit{right} - \textit{left} + 1$ 次。



定义一个虚拟头结点 `dummy`，指向链表的头结点 `head`，然后定义一个指针 `pre` 指向 `dummy`，从虚拟头结点开始遍历链表，遍历到第 $\textit{left}$ 个结点时，将 `pre` 指向该结点，然后从该结点开始遍历 `right - left + 1` 次，将遍历到的结点依次插入到 `pre` 的后面，最后返回 `dummy.next` 即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为链表的长度。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(
        self, head: Optional[ListNode], left: int, right: int
    ) -> Optional[ListNode]:
        if head.next is None or left == right:
            return head
        dummy = ListNode(0, head)
        pre = dummy
        for _ in range(left - 1):
            pre = pre.next
        p, q = pre, pre.next
        cur = q
        for _ in range(right - left + 1):
            t = cur.next
            cur.next = pre
            pre, cur = cur, t
        p.next = pre
        q.next = cur
        return dummy.next
```


<a id="q25"></a>

### 25. K 个一组翻转链表

[打开原题](https://leetcode.cn/problems/reverse-nodes-in-k-group) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0025.Reverse%20Nodes%20in%20k-Group/README.md)

### 方法一：模拟



> **思考**
>
> 题目进阶要求额外空间 $O(1)$。若按组递归翻转， $n \le 5000$ 时时间可以接受，但递归栈会随组数增长，不满足进阶条件。
>
> 一组内部就是普通的链表翻转；组与组之间只需记住上一组的尾。真正需要先确认的是当前组是否凑满 $k$ 个——不足则保持原序，够则摘下翻转后再接回。
>
> 因此从虚拟头出发，每次先走 $k$ 步探测：若够 $k$ 个则翻转该段并重接；若不够则结束。探测、翻转与重接都是指针操作，额外空间 $O(1)$。



我们可以根据题意，模拟整个翻转的过程。

首先，我们定义一个辅助函数 $\textit{reverse}$，用于翻转一个链表。然后，我们定义一个虚拟头结点 $\textit{dummy}$，并将其 $\textit{next}$ 指针指向 $\textit{head}$。

接着，我们遍历链表，每次遍历 $k$ 个节点，若剩余节点不足 $k$ 个，则不进行翻转。否则，我们将 $k$ 个节点取出，然后调用 $\textit{reverse}$ 函数翻转这 $k$ 个节点。然后将翻转后的链表与原链表连接起来。继续遍历下一个 $k$ 个节点，直到遍历完整个链表。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为链表的长度。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        def reverse(head: Optional[ListNode]) -> Optional[ListNode]:
            dummy = ListNode()
            cur = head
            while cur:
                nxt = cur.next
                cur.next = dummy.next
                dummy.next = cur
                cur = nxt
            return dummy.next

        dummy = pre = ListNode(next=head)
        while pre:
            cur = pre
            for _ in range(k):
                cur = cur.next
                if cur is None:
                    return dummy.next
            node = pre.next
            nxt = cur.next
            cur.next = None
            pre.next = reverse(node)
            node.next = nxt
            pre = node
        return dummy.next
```


<a id="q19"></a>

### 19. 删除链表的倒数第 N 个结点

[打开原题](https://leetcode.cn/problems/remove-nth-node-from-end-of-list) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0019.Remove%20Nth%20Node%20From%20End%20of%20List/README.md)

### 方法一：快慢指针



> **思考**
>
> 先遍历一遍得到长度 $L$，再走 $L - n$ 步删除结点，时间复杂度为 $O(n)$。在 $sz \le 30$ 的范围内可以接受，但题目进阶要求一趟扫描。
>
> 不到末尾就无法确定倒数第 $n$ 个结点的位置，而删除还需要它的前驱。我们可以让快指针先走出 $n$ 步的间距，再与慢指针一起前进：快指针到达表尾时，慢指针恰好停在待删结点的前驱。设置虚拟头结点，可使删除头结点与删除中间结点共用同一套逻辑。



我们定义两个指针 `fast` 和 `slow`，初始时都指向链表的虚拟头结点 `dummy`。

接着 `fast` 指针先向前移动 $n$ 步，然后 `fast` 和 `slow` 指针同时向前移动，直到 `fast` 指针到达链表的末尾。此时 `slow.next` 指针指向的结点就是倒数第 `n` 个结点的前驱结点，将其删除即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为链表的长度。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(next=head)
        fast = slow = dummy
        for _ in range(n):
            fast = fast.next
        while fast.next:
            slow, fast = slow.next, fast.next
        slow.next = slow.next.next
        return dummy.next
```


<a id="q82"></a>

### 82. 删除排序链表中的重复元素 II

[打开原题](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0082.Remove%20Duplicates%20from%20Sorted%20List%20II/README.md)

### 方法一：一次遍历



> **思考**
>
> 用哈希表统计频次，再重建一条只含出现一次的节点，可以得到答案， $n \le 300$ 时间也足够。这样做没有利用「已排序、重复必然相邻」，还需要 $O(n)$ 额外空间。
>
> 同一值在链表中挤成一段，扫到一段就能决定整段去留。头节点也可能被删除，因此引入哑节点；整段都删时前驱不能跟着前进。为此让 $\textit{pre}$ 停在上一段保留节点， $\textit{cur}$ 滑过当前值段：若 $\textit{pre}.\textit{next}$ 仍是 $\textit{cur}$，说明这段只有一个，前驱前进；否则整段丢弃。



我们先创建一个虚拟头节点 $\textit{dummy}$，令 $\textit{dummy}.\textit{next} = \textit{head}$，然后创建指针 $\textit{pre}$ 指向 $\textit{dummy}$，指针 $\textit{cur}$ 指向 $\textit{head}$，开始遍历链表。

当 $\textit{cur}$ 指向的节点值与 $\textit{cur}.\textit{next}$ 指向的节点值相同时，我们就让 $\textit{cur}$ 不断向后移动，直到 $\textit{cur}$ 指向的节点值与 $\textit{cur}.\textit{next}$ 指向的节点值不相同时，停止移动。此时，我们判断 $\textit{pre}.\textit{next}$ 是否等于 $\textit{cur}$，如果相等，说明 $\textit{pre}$ 与 $\textit{cur}$ 之间没有重复节点，我们就让 $\textit{pre}$ 移动到 $\textit{cur}$ 的位置；否则，说明 $\textit{pre}$ 与 $\textit{cur}$ 之间有重复节点，我们就让 $\textit{pre}.\textit{next}$ 指向 $\textit{cur}.\textit{next}$。然后让 $\textit{cur}$ 继续向后移动。继续上述操作，直到 $\textit{cur}$ 为空，遍历结束。

最后，返回 $\textit{dummy}.\textit{next}$ 即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为链表的长度。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = pre = ListNode(next=head)
        cur = head
        while cur:
            while cur.next and cur.next.val == cur.val:
                cur = cur.next
            if pre.next == cur:
                pre = cur
            else:
                pre.next = cur.next
            cur = cur.next
        return dummy.next
```


<a id="q61"></a>

### 61. 旋转链表

[打开原题](https://leetcode.cn/problems/rotate-list) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0061.Rotate%20List/README.md)

### 方法一：快慢指针 + 链表拼接



> **思考**
>
> 链表没有随机下标，若拷入数组再右移重建，节点数 $n \le 500$，额外空间可以接受。然而 $k$ 最大可达 $2 \times 10^9$，不能按次旋转。
>
> 注意到向右旋转 $k$ 次与旋转 $k \bmod n$ 次等价，新的头节点即为倒数第 $k$ 个节点。因此需要先求出 $n$，再定位断开位置。为此可以让快指针先走出有效的 $k$ 步，再与慢指针同步前进，直至快指针到达尾节点，此时慢指针恰停在新头的前驱。随后只需改动若干指针即可完成拼接，额外空间为 $O(1)$。



我们先判断链表节点数是否小于 $2$，如果是，直接返回 $\textit{head}$ 即可。

否则，我们先统计链表节点数 $n$，然后将 $k$ 对 $n$ 取模，得到 $k$ 的有效值。

如果 $k$ 的有效值为 $0$，说明链表不需要旋转，直接返回 $\textit{head}$ 即可。

否则，我们用快慢指针，让快指针先走 $k$ 步，然后快慢指针同时走，直到快指针走到链表尾部，此时慢指针的下一个节点就是新的链表头节点。

最后，我们将链表拼接起来即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是链表节点数。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        cur, n = head, 0
        while cur:
            n += 1
            cur = cur.next
        k %= n
        if k == 0:
            return head
        fast = slow = head
        for _ in range(k):
            fast = fast.next
        while fast.next:
            fast, slow = fast.next, slow.next

        ans = slow.next
        slow.next = None
        fast.next = head
        return ans
```


<a id="q86"></a>

### 86. 分隔链表

[打开原题](https://leetcode.cn/problems/partition-list) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0086.Partition%20List/README.md)

### 方法一：模拟



> **思考**
>
> 若先收集所有小于 $x$ 的节点，再收集其余节点并重建链表，结果正确， $n \le 200$ 时间上也没有压力。然而这样要么拷贝节点，要么二次遍历，还容易打乱分区内部的相对次序。
>
> 题目要求的是稳定划分：小于 $x$ 的相对顺序、以及大于等于 $x$ 的相对顺序都不变。因此只需一遍扫描，把节点按取值分流到两条链上，最后把较小一侧的尾接到较大一侧的头。
>
> 指针接到原节点即可，不必另开值拷贝；较大一侧的尾要置空，以免与原后继成环。



我们创建两个链表 $l$ 和 $r$，一个用来存储小于 $x$ 的节点，另一个用来存储大于等于 $x$ 的节点。然后我们将它们拼接起来。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是原链表的长度。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        l = ListNode()
        r = ListNode()
        tl, tr = l, r
        while head:
            if head.val < x:
                tl.next = head
                tl = tl.next
            else:
                tr.next = head
                tr = tr.next
            head = head.next
        tr.next = None
        tl.next = r.next
        return l.next
```


<a id="q146"></a>

### 146. LRU 缓存

[打开原题](https://leetcode.cn/problems/lru-cache) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0146.LRU%20Cache/README.md)

### 方法一：哈希表 + 双向链表



> **思考**
>
> $\textit{get}$ / $\textit{put}$ 都要 $O(1)$，淘汰最久未使用的键。哈希表能 $O(1)$ 查找，但不能单独维护使用顺序；数组或单向链表移动节点是 $O(n)$。调用次数达 $2\times 10^5$。
>
> 哈希表存键到节点，双向链表按「最近使用在头、最久在尾」排列。访问或更新时把节点摘下再插到头部；容量满时删掉尾部前驱。查找与调整指针都是 $O(1)$。



我们可以用“哈希表”和“双向链表”实现一个 LRU 缓存。

- 哈希表：用于存储 key 和对应的节点位置。
- 双向链表：用于存储节点数据，按照访问时间排序。

当访问一个节点时，如果节点存在，我们将其从原来的位置删除，并重新插入到链表头部。这样就能保证链表尾部存储的就是最近最久未使用的节点，当节点数量大于缓存最大空间时就淘汰链表尾部的节点。

当插入一个节点时，如果节点存在，我们将其从原来的位置删除，并重新插入到链表头部。如果不存在，我们首先检查缓存是否已满，如果已满，则删除链表尾部的节点，将新的节点插入链表头部。

时间复杂度 $O(1)$，空间复杂度 $O(\textit{capacity})$。

**Python 参考答案**

```python
class Node:
    def __init__(self, key: int = 0, val: int = 0):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None


class LRUCache:
    def __init__(self, capacity: int):
        self.size = 0
        self.capacity = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self.remove_node(node)
        self.add_to_head(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            self.remove_node(node)
            node.val = value
            self.add_to_head(node)
        else:
            node = Node(key, value)
            self.cache[key] = node
            self.add_to_head(node)
            self.size += 1
            if self.size > self.capacity:
                node = self.tail.prev
                self.cache.pop(node.key)
                self.remove_node(node)
                self.size -= 1

    def remove_node(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def add_to_head(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next = node
        node.next.prev = node


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
```


## 二叉树


<a id="q104"></a>

### 104. 二叉树的最大深度

[打开原题](https://leetcode.cn/problems/maximum-depth-of-binary-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0104.Maximum%20Depth%20of%20Binary%20Tree/README.md)

### 方法一：递归



> **思考**
>
> 树的深度是根到最远叶子的边数加一。层序统计层数可行， $n \le 10^4$ 时间足够。树本身按递归定义，当前树的深度等于左右子树深度的较大值再加一，空树深度为 $0$。为此对左右子树递归求深度后取最大即可。



递归遍历左右子树，求左右子树的最大深度，然后取最大值加 $1$ 即可。

时间复杂度 $O(n)$。其中 $n$ 是二叉树的节点数。每个节点在递归中只被遍历一次。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0
        l, r = self.maxDepth(root.left), self.maxDepth(root.right)
        return 1 + max(l, r)
```


<a id="q100"></a>

### 100. 相同的树

[打开原题](https://leetcode.cn/problems/same-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0100.Same%20Tree/README.md)

### 方法一：DFS



> **思考**
>
> 两棵树是否相同，取决于对应位置的结构与取值是否一致。若先各自遍历再比较序列，还要额外约定空位编码，实现更绕。节点数不超过 $100$，递归深度可以接受。
>
> 树由根与左右子树递归定义，因此只需比较当前一对节点：同为空则相同，仅一方为空或值不同则不同，否则分别递归左右孩子。



我们可以使用 DFS 递归的方法来解决这个问题。

首先判断两个二叉树的根节点是否相同，如果两个根节点都为空，则两个二叉树相同，如果两个根节点中有且只有一个为空，则两个二叉树一定不同。如果两个根节点都不为空，则判断它们的值是否相同，如果不相同则两个二叉树一定不同，如果相同，则分别判断两个二叉树的左子树是否相同以及右子树是否相同。当以上所有条件都满足时，两个二叉树才相同。

时间复杂度 $O(\min(m, n))$，空间复杂度 $O(\min(m, n))$。其中 $m$ 和 $n$ 分别是两个二叉树的节点个数。空间复杂度主要取决于递归调用的层数，递归调用的层数不会超过较小的二叉树的节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p == q:
            return True
        if p is None or q is None or p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```


<a id="q226"></a>

### 226. 翻转二叉树

[打开原题](https://leetcode.cn/problems/invert-binary-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0226.Invert%20Binary%20Tree/README.md)

### 方法一：递归



> **思考**
>
> 翻转整棵树即交换每个结点的左右孩子，并对其子树做同样操作。树规模允许一次递归遍历。
>
> 先递归翻转左右子树，再交换两棵子树的根指针。



我们首先判断 $\textit{root}$ 是否为空，若为空则直接返回 $\textit{null}$。然后递归地对树的左右子树进行翻转，将翻转后的右子树作为新的左子树，将翻转后的左子树作为新的右子树，返回 $\textit{root}$。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是二叉树的节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return None
        l, r = self.invertTree(root.left), self.invertTree(root.right)
        root.left, root.right = r, l
        return root
```


<a id="q101"></a>

### 101. 对称二叉树

[打开原题](https://leetcode.cn/problems/symmetric-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0101.Symmetric%20Tree/README.md)

### 方法一：递归



> **思考**
>
> 镜像对称要求左子树与右子树互为镜像，而不是各自与自身相同。进阶同时要求递归与迭代都能做； $n \le 1000$，一次遍历即可。
>
> 一对节点对称，当且仅当取值相同，且一方的左孩子与另一方的右孩子对称、一方的右孩子与另一方的左孩子对称。因此从根的左右孩子出发做交叉递归即可。



我们设计一个函数 $\textit{dfs}(\textit{root1}, \textit{root2})$，用于判断两个二叉树是否对称。答案即为 $\textit{dfs}(\textit{root}.\textit{left}, \textit{root}.\textit{right})$。

函数 $\textit{dfs}(\textit{root1}, \textit{root2})$ 的逻辑如下：

- 如果 $\textit{root1}$ 和 $\textit{root2}$ 都为空，则两个二叉树对称，返回 `true`；
- 如果 $\textit{root1}$ 和 $\textit{root2}$ 中只有一个为空，或者 $\textit{root1}.\textit{val} \neq \textit{root2}.\textit{val}$
- 否则，判断 $\textit{root1}$ 的左子树和 $\textit{root2}$ 的右子树是否对称，以及 $\textit{root1}$ 的右子树和 $\textit{root2}$ 的左子树是否对称，这里使用了递归。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是二叉树的节点数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def dfs(root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
            if root1 == root2:
                return True
            if root1 is None or root2 is None or root1.val != root2.val:
                return False
            return dfs(root1.left, root2.right) and dfs(root1.right, root2.left)

        return dfs(root.left, root.right)
```


<a id="q105"></a>

### 105. 从前序与中序遍历序列构造二叉树

[打开原题](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0105.Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20Traversal/README.md)

### 方法一：哈希表 + 递归



> **思考**
>
> 前序给出根的出现顺序，中序给出每个根左右子树的分界。每次在中序里线性扫描根的位置，总时间可达 $O(n^2)$； $n \le 3000$ 偏紧。
>
> 题目保证节点值互不相同，因此中序位置可以预处理进哈希表，查找变为 $O(1)$。前序区间的首元素是根，中序中该值左侧是左子树、右侧是右子树，长度确定后再递归构造两段。



前序序列的第一个节点 $\textit{preorder}[0]$ 为根节点，我们在中序序列中找到根节点的位置 $k$，可以将中序序列划分为左子树 $\textit{inorder}[0..k]$ 、右子树 $\textit{inorder}[k+1..]$。

通过左右子树的区间，可以计算出左、右子树节点的个数，假设为 $a$ 和 $b$。然后在前序节点中，从根节点往后的 $a$ 个节点为左子树，再往后的 $b$ 个节点为右子树。

因此，我们设计一个函数 $\textit{dfs}(i, j, n)$，其中 $i$ 和 $j$ 分别表示前序序列和中序序列的起始位置，而 $n$ 表示节点个数。函数的返回值是以 $\textit{preorder}[i..i+n-1]$ 为前序序列，以 $\textit{inorder}[j..j+n-1]$ 为中序序列构造出的二叉树。

函数 $\textit{dfs}(i, j, n)$ 的执行过程如下：

- 如果 $n \leq 0$，说明没有节点，返回空节点。
- 取出前序序列的第一个节点 $v = \textit{preorder}[i]$ 作为根节点，然后利用哈希表 $d$ 找到根节点在中序序列中的位置 $k$，那么左子树的节点个数为 $k - j$，右子树的节点个数为 $n - k + j - 1$。
- 递归构造左子树 $l = \textit{dfs}(i + 1, j, k - j)$ 和右子树 $r = \textit{dfs}(i + 1 + k - j, k + 1, n - k + j - 1)$。
- 最后返回以 $v$ 为根节点且左右子树分别为 $l$ 和 $r$ 的二叉树。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为二叉树节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: list[int], inorder: list[int]) -> Optional[TreeNode]:
        def dfs(i: int, j: int, n: int) -> Optional[TreeNode]:
            if n <= 0:
                return None
            v = preorder[i]
            k = d[v]
            l = dfs(i + 1, j, k - j)
            r = dfs(i + 1 + k - j, k + 1, n - k + j - 1)
            return TreeNode(v, l, r)

        d = {v: i for i, v in enumerate(inorder)}
        return dfs(0, 0, len(preorder))
```


<a id="q106"></a>

### 106. 从中序与后序遍历序列构造二叉树

[打开原题](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0106.Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder%20Traversal/README.md)

### 方法一：哈希表 + 递归



> **思考**
>
> 后序的最后一个元素是根，中序同样给出左右子树的分界。每次线性查找根的位置仍可能 $O(n^2)$。值互不相同，因此先把中序下标放入哈希表。当前后序区间的末元素为根，中序中该值左侧长度即左子树规模，据此切分两段后序并递归。



后序遍历的最后一个节点是根节点，我们可以根据这个特点找到根节点在中序遍历中的位置，然后递归地构造左右子树。

具体地，我们先用一个哈希表 $d$ 存储中序遍历中每个节点的位置。然后我们设计一个递归函数 $\textit{dfs}(i, j, n)$，其中 $i$ 和 $j$ 分别表示中序遍历和后序遍历的起点，而 $n$ 表示子树包含的节点数。函数的逻辑如下：

- 如果 $n \leq 0$，说明子树为空，返回空节点。
- 否则，取出后序遍历的最后一个节点 $v$，然后我们在哈希表 $d$ 中找到 $v$ 在中序遍历中的位置，设为 $k$。那么左子树包含的节点数为 $k - i$，右子树包含的节点数为 $n - k + i - 1$。
- 递归构造左子树 $\textit{dfs}(i, j, k - i)$ 和右子树 $\textit{dfs}(k + 1, j + k - i, n - k + i - 1)$，并连接到根节点上，最后返回根节点。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是二叉树的节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: list[int], postorder: list[int]) -> Optional[TreeNode]:
        def dfs(i: int, j: int, n: int) -> Optional[TreeNode]:
            if n <= 0:
                return None
            v = postorder[j + n - 1]
            k = d[v]
            l = dfs(i, j, k - i)
            r = dfs(k + 1, j + k - i, n - k + i - 1)
            return TreeNode(v, l, r)

        d = {v: i for i, v in enumerate(inorder)}
        return dfs(0, 0, len(inorder))
```


<a id="q117"></a>

### 117. 填充每个节点的下一个右侧节点指针 II

[打开原题](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0117.Populating%20Next%20Right%20Pointers%20in%20Each%20Node%20II/README.md)

### 方法一：BFS



> **思考**
>
> 与上一题不同，树不必是完美的，一层里孩子可能缺失，不能默认「左孩子 next 指向右孩子」。层序仍然正确：按层出队，把相邻节点依次接上。 $n \le 6000$。



我们使用队列 $q$ 进行层序遍历，每次遍历一层时，将当前层的节点按顺序连接起来。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为二叉树的节点个数。

**Python 参考答案**

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""


class Solution:
    def connect(self, root: "Node") -> "Node":
        if root is None:
            return root
        q = deque([root])
        while q:
            p = None
            for _ in range(len(q)):
                node = q.popleft()
                if p:
                    p.next = node
                p = node
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return root
```


<a id="q114"></a>

### 114. 二叉树展开为链表

[打开原题](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0114.Flatten%20Binary%20Tree%20to%20Linked%20List/README.md)

### 方法一：寻找前驱节点



> **思考**
>
> 先序展开可以用递归或栈先建出新链，但进阶要求 $O(1)$ 额外空间且原地修改。 $n \le 2000$。
>
> 先序中，左子树走完后的下一个节点就是原右子树的根。左子树最右节点恰是这段的前驱：把它的右指针接到原右子树，再把左子树整体接到当前右指针上并清空左指针。沿右链继续，无需递归栈。



先序遍历的访问顺序是“根、左子树、右子树”，左子树最后一个节点访问完后，接着会访问根节点的右子树节点。

因此，对于当前节点，如果其左子节点不为空，我们找到左子树的最右节点，作为前驱节点，然后将当前节点的右子节点赋给前驱节点的右子节点。然后将当前节点的左子节点赋给当前节点的右子节点，并将当前节点的左子节点置为空。然后将当前节点的右子节点作为下一个节点，继续处理，直至所有节点处理完毕。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是树中节点的个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        while root:
            if root.left:
                pre = root.left
                while pre.right:
                    pre = pre.right
                pre.right = root.right
                root.right = root.left
                root.left = None
            root = root.right
```


<a id="q112"></a>

### 112. 路径总和

[打开原题](https://leetcode.cn/problems/path-sum) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0112.Path%20Sum/README.md)

### 方法一：递归



> **思考**
>
> 需要判断是否存在根到叶子的路径，其节点和等于目标。枚举所有路径再求和， $n \le 5000$ 可行，但路径复制有额外开销。
>
> 沿递归向下累加当前和，只有到达叶子时才判断是否命中。左右两边有一边成功即可，不必保存整条路径。



从根节点开始，递归地对树进行遍历，并在遍历过程中更新节点的值为从根节点到该节点的路径和。当遍历到叶子节点时，判断该路径和是否等于目标值，如果相等则返回 `true`，否则返回 `false`。

时间复杂度 $O(n)$。其中 $n$ 是二叉树的节点数。对每个节点访问一次。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        def dfs(root, s):
            if root is None:
                return False
            s += root.val
            if root.left is None and root.right is None and s == targetSum:
                return True
            return dfs(root.left, s) or dfs(root.right, s)

        return dfs(root, 0)
```


<a id="q129"></a>

### 129. 求根节点到叶节点数字之和

[打开原题](https://leetcode.cn/problems/sum-root-to-leaf-numbers) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0129.Sum%20Root%20to%20Leaf%20Numbers/README.md)

### 方法一：DFS



> **思考**
>
> 每条根到叶子路径表示一个整数，求这些整数之和。深度不超过 $10$，路径不多，但不必先把数字转成字符串。向下走时用 $s \times 10 + \textit{val}$ 累加当前数，到叶子把该数加入答案，左右子树的和相加即可。



我们可以设计一个函数 $\textit{dfs}(\textit{root}, s)$，表示从当前节点 $\textit{root}$ 出发，且当前路径数字为 $s$，返回从当前节点到叶子节点的所有路径数字之和。那么答案就是 $\textit{dfs}(\textit{root}, 0)$。

函数 $\textit{dfs}(\textit{root}, s)$ 的计算如下：

- 如果当前节点 $\textit{root}$ 为空，则返回 $0$。
- 否则，将当前节点的值加到 $s$ 中，即 $s = s \times 10 + \textit{root}.\textit{val}$。
- 如果当前节点是叶子节点，则返回 $s$。
- 否则，返回 $\textit{dfs}(\textit{root}.\textit{left}, s) + \textit{dfs}(\textit{root}.\textit{right}, s)$。

时间复杂度 $O(n)$，空间复杂度 $O(\log n)$。其中 $n$ 是二叉树的节点数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(root, s):
            if root is None:
                return 0
            s = s * 10 + root.val
            if root.left is None and root.right is None:
                return s
            return dfs(root.left, s) + dfs(root.right, s)

        return dfs(root, 0)
```


<a id="q124"></a>

### 124. 二叉树中的最大路径和

[打开原题](https://leetcode.cn/problems/binary-tree-maximum-path-sum) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0124.Binary%20Tree%20Maximum%20Path%20Sum/README.md)

### 方法一：递归



> **思考**
>
> 路径可以经过任意节点，不必过根，也可以在某节点「拐弯」同时走左右子树。枚举所有路径在 $n \le 3\times 10^4$ 下不可行。
>
> 对每个节点，能向上贡献的只是「节点值加上左右中较大的一条非负链」；左右都接上的和只用于更新全局答案，不能再往上传。负贡献应丢弃，因此递归返回前对子树结果与 $0$ 取最大。



我们思考二叉树递归问题的经典套路：

1. 终止条件（何时终止递归）
2. 递归处理左右子树
3. 合并左右子树的计算结果

对于本题，我们设计一个函数 $\textit{dfs}(\textit{root})$，它返回以 $\textit{root}$ 为根节点的二叉树的最大路径和。

函数 $\textit{dfs}(\textit{root})$ 的执行逻辑如下：

如果 $\textit{root}$ 不存在，那么 $\textit{dfs}(\textit{root})$ 返回 $0$；

否则，我们递归计算 $\textit{root}$ 的左子树和右子树的最大路径和，分别记为 $\textit{left}$ 和 $\textit{right}$。如果 $\textit{left}$ 小于 $0$，那么我们将其置为 $0$，同理，如果 $\textit{right}$ 小于 $0$，那么我们将其置为 $0$。

然后，我们用 $\textit{root}.\textit{val} + \textit{left} + \textit{right}$ 更新答案。最后，函数返回 $\textit{root}.\textit{val} + \max(\textit{left}, \textit{right})$。

在主函数中，我们调用 $\textit{dfs}(\textit{root})$，即可得到每个节点的最大路径和，其中的最大值即为答案。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是二叉树的节点数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        def dfs(root: Optional[TreeNode]) -> int:
            if root is None:
                return 0
            left = max(0, dfs(root.left))
            right = max(0, dfs(root.right))
            nonlocal ans
            ans = max(ans, root.val + left + right)
            return root.val + max(left, right)

        ans = -inf
        dfs(root)
        return ans
```


<a id="q173"></a>

### 173. 二叉搜索树迭代器

[打开原题](https://leetcode.cn/problems/binary-search-tree-iterator) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0173.Binary%20Search%20Tree%20Iterator/README.md)

### 方法一：递归



> **思考**
>
> 中序遍历 BST 得到升序。节点可达 $10^5$，调用次数同阶。构造时一次性递归中序放入数组， $\textit{next}/\textit{hasNext}$ 只移动下标，均摊 $O(1)$，但空间是 $O(n)$。进阶希望空间降到树高。



初始化数据时，递归中序遍历，将二叉搜索树每个结点的值保存在列表 `vals` 中。用 `cur` 指针记录外部即将遍历的位置，初始化为 0。

调用 `next()` 时，返回 `vals[cur]`，同时 `cur` 指针自增。调用 `hasNext()` 时，判断 `cur` 指针是否已经达到 `len(vals)` 个数，若是，说明已经遍历结束，返回 false，否则返回 true。

**复杂度（整理补充）**：初始化时间 O(n)、空间 O(n)；next 和 hasNext 均为 O(1)。此版本保存完整中序序列，不满足进阶的 O(h) 空间要求。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:
    def __init__(self, root: TreeNode):
        def inorder(root):
            if root:
                inorder(root.left)
                self.vals.append(root.val)
                inorder(root.right)

        self.cur = 0
        self.vals = []
        inorder(root)

    def next(self) -> int:
        res = self.vals[self.cur]
        self.cur += 1
        return res

    def hasNext(self) -> bool:
        return self.cur < len(self.vals)


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()
```


<a id="q222"></a>

### 222. 完全二叉树的节点个数

[打开原题](https://leetcode.cn/problems/count-complete-tree-nodes) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0222.Count%20Complete%20Tree%20Nodes/README.md)

### 方法一：递归



> **思考**
>
> 完全二叉树仍可用普通递归统计左右子树规模。结点总数为 $1$ 加上两棵子树的结点数，遍历每个结点一次即可。



递归遍历整棵树，统计结点个数。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为树的结点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
```


<a id="q236"></a>

### 236. 二叉树的最近公共祖先

[打开原题](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/README.md)

### 方法一：递归



> **思考**
>
> 普通二叉树没有有序性，不能按值决定方向。LCA 是同时覆盖 $p$ 与 $q$ 的最深结点。
>
> 后序递归：子树中找到目标则上送该结点；左右都非空则当前根为 LCA，否则上送非空一侧。



我们递归遍历二叉树：

如果当前节点为空或者等于 $p$ 或者 $q$，则返回当前节点；

否则，我们递归遍历左右子树，将返回的结果分别记为 $\textit{left}$ 和 $\textit{right}$。如果 $\textit{left}$ 和 $\textit{right}$ 都不为空，则说明 $p$ 和 $q$ 分别在左右子树中，因此当前节点即为最近公共祖先；如果 $\textit{left}$ 和 $\textit{right}$ 中只有一个不为空，返回不为空的那个。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为二叉树节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":
        if root in (None, p, q):
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        return root if left and right else (left or right)
```


## 二叉树层序遍历


<a id="q199"></a>

### 199. 二叉树的右视图

[打开原题](https://leetcode.cn/problems/binary-tree-right-side-view) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0199.Binary%20Tree%20Right%20Side%20View/README.md)

### 方法一：BFS



> **思考**
>
> 从右侧看，每层只看到最右边的节点。 $n\le 100$。层序时先把右孩子入队，则队头就是该层最右节点，记下后即可扫完本层。不必事后再取每层末尾。



我们可以使用广度优先搜索，定义一个队列 $q$，将根节点放入队列中。每次从队列中取出当前层的所有节点，对于当前节点，我们先判断右子树是否存在，若存在则将右子树放入队列中；再判断左子树是否存在，若存在则将左子树放入队列中。这样每次取出队列中的第一个节点即为该层的右视图节点。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为二叉树节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> list[int]:
        ans = []
        if root is None:
            return ans
        q = deque([root])
        while q:
            ans.append(q[0].val)
            for _ in range(len(q)):
                node = q.popleft()
                if node.right:
                    q.append(node.right)
                if node.left:
                    q.append(node.left)
        return ans
```


<a id="q637"></a>

### 637. 二叉树的层平均值

[打开原题](https://leetcode.cn/problems/average-of-levels-in-binary-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0600-0699/0637.Average%20of%20Levels%20in%20Binary%20Tree/README.md)

### 方法一：BFS



> **思考**
>
> 按层求平均值，自然按层遍历。节点数可达 $10^4$，一次 BFS 即可。
>
> 队列每次取出整层，累加后除以层大小，并把孩子入队。



我们可以使用广度优先搜索的方法，遍历每一层的节点，计算每一层的平均值。

具体地，我们定义一个队列 $q$，初始时将根节点加入队列。每次将队列中的所有节点取出，计算这些节点的平均值，加入答案数组中，并将这些节点的子节点加入队列。重复这一过程，直到队列为空。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是二叉树的节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> list[float]:
        q = deque([root])
        ans = []
        while q:
            s, n = 0, len(q)
            for _ in range(n):
                root = q.popleft()
                s += root.val
                if root.left:
                    q.append(root.left)
                if root.right:
                    q.append(root.right)
            ans.append(s / n)
        return ans
```


<a id="q102"></a>

### 102. 二叉树的层序遍历

[打开原题](https://leetcode.cn/problems/binary-tree-level-order-traversal) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0102.Binary%20Tree%20Level%20Order%20Traversal/README.md)

### 方法一：BFS



> **思考**
>
> 题目要按层输出节点值。深度优先也能记下深度再分组，但同一层的左右顺序还要额外整理。 $n \le 2000$，一层最多 $O(n)$ 个节点。
>
> 广度优先天然按层扩张：队列中当前一批节点恰为一层，出队时收集取值并压入孩子，即可得到从左到右的一层结果。



我们可以使用 BFS 的方法来解决这道题。首先将根节点入队，然后不断地进行以下操作，直到队列为空：

- 遍历当前队列中的所有节点，将它们的值存储到一个临时数组 $t$ 中，然后将它们的孩子节点入队。
- 将临时数组 $t$ 存储到答案数组中。

最后返回答案数组即可。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是二叉树的节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> list[list[int]]:
        ans = []
        if root is None:
            return ans
        q = deque([root])
        while q:
            t = []
            for _ in range(len(q)):
                node = q.popleft()
                t.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            ans.append(t)
        return ans
```


<a id="q103"></a>

### 103. 二叉树的锯齿形层序遍历

[打开原题](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0103.Binary%20Tree%20Zigzag%20Level%20Order%20Traversal/README.md)

### 方法一：BFS



> **思考**
>
> 与普通层序相比，奇数层仍从左到右，偶数层要从右到左。若按层建好后再整体反转部分层，时间仍是 $O(n)$。 $n \le 2000$ 可以接受。
>
> 因此仍用队列做层序，额外用一个方向标志：本层收集完毕后，若当前方向为右到左，则反转该层再写入答案，并翻转标志。孩子始终按从左到右入队，下一层的遍历顺序不受影响。



为了实现锯齿形层序遍历，需要在层序遍历的基础上增加一个标志位 `left`，用于标记当前层的节点值的顺序。如果 `left` 为 `true`，则当前层的节点值按照从左到右的顺序存入结果数组 `ans` 中；如果 `left` 为 `false`，则当前层的节点值按照从右到左的顺序存入结果数组 `ans` 中。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为二叉树的节点数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> list[list[int]]:
        ans = []
        if root is None:
            return ans
        q = deque([root])
        ans = []
        left = 1
        while q:
            t = []
            for _ in range(len(q)):
                node = q.popleft()
                t.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            ans.append(t if left else t[::-1])
            left ^= 1
        return ans
```


## 二叉搜索树


<a id="q530"></a>

### 530. 二叉搜索树的最小绝对差

[打开原题](https://leetcode.cn/problems/minimum-absolute-difference-in-bst) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0500-0599/0530.Minimum%20Absolute%20Difference%20in%20BST/README.md)

### 方法一：中序遍历



> **思考**
>
> 任意两点差的最小值，在无序树上要比较所有点对。BST 的中序是递增序列，最小差只可能出现在相邻两项之间。
>
> 中序遍历时维护前驱，用当前值减前驱更新答案。前驱初值取负无穷，避免第一个节点参与减法。一次中序即可。



题目需要我们求任意两个节点值之间的最小差值，而二叉搜索树的中序遍历是一个递增序列，因此我们只需要求中序遍历中相邻两个节点值之间的最小差值即可。

我们可以使用递归的方法来实现中序遍历，过程中用一个变量 $\textit{pre}$ 来保存前一个节点的值，这样我们就可以在遍历的过程中求出相邻两个节点值之间的最小差值。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 为二叉搜索树的节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        def dfs(root: Optional[TreeNode]):
            if root is None:
                return
            dfs(root.left)
            nonlocal pre, ans
            ans = min(ans, root.val - pre)
            pre = root.val
            dfs(root.right)

        pre = -inf
        ans = inf
        dfs(root)
        return ans
```


<a id="q230"></a>

### 230. 二叉搜索树中第 K 小的元素

[打开原题](https://leetcode.cn/problems/kth-smallest-element-in-a-bst) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0230.Kth%20Smallest%20Element%20in%20a%20BST/README.md)

### 方法一：中序遍历



> **思考**
>
> BST 的中序遍历即为升序。只需走到第 $k$ 个被访问的结点，不必列出整棵树。
>
> 用栈模拟一路向左，弹出时将 $k$ 减一，减到 $0$ 即答案。



由于二叉搜索树的性质，中序遍历一定能得到升序序列，因此可以采用中序遍历找出第 k 小的元素。

**复杂度（整理补充）**：时间 O(h+k)，最坏 O(n)；辅助空间 O(h)，h 为树高。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        stk = []
        while root or stk:
            if root:
                stk.append(root)
                root = root.left
            else:
                root = stk.pop()
                k -= 1
                if k == 0:
                    return root.val
                root = root.right
```


<a id="q98"></a>

### 98. 验证二叉搜索树

[打开原题](https://leetcode.cn/problems/validate-binary-search-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0098.Validate%20Binary%20Search%20Tree/README.md)

### 方法一：递归



> **思考**
>
> 仅检查「左孩子小于根、右孩子大于根」并不充分：左子树里的最大值也必须小于根。可以给每棵子树传入允许取值的区间，也可以利用 BST 的定义——中序序列必须严格递增。
>
> 中序时记下上一个值，当前值必须更大。递归左、比较、再递归右，一遍即可发现违规。空树合法。



我们可以对二叉树进行递归中序遍历，如果遍历到的结果是严格升序的，那么这棵树就是一个二叉搜索树。

因此，我们使用一个变量 $\textit{prev}$ 来保存上一个遍历到的节点，初始时 $\textit{prev} = -\infty$，然后我们递归遍历左子树，如果左子树不是二叉搜索树，直接返回 $\textit{False}$，否则判断当前节点的值是否大于 $\textit{prev}$，如果不是，返回 $\textit{False}$，否则更新 $\textit{prev}$ 为当前节点的值，然后递归遍历右子树。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是二叉树的节点个数。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def dfs(root: Optional[TreeNode]) -> bool:
            if root is None:
                return True
            if not dfs(root.left):
                return False
            nonlocal prev
            if prev >= root.val:
                return False
            prev = root.val
            return dfs(root.right)

        prev = -inf
        return dfs(root)
```


## 图


<a id="q200"></a>

### 200. 岛屿数量

[打开原题](https://leetcode.cn/problems/number-of-islands) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0200.Number%20of%20Islands/README.md)

### 方法一：DFS



> **思考**
>
> 若将网格中每个值为 $1$ 的格子单独计为一座岛，则四连通的陆地会被重复计数。 $m,n \le 300$，整图遍历可行，但须在同一次搜索中把同一连通块全部消掉。
>
> 注意到上下左右相邻的陆地构成一个连通分量，从任一尚未访问的陆地出发即可覆盖整座岛。为此扫描每个格子，遇到 $1$ 便启动 DFS，沿途把陆地改写为 $0$，每启动一次搜索将答案加一。



我们可以使用深度优先搜索（DFS）来遍历每个岛屿。遍历网格中的每个单元格 $(i, j)$，如果该单元格的值为 '1'，则说明我们找到了一个新的岛屿。我们可以从该单元格开始进行 DFS，将与之相连的所有陆地单元格的值都标记为 '0'，以避免重复计数。每次找到一个新的岛屿时，我们将岛屿数量加 1。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别为网格的行数和列数。

**Python 参考答案**

```python
class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        def dfs(i, j):
            grid[i][j] = '0'
            for a, b in pairwise(dirs):
                x, y = i + a, j + b
                if 0 <= x < m and 0 <= y < n and grid[x][y] == '1':
                    dfs(x, y)

        ans = 0
        dirs = (-1, 0, 1, 0, -1)
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    dfs(i, j)
                    ans += 1
        return ans
```


<a id="q130"></a>

### 130. 被围绕的区域

[打开原题](https://leetcode.cn/problems/surrounded-regions) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0130.Surrounded%20Regions/README.md)

### 方法一：DFS



> **思考**
>
> 被包围的 `'O'` 要改成 `'X'`，与边界连通的 `'O'` 必须保留。 $m,n\le 200$。从内部出发判断「是否被围住」要处理整片连通块，且边界情况容易漏。
>
> 与其找被围住的，不如标记与边界相连的：从四条边上的 `'O'` 做 DFS，能走到的都先改成占位，其余 `'O'` 一律变成 `'X'`，占位再改回 `'O'`。



我们可以从矩阵的边界开始，将矩阵边界上的每个 `O` 作为起始点，开始进行深度优先搜索。将搜索到的 `O` 全部替换成 `.`。

然后我们再遍历这个矩阵，对于每个位置：

- 如果是 `.`，则替换成 `O`；
- 否则如果是 `O`，则替换成 `X`。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别是矩阵的行数和列数。

**Python 参考答案**

```python
class Solution:
    def solve(self, board: list[list[str]]) -> None:
        def dfs(i: int, j: int):
            if not (0 <= i < m and 0 <= j < n and board[i][j] == "O"):
                return
            board[i][j] = "."
            for a, b in pairwise((-1, 0, 1, 0, -1)):
                dfs(i + a, j + b)

        m, n = len(board), len(board[0])
        for i in range(m):
            dfs(i, 0)
            dfs(i, n - 1)
        for j in range(n):
            dfs(0, j)
            dfs(m - 1, j)
        for i in range(m):
            for j in range(n):
                if board[i][j] == ".":
                    board[i][j] = "O"
                elif board[i][j] == "O":
                    board[i][j] = "X"
```


<a id="q133"></a>

### 133. 克隆图

[打开原题](https://leetcode.cn/problems/clone-graph) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0133.Clone%20Graph/README.md)

### 方法一：哈希表 + DFS



> **思考**
>
> 深拷贝连通无向图，节点值唯一， $n\le 100$。只复制值不够，邻居指针必须指向新图中的对应节点，且图中有环，直接递归会转圈。
>
> 用哈希表记下「原节点 → 副本」。第一次访问时建好副本再递归邻居，再次遇到同一节点则直接返回已有副本，环被截断。



我们用一个哈希表 $g$ 记录原图中的每个节点和它的拷贝节点之间的对应关系，然后进行深度优先搜索。

我们定义函数 $\textit{dfs}(\textit{node})$，它的功能是返回 $\textit{node}$ 节点的拷贝节点。 $\textit{dfs}(\textit{node})$ 的过程如下：

- 如果 $\textit{node}$ 是 $\textit{null}$，那么 $\textit{dfs}(\textit{node})$ 的返回值是 $\textit{null}$。
- 如果 $\textit{node}$ 在 $g$ 中，那么 $\textit{dfs}(\textit{node})$ 的返回值是 $g[\textit{node}]$。
- 否则我们创建一个新的节点 $\textit{cloned}$，并将 $g[\textit{node}]$ 的值设为 $\textit{cloned}$，然后遍历 $\textit{node}$ 的所有邻居节点 $\textit{nxt}$，并将 $\textit{cloned}$ 的邻居节点列表中加入 $\textit{dfs}(\textit{nxt})$。
- 最后返回 $\textit{cloned}$。

在主函数中，我们返回 $\textit{dfs}(\textit{node})$。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是节点的数量。

**Python 参考答案**

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional


class Solution:
    def cloneGraph(self, node: Optional["Node"]) -> Optional["Node"]:
        def dfs(node):
            if node is None:
                return None
            if node in g:
                return g[node]
            cloned = Node(node.val)
            g[node] = cloned
            for nxt in node.neighbors:
                cloned.neighbors.append(dfs(nxt))
            return cloned

        g = defaultdict()
        return dfs(node)
```


<a id="q399"></a>

### 399. 除法求值

[打开原题](https://leetcode.cn/problems/evaluate-division) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0399.Evaluate%20Division/README.md)

### 方法一



> **思考**
>
> 已知 $a/b$ 的值，查询其他比值。建图后 BFS/DFS 求路径乘积即可，变量多时并查集带权更省。
>
> $w[x]$ 表示 $x$ 相对根的比值。`find` 路径压缩时把权乘到根。合并 $a/b=v$ 时按 $w[pa]=w[b]\cdot v/w[a]$ 接上。查询若不同根或不存在则 $-1$，否则 $w[c]/w[d]$。

**复杂度（整理补充）**：设变量数 V、等式数 E、查询数 Q。此实现仅路径压缩、未按秩合并；保守时间上界 O((E+Q)V)，辅助空间 O(V)，另需 O(Q) 输出空间。

**Python 参考答案**

```python
class Solution:
    def calcEquation(
        self, equations: list[list[str]], values: list[float], queries: list[list[str]]
    ) -> list[float]:
        def find(x):
            if p[x] != x:
                origin = p[x]
                p[x] = find(p[x])
                w[x] *= w[origin]
            return p[x]

        w = defaultdict(lambda: 1)
        p = defaultdict()
        for a, b in equations:
            p[a], p[b] = a, b
        for i, v in enumerate(values):
            a, b = equations[i]
            pa, pb = find(a), find(b)
            if pa == pb:
                continue
            p[pa] = pb
            w[pa] = w[b] * v / w[a]
        return [
            -1 if c not in p or d not in p or find(c) != find(d) else w[c] / w[d]
            for c, d in queries
        ]
```


<a id="q207"></a>

### 207. 课程表

[打开原题](https://leetcode.cn/problems/course-schedule) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0207.Course%20Schedule/README.md)

### 方法一：拓扑排序



> **思考**
>
> 先修关系构成有向图，能修完所有课当且仅当图中无环。枚举排列检查约束在课程数较大时不可行。
>
> 拓扑排序不断取出入度为 $0$ 的课并减少其后继入度；若全部结点都能入队则无环，否则存在环。



对于本题，我们可以将课程看作图中的节点，先修课程看作图中的边，那么我们可以将本题转化为判断有向图中是否存在环。

具体地，我们可以使用拓扑排序的思想，对于每个入度为 $0$ 的节点，我们将其出度的节点的入度减 $1$，直到所有节点都被遍历到。

如果所有节点都被遍历到，说明图中不存在环，那么我们就可以完成所有课程的学习；否则，我们就无法完成所有课程的学习。

时间复杂度 $O(n + m)$，空间复杂度 $O(n + m)$。其中 $n$ 和 $m$ 分别为课程数和先修课程数。

**Python 参考答案**

```python
class Solution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        g = [[] for _ in range(numCourses)]
        indeg = [0] * numCourses
        for a, b in prerequisites:
            g[b].append(a)
            indeg[a] += 1
        q = [i for i, x in enumerate(indeg) if x == 0]
        for i in q:
            numCourses -= 1
            for j in g[i]:
                indeg[j] -= 1
                if indeg[j] == 0:
                    q.append(j)
        return numCourses == 0
```


<a id="q210"></a>

### 210. 课程表 II

[打开原题](https://leetcode.cn/problems/course-schedule-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0210.Course%20Schedule%20II/README.md)

### 方法一：拓扑排序



> **思考**
>
> 与“能否修完”相同，先修关系给出有向图，还需要一种合法顺序。拓扑排序的出队次序即为一种修课序列。
>
> 若入队课程数不足 $\textit{numCourses}$，则存在环，返回空数组。



我们创建一个邻接表 $g$，用于存储每个节点的后继节点，同时还需要一个数组 $\textit{indeg}$ 存储每个节点的入度。在构建邻接表的同时，我们也统计每个节点的入度。当入度为 $0$ 的节点代表没有任何前置课程，可以直接学习，我们将其加入队列 $q$ 中。

当队列 $q$ 不为空的时候，我们取出队首的节点 $i$：

- 我们将 $i$ 放入答案中；
- 接下来，我们将 $i$ 的所有后继节点的入度减少 $1$。如果发现某个后继节点 $j$ 的入度变为 $0$，则将 $j$ 放入队列 $q$ 中。

在广度优先搜索的结束时，如果答案中包含了这 $n$ 个节点，那么我们就找到了一种拓扑排序，否则说明图中存在环，也就不存在拓扑排序了。

时间复杂度 $O(n + m)$，空间复杂度 $O(n + m)$。其中 $n$ 和 $m$ 分别是节点数和边数。

**Python 参考答案**

```python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: list[list[int]]) -> list[int]:
        g = defaultdict(list)
        indeg = [0] * numCourses
        for a, b in prerequisites:
            g[b].append(a)
            indeg[a] += 1
        ans = []
        q = deque(i for i, x in enumerate(indeg) if x == 0)
        while q:
            i = q.popleft()
            ans.append(i)
            for j in g[i]:
                indeg[j] -= 1
                if indeg[j] == 0:
                    q.append(j)
        return ans if len(ans) == numCourses else []
```


## 图的广度优先搜索


<a id="q909"></a>

### 909. 蛇梯棋

[打开原题](https://leetcode.cn/problems/snakes-and-ladders) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0900-0999/0909.Snakes%20and%20Ladders/README.md)

### 方法一：BFS



> **思考**
>
> 棋盘边长 $n\le 20$，格子至多 $400$。求最少掷骰次数，属于无权最短路。编号按蛇形映射到坐标，遇蛇或梯子则强制传送到目的地。
>
> 从 $1$ 开始按层 BFS，每格至多入队一次；走到 $n^2$ 时的层数即为答案，否则返回 $-1$。



我们可以使用广度优先搜索的方法，从起点开始，每次向前走 1 到 6 步，然后判断是否有蛇或梯子，如果有，就走到蛇或梯子的目的地，否则就走到下一个方格。

具体地，我们使用一个队列 $q$ 来存储当前可以到达的方格编号，初始时将编号 $1$ 放入队列。同时我们使用一个集合 $\textit{vis}$ 来记录已经到达过的方格，避免重复访问，初始时将编号 $1$ 加入集合 $\textit{vis}$。

在每一次的操作中，我们取出队首的方格编号 $x$，如果 $x$ 是终点，那么我们就可以返回当前的步数。否则我们将 $x$ 向前走 $1$ 到 $6$ 步，设新的编号为 $y$，如果 $y$ 落在棋盘外，那么我们就直接跳过。否则，我们需要找到 $y$ 对应的行和列，由于行的编号是从下到上递减的，而列的编号与行的奇偶性有关，因此我们需要进行一些计算得到 $y$ 对应的行和列。

如果 $y$ 对应的方格上有蛇或梯子，那么我们需要额外走到蛇或梯子的目的地，设其为 $z$。如果 $z$ 没有被访问过，我们就将 $z$ 加入队列和集合中，这样我们就可以继续进行广度优先搜索。

如果我们最终无法到达终点，那么我们就返回 $-1$。

时间复杂度 $O(n^2)$，空间复杂度 $O(n^2)$。其中 $n$ 是棋盘的边长。

**Python 参考答案**

```python
class Solution:
    def snakesAndLadders(self, board: list[list[int]]) -> int:
        n = len(board)
        q = deque([1])
        vis = {1}
        ans = 0
        m = n * n
        while q:
            for _ in range(len(q)):
                x = q.popleft()
                if x == m:
                    return ans
                for y in range(x + 1, min(x + 6, m) + 1):
                    i, j = divmod(y - 1, n)
                    if i & 1:
                        j = n - j - 1
                    i = n - i - 1
                    z = y if board[i][j] == -1 else board[i][j]
                    if z not in vis:
                        vis.add(z)
                        q.append(z)
            ans += 1
        return -1
```


<a id="q433"></a>

### 433. 最小基因变化

[打开原题](https://leetcode.cn/problems/minimum-genetic-mutation) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0400-0499/0433.Minimum%20Genetic%20Mutation/README.md)

### 方法一：BFS



> **思考**
>
> 一次突变只改一个字符且必须落在基因库中，求最少步数。这是无权图最短路，深度搜索得不到最小步数。
>
> 从起始基因 BFS，每步扫描库中尚未访问、恰好相差一位的串。第一次到达终点的深度即为答案；队列空则不可达。
>
> 库规模很小，按差一位建边即可，不必枚举四个字母的每一位替换。访问集合避免重复入队。



我们定义一个队列 `q`，用于存储当前基因序列以及变化的次数，定义一个集合 `vis`，用于存储已经访问过的基因序列。初始时，将起始基因序列 `start` 加入队列 `q`，并将其加入集合 `vis`。

然后，我们不断从队列 `q` 中取出一个基因序列，如果该基因序列等于目标基因序列，则返回当前的变化次数。否则，我们遍历基因库 `bank`，计算当前基因序列与基因库中的基因序列的差异值，如果差异值为 $1$，且基因库中的基因序列没有被访问过，则将其加入队列 `q`，并将其加入集合 `vis`。

如果队列 `q` 为空，说明无法完成基因变化，返回 $-1$。

时间复杂度 $O(C \times nm)$，空间复杂度 $O(nm)$。其中 $n$ 和 $m$ 分别表示基因序列的长度和基因库的长度，而 $C$ 表示基因序列的字符集大小，本题中 $C = 4$。

**Python 参考答案**

```python
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: list[str]) -> int:
        q = deque([(startGene, 0)])
        vis = {startGene}
        while q:
            gene, depth = q.popleft()
            if gene == endGene:
                return depth
            for nxt in bank:
                diff = sum(a != b for a, b in zip(gene, nxt))
                if diff == 1 and nxt not in vis:
                    q.append((nxt, depth + 1))
                    vis.add(nxt)
        return -1
```


<a id="q127"></a>

### 127. 单词接龙

[打开原题](https://leetcode.cn/problems/word-ladder) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0127.Word%20Ladder/README.md)

### 方法一：BFS



> **思考**
>
> 求最短变换长度，每次只改一个字母且必须在词表中。词表可达 $5000$、词长 $10$，枚举全部路径不可行。无权图的最短路用 BFS：对当前词的每个位置试 $26$ 个字母，命中词表则入队并删除，避免重复入队。



BFS 最小步数模型。本题可以用朴素 BFS，也可以用双向 BFS 优化搜索空间，从而提升效率。

双向 BFS 是 BFS 常见的一个优化方法，主要实现思路如下：

1. 创建两个队列 q1, q2 分别用于“起点 -> 终点”、“终点 -> 起点”两个方向的搜索；
2. 创建两个哈希表 m1, m2 分别记录访问过的节点以及对应的扩展次数（步数）；
3. 每次搜索时，优先选择元素数量较少的队列进行搜索扩展，如果在扩展过程中，搜索到另一个方向已经访问过的节点，说明找到了最短路径；
4. 只要其中一个队列为空，说明当前方向的搜索已经进行不下去了，说明起点到终点不连通，无需继续搜索。

```python
while q1 and q2:
    if len(q1) <= len(q2):
        # 优先选择较少元素的队列进行扩展
        extend(m1, m2, q1)
    else:
        extend(m2, m1, q2)


def extend(m1, m2, q):
    # 新一轮扩展
    for _ in range(len(q)):
        p = q.popleft()
        step = m1[p]
        for t in next(p):
            if t in m1:
                # 此前已经访问过
                continue
            if t in m2:
                # 另一个方向已经搜索过，说明找到了一条最短的连通路径
                return step + 1 + m2[t]
            q.append(t)
            m1[t] = step + 1
```

**复杂度（整理补充）**：设词数 N、词长 L、字母表大小 26。逐字符替换并构造字符串的实现，时间 O(26NL²)，辅助空间 O(NL)。

**Python 参考答案**

```python
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: list[str]) -> int:
        words = set(wordList)
        q = deque([beginWord])
        ans = 1
        while q:
            ans += 1
            for _ in range(len(q)):
                s = q.popleft()
                s = list(s)
                for i in range(len(s)):
                    ch = s[i]
                    for j in range(26):
                        s[i] = chr(ord('a') + j)
                        t = ''.join(s)
                        if t not in words:
                            continue
                        if t == endWord:
                            return ans
                        q.append(t)
                        words.remove(t)
                    s[i] = ch
        return 0
```


## 字典树


<a id="q208"></a>

### 208. 实现 Trie (前缀树)

[打开原题](https://leetcode.cn/problems/implement-trie-prefix-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0208.Implement%20Trie%20%28Prefix%20Tree%29/README.md)

### 方法一：前缀树



> **思考**
>
> 多次查询公共前缀时，若对每个单词扫描全部已插入词，则会重复比较相同前缀。字符均为小写，可用 $26$ 叉树按字符分层。
>
> 插入时沿路径创建结点并在末尾置 $\textit{isEnd}$；查询前缀走同一路径，search 再检查终点是否为词尾。



前缀树每个节点包括两部分：

1. 指向子节点的指针数组 $\textit{children}$，对于本题而言，数组长度为 $26$，即小写英文字母的数量。 $\textit{children}[0]$ 对应小写字母 $a$，...， $\textit{children}[25]$ 对应小写字母 $z$。
1. 布尔字段 $\textit{isEnd}$，表示该节点是否为字符串的结尾。

### 1. 插入字符串

我们从字典树的根开始，插入字符串。对于当前字符对应的子节点，有两种情况：

- 子节点存在。沿着指针移动到子节点，继续处理下一个字符。
- 子节点不存在。创建一个新的子节点，记录在 $\textit{children}$ 数组的对应位置上，然后沿着指针移动到子节点，继续搜索下一个字符。

重复以上步骤，直到处理字符串的最后一个字符，然后将当前节点标记为字符串的结尾。

### 2. 查找前缀

我们从字典树的根开始，查找前缀。对于当前字符对应的子节点，有两种情况：

- 子节点存在。沿着指针移动到子节点，继续搜索下一个字符。
- 子节点不存在。说明字典树中不包含该前缀，返回空指针。

重复以上步骤，直到返回空指针或搜索完前缀的最后一个字符。

若搜索到了前缀的末尾，就说明字典树中存在该前缀。此外，若前缀末尾对应节点的 $\textit{isEnd}$ 为真，则说明字典树中存在该字符串。

时间复杂度方面，插入字符串的时间复杂度为 $O(m|\Sigma|)$，查找前缀的时间复杂度为 $O(m)$，其中 $m$ 为字符串的长度，而 $|\Sigma|$ 为字符集的大小（本题中为 $26$）。空间复杂度为 $O(qm|\Sigma|)$，其中 $q$ 为插入的字符串数量。

**Python 参考答案**

```python
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.is_end = False

    def insert(self, word: str) -> None:
        node = self
        for c in word:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                node.children[idx] = Trie()
            node = node.children[idx]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self._search_prefix(word)
        return node is not None and node.is_end

    def startsWith(self, prefix: str) -> bool:
        node = self._search_prefix(prefix)
        return node is not None

    def _search_prefix(self, prefix: str):
        node = self
        for c in prefix:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                return None
            node = node.children[idx]
        return node


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```


<a id="q211"></a>

### 211. 添加与搜索单词 - 数据结构设计

[打开原题](https://leetcode.cn/problems/design-add-and-search-words-data-structure) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0211.Design%20Add%20and%20Search%20Words%20Data%20Structure/README.md)

### 方法一



> **思考**
>
> 精确匹配可用哈希表，但模式中的 $.$ 可代表任一字母，按词枚举无法高效处理通配。单词由小写字母构成，适合前缀树。
>
> 添加时沿 $26$ 叉路径建结点；搜索遇到普通字符则走固定边，遇到 $.$ 则对所有非空孩子分支，终点需为词尾。

**复杂度（整理补充）**：插入长度 L 的词需 O(L) 时间。无通配符查询 O(L)；含通配符时最坏遍历大量分支，可用 O(L·26^L) 作宽松上界。当前切片递归额外空间最坏 O(L²)，字典树存储与插入字符总数成正比。

**Python 参考答案**

```python
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.is_end = False


class WordDictionary:
    def __init__(self):
        self.trie = Trie()

    def addWord(self, word: str) -> None:
        node = self.trie
        for c in word:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                node.children[idx] = Trie()
            node = node.children[idx]
        node.is_end = True

    def search(self, word: str) -> bool:
        def search(word, node):
            for i in range(len(word)):
                c = word[i]
                idx = ord(c) - ord('a')
                if c != '.' and node.children[idx] is None:
                    return False
                if c == '.':
                    for child in node.children:
                        if child is not None and search(word[i + 1 :], child):
                            return True
                    return False
                node = node.children[idx]
            return node.is_end

        return search(word, self.trie)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
```


<a id="q212"></a>

### 212. 单词搜索 II

[打开原题](https://leetcode.cn/problems/word-search-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0212.Word%20Search%20II/README.md)

### 方法一：前缀树 + DFS



> **思考**
>
> 对每个单词在棋盘上单独 DFS，会在相同前缀上重复搜索。先把 $\textit{words}$ 建成前缀树，即可在格子扩展时同步走树并剪枝。
>
> 从每个格子出发，沿树上存在的边四向搜索；走到词尾则记录答案，并将 $\textit{ref}$ 置为 $-1$ 以免重复输出。



我们首先将 $\textit{words}$ 中的单词构建成前缀树，前缀树的每个节点包含一个长度为 $26$ 的数组 `children`，表示该节点的子节点，数组的下标表示子节点对应的字符，数组的值表示子节点的引用。同时，每个节点还包含一个整数 $\textit{ref}$，表示该节点对应的单词在 $\textit{words}$ 中的引用，如果该节点不是单词的结尾，则 $\textit{ref}$ 的值为 $-1$。

接下来，我们对于 `board` 中的每个单元格，从该单元格出发，进行深度优先搜索，搜索过程中，如果当前单词不是前缀树中的单词，则剪枝，如果当前单词是前缀树中的单词，则将该单词加入答案，并将该单词在前缀树中的引用置为 $-1$，表示该单词已经被找到，不需要再次搜索。

最后，我们将答案返回即可。

时间复杂度 $O(mn 3^{l-1})$，空间复杂度 $O(kl)$。其中 $m$ 和 $n$ 分别是 $\textit{board}$ 的行数和列数。而 $l$ 和 $k$ 分别是 $\textit{words}$ 中的单词的平均长度和单词的个数。

**Python 参考答案**

```python
class Trie:
    def __init__(self):
        self.children: list[Trie | None] = [None] * 26
        self.ref: int = -1

    def insert(self, w: str, ref: int):
        node = self
        for c in w:
            idx = ord(c) - ord('a')
            if node.children[idx] is None:
                node.children[idx] = Trie()
            node = node.children[idx]
        node.ref = ref


class Solution:
    def findWords(self, board: list[list[str]], words: list[str]) -> list[str]:
        def dfs(node: Trie, i: int, j: int):
            idx = ord(board[i][j]) - ord('a')
            if node.children[idx] is None:
                return
            node = node.children[idx]
            if node.ref >= 0:
                ans.append(words[node.ref])
                node.ref = -1
            c = board[i][j]
            board[i][j] = '#'
            for a, b in pairwise((-1, 0, 1, 0, -1)):
                x, y = i + a, j + b
                if 0 <= x < m and 0 <= y < n and board[x][y] != '#':
                    dfs(node, x, y)
            board[i][j] = c

        tree = Trie()
        for i, w in enumerate(words):
            tree.insert(w, i)
        m, n = len(board), len(board[0])
        ans = []
        for i in range(m):
            for j in range(n):
                dfs(tree, i, j)
        return ans
```


## 回溯


<a id="q17"></a>

### 17. 电话号码的字母组合

[打开原题](https://leetcode.cn/problems/letter-combinations-of-a-phone-number) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0017.Letter%20Combinations%20of%20a%20Phone%20Number/README.md)

### 方法一：遍历



> **思考**
>
> 数字长度 $n \le 4$，答案至多 $4^n$ 种，枚举全部组合在复杂度上可以接受。本质是若干字母集合的笛卡尔积；若手写 $n$ 层循环，则 $n$ 不固定时无法写出。
>
> 从空串出发，每读入一位数字，就把当前所有前缀与该位对应字母再拼接一遍，得到新的前缀表。这相当于按层展开笛卡尔积。因此用数组保存数字到字母的映射，从只含空串的列表出发逐位扩展；输入为空时返回空列表。



我们先用一个数组或者哈希表存储每个数字对应的字母，然后遍历每个数字，将其对应的字母与之前的结果进行组合，得到新的结果。

时间复杂度 $O(4^n)$，空间复杂度 $O(4^n)$。其中 $n$ 是输入数字的长度。

**Python 参考答案**

```python
class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        if not digits:
            return []
        d = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        ans = [""]
        for i in digits:
            s = d[int(i) - 2]
            ans = [a + b for a in ans for b in s]
        return ans
```


<a id="q77"></a>

### 77. 组合

[打开原题](https://leetcode.cn/problems/combinations) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0077.Combinations/README.md)

### 方法一：回溯（两种方式）



> **思考**
>
> 若先枚举 $\{1,\ldots,n\}$ 的全部 $2^n$ 个子集，再留下长度为 $k$ 的，则大量长度不符的子集被白白生成。 $n \le 20$，时间上可以接受，但搜索可以更早剪枝。
>
> 组合与顺序无关，每个数字只决定选或不选，路径长度达到 $k$ 即可停止。因此设计 $\textit{dfs}(i)$ 处理数字 $i$：先将其放入路径再递归 $i+1$，回溯后走「不选」分支。另一种写法是在剩余数字中枚举下一个 $j$，两种搜索树形状不同，答案相同；下面代码采用前一种。



我们设计一个函数 $\textit{dfs}(i)$，表示从数字 $i$ 开始搜索，当前搜索路径为 $t$，答案为 $\textit{ans}$。

函数 $\textit{dfs}(i)$ 的执行逻辑如下：

- 如果当前搜索路径 $t$ 的长度等于 $k$，则将当前搜索路径加入答案，然后返回。
- 如果 $i \gt n$，则说明搜索已经结束，返回。
- 否则，我们可以选择将数字 $i$ 加入搜索路径 $t$，然后继续搜索，即执行 $\textit{dfs}(i + 1)$，然后将数字 $i$ 从搜索路径 $t$ 中移除；或者不将数字 $i$ 加入搜索路径 $t$，直接执行 $\textit{dfs}(i + 1)$。

以上做法实际上是枚举当前数字选或者不选，然后递归地搜索下一个数字。我们也可以枚举下一个要选择的数字 $j$，其中 $i \leq j \leq n$，如果下一个要选择的数字是 $j$，那么我们将数字 $j$ 加入搜索路径 $t$，然后继续搜索，即执行 $\textit{dfs}(j + 1)$，接着将数字 $j$ 从搜索路径 $t$ 中移除。

在主函数中，我们从数字 $1$ 开始搜索，即执行 $\textit{dfs}(1)$。

时间复杂度 $O(k \times C_n^k)$，空间复杂度 $O(k)$。其中 $C_n^k$ 表示组合数。

相似题目：

- [39. 组合总和](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0039.Combination%20Sum/README.md)
- [40. 组合总和 II](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0040.Combination%20Sum%20II/README.md)
- [216. 组合总和 III](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0216.Combination%20Sum%20III/README.md)

**Python 参考答案**

```python
class Solution:
    def combine(self, n: int, k: int) -> list[list[int]]:
        def dfs(i: int):
            if len(t) == k:
                ans.append(t[:])
                return
            if i > n:
                return
            t.append(i)
            dfs(i + 1)
            t.pop()
            dfs(i + 1)

        ans = []
        t = []
        dfs(1)
        return ans
```


<a id="q46"></a>

### 46. 全排列

[打开原题](https://leetcode.cn/problems/permutations) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0046.Permutations/README.md)

### 方法一：DFS（回溯）



> **思考**
>
> $n \le 6$，排列共 $n!$ 个，规模允许全部枚举。调用语言自带的全排列，或写死若干层循环，都可以生成结果；但 $n$ 不固定，循环层数无法预先写死。
>
> 每个位置须选一个尚未使用的数，重复使用会破坏排列，因此需要标记。生成过程是「按位置填数」，自然对应深度优先搜索。
>
> 为此用布尔数组标记已选下标，按位置递归填写：未使用则放入当前位并继续，返回后撤销标记。 $n$ 很小，时间 $O(nn!)$ 与输出规模相符。



我们设计一个函数 $\textit{dfs}(i)$ 表示已经填完了前 $i$ 个位置，现在需要填第 $i+1$ 个位置。枚举所有可能的数，如果这个数没有被填过，就填入这个数，然后继续填下一个位置，直到填完所有的位置。

时间复杂度 $O(nn!)$。其中 $n$ 是数组的长度。一共有 $n!$ 个排列，每个排列需要 $O(n)$ 的时间来构造。

相似题目：

- [47. 全排列 II](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0047.Permutations%20II/README.md)

**Python 参考答案**

```python
class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        def dfs(i: int):
            if i >= n:
                ans.append(t[:])
                return
            for j, x in enumerate(nums):
                if not vis[j]:
                    vis[j] = True
                    t[i] = x
                    dfs(i + 1)
                    vis[j] = False

        n = len(nums)
        vis = [False] * n
        t = [0] * n
        ans = []
        dfs(0)
        return ans
```


<a id="q39"></a>

### 39. 组合总和

[打开原题](https://leetcode.cn/problems/combination-sum) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0039.Combination%20Sum/README.md)

### 方法一：排序 + 剪枝 + 回溯



> **思考**
>
> 对每个数无限次选用或不选，搜完所有和为 $\textit{target}$ 的序列，在 $n \le 30$、 $\textit{target} \le 40$ 时，若不剪枝会搜出大量超过目标和的路径，且不同顺序会被当成不同组合。
>
> 组合与顺序无关，同一组数只应出现一次。因此先排序，搜索时只从当前下标向右选取，避免排列重复。排序后若剩余 $s$ 已小于 $\textit{candidates}[i]$，其后元素更大，整支可以停止。 $\textit{dfs}(i, s)$ 从 $i$ 起枚举 $j$，递归仍从 $j$ 开始，表示该数还能再用。



我们可以先对数组进行排序，方便剪枝。

接下来，我们设计一个函数 $\textit{dfs}(i, s)$，表示从下标 $i$ 开始搜索，且剩余目标值为 $s$，其中 $i$ 和 $s$ 都是非负整数，当前搜索路径为 $t$，答案为 $\textit{ans}$。

在函数 $\textit{dfs}(i, s)$ 中，我们先判断 $s$ 是否为 $0$，如果是，则将当前搜索路径 $t$ 加入答案 $\textit{ans}$ 中，然后返回。如果 $s \lt \textit{candidates}[i]$，说明当前下标及后面的下标的元素都大于剩余目标值 $s$，路径不合法，直接返回。否则，我们从下标 $i$ 开始搜索，搜索的下标范围是 $j \in [i, n)$，其中 $n$ 为数组 $\textit{candidates}$ 的长度。在搜索的过程中，我们将当前下标的元素加入搜索路径 $t$，递归调用函数 $\textit{dfs}(j, s - \textit{candidates}[j])$，递归结束后，将当前下标的元素从搜索路径 $t$ 中移除。

在主函数中，我们只要调用函数 $\textit{dfs}(0, \textit{target})$，即可得到答案。

时间复杂度 $O(2^n n)$，空间复杂度 $O(n)$。其中 $n$ 为数组 $\textit{candidates}$ 的长度。由于剪枝，实际的时间复杂度要远小于 $O(2^n n)$。

相似题目：

- [40. 组合总和 II](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0040.Combination%20Sum%20II/README.md)
- [77. 组合](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0077.Combinations/README.md)
- [216. 组合总和 III](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0216.Combination%20Sum%20III/README.md)

**Python 参考答案**

```python
class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        def dfs(i: int, s: int):
            if s == 0:
                ans.append(t[:])
                return
            if s < candidates[i]:
                return
            for j in range(i, len(candidates)):
                t.append(candidates[j])
                dfs(j, s - candidates[j])
                t.pop()

        candidates.sort()
        t = []
        ans = []
        dfs(0, target)
        return ans
```


<a id="q52"></a>

### 52. N 皇后 II

[打开原题](https://leetcode.cn/problems/n-queens-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0052.N-Queens%20II/README.md)

### 方法一：回溯



> **思考**
>
> 本题只要求方案数，不必输出棋盘。若先构造全部解再计数， $n \le 9$ 可以完成，但字符串与棋盘拷贝都是多余开销。
>
> 约束与 N 皇后相同：每行恰好一个皇后，列与两条对角线互不冲突，仍可用数组 $O(1)$ 标记占用。
>
> 因此同样按行回溯，到达第 $n$ 行时将计数加一即可，无需维护棋盘。



我们设计一个函数 $\textit{dfs}(i)$，表示从第 $i$ 行开始搜索，搜索到的结果累加到答案中。

在第 $i$ 行，我们枚举第 $i$ 行的每一列，如果当前列不与前面已经放置的皇后发生冲突，那么我们就可以放置一个皇后，然后继续搜索下一行，即调用 $\textit{dfs}(i + 1)$。

如果发生冲突，那么我们就跳过当前列，继续枚举下一列。

判断是否发生冲突，我们需要用三个数组分别记录每一列、每一条正对角线、每一条反对角线是否已经放置了皇后。

具体地，我们用 $\textit{cols}$ 数组记录每一列是否已经放置了皇后，用 $dg$ 数组记录每一条正对角线是否已经放置了皇后，用 $\textit{udg}$ 数组记录每一条反对角线是否已经放置了皇后。

时间复杂度 $O(n!)$，空间复杂度 $O(n)$。其中 $n$ 是皇后的数量。

**Python 参考答案**

```python
class Solution:
    def totalNQueens(self, n: int) -> int:
        def dfs(i: int):
            if i == n:
                nonlocal ans
                ans += 1
                return
            for j in range(n):
                a, b = i + j, i - j + n
                if cols[j] or dg[a] or udg[b]:
                    continue
                cols[j] = dg[a] = udg[b] = True
                dfs(i + 1)
                cols[j] = dg[a] = udg[b] = False

        cols = [False] * 10
        dg = [False] * 20
        udg = [False] * 20
        ans = 0
        dfs(0)
        return ans
```


<a id="q22"></a>

### 22. 括号生成

[打开原题](https://leetcode.cn/problems/generate-parentheses) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0022.Generate%20Parentheses/README.md)

### 方法一：DFS + 剪枝



> **思考**
>
> 合法括号串的长度固定为 $2n$。若先枚举所有由左、右括号组成的串再筛出合法者，方案数为 $2^{2n}$。 $n \le 8$ 时可以接受，但绝大多数前缀已经不可能构成合法序列。
>
> 一旦某前缀中右括号多于左括号，或某一侧的个数超过 $n$，则无论后续如何补全都无法得到合法串。因此只需维护已放入的左、右括号个数 $l$、 $r$，并始终保证 $l \ge r$ 且二者均不超过 $n$；当 $l = r = n$ 时收入答案。
>
> 为此我们用 DFS 依次尝试追加左括号或右括号，以上述不等式剪枝。搜索空间远小于全枚举，额外空间仅为当前串的 $O(n)$。



题目中 $n$ 的范围为 $[1, 8]$，因此我们直接通过“暴力搜索 + 剪枝”的方式通过本题。

我们设计一个函数 $\textit{dfs}(l, r, t)$，其中 $l$ 和 $r$ 分别表示左括号和右括号的数量，而 $t$ 表示当前的括号序列。那么我们可以得到如下的递归结构：

- 如果 $l \gt n$ 或者 $r \gt n$ 或者 $l \lt r$，那么当前括号组合 $t$ 不合法，直接返回；
- 如果 $l = n$ 且 $r = n$，那么当前括号组合 $t$ 合法，将其加入答案数组 `ans` 中，直接返回；
- 我们可以选择添加一个左括号，递归执行 `dfs(l + 1, r, t + "(")`；
- 我们也可以选择添加一个右括号，递归执行 `dfs(l, r + 1, t + ")")`。

时间复杂度 $O(n 2^{2n})$，空间复杂度 $O(n)$。

**Python 参考答案**

```python
class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        def dfs(l: int, r: int, t: str):
            if l > n or r > n or l < r:
                return
            if l == n and r == n:
                ans.append(t)
                return
            dfs(l + 1, r, t + "(")
            dfs(l, r + 1, t + ")")

        ans = []
        dfs(0, 0, "")
        return ans
```


<a id="q79"></a>

### 79. 单词搜索

[打开原题](https://leetcode.cn/problems/word-search) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0079.Word%20Search/README.md)

### 方法一：DFS(回溯)



> **思考**
>
> 若从每个格子出发走出长度为 $|\textit{word}|$ 的路径再比对，网格至多 $6 \times 6$、 $|\textit{word}| \le 15$，不及时剪枝则搜索量过大。必须边走边比较，失配立刻返回，且同一格子不能使用两次。
>
> 路径必须与 $\textit{word}$ 逐字符对齐，因此搜索状态可以写成 $\textit{dfs}(i, j, k)$：当前位置 $(i, j)$ 对齐 $\textit{word}[k]$。匹配后将格子改为 `'0'` 防止重入，再向四邻搜索 $k+1$，返回时还原。字母本身不是 `'0'`，因此不必另开访问数组。枚举每一个起点，任一成功即可。



我们可以枚举网格的每一个位置 $(i, j)$ 作为搜索的起点，然后从起点开始进行深度优先搜索，如果可以搜索到单词的末尾，就说明单词存在，否则说明单词不存在。

因此，我们设计一个函数 $\textit{dfs}(i, j, k)$，表示从网格的 $(i, j)$ 位置出发，且从单词的第 $k$ 个字符开始搜索，是否能够搜索成功。函数 $\textit{dfs}(i, j, k)$ 的执行步骤如下：

- 如果 $k = |\textit{word}|-1$，说明已经搜索到单词的最后一个字符，此时只需要判断网格 $(i, j)$ 位置的字符是否等于 $\textit{word}[k]$，如果相等则说明单词存在，否则说明单词不存在。无论单词是否存在，都无需继续往下搜索，因此直接返回结果。
- 否则，如果 $\textit{word}[k]$ 字符不等于网格 $(i, j)$ 位置的字符，说明本次搜索失败，直接返回 `false`。
- 否则，我们将网格 $(i, j)$ 位置的字符暂存于 $c$ 中，然后将此位置的字符修改为一个特殊字符 `'0'`，代表此位置的字符已经被使用过，防止之后搜索时重复使用。然后我们从 $(i, j)$ 位置的上、下、左、右四个方向分别出发，去搜索网格中第 $k+1$ 个字符，如果四个方向有任何一个方向搜索成功，就说明搜索成功，否则说明搜索失败，此时我们需要还原网格 $(i, j)$ 位置的字符，即把 $c$ 放回网格 $(i, j)$ 位置（回溯）。

在主函数中，我们枚举网格中的每一个位置 $(i, j)$ 作为起点，如果调用 $\textit{dfs}(i, j, 0)$ 返回 `true`，就说明单词存在，否则说明单词不存在，返回 `false`。

时间复杂度 $O(mn 3^k)$，空间复杂度 $O(\min(mn, k))$。其中 $m$ 和 $n$ 分别是网格的行数和列数；而 $k$ 是字符串 $\textit{word}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        def dfs(i: int, j: int, k: int) -> bool:
            if k == len(word) - 1:
                return board[i][j] == word[k]
            if board[i][j] != word[k]:
                return False
            c = board[i][j]
            board[i][j] = "0"
            for a, b in pairwise((-1, 0, 1, 0, -1)):
                x, y = i + a, j + b
                ok = 0 <= x < m and 0 <= y < n and board[x][y] != "0"
                if ok and dfs(x, y, k + 1):
                    return True
            board[i][j] = c
            return False

        m, n = len(board), len(board[0])
        return any(dfs(i, j, 0) for i in range(m) for j in range(n))
```


## 分治


<a id="q108"></a>

### 108. 将有序数组转换为二叉搜索树

[打开原题](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0108.Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/README.md)

### 方法一：二分 + 递归



> **思考**
>
> 有序数组本身就是一棵 BST 的中序序列。若总取左端或右端为根，树会退化成链，高度为 $n$，不满足高度平衡。 $n \le 10^4$。
>
> 区间中点作为根时，左右两侧元素个数至多相差 $1$，子树高度自然平衡。为此在 $[l,r]$ 上取中点建根，再递归左右半段。



我们设计一个递归函数 $\textit{dfs}(l, r)$，表示当前待构造的二叉搜索树的节点值都在数组 $\textit{nums}$ 的下标范围 $[l, r]$ 内。该函数返回构造出的二叉搜索树的根节点。

函数 $\textit{dfs}(l, r)$ 的执行流程如下：

1. 如果 $l > r$，说明当前数组为空，返回 `null`。
2. 如果 $l \leq r$，取数组中下标为 $\textit{mid} = \lfloor \frac{l + r}{2} \rfloor$ 的元素作为当前二叉搜索树的根节点，其中 $\lfloor x \rfloor$ 表示对 $x$ 向下取整。
3. 递归地构造当前二叉搜索树的左子树，其根节点的值为数组中下标为 $\textit{mid} - 1$ 的元素，左子树的节点值都在数组的下标范围 $[l, \textit{mid} - 1]$ 内。
4. 递归地构造当前二叉搜索树的右子树，其根节点的值为数组中下标为 $\textit{mid} + 1$ 的元素，右子树的节点值都在数组的下标范围 $[\textit{mid} + 1, r]$ 内。
5. 返回当前二叉搜索树的根节点。

答案即为函数 $\textit{dfs}(0, n - 1)$ 的返回值。

时间复杂度 $O(n)$，空间复杂度 $O(\log n)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: list[int]) -> Optional[TreeNode]:
        def dfs(l: int, r: int) -> Optional[TreeNode]:
            if l > r:
                return None
            mid = (l + r) >> 1
            return TreeNode(nums[mid], dfs(l, mid - 1), dfs(mid + 1, r))

        return dfs(0, len(nums) - 1)
```


<a id="q148"></a>

### 148. 排序链表

[打开原题](https://leetcode.cn/problems/sort-list) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0148.Sort%20List/README.md)

### 方法一：归并排序



> **思考**
>
> 链表排序，进阶要求 $O(n \log n)$ 时间、常数空间。随机访问缺失，快排交换不方便； $n\le 5\times 10^4$。归并只需要顺序访问：快慢指针断开中点，递归排序两半再线性合并。递归栈是 $O(\log n)$，满足时间要求。



我们可以用归并排序的思想来解决。

首先，我们利用快慢指针找到链表的中点，将链表从中点处断开，形成两个独立的子链表 $\textit{l1}$ 和 $\textit{l2}$。

然后，我们递归地对 $\textit{l1}$ 和 $\textit{l2}$ 进行排序，最后将 $\textit{l1}$ 和 $\textit{l2}$ 合并为一个有序链表。

时间复杂度 $O(n \log n)$，空间复杂度 $O(\log n)$。其中 $n$ 是链表的长度。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        l1, l2 = head, slow.next
        slow.next = None
        l1, l2 = self.sortList(l1), self.sortList(l2)
        dummy = ListNode()
        tail = dummy
        while l1 and l2:
            if l1.val <= l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next
        tail.next = l1 or l2
        return dummy.next
```


<a id="q427"></a>

### 427. 建立四叉树

[打开原题](https://leetcode.cn/problems/construct-quad-tree) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0400-0499/0427.Construct%20Quad%20Tree/README.md)

### 方法一：DFS



> **思考**
>
> 四叉树要求一块区域全同则为叶子，否则四等分。若对每个可能的子矩形都重新扫描，存在重复，但 $n\le 64$ 且每次四分，总扫描量可接受。
>
> DFS 扫描当前矩形是否同时出现 $0$ 与 $1$：若只有一种值则建叶子，否则递归四块并挂到四个孩子。
>
> 叶节点的 $\textit{val}$ 取该块颜色；先判定全同再决定是否分裂，避免对纯色块继续切分。



DFS 递归遍历 grid，先判断 grid 是否为叶子节点，是则返回叶子节点相关信息；否则递归 grid 4 个子节点。

**复杂度（整理补充）**：n×n 网格逐层扫描：时间 O(n² log n)；递归辅助空间 O(log n)，结果树空间 O(n²)。

**Python 参考答案**

```python
"""
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""


class Solution:
    def construct(self, grid: list[list[int]]) -> 'Node':
        def dfs(a, b, c, d):
            zero = one = 0
            for i in range(a, c + 1):
                for j in range(b, d + 1):
                    if grid[i][j] == 0:
                        zero = 1
                    else:
                        one = 1
            isLeaf = zero + one == 1
            val = isLeaf and one
            if isLeaf:
                return Node(grid[a][b], True)
            topLeft = dfs(a, b, (a + c) // 2, (b + d) // 2)
            topRight = dfs(a, (b + d) // 2 + 1, (a + c) // 2, d)
            bottomLeft = dfs((a + c) // 2 + 1, b, c, (b + d) // 2)
            bottomRight = dfs((a + c) // 2 + 1, (b + d) // 2 + 1, c, d)
            return Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight)

        return dfs(0, 0, len(grid) - 1, len(grid[0]) - 1)
```


<a id="q23"></a>

### 23. 合并 K 个升序链表

[打开原题](https://leetcode.cn/problems/merge-k-sorted-lists) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0023.Merge%20k%20Sorted%20Lists/README.md)

### 方法一：优先队列（小根堆）



> **思考**
>
> 若将 $k$ 条链表依次两两合并，总节点 $n \le 10^4$ 时最坏时间 $O(nk)$。在 $k \le 10^4$ 的范围下无法通过。全部取出排序再建表虽为 $O(n \log n)$，却没有利用每条链表已经有序这一条件。
>
> 任意时刻，下一步该接到答案上的节点只可能是各链表当前的头。若每次线性扫描这 $k$ 个候选，乘上 $n$ 个节点便回到 $O(nk)$。
>
> 因此用小根堆维护至多 $k$ 个候选头：每次取出最小者接到结果尾部，再把它的后继（若存在）入堆。每个节点进出堆各一次，时间 $O(n \log k)$。



我们可以创建一个小根堆来 $pq$ 维护所有链表的头节点，每次从小根堆中取出值最小的节点，添加到结果链表的末尾，然后将该节点的下一个节点加入堆中，重复上述步骤直到堆为空。

时间复杂度 $O(n \log k)$，空间复杂度 $O(k)$。其中 $n$ 是所有链表节点数目的总和，而 $k$ 是题目给定的链表数目。

**Python 参考答案**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: list[Optional[ListNode]]) -> Optional[ListNode]:
        setattr(ListNode, "__lt__", lambda a, b: a.val < b.val)
        pq = [head for head in lists if head]
        heapify(pq)
        dummy = cur = ListNode()
        while pq:
            node = heappop(pq)
            if node.next:
                heappush(pq, node.next)
            cur.next = node
            cur = cur.next
        return dummy.next
```


## 最大子数组


<a id="q53"></a>

### 53. 最大子数组和

[打开原题](https://leetcode.cn/problems/maximum-subarray) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0053.Maximum%20Subarray/README.md)

### 方法一：动态规划



> **思考**
>
> 连续子数组的个数为 $O(n^2)$。若枚举左右端点再求和，时间复杂度为 $O(n^2)$ 乃至 $O(n^3)$。 $n \le 10^5$，无法通过。
>
> 子数组彼此重叠，每次重新求和会重复计算。固定右端点 $i$ 时，以 $i$ 结尾的最优段只有两种选择：若「以 $i-1$ 结尾的最大和」为正，则接在其后；否则从 $i$ 单独开始。
>
> 因此以右端点为状态即可线性递推，且每一项只依赖前一项，用一个变量滚动维护，再取全程最大值即可。



我们定义 $f[i]$ 表示以元素 $\textit{nums}[i]$ 为结尾的连续子数组的最大和，初始时 $f[0] = \textit{nums}[0]$，那么最终我们要求的答案即为 $\max_{0 \leq i < n} f[i]$。

考虑 $f[i]$，其中 $i \geq 1$，它的状态转移方程为：

$$
f[i] = \max(f[i - 1] + \textit{nums}[i], \textit{nums}[i])
$$

也即：

$$
f[i] = \max(f[i - 1], 0) + \textit{nums}[i]
$$

由于 $f[i]$ 只与 $f[i - 1]$ 有关系，因此我们可以只用一个变量 $f$ 来维护对于当前 $f[i]$ 的值是多少，然后进行状态转移即可。答案为 $\max_{0 \leq i < n} f$。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        ans = f = nums[0]
        for x in nums[1:]:
            f = max(f, 0) + x
            ans = max(ans, f)
        return ans
```


<a id="q918"></a>

### 918. 环形子数组的最大和

[打开原题](https://leetcode.cn/problems/maximum-sum-circular-subarray) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0900-0999/0918.Maximum%20Sum%20Circular%20Subarray/README.md)

### 方法一：维护前缀最值



> **思考**
>
> 环形最大子段和有两种形态：不跨越端点时即普通最大子段；跨越时等于总和减去最小子段。一次扫描同时维护前缀最小与前缀最大，分别得到这两种量，最后取 $\textit{ans}$ 与 $s-\textit{smi}$ 的较大者。



求环形子数组的最大和，可以分为两种情况：

- 情况一：最大和的子数组不包含环形部分，即为普通的最大子数组和；
- 情况二：最大和的子数组包含环形部分，我们可以转换为：求数组总和减去最小子数组和。

因此，我们维护以下几个变量：

- 前缀和最小值 $\textit{pmi}$，初始值为 $0$；
- 前缀和最大值 $\textit{pmx}$，初始值为 $-\infty$；
- 前缀和 $s$，初始值为 $0$；
- 最小子数组和 $\textit{smi}$，初始值为 $\infty$；
- 答案 $\textit{ans}$，初始值为 $-\infty$。

接下来，我们只需要遍历数组 $\textit{nums}$，对于当前遍历到的元素 $x$，我们做以下更新操作：

- 更新前缀和 $s = s + x$；
- 更新答案 $\textit{ans} = \max(\textit{ans}, s - \textit{pmi})$，即为情况一的答案（前缀和 $s$ 减去最小前缀和 $\textit{pmi}$，可以得到最大子数组和）；
- 更新 $\textit{smi} = \min(\textit{smi}, s - \textit{pmx})$，即为情况二的最小子数组和；
- 更新 $\textit{pmi} = \min(\textit{pmi}, s)$，即为最小前缀和；
- 更新 $\textit{pmx} = \max(\textit{pmx}, s)$，即为最大前缀和。

遍历结束，我们取 $\textit{ans}$ 以及 $s - \textit{smi}$ 的最大值作为答案返回即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组长度。

**Python 参考答案**

```python
class Solution:
    def maxSubarraySumCircular(self, nums: list[int]) -> int:
        pmi, pmx = 0, -inf
        ans, s, smi = -inf, 0, inf
        for x in nums:
            s += x
            ans = max(ans, s - pmi)
            smi = min(smi, s - pmx)
            pmi = min(pmi, s)
            pmx = max(pmx, s)
        return max(ans, s - smi)
```


## 二分查找


<a id="q35"></a>

### 35. 搜索插入位置

[打开原题](https://leetcode.cn/problems/search-insert-position) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0035.Search%20Insert%20Position/README.md)

### 方法一：二分查找



> **思考**
>
> 从左扫描到第一个不小于 $\textit{target}$ 的位置，时间复杂度为 $O(n)$。在 $n \le 10^4$ 的数据范围下可以接受，但数组已升序且无重复，线性遍历没有利用有序性。
>
> 插入位置恰好是第一个不小于 $\textit{target}$ 的下标，即有序数组上的下界。为此维护半开区间 $[l, r)$：若 $\textit{nums}[\textit{mid}] \ge \textit{target}$，则答案位于左半（含 $\textit{mid}$）；否则位于 $\textit{mid}$ 右侧。收缩至 $l = r$ 时， $l$ 即为插入点。



由于 $\textit{nums}$ 数组已经有序，因此我们可以使用二分查找的方法找到目标值 $\textit{target}$ 的插入位置。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        l, r = 0, len(nums)
        while l < r:
            mid = (l + r) >> 1
            if nums[mid] >= target:
                r = mid
            else:
                l = mid + 1
        return l
```


<a id="q74"></a>

### 74. 搜索二维矩阵

[打开原题](https://leetcode.cn/problems/search-a-2d-matrix) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0074.Search%20a%202D%20Matrix/README.md)

### 方法一：二分查找



> **思考**
>
> 逐格扫描需要 $O(mn)$ 时间。 $m, n \le 100$ 可以接受，但题目要求 $O(\log(mn))$。
>
> 二维矩阵本身不便直接二分，但每一行递增，且上一行末尾小于下一行开头，因此按行拼接后是长度为 $mn$ 的有序序列。将逻辑下标 $\textit{mid}$ 映射为 $\textit{matrix}[\lfloor \textit{mid}/n\rfloor][\textit{mid} \bmod n]$，即可在 $[0, mn-1]$ 上做一次二分，不必真正展开数组。



我们将二维矩阵逻辑展开，然后二分查找即可。

时间复杂度 $O(\log (mn))$，空间复杂度 $O(1)$。其中 $m$ 和 $n$ 分别是矩阵的行数和列数。

**Python 参考答案**

```python
class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        left, right = 0, m * n - 1
        while left < right:
            mid = (left + right) >> 1
            x, y = divmod(mid, n)
            if matrix[x][y] >= target:
                right = mid
            else:
                left = mid + 1
        return matrix[left // n][left % n] == target
```


<a id="q162"></a>

### 162. 寻找峰值

[打开原题](https://leetcode.cn/problems/find-peak-element) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0162.Find%20Peak%20Element/README.md)

### 方法一：二分查找



> **思考**
>
> 相邻元素不同，两端外侧视为负无穷，峰值一定存在。线性扫描 $n\le 1000$ 可以，题目希望 $O(\log n)$。比较中点与右侧：右侧更小则左半（含中点）存在峰值，否则右半存在。不断缩小，相遇即峰值下标。



我们定义二分查找的左边界 $\textit{left}=0$，右边界 $\textit{right}=n-1$，其中 $n$ 是数组的长度。在每一步二分查找中，我们找到当前区间的中间元素 $\textit{mid}$，然后比较 $\textit{mid}$ 与其右边元素 $\textit{mid}+1$ 的值：

- 如果 $\textit{mid}$ 的值大于 $\textit{mid}+1$ 的值，则左侧存在峰值元素，我们将右边界 $\textit{right}$ 更新为 $\textit{mid}$；
- 否则，右侧存在峰值元素，我们将左边界 $\textit{left}$ 更新为 $\textit{mid}+1$。
- 最后，当左边界 $\textit{left}$ 与右边界 $\textit{right}$ 相等时，我们就找到了数组的峰值元素。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。每一步二分查找可以将搜索区间减少一半，因此时间复杂度为 $O(\log n)$。

**Python 参考答案**

```python
class Solution:
    def findPeakElement(self, nums: list[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) >> 1
            if nums[mid] > nums[mid + 1]:
                right = mid
            else:
                left = mid + 1
        return left
```


<a id="q33"></a>

### 33. 搜索旋转排序数组

[打开原题](https://leetcode.cn/problems/search-in-rotated-sorted-array) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0033.Search%20in%20Rotated%20Sorted%20Array/README.md)

### 方法一：二分查找



> **思考**
>
> 线性扫描的时间复杂度为 $O(n)$。题目要求 $O(\log n)$，因此不能逐个比较。
>
> 数组被旋转后整体不再有序，普通二分无法直接判断 $\textit{target}$ 落在哪一半。
>
> 注意到，任取中点将区间一分为二，其中至少有一半保持单调。比较 $\textit{nums}[0]$ 与 $\textit{nums}[\textit{mid}]$ 即可判断左半是否有序；若 $\textit{target}$ 落在该有序区间内，则丢弃另一半，否则在无序半段中继续查找。因此仍可二分：有序半段用来判定去留，无序半段留给下一轮继续分割。



我们使用二分，将数组分割成 $[left,.. mid]$, $[mid + 1,.. right]$ 两部分，这时候可以发现，其中有一部分一定是有序的。

因此，我们可以根据有序的那一部分，判断 $\textit{target}$ 是否在这一部分中：

- 若 $[0,.. mid]$ 范围内的元素构成有序数组：
    - 若满足 $\textit{nums}[0] \leq \textit{target} \leq \textit{nums}[\textit{mid}]$，那么我们搜索范围可以缩小为 $[left,.. mid]$；
    - 否则，在 $[mid + 1,.. right]$ 中查找；
- 若 $[\textit{mid} + 1, n - 1]$ 范围内的元素构成有序数组：
    - 若满足 $\textit{nums}[\textit{mid}] \lt \textit{target} \leq \textit{nums}[n - 1]$，那么我们搜索范围可以缩小为 $[mid + 1,.. right]$；
    - 否则，在 $[left,.. mid]$ 中查找。

二分查找终止条件是 $\textit{left} \geq \textit{right}$，若结束后发现 $\textit{nums}[\textit{left}]$ 与 $\textit{target}$ 不等，说明数组中不存在值为 $\textit{target}$ 的元素，返回 $-1$，否则返回下标 $\textit{left}$。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def search(self, nums: list[int], target: int) -> int:
        n = len(nums)
        left, right = 0, n - 1
        while left < right:
            mid = (left + right) >> 1
            if nums[0] <= nums[mid]:
                if nums[0] <= target <= nums[mid]:
                    right = mid
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[n - 1]:
                    left = mid + 1
                else:
                    right = mid
        return left if nums[left] == target else -1
```


<a id="q34"></a>

### 34. 在排序数组中查找元素的第一个和最后一个位置

[打开原题](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0034.Find%20First%20and%20Last%20Position%20of%20Element%20in%20Sorted%20Array/README.md)

### 方法一：二分查找



> **思考**
>
> 扫描一遍记下 $\textit{target}$ 的首次与末次出现，时间复杂度为 $O(n)$。 $n \le 10^5$ 且题目要求 $O(\log n)$；即便先找到一个命中再向两侧扩展，最坏仍是线性。
>
> 数组非递减，左右边界各自是一个二分问题，不必在同一轮里同时寻找两端。左边界即第一个不小于 $\textit{target}$ 的位置，右边界即第一个不小于 $\textit{target}+1$ 的位置减一。两次下界查找即可；若两次结果相同，说明 $\textit{target}$ 不存在。



我们可以进行两次二分查找，分别查找出左边界和右边界。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        l = bisect_left(nums, target)
        r = bisect_left(nums, target + 1)
        return [-1, -1] if l == r else [l, r - 1]
```


<a id="q153"></a>

### 153. 寻找旋转排序数组中的最小值

[打开原题](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0153.Find%20Minimum%20in%20Rotated%20Sorted%20Array/README.md)

### 方法一：二分查找



> **思考**
>
> 旋转后的有序数组没有重复，线性扫最小值是 $O(n)$， $n\le 5000$ 可以，但有序性允许对数。最小值把数组分成两段递增。与末元素比较：中点更大说明最小值在右半，否则在左半（含中点）。收缩到一点即答案。



我们可以使用二分查找来解决这个问题。

首先，我们定义两个指针 $l$ 和 $r$，分别指向数组的起始位置和结束位置。然后，我们进入一个循环，直到 $l$ 小于 $r$。

在每次循环中，我们计算中间位置 $\textit{mid}$，并比较 $\textit{nums}[\textit{mid}]$ 和 $\textit{nums}[n-1]$ 的值。如果 $\textit{nums}[\textit{mid}]$ 大于 $\textit{nums}[n-1]$，说明最小值在 $\textit{mid}$ 的右侧，因此我们将 $l$ 更新为 $\textit{mid} + 1$。否则，最小值在 $\textit{mid}$ 的左侧或 $\textit{mid}$ 本身，因此我们将 $r$ 更新为 $\textit{mid}$。当循环结束时，指针 $l$ 将指向最小值的位置，我们返回 $\textit{nums}[l]$ 即可。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def findMin(self, nums: list[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (l + r) >> 1
            if nums[mid] > nums[-1]:
                l = mid + 1
            else:
                r = mid
        return nums[l]
```


<a id="q4"></a>

### 4. 寻找两个正序数组的中位数

[打开原题](https://leetcode.cn/problems/median-of-two-sorted-arrays) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0004.Median%20of%20Two%20Sorted%20Arrays/README.md)

### 方法一：分治



> **思考**
>
> 若将两个有序数组合并后再取中位数，时间复杂度为 $O(m+n)$。在 $m,n \le 10^3$ 的范围内可以接受，但题目要求 $O(\log(m+n))$，因此不能线性扫描。
>
> 注意到中位数只取决于合并后正中间的一两个位置，比它更小的元素只需知道个数，而不必真正列出。两数组均有序，比较各自第 $\left\lfloor k/2 \right\rfloor$ 个数，即可判断其中一侧的前一半不可能是第 $k$ 小，从而一次排除一半候选。
>
> 因此我们在剩余区间上求第 $k$ 小，而不构造合并数组。将中位数统一为第 $\left\lfloor (m+n+1)/2 \right\rfloor$ 与第 $\left\lfloor (m+n+2)/2 \right\rfloor$ 个数的平均，奇数与偶数长度可以共用同一套逻辑。若某一侧不足 $\left\lfloor k/2 \right\rfloor$ 个元素，则将该侧视为 $+\infty$，只会排除另一侧。



题目要求算法的时间复杂度为 $O(\log (m + n))$，因此不能直接遍历两个数组，而是需要使用二分查找的方法。

如果 $m + n$ 是奇数，那么中位数就是第 $\left\lfloor\frac{m + n + 1}{2}\right\rfloor$ 个数；如果 $m + n$ 是偶数，那么中位数就是第 $\left\lfloor\frac{m + n + 1}{2}\right\rfloor$ 和第 $\left\lfloor\frac{m + n + 2}{2}\right\rfloor$ 个数的平均数。实际上，我们可以统一为求第 $\left\lfloor\frac{m + n + 1}{2}\right\rfloor$ 个数和第 $\left\lfloor\frac{m + n + 2}{2}\right\rfloor$ 个数的平均数。

因此，我们可以设计一个函数 $f(i, j, k)$，表示在数组 $\textit{nums1}$ 的区间 $[i, m)$ 和数组 $\textit{nums2}$ 的区间 $[j, n)$ 中，求第 $k$ 小的数。那么中位数就是 $f(0, 0, \left\lfloor\frac{m + n + 1}{2}\right\rfloor)$ 和 $f(0, 0, \left\lfloor\frac{m + n + 2}{2}\right\rfloor)$ 的平均数。

函数 $f(i, j, k)$ 的实现思路如下：

- 如果 $i \geq m$，说明数组 $\textit{nums1}$ 的区间 $[i, m)$ 为空，因此直接返回 $\textit{nums2}[j + k - 1]$；
- 如果 $j \geq n$，说明数组 $\textit{nums2}$ 的区间 $[j, n)$ 为空，因此直接返回 $\textit{nums1}[i + k - 1]$；
- 如果 $k = 1$，说明要找第一个数，因此只需要返回 $\textit{nums1}[i]$ 和 $\textit{nums2}[j]$ 中的最小值；
- 否则，我们分别在两个数组中查找第 $\left\lfloor\frac{k}{2}\right\rfloor$ 个数，设为 $x$ 和 $y$。（注意，如果某个数组不存在第 $\left\lfloor\frac{k}{2}\right\rfloor$ 个数，那么我们将第 $\left\lfloor\frac{k}{2}\right\rfloor$ 个数视为 $+\infty$。）比较 $x$ 和 $y$ 的大小：
    - 如果 $x \leq y$，则说明数组 $\textit{nums1}$ 的第 $\left\lfloor\frac{k}{2}\right\rfloor$ 个数不可能是第 $k$ 小的数，因此我们可以排除数组 $\textit{nums1}$ 的区间 $[i, i + \left\lfloor\frac{k}{2}\right\rfloor)$，递归调用 $f(i + \left\lfloor\frac{k}{2}\right\rfloor, j, k - \left\lfloor\frac{k}{2}\right\rfloor)$。
    - 如果 $x > y$，则说明数组 $\textit{nums2}$ 的第 $\left\lfloor\frac{k}{2}\right\rfloor$ 个数不可能是第 $k$ 小的数，因此我们可以排除数组 $\textit{nums2}$ 的区间 $[j, j + \left\lfloor\frac{k}{2}\right\rfloor)$，递归调用 $f(i, j + \left\lfloor\frac{k}{2}\right\rfloor, k - \left\lfloor\frac{k}{2}\right\rfloor)$。

时间复杂度 $O(\log(m + n))$，空间复杂度 $O(\log(m + n))$。其中 $m$ 和 $n$ 分别是数组 $\textit{nums1}$ 和 $\textit{nums2}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        def f(i: int, j: int, k: int) -> int:
            if i >= m:
                return nums2[j + k - 1]
            if j >= n:
                return nums1[i + k - 1]
            if k == 1:
                return min(nums1[i], nums2[j])
            p = k // 2
            x = nums1[i + p - 1] if i + p - 1 < m else inf
            y = nums2[j + p - 1] if j + p - 1 < n else inf
            return f(i + p, j, k - p) if x < y else f(i, j + p, k - p)

        m, n = len(nums1), len(nums2)
        a = f(0, 0, (m + n + 1) // 2)
        b = f(0, 0, (m + n + 2) // 2)
        return (a + b) / 2
```


## 堆


<a id="q215"></a>

### 215. 数组中的第K个最大元素

[打开原题](https://leetcode.cn/problems/kth-largest-element-in-an-array) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0215.Kth%20Largest%20Element%20in%20an%20Array/README.md)

### 方法一：快速选择



> **思考**
>
> 全排序后取第 $k$ 大可行，但多做了对其余位置的排序。快速选择只关心第 $k$ 大所在的那一侧。
>
> 每次按基准划分后，仅递归包含目标名次的区间。实现上将第 $k$ 大转为第 $n-k$ 小。



快速选择算法是一种在未排序的数组中查找第 `k` 个最大元素或最小元素的算法。它的基本思想是每次选择一个基准元素，将数组分为两部分，一部分的元素都比基准元素小，另一部分的元素都比基准元素大，然后根据基准元素的位置，决定继续在左边还是右边查找，直到找到第 `k` 个最大元素。

时间复杂度 $O(n)$，空间复杂度 $O(\log n)$。其中 $n$ 为数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        def quick_sort(l: int, r: int) -> int:
            if l == r:
                return nums[l]
            i, j = l - 1, r + 1
            x = nums[(l + r) >> 1]
            while i < j:
                while 1:
                    i += 1
                    if nums[i] >= x:
                        break
                while 1:
                    j -= 1
                    if nums[j] <= x:
                        break
                if i < j:
                    nums[i], nums[j] = nums[j], nums[i]
            if j < k:
                return quick_sort(j + 1, r)
            return quick_sort(l, j)

        n = len(nums)
        k = n - k
        return quick_sort(0, n - 1)
```


<a id="q502"></a>

### 502. IPO

[打开原题](https://leetcode.cn/problems/ipo) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0500-0599/0502.IPO/README.md)

### 方法一：贪心 + 优先队列（双堆）



> **思考**
>
> 每次在资本允许的项目中选利润最大者，共做 $k$ 次。若每次扫描全部项目， $O(kn)$ 在 $n,k \le 10^5$ 下偏慢。
>
> 资本门槛只升不降，因此可先按启动资本建小根堆；当前资本够格的项目再进入按利润排序的大根堆。每次从大根堆取出最大利润并更新资本。两个堆保证「刚解锁」与「最优可选」都是堆顶操作，总复杂度受排序与堆操作支配。



将每个项目放入优先队列 $q_1$ 中，按照启动资本从小到大排序。如果堆顶元素启动资本不超过当前已有的资金，则循环弹出，放入另一个优先队列 $q_2$ 中，按照纯利润从大到小排序。取出当前利润最大的项目，将其纯利润加入到当前资金中，重复上述操作 $k$ 次。

时间复杂度 $O(n \log n)$，空间复杂度 $O(n)$。其中 $n$ 为项目数。

**Python 参考答案**

```python
class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: list[int], capital: list[int]
    ) -> int:
        h1 = [(c, p) for c, p in zip(capital, profits)]
        heapify(h1)
        h2 = []
        while k:
            while h1 and h1[0][0] <= w:
                heappush(h2, -heappop(h1)[1])
            if not h2:
                break
            w -= heappop(h2)
            k -= 1
        return w
```


<a id="q373"></a>

### 373. 查找和最小的 K 对数字

[打开原题](https://leetcode.cn/problems/find-k-pairs-with-smallest-sums) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0373.Find%20K%20Pairs%20with%20Smallest%20Sums/README.md)

### 方法一



> **思考**
>
> 两升序数组中和最小的 $k$ 对。枚举全部对再排序为 $O(mn \log(mn))$。固定 $\textit{nums1}[i]$ 后， $j$ 增大则和增大，可用堆弹出当前最小并只扩展 $j+1$。
>
> 先把 $(\textit{nums1}[i]+\textit{nums2}[0], i, 0)$ 对 $i<k$ 入堆。每次弹出一对，若 $j+1$ 合法则压入同 $i$ 的下一列。至多 $k$ 次弹出。

**复杂度（整理补充）**：设 h=min(k,len(nums1))，实际输出 t≤k。时间 O(h+t log(h+1))，辅助堆空间 O(h)，结果空间 O(t)。

**Python 参考答案**

```python
class Solution:
    def kSmallestPairs(
        self, nums1: list[int], nums2: list[int], k: int
    ) -> list[list[int]]:
        q = [[u + nums2[0], i, 0] for i, u in enumerate(nums1[:k])]
        heapify(q)
        ans = []
        while q and k > 0:
            _, i, j = heappop(q)
            ans.append([nums1[i], nums2[j]])
            k -= 1
            if j + 1 < len(nums2):
                heappush(q, [nums1[i] + nums2[j + 1], i, j + 1])
        return ans
```


<a id="q295"></a>

### 295. 数据流的中位数

[打开原题](https://leetcode.cn/problems/find-median-from-data-stream) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0295.Find%20Median%20from%20Data%20Stream/README.md)

### 方法一：大小根堆（优先队列）



> **思考**
>
> 动态求中位数若每次排序则过慢。用大根堆存较小一半、小根堆存较大一半，堆顶即可拼出中位数。
>
> 新元素先入大根堆再倒到小根堆，并保持小根堆大小至多大 $1$；偶数个取两顶平均，奇数个取小根堆顶。



我们可以使用两个堆来维护所有的元素，一个小根堆 $\textit{minQ}$ 和一个大根堆 $\textit{maxQ}$，其中小根堆 $\textit{minQ}$ 存储较大的一半，大根堆 $\textit{maxQ}$ 存储较小的一半。

调用 $\textit{addNum}$ 方法时，我们首先将元素加入到大根堆 $\textit{maxQ}$，然后将 $\textit{maxQ}$ 的堆顶元素弹出并加入到小根堆 $\textit{minQ}$。如果此时 $\textit{minQ}$ 的大小与 $\textit{maxQ}$ 的大小差值大于 $1$，我们就将 $\textit{minQ}$ 的堆顶元素弹出并加入到 $\textit{maxQ}$。时间复杂度为 $O(\log n)$。

调用 $\textit{findMedian}$ 方法时，如果 $\textit{minQ}$ 的大小等于 $\textit{maxQ}$ 的大小，说明元素的总数为偶数，我们就可以返回 $\textit{minQ}$ 的堆顶元素与 $\textit{maxQ}$ 的堆顶元素的平均值；否则，我们返回 $\textit{minQ}$ 的堆顶元素。时间复杂度为 $O(1)$。

空间复杂度 $O(n)$。其中 $n$ 为元素的个数。

**Python 参考答案**

```python
class MedianFinder:

    def __init__(self):
        self.minq = []
        self.maxq = []

    def addNum(self, num: int) -> None:
        heappush(self.minq, -heappushpop(self.maxq, -num))
        if len(self.minq) - len(self.maxq) > 1:
            heappush(self.maxq, -heappop(self.minq))

    def findMedian(self) -> float:
        if len(self.minq) == len(self.maxq):
            return (self.minq[0] - self.maxq[0]) / 2
        return self.minq[0]


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
```


## 位运算


<a id="q67"></a>

### 67. 二进制求和

[打开原题](https://leetcode.cn/problems/add-binary) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0067.Add%20Binary/README.md)

### 方法一：模拟



> **思考**
>
> 二进制串长度可达 $10^4$，不能转换成普通整数再相加。
>
> 两串长度可能不同，最高位仍可能再产生进位，这与十进制竖式相同。为此从低位对齐向高位累加，用 $\textit{carry}$ 记录进位；两个指针自末尾同步前移，缺位视为 $0$，循环条件同时包含 $\textit{carry}$，使最后多出的进位也会写入答案。



我们用一个变量 $\textit{carry}$ 记录当前的进位，用两个指针 $i$ 和 $j$ 分别指向 $a$ 和 $b$ 的末尾，从末尾到开头逐位相加即可。

时间复杂度 $O(\max(m, n))$，空间复杂度 $O(\max(m, n))$。其中 $m$ 和 $n$ 分别为字符串 $a$ 和 $b$ 的长度。

**Python 参考答案**

```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        ans = []
        i, j, carry = len(a) - 1, len(b) - 1, 0
        while i >= 0 or j >= 0 or carry:
            carry += (0 if i < 0 else int(a[i])) + (0 if j < 0 else int(b[j]))
            carry, v = divmod(carry, 2)
            ans.append(str(v))
            i, j = i - 1, j - 1
        return "".join(ans[::-1])
```


<a id="q190"></a>

### 190. 颠倒二进制位

[打开原题](https://leetcode.cn/problems/reverse-bits) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0190.Reverse%20Bits/README.md)

### 方法一：位运算



> **思考**
>
> 把 $32$ 位无符号整数的比特左右对调。可以按位取出再放到对称位置。从低到高扫 $32$ 次：取出 $n$ 的最低位，写入答案的 $31-i$ 位，然后 $n$ 右移。位数固定，时间常数。



我们可以从低位到高位，逐个取出 $n$ 的每一位，然后将其放到 $\textit{ans}$ 的对应位置上。

比如，对于第 $i$ 位，我们可以通过 $(n \& 1) \ll (31 - i)$ 来取出 $n$ 的第 $i$ 位，并将其放到 $\textit{ans}$ 的第 $31 - i$ 位上，然后将 $n$ 右移一位。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。

**Python 参考答案**

```python
class Solution:
    def reverseBits(self, n: int) -> int:
        ans = 0
        for i in range(32):
            ans |= (n & 1) << (31 - i)
            n >>= 1
        return ans
```


<a id="q191"></a>

### 191. 位1的个数

[打开原题](https://leetcode.cn/problems/number-of-1-bits) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0191.Number%20of%201%20Bits/README.md)

### 方法一：位运算



> **思考**
>
> 统计二进制中 $1$ 的个数。逐位检查要看满 $32$ 位。 $n\mathbin{\&}(n-1)$ 会清掉最低的 $1$，循环次数等于 $1$ 的个数，比固定 $32$ 次更省。



利用 `n & (n - 1)` 消除 `n` 中最后一位 1 这一特点，优化过程：

```txt
HAMMING-WEIGHT(n)
    r = 0
    while n != 0
        n &= n - 1
        r += 1
    r
```

以 5 为例，演示推演过程：

```txt
[0, 1, 0, 1] // 5
[0, 1, 0, 0] // 5 - 1 = 4
[0, 1, 0, 0] // 5 & 4 = 4

[0, 1, 0, 0] // 4
[0, 0, 1, 1] // 4 - 1 = 3
[0, 0, 0, 0] // 4 & 3 = 0
```

**复杂度（整理补充）**：时间 O(b)，b 为二进制中 1 的数量；空间 O(1)。固定 32 位输入时最多循环 32 次。

**Python 参考答案**

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = 0
        while n:
            n &= n - 1
            ans += 1
        return ans
```


<a id="q136"></a>

### 136. 只出现一次的数字

[打开原题](https://leetcode.cn/problems/single-number) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0136.Single%20Number/README.md)

### 方法一：位运算



> **思考**
>
> 其余数出现两次、一个出现一次，要求线性时间、常数空间。哈希计数空间是 $O(n)$。异或满足 $x\oplus x=0$、 $x\oplus 0=x$ 且可交换，全部异或后成对的数消掉，剩下即只出现一次的那个。



异或运算的性质：

- 任何数和 $0$ 做异或运算，结果仍然是原来的数，即 $x \oplus 0 = x$；
- 任何数和其自身做异或运算，结果是 $0$，即 $x \oplus x = 0$；

我们对该数组所有元素进行异或运算，结果就是那个只出现一次的数字。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{nums}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        return reduce(xor, nums)
```


<a id="q137"></a>

### 137. 只出现一次的数字 II

[打开原题](https://leetcode.cn/problems/single-number-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0137.Single%20Number%20II/README.md)

### 方法一：位运算



> **思考**
>
> 其余数出现三次、一个出现一次，异或不再直接可用，因为 $x\oplus x\oplus x=x$。进阶仍要常数空间。按位统计 $1$ 的个数再模 $3$，出现三次的位被清掉，余数即答案对应位。符号位单独处理以免溢出。



我们可以枚举每个二进制位 $i$，对于每个二进制位，我们统计所有数字在该二进制位上的和，如果该二进制位上的和能被 $3$ 整除，那么只出现一次的数字在该二进制位上为 $0$，否则为 $1$。

时间复杂度 $O(n \log M)$，空间复杂度 $O(1)$。其中 $n$ 和 $M$ 分别是数组的长度和数组中元素的范围。

C++ 在处理符号位时直接加上 INT_MIN，避免对有符号整数进行可能溢出的左移。

**Python 参考答案**

```python
class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        ans = 0
        for i in range(32):
            cnt = sum(num >> i & 1 for num in nums)
            if cnt % 3:
                if i == 31:
                    ans -= 1 << i
                else:
                    ans |= 1 << i
        return ans
```


<a id="q201"></a>

### 201. 数字范围按位与

[打开原题](https://leetcode.cn/problems/bitwise-and-of-numbers-range) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0201.Bitwise%20AND%20of%20Numbers%20Range/README.md)

### 方法一：位运算



> **思考**
>
> 将 $[\textit{left},\textit{right}]$ 中每个整数依次做按位与，在 $\textit{right}-\textit{left}$ 接近 $2^{31}$ 时不可行。连续整数的按位与等于它们的公共二进制前缀：更低的位会在某个数上被清零。
>
> 为此当 $\textit{left} < \textit{right}$ 时，反复将 $\textit{right}$ 的最低位 $1$ 清掉（即 $\textit{right} \mathrel{\&}= \textit{right}-1$），直到 $\textit{right} \le \textit{left}$。此时 $\textit{right}$ 即为该公共前缀。



题目可以转换为求数字的公共二进制前缀。

当 $\textit{left} \lt \textit{right}$ 时，我们循环将 $\textit{right}$ 的最后一个二进制位 $1$ 变成 $0$，直到 $\textit{left} = \textit{right}$，此时 $\textit{right}$ 即为数字的公共二进制前缀，返回 $\textit{right}$ 即可。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。

**Python 参考答案**

```python
class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        while left < right:
            right &= right - 1
        return right
```


## 数学


<a id="q9"></a>

### 9. 回文数

[打开原题](https://leetcode.cn/problems/palindrome-number) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0009.Palindrome%20Number/README.md)

### 方法一：反转一半数字



> **思考**
>
> 判断 $x$ 是否回文，一种做法是转为字符串再比较。题目进阶要求不使用字符串；若将整个 $x$ 反转后再比较，则可能超出 $32$ 位整数范围。
>
> 我们只需反转后半部分：不断将 $x$ 的个位接到 $y$ 上，直到 $y$ 不再小于剩余的前半部分。负数带有负号，不可能是回文数；非零却以 $0$ 结尾的数，反转后会丢失末尾的 $0$，也可以直接返回 `false`。
>
> 循环在两半长度对齐时停止。位数为偶数时比较 $x$ 与 $y$；位数为奇数时，中间一位落在 $y$ 上，比较 $x$ 与 $\lfloor y/10 \rfloor$。



我们先判断特殊情况：

- 如果 $x \lt 0$，那么 $x$ 不是回文数，直接返回 `false`；
- 如果 $x \gt 0$ 且 $x$ 的个位数是 $0$，那么 $x$ 不是回文数，直接返回 `false`；
- 如果 $x$ 的个位数不是 $0$，那么 $x$ 可能是回文数，继续执行下面的步骤。

我们将 $x$ 的后半部分反转，与前半部分进行比较，如果相等，那么 $x$ 是回文数，否则 $x$ 不是回文数。

举个例子，例如 $x = 1221$，我们可以将数字后半部分从 “21” 反转为 “12”，并将其与前半部分 “12” 进行比较，因为二者相等，我们得知数字 $x$ 是回文。

让我们看看如何将后半部分反转。

对于数字 $1221$，如果执行 $1221 \bmod 10$，我们将得到最后一位数字 $1$，要得到倒数第二位数字，我们可以先通过除以 $10$ 将最后一位数字从 $1221$ 中移除， $1221 / 10 = 122$，再求出上一步结果除以 $10$ 的余数， $122 \bmod 10 = 2$，就可以得到倒数第二位数字。

如果继续这个过程，我们将得到更多位数的反转数字。

通过将最后一位数字不断地累乘到取出数字的变量 $y$ 上，我们可以得到以相反顺序的数字。

在代码实现上，我们可以反复“取出” $x$ 的最后一位数字，并将其“添加”到 $y$ 的后面，循环直到 $y \ge x$，如果此时 $x = y$，或者 $x = y / 10$，那么 $x$ 就是回文数。

时间复杂度 $O(\log_{10}(n))$，空间复杂度 $O(1)$。其中 $n$ 是 $x$。对于每次迭代，我们会将输入除以 $10$，因此时间复杂度为 $O(\log_{10}(n))$。

**Python 参考答案**

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x and x % 10 == 0):
            return False
        y = 0
        while y < x:
            y = y * 10 + x % 10
            x //= 10
        return x in (y, y // 10)
```


<a id="q66"></a>

### 66. 加一

[打开原题](https://leetcode.cn/problems/plus-one) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0066.Plus%20One/README.md)

### 方法一：模拟



> **思考**
>
> 数组表示的整数最长可达 $100$ 位，远超普通整型范围，不能拼成整数再加一。
>
> 加一产生的进位至多为 $1$，且只会从最低位向高位传播。因此从右向左模拟即可：若某位加一后不再进位，则后续高位不变，可以直接返回；若每一位都变为 $0$，再在开头补上 $1$。不必将整个大数转换成其他表示。



我们从数组的最后一个元素开始遍历，将当前元素加一，然后对 $10$ 取模，如果取模后的结果不为 $0$，说明当前元素没有进位，直接返回数组即可。否则，当前元素为 $0$，需要进位，继续遍历前一个元素，重复上述操作。如果遍历完数组后，仍然没有返回，说明数组中所有元素都为 $0$，需要在数组的头部插入一个 $1$。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 是数组的长度。

**Python 参考答案**

```python
class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        n = len(digits)
        for i in range(n - 1, -1, -1):
            digits[i] += 1
            digits[i] %= 10
            if digits[i] != 0:
                return digits
        return [1] + digits
```


<a id="q172"></a>

### 172. 阶乘后的零

[打开原题](https://leetcode.cn/problems/factorial-trailing-zeroes) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0172.Factorial%20Trailing%20Zeroes/README.md)

### 方法一：数学



> **思考**
>
> 阶乘末尾零来自因子 $10=2\times 5$，而 $2$ 的个数远多于 $5$，因此零的个数等于 $[1,n]$ 中 $5$ 的因子个数。直接算 $n!$ 在 $n\le 10^4$ 都会溢出。进阶要对数时间：反复 $n\leftarrow \lfloor n/5\rfloor$ 累加，分别计入 $5,5^2,5^3,\ldots$ 的贡献。



题目实际上是求 $[1,n]$ 中有多少个 $5$ 的因数。

我们以 $130$ 为例来分析：

1. 第 $1$ 次除以 $5$，得到 $26$，表示存在 $26$ 个包含因数 $5$ 的数；
1. 第 $2$ 次除以 $5$，得到 $5$，表示存在 $5$ 个包含因数 $5^2$ 的数；
1. 第 $3$ 次除以 $5$，得到 $1$，表示存在 $1$ 个包含因数 $5^3$ 的数；
1. 累加得到从 $[1,n]$ 中所有 $5$ 的因数的个数。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。

**Python 参考答案**

```python
class Solution:
    def trailingZeroes(self, n: int) -> int:
        ans = 0
        while n:
            n //= 5
            ans += n
        return ans
```


<a id="q69"></a>

### 69. x 的平方根

[打开原题](https://leetcode.cn/problems/sqrtx) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0069.Sqrt%28x%29/README.md)

### 方法一：二分查找



> **思考**
>
> 题目要求不使用内置开方运算，求出不超过 $x$ 的最大整数平方根。若从 $0$ 线性枚举直至 $i^2 > x$，则 $x$ 最大约为 $2^{31}-1$，扫描过慢，且 $i^2$ 容易溢出。
>
> 答案具有单调性：若 $\textit{mid}^2 \le x$，则更大的候选仍可能合法，否则只能缩小上界。因此可以在 $[0, x]$ 上二分。比较时写成 $\textit{mid} > x / \textit{mid}$，避免乘法溢出；取上中位数并将区间收缩为「最大的可行值」，结束时左端点即为整数平方根。



我们定义二分查找的左边界 $l = 0$，右边界 $r = x$，然后在 $[l, r]$ 范围内查找平方根。

在每一步查找中，我们找出中间值 $\textit{mid} = (l + r + 1) / 2$，如果 $\textit{mid} > x / \textit{mid}$，说明平方根在 $[l, \textit{mid} - 1]$ 范围内，我们令 $r = \textit{mid} - 1$；否则说明平方根在 $[\textit{mid}, r]$ 范围内，我们令 $l = \textit{mid}$。

查找结束后，返回 $l$ 即可。

时间复杂度 $O(\log x)$，空间复杂度 $O(1)$。

**Python 参考答案**

```python
class Solution:
    def mySqrt(self, x: int) -> int:
        l, r = 0, x
        while l < r:
            mid = (l + r + 1) >> 1
            if mid > x // mid:
                r = mid - 1
            else:
                l = mid
        return l
```


<a id="q50"></a>

### 50. Pow(x, n)

[打开原题](https://leetcode.cn/problems/powx-n) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0050.Pow%28x%2C%20n%29/README.md)

### 方法一：数学（快速幂）



> **思考**
>
> 若把 $x$ 连乘 $|n|$ 次， $|n|$ 最大约 $2^{31}$，线性乘法容易超时；还要单独处理 $n < 0$ 时取倒数。
>
> 一次只乘一个 $x$ 没有利用幂的倍增结构。注意到 $x^{2k} = (x^k)^2$， $x^{2k+1} = x \cdot (x^k)^2$，指数每次可以折半。
>
> 因此按 $n$ 的二进制位累乘：当前底不断平方，遇到 $1$ 位就乘进答案。负数指数先算正幂再取倒数。快速幂把 $O(|n|)$ 压成 $O(\log |n|)$。



快速幂算法的核心思想是将幂指数 $n$ 拆分为若干个二进制位上的 $1$ 的和，然后将 $x$ 的 $n$ 次幂转化为 $x$ 的若干个幂的乘积。

时间复杂度 $O(\log n)$，空间复杂度 $O(1)$。其中 $n$ 为幂指数。

**Python 参考答案**

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:
        def qpow(a: float, n: int) -> float:
            ans = 1
            while n:
                if n & 1:
                    ans *= a
                a *= a
                n >>= 1
            return ans

        return qpow(x, n) if n >= 0 else 1 / qpow(x, -n)
```


<a id="q149"></a>

### 149. 直线上最多的点数

[打开原题](https://leetcode.cn/problems/max-points-on-a-line) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0149.Max%20Points%20on%20a%20Line/README.md)

### 方法一：暴力枚举



> **思考**
>
> 求共线点的最大个数。点互不相同， $n$ 较小，枚举两点确定直线再扫其余点是否共线，用叉积避免除法，时间 $O(n^3)$ 可以过。



我们可以枚举任意两个点 $(x_1, y_1), (x_2, y_2)$，把这两个点连成一条直线，那么此时这条直线上的点的个数就是 2，接下来我们再枚举其他点 $(x_3, y_3)$，判断它们是否在同一条直线上，如果在，那么直线上的点的个数就加 1，如果不在，那么直线上的点的个数不变。找出所有直线上的点的个数的最大值，即为答案。

时间复杂度 $O(n^3)$，空间复杂度 $O(1)$。其中 $n$ 是数组 $\textit{points}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def maxPoints(self, points: list[list[int]]) -> int:
        n = len(points)
        ans = 1
        for i in range(n):
            x1, y1 = points[i]
            for j in range(i + 1, n):
                x2, y2 = points[j]
                cnt = 2
                for k in range(j + 1, n):
                    x3, y3 = points[k]
                    a = (y2 - y1) * (x3 - x1)
                    b = (y3 - y1) * (x2 - x1)
                    cnt += a == b
                ans = max(ans, cnt)
        return ans
```


## 一维动态规划


<a id="q70"></a>

### 70. 爬楼梯

[打开原题](https://leetcode.cn/problems/climbing-stairs) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0070.Climbing%20Stairs/README.md)

### 方法一：递推



> **思考**
>
> 到达第 $n$ 阶的最后一步只能是爬 $1$ 阶或 $2$ 阶，因此方案数满足 $f(n) = f(n-1) + f(n-2)$。若直接按此递归， $n \le 45$ 时同一子问题会被反复展开，时间无法接受。
>
> 这与斐波那契数列相同，自底向上递推即可避免重复计算。 $f[i]$ 只依赖于前两项，用两个变量滚动维护，即可在 $O(n)$ 时间、 $O(1)$ 额外空间内得到答案。



我们定义 $f[i]$ 表示爬到第 $i$ 阶楼梯的方法数，那么 $f[i]$ 可以由 $f[i - 1]$ 和 $f[i - 2]$ 转移而来，即：

$$
f[i] = f[i - 1] + f[i - 2]
$$

初始条件为 $f[0] = 1$， $f[1] = 1$，即爬到第 0 阶楼梯的方法数为 1，爬到第 1 阶楼梯的方法数也为 1。

答案即为 $f[n]$。

由于 $f[i]$ 只与 $f[i - 1]$ 和 $f[i - 2]$ 有关，因此我们可以只用两个变量 $a$ 和 $b$ 来维护当前的方法数，空间复杂度降低为 $O(1)$。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。

**Python 参考答案**

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        a, b = 0, 1
        for _ in range(n):
            a, b = b, a + b
        return b
```


<a id="q198"></a>

### 198. 打家劫舍

[打开原题](https://leetcode.cn/problems/house-robber) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0198.House%20Robber/README.md)

### 方法一：记忆化搜索



> **思考**
>
> 相邻房屋不能都偷，求最大金额。枚举子集要检查相邻约束，房屋数虽不大，重叠子问题很多。从第 $i$ 间出发：偷则跳到 $i+2$，不偷则到 $i+1$，取较大者。记忆化后每个下标只算一次。



我们设计一个函数 $\textit{dfs}(i)$，表示从第 $i$ 间房屋开始偷窃能够得到的最高金额。那么答案即为 $\textit{dfs}(0)$。

函数 $\textit{dfs}(i)$ 的执行过程如下：

- 如果 $i \ge \textit{len}(\textit{nums})$，表示所有房屋都被考虑过了，直接返回 $0$；
- 否则，考虑偷窃第 $i$ 间房屋，那么 $\textit{dfs}(i) = \textit{nums}[i] + \textit{dfs}(i+2)$；不偷窃第 $i$ 间房屋，那么 $\textit{dfs}(i) = \textit{dfs}(i+1)$。
- 返回 $\max(\textit{nums}[i] + \textit{dfs}(i+2), \textit{dfs}(i+1))$。

为了避免重复计算，我们使用记忆化搜索的方法，将 $\textit{dfs}(i)$ 的结果保存在一个数组或哈希表中，每次计算前先查询是否已经计算过，如果计算过直接返回结果。

时间复杂度 $O(n)$，空间复杂度 $O(n)$。其中 $n$ 是数组长度。

**Python 参考答案**

```python
class Solution:
    def rob(self, nums: list[int]) -> int:
        @cache
        def dfs(i: int) -> int:
            if i >= len(nums):
                return 0
            return max(nums[i] + dfs(i + 2), dfs(i + 1))

        return dfs(0)
```


<a id="q139"></a>

### 139. 单词拆分

[打开原题](https://leetcode.cn/problems/word-break) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0139.Word%20Break/README.md)

### 方法一：哈希表 + 动态规划



> **思考**
>
> 判断 $s$ 能否拆成词典中的词。 $|s|\le 300$，回溯所有切分会重复计算同一后缀。 $f[i]$ 表示前缀 $s[0..i)$ 能否拆分：枚举切点 $j$，若 $f[j]$ 为真且 $s[j..i)$ 在词典中则成功。词典放进哈希集合，判断子串是否成词为期望 $O(1)$。



我们定义 $f[i]$ 表示字符串 $s$ 的前 $i$ 个字符能否拆分成 $\textit{wordDict}$ 中的单词，初始时 $f[0]=\textit{true}$，其余为 $\textit{false}$。答案为 $f[n]$。

考虑 $f[i]$，如果存在 $j \in [0, i)$ 使得 $f[j] \land s[j:i] \in \textit{wordDict}$，则 $f[i]=\textit{true}$。为了优化效率，我们可以使用哈希表存储 $\textit{wordDict}$ 中的单词，这样可以快速判断 $s[j:i]$ 是否在 $\textit{wordDict}$ 中。

时间复杂度 $O(n^3)$，空间复杂度 $O(n)$。其中 $n$ 为字符串 $s$ 的长度。

**Python 参考答案**

```python
class Solution:
    def wordBreak(self, s: str, wordDict: list[str]) -> bool:
        words = set(wordDict)
        n = len(s)
        f = [True] + [False] * n
        for i in range(1, n + 1):
            f[i] = any(f[j] and s[j:i] in words for j in range(i))
        return f[n]
```


<a id="q322"></a>

### 322. 零钱兑换

[打开原题](https://leetcode.cn/problems/coin-change) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0322.Coin%20Change/README.md)

### 方法一：动态规划(完全背包)



> **思考**
>
> 每种硬币可用任意多次，求凑出 $\textit{amount}$ 的最少枚数。完全背包：物品为硬币、容量为金额。若 DFS 搜索组合，金额较大时重复子问题多。
>
> 定义 $f[i][j]$ 为用前 $i$ 种硬币凑 $j$ 的最少枚数。不选第 $i$ 种则继承 $f[i-1][j]$；若 $j\ge x$ 则可从 $f[i][j-x]$ 再加一枚。 $f[0][0]=0$，其余为无穷，无法凑出返回 $-1$。



我们定义 $f[i][j]$ 表示使用前 $i$ 种硬币，凑出金额 $j$ 的最少硬币数。初始时 $f[0][0] = 0$，其余位置的值均为正无穷。

我们可以枚举使用的最后一枚硬币的数量 $k$，那么有：

$$
f[i][j] = \min(f[i - 1][j], f[i - 1][j - x] + 1, \cdots, f[i - 1][j - k \times x] + k)
$$

其中 $x$ 表示第 $i$ 种硬币的面值。

不妨令 $j = j - x$，那么有：

$$
f[i][j - x] = \min(f[i - 1][j - x], f[i - 1][j - 2 \times x] + 1, \cdots, f[i - 1][j - k \times x] + k - 1)
$$

将二式代入一式，我们可以得到以下状态转移方程：

$$
f[i][j] = \min(f[i - 1][j], f[i][j - x] + 1)
$$

最后答案即为 $f[m][n]$。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别为硬币的种类数和总金额。

**Python 参考答案**

```python
class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        m, n = len(coins), amount
        f = [[inf] * (n + 1) for _ in range(m + 1)]
        f[0][0] = 0
        for i, x in enumerate(coins, 1):
            for j in range(n + 1):
                f[i][j] = f[i - 1][j]
                if j >= x:
                    f[i][j] = min(f[i][j], f[i][j - x] + 1)
        return -1 if f[m][n] >= inf else f[m][n]
```


<a id="q300"></a>

### 300. 最长递增子序列

[打开原题](https://leetcode.cn/problems/longest-increasing-subsequence) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0300-0399/0300.Longest%20Increasing%20Subsequence/README.md)

### 方法一：动态规划



> **思考**
>
> 子序列须保持相对顺序且严格递增。若枚举全部子序列，长度为 $n$ 时状态过多； $n \le 2500$，故可接受按结尾位置转移。
>
> 以 $\textit{nums}[i]$ 结尾的最长递增子序列，只依赖于左侧更小的元素。为此定义 $f[i]$ 为该长度，枚举 $j < i$ 且 $\textit{nums}[j] < \textit{nums}[i]$，取 $f[j]+1$ 的最大值。每个位置独立成段时长度为 $1$，最终答案为 $\max f$。



我们定义 $f[i]$ 表示以 $\textit{nums}[i]$ 结尾的最长递增子序列的长度，初始时 $f[i] = 1$，答案为 $f[i]$ 的最大值。

对于 $f[i]$，我们需要枚举 $0 \le j \lt i$，如果 $\textit{nums}[j] \lt \textit{nums}[i]$，则 $f[i] = \max(f[i], f[j] + 1)$。

最后的答案即为 $f[i]$ 的最大值。

时间复杂度 $O(n^2)$，空间复杂度 $O(n)$。其中 $n$ 为数组长度。

**Python 参考答案**

```python
class Solution:
    def lengthOfLIS(self, nums: list[int]) -> int:
        n = len(nums)
        f = [1] * n
        for i in range(1, n):
            for j in range(i):
                if nums[j] < nums[i]:
                    f[i] = max(f[i], f[j] + 1)
        return max(f)
```


## 多维动态规划


<a id="q120"></a>

### 120. 三角形最小路径和

[打开原题](https://leetcode.cn/problems/triangle) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0120.Triangle/README.md)

### 方法一：动态规划



> **思考**
>
> 自顶向下每步只能走到下一行相邻位置，枚举路径的数量随行数指数增长。行数不大，但重叠子问题很多：从某格出发的最小路径只依赖它下方两个格子。
>
> 自底向上定义 $f[i][j]$ 为从该格走到最后一行的最小和，每个格子取下方左右的较小值再加自身，顶点 $f[0][0]$ 即答案。



我们定义 $f[i][j]$ 表示从三角形底部走到位置 $(i, j)$ 的最小路径和。这里的位置 $(i, j)$ 指的是三角形中第 $i$ 行第 $j$ 列（均从 $0$ 开始编号）的位置。那么我们有如下的状态转移方程：

$$
f[i][j] = \min(f[i + 1][j], f[i + 1][j + 1]) + \textit{triangle}[i][j]
$$

答案即为 $f[0][0]$。

**复杂度（整理补充）**：三角形 n 行：时间 O(n²)，辅助空间 O(n²)。

**Python 参考答案**

```python
class Solution:
    def minimumTotal(self, triangle: list[list[int]]) -> int:
        n = len(triangle)
        f = [[0] * (n + 1) for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(i + 1):
                f[i][j] = min(f[i + 1][j], f[i + 1][j + 1]) + triangle[i][j]
        return f[0][0]
```


<a id="q64"></a>

### 64. 最小路径和

[打开原题](https://leetcode.cn/problems/minimum-path-sum) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0064.Minimum%20Path%20Sum/README.md)

### 方法一：动态规划



> **思考**
>
> 从左上走到右下、每步只能向右或向下时，若枚举全部路径再取数字和最小者， $m, n \le 200$，路径条数随格子增长而迅速增加，无法在时限内完成。同一格子会被多条路径反复走到，子问题大量重叠。
>
> 因此走到 $(i, j)$ 的最小路径和，必来自其上方或左方的最优值再加上当前格。用 $f[i][j]$ 记录该值，边界沿唯一方向累加，内部取两侧最小值，按行填表即可。



我们定义 $f[i][j]$ 表示从左上角走到 $(i, j)$ 位置的最小路径和。初始时 $f[0][0] = \textit{grid}[0][0]$，答案为 $f[m - 1][n - 1]$。

考虑 $f[i][j]$：

- 如果 $j = 0$，那么 $f[i][j] = f[i - 1][j] + \textit{grid}[i][j]$；
- 如果 $i = 0$，那么 $f[i][j] = f[i][j - 1] + \textit{grid}[i][j]$；
- 如果 $i \gt 0$ 且 $j \gt 0$，那么 $f[i][j] = \min(f[i - 1][j], f[i][j - 1]) + \textit{grid}[i][j]$。

最后返回 $f[m - 1][n - 1]$ 即可。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别是网格的行数和列数。

**Python 参考答案**

```python
class Solution:
    def minPathSum(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        f = [[0] * n for _ in range(m)]
        f[0][0] = grid[0][0]
        for i in range(1, m):
            f[i][0] = f[i - 1][0] + grid[i][0]
        for j in range(1, n):
            f[0][j] = f[0][j - 1] + grid[0][j]
        for i in range(1, m):
            for j in range(1, n):
                f[i][j] = min(f[i - 1][j], f[i][j - 1]) + grid[i][j]
        return f[-1][-1]
```


<a id="q63"></a>

### 63. 不同路径 II

[打开原题](https://leetcode.cn/problems/unique-paths-ii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0063.Unique%20Paths%20II/README.md)

### 方法一：记忆化搜索



> **思考**
>
> 与「不同路径」相同，每步只能向下或向右。若直接递归搜索， $m, n \le 100$ 时同一格子会被反复展开，时间无法接受；网格中还有障碍，第一行、第一列也不再处处可达。
>
> 从 $(i, j)$ 出发，越界或遇到障碍则路径数为 $0$，到达终点则为 $1$，否则等于向下、向右两支之和。为 $\textit{dfs}(i, j)$ 加上记忆化后，每个格子只计算一次，时间与空间均为 $O(mn)$。



我们设计一个函数 $\textit{dfs}(i, j)$ 表示从网格 $(i, j)$ 到网格 $(m - 1, n - 1)$ 的路径数。其中 $m$ 和 $n$ 分别是网格的行数和列数。

函数 $\textit{dfs}(i, j)$ 的执行过程如下：

- 如果 $i \ge m$ 或者 $j \ge n$，或者 $\textit{obstacleGrid}[i][j] = 1$，则路径数为 $0$；
- 如果 $i = m - 1$ 且 $j = n - 1$，则路径数为 $1$；
- 否则，路径数为 $\textit{dfs}(i + 1, j) + \textit{dfs}(i, j + 1)$。

为了避免重复计算，我们可以使用记忆化搜索的方法。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别是网格的行数和列数。

**Python 参考答案**

```python
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: list[list[int]]) -> int:
        @cache
        def dfs(i: int, j: int) -> int:
            if i >= m or j >= n or obstacleGrid[i][j]:
                return 0
            if i == m - 1 and j == n - 1:
                return 1
            return dfs(i + 1, j) + dfs(i, j + 1)

        m, n = len(obstacleGrid), len(obstacleGrid[0])
        return dfs(0, 0)
```


<a id="q5"></a>

### 5. 最长回文子串

[打开原题](https://leetcode.cn/problems/longest-palindromic-substring) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0005.Longest%20Palindromic%20Substring/README.md)

### 方法一：动态规划



> **思考**
>
> 若枚举所有子串 $s[i..j]$ 再逐一判断是否回文，时间复杂度为 $O(n^3)$。 $n \le 10^3$，无法通过。
>
> 每个子串若都从两端重新比较，内层更短的区间会被反复判断。回文具有最优子结构： $s[i..j]$ 为回文，当且仅当两端字符相同且 $s[i+1..j-1]$ 已是回文；长度为 $1$ 的区间显然成立。
>
> 因此可以按区间依赖填表，而不必反复扫描。 $f[i][j]$ 依赖于更短的内层，枚举顺序须保证内层先算完；填表过程中记录当前最长回文的起点与长度即可。



我们定义 $f[i][j]$ 表示字符串 $s[i..j]$ 是否为回文串，初始时 $f[i][j] = \textit{true}$。

接下来，我们定义变量 $k$ 和 $mx$，其中 $k$ 表示最长回文串的起始位置， $mx$ 表示最长回文串的长度。初始时 $k = 0$, $mx = 1$。

考虑 $f[i][j]$，如果 $s[i] = s[j]$，那么 $f[i][j] = f[i + 1][j - 1]$；否则 $f[i][j] = \textit{false}$。如果 $f[i][j] = \textit{true}$ 并且 $mx \lt j - i + 1$，那么我们更新 $k = i$, $mx = j - i + 1$。

由于 $f[i][j]$ 依赖于 $f[i + 1][j - 1]$，因此我们需要保证 $i + 1$ 在 $j - 1$ 之前，因此我们需要从大到小地枚举 $i$，从小到大地枚举 $j$。

时间复杂度 $O(n^2)$，空间复杂度 $O(n^2)$。其中 $n$ 是字符串 $s$ 的长度。

**Python 参考答案**

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        f = [[True] * n for _ in range(n)]
        k, mx = 0, 1
        for i in range(n - 2, -1, -1):
            for j in range(i + 1, n):
                f[i][j] = False
                if s[i] == s[j]:
                    f[i][j] = f[i + 1][j - 1]
                    if f[i][j] and mx < j - i + 1:
                        k, mx = i, j - i + 1
        return s[k : k + mx]
```


<a id="q97"></a>

### 97. 交错字符串

[打开原题](https://leetcode.cn/problems/interleaving-string) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0097.Interleaving%20String/README.md)

### 方法一：记忆化搜索



> **思考**
>
> 交错串要求 $s_3$ 由 $s_1$、 $s_2$ 保序穿插而成，长度必须先相等。每一步从 $s_1$ 或 $s_2$ 取下一个字符，搜索树规模过大。
>
> 状态其实只有「 $s_1$ 用了几个、 $s_2$ 用了几个」：当前位置 $k = i + j$ 对 $s_3$ 是确定的。能否继续，取决于 $s_1[i]$ 或 $s_2[j]$ 是否等于 $s_3[k]$。对 $(i, j)$ 记忆化后，子问题个数为 $O(mn)$。



我们记字符串 $s_1$ 的长度为 $m$，字符串 $s_2$ 的长度为 $n$，如果 $m + n \neq |s_3|$，那么 $s_3$ 一定不是 $s_1$ 和 $s_2$ 的交错字符串，返回 `false`。

接下来，我们设计一个函数 $\textit{dfs}(i, j)$，表示从 $s_1$ 的第 $i$ 个字符和 $s_2$ 的第 $j$ 个字符开始，能否交错组成 $s_3$ 的剩余部分。那么答案就是 $\textit{dfs}(0, 0)$。

函数 $\textit{dfs}(i, j)$ 的计算过程如下：

如果 $i \geq m$ 并且 $j \geq n$，那么说明 $s_1$ 和 $s_2$ 都已经遍历完毕，返回 `true`。

如果 $i < m$ 并且 $s_1[i] = s_3[i + j]$，那么说明 $s_1[i]$ 这个字符是 $s_3[i + j]$ 中的一部分，因此递归地调用 $\textit{dfs}(i + 1, j)$ 判断 $s_1$ 的下一个字符能否和 $s_2$ 的当前字符匹配，如果能匹配成功，就返回 `true`。

同理，如果 $j < n$ 并且 $s_2[j] = s_3[i + j]$，那么说明 $s_2[j]$ 这个字符是 $s_3[i + j]$ 中的一部分，因此递归地调用 $\textit{dfs}(i, j + 1)$ 判断 $s_2$ 的下一个字符能否和 $s_1$ 的当前字符匹配，如果能匹配成功，就返回 `true`。

否则，返回 `false`。

为了避免重复计算，我们可以使用记忆化搜索。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别是字符串 $s_1$ 和 $s_2$ 的长度。

**Python 参考答案**

```python
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        @cache
        def dfs(i: int, j: int) -> bool:
            if i >= m and j >= n:
                return True
            k = i + j
            if i < m and s1[i] == s3[k] and dfs(i + 1, j):
                return True
            if j < n and s2[j] == s3[k] and dfs(i, j + 1):
                return True
            return False

        m, n = len(s1), len(s2)
        if m + n != len(s3):
            return False
        return dfs(0, 0)
```


<a id="q72"></a>

### 72. 编辑距离

[打开原题](https://leetcode.cn/problems/edit-distance) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0072.Edit%20Distance/README.md)

### 方法一：动态规划



> **思考**
>
> 把 $\textit{word1}$ 变成 $\textit{word2}$，每次只能插入、删除或替换一个字符。若在每个位置尝试三种操作并递归处理剩余部分，同一对前缀会被不同路径反复求解， $m, n \le 500$ 时时间无法接受。
>
> 同一对前缀的最少操作数与到达路径无关，因此可以按前缀长度递推。定义 $f[i][j]$ 为将 $\textit{word1}$ 前 $i$ 个字符变成 $\textit{word2}$ 前 $j$ 个字符的最少操作数：末尾字符相同则无需改动；否则三种操作分别对应删除、插入与替换，取最小值即可。空串到另一串只能全部删除或全部插入。按 $i$、 $j$ 递增填表， $f[m][n]$ 即为答案。



我们定义 $f[i][j]$ 表示将 $\textit{word1}$ 的前 $i$ 个字符转换成 $\textit{word2}$ 的前 $j$ 个字符所使用的最少操作数。初始时 $f[i][0] = i$, $f[0][j] = j$。其中 $i \in [1, m], j \in [0, n]$。

考虑 $f[i][j]$：

- 如果 $\textit{word1}[i - 1] = \textit{word2}[j - 1]$，那么我们只需要考虑将 $\textit{word1}$ 的前 $i - 1$ 个字符转换成 $\textit{word2}$ 的前 $j - 1$ 个字符所使用的最少操作数，因此 $f[i][j] = f[i - 1][j - 1]$；
- 否则，我们可以考虑插入、删除、替换操作，那么 $f[i][j] = \min(f[i - 1][j], f[i][j - 1], f[i - 1][j - 1]) + 1$。

综上，我们可以得到状态转移方程：

$$
f[i][j] = \begin{cases}
i, & \text{if } j = 0 \\
j, & \text{if } i = 0 \\
f[i - 1][j - 1], & \text{if } \textit{word1}[i - 1] = \textit{word2}[j - 1] \\
\min(f[i - 1][j], f[i][j - 1], f[i - 1][j - 1]) + 1, & \text{otherwise}
\end{cases}
$$

最后，我们返回 $f[m][n]$ 即可。

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别是 $\textit{word1}$ 和 $\textit{word2}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        f = [[0] * (n + 1) for _ in range(m + 1)]
        for j in range(1, n + 1):
            f[0][j] = j
        for i, a in enumerate(word1, 1):
            f[i][0] = i
            for j, b in enumerate(word2, 1):
                if a == b:
                    f[i][j] = f[i - 1][j - 1]
                else:
                    f[i][j] = min(f[i - 1][j], f[i][j - 1], f[i - 1][j - 1]) + 1
        return f[m][n]
```


<a id="q123"></a>

### 123. 买卖股票的最佳时机 III

[打开原题](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0123.Best%20Time%20to%20Buy%20and%20Sell%20Stock%20III/README.md)

### 方法一：动态规划



> **思考**
>
> 最多两笔交易，方法二那种「无限次」状态不够用。若三维 DP 记下天数、已完成交易次数与是否持有，空间偏大。注意到合法顺序是「买一、卖一、买二、卖二」，四个变量按这个顺序更新：每一天用已经算好的上一阶段利润转移。同一天买了再卖利润为 $0$，不影响最优。



我们定义以下几个变量，其中：

- `f1` 表示第一次买入股票后的最大利润；
- `f2` 表示第一次卖出股票后的最大利润；
- `f3` 表示第二次买入股票后的最大利润；
- `f4` 表示第二次卖出股票后的最大利润。

遍历过程中，直接使用 `f1`, `f2`, `f3`, `f4` 计算，考虑的是在同一天买入和卖出时，收益是 $0$，不会对答案产生影响。

最后返回 `f4` 即可。

时间复杂度 $O(n)$，空间复杂度 $O(1)$。其中 $n$ 为数组 $\textit{prices}$ 的长度。

**Python 参考答案**

```python
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        f1, f2, f3, f4 = -prices[0], 0, -prices[0], 0
        for price in prices[1:]:
            f1 = max(f1, -price)
            f2 = max(f2, f1 + price)
            f3 = max(f3, f2 - price)
            f4 = max(f4, f3 + price)
        return f4
```


<a id="q188"></a>

### 188. 买卖股票的最佳时机 IV

[打开原题](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0188.Best%20Time%20to%20Buy%20and%20Sell%20Stock%20IV/README.md)

### 方法一：记忆化搜索



> **思考**
>
> 最多 $k$ 笔交易，是「至多两笔」的一般化。 $n\le 1000$、 $k\le 100$，三维状态可以接受。 $\textit{dfs}(i,j,\textit{hold})$：从第 $i$ 天起、还剩 $j$ 次买入机会、当前是否持有。不操作总是合法；持有则可卖出（买入次数不变）；空仓且还有次数则可买入并消耗一次。记忆化避免重复的 $(i,j,\textit{hold})$。



我们设计一个函数 $\textit{dfs}(i, j, k)$，表示从第 $i$ 天开始，最多完成 $j$ 笔交易，以及当前持有股票的状态为 $k$（不持有股票用 $0$ 表示，持有股票用 $1$ 表示）时，所能获得的最大利润。答案即为 $\textit{dfs}(0, k, 0)$。

函数 $\textit{dfs}(i, j, k)$ 的执行逻辑如下：

- 如果 $i$ 大于等于 $n$，直接返回 $0$；
- 第 $i$ 天可以不进行任何操作，那么 $\textit{dfs}(i, j, k) = \textit{dfs}(i + 1, j, k)$；
- 如果 $k \gt 0$，那么第 $i$ 天可以选择卖出股票，那么 $\textit{dfs}(i, j, k) = \max(\textit{dfs}(i + 1, j - 1, 0) + \textit{prices}[i], \textit{dfs}(i + 1, j, k))$；
- 否则，如果 $j \gt 0$，那么第 $i$ 天可以选择买入股票，那么 $\textit{dfs}(i, j, k) = \max(\textit{dfs}(i + 1, j - 1, 1) - \textit{prices}[i], \textit{dfs}(i + 1, j, k))$。

取上述三种情况的最大值即为 $\textit{dfs}(i, j, k)$ 的值。

过程中，我们可以使用记忆化搜索的方法，将每次计算的结果保存下来，避免重复计算。

时间复杂度 $O(nk)$，空间复杂度 $O(nk)$。其中 $n$ 和 $k$ 分别为数组 $\textit{prices}$ 的长度和 $k$ 的值。

**Python 参考答案**

```python
class Solution:
    def maxProfit(self, k: int, prices: list[int]) -> int:
        @cache
        def dfs(i: int, j: int, k: int) -> int:
            if i >= len(prices):
                return 0
            ans = dfs(i + 1, j, k)
            if k:
                ans = max(ans, prices[i] + dfs(i + 1, j, 0))
            elif j:
                ans = max(ans, -prices[i] + dfs(i + 1, j - 1, 1))
            return ans

        return dfs(0, k, 0)
```


<a id="q221"></a>

### 221. 最大正方形

[打开原题](https://leetcode.cn/problems/maximal-square) · [解法来源](https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0221.Maximal%20Square/README.md)

### 方法一：动态规划



> **思考**
>
> 枚举每个右下角并向上检查正方形，在网格较大时重复访问。以 $(i,j)$ 为右下角的最大边长，受限于其左、上、左上三个位置的最大边长。
>
> 为此令 $dp[i+1][j+1]$ 表示该最大边长：格子为 $0$ 则为 $0$，否则取三者最小值加一。答案是最大边长的平方。



我们定义 $dp[i + 1][j + 1]$ 表示以下标 $(i, j)$ 作为正方形右下角的最大正方形边长。答案为所有 $dp[i + 1][j + 1]$ 中的最大值。

状态转移方程为：

$$
dp[i + 1][j + 1] =
\begin{cases}
0 & \text{if } \textit{matrix}[i][j] = '0' \\
\min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1 & \text{if } \textit{matrix}[i][j] = '1'
\end{cases}
$$

时间复杂度 $O(mn)$，空间复杂度 $O(mn)$。其中 $m$ 和 $n$ 分别是矩阵的行数和列数。

**Python 参考答案**

```python
class Solution:
    def maximalSquare(self, matrix: list[list[str]]) -> int:
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        mx = 0
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == '1':
                    dp[i + 1][j + 1] = min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1
                    mx = max(mx, dp[i + 1][j + 1])
        return mx * mx
```
