class Game {
    constructor(){

    }    
}
class Player {
    constructor(name, health, strengh) {
        this.name = name;
        this.health = health;
        this.strengh = strengh;
        this.cards = [];
    }
    receiveDamage(damage){
        this.health -= damage;
    }
    attack() {
        return this.strengh;
    }
}