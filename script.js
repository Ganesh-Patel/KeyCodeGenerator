
function playSound() {
    const audio = new Audio('keysound1.mp3'); 
    audio.play();
}
let keyHistory = [];
document.addEventListener('keydown', function(event) {
    const keyName = event.key;
    const keyCode = event.keyCode;
    const keyHistoryElement = document.getElementById('key-history');
    let keyCombination = '';
    if (event.ctrlKey && keyName !== 'Control') keyCombination += 'Ctrl + ';
    if (event.altKey && keyName !== 'Alt') keyCombination += 'Alt + ';
    if (event.shiftKey && keyName !== 'Shift') keyCombination += 'Shift + ';
    if (event.metaKey && keyName !== 'Meta') keyCombination += 'Meta + ';

    if (!['Control', 'Alt', 'Shift', 'Meta'].includes(keyName)) {
        keyCombination += keyName;
    } else if (!keyCombination) {
        keyCombination = keyName;
    }

    document.getElementById('key').textContent = keyCombination;
    document.getElementById('key-code').textContent = keyCode;

    if (keyCombination.includes('Ctrl') || keyCombination.includes('Alt') || keyCombination.includes('Shift') || keyCombination.includes('Meta')) {
        playSound();
    }

    if (keyHistoryElement.textContent === 'None') {
        keyHistoryElement.textContent = keyCombination;
    } else {
        keyHistoryElement.textContent += ', ' + keyCombination;
    }
    keyHistory = keyHistoryElement.textContent.split(', ');
    if (keyHistory.length > 10) {
        keyHistoryElement.textContent = keyHistory.slice(-10).join(', ');
    }
});
