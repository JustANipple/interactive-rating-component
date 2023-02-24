const buttons = document.querySelectorAll(".rating-nums button");
const btnArray = Array.from(buttons);
const root = document.documentElement;

for(const btn of btnArray) {
    btn.addEventListener("click", colorsOnClick);
    btn.addEventListener("mouseover", colorsOnHover);
    btn.addEventListener("mouseout", colorsOnClick);
}

function colorsOnClick() {
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
    this.style.color = "hsl(0, 0%, 100%)";
}

function colorsOnHover() {
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
    this.style.color = "hsl(0, 0%, 100%)";
}

function colorsOnDefault() {
    this.style.backgroundColor = "hsl(213, 19%, 18%)";
    this.style.color = "hsl(217, 12%, 63%)";
}