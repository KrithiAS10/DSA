/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let s of strs){
        if(!map.has(s.split("").sort().join(""))){
            map.set(s.split("").sort().join(""),[]); 
        }
        map.get(s.split("").sort().join("")).push(s);
    }
    return [...(map.values())];
};
