console.log("Js called");
var w = 800;
var h = 1000;
xMid = w/2;
yMid = h/2;
// add you function to the array
var allFunctions = [drawDannebrog, nieldiv];

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
       ellipse(centerX,centerY,50,50)
       fill(255, 234, 0)
       //triangles right
       triangle(centerX,380,405,376,410,380)
       triangle(centerX,385,405,380,410,385)
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

function nieldiv(centerX, centerY){ 
    push()
        fill(252, 248, 5);
        rect(centerX - 11, centerY - 60, 20, 30);
        fill(247, 10, 26);
        ellipse(centerX, centerY, 75, 75);// julekugle 
        
        var x = 0;
        while (x < 10){
            fill(173, 166, 166);
            if (x < 4){
                ellipse(centerX - 20, centerY - 20, 10, 10);
                ellipse(centerX - 10, centerY - 20, 10, 10);
                ellipse(centerX - 30, centerY - 8, 10, 10);
                ellipse(centerX - 10, centerY - 13, 10, 10);
                ellipse(centerX - 30, centerY - 14, 10, 10);
                ellipse(centerX - 18, centerY - 2, 10, 10);
                ellipse(centerX - 15, centerY - 17, 10, 10);
                ellipse(centerX - 6, centerY - 10, 10, 10);
                ellipse(centerX + 10, centerY + 10, 10, 10);
                ellipse(centerX + 15, centerY + 14, 10, 10);
                ellipse(centerX + 20, centerY + 19, 10, 10);
                ellipse(centerX + 13, centerY + 14, 10, 10);
                ellipse(centerX + 16, centerY, 10, 10);
            }
            x=x+1;
        }
    }
}
 ab667b8c9885ed628f22a1ee11f52e7af99b46f1
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
}

ab667b8c9885ed628f22a1ee11f52e7af99b46f1
function carlfont(centerX, centerY){ 
    push();
}
function albeBody(centerX, centerY){ 
    push()
    fill(255,0,0);
    ellipse(350,400,80,80);
    
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
}


/**
 * Should draw a pretty but neutral background the tree
 */
function drawBackground(){
    background(200,200,200);

    for(var i = 0; i <1500; i++){

            //drawConfetti(5,5,400,400);
     }

}

function setup(){
    createCanvas(w,h);
    drawBackground();
    drawTree(xMid,yMid+50);
    drawGodJul(xMid, yMid+50);
    
    testSize();
    //call you method here below
    
    //testLocator();
    //testSize();
    // call you method here below

    kirsHead(400,400);

    BaMedKag(400,400);

    testLocator();
    testSize();
    albeBody();

    drawDannebrog(xMid+100, yMid-100);


 ab667b8c9885ed628f22a1ee11f52e7af99b46f1

}

/**
 * Replace dannebrog with you function to test location
 */






function testLocator(){

    kirsHead(400, 500) // should a Dannebrog in the middle
    kirsHead(50,50) // should draw Dannebrog in top left corner
    kirsHead(750, 50) //should draw Dannebrog in top right corner

    jensFont(400, 500) // should a Dannebrog in the middle
    jensFont(50,50) // should draw Dannebrog in top left corner
    jensFont(750, 50) //should draw Dannebrog in top right corner
    Sophabbr(400, 500) // should a Dannebrog in the middle
    Sophabbr(50,50) // should draw Dannebrog in top left corner
    Sophabbr(750, 50) //should draw Dannebrog in top right corner
    fredOpen(400, 500) // should a Dannebrog in the middle
    fredOpen(50,50) // should draw Dannebrog in top left corner
    fredOpen(750, 50) //should draw Dannebrog in top right corner


    carlfont(400, 500) // should a Dannebrog in the middle
    carlfont(50,50) // should draw Dannebrog in top left corner
    carlfont(750, 50) //should draw Dannebrog in top right corner



    albeBody(400, 500) // should a Dannebrog in the middle
    albeBody(50,50) // should draw Dannebrog in top left corner
    albeBody(750, 50) //should draw Dannebrog in top right corner

    nieldiv(400, 500) // should a Dannebrog in the middle
    nieldiv(50,50) // should draw Dannebrog in top left corner
    nieldiv(750, 50) //should draw Dannebrog in top right corner
}

/**
 * The item should be in the middle of square, and nothing should point out.
 */
function testSize(){
    rect(100, 300, 100, 100);
    kirsHead(150, 350); //replace with you function
    BaMedKag(150, 350); //replace with you function
    albeBody(150, 350); //replace with you function
}

