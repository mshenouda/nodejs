function checkValid(matrix: number[][]): boolean {
    const rows: number = matrix.length;
    const cols: number = matrix[0].length;
    let tmpSet: any = new Set();
    for(let i=0; i<rows; i++) 
    {    
        tmpSet.clear();
        matrix[i].forEach(x => tmpSet.add(x));
        if (tmpSet.size < rows) return false;
    }
    
    for(let j=0; j<cols; j++) {
        tmpSet.clear();
        for(let i=0; i<rows; i++) {
            tmpSet.add(matrix[i][j]);
        }
        if (tmpSet.size < rows) return false; 
    }
    return true;
};
// const matrix: number[][] = [[1,1,1],[1,2,3],[1,2,3]];
//const matrix: number[][] = [[1,2,3],[3,1,2],[2,3,1]];
//const matrix: number[][] = [[4,4,3,5,2],[3,4,3,4,1],[2,2,2,1,3],[5,2,1,3,4],[1,2,1,2,5]];
// const matrix: number[][] = [[1,2,3],[2,1,2],[3,3,1]];
// const result: boolean = checkValid(matrix);
// console.log(`The result is ${result}`);


function shipWithinDays(weights: number[], days: number): number {
    const sum: number = weights.reduce((a, b)=> a + b, 0);
    let l: number = weights[0];
    let r: number = sum;
    let mid: number = 0;
    while (l < r) {
        mid = l + Math.floor((r-l) / 2);
        if (mid * days > sum)
            r = mid- 1;
        else
            l = mid + 1;
    }
    console.log(l, r, mid);
    return 0;
};
// const weights = [1,2,3,4,5,6,7,8,9,10], days = 5;
// const result: number = shipWithinDays(weights, days);
// console.log(`The result is ${result}`);
function minSubarray(nums: number[], p: number): number {
    let sum: number = nums.reduce((a, b)=> a + b, 0) % p;
    if (sum == 0) return 0;
    let running_sum: number = 0;
    let dict: any = {0: -1};
    let rem: number = 0;
    let len: number = nums.length;
    for(let i=0; i<nums.length; i++) {
        running_sum += nums[i];
        rem = (running_sum - sum)%p;
        if (dict[rem]) {
            len = Math.min(len, i-dict[rem]);
        }
        dict = {...dict, [running_sum%p]: i};
    };
    console.log(dict, len);
    return (len<nums.length) ? len: -1;
}
// const nums: number[] = [3,1,4,2];
// const p: number = 6;
// const nums = [6,3,5,2], p = 9;
// // const nums = [1,2,3], p = 3;
// const result: number = minSubarray(nums, p);
// console.log(`The result is ${result}`);

function subarraySum(nums: number[], k: number): number {
    let hashMap: any = {};
    hashMap[0] = 1;
    let sum: number = 0;
    let count: number = 0;
    for(let i=0; i < nums.length; i++) {
        sum += nums[i];
        if (hashMap[sum-k])
            count += hashMap[sum-k];

        if (hashMap[sum] == undefined)
            hashMap[sum] = 0;

        hashMap[sum]++;
    }
    return count;
};
// const nums: number[] = [1,1,1];
// const k = 2;
// const result: number = subarraySum(nums, k);
// console.log(`The result is ${result}`);
function checkSubarraySum(nums: number[], k: number): boolean {
    let sum: number = 0;
    let hashMap: any = {};
    hashMap[0] = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        if(hashMap[sum % k] == undefined)
            hashMap[sum % k] = i + 1;
        else if (hashMap[sum % k] < i)
            return true;
    }
    return false;
};
// const nums: number[] = [23,2,4,6,7], k = 6;
// const result: boolean = checkSubarraySum(nums, k);
// console.log(`The result is ${result}`);
function countPairs(deliciousness: number[]): number {
    let hashMap: any = {};
    let count: number = 0;
    let mod = 10**9 + 7;
    for(let j=0; j < deliciousness.length; j++) {
        for(let i=0; i < 22; i++) {
            let num: number = 2**i;
            let rem = num-deliciousness[j];
            if (hashMap[rem]) {
                count += hashMap[rem];
                count = count % mod;    
            }  
        }
        if (hashMap[deliciousness[j]] == undefined)
            hashMap[deliciousness[j]] = 0;
        hashMap[deliciousness[j]]++;
    }
    return count % mod;
};
//const deliciousness: number[] = [1,3,5,7,9];
//const deliciousness: number[] = [1,1,1,3,3,3,7];
//const deliciousness: number[] = [149,107,1,63,0,1,6867,1325,5611,2581,39,89,46,18,12,20,22,234];
// const deliciousness: number[] = [1048576,1048576];
// const result: number = countPairs(deliciousness);
// console.log(`The result is ${result}`);
function minimumAverageDifference(nums: number[]): number {
   
    let n: number = nums.length;
    let prefixSum: number[] = [...nums];
    let suffixSum: number[] = [...nums];
    let sum: number = nums.reduce((a, b)=> a + b, 0);
       
    for(let i=1; i<nums.length; i++)
        prefixSum[i] = prefixSum[i] + prefixSum[i-1];
    
    let running_sum: number = 0;
    for(let i=0; i<nums.length; i++)
    {   running_sum = running_sum + nums[i];
        suffixSum[i] = sum - running_sum;
    }

    let minAvg: number = Infinity;
    let leastIndex: number = 0;
    for(let i=0; i<n; i++) {
        let least: number = Math.floor(prefixSum[i]/(i+1));
        let highest: number = Math.floor(suffixSum[i]/(n-i-1)); 
        let tmp: number =  Math.abs(least-highest); 
        if (tmp < minAvg) {
            minAvg = tmp;
            leastIndex = i;
        }
    }
    console.log(prefixSum, suffixSum, sum, minAvg, leastIndex);
    if (Math.floor(sum/n) < minAvg)
        return n-1;
    return leastIndex;
};
// const nums: number[] = [2,5,3,9,5,3];
//const nums: number[] = [4,2,0];
// const nums: number[] = [0,3]
// const result: number = minimumAverageDifference(nums);
// console.log(`The result is ${result}`);

function multiply(num1: string, num2: string): string {

    if(num1 == "0" || num2 == "0") return "0";

    let rows: number = Math.min(num1.split("").length, num2.split("").length);
    let result: number[][] = [...Array(rows)].map(row => [...Array(rows)].map(x => 0));
    
    // find shorter and longer operands
    let longer: number =num1.length;
    let shorter: number = num2.length;
    let first: string = num1;
    let second: string = num2;
    
    if (num2.length > num1.length) {
        longer = num2.length;
        shorter = num1.length;
        first = num2;
        second = num1;
    }

    // Multiply first
    let k: number= 0;
    for(let j=shorter-1; j>-1; j--)
    {
        let carry: number = 0;
        for(let i=longer-1; i>-1; i--) {
            let tmp: number = Number(second[j])*Number(first[i]) + carry;
            let unit: number = tmp % 10;
            carry= Math.floor(tmp / 10);
            result[k][i+1] = unit;
        }
        if (carry)
            result[k][0] = carry;
        k++;
    }

    // shift left and right
    let numZeros = result.length;
    for(let i=0; i<numZeros; i++) {
       result[i] = [...Array(numZeros-i).fill(0), ...result[i], ...Array(i).fill(0)];
    }

    // sum the final result
    let final: number[] = [...Array(result[0].length)].fill(0);
    let carry: number =0;
    let unit: number = 0;
    let len = result[0].length;
    for(let j=len-1; j>-1; j--) { 
        let tmp: number = 0;
        for(let i=0; i<result.length; i++) {
            tmp = tmp + result[i][j] 
        }
        tmp +=  carry;
        carry = Math.floor(tmp/10);
        unit = tmp % 10;
        final[j] = unit;
    }

    //remove excess left zeros
    let i=0;
    while(final[i] == 0) {
        final.shift();
    }
    //conver to string
    const resultStr: string = final.reduce((a, b)=> a +b, "");
    return resultStr;
};
// const num1 = "999";
// const num2 = "999";
// const num1 = "99";
// const num2 = "9";
// const result: string = multiply(num1, num2);
// console.log(`The result is ${result}`);

function minimumNumbers(num: number, k: number): number {
    if (num ==0 && k == 0) return 1;
    if (num == 0) return 0;
    if (k == 0 && (num % 10 > 0)) return -1;
    
    let result: number[][] = [];
    let dp: any = {};
    function dfs(sum: number, tmp: number[]): number { 
        if (dp[sum]) return dp[sum];
        let minLen: number = Infinity;
        for(let i=(k==0)?10:0; i<num+1; i+=10) {
            if (sum + i > num)
                break;
            tmp = [...tmp,i];
            sum += i;
            minLen = dfs(sum, tmp);
            if (sum == num) {
                result = [...result, [...tmp]];
            }
            dp[sum] = Math.min(minLen, tmp.length);
            sum -= i;
        }
        return minLen;
    }
    // call the recursive function
    dfs(0, []);

    if (result.length == 0) return -1;

    let minLen = Infinity;
    // unique results for counting
    for(let val of result) 
        minLen = Math.min(minLen, val.length); 
    
    return minLen;   
};
//const num = 58, k = 9;
//const num = 4, k = 0;
//const num = 10, k = 0;
// const num = 10000, k = 0;
// const result: number = minimumNumbers(num, k);
// console.log(`The result is ${result}`);
function spiralOrder(matrix: number[][]): number[] {
   
    let matrixObjs = matrix.map((row)=> row.map(x => {
        let obj: any = {};
        obj["value"] = x;
        obj["visited"] = false;
        return obj;
    }));
    
    enum cardinalDirections {LEFT, DOWN, RIGHT, UP};
    let rows: number = matrix.length;
    let cols: number = matrix[0].length;

    
    let counter: number =0;
    let direction: number = 0;

    let maxCount = rows*cols;
    
    let left: number = 0;
    let right: number = cols;
    let up: number = 0;
    let down: number = rows;
    
    let row: number = 0;
    var j: number = 0;
    let result: number[] = [];

    while(counter < maxCount) {
        if (direction == cardinalDirections.LEFT)
        {   for(j=left; j<right; j++)
                if (!matrixObjs[row][j].visited) {
                    result = [...result, matrixObjs[row][j].value];
                    counter++;
                    matrixObjs[row][j].visited = true;
                }
            row = j-1;
        }
        else if (direction == cardinalDirections.DOWN)
        {
            for(j=up; j<down; j++) {
                if (!matrixObjs[j][row].visited) {
                    counter++;
                    result = [...result, matrixObjs[j][row].value];
                    matrixObjs[j][row].visited = true; 
                }
            }
            row = j - 1;
        }
        else if (direction == cardinalDirections.RIGHT)
        {
            for(j=right-1; j>(left-1); j--) 
                if(! matrixObjs[row][j].visited) {
                    counter++;
                    result = [...result, matrixObjs[row][j].value];
                    matrixObjs[row][j].visited = true;
                }
            row = j+1;
        }
        else if (direction == cardinalDirections.UP)
        {
            for(j=down-1; j>up-1; j--) 
                if(! matrixObjs[j][row].visited) {
                    counter++;
                    result = [...result, matrixObjs[j][row].value];
                    matrixObjs[j][row].visited = true;
                }
            left++;
            up++;
            right--;
            down--;
            row = up;
        }
        direction= (direction+1)%4;
    }
    return result;
};
//const matrix: number[][] = [[1,2,3],[4,5,6],[7,8,9]];
//const matrix: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// const matrix: number[][] = [[1,2],[5,6],[9,10]]
// const result: number[] = spiralOrder(matrix);
// console.log(`The results are ${result}`);
function generateMatrix(n: number): number[][] {
    let startingRow: number = 0;
    let endingRow: number= n-1;
    let startingCol: number = 0;
    let endingCol: number = n-1;
    
    let count: number = 1;
    let total: number = n**2;
    let result: number[][] = [...Array(n)].map(row => [...Array(n)].map(x => 0));
    while (count <= total) {
        for(let i=startingCol; i<=endingCol; i++)
            result[startingRow][i] = count++;
        startingRow++;

        for(let i=startingRow; i<=endingRow; i++)
            result[i][endingCol] = count++;
        endingCol--;

        for(let i=endingCol; i>=startingCol; i--)
            result[endingRow][i] = count++;
        endingRow--;

        for(let i=endingRow; i>=startingRow; i--)
            result[i][startingCol] = count++;
        startingCol++;
    }   
    return result;
};
// const n: number = 3;
// const result: number[][] = generateMatrix(n);
// console.log(`The results are ${result}`);

function rotate(matrix: number[][]): void {
    const n: number = matrix.length;
    let one: number = 0;
    let two: number =0;
    let index: number = 0;
    let maxCount: number = Math.floor(n / 2);
    let counter: number = 0;

    while (index < maxCount) { 
        let limit: number = (n-1)-index;
        for(let i=0; i<(n-1)-counter; i++) {
            one =  matrix[index][index+i];
            
            two = matrix[index+i][limit];
            matrix[index+i][limit] = one;

            one = matrix[limit][limit-i];
            matrix[limit][limit-i] = two;
            
            two = matrix[limit-i][index];
            matrix[limit-i][index] = one;
            
            matrix[index][index+i] = two;
        }
        index++;
        counter+=2;
    };
    console.log(matrix);
};
//const matrix: number[][] = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// const matrix: number[][] =  [[1,2,3],[4,5,6],[7,8,9]];
// rotate(matrix);
function canWinNim(n: number): boolean {
    let dp: any = {};  
    dp["my,1"] = true;
    dp["my,2"] = true;
    dp["my,3"] = true;
    dp["op,1"] = false;
    dp["op,2"] = false;
    dp["op,3"] = false;
    
    function dfs(n: number, turn: number): boolean {
        let key: string = turn % 2 == 0 ? "my," : "op,";
        key += n.toString();
        if (dp[key] !== undefined)
            return dp[key]; 
        let result= false;
        for(let i=1; i<=3; i++) {   
            if (n-i>-1)
                result = result || dfs(n-i, turn+1);
        }
        dp[key] = result;
        return result; 
    }
    const result: boolean = dfs(n, 0); 
    console.log(dp);
    return result;
};
// const n: number = 8;
// const result: boolean= canWinNim(n);
// console.log(`The result is ${result}`);

function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {
    let cost: number = 0;
    
    function tryToppings(minCost: number, cost: number, toppingCost: number): number[] {
        for(let i=0; i < 2; i++) {
            cost += toppingCost;
            if (target >= cost)
                minCost = Math.min(minCost, target-cost);
        }
        return [minCost, cost];
    }

    let minCost = Infinity;
    let beforeCost: number = 0;
    let afterCost: number = 0;

    for(let i of baseCosts) {
        beforeCost = i;
        if (target >= beforeCost)
            minCost = Math.min(minCost, target-beforeCost);
        for(let j=0; j<toppingCosts.length; j++) {
            [minCost, afterCost] = tryToppings(minCost, beforeCost, toppingCosts[j]);
            for(let k=j+1; k<toppingCosts.length; k++) {
                [minCost, ] = tryToppings(minCost, beforeCost, toppingCosts[k]);
                [minCost, ] = tryToppings(minCost, afterCost, toppingCosts[k]);
            }
        }
    }
    console.log(minCost, target-minCost);
    return 0;
};
//const baseCosts = [2,3], toppingCosts = [4,5,100], target = 18;
//const baseCosts = [1,7], toppingCosts = [3,4], target = 10;
//const baseCosts = [3,10], toppingCosts = [2,5], target = 9;
// const result: number = closestCost(baseCosts, toppingCosts, target);
// console.log(`The result is ${result}`);
function stoneGameIX(stones: number[]): boolean {
    let sum: number = stones.reduce((a, b)=> a + b, 0);
    let count: number = stones.length;
    // odd count Bob wins
    if (count % 2 == 1) return false;
    if (sum % 3 == 0) return true;
    return false;
};
// const stones: number[] = [5,1,2,4,3];
// const result: boolean = stoneGameIX(stones);
// console.log(`The result is ${result}`);

function stoneGame(piles: number[]): boolean {
    return true;
};
// const piles: number[] = [5,3,4,5];
// const result: boolean = stoneGame(piles);
// console.log(`The result is ${result}`);

function search(nums: number[], target: number): boolean {
    let n : number = nums.length;
    let l: number = 0;
    let r: number = nums.length-1;
    while (l < r)
    {
        let mid = l + Math.floor((r-l) / 2);
        if (nums[mid] == target) return true;
        if (target > nums[mid])
            if(target > nums[0])
                r = mid - 1;
            else 
                l = mid + 1;
        else
            if (target < nums[n-1])
                l = mid + 1;
            else
                r = mid - 1;
    };
    return false;
};
//const nums = [2,5,6,0,0,1,2], target = 0;
//const nums = [2,5,6,0,0,1,2], target = 3;
// const nums = [1,0,1,1,1], target = 0;
// const result: boolean = search(nums, target);
// console.log(`The result is ${result}`);
export {};