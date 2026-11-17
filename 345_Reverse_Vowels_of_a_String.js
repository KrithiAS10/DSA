/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels="aeiouAEIOU";
    let arr=s.split("");
    let left=0,right=s.length-1;
    while(left<right){
        if(vowels.includes(arr[left])&&vowels.includes(arr[right])){
            let temp=arr[right];
            arr[right]=arr[left];
            arr[left]=temp;
            left++;right--;
        }
        else if(vowels.includes(arr[left])&&!vowels.includes(arr[right])){
            right--;
        }
        else{
            left++;
        }
    }
    return arr.join("");
};
