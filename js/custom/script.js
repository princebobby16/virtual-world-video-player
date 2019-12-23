window.videoMode = function () {
    var curspt = document.getElementById("menu");
    curspt.setAttribute("scale", "0 0 0");

    var newspot = document.getElementById("video-gallery");
    newspot.setAttribute("scale", "1 1 1");
}

window.musicMode = function (evt) {
    var curspt = document.getElementById("menu");
    curspt.setAttribute("scale", "0 0 0");
}

window.placesMode = function (evt) {
    var curspt = document.getElementById("menu");
    curspt.setAttribute("scale", "0 0 0");

    var newspot = document.getElementById("image-gallery");
    newspot.setAttribute("scale", "1 1 1");
}

let scene = document.querySelector("a-scene");
var cursor = document.querySelector("a-cursor");

scene.lightOff = function () {
    scene.islightOn = true;
    scene.removeAttribute('animation__fogback');
    scene.setAttribute('animation__fog', "property: fog.color; to: #0c192a; dur: 800; easing: easeInQuad;");
}
scene.lightOn = function () {
    scene.islightOn = false;
    scene.removeAttribute('animation__fog');
    scene.setAttribute('animation__fogback', "property: fog.color; to: #dbdedb; dur: 800");
}


var videoPlayer = new AVideoPlayer();


// Cursor
let hideCursor = function () {
    cursor.removeAttribute('animation__cursorHideLeave');
    cursor.setAttribute('animation__cursorHideEnter', "property: scale; from: 0.6 0.6 0.6; to: 0 0 0; dur: 300; easing: easeInQuad;");
}
let showCursor = function () {
    cursor.removeAttribute('animation__cursorHideEnter');
    cursor.setAttribute('animation__cursorHideLeave', "property: scale; from: 0 0 0; to: 0.6 0.6 0.6; dur: 300; easing: easeInQuad;");
}
document.querySelector('#video-screen').addEventListener('mouseenter', hideCursor);
document.querySelector('#video-screen').addEventListener('mouseleave', showCursor);

// Play Button Action
document.querySelector('#control-play').addEventListener('click', function () {
    if (videoPlayer.paused) {
        scene.lightOn()
    } else {
        scene.lightOff();
        hideCursor();
    }
});