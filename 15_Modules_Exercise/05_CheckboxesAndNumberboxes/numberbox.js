class Numberbox{
    constructor(label, selector, minValue, maxValue){
        this._label = label;
        this._elements = $(selector);
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._value = minValue;
        let self = this;
        this._elements.on('change', function () {
            self.value = $(this).val();
        })
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

    set value(number){
        if(Number(number) != NaN && Number(number) === parseInt(number, 10) && Number(number)>= this._minValue && Number(number) <= this._maxValue){
            this._value = Number(number);
        }
        else throw new Error('Value must be a valid integer between minValue and maxValue!');
    }
}

module.exports = Numberbox;