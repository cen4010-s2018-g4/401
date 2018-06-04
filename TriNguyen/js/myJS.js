// ========================================================================= //
//  Skills isotope and filter
// ========================================================================= //

(function($) {
    $("#rotator .rotate").textrotator({
        animation: "dissolve",
        speed: 4000
    });
})(jQuery);

  var skillsIsotope = $('.skills-container').isotope({
    itemSelector: '.skills-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#skills-flters li').on( 'click', function() {
    $("#skills-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    skillsIsotope.isotope({ filter: $(this).data('filter') });
  });

$(document).ready(function(){
    $("#sum").trigger("click");
	$("#all").trigger("click");
});