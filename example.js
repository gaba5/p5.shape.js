
function setup() {
  createCanvas(650, 600);
}

function draw() {
  textSize(15)
  background(245);
  fill(55,150,250)
  center(5)
  text('center(size)',width/2-20,height/2+15)
  pent(250,220,65,1)
  text('pent(x,y,size,lineT)',200,270)
  hexagon(100,200,50,1)
  text('hexagon(x,y,size,lineT)',35,275)
  tri(100,60,50,1)
  text('tri(x,y,size,lineT)',50,125)
  hept(100,400,50,1)
  text('hept(x,y,size,lineT)',50,450)
  octo(270,430,60,1)
  text('octo(x,y,size.lineT)',200,480)
  nona(450,450,50,1)
  text('nona(x,y,size,lineT)',400,500)
  fill(255,10,200)
  heart(550,95,50,1)
  text('heart(x,y,size,lineT)',500,170)
  fill(55,150,250)
  deca(550,300,55,1)
  text("deca(x,y,size,lineT)",490,350)
  trap(400,150,100,1)
  text("trap(x,y,size,lineT)",340,220)
  rightTri(270,70,60,1)
    text("rightTri(x,y,size,lineT)",210,120)
}
