document.onkeydown = function um (k) {
	if (k.key === ' ') {
		if (document.activeElement === document.body) {
			document.querySelector("[data-tooltip=\"Turn on microphone (CTRL + D)\"], [data-tooltip=\"Turn on microphone (ctrl + d)\"], [aria-label=\"Turn on microphone (CTRL + D)\"]").click();
			document.activeElement.blur();
		}
	}
}

document.onkeyup = function m (l) {
	if (l.key === ' ') {
		if (document.activeElement === document.body) {
			document.querySelector("[data-tooltip=\"Turn off microphone (CTRL + D)\"], [data-tooltip=\"Turn off microphone (ctrl + d)\"], [aria-label=\"Turn off microphone (CTRL + D)\"]").click();
			document.activeElement.blur();
		}
	}
}
