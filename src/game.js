class Game {
  constructor() {}
  flipBotCard(botCard) {
    const botFlip = document.getElementById("botArea");
    const botImg = document.createElement("img");
    switch (botCard) {
      case "fire":
        botImg.setAttribute("src", `./image/fire.jpg`);
        botImg.classList.add("bot-card-flipped");
        break;
      case "water":
        botImg.setAttribute("src", `./image/water.jpg`);
        botImg.classList.add("bot-card-flipped");
        break;
      case "earth":
        botImg.setAttribute("src", `./image/earth.jpg`);
        botImg.classList.add("bot-card-flipped");
        break;
    }
    botFlip.appendChild(botImg);
  }
  flipBotBack() {
    const botFlipBack = document.getElementsByClassName("bot-card-flipped");
    for (let i = 0; i < botFlipBack.length; i++) {
      botFlipBack[i].remove();
    }
  }
  /*
  flipPlayerCards(chosenCard) {
    const cardsOnPlayerSide = document.getElementsByClassName("card-elements");
    const cardsDiv = document.getElementsByClassName("on");
    let position;
    if (chosenCard == "fire") {
      position = 0;
    } else if (chosenCard == "water") {
      position = 2;
    } else {
      position = 1;
    }
    for (let i = 0; i < 3; i++) {
      if (i !== position) {
        console.log(cardsDiv[i]);
        cardsDiv[i].removeChild(cardsOnPlayerSide[i]);
      }
    }
  }  
  flipPlayerCardsBack(player) {
    let position;
    const cardsDivOn = document.getElementsByClassName("on");
    if (player == "fire") {
      position = 0;
    } else if (player == "water") {
      position = 2;
    } else {
      position = 1;
    }
    for (let i = 0; i < cardsDivOn.length; i++) {
      if (i !== position) {
        const cardImg = document.createElement("img");
        if (i == 0) {
          cardImg.setAttribute("src", `./image/fire.jpg`);
          cardImg.classList.add("card-elements");
        } else if (i == 1) {
          cardImg.setAttribute("src", `./image/earth.jpg`);
          cardImg.classList.add("card-elements");
        } else {
          cardImg.setAttribute("src", `./image/water.jpg`);
          cardImg.classList.add("card-elements");
        }
        cardsDivOn[i].appendChild(cardImg);
      }
    }
    
  }
  */

  gameResult(player, bot) {
    let winner = "";
    const pResult = document.getElementsByTagName("p");
    if (player.card == "earth" && bot.result == "water") {
      winner = "You Lost! >_<";
      player.receiveDamage(bot.attack());
    } else if (player.card == "earth" && bot.result == "fire") {
      winner = "You Won! =)";
      bot.receiveDamage(player.attack());
    } else if (player.card == "water" && bot.result == "earth") {
      winner = "You Won! =)";
      bot.receiveDamage(player.attack());
    } else if (player.card == "water" && bot.result == "fire") {
      winner = "You Lost! >_<";
      player.receiveDamage(bot.attack());
    } else if (player.card == "fire" && bot.result == "earth") {
      winner = "You Lost! >_<";
      player.receiveDamage(bot.attack());
    } else if (player.card == "fire" && bot.result == "water") {
      winner = "You Won! =)";
      bot.receiveDamage(player.attack());
    } else {
      winner = "It's a tie! -_-'";
      player.receiveDamage(bot.attack());
      bot.receiveDamage(player.attack());
    }
    pResult[0].innerHTML = `Result : ${winner}`;
    this.endGame(player, bot);
  }
  endGame(player, bot) {
    if (player.health <= 0 && bot.health > 0) {
    } else if (player.health > 0 && bot.health <= 0) {
    } else {
    }
  }
}
class Player {
  constructor(name, health, strengh, card) {
    const difficulty = document.getElementById("game-difficult").value;
    this.name = name;
    this.health = health;
    this.strengh = strengh;
    this.card = card;
  }
  receiveDamage(damage) {
    if (this.health - damage < 0) {
      this.health = 0;
    } else {
      this.health -= damage;
    }
  }
  attack() {
    return this.strengh;
  }
}

class Bot extends Player {
  constructor(name, health, strengh) {
    super(name, health, strengh);
    this.cards = ["fire", "earth", "water"];
    this.result = "";
  }
  botCard() {
    this.result = this.cards[Math.round(Math.random() * 2)];
    return this.result;
  }
}
