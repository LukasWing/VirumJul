console.log("Js called");
var w = 800;
var h = 1000;
xMid = w/2;
yMid = h/2;
var drawTree = function(centerX, centerY){
    push();
    var baseW = 600;
    var baseH = 0.5*baseW;
    var spacing = 120;
    // stem
    fill(150,100,50);
    rect(centerX-25, centerY+275, 50, 75);

    // leaves
    var slim = 50;
    fill(0, 153, 0); 
    for(var i = 0; i < 4; i++){
        triangle(
            centerX-baseW/2+i*slim,
            centerY+280-i*spacing, 
            centerX, 
            centerY+300-baseH-i*spacing,
            centerX+baseW/2-i*slim,
            centerY+280-i*spacing
            )
    }
    pop();
 }
var drawGodJul = function(centerX, centerY){
    push();
    textSize(45);
    fill((Date.now()/5 % 255), 0, 0)
    text("God Jul VG",centerX-110, centerY);
    pop();
}
var drawDannebrog = function(centerX, centerY){
    push();
    var hei = 56*1;
    var wid = 75*1;
    fill(255,0,0);
    rect(centerX-wid/2,centerY-hei/2,wid,hei);
    noStroke();
    fill(255);
    rect(centerX-wid/2,centerY-1/14*hei,wid,hei/7);
    rect(centerX-wid/2+3*hei/7, centerY-hei/2,hei/7, hei);
    pop();
}

/**
 * Draw you function here: It should contain:
 * 3 colors, 3 different shapes, something personal
 * It should be centered accoding to the parameters
 * Should contain at least one loop and one if statement
 * It should be named according to your git name
 */
function kirsHead(centerX, centerY){ 
    push()
        stroke(255, 234, 0)
        fill(200,00,00)
       ellipse(400,400,50,50)
       fill(255, 234, 0)
       //triangles right
       triangle(400,380,405,376,410,380)
       triangle(400,385,405,380,410,385)
       triangle(400,390,405,385,410,390)
       triangle(400,395,405,390,410,395)
       triangle(400,400,405,395,410,400)
       triangle(400,405,405,400,410,405)
       triangle(400,410,405,405,410,410)
       triangle(400,415,405,410,410,415)
       triangle(400,420,405,415,410,420)
       triangle(400,424,405,420,410,422)

       //triangles left
       triangle(400,380,395,376,390,380)
       triangle(400,385,395,380,390,385)
       triangle(400,390,395,385,390,390)
       triangle(400,395,395,390,390,395)
       triangle(400,400,395,395,390,400)
       triangle(400,405,395,400,390,405)
       triangle(400,410,395,405,390,410)
       triangle(400,415,395,410,390,415)
       triangle(400,420,395,415,390,420)
       triangle(400,424,395,420,390,422)

        //circles right
        ellipse(420,390,5)
        ellipse(420,400,5)
        ellipse(420,410,5)

        //circles left
        ellipse(380,390,5)
        ellipse(380,400,5)
        ellipse(380,410,5)

        //top
        stroke(0,0,0)
        fill(181, 170, 43)
        rect(390,368,20,12)

    pop()
function carlfont(centerX, centerY){ 
    push();
    
fill((Date.now()/5 % 114), 15, 252);
rect(centerX+10,centerY,80,80);
pop();

push();
fill((Date.now()/5 % 255), 10, 10);

rect(centerX,centerY,100,10);



var x = 0;
while(x < 10){
 if (x<3){
 rect(centerX+45,centerY+10,10,70);
 }
 x=x+1;
}



    pop();
}


/**
 * Should draw a pretty but neutral background the tree
 */
function drawBackground(){
    background(200,200,200);

    for(var i = 0; i <1500; i++){

            drawConfetti(5,5,400,400);
     }

}

function setup(){
    createCanvas(w,h);
    drawBackground();
    drawTree(xMid,yMid+50);
    drawDannebrog(xMid+100, yMid-100);
    drawGodJul(xMid, yMid+50);
    
    testLocator();
    testSize();
    // call you method here below

    kirsHead();

    BaMedKag(400,400);
}

/**
 * Replace dannebrog with you function to test location
 */






function testLocator(){
    kirsHead(400, 500) // should a Dannebrog in the middle
    kirsHead(50,50) // should draw Dannebrog in top left corner
    kirsHead(750, 50) //should draw Dannebrog in top right corner
    carlfont(400, 500) // should a Dannebrog in the middle
    carlfont(50,50) // should draw Dannebrog in top left corner
    carlfont(750, 50) //should draw Dannebrog in top right corner
}

/**
 * The item should be in the middle of square, and nothing should point out.
 */
function testSize(){
    rect(100, 300, 100, 100);
    kirsHead(150, 350); //replace with you function
    BaMedKag(150, 350); //replace with you function
}



