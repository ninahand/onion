document.querySelector('.heading-container').addEventListener('click', () => {
    const elements = document.querySelectorAll('#text');
    elements.forEach(element => {
        element.classList.toggle('hidden'); 
    });

});
const video = document.querySelector('video');

document.body.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false; 
        
    }
    video.play();
});
