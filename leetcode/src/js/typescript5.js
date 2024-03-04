"use strict";
function circularPermutation(n, start) {
    function num2bits(num) {
        let ctr = 0;
        let s = [];
        while (num >= 0 && ctr < n) {
            const rem = num % 2;
            num = Math.floor(num / 2);
            s = [...s, rem];
            ctr++;
        }
        s = s.reverse();
        return s.join("");
    }
    let dp = [];
    function reverseBits(bits, i) {
        let tmp = bits.split("");
        tmp[i] = tmp[i] == '0' ? '1' : '0';
        const s = tmp.join("");
        return s;
    }
    function compareBits(x, y) {
        let errors = 0;
        for (let i = 0; i < x.length; i++) {
            if (x[i] !== y[i])
                ++errors;
            if (errors > 1)
                return false;
        }
        return true;
    }
    function dfs(bits) {
        let flag = false;
        while (dp.length < 2 ** n) {
            for (let i = 0; i < bits.length; i++) {
                const tmp = reverseBits(bits, i);
                if (!dp.includes(tmp)) {
                    if (!flag)
                        flag = true;
                    dp.push(tmp);
                    dfs(tmp);
                }
            }
            if (!flag)
                dp.pop();
            let y = "";
            if (dp[n ** 2 - 1] != undefined) {
                y = dp[n ** 2 - 1];
                if (!compareBits(dp[0], y))
                    dp.pop();
            }
        }
    }
    let bits = num2bits(start);
    dp.push(num2bits(start));
    dfs(bits);
    const result = dp.map((value) => {
        let tmp = 0;
        for (let j = value.length - 1, k = 0; j > -1; j--, k++) {
            tmp += (2 ** k) * Number(value[j]);
        }
        return tmp;
    });
    return result;
}
;
// const n: number = 4, start = 14;
// const result: number[] = circularPermutation(n, start);
// console.log(`The result is ${result}`);
function getAverages(nums, k) {
    let result = nums.map((num) => -1);
    let sum = nums.filter((val, index) => index < k).reduce((prev, curr) => prev + curr, 0);
    let count = k;
    for (let i = 0; i < nums.length; i++) {
        let flag = false;
        if (i - k > 0) {
            sum -= nums[i - k - 1];
            count -= 1;
        }
        if (i - k < 0)
            flag = true;
        if (i + k < nums.length) {
            sum += nums[i + k];
            count += 1;
        }
        else {
            flag = true;
        }
        if (flag)
            continue;
        result[i] = Math.floor(sum / count);
    }
    return result;
}
;
//const nums: number[] = [7,4,3,9,1,8,5,2,6], k = 3;
// const nums = [100000], k = 0;
// const nums = [8], k = 100000
// const result: number[] = getAverages(nums, k);
// console.log(`The result is ${result}`);
function getMaxLen(nums) {
    let maxLen = 1;
    let maxResult = 0;
    let lastPositive = -1;
    let dp = [...Array(nums.length + 1)].fill(0);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            dp[i] = dp[i - 1] + 1;
        // if (nums[i] == 0) {
        //     maxLen = 1;
        //     maxResult = 0;
        //     tmp = 1; 
        //     continue;
        // }
        // tmp *= nums[i];
        // if (tmp > 0)
        // {
        //     maxResult = tmp;
        //     ++maxLen;  
        // }
    }
    console.log(maxResult);
    if (maxResult > 0)
        return maxLen;
    return 0;
}
;
//const nums: number[] = [1,-2,-3,4];
// const nums: number[] = [0,1,-2,-3,-4]
// const result: number = getMaxLen(nums);
// console.log(`The result is ${result}`);
function maxSubarraySumCircular(nums) {
    let localMax = nums[0];
    let globalMax = nums[0];
    let n = nums.length;
    let i = 1;
    let flag = false;
    while (true) {
        localMax = Math.max(nums[i], localMax + nums[i]);
        globalMax = Math.max(globalMax, localMax);
        i++;
        if (i <= n) {
            if (flag && i < n)
                break;
            i = i % n;
            flag = true;
        }
    }
    return globalMax;
}
;
//const nums: number[] = [1,-2,3,-2];
//const nums: number[] = [5,-3,5];
//const nums: number[] = [-3,-2,-3];
//const result: number = maxSubarraySumCircular(nums);
//console.log(`The result is ${result}`);
function maxResult(nums, k) {
    let n = nums.length;
    let dp = new Array(n + 1).fill(1);
    for (let i = 0; i < n; i++) {
    }
    return 0;
}
;
// const nums: number[] = [1,-1,-2,4,-7,3], k = 2;
// const result: number = maxResult(nums, k);
// console.log(`The result is ${result}`);
function findThePrefixCommonArray(A, B) {
    let maxLenght = 0;
    let s = new Set();
    let count = 0;
    let result = A.map((each) => 0);
    for (let i = 0; i < A.length; i++) {
        count += 2;
        s.add(A[i]);
        s.add(B[i]);
        result[i] = count - s.size;
    }
    console.log(result);
    return result;
}
;
// const A: number[] = [1,3,2,4];
// const B: number[] = [3,1,2,4];
// const A: number[] = [2,3,1];
// const B: number[] = [3,1,2];
// const result: number[] = findThePrefixCommonArray(A, B);
// console.log(`The result is ${result}`);
function onesMinusZeros(grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let result = grid.map((row) => row.map((column) => 0));
    let rowsOnes = grid.map((row) => 0);
    let rowsZeros = grid.map((row) => 0);
    let colsOnes = [...Array(columns)].fill(0);
    let colsZeros = [...Array(columns)].fill(0);
    for (let i = 0; i < grid.length; i++) {
        rowsOnes[i] = grid[i].reduce((a, b) => a + b, 0);
        rowsZeros[i] = grid[i].length - rowsOnes[i];
    }
    for (let i = 0; i < columns; i++) {
        let ones = 0;
        let zeros = 0;
        for (let j = 0; j < rows; j++) {
            grid[j][i] == 0 ? ++zeros : ++ones;
        }
        colsOnes[i] = ones;
        colsZeros[i] = zeros;
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            result[i][j] = rowsOnes[i] + colsOnes[j] - rowsZeros[i] - colsZeros[j];
        }
    }
    return result;
}
;
// const grid: number[][] = [[0,1,1],[1,0,1],[0,0,1]];
// const result: number[][] = onesMinusZeros(grid);
// console.log(`The result is ${result}`);
function maxSum(grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let hourGlass = [[1, 1, 1], [0, 1, 0], [1, 1, 1]];
    let rowsHourGlass = hourGlass.length;
    let colsHourGlass = hourGlass[0].length;
    let maxResult = 0;
    for (let i = 0; i < rows; i++) {
        if (i + rowsHourGlass > rows)
            break;
        for (let j = 0; j < columns; j++) {
            if (j + colsHourGlass > columns)
                break;
            let sum = 0;
            for (let u = 0; u < 3; u++) {
                for (let v = 0; v < 3; v++) {
                    sum += grid[i + u][j + v] * hourGlass[u][v];
                }
            }
            maxResult = Math.max(maxResult, sum);
        }
    }
    console.log(maxResult);
    return maxResult;
}
;
// const grid: number[][] = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]];
// const grid: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
// const result: number = maxSum(grid);
// console.log(`The result is ${result}`);
function findMaxFish(grid) {
    const rows = grid.length;
    const columns = grid[0].length;
    let maxResult = 0;
    let visited = grid.map(row => row.map(column => false));
    function dfs(row, column) {
        if (row < 0 || row >= rows || column < 0 || column >= columns)
            return 0;
        if (visited[row][column])
            return 0;
        visited[row][column] = true;
        if (grid[row][column] == 0)
            return 0;
        let result = grid[row][column];
        result += dfs(row - 1, column);
        result += dfs(row + 1, column);
        result += dfs(row, column - 1);
        result += dfs(row, column + 1);
        return result;
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] == 0)
                continue;
            const count = dfs(i, j);
            maxResult = Math.max(maxResult, count);
        }
    }
    return maxResult;
}
;
//const grid: number[][] = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]];
// const grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
// const result: number = findMaxFish(grid);
// console.log(`The result is ${result}`);
function arrayChange(nums, operations) {
    const d = {};
    for (let i = 0; i < nums.length; i++)
        d[nums[i]] = i;
    for (const operation of operations) {
        const [u, v] = [...operation];
        d[v] = d[u];
        d[u] = null;
        //console.log(u, v);        
    }
    let result = nums.map(each => 0);
    let k;
    let v = 0;
    for ([k, v] of Object.entries(d)) {
        console.log(k, v);
        if (v != null)
            result[v] = Number(k);
    }
    return result;
}
;
// const nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]];
// const result: number[] = arrayChange(nums, operations);
// console.log(`The result is ${result}`);
function reorderLogFiles(logs) {
    let digitLogs = [];
    let textLogs = [];
    for (const log of logs) {
        const [id, ...rest] = log.split(' ');
        if (isNaN(Number(rest[0]))) {
            textLogs.push([id, rest.join(' ')]);
        }
        else {
            digitLogs.push(log);
        }
    }
    textLogs.sort((a, b) => {
        if (a[1] < b[1])
            return -1;
        if (a[1] > b[1])
            return 1;
        if (a[1] == b[1]) {
            if (a[0] < b[0])
                return -1;
            if (a[0] > b[0])
                return 1;
            return 0;
        }
        return 0;
    });
    const texts = textLogs.map(log => log.join(' '));
    return [...texts, ...digitLogs];
}
;
// const logs: string[] = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// const result: string[] = reorderLogFiles(logs);
// console.log(`The result is ${result}`);
// function findBall(grid: number[][]): number[] {
// };
function findPrefixScore(nums) {
    const n = nums.length;
    let result = [...Array(n + 1)].fill(0);
    let maxResult = 0;
    for (let i = 0; i < nums.length; i++) {
        maxResult = Math.max(nums[i], maxResult);
        result[i + 1] = result[i] + maxResult + nums[i];
    }
    result = result.slice(1);
    return result;
}
;
// const nums: number[] = [2,3,7,5,10];
// const result: number[] = findPrefixScore(nums);
// console.log(`The result is ${result}`);
function findOriginalArray(changed) {
    const n = changed.length;
    if (n % 2 == 1)
        return [];
    changed.sort((a, b) => a - b);
    let result = [];
    let d = {};
    let counter = 0;
    for (let i = 0; i < n; i++) {
        if (changed[i] == 0) {
            ++counter;
            continue;
        }
        let value = Number(0.5 * changed[i]);
        if (d[value] != undefined)
            d[value] = changed[i];
        else
            d[changed[i]] = -1;
    }
    if (counter % 2 == 1)
        return [];
    result = [...Array(counter / 2)].fill(0);
    for (const key of Object.keys(d)) {
        if (d[key] == -1)
            return [];
        result = [...result, Number(key)];
    }
    return result;
}
;
//const changed: number[] = [0,0,1,3,4,2,6,8];
//const changed: number[] = [1,3,4,2,6,8];
//const changed: number[] = [6,3,0,1];
//const changed: number[] = [5,0];
//const changed: number[] = [0,0,0,0];
//const changed: number[] = [3,3,3,3];
// const changed: number[] = [2,1,2,4,2,4];
// const result: number[] = findOriginalArray(changed);
// console.log(`The result is ${result}`);
function numEnclaves(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = grid.map(row => row.map(column => false));
    let flag = false;
    function dfs(row, column) {
        if (row < 0 || row > m - 1 || column < 0 || column > n - 1)
            return 0;
        if (visited[row][column])
            return 0;
        visited[row][column] = true;
        if (grid[row][column] == 0)
            return 0;
        if (row == 0 || row == m - 1 || column == 0 || column == n - 1) {
            flag = false;
        }
        let result = 1;
        result += dfs(row - 1, column);
        result += dfs(row + 1, column);
        result += dfs(row, column - 1);
        result += dfs(row, column + 1);
        return result;
    }
    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] == 1) {
                flag = true;
                const tmp = dfs(i, j);
                if (flag) {
                    result += tmp;
                }
                console.log(tmp, flag);
            }
        }
    }
    return result;
}
;
//const grid: number[][] = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
//const grid: number[][] = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];
// const grid: number[][] = [[0,0,0,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,1],[0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,1,1,1,1,1,0,0,1,0],[0,0,1,0,1,1,1,1,0,1],[0,1,1,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,1,0,1],[1,0,1,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1]];
// const result: number = numEnclaves(grid);
// console.log(`The result is ${result}`);
function findMatrix(nums) {
    let d = {};
    for (const num of nums) {
        if (d[num] == undefined)
            d[num] = 1;
        else
            d[num]++;
    }
    let items = Object.keys(d).map(key => [key, d[key]]);
    items.sort((a, b) => b[1] - a[1]);
    const n = items[0][1];
    let results = [...Array(n)].fill([]);
    for (let item of items) {
        let [key, val] = [...item];
        for (let i = 0; i < results.length; i++) {
            if (val > 0) {
                results[i] = [...results[i], Number(key)];
                --val;
            }
        }
    }
    return results;
}
;
//const nums: number[] = [1,3,4,1,2,3,1];
// const nums: number[] = [1,2,3,4];
// const result: number[][] = findMatrix(nums);
// console.log(`The result is ${result}`);
function isEmpty(obj) {
    const keys = Object.keys(obj);
    return keys.length == 0 ? true : false;
}
;
// const obj: any = {"x": 5, "y": 42};
// const result: boolean = isEmpty(obj);
// console.log(`The result is ${result}`);
class Calculator {
    constructor(value) {
        this.num = 0;
        this.num = value;
    }
    add(value) {
        this.num += value;
        return this;
    }
    subtract(value) {
        this.num -= value;
        return this;
    }
    multiply(value) {
        this.num *= value;
        return this;
    }
    divide(value) {
        this.num /= value;
        return this;
    }
    power(value) {
        this.num **= value;
        return this;
    }
    getResult() {
        return this.num;
    }
}
function join(arr1, arr2) {
    let result = [];
    let k1;
    let k2;
    let v1 = {};
    let v2 = {};
    for ([k2, v2] of Object.entries(arr2)) {
        const id2 = v2.id;
        const index = arr1.indexOf(v2);
        for ([k1, v1] of Object.entries(arr1)) {
            const id1 = v1.id;
            if (id2 == id1) {
                arr1[index] = null;
            }
        }
    }
    result = [...arr1, ...arr2].sort((a, b) => a.id - b.id);
    // for([k, v] of Object.entries(result))
    //     console.log(v);
    // for([k, v] of Object.entries(arr2))
    //     console.log(v);
    return result;
}
;
const arr1 = [{ "id": 1, "x": 2, "y": 3 }, { "id": 2, "x": 3, "y": 6 }];
const arr2 = [{ "id": 2, "x": 10, "y": 20 }, { "id": 3, "x": 0, "y": 0 }];
const result = join(arr1, arr2);
console.log(`The result is ${result}`);
