let Timer = (function () {

     const TIMER_ID = 'timer';
     const THOUSAND_TIME = 1000;
     const SIXT_TIME = 60;

     let intervalId;

     function checkTime(time) {
         time = Math.floor(time);
         return (time < 10) ? "0" + time : time;
     }

     function getCountDownDate() {
         let countDownDate = new Date();
         countDownDate.setMonth(9);
         countDownDate.setDate(13);
         countDownDate.setHours(17);
         countDownDate.setMinutes(0);
         countDownDate.setSeconds(0);
         return countDownDate.getTime();
     }

     function start() {
         intervalId = setInterval(function () {
             let now = new Date().getTime();
             let countDownDate = getCountDownDate();
             let distance = countDownDate - now;

             let days = checkTime(Math.floor(distance / (THOUSAND_TIME * SIXT_TIME * SIXT_TIME * 24)));
             let hours = checkTime((distance % (THOUSAND_TIME * SIXT_TIME * SIXT_TIME * 24)) / (THOUSAND_TIME * SIXT_TIME * SIXT_TIME));
             let minutes = checkTime((distance % (THOUSAND_TIME * SIXT_TIME * SIXT_TIME)) / (THOUSAND_TIME * SIXT_TIME));
             let seconds = checkTime((distance % (THOUSAND_TIME * SIXT_TIME)) / THOUSAND_TIME);

             document.querySelector(".time.days").innerHTML = days;
             document.querySelector(".time.hours").innerHTML = hours;
             document.querySelector(".time.minutes").innerHTML = minutes;
             document.querySelector(".time.seconds").innerHTML = seconds;

             if (distance < 0) {
                 Answer.show();
                 clearInterval(intervalId);
             }

         }, THOUSAND_TIME);
     }

     function getIntervalId() {
         return intervalId;
     }

     return {
         start,
         getIntervalId
     };
 })();
