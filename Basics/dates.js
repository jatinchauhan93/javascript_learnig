// dates  and its methods

let mydate = new Date()
console.log(mydate);
console.log(mydate.toLocaleDateString())
console.log(mydate.toString())
console.log(mydate.toDateString())


let createdate = new Date(2026,3,12)
console.log(createdate);

let aajdin = new Date("01-10-26")
console.log(aajdin) 


let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000));

let firstDate = new Date()
console.log(firstDate);
console.log(firstDate.getMonth() + 1);
console.log(firstDate.getDay());