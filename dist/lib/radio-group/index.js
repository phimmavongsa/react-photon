!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/noop")):"function"==typeof define&&define.amd?define(["react","classnames","prop-types","@feizheng/noop"],t):"object"==typeof exports?exports["radio-group"]=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/noop")):e["radio-group"]=t(e.react,e.classnames,e["prop-types"],e["@feizheng/noop"])}(window,(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=30)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},2:function(e,t){e.exports=r},3:function(e,t){e.exports=n},30:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(2),u=r.n(a),i=r(1),c=r.n(i),l=r(3),f=r.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=new Array(a),i=0;i<a;i++)u[i]=arguments[i];return n=this,o=(e=m(t)).call.apply(e,[this].concat(u)),r=!o||"object"!==p(o)&&"function"!=typeof o?d(n):o,v(d(r),"onChange",(function(e){var t=e.target.dataset.value,n=r.props,o=n.name;(0,n.onChange)({target:{value:t,name:o}})})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.defaultValue,a=t.items,u=t.name,i=(t.onChange,y(t,["className","defaultValue","items","name","onChange"]));return o.a.createElement("div",s({className:c()("form-radio-group",r)},i),a.map((function(t){var r=t.value,a=t.label,i=y(t,["value","label"]);return o.a.createElement("div",{key:r,className:"radio ".concat("form-radio-group","__item")},o.a.createElement("label",null,o.a.createElement("input",s({onChange:e.onChange,type:"radio",name:u,"data-value":r,defaultChecked:n===r},i)),o.a.createElement("span",null,a)))})))}}])&&b(r.prototype,n),a&&b(r,a),t}(n.Component);v(h,"displayName","form-radio-group"),v(h,"propTypes",{className:u.a.string,name:u.a.string.isRequired,value:u.a.string,items:u.a.array,onChange:u.a.func}),v(h,"defaultProps",{items:[],onChange:f.a});t.default=h}})}));