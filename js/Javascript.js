


function grid() {

  $(document).ready(function(){
    for(i = 0; i < 16; i++) {
      $("body").append("<div class='container'></div>");
    }
  });

  $(document).ready(function() {
    for(i = 0; i < 16; i++) {
      $(".container").append("<div></div>");
    };
  })
  $(document).ready(function() {
    $(".container div").mouseenter(function() {
      $(this).addClass("highlight")
      });
    });
}

grid();
