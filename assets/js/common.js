$(function () {
    /** LENIS */
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        // console.log(e)
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
    gsap.defaults({
        ease: "ease"
    })

    /** 메뉴 전체보기 */
    $('#header .btn-more').click(function () {
        $('body').toggleClass('hidden');
        $('menu-left').toggleClass('auto')
        $(this).toggleClass('close');
        $('header').toggleClass('show')

        if ($(this).hasClass('close')) {
            lenis.stop();
        } else {
            lenis.start();

        }
    })

    /** 메뉴 스크롤 */
    let lastScroll = 0;
    $(window).scroll(function () {
        curr = $(this).scrollTop();

        if (curr >= 100) {
            $('header').addClass('white')
            if (curr > lastScroll) {
                $('header').addClass('wheel');
            } else {
                $('header').removeClass('wheel');
            }
        } else {
            $('header').removeClass('wheel');
            $('header').removeClass('white')
        }


        lastScroll = curr;
    })
    // window.addEventListener('scroll', function () {
    //     var scrollPosition = window.scrollY;
    //     // if (scrollPosition > 50) {
    //     //     $('header').addClass('wheel');
    //     // } else if (scrollPosition == 0) {

    //     //     $('header').removeClass('wheel');
    //     // } else {
    //     // }
    // });

    /** section 01 sc-visual */
    gsap.set('.over', { overflow: 'hidden' })
    gsap.from('.sc-visual .title', {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        yPercent: 100,
    })
    visualVideoTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-visual',
            start: '0% 0%',
            end: "100% 0%",
            scrub: 0,
        },
    })
    visualVideoTl.to('.sc-visual .video-group ', {
        'clip-path': 'inset(0% 1.5% 0% 1.5%)',
    }, 'a')
    visualVideoTl.to('.sc-visual .video-group video', {
        yPercent: -20
    }, 'a')


    //
    const moduleTxt = new SplitType('.module-title .line', { types: 'words, chars', });

    /** section 02 sc-mmodule */
    gsap.to('.sc-module .word .char', {
        scrollTrigger: {
            trigger: '.sc-module',
            start: '0% 70%',
            end: '100% 100%',
            scrub: 0,
            // markers: true
        },
        stagger: 1,
        color: "#252525",
    })

    // gsap.to('.sc-module .img-box ', {
    //     scrollTrigger: {
    //         trigger: '.sc-module ',
    //         start: '0% 20%',
    //         end: '100% 100%',
    //         // markers: true,
    //     },
    //     'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    // })
    gsap.to('.sc-module img ', {
        scrollTrigger: {
            trigger: '.sc-module ',
            start: '0% 0%',
            end: '150% 100%',
            // markers: true,
            scrub: 0
        },
        yPercent: -10,
    })


    /** section 03 sc-charging */

    barH = $('.sc-charging .wrap .list li').height();
    gsap.set('.sc-charging .wrap .head .curr', { height: barH })

    ScrollTrigger.create({
        trigger: '.sc-charging .wrap',
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        onUpdate: function (self) {
            totalLangth = $('.sc-charging .wrap .list li').length; //2개
            idx = Math.round(self.progress * (totalLangth - 1));


            currItem = $('.sc-charging .charging-group.show');
            newItem = $('.sc-charging .charging-group').eq(idx);

            currItem2 = $('.sc-charging .wrap .list li.on');
            newItem2 = $('.sc-charging .wrap .list li').eq(idx);

            gsap.to('.sc-charging .wrap .head .curr', { yPercent: 100 * idx })

            if (currItem) { currItem.removeClass('show'); }
            if (newItem) { newItem.addClass("show"); }

            if (currItem2) { currItem2.removeClass('on'); }
            if (newItem2) { newItem2.addClass("on"); }

        }
    })


    $('.sc-charging .wrap .list li:first-child a').click(function (e) {
        e.preventDefault();
        lenis.scrollTo('.sc-charging .img01')
    });
    $('.sc-charging .wrap .list li:last-child a').click(function (e) {
        e.preventDefault();
        lenis.scrollTo('.sc-charging .img02')
    })
    // $('.sc-charging .wrap .list li').click(function (e) {
    //     e.preventDefault();
    //     lenis.scrollTo('.sc-charging .img02')

    // })

    // gsap.to('.sc-charging .charging-group', {
    //     scrollTrigger: {
    //         trigger: '.sc-charging .img-area .img01',
    //         start: 'top top',
    //         end: 'bottom bottom',
    //         toggleClass: {
    //             targets: '.charging-group',
    //             className: 'show'
    //         },
    //         yPercent: 100,
    //     }
    // })
    /** section 04 sc-chargers */
    ScrollTrigger.create({
        trigger: `[data-theme="beige"]`,
        start: "0% 50%",
        end: "100% 50%",
        // markers:true,
        toggleClass: {
            targets: "body",
            className: "beige",
        },
    })
    // gsap.set('.sc-chargers .title .over', { overflow: hidden });
    gsap.from('.sc-chargers .title .line', {
        scrollTrigger: {
            trigger: '.sc-chargers',
            start: '0% 50%',
            end: '100% 100%',
            markers: true
        },
        stagger: 0.3,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        yPercent: 100,
    })

    const bullet = ['Blue', 'Midnight', 'Orange', 'Purple', 'Starlight'];
    const chargersSwiper = new Swiper('.chargers-area', {
        direction: 'vertical',
        loop: true,
        initialSlide: 0,
        pagination: {
            el: '.bullet-list',
            clickable: true,
            bulletActiveClass: 'on',
            renderBullet: function (i, className) {
                return '<p class="' + className + '"> <span class="bullet-bg ' + bullet[i].toLowerCase() + '"></span><span class="bullet-txt">' + (bullet[i]) + '</span></p>';
            }
        },
        on: {
            init: function () {
                this.update(); // Swiper 초기화 후 강제로 업데이트
            },
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        observer: true,
        observeParents: true,
    });


    /** mouse cursor */


    const customCursor = document.querySelector('.custom-cursor');


    gsap.set(customCursor, { scale: 3, autoAlpha: 0 })
    $('.sc-chargers').hover(function () {
        gsap.to(customCursor, { scale: 1, autoAlpha: 1 })
    }, function () {
        gsap.to(customCursor, { scale: 3, autoAlpha: 0 })
    })

    $(window).mousemove(function (e) {
        gsap.to(customCursor, {
            x: e.clientX + 100,
            y: e.clientY + 100
        })
        //     customCursor.style.top = `${e.clientY + 100}px`;
    })


    // const customCursor = document.querySelector('.custom-cursor');
    // const targetSection = document.querySelector('.sc-chargers');
    // targetSection.addEventListener('mouseenter', () => {
    //     gsap.from(customCursor, {
    //         scale:3,
    //         duration: 0.3 // 애니메이션 지속 시간
    //     });
    // });
    // targetSection.addEventListener('mouseleave', () => {
    //     gsap.to(customCursor, {
    //         width: "20px",
    //         height: "20px",
    //         // backgroundColor: "transparent", // 배경색을 투명으로 변경
    //         duration: 0.3 // 애니메이션 지속 시간
    //     });
    // });
    // window.addEventListener('mousemove', (e) => {
    //     customCursor.style.left = `${e.clientX + 100}px`;
    //     customCursor.style.top = `${e.clientY + 100}px`;
    // });




    /** section 05 sc-hub */
    gsap.set('.over', { overflow: 'hidden' })
    gsap.from('.sc-hub .title', {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        yPercent: 100,
    })
    // gsap.to('.sc-hub .img-box ', {
    //     scrollTrigger: {
    //         trigger: '.sc-hub ',
    //         start: '0% 20%',
    //         end: '100% 100%',
    //         // markers: true,
    //     },
    //     'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    // })


    $('[data-effect="thumb"]').each(function (i, el) {

        ScrollTrigger.create({
            trigger: el,
            start: '0% 100%',
            end: '30% 100%',
            // markers: true,
            onLeave: function () {
                el.classList.add('on')
            },
            onLeaveBack: function () {
                el.classList.remove('on')
            }
        })
    })


    // $('[data-effect="thumb"]').each(function(i,el){

    //    gsap.to(el, {
    //     scrollTrigger: {
    //         trigger: el,
    //         start: '0% 20%',
    //         end: '100% 100%',
    //         // markers: true,
    //     },
    //     'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    // })
    // })







    /** section 06 sc-journey */
    ScrollTrigger.create({
        trigger: `[data-theme="black"]`,
        start: "0% 50%",
        end: "100% 100%",
        // markers:true,
        toggleClass: {
            targets: "body",
            className: "black",
        },
    })



    gsap.set('.sc-journey .img-wrapper img.img02', { yPercent: 300 })
    gsap.set('.sc-journey .img-wrapper img.img03', { yPercent: 300 })
    gsap.set('.sc-journey .img-wrapper img.img04', { yPercent: 300 })
    gsap.set('.sc-journey .img-wrapper img.img05', { yPercent: 300 })


    asdas = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-journey',
            start: '25% 0%',
            end: '100% 100%',
            scrub: 0,
            // markers: true
        },
    })
    asdas.to('.sc-journey .img01', {
        width: "100%",
        height: "100vh",
    }, 'a')
    asdas.to('.sc-journey .img-wrapper img.img02', { yPercent: -300 }, 'a')
    asdas.to('.sc-journey .img-wrapper img.img03', { yPercent: -200 }, 'a')
    asdas.to('.sc-journey .img-wrapper img.img04', { yPercent: -300 }, 'a')
    asdas.to('.sc-journey .img-wrapper img.img05', { yPercent: -300 }, 'a')
}); /** end */