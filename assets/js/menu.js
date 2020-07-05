var music;
var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', './assets/images/menu.png');
        game.load.audio('boden', ['assets/audio/Classique.mp3']);
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'menu', this.startGame, this);
        music = game.sound.play('boden');
    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');
        music = game.sound.stopAll();

    }

};