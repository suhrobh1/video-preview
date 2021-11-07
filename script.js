console.log("page loaded...");

var video = document.getElementById("wavesVideo");
function playVideo(){
    video.play();
}

function pauseVideo(){
    video.pause();
    video.currentTime= 0;
}