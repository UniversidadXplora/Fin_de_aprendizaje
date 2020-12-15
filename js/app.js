$(document).ready(function() {
  
    TweenMax.set($('#logo'),{y:-50});
    TweenMax.to($('#card'), 2,{opacity:1, y:20, delay: 1, ease: Power1.easeOut});
    TweenMax.set($('#logro1, #logro2, #logro3, #logro4, #logro5, #logro6'),{y:-100});

    
 /*    TweenMax.to($('#logro1, #logro3, #logro5'), 2,{rotation: 1, yoyo: true, repeat: -1, transformOrigin:"top", ease: Power1.easeInOut});
    TweenMax.to($('#logro2, #logro4, #logro6'), 2.5,{rotation: -1, yoyo: true, repeat: -1, transformOrigin:"top", ease: Power1.easeInOut}); */

    

});