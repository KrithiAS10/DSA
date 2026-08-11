/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n==0){
        return nums1;
    }
    else if(m==0){
        for(let i=0;i<n;i++){
            nums1[i]=nums2[i];
        }
        return nums1;
    }
    else{
        let nums=[];
        for(let i=0;i<m;i++){
            nums[i]=nums1[i];
        }
        let k=0,j=0;
        for(let i=0;i<(m+n);i++){
            if(k<m&&j<n){
                if(nums[k]<nums2[j]){
                nums1[i]=nums[k++];
                }
                else if(nums[k]>nums2[j]){
                    nums1[i]=nums2[j++];
                }
                else{
                    nums1[i++]=nums[k++];
                    nums1[i]=nums2[j++];
                }
            }
            else if(k<m){
                nums1[i]=nums[k++];
            }
            else{
                nums1[i]=nums2[j++];
            }
        }
    }
    
};
