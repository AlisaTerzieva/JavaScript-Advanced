let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
                        <input type="text" id="name">
                        <input type="text" id="income">
                        </div>`;
                        
describe("DOM testing", function () {
   it("Testing jsdom with Mocha", function () {
       let inptuName = $('#income');
       inptuName.val("Tuk sym");
       expect(inptuName.val()).to.equal("TUk sym", "ama hvyrlqm greshka :)")
   }) 
});