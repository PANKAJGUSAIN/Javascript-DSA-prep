var threeSum = function(arr) {
    // write your code here
    if(arr.length < 3) return []
    let indexedArr = arr.map((val , index) => { return{val , "idx": index}});
    indexedArr.sort((a , b) => a.val - b.val);
    let length = indexedArr.length-1;
    let output = [];
    let hashset = new Set();
    
    for(let i = 0 ; i < length-1 ; i++){
        
        let start = i+1 ;
        let end = length;
        

        while (start < end){
            
            let calc = indexedArr[i].val + indexedArr[start].val + indexedArr[end].val;
            
            if(calc == 0){
                let result = [indexedArr[i].val , indexedArr[start].val , indexedArr[end].val ];
                let resultstr = result.toString();
                if(!hashset.has(resultstr)){
                    output.push(result);
                    hashset.add(resultstr);
                }

                start++;
                end--;

            }
            else if(calc > 0){
                end--;
            }
            else if(calc < 0){
                start++;
            }
        }
        
    }
    return output
};