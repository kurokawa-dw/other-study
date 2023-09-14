import INFO_OBJ from './_infoObj';

class modal {
	constructor(_el){
		// this.modalSet();
		// this.iframeApiSet();

		if(INFO_OBJ.isSP){
			// console.log('sp')
		}
	}

	static modalSet(){
		const videoModalContent = '<div class="l-modal-content-video"><div class="inner"><div class="l-modal-content-video__close-btn u-hv-o"><span></span></div><div class="video-content modal-bobling"><div class="l-modal-head-close-btn modal-close-btn u-hv-o"><span class="icn"></span></div></div></div><div class="modal-layer"></div></div>';
		const htmlModal = '<div class="l-modal-html"><div class="l-modal-html__close-btn"><span></span></div><div class="l-modal-html__inner modal-bobling"></div><div class="l-modal-html__layer"></div></div>';
		const imgModal = '<div class="l-modal-img"><div class="l-modal-img__inner modal-bobling"><div class="l-modal-img__img-area"></div><div class="l-modal-img__close-btn"><span></span></div></div><div class="l-modal-img__layer"></div></div>';


		const $body = document.getElementsByTagName('body')[0];
		$body.insertAdjacentHTML('beforeend',videoModalContent);
		$body.insertAdjacentHTML('beforeend',htmlModal);
		$body.insertAdjacentHTML('beforeend',imgModal);

	}

	static htmlModalOpenLoad(_targetId, _ex, _el,){
		const A = this;

		if(_ex){ //外部ファイル読み込み

		} else {
			A.htmlModalOpen(_targetId, _ex, _el);
		}
	}

	static htmlModalOpen(_targetId, _ex, _el){
		const A = this;
		const $modal = document.getElementsByClassName('l-modal-html')[0];
		const $modalInner = document.getElementsByClassName('l-modal-html__inner')[0];
		const $body = document.getElementsByTagName('body')[0];
		const $wrap = document.getElementById('wrap');
		let contentH;
		let contentW;
		let offset;
		let adjVal = 0;

		this.scrVal = window.scrollY;

		// console.log(this.scrVal);

		$body.classList.add('is-modal-op');
		// $body.style.top = -this.scrVal + 'px';

		// console.log(this.scrVal);

		if(_ex){

		} else {
			const targetEl = document.getElementById(_targetId);
			const clone = targetEl.cloneNode(true);
			$modalInner.appendChild(clone);
		}

		setTimeout(() => {
			contentH = $modalInner.offsetHeight;
			contentW = $modalInner.offsetWidth;
			offset = ( window.innerHeight / 2 - ( contentH / 2 ) );

			if(window.innerHeight <= contentH){
				offset = adjVal;
			}

			$modalInner.style.top = offset + 'px';
			$modal.classList.add('is-active');



		},10);

		const $closeBtn = document.querySelectorAll('.l-modal-html .modal-close-btn');

		for (let el of $closeBtn){
			el.addEventListener('click', (e) => {
				A.htmlModalClose();
			});
		}


	}

	static htmlModalClose(){
		const $modal = document.getElementsByClassName('l-modal-html')[0];
		const $modalInner = document.getElementsByClassName('l-modal-html__inner')[0];
		const $body = document.getElementsByTagName('body')[0];
		const $wrap = document.getElementById('wrap');

		$modal.classList.remove('is-active');
		setTimeout(() => {
			$body.classList.remove('is-modal-op');
			// $body.removeAttribute('style');
			$modalInner.removeAttribute('style');
			$modalInner.innerHTML = '';

			// scrollBy(0, this.scrVal);
			// ScrollTrigger.refresh(true);
		},300);
	}


	static imgModalOpen(src, img, el){
		const A = this;
		const $modal = document.getElementsByClassName('l-modal-img')[0];
		const $modalInner = document.getElementsByClassName('l-modal-img__inner')[0];
		const $modalImgArea = document.getElementsByClassName('l-modal-img__img-area')[0];
		const $body = document.getElementsByTagName('body')[0];
		const $wrap = document.getElementById('wrap');
		let contentH;
		let contentW;
		let offset;
		let adjVal = 0;

		this.scrVal = window.scrollY;

		// console.log(this.scrVal);

		$body.classList.add('is-modal-op');
		// $body.style.top = -this.scrVal + 'px';

		// console.log(this.scrVal);

		const imgCODE = `<img class="l-modal-img__main" src="${src}">`;
		$modalImgArea.insertAdjacentHTML('beforeend',imgCODE);

		setTimeout(() => {
			contentH = $modalInner.offsetHeight;
			contentW = $modalInner.offsetWidth;
			offset = ( window.innerHeight / 2 - ( contentH / 2 ) );

			if(window.innerHeight <= contentH){
				offset = adjVal;
			}

			$modalInner.style.top = offset + 'px';
			$modal.classList.add('is-active');



		},10);

		const $closeBtn = document.querySelectorAll('.l-modal-img__close-btn');

		for (let el of $closeBtn){
			el.addEventListener('click', (e) => {
				A.imgModalClose();
			});
		}

	}

	static imgModalClose(){
		const $modal = document.getElementsByClassName('l-modal-img')[0];
		const $modalInner = document.getElementsByClassName('l-modal-img__inner')[0];
		const $modalImg = document.getElementsByClassName('l-modal-img__main')[0];
		const $body = document.getElementsByTagName('body')[0];
		const $wrap = document.getElementById('wrap');

		$modal.classList.remove('is-active');
		setTimeout(() => {
			$body.classList.remove('is-modal-op');
			$modalInner.removeAttribute('style');
			$modalImg.remove();
		},300);
	}

	static iframeApiSet(){
		const tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";

		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	static youtubeModalOpen(_id, _bg){
		const A = this;
		const ytModalContent = '<div class="l-modal-yt"><div class="l-modal-yt__inner"><div class="l-modal-yt__close-btn u-hv-o"><span></span></div><div class="l-modal-yt__video-content modal-bobling"><div class="iframe-wrap"><div id="modal-movie-player"></div></div><div class="l-modal-head-close-btn modal-close-btn"><span class="icn"></span></div></div></div><div class="l-modal-yt__layer"></div></div>';
		const $body = document.getElementsByTagName('body')[0];
		const $wrap = document.getElementsByClassName('wrap')[0];


		$body.insertAdjacentHTML('beforeend',ytModalContent);
		if(_bg){
			document.getElementsByClassName('l-modal-yt')[0].classList.add('bg-wh');
		}

		const $modalYt = document.getElementsByClassName('l-modal-yt')[0];
		const $modalYtInner = document.getElementsByClassName('l-modal-yt__inner')[0];
		const $closeBtn = document.getElementsByClassName('l-modal-yt__close-btn')[0];
		const $layer = document.getElementsByClassName('l-modal-yt__layer')[0];
		let contentH;
		let contentW;
		let offset;
		let adjVal = 0;

		this.scrVal = window.scrollY;

		$body.classList.add('is-modal-op');
		// $body.style.top = `-${this.scrVal}px`;

		setTimeout(() => {
			contentH = $modalYtInner.offsetHeight;
			contentW = $modalYtInner.offsetWidth;
			offset = ( window.innerHeight / 2 - ( contentH / 2 ) );

			if(window.innerHeight <= contentH){
				offset = adjVal;
			}

			$modalYtInner.style.top = offset + 'px';

			A.youtubeSet(_id,'modal-movie-player');
			$modalYt.classList.add('is-active');


		},10);

		$layer.addEventListener('click', () => {
			A.youtubeModalClose();
		});
		$closeBtn.addEventListener('click', () => {
			A.youtubeModalClose();
		});
	}

	static youtubeModalClose(){
		const $modalYt = document.getElementsByClassName('l-modal-yt')[0];
		const $modalYtInner = document.getElementsByClassName('l-modal-yt__inner')[0];
		const $body = document.getElementsByTagName('body')[0];
		const $wrap = document.getElementsByClassName('wrap')[0];

		$modalYt.classList.remove('is-active');

		setTimeout(() => {
			$body.classList.remove('is-modal-op');
			// $body.removeAttribute('style');

			$modalYt.remove();

			// scrollBy(0, this.scrVal);

			// ScrollTrigger.refresh(true);
		},100);
	}

	static youtubeSet(_id, _elId){
		let A = this;
		let player;
		let movie;
		let videoId;
		let playerId;
		let movieDate;
		let flag = true;

		videoId = _id;
		playerId = _elId;

		player = new YT.Player(
			playerId,{
				width:	'100%',
				height:	'100%',
				videoId:	videoId,
				playerVars: {
					loop: 0,
					videoId: videoId,
					controls:	1,
					rel: 0,
					showinfo:	1,
					playsinline: 1,
					wmode:'transparent',
					'origin': location.protocol + '//' + location.hostname + "/"
				},
				events:	{
					'onReady': function(event){
						movie = event.target;
						// movie.playVideo();
					},

					'onStateChange': function(event){
						movieDate = event.data;
						let ytStatus = movieDate;
					}
				}
			}
		);

	}

}


export {modal};