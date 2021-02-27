console.log("Hello")

setTimeout(() => document.getElementsByClassName("video-stream html5-main-video")[0].pause(), 2000);

function pauseIt() {
    document.getElementsByClassName("video-stream html5-main-video")[0].pause();
}

function playIt() {
    document.getElementsByClassName("video-stream html5-main-video")[0].play();
}

setTimeout(playIt, 5000);

// Let's use handtracking and show the webcam feed with wireframes
const handsfree = new Handsfree({ showDebug: true, hands: true })
handsfree.start()

// Create a plugin named "logger" to show data on every frame
handsfree.use('logger', data => {
    console.log(data.hands)
})


// const handsfree = new Handsfree({
//     hands: true,

//     plugin: {
//         pinchScroll: {
//             enabled: true,

//             // Number of frames over the same element before activating that element
//             framesToFocus: 10,

//             // Number of pixels the middle and thumb tips must be near each other to drag
//             threshold: 50,

//             // Number of frames where a hold is not registered before releasing a drag
//             numThresholdErrorFrames: 5,

//             // Speed multiplier
//             speed: .5
//         }
//     }
// })
// handsfree.start();
// console.log(handsfree)