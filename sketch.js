var canvas;
var database;

function setup(){
    createCanvas(1000,500);
}

function draw(){
   database = firebase.database();
}

function mouseDragged(){
    if(mouseDragged){
        canvas = new Canvas(450,500,300,500);
        canvas.shapeColor = "black";
    }
}


