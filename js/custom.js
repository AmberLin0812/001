$(function() {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1000) {
            $(".sticker").removeClass("stick");
        } else {
            $(".sticker").addClass("stick");
        }
    });

    $('tr[data-href]').on("click", function() {
        document.location = $(this).data('href');
    });

    $('.close-model').click(function() {
        var $modal = $(this).closest('.modal')
        if (
            $modal.hasClass('show')
        ) {
            $modal.modal('hide')
        }
    });

    // $('.fancybox-item').fancybox({
    //     caption: function(instance, item) {
    //         return $(this).parent().find('.card-text').html();
    //     }
    // });

    $('.articlelist02-fiexd a').on('click', function(event) {
        event.preventDefault();
        var x = $(this).attr('href');
        $('html, body').animate({
                scrollTop: $(x).offset().top - 80
            },
            1000);
    });

    $('.btn-custom-course').click(function(event) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.modal-link').click(function(event) {
        $(this).parent().toggleClass('active');
    });

    $('.banner_slider').slick({
        dots: false, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 1, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: 1000,
        arrows: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false
    });

    $('.banner_slider_mo').slick({
        dots: true, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 1, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: 1000,
        arrows: false,
        autoplaySpeed: 5000,
        pauseOnFocus: false
    });

    $('for_mo').slick({
        responsive: [{
                breakpoint: 5000,
                settings: "unslick"
            },
            {
                breakpoint: 991,
                settings: {
                    autoplaySpeed: 5000,
                    dots: true,
                    speed: 800, //滑動/淡入動畫速度
                    autoplay: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.section01-slick').slick({
        dots: true, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 3, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 991,
            settings: {
                dots: true, //原點
                infinite: true, //無限循環滑動
                speed: 800, //滑動/淡入動畫速度
                autoplay: false,
                arrows: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.section01-slick').slick('setPosition');
        $('.section01-slick').slick('refresh');
    })

    $('.section-library01-slick').slick({
        dots: true, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 4, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 991,
            settings: {
                dots: true, //原點
                infinite: true, //無限循環滑動
                speed: 800, //滑動/淡入動畫速度
                autoplay: false,
                arrows: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.section03-slick').slick({
        dots: true, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 4, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 991,
            settings: {
                dots: true, //原點
                infinite: true, //無限循環滑動
                speed: 800, //滑動/淡入動畫速度
                autoplay: false,
                arrows: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.section04-slick').slick({
        dots: true, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 1, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 991,
            settings: {
                dots: true, //原點
                infinite: true, //無限循環滑動
                speed: 800, //滑動/淡入動畫速度
                autoplay: false,
                arrows: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.section07-slick').slick({
        dots: false, //原點
        infinite: true, //無限循環滑動
        speed: 800, //滑動/淡入動畫速度
        slidesToShow: 4, //要顯示的幻燈片數量
        adaptiveHeight: false, //響應高度
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 991,
            settings: {
                dots: true, //原點
                infinite: true, //無限循環滑動
                speed: 800, //滑動/淡入動畫速度
                autoplay: false,
                arrows: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".service_slider").slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        speed: 500,
        asNavFor: '.service_slider_nav'
    });

    $(".service_slider_nav").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: ".service_slider",
        dots: !1,
        arrows: !1,
        focusOnSelect: !0,
    });

    if ($('.progress').length > 0) {
        new CircleProgress('.progress', {
            max: 100,
            value: 60,
            textFormat: 'percent'
        });
    }


    $('[data-toggle="tooltip"]').tooltip();
});




$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    // var targetPosStart = $("#articlelist02-start").offset().top;
    // var targetPosEnd = $("#articlelist02-end").offset().top;

    var posStart = $('#articlelist02-start');
    if (posStart.length) {
        var targetPosStart = posStart.offset().top;
    }
    var posEnd = $('#articlelist02-end');
    if (posEnd.length) {
        var targetPosEnd = posEnd.offset().top;
    }
    // console.log(targetPosStart);
    // console.log(targetPosEnd);

    if (scrollPos >= targetPosStart) {
        $(".articlelist02-fiexd").addClass('active');
    } else {
        $(".articlelist02-fiexd").removeClass("active");
    }
    if (scrollPos >= targetPosEnd) {
        $(".articlelist02-fiexd").removeClass("active");
    }
});