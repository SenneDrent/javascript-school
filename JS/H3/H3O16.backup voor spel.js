
/*  **********************************************************
    **                 BEGIN klasse Auto                    **
    ********************************************************** */


class Auto {
  constructor(g) {
    this.schaal = 0.75
    this.x = g * (1 - this.schaal)/2;
    this.y = g * (1 - this.schaal)/2;
    this.l = g * this.schaal;
    this.kleur = 'green';
  }
  
  teken() {
      push();
      noStroke();
      translate(this.x,this.y);
      fill(this.kleur);
      rect(0,0,this.l,this.l);
      fill(60);
      rect(this.l/5,0,this.l/5,this.l/10);
      rect(this.l*3/5,0,this.l/5,this.l/10);
      rect(this.l/5,this.l-this.l/10,this.l/5,this.l/10);
      rect(this.l*3/5,this.l-this.l/10,this.l/5,this.l/10);
      fill(255);
      textSize(10);
      text(this.x+' '+this.y,0,0,this.l,this.l);
      pop();
  }

}
/*  **********************************************************
    **      EINDE klasse Auto         BEGIN klasse Cel      **
    ********************************************************** */


class Cel {
  constructor(x,y,l) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.kleur = 0;
    this.tekstKleur = 127;
  }
  
  wordtGeraakt(s) {
    if (s.x + s.l > this.x && s.x < this.x + this.l && s.y + s.l > this.y && s.y < this.y + this.l) {
      this.tekstKleur = 'orange';
      if (this.kleur == 0) {
        return true;
      }
    }
    else {
      this.tekstKleur = 127;
    }
    return false;
  }
  
  teken() {
    push();
    fill(this.kleur);
    noStroke();
    rect(this.x,this.y,this.l,this.l);
    fill(this.tekstKleur);
    text(this.x+' '+this.y,this.x,this.y,this.l,this.l);
    pop();
  }
}

/*  **********************************************************
    **      EINDE klasse Cel      BEGIN hoofdprogramma      **
    ********************************************************** */


var myCanvas;
var rooster = [];
var patroon = [1,1,0,0,0,0,0,
               0,1,0,1,1,1,0,
               0,1,1,1,0,1,0,
               0,0,0,0,0,1,1];
               
var grootte = 100;

function setup() {
  // initialisatie
  
  myCanvas = createCanvas(700,400);
  myCanvas.parent('processing');
  textFont("Monospace");
  textSize(20); 
  textAlign(CENTER,CENTER);
  fill('black');
  speler = new Auto(grootte);
  for (var rij = 0; rij < myCanvas.height / grootte; rij++) {
    for (var kolom = 0; kolom < myCanvas.width / grootte; kolom++) {
      rooster.push(new Cel(kolom*grootte,rij*grootte,grootte));
    }
  }
  for (var c = 0; c < rooster.length; c++) {
    if (patroon[c] == 1) {
      rooster[c].kleur = 255;
    }
  }
  for (var r = 0; r < rooster.length; r++) {
    rooster[r].teken();
  }  
  speler.teken();  
}

function touchMoved() {
  speler.x = constrain(touches[0].x - speler.l/2,0, myCanvas.width - speler.l);
  speler.y = constrain(touches[0].y - speler.l/2,0, myCanvas.height - speler.l);
  for (var r = 0; r < rooster.length; r++) {
    if (rooster[r].wordtGeraakt(speler)) {
      speler.kleur = 'red';
    }
    rooster[r].teken();
  }  
  speler.teken();
}


function touchStarted() {

  return false;
}

/*  **********************************************************
    **               EINDE hoofdprogramma                   **
    ********************************************************** */