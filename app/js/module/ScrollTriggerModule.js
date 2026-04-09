export default function ScrollTriggerModule() {
    // Scroll Parallax
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1201px)", () => {
        const moveItems = gsap.utils.toArray(".move-item");
        moveItems.forEach((item) => {
            const isMx = item.classList.contains("mx");
            const rawMove = parseFloat(item.dataset.move);
            const move = Number.isFinite(rawMove) ? rawMove : 200;
            const startVars = isMx ? { x: move, y: 0 } : { x: 0, y: move };
            const endVars = isMx
                ? { x: -move / 2, y: 0 }
                : { x: 0, y: -move / 2 };

            gsap.fromTo(item, startVars, {
                ...endVars,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "top -50%",
                    scrub: true,
                },
            });
        });
    });
}
