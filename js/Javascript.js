
var userChoice = 16;


function grid() {

  $(document).ready(function(){
    for(i = 0; i < userChoice; i++) {
      $("body").append("<div class='container'></div>");
    }
  });

  $(document).ready(function() {
    for(i = 0; i < userChoice; i++) {
      $(".container").append("<div></div>");
    };
  })
  $(document).ready(function() {
    $(".container div").mouseenter(function() {
      $(this).addClass("highlight");
      });
    });
}

grid();

function clicked() {
     $(".container").remove();
     userChoice = prompt("How many squares on each side?");
     grid()
};
