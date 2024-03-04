class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function bfs(nums: any[]): TreeNode | null {
    if (nums.length == 0)
        return null;
    let queue: TreeNode[] = [];
    let root: TreeNode  = new TreeNode(nums[0]);
    queue.push(root);
    let i: number = 1;

    while (queue.length > 0) {
        let parent: TreeNode | undefined = queue.shift();
        let j: number = 0;
        while (i + j < nums.length && j < 2 ) {
            if (nums[i+j] !== null) {
                let child: TreeNode | undefined = new TreeNode(nums[i+j]);
                if ((i + j) % 2 == 1) 
                    parent !== undefined ? parent.left = child: undefined;
                else
                    parent !== undefined ? parent.right = child: undefined; 
                queue.push(child);   
            }
            j++;
        }
        i+=j;
    }
    return root;
}


function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    let dp: any = {};
    function dfs(root: TreeNode |null, level: number = 0): void {
        if (root == null) return;
        if (dp[level] == undefined) 
            dp[level] = root.val;
        else
            dp[level] += root.val;
        if(root.left)
            dfs(root.left, level+1);
        if (root.right)
            dfs(root.right, level+1);
    }
    dfs(root);
    let sorted: number[] = Object.values(dp);
    sorted.sort((a: number,b: number)=> b - a);
    return sorted[k-1];
};

// const nums: number[] = [5,8,9,2,1,3,7,4,6], k = 2;
// const root: TreeNode | null = bfs(nums);
// const result = kthLargestLevelSum(root, k);
// console.log(`The result is ${result}`);

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    function dfs(root: TreeNode | null, level: number = 0): void {
        if (root === null) return;
        if (level % 2 == 0 && root.left != null) {
           dfs(root.left, level+1);
        }
        if (level % 2 == 0 && root.right != null) {
            dfs(root.right, level+1);
        }
        if(level % 2 == 1 && root.left != null) {
            let tmp: TreeNode | null = root.left;
            root.left = root.right;
            root.right = tmp;
            dfs(root.left, level+1);
        }     
        if(level % 2 == 1 && root.right != null) {
            let tmp: TreeNode | null = root.left;
            root.left = root.right;
            root.right = tmp;
            dfs(root.right, level+1);
        }
    }
    dfs(root);
    return root;
}

// const nums: number[] = [2,3,5,8,13,21,34];
// const root: TreeNode | null = bfs(nums);
// const result: TreeNode | null = reverseOddLevels(root);
// console.log(`The result is ${result}`);


function sumEvenGrandparent(root: TreeNode | null): number {
    function dfs(root: TreeNode | null): number
    {
        if (root == null) return 0;
        let result: number = 0;
        if (root.left != null) {
            if (root.val %2 == 0 && root.left.left != null)
                result += root.left.left.val;
            if (root.val %2 == 0 && root.left.right != null)
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
    let result: number = dfs(root);
    return result;    
};
//const nums: any[] = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5];
//const nums: any[] = [61,13,46,null,null,null,56,72];
// const root: any = bfs(nums);
// const result = sumEvenGrandparent(root);
// console.log(`The result is ${result}`);
function findSecondMinimumValue(root: TreeNode | null): number {
    
    let result: any = new Set();
    function dfs(root: TreeNode | null, result: any): void {
        if (!root) return;
        result.add(root.val);
        if (root.left != null) 
            dfs(root.left, result);
        if (root.right != null)
            dfs(root.right, result);
    }
    dfs(root, result);
    const sortedArray: any[] = Array.from(result).sort((a: any, b: any)=> a - b);
    return (sortedArray[1] != undefined) ? sortedArray[1] : -1;
};
// const nums: any[] = [2,2,5,null,null,5,7];
// const root: any = bfs(nums);
// const result: number = findSecondMinimumValue(root);
// console.log(`The result is ${result}`);

function widthOfBinaryTree(root: TreeNode | null): number {
    let d: any = {}
    function dfs(root: TreeNode | null, level: number = 0, counter: number = 0): void {
        if (root == null) return;

        if(root.val != null) {
            if (d[level] == undefined) {
                counter = 0;
                d[level] = [counter];
            }
            else
                d[level] = [...d[level], counter]; 
        }

        if(root.left != null)
            dfs(root.left, level+1, counter+1); 
        if(root.right != null)
            dfs(root.right, level+1, counter+1);
    }
    dfs(root);
    console.log(d);
    return 0;
};
const nums: any[] = [1,3,2,null,5,null,9];
const root: TreeNode | null = bfs(nums);
const targetSum: number = 8;
const result: number = widthOfBinaryTree(root);
console.log(`The result is ${result}`);

export{}
