var situto2;
var notuto2;
class Scene10 extends Phaser.Scene {
    constructor() {
      super('tutorial');
    }
    
    create(){
        if (idioma === 1){
        this.add.image(635, 360, 'parte3').setScale(0.68)
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        tuto = this.add.image(650, 360, 'tutorial');
        situto = this.add.image(540, 430, 'botonChico1').setScale(1.1).setInteractive({ cursor: 'pointer' });
        notuto = this.add.image(760, 430, 'botonChico1').setScale(1.1).setInteractive({ cursor: 'pointer' });
        situto2 = this.add.image(540, 430, 'botonChico2').setScale(1.1)
        notuto2 = this.add.image(760, 430, 'botonChico2').setScale(1.1)
        situto2.setVisible(false);
        notuto2.setVisible(false);
        text = this.add.text(515, 410, " SI", { fontSize: '40px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        text = this.add.text(730, 410, " NO", { fontSize: '40px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})

        situto.on('pointerdown', () => {
            tutorial();
            
            this.add.image(635, 360, 'pantallatuto').setScale(0.68);
            tuto1 = this.add.image(640, 360, 'tuto1').setScale(0.8);
            avanzar1 = this.add.image(960, 650, 'avanzar1').setScale(0.7).setInteractive({ cursor: 'pointer' });
            avanzar2 = this.add.image(960, 650, 'avanzar2').setScale(0.7).setVisible(false)
            avanzar1.on('pointerdown', () => {
                if (tuto1 != null){
                atras1 = this.add.image(275, 650, 'atras1').setScale(0.7).setInteractive({ cursor: 'pointer' });
                atras2 = this.add.image(275, 650, 'atras2').setScale(0.7).setVisible(false);
                tuto1.destroy();
                tuto1 = null;    
                tuto2 = this.add.image(640, 360, 'tuto2').setScale(0.8);
                }
                else {if(tuto2 != null){
                    
                    tuto2.destroy();
                    tuto2 = null; 
                    tuto3 = this.add.image(640, 360, 'tuto3').setScale(0.8);
                    atras1.setVisible(true);    
                }
                else {if(tuto3 != null){
                    tuto3.destroy();
                    tuto3 = null; 
                    tuto4 = this.add.image(640, 360, 'tuto4').setScale(0.8);
                    atras1.setVisible(true);  
                }
                else{
                    this.scene.start('nivel1');
                }
            }
            }
                atras1.on('pointerdown', () => {
                    if(tuto2 != null){
                        atras1.setInteractive(false);
                        atras1.setVisible(false);
                        
                        
                        tuto2.destroy();
                        tuto2 = null; 
                        tuto1 = this.add.image(640, 360, 'tuto1').setScale(0.8);  
                    }
                    else {if(tuto3 != null){
                        tuto3.destroy();
                        tuto3 = null; 
                        tuto2 = this.add.image(640, 360, 'tuto2').setScale(0.8);
                        atras1.setVisible(true); 
                        atras1.setInteractive(true);
                    }
                    else {if(tuto4 != null){
                        tuto4.destroy();
                        tuto4 = null; 
                        tuto3 = this.add.image(640, 360, 'tuto3').setScale(0.8); 
                        atras1.setVisible(true); 
                        atras1.setInteractive(true);
                    }}
                } 
                
                })
                atras1.on('pointerover', function (c) {
                    atras2.setVisible(true)
                  });
                  atras1.on('pointerout', function (c){
                    atras2.setVisible(false)
                });
                
            })
        
        
            avanzar1.on('pointerover', function (c) {
                avanzar2.setVisible(true)
              });
              avanzar1.on('pointerout', function (c){
                avanzar2.setVisible(false)
            });
            

            
        
        
        })
        notuto.on('pointerdown', () => {
            tutorial();
            this.scene.start('nivel1');
        })}
    
        if (idioma === 3){
            
        this.add.image(635, 360, 'parte3').setScale(0.68)
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        tutoBR = this.add.image(650, 360, 'tutorialBR');
        situto = this.add.image(540, 430, 'botonChico1').setScale(1.1).setInteractive({ cursor: 'pointer' });
        notuto = this.add.image(760, 430, 'botonChico1').setScale(1.1).setInteractive({ cursor: 'pointer' });
        situto2 = this.add.image(540, 430, 'botonChico2').setScale(1.1)
        notuto2 = this.add.image(760, 430, 'botonChico2').setScale(1.1)
        situto2.setVisible(false);
        notuto2.setVisible(false);
        text = this.add.text(515, 410, "SIM", { fontSize: '40px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        text = this.add.text(730, 410, "NÃO", { fontSize: '40px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        
        situto.on('pointerdown', () => {
            tutorialBR();
            
            this.add.image(635, 360, 'pantallatuto').setScale(0.68);
            tuto1BR = this.add.image(640, 360, 'tuto1BR').setScale(0.8);
            avanzar1 = this.add.image(960, 650, 'avanzar1').setScale(0.7).setInteractive({ cursor: 'pointer' });
            avanzar2 = this.add.image(960, 650, 'avanzar2').setScale(0.7).setVisible(false)
            avanzar1.on('pointerdown', () => {
                if (tuto1BR != null){
                atras1 = this.add.image(275, 650, 'atras1').setScale(0.7).setInteractive({ cursor: 'pointer' });
                atras2 = this.add.image(275, 650, 'atras2').setScale(0.7).setVisible(false);
                tuto1BR.destroy();
                tuto1BR = null;    
                tuto2BR = this.add.image(640, 360, 'tuto2BR').setScale(0.8);
                }
                else {if(tuto2BR != null){
                    
                    tuto2BR.destroy();
                    tuto2BR = null; 
                    tuto3BR = this.add.image(640, 360, 'tuto3BR').setScale(0.8);    
                }
                else {if(tuto3BR != null){
                    tuto3BR.destroy();
                    tuto3BR = null; 
                    tuto4BR = this.add.image(640, 360, 'tuto4BR').setScale(0.8);  
                }
                else{
                    this.scene.start('nivel1');
                }
            }
            }
                atras1.on('pointerdown', () => {
                    if(tuto2BR != null){
                        atras1.setInteractive(false);
                        atras1.setVisible(false);
                        tuto2BR.destroy();
                        tuto2BR = null; 
                        tuto1BR = this.add.image(640, 360, 'tuto1BR').setScale(0.8);  
                    }
                    else {if(tuto3BR != null){
                        tuto3BR.destroy();
                        tuto3BR = null; 
                        tuto2BR = this.add.image(640, 360, 'tuto2BR').setScale(0.8); 
                        atras1.setVisible(true); 
                        atras1.setInteractive(true);
                    }
                    else {if(tuto4BR != null){
                        tuto4BR.destroy();
                        tuto4BR = null; 
                        tuto3BR = this.add.image(640, 360, 'tuto3BR').setScale(0.8);  
                        atras1.setVisible(true); 
                        atras1.setInteractive(true);
                    }}
                }      
                })
                atras1.on('pointerover', function (c) {
                    atras2.setVisible(true)
                  });
                  atras1.on('pointerout', function (c){
                    atras2.setVisible(false)
                });
            })
            avanzar1.on('pointerover', function (c) {
                avanzar2.setVisible(true)
              });
              avanzar1.on('pointerout', function (c){
                avanzar2.setVisible(false)
            });
        })
        notuto.on('pointerdown', () => {
            tutorialBR();
            this.scene.start('nivel1');
        })
        }
        if (idioma === 2){
            
            this.add.image(635, 360, 'parte3').setScale(0.68)
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            tutoEN = this.add.image(650, 360, 'tutorialEN');
            situto = this.add.image(540, 430, 'botonChico1').setScale(1.1).setInteractive({ cursor: 'pointer' });
            notuto = this.add.image(760, 430, 'botonChico1').setScale(1.1).setInteractive({ cursor: 'pointer' });
            situto2 = this.add.image(540, 430, 'botonChico2').setScale(1.1)
            notuto2 = this.add.image(760, 430, 'botonChico2').setScale(1.1)
            situto2.setVisible(false);
            notuto2.setVisible(false);
            text = this.add.text(515, 410, "YES", { fontSize: '40px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
            text = this.add.text(730, 410, " NO", { fontSize: '40px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
            
            situto.on('pointerdown', () => {
                tutorialEN();
                
                this.add.image(635, 360, 'pantallatuto').setScale(0.68);
                tuto1EN = this.add.image(640, 360, 'tuto1EN').setScale(0.8);
                avanzar1 = this.add.image(960, 650, 'avanzar1').setScale(0.7).setInteractive({ cursor: 'pointer' });
                avanzar2 = this.add.image(960, 650, 'avanzar2').setScale(0.7).setVisible(false)
                avanzar1.on('pointerdown', () => {
                    if (tuto1EN != null){
                    atras1 = this.add.image(275, 650, 'atras1').setScale(0.7).setInteractive({ cursor: 'pointer' });
                    atras2 = this.add.image(275, 650, 'atras2').setScale(0.7).setVisible(false);
                    tuto1EN.destroy();
                    tuto1EN = null;    
                    tuto2EN = this.add.image(640, 360, 'tuto2EN').setScale(0.8);
                    }
                    else {if(tuto2EN != null){
                        
                        tuto2EN.destroy();
                        tuto2EN = null; 
                        tuto3EN = this.add.image(640, 360, 'tuto3EN').setScale(0.8);    
                    }
                    else {if(tuto3EN != null){
                        tuto3EN.destroy();
                        tuto3EN = null; 
                        tuto4EN = this.add.image(640, 360, 'tuto4EN').setScale(0.8);  
                    }
                    else{
                        this.scene.start('nivel1');
                    }
                }
                }
                    atras1.on('pointerdown', () => {
                        if(tuto2EN != null){
                            atras1.setInteractive(false);
                        atras1.setVisible(false);
                            atras2.destroy();
                            atras2 = null;
                            tuto2EN.destroy();
                            tuto2EN = null; 
                            tuto1EN = this.add.image(640, 360, 'tuto1EN').setScale(0.8);  
                        }
                        else {if(tuto3EN != null){
                            tuto3EN.destroy();
                            tuto3EN = null; 
                            tuto2EN = this.add.image(640, 360, 'tuto2EN').setScale(0.8); 
                            atras1.setVisible(true); 
                        atras1.setInteractive(true);
                        }
                        else {if(tuto4EN != null){
                            tuto4EN.destroy();
                            tuto4EN = null; 
                            tuto3EN = this.add.image(640, 360, 'tuto3EN').setScale(0.8); 
                            atras1.setVisible(true); 
                        atras1.setInteractive(true); 
                        }}
                    }      
                    })
                    atras1.on('pointerover', function (c) {
                        atras2.setVisible(true)
                      });
                      atras1.on('pointerout', function (c){
                        atras2.setVisible(false)
                    });
                })
                avanzar1.on('pointerover', function (c) {
                    avanzar2.setVisible(true)
                  });
                  avanzar1.on('pointerout', function (c){
                    avanzar2.setVisible(false)
                });
            })
            notuto.on('pointerdown', () => {
                tutorialEN();
                this.scene.start('nivel1');
            })
            }
            

            situto.on('pointerover', function (a) {
                situto2.setVisible(true)
           });
           situto.on('pointerout', function (a){
               situto2.setVisible(false)
           });
            notuto.on('pointerover', function (b) {
                notuto2.setVisible(true)
           });
           notuto.on('pointerout', function (b){
               notuto2.setVisible(false)
           });
            
           
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