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
    const cardsDiv = document.getElementsByClassName("on");
    let position;
    if (chosenCard == "fire") {
      position = 0;
    } else if (chosenCard == "water") {
      position = 2;
    } else {
      position = 1;
    }
    for (let i = 0; i < cardsDiv.length; i++) {
      if (i !== position) {
        cardsDiv[i].firstChild.remove();
      }
    }

    //console.log(cardsOnPlayerSide.length);
    /*
    for (let i = 0; i < cardsOnPlayerSide.length; i++) {
      if (cardsOnPlayerSide[i].getAttribute("id") == `${chosenCard}Img`) {
        continue;
      }
      console.log(cardsOnPlayerSide[i].getAttribute("id"));
      cardsOnPlayerSide[i].classList.replace("card-elements", "hiddenCards");
      cardsDiv[i].classList.replace("on", "off");
    }
    console.log(cardsOnPlayerSide);*/

    //console.log(cardsOnPlayerSide.length);
    //console.log(`${chosenCard}Img`);
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
    /*
    const cardsFlipped = document.getElementsByClassName("hiddenCards");
    const cardsDivOff = document.getElementsByClassName("off");
    for (let i = 0; i < cardsFlipped.length; i++) {
      cardsFlipped[i].classList.replace("hiddenCards", "card-elements");
    }
    for (let i = 0; i < cardsDivOff.length; i++) {
      cardsDivOff[i].classList.replace("off", "on");
    }*/
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
