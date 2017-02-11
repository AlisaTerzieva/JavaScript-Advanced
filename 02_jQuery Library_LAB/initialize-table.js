function initializeTable() {

    let country, capital;

    function createRow() {
        let row = $('<tr>');
        let tdCapital = $(`<td>${capital}</td>`);
        let tdCountry = $(`<td>${country}</td>`);
        let up = $('<a id="up" href="#">[Up]</a>');
        let down = $('<a id="down" href="#">[Down]</a>');
        let del = $('<a id="delete" href="#">[Delete]</a>').click(deleteRow());
        let actions = $('<td>');
        actions.append(up);
        actions.append(down);
        actions.append(del);
        tdCountry.appendTo(row);
        tdCapital.appendTo(row);
        actions.appendTo(row);
        row.appendTo($('#countriesTable'));
        linksShown();
    }

    function addCountries(countryInsert, capitalInsert) {
        country = countryInsert;
        capital = capitalInsert;
        createRow();
    }
    addCountries('Bulgaria', 'Sofia');
    addCountries('Germany', 'Berlin');
    addCountries('Russia', 'Moscow');

    $('#createLink').click(function () {
        country = $('#newCountryText').val();
        capital = $('#newCapitalText').val();
        createRow();
        linksShown();
    });

    $('table').on('click', 'a#down', function () {
        let thisRow =  $(this).parent().parent();
        thisRow.insertAfter(thisRow.next());
        linksShown();
    });

    $('table').on('click', 'a#up', function () {
        let thisRow =  $(this).parent().parent();
        thisRow.insertBefore(thisRow.prev());
        linksShown();
    });

    function deleteRow() {
        $('table').on('click', 'a#delete', function () {
            let thisRow =  $(this).parent().parent();
            thisRow.remove();
            linksShown();
        });
    }

    function linksShown() {
        let tableRows = $('#countriesTable tr');
        $(tableRows).find('a').css('display', 'inline');
        $(tableRows[2]).find('a#up').css('display', 'none');
        $($(tableRows.last()).find('a#down').css('display', 'none'));
    }
}