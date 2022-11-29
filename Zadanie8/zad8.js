let anagram = (a,b) =>{
    if(a.length !== b.length) return false;

    a = a.split("");
    b = b.split("");
    return a.sort().join("") === b.sort().join("");
}
console.log(anagram("heart", "earth"));