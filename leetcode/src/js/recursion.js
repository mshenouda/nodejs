"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMaximumGold(grid) {
    const rows = grid.length;
    const columns = grid[0].length;
    const gridObjs = grid.map(row => row.map(column => {
        let obj = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));
    function dfs(r, c) {
        if (r < 0 || r > rows - 1 || c < 0 || c > columns - 1)
            return 0;
        if (gridObjs[r][c].visited || gridObjs[r][c].value == 0)
            return 0;
        gridObjs[r][c].visited = true;
        const result = gridObjs[r][c].value + Math.max(dfs(r, c - 1), dfs(r, c + 1), dfs(r - 1, c), dfs(r + 1, c));
        gridObjs[r][c].visited = false;
        return result;
    }
    let result = 0;
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < columns; j++) {
            result = Math.max(result, dfs(i, j));
        }
    return result;
}
;
// const grid: number[][] = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// const result: number = getMaximumGold(grid);
// console.log(`Result is ${result}`);
function exist(board, word) {
    const rows = board.length;
    const columns = board[0].length;
    const boardObjs = board.map(row => row.map(column => {
        let obj = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));
    function dfs(r, c, j) {
        if (r < 0 || r > rows - 1 || c < 0 || c > columns - 1)
            return false;
        if (boardObjs[r][c].visited)
            return false;
        boardObjs[r][c].visited = true;
        let result = false;
        if (j < word.length && boardObjs[r][c].value == word[j]) {
            result = true && (dfs(r, c - 1, j + 1) || dfs(r, c + 1, j + 1) || dfs(r - 1, c, j + 1) || dfs(r + 1, c, j + 1));
            if (j == word.length - 1)
                result = true;
        }
        boardObjs[r][c].visited = false;
        return result;
    }
    let result = false;
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < columns; j++) {
            result = result || dfs(i, j, 0);
        }
    return result;
}
;
//const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
//const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// const result: boolean = exist(board, word);
// console.log(`Result is ${result}`);
function canPartitionKSubsets(nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const s = new Set(nums);
    const maxNum = Math.max(...nums);
    let dp = [...Array(n + 1)].map(row => [...Array(maxNum + 1)].fill(0));
    for (let i = 0; i < n + 1; i++)
        dp[i][0] = 1;
    for (let i = 1; i < n + 1; i++)
        for (let j = 1; j < maxNum + 1; j++) {
            if (nums[i - 1] > j)
                dp[i][j] = dp[i - 1][j];
            else {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
            }
        }
    console.log(dp);
    return false;
}
// const nums = [4,3,2,3,5,2,1], k = 4;
// const result: boolean = canPartitionKSubsets(nums, k);
// console.log(`Result is ${result}`);
function combinationSum4(nums, target) {
    const n = nums.length;
    let dp = {};
    function dfs(sum = 0) {
        if (sum == 0)
            return 1;
        let result = 0;
        if (dp[sum] != undefined)
            return dp[sum];
        for (let i = 0; i < n; i++) {
            if (sum - nums[i] >= 0) {
                result += dfs(sum - nums[i]);
                dp[sum] = result;
            }
        }
        return result;
    }
    const result = dfs(target);
    console.log(dp);
    return result;
}
;
// const nums = [1,2,3], target = 4;
// const result: number = combinationSum4(nums, target);
// console.log(`Result is ${result}`);
function eraseOverlapIntervals(intervals) {
    return 0;
}
;
//const intervals = [[1,2],[2,3],[3,4],[1,3]];
//const intervals = [[1,2],[1,2],[1,2]];
//const intervals = [[1,2],[2,3]];
//const intervals = [[1,100],[11,22],[1,11],[2,12]]
// const result: number = eraseOverlapIntervals(intervals);
// console.log(`Result is ${result}`);
function findDifferentBinaryString(nums) {
    nums.sort((a, b) => Number(a) - Number(b));
    const n = nums[0].length;
    let s = nums.map(x => parseInt(x, 2));
    let result = [];
    function replace(str, j) {
        for (let i = 0; i < n; i++) {
            if (j == i) {
                str[i] = (str[i] == '0') ? '1' : '0';
            }
        }
        return str;
    }
    function dfs(str, index) {
        for (let i = index; i > -1; i--) {
            str = replace(str, i);
            if (!s.includes(parseInt(str.join(""), 2))) {
                result = str;
                return;
            }
            str = replace(str, i);
            dfs(str, i - 1);
        }
    }
    dfs(nums[0].split(""), n - 1);
    return result.join("");
}
;
//const nums = ["01","10"];
//const nums = ["00","01"]
//const nums = ["111","011","001"];
// const result: string = findDifferentBinaryString(nums);
// console.log(`Result is ${result}`);
class StockSpanner {
    constructor() {
        this.stack = [];
        this.result = [];
        this.l = -1;
        this.i = 0;
    }
    next(price) {
        if (this.stack.length == 0) {
            this.stack.push([this.i, price]);
            this.l++;
            this.result[this.i++] = 1;
            let val = this.result[this.i - 1];
            return val;
            ;
        }
        this.result[this.i++] = 1;
        while (this.stack[this.l][1] < price) {
            this.stack.pop();
            this.l--;
        }
        let [prevIndex, _] = this.stack[this.l];
        this.result[this.i] = this.i - prevIndex;
        this.i++;
        this.stack.push([this.i, price]);
        this.l++;
        return this.result[this.i - 1];
    }
}
// n = len(temperatures)
// result = [0]*n
// stack = []
// l = -1
// for i, currTmp in enumerate(temperatures):           
//     while len(stack) > 0 and stack[l][1] < currTmp:
//         index, _ = stack.pop()
//         result[index] = i - index
//         l -= 1
//     stack.append((i, currTmp))
//     l += 1
// return result     
// const stockSpanner = new StockSpanner();
// let result = stockSpanner.next(100); // return 1
// result = stockSpanner.next(80);  // return 1
// console.log(`Result is ${result}`);
// result = stockSpanner.next(60);  // return 1
// console.log(`Result is ${result}`);
// result = stockSpanner.next(70);  // return 2
// console.log(`Result is ${result}`);
// result = stockSpanner.next(60);  // return 1
// console.log(`Result is ${result}`);
// result = stockSpanner.next(75);
// console.log(`Result is ${result}`);
// result = stockSpanner.next(85);
// console.log(`Result is ${result}`);
function isAdditiveNumber(num) {
    const nums = num.split("").map(x => Number(x));
    return false;
}
;
// const num = "112358";
// const result = isAdditiveNumber(num);
// console.log(`Result is ${result}`);
var numberOfSubarrays = function (nums, k) {
    let start = 0;
    let end = 0;
    let own = k;
    let res = 0;
    while (end < nums.length) {
        // find next start
        while (nums[start] % 2 === 0) {
            start++;
        }
        // find end
        while (own > 0 && end < nums.length) {
            if (nums[end] % 2 === 1) {
                own--;
            }
            end++;
        }
        if (own > 0)
            return res;
        res += count(start, end) + 1;
        start++;
        own++;
    }
    return res;
    function count(start, end) {
        let l = 0;
        let r = 0;
        start--;
        while (start >= 0 && nums[start] % 2 === 0) {
            l++;
            start--;
        }
        while (end < nums.length && nums[end] % 2 === 0) {
            r++;
            end++;
        }
        return l * r + l + r;
    }
};
// const nums = [2,2,2,1,2,2,1,2,2,2], k = 2;
// const result = numberOfSubarrays(nums, k);
// console.log(`Result is ${result}`);
function solve(board) {
    let rows = board.length;
    let cols = board[0].length;
    let objVals = board.map(row => row.map(col => {
        let obj = {};
        obj["value"] = col;
        obj["visited"] = false;
        return obj;
    }));
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return false;
        if (objVals[r][c].visited)
            return true;
        objVals[r][c].visited = true;
        if (objVals[r][c].value == 'X')
            return true;
        if (objVals[r][c].value == 'O' && (r == 0) || (r == rows - 1) || (c == 0) || (c == cols - 1))
            return false;
        let result = dfs(r - 1, c) && dfs(r + 1, c) && dfs(r, c - 1) && dfs(r, c + 1);
        if (result)
            objVals[r][c].value = 'X';
        return result;
    }
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++) {
            if (objVals[i][j].value == 'O') {
                dfs(i, j);
            }
        }
    board = objVals.map(row => row.map((col) => col["value"]));
    //console.log(board);
}
;
const board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
solve(board);
