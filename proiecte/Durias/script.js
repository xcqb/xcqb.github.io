const scorep = document.getElementById("score")
const scoreh = document.getElementById("highscore")
const gameboard = document.getElementById("boxd")
let secv = []
let player = []
let score = 0
let highscore = 0


function addsequence() {
    let colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
        "brown",
    ]
    const random = colors[Math.floor(Math.random() * 9)]
    secv.push(random)

    let i=0
    const interval = setInterval(() => {
        activdar(secv[i])
        i++
        if (i >= secv.length) {
            clearInterval(interval)
            player = [];
        }
    }, 1000)
}

function activdar(color) {
    // BUG 1: oprim clickurile pe gameboard
    gameboard.style.pointerEvents = 'none'
    let btn = document.getElementById(color)
    btn.classList.add("active");
    setTimeout(() => {
        btn.classList.remove("active")
        gameboard.style.pointerEvents = 'all'
    }, 500);
    
}

function updatescore() {
    scorep.textContent = "Score: " + score;
    scoreh.textContent = "High Score: " + highscore
}

function startGame() {
    sequence = []
    player = []
    score = 0
    addsequence()
    updatescore()
}

// cand se da click pe btn

function clickBtn(color) {
    // daca nu e inceput jocul
    if (secv.length == 0) {
        return;
    }

    activdar(color);
    player.push(color)

    if (secv[player.length - 1] !== player[player.length - 1]) {
        alert("Game Over! You Touched " + color.charAt(0).toUpperCase() + color.slice(1) + "\n You needed to touch: " + secv[player.length - 1].charAt(0).toUpperCase() + secv[player.length - 1].slice(1))
        return;
    }
    if (secv.length == player.length) {
        score++;
        if (score >= highscore) {
            highscore = score
        }
        updatescore();
        // resetam lista player
        player = [];
        setTimeout(addsequence,1000)
    }   
}   

