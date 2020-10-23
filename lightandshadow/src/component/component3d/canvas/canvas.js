
import React, { useRef, useEffect, useState, useCallback } from 'react'
import './canvas.scss'

const CanvasProject = props => {
  
  const canvasRef = useRef(null) //creer un objet avec une proprieté mutable qui est ".current"  
  const [circleColor, setCircleColor] = useState("red") 
  const [ x, setX ] = useState(20)
  // draw etant une depence du useeffect il se rexecute 
  // a chaque cycle du composant , usecallback evite la boucle infinie
  const draw = useCallback((ctx) => { 
    ctx.y = 85;
    ctx.radius =15
    ctx.lineWidth = 1; //largeur de la ligne 
    
    ctx.beginPath(); // debute le dessin
    ctx.strokeStyle = 'blue'; //definie une couleur  autour des formes
    ctx.moveTo(20, 20); // position initial du stylo
    ctx.lineTo(150, 20); //connecte le dernier point specifier a x , y 
    ctx.stroke(); //rendu du dessin 
    
    ctx.beginPath();
    ctx.arc(x, ctx.y, ctx.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black"
    ctx.fillStyle = circleColor
    ctx.fill()
    ctx.stroke();
  
},[circleColor, x])


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    //sconst offset = canvas.getBoundingClientRect();
    context.fillStyle = "rgb(215,227,234)";  // définit la couleur de remplissage du rectangle 
    context.fillRect(0, 0, window.innerWidth, window.innerHeight); 
    //dessine le rectangle autour du canvas position 10,10 hauteur largeur
    
    draw( context)
    // window.addEventListener('mousedown', function(event) {
    //   draw(event.clientX - offset.x, event.clientY - offset.y, 50);
    // });
  }, [draw])
    
    const blue =()=>{
      setCircleColor('blue')
    }
    const green =()=>{
      setCircleColor('green')
    }
    const red =()=>{
      setCircleColor('red')
    }
    const right =()=>{
      setX( x + 10 )
    }    
    return (
      <div>
      <canvas  ref={canvasRef} {...props}  onClick={()=>right()}/><br/>
      <button onClick={()=>blue()}> Blue</button>
      <button onClick={()=>green()}> Green</button>
      <button onClick={()=>red()}> Red</button><br/>
  </div>
  )
  
}

export default CanvasProject