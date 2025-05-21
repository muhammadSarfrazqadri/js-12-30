const pressed = [];
const secretCode = 'harsh';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('Secret Code Matched!');
    // یہاں آپ اپنی مرضی کا ایکشن لے سکتے ہیں، مثلاً:
    // document.getElementById('output').textContent = 'Secret Code Activated!';
  }
});
