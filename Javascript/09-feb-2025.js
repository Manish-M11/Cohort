const teas = {
    name: "Lemon tea",
    type: "Green",
    caffine: "Low"
}

console.log(teas.type);

teas.origin = "China"

console.log(teas);

teas.caffine = "Medium";

//remove the type property

delete teas.type

console.log(teas);

//check if it has a property
console.log("origin" in teas);

//for in loop

for(let key in teas){
    console.log(key + ": "+teas[key]);
}

//create nested object


// create copy of object
const teaCopy = {
    ...teas
}