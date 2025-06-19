const textbox = document.getElementById("textbox"); 
const txtlist = document.getElementById("box");
const btn = document.getElementById("button");  

function addtext() {   
    let txt = textbox.value; 
    if (txt.length == 0) {
        textbox.value = ""; 
        return;
    }
    const text = document.createElement("p");
    text.textContent = txt;
    /*
        adaugam clasa
        text.classList.add("task")
    */
    text.style.width - "500px";
    text.addEventListener("click",function(event) {
        event.target.classList.toggle("complete");
    })
    txtlist.append(text);
    textbox.value = ""; 
}

// adaugam un eveniment la input
textbox.addEventListener("keypress",function(ev) {
    if (ev["key"] == "Enter") {
        addtext();
    }
})