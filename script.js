document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });

    const handleHashState = () => {
        const hash = window.location.hash;
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener("hashchange", handleHashState);
    handleHashState();
});
