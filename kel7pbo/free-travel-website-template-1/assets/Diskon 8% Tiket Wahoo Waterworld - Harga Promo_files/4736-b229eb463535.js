"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4736],{13882:function(n,t,r){r.d(t,{Ie:function(){return f},ZQ:function(){return u},dP:function(){return a},eh:function(){return i},q$:function(){return o},y3:function(){return c}});var e=r(62041),u="Xperience",o="activities",c={country:e.G3,region:e.G3,city:e.G3,area:e.G3,landmark:e.RD},i={LANDMARK:"landmark",PRODUCT:"product",GEO_COUNTRY:"country",GEO_REGION:"region",GEO_CITY:"city",GEO_AREA:"area",BRAND:"brand",CATEGORY:"category",OTHER:"continent"},a={IDR:"Rp",USD:"US$",SGD:"S$",MYR:"RM",THB:"THB",PHP:"\u20b1",VND:"VND",AUD:"AU$",GBP:"\xa3",EUR:"\u20ac"},f=9},62041:function(n,t,r){r.d(t,{F4:function(){return a},FF:function(){return c},G3:function(){return e},Hy:function(){return p},MU:function(){return y},NS:function(){return O},Pr:function(){return u},RD:function(){return o},VS:function(){return A},Zy:function(){return d},he:function(){return R},ij:function(){return f},mj:function(){return l},p2:function(){return s},wD:function(){return E},xp:function(){return i}});var e="GEO",u="GEOLESS",o="LANDMARK",c="NEARBY",i="DISTANCE",a="RELEVANCE",f=50,l="MOST_POPULAR",s="NEARBY_SEARCH",y="ALL_CATEGORY_ID",O="ALL_SUBCATEGORY_ID",E="ALL_SUBCATEGORY_",p={SECTION_NAME:{GEO:"GEO",PRODUCT:"PRODUCT",RECENT_SEARCH:"RECENT_SEARCH",POPULAR_DESTINATION:"POPULAR_DESTINATION",POPULAR_CATEGORY:"POPULAR_CATEGORY",PRODUCT_CHAIN:"PRODUCT_CHAIN"},TYPE:{POPULAR_CATEGORY:"POPULAR_CATEGORY",POPULAR_DESTINATION:"POPULAR_DESTINATION",CATEGORY:"CATEGORY",PRODUCT:"PRODUCT",LANDMARK:"LANDMARK",BRAND:"BRAND",GEO_COUNTRY:"GEO_COUNTRY",GEO_REGION:"GEO_REGION",GEO_CITY:"GEO_CITY",GEO_AREA:"GEO_AREA"},NEARBY_LABEL:"Around Your Location",SEARCH_RESULT_PER_PAGE:12},A=["ALL_PRODUCTS","GEO","LANDMARK","NEARBY","PRODUCT_CHAIN","STATIC_PAGE"],R=["MOST_POPULAR","TRENDING","CHEAPER_PRICE","HIGHER_PRICE","RATING","RELEVANCE","NEARBY_LOCATION","SHORTEST_DURATION","LONGEST_DURATION","DISTANCE","DISCOUNT"],d=2},95335:function(n,t,r){r.d(t,{C_:function(){return O},D:function(){return a},H2:function(){return s},Jj:function(){return l},Lx:function(){return y},OC:function(){return d},SY:function(){return E},XC:function(){return v},Z7:function(){return T},dJ:function(){return A},iw:function(){return R},iy:function(){return i},kE:function(){return N},pv:function(){return p},sO:function(){return c}});var e=r(97882),u=r(24547),o=r(2331),c=function(n,t){var r=n;if(void 0===r)return u.Z.warn("entry is undefined on setValue",{err:new Error("entry is undefined on setValue")}),"";if(!t||!Object.keys(t).length)return r;r=s(n,t).result;try{return new e.ZP(r).format(t)}catch(o){return r}},i=function(n){var t=/[<>'"&]/g;return n&&t.test(n)?n.replace(t,(function(n){return"<"===n?"&lt;":"&"===n?"&amp;":'"'===n?"&quot;":"'"===n?"&apos;":"&gt;"})):n},a=function(n,t){var r=n;return Object.keys(t).filter((function(n){return t.hasOwnProperty(n)})).forEach((function(n){var e=new RegExp("{{".concat(n,"}}"),"g");r=r.replace(e,t[n])})),r},f=/\$((!?(\w+))|(!?\{(\w+)\}))/g,l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f.test(n)?void 0:n},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=[],e=[],u=n.replace(f,(function(n,u,o){var c=u||o,i=t[c];return null!==i&&void 0!==i?(e.push(c),i):(r.push(c),n)}));return{result:u,errors:r,matches:e}},y=function(n){return n.trim().toLowerCase().replace(/\s/g,"-").replace(/[^A-Za-z0-9-]/g,"").replace(/-{2,}/g,"-")},O=function(n){return null!==n&&void 0!==n},E=function(n){return Object.keys(n).reduce((function(t,r){var e=n[r];return e&&(t[r]=e),t}),{})},p=function(n,t){var r=t.distance,e=t.location,u=t.moreThanDistance,i="",a=n;r<1e3?i="".concat(r," m"):r<=7e4?i="".concat(Math.round(r/1e3*10)/10," km"):(i="70 km",a=u||a);var f="&nbsp;&#183;&nbsp;"+c(a,{distance:i,location:e});return f?(0,o.gL)(f):f},A=function(n,t){return n?(0,o.gL)(c(t,{loyaltyPoint:n})):void 0},R=function(n){var t=Math.trunc(Date.now()/100).toString(16);return(0,o.vp)(n).toString(36)+"-"+t.substring(t.length-6)},d=function(n,t,r){var e=n[t][r];return e&&e!=="".concat(String(t),".").concat(String(r))&&e!==r?e:""},T=function(n){try{return JSON.parse(n)}catch(t){return null}},N=function(n){return/^[0-9]*$/.test(String(n))},v=function(n){return/^[a-zA-Z0-9-]*$/.test(String(n))}},2331:function(n,t,r){r.d(t,{RH:function(){return a},gL:function(){return o},iZ:function(){return i},kE:function(){return f},pt:function(){return c},tx:function(){return y},vp:function(){return l},wK:function(){return s}});var e=r(66230),u=r.n(e);function o(n){return n?u()(n):""}var c=function(n){return n.split(" ").map((function(n){return"".concat(n[0].toUpperCase()).concat(n.slice(1).toLowerCase())})).join(" ")},i=function(n){var t=Number(n);return Number(t)>=1e4?"".concat((t/1e3).toFixed(1),"K"):String(t)},a=function(n){var t=Number(n);return t?i(t):""};function f(n){return!isNaN(parseFloat(n))&&isFinite(Number(n))}function l(n){for(var t=0,r=0;r<n.length;r++){t=(t<<5)-t+n.charCodeAt(r),t|=0}return t}var s=function(n){return/(^\[.*\]$)|(^\{.*\}$)/.test(n)},y=function(n){return n.replaceAll("-","_").toUpperCase()}},14022:function(n,t,r){r.d(t,{AQ:function(){return E},CV:function(){return p},MN:function(){return R},Ro:function(){return d},Yp:function(){return y},a1:function(){return v},k9:function(){return A},pV:function(){return N},qS:function(){return O}});var e=r(24547),u=r(97703),o=r(13882),c=r(95335);function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function f(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function l(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),e.forEach((function(t){f(n,t,r[t])}))}return n}function s(n){return function(n){if(Array.isArray(n))return n}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(n,t)}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(n,t){var r=O(t);return{entityId:r.entityId,entityName:r.entityName,searchType:o.y3[n]||"GEO",geoType:o.y3[n]?n:"region"}},O=function(n){return{entityId:n.slice(n.lastIndexOf("-")+1),entityName:n.slice(0,n.lastIndexOf("-"))}},E=function(n,t){return t?"/".concat(t).concat(n):n},p=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.q$,r=n||"";if(r){var e="/"===r.substring(0,1);r="".concat(e?"":"/").concat(r)}return E(r,t)},A=function(n){var t,r=n.itemType,u=n.experienceLink,i=n.hasDestinationPage,a="",f=n.customQuery;try{var s=(0,c.Lx)(u.countryNameEN),y=(0,c.Lx)(u.itemNameEN),O={entityId:u.searchSpec?u.searchSpec.entityId:"",searchType:u.searchSpec?u.searchSpec.searchType:"GEO"};switch(u.type){case"PRODUCT_DETAIL":a="/[country]/product/[nameId]",t={country:s,nameId:"".concat(y,"-").concat(u.experienceId)};break;case"SEARCH_RESULT":a="/search",f=l({st:O.searchType},O.entityId&&{eid:O.entityId});break;case"DESTINATION_PAGE":i?(a="/[country]/[type]/[nameId]",t={country:s,type:o.eh[r]||"region",nameId:"".concat(y,"-").concat(O.entityId)}):(a="/search",f=l({st:O.searchType},O.entityId&&{eid:O.entityId}));break;case"PRODUCT_CHAIN":a="/chain/[nameId]",t={nameId:"".concat(y,"-").concat(O.entityId)};break;default:a=""}}catch(E){return e.Z.error("Failed to construct ExperienceRoute",{itemType:r,experienceLink:u,err:E}),{link:p("")}}return{link:p(a),params:t,query:f}},R=function(n){return"DESTINATION_PAGE"===n.type?l({},n,{type:"SEARCH_RESULT"}):n},d=function(n,t){return A({itemType:n,experienceLink:t,hasDestinationPage:!0})},T={f:"facebook",i:"instagram"},N=function(n){if(n){var t=s(n),r=t[0],e=t.slice(1);return Object.keys(T).includes(r)?"/activities/countryparam/product/detail-".concat(e.join(""),"?funnel_source=XpeEasyLink&funnel_id=").concat(T[r]):void 0}},v=function(n){var t=n.countryNameEN,r=n.experienceId,e=n.experienceNameEN,o=n.query,i=(0,c.Lx)(t),a=(0,c.Lx)("".concat(e,"-").concat(r)),f=p("/".concat(i,"/product/").concat(a));return(0,u.am)(f,(0,c.SY)(l({},o)))}},73582:function(n,t,r){var e=r(32735),u=r(38651);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function c(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function i(n,t){if(null==n)return{};var r,e,u=function(n,t){if(null==n)return{};var r,e,u={},o=Object.keys(n);for(e=0;e<o.length;e++)r=o[e],t.indexOf(r)>=0||(u[r]=n[r]);return u}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(e=0;e<o.length;e++)r=o[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(u[r]=n[r])}return u}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,u,o=[],c=!0,i=!1;try{for(r=r.call(n);!(c=(e=r.next()).done)&&(o.push(e.value),!t||o.length!==t);c=!0);}catch(a){i=!0,u=a}finally{try{c||null==r.return||r.return()}finally{if(i)throw u}}return o}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return o(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=e.forwardRef((function(n,t){var r=a(e.useState(!1),2),o=r[0],f=r[1],l=n.style,s=n.hoverStyle,y=i(n,["style","hoverStyle"]),O=o?[l,s]:l;return(0,u.Z)("a",function(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),e.forEach((function(t){c(n,t,r[t])}))}return n}({ref:t},y,{onMouseOver:function(t){f(!0),n.onMouseEnter&&n.onMouseEnter(t)},onMouseLeave:function(t){f(!1),n.onMouseLeave&&n.onMouseLeave(t)},style:O}))}))}}]);