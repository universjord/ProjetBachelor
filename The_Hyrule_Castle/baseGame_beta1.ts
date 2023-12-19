//import * as readline from 'readline';
const c = require('ansi-colors');

const cliProgress = require('cli-progress');
const readline = require('readline');


interface Player {

    name: string,
    HP: number,
    hpMax: number,
    STR: number,


};

interface Enemies {

    name: string,
    HP: number,
    hpMax: number,
    STR: number

};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});


const hero: Player = {
    name: "Link",
    HP: 60,
    hpMax: 60,
    STR: 15
};


const Bokoblin: Enemies = {
    name: "Bokoblin",
    HP: 30,
    hpMax: 30,
    STR: 5
};


//export des fonctions à appeller en-dessous 
export function healHero(hero: Player) {
    const calcul_heal = hero.hpMax / 2;
    hero.HP += calcul_heal;
    if (hero.HP > hero.hpMax){
        hero.HP = hero.hpMax;
    }
    console.log("You have charged and restored your life gauge ${calcul_heal}")
};


export function attackHero(Bokoblin: Enemies) {
    Bokoblin.HP -= hero.STR;

};


export function attackEnemies(hero: Player): void {
    hero.HP -= Bokoblin.STR;

};



export function fight() {
    console.log('======= FIGHT 1 =======\n');
    console.log(c.red.bold(`${Bokoblin.name}`));
    console.log(`HP: ${'I'.repeat(Bokoblin.HP)} ${Bokoblin.HP}/${Bokoblin.hpMax}`);
    console.log('\n')
    
    console.log(c.green.bold(`${hero.name}`));   // .bold avoir caractère en gras
    console.log(`HP: ${'I'.repeat(hero.HP)} ${hero.HP}/${hero.hpMax}`);
    console.log('\n');
    

    console.log(`\n`);
    console.log(c.cyan.underline(`---- Options ----`));
    console.log(`1. Attack      2. Heal\n`);



    // amboarina eto
    rl.question("Please choose an option 1. Attack      2. Heal\n ", (choice: string) => {
        const option = parseInt(choice);
        switch (option) {
            case 1:
                console.log("You choose to Attack!");
                attackHero(hero); // il va appeler la fonction attack en dessous

                break;


            case 2:
                console.log("You choose to Heal!");
                healHero(hero) // vas directement à la fonction soin 
                break;
        }
    });

};

fight();

