class Node {
    constructor(value) {
        this.value = value; // The number the user typed
        this.left = null;   // The branch to smaller numbers (starts empty)
        this.right = null;  // The branch to larger numbers (starts empty)
    }
}

// Grab the HTML elements using their IDs
const insertBtn = document.getElementById('insert-btn');
const nodeValueInput = document.getElementById('node-value');
const treeContainer = document.getElementById('tree-container');

// Add a click listener to the button
insertBtn.addEventListener('click', () => {
    
    // Get the exact number the user typed
    const value = nodeValueInput.value;

    // Safety check: Prevent empty inputs
    if (value === '') {
        alert("Please enter a number!");
        return; // Stops the code from running further
    }

    // Create the new node using your blueprint
    const newNode = new Node(value);
    
    // Print it to the console to prove it exists
    console.log("Success! Created a new node:", newNode);
    // --- NEW DAY 5 CODE ---
    
    // A. Ask HTML to create a brand new, empty <div> tag
    const visualNode = document.createElement('div');
    
    // B. Tell that <div> to use the ".node" CSS paint we just wrote
    visualNode.classList.add('node');
    
    // C. Put the exact number the user typed directly inside the circle
    visualNode.innerText = value;
    
    // D. Drop the finished circle physically into the large white box on the screen!
    treeContainer.appendChild(visualNode);

    // Clear the input box so it is ready for the next number
    nodeValueInput.value = '';
});