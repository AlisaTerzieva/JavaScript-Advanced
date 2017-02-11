class SortedList {
    constructor (){
        this.arr = [];
        this.size = 0;
    }

    add(element){
        this.arr.push(element);
        this.size++;
        this.arr = this.arr.sort((a,b)=> a-b);
    }

    remove(index){
        if(index>-1 && index<this.size) {
            this.arr.splice(index, 1);
            this.size--;
        }
    }

    get(index){
        if(index>-1 && index<this.size+1) {
            return this.arr[index];
        }
    }
}