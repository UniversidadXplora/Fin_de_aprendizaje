$(window).resize(function() {
    window.zoom();
});

function zoom() {
    var altura = window.innerHeight,
      ancho = window.innerWidth,
      alturaDocumento = parseInt($("body").css("height")),
      anchoDocumento = parseInt($("body").css("width")),
      zoom,
      html = $("body, .queryloader__overlay");
    if (altura <= ancho) {
      zoom = altura / alturaDocumento;
    } else {
      zoom = ancho / anchoDocumento;
    }
    var anchoActual = anchoDocumento * zoom;
    if (anchoActual >= ancho) {
      zoom = ancho / anchoDocumento;
    }
    window.valueDraw = anchoDocumento / ancho;
    var anchoReal = anchoDocumento * zoom;
    var marginLeft = (ancho - anchoReal) / 2 +'px';
    var alturaReal = alturaDocumento * zoom;
    var marginTop = (altura - alturaReal) / 2 +'px';
    var scale= "scale(" + zoom + ")";
    $(html).css({"margin-left": marginLeft, "transform": scale, "margin-top": marginTop, 'transform-origin': '0px 0px'});
    if (bowser.gecko) {
      $(html).css({"-moz-transform-origin": "0 0 0", "-moz-transform": scale});
    }
  }





$(document).ready(function() {
  
    TweenMax.set($('#logo'),{y:-50});
    TweenMax.to($('#card'), 2,{opacity:1, y:20, delay: 1, ease: Power1.easeOut});
    TweenMax.set($('#logro1, #logro2, #logro3, #logro4, #logro5, #logro6'),{y:-100});

    
 /*    TweenMax.to($('#logro1, #logro3, #logro5'), 2,{rotation: 1, yoyo: true, repeat: -1, transformOrigin:"top", ease: Power1.easeInOut});
    TweenMax.to($('#logro2, #logro4, #logro6'), 2.5,{rotation: -1, yoyo: true, repeat: -1, transformOrigin:"top", ease: Power1.easeInOut}); */

    

});