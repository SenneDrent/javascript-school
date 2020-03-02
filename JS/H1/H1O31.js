kleur='white';

function setup() {
  var myCanvas = createCanvas(501,501);
  myCanvas.parent('processing');
  background('coral');
}

function draw() {
  for (var rij = 0;rij < 500;rij += 50) {
    for (var kolom = 0;kolom < 500;kolom += 50) {
      if ((rij % 100 == 0 && kolom % 100 != 0) || (kolom % 100 == 0 && rij % 100 != 0)) {
        fill(kleur);
        rect(kolom,rij,50,50);
      }
      else {
        fill('black');
        rect(kolom,rij,50,50);
      }
    }
  }
}