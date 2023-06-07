// Crea un oggetto "terminal" che rappresenta il terminale
var terminal = {
    // Inizializza il terminale
    init: function () {
        // Aggiungi l'evento di ascolto per il tasto "Invio"
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                terminal.handleInput();
            }
        });
    },

    // Gestisci l'input dell'utente
    handleInput: function () {
        // Ottieni l'input dell'utente
        var input = document.querySelector(".terminal-input").value;

        // Pulisci l'input
        document.querySelector(".terminal-input").value = "";

        // Aggiungi l'input all'elenco dei comandi
        terminal.addOutput("IlTerminaleSbagliato: ~$ > " + input);

        // Esegui il comando
        terminal.executeCommand(input);
    },

    // Esegui il comando
    executeCommand: function (command) {
        if(command==='clear' || command==='help' || command==='' || command==='date' || command==='exit' || command==='hello' || command==='Hello' || command==='trasparance up' || command==='trasparance down'){
            switch(command){
                case 'clear':
                    terminal.clearOutput();
                    break;
                case 'help':
                    terminal.addOutput('Comandi disponibili:');
                    terminal.addOutput('  - clear: Cancella l\'output');
                    terminal.addOutput('  - help: Mostra l\'elenco dei comandi');
                    terminal.addOutput('  - hello/Hello: Stampa un saluto');
                    terminal.addOutput('  - date: Mostra la data e l\'ora');
                    terminal.addOutput('  - exit: Chiudi il terminale');
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
                    break;
                case 'exit':
                    var container = document.querySelector('.terminal-container');
                    var terminalOutput = document.querySelector(".terminal-output");
                    terminalOutput.innerHTML = '';
                    container.style.display='none';
                    break;
                case 'hello':
                    terminal.addOutput('Hello World!');
                    break;
                case 'Hello':
                    terminal.addOutput('Hello World!');
                    break;
                case 'trasparance down':
                    var terminalInOut = document.querySelector('.terminal-input-output');
                    var terminalOut = document.querySelector('.terminal-output');
                    var terminalIn = document.querySelector('.terminal-input');
    
                    terminalInOut.style.background='rgba(0,0,0,0.5)';
                    terminalOut.style.color='rgba(255,255,255,0.5)';
                    terminalIn.style.color='rgba(255,255,255,0.5)';
                    break;
                case 'trasparance up':
                    var terminalInOut = document.querySelector('.terminal-input-output');
                    var terminalOut = document.querySelector('.terminal-output');
                    var terminalIn = document.querySelector('.terminal-input');
    
                    terminalInOut.style.background='';
                    terminalOut.style.color='';
                    terminalIn.style.color='';
                    break;

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
                                    var terminalInOut = document.querySelector('.terminal-input-output');
                                    var terminalOut = document.querySelector('.terminal-output');
                                    var terminalIn = document.querySelector('.terminal-input');
                                    terminalInOut.style.backgroundImage="url('https://www.ilcineocchio.it/cine/wp-content/uploads/2018/02/star-wars-spazio.jpg')";
                                    document.body.style.backgroundImage="url('https://pixelz.cc/wp-content/uploads/2017/12/star-wars-the-force-awakens-uhd-4k-wallpaper.jpg')";
                                    terminalOut.style.color='#d26927';
                                    terminalIn.style.color='#0a856c';
                                    break;
                                case 'classic':
                                    var terminalInOut = document.querySelector('.terminal-input-output');
                                    var terminalOut = document.querySelector('.terminal-output');
                                    var terminalIn = document.querySelector('.terminal-input');
                                    terminalInOut.style.background='';
                                    document.body.style.background='';
                                    terminalOut.style.color='';
                                    terminalIn.style.color='';
                                    break;
                            }
                        } else { terminal.addOutput('Tema inesistente'); }
                }
            } else { terminal.addOutput('Comando sconosciuto: ' + command); }
        }
    },

    // Aggiungi un output al terminale
    addOutput: function (output) {
        var terminalOutput = document.querySelector(".terminal-output");
        var outputLine = document.createElement("p");
        outputLine.textContent = output;
        terminalOutput.appendChild(outputLine);
    },

    // Cancella l'output del terminale
    clearOutput: function () {
        var terminalOutput = document.querySelector(".terminal-output");
        terminalOutput.innerHTML = "";
    },

    //Aggiungi la data e ora
    dateOutput: function () {
        var date = new Date();
        terminal.addOutput(date);
    },
};

//Inizializza il terminale quando la pagina è completamente caricata
document.addEventListener("DOMContentLoaded", function () {
    terminal.init();
});

//Implementazione del tasto chiusura terminale
var closeButton = document.querySelector(".closeButton");
closeButton.addEventListener("click", function () {
    var container = document.querySelector(".terminal-container");
    terminal.clearOutput();
    container.style.display = "none";
});

//Implementazione del tasto apertura terminale
var openButton = document.querySelector(".openButton");
openButton.addEventListener("click", function () {
    var terminal = document.querySelector(".terminal-container");
    terminal.style.display = "block";
});

// Implementazione del tasto minimizzazione terminale
var minimizeButton = document.querySelector(".minimizeButton");
minimizeButton.addEventListener("click", function () {
    var terminal = document.querySelector(".terminal-container");
    terminal.style.display = "none";
});

//Implementazione del tasto massimizzazione terminale
var maximizeButton = document.querySelector(".maximizeButton");
let maximized = false;
maximizeButton.addEventListener("click", maximizeTerminal);
function maximizeTerminal() {
    var terminal = document.querySelector(".terminal-container");
    var terminalInputOutput = document.querySelector(".terminal-input-output");
    if (!maximized) {
        terminal.style.position = "block";
        terminal.style.width = "100%";
        terminal.style.height = "100%";
        terminal.style.zIndex = "9999";

        terminalInputOutput.style.height = "97%";
        terminalInputOutput.style.width = "100%";
        terminalInputOutput.style.position = "absolute";

        maximized = true;
    } else {
        terminal.style.position = "";
        terminal.style.top = "";
        terminal.style.left = "";
        terminal.style.width = "";
        terminal.style.height = "";
        terminal.style.zIndex = "";
        terminal.style.transform = "";

        terminalInputOutput.style.height = "";
        terminalInputOutput.style.width = "";
        terminalInputOutput.style.position = "";

        maximized = false;
    }
}

//funzione associa il drag, si passa come parametro l'elemento che vogliamo draggare
dragElement(document.querySelector(".terminal-container"));

//funzione che si occupa del drag
function dragElement(elmnt) {
    //le variabili corrispondono alle posizioni che il div assume nel tempo che è draggato
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.querySelector(".OptionBar")) {
        // se presente la parte draggabile corrisponde al header
        document.querySelector(".OptionBar").onmousedown = dragMouseDown;
    } else {
        // in caso non c'è header la parte draggabile sarà tutto l'elemento
        // l'header sarà sempre presente in quanto parte del terminale
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

//Implementazione del tasto creazione terminale
var newTerminal = document.querySelector(".newTerminal");
newTerminal.addEventListener("click", function () {
    console.log("Crea un nuovo terminale");

    // Creo un div
    var terminalContainer = document.createElement("div");
    // Creo un div
    var animateZoom = document.createElement("div");
    // Creo un div
    var optionBar = document.createElement("div");
    // Creo in img
    var icon = document.createElement("img");
    // Creo un b
    var title = document.createElement("b");
    // Creo un button
    var minimizeButton = document.createElement("button");
    // Creo un button
    var maximizeButton = document.createElement("button");
    // Creo un button
    var closeButton = document.createElement("button");

    // Aggiungo la classe terminal-container al div creato
    terminalContainer.classList.add("terminal-container");
    // Aggiungo la classe animate-zoom al div creato
    animateZoom.classList.add("animate-zoom");
    // Aggiungo la classe OptionBar al div creato
    optionBar.classList.add("OptionBar");
    // Aggiungo la classe icon al div creato
    icon.classList.add("favicon");
    icon.src = "favicon.jpg";
    // Aggiungo la classe title al div creato
    title.classList.add("title");
    title.textContent = "IlTerminaleSbagliato";
    // Aggiungo la classe minimizeButton al div creato
    minimizeButton.classList.add("minimizeButton");
    minimizeButton.textContent = "-";
    // Aggiungo la classe maximizeButton al div creato
    maximizeButton.classList.add("maximizeButton");
    maximizeButton.textContent = "*";
    // Aggiungo la classe closeButton al div creato
    closeButton.classList.add("closeButton");
    closeButton.textContent = "x";

    // Aggiungo il div creato al body
    document.body.appendChild(terminalContainer);
    terminalContainer.appendChild(animateZoom);
    animateZoom.appendChild(optionBar);
    optionBar.appendChild(icon);
    optionBar.appendChild(title);
    optionBar.appendChild(minimizeButton);
    optionBar.appendChild(maximizeButton);
    optionBar.appendChild(closeButton);

    var terminalInputOutput = document.createElement("div");
    var terminalOutput = document.createElement("div");
    var utente = document.createElement("span");
    var input = document.createElement("input");

    // Aggiungo la classe terminal-input-output al div creato
    terminalInputOutput.classList.add("terminal-input-output");
    // Aggiungo la classe terminal-output al div creato
    terminalOutput.classList.add("terminal-output");
    // Aggiungo la classe utente al div creato
    utente.classList.add("utente");
    utente.textContent = "IlTerminaleSbagliato: ~$";
    // Aggiungo la classe input al div creato
    input.classList.add("terminal-input");

    animateZoom.appendChild(terminalInputOutput);
    terminalInputOutput.appendChild(terminalOutput);
    terminalInputOutput.appendChild(utente);
    terminalInputOutput.appendChild(input);

    var Scri = document.createElement("script");
    Scri.src = "script.js";
    document.body.appendChild(Scri);
});