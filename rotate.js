function updateRotate() {
	const rotate = document.querySelector('.rotate');
	const scene = document.querySelector('.scene');
	
	if (!rotate || !scene) return;
	
	const isPortrait = window.innerHeight > window.innerWidth;

	if (isPortrait) {
		rotate.classList.add('active');
		scene.classList.add('blur');
	} else {
		rotate.classList.remove('active');
		scene.classList.remove('blur');
	}
}

window.addEventListener('load', updateRotate);
window.addEventListener('resize', updateRotate);