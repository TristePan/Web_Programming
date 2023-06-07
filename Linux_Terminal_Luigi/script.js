// Crea un oggetto "terminal" che rappresenta il terminale
var terminal = {
    // Inizializza il terminale
    init: function() {
      // Aggiungi l'evento di ascolto per il tasto "Invio"
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          terminal.handleInput();
        }
      });
    },
    
    // Gestisci l'input dell'utente
    handleInput: function() {
      // Ottieni l'input dell'utente
      var input = document.querySelector('.terminal-input').value;
      
      // Pulisci l'input
      document.querySelector('.terminal-input').value = '';
      
      // Aggiungi l'input all'elenco dei comandi
      terminal.addOutput('jojo104@superSO64:~# '+input);
      
      // Esegui il comando
      terminal.executeCommand(input);
    },
    
    // Esegui il comando
    executeCommand: function(command) {
      if(command==='clear' || command==='help' || command==='' || command==='date'){
        switch(command){
          case 'clear':
            terminal.clearOutput();
            break;
          case 'help':
            terminal.addOutput('Comandi disponibili:');
            terminal.addOutput('  - clear: Cancella l\'output');
            terminal.addOutput('  - help: Mostra l\'elenco dei comandi');
            terminal.addOutput('  - print: Stampa una stringa');
            terminal.addOutput('  - date: Stampa la data');
            break;
          case '':
            terminal.addOutput(' ');
            break;
          case 'date':
            var currentDate = new Date();
            var date = currentDate.toDateString();
            var time = currentDate.toLocaleTimeString();
            this.addOutput('Data: ' + date);
            this.addOutput('Orario: ' + time);
        }
      } else {
        if(command.substr(0,5)==='print' || command.substr(0,5)==='theme'){
          switch(command.substr(0,5)){
            case 'print':
              terminal.addOutput(command.substr(6));
              break;
            case 'theme':
              if(command.substr(6)==='star wars' || command.substr(6)==='classic'){
                switch(command.substr(6)){
                  case 'star wars':
                    var box = document.querySelector('.box');
                    box.style.backgroundImage="url('https://www.ilcineocchio.it/cine/wp-content/uploads/2018/02/star-wars-spazio.jpg')";
                    break;
                  case 'classic':
                    var box = document.querySelector('.box');
                    box.style.background='black';
                    break;
                }
              }
              else{
                terminal.addOutput('Tema inesistente');
              }
          }
        } else {
          terminal.addOutput('Comando sconosciuto: ' + command);
        }
      }
    },
    
    // Aggiungi un output al terminale
    addOutput: function(output) {
      var terminalOutput = document.querySelector('.terminal-output');
      var outputLine = document.createElement('div');
      outputLine.style.minHeight="10px";
      outputLine.style.color="white";
      outputLine.textContent = output;
      terminalOutput.appendChild(outputLine);
    },
    
    // Cancella l'output del terminale
    clearOutput: function() {
      var terminalOutput = document.querySelector('.terminal-output');
      terminalOutput.innerHTML = '';
    }
  };
  
  // Inizializza il terminale quando la pagina è completamente caricata
  document.addEventListener('DOMContentLoaded', function() {
    terminal.init();
  });

  var minimizzaButton = document.getElementById('minimizza');
  minimizzaButton.addEventListener('click', function () {
    var container = document.querySelector('.container');
    container.style.display = 'none';
  });

  var riprendiTerminal = document.querySelector('.pinguino');
  riprendiTerminal.addEventListener('click', function() {
    var Ccontainer = document.querySelector('.container');
    Ccontainer.style.display = 'block';
  });

  var eliminaButton = document.querySelector('.X');
  eliminaButton.addEventListener('click', function () {
    var container = document.querySelector('.container');
    terminal.clearOutput();
    container.style.display = 'none';
  });

  var maximezed=false;

  var massimizzaButton = document.getElementById('massimizza');
  massimizzaButton.addEventListener('click', function () {
    var output = document.querySelector('.box');
    if(maximezed===false){
      output.style.width='1500px';
      output.style.height='700px';
      maximezed=true;
    }
    else{
      output.style.width='';
      output.style.height='';
      maximezed=false;
    }
  });

  var creaTerminali = document.querySelector('.pinguino1');
  creaTerminali.addEventListener('click', function() {
    console.log('Hello world!');
    var table = document.createElement('table');
    var barra = document.createElement('tr');
    var barratd1 = document.createElement('td');
    var bottoni = document.createElement('td');
    var bottone1 = document.createElement('button');
    var bottone2 = document.createElement('button');
    var bottone3 = document.createElement('button');

    var terminale = document.createElement('tr');
    var terminale1 = document.createElement('td');
    var box = document.createElement('div');
    var terminalO = document.createElement('div');
    var utente = document.createElement('span');
    var terminalI = document.createElement('input');
     
    table.classList.add('container');
    barratd1.classList.add('vuoto');
    bottoni.classList.add('button');
    bottone1.setAttribute('id','minimizza');
    bottone2.setAttribute('id','massimizza');
    bottone1.classList.add('q');
    bottone2.classList.add('q');
    bottone3.classList.add('X');
    bottone1.textContent='_';
    bottone2.textContent='⌂';
    bottone3.textContent='X';

    terminale1.colSpan=2;
    box.classList.add('box');
    terminalO.classList.add('terminal-output');
    utente.classList.add('utente');
    terminalI.classList.add('terminal-input');
    utente.textContent='jojo104@superSO64:~# ';

    document.body.appendChild(table);
    table.appendChild(barra);
    barra.appendChild(barratd1);
    barra.appendChild(bottoni);
    bottoni.appendChild(bottone1);
    bottoni.appendChild(bottone2);
    bottoni.appendChild(bottone3);

    table.appendChild(terminale);
    terminale.appendChild(terminale1);
    terminale1.appendChild(box);
    box.appendChild(terminalO);
    box.appendChild(utente);
    box.appendChild(terminalI);
  });

  //funzione associa il drag, si passa come parametro l'elemento che vogliamo draggare
  dragElement(document.querySelector(".container"));

  //funzione che si occupa del drag
  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.querySelector(".OptionBar")) {
      document.querySelector(".OptionBar").onmousedown = dragMouseDown;
    } 
    else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      //e corrisponde all'evento, window.event serve in caso non fosse passato alcun evento
      //window.event legge l'evento direttamente dalla finestra
      e = window.event;
      //la linea successiva blocca il normale comportamento del browser all'evento
      e.preventDefault();
      //posizioni del mouse correnti;
      pos3 = e.clientX;
      pos4 = e.clientY;
      //viene chiamata la funzione di chiusura del drag al rilascio
      document.onmouseup = closeDragElement;
      //viene chiamata la funzione di movimento del drag quando si muove il mouse
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = window.event;
      e.preventDefault();
      // vengono calcolate le nuove posizioni
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // vengono settate le nuove posizioni
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // chiude l'evento al rilascio;
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }