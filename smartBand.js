status="";
img="";

function preload(){
    img=loadImage("mi.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modalLoaded);
}

function modalLoaded(){
    console.log("Modal Loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
}