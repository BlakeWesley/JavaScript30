// get the play button
const play = document.querySelector(".toggle");
play.addEventListener("click", playVideo);

const video = document.querySelector(".viewer");
video.addEventListener("click", playVideo);

const volume = document.getElementsByName("volume")[0];
volume.addEventListener("change", changeVolume);

const playbackRate = document.getElementsByName("playbackRate")[0];
playbackRate.addEventListener("change", changeSpeed);

const backTenSeconds = document.querySelector("button[data-skip='-10']");
backTenSeconds.addEventListener("click", seek);

const forward25Seconds = document.querySelector("button[data-skip='25']");
forward25Seconds.addEventListener("click", seek);

const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => mouseDown = true)
progress.addEventListener("mouseup", () => mouseDown = false)
video.addEventListener("timeupdate", handleProgress);

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}

function seek() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function playVideo() {
    if (video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function changeVolume() {
    video.volume = volume.value;
}

function changeSpeed() {
    video.playbackRate = playbackRate.value;
}