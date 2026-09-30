const Name = "jatin"
const repo = 3;

console.log( Name + repo + "value");

console.log(`my name is ${Name} and its my ${repo} repo`);

// strings methods

console.log(Name.length);
console.log(Name.toUpperCase());
console.log(Name.charAt(2));

 console.log(Name.indexOf('t')); //use to find a index of any letter

const newstring = Name.substring(0,2); //return the sting only from (0 to 2 )
console.log(newstring);


const newname = "   rahul    ";
console.log(newname);
console.log(newname.trim());//(removes the extra space of the sting)   

const url = "https://www.google.com/?zx=1790774603838"

console.log(url.replace('?zx', '-'))

console.log(url.includes('sundar'))


