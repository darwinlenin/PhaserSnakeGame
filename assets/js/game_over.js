var Game_Over = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', './assets/images/gameover.png');
        game.load.audio('boden', ['assets/audio/Echoes.mp3']);
    },

    create : function() {

        // Create button to start game similar to the main menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);
        music = game.sound.play('boden');

        // Last Score Info.
        game.add.text(300, 250, "LAST SCORE", { font: "bolder 24px sans-serif", fill: "#FFFB00", align: "center"});
        game.add.text(500, 250, score.toString(), { font: "bolder 26px sans-serif", fill: "#fff", align: "center" });
        

    },

    startGame: function () {

        // Change the state to the actual game.
        music = game.sound.stopAll();
        this.state.start('Game');

    }

};