    lucide.createIcons();

        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        const loginForm = document.querySelector('.login-form');

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = 'inicio.html';
        });

        const passwordInput = document.querySelector('#password');
        const togglePasswordButton = document.querySelector('.toggle-password');

        togglePasswordButton.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePasswordButton.innerHTML = '<i data-lucide="eye-off"></i>';
            } else {
                passwordInput.type = 'password';
                togglePasswordButton.innerHTML = '<i data-lucide="eye"></i>';
            }

            lucide.createIcons();
        });