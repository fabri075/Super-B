var txtnuevo;
var txtsel;
var txtcred;
var txtinfo;
var botonNuevoJuego;
var botonNuevoJuego2;
var botonInfo;
var botonInfo2;
var botonCreditos;
var botonCreditos2;
var selector;
var selector2;
var Español1;
var Español;
var Portugues1;
var Portugues;
var Ingles1;
var Ingles;

class Scene2 extends Phaser.Scene {
    constructor() {
      super('menu');
    }

    create() {

      this.add.image(650, 350, 'menu').setScale(0.7)
      Español1 = this.add.image(90, 670, "españolno").setScale(.5).setInteractive(); 
      Español = this.add.image(90, 670, "españolsi" ).setScale(.5).setInteractive();
      Portugues1 = this.add.image(210, 670, "portuguesno").setScale(.5).setInteractive();
      Portugues = this.add.image(210, 670, "portuguessi" ).setScale(.5).setInteractive();
      Ingles1 = this.add.image(150, 670, "inglesno").setScale(.5).setInteractive();
      Ingles = this.add.image(150, 670, "inglessi" ).setScale(.5).setInteractive();

     
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
        botonNuevoJuego = this.add.text(580, 670, txtnuevo, { fontSize: '40px', fill: '#F79D23', fontFamily: 'Boogaloo'}).setScale(0.9)
        botonNuevoJuego2 = this.add.text(580, 670, txtnuevo, { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'}).setScale(0.9) 
        botonNuevoJuego2.setVisible(false);
        botonNuevoJuego.setInteractive();
        botonNuevoJuego.on('pointerdown', () => { Musicamenu.stop();
          if(efsonido === true ){
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            BotonSonido.play();}
            vidas = 3;
                                       this.scene.start('cinematica');
                                       this.scene.pause('menu')
                                       } );
      
      botonInfo = this.add.text(950, 670, txtinfo, { fontSize: '40px', fill: '#F79D23', fontFamily: 'Boogaloo'}).setScale(0.9)
      botonInfo2 = this.add.text(950, 670, txtinfo, { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'}).setScale(0.9)  
      botonInfo2.setVisible(false);
      botonInfo.setInteractive()
      botonInfo.on('pointerdown', () => {
        if(efsonido === true ){
          BotonSonido = this.sound.add("botonsonido" , {loop: false});
          BotonSonido.play();}
                                     this.scene.start('info');
                                     } );                                
      botonCreditos = this.add.text(1130, 670, txtcred, { fontSize: '40px', fill: '#F79D23', fontFamily: 'Boogaloo'}).setScale(0.9) 
      botonCreditos2 = this.add.text(1130, 670, txtcred, { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'}).setScale(0.9)
      botonCreditos2.setVisible(false);  
      botonCreditos.setInteractive()
      botonCreditos.on('pointerdown', () => {  
        if(efsonido === true ){
          BotonSonido = this.sound.add("botonsonido" , {loop: false});
          BotonSonido.play();}
        
                                       this.scene.start('creditos'); } );
      
      selector = this.add.text(757, 670, txtsel, { fontSize: '40px', fill: '#F79D23', fontFamily: 'Boogaloo'}).setScale(0.9) 
      selector2 = this.add.text(757, 670, txtsel, { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'}).setScale(0.9)  
      selector2.setVisible(false);
      selector.setInteractive()
      selector.on('pointerdown', () => {  
        if(efsonido === true ){
          BotonSonido = this.sound.add("botonsonido" , {loop: false});
          BotonSonido.play();}
                                       this.scene.launch('selector');
                                       this.scene.pause('menu')
                                       } );   

                                
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
      selector.on('pointerover', function (f) {
        selector2.setVisible(true)
        
       });
       selector.on('pointerout', function (f) {
        selector2.setVisible(false)
        
        });

        Ingles1.on('pointerdown', () => {
          idioma = 2;
        });
        Español1.on('pointerdown', () => {
          idioma = 1;
        });
        Portugues1.on('pointerdown', () => {
          idioma = 3;
        })
  
    }

    update(){
      if (idioma === 1){  
        Ingles.setVisible(false);
        Ingles1.setVisible(true);
        Español.setVisible(true);
        Español1.setVisible(false);
        Portugues.setVisible(false);
        Portugues1.setVisible(true);
        Español.setInteractive();
        txtnuevo = 'Nuevo Juego';
        txtsel = 'Elegir Nivel';
        txtcred = 'Créditos';
        txtinfo = 'Información';
        botonNuevoJuego.setText(txtnuevo);
        botonNuevoJuego2.setText(txtnuevo);
        botonInfo.setText(txtinfo);
        botonInfo2.setText(txtinfo);
        botonCreditos.setText(txtcred);
        botonCreditos2.setText(txtcred);
        selector.setText(txtsel);
        selector2.setText(txtsel);
      }
      if (idioma === 2){
        Ingles.setVisible(true);
        Ingles1.setVisible(false);
        Español.setVisible(false);
        Español1.setVisible(true);
        Portugues.setVisible(false);
        Portugues1.setVisible(true);
        txtnuevo = 'New Game';
        txtsel = 'Choose Level';
        txtcred = 'Credits';
        txtinfo = 'Information';
        botonNuevoJuego.setText(txtnuevo);
        botonNuevoJuego2.setText(txtnuevo);
        botonInfo.setText(txtinfo);
        botonInfo2.setText(txtinfo);
        botonCreditos.setText(txtcred);
        botonCreditos2.setText(txtcred);
        selector.setText(txtsel);
        selector2.setText(txtsel);
       }
       if (idioma === 3){
        Portugues.setVisible(false);
        Portugues.setInteractive()
        Ingles.setVisible(false);
        Ingles1.setVisible(true);
        Español.setVisible(false);
        Español1.setVisible(true);
        Portugues.setVisible(true);
        Portugues1.setVisible(false);
        txtnuevo = 'Novo Jogo';
        txtsel = 'Escolha Nivel';
        txtcred = 'Créditos';
        txtinfo = 'informação';
        botonNuevoJuego.setText(txtnuevo);
        botonNuevoJuego2.setText(txtnuevo);
        botonInfo.setText(txtinfo);
        botonInfo2.setText(txtinfo);
        botonCreditos.setText(txtcred);
        botonCreditos2.setText(txtcred);
        selector.setText(txtsel);
        selector2.setText(txtsel);
       }


    }
    
}