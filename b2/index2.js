function ptbn(a,b){
    if (a===0){
        if (b===0){
            return "vo so nghiem";
        }
        else {
            return "vo nghiem";
        }
    }
    else {
        let x= +(-b/a)
        return "1 nghiem la x="+ x;
    }
}
function onBtnSolveClick(){
    let a = (document.querySelector("#a").value)
    let b = (document.querySelector("#b").value)
    let nghiem= ptbn(a,b)
    let result= document.querySelector("#result")
    result.innerText= nghiem
}
let btn= document.querySelector("button")
btn.addEventListener("click", onBtnSolveClick)