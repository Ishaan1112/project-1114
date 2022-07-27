function preload() {
    img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vrFfV8C6Lp8BPhBfar4bAkDB1X7HJaqQIA&usqp=CAU=500');

}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(img, 115, 120 ,160 ,120);
  
  fill(225, 0, 25);
  stroke(225, 0, 0);
  circle(350, 50, 70);
  circle(40, 50, 70);
  circle(40, 350, 70);
  circle(350, 350, 70);;
  rect(30, 20, 300, 55);
  rect(30, 325, 300, 55)
  rect(16, 50, 55, 300)
  rect(325, 50, 55, 300)
  

}