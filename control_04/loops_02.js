const arr =[1,2,3,4,5,6,7,8,9]

for (const num of arr) {
    // console.log(num)
}

// we have to stop the loop we have to use break statement 

const name = "jatin chauhan"

for (const naam of name) {
    if(naam==="a"){
    console.log(naam)
    break;    
}
console.log(naam)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
