    //  <!-- Initialize Swiper -->

     $(".slider-main_component").each(function(index) {
         const swiper = new Swiper($(this).find(".swiper")[0], {
             speed: 700,
             loop: true,
             autoplay: {
                 delay: 4000,
                 disableOnInteraction: false,
             },
             slidesPerView: 1,
             spaceBetween: "2%",
             pagination: {
                 el: $(this).find(".swiper-bullet-wrapper")[0],
                 bulletActiveClass: "is-active",
                 bulletClass: "swiper-bullet",
                 bulletElement: "button",
                 clickable: true
             },
             navigation: {
                 nextEl: $(this).find(".btn-next")[0],
                 prevEl: $(this).find(".btn-prev")[0],
                 disabledClass: "is-disabled"
             },
         });
     });



     $(document).ready(function() {

         var show = true;
         var countbox = $(".gridnumbers");
         $(window).on("scroll load resize", function() {
             if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
             var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
             var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
             var w_height = $(window).height(); // Высота окна браузера
             var d_height = $(document).height(); // Высота всего документа
             var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
             if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                 $('.anim').css('opacity', '1');
                 $('.anim').spincrement({
                     thousandSeparator: "",
                     duration: 2200
                 });

                 show = false;
             }
         });

     });
     ! function(t) {
         t.extend(t.easing, {
             spincrementEasing: function(t, a, e, n, r) {
                 return a === r ? e + n : n * (-Math.pow(2, -10 * a / r) + 1) + e
             }
         }), t.fn.spincrement = function(a) {
             function e(t, a) {
                 if (t = t.toFixed(a), a > 0 && "." !== r.decimalPoint && (t = t.replace(".", r.decimalPoint)), r.thousandSeparator)
                     for (; o.test(t);) t = t.replace(o, "$1" + r.thousandSeparator + "$2");
                 return t
             }
             var n = {
                     from: 0,
                     to: null,
                     decimalPlaces: null,
                     decimalPoint: ".",
                     thousandSeparator: ",",
                     duration: 1e3,
                     leeway: 50,
                     easing: "spincrementEasing",
                     fade: !0,
                     complete: null
                 },
                 r = t.extend(n, a),
                 o = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
             return this.each(function() {
                 var a = t(this),
                     n = r.from;
                 a.attr("data-from") && (n = parseFloat(a.attr("data-from")));
                 var o;
                 if (a.attr("data-to")) o = parseFloat(a.attr("data-to"));
                 else if (null !== r.to) o = r.to;
                 else {
                     var i = t.inArray(r.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + r.thousandSeparator : r.thousandSeparator,
                         l = new RegExp(i, "g");
                     o = parseFloat(a.text().replace(l, ""))
                 }
                 var c = r.duration;
                 r.leeway && (c += Math.round(r.duration * (2 * Math.random() - 1) * r.leeway / 100));
                 var s;
                 if (a.attr("data-dp")) s = parseInt(a.attr("data-dp"), 10);
                 else if (null !== r.decimalPlaces) s = r.decimalPlaces;
                 else {
                     var d = a.text().indexOf(r.decimalPoint);
                     s = d > -1 ? a.text().length - (d + 1) : 0
                 }
                 a.css("counter", n), r.fade && a.css("opacity", 0), a.animate({
                     counter: o,
                     opacity: 1
                 }, {
                     easing: r.easing,
                     duration: c,
                     step: function(t) {
                         a.html(e(t * o, s))
                     },
                     complete: function() {
                         a.css("counter", null), a.html(e(o, s)), r.complete && r.complete(a)
                     }
                 })
             })
         }
     }(jQuery);

     
