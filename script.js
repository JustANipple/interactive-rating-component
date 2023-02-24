const buttons = document.querySelectorAll(".rating-nums button");
const btnArray = Array.from(buttons);

for(const btn of btnArray) {
    btn.addEventListener("click", changeColors);
}

function changeColors() {
    this.style.backgroundColor = "grey";
    this.style.color = "white";
}