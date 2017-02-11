class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                var placeholders = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (placeholders.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < placeholders.length; i++) {
                        let number = Number(placeholders[i].substring(1, placeholders[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(placeholders[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}
;


let expect = require('chai').expect;

describe('Console Tests', function () {
    describe('with a single argument, without a template string', function () {

        it('if a single argument is passed and it is a string', function () {
            expect(Console.writeLine('dog')).to.equal('dog')
        });
        it('if a single argument is passed and it is an object', function () {
            let obj = {edno:'dve'};
            expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj))
        });
    });
    describe('with two arguments, one of which is a template string', function () {
        it('should throw error if first arg is not a string', function () {
            expect(()=>Console.writeLine(1, 'edno')).to.throw(TypeError)
        });
        it('should throw error if the number of arguments does not correspond to the placeholders count', function () {
            expect(()=>Console.writeLine('{0}{1}{2}', 'edno', 'dve')).to.throw(RangeError);
        });
        it('should throw an error if the number in the placeholders does not correspond to the amount of arguments', function () {
            expect(()=>Console.writeLine('{3}{90}', 'edno', 'dve')).to.throw(RangeError);
        });
    });
    describe('valid tests', function () {
        it('should replace the placeholders with given arguments', function () {
            expect(Console.writeLine('{0}{1}{2}', '0','1','2')).to.equal('012');
        })
        it('should replace the placeholders with given arguments', function () {
            expect(Console.writeLine('{0}{2}{1}', '0','1','2')).to.equal('021');
        })
    })
});
