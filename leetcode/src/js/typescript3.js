"use strict";
function getConcatenation(nums) {
    return nums.concat(nums);
}
;
// let nums: number[] = [1,2,1];
// let result: number[] = getConcatenation(nums);
// console.log(`The result is ${result}`);
function partitionArray(nums, k) {
    nums.sort((a, b) => a - b);
    let counter = 1;
    let smallest = nums[0];
    for (let i = 0; i < nums.length; i++) {
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
    let rows = matrix.length;
    let columns = matrix[0].length;
    for (let i = 0; i < rows; i++)
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
    let result;
    while (s.length > k) {
        let num = 0;
        result = "";
        for (let i = 0; i < s.length; i++) {
            if ((i % k == 0 && i / k != 0)) {
                result += num.toString();
                num = 0;
            }
            num += Number(s[i]);
        }
        result += num.toString();
        s = result;
    }
    //return result;
    return "";
}
;
//const s: string = "11111222223", k = 3;
// const s: string = "00000000", k = 3
// let result: string = digitSum(s, k);
// console.log(`The result is ${result}`);
function largestLocal(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let result = [...Array(rows - 2)].map(row => [...Array(cols - 2)].map(x => 0));
    let xstride = 3;
    let ystride = 3;
    function allocate(x, y) {
        let tmp = [...Array(3)].map(row => [...Array(3)].map(x => 0));
        for (let i = 0; i < xstride; i++)
            for (let j = 0; j < ystride; j++) {
                tmp[i][j] = grid[x + i][y + j];
            }
        return tmp;
    }
    function findMax(output) {
        let r = output.length;
        let c = output[0].length;
        let maxRows = [];
        for (let i = 0; i < r; i++) {
            maxRows.push(Math.max(...output[i]));
        }
        return Math.max(...maxRows);
    }
    for (let i = 0; i < rows - 2; i++)
        for (let j = 0; j < cols - 2; j++) {
            let output = allocate(i, j);
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
    let rows = board.length;
    let cols = board[0].length;
    let becomeZeros = [];
    let becomeOnes = [];
    function checkBoundary(row, col) {
        let zeros = 0;
        let ones = 0;
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
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++) {
            [zeros, ones] = checkBoundary(i, j);
            if (board[i][j] == 0 && (ones == 3)) {
                becomeOnes = [...becomeOnes, [i, j]];
            }
            if (board[i][j] == 1 && (ones < 2 || ones > 3)) {
                becomeZeros = [...becomeZeros, [i, j]];
            }
        }
    for (let [i, j] of becomeZeros)
        board[i][j] = 0;
    for (let [i, j] of becomeOnes)
        board[i][j] = 1;
}
;
//const board: number[][] = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
// const board = [[1,1],[1,0]]
// gameOfLife(board);
function equalPairs(grid) {
    let rows = grid.length;
    let hashMap = {};
    let counter = 0;
    for (let i = 0; i < rows; i++) {
        let j;
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
    let types = ['G', 'P', 'M'];
    let total = 0;
    function counter(str, key) {
        let count = 0;
        for (let j = 0; j < str.length; j++)
            if (key == str[j])
                count++;
        return count;
    }
    for (let type of types) {
        let index = -1;
        for (let i = 0; i < garbage.length; i++) {
            if (garbage[i].includes(type)) {
                index = Math.max(index, i);
                total += counter(garbage[i], type);
            }
        }
        if (index > 0)
            for (let i = 0; i < index; i++)
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
    let total = 0;
    function counter(str, key) {
        let count = 0;
        for (let j = 0; j < str.length; j++)
            if (key == str[j])
                count++;
        return count;
    }
    for (let i = 0; i < bank.length; i++) {
        let a = 0;
        let b = 0;
        if (bank[i].includes('1'))
            a = counter(bank[i], '1');
        for (let j = i + 1; j < bank.length; j++)
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
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
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
// const nums: string[] = ["123","4","12","34"];
// const target = "1234";
// const result: number = numOfPairs(nums, target);
// console.log(`The result is ${result}`);
// export {};
