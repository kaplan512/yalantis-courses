class Warrior  {
    constructor(name, attack, hp){
        this.name = name;
        this.attack = attack;
        this.hp = hp;
    }
    attackMethod(){
        let rand = this.attack[0] - 0.5 + Math.random() * (this.attack[1] - this.attack[0] + 1);
        rand = Math.round(rand);
        return rand;
    }
}

class Gladiator extends Warrior {
    constructor(name, attack, hp){
        super(name, attack, hp);
    }
}

class Monster extends Warrior {
    constructor(name, attack, hp){
        super(name, attack, hp);
    }
}

class Game {
    constructor(gladiator, monster){
        this.gladiator = gladiator;
        this.monster = monster;
    }
    start(){
        let gladiatorHp = this.gladiator.hp;
        let monsterHp = this.monster.hp;
        let self = this;

        function fight() {
            if(gladiatorHp && monsterHp) {
                monsterHp = monsterHp - self.gladiator.attackMethod();
                if(monsterHp <= 0) {
                    self.winner = self.gladiator.name;
                    return false;
                }
                gladiatorHp = gladiatorHp - self.monster.attackMethod();
                if(gladiatorHp <= 0) {
                    self.winner = self.monster.name;
                    return false;
                } else {
                    return fight();
                }
            } else {
                return false;
            }
        }
        fight();

    }
}

const gladiator = new Gladiator('Yaroslav', [1, 6], 30);
const monster = new Monster('Evil', [1, 6], 30);
const game = new Game(gladiator, monster);
game.start();
console.log(game.winner);