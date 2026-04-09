export default function PushinModule() {
    pushInStart();



    // var config = {
    //     target: document.querySelector('#moments'),
    //     scene: {
    //         breakpoints: [768, 1440, 1920],
    //         inpoints: [200, 300],
    //     },
    //     layers: [
    //         // Layer 1
    //         {
    //             inpoints: [0],
    //             outpoints: [500],
    //             speed: 9
    //         },
    //         {
    //             inpoints: [500],
    //             outpoints: [1900],
    //             speed: 8
    //         },
    //         {
    //             inpoints: [600],
    //             outpoints: [1800],
    //             speed: 8
    //         },
    //         {
    //             inpoints: [700],
    //             outpoints: [1700],
    //             speed: 8
    //         },
    //         {
    //             inpoints: [800],
    //             outpoints: [1600],
    //             speed: 8
    //         },
    //         // Layer 2...
    //     ],
    // };

    // // Method 1: Using global function
    // pushInStart(config);




    // $(function() {
    //     $elements = $('body').find('[class^="mdl-"]').not('#moments');
    //     $moments = $('#moments');
    //     $(".js-open-moments").on("click", ()=>{
    //         openMoments();
    //         resetMenu();
    //     }
    //     )
    //     $(".js-close-moments").on("click", ()=>{
    //         closeMoments();
    //         resetMenu();
    //     }
    //     )
    //     $(window).on('scroll.indicator', ()=>{
    //         if (listenToScroll) {
    //             $('.scroll-indicator').fadeOut(1000);
    //             $(window).off('scroll.indicator');
    //         }
    //     }
    //     )
    //     $(window).scroll(function() {
    //         if ($(this).scrollTop() > 0) {
    //             $('.mdl-header').addClass('js-sticky');
    //         } else {
    //             $('.mdl-header ').removeClass('js-sticky');
    //         }
    //     });
    //     const $menu = $('.menu-hamb');
    //     const $header = $('.mdl-header');
    //     const $body = $('body');
    //     const $menuBtns = $('.menu-toggle__item--off');
    //     const $menuBtnOn = $('.menu-toggle__item--on');
    //     const $menuItem = $('.menu-toggle');
    //     $menuBtns.on('click', function() {
    //         $menu.toggleClass('js-open')
    //         $menuItem.toggleClass('js-open')
    //         $header.toggleClass('js-open')
    //         $body.toggleClass('blocked')
    //         resetMenu();
    //     });
    //     $menuBtnOn.on('click', function() {
    //         $menu.removeClass('js-open')
    //         $menuItem.removeClass('js-open')
    //         $header.removeClass('js-open')
    //         $body.removeClass('blocked')
    //     });
    //     const $menuItems = $('.js-menu-link');
    //     const $submenu = $('.js-submenu');
    //     const $submenuMb = $('.js-submenu-mb');
    //     const $submenuChild = $('.has-child');
    //     const $submenuMob = $('.submenu');
    //     $menuItems.on('mouseover', function() {
    //         const $item = $(this);
    //         const targetId = $item[0].dataset.menuid;
    //         $menuItems.not($item).removeClass('toggled');
    //         $item.toggleClass('toggled');
    //         if (targetId) {
    //             const $sub = $('.js-submenu[data-menuid="' + targetId + '"], .js-submenu-mb[data-menuid="' + targetId + '"]');
    //             $submenu.not($sub).removeClass('active');
    //             $submenuMb.not($sub).removeClass('active');
    //             $sub.toggleClass('active');
    //         }
    //     })
    //     $submenuChild.click(function() {
    //         $submenuMob.addClass('js-show');
    //         var menuid = $(this).data("menuid");
    //         $('.js-submenu[data-menuid="' + menuid + '"]').addClass('active');
    //     })
    //     $('.menu-back').click(function() {
    //         $submenuMob.removeClass('js-show');
    //         $submenu.removeClass('js-show');
    //     })
    //     function resetMenu() {
    //         $menuItems.removeClass('toggled');
    //         $submenu.removeClass('active');
    //         $submenuMb.removeClass('active');
    //         $submenuMob.removeClass('js-show');
    //     }
    //     $(".lang-selector__current").click(function() {
    //         $(".lang-selector__toggle").toggle();
    //         $(".lang-selector__current").toggleClass('js-active');
    //     });
    //     $(".header-col.header-col--cn .header-item.header-item--rs .btn").click(function() {
    //         $(this).toggleClass('js-active');
    //         $(".t-res").toggleClass('js-active');
    //     });
    //     $(function() {
    //         $(".btn--tab").on("mouseover", function(e) {
    //             $(this).addClass("js-shadow");
    //             $(".m-rest").addClass("js-shadow");
    //         });
    //         $(document).on("click", function(e) {
    //             if ($(e.target).is(".m-rest") === false) {
    //                 $(".m-rest").removeClass("js-shadow");
    //                 $(".btn--tab").removeClass("js-shadow");
    //             }
    //         });
    //         $(".m-rest").on("mouseleave", function(e) {
    //             $(".m-rest").removeClass("js-shadow");
    //             $(".btn--tab").removeClass("js-shadow");
    //         });
    //     });
    //     $(function() {
    //         $(".btn--lg").click(function() {
    //             $(".menu-table").toggleClass('js-open');
    //             $('body').addClass('scroll-hidden');
    //         });
    //         $('.menu-toggle.menu-toggle--tab').on("click", function(e) {
    //             $(".menu-table").removeClass("js-open");
    //             $('body').removeClass('scroll-hidden');
    //         });
    //     });
    //     $(function() {
    //         $(".btn--res").click(function() {
    //             $(".t-booking").toggleClass('js-open');
    //         });
    //         $('.menu-toggle.menu-toggle--book').on("click", function(e) {
    //             $(".t-booking").removeClass("js-open");
    //         });
    //     });
    //     $(".weath-box").load('/content/comun/loadAemetExtended.php?idioma=en&ruta=/&bk=0');
    //     $('.ajax-popup-link').magnificPopup({
    //         type: 'iframe',
    //         alignTop: true,
    //         mainClass: 'iframe-reserva'
    //     });
    //     $('.ajax-popup-link-ipcamlive').magnificPopup({
    //         type: 'ajax'
    //     });
    //     $('.js-menu-bg-switch').hover(function() {
    //         var menuid = $(this).data('menuid');
    //         if ($('.js-menu-bg-' + menuid).length > 0) {
    //             $('.js-menu-bg').hide();
    //             $('.js-menu-bg-' + menuid).show();
    //         } else {
    //             $('.js-menu-bg').hide();
    //             $('.js-menu-bg-0').show();
    //         }
    //     }).mouseleave(function() {
    //         $('.js-menu-bg').hide();
    //         $('.js-menu-bg-0').show();
    //     });
    // });
    // function openMoments() {
    //     $('body').addClass('scroll-hidden');
    //     $('.vimeo-wrapper iframe').each(function() {
    //         $(this).attr('src', $(this).data('src'));
    //     });
    //     $elements.fadeOut(600, function() {
    //         window.scrollTo(0, 0);
    //         $elements.css('opacity', 0);
    //         window.setTimeout(function() {
    //             $moments.fadeIn();
    //             push = new pushin.PushIn(document.querySelector('.pushin'));
    //             push.start();
    //             $("html, body").stop().animate({
    //                 scrollTop: 900
    //             }, 1200, function() {
    //                 $('.scroll-indicator').fadeIn();
    //                 window.setTimeout(()=>{
    //                     listenToScroll = true;
    //                 }
    //                 , 1000)
    //             });
    //         }, 600)
    //     });
    // }
    // function closeMoments() {
    //     $moments.fadeOut(600, function() {
    //         $elements.show();
    //         window.scrollTo(0, 0);
    //         $('.pushin-layer').css('transform', 'scale(1)');
    //         window.setTimeout(function() {
    //             $elements.css({
    //                 'opacity': 1,
    //                 'transition': 'opacity .6s ease-in-out'
    //             });
    //             $('body').removeClass('scroll-hidden');
    //         }, 600)
    //     });
    // }


}