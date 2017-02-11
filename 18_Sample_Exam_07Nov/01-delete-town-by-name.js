function attachEvents() {
    $('#btnDelete').on('click', function () {
        let townName = $('#townName').val();
        let isFound = false;
        $('#towns option').each(function () {
            if($(this).val() == townName){
                $(this).remove();
                isFound = true;
            }
        });
        isFound?$('#result').text(`${townName} deleted.`):$('#result').text(`${townName} not found.`);

        $('#townName').val('');
    });
}