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

document.querySelectorAll(counterArr.concat(counterArr2)).forEach(elem => {
    let tempLength = (elem.getTotalLength() + 1).toFixed(0);
    gsap.set(elem, { strokeDasharray: tempLength, strokeDashoffset: tempLength });
});

let animation = gsap.timeline()
    .to(counterArr2, { duration: 29, strokeDashoffset: 0 })
    .to(counterArr[0], { duration: 0.8, strokeDashoffset: 0 }, "<")
    .to(counterArr[1], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[2], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[3], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[4], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[5], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[6], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[7], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[8], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[9], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[10], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[11], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[12], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[13], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[14], { duration: 0.8, strokeDashoffset: 0 }, ">")
    .to(counterArr[15], { duration: 0.8, strokeDashoffset: 0 }, ">")
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

// let animationLine = gsap.timeline({})
// .to(counterArr2, { strokeDashoffset: 0 });
let scrollDurSection = animation.duration() * 50;

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
