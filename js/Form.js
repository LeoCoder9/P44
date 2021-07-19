class Form {

    constructor() {
        this.singlePlrButtom = createButton("SinglePlayer");
        this.multiPlrButtom = createButton("MultiPlayer");

    }


    display() {
        var title = createElement('h1');
        title.html("REVENGE OF THE BLOCKS!");
        title.position(width / 2 + -220, 20);

        var play = createElement('h2');
        play.html("PLAY NOW:");
        play.position(width / 2 + -70, 160);


        this.singlePlrButtom.position(width / 2 + -150, 360);

        this.multiPlrButtom.position(width / 2 + 50, 360);



        this.singlePlrButtom.mousePressed(() => {
            play.hide();

            this.multiPlrButtom.hide();
            this.singlePlrButtom.hide();

            var singlePlrTitle = createElement('h2');
            singlePlrTitle.position(width / 2 + -70, 160);
            singlePlrTitle.html("Getting ready...");

            var singleName = createInput("Input Name");

            singleName.position(width / 2 + -70, 360);

            var singlePlayButton = createButton("PLAY");
            singlePlayButton.position(width / 2 | + 0, 425);

           

            singlePlayButton.mousePressed(() => {
                gameState = "PLAY";
                var name = singleName.value()
                singlePlayButton.hide();
                singleName.hide();
                singlePlrTitle.hide();

                var greetings = createElement('h2');
                greetings.html("Greetings, " + name);
                greetings.position(width / 2 + -110, 160);
            }

            )
        }

        )

    }


}

    //REVENGE OF THE BLOCKS                        Getting started!                     waiting for more player...

        //PLAY:                    ------->         input name(       )   if muti -->        welcome (chosen name)

//SINGLEPLAYER,  MULTIPLAYER                          play