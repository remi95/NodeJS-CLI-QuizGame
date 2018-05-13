# NodeJs-CLI

_Gaby Fulchic, Rémi Mafat_

Dans le cadre d'un cours de Node JS, nous avons développer une commande CLI.   
Celle-ci permet de jouer à un **quiz** en utilisant l'[API opendtb](https://opentdb.com/api_config.php).  
La commande _quiz_ dispose de plusieurs options.

## Fonctionnalités

La commande _quiz_ permet de jouer rapidement à un quiz de 10 questions, auxquelles il faut répondre par vrai ou faux. Bien entendu, ce sont les paramètres par défaut et il est possible de personnaliser le nombre de questions et le type de réponse pour avoir un QCM à 4 possibilités.  
D'autres éléments sont personnalisables comme le choix de la difficulté ou encore de la catégorie.

Il est aussi possible de se connecter en entrant simplement un nom d'utilisateur, de manière à voir ses scores sauvegardés sur une base de données **SQLite**. 

## Installation

```sh
git clone https://github.com/gabyfulchic/NodeJs-CLI.git
npm install -g
```

## Options 

Un argument entre des <> est obligatoire.    
Un argument entre des [ ] est facultatif.

| Commandes                      | Description|
| ---                            | ---|
| `-v, --version`                | Affiche la version de la commande|
| `-n, --number <number>`        | Préciser le nombrede questions désiré|
| `-m, --multiple`               | Lance le jeu en mode QCM avec 4 réponses possibles|
| `-d, --difficulty <difficulty>`| Choix de la difficulté : easy, medium, hard|
| `-u, --username <username>`    | Jouer en tant qu'utilisateur|
| `-l, --listCategories`         | Lister toutes les catégories|
| `-c, --category <number>`      | Choisir la catégorie avec son id|
| `-e, --export [user]`          | Exporte les scores dans un fichier - Tous si aucun utilisateur n'est précisé - Ceux de l'utilisateur précisé si c'est le cas|
| `--listusers`                  | Liste tous les utilisateurs ayant déjà joué|
| `-h, --help`                   | Affiche l'aide|