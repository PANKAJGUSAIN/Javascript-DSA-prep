const p1 = new Promise((resolve, reject) => {
    console.log('Promise p1 is executing');
    setTimeout(() => {
        resolve('p1 resolved');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    console.log('Promise p2 is executing');
    setTimeout(() => {
        resolve('p2 resolved');
    }, 1000);
});

Promise.all([p1, p2])
    .then(results => {
        console.log('All promises resolved:', results);
    })
    .catch(error => {
        console.log('One of the promises rejected:', error);
    });