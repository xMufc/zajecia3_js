let anagram = (a,b) =>{
    if(a.length === b.length){
        a = a.split("");
        b = b.split("");
        a.sort();
        b.sort();
        return a.join("") === b.join("");
    }
    else{
        return false;
    }   
}
console.log(anagram("heart", "earth"));