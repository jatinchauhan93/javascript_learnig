//fucnction is use to rdeuce the repetive code and make the code more readable and reusable

function myname(){
    console.log("jatin")
}


function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
function twonumber(num1, num2){
      return num1+num2
}
console.log(twonumber(5,2))


function presentstudent(ATD){
    let present = 1
    if (ATD==present)
        {
            console.log("student is present")
        } 
    else{
        console.log("student is absent")
    }    
}

// presentstudent(1)
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));