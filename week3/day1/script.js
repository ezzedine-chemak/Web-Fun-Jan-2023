function city() {
    alert("loding weather report...")
}

var cookie=document.querySelector(".cookie")
function remoove(element){
    cookie.remove();
}
function convert (){
    for(var i=1;i<9;i++){
        var tempspan=document.querySelector("#temp"+i);
        var tempval=parseInt(tempspan.innertext);
        if(e.value == "°C"){
            tempspan.innertext=ftoc(tempval)
        }else{
            tempspan.innertext=ctof(tempval)
        }
    }
}
function ctof(temp){
    return Math.round(9/5*temp+32)
}
function ftoc(temp) {
    return Math.round(5/9*(temp-32))
}