var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getConcatenation(nums) {
    return nums.concat(nums);
}
;
// let nums: number[] = [1,2,1];
// let result: number[] = getConcatenation(nums);
// console.log(`The result is ${result}`);
function partitionArray(nums, k) {
    nums.sort(function (a, b) { return a - b; });
    var counter = 1;
    var smallest = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] - smallest > k) {
            smallest = nums[i];
            counter += 1;
        }
    }
    console.log(nums);
    return counter;
}
;
// let nums: number[] = [3,6,1,2,5], k = 2;
//let nums: number[] = [1,2,3], k = 1;
//let nums: number[] = [2,2,4,5], k = 0;
// let nums: number[] = [3,1,3,4,2], k = 0;
// let result: number = partitionArray(nums, k);
// console.log(`The result is ${result}`);
function spiralOrder(matrix) {
    var rows = matrix.length;
    var columns = matrix[0].length;
    for (var i = 0; i < rows; i++)
        console.log(rows, columns);
    return [];
}
;
// const matrix: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
// let result: number[] = spiralOrder(matrix);
// console.log(`The result is ${result}`);
function digitSum(s, k) {
    if (s.length <= k)
        return s;
    var result;
    while (s.length > k) {
        var num = 0;
        result = "";
        for (var i = 0; i < s.length; i++) {
            if ((i % k == 0 && i / k != 0)) {
                result += num.toString();
                num = 0;
            }
            num += Number(s[i]);
        }
        result += num.toString();
        s = result;
    }
    return result;
}
;
//const s: string = "11111222223", k = 3;
// const s: string = "00000000", k = 3
// let result: string = digitSum(s, k);
// console.log(`The result is ${result}`);
function largestLocal(grid) {
    var rows = grid.length;
    var cols = grid[0].length;
    var result = __spreadArray([], Array(rows - 2), true).map(function (row) { return __spreadArray([], Array(cols - 2), true).map(function (x) { return 0; }); });
    var xstride = 3;
    var ystride = 3;
    function allocate(x, y) {
        var tmp = __spreadArray([], Array(3), true).map(function (row) { return __spreadArray([], Array(3), true).map(function (x) { return 0; }); });
        for (var i = 0; i < xstride; i++)
            for (var j = 0; j < ystride; j++) {
                tmp[i][j] = grid[x + i][y + j];
            }
        return tmp;
    }
    function findMax(output) {
        var r = output.length;
        var c = output[0].length;
        var maxRows = [];
        for (var i = 0; i < r; i++) {
            maxRows.push(Math.max.apply(Math, output[i]));
        }
        return Math.max.apply(Math, maxRows);
    }
    for (var i = 0; i < rows - 2; i++)
        for (var j = 0; j < cols - 2; j++) {
            var output = allocate(i, j);
            result[i][j] = findMax(output);
        }
    return result;
}
;
//const grid: number[][] = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]];
// const grid: number[][] = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]];
// const result: number[][] = largestLocal(grid);
// console.log(`The result is ${result}`);
function gameOfLife(board) {
    var _a;
    var rows = board.length;
    var cols = board[0].length;
    var becomeZeros = [];
    var becomeOnes = [];
    function checkBoundary(row, col) {
        var zeros = 0;
        var ones = 0;
        if (row - 1 > -1)
            board[row - 1][col] == 0 ? zeros++ : ones++;
        if (row + 1 < rows)
            board[row + 1][col] == 0 ? zeros++ : ones++;
        if (col - 1 > -1)
            board[row][col - 1] == 0 ? zeros++ : ones++;
        if (col + 1 < cols)
            board[row][col + 1] == 0 ? zeros++ : ones++;
        if (row - 1 > -1 && col - 1 > -1)
            board[row - 1][col - 1] == 0 ? zeros++ : ones++;
        if (row - 1 > -1 && col + 1 < cols)
            board[row - 1][col + 1] == 0 ? zeros++ : ones++;
        if (row + 1 < rows && col - 1 > -1)
            board[row + 1][col - 1] == 0 ? zeros++ : ones++;
        if (row + 1 < rows && col + 1 < cols)
            board[row + 1][col + 1] == 0 ? zeros++ : ones++;
        return [zeros, ones];
    }
    var zeros = 0;
    var ones = 0;
    for (var i = 0; i < rows; i++)
        for (var j = 0; j < cols; j++) {
            _a = checkBoundary(i, j), zeros = _a[0], ones = _a[1];
            if (board[i][j] == 0 && (ones == 3)) {
                becomeOnes = __spreadArray(__spreadArray([], becomeOnes, true), [[i, j]], false);
            }
            if (board[i][j] == 1 && (ones < 2 || ones > 3)) {
                becomeZeros = __spreadArray(__spreadArray([], becomeZeros, true), [[i, j]], false);
            }
        }
    for (var _i = 0, becomeZeros_1 = becomeZeros; _i < becomeZeros_1.length; _i++) {
        var _b = becomeZeros_1[_i], i = _b[0], j = _b[1];
        board[i][j] = 0;
    }
    for (var _c = 0, becomeOnes_1 = becomeOnes; _c < becomeOnes_1.length; _c++) {
        var _d = becomeOnes_1[_c], i = _d[0], j = _d[1];
        board[i][j] = 1;
    }
}
;
//const board: number[][] = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
// const board = [[1,1],[1,0]]
// gameOfLife(board);
function equalPairs(grid) {
    var rows = grid.length;
    var hashMap = {};
    var counter = 0;
    for (var i = 0; i < rows; i++) {
        var j = void 0;
        for (j = 0; j < rows; j++)
            if (grid[i][j] != grid[j][i])
                break;
        if (j == rows)
            counter++;
    }
    return counter;
}
;
// const grid: number[][] = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];
// const result: number = equalPairs(grid);
// console.log(`The result is ${result}`);
function garbageCollection(garbage, travel) {
    var types = ['G', 'P', 'M'];
    var total = 0;
    function counter(str, key) {
        var count = 0;
        for (var j = 0; j < str.length; j++)
            if (key == str[j])
                count++;
        return count;
    }
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        var index = -1;
        for (var i = 0; i < garbage.length; i++) {
            if (garbage[i].includes(type)) {
                index = Math.max(index, i);
                total += counter(garbage[i], type);
            }
        }
        if (index > 0)
            for (var i = 0; i < index; i++)
                total += travel[i];
    }
    return total;
}
;
// const garbage: string[] = ["G","P","GP","GG"];
// const travel: number[] = [2,4,3];
//const garbage = ["MMM","PGM","GP"], travel = [3,10]
// const garbage = ["G","M"], travel = [1];
// const result: number = garbageCollection(garbage, travel);
// console.log(`The result is ${result}`);
function numberOfBeams(bank) {
    var total = 0;
    function counter(str, key) {
        var count = 0;
        for (var j = 0; j < str.length; j++)
            if (key == str[j])
                count++;
        return count;
    }
    for (var i = 0; i < bank.length; i++) {
        var a = 0;
        var b = 0;
        if (bank[i].includes('1'))
            a = counter(bank[i], '1');
        for (var j = i + 1; j < bank.length; j++)
            if (bank[j].includes('1')) {
                b = counter(bank[j], '1');
                break;
            }
        total += a * b;
    }
    return total;
}
;
// const bank: string[] = ["011001","000000","010100","001000"];
// const result: number = numberOfBeams(bank);
// console.log(`The result is ${result}`);
function numOfPairs(nums, target) {
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target)
                total++;
            if (nums[j] + nums[i] == target)
                total++;
        }
    }
    return total;
}
;
// const nums = ["777","7","77","77"];
// const target = "7777";
var nums = ["123", "4", "12", "34"];
var target = "1234";
var result = numOfPairs(nums, target);
console.log("The result is ".concat(result));
// export {};
