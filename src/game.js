const difficulty = [
  {
    level: "Easy",
    HP: 90,
    attack: 20,
  },
  {
    level: "Normal",
    HP: 120,
    attack: 30,
  },
  {
    level: "Hard",
    HP: 150,
    attack: 40,
  },
];
function selectLevel() {
  const gameLevel = document.getElementById("game-difficult");
  if (gameLevel.value == "Easy") {
    return 0;
  } else if (gameLevel.value == "Normal") {
    return 1;
  } else {
    return 2;
  }
}
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

  gameResult(player, bot) {
    let winner = "";
    const pResult = document.getElementsByTagName("p");
    const hpPlayer = document.getElementById("playerHP");
    const hpBot = document.getElementById("botHP");
    if (player.card == "earth" && bot.result == "water") {
      winner = "You Lost! >_<";
      player.receiveDamage(bot.attack());
      hpPlayer.innerHTML = `HP : ${player.health}`;
    } else if (player.card == "earth" && bot.result == "fire") {
      winner = "You Won! =)";
      bot.receiveDamage(player.attack());
      hpBot.innerHTML = `HP : ${bot.health}`;
    } else if (player.card == "water" && bot.result == "earth") {
      winner = "You Won! =)";
      bot.receiveDamage(player.attack());
      hpBot.innerHTML = `HP : ${bot.health}`;
    } else if (player.card == "water" && bot.result == "fire") {
      winner = "You Lost! >_<";
      player.receiveDamage(bot.attack());
      hpPlayer.innerHTML = `HP : ${player.health}`;
    } else if (player.card == "fire" && bot.result == "earth") {
      winner = "You Lost! >_<";
      player.receiveDamage(bot.attack());
      hpPlayer.innerHTML = `HP : ${player.health}`;
    } else if (player.card == "fire" && bot.result == "water") {
      winner = "You Won! =)";
      bot.receiveDamage(player.attack());
      hpBot.innerHTML = `HP : ${bot.health}`;
    } else {
      winner = "It's a tie! -_-'";
      player.receiveDamage(bot.attack());
      bot.receiveDamage(player.attack());
      hpPlayer.innerHTML = `HP : ${player.health}`;
      hpBot.innerHTML = `HP : ${bot.health}`;
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
  constructor(health, strengh) {
    const difficulty = document.getElementById("game-difficult").value;
    this.health = health;
    this.strengh = strengh;
    this.card = "";
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
  constructor(health, strengh) {
    super(health, strengh);
    this.cards = ["fire", "earth", "water"];
    this.result = "";
    this.health = health;
    this.strengh = strengh;
  }
  botCard() {
    this.result = this.cards[Math.round(Math.random() * 2)];
    return this.result;
  }
}
