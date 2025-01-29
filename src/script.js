    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const toggleBtn = document.getElementById('toggleBtn');
    const homeContent = document.getElementById('homeContent');
    const contentFrame = document.getElementById('contentFrame');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
        toggleBtn.classList.toggle('collapsed');
    });

    function loadSite(url) {
        homeContent.style.display = 'none';
        contentFrame.style.display = 'block';
        contentFrame.src = url;
    }

    function showHome() {
        homeContent.style.display = 'block';
        contentFrame.style.display = 'none';
    }