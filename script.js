document.addEventListener("DOMContentLoaded", () => {
    const handleHashChange = () => {
        const hash = window.location.hash;
        const targetOverlays = ['#folder-photo', '#folder-video', '#menu'];
        
        if (targetOverlays.includes(hash)) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#folder-') || targetId === '#menu') {
                return;
            }
            
            if (targetId === '#') {
                e.preventDefault();
                return;
            }

            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                if (document.body.style.overflow === 'hidden') {
                    window.location.hash = '';
                    document.body.style.overflow = '';
                }
                
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
                
                history.pushState(null, null, targetId);
            }
        });
    });
});