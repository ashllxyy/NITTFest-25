import React, { useState, useRef } from 'react';

const Results = () => {
  
  
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const logoRef = useRef(null);

  const handlePreview = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.height = 450
    canvas.width = 400


    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // White with transparency
    
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    
    ctx.fillStyle = "#fff";
    ctx.font = "40px Jost";
    ctx.fillText("NittFest ID", 110, 50);
    
    
 
    
    // Set globalAlpha for transparency
ctx.globalAlpha = 0.1; // 50% opacity

// Draw the image with reduced opacity
ctx.drawImage(logoRef.current, 50, 65, 300, 340);

// Reset globalAlpha to fully opaque for other drawings
ctx.globalAlpha = 1.0;
    ctx.font = "20px Jost"
    ctx.fillStyle = "#fff";
    ctx.fillText("Name: Sanjai", 100, 300);
    ctx.fillText("RollNo: 103123096", 100, 330);
    ctx.fillText("Preferred Team: Design Team", 100, 360);
    ctx.fillText("Dept: ECE Dept.", 100, 390);
    ctx.fillText("See You There in Inductions", 80,430)
    
    ctx.drawImage(imageRef.current, 100, 70, 200, 200);
  };

  const handleImageLoad = (event) => {
    const image = imageRef.current;
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;

    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
    } else {
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.href = canvas.toDataURL();
      a.download = "Card.png";
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className='idcard'>
      
      
      <input type="file" className='id-download' onChange={handleImageLoad} />
      <button id="preview" className='id-download ' onClick={handlePreview}>Preview</button>

      <canvas ref={canvasRef} id="result" className='idcard-container'/>

      <img ref={imageRef} id="imgDisplayed" alt="Preview" style={{ display: "none" }} />
      <img ref={logoRef} id="logo" src="logo.png" alt="Logo" style={{ display: "none" }} />

      <button id="down"  className='id-download' onClick={handleDownload}>Download ID Card</button>
    </div>
  );
};

export default Results;
