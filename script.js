// console.log('HTML5 Video Hotkeys is running');
const videoEl = document.getElementsByTagName('video')[0];
videoEl.classList.add('hide-mouse');
window.addEventListener('keypress', function (event) {
	if (event.key === 'j') {
		videoEl.currentTime -= 10;
	} else if (event.key === 'l') {
		videoEl.currentTime += 10;
	} else if (event.key === 'k') {
		videoEl.paused ? videoEl.play() : videoEl.pause();
	} else if (event.key === ',') {
		// assume every video framerate is 30fps
		videoEl.currentTime -= 1 / 30;
	} else if (event.key === '.') {
		videoEl.currentTime += 1 / 30;
	} else if (event.key === 'f') {
		if (!document.webkitFullscreenElement) {
			videoEl.webkitRequestFullscreen();
		} else {
			document.webkitExitFullscreen();
		}
	}
});

const HOVER_THRESHOLD = 3500;
let mouseTimer;

videoEl.addEventListener('mousemove', function () {
	clearTimeout(mouseTimer);
	videoEl.classList.remove('hide-mouse');
	mouseTimer = setTimeout(() => {
		videoEl.classList.add('hide-mouse');
	}, HOVER_THRESHOLD);
});
