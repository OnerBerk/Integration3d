import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import './styles.scss'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas className='canvas' ref={canvasRef} {...props}/>
}

// const Canvas=()=>{
//         useEffect=(()=>{
//             let scene = new THREE.Scene();
//             let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//             let renderer = new THREE.WebGLRenderer();
//             renderer.setSize( window.innerWidth, window.innerHeight );
//             document.body.appendChild( renderer.domElement );
//             let geometry = new THREE.BoxGeometry( 1, 1, 1 );
//             let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//             let cube = new THREE.Mesh( geometry, material );
//             scene.add( cube );
//             camera.position.z = 5;
//             let animate = function () {
//             requestAnimationFrame( animate );
//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;
//             renderer.render( scene, camera );
//             };
//             animate();
//         },[])
//         return(
//             <div></div>
//         )
// }

export default Canvas



