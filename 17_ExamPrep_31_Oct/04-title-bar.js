class TitleBar{
    constructor(title){
        this.title = title;
        this.menuList = $('<nav class="menu">');
    }
    addLink(href, name){
        let link = $('<a class="menu-link">').attr('href', `${href}`).text(name);
        $(this.menuList).append(link);
    }

    appendTo(selector){
        let header = $('<header class="header">');
        let headdiv = $('<div class="header-row">');
        let navdiv = $('<div class="drawer" style="display: none">');
        $(headdiv).append($('<a class="button">').html('&#9776;').on('click', function () {
            $('.drawer').toggle();
        }));
        $(headdiv).append($('<span class="title">').text(this.title));
        $(header).append(headdiv);
        $(navdiv).append(this.menuList);
        $(header).append(headdiv);
        $(header).append(navdiv);
        $(selector).prepend(header);
    }
}

