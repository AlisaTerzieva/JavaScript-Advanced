function domSearch(selector, caseSensitive) {
    let element = $(selector);

//Create DOM elements
    //Add Items HTML:
    let divAdd = $('<div class="add-controls">');
    let labelAdd = $('<label>').text("Enter text: ");
    let inputAdd = $('<input>');
    let anchorAdd = $('<a class="button" style="display: inline-block;">').text("Add");
    labelAdd.append(inputAdd);
    divAdd.append(labelAdd);
    divAdd.append(anchorAdd);
    $(selector).append(divAdd);

    //Search Items HTML:
    let divSearch = $('<div class="search-controls">');
    let labelSearch = $('<label>').text("Search: ");
    let inputSearch = $('<input>');
    labelSearch.append(inputSearch);
    divSearch.append(labelSearch);
    $(selector).append(divSearch);

    //Result items HTML:
    let divResult = $('<div class="result-controls">');
    let ul = $('<ul class="items-list">');
    divResult.append(ul);
    $(selector).append(divResult);

//Implemented add items to list:
    $(".add-controls>a.button").click(function () {
        let newItem = $("div.add-controls>label>input").val();
        let li = $("<li class='list-item'>");
        let anchor = $("<a class='button'>").text("X");
        let item = $("<strong>").text(newItem);
        li.append(anchor);
        li.append(item);
        $(".items-list").append(li);
    });

//Implemented remove list items:
    $(document).on('click', '.items-list>li>a.button', function(){
        $(this).parent().remove();
    });

//Search for element by given string:
    $('.search-controls>label>input').keyup(function () {
        let value = $(this).val().toLowerCase();
        $('.result-controls ul li').hide().filter(function(){
            return $(this).html().substring(0, value.length).toLowerCase() == value;
        }).show();
    })
}