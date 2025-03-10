
const obj1 = {
    firstname: "pankaj",
    age: "25"
}


Function.prototype.bindRefrence = function (context, ...rest) {
    let obj = this;
    return function(...params){
        console.log(rest , ".............." , params)
        obj.apply(context , [...rest , ...params])
    }

}


function func(...props) {
    console.log("erer" , props);
    console.log(this.firstname + " --- " + props[0] +"---"+props[1] + "--" + this.age)
}


const newFunc = func.bindRefrence(obj1, "gusain"); // return a new function with new binding to this
newFunc("delhi");