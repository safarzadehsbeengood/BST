var cnv;
var tree;
var addBtn, removeBtn, input;
function setup() {
    cnv = createCanvas(windowWidth-100, windowHeight-100);
    cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
    // frameRate(1);
    tree = new BST();
    for (let i = 0; i < 10; i++) {
        tree.add(floor(random(1, 100)));
    } 
    tree.root.iot();
    addBtn = createButton("add");
    removeBtn = createButton("remove");
    input = createInput();
    addBtn.mousePressed(addVal);
    removeBtn.mousePressed(removeVal);
}

function addVal() {
    if (input.value()) {
        tree.add(parseInt(input.value()));
    }
}

function removeVal() {
    if (input.value()) {
        tree.remove(parseInt(input.value()));
    }
}

function draw() {
    background(200);
    noFill();
    rect(0, 0, width, height);
    tree.draw(width/2, 50);
}