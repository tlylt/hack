console.log("Hello")

const video = document.getElementsByClassName("video-stream html5-main-video")[0];

// pause() in 5s
setTimeout(() => { video.pause(); }, 5000);

// play() in 6s
setTimeout(() => { video.play(); }, 5000);