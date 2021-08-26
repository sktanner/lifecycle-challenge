

// const timerId = setInterval(() => tick(), 1000)

// let dumbTimer = setInterval(() => { // if then, if it's at 0 reveal pokemon, if it's not countdown
//     , 1000)}

// timer(){
    // var seconds = document.getElementById("timer").textContent;
    // var countdown = setInterval(function () {
    // seconds--
    // document.getElementById("timer").textContent = seconds;
    // if (seconds <= 0) clearInterval(countdown)
    // }, 1000);
    // }

    let myTimer = setInterval(() => function() {
        var seconds = document.getElementById("timer").textContent;
    var countdown = setInterval(function () {
    seconds--
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown)
    }, 1000)
})


    // button click and it fetches a hidden pokemon
    // comp did update -> checks to see if pokemon has changed
    // runs timer func, uses setinterval to count down



    // on submit, run fetchpokemon but darkened
    // count down from 10
    // if 0, display pokewrap