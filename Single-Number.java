class Solution {
    public int singleNumber(int[] nums) {
        int a=0;
        int i=0;
        Arrays.sort(nums);
        if(nums.length==1){
            return nums[i];
        }
        while(i<=nums.length-1){
            if((i+1)<nums.length-1){
                if(nums[i]==nums[i+1]){
                i+=2;
                }
                else{
                    a=nums[i];
                    break;
                }
            }
            else{
                a=nums[i];
                break;
            }
        }
        return a;
    }
}
