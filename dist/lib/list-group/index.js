!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/react-list")):"function"==typeof define&&define.amd?define(["react","classnames","prop-types","@feizheng/react-list"],t):"object"==typeof exports?exports["list-group"]=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/react-list")):e["list-group"]=t(e.react,e.classnames,e["prop-types"],e["@feizheng/react-list"])}(window,(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=17)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},17:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),u=r.n(i),a=r(2),c=r.n(a),l=r(4),f=r.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=v(e,["className"]);return o.a.createElement(f.a,g({nodeName:"ul",className:u()("list-group",t)},r))}}])&&p(r.prototype,n),i&&p(r,i),t}(o.a.Component);d(O,"displayName","list-group"),d(O,"propTypes",{className:c.a.string,items:c.a.array,template:c.a.func}),d(O,"defaultProps",{items:[],template:function(e){var t=e.item,r=e.index,n=t.type,i=t.icon,a=t.title,c=t.description,l=t.active,f=v(t,["type","icon","title","description","active"]);switch(n){case"header":return o.a.createElement("li",g({key:r,className:"list-group-header"},f));default:return o.a.createElement("li",g({key:r,className:u()("list-group-item",{active:l})},f),o.a.createElement("img",{className:"img-circle media-object pull-left",src:i,width:"32",height:"32"}),o.a.createElement("div",{className:"media-body"},o.a.createElement("strong",null,a),o.a.createElement("p",null,c)))}}});t.default=O},2:function(e,t){e.exports=r},4:function(e,t){e.exports=n}})}));