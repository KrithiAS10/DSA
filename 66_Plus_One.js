/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        let last=digits[i];
        if(last==9){
            digits[i]=0;
            if(i-1==-1){
                digits.unshift(1);
            }
            
        }
        else{
            digits[i]+=1;
            break;
        }
        // if(last<9){
        //     digits[i]+=1;
        //     return digits;
        // }
        // else{
        //     digits[i]=0;
        // }
    }
    // digits.unshift(1);
    return digits;
};
