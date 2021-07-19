class Game {
    constructor() {

    }



    start() {
        form = new Form();
        form.display();


        block = createSprite(200,  height-70)

        block.shapeColor = "red"
        floor = createSprite(750, 750, width,50)
        
        block.velocityY = block.velocityY + 4
        block.collide(floor)
    }

    play() {
         background(bg1)

       
         block.velocityY = block.velocityY + 4
         block.collide(floor)

        if(keyDown("space")){
            block.velocityY = -15
        }

        drawSprites();
    }
}