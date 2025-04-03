let input = "110";

function calculatePow(num ,  pow ) {
    if(pow == 0) return 1 ;
    let value = 0 ; 
    while(pow >= 1){
        value += num; 
        pow-- ;
    }
    return value

}
function converttoBinary(num){
    let binarynum = "";
    let divisor = num ; 
    while(divisor > 0){
        let value = divisor % 2 == 0 ? 0 : 1 
        binarynum +=value ;
        divisor = Math.floor(divisor/2);
    }
    return binarynum.split('').reverse().join('');
}
function converttoNumber(input){
    const textArr = input.split("");
    let sum = 0 ;
    let i = textArr.length-1 ; 
    let iterator = 0 ;
    while( i >= 0){
        sum += textArr[i]*calculatePow(2 , iterator) ;
        i--;
        iterator++;
    }
    let newNum = sum + 1 ; 
    while(newNum){
        const val = converttoBinary(newNum) 
        const isDivisible = val % 3  == 0
        if(isDivisible){
            return val
        }else{
            newNum++
        }
    }
}

const number = converttoNumber(input);
console.log(number)