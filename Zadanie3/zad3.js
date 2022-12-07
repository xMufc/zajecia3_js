let range = (a,b) =>{
    let minValue = Math.ceil(a);
    let maxValue = Math.floor(b);
    let numbers = [];
    for(let i = minValue; i <= maxValue; i++){
        numbers.push(i);
    }
    
    return numbers;
}


range(1.5,5).forEach(element => {
    console.log(element);
});