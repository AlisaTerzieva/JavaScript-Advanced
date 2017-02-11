 let BaseElement = require('./base-element');
 let TitleBar = require('./title-bar');
 let Article = require('./article');
 let Footer = require('./footer');
 let ImageArticle = require('./image-article');
 let TableArticle = require('./table-article');

 result.BaseElement = BaseElement;
 result.TitleBar = TitleBar;
 result.Article = Article;
 result.Footer = Footer;
 result.ImageArticle = ImageArticle;
 result.TableArticle = TableArticle;


/*

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


class TitleBar extends BaseElement{
    constructor(title){
        super();
        this._title = title;
        this._links = [];
    }

    addLink(href, name){
        let link = `<a class="menu-link" href="${href}">${name}</a>`;
        this._links.push(link);
    }

    getElementString(){
        let html = `<div><span class="title">${this._title}</span></div>\n`;
        html += '<div>\n';
        html += '<nav class="menu">\n';
        let linksBlock = this._links.join('|');
        html += linksBlock;
        html += '</nav>\n</div>\n';
        this._element = html;
        return this._element;
    }
}


class Footer extends BaseElement{
    constructor(message){
        super();
        this._message = message;
    }

    getElementString(){
        this._element = `<footer>Copyright &copy; ${this._message}</footer>`;
        return this._element;
    }
}

class Article extends BaseElement{
    constructor(title, content){
        super();
        this._title = title;
        this._content = content;
        this._timestamp = new Date().getTime();
    }

    getElementString(){
        let html = '<div class="article">';
        html += `<div class="article-title">${this._title}</div>`;
        html += `<p>${this._content}</p>`;
        html += '</div>';
        this._element = html;
        return this._element;
    }
}

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

class TableArticle extends Article{
    constructor(title, content){
        super(title, content);
        this._headings = null;
        this._data = null;
    }

    loadData(headings, data){
        this._headings = headings;
        this._data = data;
    }

    getElementString(){
        let html = '<div class="article">';
        html += `<div class="article-title">${this._title}</div>`;
        html += `<p>${this._content}</p>`;
        html += '<div class="table">';
        html += '<table class="data">';

        let tableHeadings = '<tr>';
        for(let heading of this._headings){
            let headingHTML = `<th>${heading}</th>`;
            tableHeadings += headingHTML;
        }
        tableHeadings += '</tr>';
        html += tableHeadings;

        let tableData ='';
        for(let i = 0; i < this._data.length; i++){
            tableData += '<tr>';
            let obj = this._data[i];
            for(let j = 0; j < Object.keys(obj).length; j++){
                tableData += `<td>${obj[this._headings[j].toLowerCase().replace(' ', '')]}</td>`;
            }
            tableData += '</tr>';
        }
        html += tableData;
        html += '</table>';
        html += '</div>';
        html += '</div>';
        this._element = html;
        return this._element;
    }
}

*/
