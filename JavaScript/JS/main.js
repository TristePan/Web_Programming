function log(msg) {
    console.log(this);
}

const logConst = function (msg) {
    const bho = function () {
        console.log(this);
    };
    console.log(this);
};

let logLet = function (msg) {
    console.log(this);
};

log("ciao");
logConst("banana");
logLet("Boh");

logLet = (msg) => {
    //ArrowFunction:
    console.log(msg, msg);
};

logLet("Boh2");



const player = {
};

const application = {
    pulsanteInsert: document.querySelector(".application . input-form button"),
    listaDiCose: [],

    init: function() {
        this.pulsanteInsert.addEventListener("", (evt) => {
            console.log("Mi ha premuto!")
        });
    }
};