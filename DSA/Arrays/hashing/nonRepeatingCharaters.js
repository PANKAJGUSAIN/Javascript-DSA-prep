function nonRepeatingCharacters(text){
    let firstUniqueCharacter = "";
    let hashObj = {};
    for(i of text){
        if(firstUniqueCharacter.length == 0){
            firstUniqueCharacter = i
        }else if(hashObj[i]){
            if(hashObj[i] == firstUniqueCharacter){
                firstUniqueCharacter = "";
                hashObj[i] = true
            } 
        }else{
            hashObj[i] = true
        }
    }
    console.log(hashObj);
    console.log(hashObj[firstUniqueCharacter])
    return hashObj[firstUniqueCharacter] ? '' : firstUniqueCharacter
}

// let text = "aabbcc";
let text = "leetcode";
console.log(nonRepeatingCharacters(text));