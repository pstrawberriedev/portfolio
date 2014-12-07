/* script.js */

//----------------------------------------------
// Master Nav - Active Class Switches
//----------------------------------------------
function nav_acs() {
	//Active class switch on nav li's
	$('#navi ul li').click(function(e) {
		$('#navi ul li').removeClass('active');
		$(this).addClass('active');
	});
	
	//Mobile dropdown class switch
	$('#navi h5').click(function(e) {
			if ($("#navi").hasClass("drop")) {
				$("#navi").removeClass("drop");
			} else {
				$("#navi").addClass('drop');
			}
		});
		
	//Re-collapse the mobile nav after a link is clicked
	$('#navi a').click(function(e) {
			if ($("#navi").hasClass("drop")) {
				$("#navi").removeClass("drop");
			} else {
				return;
			}
		});
};

//----------------------------------------------
// Portfolio Sorting
//----------------------------------------------
var isAnimating = false;
$(".nav-sort ul li").on("click",function(){
	
	if(isAnimating === false){
		var className = $(this).attr('class');
	
		$(".portfolio-items").children(".pf-box").each(function(){
			isAnimating = true;
			
			if($(this).hasClass(className)){
				$(this).css("display", "inline-block");
				$(this).children(".foot").css("display","block");
				 setTimeout(function(){
					isAnimating = false;
				}, 200);
			} else {
				var noClass = $(this);
				$(this).children(".foot").css("display","none");
				setTimeout(function(){
					noClass.css("display", "none"); 
					isAnimating = false;
				}, 200);
			}
		});
	}
});


//----------------------------------------------
// Portfolio Image + Description Switching
//----------------------------------------------

$("#portfolio .pf-box").on("click",function(){
	var projectName = $(this).attr('id');
	
	$(".portfolio-items").each(function(){
		if($(this).has(projectName)){
			$('.modal-content .description').removeClass('active')
			$('.modal-content .picture').removeClass();
			$('.modal-content').append("<div class='picture'></div>");
			$('.modal-content .picture').addClass(projectName);
			$('.modal-content .description' + '.' + projectName).addClass('active');
		} else {
			return;
		}
	
	});
});

//close modal on out-link click
$(".overview a").click(function(){
	$('#pf-modal').modal('hide')
});


//----------------------------------------------
// Sticky Top
//----------------------------------------------
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#anchor').offset().top;
    if (window_top > div_top) {
        $('#navi').addClass('stick');
		$('.container-master').addClass('scrolled');
    } else {
        $('#navi').removeClass('stick');
		$('.container-master').removeClass('scrolled');
    }
}

function sticky_fire() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
};


//----------------------------------------------
// Smooth Scroll
//----------------------------------------------
// Chris Coyier smooth scroll snippet @ http://css-tricks.com/snippets/jquery/smooth-scrolling/
function smoothy() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
};

/* classes for sorting
$("#portfolio .nav-sort ul li").on("click", function(){ $(".portfolio-items > pf-box").each(function(){if(!$(this).hasClass("[yourclasshere]"){ $(this).css("display","none") }else{$(this).css("display","inline-block") }        })}) }
*/

//----------------------------------------------
// Bootstrap Modal fix
//----------------------------------------------


//----------------------------------------------
// Chain all the Functions
//----------------------------------------------

function masterchain() {
	nav_acs();
	smoothy();
	sticky_fire();
	//newFunky();
}
// Fire!
$(document).ready(masterchain);
