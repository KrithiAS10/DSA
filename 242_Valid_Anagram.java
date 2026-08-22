class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character,Integer> map=new HashMap<>();
        HashMap<Character,Integer> map1=new HashMap<>();
        if(t.length()!=s.length()){
            return false;
        }
        for(char x:s.toCharArray()){
            map.put(x,map.getOrDefault(x,0)+1);
        }
        for(char x:t.toCharArray()){
            map1.put(x,map1.getOrDefault(x,0)+1);
        }
        
        // for(char x:s.toCharArray()){
        //     if(map.get(x)!=map1.get(x)){
        //         return false;
        //     }
        // }
        return map.equals(map1);
    }
}
