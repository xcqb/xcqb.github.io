// --< Variabile >--
const nume = document.getElementById("name")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

const form = document.getElementsByTagName("form")[0]
const emaillink = "mailto:dariuspascoi@gmail.com?"
// --< Variabile >--

// --< Evenimente >--
form.addEventListener("submit",buildMsg)
// --< Evenimente >--

// --< Functii >--
function buildMsg(event) {
    event.preventDefault()

    const url = emaillink + `subject=${subject.value || "New Message"}&body=${message.value || "New Message"}\n- ${nume.value || "User"}` 
    window.location.href = url
}
// --< Functii >--