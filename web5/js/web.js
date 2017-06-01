$(function(){

    var speedscroll = 700;
    var docao = $(window).height();
    $('.top1').css({'height':docao});

    $(window).resize(function(){
        var docao = $(window).height();
        $('.top1').css({'height':docao});
    });

    $('.nutmenu a').click(function(){
        $('.menuphai').addClass('showmenu');
        return false;
    });

    $('.logo .fa.fa-close ').click(function(){
        $('.menuphai').removeClass('showmenu');
        return false;
    });

    $('.menuphai .listtmenu li a').click(function(){
        var positionTop = $(this).attr('data-scroll');
        $('body').animate({scrollTop:$('.'+positionTop).offset().top},speedscroll);
        $('.menuphai').removeClass('showmenu');
        return false;
    });

    $('.top1 .btn.btn-default').click(function(){
        $('body').animate({scrollTop:$('.top2').offset().top},speedscroll);
        return false;
    });

});