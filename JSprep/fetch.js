
    const controller = new AbortController();
    const signal = controller.signal;
try {
    const res = await fetch('api ' , {
        method,
        headers ,
        body},
        signal)
}
catch(e){
    console.log(e);
}

