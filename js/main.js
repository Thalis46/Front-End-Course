document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.querySelector('.blog-content');

    blogContainer.addEventListener('click', (e) => {
        const blogHeader = e.target.closest('.blog-header');

        if(!blogHeader) return;

        const group = blogHeader.parentElement;
        const groupBody = group.querySelector('.blog-group-body');
        const icon = blogHeader.querySelector('i');

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        groupBody.classList.toggle('open');

        const others = blogContainer.querySelectorAll('.card');

        others.forEach((other) => {
            if (other !== group) {
                const otherBody = other.querySelector('.blog-group-body');
                const otherIcon = other.querySelector('.blog-header i');

                otherBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => 
        mobileMenu.classList.toggle('active')
    );
});
