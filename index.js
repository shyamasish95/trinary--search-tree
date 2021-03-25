// Import stylesheets
import "./style.css";

// Write Javascript code!
class Node {
  constructor(data, left = null, right = null, center = null) {
    this.root = data;
    this.left = left;
    this.right = right;
    this.center = center;
  }
}
class TST {
  constructor() {
    this.root = null;
  }
  insertData(data) {
    var newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.root < node.root) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.root > node.root) {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      if (node.center == null) {
        node.center = newNode;
      } else {
        this.insertNode(node.center, newNode);
      }
    }
  }

  removeData(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if (node == null) return null;
    else if (key < node.root) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.root) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.center !== null && node.center.root == key) {
        node.center = null;
        return node;
      }
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else {
        //node has 2 children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.root = tempNode.root;
        node.right = this.removeNode(node.right, data);
      }
    }
  }
}
var obj = new TST();
obj.insertData(5);
obj.insertData(2);
obj.insertData(10);
obj.insertData(22);
obj.insertData(8);
obj.insertData(3);
obj.insertData(5);
obj.removeData(2);
console.log(obj.root);
