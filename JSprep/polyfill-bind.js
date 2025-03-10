
const obj1 = {
    firstname: "pankaj",
    age: "25"
}


Function.prototype.applyRefrence = function (context, rest) {
    // If context is null or undefined, default to globalThis
    console.log(this); // function 

    const uniqueId = Symbol('fn');
    context[uniqueId] = this;

    // Call the function with the provided arguments
    const result = context[uniqueId](rest);

    // Remove the temporary property
    delete context[uniqueId];

    // Return the result of the function call
    return result;

}


function func(rest) {
    console.log(this);
    console.log(this.firstname + " --- " + rest[0] + "--" + this.age)
}

// func.call(obj1 , "gusain")
func.applyRefrence(obj1, ["gusain"])