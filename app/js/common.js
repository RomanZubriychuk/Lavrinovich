$(function() {
    $('li').click(function(){
        $(this).children('.submenu').slideToggle(function (){
            $(this).prev('.caret').toggleClass('active')
        });
    });
    $('#m-contacts').click(function(){
        $('.more-contacts .toggle-block').slideToggle();
        $(this).toggleClass('open')
    });

    //Carousel
    $('.carousel-1').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    });
    $('.carousel-2').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1200:{
                items:3
            },
            1600:{
                items:4
            }
        }
    });

    //Form styler
    setTimeout(function() {
        $('select').styler();
        $('input').styler({
            filePlaceholder: 'Прикріпити резюме (doc, docx, pdf)'
        });
    });

    //Back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 2000);
        });
    }
});
