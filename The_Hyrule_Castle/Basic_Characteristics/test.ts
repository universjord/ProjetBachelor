


interface Personnage {
    nom: string;
    viemax: number;
    force: number;
}

function attaque(joueur: Personnage, adversaire: Personnage): void {
    adversaire.viemax -= joueur.force;
}

function soin(joueur: Personnage): void {
    joueur.viemax += joueur.viemax / 2;
}

function estTermine(joueur: Personnage, adversaire: Personnage): boolean {
    return joueur.viemax <= 0 || adversaire.viemax <= 0;
}

function fight(): void {
    const link: Personnage = { nom: "Link", viemax: 30, force: 15 };
    let etage: number = 1;

    while (etage <= 10) {
        console.log(`\n=== Étage ${etage} ===`);
        const adversaire: Personnage = { nom: "Bokoblin", viemax: 30, force: 5 };

        while (!estTermine(link, adversaire)) {
            const choix: string = prompt(`Choisissez votre action: attaque ou soin`).toLowerCase();

            if (choix === "attaque") {
                attaque(link, adversaire);
            } else if (choix === "soin") {
                soin(link);
            } else {
                console.log("Choix invalide. Veuillez choisir entre 'attaque' et 'soin'.");
            }

            console.log(`\n${link.nom} (vie: ${link.viemax}) vs ${adversaire.nom} (vie: ${adversaire.viemax})`);
        }

        if (link.viemax <= 0) {
            console.log("Link est vaincu! Fin du jeu.");
            break;
        } else {
            console.log(`${adversaire.nom} est vaincu! Link monte à l'étage suivant.`);
        }

        etage++;
    }

    if (etage > 10) {
        const ganon: Personnage = { nom: "Ganon", viemax: 150, force: 20 };

        console.log(`\n=== Étage ${etage} ===`);
        console.log(`${link.nom} (vie: ${link.viemax}) vs ${ganon.nom} (vie: ${ganon.viemax})`);

        while (!estTermine(link, ganon)) {
            const choix: string = prompt("Choisissez votre action: attaque ou soin").toLowerCase();

            if (choix === "attaque") {
                attaque(link, ganon);
            } else if (choix === "soin") {
                soin(link);
            } else {
                console.log("Choix invalide. Veuillez choisir entre 'attaque' et 'soin'.");
            }

            console.log(`\n${link.nom} (vie: ${link.viemax}) vs ${ganon.nom} (vie: ${ganon.viemax})`);
        }

        if (link.viemax <= 0) {
            console.log("Link est vaincu! Fin du jeu.");
        } else {
            console.log(`${ganon.nom} est vaincu! Link a sauvé le royaume d'Hyrule!`);
        }
    }
}

fight();
