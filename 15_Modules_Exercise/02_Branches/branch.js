let Employee = require('./employee');
class Branch{
    constructor(id, branchName, companyName){
        if(Number(id) != NaN) {
            this._id = id;
        }
        this._branchName = '' + branchName;
        this._companyName = '' + companyName;
        this.employeesList = [];
    }

    get id(){
        return this._id;
    }

    set id(number){
        if(Number(number) != NaN) {
            this._id = number;
        }
    }

    get branchName(){
        return this._branchName;
    }

    set branchName(name){
        this._branchName = '' + name;
    }

    get companyName(){
        return this._companyName;
    }

    set companyName(name){
        this._companyName = '' + name;
    }

    get employees(){
        return this.employeesList;
    }

    hire(employee){
        this.employeesList.push(employee);
    }

    toString(){
        let string = `@ ${this.companyName}, ${this.branchName}, ${this.id}\nEmployed:\n`;
        if(this.employees.length != 0){
            for(let employee of this.employees){
                string += `** ${employee.toString()}\n`
            }
            string = string.slice(0, string.length-1);
        }
        else string += 'None...';
        return string;
    }
}

module.exports = Branch;