!function(){"use strict";function t(e){return void 0===this||Object.getPrototypeOf(this)!==t.prototype?new t(e):((E=this).version="3.3.6",E.tools=new o,E.isSupported()?(E.tools.extend(E.defaults,e||{}),E.defaults.container=b(E.defaults),E.store={elements:{},containers:[]},E.sequences={},E.history=[],E.uid=0,E.initialized=!1):"undefined"!=typeof console&&console,E)}function b(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(E.tools.isNode(e.container))return e.container}return E.defaults.container}function v(){return++E.uid}function h(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function x(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function q(){if(E.isSupported()){n();for(var e=0;e<E.store.containers.length;e++)E.store.containers[e].addEventListener("scroll",r),E.store.containers[e].addEventListener("resize",r);E.initialized||(window.addEventListener("scroll",r),window.addEventListener("resize",r),E.initialized=!0)}return E}function r(){e(n)}function n(){var t,n;(function(){var n,i,o;E.tools.forOwn(E.sequences,function(e){o=E.sequences[e],n=!1;for(var t=0;t<o.elemIds.length;t++)i=o.elemIds[t],s(E.store.elements[i])&&!n&&(n=!0);o.active=n})})(),E.tools.forOwn(E.store.elements,function(e){n=E.store.elements[e],t=function(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!E.initialized||"once"===t&&!e.seen}(n),function(e){if(e.sequence){var t=E.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return s(e)&&!e.revealing&&!e.disabled}(n)?(n.config.beforeReveal(n.domEl),t?n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.delayed):n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.instant),i("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&function(e,t){var n=0,i=0,o=E.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,r()},Math.abs(o.interval)+i-n)}(n,t)):function(e){if(e.sequence){return!E.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled}return!s(e)&&e.config.reset&&e.revealing&&!e.disabled}(n)&&(n.config.beforeReset(n.domEl),n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),i("reset",n),n.revealing=!1)})}function i(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function w(e){for(var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;);return{top:t,left:n,height:i,width:o}}function s(e){var t,n,i,o,r,s,a,l,c=w(e.domEl),d=function(e){return{width:e.clientWidth,height:e.clientHeight}}(e.config.container),f=function(e){if(e&&e!==window.document.documentElement){var t=w(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}(e.config.container),u=e.config.viewFactor,y=c.height,m=c.width,p=c.top,g=c.left;return t=p+y*u,n=g+m*u,i=p+y-y*u,o=g+m-m*u,r=f.y+e.config.viewOffset.top,s=f.x+e.config.viewOffset.left,a=f.y-e.config.viewOffset.bottom+d.height,l=f.x-e.config.viewOffset.right+d.width,t<a&&r<i&&n<l&&s<o||"fixed"===window.getComputedStyle(e.domEl).position}function o(){}var E,e;t.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},t.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},t.prototype.reveal=function(e,t,n,i){var o,r,s,a,l,c,d,f,u,y,m,p,g;if(void 0!==t&&"number"==typeof t?(n=t,t={}):null!=t||(t={}),!(r=function(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):E.tools.isNode(e)?[e]:E.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}(e,o=b(t))).length)return E;n&&"number"==typeof n&&(c=v(),l=E.sequences[c]={id:c,interval:n,elemIds:[],active:!1});for(var w=0;w<r.length;w++)(a=r[w].getAttribute("data-sr-id"))?s=E.store.elements[a]:(s={id:v(),domEl:r[w],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",s.id),l&&(s.sequence={id:l.id,index:l.elemIds.length},l.elemIds.push(s.id)),m=s,g=o,(p=t).container&&(p.container=g),m.config?m.config=E.tools.extendClone(m.config,p):m.config=E.tools.extendClone(E.defaults,p),"top"===m.config.origin||"bottom"===m.config.origin?m.config.axis="Y":m.config.axis="X",u=s,void 0,y=window.getComputedStyle(u.domEl),u.styles||(u.styles={transition:{},transform:{},computed:{}},u.styles.inline=u.domEl.getAttribute("style")||"",u.styles.inline+="; visibility: visible; ",u.styles.computed.opacity=y.opacity,y.transition&&"all 0s ease 0s"!==y.transition?u.styles.computed.transition=y.transition+", ":u.styles.computed.transition=""),u.styles.transition.instant=h(u,0),u.styles.transition.delayed=h(u,u.config.delay),u.styles.transform.initial=" -webkit-transform:",u.styles.transform.target=" -webkit-transform:",x(u),u.styles.transform.initial+="transform:",u.styles.transform.target+="transform:",x(u),void 0,(f=(d=s).config.container)&&-1===E.store.containers.indexOf(f)&&E.store.containers.push(d.config.container),E.store.elements[d.id]=d,E.tools.isMobile()&&!s.config.mobile||!E.isSupported()?(s.domEl.setAttribute("style",s.styles.inline),s.disabled=!0):s.revealing||s.domEl.setAttribute("style",s.styles.inline+s.styles.transform.initial);return!i&&E.isSupported()&&(function(e,t,n){var i={target:e,config:t,interval:n};E.history.push(i)}(e,t,n),E.initTimeout&&window.clearTimeout(E.initTimeout),E.initTimeout=window.setTimeout(q,0)),E},t.prototype.sync=function(){if(E.history.length&&E.isSupported()){for(var e=0;e<E.history.length;e++){var t=E.history[e];E.reveal(t.target,t.config,t.interval,!0)}q()}return E},o.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},o.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},o.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},o.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},o.prototype.extend=function(t,n){return this.forOwn(n,function(e){this.isObject(n[e])?(t[e]&&this.isObject(t[e])||(t[e]={}),this.extend(t[e],n[e])):t[e]=n[e]}.bind(this)),t},o.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},o.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:window.ScrollReveal=t}();