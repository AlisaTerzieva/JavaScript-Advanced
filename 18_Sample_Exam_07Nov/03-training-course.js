class TrainingCourse{
    constructor(title, trainer){
        this.title = '' + title;
        this.trainer = '' + trainer;
        this.topics = [];
    }

    addTopic(title, date){
        function compare(a, b) {
            if(a['date'] > b['date']) return 1;
            if(a['date'] < b['date']) return -1;
        }
    
        this.topics.push({'title':title, 'date':date});
        this.topics = this.topics.sort(compare);
    }

    get lastTopic(){
        return this.topics[this.topics.length -1];
    }

    get firstTopic(){
        return this.topics[0];
    }

    toString(){
        let str = `Course "${this.title}" by ${this.trainer}\n`;
        if (this.topics.length > 0){
            for(let entry of this.topics){

                str += ` * ${entry['title']} - ${entry['date']}\n`
            }
        }
        str = str.slice(0, str.length - 1);
        return str;
    }
}


let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);
js.addTopic('hubavTopic', new Date(2016, 9, 6, 18, 0))
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("First topic: " + JSON.stringify(js.firstTopic));

