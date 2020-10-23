
import React, { useRef, useEffect} from "react";
import * as THREE from 'three'
// import OrbitControls from "three-orbitcontrols";

import'./canvas.scss'
import { Canvas } from "react-three-fiber";


function CanvasProject(props) {
  const mesh = useRef();// acces direct au mesh
  let scene = new THREE.Scene()
  let renderer = new THREE.WebGLRenderer({ antialias:true });
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight)
  
useEffect(() =>{
  
      //ajouter le rendu
      renderer.setClearColor("#263238")
      renderer.setSize(window.innerWidth/window.innerHeight)
      
      //ajouter la camera
      camera.position.z = 8;
      camera.position.y = 5;

      //controle de la camera
      // const controls = new OrbitControls(camera, renderer.domElement)

      //light
      let lights =[];

      lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
      lights[1] = new THREE.PointLight(0xffffff, 1, 0);
      lights[2] = new THREE.PointLight(0xffffff, 1, 0);
      lights[0].position.set(0, 200, 0);
      lights[1].position.set(100, 200, 100);
      lights[2].position.set(-100, -200, -100);
      scene.add(lights[0]);
      scene.add(lights[1]);
      scene.add(lights[2]);

      //ajouter le model 3d
      renderScene();
      start();
})
  
  let frameId='';
  let start = () => {
    if (!frameId) {
      frameId = window.requestAnimationFrame(animate);}
    }; 
      
  const animate = () => {
        renderScene();
        frameId = window.requestAnimationFrame(animate);
        };
        const renderScene = () => {
          if (renderer) renderer.render(scene, camera);
      };
      //aniamtion
      start()
    
    
    return (
      <div> 
        <Canvas>
            <mesh>Ò
            </mesh>
        </Canvas>
      </div>
      );
    }
      export default CanvasProject
