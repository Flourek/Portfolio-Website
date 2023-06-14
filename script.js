// localization
lang_prefered = window.navigator.language;

function localizePage(){
    $('[data-localize').localize("./locale/lang", {language: lang_prefered});
} 

// set the language the first time the website is loaded 
localizePage(); 

// set the appropraite language toggler icon 
if (lang_prefered.includes('pl')){
    $('#language-toggler').attr("src", "content/navbar/uk.png");
}else{
    $('#language-toggler').attr("src", "content/navbar/pl.png");
    
}

const swup = new Swup()

// keep the same language between subpages 
swup.on("contentReplaced", function(){
    setActivePage();
    localizePage();
});

function setActivePage() {
    var page = location.pathname.split('/')[3].slice(0, -5 );
    $(".navbar").find(".active").removeClass("active");
    $(".navbar").find(`#${page}`).addClass("active");
}

// set the according nav-link to active when using history-back
window.onpopstate = function(){
    setActivePage();
}

function toggleLanguage(){
    if (lang_prefered.includes('pl')){
        $('#language-toggler').attr("src", "content/navbar/pl.png");
        lang_prefered = "en-GB"
    }else{
        $('#language-toggler').attr("src", "./content/navbar/uk.png");
        lang_prefered = "pl-PL"
    }    
    localizePage();
}

// clicking outside the navbar causes it to collapse
$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.is('.fab, #language-toggler, #navbar')){
            $("#navbarCollapse").collapse('hide');
        }
    });
});











