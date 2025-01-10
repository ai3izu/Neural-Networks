function toggleMenu() {
    const nav = document.querySelector('.sticky-menu ul');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.sticky-menu ul li a');
    const nav = document.querySelector('.sticky-menu ul');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    const tags = document.querySelectorAll(".tag");
    const sections = document.querySelectorAll(".article-section");

    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const sectionId = tag.getAttribute("data-section");

            sections.forEach(section => {
                section.style.display = "none";
            });

            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.style.display = "block";
            }

            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
        });
    });

    document.querySelector('.tag').click();

    document.querySelectorAll('.function-btn').forEach(button => {
        button.addEventListener('click', function () {
            const functionType = this.getAttribute('data-function');

            document.querySelectorAll('.activation-function-text').forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(functionType).style.display = 'block';

            document.querySelectorAll('.function-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

    document.querySelector('.function-btn').click();
});