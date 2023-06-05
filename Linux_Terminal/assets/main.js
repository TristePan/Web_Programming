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
        } else {
            terminal.addOutput("Comando sconosciuto: " + command);
        }
    },

    // Aggiungi un output al terminale
    addOutput: function (output) {
        var terminalOutput = document.querySelector('.terminal-input');
        var outputLine = document.createElement("p");
        outputLine.textContent = output;
        terminalOutput.appendChild(outputLine);
    },

    // Cancella l'output del terminale
    clearOutput: function () {
        var terminalOutput = document.querySelector('.terminal-output');
        terminalOutput.innerHTML = "";
    },
};

// Inizializza il terminale quando la pagina è completamente caricata
document.addEventListener("DOMContentLoaded", function () {
    terminal.init();
});



var createTerminal = document.getElementById("new-terminal");
createTerminal.addEventListener("click", function () {
    createTerminal();
});