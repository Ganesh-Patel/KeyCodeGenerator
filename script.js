// script.js
document.addEventListener('keydown', function(event) {
    const keyName = event.key;
    const keyCode = event.keyCode;

    document.getElementById('key').textContent = keyName;
    document.getElementById('key-code').textContent = keyCode;
});
