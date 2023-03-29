var fruit = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 5, color: "green"},
    {name: "Blueberry", quantity: 5, color: "blue"},
    {name: "Grapes", quantity: 10, color: "purple"}
    ];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 6;
var y = 6;
var barHeight = 35;
var barMargin = 0;
for (var i = 0; i < fruit.length; i++) {
    ctx.fillStyle = fruit[i].color;
    var barWidth = fruit[i].quantity * 10;
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "black";
    ctx.fillText(" "+fruit[i].quantity+" " +fruit[i].name, x + barWidth -53, y + barHeight/2 + 5);
    y += barHeight + barMargin;
}