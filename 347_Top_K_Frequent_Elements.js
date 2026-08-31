/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map=new Map();
    for(let x of nums){
        map.set(x,(map.get(x)||0)+1);
    }
    let res=[...map].sort((a,b)=>b[1]-a[1]);
    return res.slice(0,k).map(x => x[0]);
};
