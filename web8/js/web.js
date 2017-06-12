$(function () {

    $(window).scroll(function(){
        var vitri = $('body').scrollTop();
        if(vitri > 50){
            $('.navbar-fixed-top').addClass('menuchay');
        } else {
            $('.navbar-fixed-top').removeClass('menuchay');
        }
    });
    
    var speedscroll = 1800;

    $('.navbar-right li a').click(function(){
        var position = $(this).attr('href');
        $('body').animate({scrollTop:$(position).offset().top},speedscroll,"easeInOutBack");
        $(this).blur();
        return false;
    });

});