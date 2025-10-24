(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();var d={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function m(){if(l)return i;l=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(u,e,r){var o=null;if(r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),"key"in e){r={};for(var c in e)c!=="key"&&(r[c]=e[c])}else r=e;return e=r.ref,{$$typeof:s,type:u,key:o,ref:e!==void 0?e:null,props:r}}return i.Fragment=t,i.jsx=n,i.jsxs=n,i}var a;function x(){return a||(a=1,d.exports=m()),d.exports}var f=x();const p=()=>{const s=document.getElementById("root");if(!s)throw new Error("ルート要素が見つかりませんでした。");const t=ReactDOM.createRoot(s),n=window.App;t.render(f.jsx(React.StrictMode,{children:f.jsx(n,{})}))};document.readyState==="complete"?p():window.addEventListener("load",p);
