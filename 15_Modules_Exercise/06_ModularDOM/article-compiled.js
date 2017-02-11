let BaseElement = require('./base-element');
class Article extends BaseElement {
    constructor(title, content) {
        super();
        this._title = title;
        this._content = content;
        this._timestamp = new Date().getTime();
    }

    getElementString() {
        let html = '<div class="article">';
        html += `<div class="article-title">${ this._title }</div>`;
        html += `<p>${ this._content }</p>`;
        html += '</div>';
        this._element = html;
        return this._element;
    }
}

module.exports = Article;

//# sourceMappingURL=article-compiled.js.map