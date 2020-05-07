$(document).ready(function() {
    //fixed header
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 25) {
            $(".header").addClass('bg-header')
        }
        else {
            $(".header").removeClass('bg-header')
        }
    });
    //mobile menu
    $('.btn-open-nav').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header-top__cont').removeClass('header-top__cont_open');
            $('html, body').css('overflow', 'auto');
        } else {
            $(this).addClass('active');
            $('.header-top__cont').addClass('header-top__cont_open').slideDown();
            $('html, body').css('overflow', 'hidden');
        }
    });
    //slick
    $('.popular-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 939,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    centerMode: false,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    centerMode: true,
                }
            }
        ]
    });
    $('.discover-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        initialSlide: 1,
        centerPadding: '80px',
        responsive: [
            {
                breakpoint: 1425,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 939,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.service-slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 939,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    focusOnSelect: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    centerMode: true,

                }
            }
        ]
    });
    //tabs
    $('body').on('click', '[data-trig-tab]:not(.active)', function () {
        let $this = $(this),
            $thisTrig = $this.attr('data-trig-tab'),
            $section = $this.closest('.tabs-sec');

        $section.find('[data-trig-tab]').removeClass('active');
        $this.addClass('active');

        $section.find('[data-tab]:visible').fadeOut(200, function() {
            $section.find('[data-tab]').removeClass('is-hidden');
            $section.find('[data-tab="'+$thisTrig+'"]').fadeIn(200, function() {
                $(this).addClass("active");
            });
        });
    });

    //dropdown
    $('.dropdown__trig').on('click', function () {
        let $this_drop = $(this).closest('.dropdown'),
            $this_trig = $(this),
            $other_drops = $('.dropdown').not($this_drop),
            $other_trigs = $('.dropdown').not($this_drop).find('.dropdown__trig');
        $other_drops.removeClass('active');
        $other_trigs.removeClass('active');
        $this_drop.toggleClass('active');
        $this_trig.toggleClass('active');
    });
    $('body').on('click', function (e) {
        if (!$('.dropdown').is(e.target)
            && $('.dropdown').has(e.target).length === 0
        ) {
            $('.dropdown').removeClass('active');
            $('.dropdown__trig').removeClass('active');
        }
    });
    //chosen
    $(".select-chosen").chosen({
        disable_search_threshold: 100,
        width: "100%"
    });
    //toggle menu
    $('.header-dash-icon').on('click', function () {
        $(this).toggleClass('active');
        let $parent = $(this).closest('.wrapper').find('.sidebar');
        if ($parent.hasClass('sidebar_hide')) {
            $parent.find('.sidebar__nav, .sidebar__logo').delay(70).fadeIn();
            $parent.toggleClass('sidebar_hide');
        } else {
            $parent.toggleClass('sidebar_hide');
            $parent.find('.sidebar__nav, .sidebar__logo').delay(150).fadeOut();
        }
    });
    //prices faq
    $('.faq-title').click(function () {
        $(this).closest('.faq__item').find('.faq-cont').slideToggle(400);
        $(this).closest('.faq-title').toggleClass('active');
    });
    //tags input
    $('.header-tags').tagsInput({
        'width': '100%',
        'defaultText': ' '
    });
    //modals
    $('[data-modal]').on('click', function () {
        $attr = $(this).attr('data-modal');
        $('.modal_' + $attr).addClass('is-active');
    });
    $('.modal-background').on('click', function () {
        $('.modal').removeClass('is-active');
    });
    //date picker
    $('input[type="date"]').flatpickr({
        dateFormat: "d F Y",
    });

    $('.filters-block__title').click(function () {
        $(this).closest('.filters-block').find('.filters-block__cont').slideToggle(400);
        $(this).toggleClass('active');
    });

    $('.question-item__title').click(function () {
        $(this).closest('.question-item').find('.question-item__cont').slideToggle(400);
        $(this).closest('.question-item').toggleClass('active');
        $(this).closest('.question-item').find('.plus-minus-toggle').toggleClass('collapsed');
    });
});