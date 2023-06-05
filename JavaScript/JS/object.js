const player = {
    nickname: "Kish",
    items: ["Knife", "Pistol", "Rifle"],
    hp: 100,
    maxHp: 100,
    weapon: {
        power: 10,
        use: function () {
            console.log("pew pew", this.power);
        },
    },
    attack: function () {
        this.weapon.use();
    },
    /* 
    attack: (() => {
        console.log(this))}.bind(undefined, null)
    */
};

console.log(player.nickname);
console.log(player.hp, "/", player.maxHp);
player.attack();

//Dot notation [] notation; si cerca di utilizzare solo nei casi dinamici, si preferisce generalmente la notazione con il .
player["nome_vero"] = "Davide";
console.log(player.nome_vero);

//Spiegare cosa succede e perchè
const lalla = [0, 1, 2];
console.log(typeof lalla);
lalla[3] = "ciao";
lalla["3"] = "mondo";
