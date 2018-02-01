let makeCopy = obj => {
    // let output = {};
    // for (let key in obj){
    //     output[key] = obj[key]
    // }
    // return output;
    return Object.assign({}, obj); // <--- easy way
}

//key refers to property name string

let inputObj = {
    propertyName: 'someValue',
    anotherProperty: "anotherValue"
}

// output.propertyName = newObj.propertyName

// saying the same thing as output[key] = obj[key] ^^^

let copyObj = makeCopy(inputObj);

console.log(copyObj);

