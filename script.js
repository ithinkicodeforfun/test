const current = document.getElementById('container');
for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.className = 'box';
    current.appendChild(div);
}
document.getElementById('askButton').addEventListener('click', function() {
    const userInput = prompt("What's your name?");
    if (userInput !== null) { // null means user pressed Cancel
        alert("Hello, " + userInput + "!");
    }
});