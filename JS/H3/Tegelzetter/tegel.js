class Tegel {
  constructor(x,y,l) {
  this.lengte = l;
  this.x = x;
  this.y = y;
  this.kleurenLijst = new Array('white','red','orange','green','yellow','blue','black');
  this.Ngeraakt = 0;
  this.actief = false;
  }
  
    muisOver(x,y) {
    if (x>this.x && x<this.x+this.lengte && y>this.y && y<this.y+this.lengte) {
      return true;
    } 
    else {
      return false;
    }
  }

  teken() {
    push();
    fill(this.kleurenLijst[this.Ngeraakt]);
    rect(this.x,this.y,this.lengte,this.lengte);
    pop();
  }
  
  tekenVB(kleurcode) {
    push();
    fill(this.kleurenLijst[kleurcode]);
    rect(this.x,this.y,this.lengte,this.lengte);
    pop();
  }  
}