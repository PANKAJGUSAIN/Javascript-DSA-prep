const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const merged = Object.assign({}, obj1, obj2);

console.log(merged); // { name: "Alice", age: 25 }


Object.defineProperty(
    Object.prototype,
    "assingedPolyfill",
    {
        value: function (target, ...sources) {
            console.log(target, sources);

            for (let source of sources) {
                for (let key in source){
                    target[key] = source[key]
                }
            }
            return target
        },
        enumerable: false
    }
)
const merged2 = Object.assingedPolyfill({}, obj1, obj2);
console.log(merged2);
