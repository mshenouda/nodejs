// function searchRange(nums: number[], target: number): number[] {

//     let result: number[] = [];
//     let left: number = 0;
//     let right: number = nums.length-1;
//     while(result.length < 2) {
//         let mid: number = Math.floor((left + right)/ 2);
//         if (nums[mid] == target) {
//             result.push(mid);
//         }
//         else if ( nums[mid] < target) 
//             left = mid + 1;
//         else if ( nums[mid] > target)
//             right = mid - 1;
//     };
//     return result;
// };

// const height = [1,8,6,2,5,4,8,3,7]
// const result: number = maxArea(height);
// console.log(`Result is ${result}`);

//const citations = [3,0,6,1,5];
// const citations = [1,3,1];
// const citations = [100]
//const citations = [0, 1];
// const result: number = hIndex(citations);
// console.log(`Result is ${result}`);

// const nums = [5,7,7,8,8,10], target = 8
// const result: number[] = searchRange(nums, target);
// console.log(`Result is ${result}`);

function canPartition(nums: number[]): boolean {
    if (nums.length < 2)
        return false;
    let sum: number = nums.reduce((a, b)=> a+b, 0);
    if (sum % 2 == 1)
        return false;
    sum = sum / 2;
    const rows = nums.length + 1;
    const columns = sum + 1;
    console.log(rows, columns);
    let dp: boolean[][] = [...Array(rows)].map(row => [...Array(columns)].map(x => false));
    
    dp[0][0] = true; 
    for(let i=1; i< rows; i++)
        dp[i][0] = false;
    
    for(let i=1; i<columns; i++) 
        dp[0][i] = false;
   
    for(let i=1; i<rows; i++) {
        for(let j=1; j<columns; j++)
        {
            if (j < nums[i-1])
                dp[i][j] = dp[i-1][j];
            else
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]    
        }
    }
    console.log(...dp);
    return dp[rows-1][columns-1];
};

// const nums: number[] = [1,5,11,5];
// const result: boolean = canPartition(nums);
// console.log(`Result is ${result}`);

function convertStr2Num(nums: string) {
    const num: number =  Number(nums);
    // console.log("Num", num)
    return num;
}

// const s = "101023";
// const result: string[] = restoreIpAddresses(s);
// console.log(`Result is ${result}`);

function addSpaces(s: string, spaces: number[]): string {
    let result: string = "";
    let j: number = 0;
    for(let i=0; i< s.length; i++) {
        if (spaces[j] == i)
        {
            result += ' ';
            j++;            
        }
        result += s[i];
    }
    return result;
};
// const s = "LeetcodeHelpsMeLearn", spaces = [8,13,15];
// const s = "spacing", spaces = [0,1,2,3,4,5,6]
// const s = "icodeinpython", spaces = [1,5,7,9]
// const result: string = addSpaces(s, spaces);
// console.log(`Result is ${result}`);
function maxSubsequence(nums: number[], k: number): number[] {
    let sorted: any[] = nums.map((value, index) => {
        let obj: any = {};
        obj["index"] = index
        obj["value"] = value;
        return obj;
    }).sort((a, b)=> b.value - a.value);

    sorted.length = k

    const result = sorted.sort((a, b)=> a.index - b.index).map(x => x["value"]);
    return result;
};

// const  nums = [-1,-2,3,4], k = 3;
// const result: number[] = maxSubsequence(nums, k);
// console.log(`Result is ${result}`);
function specialArray(nums: number[]): number {
    let result: number = 0;
    nums.sort((a, b)=> a -b);
    const n: number = nums.length;
    let dp: number[] = [...Array(n)].map(x => 0);
    dp[0] = n;
    for(let i=0; i<=n; i++) {
        let j: number = n-1;
        let counter: number = 0;
        while(nums[j] >= i) {
            j--;
            counter++;
        }
        if ( counter == i)
            return i;
    }
    return -1;
};
// const nums = [3,5];
// const nums = [0,4,3,0,4];
// const nums = [0, 0];
// const result: number = specialArray(nums);
// console.log(`Result is ${result}`)

function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    arr2.sort((a, b)=> a -b);
    let counter: number =0;

    for(let num of arr1) {
        let flag: boolean = false;
        for(let v = num -d; v <= num + d; v++) {
            if (arr2.includes(v)) {
                flag = true;
                break;
            }
        }
        if (flag)
            counter++;
    }
    return arr1.length - counter;
};
// const arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;
// const arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3;
// const arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6;
// const result: number = findTheDistanceValue(arr1, arr2, d);
// console.log(`Result is ${result}`);
function longestPalindrome(s: string): number {

    const letters: any = new Set(s.split(""));
    let maxLength: number = 0;
    let maxOddLength: number = 0;
    for(let letter of letters) {
        const result = s.split("").map((e, i) => {if (e === letter) return e;}).filter(Boolean).length;
        const partners = Math.floor(result / 2)*2;
        maxLength += partners; 
        if (maxLength % 2 == 0 && result % 2 == 1)
            maxLength++; 
    }
    return maxLength;
};

function sumOfBeauties(nums: number[]): number {
    // const n: number = nums.length;   
    // let prefixSum = [...Array(n)].fill(0);
    // let suffixSum = [...Array(n)].fill(0);
    // prefixSum[0] = nums[0];
    // suffixSum[n-1] = nums[n-1];
    // for (let i = 1; i < n; i++)
    // prefixSum[i] = Math.max(nums[i], prefixSum[i - 1]);
    // for(let i = n-2; i > -1; i--)
    //     suffixSum[i] = Math.min(nums[i], suffixSum[i+1]);
   
    // console.log(prefixSum, suffixSum);
    return 0;
};
// const nums = [2,4,6,4];
// //const nums = [1,2,3];
// const result: number = sumOfBeauties(nums);
// console.log(`Result is ${result}`);
function maxOperations(nums: number[], k: number): number { 
    nums.sort((a, b) => a - b);
    const n: number = nums.length;
    let obj: any = {};
    for(const num of nums) {
        if(obj[num] == undefined)
            obj[num] = 1;
        else
            obj[num]++;
    }
    
    let result: number =  0;
    let visited: any = new Set();
    for(let i=0; i<Math.floor(n/2); i++) {
        if(obj[k-nums[i]] != undefined)
        {
            if (nums[i] == k/2 && !visited.has(nums[i])) {
                visited.add(nums[i]);
                result += Math.floor(obj[nums[i]]/2)
                continue;
            }
            if (!visited.has(nums[i]) && !visited.has(k-nums[i])) {
                result += Math.min(obj[nums[i]], obj[k-nums[i]]);
                visited.add(nums[i]);
                visited.add(k-nums[i]);
            }
        }    
    }
    return result; 
};

//const nums = [3,1,3,4,3], k = 6;
//const nums = [1,2,3,4], k = 5;
//const nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k =2;
// const result: number = maxOperations(nums, k);
// console.log(`Result is ${result}`);
function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {

    let maxDiff: number = 0;
    let index: number = 0;
    for(let i=0; i < nums1.length; i++)
    {
        let tmp: number = Math.abs(nums1[i]-nums2[i]); 
        if ( tmp > maxDiff) {
            maxDiff = tmp;
            index = i;
        }
    }
    if (maxDiff == 0) return 0;

    let minDiff: number = Infinity;
    let minIndex: number = 0;
    for(let i=0; i < nums1.length; i++) {
        if (i !== index) {
            let tmp: number = Math.abs(nums1[i]-nums2[index]);
            if (tmp < minDiff) {
                minDiff = tmp;
                minIndex = i;
            }
        }
    }

    nums1[index] = nums1[minIndex];
    const result: number = nums1.map((e, i)=> Math.abs(e-nums2[i])).reduce((a, b)=>a+b, 0);
    return result;
};

// const nums1: number[] = [1,7,5];
// const nums2: number[] = [2,3,5];
// const nums1: number[] = [2,4,6,8,10];
// const nums2: number[] = [2,4,6,8,10];
// const result: number = minAbsoluteSumDiff(nums1, nums2);
// console.log(`Result is ${result}`);

function findUnsortedSubarray(nums: number[]): number {
    let sorted: number[] = [...nums].sort((a, b)=> a -b);
    let first: any = null;
    let last: any = null;

    for(let i=0; i<nums.length; i++) {
        if (sorted[i] != nums[i] && first == null) {
            first = i;
            last = i;
        }
        if (sorted[i] != nums[i] && i > last)
            last = i;
    }
    if (!last) return 0;
    return last-first+1;
};

//const nums: number[] = [2,6,4,8,10,9,15];
// const nums: number[]  =[2,1];
// const result: number = findUnsortedSubarray(nums);
// console.log(`Result is ${result}`);
// const s: string = "011010";
// const minJump: number = 2;
// const maxJump: number = 3;
// const result: boolean = canReach(s, minJump, maxJump);
// console.log(`Result is ${result}`);

function multiply(num1: string, num2: string): string {
    let rows: number = Math.min(num1.split("").length, num2.split("").length);
    let result: number[][] = [...Array(rows)].map(row => [...Array(rows+1)].map(x => 0));
    
    // Multiply first
    let k: number= 0;
    for(let j=num2.length-1; j>-1; j--)
    {
        let carry: number = 0;
        for(let i=num1.length-1; i>-1; i--) {
            let tmp: number = Number(num2[j])*Number(num1[i]) + carry;
            let unit: number = tmp % 10;
            carry= Math.floor(tmp / 10);
            result[k][i+1] = unit;
        }
        if (carry)
            result[k][0] = 1;
        k++;
    }
    for(let i=0; i<result.length; i++) {
       result[i] = [...Array(result.length-i)].fill(0).concat(result[i].concat([...Array(i)].fill(0)));
    }

    // sum the final result
    let final: number[] = [...Array(result[0].length)].fill(0);
    let carry: number =0;
    let unit: number = 0;
    for(let j=result[0].length-1; j>-1; j--) { 
        let tmp: number = 0;
        for(let i=0; i<result.length; i++) {
            tmp = tmp + result[i][j];
        }
        tmp += + carry;
        unit = tmp % 10;
        carry = Math.floor(tmp/10);
        final[j] = unit;
    }

    let i=0;
    while(final[i] == 0) {
        final.shift();
        i++;
    }
    const resultStr: string = final.reduce((a, b)=> a +b, "");
    //console.log(result, final);
    return resultStr;
};
// const num1: string = "2";
// const num2: string = "3";
const num1 = "2";
const num2 = "3";
const result: string = multiply(num1, num2);
console.log(`Result is ${result}`);
export {};