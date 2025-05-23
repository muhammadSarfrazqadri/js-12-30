// The secret code we're looking for
const secretCode = 'wesbos';
let pressed = [];
const keysPressedElement = document.getElementById('keysPressed');

// Listen for keyup events
window.addEventListener('keyup', (e) => {
    // Add the pressed key to the array
    pressed.push(e.key);
    
    // Keep the array at the length of the secret code
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    // Update the display of pressed keys
    keysPressedElement.textContent = pressed.join('');
    
    // Check if the pressed sequence matches the secret code
    if (pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        // Create unicorns and rainbows
        cornify_add();
        
        // Reset the display
        pressed = [];
        keysPressedElement.textContent = '';
        
        // Show success message temporarily
        keysPressedElement.textContent = 'Success! Keep typing for more magic!';
        setTimeout(() => {
            keysPressedElement.textContent = '';
        }, 1000);
    }
});

// Load cornify.js dynamically
const script = document.createElement('script');
script.src = 'https://www.cornify.com/js/cornify.js';
document.head.appendChild(script);
