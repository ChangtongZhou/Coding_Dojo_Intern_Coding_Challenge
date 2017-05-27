class Node{
  constructor (val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  };

  // Add nodes to the BST recursively
  add (val){
    this.root = this.addRec(this.root, val);
  };

  addRec(root, val){
    var n = new Node(val);
    // if root is empty
    if(root == null){
      root = n;
    };
    // otherwise, do recursion down the tree
    if (val < root.val){
      root.left = this.addRec (root.left, val);
    } else if (val > root.val){
      root.right = this.addRec (root.right, val);
    };

    return root;
  };

  // Print the BST in order recursively
  inorder(){
    this.inorderRec (this.root);
  }

  inorderRec (root){
    if (root != null){
      this.inorderRec(root.left);
      console.log("InoderRec test: ", root.val);
      this.inorderRec (root.right);
    }
  }

  // Remove function: recursively
  remove(val){
    this.removeRec (this.root, val);
  }

  removeRec(node, val){
    if (node === null){
      return null;
    }
    // console.log("what is node here: ", node);
    if (val == node.val){
      // Node has no children
      if (node.left === null && node.right === null){
        return null;
      };
      // Node has no left child
      if (node.left === null){
        return node.right;
      }
      // Node has no right child
      if (node.right === null){
        return node.left;
      }
      // Node has two children
      var tmp = this.getSmallest(node.right);
      node.val = tmp.val;
      node.right = this.removeRec(node.right, tmp.val);
      return node;
    }
    else if (val < node.val){
      node.left = this.removeRec(node.left, val);
      return node;
    }
    else{
      node.right = this.removeRec(node.right, val);
    };
  };

  getSmallest(node){
    if (node.left === null){
      return node;
    }else{
      return this.getSmallest(node.left);
    }
  };

  height(){
    var res = this.heightRec (this.root)
    console.log("The maximum height from root to leaf is: ", res);
  };

  heightRec(node){
    if (node === null) return 0;
    var leftHeight = this.heightRec(node.left);
    // console.log("lefth: ", leftHeight);
    var rightHeight = this.heightRec(node.right);
    // console.log("right: ", rightHeight);
    if (leftHeight > rightHeight){
      return leftHeight + 1;
    } else{
      return rightHeight + 1;
    }
  };

};

var t = new BST();

t.add(52);
t.add(12);
t.add(36);
t.add(55);
t.add(23);
t.add(3);
t.add(45);
t.add(16);
t.add(37);
t.add(99);
t.add(22);
t.inorder();
console.log("---------------------------- BST after removing ---------------------");
t.remove(3);
t.remove(55);
t.remove(99);
t.inorder();
t.height();
