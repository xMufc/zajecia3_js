let fibbonaci = (n) =>{
    let numbers = [];
    let temp = 0;
    if(n == 0){
        return numbers;
    }
    else if(n == 1){
        numbers.push(0);
    }
    else if(n == 2){
        numbers.push(0);
        numbers.push(1);
    }
    else{
        numbers.push(0);
        numbers.push(1);
        for(let i = 2; i < n; i++){
            temp = numbers[i-2] + numbers[i-1];
            numbers.push(temp);
        }
    }
    return numbers;
}

fibbonaci(9).forEach(element => {
    console.log(element);
});