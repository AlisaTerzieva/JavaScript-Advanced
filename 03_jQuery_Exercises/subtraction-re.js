function subtract() {
    let firstNum = Number($('#firstNumber').val());
    let secondNum = Number($('#secondNumber').val());
    let result = firstNum - secondNum;
    $('#result').text(result);
}