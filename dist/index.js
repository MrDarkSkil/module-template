!function(e,t){for(var o in t)e[o]=t[o]}(exports,function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=function(){function e(e){this.sdk=e,this.moduleInfos=o(1),this.type="game",this.requireVersion="0.0.1",this.showOnStart=!0,console.log("Construtor")}return e.prototype.init=function(){console.log("MODULE INIT"),console.log("module version of "+this.moduleInfos.name+" - "+this.moduleInfos.version)},e.prototype.start=function(){console.log(this.sdk.getGamePath("arma3",["test.exe"])),console.log("MODULE STARTED")},e}();t.default=r},function(e){e.exports={name:"module-template",version:"2.0.0",description:"Module template for EZGames launcher ",main:"dist/index.js",scripts:{start:"webpack --watch --mode development",build:"webpack --mode production",test:'echo "Error: no test specified" && exit 1'},repository:{type:"git",url:"git+https://github.com/MrDarkSkil/module-template.git"},author:"Léo Hubert",license:"ISC",bugs:{url:"https://github.com/MrDarkSkil/module-template/issues"},homepage:"https://github.com/MrDarkSkil/module-template#readme",dependencies:{"ezgames-launcher-sdk":"0.0.5-1"},devDependencies:{"@types/node":"^10.3.1","ts-loader":"^4.2.0",typescript:"^2.8.3",webpack:"^4.29.0","webpack-cli":"^3.2.1"}}}]));