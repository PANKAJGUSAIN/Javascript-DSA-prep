
const obj1 = {
    firstname: "pankaj",
    age: "25"
}


Function.prototype.callRefrence = function (context, ...rest) {
    // If context is null or undefined, default to globalThis
    console.log(this);

    const uniqueId = Symbol('fn');
    context[uniqueId] = this;

    // Call the function with the provided arguments
    const result = context[uniqueId](...rest);

    // Remove the temporary property
    delete context[uniqueId];

    // Return the result of the function call
    return result;

}


function func(surname) {
    console.log(this);
    console.log(this.firstname + " --- " + surname + "--" + this.age)
}

// func.call(obj1 , "gusain")
func.callRefrence(obj1, "gusain")