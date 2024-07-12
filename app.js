
let div1 = document.getElementById ("div1");
let div2 = document.getElementById ("div2");
let btn1 = document.getElementById ("btn1");
let btn2 = document.getElementById ("btn2");

function alHacerClick() {
    div1.style.visibility='hidden';
    div2.style.visibility='visible';
}
function alHacerClick2() { 
    div2.style.visibility='hidden';
    div1.style.visibility='visible';
}

btn1.addEventListener('click', alHacerClick)

btn2.addEventListener('click', alHacerClick2)