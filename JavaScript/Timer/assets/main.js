const main = () => {
    const application = {
        containerDOM : document.getElementById("timer"),
        buttonPlay : document.getElementById("playstop-btn"),
        hours : 0,
        minutes : 0,
        seconds : 0,
        totalSeconds : 0,
        isPlaying : false,
        playInterval : function () {
            this.currentInterval = setInterval(this.incrementTimer, 1000);
        },
        
        stopInterval : function () {
            clearInterval(this.currentInterval);
        },

        incrementTimer : function () {
            if(this.isPlaying) {
                this.playInterval();
                this.buttonPlay.innerHTML = "Ferma il timer";
            } else {
                this.stopInterval();
                this.buttonPlay.innerHTML = "Avvia il timer";
            }
        },

        updateButton : function () {
            if(this.isPlaying){
                this.buttonPlay.innerHTML = "Stop the timer";
            } else {
                this.buttonPlay.innerHTML = "Start the timer";
            }
        },

        init : function (hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;

            this.buttonPlay.addEventListener("click", () => {
                this.isPlaying = !this.isPlaying;
                this.updateButton();
            });

            this.updateButton();
        }
    };
};



window.onload = main;