function process(input) {let listProcessor = (function () {
    let result = [];
    return{
        add: (value)=> result.push(value),
        remove: (value)=> result = result.filter(x => x!=value),
        print: ()=> console.log(result)
    }
})();
    for(let element of input){
        let el = element.split(' ');
        let command = el[0];
        let value = el[1];
        listProcessor[command](value);
    }
}

process(['add hello', 'add again', 'remove hello', 'add again', 'print']);