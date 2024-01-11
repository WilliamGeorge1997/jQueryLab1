let interval;
$("#slider-container > img:gt(0)").hide();


interval = setInterval(function() { 
  $('#slider-container > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slider-container');
},  2000);

$('#stopButton').on('click', function(){
  clearInterval(interval);
})