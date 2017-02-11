function extractText() {
    let items = $('#items li');
    let result = '';
    for (let i = 0; i < items.length; i++){
    if (i < items.length - 1) {
        result += items[i].textContent + ', ';
    }
    else result += items[i].textContent;
    }
    $('#result')[0].textContent = result;
}