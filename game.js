var config = {
    type: Phaser.AUTO,
     scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        
        }

    },
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene6a,  Scene7, Scene7a, Scene8, Scene9, Scene10, Scene11]
 
    
};


var game = new Phaser.Game(config);
var levelText;
var cont = 1;
var suelo;
var nivel = 1;
var tiempoInicial = 0;
var timedEvent;
var  hamburgesas;
var hamburguesa1;
var hamburguesa2;
var hamburguesa3;
var hamburguesa4;
var hamburguesa5;
var hamburguesa6;
var hamburguesa7;
var hamburguesa8;
var hamburguesa9;
var hamburguesa10;
var hamburguesa11;
var hamburguesa12;
var hamburguesa13;
var hamburguesa14;
var hamburguesa15;
var hamburguesa16;
var hamburguesa17;
var hamburguesa18;
var tuto;
var tutoBR;
var tutoEN;
var notuto;
var situto;
var textotuto;
var text;

//variables tutorial
var tuto1;
var tuto2;
var tuto3;
var tuto4;
var tuto1BR;
var tuto2BR;
var tuto3BR;
var tuto4BR;
var tuto1EN;
var tuto2EN;
var tuto3EN;
var tuto4EN;

var atras1;
var atras2;
var avanzar1;
var avanzar2;
var vidas = 3;
var corazon;
var puntuacion;
var juegoTerminado;
var jugador;
var hamburguesa;
var mozos;
var score = 0;
var puntajeMasAlto = 0;
var scoreText;
var tiempoText;
var cooldown;
var tiempoCoolDown = 10;
var cantMochila;
var scorefinaltext;
var ganar;
var perder;
var arte1;
var arte2;
var arte3;
var hamExtra;
var map;
var bateria;
var lentes;
var gafas;
var lentesBob;
//variables para sonidos
var Musicagame;
var Musicamenu;
var Musicacinematica;
var BotonSonido;
var cambioHsonido;
var ganarsonido;
var perdersonido;
var sonando;
var hoja;


//hamburguesas
var colores = [0x800a0c, 0x1998ff];
var ham1;
var ham2;
var ham3;
var ham4;
var ham5;
var ham6;
var ham7;
var ham8;
var ham9;   
var ham10;
var ham11;
var ham12;
var ham13;
var ham14;
var ham15;
var ham16;
var ham17;
var ham18;

var contadorBuenas = 0;
var contadorMalas = 0;
var mochila =  0;

var contadorPilas = 1;
var noPila1;
var noPila2;
var noPila3;
var siPila1;
var siPila2;
var siPila3;
var contador = 1;

var randomX;
var randomY;
var pila;
var pilaCreada = false;

var efsonido = true;
var MusicNivel = true;
var Musicarapida;
var Transparencia
var Cartelvictoria;
var Fondovictoria;
var Cartelperdiste;
var Fondoperdiste;
var idioma = 1;