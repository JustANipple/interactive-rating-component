// Saving array of buttons
const buttons = document.querySelectorAll(".rating-nums button");
const btnArray = Array.from(buttons);
const root = document.documentElement;

// Saving every custom color for the numbers
const rootStyles = window.getComputedStyle(document.documentElement);
const whiteClr = rootStyles.getPropertyValue("--h-clr");
const numBgClr = rootStyles.getPropertyValue("--par-clr");
const orangeClr = rootStyles.getPropertyValue("--btn-clr");
const blueClr = rootStyles.getPropertyValue("--cont-bg-clr");

// Saving the value in the clicked number
const submit = document.querySelector(".submit-btn");

// Saving containers
const rating = document.querySelector(".rating");
const thank = document.querySelector(".thank");
const selected = document.querySelector(".selected");

let isClicked = false;
let num = 0;
for(const btn of btnArray) {
    btn.addEventListener("click", clicked);
    btn.addEventListener("mouseover", isHover);
    btn.addEventListener("mouseout", isOut);
}

submit.addEventListener("click", (event) => {
    selected.textContent = "You selected " + num + " out of 5";
    rating.style.display = "none";
    thank.style.display = "flex";
});

submit.addEventListener("mouseover", (event) => {
    submit.style.backgroundColor = whiteClr;
    submit.style.color = orangeClr;
});

submit.addEventListener("mouseout", (event) => {
    submit.style.backgroundColor = orangeClr;
    submit.style.color = whiteClr;
});

function clicked() {
    for(const btn of btnArray) {
        btn.style.backgroundColor = blueClr;
        btn.style.color = numBgClr;
        btn.isClicked = false;
    }
    this.isClicked = true;
    this.style.backgroundColor = numBgClr;
    this.style.color = whiteClr;
    num = this.textContent;
    submit.style.pointerEvents = "unset";
}

function isHover() {
    if(!(this.isClicked)) {
        this.style.backgroundColor = orangeClr;
        this.style.color = whiteClr;
    }
}

function isOut() {
    if(this.isClicked) {
        this.style.backgroundColor = numBgClr;
        this.style.color = whiteClr;
    } else if (!(this.isClicked)) {
        this.style.backgroundColor = blueClr;
        this.style.color = numBgClr;
    }
}






