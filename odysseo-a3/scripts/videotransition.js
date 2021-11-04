// Animate functions

let playBtn = anime ({
    targets: '#video-preview',
    left: '320px',
    width: '800px',
    borderRadius: ['50%', '2%'],
    easing: 'easeInOutSine',
    scale: '1.2',
    transition: '0.1s',
    autoplay: false
})

let slideContent = anime ({
    targets: '.content2',
    left: '50%',
    easing: 'easeInOutSine',
    transition: '0.1s',
    autoplay: false
})

let showVideo = () => {
    const video = document.querySelector('.ytvideo')
    const preview = document.querySelector('#video-preview')
    const removeIcon = document.querySelector('.fa-play')

    video.style.display = 'flex'
    video.style.width = '100%'
    video.style.height = '100%'
    preview.style.background = 'none'
    preview.style.overflow = 'hidden'
    removeIcon.style.display = 'none'
}

let dismissBtn = anime({
    targets: '.dismiss-video',
    left: '1265px',
    easing: 'linear',
    transition: '0.1s',
    autoplay: false
})

function animateAll(){
    showVideo()
    playBtn.play();
    slideContent.play();
    dismissBtn.play();
}

document.querySelector('#video-preview').onclick = animateAll;










