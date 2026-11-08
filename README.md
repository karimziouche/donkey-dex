# Donkey Dex

Pokédex de la première génération développé en **Angular**, réalisé dans le cadre de ma formation Développeur web et web mobile à la Donkey School.

🔗 **Démo en ligne : [karimziouche.github.io/donkey-dex](https://karimziouche.github.io/donkey-dex/)**

## Fonctionnalités

- Affichage des Pokémon de la 1re génération sous forme de cartes : numéro, nom, types et image
- Données récupérées en temps réel depuis la [PokéAPI](https://pokeapi.co/)
- Chargement par lots de 20 Pokémon, avec indicateur de chargement
- Barre de navigation responsive

## En cours de développement

- [ ] Recherche d'un Pokémon par nom
- [ ] Page détail de chaque Pokémon
- [ ] Ajout aux favoris
- [ ] Chargement automatique au défilement

## Technologies

- **Angular 22** : composants standalone, signals, nouveau control flow (`@for`, `@if`)
- **TypeScript**
- **RxJS** : `forkJoin` et `switchMap` pour combiner les appels à l'API
- **Bootstrap 5**
- Déploiement sur **GitHub Pages**

## Lancer le projet en local

    git clone https://github.com/karimziouche/donkey-dex.git
    cd donkey-dex
    npm install
    npm start

Puis ouvrir http://localhost:4200

## Auteur

**Karim Ziouche** – [GitHub](https://github.com/karimziouche)
