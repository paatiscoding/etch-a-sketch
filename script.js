
//Create sketchpad

const createSketchpad = number => {
    for (i = 0; i < (number**2); i++ ){
        const sketchpad = document.querySelector('.sketchpad');
        const square = document.createElement('div');
        square.setAttribute('class', 'sketchBox');
        square.style.width = '2rem';
        square.style.height = '2rem';
        sketchpad.appendChild(square)
    }
}

createSketchpad(16)

//Sketch effect

const sketchEffect = document.querySelectorAll('.sketchBox');

sketchEffect.forEach(box => {
    box.addEventListener('mouseover', () => box.style.backgroundColor = 'black')});

//erasers

const clearPage = document.getElementById('clearPage');

clearPage.addEventListener('click', () => {
    sketchEffect.forEach(box => box.style.backgroundColor = 'white')});

const eraserEffect = document.getElementById('eraser');

eraserEffect.addEventListener('click', () => {
    sketchEffect.forEach(box => {
        box.addEventListener('mouseover', () => box.style.backgroundColor = 'white')})});

