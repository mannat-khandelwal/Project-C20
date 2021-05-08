var cat, catImg, cat2Img;
var garden, gardenImg;
var mouse, mouseImg, mouse2Img;
var mouse3Img, cat3Img;


function preload() {
    //load the images here
    catImg = loadImage("images/cat1.png");
    gardenImg = loadImage("images/garden.png");
    mouseImg = loadImage("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png", "images/mouse3.png")
    cat2Img = loadAnimation("images/cat2.png", "images/cat3.png")
    mouse3Img = loadAnimation("images/mouse4.png");
    cat3Img = loadAnimation("images/cat4.png");

}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);
    garden.scale=1.1;
 
    cat = createSprite(800,650,10,10);
    cat.addImage(catImg);
    cat.addAnimation("walking", cat2Img);
    cat.addAnimation("walk", cat3Img);
    cat.scale=0.2;

    mouse = createSprite(100,650,10,10);
    mouse.addImage(mouseImg);
    mouse.addAnimation("running", mouse2Img);
    mouse.addAnimation("run", mouse3Img);
    mouse.scale=0.1 ;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

   if(cat.x-mouse.x < (cat.width - mouse.width)/2){
       cat.changeAnimation("walk",cat3Img);
       mouse.changeAnimation("run",mouse3Img);
       cat.velocityX=0;
   }else{
       mouse.addImage(mouseImg);
       cat.addImage(catImg)

   }    
    
    drawSprites();
}


function keyPressed(){


  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW) {
        mouse.changeAnimation ("running", mouse2Img);
        cat.changeAnimation("walking", cat2Img);
        cat.velocityX = -3;
        mouse.frameDelay = 8; 


    }

}
