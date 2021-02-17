var tom,jerry,tomimg1,jerryimg,tomimg2,tomimg3;
var garden,gardenimg;







function preload() {
    //load the images here
    gardenimg=loadImage("garden.png");
    tomimg1=loadAnimation("cat1.png");
    tomimg2=loadAnimation("cat2.png","cat3.png");
    tomimg3=loadAnimation("cat4.png");
    jerryimg1=loadAnimation("mouse2.png");
    jerryimg2=loadAnimation("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(400,400,50,50);
tom.addAnimation("tomresting",tomimg1);
jerry=createSprite(200,200,50,50)
jerry.addAnimation("jerryteasing",jerryimg);
garden=createSprite(200,200,1000,800);
garden.addImage(gardenimg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x<(tom.width - jerry.width)/2){
        tom.addAnimation("catlastimg",tomimg3);
        tom.changeAnimation("catlastimg");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("tomrunning",tomimg2);
      tom.changeAnimation("tomrunning");
  }

}
