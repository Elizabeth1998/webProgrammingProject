
float bx;
float by;
int boxSize = 75;
boolean overBox = false;
boolean locked = false;
float xOffset = 0.0;
float yOffset = 0.0;

float circleXL, circleYL, circleXR, circleYR;
float rectXM, rectYM;
int rectSize = 200;
int mouth = 25;
float pupilXL,pupilYL, pupilXR, pupilYR;
int pupil = 25;
int circleSize = 50;
int rectX1, rectY1,rectX2, rectY2,rectX3, rectY3;
int colorSquare = 25;

boolean overBoxOne = false;
boolean overBoxTwo = false;
boolean overBoxThree = false;

color rectColor;
color circleColor;
color baseColor;
color mouthColor;
color pupilColor;
color firstColor;
color secondColor;
color thirdColor;

void setup() {
  size(640, 360);
  bx = width/2.0;
  by = height/2.0;
  rectMode(RADIUS);
  rectColor = color(#4031F2);
  pupilColor = color(0);
  mouthColor =color(100);
  circleColor = color(255);
  firstColor =color(#31F252);
  secondColor = color(#A731F2);
  thirdColor = color(#F29F31);

  circleXL = width/2/2+rectSize;
  circleYL = width/2/2+1;
  circleXR = width/2/2 + rectSize-80;
  circleYR = width/2/2+1;
  rectXM = width/2 ;
  rectYM = height/ 2 + 25;
  pupilXL = width/2/2+rectSize;
  pupilYL = width/2/2+1;
  pupilXR = width/2/2+rectSize - 80;
  pupilYR = width/2/2+1;

  rectX1 = width/2 - 250;
  rectY1 = height/2 - 100;
  rectX2 = width/2 - 250;
  rectY2 = height/2 - 30;
  rectX3 = width/2 - 250;
  rectY3 = height/2 + 40;
}

void draw() {
  background(0);

  // Test if the cursor is over the box
  if (mouseX > bx-boxSize && mouseX < bx+boxSize &&
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;
    if(!locked) {
      stroke(255);
      fill(153);
    }
  } else {
    stroke(153);
    fill(153);
    overBox = false;
  }


  // Draw the box
  fill(rectColor);
  rect(bx, by, boxSize, boxSize);

  fill(mouthColor);
  rect(rectXM, rectYM, mouth, 4);

  stroke(0);
  fill(circleColor);
  ellipse(circleXR, circleYR, circleSize, circleSize);
  ellipse(circleXL, circleYL, circleSize, circleSize);

  fill(pupilColor);
  ellipse(pupilXL, pupilYL, pupil, pupil);
  ellipse(pupilXR, pupilYR, pupil, pupil);


  fill(firstColor);
  rect(rectX1, rectY1, colorSquare, colorSquare);

  fill(secondColor);
  rect(rectX2, rectY2, colorSquare, colorSquare);

  fill(thirdColor);
  rect(rectX3, rectY3, colorSquare, colorSquare);
}


void mousePressed() {
  if(overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX-bx;
  yOffset = mouseY-by;

}

void mouseDragged() {
  if(locked) {
    bx = mouseX-xOffset;
    by = mouseY-yOffset;
    circleXL = mouseX - xOffset + 45;
    circleYL = mouseY- yOffset - 25;
    circleXR = mouseX- xOffset - 45;
    circleYR = mouseY- yOffset - 25;
    rectXM = mouseX- xOffset + 15;
    rectYM = mouseY- yOffset + 25;
    pupilXL = mouseX - xOffset - 45;
    pupilYL= mouseY- yOffset - 25;
    pupilXR= mouseX - xOffset + 45 ;
    pupilYR = mouseY- yOffset - 25;

  }
}

void mouseReleased() {
  locked = false;
}