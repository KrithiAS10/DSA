class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> map=new HashMap<>();
        int i=0;
        int[] res=new int[2];
        for(int x:nums){
            if(map.containsKey(target-x)){
                res[0]=map.get(target-x);
                res[1]=i;
                return res;
            }
            map.put(x,i++);
        }
        return res;
    }
}
