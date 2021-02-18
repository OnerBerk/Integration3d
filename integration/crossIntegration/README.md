Pour l'intragation du build 

Dans le <Head><Head/> de votre html

    <script type="application/x-javascript" src="http://localhost:8000/lightandshadow/tictac/__modules__.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/playcanvas@1.32.3/build/playcanvas.js"></script>
    <script type="text/javascript" src="http://localhost:8000/lightandshadow/tictac/__settings__.js"></script>
    <link href="http://localhost:8080/crossIntegration/build/static/css/bundle.min.css" rel="stylesheet">

Dans le <Body><Body/>

    <div class="root" id="root"></div>
    <script src="http://localhost:8080/crossIntegration/build/static/js/bundle.min.js"></script>

Les functions pour interagir avec le modele 3d , remplacer couleur par ( red ou green ou black )

    window.lightandshadow_fire.setFireColor('couleur', window.lightandshadow_app)







