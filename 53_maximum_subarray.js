/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=nums[0];
    let currentNum=nums[0];
    for(let i=1;i<nums.length;i++){
        currentNum=Math.max(nums[i], currentNum + nums[i]);
        max=Math.max(max,currentNum);
    }
    return max;
};
