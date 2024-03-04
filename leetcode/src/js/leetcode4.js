"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findCheapestPrice(n, flights, src, dst, k) {
    "SOLVE DISJSTRA";
    return 0;
}
;
// const n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// const result:number = findCheapestPrice(n, flights, src, dst, k);
// console.log(`The result is ${result}`);
function countBattleships(board) {
    const m = board.length;
    const n = board[0].length;
    const boardObjs = board.map(row => row.map(column => {
        let obj = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));
    function dfs(i, j, newi, newj) {
        let result = true;
        if (((newi >= 0 && newi < m) && (newj >= 0 && newj < n)) && !boardObjs[i][j].visited) {
            boardObjs[i][j].visited = true;
            if (boardObjs[newi][newj] == 'X' && (Math.abs(newi - i) == 1) || (Math.abs(newj - j) == 1))
                return false;
            result && (result = dfs(i, j, i - 1, j));
            result && (result = dfs(i, j, i + 1, j));
            result && (result = dfs(i, j, i, j - 1));
            result && (result = dfs(i, j, i, j + 1));
        }
        return result;
    }
    let result = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (board[i][j] == 'X') {
                if (dfs(i, j, i, j)) {
                    console.log(i, j);
                    result++;
                }
            }
    return result;
}
;
// const board: string[][] = [["X",".",".","X"],
//                            [".",".",".","X"],
//                            [".",".",".","X"]]
// const result:number = countBattleships(board);
// console.log(`The result is ${result}`);
function binarySearch(nums, record) {
    const n = nums.length;
    let start = 0;
    let end = n - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] == record)
            return record;
        if (nums[mid] > record)
            end = mid - 1;
        if (nums[mid] < record)
            start = mid + 1;
    }
    ;
    return -1;
}
class TweetCounts {
    constructor() {
        this.tweetMap = {};
        this.freq = {};
        this.result = [];
        this.freq = { "minute": 60, "hour": 3600, "day": 86400 };
    }
    recordTweet(tweetName, time) {
        if (!this.tweetMap[tweetName])
            this.tweetMap[tweetName] = [];
        this.tweetMap[tweetName].push(time);
        this.tweetMap[tweetName].sort((a, b) => a - b);
        console.log(this.tweetMap[tweetName]);
    }
    getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {
        this.result = [];
        let start = startTime;
        while (start <= endTime) {
            const finish = start + this.freq[freq];
            let counter = 0;
            for (let num of this.tweetMap[tweetName]) {
                if (num >= start && num < finish)
                    counter++;
                if (num > finish)
                    break;
            }
            this.result.push(counter);
            start += this.freq[freq];
        }
        ;
        return this.result;
    }
}
// const tweetCounts = new TweetCounts();
// tweetCounts.recordTweet("tweet3", 0);                              // New tweet "tweet3" at time 0
// tweetCounts.recordTweet("tweet3", 60);                             // New tweet "tweet3" at time 60
// tweetCounts.recordTweet("tweet3", 10);                             // New tweet "tweet3" at time 10
// let result: number[] = tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59);
// console.log(`The result is ${result}`);
// result = tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60);
// console.log(`The result is ${result}`);
// tweetCounts.recordTweet("tweet3", 120);                            // New tweet "tweet3" at time 120
// result = tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);  // return [4]; chunk [0,210] had 4 tweets
// console.log(`The result is ${result}`);
// function returnArea(l: number, r: number) {
//     const currentArea: number = (r - l)*Math.min(height[l], height[r]);
//     return currentArea; 
// }
// function maxArea(height: number[]): number {
//     let l: number =0;
//     let r: number = height.length-1; 
//     let maxArea: number = returnArea(l, r);
//     let left: number = 0;
//     while( l < r) {
//         const minHeight = Math.min(height[l], height[r])
//         if (height[l++] > minHeight) {
//             let tempArea: number =  returnArea(l, r);
//             maxArea = Math.max(maxArea, tempArea);
//         }
//         if (height[r--] > minHeight) {
//             let tempArea: number =  returnArea(l, r);
//             maxArea = Math.max(maxArea, tempArea);
//         }
//         let tempArea: number = returnArea(l+1, r);
//         // if (tempArea >= maxArea) { 
//         //     maxArea = tempArea;
//         //     l++;
//         //     continue;
//         // }
//         // tempArea = returnArea(l, r--);
//         // maxArea = Math.max(tempArea, maxArea);
//     };
//     return maxArea;
// };
//const height: number[] = [1,8,6,2,5,4,8,3,7];
// const height: number[] = [1,1];
//const height: number[] = [2,3,10,5,7,8,9];
// const height: number[] = [2,3,4,5,18,17,6]
// const result: number = maxArea(height);
// console.log(`The result is ${result}`);
// function numSubarraysWithSum(nums: number[], goal: number): number {
//     let count: number = 0;
//     let sum: number = 0;
//     function dfs(): number {
//         for(let i=0; i<nums.length; i++)
//         {
//             sum += nums[i];
//             if (nums[i] == goal)
//                 count++;
//             if (sum == goal)
//                 count++;
//         }
//     }
//     return dfs();
// };
// const nums = [1,0,1,0,1], goal = 2;
// const result: number = numSubarraysWithSum(nums, goal);
// console.log(`The result is ${result}`);
function knightDialer(n) {
    let count = 0;
    let board = [...Array(4)].map(row => [...Array(3)].fill(true));
    board[3][0] = false;
    board[3][2] = false;
    let boardObjs = board.map(row => row.map(column => {
        let obj = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));
    let word = 0;
    function dfs(r, c, n) {
        if (r < 0 || r > 3 || c < 0 || c > 2)
            return 0;
        if (boardObjs[r][c].value == false)
            return 0;
        // if (boardObjs[r][c].visited || boardObjs[r][c].value == false)
        //     return 0;
        // boardObjs[r][c].visited = true;
        let result = 0;
        if (word < n) {
            word++;
            result += 1;
            result += dfs(r - 2, c - 1, n - 1);
            result += dfs(r + 2, c - 1, n - 1);
            result += dfs(r - 2, c + 1, n - 1);
            result += dfs(r + 2, c + 1, n - 1);
            result += dfs(r - 1, c - 2, n - 1);
            result += dfs(r + 1, c - 2, n - 1);
            result += dfs(r - 1, c + 2, n - 1);
            result += dfs(r + 1, c + 2, n - 1);
            result %= (10 ** 9 + 7);
        }
        else
            word--;
        return result;
    }
    let result = 0;
    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 3; j++) {
            // if (!boardObjs[i][j].visited && boardObjs[i][j].value)
            result += dfs(i, j, n);
        }
    console.log(...boardObjs, result);
    return result;
}
;
// const n: number = 1;
// const result: number = knightDialer(n);
// console.log(`The result is ${result}`);
function customSortString(order, s) {
    let found = [];
    let notFound = [];
    for (const letter of s) {
        if (order.indexOf(letter) == -1)
            notFound = [...notFound, letter];
        else
            found = [...found, letter];
    }
    console.log(found, notFound);
    function custom(a, b) {
        if (order.indexOf(a) > order.indexOf(b))
            return 1;
        if (order.indexOf(a) < order.indexOf(b))
            return -1;
        return 0;
    }
    found = found.sort((a, b) => custom(a, b));
    const result = [...found, ...notFound];
    return result.join("");
}
;
// const order: string = "cbafg", s: string = "abcd";
// const order = "cbafg", s = "abcd"
// const result: string = customSortString(order, s);
// console.log(`The result is ${result}`);
function sortJumbled(mapping, nums) {
    function mapped(num) {
        const s = num.toString().split("").map(index => mapping[Number(index)].toString());
        return Number(s.join(""));
    }
    let mappedObjs = nums.map(num => {
        let obj = {};
        obj["value"] = num;
        obj["mapped"] = mapped(num);
        obj["index"] = nums.indexOf(num);
        return obj;
    });
    const result = mappedObjs.sort((a, b) => {
        if (a.mapped > b.mapped)
            return 1;
        if (a.mapped < b.mapped)
            return -1;
        if (a.index > b.index)
            return 1;
        if (a.index < b.index)
            return -1;
        return 0;
    }).map(x => x.value);
    return result;
}
;
// const mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]
// //const mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]
// const result: number[] = sortJumbled(mapping, nums);
// console.log(`The result is ${result}`);
function invalidTransactions(transactions) {
    let invalid = [];
    let transactionsObjs = transactions.map(transaction => {
        let obj = {};
        const splitted = transaction.split(',');
        obj["name"] = splitted[0];
        obj["time"] = splitted[1];
        obj["amount"] = splitted[2];
        obj["city"] = splitted[3];
        return obj;
    });
    for (const x of transactionsObjs)
        if (x.amount > 1000) {
            let returned = [x.name, x.time, x.amount, x.city].join(',');
            invalid.push(returned);
        }
    console.log(...invalid);
    transactionsObjs = transactionsObjs.filter(x => x.amount < 1000);
    let visited = new Set();
    for (let i = 0; i < transactionsObjs.length; i++) {
        for (let j = 0; j < transactionsObjs.length; j++)
            if (i != j && transactionsObjs[i].name == transactionsObjs[j].name && transactionsObjs[i].city != transactionsObjs[j].city && Math.abs(transactionsObjs[j].time - transactionsObjs[i].time) < 60) {
                if (!visited.has(i)) {
                    visited.add(i);
                    let returned = [transactionsObjs[i].name, transactionsObjs[i].time, transactionsObjs[i].amount, transactionsObjs[i].city].join(',');
                    invalid.push(returned);
                }
            }
    }
    return invalid;
    return [];
}
;
// const transactions: string[] = ["alice,20,800,mtv","alice,50,100,beijing"];
// const transactions: string[] = ["bob,689,1910,barcelona","alex,696,122,bangkok","bob,832,1726,barcelona","bob,820,596,bangkok","chalicefy,217,669,barcelona","bob,175,221,amsterdam"]
// //const transactions: string[] = ["alice,20,800,mtv","bob,50,1200,mtv"]
// const result: string[] = invalidTransactions(transactions);
// console.log(`The result is ${result}`);
class StockPrice {
    constructor() {
        this.kv = {};
        this.kv = {};
        this.curList = [];
        this.maxNum = 0;
        this.minNum = 1e6;
        this.maxMin = [];
        this.len = 0;
    }
    update(timestamp, price) {
        this.kv[timestamp] = price;
        this.curList.push(price);
        this.len++;
        console.log(this.curList, this.maxMin, this.kv);
    }
    current() {
        this.len--;
        console.log(this.curList, this.maxMin, this.kv);
        return this.curList.pop();
    }
    maximum() {
        this.maxMin = [];
        this.maxMin = [...this.maxMin, ...this.curList];
        this.maxMin.sort((a, b) => a - b);
        console.log(this.curList, this.maxMin, this.kv, this.len);
        return this.maxMin[this.len - 1];
    }
    minimum() {
        this.maxMin = [];
        this.maxMin = [...this.maxMin, ...this.curList];
        this.maxMin.sort((a, b) => a - b);
        console.log(this.curList, this.maxMin, this.kv);
        return this.maxMin[0];
    }
}
// const stockPrice = new StockPrice();
// stockPrice.update(1, 10); // Timestamps are [1] with corresponding prices [10].
// stockPrice.update(2, 5);  // Timestamps are [1,2] with corresponding prices [10,5].
// stockPrice.current();     // return 5, the latest timestamp is 2 with the price being 5.
// let result = stockPrice.maximum();     // return 10, the maximum price is 10 at timestamp 1.
// console.log(result);
// stockPrice.update(1, 3);  // The previous timestamp 1 had the wrong price, so it is updated to 3.
//                           // Timestamps are [1,2] with corresponding prices [3,5].
// result =stockPrice.maximum();     // return 5, the maximum price is 5 after the correction.
// console.log(result);
// stockPrice.update(4, 2);  // Timestamps are [1,2,4] with corresponding prices [3,5,2].
// stockPrice.minimum();     // return 2, the minimum price is 2 at timestamp 4.
function minSteps(s, t) {
    let cnt1 = {};
    for (const letter of s) {
        if (!cnt1[letter])
            cnt1[letter] = 1;
        else
            cnt1[letter]++;
    }
    for (const letter of t) {
        if (!cnt1[letter])
            cnt1[letter] = -1;
        else
            cnt1[letter]--;
    }
    let c1 = 0;
    let c2 = 0;
    let value;
    for (value of Object.values(cnt1)) {
        if (value > 0)
            c1 += value;
        if (value < 0)
            c2 += value;
    }
    const result = Math.min(c1, -1 * c2);
    return result;
}
;
//const s = "bab", t = "aba";
// const s = "leetcode", t = "practice"
// const result: number = minSteps(s, t);
// console.log(`The result is ${result}`);
function removeOccurrences(s, part) {
    let stack = [];
    let j = 0;
    let flag = false;
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (j < part.length && s[i] == part[j]) {
            j++;
            continue;
        }
        ;
        if (j == part.length - 1) {
            while (j > 0) {
                stack.pop();
            }
            ;
        }
        else
            j = 0;
    }
    return stack.join("");
}
;
// const s = "daabcbaabcbc", part = "abc";
// const result: string = removeOccurrences(s, part);
// console.log(`The result is ${result}`);
function minSteps2(s, t) {
    function counter(s) {
        let cnt = {};
        for (const letter of s) {
            if (!cnt[letter])
                cnt[letter] = 1;
            else
                cnt[letter]++;
        }
        return cnt;
    }
    const cnt1 = counter(s);
    const cnt2 = counter(t);
    let result = 0;
    for (const key of Object.keys(cnt1)) {
        if (cnt2[key])
            result += Math.abs(cnt1[key] - cnt2[key]);
        else
            result += cnt1[key];
    }
    for (const key of Object.keys(cnt2))
        if (!cnt1[key])
            result += cnt2[key];
    return result;
}
;
