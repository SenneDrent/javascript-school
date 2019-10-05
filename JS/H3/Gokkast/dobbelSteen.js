class Dobbelsteen {
  constructor() {
  this.x = 25;
  this.y = 25;
  this.grootte = 200;
  this.diameterOgen = 50;
  this.ogen = null;
  this.R = null;
  this.G = null;
  this.B = null;
  }
  gooi() {
    this.ogen = floor(random(0,6))+1;

    this.R = round(random(0,255));
    this.G = round(random(0,255));
    this.B = round(random(0,255));
  }
  
  teken() {
    push();
    fill(this.R,this.G,this.B);
    rect(this.x,this.y,this.grootte,this.grootte);

    fill('black');    
    if (this.ogen!=1) {ellipse(this.x+this.grootte/6*1,this.y+this.grootte/6*1,this.diameterOgen,this.diameterOgen);}
    if (this.ogen==6) {ellipse(this.x+this.grootte/6*3,this.y+this.grootte/6*1,this.diameterOgen,this.diameterOgen);}
    if (this.ogen>3) {ellipse(this.x+this.grootte/6*5,this.y+this.grootte/6*1,this.diameterOgen,this.diameterOgen);}
    if (this.ogen==1 || this.ogen==3 || this.ogen==5) {ellipse(this.x+this.grootte/6*3,this.y+this.grootte/6*3,this.diameterOgen,this.diameterOgen);}
    if (this.ogen>3) {ellipse(this.x+this.grootte/6*1,this.y+this.grootte/6*5,this.diameterOgen,this.diameterOgen);}
    if (this.ogen==6) {ellipse(this.x+this.grootte/6*3,this.y+this.grootte/6*5,this.diameterOgen,this.diameterOgen);}
    if (this.ogen!=1) {ellipse(this.x+this.grootte/6*5,this.y+this.grootte/6*5,this.diameterOgen,this.diameterOgen);}
    pop();
  }
  
  rol() {
    
  }
}