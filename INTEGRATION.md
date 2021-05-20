## Guide d'integration du module 3d
#### Menu
[Accueil Readme](README.md)  
[Guide d'installation back](canvas_back/README.back.md)  
[Guide d'installation front](canvas_front/README.front.md)

## Prerequis

- Avoir un build de l'application React ``npm run build``
- Avoir le back demarré sur 8000

## Mettre le build sur un serveur

- exemple en local sur le port 8080 avec la commande  
  ``npx http-server``

## Charger le build et le cdn playcanvas dans le head de la page
```html
	<head>
            <script type="application/x-javascript" src="http://localhost:8000/lightandshadow/tictac/__modules__.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/playcanvas@1.32.3/build/playcanvas.js"></script>
            <script type="text/javascript" src="http://localhost:8000/lightandshadow/tictac/__settings__.js"></script>
            <link href="http://localhost:8080/build/static/css/main.css" rel="stylesheet">
	</head>
```

## Intégrer le Build dans le body de la page
```html
<div class="root" id="root"></div>
<script src="http://localhost:8080/build/static/js/bundle.js"></script>
```

## Intéragir avec le module integré

- Pour intéragir avec le module 3d on va appeler les fonctions grace au variables globales mise en place dans le front
  - Exemple de bouton pour modifié la couleur du modèle 3d:  
    ```<button class="green" onclick="window.lightandshadow_fire.setFireColor('green',window.lightandshadow_app)"> green </button>```