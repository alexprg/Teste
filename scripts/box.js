/*-------------------------------------------------------------------------------------------
JAVASCRIPT "sia"

Version: 	1.0 - 2013
author: 	Burocratik (alexandre gomes)
email: 		alex@burocratik.com
website: 	http://www.burocratik.com
--------------------------------------------------------------------------------------------*/
	
$(document).ready(function(){

/*-------------------------------------------------------------------------------------------
=OPEN NEW WINDOW and PRINT
 NOTE: detect if is mac, mobile, js, safari etc > javascript on plugins.js > css_browser_selector
--------------------------------------------------------------------------------------------*/
//IE6
if ($.browser.msie  && parseInt($.browser.version) <= 7) {window.top.location = "http://burocratik.com/error/ie6-please-no.html";}
//Open new window
$("a[rel=external]").click(function(){
	var linkExterno = window.open($(this).attr("href"));
    return linkExterno.closed;
});
//Mandar Imprimir
$("a[rel=print]").click(function(){
    var imprimir = window.print();
    return false;
});

/*-------------------------------------------------------------------------------------------
 =LIMPAR FORMULARIOS
So limpa nos forms os Input Text com class txtLimpar
--------------------------------------------------------------------------------------------*/
$('input[type=text], textarea').each(function() {
	if( !$(this).hasClass("textLimpar") ) return;  //se nao tem a class sai
	var defeito = this.defaultValue; //this pois defaultValue é propriedade de javascript e nao jquery
	$(this).focus(function() {
		if($(this).val() == defeito) {$(this).val("")}
	});
	$(this).blur(function() {
		if($(this).val() == "") {$(this).val(defeito)}
	});
});

/*-------------------------------------------------------------------------------------------
=Inserir E-mails correctos: Obrigatorio class="email", e [-at-]
--------------------------------------------------------------------------------------------*/
$("a.email").each(function(){
	var mailReal = $(this).text().replace("[-at-]","@");
	$(this).text(mailReal);
    $(this).attr("href", "mailto:"+mailReal);
});

/*-------------------------------------------------------------------------------------------
=IF is NOT mobil href="tel" does not work
--------------------------------------------------------------------------------------------*/
$("a[href^='tel:']").click(function(){
	if( !$("body").hasClass("mobile") )  return false;
});

/*-------------------------------------------------------------------------------------------
=IPOD app LINKS (for stand alone app)
--------------------------------------------------------------------------------------------*/
if ($("html").hasClass("mobile")){
	$(document).on("click","a", function(event){  
       // event.preventDefault();
       // location.href = $( event.target ).attr( "href" );
    });//end on		
};

/*-------------------------------------------------------------------------------------------
=START PAGE
--------------------------------------------------------------------------------------------*/
calculateHeight();



/********************************************************************************************
=LINGUAS
*********************************************************************************************/
var auxHling=$("ul#lingMenu").height();
$("ul#lingMenu").hover(
  function(){
  	$(this).children(".active").addClass("over");
  	$("ul#lingMenu").delay(250).animate({height: "210px"}, 400, "easeOutExpo");
  },
  function(){
  	$(this).animate({height: auxHling}, 200,"easeOutExpo", function(){
	  $(this).children(".active").removeClass("over");	
	  	
  	});
  }
); //end over
















 
/////////////////////////
})//end load document


/********************************************************************************************
=FUNCTIONS all over the place 
*********************************************************************************************/

/*-------------------------------------------------------------------------------------------
=HEIGHT viewport
--------------------------------------------------------------------------------------------*/
function calculateHeight(){
    var H=$(window).height();
    $(".fullH").css("height",H);
};//end function