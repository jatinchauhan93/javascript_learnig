const student = {
    name: "sumit",
    rollno : 999,

    welcomeMessage: function() {
        console.log(`${this.name} , welcome to website`);
        console.log(this);
    }

}

student.welcomeMessage()
student.name="jay"
student.welcomeMessage()

// function chai(){
//     let username = "rahul"
//     console.log(this.username);
// }

// chai()

const chai =  ()=>{
     console.log("hii jatin")
}
 

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))