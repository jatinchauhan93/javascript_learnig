/** array ek aisa data structure hai jisme hum multiple values ko ek single variable me store kar sakte hai.

but in other languages array ke liye different rules hoti hain jaise vo sirf declared type ke hi value store ker skta hai */

//===================array  declaration=====================

const arr = [1, 2, 3, 4, 5]; // ye array number type ke values store kar rha hai
const languages = ["js","html","css","pyhton","java"]//string as array 

console.log(arr)
console.log(languages)

const student = ["jatin", 19, "rohit his friend",true];//in js we can store any type of value in arrays

console.log(student[2]);

// Array.methods

arr.push(34)//it push  this value at the last of the array means append this  value 
arr.push(52)
arr.push(9)
console.log(arr)
arr.pop()//it remover the last index avlue of the array
console.log(arr)


console.log(arr.unshift(9))//insrt at first position 
console.log(arr.shift())

const newArr = arr.join()//convert all the element of the  array as string and represent
console.log( newArr)
console.log(arr)


// slice() and splice()


console.log(arr.slice(1,3)) 

//its not  shows the sliced array and it will show the value between the index 1 to 3 but it will not make any changes in actual array and not include the last index value means it will not include the value at index 3

console.log(arr.splice(1,3))

//it make the changes in actual array it will remove the value from index 1 to 3 and it will include the last index value means it will also not include the value at index 3