function attachEvents() {
    let townsArr = [];
    $('li').on('click',function() {
        if($(this).attr('data-selected') != undefined){
            $(this).css('background-color', '');
            $(this).removeAttr('data-selected');
            let index = townsArr.indexOf($(this).text());
            townsArr.splice(index,1);
        }
        else {
            $(this).css('background-color', '#DDD');
            $(this).attr('data-selected','true');
            townsArr.push($(this).text());
        }
    });
    $('#showTownsButton').click(()=> {
        let selected = townsArr.join(', ');
        $('#selectedTowns').html(`Selected towns: ${selected}`);
    })
}