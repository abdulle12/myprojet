
const names = ["John", "Alice", "Bob", "Jasmine", "Michael"];

// Loop through the array
for (let i = 0; i < names.length; i++) {
    // Get the current name
    const name = names[i];

    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0) === 'j' || name.charAt(0) === 'J') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}

