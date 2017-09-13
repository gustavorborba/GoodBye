let Answer = (function () {

    function show() {

        document.querySelector(".time.days").innerHTML = '01';
        document.querySelector(".time.hours").innerHTML = '02';
        document.querySelector(".time.minutes").innerHTML = '00';
        document.querySelector(".time.seconds").innerHTML = '00';
    }

    return {
        show,
    };
})();
