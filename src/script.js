const btnNext = document.getElementById("btn-next");
const btnStart = document.getElementById("btn-start");
const slc = document.getElementById("firstPart");
const gameBoard = document.getElementById("gameSection");
const btnReturn = document.getElementById("btn-back");
const elementHierarchyImg = document.getElementById("elements-hierarchy");

btnNext.addEventListener("click", () => {
  header.classList.add("hidden");
  slc.classList.replace("hidden", "selection");
});

btnReturn.addEventListener("click", () => {
  slc.classList.replace("selection", "hidden");
  header.classList.remove("hidden");
});

btnStart.addEventListener("click", () => {
  slc.classList.replace("selection", "hidden");
  gameBoard.classList.replace("hidden", "gameSection");
  elementHierarchyImg.classList.remove("hidden");
});

function gameResult(player, bot) {
  if (player == "earth" && bot == "water") {
    return "bot";
  } else if (player == "earth" && bot == "fire") {
    return "player";
  } else if (player == "water" && bot == "earth") {
    return "player";
  } else if (player == "water" && bot == "fire") {
    return "bot";
  } else if (player == "fire" && bot == "earth") {
    return "bot";
  } else if (player == "fire" && bot == "water") {
    return "player";
  } else {
    return "empate";
  }
}
