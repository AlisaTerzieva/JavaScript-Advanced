function subtract() {
    let num1 = Number($('#firstNumber')[0].value);
    let num2 = Number($('#secondNumber')[0].value);
    let result = num1 - num2;
    $('#result')[0].textContent = result;
}