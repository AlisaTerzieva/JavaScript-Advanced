function initializeTable() {
    $('#createLink').click(createCountry);
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');
    addCountryToTable('Turkey', 'Istanbul');

}

function createCountry(newCountry, newCapital) {
    let country = $('#newCountryText').val();
    let capital = $('#newCapitalText').val();
    addCountryToTable(country, capital);

}
function addCountryToTable(country, capital) {
    let row = $('<tr>')
        .append($("<td>").text(country))
        .append($("<td>").text(capital))
        .append($("<td>")
            .append($("<a href='#'>[Up]</a>").click(moveUp))
            .append(" ")
            .append($("<a href='#'>[Down]</a>").click(moveDown))
            .append(" ")
            .append($("<a href='#'>[Delete]</a>").click(deleteRow)));
    $('#countriesTable').append(row);
}


function moveUp() {

}

function moveDown() {

}

function deleteRow() {
    let row = $(this);
    //row.parent().css({'background-color': 'blue'});
    
    //css('background', 'blue');
   // row.parent().parent().remove()
}