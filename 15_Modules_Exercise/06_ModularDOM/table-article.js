let Article = require('./article');

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

module.exports = TableArticle;