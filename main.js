document.querySelector('.cta-button').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#properties').offsetTop,
        behavior: 'smooth'
    });
});
