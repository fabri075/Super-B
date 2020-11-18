class Scene10 extends Phaser.Scene {
    constructor() {
      super('tutorial');
    }
    
    create(){if (idioma === 1){
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
        })}
    
        if (idioma === 3){
            
        this.add.image(635, 350, 'parte3').setScale(0.68)
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        tutoBR = this.add.image(650, 350, 'tutorialBR');
        situto = this.add.image(540, 430, 'tutosi').setScale(1.1).setInteractive({ cursor: 'pointer' });
        notuto = this.add.image(760, 430, 'tutono').setScale(1.1).setInteractive({ cursor: 'pointer' });
        
        situto.on('pointerdown', () => {
            tutorialBR();
            this.add.image(635, 350, 'pantallatutoBR').setScale(0.68);
            tuto1BR = this.add.image(830, 350, 'tuto1BR').setScale(0.8);
            avanzar1 = this.add.image(960, 650, 'avanzar1').setScale(0.7).setInteractive({ cursor: 'pointer' });
            avanzar1.on('pointerdown', () => {
                if (tuto1BR != null){
                atras1 = this.add.image(700, 650, 'atras1').setScale(0.7).setInteractive({ cursor: 'pointer' });
                tuto1BR.destroy();
                tuto1BR = null;    
                tuto2BR = this.add.image(830, 350, 'tuto2BR').setScale(0.8);
                }
                else {if(tuto2BR != null){
                    
                    tuto2BR.destroy();
                    tuto2BR = null; 
                    tuto3BR = this.add.image(830, 350, 'tuto3BR').setScale(0.8);    
                }
                else {if(tuto3BR != null){
                    tuto3BR.destroy();
                    tuto3BR = null; 
                    tuto4BR = this.add.image(830, 350, 'tuto4BR').setScale(0.8);  
                }
                else{
                    this.scene.start('nivel1');
                }
            }
            }
                atras1.on('pointerdown', () => {
                    if(tuto2BR != null){
                        atras1.destroy();
                        atras1 = null;
                        tuto2BR.destroy();
                        tuto2BR = null; 
                        tuto1BR = this.add.image(830, 350, 'tuto1BR').setScale(0.8);  
                    }
                    else {if(tuto3BR != null){
                        tuto3BR.destroy();
                        tuto3BR = null; 
                        tuto2BR = this.add.image(830, 350, 'tuto2BR').setScale(0.8); 
                    }
                    else {if(tuto4BR != null){
                        tuto4BR.destroy();
                        tuto4BR = null; 
                        tuto3BR = this.add.image(830, 350, 'tuto3BR').setScale(0.8);  
                    }}
                }      
                })
            })
        })
        notuto.on('pointerdown', () => {
            tutorialBR();
            this.scene.start('nivel1');
        })
        }
        if (idioma === 2){
            
            this.add.image(635, 350, 'parte3').setScale(0.68)
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            tutoEN = this.add.image(650, 350, 'tutorialEN');
            situto = this.add.image(540, 430, 'tutosi').setScale(1.1).setInteractive({ cursor: 'pointer' });
            notuto = this.add.image(760, 430, 'tutono').setScale(1.1).setInteractive({ cursor: 'pointer' });
            
            situto.on('pointerdown', () => {
                tutorialEN();
                this.add.image(635, 350, 'pantallatutoEN').setScale(0.68);
                tuto1EN = this.add.image(830, 350, 'tuto1EN').setScale(0.8);
                avanzar1 = this.add.image(960, 650, 'avanzar1').setScale(0.7).setInteractive({ cursor: 'pointer' });
                avanzar1.on('pointerdown', () => {
                    if (tuto1EN != null){
                    atras1 = this.add.image(700, 650, 'atras1').setScale(0.7).setInteractive({ cursor: 'pointer' });
                    tuto1EN.destroy();
                    tuto1EN = null;    
                    tuto2EN = this.add.image(830, 350, 'tuto2EN').setScale(0.8);
                    }
                    else {if(tuto2EN != null){
                        
                        tuto2EN.destroy();
                        tuto2EN = null; 
                        tuto3EN = this.add.image(830, 350, 'tuto3EN').setScale(0.8);    
                    }
                    else {if(tuto3EN != null){
                        tuto3EN.destroy();
                        tuto3EN = null; 
                        tuto4EN = this.add.image(830, 350, 'tuto4EN').setScale(0.8);  
                    }
                    else{
                        this.scene.start('nivel1');
                    }
                }
                }
                    atras1.on('pointerdown', () => {
                        if(tuto2EN != null){
                            atras1.destroy();
                            atras1 = null;
                            tuto2EN.destroy();
                            tuto2EN = null; 
                            tuto1EN = this.add.image(830, 350, 'tuto1EN').setScale(0.8);  
                        }
                        else {if(tuto3EN != null){
                            tuto3EN.destroy();
                            tuto3EN = null; 
                            tuto2EN = this.add.image(830, 350, 'tuto2EN').setScale(0.8); 
                        }
                        else {if(tuto4EN != null){
                            tuto4EN.destroy();
                            tuto4EN = null; 
                            tuto3EN = this.add.image(830, 350, 'tuto3EN').setScale(0.8);  
                        }}
                    }      
                    })
                })
            })
            notuto.on('pointerdown', () => {
                tutorialEN();
                this.scene.start('nivel1');
            })
            }
        
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
    function tutorialBR(){
        if(efsonido === true){
        BotonSonido.play();
        }
        tutoBR.destroy();
        tutoBR = null;
        situto.destroy();
        situto = null;
        notuto.destroy();
        notuto = null;
    }
    function tutorialEN(){
        if(efsonido === true){
        BotonSonido.play();
        }
        tutoEN.destroy();
        tutoEN = null;
        situto.destroy();
        situto = null;
        notuto.destroy();
        notuto = null;
    }