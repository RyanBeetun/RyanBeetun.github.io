// animate fishes
anime (
    {targets: '.container .shark1',
    translateX: 800,
    duration: 10000,
    easing: 'easeInSine',
    loop: true}
)

anime ({
    targets: '.container .shark2',
    translateX: -800,
    duration: 7000,
    easing: 'easeInSine',
    delay: 3000,
    loop: true
})

anime ({
    targets: '.container .fish1',
    translateX: -800,
    duration: 9000,
    easing: 'easeInSine',
    delay: 3000,
    loop: true
})

anime ({
    targets: '.container .fish2',
    translateX: 800,
    duration: 9000,
    easing: 'easeInSine',
    delay: 200,
    loop: true
})

anime ({
    targets: '.container .fish3',
    translateX: -800,
    duration: 6000,
    easing: 'easeInSine',
    delay: 1500,
    loop: true
})

anime ({
    targets: '.container .fish4',
    translateX: 800,
    duration: 6000,
    easing: 'easeInSine',
    delay: 2400,
    loop: true
})

// animate bubbles

anime ({
    targets: '.bubbles img',
    translateY: -600,
    easing: 'linear',
    scale: function (el, i, l) {
        return anime.random(l - i) + .2;
    },
    duration: function() {return anime.random(3000, 10000); },
    delay: function () {return anime.random (0, 400);},
    direction: 'normal',
    loop: true 
})