let p=document.querySelector("p")
console.log(p)
let button=document.querySelector("button")
console.log(button)
let myDIV=document.querySelector("#myDIV")
function add(){
  myDIV.classList.add("myDIV")
}
button.addEventListener("click",add)
function remove(){
  myDIV.classList.add("myDIV")
}
button.addEventListener("click",remove)