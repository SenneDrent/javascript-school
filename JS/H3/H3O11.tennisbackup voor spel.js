// maak spel met racket en bal. Racket mag speler hier wel zijn vind ik



/*  **********************************************************
    **                BEGIN klasse Racket                   **
    ********************************************************** */


class Racket {
  constructor() {
    this.breedte = 150;
    this.hoogte = 20;
    this.snelheid = 30;
    this.x = canvas.width / 2 - 0.5 * this.breedte;
    this.y = canvas.height - 2 * this.hoogte;

    this.kleur = 255;
  }
  
  teken() {
      push();
      noStroke();
      fill(this.kleur);
      rect(this.x,this.y,this.breedte,this.hoogte);
      pop();
  }
  
  raaktBal(bal) {
    if (bal.x > this.x && bal.x < this.x + this.breedte && bal.y + bal.straal >= this.y && bal.y + bal.straal < this.y + this.hoogte) {
      return true;
    }
    else {
      return false;
    }
  }
  
  beweeg() {
    if (keyIsDown(65)) {
      this.x -= this.snelheid;
    }
    if (keyIsDown(68)) {
      this.x += this.snelheid;
    }
    this.x = constrain(this.x,0,canvas.width - this.breedte);
  }
}

/*  **********************************************************
    **  EINDE klasse Racket      BEGIN klasse Tennisbal     **
    ********************************************************** */

class Tennisbal {
  constructor() {
    this.diameter = 20;
    this.straal = this.diameter/2;
    this.x = random(2*this.straal,canvas.width - 2*this.straal);
    this.y = this.straal;
    this.basissnelheid = 5;
    this.snelheidX = random(1,this.basissnelheid);
    this.snelheidY = random(1,this.basissnelheid);
    this.kleur = 0;
    this.factor = 1;
  }
  
  botsTegenWand() {
    if (this.x<this.straal || this.x>canvas.width-this.straal) {
      this.snelheidX*=-1;
    }
    if (this.y<this.straal || this.y>canvas.height-this.straal) {
      this.snelheidY*=-1;
    }    
  }
  
  reageerOpRacket(r) {
    this.snelheidY *= -1;
    this.y = r.y - this.straal;
    this.factor = -4 * ((r.x + 0.5 * r.breedte) - round(this.x)) / r.breedte;
    this.factor = round(100*this.factor)/100;
    this.snelheidX = this.basissnelheid * this.factor;
  }
  
  beweeg(o) {
    this.x+=this.snelheidX;
    this.y+=this.snelheidY;
    this.botsTegenWand();
  }
  
  teken() {
    fill(this.kleur);
    ellipse(this.x,this.y,this.diameter);
  }
}


/*  **********************************************************
    **  EINDE klasse Tennisbal      BEGIN hoofdprogramma    **
    ********************************************************** */


function setup() {
  // initialisatie
  
  var myCanvas = createCanvas(700,400);
  myCanvas.parent('processing');
  r = new Racket();
  b = new Tennisbal();
  textFont("Georgia");
  textSize(90);
  textAlign(CENTER,CENTER);
  fill('white');
}

function draw() {
  background(200);
  if (r.raaktBal(b)) {
    b.reageerOpRacket(r);
  }
  b.beweeg(r);
  b.teken();
  r.teken();
  text("f:"+b.factor,150,50);
}

function keyTyped() {
  r.beweeg();
}

/*  **********************************************************
    **               EINDE hoofdprogramma                   **
    ********************************************************** */