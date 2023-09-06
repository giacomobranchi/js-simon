//Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
//Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!


const lezione = new Date(2023, 8, 6, 9, 30, 0, 0);
//document.getElementById('date').innerHTML = lezione;

let tic = setInterval(function () {
    let now = new Date().getTime();
    //console.log(now);
    let remaining = lezione - now;
    //console.log(remaining);
    let seconds = Math.floor((remaining % (1000 * 60 * 60 * 24)) / 1000);
    document.getElementById("date").innerHTML = seconds;
}, 1000)














//Math.floor((remaining % (1000 * 86.400)) / 1000); Math.floor((remaining % (1000 * 60)) / 1000);