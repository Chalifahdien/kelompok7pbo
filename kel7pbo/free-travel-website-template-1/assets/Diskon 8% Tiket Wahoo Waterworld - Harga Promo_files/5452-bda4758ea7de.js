(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5452,6843],{97019:function(e,t){!function(r,n){var o={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},a=Array.prototype.map,u=Array.isArray,i=Object.prototype.toString;function c(e){return!!(""===e||e&&e.charCodeAt&&e.substr)}function l(e){return u?u(e):"[object Array]"===i.call(e)}function s(e){return e&&"[object Object]"===i.call(e)}function f(e,t){var r;for(r in e=e||{},t=t||{})t.hasOwnProperty(r)&&null==e[r]&&(e[r]=t[r]);return e}function p(e,t,r){var n,o,u=[];if(!e)return u;if(a&&e.map===a)return e.map(t,r);for(n=0,o=e.length;n<o;n++)u[n]=t.call(r,e[n],n,e);return u}function d(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function v(e){var t=o.settings.currency.format;return"function"===typeof e&&(e=e()),c(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e&&e.pos&&e.pos.match("%v")?e:c(t)?o.settings.currency.format={pos:t,neg:t.replace("%v","-%v"),zero:t}:t}var y=o.unformat=o.parse=function(e,t){if(l(e))return p(e,(function(e){return y(e,t)}));if("number"===typeof(e=e||0))return e;t=t||o.settings.number.decimal;var r=new RegExp("[^0-9-"+t+"]",["g"]),n=parseFloat((""+e).replace(/\((.*)\)/,"-$1").replace(r,"").replace(t,"."));return isNaN(n)?0:n},h=o.toFixed=function(e,t){t=d(t,o.settings.number.precision);var r=Math.pow(10,t);return(Math.round(o.unformat(e)*r)/r).toFixed(t)},m=o.formatNumber=o.format=function(e,t,r,n){if(l(e))return p(e,(function(e){return m(e,t,r,n)}));e=y(e);var a=f(s(t)?t:{precision:t,thousand:r,decimal:n},o.settings.number),u=d(a.precision),i=e<0?"-":"",c=parseInt(h(Math.abs(e||0),u),10)+"",v=c.length>3?c.length%3:0;return i+(v?c.substr(0,v)+a.thousand:"")+c.substr(v).replace(/(\d{3})(?=\d)/g,"$1"+a.thousand)+(u?a.decimal+h(Math.abs(e),u).split(".")[1]:"")},b=o.formatMoney=function(e,t,r,n,a,u){if(l(e))return p(e,(function(e){return b(e,t,r,n,a,u)}));e=y(e);var i=f(s(t)?t:{symbol:t,precision:r,thousand:n,decimal:a,format:u},o.settings.currency),c=v(i.format);return(e>0?c.pos:e<0?c.neg:c.zero).replace("%s",i.symbol).replace("%v",m(Math.abs(e),d(i.precision),i.thousand,i.decimal))};o.formatColumn=function(e,t,r,n,a,u){if(!e)return[];var i=f(s(t)?t:{symbol:t,precision:r,thousand:n,decimal:a,format:u},o.settings.currency),h=v(i.format),b=h.pos.indexOf("%s")<h.pos.indexOf("%v"),g=0,w=p(e,(function(e,t){if(l(e))return o.formatColumn(e,i);var r=((e=y(e))>0?h.pos:e<0?h.neg:h.zero).replace("%s",i.symbol).replace("%v",m(Math.abs(e),d(i.precision),i.thousand,i.decimal));return r.length>g&&(g=r.length),r}));return p(w,(function(e,t){return c(e)&&e.length<g?b?e.replace(i.symbol,i.symbol+new Array(g-e.length+1).join(" ")):new Array(g-e.length+1).join(" ")+e:e}))},e.exports&&(t=e.exports=o),t.accounting=o}()},37463:function(e,t,r){e.exports=r.p+"static/v2/f/f2d49b7b0d07b79b1cd0ad26b789ab80.svg"},4178:function(e,t,r){e.exports=r.p+"static/v2/5/5285ed4483dbe0a200497d4c3de31128.svg"},60705:function(e){"use strict";var t={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},r=/[&><\u2028\u2029]/g;function n(e){return t[e]}e.exports=function(e){return JSON.stringify(e).replace(r,n)};var o={"\u2028":"\\u2028","\u2029":"\\u2029"},a=/[\u2028\u2029]/g;function u(e){return o[e]}e.exports.sanitize=function(e){return e.replace(a,u)}},50422:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(32735))&&a.__esModule?a:{default:a},i=r(86968),c=r(8439),l=r(28227);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=u.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),p=a.href,d=a.as,v=u.default.useRef(p),y=u.default.useRef(d),h=e.children,m=e.replace,b=e.shallow,g=e.scroll,w=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var M=(t=u.default.Children.only(h))&&"object"===typeof t&&t.ref,j=o(l.useIntersection({rootMargin:"200px"}),3),x=j[0],A=j[1],C=j[2],I=u.default.useCallback((function(e){y.current===d&&v.current===p||(C(),y.current=d,v.current=p),x(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[d,M,p,C,x]);u.default.useEffect((function(){var e=A&&r&&i.isLocalURL(p),t="undefined"!==typeof w?w:n&&n.locale,o=s[p+"%"+d+(t?"%"+t:"")];e&&!o&&f(n,p,d,{locale:t})}),[d,p,A,w,r,n]);var L={ref:I,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:u}))}(e,n,p,d,m,b,g,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(p)&&f(n,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof w?w:n&&n.locale,E=n&&n.isLocaleDomain&&i.getDomainLocale(d,k,n&&n.locales,n&&n.domainLocales);L.href=E||i.addBasePath(i.addLocale(d,k,n&&n.defaultLocale))}return u.default.cloneElement(t,L)};t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},28227:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),p=f[0],d=f[1],v=o(a.useState(t?t.current:null),2),y=v[0],h=v[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||p||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:r}))}),[n,y,r,p]),b=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!i&&!p){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&h(t.current)}),[t]),[m,p,b]};var a=r(32735),u=r(72041),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},98194:function(e,t,r){"use strict";var n=r(74512);r(32735);t.Z=function(e){e.accentColor;var t=e.color,r=void 0===t?"#687176":t,o=e.width,a=void 0===o?24:o,u=e.height,i=void 0===u?24:u,c=e.title,l=e.titleId;return(0,n.jsxs)("svg",{width:a,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-id":"IcSystemChevronDown","aria-labelledby":l,children:[c?(0,n.jsx)("title",{id:l,children:c}):null,(0,n.jsx)("path",{d:"M6 9L12 15L18 9",stroke:r,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})}},89218:function(e,t,r){e.exports=r(50422)}}]);