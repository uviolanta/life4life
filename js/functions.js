function cookiesBar(){   
    setTimeout(function() {        
        $('[name="Rozumiem"]').click(function(){
            $('.infoBar').css('bottom','-100%');
            setTimeout(function(){
                $('.infoBar').remove();
            }, 1000);
        });
    },1000);
}
cookiesBar();