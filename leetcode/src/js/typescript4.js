"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonToMatrix(arr) {
    let result = {};
    for (const item of arr) {
        for (const key of Object.keys(item)) {
            result = Object.assign(Object.assign({}, result), { [key]: [] });
        }
    }
    for (const item of arr) {
        for (const key of Object.keys(result)) {
            if (key in item)
                result[key] = [...result[key], item[key]];
            else
                result[key] = [...result[key], ""];
        }
    }
    const keys = Object.keys(result);
    keys.sort((a, b) => { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; });
    const columns = keys.length;
    const rows = result[keys[0]].length + 1;
    let output = [...new Array(rows)].map((row) => [...new Array(columns)].map((cell) => ""));
    output[0] = keys;
    for (let column = 0; column < columns; column++) {
        const key = output[0][column];
        for (let row = 1; row < rows; row++) {
            output[row][column] = result[key][row - 1];
        }
    }
    return [""];
    //return output;   
}
//const arr = [ {"b": 1, "a": 2}, {"b": 3, "a": 4}];
// const arr = [
//     {"c": 3, "d": 4},
//     {"a": 1, "b": 2},
//     {}
//   ]
// const result = jsonToMatrix(arr);
// console.log(`The result is ${result}`);
function curry(fn) {
    return function curried() {
        console.log(arguments.length);
        for (let arg = 0; arg < arguments.length; arg++)
            return fn(arguments[arg]);
    };
}
;
// const fn = function sum(a: any, b: any) { return a + b; }
// console.log(fn, fn(1,5));
// const inputs = [[1],[2],[3]];
// const csum = curry(fn);
// console.log(csum, csum(1)(2));
// const result = csum(1)(2);
// console.log(`The result is ${result}`);
function chunk(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let j;
        let tmp = [];
        for (j = i; j < (i + size) && (j < arr.length); j++) {
            tmp.push(arr[j]);
        }
        result.push(tmp);
        i = j - 1;
    }
    return result;
}
;
//const arr: any[] = [1,9,6,3,2];
// const arr: any[] = [];
// const size: number = 1;
// const result: any[][] = chunk(arr, size);
// console.log(`The result is ${result}`);
// class ArrayWrapper {
//     vals: number[]; 
// 	constructor(nums: number[]) {
//         this.vals = [...nums];
//     }
// 	valueOf() {
//         return this.vals.reduce((x: any, y: any)=> x + y,0);
//     }
// 	toString() {
//         return '['+this.vals.join(',')+']';    
//     }
// };
// const nums = [[1,2],[3,4]];
function numRollsToTarget(n, k, target) {
    let mod = 10 ** 9 + 7;
    let dp = {};
    function dfs(dice, sum = 0) {
        if ((dice == n) && (sum == target))
            return 1;
        if (dice >= n)
            return 0;
        if (sum >= target)
            return 0;
        let count = 0;
        if (dp[`${dice},${sum}`] !== undefined)
            return dp[`${dice},${sum}`];
        for (let i = 1; i < k + 1; i++) {
            count += dfs(dice + 1, sum + i);
            count = count % mod;
            dp[`${dice},${sum}`] = count;
        }
        return count;
    }
    const result = dfs(0);
    return result;
}
;
// const n = 2;
// const k = 6;
// const target = 7;
// const result = numRollsToTarget(n, k, target);
// console.log(`The result is ${result}`);
function circularGameLosers(n, k) {
    let counter = 0;
    let winners = [1];
    let next = 1;
    for (let i = 1; i < n + 1; i++) {
        next = (next + i * k) % n;
        if (next == 0)
            next = n;
        if (winners.indexOf(next) == -1)
            winners.push(next);
        else
            break;
    }
    console.log(winners);
    let losers = [];
    for (let i = 1; i < n + 1; i++)
        if (winners.indexOf(i) == -1)
            losers.push(i);
    return losers.sort((a, b) => a - b);
}
;
//const n = 5;
//const k = 2;
// const n = 2;
// const k= 1;
// const n = 1;
// const k = 5;
// const n = 6;
// const k = 1;
// const result: number[] = circularGameLosers(n, k);
// console.log(`The result is ${result}`);
// const pattern: string = "IIIDIDDD";
//const pattern: string = "IID";
// const result: string = smallestNumber(pattern);
// console.log(`The result is ${result}`);
function sortTheStudents(score, k) {
    let rows = score.length;
    let columns = score[0].length;
    let row, column;
    let tmp = [];
    for (let column = 0; column < columns; column++) {
        if (column == k) {
            for (let row = 0; row < rows; row++) {
                tmp = [...tmp, score[row][k]];
            }
        }
    }
    let sorted = [...tmp];
    sorted = sorted.sort((a, b) => b - a);
    let indices = sorted.map((val, index) => tmp.indexOf(val));
    let result = [];
    for (let index of indices) {
        result = [...result, score[index]];
    }
    return result;
}
;
// const score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2
// const result: number[][] = sortTheStudents(score, k);
// console.log(`The result is ${result}`);
function maximumGroups(grades) {
    function bsearch(grades) {
        grades.sort((a, b) => a - b);
        let l = grades[0];
        let r = grades[grades.length - 1];
        let mid = Math.floor((l + r) / 2);
        console.log(mid, l, r);
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            ;
            console.log(mid);
        }
        ;
        console.log(l, r);
    }
    bsearch(grades);
    const result = grades.reduce((a, b) => a + b, 0);
    console.log(result);
    return 0;
}
;
// const grades: number[] = [10,6,12,7,3,5]
// const result: number = maximumGroups(grades);
// console.log(`The result is ${result}`);
// function maxDistance(nums1: number[], nums2: number[]): number {
//     let result: number = 0;
//     for(let i=0; i<nums1.length; i++)
//     {
//         let num = nums1[i];
//         let j: number = bsearch(num, i);
//         if (j >= i) {
//             result = Math.max(result, j-i);
//         }
//     }
//     function bsearch(cand: number, i: number): number  {
//         let l: number = 0;
//         let r: number = nums2.length-1;
//         let index:number =  i;
//         while( l <= r) {
//             let mid: number = Math.floor((l + r)/2);
//             if (cand <= nums2[mid]) {
//                 index = mid;
//                 l = mid+1;
//             } else
//                 r = mid-1;
//         }
//         return l-1;
//     }
//     return result;
// };
// const nums1: number[] = [55,30,5,4,2];
// const nums2: number[] = [100,20,10,10,5];
// const nums1: number[] = [2,2,2];
// const nums2 = [10,10,1];
// const nums1 = [30,29,19,5];
// const nums2 = [25,25,25,25,25];
// const result: number = maxDistance(nums1, nums2);
// console.log(`The result is ${result}`);
function maximumTastiness(price, k) {
    price.sort((a, b) => a - b);
    let diff = [];
    for (let i = 1; i < price.length; i++) {
        diff = [...diff, price[i] - price[i - 1]];
    }
    console.log(diff);
    //return (diff.length == 0)?price[0]:Math.max(...diff);
    return Math.max(...diff);
}
;
//const price = [13,5,1,8,21,2], k = 3;
//const price = [7,7,7,7], k = 2;
// const price = [34,116,83,15,150,56,69,42,26], k =6;
// const result: number = maximumTastiness(price, k);
// console.log(`The result is ${result}`); 
function shipWithinDays(weights, days) {
    let h = weights.reduce((a, b) => a + b, 0);
    function isValid(mid) {
        let count = 0;
        let sum = 0;
        for (let day = 0; day < weights.length; ++day) {
            while (sum + weights[day] < mid) {
                sum += weights[day];
                day++;
            }
            sum = 0;
            --day;
            ++count;
        }
        console.log(count, mid);
        return count <= days;
    }
    function bsearch() {
        let l = Math.max(...weights);
        while (l < h) {
            let mid = Math.floor((l + h) / 2);
            if (isValid(mid)) {
                h = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        ;
        return l;
    }
    const result = bsearch();
    return result;
}
;
//const weights = [1,2,3,4,5,6,7,8,9,10], days = 5;
//const weights = [3,2,2,4,1,4], days = 3;
// const weights = [1,2,3,1,1], days = 4
// const result: number = shipWithinDays(weights, days);
// console.log(`The result is ${result}`);
function mergeSimilarItems(items1, items2) {
    let result = [];
    let d = {};
    for (const [v, count] of items1) {
        d[v] = count;
    }
    for (const [v, count] of items2) {
        if (d[v] == undefined)
            d[v] = count;
        else
            d[v] += count;
    }
    for (const [k, v] of Object.entries(d)) {
        result.push([Number(k), Number(v)]);
    }
    result.sort((a, b) => a[0] - b[0]);
    return result;
}
;
// const items1: number[][] = [[1,1],[4,5],[3,8]];
// const items2: number[][] = [[3,1],[1,5]];
// const result: number[][] = mergeSimilarItems(items1, items2);
// console.log(`The result is ${result}`);
class LUPrefix {
    constructor(n) {
        this.counter = [];
        this.n = 0;
        this.last = 0;
        this.n = n;
        for (let i = 0; i < n; i++)
            this.counter = [...this.counter, 0];
    }
    upload(video) {
        this.counter[video - 1] = video;
        if (video == this.last + 1)
            this.last = video;
    }
    longest() {
        return this.last;
    }
}
class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.d = {};
        for (let i = 0; i < cuisines.length; i++) {
            const cuisine = cuisines[i];
            if (this.d[cuisine] == undefined)
                this.d[cuisine] = { [foods[i]]: ratings[i] };
            else
                this.d = Object.assign(Object.assign({}, this.d), { [cuisine]: Object.assign(Object.assign({}, this.d[cuisine]), { [foods[i]]: ratings[i] }) });
        }
    }
    changeRating(food, newRating) {
        let k;
        let v;
        for ([k, v] of Object.entries(this.d)) {
            if (v[food] !== undefined) {
                this.d[k][food] = newRating;
            }
        }
        console.log(this.d);
    }
    highestRated(cuisine) {
        let result = "";
        let v = 0;
        let k = "";
        let maxValue = 0;
        for ([k, v] of Object.entries(this.d[cuisine])) {
            if (v > maxValue) {
                maxValue = v;
                result = k;
            }
            else if (v == maxValue) {
                const l = result.localeCompare(k);
                console.log(l);
                result = (l > 0) ? result : k;
            }
        }
        return result;
    }
}
// const foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
//                                     ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
//                                     [9, 12, 8, 15, 14, 7]);
// foodRatings.changeRating("sushi", 16);
// let result = foodRatings.highestRated("japanese");
// foodRatings.changeRating("ramen", 16);
// result = foodRatings.highestRated("japanese");
// console.log(`The result is ${result}`);
function minimizeMax(nums, p) {
    nums.sort((a, b) => a - b);
    let l = 0;
    let h = Math.max(...nums);
    let ans = 0;
    function computeCnt(mid) {
        let cnt = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] - nums[i] <= mid) {
                ++cnt;
                i++;
            }
        }
        return cnt;
    }
    while (l < h) {
        let mid = Math.floor((l + h) / 2);
        ans = computeCnt(mid);
        console.log(ans);
        if (ans < p) {
            l = mid + 1;
        }
        else {
            ans = mid;
            h = mid - 1;
        }
    }
    return ans;
}
;
//const nums: number[] = [10,1,2,7,1,3], p = 2;
//const nums: number[] = [4,2,1,2], p = 1;
//const nums: number[] = [4,0,2,1,2,5,5,3], p = 3;
//const nums: number[] = [8,9,1,5,4,3,6,4,3,7], p=4; 
// const result = minimizeMax(nums, p);
// console.log(`The result is ${result}`);
function maxDistance(position, m) {
    function isPossible(mid) {
        let cnt = 1;
        let preBall = position[0];
        for (let i = 1; i < position.length; i++) {
            if (position[i] - preBall >= mid) {
                preBall = position[i];
                ++cnt;
            }
        }
        if (cnt < m)
            return false;
        return true;
    }
    position = position.sort((a, b) => a - b);
    let l = 0;
    let h = position[position.length - 1];
    let res = 0;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (isPossible(mid)) {
            res = mid;
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }
    return res;
}
;
//const position: number[] = [1,2,3,4,7], m = 3;
//const position: number[] = [5,4,3,2,1,1000000000], m = 2;
//const position : number[] =  [79,74,57,22], m=4;
// const result: number = maxDistance(position, m);
// console.log(`The result is ${result}`);
function numberOfSubarrays(nums, k) {
    let left = 0;
    let right = 0;
    let cnt = 0;
    let total = 0;
    for (let left = 0; left < nums.length; left++) {
        if (nums[left] % 2 == 0) {
            left++;
            right++;
        }
        else {
            while (right < nums.length && cnt < k) {
                if (nums[right] % 2 == 1) {
                    cnt++;
                    if (cnt == k)
                        total++;
                }
                right++;
            }
            cnt--;
        }
    }
    return total;
}
;
// const nums: number[] = [1,1,2,1,1], k = 3;
const nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], k = 2;
const result = numberOfSubarrays(nums, k);
console.log(`The result is ${result}`);
