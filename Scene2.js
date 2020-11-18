class Scene2 extends Phaser.Scene {
    constructor() {
      super('menu');
    }

    create() {

      this.add.image(650, 350, 'menu').setScale(0.7)

      var Español1 = this.add.image(90, 670, "españolno").setScale(.5);   
Español1.setVisible(false);
   var Español = this.add.image(90, 670, "españolsi" ).setScale(.5);
   Español.setVisible(true);
   Español.setInteractive()
   Español.on('pointerdown',()=>{});

    Español1.setInteractive()
    Español1.on('pointerdown',  () => { 
      if(Español.setVisible(false) && Portugues.setVisible(true) || Ingles.setVisible(true)){
        Ingles.setVisible(false);
        Ingles1.setVisible(true);
        Español.setVisible(true);
        Español1.setVisible(false);
        Portugues.setVisible(false);
        Portugues1.setVisible(true);
      }
   });
   
   //Ingles
   var Ingles1 = this.add.image(150, 670, "inglesno").setScale(.5);
   var Ingles = this.add.image(150, 670, "inglessi" ).setScale(.5);
   Ingles.setVisible(false);   
  Ingles.setInteractive()
   Ingles.on('pointerdown',  () => { 
    ;
   
    });

    Ingles1.setInteractive()
    Ingles1.on('pointerdown',  () => { 
      if(Ingles.setVisible(false) && Español.setVisible(true) || Portugues.setVisible(true)){
        Ingles.setVisible(true);
        Ingles1.setVisible(false);
        Español.setVisible(false);
        Español1.setVisible(true);
        Portugues.setVisible(false);
        Portugues1.setVisible(true);
        }
     });


 //Portugues
   var Portugues1 = this.add.image(210, 670, "portuguesno").setScale(.5);
   var Portugues = this.add.image(210, 670, "portuguessi" ).setScale(.5);
   Portugues.setVisible(false);
   Portugues.setInteractive()
   Portugues.on('pointerdown',  () => { 
    });

    Portugues1.setInteractive()
    Portugues1.on('pointerdown',  () => { 
      
        if(Portugues.setVisible(false) && Español.setVisible(true) || Ingles.setVisible(true)){
          Ingles.setVisible(false);
          Ingles1.setVisible(true);
          Español.setVisible(false);
          Español1.setVisible(true);
          Portugues.setVisible(true);
          Portugues1.setVisible(false);} });




      Musicamenu= this.sound.add("musicamenu", {loop: true});
      Musicamenu.play();
      //On y Off muscia
      var MusicaNO = this.add.image(50, 120, "musicaNO").setScale(.5).setInteractive();
      var MusicaSI = this.add.image(50, 120, "musicaSI").setScale(.5).setInteractive();
      if( MusicNivel === true){
        Musicamenu.play();
        MusicaSI.setVisible(true);
        MusicaNO.setVisible(false);
        MusicaSI.on('pointerdown',()=>{
          MusicaSI.setVisible(false);
          MusicaNO.setVisible(true);
          Musicamenu.stop()
          MusicNivel = false;
        });
        MusicaNO.on('pointerdown',()=>{
          MusicaNO.setVisible(false)
          MusicaSI.setVisible(true);
          Musicamenu.play();
          MusicNivel = true;
      });
      }
      else{
        Musicamenu.stop();
        MusicaSI.setVisible(false);
        MusicaNO.setVisible(true);
        MusicaNO.on('pointerdown',()=>{
          MusicaNO.setVisible(false);
          MusicaSI.setVisible(true);
          Musicamenu.play();
          MusicNivel = true
        });
        MusicaSI.on('pointerdown',()=>{
          MusicaSI.setVisible(false);
          MusicaNO.setVisible(true);
          Musicamenu.stop()
          MusicNivel = false;
        });
      }
      
      
      

      
        //On y Off sonidos

        var SonidoSI = this.add.image(50, 180, "sonidoSI").setScale(.5);
        var SonidoNO = this.add.image(50, 180, "sonidoNO").setScale(.5);
        if (efsonido === true)
        {
        SonidoSI.setVisible(true);
        SonidoSI.setInteractive();
        SonidoNO.setInteractive();
        SonidoNO.setVisible(false);
        SonidoSI.on('pointerdown',()=>{
          SonidoSI.setVisible(false);
          SonidoNO.setVisible(true);
          efsonido = false;
        });
        SonidoNO.on('pointerdown',()=>{
          SonidoNO.setVisible(false)
          SonidoSI.setVisible(true);
          efsonido = true;
          });
        }
        else 
        {
          SonidoSI.setVisible(false);
        SonidoSI.setInteractive();
        SonidoNO.setInteractive();
        SonidoNO.setVisible(true);
        SonidoSI.on('pointerdown',()=>{
          SonidoSI.setVisible(false);
          SonidoNO.setVisible(true);
          efsonido = false;
        });
        SonidoNO.on('pointerdown',()=>{
          SonidoNO.setVisible(false)
          SonidoSI.setVisible(true);
          efsonido = true;
          });
        }
      var botonNuevoJuego = this.add.image(670, 690, 'botonNuevoJuego').setScale(0.65)
      var botonNuevoJuego2 = this.add.image(670, 690, 'botonNuevoJuego2').setScale(0.65) 
      botonNuevoJuego2.setVisible(false);
        botonNuevoJuego.setInteractive()
        botonNuevoJuego.on('pointerdown', () => { Musicamenu.stop();
          if(efsonido === true ){
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            BotonSonido.play();}
            vidas = 3;
                                       this.scene.start('cinematica');
                                       } );
      
      var botonInfo = this.add.image(825, 690, 'botonInfo').setScale(0.65)
      var botonInfo2 = this.add.image(825, 690, 'botonInfo2').setScale(0.65)  
      botonInfo2.setVisible(false);
      botonInfo.setInteractive()
      botonInfo.on('pointerdown', () => {
        if(efsonido === true ){
          BotonSonido = this.sound.add("botonsonido" , {loop: false});
          BotonSonido.play();}
                                     this.scene.start('info');
                                     } );                                
      var botonCreditos = this.add.image(950, 691, 'botonCreditos').setScale(0.65) 
      var botonCreditos2 = this.add.image(950, 691, 'botonCreditos2').setScale(0.65)
      botonCreditos2.setVisible(false);  
      botonCreditos.setInteractive()
      botonCreditos.on('pointerdown', () => {  
        if(efsonido === true ){
          BotonSonido = this.sound.add("botonsonido" , {loop: false});
          BotonSonido.play();}
        
                                       this.scene.start('creditos'); } );
      
      var botonsalirDelJuego = this.add.image(1140, 690, 'botonsalirDelJuego').setScale(0.65) 
      var botonsalirDelJuego2 = this.add.image(1140, 690, 'botonsalirDelJuego2').setScale(0.65) 
      botonsalirDelJuego2.setVisible(false);
      botonsalirDelJuego.setInteractive()
      botonsalirDelJuego.on('pointerdown', () => {  
        if(efsonido === true ){
          BotonSonido = this.sound.add("botonsonido" , {loop: false});
          BotonSonido.play();}
        Musicamenu.stop();
                                       this.scene.start('logo'); } );   

                                
      botonNuevoJuego.on('pointerover', function (c) {
        botonNuevoJuego2.setVisible(true)
      });
      botonNuevoJuego.on('pointerout', function (c){
        botonNuevoJuego2.setVisible(false)
    });
      botonInfo.on('pointerover', function (d) {
        botonInfo2.setVisible(true)
    });
      botonInfo.on('pointerout', function (d) {
        botonInfo2.setVisible(false)
      });
      botonCreditos.on('pointerover', function (f) {
      botonCreditos2.setVisible(true)
     });
      botonCreditos.on('pointerout', function (f) {
      botonCreditos2.setVisible(false)
      });
      botonsalirDelJuego.on('pointerover', function (f) {
        botonsalirDelJuego2.setVisible(true)
       });
       botonsalirDelJuego.on('pointerout', function (f) {
        botonsalirDelJuego2.setVisible(false)
        });

      var selector = this.add.image(670, 290, 'tutosi').setScale(0.65).setInteractive();
      selector.on('pointerdown', () => {
          this.scene.launch('selector')
      })
    }
    
}