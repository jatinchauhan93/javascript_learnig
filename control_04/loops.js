const arr = [23,4,55,3,43,66]

for(let i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

for(let i=1; i<=5; i++){
    if(i==5){
        continue;
    }
    console.log(`This is loop ${i}`)
}

 let people = 13;
// do{
//     console.log(`people in class ${people}`)
//     people++
// }

// while(people<=20);

while(people <=20){
    console.log(`This  is  while loop ${people}`)
    people++;
}