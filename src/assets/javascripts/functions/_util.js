import { gsap } from "gsap";

class util {
	constructor(){
		// console.log('util');
	}

	static ankerScroll(_id, _diff){
		// let hH = document.querySelector('.site-header').offsetHeight;
		let hH = 0;

    if(_diff){
      hH = _diff;
    } else {
      // hH = 0;
    }

		// if(window.innerWidth <= 768){
		// 	hH = document.getElementsByClassName('header')[0].offsetHeight;
		// }


    const target = _id ? document.getElementById(_id) : 0;
		const rect = target ? target.getBoundingClientRect() : 0;
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const offsetTop = rect ? rect.top + scrollTop : 0;
		const position = offsetTop - hH;
		const duration = 1.0;

    gsap.to('html,body', { scrollTop: position, ease: "power2.out", duration});

	}

	static bgImgSet(_el){
		const el = document.querySelectorAll(_el);

		el.forEach(el => {
			const src = el.querySelector('img').src;

			el.style.backgroundImage = 'url("' + src + '")';

		});
	}

	static singleFade(_el, _offset){
		const targets = document.querySelectorAll(_el);
		let delay;
		let offset = -30;

		if(_offset != undefined){
			offset = _offset;
		}

		const options = {
			root: null,
			rootMargin: `0px 0px ${offset}%`,
			threshold: 0
		};

		const observer = new IntersectionObserver(intersected, options);

		targets.forEach(target => {
			observer.observe(target);
		});

		function intersected(entries) {
			entries.forEach(entry => {
				if(entry.target.dataset.delay){
					delay = entry.target.dataset.delay;
				} else {
					delay = 0;
				}

				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('is-active');
					}, delay)
				}
			});
		}
	}

	static staggerFade(_el, _childEl, _offset){
		const targets = document.querySelectorAll(_el);
		let staggerDelay;
		let delay;
		let offset = -30;

		if(_offset != undefined){
			offset = _offset;
		}

		const options = {
			root: null,
			rootMargin: `0px 0px ${offset}%`,
			threshold: 0
		};

		// console.log(options.rootMargin)

		const observer = new IntersectionObserver(intersected, options);

		targets.forEach(target => {
			observer.observe(target);
		});

		function intersected(entries) {
			entries.forEach(entry => {

				const children = entry.target.querySelectorAll(_childEl);

				if(entry.target.dataset.staggerdelay){
					staggerDelay = entry.target.dataset.staggerdelay;
				} else {
					staggerDelay = 200;
				}

				if(entry.target.dataset.delay){
					delay = entry.target.dataset.delay;
				} else {
					delay = 0;
				}

				if (entry.isIntersecting) {
					setTimeout(() => {
						children.forEach((child,index) => {
							setTimeout(() => {
								child.classList.add('is-active');
							}, index * staggerDelay);
						});
						entry.target.classList.add('id-treated');
					}, delay);
				}
			});
		}
	}


}

export { util };