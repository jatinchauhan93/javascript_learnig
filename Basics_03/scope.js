function student(){
    let name = "jatin"
    console.log(name)
}
student();

//name variable is only present in functon {} scope cant  access outside of it 

// console.log(name)

// function college(){
//     var rollno = 23  (var is globle scope....)
//     console.log(rollno)
// }

// college()

// console.log(rollno)

function numberone(){
     let a =10
     function numbertwo(){
        let b = 20
        console.log(a,b)
     }
    // console.log(a,b)  it will give error because child can access parent funtion but parent cant access child 
    numbertwo()
}

numberone();

function person(){
    const firstname = "Munna"
      function secondname(){
        const lastname = "Tripathi"
        console.log(firstname+lastname)
    }
     secondname()
    //  console.log(lastname)error 
}
person()

// simple hosting 

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}

