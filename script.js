document.addEventListener("DOMContentLoaded", () => {
    
    const handleHashState = () => {
        const hash = window.location.hash;
        if (hash === '#menu-modal' || hash === '#video-modal') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    window.addEventListener('hashchange', handleHashState);
    handleHashState();

    const clockElement = document.getElementById('system-clock');
    
    const updateSystemTime = () => {
        if (!clockElement) return;
        const now = new Date();
        const options = { 
            timeZone: 'Europe/Vilnius', 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        const formatter = new Intl.DateTimeFormat('lt-LT', options);
        clockElement.textContent = `EEST / VNO: ${formatter.format(now)}`;
    };

    setInterval(updateSystemTime, 1000);
    updateSystemTime();
});
