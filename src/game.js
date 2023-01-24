class Game {
  constructor() {}
  flipBotCard(botCard) {
    const botFlip = document.getElementById("botArea");
    const botImg = document.createElement("img");
    switch (botCard) {
      case "fire":
        botImg.setAttribute("src", `./images/fire.jpg`);
        break;
      case "water":
        botImg.setAttribute("src", `./images/water.jpg`);
      case "earth":
        botImg.setAttribute("src", `./images/earth.jpg`);
        break;
    }
    botFlip.appendChild(botImg);
  }
  gameResult(player, bot) {
    let winner = "";
    if (player == "earth" && bot == "water") {
      winner = "bot";
    } else if (player == "earth" && bot == "fire") {
      winner = "player";
    } else if (player == "water" && bot == "earth") {
      winner = "player";
    } else if (player == "water" && bot == "fire") {
      winner = "bot";
    } else if (player == "fire" && bot == "earth") {
      winner = "bot";
    } else if (player == "fire" && bot == "water") {
      winner = "player";
    } else {
      winner = "empate";
    }
  }
}
class Player {
  constructor(name, health, strengh, card) {
    this.name = name;
    this.health = health;
    this.strengh = strengh;
    this.card = card;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
  attack() {
    return this.strengh;
  }
}

class Bot extends Player {
  constructor(name, health, strengh) {
    super(name, health, strengh);
    this.result = "";
  }
  botCard() {
    this.result = this.cards[Math.round(Math.random() * 3)];
    return this.result;
  }
}
