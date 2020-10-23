import React, {useRef, useEffect} from 'react'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'


const UnityProject=(props)=>{

    
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight, 0.1, 1000 );
    let renderer = new THREE.WebGLRenderer();

    let controls = new OrbitControls(camera, renderer.domElement) 
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = -200;
    camera.lookAt(new THREE.Vector3(0,0,0));

    const objs =[];
    let loader = new THREE.ObjectLoader();
    let loaders = new OBJLoader();

    loaders.load('./953348.json', function(object){
        scene.add(object);
        //console.log(scene)
    
})
document.body.appendChild(renderer.domElement)
    return (
    <></>
    )
}
export default UnityProject
