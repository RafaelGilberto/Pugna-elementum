//first page
const btnNext = document.getElementById("btn-next");
//second page
const btnStart = document.getElementById("btn-start");
const slc = document.getElementById("firstPart");
const gameBoard = document.getElementById("gameSection");
const btnReturn = document.getElementById("btn-back");
//third page
const elementHierarchyImg = document.getElementById("elements-hierarchy");
const btnFire = document.getElementById("fireImg");
const btnWater = document.getElementById("waterImg");
const btnEarth = document.getElementById("earthImg");
//-------------
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

btnFire.addEventListener("click", () => {
  const playerStatus = new Player("Rafael", 100, 100, "fire");
  const botStatus = new Bot("Alexandre", 100, 100);
  const gameStart = new Game();
  botStatus.botCard();
  gameStart.flipBotCard(botStatus.result);
  gameStart.gameResult(playerStatus, botStatus);
  //gameStart.flipPlayerCards("fire");
  const timeFlip = setTimeout(() => {
    gameStart.flipBotBack();
    //gameStart.flipPlayerCardsBack("fire");
  }, 1500);
});

btnWater.addEventListener("click", () => {
  const playerStatus = new Player("Rafael", 100, 100, "water");
  const botStatus = new Bot("Alexandre", 100, 100);
  const gameStart = new Game();
  botStatus.botCard();
  gameStart.flipBotCard(botStatus.result);
  gameStart.gameResult(playerStatus, botStatus);
  //gameStart.flipPlayerCards("water");
  const timeFlip = setTimeout(() => {
    gameStart.flipBotBack();
    //gameStart.flipPlayerCardsBack();
  }, 1500);
});
btnEarth.addEventListener("click", () => {
  const playerStatus = new Player("Rafael", 100, 100, "earth");
  const botStatus = new Bot("Alexandre", 100, 100);
  const gameStart = new Game();
  botStatus.botCard();
  gameStart.flipBotCard(botStatus.result);
  gameStart.gameResult(playerStatus, botStatus);
  //gameStart.flipPlayerCards("earth");
  const timeFlip = setTimeout(() => {
    gameStart.flipBotBack();
    //gameStart.flipPlayerCardsBack();
  }, 1500);
});
