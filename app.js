<script>
    const menuToggle = document.querySelector('.menu-toggle');
    const links = document.querySelectorAll('.menu-lateral a');

    menuToggle.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.toggle('show');
        });
    });
</script>
