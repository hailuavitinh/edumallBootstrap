$(function () {

    var docao = $(window).height();
    console.log(docao);
    $('.top1').css({ 'height': docao });

    // $(window).resize(function () {
    //     var docao = $(window).height();
    //     $('.top1').css({ 'height': docao });
    // });

});