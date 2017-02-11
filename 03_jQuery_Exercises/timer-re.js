function timer() {
    let seconds = 0;

    let timer = setInterval(step, 1000);
    function step() {
        seconds++;
    }

    $('#start-timer').click(function () {
        clearInterval(timer);

    })
}