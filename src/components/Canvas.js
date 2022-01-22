import React, { useEffect } from 'react';

export const Canvasa = ({nombre,modelo="https://cassamstudio.net/img/sombrero.jpg"}) => {

    const canvas = React.useRef();
    const img = React.useRef();

     useEffect(()=>{

                         
        const ctx = canvas.current.getContext('2d'); 
        var stage = document.getElementById('stage');
        var xse = document.getElementById('xse');
        var scaleX = window.innerWidth / canvas.current.width;
        var scaleY = window.innerHeight / canvas.current.height;
    
        var scaleToFit = Math.min(scaleX, scaleY);
        var scaleToCover = Math.max(scaleX, scaleY);
        
    
        stage.style.transformOrigin = '0 0'; //scale from top left
        stage.style.transform = 'scale(.8)';
       // img.current.crossOrigin= 'anonymous';
    
       
       img.current.onload = () => {
            ctx.drawImage(img.current, 0, 0);
            ctx.font = "80px Arial Black";
            ctx.textAlign = "left";
            ctx.fillStyle ="#640668";
       }


            ctx.fillText(nombre, 310, 255); // THIS IS THE PLACE TEXT IS EMBEDDED INTO THE PICTURE

        })  
    

    return(
    <div id="stage">
        <canvas id="canvas" ref={canvas} width="927" height="1200" style={{ display: "block" }} />


        <img
            id="im"
            ref={img}
            alt=""
            src={modelo}
           
            style={{ display: "none" }} 
            />


      

    </div>);
};
