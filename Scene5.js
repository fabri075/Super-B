class Scene5 extends Phaser.Scene {
    constructor() {
      super('pausa');
    }

create() {
  var Transparencia = this.add.image(400, 300, "transparencia");

   var menuPausa = this.add.image(640, 470, 'fondoPausa').setScale(.65).setInteractive({cursor: 'context-menu'})
    
   var reanudarPausa = this.add.image(645, 400, 'botonReiniciar1').setScale(.6)
   var reanudarPausa2 =  this.add.image(645, 400, 'botonReiniciar2').setScale(.6)
   var menuPrincipal =  this.add.image(645, 480, 'botonReiniciar1').setScale(.6)
   var menuPrincipal2 =   this.add.image(645, 480, 'botonReiniciar2').setScale(.6)
  

   var text;
        if (idioma === 1)
        {
            this.add.image(640, 200, 'tituloPausa').setScale(0.7)
            text = this.add.text(600, 390, "REANUDAR", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
            text = this.add.text(575, 470, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        };
        if (idioma === 2)
        {
            this.add.image(640, 200, 'tituloPausaEN').setScale(0.7)
            text = this.add.text(600, 390, "  RESUME", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
            text = this.add.text(575, 470, "     MAIN MENU", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        }
        if (idioma === 3)
        {
            this.add.image(640, 200, 'tituloPausa').setScale(0.7)
            text = this.add.text(600, 390, " RETOMAR", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
            text = this.add.text(575, 470, " MENU PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        }
  
    reanudarPausa2.setVisible(false)
            reanudarPausa.setInteractive()
            reanudarPausa.on('pointerdown', () => {
                BotonSonido = this.sound.add("botonsonido" , {loop: false});
                if(efsonido === true){
                BotonSonido.play();
                }
                this.scene.resume('nivel1');
                target.x = jugador.x;
                target.y = jugador.y;
                reanudarPausa.destroy ();
                //tituloPausa.destroy();
                menuPausa.destroy ();
                menuPrincipal.destroy ();
                this.scene.stop();
                
            } );

           //On y Off muscia
      var MusicaNO = this.add.image(600, 555, "musicaNO").setScale(.6);
      var MusicaSI = this.add.image(600, 555, "musicaSI").setScale(.6);
       if( MusicNivel === true){

      MusicaSI.setVisible(true);
      MusicaSI.setInteractive();
      MusicaNO.setInteractive();
      MusicaNO.setVisible(false);
      MusicaSI.on('pointerdown',()=>{
      MusicaSI.setVisible(false);
      MusicaNO.setVisible(true);
      Musicagame.stop();
      MusicNivel = false;
    });
      MusicaNO.on('pointerdown',()=>{
        MusicaNO.setVisible(false)
        MusicaSI.setVisible(true);
        Musicagame.play();
        MusicNivel = true;
    });}
    else
    {
      MusicaSI.setVisible(false);
      MusicaSI.setInteractive();
      MusicaNO.setInteractive();
      MusicaNO.setVisible(true);
      MusicaSI.on('pointerdown',()=>{
      MusicaSI.setVisible(false);
      MusicaNO.setVisible(true);
      Musicagame.stop();
      MusicNivel = false;
    });
      MusicaNO.on('pointerdown',()=>{
        MusicaNO.setVisible(false)
        MusicaSI.setVisible(true);
        Musicagame.play();
        MusicNivel = true;
    });
    }

    
        //On y Off sonidos

        var SonidoSI = this.add.image(690, 555, "sonidoSI").setScale(.6);
        var SondioNO = this.add.image(690, 555, "sonidoNO").setScale(.6);
        if (efsonido === true){
        SonidoSI.setVisible(true);
        SonidoSI.setInteractive();
        SondioNO.setInteractive();
        SondioNO.setVisible(false);
        SonidoSI.on('pointerdown',()=>{
          SonidoSI.setVisible(false);
          SondioNO.setVisible(true);

          efsonido = false;

        });
        SondioNO.on('pointerdown',()=>{
          SondioNO.setVisible(false)
          SonidoSI.setVisible(true);
          efsonido = true;
          });
        }
        else 
        {
          SonidoSI.setVisible(false);
        SonidoSI.setInteractive();
        SondioNO.setInteractive();
        SondioNO.setVisible(true);
        SonidoSI.on('pointerdown',()=>{
          SonidoSI.setVisible(false);
          SondioNO.setVisible(true);

          efsonido = false;

        });
        SondioNO.on('pointerdown',()=>{
          SondioNO.setVisible(false)
          SonidoSI.setVisible(true);
          efsonido = true;
          });
        }



            


            menuPrincipal2.setVisible(false)
                menuPrincipal.setInteractive()
                menuPrincipal.on('pointerdown', () => {
                    BotonSonido = this.sound.add("botonsonido" , {loop: false});
                    if(efsonido === true){
            BotonSonido.play();
            }
            Musicagame.stop();
                    this.scene.stop('nivel1');
                    this.scene.start('menu');

        score = 0;
        nivel = 1;
        mochila = 0;
        contadorMalas = 0;
        contadorBuenas = 0;
        perder = 0;
        ganar = 0;
        totalBuenas = 0;

    
        
        

                    

        } );   
        reanudarPausa.on('pointerover', function (a) {
            reanudarPausa2.setVisible(true)
       });
       reanudarPausa.on('pointerout', function (a){
           reanudarPausa2.setVisible(false)
       });
        menuPrincipal.on('pointerover', function (b) {
            menuPrincipal2.setVisible(true)
       });
       menuPrincipal.on('pointerout', function (b){
           menuPrincipal2.setVisible(false)
       });
}





}