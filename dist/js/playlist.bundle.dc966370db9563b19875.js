!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var t in i)("object"==typeof exports?exports:n)[t]=i[t]}}("undefined"!=typeof self?self:this,function(){return webpackJsonp([2],{5:function(n,e,i){"use strict";i(0),i(1),i(6),AV.init({appId:"dkIJBHfaV9puzkRqVipWFH8s-gzGzoHsz",appKey:"JVq509599HnbKRiUNthOnDMM"}),$(function(){function n(){return new AV.Query("Song").find()}function e(n){var e=n.attributes;$(".updateMusic").append(i(n,e))}function i(n,e){return'<a class="songlink" href="song.html?id='+n.id+'">\n    <h2>'+e.name+'</h2>\n    <div class="description">\n        <svg class="icon iconsq" aria-hidden="true">\n            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-SQ"></use>\n        </svg>\n        <span>'+e.singer+'</span>\n    </div>\n    <div class="playbutton">\n        <svg class="icon iconplay" aria-hidden="true">\n            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>\n        </svg>\n    </div>\n</a>'}!function(){n().then(function(n){n.forEach(e)},function(n){alert(n)})}()})},6:function(n,e){}},[5])});
//# sourceMappingURL=playlist.bundle.dc966370db9563b19875.js.map