let isHappyNumber = (x) => {
    let temp = 0;
    let result = 0;
    for(let i = 0; i < 1000; i++){
        result = 0;
        while(x > 0){
            temp = x % 10;
            result += Math.pow(temp, 2);    
            x = x / 10;
            x = Math.floor(x);
        }
        if(result === 1){
            return true;
        }
        else{
            x = result;
        }   
    }
    return false;
}

console.log(isHappyNumber(19));