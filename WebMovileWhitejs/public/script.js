
// eventos del home

$(document).ready(function(){
  $("#boton1").click(function(){
    $("#homePage").hide();
    $( "section#info" ).show(1000);
  });
});


$(document).ready(function(){
    $("#boton2").click(function(){
      $("#homePage").hide();
      $( "section#calendar" ).show(1000);
    });
  });

  $(document).ready(function(){
    $("#boton3").click(function(){
      $("#homePage").hide();
      $( "section#contact_cont" ).show(1000);
    });
  });

  $(document).ready(function(){
    $("#boton4").click(function(){
      $("#homePage").hide();
      $( "section#location" ).show(1000);
    });
  });

  // eventos de navbar rules
  $(document).ready(function(){
    $("a#homeH2").click(function(){
    
      $("section#info").hide();
      $("section#calendar").hide();
      $("section#contact_cont").hide();
      $("section#location").hide();

      $( "section#homePage" ).show(1000);
    });
  });

  $(document).ready(function(){
    $("a#rulesH2").click(function(){

      $("section#location").hide();
      $("section#homePage").hide();
      $("section#calendar").hide();
      $("section#contact_cont").hide();

      $( "section#info" ).show(1000);
    });
  });


  
  
  $(document).ready(function(){
    $("a#calendarH2").click(function(){

      $("section#location").hide();
      $("section#homePage").hide();
      $("section#info").hide();
      $("section#contact_cont").hide();

      $( "section#calendar" ).show(1000);
    });
  });
  
    $(document).ready(function(){
      $("a#locationrH2").click(function(){

        $("section#homePage").hide();
        $("section#info").hide();
        $("section#calendar").hide();
        $("section#contact_cont").hide();

        $( "section#location" ).show(1000);
      });
    });
  
    $(document).ready(function(){
      $("a#contactH2").click(function(){

        $("section#homePage").hide();
        $("section#info").hide();
        $("section#calendar").hide();
        $("section#location").hide();

        $( "section#contact_cont" ).show(1000);
      });
    });
  
    
     // eventos de navbar calendar




  // $(document).ready(function(){
  //   $("#boton3").click(function(){
  //     $(".homePage").hide();
  //     $( "div" ).removeClass("calendar");
  //   });
  // });

  // $(document).ready(function(){
  //   $("#boton4").click(function(){
  //     $(".homePage").hide();
  //     $( "div" ).removeClass("calendar");
  //   });
  // });

