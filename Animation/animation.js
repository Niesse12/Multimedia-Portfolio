const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const background = new Image();
background.src = 'https://images.hdqwalls.com/download/super-cute-animals-1600x900.jpg';
background.onload = function() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};

window.onload = function() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.src("https://www.shutterstock.com/image-vector/cute-bee-pixel-art-style-260nw-1521040859.jpg");
    ctx.drawImage(img, 10, 10);
  };



const items = [
  { x: 100, y: 100, text: 'Hello!' },
  { x: 400, y: 300, text: 'Hey,Whats up?' },
];


function drawItem(item) {
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.fillRect(item.x, item.y, 130, 50);
  ctx.font = '18px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(item.text, item.x + 10, item.y + 30);
  ctx.closePath();
}

function animate() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  items.forEach(item => {
    drawItem(item);
    item.x += Math.random() * 10 - 5;
    item.y += Math.random() * 10 - 5;
    if (item.x > canvas.width) item.x = -100;
    if (item.y > canvas.height) item.y = -50;
    if (item.x < -100) item.x = canvas.width;
    if (item.y < -50) item.y = canvas.height;
  });
  requestAnimationFrame(animate);
}

animate();

