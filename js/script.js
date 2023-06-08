/**
 * @author Gopala Murugesan
 */
(function($) {
	"use strict";
	$(".sakura-falling").sakura();

	$(document).ready(function() {

		$(window).scroll(function() {
			if ($(this).scrollTop() > $(window).height()) {
				$(".navbar").addClass("fixed");
				$("body").css("padding-top", "97px");
			} else {
				$(".navbar").removeClass("fixed");
				$("body").css("padding-top", "0");
			}
		});

        $(".navbar-nav .item, .navbar-brand, #banner, section, .my-music-icon, .go-to-top, #footer").on("click",function(){
            $(".navbar-collapse").removeClass("in");
            $(".navbar-toggle").addClass("collapsed");
        });

	})

})(jQuery);

// Set the date we're counting down to
var countDownDate = new Date("Jun 9, 2023 06:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="timer"
	document.getElementById("timer").innerHTML = "<div class=\"days\"> \
    <div class=\"numbers\">" + days + "</div><span class=\"units\">days</span></div> \
  <div class=\"hours\"> \
    <div class=\"numbers\">" + hours + "</div><span class=\"units\">hours</span></div> \
  <div class=\"minutes\"> \
    <div class=\"numbers\">" + minutes + "</div><span class=\"units\">minutes</span></div> \
  <div class=\"seconds\"> \
    <div class=\"numbers\">" + seconds + "</div><span class=\"units\">seconds</span></div> \
  </div>";

	// If the count down is over, write some text 
	// if (distance < 0) {
	// 	clearInterval(x);
	// 	document.getElementById("timer").innerHTML = "Please bless the couple with a loving, strong, and long-lasting marriage filled with joy, understanding, and mutual respect.";
	// }
}, 1000);