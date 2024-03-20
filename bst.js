let diameter = 30;
let radius = diameter / 2;
let distance = 20;
let vals = [];
let layer = 1;

function BST() {
  this.root = null;
}

BST.prototype.add = function (val) {
  if (this.root == null) {
    this.root = new Node(val);
  } else {
    this.root.add(new Node(val));
  }
};

BST.prototype.remove = function (val) {
  
}

BST.prototype.draw = function (x, y) {
  // console.log(this);
  layer = 1;
  if (this.root) {
    // console.log(this.root.iot());
    this.root.draw(x, y);
  } else {
    console.log("empty tree");
    return;
  }
};
