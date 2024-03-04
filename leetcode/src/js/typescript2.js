"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
;
function preorderTraversal(root) {
    function dfs(root) {
        if (root == null)
            return;
        values = [...values, root.val];
        if (root.left != null)
            dfs(root.left);
        if (root.right != null)
            dfs(root.right);
    }
    let values = [];
    dfs(root);
    return values;
}
;
// const result = preorderTraversal(root);
// console.log(`Result is ${result}`)
function maxAscendingSum(nums) {
    let partSum = nums[0];
    let maxSum = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1])
            partSum += nums[i];
        else {
            maxSum = Math.max(maxSum, partSum);
            partSum = nums[i];
        }
    }
    return Math.max(partSum, maxSum);
}
;
// const nums: number[] = [10,20,30,5,10,50];
// const nums: number[] = [10,20,30,40,50];
// const nums = [12,17,15,13,10,11,12]
// const result = maxAscendingSum(nums);
// console.log(`Result is ${result}`)
function minimumDifference(nums, k) {
    nums.sort((a, b) => b - a);
    let partSum;
    let minSum = nums.reduce((a, b) => a + b, 0);
    let i = 0;
    let j = 0;
    do {
        j = i + k - 1;
        if (j < nums.length) {
            partSum = nums[i] - nums[j];
            minSum = Math.min(partSum, minSum);
        }
        i++;
    } while (j < nums.length);
    return minSum;
}
;
// const nums: number[] = [9,4,1,7], k: number = 2;
// const nums: number[] = [90], k = 1
// const nums: number[] = [9,4], k: number = 2;
// const result = minimumDifference(nums, k);
// console.log(`Result is ${result}`)
function numDifferentIntegers(word) {
    const re = (/[0-9]+/g);
    let result = word.match(re);
    let i = 0;
    while (result != null && i < result.length) {
        while (result[i][0] == '0') {
            result[i] = result[i].slice(1);
        }
        i++;
    }
    ;
    const s = [...new Set(result)];
    return s.length;
}
;
// const word = "a123bc34d8ef34"
// const word = "a1b01c001"
//const word = "0a0"
// const word = "035985750011523523129774573439111590559325";
// const result = numDifferentIntegers(word);
// console.log(`Result is ${result}`)
function truncateSentence(s, k) {
    const result = s.split(" ");
    result.length = k;
    return result.join(" ");
}
;
// const s = "Hello how are you Contestant", k = 4;
// const result = truncateSentence(s, k);
// console.log(`Result is ${result}`)
function areOccurrencesEqual(s) {
    let counter = {};
    for (let chr of s) {
        if (!counter[chr])
            counter[chr] = 1;
        else
            counter[chr]++;
    }
    const values = Object.values(counter);
    return [...new Set(values)].length == 1;
}
;
// const s = "abacbc"
// const result = areOccurrencesEqual(s);
// console.log(`Result is ${result}`)
function shift(s, shift) {
    const code = s.charCodeAt(0) + shift;
    return String.fromCharCode(code);
}
function replaceDigits(s) {
    let result = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 1)
            result[i] = shift(s[i - 1], Number(s[i]));
    }
    return result.join("");
}
;
// const s = "a1c1e1";
// const result = replaceDigits(s);
// console.log(`Result is ${result}`)
function minOperations(nums) {
    if (nums.length == 1)
        return 0;
    let counter = 0;
    for (let i = 1; i < nums.length; i++) {
        const expected = Math.max(nums[i - 1] + 1, nums[i]);
        counter += expected - nums[i];
        nums[i] = expected;
    }
    return counter;
}
;
// const nums = [1,1,1];
// const nums: number[] = [1,5,2,4,1]
// const result = minOperations(nums);
// console.log(`Result is ${result}`)
function getMinDistance(nums, target, start) {
    if (nums.length == 1)
        return 0;
    const indices = nums.map((value, index) => {
        if (value == target)
            return index;
    }).filter(x => x != undefined);
    let minDis = nums.length;
    for (let index of indices) {
        minDis = Math.min(Math.abs(index - start), minDis);
    }
    return minDis;
}
;
// const nums = [1,2,3,4,5], target = 5, start = 3;
// const nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0;
// const result = getMinDistance(nums, target, start);
// console.log(`Result is ${result}`);
function inorderTraversal(root) {
    function dfs(root) {
        if (root == null)
            return;
        if (root.left != null)
            dfs(root.left);
        result = [...result, root.val];
        if (root.right != null)
            dfs(root.right);
    }
    ;
    let result = [];
    dfs(root);
    return result;
}
;
function postorderTraversal(root) {
    function dfs(root) {
        if (root == null)
            return;
        if (root.left != null)
            dfs(root.left);
        if (root.right != null)
            dfs(root.right);
        result = [...result, root.val];
    }
    ;
    let result = [];
    dfs(root);
    return result;
}
;
function sumOfLeftLeaves(root) {
    function isLeaf(root) {
        return root.left == null && root.right == null;
    }
    function dfs(root, flag = "root") {
        let result = 0;
        if (root == null)
            return 0;
        if (root && isLeaf(root) && flag == "left")
            return root.val;
        if (root && isLeaf(root) && flag == "right")
            return 0;
        if (root && isLeaf(root) && flag == "root")
            return 0;
        if (root && root.left)
            result += dfs(root.left, "left");
        if (root && root.right)
            result += dfs(root.right, "right");
        return result;
    }
    const result = dfs(root);
    return result;
}
function largestOddNumber(num) {
    if (Number(num) % 2 == 1)
        return num;
    let j = 0;
    let result = "";
    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) % 2 == 1) {
            for (let k = j; k <= i; k++)
                result = result.concat(num[k]);
            j = i + 1;
        }
    }
    return result;
}
;
//const  num = "52";
// const  num = "10133890"; 
// const result: string = largestOddNumber(num);
// console.log(`Result is ${result}`);
function canBeTypedWords(text, brokenLetters) {
    const words = text.split(" ");
    let failed = 0;
    for (const word of words) {
        for (const letter of brokenLetters.split(""))
            if (word.includes(letter)) {
                failed++;
                break;
            }
    }
    return words.length - failed;
}
;
//const text = "hello world", brokenLetters = "ad";
// const text = "leet code", brokenLetters = "lt"
// const result: number = canBeTypedWords(text, brokenLetters);
// console.log(`Result is ${result}`);
function sortSentence(s) {
    let words = s.split(" ");
    function compare(a, b) {
        if (a[a.length - 1] < b[b.length - 1])
            return -1;
        if (a[a.length - 1] > b[b.length - 1])
            return 1;
    }
    words.sort((a, b) => compare(a, b));
    words = words.map(x => x.slice(0, x.length - 1));
    return words.join(" ");
}
;
// const s: string = "is2 sentence4 This1 a3";
// const result: string = sortSentence(s);
// console.log(`Result is ${result}`);
function reformatNumber(number) {
    const nums = number.replace(/[\-\ \.]/g, "");
    let i = 0;
    let result = [];
    while (i < nums.length) {
        if (nums.length % 4 == 0) {
            result.push(nums.slice(0, 4));
            i += 4;
        }
        else if (nums.length % 2 == 0) {
            result.push(nums.slice(0, 2));
            i += 2;
        }
        else {
            result.push(nums.slice(0, 3));
            i += 3;
        }
    }
    console.log(result);
    console.log(nums);
    return "";
}
;
// const number = "1-23-45 6";
// const result: string = reformatNumber(number);
// console.log(`Result is ${result}`);
function bfs(nums) {
    if (nums.length == 0)
        return null;
    let queue = [];
    let root = new TreeNode(nums[0]);
    queue.push(root);
    let i = 1;
    while (queue.length > 0) {
        let parent = queue.shift();
        let j = 0;
        while (i + j < nums.length && j < 2) {
            if (nums[i + j] !== null) {
                let child = new TreeNode(nums[i + j]);
                if ((i + j) % 2 == 1)
                    parent.left = child;
                else
                    parent.right = child;
                queue.push(child);
            }
            j++;
        }
        i += j;
    }
    return root;
}
function traverseTree(root) {
    if (root == null)
        return [];
    let queue = [];
    queue.push(root);
    let result = [];
    while (queue.length > 0) {
        const child = queue.shift();
        result.push(child.val);
        if (child.left != null)
            queue.push(child.left);
        if (child.right != null)
            queue.push(child.right);
    }
    ;
    return result;
}
function islandPerimeter(grid) {
    if (grid.length == 0)
        return 0;
    const rows = grid.length;
    const columns = grid[0].length;
    let gridObjs = grid.map(row => row.map(x => {
        let obj = { value: 0, visited: false };
        obj["value"] = x;
        obj["visited"] = false;
        return obj;
    }));
    let intersets = 0;
    function dfs(gridObjs, row = 0, column = 0, oldrow = 0, oldcolumn = 0) {
        let squares = 0;
        if ((row >= 0 && row < rows) && (column >= 0 && column < columns)) {
            if (gridObjs[row][column].value == 0)
                return 0;
            if (Math.abs(row - oldrow) == 1 || Math.abs(column - oldcolumn) == 1)
                intersets++;
            if (gridObjs[row][column].visited)
                return 0;
            if (!gridObjs[row][column].visited && gridObjs[row][column].value == 1) {
                gridObjs[row][column].visited = true;
                squares++;
            }
            squares += dfs(gridObjs, row + 1, column, row, column);
            squares += dfs(gridObjs, row - 1, column, row, column);
            squares += dfs(gridObjs, row, column - 1, row, column);
            squares += dfs(gridObjs, row, column + 1, row, column);
        }
        return squares;
    }
    let squares = 0;
    for (let row = 0; row < rows; row++)
        for (let column = 0; column < columns; column++)
            squares += dfs(gridObjs, row, column, row, column);
    const perimeter = 4 * squares - intersets;
    return perimeter;
}
;
// const nums: number[] = [0,2,4,1,null,3,-1,5,1,null,6,null,8];
// const nums: number[] = [1,2,3,4,5];
// const nums: number[] = [1];
// const root:TreeNode | null = bfs(nums);
// let result: any[] = traverseTree(root);
// console.log(`Result is ${result}`)
// const result: number = sumOfLeftLeaves(root);
// console.log(`Result is ${result}`);
// let grid: number[][] = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];
// let grid: number[][] = [[1,1,1,1],[0,0,0,0],[0,0,0,0],[1,1,1,1]];
//let grid: number[][] = [[1,1],[1,1]];
// console.log(row, column, gridObjs[row][column].value);
// console.log(`squares = ${squares}, intersects = ${intersets}`);
// let grid: number[][] = [[1, 1],[1, 1]];
// const result: number = islandPerimeter(grid);
// console.log(`Result is ${result}`);
function isSubtree(root, subRoot) {
    function dfs(root) {
        //     if(root == null)
        //         return null;
        //     return root.val;
        if (root.left)
            return dfs(root.left);
        if (root.right)
            return dfs(root.right);
    }
    dfs(root);
    return false;
}
;
// const nums: number[] = [3,4,5,1,2];
// const subNums: number[] = [4,1,2];
// const root:TreeNode | null = bfs(nums);
// const subRoot:TreeNode | null = bfs(subNums);
// const result: boolean = isSubtree(root, subRoot);
// console.log(`Result is ${result}`);
class Graph {
    constructor(n) {
        this.V = n;
        this.adj = new Array(n);
        this.visited = new Array(n);
        for (let i = 0; i < this.V; i++) {
            this.adj[i] = [];
            this.visited[i] = false;
        }
    }
    addEdge(edge) {
        const [v, w] = [...edge];
        this.adj[v].push(w);
        this.adj[w].push(v);
    }
    dfs(v) {
        this.visited[v] = true;
        console.log(`Visiting now ${v}`);
        for (const neighbour of this.adj[v]) {
            if (!this.visited[neighbour])
                this.dfs(neighbour);
        }
    }
    isVisited(destination) {
        return this.visited[destination];
    }
}
function validPath(n, edges, source, destination) {
    let g = new Graph(n);
    for (const edge of edges)
        g.addEdge(edge);
    g.dfs(source);
    const result = g.isVisited(destination);
    return result;
}
;
// const n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;
// const n = 2, edges = [[0,1],[1,2]], source = 0, destination = 2;
// const n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// const n = 10, edges = [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], source = 7, destination =5;
// const result: boolean = validPath(n, edges, source, destination);
// console.log(`Result is ${result}`);
function largestDivisibleSubset(nums) {
    if (nums.length == 0)
        return [];
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let s = new Set();
    let dp = [...Array(n)].map(x => 1);
    let maxLength = 1;
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
            if (nums[j] % nums[i] == 0 && dp[j] >= dp[i])
                dp[j] = dp[i] + 1;
            if (dp[j] > maxLength) {
                maxLength = dp[j];
                s.add(nums[i]);
                s.add(nums[j]);
            }
        }
    if (Math.max(...dp) == 1)
        return [Math.max(...nums)];
    const result = [...s.values()];
    return result;
}
;
// const nums: number[] = [1,2,3]
// const nums: number[] = [1,2,4,8];
// const nums: number[] = [4,8,10,240];
// const nums: number[] = [2,3,8,9,27];
// const result: number[] = largestDivisibleSubset(nums);
// console.log(`Result is ${result}`);
function pathSum(root, targetSum) {
    let result = [];
    function dfs(root, sum) {
        if (root == null)
            return;
        if (sum < root.val)
            return;
        sum -= root.val;
        if (sum == 0)
            if (root && root.left)
                dfs(root.left, sum);
        if (root && root.right)
            dfs(root.right, sum);
    }
    return [];
}
;
// const nums = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22;
// const root: TreeNode = bfs(nums);
// const result: number[][] = pathSum(root, targetSum);
// console.log(`Result is ${result}`);
function getSumAbsoluteDifferences(nums) {
    const n = nums.length;
    let prefixSum = [...Array(n)].fill(0);
    let suffixSum = [...Array(n)].fill(0);
    prefixSum[0] = nums[0];
    for (let i = 1; i < n; i++)
        prefixSum[i] = nums[i] + prefixSum[i - 1];
    suffixSum[0] = prefixSum[n - 1];
    for (let i = 1; i < n; i++)
        suffixSum[i] = suffixSum[i - 1] - nums[i - 1];
    //computer sum
    let result = [...Array(n)].fill(0);
    for (let i = 0; i < n; i++) {
        const left = nums[i] * i - prefixSum[i];
        const right = suffixSum[i] - (n - i - 1) * nums[i];
        result[i] = left + right;
    }
    return result;
}
;
// const nums: number[] = [2,3,5]
// const result: number[] = getSumAbsoluteDifferences(nums);
// console.log(`Result is ${result}`);
function carPooling(trips, capacity) {
    let range = 0;
    trips.forEach(t => range = Math.max(range, t[2]));
    console.log(range);
    let arr = new Array(range + 1).fill(0);
    trips.forEach((t, i) => {
        arr[t[2]] -= t[0];
        arr[t[1]] += t[0];
    });
    console.log(arr);
    // let cur = 0;
    // for(let i = 0; i <= range; i++) {
    //     cur += arr[i];
    //     if(cur > capacity) return false;
    // }
    return true;
}
;
const trips = [[2, 1, 5], [3, 3, 7]], capacity = 4;
// const trips = [[2,1,5],[3,3,7]], capacity = 5;
//const trips= [[9,3,6],[8,1,7],[6,6,8],[8,4,9],[4,2,9]], capacity= 28
//const trips= [[3,2,7],[3,7,9],[8,3,9]], capacity=11
// const result: boolean = carPooling(trips, capacity);
// console.log(`Result is ${result}`);
function search(nums, target) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target == nums[mid])
            return mid;
        //search left sorted array
        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left])
                left = mid + 1;
            else
                right = mid - 1;
        }
        else {
            if (target < nums[mid] || target > nums[right])
                right = mid - 1;
            else
                left = mid + 1;
        }
    }
    ;
    return -1;
}
;
// const nums = [4,5,6,7,0,1,2], target = 0;
// const result: number = search(nums, target);
// console.log(`Result is ${result}`);
function maxScore(cardPoints, k) {
    const n = cardPoints.length;
    const j = n - k;
    let sum = cardPoints.slice(j).reduce((a, b) => a + b, 0);
    let result = 0;
    let left = j;
    let right = n - 1;
    while (right != k - 1) {
        sum -= cardPoints[left++];
        right = (right + 1) % n;
        sum += cardPoints[right];
        result = Math.max(result, sum);
    }
    return result;
}
;
// const cardPoints = [1,2,3,4,5,6,1], k = 3
//const cardPoints = [9,7,7,9,7,7,9], k = 7
//const cardPoints = [11,49,100,20,86,29,72], k = 4
//const cardPoints = [1,1000,1], k = 1
//const cardPoints = [96,90,41,82,39,74,64,50,30], k = 8
//const cardPoints = [100,40,17,9,73,75], k = 3
//const cardPoints = [2,2,2], k = 2;
// const result: number = maxScore(cardPoints, k);
// console.log(`Result is ${result}`);
function areSame(x, y) {
    for (let i = 0; i < 26; i++) {
        if (x[i] != y[i]) // compare all the frequency & doesnn't find any di-similar frequency return true otherwise false
            return false;
    }
    return true;
}
function findAnagrams(s, p) {
    function freq(s) {
        let count = [...Array(25)].fill(0); // create array of size 26
        for (let i = 0; i < s.length; i++) {
            const char = 'a';
            let val = s.charAt(i) - char.charAt(0);
            val = parseInt(val, 10);
            console.log(s.charAt(i), val);
            //count[val]++; // update acc. to it's frequency
        }
        return count;
    }
    if (s.length < p.length)
        return [];
    const N = s.length; // Array1 of s
    const M = p.length; // Array2 of p
    let count = freq(p); // intialize only 1 time
    console.log(count);
    // let currentCount: number[] = freq(s.substring(0, M)); // freq function, update every-time according to sliding window
    // console.log(count, currentCount);
    let result = [];
    // if(areSame(count,currentCount)) // areSame function
    //     result.push(0);
    // for(let i: any =M;i<N;i++){ // going from 3 to 9 in above example
    //     const char: any = 'a';
    //     let blue: any = s.charAt(i-M);
    //     let red: any =  s.charAt(i);
    //     blue -= char;
    //     red -= char;
    //     currentCount[blue]--; // blue pointer, decrement frequency
    //     currentCount[red]++; // red pointer, increment frequency
    //     console.log(currentCount);
    //     if(areSame(count,currentCount)){ // now check, both array are same
    //         result.push(i-M+1); // if we find similar add their index in our list
    //     }
    // }
    return result;
}
;
// const s = "cbaebabacd", p = "abc";
//const s = "abab", p = "ab"
// const s = "ababababab", p = "aab"
// const result: number[] = findAnagrams(s, p);
// console.log(`Result is ${result}`);
function checkInclusion(s1, s2) {
    function fillMap(s1) {
        let obj = {};
        for (let letter of s1) {
            if (!obj[letter])
                obj[letter] = 1;
            else
                obj[letter]++;
        }
        return obj;
    }
    function compareMap(map1, map2) {
        for (const key of Object.keys(map1)) {
            if (map2[key] == null)
                return false;
            if (map1[key] != map2[key])
                return false;
        }
        return true;
    }
    const map1 = fillMap(s1);
    let right = s1.length;
    let sw = [];
    for (let i = 0; i < right; i++)
        sw = [...sw, s2[i]];
    while (right <= s2.length) {
        let map2 = fillMap(sw.join(""));
        if (compareMap(map1, map2)) {
            console.log(right);
            return true;
        }
        sw.shift();
        sw = [...sw, s2[right++]];
    }
    ;
    return false;
}
;
//const s1 = "ab", s2 = "eidbaooo";
// const s1 = "adc", s2 = "dcda";
// const result: boolean = checkInclusion(s1, s2);
// console.log(`Result is ${result}`);
function numSubarrayProductLessThanK(nums, m) {
    if (m <= 1)
        return 0;
    let prod = 1, ans = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        prod *= nums[right];
        while (prod >= m)
            prod /= nums[left++];
        ans += right - left + 1;
    }
    return ans;
}
;
// let nums = [10,5,2,6], m = 100
// const result: number = numSubarrayProductLessThanK(nums, m);
// console.log(`Result is ${result}`);
function closestCost(baseCosts, toppingCosts, target) {
    let result = 0;
    let tmp = [];
    const n = toppingCosts.length;
    let tmpCost = [];
    function dfs(i) {
        let result = 0;
        for (let j = i; j < toppingCosts.length; j++) {
            result += 1 * toppingCosts[j] + dfs(j + 1);
            result += 2 * toppingCosts[j] + dfs(j + 1);
            console.log(result);
            // tmpCost = [...tmpCost, 0*toppingCosts[j], ...dfs(j+1)];
            // tmpCost = [...tmpCost, 1*toppingCosts[j], ...dfs(j+1)];
            // tmpCost = [...tmpCost, 2*toppingCosts[j], ...dfs(j+1)];
        }
        return result;
    }
    result = dfs(0);
    console.log(result);
    // for(let i=0; i < baseCosts.length; i++)
    //     for(let j=0; j < 3; j++)
    return result;
}
;
// const baseCosts = [1,7], toppingCosts = [3,6], target = 10
// closestCost(baseCosts, toppingCosts, target);
function updateMatrix(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let matObjs = mat.map(row => row.map(column => {
        let obj = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));
    function dfs(r, c, newr, newc) {
        if (newr < 0 || newr > rows - 1 || newc < 0 || newc > cols - 1)
            return 1e6;
        if (matObjs[newr][newc].vistied)
            return 1e6;
        if (matObjs[newr][newc].value == 0)
            return Math.abs(newr - r) + Math.abs(newc - c);
        matObjs[r][c].visited = true;
        let dist = 1e6;
        dist = Math.min(dist, dfs(r, c, r, c + 1));
        dist = Math.min(dist, dfs(r, c, r, c - 1));
        dist = Math.min(dist, dfs(r, c, r - 1, c));
        dist = Math.min(dist, dfs(r, c, r - 1, c));
        matObjs[r][c].visited = false;
        return dist;
    }
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++) {
            if (matObjs[i][j].value > 0) {
                const dist = dfs(i, j, i, j);
                matObjs[i][j].value = dist;
                matObjs[i][j].visited = true;
            }
        }
    console.log(matObjs);
    return [];
}
;
//const mat: number[][] = [[0,0,0],[0,1,0],[0,0,0]]
// const mat: number[][] = [[0,0,0],[0,1,0],[1,1,1]]
// const result: number[][] = updateMatrix(mat);
// console.log(`Result is ${result}`);
// function scoreOfParentheses(s: string): number {
//     let stack: string[] = [];
//     let counter: number = 0;
//     let length: number = 0;
//     for(let char of s) {
//         if (char == '(') {
//             stack.push('(');
//             length++;
//         }
//         else if ( char == ')')
//         {
//             if (stack[length-1] == '(') {
//                 length--;
//                 counter++;
//                 stack.pop();
//             }
//         }
//     }
//     return counter;
// };
// const s = "(())";
function scoreOfParentheses(s) {
    let n = s.length;
    function dfs(curr, i) {
        if (i == n)
            return 1;
        // if (old == ')' && curr == ')') return 1;
        // if (old == '(' && curr == ')') return 1;
        let result = 1;
        if (curr == '(' && s[i + 1] == ')')
            result += 1 + dfs(s[i + 1], i + 1);
        if (curr == '(' && s[i + 1] == '(')
            result *= 2 + dfs(s[i + 1], i + 1);
        return result;
    }
    const result = dfs(s[0], 0);
    return result;
}
const s = "()";
