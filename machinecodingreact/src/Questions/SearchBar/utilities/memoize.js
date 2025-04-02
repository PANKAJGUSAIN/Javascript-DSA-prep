function memoizedFunction(fn , timer){
    let interval ; 
    return function(...args){
        clearTimeout(interval);
        interval = setTimeout(()=>{
            fn(...args);
        }, timer);
    }

}

export {memoizedFunction}