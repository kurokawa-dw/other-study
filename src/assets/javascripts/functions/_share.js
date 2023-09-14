class share {
  constructor(){
    this.shareSet();
  }

  shareSet() {
    let $twitter = document.querySelectorAll('.js-share__twitter');
    let twitterUrl = 'https://twitter.com/share?';
    let $facebook = document.querySelectorAll('.js-share__facebook');
    let facebookUrl = 'https://www.facebook.com/share.php?';
    let $line = document.querySelectorAll('.js-share__line');
    let lineUrl = 'https://line.me/R/msg/text/?';
		let shareUrl = document.querySelector('meta[property="og:url"]').getAttribute('content');
		let shareTtl =  document.querySelector('title').textContent;
		let shareTxt = `シェアテキスト\r\n#ハッシュタグ #ハッシュタグ`

		// console.log($('meta[name="description"]').attr('content'))


		twitterUrl = twitterUrl + 'url=' + shareUrl + '&text=' + encodeURIComponent(shareTxt);
		$twitter.forEach((el) => {
			el.setAttribute('href', twitterUrl);
		})

    facebookUrl = facebookUrl + 'u=' + shareUrl;
		$facebook.forEach((el) => {
			el.setAttribute('href', facebookUrl);
		})

    lineUrl = lineUrl + encodeURIComponent(shareTxt + '\r\n') + shareUrl;
		$line.forEach((el) => {
			el.setAttribute('href', lineUrl);
		})
  }

}

export {share};