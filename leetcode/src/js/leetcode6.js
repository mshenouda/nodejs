"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minimizedMaximum(n, quantities) {
    const sum = quantities.reduce((a, b) => a + b, 0);
    function isValid(mid) {
        let result = 0;
        for (let quantity of quantities)
            result += Math.floor(quantity / mid);
        return result;
    }
    function bsearch() {
        let l = 1;
        let r = sum;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let val = isValid(mid);
            if (val >= n)
                l = mid + 1;
            else
                r = mid - 1;
        }
        let minVal = 10 ** 9;
        let index = 0;
        for (let i = l - 1; i < l + 1; i++) {
            let tmp = isValid(i);
            let diff = Math.abs(n - tmp);
            if (diff < minVal) {
                minVal = diff;
                index = i;
            }
        }
        return index;
    }
    const result = bsearch();
    return result;
}
;
// const n = 6, quantities = [11,6];
//const n = 7, quantities = [15,10,10];
// const result: number = minimizedMaximum(n, quantities);
// console.log(`The result is ${result}`);
function minEatingSpeed(piles, h) {
    function isValid(k) {
        let result = 0;
        for (let pile of piles) {
            result += Math.ceil(pile / (1.0 * k));
        }
        return result <= h;
    }
    function bsearch() {
        let l = 1;
        let r = Math.max(...piles);
        let mid = 0;
        while (l < r) {
            mid = l + Math.floor((r - l) / 2);
            if (isValid(mid))
                r = mid;
            else {
                l = mid + 1;
            }
        }
        return r;
    }
    const result = bsearch();
    return result;
}
;
//const piles = [3,6,7,11], h = 8;
//const piles = [30,11,23,4,20], h = 5;
//const piles = [30,11,23,4,20], h = 6;
//const piles = [312884470], h = 312884469;
// const piles = [1,1,1,999999999], h = 10;
// const result: number = minEatingSpeed(piles, h);
// console.log(`The result is ${result}`);
function findClosestElements(arr, k, x) {
    const n = arr.length;
    function bsearch() {
        let l = 1, r = n - 1;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (x <= arr[mid])
                r = mid - 1;
            else
                l = mid + 1;
        }
        return (r == 0) ? r : r + 1;
    }
    const closest = bsearch();
    let result = [arr[closest]];
    k--;
    for (let i = 1; i < n / 2 + 1; i++) {
        if (k > 0 && closest - i > 0) {
            result.push(arr[closest - i]);
            k--;
        }
        if (k > 0 && closest + i < n) {
            result.push(arr[closest + i]);
            k--;
        }
        if (k == 0)
            break;
    }
    console.log('closest', closest);
    result = result.sort((a, b) => a - b);
    return result;
}
;
