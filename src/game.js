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
  flipPlayerCards(chosenCard) {
    const cardsOnPlayerSide = document.getElementsByClassName("card-elements");
    console.log(cardsOnPlayerSide);
    for (let i = 0; i < cardsOnPlayerSide.length; i++) {
      if (cardsOnPlayerSide[i].getAttribute("id") !== `${chosenCard}Img`) {
        //cardsOnPlayerSide[i].classList.replace("card-elements", "bot-card");
        cardsOnPlayerSide[i].setAttribute("src", " ");
      }
      /*
      cardsOnPlayerSide[i].setAttribute(
        "id",
        `${cardsOnPlayerSide[i].getAttribute("id").replace("Img", "Off")}`
      );
      console.log(cardsOnPlayerSide[i].getAttribute("id"));*/
    }
  }
  flipPlayerCardsBack() {
    const cardsFlipped = document.getElementsByClassName("card-elements");
    for (let i = 0; i < cardsFlipped.length; i++) {
      if (i == 0) {
        cardsOnPlayerSide[i].setAttribute("src", "./image/fire.jpg");
      } else if (i == 1) {
        cardsOnPlayerSide[i].setAttribute("src", "./image/earth.jpg");
      } else {
        cardsOnPlayerSide[i].setAttribute("src", "./image/water.jpg");
      }
    }
  }
  gameResult(player, bot) {
    let winner = "";
    const pResult = document.getElementsByTagName("p");
    if (player == "earth" && bot == "water") {
      winner = "You Lost! >_<";
    } else if (player == "earth" && bot == "fire") {
      winner = "You Won! =)";
    } else if (player == "water" && bot == "earth") {
      winner = "You Won! =)";
    } else if (player == "water" && bot == "fire") {
      winner = "You Lost! >_<";
    } else if (player == "fire" && bot == "earth") {
      winner = "You Lost! >_<";
    } else if (player == "fire" && bot == "water") {
      winner = "You Won! =)";
    } else {
      winner = "It's a tie! -_-'";
    }
    pResult[0].innerHTML = `Result : ${winner}`;
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
    this.cards = ["fire", "earth", "water"];
    this.result = "";
  }
  botCard() {
    this.result = this.cards[Math.round(Math.random() * 2)];
    return this.result;
  }
}
