$(function () {

    $(window).scroll(function(){
        var vitri = $('body').scrollTop();
        if(vitri > 50){
            $('.navbar-fixed-top').addClass('tienhoa');
        } else {
            $('.navbar-fixed-top').removeClass('tienhoa');
        }
    });

});