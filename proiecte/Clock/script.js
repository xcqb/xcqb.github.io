// Variabile neimportante //
const ceas = document.getElementById("clock")
const data = document.getElementById("date")
const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const seco = document.getElementById("seconds")
const box = document.getElementById("data")
const prohour = document.getElementById("prohour")
const prominutes = document.getElementById("prominutes")
const prosec = document.getElementById("proseconds")

// zilele
let weekdays = ["SUN", "MON","TUE","WED", "THU", "FRI", "SAT"];

// functile care returneaza <10 ca 0[num] si schimba timpul

function addzero(num) {
    if(num < 10) {
        return "0" + num
    }
    return num
}

function updatetime() {
    const datee = new Date()
    let ora = addzero(new Date().getHours())
    let min = addzero(new Date().getMinutes())
    let sec = addzero(new Date().getSeconds())

    hour.textContent = ora;
    minutes.textContent = min
    seco.textContent = sec

    data.textContent = datee.getDate() + "-" + (datee.getMonth() + 1)   + "-" +  datee.getFullYear() + " " + weekdays[datee.getDay()]
}


// apelam functia update time la fiecare secunda
setInterval(updatetime,1000)

updatetime()