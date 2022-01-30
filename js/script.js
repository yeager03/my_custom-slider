"use strict";

window.addEventListener('load', function () {
	new Slider(".gallery-1", true, 1500);
});

class Slider {
	constructor(selector, autoplay = false, duration = null) {
		this.rootElement = document.querySelector(selector);
		this.btnPrev = this.rootElement.querySelector('.gallery .buttons .prev');
		this.btnNext = this.rootElement.querySelector('.gallery .buttons .next');
		this.images = this.rootElement.querySelectorAll('.gallery .photos img');
		this.interval = null;
		this.i = 0;

		this.autoplay = autoplay;
		this.duration = duration;

		this.initControls();
	}

	initControls() {
		if (this.autoplay) {
			setInterval(() => {
				this.next();
			}, this.duration);
			this.btnPrev.disabled = true;
			this.btnNext.disabled = true;
			return;
		}

		this.btnPrev.addEventListener("click", () => this.prev());
		this.btnNext.addEventListener("click", () => this.next());
	}

	prev() {
		this.images[this.i].classList.remove('showed');
		this.i--;

		if (this.i < 0) {
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
	}

	next() {
		this.images[this.i].classList.remove('showed');
		this.i++;

		if (this.i >= this.images.length) {
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}

}