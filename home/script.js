document.querySelector('.heading-container').addEventListener('click', () => {
    const elements = document.querySelectorAll('#text');
    elements.forEach(element => {
        element.classList.toggle('hidden'); 
    });

});