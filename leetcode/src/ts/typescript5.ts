function circularPermutation(n: number, start: number): number[] {

    function num2bits(num: number) {
        let ctr: number = 0;
        let s: number[] = [];
        while (num >= 0 && ctr < n) {
            const rem = num % 2;
            num = Math.floor(num/2);
            s = [...s, rem];
            ctr++;
        }
        s = s.reverse();
        return s.join("");
    }
    
    let dp: string[] = [];
    function reverseBits(bits: string, i: number) {
        let tmp: string[] = bits.split(""); 

        tmp[i] = tmp[i] == '0'?'1':'0';
        const s: string = tmp.join("");
        return s;
    } 

    function compareBits(x: string, y: string) {
        let errors: number = 0;
        for(let i=0; i<x.length; i++) {
            if (x[i] !== y[i])
                ++errors;
                if (errors > 1)
                    return false;
        }
        return true;
    }

    function dfs(bits: string) {
        let flag: boolean = false;
        while (dp.length < 2**n){
            for(let i=0; i<bits.length; i++) {
                const tmp: string = reverseBits(bits, i);
                if (!dp.includes(tmp)) {
                    if (!flag)
                        flag = true;
                    dp.push(tmp);
                    dfs(tmp);
                }        
            }
            if (!flag)
                dp.pop();
            let y: string = "";
            if (dp[n**2-1] != undefined) {
                y = dp[n**2-1];
                if (!compareBits(dp[0], y))
                    dp.pop();
            }
        }    
    }

    let bits: string = num2bits(start);
    dp.push(num2bits(start));
    dfs(bits);

    const result: number[] = dp.map((value: string)=> {
        let tmp: number =0;
        for(let j=value.length-1, k=0; j>-1; j--, k++) {
            tmp += (2**k)*Number(value[j]);
        }
        return tmp;
    });
    
    return result;  
};

// const n: number = 4, start = 14;
// const result: number[] = circularPermutation(n, start);
// console.log(`The result is ${result}`);

function getAverages(nums: number[], k: number): number[] {
    let result: number[] = nums.map((num)=> -1);
    let sum = nums.filter((val: number, index: number)=>index <k).reduce((prev: number, curr: number)=> prev+curr, 0);
    let count: number = k;
    
    for(let i=0; i<nums.length; i++) {
        let flag: boolean = false;
        if (i-k>0) {
            sum -= nums[i-k-1];
            count -= 1;
        }
        if (i-k<0) 
          flag = true;

        if (i+k<nums.length) {
            sum += nums[i+k]; 
            count += 1;
        } else {
            flag = true;
        }
        if (flag)
            continue;

        result[i] = Math.floor(sum/count);
    }
    return result;
};

//const nums: number[] = [7,4,3,9,1,8,5,2,6], k = 3;
// const nums = [100000], k = 0;
// const nums = [8], k = 100000
// const result: number[] = getAverages(nums, k);
// console.log(`The result is ${result}`);

function getMaxLen(nums: number[]): number {
    
    let maxLen = 1;
    let maxResult = 0;
    let lastPositive: number= -1;

    let dp: number[] = [...Array(nums.length+1)].fill(0);
    for(let i=0; i<nums.length; i++) {
        if (nums[i] > 0) 
            dp[i]=dp[i-1]+1;
        

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
};
//const nums: number[] = [1,-2,-3,4];
// const nums: number[] = [0,1,-2,-3,-4]
// const result: number = getMaxLen(nums);
// console.log(`The result is ${result}`);

function maxSubarraySumCircular(nums: number[]): number {
    let localMax: number = nums[0];
    let globalMax: number = nums[0];
    let n: number = nums.length;

    let i: number = 1;
    let flag: boolean = false;
    while (true) 
    {
        localMax = Math.max(nums[i], localMax + nums[i]);
        globalMax = Math.max(globalMax, localMax);
        i++;
        if (i <= n) {
            if (flag && i < n)
                break;
            i = i%n;
            flag = true;
        }
    }
    return globalMax;
};

//const nums: number[] = [1,-2,3,-2];
//const nums: number[] = [5,-3,5];
//const nums: number[] = [-3,-2,-3];
//const result: number = maxSubarraySumCircular(nums);
//console.log(`The result is ${result}`);

function maxResult(nums: number[], k: number): number {
    let n: number = nums.length;
    let dp: number[] = new Array(n+1).fill(1);
    for(let i=0; i < n; i++) {
        
    }
    return 0;
};
// const nums: number[] = [1,-1,-2,4,-7,3], k = 2;
// const result: number = maxResult(nums, k);
// console.log(`The result is ${result}`);
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    
    let maxLenght: number = 0;
    let s: any = new Set();
    let count: number = 0;
    let result: number[] = A.map((each: number)=> 0);
    for(let i=0; i<A.length; i++) {
        count+=2;
        s.add(A[i]);
        s.add(B[i]);
        result[i] = count - s.size;
    }
    console.log(result);
    return result;
};
// const A: number[] = [1,3,2,4];
// const B: number[] = [3,1,2,4];
// const A: number[] = [2,3,1];
// const B: number[] = [3,1,2];
// const result: number[] = findThePrefixCommonArray(A, B);
// console.log(`The result is ${result}`);

function onesMinusZeros(grid: number[][]): number[][] {
    let rows: number = grid.length;
    let columns: number = grid[0].length;
    
    let result: number[][] = grid.map((row)=>row.map((column)=> 0));
    let rowsOnes: number[] = grid.map((row)=>0);
    let rowsZeros: number[] = grid.map((row)=>0);
    let colsOnes: number[] = [...Array(columns)].fill(0);
    let colsZeros: number[] = [...Array(columns)].fill(0);

    for(let i=0; i < grid.length; i++) {
        rowsOnes[i] = grid[i].reduce((a: number, b: number)=> a + b, 0);
        rowsZeros[i] = grid[i].length - rowsOnes[i];
    }

    for(let i=0; i<columns; i++) {
        let ones: number = 0;
        let zeros: number = 0;
        for(let j=0; j<rows; j++) {
            grid[j][i] == 0 ? ++zeros : ++ones;
        }
        colsOnes[i] = ones;
        colsZeros[i] = zeros;
    }

    for(let i=0; i < rows; i++) {
        for(let j=0; j < columns; j++) {
            result[i][j] = rowsOnes[i] + colsOnes[j] - rowsZeros[i] - colsZeros[j]; 
        }
    }
    return result;
};
// const grid: number[][] = [[0,1,1],[1,0,1],[0,0,1]];
// const result: number[][] = onesMinusZeros(grid);
// console.log(`The result is ${result}`);
function maxSum(grid: number[][]): number {
    let rows: number = grid.length;
    let columns: number = grid[0].length;
    let hourGlass: number[][] = [[1,1,1],[0,1,0],[1,1,1]];
    let rowsHourGlass: number = hourGlass.length;
    let colsHourGlass: number = hourGlass[0].length;

    let maxResult: number = 0;
    for(let i=0; i<rows; i++) {
        if (i + rowsHourGlass > rows) 
            break;
        for(let j=0; j<columns; j++) {
            if (j + colsHourGlass > columns)
                break; 
            let sum: number = 0;
            for(let u: number =0; u < 3; u++) {
                for(let v: number=0; v< 3; v++) {
                    sum += grid[i+u][j+v] * hourGlass[u][v]
                }
            }
            maxResult = Math.max(maxResult, sum);            
        }
    }
    console.log(maxResult);
    return maxResult;
};
// const grid: number[][] = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]];
// const grid: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
// const result: number = maxSum(grid);
// console.log(`The result is ${result}`);

function findMaxFish(grid: number[][]): number {
    const rows: number = grid.length;
    const columns: number = grid[0].length;
    let maxResult: number = 0;
    let visited: boolean[][] = grid.map(row=> row.map(column=>false));

    
    function dfs(row: number, column: number): number {
        if (row < 0 || row >= rows || column < 0 || column >= columns)
            return 0;
        if (visited[row][column])
            return 0;
        
        visited[row][column] = true;
        if (grid[row][column] == 0)
            return 0;

        let result: number = grid[row][column];
        result += dfs(row-1, column);
        result += dfs(row+1, column);
        result += dfs(row, column-1);
        result += dfs(row, column+1);
        return result;
    }

    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            if(grid[i][j] == 0)
                continue;
            const count: number = dfs(i, j);
            maxResult = Math.max(maxResult, count);
        }
    }
    return maxResult;
};
//const grid: number[][] = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]];
// const grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
// const result: number = findMaxFish(grid);
// console.log(`The result is ${result}`);

function arrayChange(nums: number[], operations: number[][]): number[] {

    const d: any | null = {};
    for(let i=0; i<nums.length; i++)
        d[nums[i]] = i;
    
    for(const operation of operations) {
        const [u, v] =  [...operation];
        d[v] = d[u];
        d[u] = null;
        //console.log(u, v);        
    }
    let result: number[] = nums.map(each =>0);
    let k: string;
    let v: any= 0; 
    for([k, v] of Object.entries(d)) {
        console.log(k, v);
        if (v != null)
            result[v] = Number(k);
    }   
    return result;
};
// const nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]];
// const result: number[] = arrayChange(nums, operations);
// console.log(`The result is ${result}`);

function reorderLogFiles(logs: string[]): string[] {
   
    let digitLogs: any[] = [];
    let textLogs: string[][] = [];

    for(const log of logs) {
        const [id, ...rest]: string[] = log.split(' ');
        if (isNaN(Number(rest[0]))) {
            textLogs.push([id, rest.join(' ')]);
        } else {
            digitLogs.push(log);
        }
    }
    textLogs.sort((a: string[], b: string[])=> {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        if (a[1] == b[1]) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        }
        return 0;
    });
    
    const texts: string[] = textLogs.map(log=> log.join(' '));
    return [...texts, ...digitLogs];
    
};
// const logs: string[] = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// const result: string[] = reorderLogFiles(logs);
// console.log(`The result is ${result}`);

// function findBall(grid: number[][]): number[] {

// };
function findPrefixScore(nums: number[]): number[] {
    const n: number = nums.length;
    let result: number[] = [...Array(n+1)].fill(0);
    let maxResult: number = 0;
    for(let i=0; i<nums.length; i++) {
       maxResult = Math.max(nums[i], maxResult);
       result[i+1] = result[i] + maxResult + nums[i];
    }
    result = result.slice(1);
    return result;
};
// const nums: number[] = [2,3,7,5,10];
// const result: number[] = findPrefixScore(nums);
// console.log(`The result is ${result}`);

function findOriginalArray(changed: number[]): number[] {
    const n: number = changed.length;
    if (n % 2 == 1) return [];
    changed.sort((a: number, b: number)=> a - b);
    let result: number[] = [];
    let d: any = {};
    let counter: number = 0;
    for(let i=0; i<n; i++) {
        if (changed[i] == 0) {
            ++counter;
            continue;
        }
        let value: number = Number(0.5*changed[i]);
        if (d[value] != undefined)
            d[value] = changed[i];
        else
            d[changed[i]] = -1; 
    }

    if (counter % 2 == 1)
        return [];
    result = [...Array(counter / 2)].fill(0);
    for(const key of Object.keys(d)) {
        if (d[key] == -1)
            return [];
        result = [...result, Number(key)];
    }
    return result;
};
//const changed: number[] = [0,0,1,3,4,2,6,8];
//const changed: number[] = [1,3,4,2,6,8];
//const changed: number[] = [6,3,0,1];
//const changed: number[] = [5,0];
//const changed: number[] = [0,0,0,0];
//const changed: number[] = [3,3,3,3];
// const changed: number[] = [2,1,2,4,2,4];
// const result: number[] = findOriginalArray(changed);
// console.log(`The result is ${result}`);
function numEnclaves(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    const visited: boolean[][] = grid.map(row=>row.map(column=>false));
    let flag: boolean = false;

    function dfs(row: number, column: number): number {
        if(row<0 || row > m-1 || column <0 || column > n-1) return 0;
        if (visited[row][column]) return 0;
        visited[row][column] = true;
        if (grid[row][column] == 0) return 0;

        if(row == 0 || row == m-1 || column  == 0 || column == n-1){
            flag=false;
        }
        
        let result: number = 1;
        result += dfs(row-1, column);
        result += dfs(row+1, column);
        result += dfs(row, column-1);
        result += dfs(row, column+1);
        return result;
    }

    let result: number = 0 ;
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; ++j) {
            if (grid[i][j] == 1) {
                flag = true;
                const tmp: number = dfs(i, j);
                if (flag) {
                    result += tmp;
                }
                console.log(tmp, flag);
            }
        }
    }
    return result;
};
//const grid: number[][] = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
//const grid: number[][] = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];
// const grid: number[][] = [[0,0,0,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,1],[0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,1,1,1,1,1,0,0,1,0],[0,0,1,0,1,1,1,1,0,1],[0,1,1,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,1,0,1],[1,0,1,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1]];
// const result: number = numEnclaves(grid);
// console.log(`The result is ${result}`);

function findMatrix(nums: number[]): number[][] {
    let d: any = {};
    for(const num of nums) {
        if (d[num] == undefined) 
            d[num] = 1;
        else
            d[num]++;
    }
    let items: number[][] = Object.keys(d).map(key=>[key, d[key]]);
    items.sort((a, b)=>b[1]-a[1]);

    const n: number = items[0][1];
    let results: number[][] = [...Array(n)].fill([]);
    for(let item of items) {
        let [key, val] = [...item];
        for(let i=0; i < results.length; i++) {
            if (val > 0) {
                results[i]= [...results[i], Number(key)];
                --val;
            }
        }
    }
    return results;
};
//const nums: number[] = [1,3,4,1,2,3,1];
// const nums: number[] = [1,2,3,4];
// const result: number[][] = findMatrix(nums);
// console.log(`The result is ${result}`);
function isEmpty(obj: Record<string, any> | any[]): boolean {
    const keys: string[] = Object.keys(obj);
    return keys.length == 0 ? true : false;
};
// const obj: any = {"x": 5, "y": 42};
// const result: boolean = isEmpty(obj);
// console.log(`The result is ${result}`);

class Calculator {
    num = 0;
    constructor(value : number) {  
        this.num = value;
    }
      
    add(value : number) : Calculator {
        this.num += value;
        return this;
    }
      
    subtract(value : number) : Calculator {
        this.num -= value;
        return this;
    }
      
    multiply(value : number) : Calculator {
        this.num *= value;
        return this;
    }   
  
    divide(value : number) : Calculator {
        this.num /= value;
        return this;
    }
      
    power(value : number) : Calculator {
        this.num **= value;
        return this;
    }
  
    getResult() : number {
        return this.num;
    }
  }

function join(arr1: any[], arr2: any[]): any[] {
    let result: any[] = [];
    let k1: string;
    let k2: string;
    let v1: any = {};
    let v2: any = {};
    for([k2, v2] of Object.entries(arr2))
    {   
        const id2 = v2.id;
        const index: any = arr1.indexOf(v2);
        for([k1, v1] of Object.entries(arr1))
        {
            const id1 = v1.id;
            if (id2 == id1)
            {
                arr1[index]= null;
            } 
        }   
    }
    result = [...arr1, ...arr2].sort((a: any, b: any)=> a.id - b.id);
    // for([k, v] of Object.entries(result))
    //     console.log(v);
    // for([k, v] of Object.entries(arr2))
    //     console.log(v);
    return result;
};
const arr1: any[] = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}]; 
const arr2: any[] = [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}];
const result: any = join(arr1, arr2);
console.log(`The result is ${result}`);
