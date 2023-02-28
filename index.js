const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');


//background 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "#ADD8E6";

//Caption
ctx.font='30px Arial';
ctx.fillStyle='Black';
ctx.fillText('My World', 400,50);

//ground
ctx.fillStyle='#964B00';
ctx.fillRect(0,760,10000,100);


//Tree
ctx.beginPath();
ctx.moveTo(700,550);
ctx.lineTo(650,650);
ctx.lineTo(750,650);
ctx.closePath();
ctx.stroke();
ctx.fillStyle='#00FF00';
ctx.fill();
ctx.beginPath();
ctx.rect(675,650,45,110);
ctx.fillStyle='#5C4033';
ctx.fill();

//sun
ctx.beginPath();
ctx.arc(95, 80, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle='yellow';
ctx.fill();

//clouds
ctx.beginPath();
ctx.arc(350, 200, 30, 0, 2 * Math.PI);
ctx.arc(400, 200, 30, 0, 2 * Math.PI);
ctx.arc(450, 200, 30, 0, 2 * Math.PI);
ctx.arc(850, 200, 30, 0, 2 * Math.PI);
ctx.arc(800, 200, 30, 0, 2 * Math.PI);
ctx.arc(750, 200, 30, 0, 2 * Math.PI);
ctx.fillStyle='white';
ctx.fill();

//House roof
ctx.beginPath();
ctx.moveTo(220,400);
ctx.lineTo(50,550);
ctx.lineTo(400,550);
ctx.closePath();
ctx.stroke();
ctx.fillStyle='#8B0000';
ctx.fill();
//House body
ctx.beginPath();
ctx.rect(50,550,350,210);
ctx.fillStyle='#C4A484';
ctx.fill();
//House windows
ctx.lineWidth=2;
ctx.strokeStyle='black';
ctx.fillStyle='White';
ctx.fillRect(90,575,75,75);
ctx.strokeRect(90,575,75,75);
ctx.beginPath();
ctx.moveTo(90,610);
ctx.lineTo(165,610);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(125,650);
ctx.lineTo(130,575);
ctx.stroke();

ctx.lineWidth=2;
ctx.strokeStyle='black';
ctx.fillStyle='White';
ctx.fillRect(250,575,75,75);
ctx.strokeRect(250,575,75,75);
ctx.beginPath();
ctx.moveTo(325,610);
ctx.lineTo(250,610);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(285,650);
ctx.lineTo(285,575);
ctx.stroke();

//House Door
ctx.beginPath();
ctx.rect(275,670,60,90);
ctx.fillStyle='#000080';
ctx.fill();
ctx.beginPath();
ctx.arc(290, 725, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle='yellow';
ctx.fill();

//for loop grass
for(let i=400;i<canvas.width;i=i+8){
    ctx.beginPath();
    ctx.moveTo(i,710);
    ctx.lineTo(i+0,760);
    ctx.lineTo(i+5,760);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle='#023020';
    ctx.fill();
    
}




