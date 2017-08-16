document.onreadystatechange = function () {
    if (document.readyState == "loading") {    
        //action while loading
    }else if(document.readyState == "complete") {
        //action when page is loaded
        //this hide the .caraicamento after page is loaded and with a delay of 1-second  
        $('.caricamento').delay(1000).hide('slow');
    }
}