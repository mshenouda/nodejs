"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
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
function sumEvenGrandparent(root) {
    // function dfs(root: TreeNode, i: number, grandParent: number, grandChild: number): number
    // {   
    //     let result: number =0;
    //     if (root == null) return 0;
    //     if (root.val % 2 == 0)
    //     {
    //         grandParent = i;
    //         grandChild = (i+2 >);
    //     }
    //     if (root.left)
    //         result += dfs(root.left)
    //     if (root.right)
    //     result += dfs(root.right)
    // const result: number = dfs(root, 0, 0, 0);
    // return result;
    return 0;
}
;
function largestValues(root) {
    let obj = {};
    function dfs(root, level) {
        if (root == null)
            return;
        if (obj[level] == undefined)
            obj[level] = root.val;
        else
            obj[level] = Math.max(obj[level], root.val);
        if (root.left)
            dfs(root.left, level + 1);
        if (root.right)
            dfs(root.right, level + 1);
    }
    dfs(root, 0);
    return Object.values(obj);
}
;
// const nums = [1,3,2,5,3,null,9]
// const nums = [-40, 0, -37];
// const root: TreeNode = bfs(nums);
// const result: number[] = largestValues(root);
// console.log(`The result is ${result}`);
// const nums = [1,2,3]
//const nums = [-40,0,-37,17,-87,-13,62,82,-57,45,-52,3,-22,-55,-54,11,-2,60,69,-21,23,36,-100,6,-80,93,-55,67,78,-22,-70,-44,null,17,-38,77,-13,97,-22,66,-42,89,-69,-51,-2,-16,-72,-29,-49,-13,76,null,null,-56,-79,-4,84,-79,-71,-58,null,-59,71,-20,38,null,null,27,-47,46,42,-19,66,84,-4,null,null,null,null,null,null,78,-28,-3,12,21,-27,null,39,-15,-99,51,-14,38,78,56,-24,58,59,42,24,-26,18,-63,null,-3,77,null,null,-52,null,74,-55,null,-91,-80,-86,-23,null,11,-60,-84,null,null,null,null,null,-59,-45,-13,null,90,-3,-38,-5,1,-1,-90,null,53,-57,-25,32,-94,-52,-31,-90,65,85,23,62,null,null,70,-15,22,-37,7,26,81,94,23,48,-82,96,-91,-12,67,5,61,59,25,-45,-25,88,-20,64,-18,-55,42,-59,21,-69,-2,-36,34,17,null,null,-20,14,41,19,null,null,84,-55,-68,-88,98,-29,-46,10,97,-92,10,null,null,98,-31,76,null,null,-29,null,-12,-52,-21,-14,59,75,31,null,89,null,70,null,4,null,61,53,62,23,25,27,-62,-52,null,-99,null,null,88,88,63,null,null,null,null,null,-43,null,-92,23,-49,53,68,-44,-73,-95,81,21,-77,39,-41,-62,3,25,null,null,null,null,null,-44,null,null,63,null,-54,-13,null,null,-83,52,-57,29,78,62,83,null,54,null,74,53,null,8,33,66,32,21,null,51,-94,25,5,16,null,-81,null,null,null,null,null,null,-28,17,76,18,85,null,-65,null,null,null,null,null,75,null,-26,49,69,-9,-51,null,-11,null,null,3,-38,0,-61,-43,60,null,null,79,null,-84,null,null,-81,-38,-43,20,-97,-72,null,null,null,53,38,null,69,null,-67,38,null,null,null,null,null,-67,-91,-96,81,44,null,null,-97,null,null,null,33,51,60,null,null,null,null,49,null,null,-6,null,-63,null,null,71,null,null,null,-34,null,null,-58,98,50,-85,6,23,-34,93,-52,83,20,-9,33,null,-26,-85,-36,-56,26,-13,-35,-73,-17,-97,-42,86,42,null,95,67,null,63,null,null,null,null,25,null,null,null,null,-90,-59,8,86,null,null,null,-89,19,31,68,-32,null,null,-84,null,null,-59,null,null,86,-56,null,null,-20,-26,-11,37,null,12,null,null,null,-9,80,null,-27,null,58,-37,null,73,null,null,null,-70,-75,-17,null,null,null,null,null,-46,null,null,15,null,-75,74,43,54,43,-35,null,-14,null,-22,null,null,null,null,-96,66,null,-8,-8,null,null,null,null,-74,null,-43,-33,25,null,-43,-49,98,97,-36,46,null,-81,-62,-2,null,null,null,null,null,-53,-6,-59,null,null,null,null,-16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,-49,12,22,98,null,null,null,45,33,0,null,null,-95,91,-80,-88,-17,null,83,38,null,-99,-21,null,null,-81,-61,87,41,-35,37,19,-37,-12,7,null,-52,-93,62,-31,-18,-57,-29,-67,-73,57,3,-33,null,-79,-74,94,2,null,-85,-87,95,null,null,null,null,63,null,null,null,null,null,18,null,-74,null,-3,-96,null,46,27,-26,82,24,-96,null,null,null,null,46,null,null,null,null,37,null,null,null,4,-5,9,11,-86,null,-13,null,null,null,-68,null,null,6,null,null,null,null,null,null,null,null,null,null,null,71,24,3,null,-74,null,null,null,null,-66,-61,82,-47,null,null,null,93,null,null,null,null,61,null,-71,null,null,null,null,null,null,null,null,null,null,null,-93,64,-67,null,97,45,null,null,null,null,null,32,-61,null,-53,null,-14,-9,-91,null,93,-71,null,null,42,null,null,null,null,57,null,null,null,null,null,-2,null,null,-1,43,null,null,null,-30,null,null,50,36,89,-72,null,86,-7,-87,-94,72,null,2,71,7,null,null,null,45,-6,-2,-79,8,32,36,-98,-40,77,0,null,-19,null,29,78,null,null,-58,null,47,86,null,null,90,null,null,-14,null,-1,null,-65,49,null,null,72,70,null,null,null,null,null,90,null,null,-51,50,-73,-46,-34,5,7,null,null,35,null,null,null,null,null,null,32,null,null,null,null,-41,99,null,-98,-90,null,45,null,null,null,null,null,99,null,-6,null,null,null,-20,null,null,38,2,21,78,null,null,null,null,-30,null,null,-36,null,-5,68,null,40,-33,-92,null,null,17,null,null,83,null,null,null,null,33,null,null,null,null,-20,-95,null,null,-68,null,-9,-9,7,21,-47,71,-97,null,null,null,30,null,null,-69,null,null,-42,null,-65,null,40,98,null,null,6,null,-27,95,-26,-100,null,null,75,null,6,-77,null,null,null,null,-14,null,null,70,null,null,80,null,null,null,null,null,null,null,-59,null,74,null,30,null,-71,29,null,-4,-8,-55,-79,-91,19,14,34,null,-62,null,5,22,-38,null,null,null,null,null,null,-57,null,null,null,null,51,8,14,-17,-7,-79,-65,-68,69,50,-100,91,-1,66,31,28,null,19,-50,62,23,4,17,-83,-84,2,-22,null,null,null,null,null,9,37,-79,null,23,null,null,null,null,null,-74,11,-2,null,null,null,null,null,null,null,null,-74,null,null,-78,null,30,null,-82,null,-51,null,null,null,null,null,59,-90,null,-8,null,null,null,null,null,88,null,3,null,null,null,null,57,null,null,null,null,null,null,null,-26,null,null,-62,null,null,null,null,75,null,null,null,83,52,null,-31,null,null,-78,null,-71,9,87,34,null,51,28,null,null,-54,14,null,null,-25,-11,80,null,null,-20,-40,null,null,null,null,-28,null,null,null,-94,-46,null,-3,null,37,-70,-22,null,null,-89,-28,1,83,41,18,-9,null,-46,61,null,89,-17,-29,null,-32,-78,-20,15,null,72,null,-38,7,null,null,null,-13,50,-81,null,26,70,-94,null,null,-76,-3,52,20,null,91,40,91,null,null,null,null,null,null,32,null,null,null,40,37,29,-53,-45,-98,-57,-53,null,null,null,7,93,-37,-64,-65,null,92,-47,58,13,null,null,null,null,null,67,-48,null,-33,-46,null,null,null,-65,null,null,null,null,null,-49,-85,-58,null,null,62,null,null,null,null,null,null,null,null,-33,null,null,null,-47,null,null,null,null,null,null,-37,null,null,-91,-100,null,null,null,null,null,-59,null,27,null,null,null,42,null,null,null,null,-59,null,null,null,-25,38,20,-60,null,null,null,-1,-16,null,null,null,null,null,null,-15,-10,75,27,86,-2,-43,38,null,null,-82,null,null,null,null,null,80,75,60,89,-11,null,null,null,15,-93,75,55,-89,null,null,null,null,51,-40,null,null,-22,null,null,null,null,-49,-24,68,null,null,85,78,null,null,-96,29,51,74,-93,null,null,36,-26,null,null,3,-65,null,65,null,70,null,null,null,-81,-74,87,null,null,null,-54,39,99,-72,null,null,8,-14,null,null,null,null,-96,90,null,null,51,-61,null,-67,null,null,null,-65,null,null,-41,21,null,null,null,null,51,null,null,null,null,null,null,null,null,null,null,-26,null,null,null,-95,-52,null,null,null,null,null,null,null,null,null,null,null,97,null,-73,null,76,-52,4,null,null,57,-85,43,64,null,null,null,null,null,null,null,62,41,-100,-64,null,75,null,-99,null,-43,null,null,-64,-23,-68,null,null,null,71,-12,-62,93,18,null,-3,-66,96,-99,30,null,32,-41,-25,null,null,41,null,null,null,null,null,null,-32,-56,-32,0,null,49,null,null,null,null,-85,-60,53,null,null,null,-90,99,6,62,null,null,-52,null,null,null,-51,-4,null,null,null,-94,-94,null,-48,null,null,null,null,99,null,null,null,-93,null,-63,14,null,null,-83,32,null,41,null,null,74,null,null,null,null,49,null,80,null,null,null,null,null,null,null,null,null,null,50,null,-53,null,-71,null,null,null,null,null,null,null,null,-71,-51,48,null,null,31,null,null,26,7,null,null,-60,null,null,null,22,null,null,90,null,null,83,null,null,-84,-100,-18,null,null,null,-81,null,-9,-60,null,-97,null,-56,46,-56,88,-26,null,null,-76,null,95,null,null,null,53,-34,null,7,65,null,null,null,-63,-44,16,null,null,-28,null,-40,89,5,-87,-95,99,11,-18,-13,59,null,null,null,null,13,19,null,-24,70,91,null,20,16,null,null,null,null,null,null,null,94,null,null,null,null,62,null,null,null,null,null,null,38,null,68,14,42,null,null,84,75,null,56,null,-58,null,89,-72,15,-59,-98,-66,null,33,-33,27,-13,null,null,null,null,77,null,null,null,null,-39,null,94,-29,null,null,null,null,null,null,53,null,-73,88,null,null,null,null,null,35,null,null,null,57,53,null,-47,null,77,9,null,-17,-16,null,41,-48,60,89,78,-75,null,null,10,-89,39,null,-41,null,null,null,-21,84,null,null,56,12,null,64,null,null,null,null,null,null,null,null,null,null,84,null,null,null,null,null,null,null,null,null,null,null,null,84,-75,null,null,null,-23,null,null,null,null,null,null,null,61,null,null,89,null,null,null,null,null,null,-40,null,null,null,null,-57,null,null,null,null,-95,null,null,null,-97,null,null,null,null,null,null,null,-77,0,null,null,null,null,null,null,null,null,-30,null,null,67,-56,52,null,-29,null,null,-20,81,null,-55,-27,74,79,32,null,null,-33,-17,96,null,null,null,null,null,null,null,86,-16,null,null,null,null,-68,null,null,null,null,null,null,34,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,-85,null,56,22,-5,-77,null,null,null,null,-82,null,null,null,null,null,null,null,null,null,81,null,null,null,51,null,null,-22,null,null,null,null,null,null,null,null,null,null,-82,null,72,null,null,null,-30,1,null,null,null,-37,null,null,null,null,-85,null,null,null,null,null,null,null,null,null,null,null,3]
function largestValues2(root) {
    function bfs(root) {
        if (root == null)
            return [];
        let queue = [];
        queue[0] = { 'value': root, 'level': 0 };
        let obj = {};
        let level = 0;
        let maxLevel = 0;
        let leftMost = -1;
        while (queue.length > 0) {
            let node = queue.shift();
            const newLevel = node["level"];
            if (obj[newLevel] == undefined)
                obj[newLevel] = node["value"].val;
            else
                obj[newLevel] = Math.max(obj[newLevel], node["value"].val);
            level++;
            if (node["value"].left)
                queue.push({ 'value': node["value"].left, 'level': level });
            if (node["value"].right)
                queue.push({ 'value': node["value"].right, 'level': level });
        }
        ;
        return leftMost;
    }
    const result = bfs(root);
    return [];
}
// const nums = [-40, 0, -37];
// const root: TreeNode = bfs(nums);
// const result: number[] = largestValues(root);
// console.log(`The result is ${result}`);
function findBottomLeftValue(root) {
    let obj = {};
    function dfs(root, height) {
        if (root == null)
            return;
        if (root) {
            if (obj[height] == undefined)
                obj[height] = root.val;
        }
        if (root.left)
            dfs(root.left, height + 1);
        if (root.right)
            dfs(root.right, height + 1);
    }
    dfs(root, 0);
    const maxKey = Object.keys(obj).sort((a, b) => b - a)[0];
    return obj[maxKey];
}
;
//const nums: number[] =  [1,2,3,4,null,5,6,null,null,7]
//const nums: number[] = [1,2,3,4,10,5,6];
//const nums: number[] = [2,1,3];
//const nums: number[] = [5,14,null,1];
// const root: TreeNode = bfs(nums);
// const result: number = findBottomLeftValue(root);
// console.log(`The result is ${result}`);
function maxLevelSum(root) {
    let obj = {};
    function dfs(root, height) {
        if (root == null)
            return;
        if (root) {
            if (obj[height] == undefined)
                obj[height] = root.val;
            else
                obj[height] += root.val;
        }
        if (root.left)
            dfs(root.left, height + 1);
        if (root.right)
            dfs(root.right, height + 1);
    }
    //dfs(root, 1);
    let maxNum = 0;
    let maxIndex = -1;
    for (const [k, v] of Object.entries(obj)) {
        if (Number(v) > maxNum) {
            maxNum = Number(v);
            maxIndex = Number(k);
        }
    }
    return maxIndex;
}
;
// const nums: number[] = [1,7,0,7,-8,null,null];
// const root: TreeNode = bfs(nums);
// const result: number = maxLevelSum(root);
// console.log(`The result is ${result}`);
function distanceK(root, target, k) {
    let found = false;
    let leastHeight = 0;
    let values = [];
    function dfs(root, height) {
        if (root == null)
            return;
        if (root !== null) {
            if (root.val == target.val) {
                found = true;
                leastHeight = height;
            }
            if (found && height - leastHeight == k)
                values = [...values, root.val];
        }
        if (root.left)
            dfs(root.left, height + 1);
        if (root.right)
            dfs(root.right, height + 1);
    }
    //dfs(root, 0);
    return values;
}
;
// const nums: number[] = [3,5,1,6,2,0,8,null,null,7,4];
// const value: number[] = [5];
// const target: TreeNode = bfs(value), k = 2;
// const root: TreeNode = bfs(nums);
// const result: number[] = distanceK(root, target, k);
// console.log(`The result is ${result}`);
function isEvenOddTree(root) {
    let obj = {};
    function dfs(root, height) {
        if (root == null)
            return;
        if (root) {
            if (obj[height] == undefined)
                obj[height] = [root.val];
            else
                obj[height] = [...obj[height], root.val];
        }
        if (root.left)
            dfs(root.left, height + 1);
        if (root.right)
            dfs(root.right, height + 1);
    }
    dfs(root, 0);
    console.log(obj);
    function isStrictlyIncreasing(values) {
        for (let i = 0; i < values.length - 1; i++)
            if (values[i + 1] <= values[i])
                return false;
        return true;
    }
    function isStrictlyDecreasing(values) {
        for (let i = 0; i < values.length - 1; i++)
            if (values[i + 1] >= values[i])
                return false;
        return true;
    }
    let values = [];
    let k = "";
    for ([k, values] of Object.entries(obj)) {
        if (Number(k) % 2 == 0) {
            if (!isStrictlyIncreasing(values))
                return false;
            if (!values.every((x) => x % 2 == 1))
                return false;
        }
        if (Number(k) % 2 == 1) {
            if (!isStrictlyDecreasing(values))
                return false;
            if (!values.every((x) => x % 2 == 0))
                return false;
        }
    }
    return true;
}
;
//const nums: number[] = [1,10,4,3,null,7,9,12,8,6,null,null,2];
// const nums: number[] = [2,12,8,5,9,null,null,18,16];
// const root: TreeNode = bfs(nums);
// const result: boolean = isEvenOddTree(root);
// console.log(`The result is ${result}`);
function goodNodes(root) {
    let maxNum = 0;
    let counter = 0;
    function dfs(root) {
        if (root == null)
            return;
        if (root.val >= maxNum) {
            maxNum = root.val;
        }
        if (root.left)
            dfs(root.left);
        if (root.val >= maxNum) {
            console.log(counter, maxNum);
            counter++;
        }
        if (root.right)
            dfs(root.right);
        return;
    }
    dfs(root);
    return counter;
}
;
//const nums: number[] = [3,1,4,3,null,1,5];
//const nums: number[] = [3,3,null,4,2]
// const nums: number[] = [2,null,4,10,8,null,null,4]
// const root: TreeNode = bfs(nums);
// const result: number = goodNodes(root);
// console.log(`The result is ${result}`);
function treeHeight(root) {
    let maxHeight = 0;
    function dfs(root, height) {
        if (root == null)
            return 0;
        maxHeight = Math.max(maxHeight, height);
        if (root.left)
            dfs(root.left, height + 1);
        if (root.right)
            dfs(root.right, height + 1);
    }
    dfs(root, 0);
    return maxHeight;
}
// const nums: number[] = [2,null,4,10,8,null,null,4]
// const root: TreeNode = bfs(nums);
// const maxHeight: number = treeHeight(root);
// const nums: number[] =  [2,null,4,10,8,null,null,4];
// const nums =  [4,1,null,0,2,5,3,null,null,null,3,null,null,null,8];
// const root: TreeNode = bfs(nums);
// const result: number = widthOfBinaryTree(root);
// console.log(`The result is ${result}`);
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
function bstToGst(root) {
    function dfs(root) {
        if (root == null)
            return;
        let result = 0;
        if (root.right) {
            dfs(root.right);
            result += root.right.val;
        }
        root.val += result;
        if (root.left) {
            root.left.val += root.val;
            dfs(root.left);
        }
    }
    dfs(root);
    const vals = traverseTree(root);
    console.log(vals);
    return root;
}
;
// const nums =  [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8];
//const nums =  [5,7,4,3,6];
//const nums =  [6, 1, 10];
// const root: TreeNode = bfs(nums);
// const result: TreeNode = bstToGst(root);
// console.log(`The result is ${result}`);
function countNodes(root) {
    function dfs(root) {
        if (root == null)
            return 0;
        let result = 0;
        if (root.left)
            result += dfs(root.left);
        result += 1;
        if (root.right)
            result += dfs(root.right);
        return result;
    }
    const result = dfs(root);
    return result;
}
;
// const nums: number[] = [1,2,3,4,5,6]
// const root: TreeNode = bfs(nums);
// const result: number = countNodes(root);
// console.log(`The result is ${result}`);
function numSubarraysWithSum(nums, goal) {
    let count = 0;
    let left = 0;
    let right = 0;
    let sum = 0;
    let counter = 0;
    while (left < nums.length) {
        while (left < nums.length && sum <= goal) {
            if (sum == goal)
                counter++;
            if (right < nums.length)
                sum += nums[right++];
            else
                sum -= nums[left++];
        }
        sum -= nums[left++];
    }
    return counter;
}
;
//const nums = [1,0,1,0,1], goal = 2
// const nums = [0,0,0,0,0], goal = 0
// const result: number = numSubarraysWithSum(nums, goal);
// console.log(`The result is ${result}`);
function rob(root) {
    let obj = {};
    function dfs(root, level) {
        if (root == null)
            return;
        if (!obj[level])
            obj[level] = root.val;
        else
            obj[level] += root.val;
        if (root.left)
            dfs(root.left, level + 1);
        if (root.right)
            dfs(root.right, level + 1);
    }
    dfs(root, 0);
    console.log(obj);
    const n = Object.keys(obj).length;
    let dp = [...Object.values(obj)];
    let maxResult = 0;
    for (let i = 0; i < n; i++) {
        maxResult = Math.max(maxResult, dp[i]);
        for (let j = i + 1; j < n; j++)
            if (j > i + 1)
                maxResult = Math.max(maxResult, dp[i] + dp[j]);
    }
    return maxResult;
}
;
//const nums = [3,2,3,null,3,null,1];
//const nums = [4,1,null,2,null,3];
//const nums = [3,4,5,1,3,null,1];
// const nums = [2,1,3,null,4];
// const root: TreeNode = bfs(nums);
// const result: number = rob(root);
// console.log(`The result is ${result}`);
function balanceBST(root) {
    let nums = [];
    function inOrder(root) {
        if (root == null)
            return;
        if (root.left)
            inOrder(root.left);
        nums = [...nums, root.val];
        if (root.right)
            inOrder(root.right);
    }
    function bfs(nums) {
        if (nums.length == 0)
            return null;
        if (nums.length == 1)
            return new TreeNode(nums[0]);
        //swap nums
        let tmp = nums[0];
        nums[0] = nums[1];
        nums[1] = tmp;
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
    //sorted nums  
    inOrder(root);
    //construct tree
    const result = bfs(nums);
    return result;
}
;
// const nums = [1,null,2,null,3,null,4,null,null];
// const root: TreeNode = bfs(nums);
// const result: TreeNode = balanceBST(root);
// const values: number[]= traverseTree(result);
// console.log(`The result is ${values}`);
function getTargetCopy(original, cloned, target) {
    let result = new TreeNode();
    function dfs(original, cloned) {
        if (original == null)
            return null;
        if (original.left)
            dfs(original.left, cloned.left);
        if (original.val == target.val)
            result = cloned;
        if (original.right)
            dfs(original.right, cloned.right);
    }
    dfs(original, cloned);
    return result;
}
;
// const nums = [7,4,3,null,null,6,19], target2 = [3];
// const root: TreeNode = bfs(nums);
// const target: TreeNode = bfs(target2);
// const result: TreeNode = getTargetCopy(root, root, target);
// const values: number[]= traverseTree(result);
// console.log(`The result is ${values}`);
// function bstFromPreorder(nums: number[]): TreeNode | null {
//     if (nums == []) return null;
//     let queue: TreeNode[] = [];
//     let root: TreeNode  = new TreeNode(nums[0]);
//     queue.push(root);
//     let i: number = 1;
//     let child: TreeNode = null; 
//     while (queue.length > 0) {
//         let parent: TreeNode = queue.shift();
//         if (nums[i] != undefined && nums[i] < parent.val)
//         {   child = new TreeNode(nums[i]);
//             parent.left = child;
//             queue.push(child);
//             i++;
//         }
//         if (nums[i] != undefined && nums[i] > parent.val)
//         {   child = new TreeNode(nums[i]);
//             parent.right = child;
//             queue.push(child);
//             i++;
//         }
//     }
//     return root;
// };
// function bstFromPreorder(preorder: number[]): TreeNode | null {
//     let i: number = 0;
//     const n: number = preorder.length;
//     if (n == 0) return null;
//     let root = new TreeNode(preorder[i]);
//     function dfs(i: number, root: TreeNode): void  {
//         if (i+1 > n) return;
//         let newNode= null;
//         if (preorder[i+1] != undefined  && preorder[i+1] < root.val)
//         {
//             newNode = new TreeNode(preorder[i+1])
//             root.left = newNode;
//             dfs(i+1, root.left);
//             return;
//         } 
//         if (preorder[i+1] != undefined  && preorder[i+1] > root.val)
//         {
//             newNode = new TreeNode(preorder[i+1])
//             root.right = newNode;
//             dfs(i+1, root.right);
//         }
//     }
//     dfs(0, root);
//     const result: number[] = traverseTree(root);
//     console.log(result);
// };
// const preorder = [8,5,1,7,10,12];
// const result: TreeNode = bstFromPreorder(preorder);
function kthSmallest(root, k) {
    function dfs(root) {
        if (!root)
            return [];
        let result = [];
        if (root.left)
            result = [...result, ...dfs(root.left)];
        result = [...result, root.val];
        if (root.right)
            result = [...result, ...dfs(root.right)];
        return result;
    }
    const result = dfs(root);
    return result[k - 1];
}
// const nums = [7,4,3,null,null,6,19], target2 = [3];
// const nums = [5,3,6,2,4,null,null,1], k = 3;
// const root: TreeNode = bfs(nums);
// const result: number = kthSmallest(root, k);
// console.log(`The result is ${result}`);
function isValidBST(root) {
    let sorted = [];
    let n = 0;
    function isSorted(a) {
        if (sorted.length == 0) {
            sorted.push(a);
            n++;
            return true;
        }
        if (a > sorted[n - 1]) {
            sorted.push(a);
            n++;
            return true;
        }
        return false;
    }
    function dfs(root) {
        if (root == null)
            return true;
        let result = true;
        if (root.left) {
            result = result && dfs(root.left);
        }
        result = result && isSorted(root.val);
        if (root.right) {
            result = result && dfs(root.right);
        }
        return result;
    }
    return dfs(root);
}
;
//const nums = [5,1,4,null,null,3,6];
//const nums = [2,1,3];
//const nums = [5,4,6,null,null,3,7];
// const root: TreeNode = bfs(nums);
// const result: boolean = isValidBST(root);
// console.log(`The result is ${result}`);
function levelOrder(root) {
    function bfs(root) {
        if (root == null)
            return [];
        let queue = [];
        queue[0] = { 'value': root, 'level': 0 };
        let obj = {};
        let level = 0;
        while (queue.length > 0) {
            let node = queue.shift();
            level = node["level"];
            if (obj[level] == undefined)
                obj[level] = [node["value"].val];
            else
                obj[level] = [...obj[level], node["value"].val];
            if (node["value"].left) {
                queue.push({ 'value': node["value"].left, 'level': level + 1 });
            }
            if (node["value"].right) {
                queue.push({ 'value': node["value"].right, 'level': level + 1 });
            }
        }
        return Object.values(obj);
    }
    const result = bfs(root);
    return result;
}
// const nums = [3,9,20,null,null,15,7];
// const nums = [5,1,4,null,null,3,6];
// const root: TreeNode = bfs(nums);
// const result: number[][] = levelOrder(root);
// console.log(`The result is ${result}`);
function removeLeafNodes(root, target) {
    function isLeaf(root) {
        if (root.left == null && root.right == null)
            return true;
        return false;
    }
    function dfs(root) {
        if (root == null)
            return;
        let result;
        if (isLeaf(root) && root.val == target) {
            root = null;
            return;
        }
        if (root.left)
            dfs(root.left);
        if (root.right)
            dfs(root.right);
    }
    // const result: TreeNode | null = dfs(root);
    dfs(root);
    const values = traverseTree(root);
    console.log(values);
    return null;
}
;
// const nums = [1,2,3,2,null,2,4], target = 2;
// const root: TreeNode = bfs(nums);
// const result: TreeNode = removeLeafNodes(root, target);
// console.log(`The result is ${result}`);
function flatten(root) {
    let newRoot = null;
    function dfs(root, oldRoot = null) {
        if (root == null)
            return;
        const tmpRoot = new TreeNode(root.val);
        if (oldRoot == null) {
            oldRoot = tmpRoot;
            newRoot = oldRoot;
        }
        else {
            oldRoot.right = tmpRoot;
        }
        // let left = root.left;
        // let right = root.right;
        // root = null;
        if (root.left)
            dfs(root.left, tmpRoot);
        if (root.right)
            dfs(root.right, tmpRoot);
    }
    dfs(root);
    const result = traverseTree(newRoot);
    console.log(result);
}
;
// const nums = [1,2,5,3,4,null,6];
// const root: TreeNode = bfs(nums);
// flatten(root);
// console.log(`The result is ${result}`);
// function sumNumbers(root: TreeNode | null): number {
//     let s: number = 0;
//     let sum: number = 0;
//     let multiplier = 0; 
//     function returnNumber(n: number) {
//         s = 10*s + n;
//         return s;
//     }
//     function dfs(root: TreeNode | null): number {
//         if (root == null) return 0;
//         let result: number = root.val;
//         let counter: number = 1;
//         if (root.left)
//             result = result + dfs(root.left);
//         counter++;
//         if (root.right)
//             result = result + dfs(root.right); 
//         if(multiplier > 0) 
//             multiplier--;
//         result = root.val* (10**multiplier)*counter;
//         console.log(multiplier, counter, result);
//         multiplier++; 
//         return result;
//     }
//     const result: number = dfs(root);
//     //console.log(result, sum);
//     return result;
// };
function sumNumbers(root) {
    let obj = {};
    function dfs(root, level) {
        if (root == null)
            return;
        let counter = 1;
        if (obj[level] == undefined)
            obj[level] = [root.val];
        else
            obj[level] = [...obj[level], root.val];
        if (root.left)
            dfs(root.left, level + 1);
        counter++;
        if (root.right)
            dfs(root.right, level + 1);
    }
    dfs(root, 0);
    const values = Object.values(obj);
    const n = values.length;
    let sum = 0;
    let carryOver = 0;
    let value;
    let counter = 1;
    for (let i = n - 1; i > -1; i--) {
        let multiplier = 10 ** (n - 1 - i);
        let partial = 0;
        let j = 0;
        for (value of values[i]) {
            partial += value;
            j++;
        }
        sum += multiplier * partial * j + carryOver;
        console.log(sum, multiplier, carryOver);
        carryOver = multiplier * partial;
        counter = j;
    }
    console.log(obj);
    return sum;
}
;
//console.log(val, sum);
// let val: number = returnNumber(root.val);      
//const nums = [4,9,0,5,1];
//const nums = [1,2,3];
// const root: TreeNode = bfs(nums);
// const result: number = sumNumbers(root);
// console.log(`The result is ${result}`);
function pathSum4(root, targetSum) {
    let total = [];
    function dfs(root, sum, result = []) {
        if (root == null)
            return;
        result.push(root.val);
        if (root.left == null && root.right == null && sum == root.val) {
            const tmp = [...result];
            total = [...total, tmp];
        }
        if (root.left)
            dfs(root.left, sum - root.val, result);
        if (root.right)
            dfs(root.right, sum - root.val, result);
        result.pop();
    }
    dfs(root, targetSum);
    return total;
}
;
// const nums = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22;
// //const nums = [1,2], targetSum = 1;
// const root: TreeNode = bfs(nums);
// const result: number[][] = pathSum(root, targetSum);
// console.log(`The result is ${result}`);
function pathSum2(root, targetSum) {
    function dfs() {
    }
    return 0;
}
;
// const nums = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// const root: TreeNode = bfs(nums);
// const result: number = pathSum2(root, targetSum);
// console.log(`The result is ${result}`);
function findTargetSumWays(nums, target) {
    const n = nums.length;
    let obj = {};
    function dfs(i, sum = 0) {
        if (i == n)
            return (sum == target) ? 1 : 0;
        if (obj[`${i},${sum}`] != undefined)
            return obj[`${i},${sum}`];
        obj[`${i},${sum}`] = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);
        return obj[`${i},${sum}`];
    }
    const result = dfs(0);
    console.log(obj);
    return result;
}
;
// const nums = [1,1,1,1,1], target = 3;
// const result: number = findTargetSumWays(nums, target);
// console.log(`The result is ${result}`);
function pathSum3(root, targetSum) {
    return 0;
}
;
function maxAncestorDiff(root) {
    if (root == null)
        return 0;
    let maxVal = 0;
    function dfs(root, parent, diff) {
        if (root == null)
            return 0;
        diff = Math.abs(root.val - diff);
        if (root.val > parent)
            maxVal = Math.max(maxVal, diff + maxVal);
        // if (root.left)
        //     dfs(root.left)
    }
    dfs(root, -1, root.val);
}
;
// const nums = [10,5,-3,3,2,null,11,3,-2,null,1] , targetSum = 8
// const root: TreeNode = bfs(nums);
// const result = maxAncestorDiff(root)
// console.log(`The result is ${result}`);
function countVowels(word) {
    let c = 0;
    let n = word.length;
    let vowels = { 'a': 1, 'e': 1, 'o': 1, 'u': 1, 'i': 1 };
    let l = 0;
    let r = 0;
    for (let i = 0; i < n; i++) {
        if (vowels[word[i]]) {
            r = n - i;
            l = i + 1;
            c += (l * r);
        }
    }
    return c;
}
;
//const word = "aba"
//const word = "abc"
// const result =countVowels(word)
// console.log(`The result is ${result}`);
function numberOfSubstrings(s) {
    let l = s.split("");
    const n = l.length;
    let a = [];
    let b = [];
    let c = [];
    function firstIndex(arr, index) {
        for (let i = 0; i < arr.length; i++)
            if (arr[i] >= index)
                return arr[i];
        return -1;
    }
    for (let i = 0; i < n; i++) {
        if (l[i] == 'a')
            a.push(i);
        if (l[i] == 'b')
            b.push(i);
        if (l[i] == 'c')
            c.push(i);
    }
    let result = 0;
    for (let v = 0; v < n; v++) {
        let i = firstIndex(a, v);
        let j = firstIndex(b, v);
        let k = firstIndex(c, v);
        if (i > -1 && j > -1 && k > -1) {
            let index = Math.max(i, j, k);
            result += (n - index);
        }
    }
    console.log(a, b, c);
    return result;
}
;
// const s = "abcabc"
// //const s = "aaacb"
// const result =numberOfSubstrings(s)
// console.log(`The result is ${result}`);
function findFrequentTreeSum(root) {
    let dp = {};
    function dfs(root) {
        if (root == null)
            return 0;
        let result = root.val;
        if (root.left)
            result += dfs(root.left);
        if (root.right)
            result += dfs(root.right);
        if (dp[result] == undefined)
            dp[result] = 1;
        else
            dp[result] += 1;
        return result;
    }
    dfs(root);
    const values = Object.entries(dp).sort((a, b) => b[1] - a[1]);
    let maxResult = 0;
    let result = [];
    for (const value of values) {
        if (value[1] >= maxResult) {
            maxResult = value[1];
            result = [...result, value[0]];
        }
    }
    return result;
}
;
// const nums = [5,2,-3];
// // const nums = [5,2,-5]
// const root = bfs(nums);
// const result = findFrequentTreeSum(root);
// console.log(`Result is ${result}`);
function averageOfSubtree(root) {
    let maxCount = 0;
    function dfs(root, direction) {
        if (root == null)
            return { count: 0, direction: "" };
        let l = { count: 0, direction: "" };
        let r = { count: 0, direction: "" };
        let result = { count: 0, direction: direction };
        if (root.left)
            l = dfs(root.left, "l");
        if (root.right)
            r = dfs(root.right, "r");
        // if (direction != l.direction)
        // {
        //     result.count = 1 + l.count; 
        //     maxCount = Math.max(maxCount, result.count);
        //     result.direction = 
        // }   
        return result;
    }
    let obj = dfs(root, "");
    return 0;
}
;
//const nums = [4,8,5,0,1,null,6];
// const nums = [1];
// const root = bfs(nums);
// const result = averageOfSubtree(root);
// console.log(`Result is ${result}`);
function longestZigZag(root) {
    let maxValue = 0;
    // function dfs(root: TreeNode | null): number
    // {
    //     if (root == null)
    //         return 0;
    //     if (root.left)
    //         dfs(root.left);
    //     if (root.right)
    //         dfs(root.right);
    //     return result;
    // }
    // dfs(root);
    // return result;
    return 0;
}
;
// const nums = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1];
// const root = bfs(nums);
// const result = longestZigZag(root);
// console.log(`Result is ${result}`);
function flattened(root) {
    let queue = [];
    function dfs(root) {
        if (root == null)
            return;
        queue.push(root);
        if (root.left)
            dfs(root.left);
        if (root.right)
            dfs(root.right);
    }
    dfs(root);
    root = queue[0];
    for (let i = 0; i < queue.length - 1; i++) {
        queue[i].left = null;
        queue[i].right = queue[i + 1];
    }
    return root;
}
;
// const nums = [1,2,5,3,4,null,6];
// const root = bfs(nums);
// let result = flattened(root);
// let values: number[] = traverseTree(result)
// console.log(`Result is ${values}`);
function minDiffInBST(root) {
    // let lowest = Infinity;
    // function dfs(root: TreeNode | null): number {
    //     if(root == null)
    //         return 0;
    //     lowest = Math.min(Math.abs(root.val), lowest);
    //     if (root.left)
    //         lowest = Math.min(dfs(root.left));
    //     if(root.right)
    //         dfs(root.right);
    // }
    // const result: number = dfs(root);
    // return result;
    return 0;
}
;
// const nums = [1,0,48,null,null,12,49];
// const root = bfs(nums);
// const result = minDiffInBST(root);
// console.log(`Result is ${result}`);
function rightSideView(root) {
    let obj = {};
    // function bfs(root: TreeNode| null, level: number=0): void 
    // {   
    //     if (root !== null)
    //         if (obj[level] == undefined)
    //             obj[level] = [root.val];
    //         else
    //            obj[level] = [...obj[level], root.val];
    //     if (root.left)
    //         bfs(root.left, level+1);
    //     if (root.right)
    //         bfs(root.right, level+1);
    // }
    // bfs(root);
    let result = [];
    for (let val of Object.values(obj)) {
        result = [...result, val[val.length - 1]];
    }
    return result;
}
;
// const nums = [1,2,3,null,5,null,4];
// const root: TreeNode = bfs(nums);
// const result: number[] = rightSideView(root);
// console.log(`The result is ${result}`);
// function reverseOddLevels(root: TreeNode | null): TreeNode | null {
//     function dfs(root: TreeNode | null, level: number = 0): void
//     {
//         let tmp: TreeNode = null;
//         if (root.left) {
//             if (level % 2 == 0) {      
//                 tmp = root.left;
//                 root.left = root.right;
//                 root.right = tmp; 
//             }
//             dfs(root.left, level+1)
//         }
//         if (root.right) {
//             if (level % 2 == 0) {      
//                 tmp = root.left;
//                 root.left = root.right;
//                 root.right = tmp; 
//             }
//             dfs(root.right, level+1)
//         }
//     }
//     dfs(root);
//     const result: number[] = traverseTree(root);
//     console.log(result);
//     return root;
// };
// const nums = [2,3,5,8,13,21,34];
// const root: TreeNode = bfs(nums);
// const result: TreeNode | null = reverseOddLevels(root);
// console.log(`The result is ${result}`);
function widthOfBinaryTree(root) {
    let obj = {};
    function dfs(root, level = 0) {
        if (root == null)
            return 0;
        let pos = 0;
        if (obj[level] == undefined) {
            pos += 1;
            obj[level] = [pos];
        }
        if (root.left) {
        }
        if (root.right) {
        }
    }
    return 0;
}
;
// const nums: number[] = [1,3,2,5,3,null,9];
// const root: TreeNode = bfs(nums);
// const result: TreeNode | null = reverseOddLevels(root);
// console.log(`The result is ${result}`);
function getMinimumDifference(root) {
    let result = [];
    function dfs(root) {
        if (root == null)
            return;
        result = [...result, root.val];
        if (root.left)
            dfs(root.left);
        if (root.right)
            dfs(root.right);
    }
    dfs(root);
    result.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 1; i < result.length; i++)
        min = Math.min(min, result[i] - result[i - 1]);
    return min == Infinity ? 0 : min;
}
;
// const nums: number[] = [4,2,6,1,3];
// const root: TreeNode = bfs(nums);
// const result: number = getMinimumDifference(root);
// console.log(`The result is ${result}`);
function mctFromLeafValues(arr) {
    let dp = [...Array(arr.length)].fill(0);
    for (let i = 0; i < arr.length; i++) {
        let maxNum = -Infinity;
        for (let k = i; k < arr.length; k++) {
            maxNum = Math.max(maxNum, arr[k]);
        }
    }
    console.log(dp);
    return 0;
}
;
// const arr: number[] = [6,2,4];
// const result:number = mctFromLeafValues(arr);
// console.log(`The result is ${result}`);
function reverseOddLevels(root) {
    function dfs(root, level = 0) {
        if (root == null)
            return;
        let tmpLeft = root.left;
        let tmpRight = root.right;
        if (root.left) {
            if (level % 2 == 0)
                dfs(root.left, level + 1);
            else {
                root.left = null;
                root.right = tmpLeft;
                dfs(root.left, level + 1);
            }
        }
        if (root.right) {
            if (level % 2 == 0)
                dfs(root.right, level + 1);
            else {
                root.left = tmpRight;
                dfs(root.right, level + 1);
            }
        }
    }
    dfs(root);
    return root;
}
;
