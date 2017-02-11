let BaseElement = require('./base-element');

class Footer extends BaseElement {
    constructor(message) {
        super();
        this._message = message;
    }

    getElementString() {

        return `<footer>Copyright &copy; ${ this._message }</footer>`;
    }
}

module.exports = Footer;

//# sourceMappingURL=footer-compiled.js.map