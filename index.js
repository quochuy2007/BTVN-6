function ptbh(a,b,c){
if (a===0) {
    function ptbn(b,c){
        if (b===0){
            if (c===0){
            return "vo so nghiem"
            }
            else {
            return "vo nghiem"
            }
        }
        else {
            return "nghiem cua pt la x=-c/b" 
        }
    }
}
else {
    var delta=(b^2)-4*a*c
    if (delta===0){
        return "x1=x2=-b/(2*a)"
    }
    else if (delta>0){
        return "x1=, x2="
    }
    else {
        return "vo nghiem"
    }
}
}    
var a=document.querySelector(".a").value
console.log("a")
var b=document.querySelector(".b").value
var c=document.querySelector(".c").value
var btn=document.querySelector(".btn")
var id=document.querySelector("#result")
id.textContent=""
console.log("id")
btn.addEventListener("click",function(kq){
    console.log("")
})