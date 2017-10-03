let Index = (function() {

    function init() {
        Timer.start();
        this.randomMessage();
        configureKonamiCode();
    }

    function randomPlace(){
      var num = Math.floor(Math.random()*document.body.clientHeight);
      return num;
    }

    function randomArrayPosition(){
      var num = Math.floor(Math.random() * 11);
      return num;
    }

    function getLeftMargin(){
      var num = Math.floor(Math.random()*document.body.clientWidth -50);
      return num;
    }


    function randomMessage(){
      var messages = ["Te odeio", "Me obrigue", "Não mente pra mim", "Mau carater",
                    "#MEDO", "Vamo colocar fogo no Kauer", "Benetti Polones",
                    "Vamos pegar uma sala pra sair no soco", "Fica calmo", "Mideixa em pais",
                    "Não aguento mais"];

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
    function configureKonamiCode() {
        new KonamiCode(function () {
            Answer.cheat();
        });
    }
    return {
        init,
        randomMessage
    };
})();
