$(document).ready(function(){
//show Rooms and Rates tab
  $(".roomsLink").click(function(){
    $(".aboutContainer").hide();
    $(".roomsAndRatesContainer").show();
    $(".theAreaContainer").hide();
    $(".addOnsContainer").hide();
    $(".directionsContainer").hide();
    $(".contactContainer").hide();
  });

//show About tab
  $(".aboutLink").click(function(){
    $(".aboutContainer").show();
    $(".roomsAndRatesContainer").hide();
    $(".theAreaContainer").hide();
    $(".addOnsContainer").hide();
    $(".directionsContainer").hide();
    $(".contactContainer").hide();
  });

//show The Area tab
  $(".areaLink").click(function(){
    $(".aboutContainer").hide();
    $(".roomsAndRatesContainer").hide();
    $(".theAreaContainer").show();
    $(".addOnsContainer").hide();
    $(".directionsContainer").hide();
    $(".contactContainer").hide();
  });

//show Add Ons tab
  $(".addOnsLink").click(function(){
    $(".aboutContainer").hide();
    $(".roomsAndRatesContainer").hide();
    $(".theAreaContainer").hide();
    $(".addOnsContainer").show();
    $(".directionsContainer").hide();
    $(".contactContainer").hide();
  });

//show Directions tab
  $(".directionsLink").click(function(){
    $(".aboutContainer").hide();
    $(".roomsAndRatesContainer").hide();
    $(".theAreaContainer").hide();
    $(".addOnsContainer").hide();
    $(".directionsContainer").show();
    $(".contactContainer").hide();
  });

//show Contact tab
  $(".contactLink").click(function(){
    $(".aboutContainer").hide();
    $(".roomsAndRatesContainer").hide();
    $(".theAreaContainer").hide();
    $(".addOnsContainer").hide();
    $(".directionsContainer").hide();
    $(".contactContainer").show();
  });


});
