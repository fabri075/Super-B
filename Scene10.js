class Scene10 extends Phaser.Scene {
    constructor() {
      super('tutorial');
    }
    
    create(){
    this.add.image(635, 350, 'parte3').setScale(0.68)
    BotonSonido = this.sound.add("botonsonido" , {loop: false});
    tuto = this.add.image(650, 350, 'tutorial');
    situto = this.add.image(540, 430, 'tutosi').setScale(1.1).setInteractive({ cursor: 'pointer' });
    notuto = this.add.image(760, 430, 'tutono').setScale(1.1).setInteractive({ cursor: 'pointer' });
    
    situto.on('pointerdown', () => {
        tutorial();
        this.add.image(635, 350, 'pantallatuto').setScale(0.68);
        tuto1 = this.add.image(830, 350, 'tuto1').setScale(0.8);
        avanzar1 = this.add.image(960, 650, 'avanzar1').setScale(0.7).setInteractive({ cursor: 'pointer' });
        avanzar1.on('pointerdown', () => {
            if (tuto1 != null){
            atras1 = this.add.image(700, 650, 'atras1').setScale(0.7).setInteractive({ cursor: 'pointer' });
            tuto1.destroy();
            tuto1 = null;    
            tuto2 = this.add.image(830, 350, 'tuto2').setScale(0.8);
            }
            else {if(tuto2 != null){
                
                tuto2.destroy();
                tuto2 = null; 
                tuto3 = this.add.image(830, 350, 'tuto3').setScale(0.8);    
            }
            else {if(tuto3 != null){
                tuto3.destroy();
                tuto3 = null; 
                tuto4 = this.add.image(830, 350, 'tuto4').setScale(0.8);  
            }
            else{
                this.scene.start('nivel1');
            }
        }
        }
            atras1.on('pointerdown', () => {
                if(tuto2 != null){
                    atras1.destroy();
                    atras1 = null;
                    tuto2.destroy();
                    tuto2 = null; 
                    tuto1 = this.add.image(830, 350, 'tuto1').setScale(0.8);  
                }
                else {if(tuto3 != null){
                    tuto3.destroy();
                    tuto3 = null; 
                    tuto2 = this.add.image(830, 350, 'tuto2').setScale(0.8); 
                }
                else {if(tuto4 != null){
                    tuto4.destroy();
                    tuto4 = null; 
                    tuto3 = this.add.image(830, 350, 'tuto3').setScale(0.8);  
                }}
            }      
            })
        })
    })
    notuto.on('pointerdown', () => {
        tutorial();
        this.scene.start('nivel1');
    })

    
    }
}
function tutorial(){
    if(efsonido === true){
    BotonSonido.play();
    }
    tuto.destroy();
    tuto = null;
    situto.destroy();
    situto = null;
    notuto.destroy();
    notuto = null;
}