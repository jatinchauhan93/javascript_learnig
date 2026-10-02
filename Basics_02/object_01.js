// what is singleton object 
//  an object that can be instantiated only once and provides a global point of access to its shared instance

const myself = {
    name: "jatin",
    age: 18,
    location: "pune",
    email : "jain@gmil.com",
    clgyears : [2025, 2028 ]
}

console.log(myself.email)
console.log(myself.name)
console.log(myself.clgyears[1])


// we can freeze  a function to do not make any  changes in it 

// Object.freeze(myself)

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greetingTwo());
