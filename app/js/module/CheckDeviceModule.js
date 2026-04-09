export default function CheckDeviceModule() {
    function getDeviceType() {
        const ua = navigator.userAgent;
        if (/android/i.test(ua)) return "Android";
        if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return "iOS";
        if (/windows nt/i.test(ua)) return "Windows";
        if (/macintosh|mac os x/i.test(ua)) return "macOS";
        if (/linux/i.test(ua)) return "Linux";
        return "PC";
    }
    return { getDeviceType };
}
