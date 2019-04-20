 $(window).on("load", function () {
     $("#preloader").fadeOut('slow', function () {
         $(this).remove()
     });
 });


 $(function () {
     // isotope js 
     var $grid = $('.grid').isotope({
         itemSelector: '.grid-item',
         percentPosition: true,
         masonry: {

             columnWidth: '.grid-sizer'
         }
     });
 });

 $(function () {
     // filter-button-group

     $('.filter-button-group').on('click', 'button', function () {
         var filterValue = $(this).attr('data-filter');
         $('.grid').isotope({
             filter: filterValue
         });
     });

 });


 //Navbar background-color change
 $(function () {
     $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         if (scroll > 200) {
             $(".navbar").css({
                 "background-color": "rgba(20, 27, 29, 0.85)",
                 "transition": ".4s"
             });

         } else {
             $(".navbar").css("background", "transparent");
         }
     })
 });



 // scroll-to-top 
 $(function () {

     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });

     $('.scrollup').click(function () {
         $("html, body").animate({
             scrollTop: 0
         }, 600);
         return false;
     });

 });


 //menu height
 $(function () {
     var topoffset = 100; //variable for menu height

     //Use smooth scrolling when clicking on navigation
     $('.navbar-nav a').click(function () {
         if (location.pathname.replace(/^\//, '') ===
             this.pathname.replace(/^\//, '') &&
             location.hostname === this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - topoffset
                 }, 500);
                 return false;
             } //target.length
         } //click function
     }); //smooth scrolling

 });