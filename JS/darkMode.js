function aplicarTema() {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

aplicarTema();

document.addEventListener('DOMContentLoaded', () => {
    
    const toggleBtn = document.querySelector('.dark-mode-toggle') || document.querySelector('[data-lucide="moon"]');
    
    if (toggleBtn) {
        
        toggleBtn.style.cursor = 'pointer'; 
        
        toggleBtn.addEventListener('click', () => {
            const darkMode = localStorage.getItem('darkMode');
            
            if (darkMode == 'enabled') {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            }
        });
    }
});