$(function() {

    var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed:125,
    backSpeed:150,
    loop:true
    });
    

    $('.skills').on('mouseenter','.fab', zoomIcons);
    $('.skills').on('mouseleave','.fab', normalIcons);

    function zoomIcons(){
        if($(this).hasClass('pic')){
            $(this).addClass('zoompic'); 
        }
        else{
            $(this).addClass('zoom');
        }
    }

    function normalIcons(){
        if($(this).hasClass('pic')){
            $(this).removeClass('zoompic'); 
        }
        else{
            $(this).removeClass('zoom');
        }

    }

    $('[data-toggle="tooltip"]').tooltip();   

});