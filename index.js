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
        const x= -b/(2*a);
        return " 1 nghiem: x= "+ x
    }
    else if (delta>0){
        var x1= (-b+Math.sqrt(delta))/(2*a);
        var x2= (-b-Math.sqrt(delta))/(2*a);
        return "2 nghiem x1= "+ x1+ ", x2= "+ x2;
    }
    else {
        return "vo nghiem"
    }
}
}    
function onBtnSolveClick(){
    var a = parseFloat(inputA.value)
    var b = parseFloat(inputB.value)
    var c= parseFloat(inputC.value)
    var nghiem= ptbh(a,b,c)
    resultView.innerText= nghiem
}
var inputA= document.querySelector("#a")
var inputB= document.querySelector("#b")
var inputC= document.querySelector("#c")
var btn= document.querySelector("button")
btn.addEventListener("click", onBtnSolveClick)
var resultView= document.querySelector("#result")