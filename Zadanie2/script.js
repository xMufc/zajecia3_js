var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var tekst = document.querySelector(".tekst");

btn1.addEventListener("click", function(){
    var aktWartosc = (parseInt)(tekst.value);
    tekst.value = aktWartosc+1;
})
btn2.addEventListener("click", function(){
    if(tekst.style.color == "red"){
        tekst.style.color = "black";
    }
    else{
        tekst.style.color = "red";
    }
})