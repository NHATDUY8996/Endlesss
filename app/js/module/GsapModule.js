export default function GSAPModule() {
    try {
        gsap.registerPlugin(ScrollTrigger);
    
        const textLines = document.querySelectorAll(".scroll-text");
    
        const textLineAnim = gsap.timeline({
    
            defaults: {
                duration: 3,
                ease: 'true'
            },
            scrollTrigger: {
                start: 0,
                end: 'max',
                scrub: 0.1
            }
    
        })
    
        textLineAnim
            .fromTo(textLines, {
                x: 0
            }, {
                x: (index) => index % 2 ? window.innerWidth : -window.innerWidth
            }, 0)
            // .fromTo(textLines, {
            //     x: 0
            // }, {
            //     x: (index) => index % 2 ? -window.innerWidth : window.innerWidth,
            //     immediateRender: false
            // }, 2)       
    } catch (error) {
        console.log(error);
    }
}