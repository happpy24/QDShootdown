function setup() {
    createCanvas(600, 400);
}

function draw() {
    if (mouseIsPressed) {
        ellipse(0);
    
        ellipse(mouseX, mouseY, 10, 10);
    }
}