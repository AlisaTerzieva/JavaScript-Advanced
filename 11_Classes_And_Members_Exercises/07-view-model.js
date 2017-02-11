class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this._invalidSymbols = regex;
        this.selector = selector;

        let that = this;
        $(selector).on('input change', function () {
            that.value = $(this).val();
        });
    }

    get value(){
        return $(this.selector).val();
    }
    set value(newVal){
        $(this.selector).val(newVal);
    }
    get elements(){
        return this._elements;
    }
    isValid(){
        return !this._invalidSymbols.test($(this.selector).val());
    }
}