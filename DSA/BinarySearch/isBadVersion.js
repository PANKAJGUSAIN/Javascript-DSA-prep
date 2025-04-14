let isBadVersion = function(version) {
    return version >= 4;
}

function solution(n) {
    // returns the first bad version from 1 to n

    
    if(isBadVersion(n)){
        let findVersion = n ;
        while(isBadVersion(findVersion)){
            findVersion--;
        }
        return findVersion+1;
    }
}

function BinarySearchSolution(n){
    let start = 1;
    let end = n;
    let findVersion = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(isBadVersion(mid)){
            findVersion = mid;
            end =mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return findVersion

}

console.log(solution(7))
console.log(BinarySearchSolution(7))