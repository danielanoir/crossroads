$(document).ready(function(){
//show Rooms and Rates tab
  $(".roomsLink").click(function(){
    $(".aboutContainer").hide();
    $(".roomsAndRates").show();
  });

//show About tab
  $(".aboutLink").click(function(){
    $(".aboutContainer").show();
    $(".roomsAndRates").hide();
  });


});
