export default function QuhuScrollModule() {
    if (window.innerWidth > 1200) {

        gsap.to(".how-zigzac .bg", {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
                trigger: ".how-zigzac",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true
            }
        });

        // Duyệt qua từng item để tạo timeline riêng
        gsap.utils.toArray('.how-zigzac__item').forEach((item) => {

            // Tạo một timeline cho mỗi item
            const itemTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%",
                    toggleActions: "play none none reverse"
                }
            });

            itemTl
                .from(item.querySelector('.model-in'), {
                    scale: 0.5,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                })
                .from(item.querySelector('.buzzle-in'), {
                    scale: 0.4,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6")
                .from(item.querySelectorAll('.content > *'), {
                    y: 30,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.4");
        });
    }
}