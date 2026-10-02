const studentroll  = [22,4,35,37,23]
const myroll = [11]

// console.log(studentroll.push(myroll))// push retrun the lenght of the array  
// console.log(studentroll) //other array is aadded as a element as nested array 

const  allroll = studentroll.concat(myroll)//add two array

console.log(allroll)

const classstudent = [...myroll,...studentroll] 
console.log(classstudent)//maily this is shortcut to spread the array or join two array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array)// showing nested array

const real_another_array = another_array.flat(Infinity)  //.flat spred all the internal array in one main parent array
console.log(real_another_array);


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// we can consrtruct the array of the predefined value 