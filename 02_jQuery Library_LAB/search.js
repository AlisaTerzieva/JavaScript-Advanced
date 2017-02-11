function search() {
    let inputText = $('#searchText')[0].value;
    let townsArr = $('#towns li');
    let matchesFound = 0;
    for (let i = 0; i < townsArr.length; i ++){
        let townName = townsArr[i].textContent;
        if(townName.indexOf(inputText)>-1){
            townsArr[i].style.fontWeight = 'bold';
            matchesFound++;
        }
        else townsArr[i].style.fontWeight = '';
    }
    $('#result')[0].textContent = matchesFound + " matches found.";
}