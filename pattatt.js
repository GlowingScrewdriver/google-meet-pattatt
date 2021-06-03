document.onkeydown = function um (k) {
	if (k.key === ' ') {
		if (document.activeElement === document.body) {
			document.querySelectorAll("[data-tooltip=\"Turn on microphone (CTRL + D)\"], [data-tooltip=\"Turn on microphone (ctrl + d)\"]")[0].click();
			document.activeElement.blur();
		}
	}
}

document.onkeyup = function m (l) {
	if (l.key === ' ') {
		if (document.activeElement === document.body) {
			document.querySelectorAll("[data-tooltip=\"Turn off microphone (CTRL + D)\"], [data-tooltip=\"Turn off microphone (ctrl + d)\"]")[0].click();
			document.activeElement.blur();
		}
	}
}

//		<div class="MvD9Jd ncMv2e" style="margin: auto; top: -88px;">
//			<div class="dj3AKc RYvOkb">
//				<p class="McXdrf">Click an empty part of the bottom bar before using the spacebar.</p>
//			</div>
//		</div>
