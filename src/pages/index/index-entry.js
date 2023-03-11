require("./../../global/js/global-entry")

import "./index.scss"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/animation.svg")
// console.log(svgContent);

gsap.registerPlugin(ScrollTrigger);


let counterArr = Array.from({ length: 29 }, (_, i) => `#l${i + 1}`);
let counterArr2 = [
    "#line001",
]
// let counterArr3 = [
// ]
// document.querySelectorAll(counterArr3).forEach(function (elem) {
//     let tempLength = (elem.getTotalLength() + 1).toFixed(0)
//     gsap.set(elem, { strokeDasharray: tempLength, strokeDashoffset: tempLength })
// })
const crosshair = document.querySelector("#arrow");
gsap.set(crosshair, { xPercent: -0.1, yPercent: 0.8 });

// Встановлюємо початкові координати центру екрану
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

// Встановлюємо функцію, яка виконується кожен раз, коли курсор рухається над .display-animation
function onMouseMove(e) {
    // Перевіряємо, чи наведено курсор на .display-animation
    const displayAnimation = document.querySelector('.display-animation');
    if (!displayAnimation.contains(e.target)) {
        return;
    }

    // Отримуємо координати курсора
    const x = e.clientX;
    const y = e.clientY;

    // Обчислюємо різницю між координатами курсора і центром екрану
    const diffX = x - centerX;
    const diffY = y - centerY;

    // Анімація руху прицілу за курсором
    gsap.to(crosshair, {
        duration: 0.5,
        x: diffX,
        y: diffY,
    });
}

// Додаємо слухача події на рух курсора
document.addEventListener("mousemove", onMouseMove);
const sections = [];
for (let i = 1; i <= 29; i++) {
    sections.push(document.querySelector(`#section${i}`));
}

sections.forEach((section) => {
    section.addEventListener("mouseover", () => {
        sections.forEach((otherSection) => {
            if (otherSection === section) {
                // otherSection.style.autoalpha = 1;
                gsap.to(otherSection, { autoAlpha: 1 })

            } else {
                // otherSection.style.autoalpha = 0;
                gsap.to(otherSection, { autoAlpha: 0.4 })

            }
        });
    });

    section.addEventListener("mouseout", () => {
        sections.forEach((otherSection) => {
            gsap.to(otherSection, { autoAlpha: 1 })
        });
    });
});
document.querySelectorAll(counterArr.concat(counterArr2)).forEach(elem => {
    let tempLength = (elem.getTotalLength() + 1).toFixed(0);
    gsap.set(elem, { strokeDasharray: tempLength, strokeDashoffset: tempLength });
});

gsap.set('#priceLine', { y: 350 })
gsap.set('#priceText', { y: 20 })
gsap.set('#moneyEur', { y: 20 })
gsap.set('#line002', { x: 960 })
gsap.set('#red_line', { opacity: 0 })
gsap.set('#numberR', { opacity: 0 })
gsap.set('#money', { scale: 0, transformOrigin: "50% 50%" })
gsap.set('#profit', { scale: 0, transformOrigin: "50% 50%" })
gsap.set('#slCircleG', { scale: 0, transformOrigin: "50% 50%" })
gsap.to('#slCircle', { rotation: 360, duration: 8, repeat: -1, ease: "none", transformOrigin: "50% 50%" })

let animation = gsap.timeline()
    .to(counterArr2[0], { duration: 29, strokeDashoffset: 0 })

    .to(counterArr[0], { duration: 0.8, strokeDashoffset: 0 }, "<")
    .to(counterArr[1], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[2], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[3], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[4], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[5], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to('#priceLine', { duration: 3, y: 0 }, "<")
    .to('#numberR', { opacity: 1 }, "<")
    .to('#red_line', { opacity: 1 }, "<+2")

    .to(counterArr[6], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[7], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to('#priceText', { y: 0 }, "<")
    .to(counterArr[8], { duration: 0.8, strokeDashoffset: 0 }, ">")

    .to(counterArr[9], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[10], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[11], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[12], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[13], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[14], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[15], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to('#slCircleG', { scale: 1, }, "<")

    .to(counterArr[16], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[17], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[18], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[19], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[20], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[21], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[22], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[23], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[24], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[25], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[26], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[27], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[28], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[29], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to('#line002', { duration: 5, x: 0 }, ">")
    .to('#profit', { duration: 1, scale: 1.4 }, ">-0.2")
    .to('#profit', { duration: 1, scale: 1 }, ">")
    .to('#moneyEur', { y: 0 }, "<")
    .to('#money', { scale: 1.1 }, ">+0.2")
    .to('#money', { scale: 1 }, ">")


// let animationLine = gsap.timeline({})
// .to(counterArr2, { strokeDashoffset: 0 });
let scrollDurSection = animation.duration() * 150;

// Перший трігер для анімації counterArr
ScrollTrigger.create({
    trigger: '.display-animation',
    animation: animation,
    start: "0% 0%",
    end: `bottom+=${scrollDurSection}px 100%`,
    pin: true,
    scrub: 0.8,
});
// ScrollTrigger.create({
//     trigger: counterArr2,
//     animation: animationLine,
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: 0.8,
// });
