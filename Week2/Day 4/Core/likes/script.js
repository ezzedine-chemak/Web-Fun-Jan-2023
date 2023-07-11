var like =3;
var likeelement=document.querySelector("#like")
console.log(likeelement)

function add() {
    like ++;
    likeelement.innerHTML=like+" like(s)";
    console.log(like);
}
