(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6843],{97019:function(e,t){!function(r,n){var o={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},u=Array.prototype.map,a=Array.isArray,i=Object.prototype.toString;function c(e){return!!(""===e||e&&e.charCodeAt&&e.substr)}function l(e){return a?a(e):"[object Array]"===i.call(e)}function f(e){return e&&"[object Object]"===i.call(e)}function s(e,t){var r;for(r in e=e||{},t=t||{})t.hasOwnProperty(r)&&null==e[r]&&(e[r]=t[r]);return e}function p(e,t,r){var n,o,a=[];if(!e)return a;if(u&&e.map===u)return e.map(t,r);for(n=0,o=e.length;n<o;n++)a[n]=t.call(r,e[n],n,e);return a}function d(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function v(e){var t=o.settings.currency.format;return"function"===typeof e&&(e=e()),c(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e&&e.pos&&e.pos.match("%v")?e:c(t)?o.settings.currency.format={pos:t,neg:t.replace("%v","-%v"),zero:t}:t}var y=o.unformat=o.parse=function(e,t){if(l(e))return p(e,(function(e){return y(e,t)}));if("number"===typeof(e=e||0))return e;t=t||o.settings.number.decimal;var r=new RegExp("[^0-9-"+t+"]",["g"]),n=parseFloat((""+e).replace(/\((.*)\)/,"-$1").replace(r,"").replace(t,"."));return isNaN(n)?0:n},h=o.toFixed=function(e,t){t=d(t,o.settings.number.precision);var r=Math.pow(10,t);return(Math.round(o.unformat(e)*r)/r).toFixed(t)},m=o.formatNumber=o.format=function(e,t,r,n){if(l(e))return p(e,(function(e){return m(e,t,r,n)}));e=y(e);var u=s(f(t)?t:{precision:t,thousand:r,decimal:n},o.settings.number),a=d(u.precision),i=e<0?"-":"",c=parseInt(h(Math.abs(e||0),a),10)+"",v=c.length>3?c.length%3:0;return i+(v?c.substr(0,v)+u.thousand:"")+c.substr(v).replace(/(\d{3})(?=\d)/g,"$1"+u.thousand)+(a?u.decimal+h(Math.abs(e),a).split(".")[1]:"")},g=o.formatMoney=function(e,t,r,n,u,a){if(l(e))return p(e,(function(e){return g(e,t,r,n,u,a)}));e=y(e);var i=s(f(t)?t:{symbol:t,precision:r,thousand:n,decimal:u,format:a},o.settings.currency),c=v(i.format);return(e>0?c.pos:e<0?c.neg:c.zero).replace("%s",i.symbol).replace("%v",m(Math.abs(e),d(i.precision),i.thousand,i.decimal))};o.formatColumn=function(e,t,r,n,u,a){if(!e)return[];var i=s(f(t)?t:{symbol:t,precision:r,thousand:n,decimal:u,format:a},o.settings.currency),h=v(i.format),g=h.pos.indexOf("%s")<h.pos.indexOf("%v"),b=0,w=p(e,(function(e,t){if(l(e))return o.formatColumn(e,i);var r=((e=y(e))>0?h.pos:e<0?h.neg:h.zero).replace("%s",i.symbol).replace("%v",m(Math.abs(e),d(i.precision),i.thousand,i.decimal));return r.length>b&&(b=r.length),r}));return p(w,(function(e,t){return c(e)&&e.length<b?g?e.replace(i.symbol,i.symbol+new Array(b-e.length+1).join(" ")):new Array(b-e.length+1).join(" ")+e:e}))},e.exports&&(t=e.exports=o),t.accounting=o}()},60705:function(e){"use strict";var t={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},r=/[&><\u2028\u2029]/g;function n(e){return t[e]}e.exports=function(e){return JSON.stringify(e).replace(r,n)};var o={"\u2028":"\\u2028","\u2029":"\\u2029"},u=/[\u2028\u2029]/g;function a(e){return o[e]}e.exports.sanitize=function(e){return e.replace(u,a)}},50422:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=(u=r(32735))&&u.__esModule?u:{default:u},i=r(86968),c=r(8439),l=r(28227);var f={};function s(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),u=a.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],u=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):u||r}}),[n,e.href,e.as]),p=u.href,d=u.as,v=a.default.useRef(p),y=a.default.useRef(d),h=e.children,m=e.replace,g=e.shallow,b=e.scroll,w=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var M=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,j=o(l.useIntersection({rootMargin:"200px"}),3),x=j[0],A=j[1],C=j[2],I=a.default.useCallback((function(e){y.current===d&&v.current===p||(C(),y.current=d,v.current=p),x(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[d,M,p,C,x]);a.default.useEffect((function(){var e=A&&r&&i.isLocalURL(p),t="undefined"!==typeof w?w:n&&n.locale,o=f[p+"%"+d+(t?"%"+t:"")];e&&!o&&s(n,p,d,{locale:t})}),[d,p,A,w,r,n]);var L={ref:I,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:a}))}(e,n,p,d,m,g,b,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(p)&&s(n,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof w?w:n&&n.locale,E=n&&n.isLocaleDomain&&i.getDomainLocale(d,k,n&&n.locales,n&&n.domainLocales);L.href=E||i.addBasePath(i.addLocale(d,k,n&&n.defaultLocale))}return a.default.cloneElement(t,L)};t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},28227:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,f=u.useRef(),s=o(u.useState(!1),2),p=s[0],d=s[1],v=o(u.useState(t?t.current:null),2),y=v[0],h=v[1],m=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||p||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:u,elements:o}),t}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:r}))}),[n,y,r,p]),g=u.useCallback((function(){d(!1)}),[]);return u.useEffect((function(){if(!i&&!p){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),u.useEffect((function(){t&&h(t.current)}),[t]),[m,p,g]};var u=r(32735),a=r(72041),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},98194:function(e,t,r){"use strict";var n=r(74512);r(32735);t.Z=function(e){e.accentColor;var t=e.color,r=void 0===t?"#687176":t,o=e.width,u=void 0===o?24:o,a=e.height,i=void 0===a?24:a,c=e.title,l=e.titleId;return(0,n.jsxs)("svg",{width:u,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-id":"IcSystemChevronDown","aria-labelledby":l,children:[c?(0,n.jsx)("title",{id:l,children:c}):null,(0,n.jsx)("path",{d:"M6 9L12 15L18 9",stroke:r,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})}},89218:function(e,t,r){e.exports=r(50422)}}]);