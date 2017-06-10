$(function () {

    $(window).scroll(function(){
        var vitri = $('body').scrollTop();
        if(vitri > 50){
            $('.navbar-fixed-top').addClass('tienhoa');
        } else {
            $('.navbar-fixed-top').removeClass('tienhoa');
        }
    });

    var speedscroll = 1800;

    $('a.vongtron').click(function(){
        $('body').animate({scrollTop:$('#about').offset().top},speedscroll,"easeInOutBack");
        $(this).blur();
        return false;
    });

    $('.navbar-right li a').click(function(){
        var position = $(this).attr('href');
        $('body').animate({scrollTop:$(position).offset().top},speedscroll,"easeInOutBack");
        $(this).blur();
        return false;
    });

});