let Index = (function() {

    function init() {
        Timer.start();
        this.randomMessage();
    }

    function randomPlace(){
      var num = Math.floor(Math.random() * 800);
      return num;
    }

    function randomArrayPosition(){
      var num = Math.floor(Math.random() * 7);
      return num;
    }

    function getLeftMargin(){
      var num = Math.floor(Math.random() * 1800);
      return num;
    }

    function randomMessage(){
      var messages = ["Te odeio.", "Me obrigue.", "Não mente pra mim.", "mau carater.", "MEDO.", "Vamo colocar fogo no Kauer.", "Benetti Polones"];

      var message = messages[randomArrayPosition()];

      var top = randomPlace();
      var left = getLeftMargin();
      document.querySelector("#message").textContent = message;
      document.querySelector("#message").style.top = top + "px";
      document.querySelector("#message").style.left = left + "px";
      // in honor of Benetti
      setTimeout(function(){
        randomMessage();
      }, 2000);
    }

    return {
        init,
        randomMessage
    };
})();
