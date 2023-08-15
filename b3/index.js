function taoMotThe(the){
    const img= document.createElement("img")  // <img />
    img.src = the  // <img src ="the"/>
    return img;
}

const boAnh = document.querySelector(".bo-anh")
for(let i=0; i< CARD_SOURCES.length;i++){
    const the=  taoMotThe(CARD_SOURCES[i])
    the.addEventListener("click", xuLiClick)
    boAnh.appendChild(the)
}

function xuLiClick(event){
    // lay ra the hien tai
    const the = event.currentTarget;
    // query ra the co class la active 
    const theDaClick= document.querySelector(".active")
    if(theDaClick){// co ton tai class active
        theDaClick.classList.remove("active")
    }
    // the hien tai click them class active vao
    the.classList.add("active")
}
