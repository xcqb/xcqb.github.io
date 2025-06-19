// --< Variabile >--
const toggle = document.getElementById("themechanger");
const cards = document.querySelector("ul.cards-list");
const _form = document.getElementById("search")

const body = document.body;
const URL = "../data.json";

let proc = []
let input;
// --< Variabile >--

// --< Input >--
if (_form) {
    input = _form.querySelector("input")
    _form.addEventListener("submit", searchProj)
}
// --< Input >--

// --< Modul Dark >--
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.toggle("dark-mode");
}

toggle.addEventListener("click",function() {
    body.classList.toggle("dark-mode");
})
// --< Modul Dark >--

// --< Proiecte >--
function get_data(url) {
    fetch(url)
    .then(response => response.json()) 
    .then(data => {
        proc = data.proiecte;
        proc.forEach(proiect => createCard(proiect))
    })
    .catch(error => {
        console.log(error)
    })
}

function createCard(obj) {
    const li = document.createElement("li");
    cards.append(li)

    const card = document.createElement("div");
    card.classList.add("card");
    li.append(card);

    const img = document.createElement("img");
    card.append(img);
    img.src = obj.img

    const cardtxt = document.createElement("div")
    card.classList.add("card-text")
    card.append(cardtxt)

    const h3 = document.createElement("h3")
    cardtxt.append(h3)
    h3.textContent = obj.name

    const content = document.createElement("p")
    cardtxt.append(content)
    content.textContent = obj.desc

    const btn = document.createElement("button")
    cardtxt.append(btn)
    btn.classList.add("classbtntest")
    btn.textContent = "More Info"
    btn.addEventListener("click",() => {
        window.open("./proiecte/" + obj.url)
    })
}
// --< Proiecte >--

// --< Cautare >--
function searchProj(event) {
    event.preventDefault()

    const searched = input.value
    const found = proc.find(proiect => proiect.name.toLowerCase().includes(searched.toLowerCase()))

    cards.innerHTML = ""

    if (! (found) || ! (searched)) {
        proc.forEach(proiect => createCard(proiect))
    } 
    else {
        createCard(found)
    }
}
// --< Cautare >--

// --< Main >--
get_data(URL)
// --< Main >--