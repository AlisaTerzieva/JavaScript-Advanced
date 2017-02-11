class BaseElement{
    constructor(){
        if(this.constructor.name == 'BaseElement'){
            throw new Error('BaseElement cannot be instantiated!');
        }
        this._element = null;
    }
    appendTo(selector){
        this.createElement();
        $(selector).append(this._element);
    }
    createElement(){
        this._element = this.getElementString();
    }

    getElementString(){
        return $(this._element).prop('outerHTML');
    }
}

module.exports = BaseElement;