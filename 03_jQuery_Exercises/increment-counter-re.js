function increment(selector) {
    let textArea = $('<textarea class="counter"; disabled>0</textarea>')
    let buttonIncr = $('<button class="btn"; id="incrementBtn">Increment</button>')
    let buttonAdd = $('<button class="btn"; id="addBtn">Add</button>')
    let list = $('<ul class="results">');
    $(selector).append(textArea);
    $(selector).append(buttonIncr);
    $(selector).append(buttonAdd);
    $(selector).append(list);

    $('#incrementBtn').click(function () {
        let value = Number($('textarea').val());
        value++;
        $('textarea').val(value);
    });

    $('#addBtn').click(function () {
        let li = $('<li>').text($('textarea').val());
        li.appendTo('ul');
    })
}