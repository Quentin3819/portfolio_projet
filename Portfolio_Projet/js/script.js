var typed = new Typed(".iAm", {
    strings: ["Developer","Designer","WebMaster","Gamers","WhiteHate "],
    typeSpeed: 50, 
    loop: true
});

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
// });

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false
})

$(function() {
    $.scrollIt({
    easing: 'ease', // the easing function for animation
    scrollTime: 1000, // how long (in ms) the animation takes
    topOffset: 0 // offste (in px) for fixed top navigation
    });
   });

var menu_button = $("#menulogo");
$(menu_button).on("click", menu_func);
   
     function menu_func() {
         console.log("test")
        $("#menu").toggleClass("apparition_menu")
        $("apparition_menu").slideDown("slow")
    }

    $grid = $("#contener_isotop").isotope({
        itemSelector: '.portfolio_image',
        layoutMode: 'fitRows'
        });

        $("#all_filter").on("click", function(){
            $grid.isotope({ filter: '*'});
            $(".portfolio_menu").removeClass("active");
            $("#all_filter").addClass("active");
        })
        $("#html_filter").on("click", function(){
            $grid.isotope({ filter: '.html'});
            $(".portfolio_menu").removeClass("active");
            $("#html_filter").addClass("active");
        })
        $("#php_filter").on("click", function(){
            $grid.isotope({ filter: '.php'});
            $(".portfolio_menu").removeClass("active");
            $("#php_filter").addClass("active");
        })
        $("#css_filter").on("click", function(){
            $grid.isotope({ filter: '.css'});
            $(".portfolio_menu").removeClass("active");
            $("#css_filter").addClass("active");
        })