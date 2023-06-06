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
        var input = document.querySelector('.input').value;

        // Pulisci l'input
        document.querySelector('.input').value = "";

        // Aggiungi l'input all'elenco dei comandi
        terminal.addOutput("> " + input);

        // Esegui il comando
        terminal.executeCommand(input);
    },

    // Esegui il comando
    executeCommand: function (command) {
        // Esegui il comando specificato
        // In questo esempio, il comando "clear" cancella l'output
        // e il comando "help" visualizza un messaggio di aiuto
        // Altrimenti, viene mostrato un messaggio di comando sconosciuto
        if (command === "clear") {
            terminal.clearOutput();
        } else if (command === "help") {
            terminal.addOutput("Comandi disponibili:");
            terminal.addOutput("  - clear: Cancella l'output");
            terminal.addOutput("  - help: Mostra l'elenco dei comandi");
        } else if (command === "date") {
            terminal.dateOutput();
        } else {
            terminal.addOutput("Comando sconosciuto: " + command);
        }
    },

    // Aggiungi un output al terminale
    addOutput: function (output) {
        var terminalOutput = document.querySelector('.terminal-output');
        var outputLine = document.createElement("p");
        outputLine.textContent = output;
        terminalOutput.appendChild(outputLine);
    },

    // Cancella l'output del terminale
    clearOutput: function () {
        var terminalOutput = document.querySelector('.terminal-output');
        terminalOutput.innerHTML = "";
    },

    //Aggiungi la data e ora
    dateOutput: function () {
        var date = new Date();
        terminal.addOutput(date);
    },

    terminal
};

//Inizializza il terminale quando la pagina è completamente caricata
document.addEventListener("DOMContentLoaded", function () {
    terminal.init();
});


/*
var createTerminal = document.getElementById("new-terminal");
createTerminal.addEventListener("click", function () {
    createTerminal();
});
*/

/*
function createTerminal() {
    //Crea un nuovo elemento div per il terminale
    var newTerminal = document.createElement("div");

    //Imposta un ID unico per il terminale
    var terminalID = "terminal-" + Date.now();
    newTerminal.setAttribute('class', terminalID);

    //Crea un nuovo elemento input per il terminale
    var newInput = document.createElement("input");
    newInput.setAttribute('class', 'input');
    newInput.setAttribute('type', 'text');

    //Crea un nuovo elemento div per l'output del terminale
    var newOutput = document.createElement("div");
    newOutput.setAttribute('class', 'terminal-output');

    //Aggiungi il terminale alla pagina
    document.body.appendChild(newTerminal);
    newTerminal.appendChild(newOutput);
    newTerminal.appendChild(newInput);

    //Inizializza il terminale
    newTerminal = {
        // Inizializza il terminale
        init: function () {
            // Aggiungi l'evento di ascolto per il tasto "Invio"
            document.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    terminal.handleInput();
                }
            });
        }

    };

    //Ottieni il riferimento al bottone
    var terminalButton = document.querySelector('terminalButton');

    //Aggiungi un ascoltatore di eventi al bottone per la creazoine di un nuovo terminale
    terminalButton.addEventListener('click', createTerminal);

    // Inizializza il terminale quando la pagina è completamente caricata
    document.addEventListener("DOMContentLoaded", function () {
        terminal.init();
    });
}
*/