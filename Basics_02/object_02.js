const  college = {}

college.name = "jspm"
college.addr= "pune"
college.rank= 13
college.branch = 3

// console.log(college)

//========nested objects========

const jspm = {
    name: "pvpit",
    addr: "bhavdhan",
    studentcount:{
        bca : {
           cgpa:9.45,
           sgpa : 9.65
        },
        cs : 120,
        entc :120
    }

}

console.log(jspm.studentcount.bca)
console.log(jspm.studentcount.bca.sgpa)
console.log(jspm.addr)



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2} a object can hold multiple objects 
// console.log(obj3)
const obj3 = {...obj1, ...obj2}

console.log(obj3)

// ========= array of objects =========

const student = [
    {
        name : "jatin",
        roll : 11
    },
    {
        name : "apurva",
        roll : 21
    },
    {
        name : "jay",
        roll: 51
    },
    {
        name :"swapndeep",
        roll : 3
    }
]

console.log(student[1].name)

// descusntructing of object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor:Instructor}=course

// console.log(courseInstructor);
console.log(instructor);

