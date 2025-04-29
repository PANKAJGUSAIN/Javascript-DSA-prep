function s(s){

    if(s.length <= 1) {
        return s.length
    }
    var trimeedInput = s.split("");

    // two pointers left and right 
    // hashing to remeber the substirng and if character is repeating
    // [a , b , c , a , d]

    let left = 0 ;
    let right = 0 ;
    let maxLength = -Infinity;
    let hash = new Set();

    while(right < trimeedInput.length){
        if(!hash.has(trimeedInput[right])){
            hash.add(trimeedInput[right]);
            maxLength = Math.max(maxLength , hash.size);
            right++;
        }else{
            hash.delete(trimeedInput[left]);
            left++;
        }
    }

    return maxLength == -Infinity ? 0 : maxLength
    

}

s("abcabcbb");
