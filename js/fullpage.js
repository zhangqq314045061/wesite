!function(e) {
    e.fn.fullpage = function(n) {
        function o() {
            e("body").append('<div id="fp-nav"><ul></ul></div>'),
            an = e("#fp-nav"),
            an.css("color", n.navigationColor),
            an.addClass(n.navigationPosition);
            for (var o = 0; o < e(".fp-section").length; o++) {
                var t = "";
                n.anchors.length && (t = n.anchors[o]);
                var i = '<li><a href="#' + t + '"><span></span></a>'
                  , l = n.navigationTooltips[o];
                void 0 != l && "" != l && (i += '<div class="fp-tooltip ' + n.navigationPosition + '">' + l + "</div>"),
                i += "</li>",
                an.find("ul").append(i)
            }
        }
        function t() {
            e(".fp-section").each(function() {
                var n = e(this).find(".fp-slide");
                n.length ? n.each(function() {
                    I(e(this))
                }) : I(e(this))
            }),
            e.isFunction(n.afterRender) && n.afterRender.call(this)
        }
        function i() {
            if (!n.autoScrolling || n.scrollBar) {
                var o = e(window).scrollTop()
                  , t = 0
                  , i = Math.abs(o - e(".fp-section").first().offset().top);
                e(".fp-section").each(function(n) {
                    var l = Math.abs(o - e(this).offset().top);
                    i > l && (t = n,
                    i = l)
                });
                var l = e(".fp-section").eq(t)
            }
            if (!n.autoScrolling && !l.hasClass("active")) {
                mn = !0;
                var a = e(".fp-section.active").index(".fp-section") + 1
                  , s = P(l)
                  , c = l.data("anchor");
                l.addClass("active").siblings().removeClass("active"),
                pn || (e.isFunction(n.onLeave) && n.onLeave.call(this, a, l.index(".fp-section") + 1, s),
                e.isFunction(n.afterLoad) && n.afterLoad.call(this, c, l.index(".fp-section") + 1)),
                E(c, 0),
                n.anchors.length && !pn && (tn = c,
                location.hash = c),
                clearTimeout(hn),
                hn = setTimeout(function() {
                    mn = !1
                }, 100)
            }
            n.scrollBar && (clearTimeout(gn),
            gn = setTimeout(function() {
                pn || u(l)
            }, 1e3))
        }
        function l(e) {
            return scrollable = e.find(".fp-slides").length ? e.find(".fp-slide.active").find(".fp-scrollable") : e.find(".fp-scrollable")
        }
        function a(n, o) {
            if ("down" == n)
                var t = "bottom"
                  , i = e.fn.fullpage.moveSectionDown;
            else
                var t = "top"
                  , i = e.fn.fullpage.moveSectionUp;
            if (o.length > 0) {
                if (!k(t, o))
                    return !0;
                i()
            } else
                i()
        }
        function s(o) {
            var t = o.originalEvent;
            if (!c(o.target)) {
                n.autoScrolling && !n.scrollBar && o.preventDefault();
                var i = e(".fp-section.active")
                  , s = l(i);
                if (!pn && !sn) {
                    var r = $(t);
                    bn = r.y,
                    xn = r.x,
                    i.find(".fp-slides").length && Math.abs(Sn - xn) > Math.abs(wn - bn) ? Math.abs(Sn - xn) > e(window).width() / 100 * n.touchSensitivity && (Sn > xn ? e.fn.fullpage.moveSlideRight() : e.fn.fullpage.moveSlideLeft()) : n.autoScrolling && !n.scrollBar && Math.abs(wn - bn) > e(window).height() / 100 * n.touchSensitivity && (wn > bn ? a("down", s) : bn > wn && a("up", s))
                }
            }
        }
        function c(o, t) {
            t = t || 0;
            var i = e(o).parent();
            return t < n.normalScrollElementTouchThreshold && i.is(n.normalScrollElements) ? !0 : t == n.normalScrollElementTouchThreshold ? !1 : c(i, ++t)
        }
        function r(e) {
            var n = e.originalEvent
              , o = $(n);
            wn = o.y,
            Sn = o.x
        }
        function f(o) {
            if (n.autoScrolling) {
                o = window.event || o;
                var t = Math.max(-1, Math.min(1, o.wheelDelta || -o.deltaY || -o.detail));
                n.scrollBar && (o.preventDefault ? o.preventDefault() : o.returnValue = !1);
                var i = e(".fp-section.active")
                  , s = l(i);
                return pn || (0 > t ? a("down", s) : a("up", s)),
                !1
            }
        }
        function d(o) {
            var t = e(".fp-section.active")
              , i = t.find(".fp-slides");
            if (i.length && !sn) {
                var l = i.find(".fp-slide.active")
                  , a = null ;
                if (a = "prev" === o ? l.prev(".fp-slide") : l.next(".fp-slide"),
                !a.length) {
                    if (!n.loopHorizontal)
                        return;
                    a = l.siblings("prev" === o ? ":last" : ":first")
                }
                sn = !0,
                x(i, a)
            }
        }
        function p() {
            e(".fp-slide.active").each(function() {
                G(e(this))
            })
        }
        function u(o, t, i) {
            var l = o.position();
            if ("undefined" != typeof l) {
                var a = {
                    element: o,
                    callback: t,
                    isMovementUp: i,
                    dest: l,
                    dtop: l.top,
                    yMovement: P(o),
                    anchorLink: o.data("anchor"),
                    sectionIndex: o.index(".fp-section"),
                    activeSlide: o.find(".fp-slide.active"),
                    activeSection: e(".fp-section.active"),
                    leavingSection: e(".fp-section.active").index(".fp-section") + 1,
                    localIsResizing: un
                };
                if (!(a.activeSection.is(o) && !un || n.scrollBar && e(window).scrollTop() === a.dtop)) {
                    if (a.activeSlide.length)
                        var s = a.activeSlide.data("anchor")
                          , c = a.activeSlide.index();
                    n.autoScrolling && n.continuousVertical && "undefined" != typeof a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = g(a)),
                    o.addClass("active").siblings().removeClass("active"),
                    pn = !0,
                    U(c, s, a.anchorLink, a.sectionIndex),
                    e.isFunction(n.onLeave) && !a.localIsResizing && n.onLeave.call(this, a.leavingSection, a.sectionIndex + 1, a.yMovement),
                    v(a),
                    tn = a.anchorLink,
                    n.autoScrolling && E(a.anchorLink, a.sectionIndex)
                }
            }
        }
        function v(o) {
            if (n.css3 && n.autoScrolling && !n.scrollBar) {
                var t = "translate3d(0px, -" + o.dtop + "px, 0px)";
                V(t, !0),
                setTimeout(function() {
                    w(o)
                }, n.scrollingSpeed)
            } else {
                var i = h(o);
                e(i.element).animate(i.options, n.scrollingSpeed, n.easing).promise().done(function() {
                    w(o)
                })
            }
        }
        function h(e) {
            var o = {};
            return n.autoScrolling && !n.scrollBar ? (o.options = {
                top: -e.dtop
            },
            o.element = "." + vn) : (o.options = {
                scrollTop: e.dtop
            },
            o.element = "html, body"),
            o
        }
        function g(n) {
            return n.isMovementUp ? e(".fp-section.active").before(n.activeSection.nextAll(".fp-section")) : e(".fp-section.active").after(n.activeSection.prevAll(".fp-section").get().reverse()),
            J(e(".fp-section.active").position().top),
            p(),
            n.wrapAroundElements = n.activeSection,
            n.dest = n.element.position(),
            n.dtop = n.dest.top,
            n.yMovement = P(n.element),
            n
        }
        function m(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(".fp-section:first").before(n.wrapAroundElements) : e(".fp-section:last").after(n.wrapAroundElements),
            J(e(".fp-section.active").position().top),
            p())
        }
        function w(o) {
            m(o),
            e.isFunction(n.afterLoad) && !o.localIsResizing && n.afterLoad.call(this, o.anchorLink, o.sectionIndex + 1),
            setTimeout(function() {
                pn = !1,
                e.isFunction(o.callback) && o.callback.call(this)
            }, on)
        }
        function S() {
            var e = window.location.hash.replace("#", "").split("/")
              , n = e[0]
              , o = e[1];
            n && D(n, o)
        }
        function b() {
            if (!mn) {
                var e = window.location.hash.replace("#", "").split("/")
                  , n = e[0]
                  , o = e[1];
                if (n.length) {
                    var t = "undefined" == typeof tn
                      , i = "undefined" == typeof tn && "undefined" == typeof o && !sn;
                    (n && n !== tn && !t || i || !sn && ln != o) && D(n, o)
                }
            }
        }
        function x(o, t) {
            var i = t.position()
              , l = o.find(".fp-slidesContainer").parent()
              , a = t.index()
              , s = o.closest(".fp-section")
              , c = s.index(".fp-section")
              , r = s.data("anchor")
              , f = s.find(".fp-slidesNav")
              , d = t.data("anchor")
              , p = un;
            if (n.onSlideLeave) {
                var u = s.find(".fp-slide.active").index()
                  , v = z(u, a);
                p || "none" === v || e.isFunction(n.onSlideLeave) && n.onSlideLeave.call(this, r, c + 1, u, v)
            }
            t.addClass("active").siblings().removeClass("active"),
            "undefined" == typeof d && (d = a),
            n.loopHorizontal || (s.find(".fp-controlArrow.fp-prev").toggle(0 != a),
            s.find(".fp-controlArrow.fp-next").toggle(!t.is(":last-child"))),
            s.hasClass("active") && U(a, d, r, c);
            var h = function() {
                p || e.isFunction(n.afterSlideLoad) && n.afterSlideLoad.call(this, r, c + 1, d, a),
                sn = !1
            }
            ;
            if (n.css3) {
                var g = "translate3d(-" + i.left + "px, 0px, 0px)";
                T(o.find(".fp-slidesContainer"), n.scrollingSpeed > 0).css(Z(g)),
                setTimeout(function() {
                    h()
                }, n.scrollingSpeed, n.easing)
            } else
                l.animate({
                    scrollLeft: i.left
                }, n.scrollingSpeed, n.easing, function() {
                    h()
                });
            f.find(".active").removeClass("active"),
            f.find("li").eq(a).find("a").addClass("active")
        }
        function y() {
            if (C(),
            cn) {
                if ("text" !== e(document.activeElement).attr("type")) {
                    var n = e(window).height();
                    Math.abs(n - Cn) > 20 * Math.max(Cn, n) / 100 && (e.fn.fullpage.reBuild(!0),
                    Cn = n)
                }
            } else
                clearTimeout(yn),
                yn = setTimeout(function() {
                    e.fn.fullpage.reBuild(!0)
                }, 500)
        }
        function C() {
            if (n.responsive) {
                var o = fn.hasClass("fp-responsive");
                e(window).width() < n.responsive ? o || (e.fn.fullpage.setAutoScrolling(!1),
                e("#fp-nav").hide(),
                fn.addClass("fp-responsive")) : o && (e.fn.fullpage.setAutoScrolling(!0),
                e("#fp-nav").show(),
                fn.removeClass("fp-responsive"))
            }
        }
        function T(e, o) {
            var t = "all " + n.scrollingSpeed + "ms " + n.easingcss3;
            return o ? (e.removeClass("fp-notransition"),
            e.css({
                "-webkit-transition": t,
                transition: t
            })) : M(e)
        }
        function M(e) {
            return e.addClass("fp-notransition")
        }
        function A(n, o) {
            var t = 825
              , i = 900;
            if (t > n || i > o) {
                var l = 100 * n / t
                  , a = 100 * o / i
                  , s = Math.min(l, a)
                  , c = s.toFixed(2);
                e("body").css("font-size", c + "%")
            } else
                e("body").css("font-size", "100%")
        }
        function L(o, t) {
            n.navigation && (e("#fp-nav").find(".active").removeClass("active"),
            o ? e("#fp-nav").find('a[href="#' + o + '"]').addClass("active") : e("#fp-nav").find("li").eq(t).find("a").addClass("active"))
        }
        function B(o) {
            n.menu && (e(n.menu).find(".active").removeClass("active"),
            e(n.menu).find('[data-menuanchor="' + o + '"]').addClass("active"))
        }
        function E(e, n) {
            B(e),
            L(e, n)
        }
        function k(e, n) {
            return "top" === e ? !n.scrollTop() : "bottom" === e ? n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0
        }
        function P(n) {
            var o = e(".fp-section.active").index(".fp-section")
              , t = n.index(".fp-section");
            return o == t ? "none" : o > t ? "up" : "down"
        }
        function z(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }
        function I(e) {
            e.css("overflow", "hidden");
            var o = e.closest(".fp-section")
              , t = e.find(".fp-scrollable");
            if (t.length)
                var i = t.get(0).scrollHeight;
            else {
                var i = e.get(0).scrollHeight;
                n.verticalCentered && (i = e.find(".fp-tableCell").get(0).scrollHeight)
            }
            var l = dn - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
            i > l ? t.length ? t.css("height", l + "px").parent().css("height", l + "px") : (n.verticalCentered ? e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : e.wrapInner('<div class="fp-scrollable" />'),
            e.find(".fp-scrollable").slimScroll({
                allowPageScroll: !0,
                height: l + "px",
                size: "10px",
                alwaysVisible: !0
            })) : R(e),
            e.css("overflow", "")
        }
        function R(e) {
            e.find(".fp-scrollable").children().first().unwrap().unwrap(),
            e.find(".slimScrollBar").remove(),
            e.find(".slimScrollRail").remove()
        }
        function N(e) {
            e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + F(e) + 'px;" />')
        }
        function F(e) {
            var o = dn;
            if (n.paddingTop || n.paddingBottom) {
                var t = e;
                t.hasClass("fp-section") || (t = e.closest(".fp-section"));
                var i = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                o = dn - i
            }
            return o
        }
        function V(e, n) {
            T(fn, n),
            fn.css(Z(e))
        }
        function D(n, o) {
            if ("undefined" == typeof o && (o = 0),
            isNaN(n))
                var t = e('[data-anchor="' + n + '"]');
            else
                var t = e(".fp-section").eq(n - 1);
            n === tn || t.hasClass("active") ? q(t, o) : u(t, function() {
                q(t, o)
            })
        }
        function q(e, n) {
            if ("undefined" != typeof n) {
                var o = e.find(".fp-slides")
                  , t = o.find('[data-anchor="' + n + '"]');
                t.length || (t = o.find(".fp-slide").eq(n)),
                t.length && x(o, t)
            }
        }
        function H(e, o) {
            e.append('<div class="fp-slidesNav"><ul></ul></div>');
            var t = e.find(".fp-slidesNav");
            t.addClass(n.slidesNavPosition);
            for (var i = 0; o > i; i++)
                t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"),
            t.find("li").first().find("a").addClass("active")
        }
        function U(e, o, t, i) {
            var l = "";
            n.anchors.length ? (e ? ("undefined" != typeof t && (l = t),
            "undefined" == typeof o && (o = e),
            ln = o,
            location.hash = l + "/" + o) : "undefined" != typeof e ? (ln = o,
            location.hash = t) : location.hash = t,
            W(location.hash)) : W("undefined" != typeof e ? i + "-" + e : String(i))
        }
        function W(n) {
            n = n.replace("/", "-").replace("#", ""),
            e("body")[0].className = e("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g, ""),
            e("body").addClass("fp-viewing-" + n)
        }
        function O() {
            var e, n = document.createElement("p"), o = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            document.body.insertBefore(n, null );
            for (var t in o)
                void 0 !== n.style[t] && (n.style[t] = "translate3d(1px,1px,1px)",
                e = window.getComputedStyle(n).getPropertyValue(o[t]));
            return document.body.removeChild(n),
            void 0 !== e && e.length > 0 && "none" !== e
        }
        function Y() {
            document.addEventListener ? (document.removeEventListener("mousewheel", f, !1),
            document.removeEventListener("wheel", f, !1)) : document.detachEvent("onmousewheel", f)
        }
        function X() {
            document.addEventListener ? (document.addEventListener("mousewheel", f, !1),
            document.addEventListener("wheel", f, !1)) : document.attachEvent("onmousewheel", f)
        }
        function Q() {
            (cn || rn) && (MSPointer = K(),
            e(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, r),
            e(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, s))
        }
        function j() {
            (cn || rn) && (MSPointer = K(),
            e(document).off("touchstart " + MSPointer.down),
            e(document).off("touchmove " + MSPointer.move))
        }
        function K() {
            var e;
            return e = window.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }
        function $(e) {
            var n = new Array;
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
            n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
            n
        }
        function G(o) {
            var t = n.scrollingSpeed;
            e.fn.fullpage.setScrollingSpeed(0),
            x(o.closest(".fp-slides"), o),
            e.fn.fullpage.setScrollingSpeed(t)
        }
        function J(e) {
            if (n.scrollBar)
                fn.scrollTop(e);
            else if (n.css3) {
                var o = "translate3d(0px, -" + e + "px, 0px)";
                V(o, !1)
            } else
                fn.css("top", -e)
        }
        function Z(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }
        function _() {
            J(0),
            e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),
            e(".fp-section").css({
                height: "",
                "background-color": "",
                padding: ""
            }),
            e(".fp-slide").css({
                width: ""
            }),
            fn.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            e(".fp-section, .fp-slide").each(function() {
                R(e(this)),
                e(this).removeClass("fp-table active")
            }),
            M(fn),
            M(fn.find(".fp-easing")),
            fn.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                e(this).replaceWith(this.childNodes)
            }),
            e("html, body").scrollTop(0)
        }
        function en() {
            n.continuousVertical && (n.loopTop || n.loopBottom) && (n.continuousVertical = !1,
            nn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            n.continuousVertical && n.scrollBar && (n.continuousVertical = !1,
            nn("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            e.each(n.anchors, function(n, o) {
                (e("#" + o).length || e('[name="' + o + '"]').length) && nn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
            })
        }
        function nn(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        n = e.extend({
            menu: !1,
            anchors: [],
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            easing: "easeInQuart",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null ,
            scrollOverflow: !1,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null ,
            responsive: 0,
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null ,
            onLeave: null ,
            afterRender: null ,
            afterResize: null ,
            afterReBuild: null ,
            afterSlideLoad: null ,
            onSlideLeave: null 
        }, n),
        en(),
        e.extend(e.easing, {
            easeInQuart: function(e, n, o, t, i) {
                return t * (n /= i) * n * n * n + o
            }
        });
        var on = 600;
        e.fn.fullpage.setAutoScrolling = function(o) {
            n.autoScrolling = o;
            var t = e(".fp-section.active");
            n.autoScrolling && !n.scrollBar ? (e("html, body").css({
                overflow: "hidden",
                height: "100%"
            }),
            fn.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }),
            t.length && J(t.position().top)) : (e("html, body").css({
                overflow: "visible",
                height: "initial"
            }),
            fn.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            J(0),
            e("html, body").scrollTop(t.position().top))
        }
        ,
        e.fn.fullpage.setScrollingSpeed = function(e) {
            n.scrollingSpeed = e
        }
        ,
        e.fn.fullpage.setMouseWheelScrolling = function(e) {
            e ? X() : Y()
        }
        ,
        e.fn.fullpage.setAllowScrolling = function(n) {
            n ? (e.fn.fullpage.setMouseWheelScrolling(!0),
            Q()) : (e.fn.fullpage.setMouseWheelScrolling(!1),
            j())
        }
        ,
        e.fn.fullpage.setKeyboardScrolling = function(e) {
            n.keyboardScrolling = e
        }
        ,
        e.fn.fullpage.moveSectionUp = function() {
            var o = e(".fp-section.active").prev(".fp-section");
            o.length || !n.loopTop && !n.continuousVertical || (o = e(".fp-section").last()),
            o.length && u(o, null , !0)
        }
        ,
        e.fn.fullpage.moveSectionDown = function() {
            var o = e(".fp-section.active").next(".fp-section");
            o.length || !n.loopBottom && !n.continuousVertical || (o = e(".fp-section").first()),
            o.length && u(o, null , !1)
        }
        ,
        e.fn.fullpage.moveTo = function(n, o) {
            var t = "";
            t = isNaN(n) ? e('[data-anchor="' + n + '"]') : e(".fp-section").eq(n - 1),
            "undefined" != typeof o ? D(n, o) : t.length > 0 && u(t)
        }
        ,
        e.fn.fullpage.moveSlideRight = function() {
            d("next")
        }
        ,
        e.fn.fullpage.moveSlideLeft = function() {
            d("prev")
        }
        ,
        e.fn.fullpage.reBuild = function(o) {
            un = !0;
            var t = e(window).width();
            dn = e(window).height(),
            n.resize && A(dn, t),
            e(".fp-section").each(function() {
                dn - parseInt(e(this).css("padding-bottom")) - parseInt(e(this).css("padding-top"));
                if (n.verticalCentered && e(this).find(".fp-tableCell").css("height", F(e(this)) + "px"),
                e(this).css("height", dn + "px"),
                n.scrollOverflow) {
                    var o = e(this).find(".fp-slide");
                    o.length ? o.each(function() {
                        I(e(this))
                    }) : I(e(this))
                }
                var o = e(this).find(".fp-slides");
                o.length && x(o, o.find(".fp-slide.active"))
            });
            var i = (e(".fp-section.active").position(),
            e(".fp-section.active"));
            i.index(".fp-section") && u(i),
            un = !1,
            e.isFunction(n.afterResize) && o && n.afterResize.call(this),
            e.isFunction(n.afterReBuild) && !o && n.afterReBuild.call(this)
        }
        ;
        var tn, ln, an, sn = !1, cn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/), rn = "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, fn = e(this), dn = e(window).height(), pn = !1, un = !1, vn = "fullpage-wrapper";
        e.fn.fullpage.setAllowScrolling(!0),
        n.css3 && (n.css3 = O()),
        e(this).length ? (fn.css({
            height: "100%",
            position: "relative"
        }),
        fn.addClass(vn)) : nn("error", "Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),
        e(n.sectionSelector).each(function() {
            e(this).addClass("fp-section")
        }),
        e(n.slideSelector).each(function() {
            e(this).addClass("fp-slide")
        }),
        n.navigation && o(),
        e(".fp-section").each(function(o) {
            var t = e(this)
              , i = e(this).find(".fp-slide")
              , l = i.length;
            if (o || 0 !== e(".fp-section.active").length || e(this).addClass("active"),
            e(this).css("height", dn + "px"),
            (n.paddingTop || n.paddingBottom) && e(this).css("padding", n.paddingTop + " 0 " + n.paddingBottom + " 0"),
            "undefined" != typeof n.sectionsColor[o] && e(this).css("background-color", n.sectionsColor[o]),
            "undefined" != typeof n.anchors[o] && e(this).attr("data-anchor", n.anchors[o]),
            l > 1) {
                var a = 100 * l
                  , s = 100 / l;
                i.wrapAll('<div class="fp-slidesContainer" />'),
                i.parent().wrap('<div class="fp-slides" />'),
                e(this).find(".fp-slidesContainer").css("width", a + "%"),
                e(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),
                "#fff" != n.controlArrowColor && (e(this).find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + n.controlArrowColor),
                e(this).find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + n.controlArrowColor + " transparent transparent")),
                n.loopHorizontal || e(this).find(".fp-controlArrow.fp-prev").hide(),
                n.slidesNavigation && H(e(this), l),
                i.each(function() {
                    e(this).css("width", s + "%"),
                    n.verticalCentered && N(e(this))
                });
                var c = t.find(".fp-slide.active");
                0 == c.length ? i.eq(0).addClass("active") : G(c)
            } else
                n.verticalCentered && N(e(this))
        }).promise().done(function() {
            e.fn.fullpage.setAutoScrolling(n.autoScrolling);
            var o = e(".fp-section.active").find(".fp-slide.active");
            o.length && (0 != e(".fp-section.active").index(".fp-section") || 0 == e(".fp-section.active").index(".fp-section") && 0 != o.index()) && G(o),
            n.fixedElements && n.css3 && e(n.fixedElements).appendTo("body"),
            n.navigation && (an.css("margin-top", "-" + an.height() / 2 + "px"),
            an.find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")),
            n.menu && n.css3 && e(n.menu).closest(".fullpage-wrapper").length && e(n.menu).appendTo("body"),
            n.scrollOverflow ? ("complete" === document.readyState && t(),
            e(window).on("load", t)) : e.isFunction(n.afterRender) && n.afterRender.call(this),
            C();
            var i = window.location.hash.replace("#", "").split("/")
              , l = i[0];
            if (l.length) {
                var a = e('[data-anchor="' + l + '"]');
                !n.animateAnchor && a.length && (n.autoScrolling ? J(a.position().top) : (J(0),
                W(l),
                e("html, body").scrollTop(a.position().top)),
                E(l, null ),
                e.isFunction(n.afterLoad) && n.afterLoad.call(this, l, a.index(".fp-section") + 1),
                a.addClass("active").siblings().removeClass("active"))
            }
            e(window).on("load", function() {
                S()
            })
        });
        var hn, gn, mn = !1;
        e(window).on("scroll", i);
        var wn = 0
          , Sn = 0
          , bn = 0
          , xn = 0;
        e(window).on("hashchange", b),
        e(document).keydown(function(o) {
            if (n.keyboardScrolling && n.autoScrolling && ((40 == o.which || 38 == o.which) && o.preventDefault(),
            !pn))
                switch (o.which) {
                case 38:
                case 33:
                    e.fn.fullpage.moveSectionUp();
                    break;
                case 40:
                case 34:
                    e.fn.fullpage.moveSectionDown();
                    break;
                case 36:
                    e.fn.fullpage.moveTo(1);
                    break;
                case 35:
                    e.fn.fullpage.moveTo(e(".fp-section").length);
                    break;
                case 37:
                    e.fn.fullpage.moveSlideLeft();
                    break;
                case 39:
                    e.fn.fullpage.moveSlideRight();
                    break;
                default:
                    return
                }
        }),
        e(document).on("click touchstart", "#fp-nav a", function(n) {
            n.preventDefault();
            var o = e(this).parent().index();
            u(e(".fp-section").eq(o))
        }),
        e(document).on("click touchstart", ".fp-slidesNav a", function(n) {
            n.preventDefault();
            var o = e(this).closest(".fp-section").find(".fp-slides")
              , t = o.find(".fp-slide").eq(e(this).closest("li").index());
            x(o, t)
        }),
        n.normalScrollElements && (e(document).on("mouseenter", n.normalScrollElements, function() {
            e.fn.fullpage.setMouseWheelScrolling(!1)
        }),
        e(document).on("mouseleave", n.normalScrollElements, function() {
            e.fn.fullpage.setMouseWheelScrolling(!0)
        })),
        e(".fp-section").on("click touchstart", ".fp-controlArrow", function() {
            e(this).hasClass("fp-prev") ? e.fn.fullpage.moveSlideLeft() : e.fn.fullpage.moveSlideRight()
        }),
        e(window).resize(y);
        var yn, Cn = dn;
        e.fn.fullpage.destroy = function(o) {
            e.fn.fullpage.setAutoScrolling(!1),
            e.fn.fullpage.setAllowScrolling(!1),
            e.fn.fullpage.setKeyboardScrolling(!1),
            e(window).off("scroll", i).off("hashchange", b).off("resize", y),
            e(document).off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", n.normalScrollElements).off("mouseout", n.normalScrollElements),
            e(".fp-section").off("click", ".fp-controlArrow"),
            o && _()
        }
    }
}(jQuery);
