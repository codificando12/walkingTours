document.addEventListener('DOMContentLoaded', function(){
    const mainIMG = document.querySelector('.main-img');
    const thumbnails = document.querySelectorAll('.thumbnail')

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function(){
            mainIMG.src = this.src;
        });
    });
});