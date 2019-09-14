/*
P5shape.js V1
DEVELOPED BY SEBASTIEN LORENTZ
REFRENCE IN DOWNLOADED FOLDER
CONTACT SEBASTIEN8LORENTZ@GMAIL.COM
*/

console.log('p5.shape.js is ready')
//a simpe equalateral triangle, takes four parameters, x,y,lenght of sides and strokeWeight
function tri(x,y,len,lineT){
triV1x=x-len+len
triV1y=y-len
triV2x=x+len
triV2y=y+len
triV3x=x-len
triV3y=y+len
stroke(0)
strokeWeight(lineT)
  beginShape(TRIANGLES)
vertex(triV1x,triV1y)
vertex(triV2x,triV2y)
vertex(triV3x,triV3y)
  endShape()
}//draws a pentagon
function pent(x,y,size,lineT){
pentX=x
pentY=y
len=size
penV1x=x-len/2
penV1y=y+len/2
penV2x=x+len/2
penV2y=y+len/2
penV3x=x+len/2
penV3y=penV2y-len
penV4x= penV3x-len/2
penV4y= penV3y-len/2
penV5x=x-len/2
penV5y=y-len/2
beginShape()
strokeWeight(lineT)
stroke(0)
vertex(penV1x,penV1y)
vertex(penV2x,penV2y)
vertex(penV3x,penV3y)
vertex(penV4x,penV4y)
vertex(penV5x, penV5y)
vertex(penV1x,penV1y)
endShape()
}//draws a hexagon, takes 4 parameters
function hexagon(x,y,len,lineT){
hexV1x=x-len
 hexV1y=y+len/2
hexV2x=x
hexV2y=y+len
 hexV3x=x+len
 hexV3y=y+len/2
 hexV4x=x+len
 hexV4y=y-len/2
  hexV5x=x
  hexV5y=y-len
  hexV6x=x-len
  hexV6y=y-len/2
 stroke(0)
 strokeWeight(lineT)
beginShape()
vertex(hexV1x,hexV1y)
vertex(hexV2x,hexV2y)
  vertex(hexV3x,hexV3y)
  vertex(hexV4x,hexV4y)
  vertex(hexV5x,hexV5y)
  vertex(hexV6x,hexV6y)
  vertex(hexV1x,hexV1y)
endShape()
}//draws a seven sided septa/heptagon, takes four parameter
function hept(x,y,len,lineT){
  heptV1x=x-len/2
  heptV1y=y+len/2
  heptV2x=x+len/2
  heptV2y=y+len/2
  heptV3x=x+len
  heptV3y=y
  heptV4x=x+len
  heptV4y=y-len
  heptV5x=x
  heptV5y=y-len-len/2
  heptV6x=x-len
  heptV6y=y-len
  heptV7x=x-len
  heptV7y=y
  heptV8x=x-len/2
  heptV8y=y+len/2
  stroke(0)
  strokeWeight(lineT)
beginShape()
vertex(heptV1x,heptV1y)
vertex(heptV2x,heptV2y)
vertex(heptV3x,heptV3y)
vertex(heptV4x,heptV4y)
vertex(heptV5x,heptV5y)
vertex(heptV6x,heptV6y)
vertex(heptV7x,heptV7y)
vertex(heptV8x,heptV8y)
endShape()
}//draws a eight sided octogon, takes for parameter
function octo(x,y,len,lineT){
  octoV1x=x-len/2
  octoV1y=y+len/2
  octoV2x=x+len/2
  octoV2y=y+len/2
  octoV3x=x+len
  octoV3y=y
  octoV4x=x+len
  octoV4y=y-len
  octoV5x=x+len/2
  octoV5y=y-len-len/2
  octoV6x=x-len/2
  octoV6y=y-len-len/2
  octoV7x=x-len
  octoV7y=y-len
  octoV8x=x-len
  octoV8y=y
  octoV9x=x-len/2
  octoV9y=y+len/2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(octoV1x,octoV1y)
  vertex(octoV2x,octoV2y)
  vertex(octoV3x,octoV3y)
  vertex(octoV4x,octoV4y)
  vertex(octoV5x,octoV5y)
  vertex(octoV6x,octoV6y)
  vertex(octoV7x,octoV7y)
  vertex(octoV8x,octoV8y)
  vertex(octoV9x,octoV9y)
  vertex(octoV1x,octoV1y)
  endShape()
}//draws a nine sided nonagon, takes four parameters
function nona(x,y,len,lineT){
  nonaV1x=x-len/2
  nonaV1y=y+len/2
  nonaV2x=x+len/2
  nonaV2y=y+len/2
  nonaV3x=x+len
  nonaV3y=y
  nonaV4x=x+len+(len/8)
  nonaV4y=y-len/1.25
  nonaV5x=x+len/1.5
  nonaV5y=y-len-len/2
  nonaV6x=x
  nonaV6y=nonaV5y-len/3.5
  nonaV7x=x-len/1.5
  nonaV7y=y-len-len/2
  nonaV8x=x-len-(len/8)
  nonaV8y=y-len/1.25
  nonaV9x=x-len
  nonaV9y=y
  nonaV10x=x-len/2
  nonaV10y=y+len/2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(nonaV1x,nonaV1y)
  vertex(nonaV2x,nonaV2y)
  vertex(nonaV3x,nonaV3y)
  vertex(nonaV4x,nonaV4y)
  vertex(nonaV5x,nonaV5y)
  vertex(nonaV6x,nonaV6y)
  vertex(nonaV7x,nonaV7y)
  vertex(nonaV8x,nonaV8y)
  vertex(nonaV9x,nonaV9y)
  vertex(nonaV10x,nonaV10y)
  endShape()
}//draws a 'cubic' heart , takes four parameters, x,y,size,lineT
function heart(x,y,len,lineT){
  heartV1x=x-len/2
  heartV1y=y+len/2
  heartV2x=x
  heartV2y=y+len
  heartV3x=x+len/2
  heartV3y=y+len/2
  heartV4x=x+len
  heartV4y=y
  heartV5x=x+len+(len/8)
  heartV5y=y-len/1.25
  heartV6x=x+len/1.5
  heartV6y=y-len-len/2
  heartV7x=x
  heartV7y=heartV5y-len/3.5
  heartV8x=x-len/1.5
  heartV8y=y-len-len/2
  heartV9x=x-len-(len/8)
  heartV9y=y-len/1.25
  heartV10x=x-len
  heartV10y=y
  heartV11x=x-len/2
  heartV11y=y+len/2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(heartV1x,heartV1y)
  vertex(heartV2x,heartV2y)
  vertex(heartV3x,heartV3y)
  vertex(heartV4x,heartV4y)
  vertex(heartV5x,heartV5y)
  vertex(heartV6x,heartV6y)
  vertex(heartV7x,heartV7y)
  vertex(heartV8x,heartV8y)
  vertex(heartV9x,heartV9y)
  vertex(heartV10x,heartV10y)
  vertex(heartV11x,heartV11y)
  endShape()
}//draws a re-sizable circle at center of screen, Good for frame of reference
function center(size){
  circle(width/2,height/2,size)
}//draws a 10 sided decagon, takes four parameters, x,y,size,lineT
function deca(x,y,len,lineT){
  decaV1x=x-len/1.5
  decaV1y=y+len/2
  decaV1_5x=x
  decaV1_5y=y+len/1.5
  decaV2x=x+len/1.5
  decaV2y=y+len/2
  decaV3x=x+len
  decaV3y=y
  decaV4x=x+len+(len/8)
  decaV4y=y-len/1.25
  decaV5x=x+len/1.5
  decaV5y=y-len-len/2
  decaV6x=x
  decaV6y=decaV5y-len/3.5
  decaV7x=x-len/1.5
  decaV7y=y-len-len/2
  decaV8x=x-len-(len/8)
  decaV8y=y-len/1.25
  decaV9x=x-len
  decaV9y=y
  decaV10x=x-len/1.5
  decaV10y=y+len/2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(decaV1x,decaV1y)
  vertex(decaV1_5x,decaV1_5y)
  vertex(decaV2x,decaV2y)
  vertex(decaV3x,decaV3y)
  vertex(decaV4x,decaV4y)
  vertex(decaV5x,decaV5y)
  vertex(decaV6x,decaV6y)
  vertex(decaV7x,decaV7y)
  vertex(decaV8x,decaV8y)
  vertex(decaV9x,decaV9y)
  vertex(decaV10x,decaV10y)
  endShape()
}//draws a four sided trapezium, takes four parameters, x,y,size,lineT
function trap(x,y,len,lineT){
trapV1x=x-len/1.5
trapV1y=y+len/2
trapV2x=x+len/1.5
trapV2y=y+len/2
trapV3x=x+len/2
trapV3y=y-len/4
trapV4x=x-len/2
trapV4y=y-len/4
stroke(0)
strokeWeight(lineT)
beginShape()
vertex(trapV1x,trapV1y)
vertex(trapV2x,trapV2y)
vertex(trapV3x,trapV3y)
vertex(trapV4x,trapV4y)
vertex(trapV1x,trapV1y)
endShape()
}//draws a right-angled triangle,takes four parameters, x,y,size,lineT
function rightTri(x,y,len,lineT) {
rTriV1x=x-len/1.5
rTriV1y=y+len/2
rTriV2x=x+len/2
rTriV2y=y+len/2
rTriV3x=x+len/2
rTriV3y=rTriV2y-len*1.5
stroke(0)
strokeWeight(lineT)
beginShape(TRIANGLES)
vertex(rTriV1x,rTriV1y)
vertex(rTriV2x,rTriV2y)
vertex(rTriV3x,rTriV3y)
vertex(rTriV1x,rTriV1y)
endShape()
}
