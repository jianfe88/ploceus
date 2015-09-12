$(document).ready(function() {
    scrollToSection();
    toggleMenu();
});


/* Scroll to Main Menu
================================================== */
function scrollToSection () {
    var dw = screen.width;
    var offset;
    if(dw < 939){
        offset = -60;
    } else {
        if(dw <1199){
            offset = -82;
        }else{
            offset = -91;
        }
    };
    $('#menu a[href*=#]').click( function(event) {
        var $this = $(this);
        // var offset = -91;
        $.scrollTo( $this.attr('href') , 1500, { easing: 'swing' , offset: offset , 'axis':'y' } );
        event.preventDefault();
        
        $this.parent().addClass( "active" );
        $this.parent().siblings().removeClass("active");
    });
};

/* Menú emergente en dispositivos móviles
================================================== */
function toggleMenu () {
    if (screen.width<=938) {
        // Codigo menu emergente
        //Mostrar y ocultar menu en mobil.
        //Clickar icono menú
        var contador = 1;
        $('.menu_bar').click(function(){
            if (contador == 1) {
                $('nav').animate({
                    right: '0%'
                });

                $('#container').animate({
                    left: '-=250px'
                });
                
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    right: '-100%'
                });
                $('#container').animate({
                    left: '+=250px'
                });
            }
        });
        //Ocultar menú despues de hacer selección.
        $('.nav-superior li').click(function(){
            if (contador == 1) {
                $('nav').animate({
                    right: '0%'
                });

                $('#container').animate({
                    left: '-=250px'
                });
                
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    right: '-100%'
                });
                $('#container').animate({
                    left: '+=250px'
                });
            }
        }); 
    };
}

