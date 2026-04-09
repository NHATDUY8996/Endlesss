export default function SmoothScrollModule() {
    SmoothScroll({
        // Scrolling Core
        animationTime: 400, // [ms]
        stepSize: 130, // [px]

        // Acceleration
        accelerationDelta: 50, // 50
        accelerationMax: 3, // 3

        // Keyboard Settings
        keyboardSupport: true, // option
        arrowScroll: 50, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Other
        touchpadSupport: false, // ignore touchpad by default
        fixedBackground: true,
        excluded: ""
    });
}