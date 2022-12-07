let sum = (a) =>{
    let result = 0;
    a.forEach(element => {
        result += element;
    });
    
    return result;
}

console.log(sum([3, 7, 5]));