document.addEventListener("DOMContentLoaded", function(){
    //Variables
    var brisaToggle = document.querySelector(".stop-brisa, .start-brisa");

    //Events
    window.addEventListener("scroll", scroll);
    brisaToggle.addEventListener("click", brisarToggle)
    

    //Methods
    function scroll(){
        var bordaColorida = document.querySelector(".js-borda-colorida-main");
        var cabecalho = document.querySelector(".js-cabecalho");  

        if (window.scrollTop > window.innerHeight) { 
            bordaColorida.classList.add("fixa-topo");
            cabecalho.classList.add("header-fixo");
        } else { 
            bordaColorida.classList.remove("fixa-topo"); 
            cabecalho.classList.remove("header-fixo");
        } 
    }

});
