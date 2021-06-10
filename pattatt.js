document.onkeydown = function um (k) {
	if (k.key === ' ') {
		if (document.activeElement === document.body) {
			document.querySelector('[aria-label^="Turn on microphone"]').click();
			document.activeElement.blur();
		}
	}
}

document.onkeyup = function m (l) {
	if (l.key === ' ') {
		if (document.activeElement === document.body) {
			document.querySelector('[aria-label^="Turn off microphone"]').click();
			document.activeElement.blur();
		}
	}
}
