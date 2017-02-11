function ticketSort(array, sortingArg) {
    let ticketArr = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for(let element of array){
        let input = element.split('|');
        let ticketDestination = input[0];
        let ticketPrice = Number(input[1]);
        let ticketStatus = input[2];
        let ticket = new Ticket(ticketDestination, ticketPrice, ticketStatus);
        ticketArr.push(ticket);
    }

    function sortTickets(array, criteria) {
    let resultArr = [];
        if (criteria == 'destination'){
            resultArr = array.sort((a,b) => a.destination.localeCompare(b.destination))
        }
        else if (criteria == 'price'){
            resultArr = array.sort((a,b) => a.price - b.price)
        }
        else {
            resultArr = array.sort((a,b) => a.status.localeCompare(b.status))
        }
        return resultArr;
    }

    return sortTickets(ticketArr, sortingArg);
}

console.log(ticketSort(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

console.log(ticketSort(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));
