let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}


describe('armageDOM tests', function () {
    beforeEach(function () {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
    });
    it('should take two arguments', function () {
        let selector = $('.target');
        let unchanged = selector.html();
        nuke('.target');
        expect(selector.html()).to.equal(unchanged)
    });
    it('should take strings as arguments', function () {
        let selector1 = $('.target');
        let selector2 = 5;
        let unchanged = selector1.html();
       nuke('.target', 5);
       expect(selector1.html()).to.equal(unchanged)
    });
    it('should remove nodes with valid selectors', function () {
        nuke('.inside', '.nested');
        let currentState = $('.inside').filter('.nested').html();
        expect(currentState).to.equal(undefined)
    });
    it('should not remove nodes with same selectors', function () {
        let previousState = $('body');
        nuke('.target', '.target');
        let currentState = $('body');
        expect(currentState.html()).to.equal(previousState.html());
    })
});
