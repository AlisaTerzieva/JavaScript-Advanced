function attachEvents() {
    let towns = $('a.button');
    towns.on('click', buttonClicked);
    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}