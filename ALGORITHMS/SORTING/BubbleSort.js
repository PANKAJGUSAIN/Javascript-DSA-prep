function bubbleSort(array){
    let isSwapped = false ;
    let newArray = array ;
        
    if(array.length < 1) return array
        
    do{
         isSwapped = false; // Reset for each pass
        for ( let i = 0 ; i < newArray.length ; i++ ){
            if(newArray[i] > newArray[i+1]){
                let temp = newArray[i];
                newArray[i] = newArray[i+1];
                newArray[i+1] = temp ;
                console.log(newArray)
                isSwapped = true
            }
        }
    }while(isSwapped)
    
    return newArray
}

console.log(bubbleSort([-6 , 20 , 8 , -2 , 4]))