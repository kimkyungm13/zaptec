$(function () {
    /** LENIS */
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
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
        $(this).toggleClass('close');
        $('header').toggleClass('show')
    })

    /** 메뉴 스크롤 */
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            $('header').addClass('wheel');
        } else if (scrollPosition == 0) {

            $('header').removeClass('wheel');
        } else {
        }
    });

    /** section 01 sc-visual */
    gsap.set('.over', { overflow: 'hidden' })
    gsap.from('.sc-visual .title', {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        yPercent: 100,
    })
    gsap.to('.sc-visual .video-group ', {
        scrollTrigger: {
            trigger: '.sc-visual',
            start: '0% 0%',
            scrub: 1,
        },
        'clip-path': 'inset(0% 1.5% 0% 1.5%)',
    })

    /** section 02 sc-mmodule */
    gsap.to('.sc-module .word span', {
        scrollTrigger: {
            trigger: '.sc-module',
            start: '0% 50%',
            end: '100% 100%',
            scrub: 1,
        },
        stagger: 1,
        color: "#252525",
    })
    gsap.to('.sc-module .img-box ', {
        scrollTrigger: {
            trigger: '.sc-module ',
            start: '0% 20%',
            end: '100% 100%',
            // markers: true,
        },
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    })
    gsap.to('.sc-module img ', {
        scrollTrigger: {
            trigger: '.sc-module ',
            start: '0% 0%',
            end: '150% 100%',
            markers: true,
            scrub: 0
        },
        yPercent: -10,
    })


    /** section 03 sc-charging */
    gsap.to('.sc-charging .charging-group', {
        scrollTrigger: {
            trigger: '.sc-charging .img-area .img01',
            start: 'top top',
            end: 'bottom bottom',
            toggleClass: {
                targets: '.charging-group',
                className: 'show'
            },
            yPercent: 100,
        }
    })
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
    gsap.from('.sc-chargers .title', {
        scrollTrigger: {
            trigger: '.sc-chargers',
            start: '0% 50%',
            end: '200% 100%',
        },
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        yPercent: 100,
    })
    /** mouse cursor */
    const customCursor = document.querySelector('.custom-cursor');
    const targetSection = document.querySelector('.sc-chargers');
    targetSection.addEventListener('mouseenter', () => {
        gsap.to(customCursor, {
            backgroundColor: "#000", // 배경색을 검은색으로 변경
            duration: 0.3 // 애니메이션 지속 시간
        });
    });
    targetSection.addEventListener('mouseleave', () => {
        gsap.to(customCursor, {
            width: "20px",
            height: "20px",
            backgroundColor: "transparent", // 배경색을 투명으로 변경
            duration: 0.3 // 애니메이션 지속 시간
        });
    });
    window.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX + 100}px`;
        customCursor.style.top = `${e.clientY + 100}px`;
    });

    /** section 05 sc-hub */
    gsap.set('.over', { overflow: 'hidden' })
    gsap.from('.sc-hub .title', {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        yPercent: 100,
    })
    gsap.to('.sc-hub .img-box ', {
        scrollTrigger: {
            trigger: '.sc-hub ',
            start: '0% 20%',
            end: '100% 100%',
            // markers: true,
        },
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    })
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
    gsap.to('.sc-journey .img01', {
        scrollTrigger: {
            trigger: '.img-wrapper',
            start: '0% 80%',
            end: 'bottom bottom',
            scrub: 0,
            // markers: true
        },
        width: "100%",
        height: "100vh",
        top: "0"
    })
}); /** end */