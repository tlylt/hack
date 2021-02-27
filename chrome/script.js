console.log("Hello")

setTimeout(() => document.getElementsByClassName("video-stream html5-main-video")[0].pause(), 2000);

function pauseIt() {
    document.getElementsByClassName("video-stream html5-main-video")[0].pause();
}

function playIt() {
    document.getElementsByClassName("video-stream html5-main-video")[0].play();
}

setTimeout(playIt, 5000);