function clearScreen() {
    document.getElementById('result').value = '';
    document.getElementById('final-result').textContent = '';
}

function deleteChar() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
        document.getElementById('final-result').textContent 
        = `Your Calculation Result is : ${result}`;
    } catch (error) {
        alert('Invalid input');
    }
}
