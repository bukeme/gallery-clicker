const imgs = document.querySelectorAll('.all-imgs img')
const currentImg = document.querySelector('.current-img')

imgs.forEach(function(img) {
    img.addEventListener('click', function() {
        currentImg.src = this.src
        currentImg.classList.add('animate-img')
        setTimeout(() => {
            currentImg.classList.remove('animate-img')
        }, 400);
    })
})