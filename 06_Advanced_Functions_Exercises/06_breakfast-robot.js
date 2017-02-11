function breakfastRobot() {

    let ingredients ={
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    (function () {
        return {
            restock: (element, quantity)=> {
                ingredients.element += quantity;
                return "Success";
            },
            prepare: (meal, quantity)=> {
                
            },
            report: ()=>{
            }
        }
    })()
}


/* How it should look like:

(function solve() {

 //Your code is here

 return function(line){
 //Split line and call robot with the command and parameters
 }
 }())

 */