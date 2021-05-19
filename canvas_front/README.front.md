# Guide d'utilisation du front  
[Accueil Readme](../README.md)  
[Guide d'installation back](../canvas_back/README.back.md)  
[Guide d'intégration et d'utilisation des fonctions](../INTEGRATION.md)

## Prerequis
- Avoir le back lancé sur le serveur 8000
- Construire le front necessite `npm`

## Installation des paquets
- `npm install`

## Point important 
- Le projet à été configurer pour un type de modele 3d avec une configuration de couleur d'environement et de vue.   
Les fonctions et leurs utilisations doivent etre definis par le createur du modele 3d,  
  pour que coté React on puissent creer des composant d'interaction avec le modele si necessaire  
  
- Il faut definir des variables globales au fonction pour qu'elles soit accessible lors de l'intégration 
  - Exemple de fonction :
```javascript

export const setFireColor = (newValue, app) => {
    app.fire("color:set", newValue);
}

window.lightandshadow_fire = {setFireColor}
```


## Demarrer le front
- `npm start`  
  A partir de ce point votre projet playcanvas seras visible et fonctionelle sur le port 3000


## Points à régler
### Dans la composant **onDemand**
- acceder au css du canvas en dehors de ce composant.

## Point à voir
- Tester avec un autre modèle 3d"
  