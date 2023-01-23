const btnNext = document.getElementById("btn-next");
const btnStart = document.getElementById("btn-start");
const x = document.getElementById("selection");

btnNext.addEventListener("click",()=>{
    header.classList.add("hidden");
});
btnStart.addEventListener("click",()=>{
    x.classList.add("hidden");
});