//Function to create sketchpad

const sketchPad = document.querySelector('.sketchpad');

const createSketchpad = (rows,columns) => {
    for (i = 0; i < (rows*columns); i++ ){
        const square = document.createElement('div');
        square.setAttribute('class', 'sketchBox');
        square.addEventListener('mouseover', e => e.target.style.backgroundColor = 'black');
        sketchPad.appendChild(square)
    }
    sketchPad.style.gridTemplateColumns =`repeat(${columns},1fr)`;
    sketchPad.style.gridTemplateRows =`repeat(${rows},1fr)`;
    enableBtns();
    
}

//Default sketchpad

createSketchpad(16,16)

//Change Sketchpad Size

const changeSize = document.getElementById('changeSize').addEventListener('click', () => {
    const sizeRequest = prompt("Please enter your desired number of squares per side for your Sketchpad (Max:100)");
    if (sizeRequest <0 || sizeRequest > 100) {
     alert('Your number of squares needs to be between 0 and 100. Please try again with a different number.')
    } else {
     const deleteSketchBox = document.querySelectorAll('.sketchBox');
     deleteSketchBox.forEach(box => box.remove());
     createSketchpad(sizeRequest,sizeRequest);
    }
      }); 

//Other Sketchpad functions in nav
function random(max,min) {
    return Math.floor(Math.random()*(max-min) + min);
}

function enableBtns() {
    const sketchBoxes = document.querySelectorAll('.sketchBox');
    //eraser
    const eraser = document.getElementById('eraser').addEventListener('click', () => {
        sketchBoxes.forEach(box => {
            box.addEventListener('mouseover', () => box.style.backgroundColor = 'white')})});
    //pen
    const pen = document.getElementById('pen').addEventListener('click', () => {
        sketchBoxes.forEach(box => {
            box.addEventListener('mouseover', () => box.style.backgroundColor = 'black')})}); 
    //clear the page
    const clearPage = document.getElementById('clearPage').addEventListener('click', () => {
        sketchBoxes.forEach(box => box.style.backgroundColor = 'white')}); 
    //rainbow pen      
    const rainbow = document.getElementById('rainbow').addEventListener('click', () => {
        sketchBoxes.forEach(box => {
            box.addEventListener('mouseover', () => box.style.backgroundColor = `rgb(${random(256,1)}, ${random(256,1)}, ${random(256,1)})`)})});
    }


    
