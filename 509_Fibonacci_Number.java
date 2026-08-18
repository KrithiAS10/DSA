import java.util.Arrays;
class Solution {
    int[] dp;
    public int solv(int n){
        if(n==0){
            return 0;
        }
        if(n==1){
            return 1;
        }
        if(dp[n]!=-1){
            return dp[n];
        }
        dp[n]=solv(n-1)+solv(n-2);
        return dp[n];
    }
    public int fib(int n) {
        dp=new int[n+1];
        Arrays.fill(dp,-1);
        return solv(n);
    }
}
