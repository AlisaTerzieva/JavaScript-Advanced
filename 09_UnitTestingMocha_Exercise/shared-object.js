let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
        </div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('sharedObject Tests', function () {
    describe('default property state', function () {
        it('should have property name', function () {
            expect(sharedObject).to.have.property('name');
        });
        it('should have property income', function () {
            expect(sharedObject).to.have.property('income')
        });
        it('should have properties', function () {
           expect(sharedObject).to.have.property('changeName');
           expect(sharedObject).to.have.property('changeIncome');
           expect(sharedObject).to.have.property('updateName');
           expect(sharedObject).to.have.property('updateIncome')
        });
        it('name property should start as null', function () {
            expect(sharedObject.name).to.equal(null, "Name did not start with value Null")
        });
        it('income property should start as null', function () {
            expect(sharedObject.income).to.equal(null, "Income did not start with value Null")
        });
    });
    describe('changeName() Tests', function () {
        it('should not change name property with empty string as an argument', function () {
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal(null, "Name textbox contained an empty string")
        });
        it('should not change name property with invalid arguments and preexisting value', function () {
            sharedObject.name = 'Greshka';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('Greshka')
        });
        it('should not change name with invalid arguments and preexisting value', function () {
            let nameTextbox = $('#name');
            nameTextbox.val('Stamat');
            sharedObject.changeName('');
            expect(nameTextbox.val()).to.equal('Stamat');
        });
        it('should change textbox value with valid argument', function () {
            let nameTextbox = $('#name');
            sharedObject.changeName('Pesho');
            expect(nameTextbox.val()).to.equal('Pesho');
        });
        it('should change name property with valid arguments', function () {
            sharedObject.changeName('Vtora greshka');
            expect(sharedObject.name).to.equal('Vtora greshka')
        });
    });
    describe('changeIncome() Tests', function () {
        describe('invalid input tests', function () {
            it('should not make changes if the passed parameter is not positive', function () {
                sharedObject.income = 10;
                sharedObject.changeIncome(-4);
                expect(sharedObject.income).to.equal(10)
            });
            it('should not make changes if the passed parameter is empty string', function () {
                sharedObject.income = 10;
                sharedObject.changeIncome('');
                expect(sharedObject.income).to.equal(10)
            });
            it('should not make changes if the passed parameter is zero', function () {
                sharedObject.income = 30;
                sharedObject.changeIncome(0);
                expect(sharedObject.income).to.equal(30)
            });
            it('should not make changes if the passed parameter is not a number', function () {
                sharedObject.income = 260;
                sharedObject.changeIncome('Gosho');
                expect(sharedObject.income).to.equal(260)
            });
            it('should not make changes if the passed parameter is not a number', function () {
                sharedObject.income = 220;
                sharedObject.changeIncome({obj:'Gosho'});
                expect(sharedObject.income).to.equal(220)
            });
            it('should not change income if the argument is a float number', function () {
                sharedObject.income = 87;
                sharedObject.changeIncome(56.34);
                expect(sharedObject.income).to.equal(87)
            })
        });
        describe('valid input tests', function () {
            it('should make changes with valid parameter', function () {
                sharedObject.income = 140;
                sharedObject.changeIncome(56);
                expect(sharedObject.income).to.equal(56);
            });
            it('should change textbox value with valid parameter', function () {
                let incomeTextbox = $('#income');
                sharedObject.changeIncome(45);
                expect(incomeTextbox.val()).to.equal('45')
            });
            it('should not change textbox with invalid parameter', function () {
               let incomeTextbox = $('#income');
               incomeTextbox.val('78');
               sharedObject.changeIncome(24.566);
               expect(incomeTextbox.val()).to.equal('78');
            });
            it('should not change textbox with invalid parameter', function () {
                let incomeTextbox = $('#income');
                incomeTextbox.val('78');
                sharedObject.changeIncome(0);
                expect(incomeTextbox.val()).to.equal('78');
            });
            it('should not change textbox with invalid parameter', function () {
                let incomeTextbox = $('#income');
                incomeTextbox.val('8');
                sharedObject.changeIncome(-45);
                expect(incomeTextbox.val()).to.equal('8');
            });
            it('should not change textbox with invalid parameter', function () {
                let incomeTextbox = $('#income');
                incomeTextbox.val('65');
                sharedObject.changeIncome('gosho e greshka');
                expect(incomeTextbox.val()).to.equal('65');
            })
        })
    });
    describe('updateName() Tests', function () {
        it('should not change name property with invalid arguments', function () {
            sharedObject.name = 'Gosho';
            let nameTextbox = $('#name');
            nameTextbox.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Gosho')
        });
        it('should change name property with valid arguments', function () {
            sharedObject.name = 'Not changed';
            let nameTextbox = $('#name');
            nameTextbox.val('Changed name');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Changed name')
        });
    });
    describe('updateIncome() Tests', function () {
        it('should not change income for empty string', function () {
           sharedObject.income = 898;
           let incomeTextbox = $('#income');
           incomeTextbox.val('');
           sharedObject.updateIncome();
           expect(sharedObject.income).to.equal(898);
        });
        it('should not change income for string', function () {
            sharedObject.income = 898;
            let incomeTextbox = $('#income');
            incomeTextbox.val('greshka');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(898);
        });
        it('should not change income for negative numbers', function () {
            sharedObject.income = 56;
            let incomeTextbox = $('#income');
            incomeTextbox.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(56)
        });
        it('should not change income with zero', function () {
            sharedObject.income = 32;
            let incomeTextbox = $('#income');
            incomeTextbox.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(32);
        });
        it('should not change income with floating point number', function () {
            sharedObject.income = 22;
            let incomeTextbox = $('#income');
            incomeTextbox.val('67.876');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(22);
        });
        it('should change income property with valid arguments', function () {
            sharedObject.income = 87;
            let incomeTextbox = $('#income');
            incomeTextbox.val('9786');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(9786);
        })
    })
});
