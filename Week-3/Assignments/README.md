# Week-3/Assignments

## Installation

```sh
$ npm install express ejs cookie-parser
```

## Run

```sh
$ git clone https://github.com/huanciou/remote-assignments.git
$ cd /remote-assignments/Week-3/Assignments
$ node app.js
```

## Routes

```sh
  localhost:3000/ (Root)
      |
      |-- /data
      |     |
      |     |-- /data?number=
      |
      |-- /sum.html
      |
      |-- /myName
      |
      |-- /trackName
      |      |
      |      |-- /trackName?name=
      |
      |-- 404 not found
```

## Description

<br>

Assignment-2

`Think about what will happen when N is very large`

```
以這個例子來說 'N' 如果很大有兩種可能性：

使用 "公式解" => 只需要將 N 值代入求解 N 值大小與時間無關 因此 時間複雜度為 O(1)
使用 "遞迴" => 時間會與 N 值相關 當 N 越大要算越久 時間複雜度為 O(N)

如果伺服器端需要一直處理密集的計算將會影響到伺服器的效能，進而限縮了後端最核心的任務
(requrst 與 response 的處理) 這樣對於伺服器端不是一件有效率的事，比較好的辦法像是可以採分佈式的架構，將需要計算的動作交給專門處理計算的伺服器，當得到結果在回傳回來

像是 node.js 在處理非同步操作時會丟給 WebAPI 處理，然後再繼續完成餘下的事件，這樣的動作從而不會阻塞主線程。我們也可以用類似的概念來將計算任務委託給其他資源來完成，從而達到避免阻塞主要伺服器的問題
```

[Assignment-5](./Assignments-5/twoSum.js)
