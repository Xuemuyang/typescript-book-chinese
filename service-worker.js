/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fe2bd893b5211d8f534e4bddb0f2112c"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.bf312ac7.js",
    "revision": "1ba9b3e4b7f8c44c56caff59f2bcf03f"
  },
  {
    "url": "assets/js/13.a38bae57.js",
    "revision": "d204b05473b845efacda91f489813acd"
  },
  {
    "url": "assets/js/14.b0407b07.js",
    "revision": "48dde7e427737892334a32ea5cb409c0"
  },
  {
    "url": "assets/js/15.fecfbe04.js",
    "revision": "d2f758171856101e082ef7ffdb680425"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.9c85fc21.js",
    "revision": "7d38c6a53e9f9f5d76b2f00a0a3bf992"
  },
  {
    "url": "assets/js/19.e792885f.js",
    "revision": "4973cd631651cd1ba10412b406e7b52f"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.1a5762e2.js",
    "revision": "ad3926bb2856c31fb4a5118a0dbe56c2"
  },
  {
    "url": "assets/js/21.16ee2aaf.js",
    "revision": "9baaa7801229a4f42161e154f1dcd18d"
  },
  {
    "url": "assets/js/22.3d55beeb.js",
    "revision": "08830a74cf8d4a6ade6b55eda55959ff"
  },
  {
    "url": "assets/js/23.680099e7.js",
    "revision": "6b42f2f8357016e5964d3a94bebb5ad9"
  },
  {
    "url": "assets/js/24.ba26a95a.js",
    "revision": "8ebc62a91b9c1d213930fc6425d26d67"
  },
  {
    "url": "assets/js/25.4fce9f89.js",
    "revision": "c6b933ba8a926d92a0cf92fc09a05701"
  },
  {
    "url": "assets/js/26.d491a4c6.js",
    "revision": "8ae995c6e57a07251520885f4972ccba"
  },
  {
    "url": "assets/js/27.c7c492d9.js",
    "revision": "d592939107d74c82e5803d4991d0131c"
  },
  {
    "url": "assets/js/28.f2b64488.js",
    "revision": "5b53080965cab7797eeea6ea192a726c"
  },
  {
    "url": "assets/js/29.a5cbd2c2.js",
    "revision": "285d6d716d1f68fbf397701616834095"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.0a2b88b3.js",
    "revision": "d33d747abe2f955fd46343650b92bd3d"
  },
  {
    "url": "assets/js/31.ad4777a3.js",
    "revision": "093ad2b6c1a83c2d8c2d92d0ab728437"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.a65e86f9.js",
    "revision": "f8e92255ab3d94fe623d89461b22422e"
  },
  {
    "url": "assets/js/34.445dcc5f.js",
    "revision": "7cc92e8fe4738989e06586be54ad8803"
  },
  {
    "url": "assets/js/35.d011b2cf.js",
    "revision": "97f40b440154c0ca0fc11b31e1f8c2b6"
  },
  {
    "url": "assets/js/36.f29c9ee9.js",
    "revision": "671735ad9380387ab539b074dca9da72"
  },
  {
    "url": "assets/js/37.78f01aa5.js",
    "revision": "d60892cd572ce39259d63d297f35f8b8"
  },
  {
    "url": "assets/js/38.dfc6af1b.js",
    "revision": "6fa1f603ddf95e9a3e1df5e68a641041"
  },
  {
    "url": "assets/js/39.f17651e5.js",
    "revision": "f610b628c2fb4e61c0f4a40bb4d4e434"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.08fe56d7.js",
    "revision": "9e749394e0f0e2123e95ab84e6697bf9"
  },
  {
    "url": "assets/js/41.8ac4503e.js",
    "revision": "97fc408dc7a3e66e604c493131d6daa1"
  },
  {
    "url": "assets/js/42.372501dd.js",
    "revision": "c86cd125e3ff1085358f224df2be82f1"
  },
  {
    "url": "assets/js/43.c8b5f2aa.js",
    "revision": "9053946a4dcbea7a37ea4a051f788870"
  },
  {
    "url": "assets/js/44.5d238ea9.js",
    "revision": "296ed688f7050692adb487935233320f"
  },
  {
    "url": "assets/js/45.8667874b.js",
    "revision": "269d33d1fd6b437f5bc080ea299d3fbd"
  },
  {
    "url": "assets/js/46.5e2dc2ef.js",
    "revision": "45470af5d59dd502cac06967b51edbf1"
  },
  {
    "url": "assets/js/47.22428547.js",
    "revision": "5101f33ef681aec3cd59b8632b537c60"
  },
  {
    "url": "assets/js/48.a3a3f7f9.js",
    "revision": "4b70bd06e54dc864c8cc6f880ec10bc0"
  },
  {
    "url": "assets/js/49.5cac1a98.js",
    "revision": "c3a95a1ddac118da76c1c9e2d2c9f26e"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.7ad8e68e.js",
    "revision": "9b699eec00fb204da99e67580b6c28fb"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.608d11fb.js",
    "revision": "5ad6f78124acb8b2533b60ff26784eef"
  },
  {
    "url": "assets/js/53.e76a4334.js",
    "revision": "7e007a784d4528f947280794ece03022"
  },
  {
    "url": "assets/js/54.f9a0dd39.js",
    "revision": "9c7cdccd387c3084ea28feba10761add"
  },
  {
    "url": "assets/js/55.d35c593b.js",
    "revision": "529112c773f95a1805b319f0e65cc9b2"
  },
  {
    "url": "assets/js/56.780ba6cd.js",
    "revision": "ccd2841bf4b97c8937c360e610a719c7"
  },
  {
    "url": "assets/js/57.59d0262d.js",
    "revision": "4bd229059ce925d3ac561f6c847fded5"
  },
  {
    "url": "assets/js/58.e5806772.js",
    "revision": "e6180818bb2e808dac6c3268bb19ba9e"
  },
  {
    "url": "assets/js/59.da895241.js",
    "revision": "69566dfe2653b0144ffa7f59103a754f"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.d6e316f2.js",
    "revision": "f2beda339544765aa7feca8afbde41ed"
  },
  {
    "url": "assets/js/61.b0e106cf.js",
    "revision": "0d8055c566dc20e42b007fa197fe81e0"
  },
  {
    "url": "assets/js/62.fe7e6577.js",
    "revision": "a87932d5bcd5676b6ba3ed0cc985be3b"
  },
  {
    "url": "assets/js/63.37c65c4f.js",
    "revision": "89b37b38b7120026ff56993b233c50e3"
  },
  {
    "url": "assets/js/64.0405925e.js",
    "revision": "48548f968f3ac8788c0b0c8ba4b014fb"
  },
  {
    "url": "assets/js/65.71f84be1.js",
    "revision": "b792dd5c29f799e2b71fe0fe718c59e9"
  },
  {
    "url": "assets/js/66.5bedc4da.js",
    "revision": "a3f48b14dc25fb5ee2531f5c0293a636"
  },
  {
    "url": "assets/js/67.9aa2ec44.js",
    "revision": "88b106d49f1cb29fd61c1697838d4a43"
  },
  {
    "url": "assets/js/68.ee7a85d1.js",
    "revision": "2a61d05088ed919302956ca0cf3d6bfe"
  },
  {
    "url": "assets/js/69.587a0d39.js",
    "revision": "6d0f7cd75305374c5413b526eeefa0ed"
  },
  {
    "url": "assets/js/7.3b40b39b.js",
    "revision": "cf9306e8b6853a2d0c307e2381ab5628"
  },
  {
    "url": "assets/js/70.cad113cd.js",
    "revision": "30206c09b92d0587f333cd09152d2512"
  },
  {
    "url": "assets/js/71.76e83172.js",
    "revision": "2f8f4640c24df23008d87c7213ead458"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.f3d5cf5d.js",
    "revision": "e6653462aff7f2698857e74b59ae327c"
  },
  {
    "url": "assets/js/74.5f6ba935.js",
    "revision": "25345e9b92aa1a5bd2e17bf3c70468d8"
  },
  {
    "url": "assets/js/75.2a07ca4e.js",
    "revision": "c47efdfc504a475bf5ab67fe77a70881"
  },
  {
    "url": "assets/js/76.d9184990.js",
    "revision": "a6b5370e9e7f432df7104640601ad56f"
  },
  {
    "url": "assets/js/77.22a41c87.js",
    "revision": "c273b60d167d85ccc24c33cc57958ef7"
  },
  {
    "url": "assets/js/78.aa7f73bb.js",
    "revision": "1ff018ee8de2dc7dc96c7f16e5be7357"
  },
  {
    "url": "assets/js/79.094b1730.js",
    "revision": "bb34dd901ea876f47813089d4ef52a1b"
  },
  {
    "url": "assets/js/8.3a967442.js",
    "revision": "e2418b2a333ba6b5e7c3f533a226a5e8"
  },
  {
    "url": "assets/js/80.42eacae5.js",
    "revision": "a4b63200d454ab45ab0f1a1a846e48d0"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.f5a757b3.js",
    "revision": "f32fcfabd42cf00f8c9e03eaf797b4d9"
  },
  {
    "url": "assets/js/83.5f198f7a.js",
    "revision": "9ecb60f84664147c7eb65241bf455530"
  },
  {
    "url": "assets/js/84.5dbce07f.js",
    "revision": "b3a0edb58ecc90a877b129b924e3f9e2"
  },
  {
    "url": "assets/js/85.99a8c19e.js",
    "revision": "fcded10a386de0d79ecba2b69871ea92"
  },
  {
    "url": "assets/js/86.2a5f9f85.js",
    "revision": "ca929e60f8d5289fb666dd7931c620a7"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.0f025c93.js",
    "revision": "eae32d850b469290e11f2ff2a32f31b9"
  },
  {
    "url": "compiler/ast.html",
    "revision": "a92ad8fe8be9a726f63fd9adbda90470"
  },
  {
    "url": "compiler/binder.html",
    "revision": "069e268421c9676321a40927b091c486"
  },
  {
    "url": "compiler/checker.html",
    "revision": "99174d0c456f8134ce6fb5e8c5191371"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "4fe71b84e4a9d45a74e6de33f657776f"
  },
  {
    "url": "compiler/overview.html",
    "revision": "eafa4b01ee8c008f62d52a234fdcc18f"
  },
  {
    "url": "compiler/parser.html",
    "revision": "3ab787423a3c62550b2a754b8ea0efc0"
  },
  {
    "url": "compiler/program.html",
    "revision": "d96164e70f6994ee92279a7855883020"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "66d0f3c3063fd6f6fe9bc02698139f90"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "f5afc82c1fa2cb25d9bfdb02574d4189"
  },
  {
    "url": "error/interpreting.html",
    "revision": "ab0708a36a593216454c796561553f85"
  },
  {
    "url": "faqs/class.html",
    "revision": "58b1b0dc4e61f1dd59b1f6db60a1871f"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "0ecaf6542546ceb141df63b94b9c4524"
  },
  {
    "url": "faqs/comments.html",
    "revision": "352936be6fb7461394e6b7640fbda73c"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "aaba4e36b482cb117b7c06caac0d3486"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "7545fbd8e38b7d6bdc556550c3fcc421"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "eb77528b49df2d425a99698104a3f171"
  },
  {
    "url": "faqs/enums.html",
    "revision": "68c863aa05e597f61eaf493c1572fc53"
  },
  {
    "url": "faqs/function.html",
    "revision": "f24ef43d9e44cb39ef02780af0c2d9ad"
  },
  {
    "url": "faqs/generics.html",
    "revision": "8a1c405c028b298a28a39458029b7133"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "479ca1736d77c9433363c7aa87d22afd"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "998faa8ab228eb0a562322c3cbafee56"
  },
  {
    "url": "faqs/modules.html",
    "revision": "47826420c83e226e2150ea04829b63cb"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "6f61dca5d07877aa9e14653708a1ea64"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "ea56db98d8300c49cac55c5ca5538699"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "6c325527e9bbd5e04d9bfd402b2db810"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "948d8b15cb13ee7c02dc2a66ce20e1b9"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "a4b2b017c2023581273bd803cf2d6273"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "960f60243fc2e6299549878bc40f264d"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "8e1e0d4722ed1cfbb07af5ec2bcf5824"
  },
  {
    "url": "jsx/support.html",
    "revision": "d74f3e212b724a580961765fcafe9568"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "11b78235e0519e57855d763ae8437cbe"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "9be391e5877ead50a8b98051ca56a022"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "5121151887d7e98120dc64a70ef686e2"
  },
  {
    "url": "project/modules.html",
    "revision": "8d55289e8a171425a5977e05966d9543"
  },
  {
    "url": "project/namespaces.html",
    "revision": "9d35d9e82771a30ed869849704d562f7"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "4079afbd3ef60245eb7a06a7169e00a1"
  },
  {
    "url": "tips/barrel.html",
    "revision": "40fb9da472aa9b927661b5535398610e"
  },
  {
    "url": "tips/bind.html",
    "revision": "0141becd3d12485cf081c6935e2717c8"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "bf60960657d5bbd666e446946baa9bdb"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "0e607f349f9995b245c09216b58a05c0"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "74a4bd8a3eaaa9ca9a9a5b1df4ee99b0"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "b8a148884406fed2d3d1dde7ad82fcd3"
  },
  {
    "url": "tips/curry.html",
    "revision": "eddf56dcba79f7837900a491087af4eb"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "0ec37f1cdcbf2fac47c7a01e694515bc"
  },
  {
    "url": "tips/infer.html",
    "revision": "26d68af491c32b728b1d548716b07583"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "a543184316fb0509f0f73b31848139db"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "e36a2562332c77fcd710ffc3147c0031"
  },
  {
    "url": "tips/metadata.html",
    "revision": "b0274f79488130120ef14a8e83c542a4"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "a3dc19f55a5683af7bed232c04316f39"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "387ef17dc74f3498f4e484a61bbda383"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "ea5d4ae6c558772fdad55ab42c7f369f"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "c8f85a090f4537b280bbfdff6f7dd855"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "e5ed313108ef7ee4f5930b4fa020dcd0"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "f4c4d7a3dda51be745f5e215d44abfed"
  },
  {
    "url": "tips/truthy.html",
    "revision": "15e0d3ac84675e8cfee7f2045fe264f6"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "98a21f4cee798fc5fac2e9623d74b725"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "b0b0505feb2edda4fc9ee78ddd9b6c40"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "18f26483b1d8b5daf87e0fb22931595d"
  },
  {
    "url": "typings/callable.html",
    "revision": "afb78d5b73e63980b3f3f667584cb1b6"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "67ee0afb2a0ed106d4578af49f86eeb8"
  },
  {
    "url": "typings/enums.html",
    "revision": "582d7b784bd31524b33a8a982052651b"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "6acaa809a74c908a47352011dd7b5ab3"
  },
  {
    "url": "typings/freshness.html",
    "revision": "e8d8fc8233689cd4f3b84d299f2478cb"
  },
  {
    "url": "typings/functions.html",
    "revision": "ba6e67742af9af54b2054f4e39c49c1c"
  },
  {
    "url": "typings/generices.html",
    "revision": "a956f54e99710f01fc905f2a06d5fe6e"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "0158ff1853adca2f10c2213b34a0e5b8"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "ae757350446b0a70f60ecd7f3d237545"
  },
  {
    "url": "typings/lib.html",
    "revision": "f9a164c01e22ec0f3af6b24b0f171988"
  },
  {
    "url": "typings/literals.html",
    "revision": "8cbc151689b3f699be5b904bdba9f61a"
  },
  {
    "url": "typings/migrating.html",
    "revision": "26abea8b67618b8c9f394276f72b2a49"
  },
  {
    "url": "typings/mixins.html",
    "revision": "fdf0101aa60eaa5971fbea3af0005b00"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "b295b73794c35413849522021bf41c19"
  },
  {
    "url": "typings/neverType.html",
    "revision": "803b440ed4114d978acc443fe54fc07f"
  },
  {
    "url": "typings/overview.html",
    "revision": "3bfdf40b715a9ed7fb37b1c4f1eb4568"
  },
  {
    "url": "typings/readonly.html",
    "revision": "1bab186d0138f9f66e980a3a24c69ebf"
  },
  {
    "url": "typings/thisType.html",
    "revision": "8b6802f9f76720b98e6f9c241b7ce1b1"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "97a53ef99cba8a66cd252eb4b5a5f043"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "bbee71d49a5441888a3f18c1cab564f3"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "b6e375e5ca5badbcb97b927664e3ceb6"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "c175852a25ed1b33317465811bbc7bee"
  },
  {
    "url": "typings/types.html",
    "revision": "7a6961d936133fb79135ee3973f065be"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
