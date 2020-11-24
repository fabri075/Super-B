var areajuego;
var boblentes;
var clic;
var totalBuenas;
var target = new Phaser.Math.Vector2();
class Scene3 extends Phaser.Scene {
    constructor() {
      super('nivel1');
    }

    create() {
        
       
        this.add.image(640, 360, 'fondo2').setScale(0.67, 0.67)
        this.add.image(640, 195, 'casita').setScale(.7, .7)
        this.add.image(628, 170, 'casitaFondo').setScale(.75, 1)
        this.add.image(640, 45, 'uiCont').setScale(0.695, 0.67)
        if(idioma === 1)
        
        {this.add.text(10, 25, 'NIVEL', { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'}).setScale(0.85)}

        if(idioma === 3)
        
        {this.add.text(10, 25, 'NÍVEL', { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'}).setScale(0.85)}

        if(idioma === 2)
        
        {this.add.text(10, 25, 'LEVEL', { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'}).setScale(0.85)}



       


       //On y Off muscia
           Musicagame= this.sound.add("musicagame", {loop: true});
           
           if( MusicNivel === true){
            Musicagame.play();
        }    else if (MusicNivel === false){
            Musicagame.stop();
        }
         


        
        //aca estan las colisiones estaticas
        var  cajaDeColision = this.physics.add.staticGroup();
        //pared abajo
         cajaDeColision.create(610, 720, 'barraTransparente');
        //pared arriba
         cajaDeColision.create(610, 113, 'barraTransparente');
        //cocina
         cajaDeColision.create(430, 155, 'DerIzqInvisible');
         cajaDeColision.create(530, 155, 'DerIzqInvisible');
         cajaDeColision.create(630, 155, 'DerIzqInvisible');
         cajaDeColision.create(730, 155, 'DerIzqInvisible');
         cajaDeColision.create(850, 155, 'DerIzqInvisible');
        
        
         //pared izquierda
         cajaDeColision.create(-10, 320, 'barraTransparenteVertical');
        //pared derecha
         cajaDeColision.create(1290, 320, 'barraTransparenteVertical');
        //mesa izquierda y dercha del medio
        if(nivel === 4)
         {cajaDeColision.create(-450, 360, 'barraTransparente');}//para que no pisen a los niños
         //cajaDeColision.create(1700, 360, 'barraTransparente');//para que no pisen a los niños

         if(nivel === 5)
         {cajaDeColision.create(-450, 360, 'barraTransparente');//para que no pisen a los niños
         cajaDeColision.create(1750, 360, 'barraTransparente');}//para que no pisen a los niños
         //mesa derecha y izquierda de abajo
         cajaDeColision.create(-450, 540, 'barraTransparente');//para que no pisen a los niños
         cajaDeColision.create(1750, 540, 'barraTransparente');//para que no pisen a los niños
         
        
        

         if (nivel === 1){
            // Mesa izquierda
this.add.image(170, 590, 'divisorIzq').setScale(0.8,0.6)
//nena del medio
this.add.image(170, 595, 'nMd1').setScale(.6)
//nena de la derecha
this.add.image(300, 620, 'nDr1').setScale(.6)
//nene de la izquierda
this.add.image(45, 620, 'nIz1').setScale(.6)

this.add.image(170, 650, 'mesa').setScale(1.1, 0.6)




         // Mesa abajo derecha
this.add.image(1120, 590, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(995, 620, 'nIz2').setScale(.6)
//nene derecha
this.add.image(1250, 620, 'nDr2').setScale(.6)
//nene medio
this.add.image(1120, 595, 'nMd2').setScale(.6)

this.add.image(1120, 650, 'mesa').setScale(1.1 , 0.6)






}else{ if (nivel === 2){

        // Mesa abajo izquierda
            // Mesa abajo izquierda
this.add.image(170, 590, 'divisorIzq').setScale(0.8,0.6)
//nena del medio
this.add.image(170, 595, 'nMd1').setScale(.6)
//nena de la derecha
this.add.image(300, 620, 'nDr1').setScale(.6)
//nene de la izquierda
this.add.image(45, 620, 'nIz1').setScale(.6)

this.add.image(170, 650, 'mesa').setScale(1.1, 0.6)

         // Mesa abajo derecha
this.add.image(1120, 590, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(995, 620, 'nIz2').setScale(.6)
//nene derecha
this.add.image(1250, 620, 'nDr2').setScale(.6)
//nene medio
this.add.image(1120, 595, 'nMd2').setScale(.6)

this.add.image(1120, 650, 'mesa').setScale(1.1 , 0.6)

         //mesa arriba derecha
this.add.image(1090, 200, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(970, 210, 'nIz3').setScale(.5)
//nene derecha
this.add.image(1215, 210, 'nDr3').setScale(.5)
//nene medio
this.add.image(1090, 190, 'nMd3').setScale(.55)

this.add.image(1090, 230, 'mesa').setScale(.9 , 0.5)



} else { if (nivel === 3){
             // Mesa abajo izquierda
this.add.image(170, 590, 'divisorIzq').setScale(0.8,0.6)
//nena del medio
this.add.image(170, 595, 'nMd1').setScale(.6)
//nena de la derecha
this.add.image(300, 620, 'nDr1').setScale(.6)
//nene de la izquierda
this.add.image(45, 620, 'nIz1').setScale(.6)

this.add.image(170, 650, 'mesa').setScale(1.1, 0.6)
         // Mesa abajo derecha
this.add.image(1120, 590, 'divisorDer').setScale(0.8,0.6)
         //nene izquierda
this.add.image(995, 620, 'nIz2').setScale(.6)
//nene derecha
this.add.image(1250, 620, 'nDr2').setScale(.6)
//nene medio
this.add.image(1120, 595, 'nMd2').setScale(.6)

this.add.image(1120, 650, 'mesa').setScale(1.1 , 0.6)

         //mesa arriba derecha
this.add.image(1090, 200, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(970, 210, 'nIz3').setScale(.5)
//nene derecha
this.add.image(1215, 210, 'nDr3').setScale(.5)
//nene medio
this.add.image(1090, 190, 'nMd3').setScale(.55)

this.add.image(1090, 230, 'mesa').setScale(.9 , 0.5)

         //mesa arriba izquierda
this.add.image(170, 200, 'divisorIzq').setScale(0.8,0.6)
//nene izquierda
this.add.image(50, 210, 'nIz4').setScale(.5)
//nene derecha
this.add.image(295, 210, 'nDr4').setScale(.5)
//nene medio
this.add.image(170, 190, 'nMd4').setScale(.55)
this.add.image(170, 230, 'mesa').setScale(.9 , 0.5)
} else { if (nivel === 4){ 
        // Mesa abajo izquierda
this.add.image(170, 590, 'divisorIzq').setScale(0.8,0.6)
//nena del medio
this.add.image(170, 595, 'nMd1').setScale(.6)
//nena de la derecha
this.add.image(300, 620, 'nDr1').setScale(.6)
//nene de la izquierda
this.add.image(45, 620, 'nIz1').setScale(.6)

this.add.image(170, 650, 'mesa').setScale(1.1, 0.6)
        // Mesa abajo derecha
this.add.image(1120, 590, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(995, 620, 'nIz2').setScale(.6)
//nene derecha
this.add.image(1250, 620, 'nDr2').setScale(.6)
//nene medio
this.add.image(1120, 595, 'nMd2').setScale(.6)

this.add.image(1120, 650, 'mesa').setScale(1.1 , 0.6)

        //mesa arriba derecha
this.add.image(1090, 200, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(970, 210, 'nIz3').setScale(.5)
//nene derecha
this.add.image(1215, 210, 'nDr3').setScale(.5)
//nene medio
this.add.image(1090, 190, 'nMd3').setScale(.55)

this.add.image(1090, 230, 'mesa').setScale(.9 , 0.5)

         //mesa arriba izquierda
this.add.image(170, 200, 'divisorIzq').setScale(0.8,0.6)
//nene izquierda
this.add.image(50, 210, 'nIz4').setScale(.5)
//nene derecha
this.add.image(295, 210, 'nDr4').setScale(.5)
//nene medio
this.add.image(170, 190, 'nMd4').setScale(.55)
this.add.image(170, 230, 'mesa').setScale(.9 , 0.5)

         //mesa medio izquierda
this.add.image(170, 415, 'divisorIzq').setScale(0.75,0.6)                             
//nene izquierda
this.add.image(47, 450, 'nIz5').setScale(.55)
//nene derecha
this.add.image(297, 450, 'nDr5').setScale(.55)
//nene medio
this.add.image(170, 420, 'nMd5').setScale(.55)
this.add.image(170, 475, 'mesa').setScale(1 , 0.55)
}else {
    //mesa abajo izquierda
this.add.image(170, 590, 'divisorIzq').setScale(0.8,0.6)
//nena del medio
this.add.image(170, 595, 'nMd1').setScale(.6)
//nena de la derecha
this.add.image(300, 620, 'nDr1').setScale(.6)
//nene de la izquierda
this.add.image(45, 620, 'nIz1').setScale(.6)

this.add.image(170, 650, 'mesa').setScale(1.1, 0.6)
        // Mesa abajo derecha
this.add.image(1120, 590, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(995, 620, 'nIz2').setScale(.6)
//nene derecha
this.add.image(1250, 620, 'nDr2').setScale(.6)
//nene medio
this.add.image(1120, 595, 'nMd2').setScale(.6)

this.add.image(1120, 650, 'mesa').setScale(1.1 , 0.6)

        //mesa arriba derecha
this.add.image(1090, 200, 'divisorDer').setScale(0.8,0.6)
//nene izquierda
this.add.image(970, 210, 'nIz3').setScale(.5)
//nene derecha
this.add.image(1215, 210, 'nDr3').setScale(.5)
//nene medio
this.add.image(1090, 190, 'nMd3').setScale(.55)

this.add.image(1090, 230, 'mesa').setScale(.9 , 0.5)

         //mesa arriba izquierda
this.add.image(170, 200, 'divisorIzq').setScale(0.8,0.6)
//nene izquierda
this.add.image(50, 210, 'nIz4').setScale(.5)
//nene derecha
this.add.image(295, 210, 'nDr4').setScale(.5)
//nene medio
this.add.image(170, 190, 'nMd4').setScale(.55)
this.add.image(170, 230, 'mesa').setScale(.9 , 0.5)

         //mesa medio izquierda
this.add.image(170, 415, 'divisorIzq').setScale(0.75,0.6)                             
//nene izquierda
this.add.image(47, 450, 'nIz5').setScale(.55)
//nene derecha
this.add.image(297, 450, 'nDr5').setScale(.55)
//nene medio
this.add.image(170, 420, 'nMd5').setScale(.55)
this.add.image(170, 475, 'mesa').setScale(1 , 0.55)

            //mesa medio derecha
this.add.image(1120, 415, 'divisorDer').setScale(0.75,0.6)
            //nene izquierda
this.add.image(998, 450, 'nIz6').setScale(.55)
//nene derecha
this.add.image(1247, 450, 'nDr6').setScale(.55)
//nene medio
this.add.image(1120, 420, 'nMd6').setScale(.55)
this.add.image(1120, 475, 'mesa').setScale(1 , 0.55)
}}}} 
            
    
        
    
        

        // Grupo de hamburguesas
         //// aleatoridad de variables
        hamburguesa1 = colores[Phaser.Math.Between(0,1)];
         if(hamburguesa1===colores[0]){
            hamburguesa2 = colores[1];
         }else{hamburguesa2 = colores[0]};

        hamburguesa3 = colores[Phaser.Math.Between(0,1)];
        hamburguesa4 = colores[Phaser.Math.Between(0,1)];

         if(hamburguesa4===colores[0]){
            hamburguesa5 = colores[1];
            }else{hamburguesa5 = colores[0]};

        hamburguesa6 = colores[Phaser.Math.Between(0,1)];
        hamburguesa7 = colores[Phaser.Math.Between(0,1)];

        if(hamburguesa7===colores[0]){
            hamburguesa8 = colores[1];
         }else{hamburguesa8 = colores[0]};
         
         hamburguesa9 = colores[Phaser.Math.Between(0,1)];
         hamburguesa10 = colores[Phaser.Math.Between(0,1)];
         if(hamburguesa10===colores[0]){
            hamburguesa11 = colores[1];
         }else{hamburguesa11 = colores[0]};

         hamburguesa12 = colores[Phaser.Math.Between(0,1)];
         hamburguesa13 = colores[Phaser.Math.Between(0,1)];
         if(hamburguesa13===colores[0]){
            hamburguesa14 = colores[1];
         }else{hamburguesa14 = colores[0]};

         hamburguesa15 = colores[Phaser.Math.Between(0,1)];
         hamburguesa16 = colores[Phaser.Math.Between(0,1)];
         if(hamburguesa16===colores[0]){
            hamburguesa17 = colores[1];
         }else{hamburguesa17 = colores[0]};

         hamburguesa18 = colores[Phaser.Math.Between(0,1)];

         
        ////Creacion de hamburguesas 
          hamburgesas = this.physics.add.staticGroup();

         

         if (nivel === 1){
            if(contadorPilas === 0){
                contadorPilas = 1;
            }
                                        //mesa abajo izquierda
             //izquierda
             ham1 = hamburgesas.create(90, 620, 'hamb').setScale(1).setTint(hamburguesa1).setInteractive({ cursor: 'pointer' })
             //medio
             ham2 = hamburgesas.create(165, 620, 'hamb').setScale(1).setTint(hamburguesa2).setInteractive({ cursor: 'pointer' })
             //derecha
             ham3 = hamburgesas.create(245, 620, 'hamb').setScale(1).setTint(hamburguesa3).setInteractive({ cursor: 'pointer' })
                                         //mesa abajo derecha
             //izquierda
             ham4 = hamburgesas.create(1040, 620, 'hamb').setScale(1).setTint(hamburguesa4).setInteractive({ cursor: 'pointer' })
             //medio
             ham5 = hamburgesas.create(1120, 620, 'hamb').setScale(1).setTint(hamburguesa5).setInteractive({ cursor: 'pointer' })
             //derecha
             ham6 = hamburgesas.create(1205, 620, 'hamb').setScale(1).setTint(hamburguesa6).setInteractive({ cursor: 'pointer' })
            tiempoInicial = 0;

        }else{ if(nivel === 2){  
            if(contadorPilas === 0){
                contadorPilas = 1;
            }
                                //mesa abajo izquierda
            //izquierda
            ham1 = hamburgesas.create(90, 620, 'hamb').setScale(1).setTint(hamburguesa1).setInteractive({ cursor: 'pointer' })
            //medio
            ham2 = hamburgesas.create(165, 620, 'hamb').setScale(1).setTint(hamburguesa2).setInteractive({ cursor: 'pointer' })
            //derecha
            ham3 = hamburgesas.create(245, 620, 'hamb').setScale(1).setTint(hamburguesa3).setInteractive({ cursor: 'pointer' })
                                        //mesa abajo derecha
            //izquierda
            ham4 = hamburgesas.create(1040, 620, 'hamb').setScale(1).setTint(hamburguesa4).setInteractive({ cursor: 'pointer' })
            //medio
            ham5 = hamburgesas.create(1120, 620, 'hamb').setScale(1).setTint(hamburguesa5).setInteractive({ cursor: 'pointer' })
            //derecha
            ham6 = hamburgesas.create(1205, 620, 'hamb').setScale(1).setTint(hamburguesa6).setInteractive({ cursor: 'pointer' })
                                        //mesa arriba derecha
            //izquierda
            ham7 = hamburgesas.create(1010, 200, 'hamb').setScale(.9).setTint(hamburguesa7).setInteractive({ cursor: 'pointer' })
            //medio
            ham8 = hamburgesas.create(1090, 200, 'hamb').setScale(.9).setTint(hamburguesa8).setInteractive({ cursor: 'pointer' })
            //derecha
            ham9 = hamburgesas.create(1170, 200, 'hamb').setScale(.9).setTint(hamburguesa9).setInteractive({ cursor: 'pointer' })
            //hamburguesa extra en la cocina
           // hamExtra = hamburgesas.create(640, 142, 'hamb').setScale(1).setInteractive({ cursor: 'pointer' }).disableBody(true, true)
            lentes = hamburgesas.create(1100, 45, 'lenteshud').setScale(.7).setInteractive({ cursor: 'pointer' }).setVisible(true)
            lentes.alpha = 0.5
            lentes.disableInteractive();
            tiempoInicial = 0;
            
            //pilas HUD variables
            noPila1 = this.add.image(1164, 43, "NoPila").setScale(0.7, 0.65) 
            noPila2 = this.add.image(1141, 43, "NoPila").setScale(0.7, 0.65) 
            noPila3 = this.add.image(1118, 43, "NoPila").setScale(0.7, 0.65) 
            siPila1 = this.add.image(1164, 43, "SiPila").setScale(0.7, 0.65) 
            siPila2 = this.add.image(1141, 43, "SiPila").setScale(0.7, 0.65) 
            siPila3 = this.add.image(1118, 43, "SiPila").setScale(0.7, 0.65) 
            noPila1.alpha = 0.5
            noPila2.alpha = 0.5
            noPila3.alpha = 0.5
            siPila1.alpha = 0.5
            siPila2.alpha = 0.5
            siPila3.alpha = 0.5

        }else{ if ( nivel === 3){
            if(contadorPilas === 0){
                contadorPilas = 1;
            }
                          //mesa abajo izquierda
            //izquierda
            ham1 = hamburgesas.create(90, 620, 'hamb').setScale(1).setTint(hamburguesa1).setInteractive({ cursor: 'pointer' })
            //medio
            ham2 = hamburgesas.create(165, 620, 'hamb').setScale(1).setTint(hamburguesa2).setInteractive({ cursor: 'pointer' })
            //derecha
            ham3 = hamburgesas.create(245, 620, 'hamb').setScale(1).setTint(hamburguesa3).setInteractive({ cursor: 'pointer' })
                                        //mesa abajo derecha
            //izquierda
            ham4 = hamburgesas.create(1040, 620, 'hamb').setScale(1).setTint(hamburguesa4).setInteractive({ cursor: 'pointer' })
            //medio
            ham5 = hamburgesas.create(1120, 620, 'hamb').setScale(1).setTint(hamburguesa5).setInteractive({ cursor: 'pointer' })
            //derecha
            ham6 = hamburgesas.create(1205, 620, 'hamb').setScale(1).setTint(hamburguesa6).setInteractive({ cursor: 'pointer' })
                                         //mesa arriba derecha
            //izquierda
            ham7 = hamburgesas.create(1010, 200, 'hamb').setScale(.9).setTint(hamburguesa7).setInteractive({ cursor: 'pointer' })
            //medio
            ham8 = hamburgesas.create(1090, 200, 'hamb').setScale(.9).setTint(hamburguesa8).setInteractive({ cursor: 'pointer' })
            //derecha
            ham9 = hamburgesas.create(1170, 200, 'hamb').setScale(.9).setTint(hamburguesa9).setInteractive({ cursor: 'pointer' })
            //prueba
                                             //mesa arriba izquierda
            //izquierda
            ham10 = hamburgesas.create(90, 200, 'hamb').setScale(.9).setTint(hamburguesa10).setInteractive({ cursor: 'pointer' })
            //medio
            ham11 = hamburgesas.create(165, 200, 'hamb').setScale(.9).setTint(hamburguesa11).setInteractive({ cursor: 'pointer' })
            //derecha
            ham12 = hamburgesas.create(245, 200, 'hamb').setScale(.9).setTint(hamburguesa12).setInteractive({ cursor: 'pointer' })
            
            //hamburguesa extra en la cocina
           // hamExtra = hamburgesas.create(640, 142, 'hamb').setScale(1).setInteractive({ cursor: 'pointer' }).disableBody(true, true)
            lentes = hamburgesas.create(1100, 45, 'lenteshud').setScale(.7).setInteractive({ cursor: 'pointer' }).setVisible(true)
            lentes.alpha = 0.5
            lentes.disableInteractive();
            tiempoInicial = 0;
            //pilas HUD variables
            noPila1 = this.add.image(1164, 43, "NoPila").setScale(0.7, 0.65);
            noPila2 = this.add.image(1141, 43, "NoPila").setScale(0.7, 0.65);
            noPila3 = this.add.image(1118, 43, "NoPila").setScale(0.7, 0.65);
            siPila1 = this.add.image(1164, 43, "SiPila").setScale(0.7, 0.65);
            siPila2 = this.add.image(1141, 43, "SiPila").setScale(0.7, 0.65);
            siPila3 = this.add.image(1118, 43, "SiPila").setScale(0.7, 0.65);
            noPila1.alpha = 0.5
            noPila2.alpha = 0.5
            noPila3.alpha = 0.5
            siPila1.alpha = 0.5
            siPila2.alpha = 0.5
            siPila3.alpha = 0.5
        }  else {  if ( nivel === 4 ) {   
            if(contadorPilas === 0){
                contadorPilas = 1;
            }
                        //mesa abajo izquierda
            //izquierda
            ham1 = hamburgesas.create(90, 620, 'hamb').setScale(1).setTint(hamburguesa1).setInteractive({ cursor: 'pointer' })
            //medio
            ham2 = hamburgesas.create(165, 620, 'hamb').setScale(1).setTint(hamburguesa2).setInteractive({ cursor: 'pointer' })
            //derecha
            ham3 = hamburgesas.create(245, 620, 'hamb').setScale(1).setTint(hamburguesa3).setInteractive({ cursor: 'pointer' })
                                        //mesa abajo derecha
            //izquierda
            ham4 = hamburgesas.create(1040, 620, 'hamb').setScale(1).setTint(hamburguesa4).setInteractive({ cursor: 'pointer' })
            //medio
            ham5 = hamburgesas.create(1120, 620, 'hamb').setScale(1).setTint(hamburguesa5).setInteractive({ cursor: 'pointer' })
            //derecha
            ham6 = hamburgesas.create(1205, 620, 'hamb').setScale(1).setTint(hamburguesa6).setInteractive({ cursor: 'pointer' })
                                        //mesa arriba derecha
            //izquierda
            ham7 = hamburgesas.create(1010, 200, 'hamb').setScale(.9).setTint(hamburguesa7).setInteractive({ cursor: 'pointer' })
            //medio
            ham8 = hamburgesas.create(1090, 200, 'hamb').setScale(.9).setTint(hamburguesa8).setInteractive({ cursor: 'pointer' })
            //derecha
            ham9 = hamburgesas.create(1170, 200, 'hamb').setScale(.9).setTint(hamburguesa9).setInteractive({ cursor: 'pointer' })
            //prueba
                                             //mesa arriba izquierda
            //izquierda
            ham10 = hamburgesas.create(90, 200, 'hamb').setScale(.9).setTint(hamburguesa10).setInteractive({ cursor: 'pointer' })
            //medio
            ham11 = hamburgesas.create(165, 200, 'hamb').setScale(.9).setTint(hamburguesa11).setInteractive({ cursor: 'pointer' })
            //derecha
            ham12 = hamburgesas.create(245, 200, 'hamb').setScale(.9).setTint(hamburguesa12).setInteractive({ cursor: 'pointer' })
            
                                             //mesa medio izquierda
            //izquierda
            ham13 = hamburgesas.create(90, 450, 'hamb').setScale(.95).setTint(hamburguesa13).setInteractive({ cursor: 'pointer' })
            //medio
            ham14 = hamburgesas.create(165, 450, 'hamb').setScale(.95).setTint(hamburguesa14).setInteractive({ cursor: 'pointer' })
            //derecha
            ham15 = hamburgesas.create(245, 450, 'hamb').setScale(.95).setTint(hamburguesa15).setInteractive({ cursor: 'pointer' })
                //hamburguesa extra en la cocina
           // hamExtra = hamburgesas.create(640, 142, 'hamb').setScale(1).setInteractive({ cursor: 'pointer' }).disableBody(true, true)
            lentes = hamburgesas.create(1100, 45, 'lenteshud').setScale(0.7).setInteractive({ cursor: 'pointer' }).setVisible(true)
            lentes.alpha = 0.5
            lentes.disableInteractive();
            tiempoInicial = 0;
            //pilas HUD variables
            noPila1 = this.add.image(1164, 43, "NoPila").setScale(0.7, 0.65);
            noPila2 = this.add.image(1141, 43, "NoPila").setScale(0.7, 0.65);
            noPila3 = this.add.image(1118, 43, "NoPila").setScale(0.7, 0.65);
            siPila1 = this.add.image(1164, 43, "SiPila").setScale(0.7, 0.65);
            siPila2 = this.add.image(1141, 43, "SiPila").setScale(0.7, 0.65);
            siPila3 = this.add.image(1118, 43, "SiPila").setScale(0.7, 0.65);
            noPila1.alpha = 0.5
            noPila2.alpha = 0.5
            noPila3.alpha = 0.5
            siPila1.alpha = 0.5
            siPila2.alpha = 0.5
            siPila3.alpha = 0.5
        } else { 
            if(contadorPilas === 0){
                contadorPilas = 1;
            }
                      //mesa abajo izquierda
            //izquierda
            ham1 = hamburgesas.create(90, 620, 'hamb').setScale(1).setTint(hamburguesa1).setInteractive({ cursor: 'pointer' })
            //medio
            ham2 = hamburgesas.create(165, 620, 'hamb').setScale(1).setTint(hamburguesa2).setInteractive({ cursor: 'pointer' })
            //derecha
            ham3 = hamburgesas.create(245, 620, 'hamb').setScale(1).setTint(hamburguesa3).setInteractive({ cursor: 'pointer' })
                                        //mesa abajo derecha
            //izquierda
            ham4 = hamburgesas.create(1040, 620, 'hamb').setScale(1).setTint(hamburguesa4).setInteractive({ cursor: 'pointer' })
            //medio
            ham5 = hamburgesas.create(1120, 620, 'hamb').setScale(1).setTint(hamburguesa5).setInteractive({ cursor: 'pointer' })
            //derecha
            ham6 = hamburgesas.create(1205, 620, 'hamb').setScale(1).setTint(hamburguesa6).setInteractive({ cursor: 'pointer' })
                                        //mesa arriba derecha
            //izquierda
            ham7 = hamburgesas.create(1010, 200, 'hamb').setScale(.9).setTint(hamburguesa7).setInteractive({ cursor: 'pointer' })
            //medio
            ham8 = hamburgesas.create(1090, 200, 'hamb').setScale(.9).setTint(hamburguesa8).setInteractive({ cursor: 'pointer' })
            //derecha
            ham9 = hamburgesas.create(1170, 200, 'hamb').setScale(.9).setTint(hamburguesa9).setInteractive({ cursor: 'pointer' })
            //prueba
                                             //mesa arriba izquierda
            //izquierda
            ham10 = hamburgesas.create(90, 200, 'hamb').setScale(.9).setTint(hamburguesa10).setInteractive({ cursor: 'pointer' })
            //medio
            ham11 = hamburgesas.create(165, 200, 'hamb').setScale(.9).setTint(hamburguesa11).setInteractive({ cursor: 'pointer' })
            //derecha
            ham12 = hamburgesas.create(245, 200, 'hamb').setScale(.9).setTint(hamburguesa12).setInteractive({ cursor: 'pointer' })
            
                                             //mesa medio izquierda
            //izquierda
            ham13 = hamburgesas.create(90, 450, 'hamb').setScale(.95).setTint(hamburguesa13).setInteractive({ cursor: 'pointer' })
            //medio
            ham14 = hamburgesas.create(165, 450, 'hamb').setScale(.95).setTint(hamburguesa14).setInteractive({ cursor: 'pointer' })
            //derecha
            ham15 = hamburgesas.create(245, 450, 'hamb').setScale(.95).setTint(hamburguesa15).setInteractive({ cursor: 'pointer' })
            
                                             //mesa medio derecha
            //izquierda
            ham16 = hamburgesas.create(1040, 450, 'hamb').setScale(.95).setTint(hamburguesa16).setInteractive({ cursor: 'pointer' })
            //medio
            ham17 = hamburgesas.create(1120, 450, 'hamb').setScale(.95).setTint(hamburguesa17).setInteractive({ cursor: 'pointer' })
            //derecha
            ham18 = hamburgesas.create(1205, 450, 'hamb').setScale(.95).setTint(hamburguesa18).setInteractive({ cursor: 'pointer' })
            
                //hamburguesa extra en la cocina
           // hamExtra = hamburgesas.create(640, 142, 'hamb').setScale(1).setInteractive({ cursor: 'pointer' }).disableBody(true, true)
            lentes = hamburgesas.create(1100, 45, 'lenteshud').setScale(0.7).setInteractive({ cursor: 'pointer' }).setVisible(true)
            lentes.alpha = 0.5
            lentes.disableInteractive();
            tiempoInicial = 0;
            //pilas HUD variables
            noPila1 = this.add.image(1164, 43, "NoPila").setScale(0.7, 0.65);
            noPila2 = this.add.image(1141, 43, "NoPila").setScale(0.7, 0.65);
            noPila3 = this.add.image(1118, 43, "NoPila").setScale(0.7, 0.65);
            siPila1 = this.add.image(1164, 43, "SiPila").setScale(0.7, 0.65);
            siPila2 = this.add.image(1141, 43, "SiPila").setScale(0.7, 0.65);
            siPila3 = this.add.image(1118, 43, "SiPila").setScale(0.7, 0.65);
            noPila1.alpha = 0.5
            noPila2.alpha = 0.5
            noPila3.alpha = 0.5
            siPila1.alpha = 0.5
            siPila2.alpha = 0.5
            siPila3.alpha = 0.5

        }}}
              
         }
         
        
        // Creamos el jugador
        jugador = this.physics.add.sprite(640, 480, 'bobFrenteReposo').setScale(0.6);
        boblentes = this.physics.add.sprite(640, 480, 'bobFrenteLentes').setScale(0.6);
        gafas = this.physics.add.sprite(jugador.x, jugador.y - 56, 'lentes').setScale(0.6).setVisible(false);

        jugador.setBounce(0);
        jugador.setCollideWorldBounds(true);
        perder = 0;
        ganar = 0;
       
        
        
        // Animaciones
        this.anims.create({
            key: 'Derecha',
            frames: this.anims.generateFrameNumbers('BobDerecha', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        }); 
        this.anims.create({
            key: 'Izquierda',
            frames: this.anims.generateFrameNumbers('BobIzquierda', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        }); 
        this.anims.create({
            key: 'Quieto',
            frames: [ { key: 'bobFrenteReposo', frame: 1 } ],
            frameRate: 20,
        }); 
        this.anims.create({
            key: 'walkd',
            frames: this.anims.generateFrameNumbers('mozod', { start: 0, end: 5 }),
            frameRate: 7,
            repeat: -1
        }); 
        this.anims.create({
            key: 'walki',
            frames: this.anims.generateFrameNumbers('mozoi', { start: 0, end: 5 }),
            frameRate: 7,
            repeat: -1
        }); 
        
        var mozod = this.add.sprite(0,280, 'mozod').setScale(0.5); 
        var mozod2 = this.add.sprite(-3280, 630, 'mozod').setScale(0.55); 
        mozod.anims.play('walkd', true);
        mozod2.anims.play('walkd', true);
        this.tweens.add({
            targets: mozod,
            x: 6000,
            duration: 35000,
            ease: 'Linear'
        });
        this.tweens.add({
            targets: mozod2,
            x: 10000,
            duration: 25000,
            ease: 'Linear'
        });
        var mozoi = this.add.sprite(1280, 630, 'mozoi').setScale(0.55);
        var mozoi2 = this.add.sprite(3280, 270, 'mozoi').setScale(0.55);
        mozoi.anims.play('walki', true);
        mozoi2.anims.play('walki', true);
        this.tweens.add({
            targets: mozoi,
            x: -6000,
            duration: 35000,
            ease: 'Linear'
        });
        this.tweens.add({
            targets: mozoi2,
            x: -6000,
            duration: 35000,
            ease: 'Linear'
        });
        // Collisiones + funcion para que el jugador se frene cuando choca
        this.physics.add.collider(jugador, cajaDeColision, ()=> {   target.x = jugador.x;
                                                                    target.y = jugador.y;
                                                                    jugador.body.reset(target.x, target.y);
                                                                    });

        // Ponemos el puntaje en pantalla
        //var scoreimage = this.add.image(640, 26, 'puntaje').setScale(0.7)
        scoreText = this.add.text(670, 29, score, { fontSize: '26px', fill: 'purple', fontFamily: 'Boogaloo'});
        tiempoText = this.add.text(250, 29, 'Tiempo: ' + tiempoInicial, { fontSize: '26px', fill: 'purple', fontFamily: 'Boogaloo'});
        levelText = this.add.text(110, 29, nivel + '' , { fontSize: '26px', fill: 'purple', fontFamily: 'Boogaloo'});
        //mochila
       // this.add.image(460, 120, 'puntos').setScale(0.3,0.5)
        
       
        
        // Botones interactivos
        var configMenuJuego = this.add.image(1236, 43, 'configMenuJuego').setScale(0.65);
        configMenuJuego.setInteractive()
        configMenuJuego.on('pointerdown', () => {  
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            if (efsonido === true)
            {
            BotonSonido.play();
            }
            target.x = jugador.x;
            target.y = jugador.y;
            this.scene.pause();
            this.scene.launch('pausa')
            
            
        
        
        //this.physics.add.collider(jugador, escalera);
    } );

     // Evento para cambiar el color de las hamburguesas
     
    this.time.delayedCall(5000, carteltiempo, [], this); 
    this.time.delayedCall(3500, cambiotiempo, [], this);

    // Tiempo nivel
    
    timedEvent = this.time.addEvent({ delay: 1000, callback: tiempoNivel, callbackScope: this, loop: true });
    cooldown = this.time.addEvent({ delay: 1000, callback: coolDown, callbackScope: this, loop: true });
     
    
    // Contamos la cantidad de hamburguesas buenas y malas que aparecen
    if(nivel === 1){
        if(hamburguesa1 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa2 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa3 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa4 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa5 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa6 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    }else{ if (nivel === 2){
        score = score;
        if(hamburguesa1 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa2 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa3 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa4 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa5 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa6 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa7 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa8 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa9 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    } else { if ( nivel === 3) {
        score = score;
        if(hamburguesa1 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa2 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa3 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa4 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa5 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa6 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa7 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa8 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa9 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
        
        if(hamburguesa10 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
        if(hamburguesa11 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
        if(hamburguesa12 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    } else { if (nivel === 4) {score = score;
        if(hamburguesa1 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa2 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa3 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa4 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa5 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa6 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa7 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa8 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
    
        if(hamburguesa9 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
        
        if(hamburguesa10 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
        if(hamburguesa11 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
        if(hamburguesa12 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }
        if(hamburguesa13 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }if(hamburguesa14 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;
        }if(hamburguesa15 === colores[0] ){
            contadorBuenas++;
        }else{
            contadorMalas++;

        }}else {
             score = score;
            if(hamburguesa1 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa2 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa3 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa4 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa5 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa6 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa7 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa8 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
        
            if(hamburguesa9 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
            
            if(hamburguesa10 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
            if(hamburguesa11 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
            if(hamburguesa12 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }
            if(hamburguesa13 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }if(hamburguesa14 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }if(hamburguesa15 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }if(hamburguesa16 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }if(hamburguesa17 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }if(hamburguesa18 === colores[0] ){
                contadorBuenas++;
            }else{
                contadorMalas++;
            }}}
        
    }

    }
   
    if (nivel === 1){
        mochila = contadorMalas + 1;
    }else{ if(nivel === 2){
        mochila = contadorMalas + 1;
    }else { if(nivel === 3){
        mochila = contadorMalas + 1;
    } else { if (nivel === 4){mochila = contadorMalas + 1;} 
    else {mochila = contadorMalas + 1;}
    }}
    }
    
    if (vidas === 3){
        corazon = this.add.image(430, 45, 'cora3').setScale(0.75); 
    }else {if (vidas === 2){
        corazon = this.add.image(430, 45, 'cora2').setScale(0.75); 
    }else {if (vidas === 1){
        corazon = this.add.image(430, 45, 'cora1').setScale(0.75); 
    }}}
     
    totalBuenas = contadorBuenas;
    cantMochila = this.add.text(950, 29, mochila, { fontSize: '26px', fill: 'purple', fontFamily: 'Boogaloo'});

    }

    
    update(){
        
        // Tiempo y contador mochila
        tiempoText.setText('' + tiempoInicial);
        cantMochila.setText(mochila);

        if (tiempoInicial <= 0){
            tiempoInicial = 0;
        }
        
        if (score <= 0) {
            score = 0
            scoreText.setText(score);
        };

        // Spawn hamburguesa extra
      //  if(contadorMalas === 2 && mochila === 1 && cont === 1 && nivel === 2){
           // hamExtra.setVisible(true);
            //agarrarExtra();
           // cont++;       
      //  }

        //Puntaje Alto
        if (score > puntajeMasAlto){
            puntajeMasAlto = score;
        }

        if(nivel === 2)
        {lentes.on('pointerdown', function (quieto) {
            
            
            quieto.x = target.x;
            quieto.y = target.y;
            
            gafas.setVisible(true);
            gafas.setPosition(jugador.x, jugador.y - 56);
            ponerLentes();
            this.input.on('pointerdown', function(){
                target.x = jugador.x;
                target.y = jugador.y;
            })
            this.time.delayedCall(3500, cambiotiempo, [], this);
                
        }
        
        , this); 
        lentes.on('pointerdown', function (quieto){
            if(contador===1){
                if(contadorPilas>=1 && contadorPilas <=3 )
                    {contadorPilas--;
                contador++;}
            }
            
        }, this);} else{if( nivel === 3){
            lentes.on('pointerdown', function (quieto) {

                
                quieto.x = target.x;
                quieto.y = target.y;
                
                gafas.setVisible(true);
                gafas.setPosition(jugador.x, jugador.y - 56);
                ponerLentes();
                this.input.on('pointerdown', function(){
                    target.x = jugador.x;
                    target.y = jugador.y;
                })
                this.time.delayedCall(3500, cambiotiempo, [], this);
                
            }
            
            , this); 
            lentes.on('pointerdown', function (quieto){
                if(contador===1){
                    if(contadorPilas>=1 && contadorPilas <=3 )
                        {contadorPilas--;
                    contador++;}
                }
                
            }, this);

        } else { if( nivel === 4){
            lentes.on('pointerdown', function (quieto) {

                
                quieto.x = target.x;
                quieto.y = target.y;
                
                gafas.setVisible(true);
                gafas.setPosition(jugador.x, jugador.y - 56);
                ponerLentes();
                this.input.on('pointerdown', function(){
                    target.x = jugador.x;
                    target.y = jugador.y;
                })
                this.time.delayedCall(3500, cambiotiempo, [], this);
                
            }
            
            , this); 
            lentes.on('pointerdown', function (quieto){
                if(contador===1){
                    if(contadorPilas>=1 && contadorPilas <=3 )
                        {contadorPilas--;
                    contador++;}
                }
                
            }, this); } 
         else { if( nivel === 5){
            
            lentes.on('pointerdown', function (quieto) {

                
                quieto.x = target.x;
                quieto.y = target.y;
                
                gafas.setVisible(true);
                gafas.setPosition(jugador.x, jugador.y - 56);
                ponerLentes();
                this.input.on('pointerdown', function(){
                    target.x = jugador.x;
                    target.y = jugador.y;
                })
                this.time.delayedCall(3500, cambiotiempo, [], this);
                
            }
            
            , this); 
            lentes.on('pointerdown', function (quieto){
                if(contador===1){
                    if(contadorPilas>=1 && contadorPilas <=3 )
                        {contadorPilas--;
                    contador++;}
                }
                
            }, this);
         }}}}
       
        // Calcula la distancia entre el jugador y el "click"

        if(nivel === 1){
        var distance = Phaser.Math.Distance.Between(jugador.x, jugador.y, target.x, target.y);
        var distancia2 = Phaser.Math.Distance.Between(ham1.x, ham1.y, target.x, target.y);
        var distancia3 = Phaser.Math.Distance.Between(ham2.x, ham2.y, target.x, target.y);
        var distancia4 = Phaser.Math.Distance.Between(ham3.x, ham3.y, target.x, target.y);
        var distancia5 = Phaser.Math.Distance.Between(ham4.x, ham4.y, target.x, target.y);
        var distancia6 = Phaser.Math.Distance.Between(ham5.x, ham5.y, target.x, target.y);
        var distancia7 = Phaser.Math.Distance.Between(ham6.x, ham6.y, target.x, target.y);
        }else{ if( nivel ===2 ){ 
        var distance = Phaser.Math.Distance.Between(jugador.x, jugador.y, target.x, target.y);
        var distancia2 = Phaser.Math.Distance.Between(ham1.x, ham1.y, target.x, target.y);
        var distancia3 = Phaser.Math.Distance.Between(ham2.x, ham2.y, target.x, target.y);
        var distancia4 = Phaser.Math.Distance.Between(ham3.x, ham3.y, target.x, target.y);
        var distancia5 = Phaser.Math.Distance.Between(ham4.x, ham4.y, target.x, target.y);
        var distancia6 = Phaser.Math.Distance.Between(ham5.x, ham5.y, target.x, target.y);
        var distancia7 = Phaser.Math.Distance.Between(ham6.x, ham6.y, target.x, target.y);
        var distancia8 = Phaser.Math.Distance.Between(ham7.x, ham7.y, target.x, target.y);
        var distancia9 = Phaser.Math.Distance.Between(ham8.x, ham8.y, target.x, target.y);
        var distancia10 = Phaser.Math.Distance.Between(ham9.x, ham9.y, target.x, target.y);
       // var distancia11 = Phaser.Math.Distance.Between(hamExtra.x, hamExtra.y, target.x, target.y);
    }else{ if ( nivel === 3 ){
          var distance = Phaser.Math.Distance.Between(jugador.x, jugador.y, target.x, target.y);
        var distancia2 = Phaser.Math.Distance.Between(ham1.x, ham1.y, target.x, target.y);
        var distancia3 = Phaser.Math.Distance.Between(ham2.x, ham2.y, target.x, target.y);
        var distancia4 = Phaser.Math.Distance.Between(ham3.x, ham3.y, target.x, target.y);
        var distancia5 = Phaser.Math.Distance.Between(ham4.x, ham4.y, target.x, target.y);
        var distancia6 = Phaser.Math.Distance.Between(ham5.x, ham5.y, target.x, target.y);
        var distancia7 = Phaser.Math.Distance.Between(ham6.x, ham6.y, target.x, target.y);
        var distancia8 = Phaser.Math.Distance.Between(ham7.x, ham7.y, target.x, target.y);
        var distancia9 = Phaser.Math.Distance.Between(ham8.x, ham8.y, target.x, target.y);
        var distancia10 = Phaser.Math.Distance.Between(ham9.x, ham9.y, target.x, target.y);
        var distancia11 = Phaser.Math.Distance.Between(ham10.x, ham10.y, target.x, target.y);
        var distancia12 = Phaser.Math.Distance.Between(ham11.x, ham11.y, target.x, target.y);
        var distancia13 = Phaser.Math.Distance.Between(ham12.x, ham12.y, target.x, target.y);
       // var distancia14 = Phaser.Math.Distance.Between(hamExtra.x, hamExtra.y, target.x, target.y);
    } 
        else { if ( nivel === 4){
            var distance = Phaser.Math.Distance.Between(jugador.x, jugador.y, target.x, target.y);
            var distancia2 = Phaser.Math.Distance.Between(ham1.x, ham1.y, target.x, target.y);
            var distancia3 = Phaser.Math.Distance.Between(ham2.x, ham2.y, target.x, target.y);
            var distancia4 = Phaser.Math.Distance.Between(ham3.x, ham3.y, target.x, target.y);
            var distancia5 = Phaser.Math.Distance.Between(ham4.x, ham4.y, target.x, target.y);
            var distancia6 = Phaser.Math.Distance.Between(ham5.x, ham5.y, target.x, target.y);
            var distancia7 = Phaser.Math.Distance.Between(ham6.x, ham6.y, target.x, target.y);
            var distancia8 = Phaser.Math.Distance.Between(ham7.x, ham7.y, target.x, target.y);
            var distancia9 = Phaser.Math.Distance.Between(ham8.x, ham8.y, target.x, target.y);
            var distancia10 = Phaser.Math.Distance.Between(ham9.x, ham9.y, target.x, target.y);
            var distancia11 = Phaser.Math.Distance.Between(ham10.x, ham10.y, target.x, target.y);
            var distancia12 = Phaser.Math.Distance.Between(ham11.x, ham11.y, target.x, target.y);
            var distancia13 = Phaser.Math.Distance.Between(ham12.x, ham12.y, target.x, target.y);
            var distancia14 = Phaser.Math.Distance.Between(ham13.x, ham13.y, target.x, target.y);
            var distancia15 = Phaser.Math.Distance.Between(ham14.x, ham14.y, target.x, target.y);
            var distancia16 = Phaser.Math.Distance.Between(ham15.x, ham15.y, target.x, target.y);
           // var distancia17 = Phaser.Math.Distance.Between(hamExtra.x, hamExtra.y, target.x, target.y);
        } else{
            var distance = Phaser.Math.Distance.Between(jugador.x, jugador.y, target.x, target.y);
            var distancia2 = Phaser.Math.Distance.Between(ham1.x, ham1.y, target.x, target.y);
            var distancia3 = Phaser.Math.Distance.Between(ham2.x, ham2.y, target.x, target.y);
            var distancia4 = Phaser.Math.Distance.Between(ham3.x, ham3.y, target.x, target.y);
            var distancia5 = Phaser.Math.Distance.Between(ham4.x, ham4.y, target.x, target.y);
            var distancia6 = Phaser.Math.Distance.Between(ham5.x, ham5.y, target.x, target.y);
            var distancia7 = Phaser.Math.Distance.Between(ham6.x, ham6.y, target.x, target.y);
            var distancia8 = Phaser.Math.Distance.Between(ham7.x, ham7.y, target.x, target.y);
            var distancia9 = Phaser.Math.Distance.Between(ham8.x, ham8.y, target.x, target.y);
            var distancia10 = Phaser.Math.Distance.Between(ham9.x, ham9.y, target.x, target.y);
            var distancia11 = Phaser.Math.Distance.Between(ham10.x, ham10.y, target.x, target.y);
            var distancia12 = Phaser.Math.Distance.Between(ham11.x, ham11.y, target.x, target.y);
            var distancia13 = Phaser.Math.Distance.Between(ham12.x, ham12.y, target.x, target.y);
            var distancia14 = Phaser.Math.Distance.Between(ham13.x, ham13.y, target.x, target.y);
            var distancia15 = Phaser.Math.Distance.Between(ham14.x, ham14.y, target.x, target.y);
            var distancia16 = Phaser.Math.Distance.Between(ham15.x, ham15.y, target.x, target.y);
            var distancia17 = Phaser.Math.Distance.Between(ham16.x, ham16.y, target.x, target.y);
            var distancia18 = Phaser.Math.Distance.Between(ham17.x, ham17.y, target.x, target.y);
            var distancia19 = Phaser.Math.Distance.Between(ham18.x, ham18.y, target.x, target.y);
           // var distancia20 = Phaser.Math.Distance.Between(hamExtra.x, hamExtra.y, target.x, target.y);
        }}}}
        

        if (distancia2 < 9)
        {          
            if(hamburguesa1 === colores[0] ){
                this.physics.add.overlap(jugador, ham1, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham1, agarrarmala, null, this);
            }
            
        }
        if (distancia3 < 9)
        {
            if(hamburguesa2 === colores[0] ){
                this.physics.add.overlap(jugador, ham2, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham2, agarrarmala, null, this);
            }
           
        }
        if (distancia4 < 9)
        {          
            if(hamburguesa3 === colores[0] ){
                this.physics.add.overlap(jugador, ham3, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham3, agarrarmala, null, this);
            }
        }
        if (distancia5 < 9)
        {          
            if(hamburguesa4 === colores[0] ){
                this.physics.add.overlap(jugador, ham4, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham4, agarrarmala, null, this);
            }
        }
        if (distancia6 < 9)
        {
            if(hamburguesa5 === colores[0] ){
                this.physics.add.overlap(jugador, ham5, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham5, agarrarmala, null, this);
            }
        }
        if (distancia7 < 9)
        {
            if(hamburguesa6 === colores[0] ){
                this.physics.add.overlap(jugador, ham6, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham6, agarrarmala, null, this);
            }
        }

        if (distancia8 < 9)
        {
            if(hamburguesa7 === colores[0] ){
                this.physics.add.overlap(jugador, ham7, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham7, agarrarmala, null, this);
            }
        }

        if (distancia9 < 9)
        {
            if(hamburguesa8 === colores[0] ){
                this.physics.add.overlap(jugador, ham8, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham8, agarrarmala, null, this);
            }
        }

        if (distancia10 < 9)
        {
            if(hamburguesa9 === colores[0] ){
                this.physics.add.overlap(jugador, ham9, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham9, agarrarmala, null, this);
            }
        }
        if (distancia11 < 9)
        {
            if(hamburguesa10 === colores[0] ){
                this.physics.add.overlap(jugador, ham10, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham10, agarrarmala, null, this);
            }
        }
        if (distancia12 < 9)
        {
            if(hamburguesa11 === colores[0] ){
                this.physics.add.overlap(jugador, ham11, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham11, agarrarmala, null, this);
            }
        }
        if (distancia13 < 9)
        {
            if(hamburguesa12 === colores[0] ){
                this.physics.add.overlap(jugador, ham12, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham12, agarrarmala, null, this);
            }
        }
        if (distancia14 < 9)
        {
            if(hamburguesa13 === colores[0] ){
                this.physics.add.overlap(jugador, ham13, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham13, agarrarmala, null, this);
            }
        }
        if (distancia15 < 9)
        {
            if(hamburguesa14 === colores[0] ){
                this.physics.add.overlap(jugador, ham14, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham14, agarrarmala, null, this);
            }
        }
        if (distancia16 < 9)
        {
            if(hamburguesa15 === colores[0] ){
                this.physics.add.overlap(jugador, ham15, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham15, agarrarmala, null, this);
            }
        }
        if (distancia17 < 9)
        {
            if(hamburguesa16 === colores[0] ){
                this.physics.add.overlap(jugador, ham16, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham16, agarrarmala, null, this);
            }
        } if (distancia18 < 9)
        {
            if(hamburguesa17 === colores[0] ){
                this.physics.add.overlap(jugador, ham17, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham17, agarrarmala, null, this);
            }
        } if (distancia19 < 9)
        {
            if(hamburguesa18 === colores[0] ){
                this.physics.add.overlap(jugador, ham18, agarrarbuena, null, this);
            }else{
                this.physics.add.overlap(jugador, ham18, agarrarmala, null, this);
            }
        }


       // if (distancia20 < 9)
      //  {
           // this.physics.add.overlap(jugador, hamExtra, agarrarExtra(jugador, hamExtra), null, this);
            
     //   }

        

        //console.log(distance)

        if (contadorMalas === 0 || (mochila === 0 && contadorMalas === 0))
        {
            if (nivel === 5){  this.scene.pause();
                this.scene.launch('ganarA')}
                else{this.scene.pause();
                    this.scene.launch('ganar')}
        
        }else{
            if (perder === totalBuenas || (mochila === 0 && contadorMalas > 0 ))
        {
                vidas = vidas - 1;
                this.scene.pause();
                if (vidas < 1){    
                this.scene.launch('perder')
                }
                else {
                    this.scene.launch('perderA') 
                }
                       
        }
        }


        //pilas HUD
        if(nivel > 1){
            if (contadorPilas === 3) {
              siPila1.setVisible(true);
              siPila2.setVisible(true);
              siPila3.setVisible(true);
            } else {
              if (contadorPilas === 2) {
              siPila1.setVisible(false);
              siPila2.setVisible(true);
              siPila3.setVisible(true);
              } else {
                if (contadorPilas === 1) {
                    siPila1.setVisible(false);
                    siPila2.setVisible(false);
                    siPila3.setVisible(true);}
                 else {if (contadorPilas === 0) {
                    siPila1.setVisible(false);
                    siPila2.setVisible(false);
                    siPila3.setVisible(false);
                  }}
                }

            }}
        
            
        
        
    
        // Activa las animaciones derecha o izquierda
        if (jugador.body.speed > 0)
        {
               if (jugador.x < target.x){
            jugador.anims.play('Derecha', true);
             }
              if (jugador.x > target.x){
            jugador.anims.play('Izquierda', true);
              }
    
            //  4 is our distance tolerance, i.e. how close the source can get to the target
            //  before it is considered as being there. The faster it moves, the more tolerance is required.
            if (distance < 6)
            {
                jugador.body.reset(target.x, target.y);
            }
        }
        
        else{
            jugador.anims.play('Quieto', true);
            
        }
        
    }
  
}



function carteltiempo(){
    tiempoInicial = 30;
}
function cambiotiempo(){
    if( nivel === 1){
        ham1.setTint();
        ham2.setTint();
        ham3.setTint();
        ham4.setTint();
        ham5.setTint();
        ham6.setTint();
        boblentes.destroy();
        boblentes = null;
    }else{ if (nivel === 2){
        ham1.setTint();
        ham2.setTint();
        ham3.setTint();
        ham4.setTint();
        ham5.setTint();
        ham6.setTint();
        ham7.setTint();
        ham8.setTint();
        ham9.setTint();
        if(tiempoInicial < 30 && tiempoInicial > 0){
            gafas.setVisible(false);
                        
        }else {
            boblentes.setVisible(false);
            boblentes = null;
        }}else{ if (nivel === 3){
            ham1.setTint();
            ham2.setTint();
            ham3.setTint();
            ham4.setTint();
            ham5.setTint();
            ham6.setTint();
            ham7.setTint();
            ham8.setTint();
            ham9.setTint();
            ham10.setTint();
            ham11.setTint();
            ham12.setTint();
    
            if(tiempoInicial < 30 && tiempoInicial > 0){
                gafas.setVisible(false);
                            
            }else {
                boblentes.setVisible(false);
                boblentes = null;
            }} 
            else{ if ( nivel === 4){ 
                ham1.setTint();
                ham2.setTint();
                ham3.setTint();
                ham4.setTint();
                ham5.setTint();
                ham6.setTint();
                ham7.setTint();
                ham8.setTint();
                ham9.setTint();
                ham10.setTint();
                ham11.setTint();
                ham12.setTint();
                ham13.setTint();
                ham14.setTint();
                ham15.setTint();
        
                if(tiempoInicial < 30 && tiempoInicial > 0){
                    gafas.setVisible(false);
                                
                }else {
                    boblentes.setVisible(false);
                    boblentes = null;
                }} else{
                ham1.setTint();
                ham2.setTint();
                ham3.setTint();
                ham4.setTint();
                ham5.setTint();
                ham6.setTint();
                ham7.setTint();
                ham8.setTint();
                ham9.setTint();
                ham10.setTint();
                ham11.setTint();
                ham12.setTint();
                ham13.setTint();
                ham14.setTint();
                ham15.setTint();
                ham16.setTint();
                ham17.setTint();
                ham18.setTint();
        
                if(tiempoInicial < 30 && tiempoInicial > 0){
                    gafas.setVisible(false);
                                
                }else {
                    boblentes.setVisible(false);
                    boblentes = null;
                }
                 }
               }
       }
 
    }

        
        clic = this.input.on('pointerdown', function (pointer) {

        
            target.x = pointer.x;
            target.y = pointer.y;
            
            
            // Mov at 250 px/s:
            this.physics.moveToObject(jugador, target, 250);
    
        }, this);
    
    return false;
    
}

function ponerLentes(){
     if (nivel === 2 ){ ham1.setTint(hamburguesa1);
        ham2.setTint(hamburguesa2);
        ham3.setTint(hamburguesa3);
        ham4.setTint(hamburguesa4);
        ham5.setTint(hamburguesa5);
        ham6.setTint(hamburguesa6);
        ham7.setTint(hamburguesa7);
        ham8.setTint(hamburguesa8);
        ham9.setTint(hamburguesa9);
        lentes.alpha = 0.5;
        lentes.disableInteractive();
        
        noPila1.alpha = 0.5
        noPila2.alpha = 0.5
        noPila3.alpha = 0.5
        siPila1.alpha = 0.5
        siPila2.alpha = 0.5
        siPila3.alpha = 0.5
        
    }else { if ( nivel === 3)
        {ham1.setTint(hamburguesa1);
        ham2.setTint(hamburguesa2);
        ham3.setTint(hamburguesa3);
        ham4.setTint(hamburguesa4);
        ham5.setTint(hamburguesa5);
        ham6.setTint(hamburguesa6);
        ham7.setTint(hamburguesa7);
        ham8.setTint(hamburguesa8);
        ham9.setTint(hamburguesa9);
        ham10.setTint(hamburguesa10);
        ham11.setTint(hamburguesa11);
        ham12.setTint(hamburguesa12);
        lentes.alpha = 0.5;
        lentes.disableInteractive();
        
        noPila1.alpha = 0.5
        noPila2.alpha = 0.5
        noPila3.alpha = 0.5
        siPila1.alpha = 0.5
        siPila2.alpha = 0.5
        siPila3.alpha = 0.5

    }else { if (nivel === 4) {
    ham1.setTint(hamburguesa1);
    ham2.setTint(hamburguesa2);
    ham3.setTint(hamburguesa3);
    ham4.setTint(hamburguesa4);
    ham5.setTint(hamburguesa5);
    ham6.setTint(hamburguesa6);
    ham7.setTint(hamburguesa7);
    ham8.setTint(hamburguesa8);
    ham9.setTint(hamburguesa9);
    ham10.setTint(hamburguesa10);
    ham11.setTint(hamburguesa11);
    ham12.setTint(hamburguesa12);
    ham13.setTint(hamburguesa13);
    ham14.setTint(hamburguesa14);
    ham15.setTint(hamburguesa15);
    lentes.alpha = 0.5;
    lentes.disableInteractive();
    
    noPila1.alpha = 0.5
    noPila2.alpha = 0.5
    noPila3.alpha = 0.5
    siPila1.alpha = 0.5
    siPila2.alpha = 0.5
    siPila3.alpha = 0.5
    }else { 
    ham1.setTint(hamburguesa1);
    ham2.setTint(hamburguesa2);
    ham3.setTint(hamburguesa3);
    ham4.setTint(hamburguesa4);
    ham5.setTint(hamburguesa5);
    ham6.setTint(hamburguesa6);
    ham7.setTint(hamburguesa7);
    ham8.setTint(hamburguesa8);
    ham9.setTint(hamburguesa9);
    ham10.setTint(hamburguesa10);
    ham11.setTint(hamburguesa11);
    ham12.setTint(hamburguesa12);
    ham13.setTint(hamburguesa13);
    ham14.setTint(hamburguesa14);
    ham15.setTint(hamburguesa15);
    ham16.setTint(hamburguesa16);
    ham17.setTint(hamburguesa17);
    ham18.setTint(hamburguesa18);
    lentes.alpha = 0.5;
    lentes.disableInteractive();
    
    noPila1.alpha = 0.5
    noPila2.alpha = 0.5
    noPila3.alpha = 0.5
    siPila1.alpha = 0.5
    siPila2.alpha = 0.5
    siPila3.alpha = 0.5

    
    }
   }

}}

function agarrarmala(bob, malarda){
    cambioHsonido = this.sound.add("cambiohamburguesa10" , {loop: false});
    if (efsonido === true){
    cambioHsonido.play();
    }
    target.x = jugador.x;
    target.y = jugador.y;
    malarda.disableBody(true,true);
    score += 100;
    scoreText.setText(score);
    cantMochila.setText(mochila);
    ganar += 1;
    mochila--;
    contadorMalas--;
    if(nivel >2){
        tiempoInicial+=5;
    }

}

function agarrarbuena(bob, buena){
    cambioHsonido = this.sound.add("cambiohamburguesa10" , {loop: false});
    if (efsonido === true){
    cambioHsonido.play();
    }
    target.x = jugador.x;
    target.y = jugador.y;
    buena.disableBody(true,true);
    score -= 50;
    scoreText.setText(score);
    cantMochila.setText(mochila);
    perder += 1;
    mochila--;
    contadorBuenas--;
    
}

function agarrarExtra(bob, extra){    
    target.x = jugador.x;
    target.y = jugador.y;
   // hamExtra.disableBody(true,true);
    //extra.setVisible(false);
    mochila++;
    cont = 1;
}

function tiempoNivel() {
    tiempoInicial = tiempoInicial - 1;
    //textoTiempo.setText();
    if (tiempoInicial == 0){
        vidas = vidas - 1;
        this.scene.pause();
        if (vidas < 1){
        this.scene.launch('perder')
        }
        else{
            this.scene.launch('perderA') 
        }
    }
}

function coolDown(){
    tiempoCoolDown--;
    if(tiempoInicial === 23 || tiempoInicial === 16 || tiempoInicial === 9 )
    {
        if(contadorPilas > 0){if (nivel === 2)
        {//lentes.setVisible(true);
        lentes.alpha = 1
        lentes.setInteractive();
        noPila1.alpha = 1
        noPila2.alpha = 1
        noPila3.alpha = 1
        siPila1.alpha = 1
        siPila2.alpha = 1
        siPila3.alpha = 1
        contador= 1;
        if(contadorPilas>=0 && contadorPilas<3)
        {if(pilaCreada === false)
        {randomX = Phaser.Math.FloatBetween(427, 854);
        randomY = Phaser.Math.FloatBetween(400, 700);
        pila = this.add.image(randomX, randomY, 'PUPila').setScale(0.5).setInteractive({ cursor: 'pointer' })
        pilaCreada = true;
        }}
        pila.on ('pointerdown', () =>{
            pila.destroy();
            
            if(contadorPilas>=0 && contadorPilas<=3 && pilaCreada === true)
            {contadorPilas++;
                pilaCreada= false;}
            pilaCreada= false;
            

        }
         );
    
    }else{if(nivel === 3){
            //lentes.setVisible(true);
        lentes.alpha = 1
        lentes.setInteractive();
        noPila1.alpha = 1
        noPila2.alpha = 1
        noPila3.alpha = 1
        siPila1.alpha = 1
        siPila2.alpha = 1
        siPila3.alpha = 1
        contador= 1;
        if(contadorPilas>=0 && contadorPilas<3)
            {if(pilaCreada === false)
            {randomX = Phaser.Math.FloatBetween(427, 854);
            randomY = Phaser.Math.FloatBetween(400, 700);
            pila = this.add.image(randomX, randomY, 'PUPila').setScale(0.5).setInteractive({ cursor: 'pointer' })
            pilaCreada = true;
            }}
            pila.on ('pointerdown', () =>{
                pila.destroy();
                
                if(contadorPilas>=0 && contadorPilas<=3 && pilaCreada === true)
                {contadorPilas++;
                    pilaCreada= false;}
                pilaCreada= false;
                

            }
             );
        }else{ if (nivel === 4){
            //lentes.setVisible(true);
            lentes.alpha = 1
            lentes.setInteractive();
            noPila1.alpha = 1
            noPila2.alpha = 1
            noPila3.alpha = 1
            siPila1.alpha = 1
            siPila2.alpha = 1
            siPila3.alpha = 1
            contador= 1;
            if(contadorPilas>=0 && contadorPilas<3)
            {if(pilaCreada === false)
            {randomX = Phaser.Math.FloatBetween(427, 854);
            randomY = Phaser.Math.FloatBetween(400, 700);
            pila = this.add.image(randomX, randomY, 'PUPila').setScale(0.5).setInteractive({ cursor: 'pointer' })
            pilaCreada = true;
            }}
            pila.on ('pointerdown', () =>{
                pila.destroy();
                
                if(contadorPilas>=0 && contadorPilas<=3 && pilaCreada === true)
                {contadorPilas++;
                    pilaCreada= false;}
                pilaCreada= false;
                

            }
             );
        }else { if (nivel === 5){
            //lentes.setVisible(true);
                lentes.alpha = 1
                lentes.setInteractive();
                noPila1.alpha = 1
                noPila2.alpha = 1
                noPila3.alpha = 1
                siPila1.alpha = 1
                siPila2.alpha = 1
                siPila3.alpha = 1
            contador= 1;
            if(contadorPilas>=0 && contadorPilas<3)
            {if(pilaCreada === false)
            {randomX = Phaser.Math.FloatBetween(427, 854);
            randomY = Phaser.Math.FloatBetween(400, 700);
            pila = this.add.image(randomX, randomY, 'PUPila').setScale(0.5).setInteractive({ cursor: 'pointer' })
            pilaCreada = true;
            }}
            pila.on ('pointerdown', () =>{
                pila.destroy();
                
                if(contadorPilas>=0 && contadorPilas<=3 && pilaCreada === true)
                {contadorPilas++;
                    pilaCreada= false;}
                pilaCreada= false;
                

            }
             );
        }}}}
    }}
    if (tiempoCoolDown === 0){
        tiempoCoolDown = 10;
    } 
    
}