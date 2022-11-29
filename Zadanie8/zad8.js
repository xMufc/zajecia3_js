let anagram = (a,b) =>{
    if(a.length !== b.length) return false;
    
    a = a.split("");
    b = b.split("");
    a.sort();
    b.sort();
    return a.join("") === b.join("");
}
console.log(anagram("heart", "earth"));