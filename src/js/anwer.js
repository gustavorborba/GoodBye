let Answer = (function () {

    function show() {
        document.querySelector(".answer-no-img").classList.add('hidden');
        document.querySelector(".answer-yes-img").classList.remove('hidden');

        document.querySelector(".time.days").innerHTML = '00';
        document.querySelector(".time.hours").innerHTML = '00';
        document.querySelector(".time.minutes").innerHTML = '00';
        document.querySelector(".time.seconds").innerHTML = '00';
    }

    function cheat() {
        clearInterval(Timer.getIntervalId());
        show();
    }

    return {
        show,
        cheat
    };
})();
