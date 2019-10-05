var spel = {
  fases: new Array('startscherm','uitleg','begin','actief','gehaald','eindscherm'),
  level: null,
  spelType: null,
  score: null,
  achtergrond: null,
  margeCanvas: 20,
  tegelLijst: [],
  lengteSpeelveld: null,
  lengteTegel: null,
  
  O30: new Array(0,1,1,2,2,0,1,1,0), // eenvoudig
  O31: new Array(1,1,1,3,3,2,0,0,0), // lastiger
  O32: new Array(2,2,2,1,1,1,4,4,0), // lastiger
  O33: new Array(1,3,3,2,1,1,2,2,1), // eenvoudig
  O34: new Array(0,0,0,2,3,2,1,1,1), // eenvoudig
  O3: null,
  
  O40: new Array(1,1,2,3,4,1,1,4,2,3,1,2,2,3,0,0),
  O41: new Array(5,0,0,2,1,1,1,1,3,1,3,1,1,3,1,3),
  O4: null,
  
  opdracht: null,
  
  initialisatie(t) {
    this.spelType = t;
    this.O3 = new Array(this.O30,this.O31,this.O32,this.O33,this.O34);
    this.O4 = new Array(this.O40,this.O41);    
    this.bepaalLengteTegel();
    this.maakTegelLijst();
    this.nieuw(this.spelType);
    this.toestand = 'startscherm';    
  },
  
  nieuw(t) {
    this.level = 0;
    this.score = 0;
    this.volgendLevel();
  },
  
  resetSpeelveld() {
    for (t=0;t<this.spelType*this.spelType;t++) {
      this.tegelLijst[t].Ngeraakt=0;
    }
  },
  
  volgendLevel() {
    this.level++;
    this.resetSpeelveld();
    switch (this.spelType) {
      case 3:
         this.opdracht = this.O3[floor(random(0,this.O3.length))];
         break; 
      case 4:
         this.opdracht = this.O4[floor(random(0,this.O4.length))];
         break;        
      default:
        this.opdracht = this.O3[floor(random(0,this.O3.length))];
   }
  },

  bepaalLengteTegel() {
    this.lengteSpeelveld=canvas.height-2*this.margeCanvas;
    this.lengteTegel=this.lengteSpeelveld/this.spelType;
  },
  
  maakTegelLijst() {
    for (rij=0;rij<this.spelType;rij++) {
      for (kol=0;kol<this.spelType;kol++) {
        this.tegelLijst.push(new Tegel(kol*this.lengteTegel,rij*this.lengteTegel,this.lengteTegel));
      }
    }
  },
  
  tekenSpeelveld() {
    push();
    translate(this.margeCanvas,this.margeCanvas);
    for (t=0;t<this.spelType*this.spelType;t++) {
      this.tegelLijst[t].teken();
    }
    pop();
  },
  
  tekenOpdracht() {
    push();
    translate(canvas.width-this.margeCanvas-this.lengteSpeelveld,this.margeCanvas);
    for (t=0;t<this.spelType*this.spelType;t++) {
      this.tegelLijst[t].tekenVB(this.opdracht[t]);
    }
    pop();
  },
  
  muisInSpeelveld() {
    if (mouseX>this.margeCanvas && mouseX<this.margeCanvas+this.lengteSpeelveld && mouseY>this.margeCanvas && mouseY<this.margeCanvas+this.lengteSpeelveld) {
      return true;
    }
    else {
      return false;
    }
  },

  controleerMuis() {
    for (t=0;t<this.spelType*this.spelType;t++) {
      if (this.tegelLijst[t].muisOver(mouseX-this.margeCanvas,mouseY-this.margeCanvas)) {
        if (!this.tegelLijst[t].actief) {
          this.tegelLijst[t].actief=true;
          this.tegelLijst[t].Ngeraakt++;
        }
      }
      else
      {
        this.tegelLijst[t].actief=false;
      }
    }
  },
  
  opdrachtGehaald() {
      var gehaald = true;
      for (t=0;t<this.spelType*this.spelType;t++) {
          if (this.opdracht[t]!=this.tegelLijst[t].Ngeraakt)
          {
              gehaald = false;
          }
      }
      return gehaald;
  },
  
  opdrachtOnhaalbaar() {
      var onhaalbaar = false;
      for (t=0;t<this.spelType*this.spelType;t++) {
          if (this.opdracht[t]<this.tegelLijst[t].Ngeraakt)
          {
              onhaalbaar = true;
              this.tegelLijst[t].Ngeraakt=6;
          }
      }
      return onhaalbaar;
  },

  tekenScorebord() {
    push();
    translate(this.margeCanvas*2+this.lengteSpeelveld,this.margeCanvas);
    fill('white');
    rect(0,0,width-2*this.lengteSpeelveld-4*this.margeCanvas,height-2*this.margeCanvas);
    fill('black');
    var tekstMarge = 10;
    var letterGrootte = 28;
    textSize(letterGrootte);
    textLeading(1.2*letterGrootte);
    textAlign(LEFT, TOP);
    var tekst = "level: "+this.level+"\nscore: "+this.score;
    text(tekst,0+tekstMarge,0+tekstMarge,width-2*this.lengteSpeelveld-4*this.margeCanvas-2*tekstMarge,height-2*this.margeCanvas-2*tekstMarge);
    pop();
  }
}