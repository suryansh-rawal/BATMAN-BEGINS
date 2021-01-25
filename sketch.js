// Add matter.js first
// give the physics engines
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
// create the array of ranindrops
var raindrops = [];
// make  a new umbrella 
var img;
// give image to the background
var backgroundImg;
// give image to thunder
var thunder1,thunder2 ,thunderImg1 , thunderImg2 , thunderImg3;

var drops=[];
var r;

var back1;
var back2;
var backImg;
function preload(){
  // load bg image
  backgroundImg = loadImage("Image/bg.jpg");
  // load both thunder images
    thunder1 = loadImage("Image/1.png");
    thunder2 = loadImage("Image/4.png");
    backImg=loadImage("Image/back.jpg")
}

function setup(){
  // create canvas
var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  // crate engine + world
    engine = Engine.create();
    world = engine.world;
  // make sprites of thunderImages 1 , 2 , 3 
  //  give positions to the sprites
thunderImg1 = createSprite(displayWidth/2,5,10,40);
thunderImg2 = createSprite(200,5,10,40);
thunderImg3 = createSprite(1100,5,10,40);


// give the positions to img of umbrella
    img = new Umbrella(400,490);
}

function draw(){
  // add image to the background
    background(backImg);
  // update Engine
    Engine.update(engine);
   // create raindrops by frame count
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }

   
// display umbrella img
    img.display();
// display raindrops
    for(var i = 0; i < raindrops.length; i++){
     
      raindrops[i].display();
    } 

    if(frameCount%1===0){
      r=new falldrop(random(0,displayWidth - 20),1);
      drops.push(r);
      }


      for(var i =0 ; i<drops.length;i++){
        drops[i].display();
          }
// add random img to the thunder images 1
  // By Using Switch case method
    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        default: break;
      }
    }   
  // add random img to the thunder images 2
  // By Using Switch case method
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          default: break;
        }
      }   
  // add random img to the thunder images 3
  // By Using Switch case method
      if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunderImg3.addImage(thunder1);
                    break;
            case 2: thunderImg3.addImage(thunder2);
                    break;
            default: break;
          }
        } 
  // for drawing the sprites write drawSprites at the end 
    drawSprites();
}   

