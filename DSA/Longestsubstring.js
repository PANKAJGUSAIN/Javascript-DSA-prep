let s = "abcabcbb";
let sarr = s.split("");
let maxSubarr = "";
for(let i= 0 ; i<sarr.length ; i++){
    let hash = {};
    let j = i;
    let str = "" ; 
    while(j < sarr.length){
        let key = sarr[j];
        if(hash[key]){
            break;
        } 
        str +=key ; 
        hash[key] = true ;
        console.log(str);
        if(str.length > maxSubarr.length){
            maxSubarr = str
        }

        j++
    }
}
