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
    const audio = new Audio('keysound1.mp3'); 
    audio.play();
    let keyHistory = keyHistoryElement.textContent;
    if (keyHistory === 'None') {
        keyHistory = keyCombination;
    } else {
        keyHistory += ', ' + keyCombination;
    }
    keyHistoryElement.textContent = keyHistory;
    const maxHistoryLength = 10; 
    const historyArray = keyHistory.split(', ');
    if (historyArray.length > maxHistoryLength) {
        keyHistoryElement.textContent = historyArray.slice(-maxHistoryLength).join(', ');
    }
});
