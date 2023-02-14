const mainContainer = document.getElementsByClassName("main-container")
const fstContainer = document.getElementsByClassName("container-one")
const secContainer = document.getElementsByClassName("container-two")

const styleUl = document.getElementsByTagName("li")
const l1 = document.getElementById("s1")
const l2 = document.getElementById("s2")
const l3 = document.getElementById("s3")
const l4 = document.getElementById("s4")
const l5 = document.getElementById("s5")

let H = document.getElementsByClassName("title")
const fRow = document.getElementsByTagName("th")

l1.addEventListener("click", function(event) {
    location.reload()
    for (i = 0; i < styleUl.length; i++) {
        styleUl[i].className = "style1"
    }
})

l2.addEventListener("click", function(event) {
    for (i = 0; i < styleUl.length; i++) {
        styleUl[i].className = "style2"
    }
    for (i = 0; i < H.length; i++) {
        H[i].style.color = "firebrick"
    }
})

l3.addEventListener("click", function(event) {
    for (i = 0; i < styleUl.length; i++) {
        styleUl[i].className = "style3"
    }
    for (i = 0; i < H.length; i++) {
        H[i].style.color = "brown"
    }
    for (i = 0; i < fRow.length; i++) {
        fRow[i].style.color = "pink"
    }
})

l4.addEventListener("click", function(event) {
    for (i = 0; i < styleUl.length; i++) {
        styleUl[i].className = "style4"
    }
    mainContainer[0].className = "main-container s4"
})

l5.addEventListener("click", function(event) {
    mainContainer[0].className = "main-container s5"
})