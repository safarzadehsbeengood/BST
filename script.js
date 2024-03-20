var cnv;
var tree;
var addBtn, removeBtn;
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
    addBtn.mousePressed(addVal);
}

function addVal() {
    tree.add(floor(random(1, 100)));
}

function draw() {
    background(200);
    noFill();
    rect(0, 0, width, height);
    tree.draw(width/2, 50);
}