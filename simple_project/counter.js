const number = document.getElementById("number");

document.getElementById("increment").addEventListener("click", function() {
          number.innerHTML = Number(number.innerHTML) +1;
});

document.getElementById("decrement").addEventListener("click", function(){
        if(Number(number.innerHTML)>0){
        number.innerHTML = Number(number.innerHTML) -1;
        }
})

document.getElementById("reseat").addEventListener("click",function(){
     number.innerHTML = 0;
})