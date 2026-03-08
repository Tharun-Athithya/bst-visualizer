class Node {
    constructor(value) {
        this.value = value; // The number the user typed
        this.left = null;   // The branch to smaller numbers (starts empty)
        this.right = null;  // The branch to larger numbers (starts empty)
    }
}

// Let's test if it works!
const myFirstNode = new Node(20);
console.log("My new node is:", myFirstNode);