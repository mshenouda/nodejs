var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function circularPermutation(n, start) {
    function num2bits(num) {
        var ctr = 0;
        var s = [];
        while (num >= 0 && ctr < n) {
            var rem = num % 2;
            num = Math.floor(num / 2);
            s = __spreadArray(__spreadArray([], s, true), [rem], false);
            ctr++;
        }
        s = s.reverse();
        return s.join("");
    }
    var dp = [];
    function reverseBits(bits, i) {
        var tmp = bits.split("");
        tmp[i] = tmp[i] == '0' ? '1' : '0';
        var s = tmp.join("");
        return s;
    }
    function compareBits(x, y) {
        var errors = 0;
        for (var i = 0; i < x.length; i++) {
            if (x[i] !== y[i])
                ++errors;
            if (errors > 1)
                return false;
        }
        return true;
    }
    function dfs(bits) {
        var flag = false;
        while (dp.length < Math.pow(2, n)) {
            for (var i = 0; i < bits.length; i++) {
                var tmp = reverseBits(bits, i);
                if (!dp.includes(tmp)) {
                    if (!flag)
                        flag = true;
                    dp.push(tmp);
                    dfs(tmp);
                }
            }
            if (!flag)
                dp.pop();
            var y = "";
            if (dp[Math.pow(n, 2) - 1] != undefined) {
                y = dp[Math.pow(n, 2) - 1];
                if (!compareBits(dp[0], y))
                    dp.pop();
            }
        }
    }
    var bits = num2bits(start);
    dp.push(num2bits(start));
    dfs(bits);
    var result = dp.map(function (value) {
        var tmp = 0;
        for (var j = value.length - 1, k = 0; j > -1; j--, k++) {
            tmp += (Math.pow(2, k)) * Number(value[j]);
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
    var result = nums.map(function (num) { return -1; });
    var sum = nums.filter(function (val, index) { return index < k; }).reduce(function (prev, curr) { return prev + curr; }, 0);
    var count = k;
    for (var i = 0; i < nums.length; i++) {
        var flag = false;
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
    var maxLen = 1;
    var maxResult = 0;
    var lastPositive = -1;
    var dp = __spreadArray([], Array(nums.length + 1), true).fill(0);
    for (var i = 0; i < nums.length; i++) {
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
    var localMax = nums[0];
    var globalMax = nums[0];
    var n = nums.length;
    var i = 1;
    var flag = false;
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
    var n = nums.length;
    var dp = new Array(n + 1).fill(1);
    for (var i = 0; i < n; i++) {
    }
    return 0;
}
;
// const nums: number[] = [1,-1,-2,4,-7,3], k = 2;
// const result: number = maxResult(nums, k);
// console.log(`The result is ${result}`);
function findThePrefixCommonArray(A, B) {
    var maxLenght = 0;
    var s = new Set();
    var count = 0;
    var result = A.map(function (each) { return 0; });
    for (var i = 0; i < A.length; i++) {
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
    var rows = grid.length;
    var columns = grid[0].length;
    var result = grid.map(function (row) { return row.map(function (column) { return 0; }); });
    var rowsOnes = grid.map(function (row) { return 0; });
    var rowsZeros = grid.map(function (row) { return 0; });
    var colsOnes = __spreadArray([], Array(columns), true).fill(0);
    var colsZeros = __spreadArray([], Array(columns), true).fill(0);
    for (var i = 0; i < grid.length; i++) {
        rowsOnes[i] = grid[i].reduce(function (a, b) { return a + b; }, 0);
        rowsZeros[i] = grid[i].length - rowsOnes[i];
    }
    for (var i = 0; i < columns; i++) {
        var ones = 0;
        var zeros = 0;
        for (var j = 0; j < rows; j++) {
            grid[j][i] == 0 ? ++zeros : ++ones;
        }
        colsOnes[i] = ones;
        colsZeros[i] = zeros;
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
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
    var rows = grid.length;
    var columns = grid[0].length;
    var hourGlass = [[1, 1, 1], [0, 1, 0], [1, 1, 1]];
    var rowsHourGlass = hourGlass.length;
    var colsHourGlass = hourGlass[0].length;
    var maxResult = 0;
    for (var i = 0; i < rows; i++) {
        if (i + rowsHourGlass > rows)
            break;
        for (var j = 0; j < columns; j++) {
            if (j + colsHourGlass > columns)
                break;
            var sum = 0;
            for (var u = 0; u < 3; u++) {
                for (var v = 0; v < 3; v++) {
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
    var rows = grid.length;
    var columns = grid[0].length;
    var maxResult = 0;
    var visited = grid.map(function (row) { return row.map(function (column) { return false; }); });
    function dfs(row, column) {
        if (row < 0 || row >= rows || column < 0 || column >= columns)
            return 0;
        if (visited[row][column])
            return 0;
        visited[row][column] = true;
        if (grid[row][column] == 0)
            return 0;
        var result = grid[row][column];
        result += dfs(row - 1, column);
        result += dfs(row + 1, column);
        result += dfs(row, column - 1);
        result += dfs(row, column + 1);
        return result;
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (grid[i][j] == 0)
                continue;
            var count = dfs(i, j);
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
    var _a;
    var d = {};
    for (var i = 0; i < nums.length; i++)
        d[nums[i]] = i;
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        var _b = __spreadArray([], operation, true), u = _b[0], v_1 = _b[1];
        d[v_1] = d[u];
        d[u] = null;
        //console.log(u, v);        
    }
    var result = nums.map(function (each) { return 0; });
    var k;
    var v = 0;
    for (var _c = 0, _d = Object.entries(d); _c < _d.length; _c++) {
        _a = _d[_c], k = _a[0], v = _a[1];
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
    var digitLogs = [];
    var textLogs = [];
    for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
        var log = logs_1[_i];
        var _a = log.split(' '), id = _a[0], rest = _a.slice(1);
        if (isNaN(Number(rest[0]))) {
            textLogs.push([id, rest.join(' ')]);
        }
        else {
            digitLogs.push(log);
        }
    }
    textLogs.sort(function (a, b) {
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
    var texts = textLogs.map(function (log) { return log.join(' '); });
    return __spreadArray(__spreadArray([], texts, true), digitLogs, true);
}
;
// const logs: string[] = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// const result: string[] = reorderLogFiles(logs);
// console.log(`The result is ${result}`);
// function findBall(grid: number[][]): number[] {
// };
function findPrefixScore(nums) {
    var n = nums.length;
    var result = __spreadArray([], Array(n + 1), true).fill(0);
    var maxResult = 0;
    for (var i = 0; i < nums.length; i++) {
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
    var n = changed.length;
    if (n % 2 == 1)
        return [];
    changed.sort(function (a, b) { return a - b; });
    var result = [];
    var d = {};
    var counter = 0;
    for (var i = 0; i < n; i++) {
        if (changed[i] == 0) {
            ++counter;
            continue;
        }
        var value = Number(0.5 * changed[i]);
        if (d[value] != undefined)
            d[value] = changed[i];
        else
            d[changed[i]] = -1;
    }
    if (counter % 2 == 1)
        return [];
    result = __spreadArray([], Array(counter / 2), true).fill(0);
    for (var _i = 0, _a = Object.keys(d); _i < _a.length; _i++) {
        var key = _a[_i];
        if (d[key] == -1)
            return [];
        result = __spreadArray(__spreadArray([], result, true), [Number(key)], false);
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
    var m = grid.length;
    var n = grid[0].length;
    var visited = grid.map(function (row) { return row.map(function (column) { return false; }); });
    var flag = false;
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
        var result = 1;
        result += dfs(row - 1, column);
        result += dfs(row + 1, column);
        result += dfs(row, column - 1);
        result += dfs(row, column + 1);
        return result;
    }
    var result = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; ++j) {
            if (grid[i][j] == 1) {
                flag = true;
                var tmp = dfs(i, j);
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
    var d = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (d[num] == undefined)
            d[num] = 1;
        else
            d[num]++;
    }
    var items = Object.keys(d).map(function (key) { return [key, d[key]]; });
    items.sort(function (a, b) { return b[1] - a[1]; });
    var n = items[0][1];
    var results = __spreadArray([], Array(n), true).fill([]);
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var _b = __spreadArray([], item, true), key = _b[0], val = _b[1];
        for (var i = 0; i < results.length; i++) {
            if (val > 0) {
                results[i] = __spreadArray(__spreadArray([], results[i], true), [Number(key)], false);
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
    var keys = Object.keys(obj);
    return keys.length == 0 ? true : false;
}
;
// const obj: any = {"x": 5, "y": 42};
// const result: boolean = isEmpty(obj);
// console.log(`The result is ${result}`);
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        this.num = 0;
        this.num = value;
    }
    Calculator.prototype.add = function (value) {
        this.num += value;
        return this;
    };
    Calculator.prototype.subtract = function (value) {
        this.num -= value;
        return this;
    };
    Calculator.prototype.multiply = function (value) {
        this.num *= value;
        return this;
    };
    Calculator.prototype.divide = function (value) {
        this.num /= value;
        return this;
    };
    Calculator.prototype.power = function (value) {
        var _a;
        (_a = this).num = Math.pow(_a.num, value);
        return this;
    };
    Calculator.prototype.getResult = function () {
        return this.num;
    };
    return Calculator;
}());
function join(arr1, arr2) {
    var _a, _b;
    var result = [];
    var k1;
    var k2;
    var v1 = {};
    var v2 = {};
    for (var _i = 0, _c = Object.entries(arr2); _i < _c.length; _i++) {
        _a = _c[_i], k2 = _a[0], v2 = _a[1];
        var id2 = v2.id;
        var index = arr1.indexOf(v2);
        for (var _d = 0, _e = Object.entries(arr1); _d < _e.length; _d++) {
            _b = _e[_d], k1 = _b[0], v1 = _b[1];
            var id1 = v1.id;
            if (id2 == id1) {
                arr1[index] = null;
            }
        }
    }
    result = __spreadArray(__spreadArray([], arr1, true), arr2, true).sort(function (a, b) { return a.id - b.id; });
    // for([k, v] of Object.entries(result))
    //     console.log(v);
    // for([k, v] of Object.entries(arr2))
    //     console.log(v);
    return result;
}
;
var arr1 = [{ "id": 1, "x": 2, "y": 3 }, { "id": 2, "x": 3, "y": 6 }];
var arr2 = [{ "id": 2, "x": 10, "y": 20 }, { "id": 3, "x": 0, "y": 0 }];
var result = join(arr1, arr2);
console.log("The result is ".concat(result));
