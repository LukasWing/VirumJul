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
function saracommit (centerX,centerY){

    push()

    stroke(242, 179, 8); // kugle 1 
    fill(176,17,17);
    ellipse(xMid-170,yMid+140 ,45,45);
    fill(255, 255, 255);
    ellipse(xMid-170,yMid+140,5,5);
    fill(0,0,0);
    text("s", xMid-170,yMid+140,);

    stroke(242, 179, 8); // kugle 2 
    fill(176,17,17);
    ellipse(xMid,yMid+150 ,45,45);
    fill(255, 255, 255);
    ellipse(xMid,yMid+150,5,5);
    fill(0,0,0);
    text("s", xMid,yMid+150,);

    stroke(242, 179, 8); // kugle 3 
    fill(176,17,17);
    ellipse(xMid+45,yMid+150,45,45);
    fill(255, 255, 255);
    ellipse(xMid+45,yMid+150,5,5);
    fill(0,0,0);
    text("s", xMid+45,yMid+150,);

    stroke(242, 179, 8); // kugle 4 
    fill(176,17,17);
    ellipse(xMid-45, yMid+150,45,45);
    fill(255, 255, 255);
    ellipse(xMid-45,yMid+150,5,5);
    fill(0,0,0);
    text("s", xMid-45,yMid+150,);

    stroke(242, 179, 8); //kugle 5
    fill(176,17,17);
    ellipse(xMid+90,yMid+150,45,45);
    fill(255, 255, 255);
    ellipse(xMid+90,yMid+150,5,5);
    fill(0,0,0);
    text("s", xMid+90,yMid+150,);

    stroke(242, 179, 8); //kugle 6
    fill(176,17,17);
    ellipse(xMid+135,yMid+150,45,45);
    fill(255, 255, 255);
    ellipse(xMid+135,yMid+150,5,5);
    fill(0,0,0);
    text("s", xMid+135,yMid+150,);

    stroke(242, 179, 8); //kugle 7
    fill(176,17,17);
    ellipse(xMid-90,yMid+150,45,45);
    fill(255, 255, 255);
    ellipse(xMid-90,yMid+150,5,5);
    fill(0,0,0);
    text("s", xMid-90,yMid+150,);

    stroke(242, 179, 8); //kugle 8
    fill(176,17,17);
    ellipse(xMid-135,yMid+150,45,45);
    fill(255, 255, 255);
    ellipse(xMid-135,yMid+150,5,5);
    fill(0,0,0);
    text("s", xMid-135,yMid+150,);

    stroke(242, 179, 8); //kugle 9 
    fill(176,17,17);
    ellipse(xMid+170,yMid+140 ,45,45);
    fill(255, 255, 255);
    ellipse(xMid+170,yMid+140,5,5);
    fill(0,0,0);
    text("s", xMid+170,yMid+140,);

    pop()
}
/**
 * Should draw a pretty but neutral background the tree
 */
function drawBackground(){
    background(200,200,200);
}

function setup(){
    createCanvas(w,h);
    drawBackground();
    drawTree(xMid,yMid+50);
    //drawDannebrog(xMid+100, yMid-100);
    drawGodJul(xMid, yMid+50);
    
    //testLocator();
    //testSize();
    // call you method here below

    saracommit();
}

/**
 * Replace dannebrog with you function to test location
 */
function testLocator(){
    drawDannebrog(400, 500) // should a Dannebrog in the middle
    drawDannebrog(50,50) // should draw Dannebrog in top left corner
    drawDannebrog(750, 50) //should draw Dannebrog in top right corner
}

/**
 * The item should be in the middle of square, and nothing should point out.
 */
function testSize(){
    rect(100, 300, 100, 100);
    drawDannebrog(150, 350); //replace with you function
}

    
console.log("JS finished.")