let BaseElement = require('./base-element');
class TitleBar extends BaseElement {
    constructor(title) {
        super();
        this._title = title;
        this._links = [];
    }

    addLink(href, name) {
        let link = `<a class="menu-link" href="${ href }">${ name }</a>`;
        this._links.push(link);
    }

    getElementString() {
        let html = `<div><span class="title">${ this._title }</span></div>\n`;
        html += '<div>\n';
        html += '<nav class="menu">\n';
        let linksBlock = this._links.join('|');
        html += linksBlock;
        html += '</nav>\n</div>\n';
        this._element = html;
        return this._element;
    }
}

module.exports = TitleBar;

//# sourceMappingURL=title-bar-compiled.js.map