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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
function jensFont(centerX, centerY){ 
    push()
        var scale = 1;
        fill(0, 255, 4);
        var x = centerX;
        var y = centerY;
        ellipse(x,y,60*scale,50*scale);
        fill(255, 200, 0);
        triangle(x-22,y+7,x-22,y-7,x-55,y);
        line(x-22,y,x-55,y);
        fill(0, 242, 255);
        ellipse(x-10,y-10,10*scale,10*scale);
        fill(0, 0, 0);
        ellipse(x-10,y-10,4*scale,2*scale);
        fill(138, 138, 138);
        noStroke();
        ellipse(x+30,y+55,100*scale,70*scale);
        fill(255, 179, 0);
        stroke(0, 0, 0);
        strokeWeight(0.1);
        rect(x+20,y+89,3*scale,40*scale);
        rect(x+40,y+89,3*scale,40*scale);
        noStroke();
        triangle(x-10,y+140,x+10,y+127,x+30,y+127);
        triangle(x+10,y+140,x+30,y+127,x+50,y+127);
        stroke(0, 0, 0);
        strokeWeight(0.1);
        fill(255, 255, 255);
        rect(x-30,y-26,60*scale,6*scale);
        fill(255, 0, 0);
        triangle(x-30,y-26,x+30,y-26,x+26,y-90);
        fill(255, 255, 255);
        ellipse(x+26,y-90,25*scale,25*scale);
}


function Sophabbr(centerX, centerY){ 
}
function fredOpen(centerX, centerY){ 
    push()
        var r=random(0, 255);
        var g=random(0, 255);
        var b=random(0, 255);
        fill(0, 255, 0);
        ellipse(centerX+25, centerY-10, 30, 25);
        ellipse(centerX+45, centerY-10, 30, 25);
        fill(r, b, g);
        rect(centerX, centerY, 70, 60);
        rect(centerX-5, centerY, 80, 20);
        fill(0, 255, 0);
        rect(centerX+25, centerY, 20, 60);
        

    pop()
=======
>>>>>>> 2f576d4cbbb067f8dd5ed2334ffb7721103f115f
function carlfont(centerX, centerY){ 
    push();
=======
function albeBody(centerX, centerY){ 
    push()
    fill(255,0,0);
    ellipse(350,400,80,80);
>>>>>>> 12d1c764939ffbebefcfc2e1e78d5c6be5a4961c
    
    fill(246,225,10);
    ellipse(330,390,30,30);
    ellipse(350,400,20,20);

    fill(1,86,225);
    ellipse(450,600,80,80);

    fill(246,225,10);
    ellipse(430,590,30,30);
    ellipse(450,600,20,20);

    fill(225, 1,205);
    ellipse(350,750,80,80);

    fill(246,225,10);
    ellipse(330,740,30,30);
    ellipse(350,750,20,20);   

    pop()

    pop();
>>>>>>> 10214d34948d6b02be4701d8c14b43a0616975ea
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
    
<<<<<<< HEAD
<<<<<<< HEAD
    testSize();
    //drawDannebrog(xMid+100, yMid-100);
    drawGodJul(xMid, yMid+50);    
    //testLocator();
    //fredOpen(300, 700);
=======
>>>>>>> 10214d34948d6b02be4701d8c14b43a0616975ea
=======
    
    //testLocator();
    //testSize();
    // call you method here below
<<<<<<< HEAD

    kirsHead();

    BaMedKag(400,400);
=======
>>>>>>> 12d1c764939ffbebefcfc2e1e78d5c6be5a4961c
    testLocator();
    testSize();
    albeBody();
    
>>>>>>> 2f576d4cbbb067f8dd5ed2334ffb7721103f115f
}

/**
 * Replace dannebrog with you function to test location
 */






function testLocator(){
<<<<<<< HEAD
    kirsHead(400, 500) // should a Dannebrog in the middle
    kirsHead(50,50) // should draw Dannebrog in top left corner
    kirsHead(750, 50) //should draw Dannebrog in top right corner
=======
<<<<<<< HEAD
<<<<<<< HEAD
    jensFont(400, 500) // should a Dannebrog in the middle
    jensFont(50,50) // should draw Dannebrog in top left corner
    jensFont(750, 50) //should draw Dannebrog in top right corner
    Sophabbr(400, 500) // should a Dannebrog in the middle
    Sophabbr(50,50) // should draw Dannebrog in top left corner
    Sophabbr(750, 50) //should draw Dannebrog in top right corner
    fredOpen(400, 500) // should a Dannebrog in the middle
    fredOpen(50,50) // should draw Dannebrog in top left corner
    fredOpen(750, 50) //should draw Dannebrog in top right corner
=======
>>>>>>> 2f576d4cbbb067f8dd5ed2334ffb7721103f115f
    carlfont(400, 500) // should a Dannebrog in the middle
    carlfont(50,50) // should draw Dannebrog in top left corner
    carlfont(750, 50) //should draw Dannebrog in top right corner
>>>>>>> 10214d34948d6b02be4701d8c14b43a0616975ea
=======
    albeBody(400, 500) // should a Dannebrog in the middle
    albeBody(50,50) // should draw Dannebrog in top left corner
    albeBody(750, 50) //should draw Dannebrog in top right corner
>>>>>>> 12d1c764939ffbebefcfc2e1e78d5c6be5a4961c
}

/**
 * The item should be in the middle of square, and nothing should point out.
 */
function testSize(){
    rect(100, 300, 100, 100);
<<<<<<< HEAD
    kirsHead(150, 350); //replace with you function
    BaMedKag(150, 350); //replace with you function
=======
    albeBody(150, 350); //replace with you function
>>>>>>> 2f576d4cbbb067f8dd5ed2334ffb7721103f115f
}



