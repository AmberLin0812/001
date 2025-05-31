/*! Thu Aug 20 2020  | Author by Tino Tseng*/ ! function(i) {
    i.fn.TopClass_fixed_bottom = function(s) {
        var t = this;
        t.offset();
        0 == !i(window).scrollTop() && t.fadeOut(0, function() {
            console.log(t), i(this).removeClass(s).addClass("fixed").fadeIn(0)
        }), i(window).scroll(function() {
            i(this).scrollTop() > 0 + t.height() && t.hasClass(s) ? t.fadeOut(0, function() {
                i(this).removeClass(s).addClass("fixed").fadeIn(0)
            }) : i(this).scrollTop() <= 0 && t.hasClass("fixed") && t.fadeOut(0, function() {
                i(this).removeClass("fixed").addClass(s).fadeIn(0)
            })
        })
    },
    i.fn.main_img_bg = function() {
        function s() {
            var i = window,
                s = "inner";
            return "innerWidth" in window || (s = "client", i = document.documentElement || document.body), i[s + "Width"]
        }

        function t() {
            s() >= 768 ? a.each(function() {
                var s = i(this).attr("data-pc-img-url");
                i(this).css("background-image", "url(" + s + ")")
            }) : s() <= 767 && a.each(function() {
                var s = i(this).attr("data-mb-img-url");
                i(this).css("background-image", "url(" + s + ")")
            })
        }
        var a = i(this);
        t(), i(window).on("resize", t)
    },
    $.fn.main_tab = function(li, body_class, body_item_class) {
        $(this).each(function() {
            var _this = $(this);
            var _this_body = _this.siblings(body_class).children(body_item_class);

            _this_body.each(function(index) {
                _this_body.hide();
                _this_body.eq(0).show();
                $(this).attr('data-tabs-body', index);
            });
            _this.find(li).each(function(index) {
                var _tabs = $(this).attr('data-tabs-index', index);
                _tabs.on('click', function() {
                    $(this).addClass('active').siblings(li).removeClass('active');
                    $(this).parents(_this).siblings(body_class).children('[data-tabs-body]:eq(' + index + ')').fadeTo("slow", 1).siblings(body_item_class).hide();
                })
            });
        })
    },
    i.fn.main_menuClass = function(s, t, a) {
        i(this);
        i(this).children("a,." + s).on("click", function() {
                var s = i(this).parent(),
                    a = s.siblings();
                s.siblings().removeClass("active_top"),
                    s.find("." + t).stop().slideToggle("slow"),
                    a.find("." + t).stop().slideUp("slow"),
                    0 == s.hasClass("active_top") ? s.addClass("active_top") : s.removeClass("active_top")
            }),
            i(this).hasClass(a) && i("." + a).each(function() {
                i(this).children("." + s).click().parent().addClass("active_top")
            }),
            i(this).hasClass("active_top") && i(".active_top").children("." + t).css("display", "block")
    },
    i.fn.main_menuClass2 = function(s, t, a, n) {
        var e = (i(this), void 0 == a || 1 == a);
        e ? i(this).children("a,." + s).on("click", function() {
                var s = i(this).parent(),
                    a = s.siblings();
                s.siblings().removeClass("active_top"),
                    s.find("." + t).stop().slideToggle("slow"),
                    a.find("." + t).stop().slideUp("slow"),
                    0 == s.hasClass("active_top") ? s.addClass("active_top") : s.removeClass("active_top")
            }) : i(this).children("a,." + s).off("click"),
            i(this).hasClass(n) && i("." + n).each(function() {
                i(this).children("." + s).click().parent().addClass("active_top")
            }),
            i(this).hasClass("active_top") && i(".active_top").children("." + t).css("display", "block")
    },
    i.fn.main_tabVideo = function(s, t, a, n, e) {
        var o = e || !1;
        i(this).each(function() {
            var e = i(this),
                c = e.siblings(a).children(n);
            c.each(function(s) {
                c.hide(), c.eq(0).show(), i(this).attr("data-tabs-body", s)
            });
            var l = e.children(s).children(t);
            l.each(function(s) {
                var e = i(this).attr("data-tabs-index", s);
                e.on("click", function() {
                    var e = i(this),
                        c = e.parents(e).siblings(a).children("[data-tabs-body]:eq(" + s + ")");
                    e.hasClass("no") || (e.addClass("active").siblings(t).removeClass("active"), c.fadeTo("slow", 1).siblings(n).hide(), i(n).find(".viedo-body").length > 0 && c.siblings("[data-tabs-body]").find(".viedo-body").children("iframe").each(function() {
                        var s = i(this).attr("src");
                        o ? (i(this).attr("src", ""), i(this).attr("src", s)) : i(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    }))
                })
            })
        })
    }
}
(jQuery),

$(function() {
    $(document).on("click", ".navbar-toggler", function() {
            var i = $(this);
            setTimeout(function() {
                $("#navigation").hasClass("show") ? ($("html").addClass("ov-hidden"), i.addClass("yes")) : ($("html").removeClass("ov-hidden"), i.removeClass("yes"))
            }, 400)
        }),
        $(window).on("resize", function() {});
    var s;
    $(window).resize(function() {
        clearTimeout(s), s = setTimeout(function() {
            i() > 991 && $(".navbar-toggler").hasClass("yes") && $(".navbar-toggler ").click()
        }, 50)
    }),
    $('.qa-tab_cont').main_menuClass('qa-tab_item_top','qa-tab_item_bottom'),
    $('.modal_tab_cont').main_menuClass('modal_tab_item_top','modal_tab_item_bottom'),
    function() {
        var i = 300,
            s = 200,
            t = 520,
            a = $(".cd-top");
        $(window).scroll(function() {
            $(this).scrollTop() > i ? a.addClass("cd-is-visible") : a.removeClass("cd-is-visible cd-fade-out"), $(this).scrollTop() > s && a.addClass("cd-fade-out")
        }), a.on("click", function(i) {
            i.preventDefault(), $("body,html").animate({
                scrollTop: 0
            }, t)
        })
    }()
});

// $(function(){
//     $('select').niceSelect();
// })