function Node(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
  
  Node.prototype.draw = function (x, y) {
    let stagger = 0;
    if (this.left && this.right) {
      stagger = 30;
    }
    noFill();
    stroke(0);
    strokeWeight(3);
    circle(x, y, diameter);
    noStroke();
    fill(0);
    text(this.val, x-6, y+4);
    stroke(0);
    if (this.left) {
        line(x-radius, y+radius, x-distance-radius-stagger, y+distance+radius)
        this.left.draw(x-distance-diameter-stagger, y+distance+diameter); 
    } 
    if (this.right) {
        line(x+radius, y+radius, x+distance+radius+stagger, y+distance+radius)
        this.right.draw(x+distance+diameter+stagger, y+distance+diameter); 
    } 
  };
  
  Node.prototype.add = function(node) {
    if (node.val > this.val) {
      if (this.right) {
        this.right.add(node);
      } else {
        this.right = node;
        return;
      }
    } else if (node.val < this.val) {
      if (this.left) {
        this.left.add(node);
      } else {
        this.left = node;
        return;
      }
    } else if (node.val == this.val) {
      return;
    }
  }

  Node.prototype.remove = function(val) {
    if (val > this.val) {
      this.right.remove(val);
    } else if (val < this.val) {
      this.left.remove(val);
    }
    let temp;
    if (this.right == null) {
      temp = this.left;
    } else if (this.left == null) {
      temp = this.right;
    } else {
      let succParent = this;
      let succ = this.right;
      while (succ.left != null) {
        succParent = succ;
        succ = succ.left;
      }
      if (succParent != this) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }
      this.val = succ.val;
      return;
    }
  }
  
  Node.prototype.iot = function() {
    if (this.left) {
      this.left.iot();
    }
    console.log(this.val);
    if (this.right) {
      this.right.iot();
    }
  }