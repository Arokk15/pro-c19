var jet,jetimg;

var en,enimg,engrup;
var inv1group

var obj,objimg,objgroup,objimg2;
var obj1,obj2,obj3;
var go,goimg;
var rs,rsimg;
var score=0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload(){
    jetimg=loadImage("1.png")
    objimg=loadImage("2.png")
    objimg2=loadImage("fighter.png")
    goimg=loadImage("go.png")
    rsimg=loadImage("rs.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    jet = createSprite(300, 300)
    jet.addImage(jetimg)
    jet.scale=0.18
    jet.setCollider('rectangle',0,-120,500,700)
    //jet.debug = true

   

    objgroup=new Group()
    inv1group=new Group()

    inv1=createSprite(windowWidth/2,windowHeight,windowWidth,5)
    inv2=createSprite(windowWidth % windowWidth,windowHeight/2,5,windowHeight)
    inv3=createSprite(windowWidth,windowHeight/2,5,windowHeight)
    inv4=createSprite(windowWidth/2,windowHeight%windowHeight,windowWidth,5)
    
    inv1.visible=false
    inv2.visible=false
    inv3.visible=false
    inv4.visible=false

    go=createSprite(windowWidth/2,windowHeight/3.5)
    go.addImage(goimg)
    go.scale=0.0800
    go.visible=false
    rs=createSprite(windowWidth/2,windowHeight/1.3)
    rs.addImage(rsimg)
    rs.scale=0.2
    rs.visible=false
}

function draw() {
    background(10);

    text("your score :"+score,windowWidth/20,30)
    if(gameState===PLAY){
        Obj()
        //lvel1()
        if(objgroup.isTouching(jet)){
            gameState=END  
        }
        if(frameCount%6==0){
            score=score+1
        }
    }
    else if(gameState===END){
        objgroup.setVelocityYEach(0)
        objgroup.setVisibleEach(false)
        jet.visible=false
        go.visible=true
        rs.visible=true
        if(keyDown("SPACE") || mousePressedOver(rs) ){
            gameState=PLAY
            go.visible=false
            rs.visible=false
            jet.visible=true
            objgroup.destroyEach()
            score=0
        }
     }
    
     

    if(keyDown("left")){
        jet.x=jet.x-10
    }
    if(keyDown("right")){
        jet.x=jet.x+10
    }
    if(keyDown("up")){
        jet.y=jet.y-10
    }
    if(keyDown("down")){
        jet.y=jet.y+10
    }

    jet.collide(inv1group)
    inv1group.add(inv1)
    inv1group.add(inv2)
    inv1group.add(inv3)
    inv1group.add(inv4)
    
    drawSprites();
 
}

//function lvel1(){
//    if(score==20){
//        obj1.addImage(obj2img)
//    }
//}

function Obj(){
    if(frameCount % 100 ==0){

        obj1=createSprite(Math.round(random(50,windowWidth)),-50,1,10);
        obj1.velocityY=random(1,4)
        obj1.velocityX=random(-2,5)
        obj1.addImage(objimg)
        obj1.scale=random(0.2,0.3)
        obj1.lifetime=windowHeight
        obj1.depth=jet.depth
        jet.depth=obj1.depth+1
        //obj1.debug=true
        obj1.setCollider('circle',0,0,)

        obj2=createSprite(Math.round(random(20,windowWidth)),-200,1,10);
        obj2.velocityY=random(1,4)
        obj1.velocityX=random(-2,5)
        obj2.addImage(objimg)
        obj2.scale=random(0.1,0.3)
        obj2.lifetime=windowHeight
        obj2.depth=jet.depth
        jet.depth=obj2.depth+1
        //obj2.debug=true
        obj2.setCollider('circle',0,0,)

        
        obj3=createSprite(Math.round(random(20,windowWidth)),-350,1,10);
        obj3.velocityY=random(1,4)
        obj1.velocityX=random(-2,5)
        obj3.addImage(objimg)
        obj3.scale=random(0.1,0.3)
        obj3.lifetime=windowHeight
        obj3.depth=jet.depth
        jet.depth=obj3.depth+1
        //obj3.debug=true
        obj3.setCollider('circle',0,0,)


        objgroup.add(obj1);
        objgroup.add(obj2);
        objgroup.add(obj3);

        
        
    }
    
}




   


