const student = []

if(student){
    console.log("empty array  is always  true ")
}
else {
    console.log("empty array is flase")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (student.length === 0) {
//     console.log("Array is empty");
// }

let val1 = null;
//  val1 = 5?? 10
 val1 = null ?? 10
// if  any value is null or undefine 
 console.log(val1)   


 // Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
