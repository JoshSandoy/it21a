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

class Warriror extends Hero{
    useAbility(){
        console.log('$(this.name)uses power Strike');
    }
}

const warrior = new Warriror("Thorin", 100,10);
console.log(warrior.useAbility());
