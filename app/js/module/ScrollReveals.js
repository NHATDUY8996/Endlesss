export default function ScrollReveals() {
    const itemLazy = document.querySelectorAll('.item-lazy');
    if (itemLazy) {
        ScrollReveal().reveal(itemLazy, {
            interval: 200,
            delay: 300,
            duration: 1000,
            opacity: 0,
            easing: "ease",
        });
    }

}