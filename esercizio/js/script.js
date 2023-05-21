
for(let numero = 1; numero<=100; numero++){
    
    if(numero % 3 == 0 ){
        console.log("Fizz")
        if(numero % 5 == 0){
            console.log("FizzBuzz")
        }
    }
    else if(numero % 5 == 0 ){
            console.log("Buzz")
    }
    else{
        console.log(numero)
    }
}