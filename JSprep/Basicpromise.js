



// single promise
function handleCart() {
    const cart = ["kurta", "pants", "shirt"];

    const pr = new Promise((resolve, reject) => {
        if (cart.length > 0) {
            setTimeout(() => {
                resolve("12345")
            }, 2000);
        }
        else {
            reject("cart is empty")
        }
    })

    pr
        .then(result => { console.log('result', result) })
        .catch(err => console.log('error', err))

    console.log("hello world");

}

// multipromise or promisechaining 

function handleCart2() {
    const generateOrderId = (cart) => {
        return new Promise((resolve, reject) => {
            if (cart.length > 0) {
                setTimeout(() => {
                    resolve("123456")
                }, 2000);
            }
            else {
                reject("cart is empty")
            }
        })
    }

    const pr = new Promise((resolve, reject) => {
        const cart = ["kurta", "pants", "shirt"];
        if (cart.length > 0) {
            setTimeout(() => {
                resolve(cart)
            }, 2000);
        }
        else {
            reject("cart is empty")
        }
    })

    pr
        .then(result => {
            console.log(result);
            return generateOrderId(result); // a function returns a promise

        }).then(cartid =>{
            console.log('Order ID:', cartid)

        })
        .catch(err => console.log('error', err))
}






// handleCart();
handleCart2();