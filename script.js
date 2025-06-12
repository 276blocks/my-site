// Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');

        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.className = 'fas fa-moon';
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.className = 'fas fa-sun';
            }
            updateChartThemes();
        });

        // other js...