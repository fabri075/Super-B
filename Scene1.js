class Scene1 extends Phaser.Scene {
    constructor() {
      super('logo');
    }

    preload ()
    {
      // Cargamos los assets
      
      // Scene1
      this.load.image('logo', 'assets/Logo.png');
      
      this.load.image('barandaEscalera' , 'assets/barandaescalera.png ');
      this.load.image('bobFrenteReposo' , 'assets/BobFrenteReposo.png ');
     // this.load.image('escalera' , 'assets/escalera.png ');
      //this.load.image('escenario' , 'assets/escenario.png ');
      this.load.image('lentes' , 'assets/Lentes2.png ');
      this.load.image('lenteshud' , 'assets/uiGafas.png ');
      this.load.image("transparencia", "assets/Transparencia.png");

      //carga de assets de nenes que van a la izquierda
      this.load.image('nIz1' , 'assets/nIz1.png ');
      this.load.image('nIz2' , 'assets/nIz2.png ');
      this.load.image('nIz3' , 'assets/nIz3.png ');
      this.load.image('nIz4' , 'assets/nIz4.png ');
      this.load.image('nIz5' , 'assets/nIz5.png ');
      this.load.image('nIz6' , 'assets/nIz6.png ');

      //carga de assets de nenes que van al medio
      this.load.image('nMd1' , 'assets/nMd1.png ');
      this.load.image('nMd2' , 'assets/nMd2.png ');
      this.load.image('nMd3' , 'assets/nMd3.png ');
      this.load.image('nMd4' , 'assets/nMd4.png ');
      this.load.image('nMd5' , 'assets/nMd5.png ');
      this.load.image('nMd6' , 'assets/nMd6.png ');

      //carga de assets de nenes que van a la derecha
      this.load.image('nDr1' , 'assets/nDr1.png ');
      this.load.image('nDr2' , 'assets/nDr2.png ');
      this.load.image('nDr3' , 'assets/nDr3.png ');
      this.load.image('nDr4' , 'assets/nDr4.png ');
      this.load.image('nDr5' , 'assets/nDr5.png ');
      this.load.image('nDr6' , 'assets/nDr6.png ');



      // Fondo escenario
      this.load.image('fondo2', 'assets/fondo.jpg');
      this.load.image('casita', 'assets/casita.png');
      this.load.image('casitaFondo', 'assets/casitaFondo.png');
      this.load.image('hambCocina', 'assets/hambCocina.png');

      //HUD
      this.load.image('uiCont', 'assets/uiCont.png');
      this.load.image('configMenuJuego' , 'assets/configmenu.png ');
      this.load.image('cora0', 'assets/cora0.png');
      this.load.image('cora1', 'assets/cora1.png');
      this.load.image('cora2', 'assets/cora2.png');
      this.load.image('cora3', 'assets/cora3.png');

      //HUD pilas
      this.load.image('NoPila', 'assets/pilas1.png');
      this.load.image('SiPila', 'assets/pilas2.png');
      this.load.image('PUPila', 'assets/PUPilas.png');
      
      
      // Scene2
      this.load.image('menu', 'assets/Menu.png');
      this.load.image('botonNuevoJuego' , 'assets/btn-nuevojuego1.png ');
      this.load.image('botonInfo' , 'assets/btn-info1.png ');
      this.load.image('botonCreditos' , 'assets/btn-creditos1.png ');
      this.load.image('botonsalirDelJuego' , 'assets/btn-salir1.png ');
      this.load.image('botonNuevoJuego2' , 'assets/btn-nuevojuego2.png ');
      this.load.image('botonInfo2' , 'assets/btn-info2.png ');
      this.load.image('botonCreditos2' , 'assets/btn-creditos2.png ');
      this.load.image('botonsalirDelJuego2' , 'assets/btn-salir2.png ');
      
  
      // cargar sonidos
      this.load.audio("musicagame" , "assets/musicaysonidos/Musicajuego.mp3");
      this.load.audio("botonsonido" , "assets/musicaysonidos/BotonSonido.mp3");
      this.load.audio("cambiohamburguesa10" , "assets/musicaysonidos/cambioH.mp3");
      this.load.audio("musicamenu" , "assets/musicaysonidos/MusicaMenu.mp3");
      this.load.audio("ganarsonido" , "assets/musicaysonidos/Ganar1.mp3");
      this.load.audio("perdersonido", "assets/musicaysonidos/Vomito.mp3");
      this.load.audio("cinematica", "assets/musicaysonidos/Cinematica.mp3");
      this.load.audio("pasarhoja", "assets/musicaysonidos/Pageskip.mp3");
      this.load.audio("musicarapida", "assets/musicaysonidos/Musicajuego2.mp3")
      
    this.load.image("musicaSI", "assets/botonPausaMusica1.png");
    this.load.image("musicaNO", "assets/botonPausaMusica2.png");
    this.load.image("sonidoSI", "assets/botonPausaSonido1.png");
    this.load.image("sonidoNO", "assets/botonPausaSonido2.png");

    //TUTORIALES IDIOMAS ALTERNATIVOS
    this.load.image('tuto1BR', 'assets/Tutorial-1BR.png');
    this.load.image('tuto2BR', 'assets/Tutorial-2BR.png');
    this.load.image('tuto3BR', 'assets/Tutorial-3BR.png');
    this.load.image('tuto4BR', 'assets/Tutorial-4BR.png');

    this.load.image('tuto1EN', 'assets/Tutorial-1EN.png');
    this.load.image('tuto2EN', 'assets/Tutorial-2EN.png');
    this.load.image('tuto3EN', 'assets/Tutorial-3EN.png');
    this.load.image('tuto4EN', 'assets/Tutorial-4EN.png');

    this.load.image('tutorialBR', 'assets/PreguntatutoBR.png');
    this.load.image('tutorialEN', 'assets/PreguntatutoEN.png');
  
      
           
           
        // Personaje Bob
      this.load.spritesheet('BobAtras', 'assets/BobAtrasSS.png', { frameWidth: 180, frameHeight: 275 }); 
      this.load.spritesheet('BobDerecha', 'assets/BobDerechaSS.png', { frameWidth: 155, frameHeight: 255 });
      this.load.spritesheet('BobFrente', 'assets/BobFrenteSS.png', { frameWidth: 180, frameHeight: 275 });
      this.load.spritesheet('BobIzquierda', 'assets/BobIzquierdaSS.png', { frameWidth: 150, frameHeight: 255 });
      this.load.spritesheet('BobRecoge', 'assets/Bobrecogiendo.png', { frameWidth: 150, frameHeight: 255 });
      this.load.image('bobFrenteLentes' , 'assets/BobFrenteLentes.png ');

      //Mozos
      this.load.spritesheet('mozod', 'assets/mozoderecha.png', { frameWidth: 240, frameHeight: 320 });
      this.load.spritesheet('mozoi', 'assets/mozoizquierda.png', { frameWidth: 244, frameHeight: 317 });
      
      //Coliders invisibles
      this.load.image('medioInvisible' , 'assets/medioInvisible.png ');
      this.load.image('DerIzqInvisible' , 'assets/DerIzqInvisible.png ');
      this.load.image('cajaInvisible' , 'assets/cajaInvisible.png ');
      this.load.image('barraTransparente' , 'assets/barraTransparente.png ');
      this.load.image('barraTransparenteVertical' , 'assets/barraTransparenteVertical.png ');

      //Objetos de escenario
      this.load.image('mesa' , 'assets/mesa.png ');
      this.load.image('hamb' , 'assets/hamburguesa.png ');
      this.load.image('divisorIzq' , 'assets/divisorIzq.png ');
      this.load.image('divisorDer' , 'assets/divisorDer.png ');
      

      
      this.load.image('creditos' , 'assets/creditos.jpg ');
      this.load.image('creditos2' , 'assets/creditosen.jpg ');
      this.load.image('botonMenuPrincipal1' , 'assets/botonMenuPrincipal1.png ');
      this.load.image('botonMenuPrincipal2' , 'assets/botonMenuPrincipal2.png ');
      this.load.image('menuPausa' , 'assets/fondocartel.png ');
      this.load.image('reanudarPausa' , 'assets/botonReanudar1.png ');
      this.load.image('reanudarPausa2' , 'assets/botonReanudar2.png ');
      this.load.image('botonAyuda1' , 'assets/botonAyuda1.png ');
      this.load.image('botonPausaMusica1' , 'assets/botonPausaMusica1.png ');
      this.load.image('botonPausaSonido1' , 'assets/botonPausaSonido1.png ');
      this.load.image('EstrellaPrendida', 'assets/EstrellaPrendida.png');
      this.load.image('puntos', 'assets/Puntos.png');
      
      
      
      this.load.image('interfaz', 'assets/interfaz.jpg');
      
      
      //ganaste o perdiste
      this.load.image('tituloGanaste' , 'assets/nivelsuperado1.png ');
      this.load.image('tituloGanastefinal' , 'assets/Ganaste.png ');
      this.load.image('tituloPausa' , 'assets/menu_pausa-2.png');
      this.load.image('fondoPausa' , 'assets/fondomenus.png');
      this.load.image('botonReiniciar1' , 'assets/boton1.png ');
      this.load.image('botonReiniciar2' , 'assets/boton2.png ');
      
      //no reutilizables
      this.load.image('tituloNivelPerdido' , 'assets/Nivelperdiste.png ');
      this.load.image('botonReintentar1' , 'assets/boton1.png ');
      this.load.image('EstrellaApagada' , 'assets/EstrellaApagada.png')
      this.load.image('botonReintentar2' , 'assets/boton2.png ');
      this.load.image('parte1' , 'assets/cinematica-1.jpg ');
      this.load.image('parte2' , 'assets/Cinematica-2.jpg ');
      this.load.image('parte3' , 'assets/Cinematica-3.jpg ');
      this.load.image('informacion', 'assets/Pantallainfo.jpg');
      this.load.image('informacion2', 'assets/PantallainfoEN.jpg');
      this.load.image('informacion3', 'assets/Pantallainfopt.jpg');
      this.load.image('tutorial', 'assets/Preguntatuto.png');
      this.load.image('tutosi', 'assets/Situto.png');
      this.load.image('tutono', 'assets/Notuto.png');
      this.load.image('pantallatuto', 'assets/Pantallatuto.jpg');
      this.load.image('atras1', 'assets/atras1.png');
      this.load.image('atras2', 'assets/atras2.png');
      this.load.image('avanzar1', 'assets/avanzar1.png');
      this.load.image('avanzar2', 'assets/avanzar2.png');
      this.load.image('tuto1', 'assets/Tutorial-1.png');
      this.load.image('tuto2', 'assets/Tutorial-2.png');
      this.load.image('tuto3', 'assets/Tutorial-3.png');
      this.load.image('tuto4', 'assets/Tutorial-4.png');
      this.load.spritesheet('logounraf', 'assets/logounraf.png', { frameWidth: 400, frameHeight: 220 })

    //imagen de idioma
    this.load.image("españolsi" , "assets/Idiomas/ArgentinaColor.png");
    this.load.image("españolno" , "assets/Idiomas/ArgentinaNoColor.png");

    this.load.image("inglessi" , "assets/Idiomas/EEUUColor.png");   
    this.load.image("inglesno" , "assets/Idiomas/EEUUNoColor.png");  

    this.load.image("portuguessi" , "assets/Idiomas/BrasilColor.png");
    this.load.image("portuguesno" , "assets/Idiomas/BrasilNoColor.png");

    //*final victoria
    this.load.image("Fondovictoria", "assets/FondoVictoria.jpg");
    this.load.image("Cartelvictoria", "assets/Cartelvictoria.png");
    this.load.image("CartelvictoriaEN", "assets/CartelvictoriaEN.png");
    this.load.image("CartelvictoriaBR", "assets/CartelvictoriaBR.png");
    this.load.image("Fondoperdiste", "assets/Fondoperdiste.jpg");
    this.load.image("Cartelperdiste", "assets/Cartelperdiste.png");
    this.load.image("CartelperdisteEN", "assets/CartelperdisteEN.png");
    this.load.image("CartelperdisteBR", "assets/CartelperdisteBR.png");

   
    }

    create() {
 
      var logo = this.add.sprite(550, 280, 'logounraf').setScale(4)
      this.anims.create({
        key: 'intro',
        frames: this.anims.generateFrameNumbers('logounraf'),
        frameRate: 15,
      }); 
      logo.anims.play('intro', true);
      
      
      // () =>
      // funciones flecha
      
      logo.setInteractive()
      logo.on('pointerdown', () => {  
                                      this.scene.start('menu');
                                    } );

      // Funcion FLECHA
      // (param1, param2, …, paramN) => { sentencias }
      // (param1, param2, …, paramN) => expresion
      // Equivalente a: () => { return expresion; }
    }
}