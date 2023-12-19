
const rl = require('readline-sync');

const cliProgress = require('cli-progress');
const c = require('ansi-colors');
const readline = require('readline');


interface Player {

    name: string,
    HP: number,
    hpMax: number,
    STR: number,

};

interface Enemmies {

    name: string,
    HP: number,
    hpMax: number,
    STR: number

};


const hero: Player = {
    name: "Link",
    HP: 60,
    hpMax: 60,
    STR: 15
};

const Bokoblin: Enemmies = {
    name: "Bokoblin",
    HP: 30,
    hpMax: 30,
    STR: 5
}

const Ganon: Enemmies = {

    name: "Ganon",
    HP: 150,
    hpMax: 150,
    STR: 20
}



function fight() {
    console.log(c.red.bold(`${Bokoblin.name}`));
    console.log(`HP: ${'\u{1F9E1}'.repeat(Bokoblin.HP)} ${Bokoblin.HP}/${Bokoblin.hpMax}`);
    console.log('\n')
    console.log(c.green.bold(`${hero.name}`));
    console.log(`HP: ${'\u{1F49A}'.repeat(hero.HP)} ${hero.HP}/${hero.hpMax}`);
    console.log('\n');
    console.log(c.cyan.underline(`---- Options ----`));
    const choix = ["attack", "heal"];
    const option = rl.keyInSelect(choix, "", { cancel: false })
    console.log(option);
    switch (option) {
        case 0:
            //attack link
            console.log(`You choose to attack!`);
            console.log(c.red(`${Bokoblin.name}\n`));
            console.log(c.red("You attacked Bokoblin and dealt 15 damage!"));
            Bokoblin.HP -= hero.STR;
            console.log(`${Bokoblin.HP}\n`);

            console.log(c.green(`${hero.name}\n`));
            console.log(c.green("Link have a damage!"));
            hero.HP -= Bokoblin.STR;
            console.log(`${hero.HP}`);

            break;

        case 1:
            console.log("You choose to Heal!");
            if (hero.HP <= (hero.HP / 2)) {
                hero.HP += (hero.HP / 2);
            }
            else
                hero.HP = hero.hpMax;
            console.log('\n');
            break;
    }

}

let index = 1;
while (hero.HP > 0) {
    console.log(`======= FIGHT ${index}=======\n`);
    fight();

    if (Bokoblin.HP <= 0 && index <= 10) {
        end_game_boko();
        Bokoblin.HP = Bokoblin.hpMax;
        index++;


    } if (hero.HP <= 0) {
        end_game_link();
    }
    while (index == 10) {

        finalFight();
    }

}


function finalFight() {
    console.log(c.red.bold(`${Ganon.name}`));
    console.log(`HP: ${'\u{1F525}'.repeat(Ganon.HP)} ${Ganon.HP}/${Ganon.hpMax}`);
    console.log('\n')
    console.log(c.green.bold(`${hero.name}`));
    console.log(`HP: ${'\u{1F49A}'.repeat(hero.HP)} ${hero.HP}/${hero.hpMax}`);
    console.log('\n');
    console.log(c.cyan.underline(`---- Options ----`));
    const choix = ["attack", "heal"];
    const option = rl.keyInSelect(choix, "", { cancel: false })
    console.log(option);
    switch (option) {
        case 0:
            console.log("You choose to attack!");
            console.log(c.red(`${Ganon.name}\n`));
            console.log(c.red("You attacked Ganon and dealt 15 damage!"));
            Ganon.HP -= hero.STR;
            console.log(`${Ganon.HP}\n`);


            console.log(c.green(`${hero.name}\n`));
            console.log(c.green("Link have a damage"));
            hero.HP -= Ganon.STR;
            console.log(`${hero.HP}`);

            break;

        case 1:
            console.log("You choose to heal!");
            if (hero.HP <= (hero.HP / 2)) {
                hero.HP += (hero.HP / 2);
            }
            else
                hero.HP = hero.hpMax;
            console.log('\n');

            break;
    }if (Ganon.HP <= 0) {
        end_game_Ganon();
    } else if (hero.HP <= 0) {
        end_game_link();

    }

}

function end_game_boko() {

    console.log("Link defeated Bokoblin!");
};

function end_game_Ganon() {

    console.log(`\u{1F947}Link has defeated Ganon you can deliver princess Zelda!\u{1F947}`);
};

function end_game_link() {
    console.log(`Link has been defeated the game is over!\u{1F480}`);

}

export default { finalFight, fight, end_game_boko, end_game_Ganon, end_game_link };