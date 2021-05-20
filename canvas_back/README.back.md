# Guide d'utilisation du back
#### Retour à l'accueil -  
[Accueil Readme](../README.md)  
[Guide d'installation front](../canvas_front/README.front.md)  
[Guide d'intégration et d'utilisation des fonctions](../INTEGRATION.md)

## Prerequis
- Avoir un projet playcanvas compressé sur un serveur
    - Exemple en local : Mettre le zip sur un serveur local port 9000 
        - ``python -m SimpleHTTPServer 9000`` dans le dossier ou ce trouve le zip

- Construire le back necessite `node ` et `npm` 

## Instalation des paquets
- ``npm install``

## Demarrer le back
- `npm start`

A partir de ce point les fichiers playcanvas se trouverons sur le serveur local port 8000


## Points à régler

- Gerer le cas ou il n'y a pas de zip dans le serveur requeté 
- Detecter le nom du fichier json pour la scene pour le remplacement de l'url
- Pallier à l'ajout de nouvelle ligne d'export si deja existent
- Automatiser le nom des variables selon le projet telecharger
  