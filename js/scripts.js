$(function() {
  $(".carousel").carousel( { interval: 2000 } );
  $("#carouselButton").click(function(){
      if($("#carouselButton").children("i").hasClass("fa-pause")){
          $(".carousel").carousel("pause");
          $("#carouselButton").children("i").removeClass("fa-pause")
          $("#carouselButton").children("i").addClass("fa-play")
      }else{
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play")
          $("#carouselButton").children("i").addClass("fa-pause")
      }
  });
});

$(function(){
  $("#reserveButton").click(function(){
    $('#reserveModal').modal('show');
  })

  $("#loginButton").click(function(){
    $('#loginModal').modal('show');
  })
})

// $(function(){
// $('#overlay').mousemove(function(){
//   $('#overlay').children('figure').addClass('figure')
// })
// $('#overlay').mouseleave(function(){
//   $('#overlay').children('figure').removeClass('figure')
// })

// })

