"use strict";
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
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function bfs(nums) {
    if (nums.length == 0)
        return null;
    var queue = [];
    var root = new TreeNode(nums[0]);
    queue.push(root);
    var i = 1;
    while (queue.length > 0) {
        var parent_1 = queue.shift();
        var j = 0;
        while (i + j < nums.length && j < 2) {
            if (nums[i + j] !== null) {
                var child = new TreeNode(nums[i + j]);
                if ((i + j) % 2 == 1)
                    parent_1 !== undefined ? parent_1.left = child : undefined;
                else
                    parent_1 !== undefined ? parent_1.right = child : undefined;
                queue.push(child);
            }
            j++;
        }
        i += j;
    }
    return root;
}
function kthLargestLevelSum(root, k) {
    var dp = {};
    function dfs(root, level) {
        if (level === void 0) { level = 0; }
        if (root == null)
            return;
        if (dp[level] == undefined)
            dp[level] = root.val;
        else
            dp[level] += root.val;
        if (root.left)
            dfs(root.left, level + 1);
        if (root.right)
            dfs(root.right, level + 1);
    }
    dfs(root);
    var sorted = Object.values(dp);
    sorted.sort(function (a, b) { return b - a; });
    return sorted[k - 1];
}
;
// const nums: number[] = [5,8,9,2,1,3,7,4,6], k = 2;
// const root: TreeNode | null = bfs(nums);
// const result = kthLargestLevelSum(root, k);
// console.log(`The result is ${result}`);
function reverseOddLevels(root) {
    function dfs(root, level) {
        if (level === void 0) { level = 0; }
        if (root === null)
            return;
        if (level % 2 == 0 && root.left != null) {
            dfs(root.left, level + 1);
        }
        if (level % 2 == 0 && root.right != null) {
            dfs(root.right, level + 1);
        }
        if (level % 2 == 1 && root.left != null) {
            var tmp = root.left;
            root.left = root.right;
            root.right = tmp;
            dfs(root.left, level + 1);
        }
        if (level % 2 == 1 && root.right != null) {
            var tmp = root.left;
            root.left = root.right;
            root.right = tmp;
            dfs(root.right, level + 1);
        }
    }
    dfs(root);
    return root;
}
// const nums: number[] = [2,3,5,8,13,21,34];
// const root: TreeNode | null = bfs(nums);
// const result: TreeNode | null = reverseOddLevels(root);
// console.log(`The result is ${result}`);
function sumEvenGrandparent(root) {
    function dfs(root) {
        if (root == null)
            return 0;
        var result = 0;
        if (root.left != null) {
            if (root.val % 2 == 0 && root.left.left != null)
                result += root.left.left.val;
            if (root.val % 2 == 0 && root.left.right != null)
                result += root.left.right.val;
            result += dfs(root.left);
        }
        if (root.right != null) {
            if (root.val % 2 == 0 && root.right.left != null)
                result += root.right.left.val;
            if (root.val % 2 == 0 && root.right.right != null)
                result += root.right.right.val;
            result += dfs(root.right);
        }
        return result;
    }
    var result = dfs(root);
    return result;
}
;
//const nums: any[] = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5];
//const nums: any[] = [61,13,46,null,null,null,56,72];
// const root: any = bfs(nums);
// const result = sumEvenGrandparent(root);
// console.log(`The result is ${result}`);
function findSecondMinimumValue(root) {
    var result = new Set();
    function dfs(root, result) {
        if (!root)
            return;
        result.add(root.val);
        if (root.left != null)
            dfs(root.left, result);
        if (root.right != null)
            dfs(root.right, result);
    }
    dfs(root, result);
    var sortedArray = Array.from(result).sort(function (a, b) { return a - b; });
    return (sortedArray[1] != undefined) ? sortedArray[1] : -1;
}
;
// const nums: any[] = [2,2,5,null,null,5,7];
// const root: any = bfs(nums);
// const result: number = findSecondMinimumValue(root);
// console.log(`The result is ${result}`);
function widthOfBinaryTree(root) {
    var d = {};
    function dfs(root, level, counter) {
        if (level === void 0) { level = 0; }
        if (counter === void 0) { counter = 0; }
        if (root == null)
            return;
        if (root.val != null) {
            if (d[level] == undefined) {
                counter = 0;
                d[level] = [counter];
            }
            else
                d[level] = __spreadArray(__spreadArray([], d[level], true), [counter], false);
        }
        if (root.left != null)
            dfs(root.left, level + 1, counter + 1);
        if (root.right != null)
            dfs(root.right, level + 1, counter + 1);
    }
    dfs(root);
    console.log(d);
    return 0;
}
;
var nums = [1, 3, 2, null, 5, null, 9];
var root = bfs(nums);
var targetSum = 8;
var result = widthOfBinaryTree(root);
console.log("The result is ".concat(result));
