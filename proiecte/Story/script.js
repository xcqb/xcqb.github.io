// functie care genereaza povestea
function gen() {
    let story = "My name is NAME. I love eating FRUIT. In my free time, I enjoy  HOBBY.";

    // valorile din input
    let nume = document.getElementById("name").value.trim();
    let fruct = document.getElementById("fruit").value.trim();
    let hobi = document.getElementById("hobby").value.trim();
    
    // daca nu sunt valori in input
    if (!nume || !fruct || !hobi ) {
        alert("Fill in all fields");
        return;
    }

    let nameUpper = nume.slice(0,1).toUpperCase() + nume.slice(1).toLowerCase();
    let fructUpper = fruct.toUpperCase();
    let hobiUpper = hobi.toLowerCase();

    console.log(nameUpper)
    console.log(fructUpper)
    console.log(hobiUpper)

    story = story.replace("NAME", nameUpper)
    story = story.replace("FRUIT", fructUpper)
    story = story.replace("HOBBY", hobiUpper)

    document.getElementById("storygen").textContent = story
}



