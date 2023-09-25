gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    // Условие проверяет, прокрутка происходит из-за касания пальцем экрана телефона или нет
    ScrollSmoother.create ({
        // Плавная прокрутка страницы
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        // Анимация исчезания элементов, когда они прокручиваются
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        // Анимация появления элементов с левой части экрана
        gsap.fromTo(item, { x: -150, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => {
        // Анимация появления элементов с правой части экрана
        gsap.fromTo(item, { x: 150, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })
}

function readMore(side) {
    /* В зависимости от левой или правой стороны, где была нажата кнопка,
    скрытый текст покажется или наоборот скроется */
    if (side === "right") {
        var dots = document.getElementById("gallery__right__dots");
        var moreText = document.getElementById("gallery__right__moreText");
        var readMoreButton = document.getElementById("gallery__right__readMoreButton");
    } else {
        var dots = document.getElementById("gallery__left__dots");
        var moreText = document.getElementById("gallery__left__moreText");
        var readMoreButton = document.getElementById("gallery__left__readMoreButton");
    }

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readMoreButton.innerHTML = "Показать больше";
        moreText.style.display = "none"
    } else {
        dots.style.display = "none";
        readMoreButton.innerHTML = "Показать меньше";
        moreText.style.display = "inline"  
    }
}

