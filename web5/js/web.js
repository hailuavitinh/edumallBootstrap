$(function(){

var speedScroll = 700;

$('.navbar-right li:nth-child(1) a').click(function(){
    $('body').animate({scrollTop:$('#about').offset().top},speedScroll);
});

$('.navbar-right li:nth-child(2) a').click(function(){
    $('body').animate({scrollTop:$('#service').offset().top},speedScroll);
});

$('.navbar-right li:nth-child(3) a').click(function(){
    $('body').animate({scrollTop:$('#contract').offset().top},speedScroll);
});

});