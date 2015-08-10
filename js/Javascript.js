
var userChoice = 16;

function clicked() {
     $(".container").remove();
     userChoice = prompt("How many squares on each side?");
     var square_size = $('.drawpad').width()/userChoice - 2;

     if (userChoice >=1 && userChoice <= 128) {
       for(i = 0; i < userChoice; i++) {
         $(".drawpad").append("<div class='container'></div>");
       }
       for(i = 0; i < userChoice; i++) {
         $(".container").append("<div></div>");
       };
       $('.container div').css('width',square_size);
		   $('.container div').css('height',square_size);

       $(".container div").mouseenter(function() {
         $(this).addClass("highlight");
         });

     }
};
