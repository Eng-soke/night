const image1Element = document.querySelector("#image1")
const image2Element = document.querySelector("#image2")
const image3Element = document.querySelector("#image3")
const image4Element = document.querySelector("#image4")
const image5Element = document.querySelector("#image5")
const nextElement   = document.querySelector("#next")
const prevElement   = document.querySelector("#prev")


nextElement.addEventListener("click", function(){
    
    image2Element.style.display = "block" 
    image1Element.style.display = "none"
    
    
})

prevElement.addEventListener("click", ()=>{
    image1Element.style.display = "block"
    image2Element.style.display = "none"
})



