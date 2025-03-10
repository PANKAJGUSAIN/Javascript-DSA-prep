class MyPromise {
    constructor(executor) {
        this.state = "pending"; // "pending" | "fulfilled" | "rejected"
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state == "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback(value));

            }
        }

        const reject = (value) => {
            if (this.state == "pending") {
                this.state = "rejected";
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback(value));
            }
        }


        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }

    };

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.state === "fulfilled") {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }
            else if (this.state === "rejected") {
                try {
                    const result = onRejected(this.reason);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }else{
                // Store the callbacks if still pending as we donot know if it will be Fulfilled or Rejected 
                this.onFulfilledCallbacks.push(() => resolve(onFulfilled(this.value)));
                this.onRejectedCallbacks.push(() => reject(onRejected(this.reason)));
            }
        })
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }


    // for quickly create promise by directly using class Promise.resolve() intead of newPromise
    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }
}

const p2 = new MyPromise((resolve, reject) => {
    console.log('Promise p2 is executing');
    setTimeout(() => {
        resolve('p2 resolved');
    }, 1000);
}).then(
    (response) => { console.log("Fulfilled1:", response) ; return response },  // onFulfilled
    (error) => console.log("Rejected:", error)         // onRejected
).then(
    (response) => console.log("Fulfilled2:", response),  // onFulfilled
    (error) => console.log("Rejected:", error)         // onRejected
);

