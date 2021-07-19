var form, game, player;

var gameState = "START"

var block

var bg1

var floor

function preload() {
 
  bg1 = loadImage("images/bg10.png");
 
  
}

function setup() {
  createCanvas(windowWidth , windowHeight );

  
  
  game = new Game();
  game.start();
  
}

function draw() {
  




if(gameState === "PLAY"){
  game.play()
}


  
}




/* to do before monday: 

 find more background 
 find a witch animation
   code the block for singleplayer

   to do in monday:
     try and complete all single player things
     and finish multi - player button function
   */