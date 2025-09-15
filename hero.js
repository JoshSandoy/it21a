class Hero {
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getHealth(){
        return this.#health;
    }
}

const hero = new Hero("Thorin",100,10);

hero.getHealth();

console.log(hero.getHealth());
