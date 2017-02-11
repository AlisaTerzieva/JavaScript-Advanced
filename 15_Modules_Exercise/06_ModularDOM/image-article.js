let Article = require('./article');
class ImageArticle extends Article{
    constructor(title, content, image){
        super(title, content);
        this._image = image;
    }

    getElementString(){
        let html = '<div class="article">';
        html += `<div class="article-title">${this._title}</div>`;
        html += `<div class="image"><img src="${this._image}"></div>`;
        html += `<p>${this._content}</p>`;
        html += '</div>';
        this._element = html;
        return this._element;
    }
}

module.exports = ImageArticle;