export class CompteBancaire {
    #solde = 0; // Propriété privée

    // Méthode pour déposer un montant
    deposer(montant) {
        if (montant > 0) {
            this.#solde += montant;
        } else {
            console.log("Le montant à déposer doit être positif.");
        }
    }

    // Méthode pour retirer un montant sans permettre un solde négatif
    retirer(montant) {
        if (montant > this.#solde) {
            console.log("Fonds insuffisants pour effectuer ce retrait.");
        } else if (montant > 0) {
            this.#solde -= montant;
        } else {
            console.log("Le montant à retirer doit être positif.");
        }
    }

    // Méthode pour afficher le solde actuel
    afficherSolde() {
        console.log(`Solde actuel : ${this.#solde} euros`);
    }
}
