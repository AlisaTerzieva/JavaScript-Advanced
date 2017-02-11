class Checkbox{
    constructor(label, selector){
        this._label = '' + label;
        this._selector = selector;
        this._elements = $(selector);
        this._value = $(selector).is(':checked');
        let self = this;
        this._elements.on('change',function () {
            self.value = $(this).prop('checked');
        });
    }
    get label(){
        return this._label;
    }

    get elements(){
        return this._elements;
    }

    get value(){
        return this._value;
    }

    set value(value){
        if(typeof value == 'boolean') {
            this._value = value;
            for(let element of this._elements){
                $(element).prop('checked', value);
            }
        }
        else throw new Error("Checkbox value must be of Boolean type!");
    }
}

module.exports = Checkbox;