var newone = new Typed(".auto-type", {
    strings: ["Programmer. . . !", "Designer . . . !", "Web Developer . . . !"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
    startDelay: 4500,

})

var newone = new Typed(".myName", {
    strings: ["Hanumanth Reddy"],
    typeSpeed: 200,
    showCursor: false
})

var newone = new Typed(".helloID", {
    strings: ["Hello I'm"],
    typeSpeed: 100,
    showCursor: false
})

function HireMeBtn() {
    let button = document.getElementById('HireBtn');
    if (button.textContent === "Hire Me") {
        button.textContent = "You Hired";
        button.style.fontWeight = 550;
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.style.borderColor = "white";
    } else {
        button.textContent = "Hire Me";
        button.style.fontWeight = 550;
        button.style.backgroundColor = "transparent";
        button.style.color = "white";
        button.style.borderColor = "cyan";
    }
}
