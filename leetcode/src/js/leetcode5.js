"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function containsNearbyAlmostDuplicate(nums, k, t) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k)
                return true;
        }
    }
    return false;
}
;
// const nums: number[] = [1,5,9,1,5,9], k = 2, t = 3;
// const nums = [1,0,1,1], k = 1, t = 2
// const nums = [1,2,3,1], k = 3, t = 0
// const result: boolean = containsNearbyAlmostDuplicate(nums, k, t);
// console.log(`The result is ${result}`);
function minimalKSum(nums, k) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    let result = 1;
    //before 1st element
    while (result < nums[0] && k > 0) {
        sum += result;
        result++;
        k--;
    }
    if (k == 0)
        return sum;
    //between 1st and last elements
    for (let i = 0; i < nums.length - 1; i++) {
        result = nums[i];
        while (k > 0 && result + 1 < nums[i + 1]) {
            result++;
            sum += result;
            if (k == 0)
                return sum;
            k--;
        }
    }
    //after last element
    result = nums[nums.length - 1];
    while (k > 0) {
        result++;
        sum += result;
        k--;
    }
    return sum;
}
;
//const nums = [1,4,25,10,25], k = 2
//const nums = [5,6], k = 6
//const nums = [3], k = 1
//const nums = [53,41,90,33,84,26,50,32,63,47,66,43,29,88,71,28,83], k = 76
// const result: number = minimalKSum(nums, k);
// console.log(`The result is ${result}`);
function reconstructQueue(people) {
    function customSort(a, b) {
        if (a[0] == a[0])
            if (a[1] < b[1])
                return 1;
        if (a[0] > b[0])
            return -1;
    }
    people.map((a, b) => customSort(a, b));
    return people;
}
;
// const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
// const result: number[][] = reconstructQueue(people);
// console.log(`The result is ${result}`);
function smallestRangeII(nums, k) {
    const n = nums.length;
    let sum = 0;
    let minNum = 1e6;
    for (const num of nums) {
    }
    return 0;
}
;
// const nums = [1], k = 0;
// const result: number = smallestRangeII(nums, k);
// console.log(`The result is ${result}`);
function isPowerOf2(nums) {
    if (nums[0] == 0)
        return false;
    let N = 0;
    for (const num of nums)
        N = 10 * N + num;
    while (N > 0 && (N & 1) == 0) {
        N >>= 1;
    }
    ;
    return N == 1;
}
function reorderedPowerOf2(n) {
    let nums = n.toString().split("").map(x => Number(x));
    const permutator = (inputArr) => {
        let result = [];
        const permute = (arr, m = []) => {
            if (arr.length === 0) {
                result.push(m);
            }
            else {
                for (let i = 0; i < arr.length; i++) {
                    let curr = arr.slice();
                    let next = curr.splice(i, 1);
                    permute(curr.slice(), m.concat(next));
                }
            }
        };
        permute(inputArr);
        return result;
    };
    const results = permutator(nums);
    for (const result of results)
        if (isPowerOf2(result))
            return true;
    return false;
}
;
// const m: number = 64
// const result: boolean  = reorderedPowerOf2(m);
// console.log(`The result is ${result}`);
function validateStackSequences(pushed, popped) {
    let stack = [];
    let i = 0;
    let j = 0;
    let n = 0;
    while (j < popped.length) {
        if (i < pushed.length) {
            stack.push(pushed[i]);
            i++;
            n++;
        }
        console.log(stack[n - 1]);
        while (n > 0 && stack[n - 1] == popped[j]) {
            stack.pop();
            n--;
            j++;
        }
        //console.log(n, j, i, stack);
        if (i >= pushed.length && n > 0)
            return false;
    }
    ;
    console.log(n, j, i, stack);
    return true;
}
;
//const pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// const pushed = [1,2,3,4,5], popped = [4,3,5,1,2];
// const result: boolean  = validateStackSequences(pushed, popped);
// console.log(`The result is ${result}`);
function hasAllCodes(s, k) {
    let obj = {};
    let tmp = [];
    for (let i = 0; i < s.length; i++) {
        if (tmp.length < k)
            tmp = [...tmp, s[i]];
        if (tmp.length >= k) {
            if (!obj[tmp.join("")])
                obj[tmp.join("")] = true;
            tmp.shift();
        }
    }
    console.log(obj);
    const result = Object.keys(obj).length;
    return result == (2 ** k);
}
;
//const s = "00110110", k = 2
//const s = "0110", k = 2
//const s = "00110", k = 2
//const s = "00000000001011100", k = 3
// const result: boolean  = hasAllCodes(s, k);
// console.log(`The result is ${result}`);
function canReach(arr, start) {
    const n = arr.length;
    let dp = {};
    function dfs(i, counter) {
        if (i < 0 || i > n - 1 || counter > n)
            return false;
        if (arr[i] == 0)
            return true;
        if (dp[i] != undefined)
            return dp[i];
        return dfs(i + arr[i], counter + 1) || dfs(i - arr[i], counter + 1);
    }
    return dfs(start, 0);
}
;
//const arr = [4,2,3,0,3,1,2], start = 5;
//const arr = [4,2,3,0,3,1,2], start = 0
//const arr = [3,0,2,1,2], start = 2;
// const arr = [719,622,532,746,476,295,285,472,712,283,808,140,730,334,215,509,573,121,54,430,791,41,351,548,38,108,415,490,393,183,798,423,112,172,791,195,68,489,803,703,248,705,213,757,473,382,334,693,6,414,223,352,718,727,403,702,13,171,256,71,645,94,159,83,513,119,10,33,64,179,635,492,87,133,767,781,182,289,636,155,729,216,64,728,649,802,149,321,179,662,195,143,299,7,630,33,527,706,726,752,755,101,732,663,794,24,799,780,438,707,482,237,252,107,659,527,652,636,48,388,405,42,247,191,654,324,6,314,649,249,289,382,137,808,455,774,571,789,176,634,762,266,799,54,126,41,681,802,157,148,745,265,777,436,233,455,337,606,239,338,508,322,210,482,534,245,618,589,567,639,355,736,534,113,588,240,795,367,245,249,641,783,701,469,521,518,59,528,250,634,135,13,645,739,531,102,36,291,22,541,482,153,533,664,559,784,707,28,297,630,3,606,237,216,39,793,517,194,92,506,63,526,55,504,295,185,110,35,9,527,8,54,259,498,229,684,579,619,409,330,187,60,112,180,477,24,313,190,180,807,115,788,238,599,464,160,464,662,809,300,788,658,137,630,363,321,706,434,358,534,257,195,226,473,191,223,282,518,378,339,34,644,231,523,547,544,491,263,683,528,797,587,753,445,450,783,537,249,374,546,662,149,394,202,571,562,524,587,606,645,100,193,37,329,650,92,462,131,623,510,257,118,434,493,721,748,280,248,515,232,41,166,644,112,455,760,633,50,488,589,611,117,649,791,385,67,200,305,285,733,471,468,755,582,359,543,366,206,74,24,20,395,192,199,801,33,658,474,341,500,781,367,714,576,669,327,508,325,796,608,38,656,710,219,59,481,735,475,425,400,690,541,806,488,246,735,310,762,454,15,550,74,289,351,84,486,81,161,341,500,629,224,364,182,309,530,539,713,116,511,428,392,524,681,599,120,658,266,592,184,76,160,284,490,771,74,398,336,155,502,356,268,427,98,12,232,383,381,563,10,634,669,650,79,298,734,730,803,201,142,35,704,405,788,678,171,407,314,770,697,741,649,227,346,80,790,620,504,306,601,764,490,115,266,657,463,475,116,390,396,538,178,130,602,496,196,56,382,252,663,696,343,775,341,427,69,242,354,658,568,281,21,625,3,499,551,569,744,0,398,586,645,32,600,537,477,679,335,779,405,540,563,443,629,477,164,591,21,719,255,241,649,602,247,713,218,349,599,53,55,773,187,529,460,621,558,56,699,335,666,177,354,607,145,580,529,367,678,712,756,405,52,169,144,275,95,496,45,705,378,385,6,795,45,463,63,511,222,81,683,807,468,142,125,697,238,358,765,195,747,636,504,451,121,544,692,5,774,89,357,240,48,673,443,539,632,111,224,575,22,108,277,85,0,456,783,410,519,27,500,570,35,576,231,293,463,307,229,341,36,274,262,170,709,232,149,156,223,797,408,562,796,394,320,324,710,520,654,12,674,617,432,365,379,250,217,699,267,197,354,423,365,312,253,535,174,800,430,320,217,652,129,650,448,387,399,390,185,709,539,241,474,70,756,45,616,397,317,252,372,48,306,21,554,725,186,422,717,392,683,810,752,369,421,537,13,736,144,79,536,177,648,231,788,677,428,446,571,162,562,147,100,416,723,49,731,727,625,644,43,688,0,399,8,174,281,137,751,116,256,452,427,129,602,277,169,213,108,595,803,412,727,81,648,334,433,659,519,273,103,184,758,652,776,605,385,603,318,577,185,584,491,684,251,604,560,567,515,112,256,446,116,741,801,338,581,571,465,78,403,10,566,264,247,43,808,123,267,271,180,666]
// , start = 734;
// const result: boolean  = canReach(arr, start);
// console.log(`The result is ${result}`);
function canReach4(s, minJump, maxJump) {
    // let n: number = s.length;
    // function dfs(i: number, counter: number = 0): boolean {
    //     if(i < 0 || i > n-1) return false;
    //     console.log(n, i, s[i], i+minJump, Math.min(i + maxJump, n-1));
    //     if (i == n - 1) return true;
    //     let result: boolean = false;
    //     for(let j = i+minJump; j <Math.max(i + maxJump, n); j++)
    //     {   result = result || dfs(j);
    //     }
    //     return result;
    // }
    // const result: boolean = dfs(0, 0);
    // return result;
    return false;
}
;
//const s = "011010", minJump = 2, maxJump = 3;
// const s = "01101110", minJump = 2, maxJump = 3;
// const result: boolean  = canReach4(s, minJump, maxJump);
// console.log(`The result is ${result}`);
function longestSubarray(nums, limit) {
    const n = nums.length;
    let right = 0;
    let tmp = [];
    let maxLength = 0;
    while (right < n) {
        tmp = [...tmp, nums[right++]];
        if (Math.max(...tmp) - Math.min(...tmp) <= limit) {
            maxLength = Math.max(maxLength, tmp.length);
        }
        else
            while (Math.max(...tmp) - Math.min(...tmp) > limit) {
                tmp.shift();
            }
        ;
    }
    ;
    return maxLength;
}
;
//const nums = [8,2,4,7], limit = 4;
//const nums = [10,1,2,4,7,2], limit = 5;
//const nums = [4,2,2,2,4,4,2,2], limit = 0
// const result: number  = longestSubarray(nums, limit);
// console.log(`The result is ${result}`);
function countNicePairs(nums) {
    function revNumber(n) {
        let nums = n.toString().split("").reverse();
        while (nums[0] == '0')
            nums.shift();
        let value = 0;
        for (const num of nums)
            value = value * 10 + Number(num);
        return value;
    }
    let dp = {};
    let result = 0;
    for (const num of nums) {
        const tmp = num - revNumber(num);
        console.log(tmp);
        if (dp[tmp] == undefined)
            dp[tmp] = 0;
        result += dp[tmp] % (10 ** 9 + 7);
        dp[tmp]++;
    }
    return result;
}
;
//const nums = [42,11,1,97];
// const nums = [13,10,35,24,76]
// const result: number  = countNicePairs(nums);
// console.log(`The result is ${result}`);
function canArrange(arr, k) {
    let freq = {};
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        const tmp = ((arr[i] % k) + k) % k;
        if (freq[tmp] == undefined)
            freq[tmp] = 1;
        else
            freq[tmp]++;
    }
    console.log(freq);
    for (let i = 0; i < k; i++) {
        if (i == 0) {
            if (freq[i] != undefined)
                if (freq[i] % 2 != 0)
                    return false;
            continue;
        }
        if ((freq[i] == undefined && freq[k - i] != undefined) || (freq[i] != undefined && freq[k - i] == undefined))
            return false;
        if (freq[i] != freq[k - i])
            return false;
    }
    return true;
}
;
//const arr = [1,2,3,4,5,6], k = 7;
//const arr = [1,2,3,4,5,10,6,7,8,9], k = 5
//const arr = [1,2,3,4,5,6], k = 10
//const arr = [-10,10], k = 2;
//const arr = [3,8,7,2], k = 10
// const arr = [9606,4830,4037,-1054,3308,6966,6528,3953,473,-388,9878,-3797,2598,-3283,5813,-6446,-3625,-107,-8756,-3053,-2131,6609,4192,7408,1115,7456,-5674,1219,-8548,540,-9630,-4858,-2453,-726,9902,6192,-7996,1459,-1980,4285,-2659,4156,-2303,-855]
// , k =10;
// const result: boolean  = canArrange(arr, k);
// console.log(`The result is ${result}`);
// function rankTeams(votes: string[]): string {
//     let obj = { key: "", count: 0 };
//     let freq: any = {};
//     for(let i =0; i<votes[0].length; i++)
//         freq[i] = [];
//     for(const vote of votes){
//         let tmpArray: any[] = [];
//         for(let i =0; i < vote.length; i++) {
//             obj.key = vote[i]
//             obj.count++;
//             tmpArray.push(obj);
//             console.log(tmpArray);
//             // freq[i] = [...freq[i], tmpArray];
//         }
//     }
//     //console.log(freq['1'][0]);
//     return "";
// };
// const votes = ["ABC","ACB","ABC","ACB","ACB"]
// const result: string = rankTeams(votes);
// console.log(`The result is ${result}`);
function countServers(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let dp = [...Array(rows)].map(row => [...Array(cols)].fill(0));
    let maxCount = 1;
    for (let i = 0; i < cols; i++) {
        if (grid[0][i] == 1) {
            dp[0][i] = maxCount;
            maxCount++;
        }
    }
    maxCount = 1;
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] == 1) {
            dp[i][0] = maxCount;
            maxCount++;
        }
    }
    for (let i = 1; i < rows; i++)
        for (let j = 1; j < cols; j++) {
            if (grid[i][j] == 1) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    console.log(dp);
    let counter = 0;
    let lastRow = -2;
    let lastCol = -2;
    maxCount = 0;
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++) {
            if (dp[i][j] > 1 && dp[i][j] >= maxCount) {
                maxCount = dp[i][j];
                if (Math.abs(i - lastRow) > 1 || Math.abs(j - lastCol) > 1)
                    counter += maxCount;
                else
                    counter = Math.max(counter, maxCount);
                lastRow = i;
                lastCol = j;
            }
        }
    return counter;
}
;
//const grid = [[1,1,0,1],[0,0,1,0],[0,0,1,0],[0,0,0,1]];
//const grid = [[1,0],[1,1]];
//const grid = [[1,0],[0,1]];
// const grid = [[1,0,0,1,0],[0,0,0,0,0],[0,0,0,1,0]];
// const result: number = countServers(grid);
// console.log(`The result is ${result}`);
function countServers2(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let rowSum = [...Array(rows)].fill(0);
    let colSum = [...Array(cols)].fill(0);
    for (let i = 0; i < rows; i++) {
        rowSum[i] = grid[i].reduce((a, b) => a + b, 0);
    }
    for (let j = 0; j < cols; j++)
        for (let i = 0; i < rows; i++) {
            colSum[j] += grid[i][j];
        }
    let counter = 0;
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++)
            if (grid[i][j] == 1)
                if (rowSum[i] > 1 || colSum[j] > 1)
                    counter++;
    return counter;
}
//const grid = [[1,1],[0,1]];
//const grid = [[1,0,0,1,0],[0,0,0,0,0],[0,0,0,1,0]];
//const grid = [[1,1,0,1],[0,0,1,0],[0,0,1,0],[0,0,0,1]];
// const grid =  [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]];
// const result: number = countServers2(grid);
// console.log(`The result is ${result}`);
function findDuplicate(paths) {
    let obj = {};
    for (const path of paths) {
        const [root, ...rest] = path.split(" ");
        console.log(root, rest);
        for (const value of rest) {
            let [absPath, content] = value.split('(');
            [content,] = content.split(')');
            if (obj[content] == undefined)
                obj[content] = [root + '/' + absPath];
            else
                obj[content] = [...obj[content], root + '/' + absPath];
        }
    }
    const keys = Object.keys(obj);
    let result = [];
    for (const key of keys) {
        if (obj[key].length > 1)
            result = [...result, obj[key]];
    }
    return result;
}
;
//const paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"];
// const paths = ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"];
// const result: string[][] = findDuplicate(paths);
// console.log(`The result is ${result}`);
function findAnagrams(s, p) {
    const pLength = p.length;
    const sLength = s.length;
    function customEqual(a, b) {
        for (let i = 0; i < 26; i++)
            if (a[i] != b[i])
                return false;
        return true;
    }
    let window = [...Array(26)].fill(0);
    let freq = [...Array(26)].fill(0);
    let i = 0;
    for (let i = 0; i < pLength; i++) {
        let pIndex = p.charCodeAt(i) - 'a'.charCodeAt(0);
        let sIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
        window[sIndex]++;
        freq[pIndex]++;
    }
    let result = [];
    if (customEqual(window, freq))
        result = [...result, 0];
    console.log(window, freq, result);
    for (let i = pLength; i < sLength; i++) {
        window[s[i - pLength].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        window[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        if (customEqual(window, freq))
            result = [...result, i - pLength + 1];
    }
    return result;
}
;
//const s = "cbaebabacd", p = "cba";
//const s = "abab", p = "ab";
// const s = "aa", p = "bb"
// const result: number[] = findAnagrams(s, p);
// console.log(`The result is ${result}`);
function findTheLongestSubstring(s) {
    let mp = {};
    mp['a'] = 1;
    mp['e'] = 2;
    mp['i'] = 4;
    mp['o'] = 8;
    mp['u'] = 16;
    let seen = [...Array(32)].fill(-1);
    let mask = 0;
    let maxlen = 0;
    for (let i = 0; i < s.length; i++) {
        mask = mask ^ mp[s[i]];
        if (mask != 0 && seen[mask] == -1) {
            seen[mask] = i;
        }
        maxlen = Math.max(maxlen, i - seen[mask]);
    }
    console.log(mp, seen);
    return maxlen;
}
;
// const s = "eleetminicoworoep";
// const result: number = findTheLongestSubstring(s);
// console.log(`The result is ${result}`);
function maximumElementAfterDecrementingAndRearranging(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    arr[0] = 1;
    let maxResult = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            arr[i] = arr[i - 1] + 1;
        }
        maxResult = Math.max(maxResult, arr[i]);
    }
    return maxResult;
}
;
//const arr: number[] = [2,2,1,2,1];
// const arr = [100,1,1000];
// const result: number = maximumElementAfterDecrementingAndRearranging(arr);
// console.log(`The result is ${result}`);
function getDescentPeriods(prices) {
    const n = prices.length;
    if (n == 0)
        return 0;
    let right = 0;
    let left = 0;
    let counter = 0;
    while (right < n) {
        right++;
        while (right < n && (prices[right - 1] - prices[right]) == 1) {
            right++;
        }
        ;
        if (right - left > 1) {
            const width = right - left;
            counter += width / 2 * (1 + width);
        }
        else {
            counter += 1;
        }
        left = right;
    }
    ;
    return counter;
}
;
//const prices: number[] = [3,2,1,4];
//const prices = [8,6,7,7];
//const prices = [12,11,10,9,8,7,6,5,4,3,4,3,10,9,8,7];
// const result: number = getDescentPeriods(prices);
// console.log(`The result is ${result}`);
function orderOfLargestPlusSign(n, mines) {
    const dp = [...Array(n)].map(row => [...Array(n)].map(x => 0));
    let result = 0;
    function customFind(i, j) {
        for (const mine of mines) {
            if (mine[0] == i && mine[1] == j)
                return true;
        }
        return false;
    }
    //rows
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (customFind(i, j))
                count = 0;
            else
                count++;
            dp[i][j] = count;
        }
        count = 0;
        for (let j = n - 1; j > -1; j--) {
            if (customFind(i, j))
                count = 0;
            else
                count++;
            if (count < dp[i][j])
                dp[i][j] = count;
        }
    }
    // // //columns
    for (let j = 0; j < n; j++) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (customFind(i, j))
                count = 0;
            else
                count++;
            if (count < dp[i][j])
                dp[i][j] = count;
        }
        count = 0;
        for (let i = n - 1; i > -1; i--) {
            if (customFind(i, j))
                count = 0;
            else
                count++;
            if (count < dp[i][j])
                dp[i][j] = count;
            if (dp[i][j] > result)
                result = dp[i][j];
        }
    }
    console.log(dp);
    return result;
}
;
// const n = 5, mines = [[4,2]];
//const n = 2, mines = [[0,0],[0,1],[1,0],[1,1]]
//const n = 2, mines = [[0,0],[0,1],[1,0]]
// const result: number = orderOfLargestPlusSign(n, mines);
// console.log(`The result is ${result}`);
function largestDivisibleSubset(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let dp = [...Array(n)].fill(1);
    for (let i = n - 1; i > 0; i--) {
        for (let j = i - 1; j > -1; j--) {
            if (nums[i] % nums[j] == 0 && dp[j] <= dp[i]) {
                dp[j] = dp[i] + 1;
            }
        }
    }
    let maxSoFar = Math.max(...dp);
    let lastNum = 1;
    let result = [];
    for (let i = 0; i < n; i++) {
        if (dp[i] >= maxSoFar && nums[i] % lastNum == 0) {
            maxSoFar--;
            lastNum = nums[i];
            result = [...result, nums[i]];
        }
    }
    console.log(result, dp);
    return result;
}
;
//const nums = [1,2,3];
//const nums = [1,2,4,8, 32];
//const nums =  [3,4,16,8];
//const nums = [4,8,10,240];
//const nums = [3,4,6,8,12,16,32];
// const result: number[] = largestDivisibleSubset(nums);
// console.log(`The result is ${result}`);
function maxSumDivThree(nums) {
    const n = nums.length;
    let dp = {};
    function dfs(i) {
        // if (i == n ) return 0;
        if (dp[i] != undefined)
            return dp[i];
        let maxSoFar = 0;
        // if (nums[i] % 3 == 0)
        //     maxSoFar = Math.max(nums[i], maxSoFar);
        let sum = nums[i];
        for (let j = i + 1; j < n; j++) {
            console.log(sum);
            sum += dfs(j);
            // if (sum % 3 == 0) 
            //     maxSoFar = Math.max(sum, maxSoFar);
            // dp[i] = maxSoFar;
            sum -= nums[j];
        }
        return sum;
    }
    const result = dfs(0);
    console.log(dp, result);
    return 0;
}
;
//const nums = [3,6,5,1,8];
// const nums = [3,6,1];
// const result: number = maxSumDivThree(nums);
// console.log(`The result is ${result}`);
function findNumberOfLIS(nums) {
    const n = nums.length;
    let dp = [...Array(n)].fill(1);
    for (let i = 0; i < n - 1; i++)
        for (let j = i + 1; j < n; j++) {
            if (nums[j] > nums[i] && dp[j] >= dp[i])
                dp[j] = dp[i] + 1;
        }
    let counter = 0;
    //dp.sort((a, b) => a - b);
    let maxCount = 0;
    let maxNumber = Math.max(...dp);
    let previousMax = 1e6;
    // for(let i= n -1 ; i> -1 ; i--)
    // {        
    //     if (dp[i] < maxNumber) {
    //         previousMax = nums[i+1];
    //         maxNumber = dp[i];
    //         counter = 0;
    //     }
    //     if (dp[i] >= maxNumber && nums[i] < previousMax) {
    //         counter++;
    //         maxCount = Math.max(maxCount, counter);
    //     }
    // }
    console.log(...dp);
    console.log("results", maxCount, maxNumber);
    return 0;
}
;
//const nums = [1,3,5,4,7];
//const nums = [9, 5, 4, 3, 6, 7, 8];
// const nums = [1,2,4,3,5,4,7,2];
// const result: number = findNumberOfLIS(nums);
// console.log(`The result is ${result}`);
function repeatedStringMatch(a, b) {
    if (a.search(b) > -1)
        return 1;
    let counter = -1;
    let bPtr = 0;
    let aPtr = 0;
    let firstMatch = 0;
    let flag = false;
    let countSoFar = 0;
    while (bPtr < b.length) {
        while ((bPtr < b.length) && (b[bPtr] == a[aPtr])) {
            if (!flag) {
                flag = true;
                firstMatch = aPtr;
            }
            countSoFar++;
            if (countSoFar % a.length == 0 || (counter > -1 && bPtr == b.length - 1)) {
                counter = (counter == -1) ? 1 : counter + 1;
            }
            aPtr = (aPtr + 1) % a.length;
            bPtr++;
        }
        aPtr++;
        if (aPtr == a.length)
            break;
    }
    console.log(aPtr, bPtr, counter, firstMatch);
    if (counter == -1)
        return -1;
    if (firstMatch > 0)
        return counter + 1;
    return counter;
}
;
