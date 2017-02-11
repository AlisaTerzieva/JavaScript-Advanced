function generateSummary(selector) {
    let result = $('<div id="summary">');
    let heading = $('<h2>Summary</h2>');
    result.append(heading);
    let sumText = $('<p>');
    $(selector).click(function () {
        sumText.append($('#content>p>strong').text());
        result.append(sumText);
        $('#content').append(result);
    })
}