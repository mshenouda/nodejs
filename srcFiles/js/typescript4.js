"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function jsonToMatrix(arr) {
    var _a;
    var result = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        for (var _b = 0, _c = Object.keys(item); _b < _c.length; _b++) {
            var key = _c[_b];
            result = __assign(__assign({}, result), (_a = {}, _a[key] = [], _a));
        }
    }
    for (var _d = 0, arr_2 = arr; _d < arr_2.length; _d++) {
        var item = arr_2[_d];
        for (var _e = 0, _f = Object.keys(result); _e < _f.length; _e++) {
            var key = _f[_e];
            if (key in item)
                result[key] = __spreadArray(__spreadArray([], result[key], true), [item[key]], false);
            else
                result[key] = __spreadArray(__spreadArray([], result[key], true), [""], false);
        }
    }
    var keys = Object.keys(result);
    keys.sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; });
    var columns = keys.length;
    var rows = result[keys[0]].length + 1;
    var output = __spreadArray([], new Array(rows), true).map(function (row) { return __spreadArray([], new Array(columns), true).map(function (cell) { return ""; }); });
    output[0] = keys;
    for (var column = 0; column < columns; column++) {
        var key = output[0][column];
        for (var row = 1; row < rows; row++) {
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
        for (var arg = 0; arg < arguments.length; arg++)
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
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var j = void 0;
        var tmp = [];
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
    var mod = Math.pow(10, 9) + 7;
    var dp = {};
    function dfs(dice, sum) {
        if (sum === void 0) { sum = 0; }
        if ((dice == n) && (sum == target))
            return 1;
        if (dice >= n)
            return 0;
        if (sum >= target)
            return 0;
        var count = 0;
        if (dp["".concat(dice, ",").concat(sum)] !== undefined)
            return dp["".concat(dice, ",").concat(sum)];
        for (var i = 1; i < k + 1; i++) {
            count += dfs(dice + 1, sum + i);
            count = count % mod;
            dp["".concat(dice, ",").concat(sum)] = count;
        }
        return count;
    }
    var result = dfs(0);
    return result;
}
;
// const n = 2;
// const k = 6;
// const target = 7;
// const result = numRollsToTarget(n, k, target);
// console.log(`The result is ${result}`);
function circularGameLosers(n, k) {
    var counter = 0;
    var winners = [1];
    var next = 1;
    for (var i = 1; i < n + 1; i++) {
        next = (next + i * k) % n;
        if (next == 0)
            next = n;
        if (winners.indexOf(next) == -1)
            winners.push(next);
        else
            break;
    }
    console.log(winners);
    var losers = [];
    for (var i = 1; i < n + 1; i++)
        if (winners.indexOf(i) == -1)
            losers.push(i);
    return losers.sort(function (a, b) { return a - b; });
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
    var rows = score.length;
    var columns = score[0].length;
    var row, column;
    var tmp = [];
    for (var column_1 = 0; column_1 < columns; column_1++) {
        if (column_1 == k) {
            for (var row_1 = 0; row_1 < rows; row_1++) {
                tmp = __spreadArray(__spreadArray([], tmp, true), [score[row_1][k]], false);
            }
        }
    }
    var sorted = __spreadArray([], tmp, true);
    sorted = sorted.sort(function (a, b) { return b - a; });
    var indices = sorted.map(function (val, index) { return tmp.indexOf(val); });
    var result = [];
    for (var _i = 0, indices_1 = indices; _i < indices_1.length; _i++) {
        var index = indices_1[_i];
        result = __spreadArray(__spreadArray([], result, true), [score[index]], false);
    }
    return result;
}
;
// const score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2
// const result: number[][] = sortTheStudents(score, k);
// console.log(`The result is ${result}`);
function maximumGroups(grades) {
    function bsearch(grades) {
        grades.sort(function (a, b) { return a - b; });
        var l = grades[0];
        var r = grades[grades.length - 1];
        var mid = Math.floor((l + r) / 2);
        console.log(mid, l, r);
        while (l < r) {
            var mid_1 = Math.floor((l + r) / 2);
            ;
            console.log(mid_1);
        }
        ;
        console.log(l, r);
    }
    bsearch(grades);
    var result = grades.reduce(function (a, b) { return a + b; }, 0);
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
    price.sort(function (a, b) { return a - b; });
    var diff = [];
    for (var i = 1; i < price.length; i++) {
        diff = __spreadArray(__spreadArray([], diff, true), [price[i] - price[i - 1]], false);
    }
    console.log(diff);
    //return (diff.length == 0)?price[0]:Math.max(...diff);
    return Math.max.apply(Math, diff);
}
;
//const price = [13,5,1,8,21,2], k = 3;
//const price = [7,7,7,7], k = 2;
// const price = [34,116,83,15,150,56,69,42,26], k =6;
// const result: number = maximumTastiness(price, k);
// console.log(`The result is ${result}`); 
function shipWithinDays(weights, days) {
    var h = weights.reduce(function (a, b) { return a + b; }, 0);
    function isValid(mid) {
        var count = 0;
        var sum = 0;
        for (var day = 0; day < weights.length; ++day) {
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
        var l = Math.max.apply(Math, weights);
        while (l < h) {
            var mid = Math.floor((l + h) / 2);
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
    var result = bsearch();
    return result;
}
;
//const weights = [1,2,3,4,5,6,7,8,9,10], days = 5;
//const weights = [3,2,2,4,1,4], days = 3;
// const weights = [1,2,3,1,1], days = 4
// const result: number = shipWithinDays(weights, days);
// console.log(`The result is ${result}`);
function mergeSimilarItems(items1, items2) {
    var result = [];
    var d = {};
    for (var _i = 0, items1_1 = items1; _i < items1_1.length; _i++) {
        var _a = items1_1[_i], v = _a[0], count = _a[1];
        d[v] = count;
    }
    for (var _b = 0, items2_1 = items2; _b < items2_1.length; _b++) {
        var _c = items2_1[_b], v = _c[0], count = _c[1];
        if (d[v] == undefined)
            d[v] = count;
        else
            d[v] += count;
    }
    for (var _d = 0, _e = Object.entries(d); _d < _e.length; _d++) {
        var _f = _e[_d], k_1 = _f[0], v = _f[1];
        result.push([Number(k_1), Number(v)]);
    }
    result.sort(function (a, b) { return a[0] - b[0]; });
    return result;
}
;
// const items1: number[][] = [[1,1],[4,5],[3,8]];
// const items2: number[][] = [[3,1],[1,5]];
// const result: number[][] = mergeSimilarItems(items1, items2);
// console.log(`The result is ${result}`);
var LUPrefix = /** @class */ (function () {
    function LUPrefix(n) {
        this.counter = [];
        this.n = 0;
        this.last = 0;
        this.n = n;
        for (var i = 0; i < n; i++)
            this.counter = __spreadArray(__spreadArray([], this.counter, true), [0], false);
    }
    LUPrefix.prototype.upload = function (video) {
        this.counter[video - 1] = video;
        if (video == this.last + 1)
            this.last = video;
    };
    LUPrefix.prototype.longest = function () {
        return this.last;
    };
    return LUPrefix;
}());
var FoodRatings = /** @class */ (function () {
    function FoodRatings(foods, cuisines, ratings) {
        var _a, _b, _c;
        this.d = {};
        for (var i = 0; i < cuisines.length; i++) {
            var cuisine = cuisines[i];
            if (this.d[cuisine] == undefined)
                this.d[cuisine] = (_a = {}, _a[foods[i]] = ratings[i], _a);
            else
                this.d = __assign(__assign({}, this.d), (_b = {}, _b[cuisine] = __assign(__assign({}, this.d[cuisine]), (_c = {}, _c[foods[i]] = ratings[i], _c)), _b));
        }
    }
    FoodRatings.prototype.changeRating = function (food, newRating) {
        var _a;
        var k;
        var v;
        for (var _i = 0, _b = Object.entries(this.d); _i < _b.length; _i++) {
            _a = _b[_i], k = _a[0], v = _a[1];
            if (v[food] !== undefined) {
                this.d[k][food] = newRating;
            }
        }
        console.log(this.d);
    };
    FoodRatings.prototype.highestRated = function (cuisine) {
        var _a;
        var result = "";
        var v = 0;
        var k = "";
        var maxValue = 0;
        for (var _i = 0, _b = Object.entries(this.d[cuisine]); _i < _b.length; _i++) {
            _a = _b[_i], k = _a[0], v = _a[1];
            if (v > maxValue) {
                maxValue = v;
                result = k;
            }
            else if (v == maxValue) {
                var l = result.localeCompare(k);
                console.log(l);
                result = (l > 0) ? result : k;
            }
        }
        return result;
    };
    return FoodRatings;
}());
// const foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
//                                     ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
//                                     [9, 12, 8, 15, 14, 7]);
// foodRatings.changeRating("sushi", 16);
// let result = foodRatings.highestRated("japanese");
// foodRatings.changeRating("ramen", 16);
// result = foodRatings.highestRated("japanese");
// console.log(`The result is ${result}`);
function minimizeMax(nums, p) {
    nums.sort(function (a, b) { return a - b; });
    var l = 0;
    var h = Math.max.apply(Math, nums);
    var ans = 0;
    function computeCnt(mid) {
        var cnt = 0;
        for (var i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] - nums[i] <= mid) {
                ++cnt;
                i++;
            }
        }
        return cnt;
    }
    while (l < h) {
        var mid = Math.floor((l + h) / 2);
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
        var cnt = 1;
        var preBall = position[0];
        for (var i = 1; i < position.length; i++) {
            if (position[i] - preBall >= mid) {
                preBall = position[i];
                ++cnt;
            }
        }
        if (cnt < m)
            return false;
        return true;
    }
    position = position.sort(function (a, b) { return a - b; });
    var l = 0;
    var h = position[position.length - 1];
    var res = 0;
    while (l <= h) {
        var mid = Math.floor((l + h) / 2);
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
    var left = 0;
    var right = 0;
    var cnt = 0;
    var total = 0;
    for (var left_1 = 0; left_1 < nums.length; left_1++) {
        if (nums[left_1] % 2 == 0) {
            left_1++;
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
var nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], k = 2;
var result = numberOfSubarrays(nums, k);
console.log("The result is ".concat(result));
