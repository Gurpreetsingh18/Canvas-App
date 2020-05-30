var database;
var drawing = [];

function setup(){
    createCanvas(1000,500);
}

function draw(){
    background(0);
    stroke(3);
    strokeWeight(4);
    
 if(mouseIsPressed) {
     var point = {
        x:mouseX,
        y:mouseY
     }
     drawing.push(point);
    } 

    beginShape();
    for(var i = 0;i<drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y);
    }
    endShape();

  
}




