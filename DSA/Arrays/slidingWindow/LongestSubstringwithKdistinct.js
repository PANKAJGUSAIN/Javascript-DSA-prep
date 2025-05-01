function LongestSubstringwithKdistinct(s , k){
    if(k <= 0 || s.length < k) return 0

    let left = 0 ;
    let right = 0 ;
    let hash = new Map();
    let maxSubStringLength = 0 ;
    while(right < s.length){

        const rightchar = s[right];
        hash.set(rightchar , ( hash.get(rightchar) || 0 ) + 1 );

        while(hash.size > k ){
            const leftchar = s[left];

            hash.set(leftchar , ( hash.get(leftchar) - 1 ) );

            if(hash.get(leftchar) == 0){
                hash.delete(leftchar);
            }

            left++;
        }

        maxSubStringLength = Math.max(maxSubStringLength , right - left + 1 );
        right++;

    }

    return maxSubStringLength
}

console.log(LongestSubstringwithKdistinct("abcadcacacaca" , 3))