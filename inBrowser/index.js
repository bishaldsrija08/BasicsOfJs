//Learning DOM Manipulation

const hello = document.querySelector(".thisIsH1")
hello.innerHTML = "<Mark>Document Object hello</Mark>"


const button = document.getElementsByTagName("button")[0]
button.textContent = "Change helloo"


button.addEventListener("click", () => {
    hello.textContent = "Color Changed"
})

button.addEventListener("click", () => {
    var newPara = document.createElement("h1")
    newPara.textContent = "New Paragraph Added"
    document.body.appendChild(newPara)
})

