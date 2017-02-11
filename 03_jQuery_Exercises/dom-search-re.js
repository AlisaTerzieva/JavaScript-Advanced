function domSearch(selector, isCaseSensitive) {

    //create Add controls
    let addControls = $('<div class="add-controls">');
    let labelAdd = $('<label>');
    let inputAdd = $('<input>');
    let anchorAdd = $('<a class="button" style="display: inline-block;">Add</a>');
    labelAdd.text("Enter text:");
    labelAdd.append(inputAdd);
    addControls.append(labelAdd);
    addControls.append(anchorAdd);
    $(selector).append(addControls);


    //create Search controls
    let searchControls = $('<div class="search-controls">');
    let labelSearch = $('<label>');
    labelSearch.text("Search:");
    let inputSearch = $('<input>').on('input', searchElement);
    labelSearch.append(inputSearch);
    searchControls.append(labelSearch);
    $(selector).append(searchControls);

    //create Result controls
    let resultControls = $('<div class="result-controls">');
    let ul = $('<ul class="items-list">');
    resultControls.append(ul);
    $(selector).append(resultControls);

    $('a:contains("Add")').click(function () {
        let value = $('input').val();
        $('input').val('');
        if (value.length > 0) {
            let li = $('<li class="list-item">');
            let anchor = $('<a class="button">X</a>').click(clickElement);
            let element = $('<strong>');
            element.text(value);
            li.append(anchor);
            li.append(element);
            ul.append(li);
        }
    });

    function clickElement() {
        $(this).parent().remove();
    }

    function searchElement() {
        let value = $(this).val();
        $('.items-list').children().each(function () {
            let thisLi = $(this);
            let element = thisLi.children().last().text();
            if(isCaseSensitive == true) {
                if (element.indexOf(value) == -1) {
                    thisLi.css('display', 'none');
                }
                else thisLi.css('display', '');
            }
            else {
                element = element.toLowerCase();
                value = value.toLowerCase();
                if (element.indexOf(value) == -1) {
                    thisLi.css('display', 'none');
                }
                else thisLi.css('display', '');
            }
        });
    }
}