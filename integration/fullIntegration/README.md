Integration du build avec surcharge css 

Dans le <Head><Head/> de votre html

    <script type="application/x-javascript" src="http://localhost:8000/lightandshadow/tictac/__modules__.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/playcanvas@1.32.3/build/playcanvas.js"></script>
    <script type="text/javascript" src="http://localhost:8000/lightandshadow/tictac/__settings__.js"></script>
    <link href="http://localhost:8080/crossIntegration/build/static/css/bundle.min.css" rel="stylesheet">

Dans le <Body><Body/>

    <div class="root" id="root"></div>
    <script src="http://localhost:8080/crossIntegration/build/static/js/bundle.min.js"></script>

les id pour la surcharge css

    #ProjectMain: comprend le configurator et
    #ls-modele-1: le canvas
    #configuratorMain: container global du configurateur 
    #main: les boutons de premier niveau du configurateur
    #detailMenu: container du sous menu du configurateur 
    #menuColor: boutons du menu couleur
    



