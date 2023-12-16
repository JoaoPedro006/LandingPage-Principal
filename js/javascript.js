$(function (){

    // Funções para abrir e fechar o formulário
    abrirJanela();
    VerificarCliqueFechar();
  
    function abrirJanela() {
      $(".btn").click(function (e) {
        // isso é pra se o usuário quiser sair da tela de cadastro sem preencer o form é só clicar
        // em qualquer canto da tela
        e.stopPropagation();
        $(".bg").fadeIn();
      });
    }

    function VerificarCliqueFechar() {
        var el = $("body,.closeBtn");
    
        el.click(function () {
          $(".bg").fadeOut();
        });
    
        $(".formulario").click(function (e) {
          e.stopPropagation();
        });
      }

        // Aula de plugins (Dominando o JQuery)
        // http://js-socials.com/start-using/ link do primeiro plugin
        $("#share").jsSocials({
          shares: ["email", "twitter", "facebook", "linkedin", "whatsapp"]
      });

      $('.link').click(function(){
        location.href = "https://www.linkedin.com/in/jo%C3%A3o-pedro-maia-pinheiro-23532a269/"
   });

   $('.git').click(function(){
        location.href = "https://github.com/JoaoPedro006?tab=repositories/"
   });

    
});