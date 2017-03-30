//Função para topo
function scrollTopo() {
  var scrollPos;
  var headerText = document.querySelector(".parallax-topo");
  scrollPos = window.scrollY;
  var height = window.innerHeight * 0.8;

  if (scrollPos <= height) {
      headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
      headerText.style.opacity = 1 - (scrollPos/height);
  }
}

window.addEventListener("scroll", scrollTopo);

$(document).ready(function(){
    var borda = $(".borda-colorida-main");
    var header = $("header");
    $(window).scroll(function () { 
        if ($(this).scrollTop() > window.innerHeight) { 
            borda.addClass("fixa-topo");
            header.addClass("header-fixo");
        } else { 
            borda.removeClass("fixa-topo"); 
            header.removeClass("header-fixo");
        } 
    });   

    $(".stop-brisa, .start-brisa").click(function(){
        $(".topo").toggleClass("brisa");
        $(".start-brisa").toggle();
        $(".stop-brisa").toggle();
    });
});