# Leetcode-js

Personal Leetcode solutions in javascript. All JavaScript codes are written in ECMAScript 6 standard. Some questions may include more than one solution.

**Debug**:  For local debugging purposes, some questions also provide test cases with `Jest`, If you are using `Vscode`, I suggest you install [Jest runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) and go to the corresponding test case. You can also call the function directly in the question file and hit the `Run and Debug` Button on the sidebar and select `Debug currentFile` option to start debugging.

**Note**: At some point for some unknown reason, I was not able to log in to `leetcode.com` but have to use `leetcode.cn` as an alternative, so some question names are in Chinese, but their id numbers still match.

## Summaries and Templates
It's almost impossible to finish all leetcode problems since it has more than 2000 problems for now and the number is still increasing. Here are some summaries and templates that might offer some bits of help.

**Guide**
* [guide](docs/guide.md)
#### **Array/LinkedList**
* [sliding-window](docs/Array/sliding-window.md)
####  **Queue/Stack**
TODO
#### **BinaryTree**
TODO
####  **BinarySeachTree**
TODO
#### Graph
* [graph-basic](docs/Graph/graph-basic.md)
* [union-find(TODO)]()

## Table of solutions
Total Submit: **112**/**300(Goal)**
| ID | Solutions | Test Case |
  | --- | ----------- | -------- |
| 1 | [two-sum](./src/1.two-sum.js) |  [test](./test/1.two-sum.test.js)
| 3 | [无重复字符的最长子串](./src/3.无重复字符的最长子串.js) |  
| 4 | [median-of-two-sorted-arrays](./src/4.median-of-two-sorted-arrays.js) |  [test](./test/4.median-of-two-sorted-arrays.test.js)
| 5 | [最长回文子串](./src/5.最长回文子串.js) |  
| 7 | [reverse-integer](./src/7.reverse-integer.js) |  [test](./test/7.reverse-integer.test.js)
| 11 | [container-with-most-water](./src/11.container-with-most-water.js) |  [test](./test/11.container-with-most-water.test.js)
| 15 | [3-sum](./src/15.3-sum.js) |  [test](./test/15.3-sum.test.js)
| 16 | [3-sum-closest](./src/16.3-sum-closest.js) |  [test](./test/16.3-sum-closest.test.js)
| 19 | [删除链表的倒数第-n-个结点](./src/19.删除链表的倒数第-n-个结点.js) |  
| 20 | [valid-parentheses](./src/20.valid-parentheses.js) |  [test](./test/20.valid-parentheses.test.js)
| 21 | [合并两个有序链表](./src/21.合并两个有序链表.js) |  
| 24 | [swap-nodes-in-pairs](./src/24.swap-nodes-in-pairs.js) |  [test](./test/24.swap-nodes-in-pairs.test.js)
| 25 | [reverse-nodes-in-k-group](./src/25.reverse-nodes-in-k-group.js) |  [test](./test/25.reverse-nodes-in-k-group.test.js)
| 26 | [删除有序数组中的重复项](./src/26.删除有序数组中的重复项.js) |  
| 27 | [移除元素](./src/27.移除元素.js) |  
| 34 | [在排序数组中查找元素的第一个和最后一个位置](./src/34.在排序数组中查找元素的第一个和最后一个位置.js) |  
| 35 | [搜索插入位置](./src/35.搜索插入位置.js) |  
| 75 | [sort-colors](./src/75.sort-colors.js) |  [test](./test/75.sort-colors.test.js)
| 76 | [最小覆盖子串](./src/76.最小覆盖子串.js) |  
| 83 | [删除排序链表中的重复元素](./src/83.删除排序链表中的重复元素.js) |  
| 86 | [分隔链表](./src/86.分隔链表.js) |  
| 92 | [反转链表-ii](./src/92.反转链表-ii.js) |  
| 94 | [二叉树的中序遍历](./src/94.二叉树的中序遍历.js) |  
| 95 | [不同的二叉搜索树-ii](./src/95.不同的二叉搜索树-ii.js) |  
| 96 | [不同的二叉搜索树](./src/96.不同的二叉搜索树.js) |  
| 98 | [验证二叉搜索树](./src/98.验证二叉搜索树.js) |  
| 100 | [相同的树](./src/100.相同的树.js) |  
| 102 | [二叉树的层序遍历](./src/102.二叉树的层序遍历.js) |  
| 103 | [二叉树的锯齿形层序遍历](./src/103.二叉树的锯齿形层序遍历.js) |  
| 104 | [二叉树的最大深度](./src/104.二叉树的最大深度.js) |  
| 105 | [从前序与中序遍历序列构造二叉树](./src/105.从前序与中序遍历序列构造二叉树.js) |  
| 106 | [从中序与后序遍历序列构造二叉树](./src/106.从中序与后序遍历序列构造二叉树.js) |  
| 107 | [二叉树的层序遍历-ii](./src/107.二叉树的层序遍历-ii.js) |  
| 108 | [将有序数组转换为二叉搜索树](./src/108.将有序数组转换为二叉搜索树.js) |  
| 110 | [平衡二叉树](./src/110.平衡二叉树.js) |  
| 111 | [二叉树的最小深度](./src/111.二叉树的最小深度.js) |  
| 112 | [路径总和](./src/112.路径总和.js) |  
| 113 | [路径总和-ii](./src/113.路径总和-ii.js) |  
| 114 | [二叉树展开为链表](./src/114.二叉树展开为链表.js) |  
| 116 | [填充每个节点的下一个右侧节点指针](./src/116.填充每个节点的下一个右侧节点指针.js) |  
| 117 | [填充每个节点的下一个右侧节点指针-ii](./src/117.填充每个节点的下一个右侧节点指针-ii.js) |  
| 124 | [二叉树中的最大路径和](./src/124.二叉树中的最大路径和.js) |  
| 125 | [valid-palindrome](./src/125.valid-palindrome.js) |  [test](./test/125.valid-palindrome.test.js)
| 129 | [求根节点到叶节点数字之和](./src/129.求根节点到叶节点数字之和.js) |  
| 141 | [环形链表](./src/141.环形链表.js) |  
| 144 | [二叉树的前序遍历](./src/144.二叉树的前序遍历.js) |  
| 145 | [二叉树的后序遍历](./src/145.二叉树的后序遍历.js) |  
| 147 | [insertion-sort-list](./src/147.insertion-sort-list.js) |  [test](./test/147.insertion-sort-list.test.js)
| 149 | [max-points-on-a-line](./src/149.max-points-on-a-line.js) |  [test](./test/149.max-points-on-a-line.test.js)
| 160 | [相交链表](./src/160.相交链表.js) |  
| 167 | [两数之和-ii-输入有序数组](./src/167.两数之和-ii-输入有序数组.js) |  
| 173 | [二叉搜索树迭代器](./src/173.二叉搜索树迭代器.js) |  
| 202 | [happy-number](./src/202.happy-number.js) |  [test](./test/202.happy-number.test.js)
| 205 | [isomorphic-strings](./src/205.isomorphic-strings.js) |  [test](./test/205.isomorphic-strings.test.js)
| 206 | [反转链表](./src/206.反转链表.js) |  
| 207 | [课程表](./src/207.课程表.js) |  
| 209 | [minimum-size-subarray-sum](./src/209.minimum-size-subarray-sum.js) |  [test](./test/209.minimum-size-subarray-sum.test.js)
| 219 | [contains-duplicate-ii](./src/219.contains-duplicate-ii.js) |  [test](./test/219.contains-duplicate-ii.test.js)
| 220 | [contains-duplicate-iii](./src/220.contains-duplicate-iii.js) |  [test](./test/220.contains-duplicate-iii.test.js)
| 226 | [翻转二叉树](./src/226.翻转二叉树.js) |  
| 230 | [二叉搜索树中第k小的元素](./src/230.二叉搜索树中第k小的元素.js) |  
| 234 | [palindrome-linked-list](./src/234.palindrome-linked-list.js) |  [test](./test/234.palindrome-linked-list.test.js)
| 235 | [二叉搜索树的最近公共祖先](./src/235.二叉搜索树的最近公共祖先.js) |  
| 236 | [二叉树的最近公共祖先](./src/236.二叉树的最近公共祖先.js) |  
| 257 | [二叉树的所有路径](./src/257.二叉树的所有路径.js) |  
| 283 | [移动零](./src/283.移动零.js) |  
| 290 | [word-pattern](./src/290.word-pattern.js) |  [test](./test/290.word-pattern.test.js)
| 297 | [二叉树的序列化与反序列化](./src/297.二叉树的序列化与反序列化.js) |  
| 303 | [区域和检索-数组不可变](./src/303.区域和检索-数组不可变.js) |  
| 322 | [零钱兑换](./src/322.零钱兑换.js) |  
| 344 | [反转字符串](./src/344.反转字符串.js) |  
| 349 | [intersection-of-two-arrays](./src/349.intersection-of-two-arrays.js) |  [test](./test/349.intersection-of-two-arrays.test.js)
| 350 | [intersection-of-two-arrays-ii](./src/350.intersection-of-two-arrays-ii.js) |  [test](./test/350.intersection-of-two-arrays-ii.test.js)
| 438 | [找到字符串中所有字母异位词](./src/438.找到字符串中所有字母异位词.js) |  
| 501 | [二叉搜索树中的众数](./src/501.二叉搜索树中的众数.js) |  
| 503 | [下一个更大元素-ii](./src/503.下一个更大元素-ii.js) |  
| 506 | [relative-ranks](./src/506.relative-ranks.js) |  [test](./test/506.relative-ranks.test.js)
| 513 | [找树左下角的值](./src/513.找树左下角的值.js) |  
| 515 | [在每个树行中找最大值](./src/515.在每个树行中找最大值.js) |  
| 530 | [二叉搜索树的最小绝对差](./src/530.二叉搜索树的最小绝对差.js) |  
| 538 | [把二叉搜索树转换为累加树](./src/538.把二叉搜索树转换为累加树.js) |  
| 543 | [二叉树的直径](./src/543.二叉树的直径.js) |  
| 559 | [n-叉树的最大深度](./src/559.n-叉树的最大深度.js) |  
| 563 | [二叉树的坡度](./src/563.二叉树的坡度.js) |  
| 567 | [字符串的排列](./src/567.字符串的排列.js) |  
| 572 | [另一棵树的子树](./src/572.另一棵树的子树.js) |  
| 589 | [n-叉树的前序遍历](./src/589.n-叉树的前序遍历.js) |  
| 590 | [n-叉树的后序遍历](./src/590.n-叉树的后序遍历.js) |  
| 617 | [合并二叉树](./src/617.合并二叉树.js) |  
| 652 | [寻找重复的子树](./src/652.寻找重复的子树.js) |  
| 653 | [两数之和-iv-输入二叉搜索树](./src/653.两数之和-iv-输入二叉搜索树.js) |  
| 654 | [最大二叉树](./src/654.最大二叉树.js) |  
| 662 | [二叉树最大宽度](./src/662.二叉树最大宽度.js) |  
| 671 | [二叉树中第二小的节点](./src/671.二叉树中第二小的节点.js) |  
| 687 | [最长同值路径](./src/687.最长同值路径.js) |  
| 700 | [二叉搜索树中的搜索](./src/700.二叉搜索树中的搜索.js) |  
| 704 | [二分查找](./src/704.二分查找.js) |  
| 785 | [判断二分图](./src/785.判断二分图.js) |  
| 797 | [所有可能的路径](./src/797.所有可能的路径.js) |  
| 876 | [链表的中间结点](./src/876.链表的中间结点.js) |  
| 886 | [可能的二分法](./src/886.可能的二分法.js) |  
| 889 | [根据前序和后序遍历构造二叉树](./src/889.根据前序和后序遍历构造二叉树.js) |  
| 921 | [使括号有效的最少添加](./src/921.使括号有效的最少添加.js) |  
| 988 | [从叶结点开始的最小字符串](./src/988.从叶结点开始的最小字符串.js) |  
| 1008 | [前序遍历构造二叉搜索树](./src/1008.前序遍历构造二叉搜索树.js) |  
| 1094 | [拼车](./src/1094.拼车.js) |  
| 1373 | [二叉搜索子树的最大键值和](./src/1373.二叉搜索子树的最大键值和.js) |  
