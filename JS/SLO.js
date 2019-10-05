var opgave = {
  code: null,
  hoofdstuk: null,
  nummer: null,
  uitwerking: false,
  y: null,
  
  verwerkCode(c) {
    this.code = c;
    if (this.code.endsWith("U")) {
        this.uitwerking = true;
        this.code = this.code.slice(0,this.code.length - 1);
    }
    this.code = this.code.slice(1,this.code.length);
    var temp = this.code.split("O");
    this.hoofdstuk = temp[0];
    this.nummer = temp[1];
    this.code = c;
    this.laadJavascriptBestand();
  },
  
  laadJavascriptBestand() {
      if (this.hoofdstuk == 'FU') {
          this.hoofdstuk = 'OBF';
          this.code = this.code.replace("FU", "OBF");
      }
    var url = 'JS/H'+this.hoofdstuk+'/'+this.code+'.js';
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
    document.getElementById("code-container").innerHTML = '<pre class="line-numbers" data-src="'+url+'"></pre>';
    if (this.uitwerking || this.hoofdstuk == 'VB' || this.hoofdstuk == 'OBF' || this.hoofdstuk == 'DE') {
        var uitw = document.getElementById("Ubutton");
        uitw.style.display = "none";        
    }
    if (!this.uitwerking) {
        var terug = document.getElementById("Tbutton");
        terug.style.display = "none";    
    }
  },

  toonMessage() {
    var el = document.body,
    elChild = document.createElement('span');
    elChild.innerHTML = ' <h4 style="text-align: center; font-size: 30px; font-family: courier; color: red; border: 2px solid red; padding: 20px;";>Dit is een tijdelijke demo-versie. &copy; SLO 9-2019</h3>';
    el.insertBefore(elChild, el.firstChild);
  },
  
  toonMenu() {
    var nmax;
    var zero="0";
    var htmlContent = '<h1>';
    if (this.hoofdstuk == 'VB') {
        htmlContent += 'Voorbeeld '+this.nummer;
        nmax = 25;
    }
    else if (this.hoofdstuk == 'OBF') {
        htmlContent += 'Obfuscator '+this.nummer;
        nmax = 15;
        this.hoofdstuk = 'FU';
    }
    else if (this.hoofdstuk == 'GA') {
        htmlContent += 'Gamification '+this.nummer;
        nmax = 14;
    } 
    else if (this.hoofdstuk == 'DE') {
        htmlContent += 'Demo '+this.nummer;
        nmax = 0;
    }    
    else {
        if (this.uitwerking) {
            htmlContent += '<i>uitwerking</i> ';
        }
        if (this.hoofdstuk == 1) { nmax = 40; }
        if (this.hoofdstuk == 2) { nmax = 41; }
        if (this.hoofdstuk == 3) { nmax = 30; }
        htmlContent += 'Opgave '+this.nummer+' (<i>H'+this.hoofdstuk+'</i>)';
    }
    htmlContent += ' | Kies  <button class="hoofdstuk" onclick="selecteerOpgave(\'HVBO1\');">VB</button>';
    htmlContent += ' <button class="hoofdstuk" onclick="selecteerOpgave(\'H1O1\');">H1</button>';
    htmlContent += ' <button class="hoofdstuk" onclick="selecteerOpgave(\'H2O1\');">H2</button>';
    htmlContent += ' <button class="hoofdstuk" onclick="selecteerOpgave(\'H3O1\');">H3</button>';
    htmlContent += ' <button class="hoofdstuk" onclick="selecteerOpgave(\'HFUO1\');">OBF</button>';
    htmlContent += ' <button class="hoofdstuk" onclick="selecteerOpgave(\'HGAO1\');">GA</button>';
    // htmlContent += ' <button class="hoofdstuk" onclick="resetSessie();">SESSIE</button>';
    htmlContent += '<br>';
    for (n=1;n <= nmax;n++) {
        if (n==10) {
            zero="";
        }
        htmlContent += '<button onclick="selecteerOpgave(\'H'+this.hoofdstuk+'O'+n+'\');">'+zero+n+'</button>';
        if (n % 15 == 0) {
            htmlContent+="<br>";
        }
    }
    htmlContent+="</h1>";
    document.getElementById("menu").innerHTML = htmlContent;
  }
}

// hoofdprogramma

if (houdbaar()) {
    if (typeof localStorage.opgave == 'undefined') {
        opgaveCode = 'HVBO1';
        localStorage.setItem('opgave',opgaveCode);
    }
    else {
        opgaveCode = localStorage.getItem('opgave');
    }
    opgave.verwerkCode(opgaveCode);
    opgave.toonMessage();
    opgave.toonMenu();
}
else {
    document.write('<h4 style="text-align: center; font-size: 60px; font-family: courier; color: indianred; border: 2px solid red; padding: 20px;">Deze versie is verlopen.<br>Ga naar de landelijke site<br>voor een update.</h4>');
    exit();
}

// ***************

function houdbaar() {
    var nu = new Date();
    var deadline = new Date("September 1, 2020 06:00:00 AM");
    if (nu > deadline) {
        return false;
    }
    else {
        return true;
    }
}

function selecteerOpgave(x) {
    localStorage.setItem('opgave',x);
    window.location.reload();
}

function resetSessie() {
    localStorage.clear();
    window.location.reload();
}

function toonCode() {
    var x = document.getElementById("code-container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toonUitwerkingen() {
    opgave.code = localStorage.getItem('opgave');
    opgave.code += 'U';
    selecteerOpgave(opgave.code);
}

function gaTerug() {
    opgave.code = opgave.code.slice(0,opgave.code.length - 1);
    selecteerOpgave(opgave.code);
}

function keyPressed() {
  if (keyCode == 83) {
    saveCanvas('afbeelding', 'png');
  }
}