let palindrom = (napis) =>{
    let splitString = napis.split("");
    let reverseSplitString = splitString.reverse();
    return napis === reverseSplitString.join("");
}

console.log(palindrom("kajak"));