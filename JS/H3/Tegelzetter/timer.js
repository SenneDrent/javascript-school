var timer = {
  beginTijd: null,
  resterendeTijd: null,
  beschikbareTijd: null,
  ingesteld: false,
  x: null,
  y: null,
  b: null,
  h: null,
  th: null,
  achtergrondKleur: null,
  timerKleur: null,
  
  stelIn(t,x,y,b,h,ak,tk) {
      this.beschikbareTijd=t*1000;
      this.resterendeTijd=this.tijdInstelling;
      this.x=x;
      this.y=y;
      this.b=b;
      this.h=h;
      this.th=4;
      this.achtergrondKleur=ak;
      this.timerKleur=tk;
      this.ingesteld=true;
  },
  
  start(t) {
      this.beginTijd=t;
  },
  
  teken(t) {
      push();
      this.resterendeTijd=this.beschikbareTijd-(t-this.beginTijd);
      //this.th=this.h-this.h*this.resterendeTijd/(this.tijdInstelling*1000);
      this.th=this.resterendeTijd/this.beschikbareTijd*this.h;
      fill(this.achtergrondKleur);
      rect(this.x,this.y,this.b,this.h);
      fill(this.timerKleur);
      rect(this.x,this.y+(this.h-this.th),this.b,this.th);
      pop();
  }
}