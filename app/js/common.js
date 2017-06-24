$(document).ready(function() { 
      $(".menu-js").click(function(){ 
          
        $(".ul-js").slideToggle(2000);  
       
      });
     
      $(".buy-js").hover(function(){ 
          $(this).parent().parent().find('.title').addClass( "hover" ); 
        }, 
        function() {
          $(this).parent().parent().find('.title').removeClass( "hover" );
       });
      
       var menu = $(".menu-fix-js");
        var win = $('.default-js');
	        $(window).scroll(function(){

	            if ( $(this).scrollTop() > 50 && menu.hasClass("default-js") ){

	                menu.removeClass("default-js").addClass("fixed");
                    menu.css({
                    'margin-left':'-' + (win.width() / 2) + 'px'
                    });

	            } else if($(this).scrollTop() <= 50 && menu.hasClass("fixed")) {

	                menu.removeClass("fixed").addClass("default-js");
                  menu.css({
                    'margin-left': 'auto' 
                    });

	            }

	        });
   
});
  
 