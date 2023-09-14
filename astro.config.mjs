import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	server: {
    host: '0.0.0.0', //IPアドレスを有効化
  },
	// vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         assetFileNames: (assetInfo) => {
	// 					let extType = assetInfo.name.split('.')[1];
	// 					//Webフォントファイルの振り分け
	// 					if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
	// 						extType = 'fonts';
	// 					}
	// 					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
	// 						extType = 'images';
	// 					}
	// 					//ビルド時のCSS名を明記してコントロールする
	// 					if(extType === 'css') {
	// 						return `assets/styles/main.css`;
	// 					}
	// 					return `assets/${extType}/[name][extname]`;
	// 				},
	// 				// chunkFileNames: `assets/js/[name].js`,
	// 				// entryFileNames: `assets/js/[name].js`
	// 				chunkFileNames: `assets/javascripts/main.js`,
	// 				entryFileNames: `assets/javascripts/main.js`
  //       },
  //     },
  //   },
  // },
});
