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
  const atkPlayer = document.getElementById("playerAttack");
  const hpPlayer = document.getElementById("playerHP");
  const nmPlayer = document.getElementById("playerName");
  const userNmPlayer = document.getElementById("username").value;
  const nmBot = document.getElementById("botName");
  const atkBot = document.getElementById("botAttack");
  const hpBot = document.getElementById("botHP");
  let botNames = ["Draven", "Janna", "Aurelion", "Teemo"];

  slc.classList.replace("selection", "hidden");
  gameBoard.classList.replace("hidden", "gameSection");
  elementHierarchyImg.classList.remove("hidden");
  atkPlayer.innerHTML = `AttackDamage : 30`;
  hpPlayer.innerHTML = `HP : 120`;
  nmPlayer.innerHTML = `Player : ${userNmPlayer}`;
  nmBot.innerHTML = `BOT.${botNames[Math.round(Math.random() * 3)]}`;
  atkBot.innerHTML = `AttackDamage : ${difficulty[selectLevel()].attack}`;
  hpBot.innerHTML = `HP : ${difficulty[selectLevel()].HP}`;
});
const playerStatus = new Player(120, 30, "fire");
const botStatus = new Bot(
  difficulty[selectLevel()].HP,
  difficulty[selectLevel()].attack
);
const gameStart = new Game();
btnFire.addEventListener("click", () => {
  playerStatus.card = "fire";
  botStatus.botCard();
  gameStart.flipBotCard(botStatus.result);
  gameStart.gameResult(playerStatus, botStatus);
  const timeFlip = setTimeout(() => {
    gameStart.flipBotBack();
  }, 1500);
});
btnWater.addEventListener("click", () => {
  playerStatus.card = "water";
  botStatus.botCard();
  gameStart.flipBotCard(botStatus.result);
  gameStart.gameResult(playerStatus, botStatus);
  const timeFlip = setTimeout(() => {
    gameStart.flipBotBack();
  }, 1500);
});
btnEarth.addEventListener("click", () => {
  playerStatus.card = "earth";
  botStatus.botCard();
  gameStart.flipBotCard(botStatus.result);
  gameStart.gameResult(playerStatus, botStatus);
  const timeFlip = setTimeout(() => {
    gameStart.flipBotBack();
  }, 1500);
});
