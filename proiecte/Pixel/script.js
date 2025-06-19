const inputColor = document.getElementById("ColorPicker")
const inputHeight = document.getElementById('input_height')
const inputWidth = document.getElementById("input_width")
const canvas = document.getElementById("PixelCanvas")
const sumbitBtn = document.getElementById('submitSize')

function makeGrid() {
    const inputHeightValue = inputHeight.value 
    const inputWidthValue = inputWidth.value

    if(inputHeightValue < 1 || inputHeightValue > 50){
       window.alert("You selected a height lower than one or higher than 50")
        return
}
    if(inputWidthValue < 1 || inputWidthValue > 50) {
        window.alert("You selected a width lower than one or higher than 50")
       return
    }

    const clearCanvasButton = document.createElement("button")
    clearCanvasButton.textContent = "Clear"
    clearCanvasButton.id = 'clear_canvas'

    
    if(canvas.children.length > 0) {
        while(canvas.lastElementChild) {
            canvas.lastElementChild.remove()
        }

        document.getElementById('clear_canvas').remove()
    }

    for(let i = 0; i < inputHeightValue; i++) {
        const tr = document.createElement("tr")

        for(let j = 0; j < inputWidthValue; j++) {
            const td = document.createElement("td")

            td.addEventListener('click', function() {
                const inputColorValue = inputColor.value

                td.style.background = inputColor.value
            })

            td.addEventListener('contextmenu', function(event) {
                event.preventDefault()

                td.style.background = "white"
            })

            tr.append(td)
        }
        canvas.append(tr)
    }

    document.body.append(clearCanvasButton)
    clearCanvasButton.addEventListener('click', function() {
        let cells = document.getElementsByTagName("td")
        
        for(let i = 0; i < cells.length; i++) {
            cells[i].style.background = "white"
        }
    })
}

sumbitBtn.addEventListener('click', function(event){
    event.preventDefault()
    makeGrid()
})