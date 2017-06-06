$(function(){

   $(window).scroll(function(){
       var vitri = $('body').scrollTop();
       
       if(vitri > 300){
            $('.navbar-fixed-top').addClass('tienhoa');
       }
       else if(vitri < 300){
           $('.navbar-fixed-top').removeClass('tienhoa');
       }
   }); /*end window scroll*/

   var speedscroll = 2000;
   $('.navbar-right li a').click(function(){
        var positionTop = $(this).attr('data-scroll');
        $('body').animate({scrollTop:$('#'+positionTop).offset().top},speedscroll,"easeInOutBack");
        $(this).blur();
        return false;
   });

});