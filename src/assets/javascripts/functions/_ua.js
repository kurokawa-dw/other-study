import INFO_OBJ from './_infoObj';
class ua {
  constructor(){
    INFO_OBJ.sOLDIE = false;
    INFO_OBJ.isSP = false;
    INFO_OBJ.isTABLET = false;
    INFO_OBJ.isPC = false;
    INFO_OBJ.isSP_VIEW = false;
    INFO_OBJ.SCRL_TOP = 0;
    INFO_OBJ.TIME = null;
    INFO_OBJ.VIEW_PORT = null;
    INFO_OBJ.UA = navigator.userAgent;

		const $addEl = document.getElementsByTagName('html')[0];

    if(INFO_OBJ.UA.search(/msie [6.]|msie [7.]|msie [8.]|msie [9.]|msie [10.]/i) !=-1){
			INFO_OBJ.isOLDIE = true;
			$addEl.classList.add('is-oldie');
    }

    let uaLower = INFO_OBJ.UA.toLowerCase();

    if(uaLower.indexOf('edge/') > -1){
      $addEl.classList.add('is-edge');
    }else if(uaLower.indexOf('trident/7.0') > -1){
      $addEl.classList.add('is-ie11');
    }else if(uaLower.indexOf('firefox') > -1){
      $addEl.classList.add('is-firefox');
    }else if(uaLower.indexOf('chrome') > -1){
      $addEl.classList.add('is-chrome');
    }else if(uaLower.indexOf('safari') > -1){
      $addEl.classList.add('is-safari');
    }
    if(INFO_OBJ.UA.search(/android/i) !=-1){
      $addEl.classList.add('is-android');
      // alert('アンドロイド');
    }

		if(uaLower.indexOf('windows nt') > -1){
			$addEl.classList.add('is-windows');
		}

    if( INFO_OBJ.UA.indexOf("iPhone") > 0 ) {
      INFO_OBJ.UA.match(/iPhone OS (\w+){1,3}/g);
      var version = (RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
      $addEl.classList.add('ios'+version);
    }

    if(INFO_OBJ.UA.search(/iphone/i) !=-1 || INFO_OBJ.UA.search(/ipad/i) !=-1 || INFO_OBJ.UA.search(/ipod/i) !=-1){
      $addEl.classList.add('is-ios');
      // alert('ios');
    }

    // 各種デバイス判定 & meta viewport書き込み
		//////////////////////
		if(INFO_OBJ.UA.search(/iphone/i) !=-1 || INFO_OBJ.UA.search(/ipod/i) !=-1 || ( INFO_OBJ.UA.search(/android/i) !=-1 && INFO_OBJ.UA.search(/mobile/i) !=-1)){
      // スマホ判定
      INFO_OBJ.isSP = true;
      $addEl.classList.add('is-sp');

    }else if(INFO_OBJ.UA.search(/ipad/i) !=-1 || INFO_OBJ.UA.search(/android/i) !=-1){
      // タブレット判定
      INFO_OBJ.isTABLET = true;
      $addEl.classList.add('is-tb');
      // $('meta[name="viewport"]').remove();
      // $('head').append('<meta name="viewport" content="width=1180">');
    }else if(/android|ipod|ipad|iphone|macintosh/.test(uaLower) && 'ontouchend' in document){
       // ipad判定
      INFO_OBJ.isTABLET = true;
      $addEl.classList.add('is-tb');
      // $('meta[name="viewport"]').remove();
      // $('head').append('<meta name="viewport" content="width=1180">');
    }else{
    // PC判定
      INFO_OBJ.isPC = true;
      $addEl.classList.add('is-pc');
    }


  }
}

export { ua };
