(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Pa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xs={exports:{}},Bi={},Es={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If;function Av(){if(If)return Ee;If=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=g&&M[g]||M["@@iterator"],typeof M=="function"?M:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function R(M,H,S){this.props=M,this.context=H,this.refs=A,this.updater=S||C}R.prototype.isReactComponent={},R.prototype.setState=function(M,H){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,H,"setState")},R.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function _(){}_.prototype=R.prototype;function U(M,H,S){this.props=M,this.context=H,this.refs=A,this.updater=S||C}var D=U.prototype=new _;D.constructor=U,T(D,R.prototype),D.isPureReactComponent=!0;var z=Array.isArray,G=Object.prototype.hasOwnProperty,L={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function se(M,H,S){var ge,ke={},ye=null,Me=null;if(H!=null)for(ge in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(ye=""+H.key),H)G.call(H,ge)&&!Q.hasOwnProperty(ge)&&(ke[ge]=H[ge]);var Te=arguments.length-2;if(Te===1)ke.children=S;else if(1<Te){for(var Ne=Array(Te),Ye=0;Ye<Te;Ye++)Ne[Ye]=arguments[Ye+2];ke.children=Ne}if(M&&M.defaultProps)for(ge in Te=M.defaultProps,Te)ke[ge]===void 0&&(ke[ge]=Te[ge]);return{$$typeof:t,type:M,key:ye,ref:Me,props:ke,_owner:L.current}}function Z(M,H){return{$$typeof:t,type:M.type,key:H,ref:M.ref,props:M.props,_owner:M._owner}}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function J(M){var H={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(S){return H[S]})}var ee=/\/+/g;function ne(M,H){return typeof M=="object"&&M!==null&&M.key!=null?J(""+M.key):H.toString(36)}function oe(M,H,S,ge,ke){var ye=typeof M;(ye==="undefined"||ye==="boolean")&&(M=null);var Me=!1;if(M===null)Me=!0;else switch(ye){case"string":case"number":Me=!0;break;case"object":switch(M.$$typeof){case t:case e:Me=!0}}if(Me)return Me=M,ke=ke(Me),M=ge===""?"."+ne(Me,0):ge,z(ke)?(S="",M!=null&&(S=M.replace(ee,"$&/")+"/"),oe(ke,H,S,"",function(Ye){return Ye})):ke!=null&&(N(ke)&&(ke=Z(ke,S+(!ke.key||Me&&Me.key===ke.key?"":(""+ke.key).replace(ee,"$&/")+"/")+M)),H.push(ke)),1;if(Me=0,ge=ge===""?".":ge+":",z(M))for(var Te=0;Te<M.length;Te++){ye=M[Te];var Ne=ge+ne(ye,Te);Me+=oe(ye,H,S,Ne,ke)}else if(Ne=b(M),typeof Ne=="function")for(M=Ne.call(M),Te=0;!(ye=M.next()).done;)ye=ye.value,Ne=ge+ne(ye,Te++),Me+=oe(ye,H,S,Ne,ke);else if(ye==="object")throw H=String(M),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function re(M,H,S){if(M==null)return M;var ge=[],ke=0;return oe(M,ge,"","",function(ye){return H.call(S,ye,ke++)}),ge}function Se(M){if(M._status===-1){var H=M._result;H=H(),H.then(function(S){(M._status===0||M._status===-1)&&(M._status=1,M._result=S)},function(S){(M._status===0||M._status===-1)&&(M._status=2,M._result=S)}),M._status===-1&&(M._status=0,M._result=H)}if(M._status===1)return M._result.default;throw M._result}var Ce={current:null},j={transition:null},fe={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:j,ReactCurrentOwner:L};function x(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:re,forEach:function(M,H,S){re(M,function(){H.apply(this,arguments)},S)},count:function(M){var H=0;return re(M,function(){H++}),H},toArray:function(M){return re(M,function(H){return H})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ee.Component=R,Ee.Fragment=n,Ee.Profiler=a,Ee.PureComponent=U,Ee.StrictMode=o,Ee.Suspense=p,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Ee.act=x,Ee.cloneElement=function(M,H,S){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ge=T({},M.props),ke=M.key,ye=M.ref,Me=M._owner;if(H!=null){if(H.ref!==void 0&&(ye=H.ref,Me=L.current),H.key!==void 0&&(ke=""+H.key),M.type&&M.type.defaultProps)var Te=M.type.defaultProps;for(Ne in H)G.call(H,Ne)&&!Q.hasOwnProperty(Ne)&&(ge[Ne]=H[Ne]===void 0&&Te!==void 0?Te[Ne]:H[Ne])}var Ne=arguments.length-2;if(Ne===1)ge.children=S;else if(1<Ne){Te=Array(Ne);for(var Ye=0;Ye<Ne;Ye++)Te[Ye]=arguments[Ye+2];ge.children=Te}return{$$typeof:t,type:M.type,key:ke,ref:ye,props:ge,_owner:Me}},Ee.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},Ee.createElement=se,Ee.createFactory=function(M){var H=se.bind(null,M);return H.type=M,H},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(M){return{$$typeof:f,render:M}},Ee.isValidElement=N,Ee.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Se}},Ee.memo=function(M,H){return{$$typeof:h,type:M,compare:H===void 0?null:H}},Ee.startTransition=function(M){var H=j.transition;j.transition={};try{M()}finally{j.transition=H}},Ee.unstable_act=x,Ee.useCallback=function(M,H){return Ce.current.useCallback(M,H)},Ee.useContext=function(M){return Ce.current.useContext(M)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(M){return Ce.current.useDeferredValue(M)},Ee.useEffect=function(M,H){return Ce.current.useEffect(M,H)},Ee.useId=function(){return Ce.current.useId()},Ee.useImperativeHandle=function(M,H,S){return Ce.current.useImperativeHandle(M,H,S)},Ee.useInsertionEffect=function(M,H){return Ce.current.useInsertionEffect(M,H)},Ee.useLayoutEffect=function(M,H){return Ce.current.useLayoutEffect(M,H)},Ee.useMemo=function(M,H){return Ce.current.useMemo(M,H)},Ee.useReducer=function(M,H,S){return Ce.current.useReducer(M,H,S)},Ee.useRef=function(M){return Ce.current.useRef(M)},Ee.useState=function(M){return Ce.current.useState(M)},Ee.useSyncExternalStore=function(M,H,S){return Ce.current.useSyncExternalStore(M,H,S)},Ee.useTransition=function(){return Ce.current.useTransition()},Ee.version="18.3.1",Ee}var _f;function vu(){return _f||(_f=1,Es.exports=Av()),Es.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function Iv(){if(Pf)return Bi;Pf=1;var t=vu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,h){var y,g={},b=null,C=null;h!==void 0&&(b=""+h),p.key!==void 0&&(b=""+p.key),p.ref!==void 0&&(C=p.ref);for(y in p)o.call(p,y)&&!u.hasOwnProperty(y)&&(g[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)g[y]===void 0&&(g[y]=p[y]);return{$$typeof:e,type:f,key:b,ref:C,props:g,_owner:a.current}}return Bi.Fragment=n,Bi.jsx=c,Bi.jsxs=c,Bi}var Mf;function _v(){return Mf||(Mf=1,xs.exports=Iv()),xs.exports}var Y=_v(),ct=vu();const Pv=Pa(ct);var ha={},Ss={exports:{}},kt={},As={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function Mv(){return Rf||(Rf=1,(function(t){function e(j,fe){var x=j.length;j.push(fe);e:for(;0<x;){var M=x-1>>>1,H=j[M];if(0<a(H,fe))j[M]=fe,j[x]=H,x=M;else break e}}function n(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var fe=j[0],x=j.pop();if(x!==fe){j[0]=x;e:for(var M=0,H=j.length,S=H>>>1;M<S;){var ge=2*(M+1)-1,ke=j[ge],ye=ge+1,Me=j[ye];if(0>a(ke,x))ye<H&&0>a(Me,ke)?(j[M]=Me,j[ye]=x,M=ye):(j[M]=ke,j[ge]=x,M=ge);else if(ye<H&&0>a(Me,x))j[M]=Me,j[ye]=x,M=ye;else break e}}return fe}function a(j,fe){var x=j.sortIndex-fe.sortIndex;return x!==0?x:j.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var p=[],h=[],y=1,g=null,b=3,C=!1,T=!1,A=!1,R=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(j){for(var fe=n(h);fe!==null;){if(fe.callback===null)o(h);else if(fe.startTime<=j)o(h),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(h)}}function z(j){if(A=!1,D(j),!T)if(n(p)!==null)T=!0,Se(G);else{var fe=n(h);fe!==null&&Ce(z,fe.startTime-j)}}function G(j,fe){T=!1,A&&(A=!1,_(se),se=-1),C=!0;var x=b;try{for(D(fe),g=n(p);g!==null&&(!(g.expirationTime>fe)||j&&!J());){var M=g.callback;if(typeof M=="function"){g.callback=null,b=g.priorityLevel;var H=M(g.expirationTime<=fe);fe=t.unstable_now(),typeof H=="function"?g.callback=H:g===n(p)&&o(p),D(fe)}else o(p);g=n(p)}if(g!==null)var S=!0;else{var ge=n(h);ge!==null&&Ce(z,ge.startTime-fe),S=!1}return S}finally{g=null,b=x,C=!1}}var L=!1,Q=null,se=-1,Z=5,N=-1;function J(){return!(t.unstable_now()-N<Z)}function ee(){if(Q!==null){var j=t.unstable_now();N=j;var fe=!0;try{fe=Q(!0,j)}finally{fe?ne():(L=!1,Q=null)}}else L=!1}var ne;if(typeof U=="function")ne=function(){U(ee)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,re=oe.port2;oe.port1.onmessage=ee,ne=function(){re.postMessage(null)}}else ne=function(){R(ee,0)};function Se(j){Q=j,L||(L=!0,ne())}function Ce(j,fe){se=R(function(){j(t.unstable_now())},fe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){T||C||(T=!0,Se(G))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_getFirstCallbackNode=function(){return n(p)},t.unstable_next=function(j){switch(b){case 1:case 2:case 3:var fe=3;break;default:fe=b}var x=b;b=fe;try{return j()}finally{b=x}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,fe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var x=b;b=j;try{return fe()}finally{b=x}},t.unstable_scheduleCallback=function(j,fe,x){var M=t.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?M+x:M):x=M,j){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=x+H,j={id:y++,callback:fe,priorityLevel:j,startTime:x,expirationTime:H,sortIndex:-1},x>M?(j.sortIndex=x,e(h,j),n(p)===null&&j===n(h)&&(A?(_(se),se=-1):A=!0,Ce(z,x-M))):(j.sortIndex=H,e(p,j),T||C||(T=!0,Se(G))),j},t.unstable_shouldYield=J,t.unstable_wrapCallback=function(j){var fe=b;return function(){var x=b;b=fe;try{return j.apply(this,arguments)}finally{b=x}}}})(Is)),Is}var Df;function Rv(){return Df||(Df=1,As.exports=Mv()),As.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function Dv(){if(Nf)return kt;Nf=1;var t=vu(),e=Rv();function n(i){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+i,d=1;d<arguments.length;d++)r+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function u(i,r){c(i,r),c(i+"Capture",r)}function c(i,r){for(a[i]=r,i=0;i<r.length;i++)o.add(r[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},g={};function b(i){return p.call(g,i)?!0:p.call(y,i)?!1:h.test(i)?g[i]=!0:(y[i]=!0,!1)}function C(i,r,d,m){if(d!==null&&d.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return m?!1:d!==null?!d.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function T(i,r,d,m){if(r===null||typeof r>"u"||C(i,r,d,m))return!0;if(m)return!1;if(d!==null)switch(d.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(i,r,d,m,v,w,k){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=m,this.attributeNamespace=v,this.mustUseProperty=d,this.propertyName=i,this.type=r,this.sanitizeURL=w,this.removeEmptyString=k}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){R[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var r=i[0];R[r]=new A(r,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){R[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){R[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){R[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){R[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){R[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){R[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){R[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var r=i.replace(_,U);R[r]=new A(r,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var r=i.replace(_,U);R[r]=new A(r,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var r=i.replace(_,U);R[r]=new A(r,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){R[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),R.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){R[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,r,d,m){var v=R.hasOwnProperty(r)?R[r]:null;(v!==null?v.type!==0:m||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(T(r,d,v,m)&&(d=null),m||v===null?b(r)&&(d===null?i.removeAttribute(r):i.setAttribute(r,""+d)):v.mustUseProperty?i[v.propertyName]=d===null?v.type===3?!1:"":d:(r=v.attributeName,m=v.attributeNamespace,d===null?i.removeAttribute(r):(v=v.type,d=v===3||v===4&&d===!0?"":""+d,m?i.setAttributeNS(m,r,d):i.setAttribute(r,d))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),L=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),J=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),j=Symbol.iterator;function fe(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var x=Object.assign,M;function H(i){if(M===void 0)try{throw Error()}catch(d){var r=d.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||""}return`
`+M+i}var S=!1;function ge(i,r){if(!i||S)return"";S=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(B){var m=B}Reflect.construct(i,[],r)}else{try{r.call()}catch(B){m=B}i.call(r.prototype)}else{try{throw Error()}catch(B){m=B}i()}}catch(B){if(B&&m&&typeof B.stack=="string"){for(var v=B.stack.split(`
`),w=m.stack.split(`
`),k=v.length-1,E=w.length-1;1<=k&&0<=E&&v[k]!==w[E];)E--;for(;1<=k&&0<=E;k--,E--)if(v[k]!==w[E]){if(k!==1||E!==1)do if(k--,E--,0>E||v[k]!==w[E]){var I=`
`+v[k].replace(" at new "," at ");return i.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",i.displayName)),I}while(1<=k&&0<=E);break}}}finally{S=!1,Error.prepareStackTrace=d}return(i=i?i.displayName||i.name:"")?H(i):""}function ke(i){switch(i.tag){case 5:return H(i.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return i=ge(i.type,!1),i;case 11:return i=ge(i.type.render,!1),i;case 1:return i=ge(i.type,!0),i;default:return""}}function ye(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case Q:return"Fragment";case L:return"Portal";case Z:return"Profiler";case se:return"StrictMode";case ne:return"Suspense";case oe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case J:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case ee:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case re:return r=i.displayName||null,r!==null?r:ye(i.type)||"Memo";case Se:r=i._payload,i=i._init;try{return ye(i(r))}catch{}}return null}function Me(i){var r=i.type;switch(i.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=r.render,i=i.displayName||i.name||"",r.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(r);case 8:return r===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ye(i){var r=Ne(i)?"checked":"value",d=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),m=""+i[r];if(!i.hasOwnProperty(r)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var v=d.get,w=d.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return v.call(this)},set:function(k){m=""+k,w.call(this,k)}}),Object.defineProperty(i,r,{enumerable:d.enumerable}),{getValue:function(){return m},setValue:function(k){m=""+k},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function rn(i){i._valueTracker||(i._valueTracker=Ye(i))}function tr(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var d=r.getValue(),m="";return i&&(m=Ne(i)?i.checked?"true":"false":i.value),i=m,i!==d?(r.setValue(i),!0):!1}function uo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function jo(i,r){var d=r.checked;return x({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??i._wrapperState.initialChecked})}function ei(i,r){var d=r.defaultValue==null?"":r.defaultValue,m=r.checked!=null?r.checked:r.defaultChecked;d=Te(r.value!=null?r.value:d),i._wrapperState={initialChecked:m,initialValue:d,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ti(i,r){r=r.checked,r!=null&&D(i,"checked",r,!1)}function co(i,r){ti(i,r);var d=Te(r.value),m=r.type;if(d!=null)m==="number"?(d===0&&i.value===""||i.value!=d)&&(i.value=""+d):i.value!==""+d&&(i.value=""+d);else if(m==="submit"||m==="reset"){i.removeAttribute("value");return}r.hasOwnProperty("value")?fo(i,r.type,d):r.hasOwnProperty("defaultValue")&&fo(i,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(i.defaultChecked=!!r.defaultChecked)}function nr(i,r,d){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var m=r.type;if(!(m!=="submit"&&m!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+i._wrapperState.initialValue,d||r===i.value||(i.value=r),i.defaultValue=r}d=i.name,d!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,d!==""&&(i.name=d)}function fo(i,r,d){(r!=="number"||uo(i.ownerDocument)!==i)&&(d==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+d&&(i.defaultValue=""+d))}var gn=Array.isArray;function vn(i,r,d,m){if(i=i.options,r){r={};for(var v=0;v<d.length;v++)r["$"+d[v]]=!0;for(d=0;d<i.length;d++)v=r.hasOwnProperty("$"+i[d].value),i[d].selected!==v&&(i[d].selected=v),v&&m&&(i[d].defaultSelected=!0)}else{for(d=""+Te(d),r=null,v=0;v<i.length;v++){if(i[v].value===d){i[v].selected=!0,m&&(i[v].defaultSelected=!0);return}r!==null||i[v].disabled||(r=i[v])}r!==null&&(r.selected=!0)}}function ni(i,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return x({},r,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function or(i,r){var d=r.value;if(d==null){if(d=r.children,r=r.defaultValue,d!=null){if(r!=null)throw Error(n(92));if(gn(d)){if(1<d.length)throw Error(n(93));d=d[0]}r=d}r==null&&(r=""),d=r}i._wrapperState={initialValue:Te(d)}}function ir(i,r){var d=Te(r.value),m=Te(r.defaultValue);d!=null&&(d=""+d,d!==i.value&&(i.value=d),r.defaultValue==null&&i.defaultValue!==d&&(i.defaultValue=d)),m!=null&&(i.defaultValue=""+m)}function rr(i){var r=i.textContent;r===i._wrapperState.initialValue&&r!==""&&r!==null&&(i.value=r)}function V(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(i,r){return i==null||i==="http://www.w3.org/1999/xhtml"?V(r):i==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ve,xe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,d,m,v){MSApp.execUnsafeLocalFunction(function(){return i(r,d,m,v)})}:i})(function(i,r){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=r;else{for(ve=ve||document.createElement("div"),ve.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ve.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;r.firstChild;)i.appendChild(r.firstChild)}});function _e(i,r){if(r){var d=i.firstChild;if(d&&d===i.lastChild&&d.nodeType===3){d.nodeValue=r;return}}i.textContent=r}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},an=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(i){an.forEach(function(r){r=r+i.charAt(0).toUpperCase()+i.substring(1),nt[r]=nt[i]})});function Rt(i,r,d){return r==null||typeof r=="boolean"||r===""?"":d||typeof r!="number"||r===0||nt.hasOwnProperty(i)&&nt[i]?(""+r).trim():r+"px"}function wn(i,r){i=i.style;for(var d in r)if(r.hasOwnProperty(d)){var m=d.indexOf("--")===0,v=Rt(d,r[d],m);d==="float"&&(d="cssFloat"),m?i.setProperty(d,v):i[d]=v}}var Gn=x({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ot(i,r){if(r){if(Gn[i]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Qt(i,r){if(i.indexOf("-")===-1)return typeof r.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function Ba(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Va=null,ho=null,po=null;function Wu(i){if(i=xi(i)){if(typeof Va!="function")throw Error(n(280));var r=i.stateNode;r&&(r=Ir(r),Va(i.stateNode,i.type,r))}}function $u(i){ho?po?po.push(i):po=[i]:ho=i}function Ju(){if(ho){var i=ho,r=po;if(po=ho=null,Wu(i),r)for(i=0;i<r.length;i++)Wu(r[i])}}function Ou(i,r){return i(r)}function Yu(){}var za=!1;function Ku(i,r,d){if(za)return i(r,d);za=!0;try{return Ou(i,r,d)}finally{za=!1,(ho!==null||po!==null)&&(Yu(),Ju())}}function oi(i,r){var d=i.stateNode;if(d===null)return null;var m=Ir(d);if(m===null)return null;d=m[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(i=i.type,m=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!m;break e;default:i=!1}if(i)return null;if(d&&typeof d!="function")throw Error(n(231,r,typeof d));return d}var Ha=!1;if(f)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Ha=!1}function Dy(i,r,d,m,v,w,k,E,I){var B=Array.prototype.slice.call(arguments,3);try{r.apply(d,B)}catch($){this.onError($)}}var ri=!1,ar=null,lr=!1,Ga=null,Ny={onError:function(i){ri=!0,ar=i}};function Ly(i,r,d,m,v,w,k,E,I){ri=!1,ar=null,Dy.apply(Ny,arguments)}function Fy(i,r,d,m,v,w,k,E,I){if(Ly.apply(this,arguments),ri){if(ri){var B=ar;ri=!1,ar=null}else throw Error(n(198));lr||(lr=!0,Ga=B)}}function Wn(i){var r=i,d=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(d=r.return),i=r.return;while(i)}return r.tag===3?d:null}function Qu(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function Xu(i){if(Wn(i)!==i)throw Error(n(188))}function Uy(i){var r=i.alternate;if(!r){if(r=Wn(i),r===null)throw Error(n(188));return r!==i?null:i}for(var d=i,m=r;;){var v=d.return;if(v===null)break;var w=v.alternate;if(w===null){if(m=v.return,m!==null){d=m;continue}break}if(v.child===w.child){for(w=v.child;w;){if(w===d)return Xu(v),i;if(w===m)return Xu(v),r;w=w.sibling}throw Error(n(188))}if(d.return!==m.return)d=v,m=w;else{for(var k=!1,E=v.child;E;){if(E===d){k=!0,d=v,m=w;break}if(E===m){k=!0,m=v,d=w;break}E=E.sibling}if(!k){for(E=w.child;E;){if(E===d){k=!0,d=w,m=v;break}if(E===m){k=!0,m=w,d=v;break}E=E.sibling}if(!k)throw Error(n(189))}}if(d.alternate!==m)throw Error(n(190))}if(d.tag!==3)throw Error(n(188));return d.stateNode.current===d?i:r}function Zu(i){return i=Uy(i),i!==null?ju(i):null}function ju(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var r=ju(i);if(r!==null)return r;i=i.sibling}return null}var ec=e.unstable_scheduleCallback,tc=e.unstable_cancelCallback,qy=e.unstable_shouldYield,By=e.unstable_requestPaint,Je=e.unstable_now,Vy=e.unstable_getCurrentPriorityLevel,Wa=e.unstable_ImmediatePriority,nc=e.unstable_UserBlockingPriority,sr=e.unstable_NormalPriority,zy=e.unstable_LowPriority,oc=e.unstable_IdlePriority,ur=null,Xt=null;function Hy(i){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(ur,i,void 0,(i.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:$y,Gy=Math.log,Wy=Math.LN2;function $y(i){return i>>>=0,i===0?32:31-(Gy(i)/Wy|0)|0}var cr=64,dr=4194304;function ai(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function fr(i,r){var d=i.pendingLanes;if(d===0)return 0;var m=0,v=i.suspendedLanes,w=i.pingedLanes,k=d&268435455;if(k!==0){var E=k&~v;E!==0?m=ai(E):(w&=k,w!==0&&(m=ai(w)))}else k=d&~v,k!==0?m=ai(k):w!==0&&(m=ai(w));if(m===0)return 0;if(r!==0&&r!==m&&(r&v)===0&&(v=m&-m,w=r&-r,v>=w||v===16&&(w&4194240)!==0))return r;if((m&4)!==0&&(m|=d&16),r=i.entangledLanes,r!==0)for(i=i.entanglements,r&=m;0<r;)d=31-zt(r),v=1<<d,m|=i[d],r&=~v;return m}function Jy(i,r){switch(i){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oy(i,r){for(var d=i.suspendedLanes,m=i.pingedLanes,v=i.expirationTimes,w=i.pendingLanes;0<w;){var k=31-zt(w),E=1<<k,I=v[k];I===-1?((E&d)===0||(E&m)!==0)&&(v[k]=Jy(E,r)):I<=r&&(i.expiredLanes|=E),w&=~E}}function $a(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ic(){var i=cr;return cr<<=1,(cr&4194240)===0&&(cr=64),i}function Ja(i){for(var r=[],d=0;31>d;d++)r.push(i);return r}function li(i,r,d){i.pendingLanes|=r,r!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,r=31-zt(r),i[r]=d}function Yy(i,r){var d=i.pendingLanes&~r;i.pendingLanes=r,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=r,i.mutableReadLanes&=r,i.entangledLanes&=r,r=i.entanglements;var m=i.eventTimes;for(i=i.expirationTimes;0<d;){var v=31-zt(d),w=1<<v;r[v]=0,m[v]=-1,i[v]=-1,d&=~w}}function Oa(i,r){var d=i.entangledLanes|=r;for(i=i.entanglements;d;){var m=31-zt(d),v=1<<m;v&r|i[m]&r&&(i[m]|=r),d&=~v}}var Le=0;function rc(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var ac,Ya,lc,sc,uc,Ka=!1,hr=[],bn=null,Cn=null,kn=null,si=new Map,ui=new Map,Tn=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(i,r){switch(i){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":si.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(r.pointerId)}}function ci(i,r,d,m,v,w){return i===null||i.nativeEvent!==w?(i={blockedOn:r,domEventName:d,eventSystemFlags:m,nativeEvent:w,targetContainers:[v]},r!==null&&(r=xi(r),r!==null&&Ya(r)),i):(i.eventSystemFlags|=m,r=i.targetContainers,v!==null&&r.indexOf(v)===-1&&r.push(v),i)}function Qy(i,r,d,m,v){switch(r){case"focusin":return bn=ci(bn,i,r,d,m,v),!0;case"dragenter":return Cn=ci(Cn,i,r,d,m,v),!0;case"mouseover":return kn=ci(kn,i,r,d,m,v),!0;case"pointerover":var w=v.pointerId;return si.set(w,ci(si.get(w)||null,i,r,d,m,v)),!0;case"gotpointercapture":return w=v.pointerId,ui.set(w,ci(ui.get(w)||null,i,r,d,m,v)),!0}return!1}function dc(i){var r=$n(i.target);if(r!==null){var d=Wn(r);if(d!==null){if(r=d.tag,r===13){if(r=Qu(d),r!==null){i.blockedOn=r,uc(i.priority,function(){lc(d)});return}}else if(r===3&&d.stateNode.current.memoizedState.isDehydrated){i.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}i.blockedOn=null}function pr(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var d=Xa(i.domEventName,i.eventSystemFlags,r[0],i.nativeEvent);if(d===null){d=i.nativeEvent;var m=new d.constructor(d.type,d);Et=m,d.target.dispatchEvent(m),Et=null}else return r=xi(d),r!==null&&Ya(r),i.blockedOn=d,!1;r.shift()}return!0}function fc(i,r,d){pr(i)&&d.delete(r)}function Xy(){Ka=!1,bn!==null&&pr(bn)&&(bn=null),Cn!==null&&pr(Cn)&&(Cn=null),kn!==null&&pr(kn)&&(kn=null),si.forEach(fc),ui.forEach(fc)}function di(i,r){i.blockedOn===r&&(i.blockedOn=null,Ka||(Ka=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xy)))}function fi(i){function r(v){return di(v,i)}if(0<hr.length){di(hr[0],i);for(var d=1;d<hr.length;d++){var m=hr[d];m.blockedOn===i&&(m.blockedOn=null)}}for(bn!==null&&di(bn,i),Cn!==null&&di(Cn,i),kn!==null&&di(kn,i),si.forEach(r),ui.forEach(r),d=0;d<Tn.length;d++)m=Tn[d],m.blockedOn===i&&(m.blockedOn=null);for(;0<Tn.length&&(d=Tn[0],d.blockedOn===null);)dc(d),d.blockedOn===null&&Tn.shift()}var mo=z.ReactCurrentBatchConfig,mr=!0;function Zy(i,r,d,m){var v=Le,w=mo.transition;mo.transition=null;try{Le=1,Qa(i,r,d,m)}finally{Le=v,mo.transition=w}}function jy(i,r,d,m){var v=Le,w=mo.transition;mo.transition=null;try{Le=4,Qa(i,r,d,m)}finally{Le=v,mo.transition=w}}function Qa(i,r,d,m){if(mr){var v=Xa(i,r,d,m);if(v===null)pl(i,r,m,yr,d),cc(i,m);else if(Qy(v,i,r,d,m))m.stopPropagation();else if(cc(i,m),r&4&&-1<Ky.indexOf(i)){for(;v!==null;){var w=xi(v);if(w!==null&&ac(w),w=Xa(i,r,d,m),w===null&&pl(i,r,m,yr,d),w===v)break;v=w}v!==null&&m.stopPropagation()}else pl(i,r,m,null,d)}}var yr=null;function Xa(i,r,d,m){if(yr=null,i=Ba(m),i=$n(i),i!==null)if(r=Wn(i),r===null)i=null;else if(d=r.tag,d===13){if(i=Qu(r),i!==null)return i;i=null}else if(d===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null);return yr=i,null}function hc(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case Wa:return 1;case nc:return 4;case sr:case zy:return 16;case oc:return 536870912;default:return 16}default:return 16}}var xn=null,Za=null,gr=null;function pc(){if(gr)return gr;var i,r=Za,d=r.length,m,v="value"in xn?xn.value:xn.textContent,w=v.length;for(i=0;i<d&&r[i]===v[i];i++);var k=d-i;for(m=1;m<=k&&r[d-m]===v[w-m];m++);return gr=v.slice(i,1<m?1-m:void 0)}function vr(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function wr(){return!0}function mc(){return!1}function St(i){function r(d,m,v,w,k){this._reactName=d,this._targetInst=v,this.type=m,this.nativeEvent=w,this.target=k,this.currentTarget=null;for(var E in i)i.hasOwnProperty(E)&&(d=i[E],this[E]=d?d(w):w[E]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?wr:mc,this.isPropagationStopped=mc,this}return x(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),r}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=St(yo),hi=x({},yo,{view:0,detail:0}),eg=St(hi),el,tl,pi,br=x({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==pi&&(pi&&i.type==="mousemove"?(el=i.screenX-pi.screenX,tl=i.screenY-pi.screenY):tl=el=0,pi=i),el)},movementY:function(i){return"movementY"in i?i.movementY:tl}}),yc=St(br),tg=x({},br,{dataTransfer:0}),ng=St(tg),og=x({},hi,{relatedTarget:0}),nl=St(og),ig=x({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=St(ig),ag=x({},yo,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),lg=St(ag),sg=x({},yo,{data:0}),gc=St(sg),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=dg[i])?!!r[i]:!1}function ol(){return fg}var hg=x({},hi,{key:function(i){if(i.key){var r=ug[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=vr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cg[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(i){return i.type==="keypress"?vr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?vr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),pg=St(hg),mg=x({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=St(mg),yg=x({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),gg=St(yg),vg=x({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=St(vg),bg=x({},br,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=St(bg),kg=[9,13,27,32],il=f&&"CompositionEvent"in window,mi=null;f&&"documentMode"in document&&(mi=document.documentMode);var Tg=f&&"TextEvent"in window&&!mi,wc=f&&(!il||mi&&8<mi&&11>=mi),bc=" ",Cc=!1;function kc(i,r){switch(i){case"keyup":return kg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var go=!1;function xg(i,r){switch(i){case"compositionend":return Tc(r);case"keypress":return r.which!==32?null:(Cc=!0,bc);case"textInput":return i=r.data,i===bc&&Cc?null:i;default:return null}}function Eg(i,r){if(go)return i==="compositionend"||!il&&kc(i,r)?(i=pc(),gr=Za=xn=null,go=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wc&&r.locale!=="ko"?null:r.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Sg[i.type]:r==="textarea"}function Ec(i,r,d,m){$u(m),r=Er(r,"onChange"),0<r.length&&(d=new ja("onChange","change",null,d,m),i.push({event:d,listeners:r}))}var yi=null,gi=null;function Ag(i){Gc(i,0)}function Cr(i){var r=ko(i);if(tr(r))return i}function Ig(i,r){if(i==="change")return r}var Sc=!1;if(f){var rl;if(f){var al="oninput"in document;if(!al){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),al=typeof Ac.oninput=="function"}rl=al}else rl=!1;Sc=rl&&(!document.documentMode||9<document.documentMode)}function Ic(){yi&&(yi.detachEvent("onpropertychange",_c),gi=yi=null)}function _c(i){if(i.propertyName==="value"&&Cr(gi)){var r=[];Ec(r,gi,i,Ba(i)),Ku(Ag,r)}}function _g(i,r,d){i==="focusin"?(Ic(),yi=r,gi=d,yi.attachEvent("onpropertychange",_c)):i==="focusout"&&Ic()}function Pg(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Cr(gi)}function Mg(i,r){if(i==="click")return Cr(r)}function Rg(i,r){if(i==="input"||i==="change")return Cr(r)}function Dg(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Ht=typeof Object.is=="function"?Object.is:Dg;function vi(i,r){if(Ht(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var d=Object.keys(i),m=Object.keys(r);if(d.length!==m.length)return!1;for(m=0;m<d.length;m++){var v=d[m];if(!p.call(r,v)||!Ht(i[v],r[v]))return!1}return!0}function Pc(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Mc(i,r){var d=Pc(i);i=0;for(var m;d;){if(d.nodeType===3){if(m=i+d.textContent.length,i<=r&&m>=r)return{node:d,offset:r-i};i=m}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Pc(d)}}function Rc(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Rc(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Dc(){for(var i=window,r=uo();r instanceof i.HTMLIFrameElement;){try{var d=typeof r.contentWindow.location.href=="string"}catch{d=!1}if(d)i=r.contentWindow;else break;r=uo(i.document)}return r}function ll(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}function Ng(i){var r=Dc(),d=i.focusedElem,m=i.selectionRange;if(r!==d&&d&&d.ownerDocument&&Rc(d.ownerDocument.documentElement,d)){if(m!==null&&ll(d)){if(r=m.start,i=m.end,i===void 0&&(i=r),"selectionStart"in d)d.selectionStart=r,d.selectionEnd=Math.min(i,d.value.length);else if(i=(r=d.ownerDocument||document)&&r.defaultView||window,i.getSelection){i=i.getSelection();var v=d.textContent.length,w=Math.min(m.start,v);m=m.end===void 0?w:Math.min(m.end,v),!i.extend&&w>m&&(v=m,m=w,w=v),v=Mc(d,w);var k=Mc(d,m);v&&k&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==k.node||i.focusOffset!==k.offset)&&(r=r.createRange(),r.setStart(v.node,v.offset),i.removeAllRanges(),w>m?(i.addRange(r),i.extend(k.node,k.offset)):(r.setEnd(k.node,k.offset),i.addRange(r)))}}for(r=[],i=d;i=i.parentNode;)i.nodeType===1&&r.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<r.length;d++)i=r[d],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Lg=f&&"documentMode"in document&&11>=document.documentMode,vo=null,sl=null,wi=null,ul=!1;function Nc(i,r,d){var m=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;ul||vo==null||vo!==uo(m)||(m=vo,"selectionStart"in m&&ll(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),wi&&vi(wi,m)||(wi=m,m=Er(sl,"onSelect"),0<m.length&&(r=new ja("onSelect","select",null,r,d),i.push({event:r,listeners:m}),r.target=vo)))}function kr(i,r){var d={};return d[i.toLowerCase()]=r.toLowerCase(),d["Webkit"+i]="webkit"+r,d["Moz"+i]="moz"+r,d}var wo={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},cl={},Lc={};f&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function Tr(i){if(cl[i])return cl[i];if(!wo[i])return i;var r=wo[i],d;for(d in r)if(r.hasOwnProperty(d)&&d in Lc)return cl[i]=r[d];return i}var Fc=Tr("animationend"),Uc=Tr("animationiteration"),qc=Tr("animationstart"),Bc=Tr("transitionend"),Vc=new Map,zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(i,r){Vc.set(i,r),u(r,[i])}for(var dl=0;dl<zc.length;dl++){var fl=zc[dl],Fg=fl.toLowerCase(),Ug=fl[0].toUpperCase()+fl.slice(1);En(Fg,"on"+Ug)}En(Fc,"onAnimationEnd"),En(Uc,"onAnimationIteration"),En(qc,"onAnimationStart"),En("dblclick","onDoubleClick"),En("focusin","onFocus"),En("focusout","onBlur"),En(Bc,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function Hc(i,r,d){var m=i.type||"unknown-event";i.currentTarget=d,Fy(m,r,void 0,i),i.currentTarget=null}function Gc(i,r){r=(r&4)!==0;for(var d=0;d<i.length;d++){var m=i[d],v=m.event;m=m.listeners;e:{var w=void 0;if(r)for(var k=m.length-1;0<=k;k--){var E=m[k],I=E.instance,B=E.currentTarget;if(E=E.listener,I!==w&&v.isPropagationStopped())break e;Hc(v,E,B),w=I}else for(k=0;k<m.length;k++){if(E=m[k],I=E.instance,B=E.currentTarget,E=E.listener,I!==w&&v.isPropagationStopped())break e;Hc(v,E,B),w=I}}}if(lr)throw i=Ga,lr=!1,Ga=null,i}function Be(i,r){var d=r[bl];d===void 0&&(d=r[bl]=new Set);var m=i+"__bubble";d.has(m)||(Wc(r,i,2,!1),d.add(m))}function hl(i,r,d){var m=0;r&&(m|=4),Wc(d,i,m,r)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Ci(i){if(!i[xr]){i[xr]=!0,o.forEach(function(d){d!=="selectionchange"&&(qg.has(d)||hl(d,!1,i),hl(d,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[xr]||(r[xr]=!0,hl("selectionchange",!1,r))}}function Wc(i,r,d,m){switch(hc(r)){case 1:var v=Zy;break;case 4:v=jy;break;default:v=Qa}d=v.bind(null,r,d,i),v=void 0,!Ha||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(v=!0),m?v!==void 0?i.addEventListener(r,d,{capture:!0,passive:v}):i.addEventListener(r,d,!0):v!==void 0?i.addEventListener(r,d,{passive:v}):i.addEventListener(r,d,!1)}function pl(i,r,d,m,v){var w=m;if((r&1)===0&&(r&2)===0&&m!==null)e:for(;;){if(m===null)return;var k=m.tag;if(k===3||k===4){var E=m.stateNode.containerInfo;if(E===v||E.nodeType===8&&E.parentNode===v)break;if(k===4)for(k=m.return;k!==null;){var I=k.tag;if((I===3||I===4)&&(I=k.stateNode.containerInfo,I===v||I.nodeType===8&&I.parentNode===v))return;k=k.return}for(;E!==null;){if(k=$n(E),k===null)return;if(I=k.tag,I===5||I===6){m=w=k;continue e}E=E.parentNode}}m=m.return}Ku(function(){var B=w,$=Ba(d),O=[];e:{var W=Vc.get(i);if(W!==void 0){var ie=ja,ue=i;switch(i){case"keypress":if(vr(d)===0)break e;case"keydown":case"keyup":ie=pg;break;case"focusin":ue="focus",ie=nl;break;case"focusout":ue="blur",ie=nl;break;case"beforeblur":case"afterblur":ie=nl;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=gg;break;case Fc:case Uc:case qc:ie=rg;break;case Bc:ie=wg;break;case"scroll":ie=eg;break;case"wheel":ie=Cg;break;case"copy":case"cut":case"paste":ie=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=vc}var ce=(r&4)!==0,Oe=!ce&&i==="scroll",F=ce?W!==null?W+"Capture":null:W;ce=[];for(var P=B,q;P!==null;){q=P;var X=q.stateNode;if(q.tag===5&&X!==null&&(q=X,F!==null&&(X=oi(P,F),X!=null&&ce.push(ki(P,X,q)))),Oe)break;P=P.return}0<ce.length&&(W=new ie(W,ue,null,d,$),O.push({event:W,listeners:ce}))}}if((r&7)===0){e:{if(W=i==="mouseover"||i==="pointerover",ie=i==="mouseout"||i==="pointerout",W&&d!==Et&&(ue=d.relatedTarget||d.fromElement)&&($n(ue)||ue[ln]))break e;if((ie||W)&&(W=$.window===$?$:(W=$.ownerDocument)?W.defaultView||W.parentWindow:window,ie?(ue=d.relatedTarget||d.toElement,ie=B,ue=ue?$n(ue):null,ue!==null&&(Oe=Wn(ue),ue!==Oe||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=B),ie!==ue)){if(ce=yc,X="onMouseLeave",F="onMouseEnter",P="mouse",(i==="pointerout"||i==="pointerover")&&(ce=vc,X="onPointerLeave",F="onPointerEnter",P="pointer"),Oe=ie==null?W:ko(ie),q=ue==null?W:ko(ue),W=new ce(X,P+"leave",ie,d,$),W.target=Oe,W.relatedTarget=q,X=null,$n($)===B&&(ce=new ce(F,P+"enter",ue,d,$),ce.target=q,ce.relatedTarget=Oe,X=ce),Oe=X,ie&&ue)t:{for(ce=ie,F=ue,P=0,q=ce;q;q=bo(q))P++;for(q=0,X=F;X;X=bo(X))q++;for(;0<P-q;)ce=bo(ce),P--;for(;0<q-P;)F=bo(F),q--;for(;P--;){if(ce===F||F!==null&&ce===F.alternate)break t;ce=bo(ce),F=bo(F)}ce=null}else ce=null;ie!==null&&$c(O,W,ie,ce,!1),ue!==null&&Oe!==null&&$c(O,Oe,ue,ce,!0)}}e:{if(W=B?ko(B):window,ie=W.nodeName&&W.nodeName.toLowerCase(),ie==="select"||ie==="input"&&W.type==="file")var de=Ig;else if(xc(W))if(Sc)de=Rg;else{de=Pg;var he=_g}else(ie=W.nodeName)&&ie.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(de=Mg);if(de&&(de=de(i,B))){Ec(O,de,d,$);break e}he&&he(i,W,B),i==="focusout"&&(he=W._wrapperState)&&he.controlled&&W.type==="number"&&fo(W,"number",W.value)}switch(he=B?ko(B):window,i){case"focusin":(xc(he)||he.contentEditable==="true")&&(vo=he,sl=B,wi=null);break;case"focusout":wi=sl=vo=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Nc(O,d,$);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":Nc(O,d,$)}var pe;if(il)e:{switch(i){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else go?kc(i,d)&&(we="onCompositionEnd"):i==="keydown"&&d.keyCode===229&&(we="onCompositionStart");we&&(wc&&d.locale!=="ko"&&(go||we!=="onCompositionStart"?we==="onCompositionEnd"&&go&&(pe=pc()):(xn=$,Za="value"in xn?xn.value:xn.textContent,go=!0)),he=Er(B,we),0<he.length&&(we=new gc(we,i,null,d,$),O.push({event:we,listeners:he}),pe?we.data=pe:(pe=Tc(d),pe!==null&&(we.data=pe)))),(pe=Tg?xg(i,d):Eg(i,d))&&(B=Er(B,"onBeforeInput"),0<B.length&&($=new gc("onBeforeInput","beforeinput",null,d,$),O.push({event:$,listeners:B}),$.data=pe))}Gc(O,r)})}function ki(i,r,d){return{instance:i,listener:r,currentTarget:d}}function Er(i,r){for(var d=r+"Capture",m=[];i!==null;){var v=i,w=v.stateNode;v.tag===5&&w!==null&&(v=w,w=oi(i,d),w!=null&&m.unshift(ki(i,w,v)),w=oi(i,r),w!=null&&m.push(ki(i,w,v))),i=i.return}return m}function bo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function $c(i,r,d,m,v){for(var w=r._reactName,k=[];d!==null&&d!==m;){var E=d,I=E.alternate,B=E.stateNode;if(I!==null&&I===m)break;E.tag===5&&B!==null&&(E=B,v?(I=oi(d,w),I!=null&&k.unshift(ki(d,I,E))):v||(I=oi(d,w),I!=null&&k.push(ki(d,I,E)))),d=d.return}k.length!==0&&i.push({event:r,listeners:k})}var Bg=/\r\n?/g,Vg=/\u0000|\uFFFD/g;function Jc(i){return(typeof i=="string"?i:""+i).replace(Bg,`
`).replace(Vg,"")}function Sr(i,r,d){if(r=Jc(r),Jc(i)!==r&&d)throw Error(n(425))}function Ar(){}var ml=null,yl=null;function gl(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,Oc=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Oc<"u"?function(i){return Oc.resolve(null).then(i).catch(Gg)}:vl;function Gg(i){setTimeout(function(){throw i})}function wl(i,r){var d=r,m=0;do{var v=d.nextSibling;if(i.removeChild(d),v&&v.nodeType===8)if(d=v.data,d==="/$"){if(m===0){i.removeChild(v),fi(r);return}m--}else d!=="$"&&d!=="$?"&&d!=="$!"||m++;d=v}while(d);fi(r)}function Sn(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return i}function Yc(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var d=i.data;if(d==="$"||d==="$!"||d==="$?"){if(r===0)return i;r--}else d==="/$"&&r++}i=i.previousSibling}return null}var Co=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Co,Ti="__reactProps$"+Co,ln="__reactContainer$"+Co,bl="__reactEvents$"+Co,Wg="__reactListeners$"+Co,$g="__reactHandles$"+Co;function $n(i){var r=i[Zt];if(r)return r;for(var d=i.parentNode;d;){if(r=d[ln]||d[Zt]){if(d=r.alternate,r.child!==null||d!==null&&d.child!==null)for(i=Yc(i);i!==null;){if(d=i[Zt])return d;i=Yc(i)}return r}i=d,d=i.parentNode}return null}function xi(i){return i=i[Zt]||i[ln],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ko(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function Ir(i){return i[Ti]||null}var Cl=[],To=-1;function An(i){return{current:i}}function Ve(i){0>To||(i.current=Cl[To],Cl[To]=null,To--)}function Ue(i,r){To++,Cl[To]=i.current,i.current=r}var In={},at=An(In),gt=An(!1),Jn=In;function xo(i,r){var d=i.type.contextTypes;if(!d)return In;var m=i.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===r)return m.__reactInternalMemoizedMaskedChildContext;var v={},w;for(w in d)v[w]=r[w];return m&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=r,i.__reactInternalMemoizedMaskedChildContext=v),v}function vt(i){return i=i.childContextTypes,i!=null}function _r(){Ve(gt),Ve(at)}function Kc(i,r,d){if(at.current!==In)throw Error(n(168));Ue(at,r),Ue(gt,d)}function Qc(i,r,d){var m=i.stateNode;if(r=r.childContextTypes,typeof m.getChildContext!="function")return d;m=m.getChildContext();for(var v in m)if(!(v in r))throw Error(n(108,Me(i)||"Unknown",v));return x({},d,m)}function Pr(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||In,Jn=at.current,Ue(at,i),Ue(gt,gt.current),!0}function Xc(i,r,d){var m=i.stateNode;if(!m)throw Error(n(169));d?(i=Qc(i,r,Jn),m.__reactInternalMemoizedMergedChildContext=i,Ve(gt),Ve(at),Ue(at,i)):Ve(gt),Ue(gt,d)}var sn=null,Mr=!1,kl=!1;function Zc(i){sn===null?sn=[i]:sn.push(i)}function Jg(i){Mr=!0,Zc(i)}function _n(){if(!kl&&sn!==null){kl=!0;var i=0,r=Le;try{var d=sn;for(Le=1;i<d.length;i++){var m=d[i];do m=m(!0);while(m!==null)}sn=null,Mr=!1}catch(v){throw sn!==null&&(sn=sn.slice(i+1)),ec(Wa,_n),v}finally{Le=r,kl=!1}}return null}var Eo=[],So=0,Rr=null,Dr=0,Dt=[],Nt=0,On=null,un=1,cn="";function Yn(i,r){Eo[So++]=Dr,Eo[So++]=Rr,Rr=i,Dr=r}function jc(i,r,d){Dt[Nt++]=un,Dt[Nt++]=cn,Dt[Nt++]=On,On=i;var m=un;i=cn;var v=32-zt(m)-1;m&=~(1<<v),d+=1;var w=32-zt(r)+v;if(30<w){var k=v-v%5;w=(m&(1<<k)-1).toString(32),m>>=k,v-=k,un=1<<32-zt(r)+v|d<<v|m,cn=w+i}else un=1<<w|d<<v|m,cn=i}function Tl(i){i.return!==null&&(Yn(i,1),jc(i,1,0))}function xl(i){for(;i===Rr;)Rr=Eo[--So],Eo[So]=null,Dr=Eo[--So],Eo[So]=null;for(;i===On;)On=Dt[--Nt],Dt[Nt]=null,cn=Dt[--Nt],Dt[Nt]=null,un=Dt[--Nt],Dt[Nt]=null}var At=null,It=null,He=!1,Gt=null;function ed(i,r){var d=qt(5,null,null,0);d.elementType="DELETED",d.stateNode=r,d.return=i,r=i.deletions,r===null?(i.deletions=[d],i.flags|=16):r.push(d)}function td(i,r){switch(i.tag){case 5:var d=i.type;return r=r.nodeType!==1||d.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(i.stateNode=r,At=i,It=Sn(r.firstChild),!0):!1;case 6:return r=i.pendingProps===""||r.nodeType!==3?null:r,r!==null?(i.stateNode=r,At=i,It=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(d=On!==null?{id:un,overflow:cn}:null,i.memoizedState={dehydrated:r,treeContext:d,retryLane:1073741824},d=qt(18,null,null,0),d.stateNode=r,d.return=i,i.child=d,At=i,It=null,!0):!1;default:return!1}}function El(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Sl(i){if(He){var r=It;if(r){var d=r;if(!td(i,r)){if(El(i))throw Error(n(418));r=Sn(d.nextSibling);var m=At;r&&td(i,r)?ed(m,d):(i.flags=i.flags&-4097|2,He=!1,At=i)}}else{if(El(i))throw Error(n(418));i.flags=i.flags&-4097|2,He=!1,At=i}}}function nd(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;At=i}function Nr(i){if(i!==At)return!1;if(!He)return nd(i),He=!0,!1;var r;if((r=i.tag!==3)&&!(r=i.tag!==5)&&(r=i.type,r=r!=="head"&&r!=="body"&&!gl(i.type,i.memoizedProps)),r&&(r=It)){if(El(i))throw od(),Error(n(418));for(;r;)ed(i,r),r=Sn(r.nextSibling)}if(nd(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8){var d=i.data;if(d==="/$"){if(r===0){It=Sn(i.nextSibling);break e}r--}else d!=="$"&&d!=="$!"&&d!=="$?"||r++}i=i.nextSibling}It=null}}else It=At?Sn(i.stateNode.nextSibling):null;return!0}function od(){for(var i=It;i;)i=Sn(i.nextSibling)}function Ao(){It=At=null,He=!1}function Al(i){Gt===null?Gt=[i]:Gt.push(i)}var Og=z.ReactCurrentBatchConfig;function Ei(i,r,d){if(i=d.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(n(309));var m=d.stateNode}if(!m)throw Error(n(147,i));var v=m,w=""+i;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===w?r.ref:(r=function(k){var E=v.refs;k===null?delete E[w]:E[w]=k},r._stringRef=w,r)}if(typeof i!="string")throw Error(n(284));if(!d._owner)throw Error(n(290,i))}return i}function Lr(i,r){throw i=Object.prototype.toString.call(r),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i))}function id(i){var r=i._init;return r(i._payload)}function rd(i){function r(F,P){if(i){var q=F.deletions;q===null?(F.deletions=[P],F.flags|=16):q.push(P)}}function d(F,P){if(!i)return null;for(;P!==null;)r(F,P),P=P.sibling;return null}function m(F,P){for(F=new Map;P!==null;)P.key!==null?F.set(P.key,P):F.set(P.index,P),P=P.sibling;return F}function v(F,P){return F=Un(F,P),F.index=0,F.sibling=null,F}function w(F,P,q){return F.index=q,i?(q=F.alternate,q!==null?(q=q.index,q<P?(F.flags|=2,P):q):(F.flags|=2,P)):(F.flags|=1048576,P)}function k(F){return i&&F.alternate===null&&(F.flags|=2),F}function E(F,P,q,X){return P===null||P.tag!==6?(P=vs(q,F.mode,X),P.return=F,P):(P=v(P,q),P.return=F,P)}function I(F,P,q,X){var de=q.type;return de===Q?$(F,P,q.props.children,X,q.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Se&&id(de)===P.type)?(X=v(P,q.props),X.ref=Ei(F,P,q),X.return=F,X):(X=ra(q.type,q.key,q.props,null,F.mode,X),X.ref=Ei(F,P,q),X.return=F,X)}function B(F,P,q,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==q.containerInfo||P.stateNode.implementation!==q.implementation?(P=ws(q,F.mode,X),P.return=F,P):(P=v(P,q.children||[]),P.return=F,P)}function $(F,P,q,X,de){return P===null||P.tag!==7?(P=no(q,F.mode,X,de),P.return=F,P):(P=v(P,q),P.return=F,P)}function O(F,P,q){if(typeof P=="string"&&P!==""||typeof P=="number")return P=vs(""+P,F.mode,q),P.return=F,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case G:return q=ra(P.type,P.key,P.props,null,F.mode,q),q.ref=Ei(F,null,P),q.return=F,q;case L:return P=ws(P,F.mode,q),P.return=F,P;case Se:var X=P._init;return O(F,X(P._payload),q)}if(gn(P)||fe(P))return P=no(P,F.mode,q,null),P.return=F,P;Lr(F,P)}return null}function W(F,P,q,X){var de=P!==null?P.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return de!==null?null:E(F,P,""+q,X);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case G:return q.key===de?I(F,P,q,X):null;case L:return q.key===de?B(F,P,q,X):null;case Se:return de=q._init,W(F,P,de(q._payload),X)}if(gn(q)||fe(q))return de!==null?null:$(F,P,q,X,null);Lr(F,q)}return null}function ie(F,P,q,X,de){if(typeof X=="string"&&X!==""||typeof X=="number")return F=F.get(q)||null,E(P,F,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case G:return F=F.get(X.key===null?q:X.key)||null,I(P,F,X,de);case L:return F=F.get(X.key===null?q:X.key)||null,B(P,F,X,de);case Se:var he=X._init;return ie(F,P,q,he(X._payload),de)}if(gn(X)||fe(X))return F=F.get(q)||null,$(P,F,X,de,null);Lr(P,X)}return null}function ue(F,P,q,X){for(var de=null,he=null,pe=P,we=P=0,tt=null;pe!==null&&we<q.length;we++){pe.index>we?(tt=pe,pe=null):tt=pe.sibling;var Re=W(F,pe,q[we],X);if(Re===null){pe===null&&(pe=tt);break}i&&pe&&Re.alternate===null&&r(F,pe),P=w(Re,P,we),he===null?de=Re:he.sibling=Re,he=Re,pe=tt}if(we===q.length)return d(F,pe),He&&Yn(F,we),de;if(pe===null){for(;we<q.length;we++)pe=O(F,q[we],X),pe!==null&&(P=w(pe,P,we),he===null?de=pe:he.sibling=pe,he=pe);return He&&Yn(F,we),de}for(pe=m(F,pe);we<q.length;we++)tt=ie(pe,F,we,q[we],X),tt!==null&&(i&&tt.alternate!==null&&pe.delete(tt.key===null?we:tt.key),P=w(tt,P,we),he===null?de=tt:he.sibling=tt,he=tt);return i&&pe.forEach(function(qn){return r(F,qn)}),He&&Yn(F,we),de}function ce(F,P,q,X){var de=fe(q);if(typeof de!="function")throw Error(n(150));if(q=de.call(q),q==null)throw Error(n(151));for(var he=de=null,pe=P,we=P=0,tt=null,Re=q.next();pe!==null&&!Re.done;we++,Re=q.next()){pe.index>we?(tt=pe,pe=null):tt=pe.sibling;var qn=W(F,pe,Re.value,X);if(qn===null){pe===null&&(pe=tt);break}i&&pe&&qn.alternate===null&&r(F,pe),P=w(qn,P,we),he===null?de=qn:he.sibling=qn,he=qn,pe=tt}if(Re.done)return d(F,pe),He&&Yn(F,we),de;if(pe===null){for(;!Re.done;we++,Re=q.next())Re=O(F,Re.value,X),Re!==null&&(P=w(Re,P,we),he===null?de=Re:he.sibling=Re,he=Re);return He&&Yn(F,we),de}for(pe=m(F,pe);!Re.done;we++,Re=q.next())Re=ie(pe,F,we,Re.value,X),Re!==null&&(i&&Re.alternate!==null&&pe.delete(Re.key===null?we:Re.key),P=w(Re,P,we),he===null?de=Re:he.sibling=Re,he=Re);return i&&pe.forEach(function(Sv){return r(F,Sv)}),He&&Yn(F,we),de}function Oe(F,P,q,X){if(typeof q=="object"&&q!==null&&q.type===Q&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case G:e:{for(var de=q.key,he=P;he!==null;){if(he.key===de){if(de=q.type,de===Q){if(he.tag===7){d(F,he.sibling),P=v(he,q.props.children),P.return=F,F=P;break e}}else if(he.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Se&&id(de)===he.type){d(F,he.sibling),P=v(he,q.props),P.ref=Ei(F,he,q),P.return=F,F=P;break e}d(F,he);break}else r(F,he);he=he.sibling}q.type===Q?(P=no(q.props.children,F.mode,X,q.key),P.return=F,F=P):(X=ra(q.type,q.key,q.props,null,F.mode,X),X.ref=Ei(F,P,q),X.return=F,F=X)}return k(F);case L:e:{for(he=q.key;P!==null;){if(P.key===he)if(P.tag===4&&P.stateNode.containerInfo===q.containerInfo&&P.stateNode.implementation===q.implementation){d(F,P.sibling),P=v(P,q.children||[]),P.return=F,F=P;break e}else{d(F,P);break}else r(F,P);P=P.sibling}P=ws(q,F.mode,X),P.return=F,F=P}return k(F);case Se:return he=q._init,Oe(F,P,he(q._payload),X)}if(gn(q))return ue(F,P,q,X);if(fe(q))return ce(F,P,q,X);Lr(F,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,P!==null&&P.tag===6?(d(F,P.sibling),P=v(P,q),P.return=F,F=P):(d(F,P),P=vs(q,F.mode,X),P.return=F,F=P),k(F)):d(F,P)}return Oe}var Io=rd(!0),ad=rd(!1),Fr=An(null),Ur=null,_o=null,Il=null;function _l(){Il=_o=Ur=null}function Pl(i){var r=Fr.current;Ve(Fr),i._currentValue=r}function Ml(i,r,d){for(;i!==null;){var m=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,m!==null&&(m.childLanes|=r)):m!==null&&(m.childLanes&r)!==r&&(m.childLanes|=r),i===d)break;i=i.return}}function Po(i,r){Ur=i,Il=_o=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&r)!==0&&(wt=!0),i.firstContext=null)}function Lt(i){var r=i._currentValue;if(Il!==i)if(i={context:i,memoizedValue:r,next:null},_o===null){if(Ur===null)throw Error(n(308));_o=i,Ur.dependencies={lanes:0,firstContext:i}}else _o=_o.next=i;return r}var Kn=null;function Rl(i){Kn===null?Kn=[i]:Kn.push(i)}function ld(i,r,d,m){var v=r.interleaved;return v===null?(d.next=d,Rl(r)):(d.next=v.next,v.next=d),r.interleaved=d,dn(i,m)}function dn(i,r){i.lanes|=r;var d=i.alternate;for(d!==null&&(d.lanes|=r),d=i,i=i.return;i!==null;)i.childLanes|=r,d=i.alternate,d!==null&&(d.childLanes|=r),d=i,i=i.return;return d.tag===3?d.stateNode:null}var Pn=!1;function Dl(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function fn(i,r){return{eventTime:i,lane:r,tag:0,payload:null,callback:null,next:null}}function Mn(i,r,d){var m=i.updateQueue;if(m===null)return null;if(m=m.shared,(Pe&2)!==0){var v=m.pending;return v===null?r.next=r:(r.next=v.next,v.next=r),m.pending=r,dn(i,d)}return v=m.interleaved,v===null?(r.next=r,Rl(m)):(r.next=v.next,v.next=r),m.interleaved=r,dn(i,d)}function qr(i,r,d){if(r=r.updateQueue,r!==null&&(r=r.shared,(d&4194240)!==0)){var m=r.lanes;m&=i.pendingLanes,d|=m,r.lanes=d,Oa(i,d)}}function ud(i,r){var d=i.updateQueue,m=i.alternate;if(m!==null&&(m=m.updateQueue,d===m)){var v=null,w=null;if(d=d.firstBaseUpdate,d!==null){do{var k={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};w===null?v=w=k:w=w.next=k,d=d.next}while(d!==null);w===null?v=w=r:w=w.next=r}else v=w=r;d={baseState:m.baseState,firstBaseUpdate:v,lastBaseUpdate:w,shared:m.shared,effects:m.effects},i.updateQueue=d;return}i=d.lastBaseUpdate,i===null?d.firstBaseUpdate=r:i.next=r,d.lastBaseUpdate=r}function Br(i,r,d,m){var v=i.updateQueue;Pn=!1;var w=v.firstBaseUpdate,k=v.lastBaseUpdate,E=v.shared.pending;if(E!==null){v.shared.pending=null;var I=E,B=I.next;I.next=null,k===null?w=B:k.next=B,k=I;var $=i.alternate;$!==null&&($=$.updateQueue,E=$.lastBaseUpdate,E!==k&&(E===null?$.firstBaseUpdate=B:E.next=B,$.lastBaseUpdate=I))}if(w!==null){var O=v.baseState;k=0,$=B=I=null,E=w;do{var W=E.lane,ie=E.eventTime;if((m&W)===W){$!==null&&($=$.next={eventTime:ie,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var ue=i,ce=E;switch(W=r,ie=d,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){O=ue.call(ie,O,W);break e}O=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,W=typeof ue=="function"?ue.call(ie,O,W):ue,W==null)break e;O=x({},O,W);break e;case 2:Pn=!0}}E.callback!==null&&E.lane!==0&&(i.flags|=64,W=v.effects,W===null?v.effects=[E]:W.push(E))}else ie={eventTime:ie,lane:W,tag:E.tag,payload:E.payload,callback:E.callback,next:null},$===null?(B=$=ie,I=O):$=$.next=ie,k|=W;if(E=E.next,E===null){if(E=v.shared.pending,E===null)break;W=E,E=W.next,W.next=null,v.lastBaseUpdate=W,v.shared.pending=null}}while(!0);if($===null&&(I=O),v.baseState=I,v.firstBaseUpdate=B,v.lastBaseUpdate=$,r=v.shared.interleaved,r!==null){v=r;do k|=v.lane,v=v.next;while(v!==r)}else w===null&&(v.shared.lanes=0);Zn|=k,i.lanes=k,i.memoizedState=O}}function cd(i,r,d){if(i=r.effects,r.effects=null,i!==null)for(r=0;r<i.length;r++){var m=i[r],v=m.callback;if(v!==null){if(m.callback=null,m=d,typeof v!="function")throw Error(n(191,v));v.call(m)}}}var Si={},jt=An(Si),Ai=An(Si),Ii=An(Si);function Qn(i){if(i===Si)throw Error(n(174));return i}function Nl(i,r){switch(Ue(Ii,r),Ue(Ai,i),Ue(jt,Si),i=r.nodeType,i){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:te(null,"");break;default:i=i===8?r.parentNode:r,r=i.namespaceURI||null,i=i.tagName,r=te(r,i)}Ve(jt),Ue(jt,r)}function Mo(){Ve(jt),Ve(Ai),Ve(Ii)}function dd(i){Qn(Ii.current);var r=Qn(jt.current),d=te(r,i.type);r!==d&&(Ue(Ai,i),Ue(jt,d))}function Ll(i){Ai.current===i&&(Ve(jt),Ve(Ai))}var Ge=An(0);function Vr(i){for(var r=i;r!==null;){if(r.tag===13){var d=r.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fl=[];function Ul(){for(var i=0;i<Fl.length;i++)Fl[i]._workInProgressVersionPrimary=null;Fl.length=0}var zr=z.ReactCurrentDispatcher,ql=z.ReactCurrentBatchConfig,Xn=0,We=null,Xe=null,je=null,Hr=!1,_i=!1,Pi=0,Yg=0;function lt(){throw Error(n(321))}function Bl(i,r){if(r===null)return!1;for(var d=0;d<r.length&&d<i.length;d++)if(!Ht(i[d],r[d]))return!1;return!0}function Vl(i,r,d,m,v,w){if(Xn=w,We=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,zr.current=i===null||i.memoizedState===null?Zg:jg,i=d(m,v),_i){w=0;do{if(_i=!1,Pi=0,25<=w)throw Error(n(301));w+=1,je=Xe=null,r.updateQueue=null,zr.current=ev,i=d(m,v)}while(_i)}if(zr.current=$r,r=Xe!==null&&Xe.next!==null,Xn=0,je=Xe=We=null,Hr=!1,r)throw Error(n(300));return i}function zl(){var i=Pi!==0;return Pi=0,i}function en(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?We.memoizedState=je=i:je=je.next=i,je}function Ft(){if(Xe===null){var i=We.alternate;i=i!==null?i.memoizedState:null}else i=Xe.next;var r=je===null?We.memoizedState:je.next;if(r!==null)je=r,Xe=i;else{if(i===null)throw Error(n(310));Xe=i,i={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},je===null?We.memoizedState=je=i:je=je.next=i}return je}function Mi(i,r){return typeof r=="function"?r(i):r}function Hl(i){var r=Ft(),d=r.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=i;var m=Xe,v=m.baseQueue,w=d.pending;if(w!==null){if(v!==null){var k=v.next;v.next=w.next,w.next=k}m.baseQueue=v=w,d.pending=null}if(v!==null){w=v.next,m=m.baseState;var E=k=null,I=null,B=w;do{var $=B.lane;if((Xn&$)===$)I!==null&&(I=I.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),m=B.hasEagerState?B.eagerState:i(m,B.action);else{var O={lane:$,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};I===null?(E=I=O,k=m):I=I.next=O,We.lanes|=$,Zn|=$}B=B.next}while(B!==null&&B!==w);I===null?k=m:I.next=E,Ht(m,r.memoizedState)||(wt=!0),r.memoizedState=m,r.baseState=k,r.baseQueue=I,d.lastRenderedState=m}if(i=d.interleaved,i!==null){v=i;do w=v.lane,We.lanes|=w,Zn|=w,v=v.next;while(v!==i)}else v===null&&(d.lanes=0);return[r.memoizedState,d.dispatch]}function Gl(i){var r=Ft(),d=r.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=i;var m=d.dispatch,v=d.pending,w=r.memoizedState;if(v!==null){d.pending=null;var k=v=v.next;do w=i(w,k.action),k=k.next;while(k!==v);Ht(w,r.memoizedState)||(wt=!0),r.memoizedState=w,r.baseQueue===null&&(r.baseState=w),d.lastRenderedState=w}return[w,m]}function fd(){}function hd(i,r){var d=We,m=Ft(),v=r(),w=!Ht(m.memoizedState,v);if(w&&(m.memoizedState=v,wt=!0),m=m.queue,Wl(yd.bind(null,d,m,i),[i]),m.getSnapshot!==r||w||je!==null&&je.memoizedState.tag&1){if(d.flags|=2048,Ri(9,md.bind(null,d,m,v,r),void 0,null),et===null)throw Error(n(349));(Xn&30)!==0||pd(d,r,v)}return v}function pd(i,r,d){i.flags|=16384,i={getSnapshot:r,value:d},r=We.updateQueue,r===null?(r={lastEffect:null,stores:null},We.updateQueue=r,r.stores=[i]):(d=r.stores,d===null?r.stores=[i]:d.push(i))}function md(i,r,d,m){r.value=d,r.getSnapshot=m,gd(r)&&vd(i)}function yd(i,r,d){return d(function(){gd(r)&&vd(i)})}function gd(i){var r=i.getSnapshot;i=i.value;try{var d=r();return!Ht(i,d)}catch{return!0}}function vd(i){var r=dn(i,1);r!==null&&Ot(r,i,1,-1)}function wd(i){var r=en();return typeof i=="function"&&(i=i()),r.memoizedState=r.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:i},r.queue=i,i=i.dispatch=Xg.bind(null,We,i),[r.memoizedState,i]}function Ri(i,r,d,m){return i={tag:i,create:r,destroy:d,deps:m,next:null},r=We.updateQueue,r===null?(r={lastEffect:null,stores:null},We.updateQueue=r,r.lastEffect=i.next=i):(d=r.lastEffect,d===null?r.lastEffect=i.next=i:(m=d.next,d.next=i,i.next=m,r.lastEffect=i)),i}function bd(){return Ft().memoizedState}function Gr(i,r,d,m){var v=en();We.flags|=i,v.memoizedState=Ri(1|r,d,void 0,m===void 0?null:m)}function Wr(i,r,d,m){var v=Ft();m=m===void 0?null:m;var w=void 0;if(Xe!==null){var k=Xe.memoizedState;if(w=k.destroy,m!==null&&Bl(m,k.deps)){v.memoizedState=Ri(r,d,w,m);return}}We.flags|=i,v.memoizedState=Ri(1|r,d,w,m)}function Cd(i,r){return Gr(8390656,8,i,r)}function Wl(i,r){return Wr(2048,8,i,r)}function kd(i,r){return Wr(4,2,i,r)}function Td(i,r){return Wr(4,4,i,r)}function xd(i,r){if(typeof r=="function")return i=i(),r(i),function(){r(null)};if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Ed(i,r,d){return d=d!=null?d.concat([i]):null,Wr(4,4,xd.bind(null,r,i),d)}function $l(){}function Sd(i,r){var d=Ft();r=r===void 0?null:r;var m=d.memoizedState;return m!==null&&r!==null&&Bl(r,m[1])?m[0]:(d.memoizedState=[i,r],i)}function Ad(i,r){var d=Ft();r=r===void 0?null:r;var m=d.memoizedState;return m!==null&&r!==null&&Bl(r,m[1])?m[0]:(i=i(),d.memoizedState=[i,r],i)}function Id(i,r,d){return(Xn&21)===0?(i.baseState&&(i.baseState=!1,wt=!0),i.memoizedState=d):(Ht(d,r)||(d=ic(),We.lanes|=d,Zn|=d,i.baseState=!0),r)}function Kg(i,r){var d=Le;Le=d!==0&&4>d?d:4,i(!0);var m=ql.transition;ql.transition={};try{i(!1),r()}finally{Le=d,ql.transition=m}}function _d(){return Ft().memoizedState}function Qg(i,r,d){var m=Ln(i);if(d={lane:m,action:d,hasEagerState:!1,eagerState:null,next:null},Pd(i))Md(r,d);else if(d=ld(i,r,d,m),d!==null){var v=mt();Ot(d,i,m,v),Rd(d,r,m)}}function Xg(i,r,d){var m=Ln(i),v={lane:m,action:d,hasEagerState:!1,eagerState:null,next:null};if(Pd(i))Md(r,v);else{var w=i.alternate;if(i.lanes===0&&(w===null||w.lanes===0)&&(w=r.lastRenderedReducer,w!==null))try{var k=r.lastRenderedState,E=w(k,d);if(v.hasEagerState=!0,v.eagerState=E,Ht(E,k)){var I=r.interleaved;I===null?(v.next=v,Rl(r)):(v.next=I.next,I.next=v),r.interleaved=v;return}}catch{}finally{}d=ld(i,r,v,m),d!==null&&(v=mt(),Ot(d,i,m,v),Rd(d,r,m))}}function Pd(i){var r=i.alternate;return i===We||r!==null&&r===We}function Md(i,r){_i=Hr=!0;var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}function Rd(i,r,d){if((d&4194240)!==0){var m=r.lanes;m&=i.pendingLanes,d|=m,r.lanes=d,Oa(i,d)}}var $r={readContext:Lt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Zg={readContext:Lt,useCallback:function(i,r){return en().memoizedState=[i,r===void 0?null:r],i},useContext:Lt,useEffect:Cd,useImperativeHandle:function(i,r,d){return d=d!=null?d.concat([i]):null,Gr(4194308,4,xd.bind(null,r,i),d)},useLayoutEffect:function(i,r){return Gr(4194308,4,i,r)},useInsertionEffect:function(i,r){return Gr(4,2,i,r)},useMemo:function(i,r){var d=en();return r=r===void 0?null:r,i=i(),d.memoizedState=[i,r],i},useReducer:function(i,r,d){var m=en();return r=d!==void 0?d(r):r,m.memoizedState=m.baseState=r,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:r},m.queue=i,i=i.dispatch=Qg.bind(null,We,i),[m.memoizedState,i]},useRef:function(i){var r=en();return i={current:i},r.memoizedState=i},useState:wd,useDebugValue:$l,useDeferredValue:function(i){return en().memoizedState=i},useTransition:function(){var i=wd(!1),r=i[0];return i=Kg.bind(null,i[1]),en().memoizedState=i,[r,i]},useMutableSource:function(){},useSyncExternalStore:function(i,r,d){var m=We,v=en();if(He){if(d===void 0)throw Error(n(407));d=d()}else{if(d=r(),et===null)throw Error(n(349));(Xn&30)!==0||pd(m,r,d)}v.memoizedState=d;var w={value:d,getSnapshot:r};return v.queue=w,Cd(yd.bind(null,m,w,i),[i]),m.flags|=2048,Ri(9,md.bind(null,m,w,d,r),void 0,null),d},useId:function(){var i=en(),r=et.identifierPrefix;if(He){var d=cn,m=un;d=(m&~(1<<32-zt(m)-1)).toString(32)+d,r=":"+r+"R"+d,d=Pi++,0<d&&(r+="H"+d.toString(32)),r+=":"}else d=Yg++,r=":"+r+"r"+d.toString(32)+":";return i.memoizedState=r},unstable_isNewReconciler:!1},jg={readContext:Lt,useCallback:Sd,useContext:Lt,useEffect:Wl,useImperativeHandle:Ed,useInsertionEffect:kd,useLayoutEffect:Td,useMemo:Ad,useReducer:Hl,useRef:bd,useState:function(){return Hl(Mi)},useDebugValue:$l,useDeferredValue:function(i){var r=Ft();return Id(r,Xe.memoizedState,i)},useTransition:function(){var i=Hl(Mi)[0],r=Ft().memoizedState;return[i,r]},useMutableSource:fd,useSyncExternalStore:hd,useId:_d,unstable_isNewReconciler:!1},ev={readContext:Lt,useCallback:Sd,useContext:Lt,useEffect:Wl,useImperativeHandle:Ed,useInsertionEffect:kd,useLayoutEffect:Td,useMemo:Ad,useReducer:Gl,useRef:bd,useState:function(){return Gl(Mi)},useDebugValue:$l,useDeferredValue:function(i){var r=Ft();return Xe===null?r.memoizedState=i:Id(r,Xe.memoizedState,i)},useTransition:function(){var i=Gl(Mi)[0],r=Ft().memoizedState;return[i,r]},useMutableSource:fd,useSyncExternalStore:hd,useId:_d,unstable_isNewReconciler:!1};function Wt(i,r){if(i&&i.defaultProps){r=x({},r),i=i.defaultProps;for(var d in i)r[d]===void 0&&(r[d]=i[d]);return r}return r}function Jl(i,r,d,m){r=i.memoizedState,d=d(m,r),d=d==null?r:x({},r,d),i.memoizedState=d,i.lanes===0&&(i.updateQueue.baseState=d)}var Jr={isMounted:function(i){return(i=i._reactInternals)?Wn(i)===i:!1},enqueueSetState:function(i,r,d){i=i._reactInternals;var m=mt(),v=Ln(i),w=fn(m,v);w.payload=r,d!=null&&(w.callback=d),r=Mn(i,w,v),r!==null&&(Ot(r,i,v,m),qr(r,i,v))},enqueueReplaceState:function(i,r,d){i=i._reactInternals;var m=mt(),v=Ln(i),w=fn(m,v);w.tag=1,w.payload=r,d!=null&&(w.callback=d),r=Mn(i,w,v),r!==null&&(Ot(r,i,v,m),qr(r,i,v))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var d=mt(),m=Ln(i),v=fn(d,m);v.tag=2,r!=null&&(v.callback=r),r=Mn(i,v,m),r!==null&&(Ot(r,i,m,d),qr(r,i,m))}};function Dd(i,r,d,m,v,w,k){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(m,w,k):r.prototype&&r.prototype.isPureReactComponent?!vi(d,m)||!vi(v,w):!0}function Nd(i,r,d){var m=!1,v=In,w=r.contextType;return typeof w=="object"&&w!==null?w=Lt(w):(v=vt(r)?Jn:at.current,m=r.contextTypes,w=(m=m!=null)?xo(i,v):In),r=new r(d,w),i.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jr,i.stateNode=r,r._reactInternals=i,m&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=w),r}function Ld(i,r,d,m){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(d,m),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(d,m),r.state!==i&&Jr.enqueueReplaceState(r,r.state,null)}function Ol(i,r,d,m){var v=i.stateNode;v.props=d,v.state=i.memoizedState,v.refs={},Dl(i);var w=r.contextType;typeof w=="object"&&w!==null?v.context=Lt(w):(w=vt(r)?Jn:at.current,v.context=xo(i,w)),v.state=i.memoizedState,w=r.getDerivedStateFromProps,typeof w=="function"&&(Jl(i,r,w,d),v.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(r=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),r!==v.state&&Jr.enqueueReplaceState(v,v.state,null),Br(i,d,v,m),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function Ro(i,r){try{var d="",m=r;do d+=ke(m),m=m.return;while(m);var v=d}catch(w){v=`
Error generating stack: `+w.message+`
`+w.stack}return{value:i,source:r,stack:v,digest:null}}function Yl(i,r,d){return{value:i,source:null,stack:d??null,digest:r??null}}function Kl(i,r){try{console.error(r.value)}catch(d){setTimeout(function(){throw d})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function Fd(i,r,d){d=fn(-1,d),d.tag=3,d.payload={element:null};var m=r.value;return d.callback=function(){jr||(jr=!0,cs=m),Kl(i,r)},d}function Ud(i,r,d){d=fn(-1,d),d.tag=3;var m=i.type.getDerivedStateFromError;if(typeof m=="function"){var v=r.value;d.payload=function(){return m(v)},d.callback=function(){Kl(i,r)}}var w=i.stateNode;return w!==null&&typeof w.componentDidCatch=="function"&&(d.callback=function(){Kl(i,r),typeof m!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var k=r.stack;this.componentDidCatch(r.value,{componentStack:k!==null?k:""})}),d}function qd(i,r,d){var m=i.pingCache;if(m===null){m=i.pingCache=new tv;var v=new Set;m.set(r,v)}else v=m.get(r),v===void 0&&(v=new Set,m.set(r,v));v.has(d)||(v.add(d),i=mv.bind(null,i,r,d),r.then(i,i))}function Bd(i){do{var r;if((r=i.tag===13)&&(r=i.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return i;i=i.return}while(i!==null);return null}function Vd(i,r,d,m,v){return(i.mode&1)===0?(i===r?i.flags|=65536:(i.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(r=fn(-1,1),r.tag=2,Mn(d,r,1))),d.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var nv=z.ReactCurrentOwner,wt=!1;function pt(i,r,d,m){r.child=i===null?ad(r,null,d,m):Io(r,i.child,d,m)}function zd(i,r,d,m,v){d=d.render;var w=r.ref;return Po(r,v),m=Vl(i,r,d,m,w,v),d=zl(),i!==null&&!wt?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~v,hn(i,r,v)):(He&&d&&Tl(r),r.flags|=1,pt(i,r,m,v),r.child)}function Hd(i,r,d,m,v){if(i===null){var w=d.type;return typeof w=="function"&&!gs(w)&&w.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(r.tag=15,r.type=w,Gd(i,r,w,m,v)):(i=ra(d.type,null,m,r,r.mode,v),i.ref=r.ref,i.return=r,r.child=i)}if(w=i.child,(i.lanes&v)===0){var k=w.memoizedProps;if(d=d.compare,d=d!==null?d:vi,d(k,m)&&i.ref===r.ref)return hn(i,r,v)}return r.flags|=1,i=Un(w,m),i.ref=r.ref,i.return=r,r.child=i}function Gd(i,r,d,m,v){if(i!==null){var w=i.memoizedProps;if(vi(w,m)&&i.ref===r.ref)if(wt=!1,r.pendingProps=m=w,(i.lanes&v)!==0)(i.flags&131072)!==0&&(wt=!0);else return r.lanes=i.lanes,hn(i,r,v)}return Ql(i,r,d,m,v)}function Wd(i,r,d){var m=r.pendingProps,v=m.children,w=i!==null?i.memoizedState:null;if(m.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(No,_t),_t|=d;else{if((d&1073741824)===0)return i=w!==null?w.baseLanes|d:d,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:i,cachePool:null,transitions:null},r.updateQueue=null,Ue(No,_t),_t|=i,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=w!==null?w.baseLanes:d,Ue(No,_t),_t|=m}else w!==null?(m=w.baseLanes|d,r.memoizedState=null):m=d,Ue(No,_t),_t|=m;return pt(i,r,v,d),r.child}function $d(i,r){var d=r.ref;(i===null&&d!==null||i!==null&&i.ref!==d)&&(r.flags|=512,r.flags|=2097152)}function Ql(i,r,d,m,v){var w=vt(d)?Jn:at.current;return w=xo(r,w),Po(r,v),d=Vl(i,r,d,m,w,v),m=zl(),i!==null&&!wt?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~v,hn(i,r,v)):(He&&m&&Tl(r),r.flags|=1,pt(i,r,d,v),r.child)}function Jd(i,r,d,m,v){if(vt(d)){var w=!0;Pr(r)}else w=!1;if(Po(r,v),r.stateNode===null)Yr(i,r),Nd(r,d,m),Ol(r,d,m,v),m=!0;else if(i===null){var k=r.stateNode,E=r.memoizedProps;k.props=E;var I=k.context,B=d.contextType;typeof B=="object"&&B!==null?B=Lt(B):(B=vt(d)?Jn:at.current,B=xo(r,B));var $=d.getDerivedStateFromProps,O=typeof $=="function"||typeof k.getSnapshotBeforeUpdate=="function";O||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(E!==m||I!==B)&&Ld(r,k,m,B),Pn=!1;var W=r.memoizedState;k.state=W,Br(r,m,k,v),I=r.memoizedState,E!==m||W!==I||gt.current||Pn?(typeof $=="function"&&(Jl(r,d,$,m),I=r.memoizedState),(E=Pn||Dd(r,d,E,m,W,I,B))?(O||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(r.flags|=4194308)):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=m,r.memoizedState=I),k.props=m,k.state=I,k.context=B,m=E):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),m=!1)}else{k=r.stateNode,sd(i,r),E=r.memoizedProps,B=r.type===r.elementType?E:Wt(r.type,E),k.props=B,O=r.pendingProps,W=k.context,I=d.contextType,typeof I=="object"&&I!==null?I=Lt(I):(I=vt(d)?Jn:at.current,I=xo(r,I));var ie=d.getDerivedStateFromProps;($=typeof ie=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(E!==O||W!==I)&&Ld(r,k,m,I),Pn=!1,W=r.memoizedState,k.state=W,Br(r,m,k,v);var ue=r.memoizedState;E!==O||W!==ue||gt.current||Pn?(typeof ie=="function"&&(Jl(r,d,ie,m),ue=r.memoizedState),(B=Pn||Dd(r,d,B,m,W,ue,I)||!1)?($||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(m,ue,I),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(m,ue,I)),typeof k.componentDidUpdate=="function"&&(r.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof k.componentDidUpdate!="function"||E===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),r.memoizedProps=m,r.memoizedState=ue),k.props=m,k.state=ue,k.context=I,m=B):(typeof k.componentDidUpdate!="function"||E===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),m=!1)}return Xl(i,r,d,m,w,v)}function Xl(i,r,d,m,v,w){$d(i,r);var k=(r.flags&128)!==0;if(!m&&!k)return v&&Xc(r,d,!1),hn(i,r,w);m=r.stateNode,nv.current=r;var E=k&&typeof d.getDerivedStateFromError!="function"?null:m.render();return r.flags|=1,i!==null&&k?(r.child=Io(r,i.child,null,w),r.child=Io(r,null,E,w)):pt(i,r,E,w),r.memoizedState=m.state,v&&Xc(r,d,!0),r.child}function Od(i){var r=i.stateNode;r.pendingContext?Kc(i,r.pendingContext,r.pendingContext!==r.context):r.context&&Kc(i,r.context,!1),Nl(i,r.containerInfo)}function Yd(i,r,d,m,v){return Ao(),Al(v),r.flags|=256,pt(i,r,d,m),r.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function jl(i){return{baseLanes:i,cachePool:null,transitions:null}}function Kd(i,r,d){var m=r.pendingProps,v=Ge.current,w=!1,k=(r.flags&128)!==0,E;if((E=k)||(E=i!==null&&i.memoizedState===null?!1:(v&2)!==0),E?(w=!0,r.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),Ue(Ge,v&1),i===null)return Sl(r),i=r.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((r.mode&1)===0?r.lanes=1:i.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(k=m.children,i=m.fallback,w?(m=r.mode,w=r.child,k={mode:"hidden",children:k},(m&1)===0&&w!==null?(w.childLanes=0,w.pendingProps=k):w=aa(k,m,0,null),i=no(i,m,d,null),w.return=r,i.return=r,w.sibling=i,r.child=w,r.child.memoizedState=jl(d),r.memoizedState=Zl,i):es(r,k));if(v=i.memoizedState,v!==null&&(E=v.dehydrated,E!==null))return ov(i,r,k,m,E,v,d);if(w){w=m.fallback,k=r.mode,v=i.child,E=v.sibling;var I={mode:"hidden",children:m.children};return(k&1)===0&&r.child!==v?(m=r.child,m.childLanes=0,m.pendingProps=I,r.deletions=null):(m=Un(v,I),m.subtreeFlags=v.subtreeFlags&14680064),E!==null?w=Un(E,w):(w=no(w,k,d,null),w.flags|=2),w.return=r,m.return=r,m.sibling=w,r.child=m,m=w,w=r.child,k=i.child.memoizedState,k=k===null?jl(d):{baseLanes:k.baseLanes|d,cachePool:null,transitions:k.transitions},w.memoizedState=k,w.childLanes=i.childLanes&~d,r.memoizedState=Zl,m}return w=i.child,i=w.sibling,m=Un(w,{mode:"visible",children:m.children}),(r.mode&1)===0&&(m.lanes=d),m.return=r,m.sibling=null,i!==null&&(d=r.deletions,d===null?(r.deletions=[i],r.flags|=16):d.push(i)),r.child=m,r.memoizedState=null,m}function es(i,r){return r=aa({mode:"visible",children:r},i.mode,0,null),r.return=i,i.child=r}function Or(i,r,d,m){return m!==null&&Al(m),Io(r,i.child,null,d),i=es(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function ov(i,r,d,m,v,w,k){if(d)return r.flags&256?(r.flags&=-257,m=Yl(Error(n(422))),Or(i,r,k,m)):r.memoizedState!==null?(r.child=i.child,r.flags|=128,null):(w=m.fallback,v=r.mode,m=aa({mode:"visible",children:m.children},v,0,null),w=no(w,v,k,null),w.flags|=2,m.return=r,w.return=r,m.sibling=w,r.child=m,(r.mode&1)!==0&&Io(r,i.child,null,k),r.child.memoizedState=jl(k),r.memoizedState=Zl,w);if((r.mode&1)===0)return Or(i,r,k,null);if(v.data==="$!"){if(m=v.nextSibling&&v.nextSibling.dataset,m)var E=m.dgst;return m=E,w=Error(n(419)),m=Yl(w,m,void 0),Or(i,r,k,m)}if(E=(k&i.childLanes)!==0,wt||E){if(m=et,m!==null){switch(k&-k){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(m.suspendedLanes|k))!==0?0:v,v!==0&&v!==w.retryLane&&(w.retryLane=v,dn(i,v),Ot(m,i,v,-1))}return ys(),m=Yl(Error(n(421))),Or(i,r,k,m)}return v.data==="$?"?(r.flags|=128,r.child=i.child,r=yv.bind(null,i),v._reactRetry=r,null):(i=w.treeContext,It=Sn(v.nextSibling),At=r,He=!0,Gt=null,i!==null&&(Dt[Nt++]=un,Dt[Nt++]=cn,Dt[Nt++]=On,un=i.id,cn=i.overflow,On=r),r=es(r,m.children),r.flags|=4096,r)}function Qd(i,r,d){i.lanes|=r;var m=i.alternate;m!==null&&(m.lanes|=r),Ml(i.return,r,d)}function ts(i,r,d,m,v){var w=i.memoizedState;w===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:m,tail:d,tailMode:v}:(w.isBackwards=r,w.rendering=null,w.renderingStartTime=0,w.last=m,w.tail=d,w.tailMode=v)}function Xd(i,r,d){var m=r.pendingProps,v=m.revealOrder,w=m.tail;if(pt(i,r,m.children,d),m=Ge.current,(m&2)!==0)m=m&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Qd(i,d,r);else if(i.tag===19)Qd(i,d,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}m&=1}if(Ue(Ge,m),(r.mode&1)===0)r.memoizedState=null;else switch(v){case"forwards":for(d=r.child,v=null;d!==null;)i=d.alternate,i!==null&&Vr(i)===null&&(v=d),d=d.sibling;d=v,d===null?(v=r.child,r.child=null):(v=d.sibling,d.sibling=null),ts(r,!1,v,d,w);break;case"backwards":for(d=null,v=r.child,r.child=null;v!==null;){if(i=v.alternate,i!==null&&Vr(i)===null){r.child=v;break}i=v.sibling,v.sibling=d,d=v,v=i}ts(r,!0,d,null,w);break;case"together":ts(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yr(i,r){(r.mode&1)===0&&i!==null&&(i.alternate=null,r.alternate=null,r.flags|=2)}function hn(i,r,d){if(i!==null&&(r.dependencies=i.dependencies),Zn|=r.lanes,(d&r.childLanes)===0)return null;if(i!==null&&r.child!==i.child)throw Error(n(153));if(r.child!==null){for(i=r.child,d=Un(i,i.pendingProps),r.child=d,d.return=r;i.sibling!==null;)i=i.sibling,d=d.sibling=Un(i,i.pendingProps),d.return=r;d.sibling=null}return r.child}function iv(i,r,d){switch(r.tag){case 3:Od(r),Ao();break;case 5:dd(r);break;case 1:vt(r.type)&&Pr(r);break;case 4:Nl(r,r.stateNode.containerInfo);break;case 10:var m=r.type._context,v=r.memoizedProps.value;Ue(Fr,m._currentValue),m._currentValue=v;break;case 13:if(m=r.memoizedState,m!==null)return m.dehydrated!==null?(Ue(Ge,Ge.current&1),r.flags|=128,null):(d&r.child.childLanes)!==0?Kd(i,r,d):(Ue(Ge,Ge.current&1),i=hn(i,r,d),i!==null?i.sibling:null);Ue(Ge,Ge.current&1);break;case 19:if(m=(d&r.childLanes)!==0,(i.flags&128)!==0){if(m)return Xd(i,r,d);r.flags|=128}if(v=r.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Ue(Ge,Ge.current),m)break;return null;case 22:case 23:return r.lanes=0,Wd(i,r,d)}return hn(i,r,d)}var Zd,ns,jd,ef;Zd=function(i,r){for(var d=r.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break;for(;d.sibling===null;){if(d.return===null||d.return===r)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},ns=function(){},jd=function(i,r,d,m){var v=i.memoizedProps;if(v!==m){i=r.stateNode,Qn(jt.current);var w=null;switch(d){case"input":v=jo(i,v),m=jo(i,m),w=[];break;case"select":v=x({},v,{value:void 0}),m=x({},m,{value:void 0}),w=[];break;case"textarea":v=ni(i,v),m=ni(i,m),w=[];break;default:typeof v.onClick!="function"&&typeof m.onClick=="function"&&(i.onclick=Ar)}ot(d,m);var k;d=null;for(B in v)if(!m.hasOwnProperty(B)&&v.hasOwnProperty(B)&&v[B]!=null)if(B==="style"){var E=v[B];for(k in E)E.hasOwnProperty(k)&&(d||(d={}),d[k]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(a.hasOwnProperty(B)?w||(w=[]):(w=w||[]).push(B,null));for(B in m){var I=m[B];if(E=v?.[B],m.hasOwnProperty(B)&&I!==E&&(I!=null||E!=null))if(B==="style")if(E){for(k in E)!E.hasOwnProperty(k)||I&&I.hasOwnProperty(k)||(d||(d={}),d[k]="");for(k in I)I.hasOwnProperty(k)&&E[k]!==I[k]&&(d||(d={}),d[k]=I[k])}else d||(w||(w=[]),w.push(B,d)),d=I;else B==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,E=E?E.__html:void 0,I!=null&&E!==I&&(w=w||[]).push(B,I)):B==="children"?typeof I!="string"&&typeof I!="number"||(w=w||[]).push(B,""+I):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(a.hasOwnProperty(B)?(I!=null&&B==="onScroll"&&Be("scroll",i),w||E===I||(w=[])):(w=w||[]).push(B,I))}d&&(w=w||[]).push("style",d);var B=w;(r.updateQueue=B)&&(r.flags|=4)}},ef=function(i,r,d,m){d!==m&&(r.flags|=4)};function Di(i,r){if(!He)switch(i.tailMode){case"hidden":r=i.tail;for(var d=null;r!==null;)r.alternate!==null&&(d=r),r=r.sibling;d===null?i.tail=null:d.sibling=null;break;case"collapsed":d=i.tail;for(var m=null;d!==null;)d.alternate!==null&&(m=d),d=d.sibling;m===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:m.sibling=null}}function st(i){var r=i.alternate!==null&&i.alternate.child===i.child,d=0,m=0;if(r)for(var v=i.child;v!==null;)d|=v.lanes|v.childLanes,m|=v.subtreeFlags&14680064,m|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)d|=v.lanes|v.childLanes,m|=v.subtreeFlags,m|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=m,i.childLanes=d,r}function rv(i,r,d){var m=r.pendingProps;switch(xl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(r),null;case 1:return vt(r.type)&&_r(),st(r),null;case 3:return m=r.stateNode,Mo(),Ve(gt),Ve(at),Ul(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(i===null||i.child===null)&&(Nr(r)?r.flags|=4:i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Gt!==null&&(hs(Gt),Gt=null))),ns(i,r),st(r),null;case 5:Ll(r);var v=Qn(Ii.current);if(d=r.type,i!==null&&r.stateNode!=null)jd(i,r,d,m,v),i.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!m){if(r.stateNode===null)throw Error(n(166));return st(r),null}if(i=Qn(jt.current),Nr(r)){m=r.stateNode,d=r.type;var w=r.memoizedProps;switch(m[Zt]=r,m[Ti]=w,i=(r.mode&1)!==0,d){case"dialog":Be("cancel",m),Be("close",m);break;case"iframe":case"object":case"embed":Be("load",m);break;case"video":case"audio":for(v=0;v<bi.length;v++)Be(bi[v],m);break;case"source":Be("error",m);break;case"img":case"image":case"link":Be("error",m),Be("load",m);break;case"details":Be("toggle",m);break;case"input":ei(m,w),Be("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!w.multiple},Be("invalid",m);break;case"textarea":or(m,w),Be("invalid",m)}ot(d,w),v=null;for(var k in w)if(w.hasOwnProperty(k)){var E=w[k];k==="children"?typeof E=="string"?m.textContent!==E&&(w.suppressHydrationWarning!==!0&&Sr(m.textContent,E,i),v=["children",E]):typeof E=="number"&&m.textContent!==""+E&&(w.suppressHydrationWarning!==!0&&Sr(m.textContent,E,i),v=["children",""+E]):a.hasOwnProperty(k)&&E!=null&&k==="onScroll"&&Be("scroll",m)}switch(d){case"input":rn(m),nr(m,w,!0);break;case"textarea":rn(m),rr(m);break;case"select":case"option":break;default:typeof w.onClick=="function"&&(m.onclick=Ar)}m=v,r.updateQueue=m,m!==null&&(r.flags|=4)}else{k=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=V(d)),i==="http://www.w3.org/1999/xhtml"?d==="script"?(i=k.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof m.is=="string"?i=k.createElement(d,{is:m.is}):(i=k.createElement(d),d==="select"&&(k=i,m.multiple?k.multiple=!0:m.size&&(k.size=m.size))):i=k.createElementNS(i,d),i[Zt]=r,i[Ti]=m,Zd(i,r,!1,!1),r.stateNode=i;e:{switch(k=Qt(d,m),d){case"dialog":Be("cancel",i),Be("close",i),v=m;break;case"iframe":case"object":case"embed":Be("load",i),v=m;break;case"video":case"audio":for(v=0;v<bi.length;v++)Be(bi[v],i);v=m;break;case"source":Be("error",i),v=m;break;case"img":case"image":case"link":Be("error",i),Be("load",i),v=m;break;case"details":Be("toggle",i),v=m;break;case"input":ei(i,m),v=jo(i,m),Be("invalid",i);break;case"option":v=m;break;case"select":i._wrapperState={wasMultiple:!!m.multiple},v=x({},m,{value:void 0}),Be("invalid",i);break;case"textarea":or(i,m),v=ni(i,m),Be("invalid",i);break;default:v=m}ot(d,v),E=v;for(w in E)if(E.hasOwnProperty(w)){var I=E[w];w==="style"?wn(i,I):w==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&xe(i,I)):w==="children"?typeof I=="string"?(d!=="textarea"||I!=="")&&_e(i,I):typeof I=="number"&&_e(i,""+I):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(a.hasOwnProperty(w)?I!=null&&w==="onScroll"&&Be("scroll",i):I!=null&&D(i,w,I,k))}switch(d){case"input":rn(i),nr(i,m,!1);break;case"textarea":rn(i),rr(i);break;case"option":m.value!=null&&i.setAttribute("value",""+Te(m.value));break;case"select":i.multiple=!!m.multiple,w=m.value,w!=null?vn(i,!!m.multiple,w,!1):m.defaultValue!=null&&vn(i,!!m.multiple,m.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=Ar)}switch(d){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return st(r),null;case 6:if(i&&r.stateNode!=null)ef(i,r,i.memoizedProps,m);else{if(typeof m!="string"&&r.stateNode===null)throw Error(n(166));if(d=Qn(Ii.current),Qn(jt.current),Nr(r)){if(m=r.stateNode,d=r.memoizedProps,m[Zt]=r,(w=m.nodeValue!==d)&&(i=At,i!==null))switch(i.tag){case 3:Sr(m.nodeValue,d,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Sr(m.nodeValue,d,(i.mode&1)!==0)}w&&(r.flags|=4)}else m=(d.nodeType===9?d:d.ownerDocument).createTextNode(m),m[Zt]=r,r.stateNode=m}return st(r),null;case 13:if(Ve(Ge),m=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(He&&It!==null&&(r.mode&1)!==0&&(r.flags&128)===0)od(),Ao(),r.flags|=98560,w=!1;else if(w=Nr(r),m!==null&&m.dehydrated!==null){if(i===null){if(!w)throw Error(n(318));if(w=r.memoizedState,w=w!==null?w.dehydrated:null,!w)throw Error(n(317));w[Zt]=r}else Ao(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;st(r),w=!1}else Gt!==null&&(hs(Gt),Gt=null),w=!0;if(!w)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=d,r):(m=m!==null,m!==(i!==null&&i.memoizedState!==null)&&m&&(r.child.flags|=8192,(r.mode&1)!==0&&(i===null||(Ge.current&1)!==0?Ze===0&&(Ze=3):ys())),r.updateQueue!==null&&(r.flags|=4),st(r),null);case 4:return Mo(),ns(i,r),i===null&&Ci(r.stateNode.containerInfo),st(r),null;case 10:return Pl(r.type._context),st(r),null;case 17:return vt(r.type)&&_r(),st(r),null;case 19:if(Ve(Ge),w=r.memoizedState,w===null)return st(r),null;if(m=(r.flags&128)!==0,k=w.rendering,k===null)if(m)Di(w,!1);else{if(Ze!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(k=Vr(i),k!==null){for(r.flags|=128,Di(w,!1),m=k.updateQueue,m!==null&&(r.updateQueue=m,r.flags|=4),r.subtreeFlags=0,m=d,d=r.child;d!==null;)w=d,i=m,w.flags&=14680066,k=w.alternate,k===null?(w.childLanes=0,w.lanes=i,w.child=null,w.subtreeFlags=0,w.memoizedProps=null,w.memoizedState=null,w.updateQueue=null,w.dependencies=null,w.stateNode=null):(w.childLanes=k.childLanes,w.lanes=k.lanes,w.child=k.child,w.subtreeFlags=0,w.deletions=null,w.memoizedProps=k.memoizedProps,w.memoizedState=k.memoizedState,w.updateQueue=k.updateQueue,w.type=k.type,i=k.dependencies,w.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),d=d.sibling;return Ue(Ge,Ge.current&1|2),r.child}i=i.sibling}w.tail!==null&&Je()>Lo&&(r.flags|=128,m=!0,Di(w,!1),r.lanes=4194304)}else{if(!m)if(i=Vr(k),i!==null){if(r.flags|=128,m=!0,d=i.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),Di(w,!0),w.tail===null&&w.tailMode==="hidden"&&!k.alternate&&!He)return st(r),null}else 2*Je()-w.renderingStartTime>Lo&&d!==1073741824&&(r.flags|=128,m=!0,Di(w,!1),r.lanes=4194304);w.isBackwards?(k.sibling=r.child,r.child=k):(d=w.last,d!==null?d.sibling=k:r.child=k,w.last=k)}return w.tail!==null?(r=w.tail,w.rendering=r,w.tail=r.sibling,w.renderingStartTime=Je(),r.sibling=null,d=Ge.current,Ue(Ge,m?d&1|2:d&1),r):(st(r),null);case 22:case 23:return ms(),m=r.memoizedState!==null,i!==null&&i.memoizedState!==null!==m&&(r.flags|=8192),m&&(r.mode&1)!==0?(_t&1073741824)!==0&&(st(r),r.subtreeFlags&6&&(r.flags|=8192)):st(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function av(i,r){switch(xl(r),r.tag){case 1:return vt(r.type)&&_r(),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Mo(),Ve(gt),Ve(at),Ul(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 5:return Ll(r),null;case 13:if(Ve(Ge),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ao()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return Ve(Ge),null;case 4:return Mo(),null;case 10:return Pl(r.type._context),null;case 22:case 23:return ms(),null;case 24:return null;default:return null}}var Kr=!1,ut=!1,lv=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Do(i,r){var d=i.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(m){$e(i,r,m)}else d.current=null}function os(i,r,d){try{d()}catch(m){$e(i,r,m)}}var tf=!1;function sv(i,r){if(ml=mr,i=Dc(),ll(i)){if("selectionStart"in i)var d={start:i.selectionStart,end:i.selectionEnd};else e:{d=(d=i.ownerDocument)&&d.defaultView||window;var m=d.getSelection&&d.getSelection();if(m&&m.rangeCount!==0){d=m.anchorNode;var v=m.anchorOffset,w=m.focusNode;m=m.focusOffset;try{d.nodeType,w.nodeType}catch{d=null;break e}var k=0,E=-1,I=-1,B=0,$=0,O=i,W=null;t:for(;;){for(var ie;O!==d||v!==0&&O.nodeType!==3||(E=k+v),O!==w||m!==0&&O.nodeType!==3||(I=k+m),O.nodeType===3&&(k+=O.nodeValue.length),(ie=O.firstChild)!==null;)W=O,O=ie;for(;;){if(O===i)break t;if(W===d&&++B===v&&(E=k),W===w&&++$===m&&(I=k),(ie=O.nextSibling)!==null)break;O=W,W=O.parentNode}O=ie}d=E===-1||I===-1?null:{start:E,end:I}}else d=null}d=d||{start:0,end:0}}else d=null;for(yl={focusedElem:i,selectionRange:d},mr=!1,ae=r;ae!==null;)if(r=ae,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,ae=i;else for(;ae!==null;){r=ae;try{var ue=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,Oe=ue.memoizedState,F=r.stateNode,P=F.getSnapshotBeforeUpdate(r.elementType===r.type?ce:Wt(r.type,ce),Oe);F.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var q=r.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(X){$e(r,r.return,X)}if(i=r.sibling,i!==null){i.return=r.return,ae=i;break}ae=r.return}return ue=tf,tf=!1,ue}function Ni(i,r,d){var m=r.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var v=m=m.next;do{if((v.tag&i)===i){var w=v.destroy;v.destroy=void 0,w!==void 0&&os(r,d,w)}v=v.next}while(v!==m)}}function Qr(i,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var d=r=r.next;do{if((d.tag&i)===i){var m=d.create;d.destroy=m()}d=d.next}while(d!==r)}}function is(i){var r=i.ref;if(r!==null){var d=i.stateNode;switch(i.tag){case 5:i=d;break;default:i=d}typeof r=="function"?r(i):r.current=i}}function nf(i){var r=i.alternate;r!==null&&(i.alternate=null,nf(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&(delete r[Zt],delete r[Ti],delete r[bl],delete r[Wg],delete r[$g])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function of(i){return i.tag===5||i.tag===3||i.tag===4}function rf(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||of(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function rs(i,r,d){var m=i.tag;if(m===5||m===6)i=i.stateNode,r?d.nodeType===8?d.parentNode.insertBefore(i,r):d.insertBefore(i,r):(d.nodeType===8?(r=d.parentNode,r.insertBefore(i,d)):(r=d,r.appendChild(i)),d=d._reactRootContainer,d!=null||r.onclick!==null||(r.onclick=Ar));else if(m!==4&&(i=i.child,i!==null))for(rs(i,r,d),i=i.sibling;i!==null;)rs(i,r,d),i=i.sibling}function as(i,r,d){var m=i.tag;if(m===5||m===6)i=i.stateNode,r?d.insertBefore(i,r):d.appendChild(i);else if(m!==4&&(i=i.child,i!==null))for(as(i,r,d),i=i.sibling;i!==null;)as(i,r,d),i=i.sibling}var it=null,$t=!1;function Rn(i,r,d){for(d=d.child;d!==null;)af(i,r,d),d=d.sibling}function af(i,r,d){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(ur,d)}catch{}switch(d.tag){case 5:ut||Do(d,r);case 6:var m=it,v=$t;it=null,Rn(i,r,d),it=m,$t=v,it!==null&&($t?(i=it,d=d.stateNode,i.nodeType===8?i.parentNode.removeChild(d):i.removeChild(d)):it.removeChild(d.stateNode));break;case 18:it!==null&&($t?(i=it,d=d.stateNode,i.nodeType===8?wl(i.parentNode,d):i.nodeType===1&&wl(i,d),fi(i)):wl(it,d.stateNode));break;case 4:m=it,v=$t,it=d.stateNode.containerInfo,$t=!0,Rn(i,r,d),it=m,$t=v;break;case 0:case 11:case 14:case 15:if(!ut&&(m=d.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){v=m=m.next;do{var w=v,k=w.destroy;w=w.tag,k!==void 0&&((w&2)!==0||(w&4)!==0)&&os(d,r,k),v=v.next}while(v!==m)}Rn(i,r,d);break;case 1:if(!ut&&(Do(d,r),m=d.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=d.memoizedProps,m.state=d.memoizedState,m.componentWillUnmount()}catch(E){$e(d,r,E)}Rn(i,r,d);break;case 21:Rn(i,r,d);break;case 22:d.mode&1?(ut=(m=ut)||d.memoizedState!==null,Rn(i,r,d),ut=m):Rn(i,r,d);break;default:Rn(i,r,d)}}function lf(i){var r=i.updateQueue;if(r!==null){i.updateQueue=null;var d=i.stateNode;d===null&&(d=i.stateNode=new lv),r.forEach(function(m){var v=gv.bind(null,i,m);d.has(m)||(d.add(m),m.then(v,v))})}}function Jt(i,r){var d=r.deletions;if(d!==null)for(var m=0;m<d.length;m++){var v=d[m];try{var w=i,k=r,E=k;e:for(;E!==null;){switch(E.tag){case 5:it=E.stateNode,$t=!1;break e;case 3:it=E.stateNode.containerInfo,$t=!0;break e;case 4:it=E.stateNode.containerInfo,$t=!0;break e}E=E.return}if(it===null)throw Error(n(160));af(w,k,v),it=null,$t=!1;var I=v.alternate;I!==null&&(I.return=null),v.return=null}catch(B){$e(v,r,B)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)sf(r,i),r=r.sibling}function sf(i,r){var d=i.alternate,m=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Jt(r,i),tn(i),m&4){try{Ni(3,i,i.return),Qr(3,i)}catch(ce){$e(i,i.return,ce)}try{Ni(5,i,i.return)}catch(ce){$e(i,i.return,ce)}}break;case 1:Jt(r,i),tn(i),m&512&&d!==null&&Do(d,d.return);break;case 5:if(Jt(r,i),tn(i),m&512&&d!==null&&Do(d,d.return),i.flags&32){var v=i.stateNode;try{_e(v,"")}catch(ce){$e(i,i.return,ce)}}if(m&4&&(v=i.stateNode,v!=null)){var w=i.memoizedProps,k=d!==null?d.memoizedProps:w,E=i.type,I=i.updateQueue;if(i.updateQueue=null,I!==null)try{E==="input"&&w.type==="radio"&&w.name!=null&&ti(v,w),Qt(E,k);var B=Qt(E,w);for(k=0;k<I.length;k+=2){var $=I[k],O=I[k+1];$==="style"?wn(v,O):$==="dangerouslySetInnerHTML"?xe(v,O):$==="children"?_e(v,O):D(v,$,O,B)}switch(E){case"input":co(v,w);break;case"textarea":ir(v,w);break;case"select":var W=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!w.multiple;var ie=w.value;ie!=null?vn(v,!!w.multiple,ie,!1):W!==!!w.multiple&&(w.defaultValue!=null?vn(v,!!w.multiple,w.defaultValue,!0):vn(v,!!w.multiple,w.multiple?[]:"",!1))}v[Ti]=w}catch(ce){$e(i,i.return,ce)}}break;case 6:if(Jt(r,i),tn(i),m&4){if(i.stateNode===null)throw Error(n(162));v=i.stateNode,w=i.memoizedProps;try{v.nodeValue=w}catch(ce){$e(i,i.return,ce)}}break;case 3:if(Jt(r,i),tn(i),m&4&&d!==null&&d.memoizedState.isDehydrated)try{fi(r.containerInfo)}catch(ce){$e(i,i.return,ce)}break;case 4:Jt(r,i),tn(i);break;case 13:Jt(r,i),tn(i),v=i.child,v.flags&8192&&(w=v.memoizedState!==null,v.stateNode.isHidden=w,!w||v.alternate!==null&&v.alternate.memoizedState!==null||(us=Je())),m&4&&lf(i);break;case 22:if($=d!==null&&d.memoizedState!==null,i.mode&1?(ut=(B=ut)||$,Jt(r,i),ut=B):Jt(r,i),tn(i),m&8192){if(B=i.memoizedState!==null,(i.stateNode.isHidden=B)&&!$&&(i.mode&1)!==0)for(ae=i,$=i.child;$!==null;){for(O=ae=$;ae!==null;){switch(W=ae,ie=W.child,W.tag){case 0:case 11:case 14:case 15:Ni(4,W,W.return);break;case 1:Do(W,W.return);var ue=W.stateNode;if(typeof ue.componentWillUnmount=="function"){m=W,d=W.return;try{r=m,ue.props=r.memoizedProps,ue.state=r.memoizedState,ue.componentWillUnmount()}catch(ce){$e(m,d,ce)}}break;case 5:Do(W,W.return);break;case 22:if(W.memoizedState!==null){df(O);continue}}ie!==null?(ie.return=W,ae=ie):df(O)}$=$.sibling}e:for($=null,O=i;;){if(O.tag===5){if($===null){$=O;try{v=O.stateNode,B?(w=v.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none"):(E=O.stateNode,I=O.memoizedProps.style,k=I!=null&&I.hasOwnProperty("display")?I.display:null,E.style.display=Rt("display",k))}catch(ce){$e(i,i.return,ce)}}}else if(O.tag===6){if($===null)try{O.stateNode.nodeValue=B?"":O.memoizedProps}catch(ce){$e(i,i.return,ce)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===i)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===i)break e;for(;O.sibling===null;){if(O.return===null||O.return===i)break e;$===O&&($=null),O=O.return}$===O&&($=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Jt(r,i),tn(i),m&4&&lf(i);break;case 21:break;default:Jt(r,i),tn(i)}}function tn(i){var r=i.flags;if(r&2){try{e:{for(var d=i.return;d!==null;){if(of(d)){var m=d;break e}d=d.return}throw Error(n(160))}switch(m.tag){case 5:var v=m.stateNode;m.flags&32&&(_e(v,""),m.flags&=-33);var w=rf(i);as(i,w,v);break;case 3:case 4:var k=m.stateNode.containerInfo,E=rf(i);rs(i,E,k);break;default:throw Error(n(161))}}catch(I){$e(i,i.return,I)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function uv(i,r,d){ae=i,uf(i)}function uf(i,r,d){for(var m=(i.mode&1)!==0;ae!==null;){var v=ae,w=v.child;if(v.tag===22&&m){var k=v.memoizedState!==null||Kr;if(!k){var E=v.alternate,I=E!==null&&E.memoizedState!==null||ut;E=Kr;var B=ut;if(Kr=k,(ut=I)&&!B)for(ae=v;ae!==null;)k=ae,I=k.child,k.tag===22&&k.memoizedState!==null?ff(v):I!==null?(I.return=k,ae=I):ff(v);for(;w!==null;)ae=w,uf(w),w=w.sibling;ae=v,Kr=E,ut=B}cf(i)}else(v.subtreeFlags&8772)!==0&&w!==null?(w.return=v,ae=w):cf(i)}}function cf(i){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var d=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:ut||Qr(5,r);break;case 1:var m=r.stateNode;if(r.flags&4&&!ut)if(d===null)m.componentDidMount();else{var v=r.elementType===r.type?d.memoizedProps:Wt(r.type,d.memoizedProps);m.componentDidUpdate(v,d.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var w=r.updateQueue;w!==null&&cd(r,w,m);break;case 3:var k=r.updateQueue;if(k!==null){if(d=null,r.child!==null)switch(r.child.tag){case 5:d=r.child.stateNode;break;case 1:d=r.child.stateNode}cd(r,k,d)}break;case 5:var E=r.stateNode;if(d===null&&r.flags&4){d=E;var I=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&d.focus();break;case"img":I.src&&(d.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var B=r.alternate;if(B!==null){var $=B.memoizedState;if($!==null){var O=$.dehydrated;O!==null&&fi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ut||r.flags&512&&is(r)}catch(W){$e(r,r.return,W)}}if(r===i){ae=null;break}if(d=r.sibling,d!==null){d.return=r.return,ae=d;break}ae=r.return}}function df(i){for(;ae!==null;){var r=ae;if(r===i){ae=null;break}var d=r.sibling;if(d!==null){d.return=r.return,ae=d;break}ae=r.return}}function ff(i){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var d=r.return;try{Qr(4,r)}catch(I){$e(r,d,I)}break;case 1:var m=r.stateNode;if(typeof m.componentDidMount=="function"){var v=r.return;try{m.componentDidMount()}catch(I){$e(r,v,I)}}var w=r.return;try{is(r)}catch(I){$e(r,w,I)}break;case 5:var k=r.return;try{is(r)}catch(I){$e(r,k,I)}}}catch(I){$e(r,r.return,I)}if(r===i){ae=null;break}var E=r.sibling;if(E!==null){E.return=r.return,ae=E;break}ae=r.return}}var cv=Math.ceil,Xr=z.ReactCurrentDispatcher,ls=z.ReactCurrentOwner,Ut=z.ReactCurrentBatchConfig,Pe=0,et=null,Ke=null,rt=0,_t=0,No=An(0),Ze=0,Li=null,Zn=0,Zr=0,ss=0,Fi=null,bt=null,us=0,Lo=1/0,pn=null,jr=!1,cs=null,Dn=null,ea=!1,Nn=null,ta=0,Ui=0,ds=null,na=-1,oa=0;function mt(){return(Pe&6)!==0?Je():na!==-1?na:na=Je()}function Ln(i){return(i.mode&1)===0?1:(Pe&2)!==0&&rt!==0?rt&-rt:Og.transition!==null?(oa===0&&(oa=ic()),oa):(i=Le,i!==0||(i=window.event,i=i===void 0?16:hc(i.type)),i)}function Ot(i,r,d,m){if(50<Ui)throw Ui=0,ds=null,Error(n(185));li(i,d,m),((Pe&2)===0||i!==et)&&(i===et&&((Pe&2)===0&&(Zr|=d),Ze===4&&Fn(i,rt)),Ct(i,m),d===1&&Pe===0&&(r.mode&1)===0&&(Lo=Je()+500,Mr&&_n()))}function Ct(i,r){var d=i.callbackNode;Oy(i,r);var m=fr(i,i===et?rt:0);if(m===0)d!==null&&tc(d),i.callbackNode=null,i.callbackPriority=0;else if(r=m&-m,i.callbackPriority!==r){if(d!=null&&tc(d),r===1)i.tag===0?Jg(pf.bind(null,i)):Zc(pf.bind(null,i)),Hg(function(){(Pe&6)===0&&_n()}),d=null;else{switch(rc(m)){case 1:d=Wa;break;case 4:d=nc;break;case 16:d=sr;break;case 536870912:d=oc;break;default:d=sr}d=kf(d,hf.bind(null,i))}i.callbackPriority=r,i.callbackNode=d}}function hf(i,r){if(na=-1,oa=0,(Pe&6)!==0)throw Error(n(327));var d=i.callbackNode;if(Fo()&&i.callbackNode!==d)return null;var m=fr(i,i===et?rt:0);if(m===0)return null;if((m&30)!==0||(m&i.expiredLanes)!==0||r)r=ia(i,m);else{r=m;var v=Pe;Pe|=2;var w=yf();(et!==i||rt!==r)&&(pn=null,Lo=Je()+500,eo(i,r));do try{hv();break}catch(E){mf(i,E)}while(!0);_l(),Xr.current=w,Pe=v,Ke!==null?r=0:(et=null,rt=0,r=Ze)}if(r!==0){if(r===2&&(v=$a(i),v!==0&&(m=v,r=fs(i,v))),r===1)throw d=Li,eo(i,0),Fn(i,m),Ct(i,Je()),d;if(r===6)Fn(i,m);else{if(v=i.current.alternate,(m&30)===0&&!dv(v)&&(r=ia(i,m),r===2&&(w=$a(i),w!==0&&(m=w,r=fs(i,w))),r===1))throw d=Li,eo(i,0),Fn(i,m),Ct(i,Je()),d;switch(i.finishedWork=v,i.finishedLanes=m,r){case 0:case 1:throw Error(n(345));case 2:to(i,bt,pn);break;case 3:if(Fn(i,m),(m&130023424)===m&&(r=us+500-Je(),10<r)){if(fr(i,0)!==0)break;if(v=i.suspendedLanes,(v&m)!==m){mt(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=vl(to.bind(null,i,bt,pn),r);break}to(i,bt,pn);break;case 4:if(Fn(i,m),(m&4194240)===m)break;for(r=i.eventTimes,v=-1;0<m;){var k=31-zt(m);w=1<<k,k=r[k],k>v&&(v=k),m&=~w}if(m=v,m=Je()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*cv(m/1960))-m,10<m){i.timeoutHandle=vl(to.bind(null,i,bt,pn),m);break}to(i,bt,pn);break;case 5:to(i,bt,pn);break;default:throw Error(n(329))}}}return Ct(i,Je()),i.callbackNode===d?hf.bind(null,i):null}function fs(i,r){var d=Fi;return i.current.memoizedState.isDehydrated&&(eo(i,r).flags|=256),i=ia(i,r),i!==2&&(r=bt,bt=d,r!==null&&hs(r)),i}function hs(i){bt===null?bt=i:bt.push.apply(bt,i)}function dv(i){for(var r=i;;){if(r.flags&16384){var d=r.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var m=0;m<d.length;m++){var v=d[m],w=v.getSnapshot;v=v.value;try{if(!Ht(w(),v))return!1}catch{return!1}}}if(d=r.child,r.subtreeFlags&16384&&d!==null)d.return=r,r=d;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Fn(i,r){for(r&=~ss,r&=~Zr,i.suspendedLanes|=r,i.pingedLanes&=~r,i=i.expirationTimes;0<r;){var d=31-zt(r),m=1<<d;i[d]=-1,r&=~m}}function pf(i){if((Pe&6)!==0)throw Error(n(327));Fo();var r=fr(i,0);if((r&1)===0)return Ct(i,Je()),null;var d=ia(i,r);if(i.tag!==0&&d===2){var m=$a(i);m!==0&&(r=m,d=fs(i,m))}if(d===1)throw d=Li,eo(i,0),Fn(i,r),Ct(i,Je()),d;if(d===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=r,to(i,bt,pn),Ct(i,Je()),null}function ps(i,r){var d=Pe;Pe|=1;try{return i(r)}finally{Pe=d,Pe===0&&(Lo=Je()+500,Mr&&_n())}}function jn(i){Nn!==null&&Nn.tag===0&&(Pe&6)===0&&Fo();var r=Pe;Pe|=1;var d=Ut.transition,m=Le;try{if(Ut.transition=null,Le=1,i)return i()}finally{Le=m,Ut.transition=d,Pe=r,(Pe&6)===0&&_n()}}function ms(){_t=No.current,Ve(No)}function eo(i,r){i.finishedWork=null,i.finishedLanes=0;var d=i.timeoutHandle;if(d!==-1&&(i.timeoutHandle=-1,zg(d)),Ke!==null)for(d=Ke.return;d!==null;){var m=d;switch(xl(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&_r();break;case 3:Mo(),Ve(gt),Ve(at),Ul();break;case 5:Ll(m);break;case 4:Mo();break;case 13:Ve(Ge);break;case 19:Ve(Ge);break;case 10:Pl(m.type._context);break;case 22:case 23:ms()}d=d.return}if(et=i,Ke=i=Un(i.current,null),rt=_t=r,Ze=0,Li=null,ss=Zr=Zn=0,bt=Fi=null,Kn!==null){for(r=0;r<Kn.length;r++)if(d=Kn[r],m=d.interleaved,m!==null){d.interleaved=null;var v=m.next,w=d.pending;if(w!==null){var k=w.next;w.next=v,m.next=k}d.pending=m}Kn=null}return i}function mf(i,r){do{var d=Ke;try{if(_l(),zr.current=$r,Hr){for(var m=We.memoizedState;m!==null;){var v=m.queue;v!==null&&(v.pending=null),m=m.next}Hr=!1}if(Xn=0,je=Xe=We=null,_i=!1,Pi=0,ls.current=null,d===null||d.return===null){Ze=1,Li=r,Ke=null;break}e:{var w=i,k=d.return,E=d,I=r;if(r=rt,E.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var B=I,$=E,O=$.tag;if(($.mode&1)===0&&(O===0||O===11||O===15)){var W=$.alternate;W?($.updateQueue=W.updateQueue,$.memoizedState=W.memoizedState,$.lanes=W.lanes):($.updateQueue=null,$.memoizedState=null)}var ie=Bd(k);if(ie!==null){ie.flags&=-257,Vd(ie,k,E,w,r),ie.mode&1&&qd(w,B,r),r=ie,I=B;var ue=r.updateQueue;if(ue===null){var ce=new Set;ce.add(I),r.updateQueue=ce}else ue.add(I);break e}else{if((r&1)===0){qd(w,B,r),ys();break e}I=Error(n(426))}}else if(He&&E.mode&1){var Oe=Bd(k);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Vd(Oe,k,E,w,r),Al(Ro(I,E));break e}}w=I=Ro(I,E),Ze!==4&&(Ze=2),Fi===null?Fi=[w]:Fi.push(w),w=k;do{switch(w.tag){case 3:w.flags|=65536,r&=-r,w.lanes|=r;var F=Fd(w,I,r);ud(w,F);break e;case 1:E=I;var P=w.type,q=w.stateNode;if((w.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Dn===null||!Dn.has(q)))){w.flags|=65536,r&=-r,w.lanes|=r;var X=Ud(w,E,r);ud(w,X);break e}}w=w.return}while(w!==null)}vf(d)}catch(de){r=de,Ke===d&&d!==null&&(Ke=d=d.return);continue}break}while(!0)}function yf(){var i=Xr.current;return Xr.current=$r,i===null?$r:i}function ys(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),et===null||(Zn&268435455)===0&&(Zr&268435455)===0||Fn(et,rt)}function ia(i,r){var d=Pe;Pe|=2;var m=yf();(et!==i||rt!==r)&&(pn=null,eo(i,r));do try{fv();break}catch(v){mf(i,v)}while(!0);if(_l(),Pe=d,Xr.current=m,Ke!==null)throw Error(n(261));return et=null,rt=0,Ze}function fv(){for(;Ke!==null;)gf(Ke)}function hv(){for(;Ke!==null&&!qy();)gf(Ke)}function gf(i){var r=Cf(i.alternate,i,_t);i.memoizedProps=i.pendingProps,r===null?vf(i):Ke=r,ls.current=null}function vf(i){var r=i;do{var d=r.alternate;if(i=r.return,(r.flags&32768)===0){if(d=rv(d,r,_t),d!==null){Ke=d;return}}else{if(d=av(d,r),d!==null){d.flags&=32767,Ke=d;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ze=6,Ke=null;return}}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=i}while(r!==null);Ze===0&&(Ze=5)}function to(i,r,d){var m=Le,v=Ut.transition;try{Ut.transition=null,Le=1,pv(i,r,d,m)}finally{Ut.transition=v,Le=m}return null}function pv(i,r,d,m){do Fo();while(Nn!==null);if((Pe&6)!==0)throw Error(n(327));d=i.finishedWork;var v=i.finishedLanes;if(d===null)return null;if(i.finishedWork=null,i.finishedLanes=0,d===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var w=d.lanes|d.childLanes;if(Yy(i,w),i===et&&(Ke=et=null,rt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||ea||(ea=!0,kf(sr,function(){return Fo(),null})),w=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||w){w=Ut.transition,Ut.transition=null;var k=Le;Le=1;var E=Pe;Pe|=4,ls.current=null,sv(i,d),sf(d,i),Ng(yl),mr=!!ml,yl=ml=null,i.current=d,uv(d),By(),Pe=E,Le=k,Ut.transition=w}else i.current=d;if(ea&&(ea=!1,Nn=i,ta=v),w=i.pendingLanes,w===0&&(Dn=null),Hy(d.stateNode),Ct(i,Je()),r!==null)for(m=i.onRecoverableError,d=0;d<r.length;d++)v=r[d],m(v.value,{componentStack:v.stack,digest:v.digest});if(jr)throw jr=!1,i=cs,cs=null,i;return(ta&1)!==0&&i.tag!==0&&Fo(),w=i.pendingLanes,(w&1)!==0?i===ds?Ui++:(Ui=0,ds=i):Ui=0,_n(),null}function Fo(){if(Nn!==null){var i=rc(ta),r=Ut.transition,d=Le;try{if(Ut.transition=null,Le=16>i?16:i,Nn===null)var m=!1;else{if(i=Nn,Nn=null,ta=0,(Pe&6)!==0)throw Error(n(331));var v=Pe;for(Pe|=4,ae=i.current;ae!==null;){var w=ae,k=w.child;if((ae.flags&16)!==0){var E=w.deletions;if(E!==null){for(var I=0;I<E.length;I++){var B=E[I];for(ae=B;ae!==null;){var $=ae;switch($.tag){case 0:case 11:case 15:Ni(8,$,w)}var O=$.child;if(O!==null)O.return=$,ae=O;else for(;ae!==null;){$=ae;var W=$.sibling,ie=$.return;if(nf($),$===B){ae=null;break}if(W!==null){W.return=ie,ae=W;break}ae=ie}}}var ue=w.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var Oe=ce.sibling;ce.sibling=null,ce=Oe}while(ce!==null)}}ae=w}}if((w.subtreeFlags&2064)!==0&&k!==null)k.return=w,ae=k;else e:for(;ae!==null;){if(w=ae,(w.flags&2048)!==0)switch(w.tag){case 0:case 11:case 15:Ni(9,w,w.return)}var F=w.sibling;if(F!==null){F.return=w.return,ae=F;break e}ae=w.return}}var P=i.current;for(ae=P;ae!==null;){k=ae;var q=k.child;if((k.subtreeFlags&2064)!==0&&q!==null)q.return=k,ae=q;else e:for(k=P;ae!==null;){if(E=ae,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:Qr(9,E)}}catch(de){$e(E,E.return,de)}if(E===k){ae=null;break e}var X=E.sibling;if(X!==null){X.return=E.return,ae=X;break e}ae=E.return}}if(Pe=v,_n(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(ur,i)}catch{}m=!0}return m}finally{Le=d,Ut.transition=r}}return!1}function wf(i,r,d){r=Ro(d,r),r=Fd(i,r,1),i=Mn(i,r,1),r=mt(),i!==null&&(li(i,1,r),Ct(i,r))}function $e(i,r,d){if(i.tag===3)wf(i,i,d);else for(;r!==null;){if(r.tag===3){wf(r,i,d);break}else if(r.tag===1){var m=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(Dn===null||!Dn.has(m))){i=Ro(d,i),i=Ud(r,i,1),r=Mn(r,i,1),i=mt(),r!==null&&(li(r,1,i),Ct(r,i));break}}r=r.return}}function mv(i,r,d){var m=i.pingCache;m!==null&&m.delete(r),r=mt(),i.pingedLanes|=i.suspendedLanes&d,et===i&&(rt&d)===d&&(Ze===4||Ze===3&&(rt&130023424)===rt&&500>Je()-us?eo(i,0):ss|=d),Ct(i,r)}function bf(i,r){r===0&&((i.mode&1)===0?r=1:(r=dr,dr<<=1,(dr&130023424)===0&&(dr=4194304)));var d=mt();i=dn(i,r),i!==null&&(li(i,r,d),Ct(i,d))}function yv(i){var r=i.memoizedState,d=0;r!==null&&(d=r.retryLane),bf(i,d)}function gv(i,r){var d=0;switch(i.tag){case 13:var m=i.stateNode,v=i.memoizedState;v!==null&&(d=v.retryLane);break;case 19:m=i.stateNode;break;default:throw Error(n(314))}m!==null&&m.delete(r),bf(i,d)}var Cf;Cf=function(i,r,d){if(i!==null)if(i.memoizedProps!==r.pendingProps||gt.current)wt=!0;else{if((i.lanes&d)===0&&(r.flags&128)===0)return wt=!1,iv(i,r,d);wt=(i.flags&131072)!==0}else wt=!1,He&&(r.flags&1048576)!==0&&jc(r,Dr,r.index);switch(r.lanes=0,r.tag){case 2:var m=r.type;Yr(i,r),i=r.pendingProps;var v=xo(r,at.current);Po(r,d),v=Vl(null,r,m,i,v,d);var w=zl();return r.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,vt(m)?(w=!0,Pr(r)):w=!1,r.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Dl(r),v.updater=Jr,r.stateNode=v,v._reactInternals=r,Ol(r,m,i,d),r=Xl(null,r,m,!0,w,d)):(r.tag=0,He&&w&&Tl(r),pt(null,r,v,d),r=r.child),r;case 16:m=r.elementType;e:{switch(Yr(i,r),i=r.pendingProps,v=m._init,m=v(m._payload),r.type=m,v=r.tag=wv(m),i=Wt(m,i),v){case 0:r=Ql(null,r,m,i,d);break e;case 1:r=Jd(null,r,m,i,d);break e;case 11:r=zd(null,r,m,i,d);break e;case 14:r=Hd(null,r,m,Wt(m.type,i),d);break e}throw Error(n(306,m,""))}return r;case 0:return m=r.type,v=r.pendingProps,v=r.elementType===m?v:Wt(m,v),Ql(i,r,m,v,d);case 1:return m=r.type,v=r.pendingProps,v=r.elementType===m?v:Wt(m,v),Jd(i,r,m,v,d);case 3:e:{if(Od(r),i===null)throw Error(n(387));m=r.pendingProps,w=r.memoizedState,v=w.element,sd(i,r),Br(r,m,null,d);var k=r.memoizedState;if(m=k.element,w.isDehydrated)if(w={element:m,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},r.updateQueue.baseState=w,r.memoizedState=w,r.flags&256){v=Ro(Error(n(423)),r),r=Yd(i,r,m,d,v);break e}else if(m!==v){v=Ro(Error(n(424)),r),r=Yd(i,r,m,d,v);break e}else for(It=Sn(r.stateNode.containerInfo.firstChild),At=r,He=!0,Gt=null,d=ad(r,null,m,d),r.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Ao(),m===v){r=hn(i,r,d);break e}pt(i,r,m,d)}r=r.child}return r;case 5:return dd(r),i===null&&Sl(r),m=r.type,v=r.pendingProps,w=i!==null?i.memoizedProps:null,k=v.children,gl(m,v)?k=null:w!==null&&gl(m,w)&&(r.flags|=32),$d(i,r),pt(i,r,k,d),r.child;case 6:return i===null&&Sl(r),null;case 13:return Kd(i,r,d);case 4:return Nl(r,r.stateNode.containerInfo),m=r.pendingProps,i===null?r.child=Io(r,null,m,d):pt(i,r,m,d),r.child;case 11:return m=r.type,v=r.pendingProps,v=r.elementType===m?v:Wt(m,v),zd(i,r,m,v,d);case 7:return pt(i,r,r.pendingProps,d),r.child;case 8:return pt(i,r,r.pendingProps.children,d),r.child;case 12:return pt(i,r,r.pendingProps.children,d),r.child;case 10:e:{if(m=r.type._context,v=r.pendingProps,w=r.memoizedProps,k=v.value,Ue(Fr,m._currentValue),m._currentValue=k,w!==null)if(Ht(w.value,k)){if(w.children===v.children&&!gt.current){r=hn(i,r,d);break e}}else for(w=r.child,w!==null&&(w.return=r);w!==null;){var E=w.dependencies;if(E!==null){k=w.child;for(var I=E.firstContext;I!==null;){if(I.context===m){if(w.tag===1){I=fn(-1,d&-d),I.tag=2;var B=w.updateQueue;if(B!==null){B=B.shared;var $=B.pending;$===null?I.next=I:(I.next=$.next,$.next=I),B.pending=I}}w.lanes|=d,I=w.alternate,I!==null&&(I.lanes|=d),Ml(w.return,d,r),E.lanes|=d;break}I=I.next}}else if(w.tag===10)k=w.type===r.type?null:w.child;else if(w.tag===18){if(k=w.return,k===null)throw Error(n(341));k.lanes|=d,E=k.alternate,E!==null&&(E.lanes|=d),Ml(k,d,r),k=w.sibling}else k=w.child;if(k!==null)k.return=w;else for(k=w;k!==null;){if(k===r){k=null;break}if(w=k.sibling,w!==null){w.return=k.return,k=w;break}k=k.return}w=k}pt(i,r,v.children,d),r=r.child}return r;case 9:return v=r.type,m=r.pendingProps.children,Po(r,d),v=Lt(v),m=m(v),r.flags|=1,pt(i,r,m,d),r.child;case 14:return m=r.type,v=Wt(m,r.pendingProps),v=Wt(m.type,v),Hd(i,r,m,v,d);case 15:return Gd(i,r,r.type,r.pendingProps,d);case 17:return m=r.type,v=r.pendingProps,v=r.elementType===m?v:Wt(m,v),Yr(i,r),r.tag=1,vt(m)?(i=!0,Pr(r)):i=!1,Po(r,d),Nd(r,m,v),Ol(r,m,v,d),Xl(null,r,m,!0,i,d);case 19:return Xd(i,r,d);case 22:return Wd(i,r,d)}throw Error(n(156,r.tag))};function kf(i,r){return ec(i,r)}function vv(i,r,d,m){this.tag=i,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(i,r,d,m){return new vv(i,r,d,m)}function gs(i){return i=i.prototype,!(!i||!i.isReactComponent)}function wv(i){if(typeof i=="function")return gs(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ee)return 11;if(i===re)return 14}return 2}function Un(i,r){var d=i.alternate;return d===null?(d=qt(i.tag,r,i.key,i.mode),d.elementType=i.elementType,d.type=i.type,d.stateNode=i.stateNode,d.alternate=i,i.alternate=d):(d.pendingProps=r,d.type=i.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=i.flags&14680064,d.childLanes=i.childLanes,d.lanes=i.lanes,d.child=i.child,d.memoizedProps=i.memoizedProps,d.memoizedState=i.memoizedState,d.updateQueue=i.updateQueue,r=i.dependencies,d.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},d.sibling=i.sibling,d.index=i.index,d.ref=i.ref,d}function ra(i,r,d,m,v,w){var k=2;if(m=i,typeof i=="function")gs(i)&&(k=1);else if(typeof i=="string")k=5;else e:switch(i){case Q:return no(d.children,v,w,r);case se:k=8,v|=8;break;case Z:return i=qt(12,d,r,v|2),i.elementType=Z,i.lanes=w,i;case ne:return i=qt(13,d,r,v),i.elementType=ne,i.lanes=w,i;case oe:return i=qt(19,d,r,v),i.elementType=oe,i.lanes=w,i;case Ce:return aa(d,v,w,r);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:k=10;break e;case J:k=9;break e;case ee:k=11;break e;case re:k=14;break e;case Se:k=16,m=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return r=qt(k,d,r,v),r.elementType=i,r.type=m,r.lanes=w,r}function no(i,r,d,m){return i=qt(7,i,m,r),i.lanes=d,i}function aa(i,r,d,m){return i=qt(22,i,m,r),i.elementType=Ce,i.lanes=d,i.stateNode={isHidden:!1},i}function vs(i,r,d){return i=qt(6,i,null,r),i.lanes=d,i}function ws(i,r,d){return r=qt(4,i.children!==null?i.children:[],i.key,r),r.lanes=d,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}function bv(i,r,d,m,v){this.tag=r,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=m,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function bs(i,r,d,m,v,w,k,E,I){return i=new bv(i,r,d,E,I),r===1?(r=1,w===!0&&(r|=8)):r=0,w=qt(3,null,null,r),i.current=w,w.stateNode=i,w.memoizedState={element:m,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(w),i}function Cv(i,r,d){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:m==null?null:""+m,children:i,containerInfo:r,implementation:d}}function Tf(i){if(!i)return In;i=i._reactInternals;e:{if(Wn(i)!==i||i.tag!==1)throw Error(n(170));var r=i;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(vt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(i.tag===1){var d=i.type;if(vt(d))return Qc(i,d,r)}return r}function xf(i,r,d,m,v,w,k,E,I){return i=bs(d,m,!0,i,v,w,k,E,I),i.context=Tf(null),d=i.current,m=mt(),v=Ln(d),w=fn(m,v),w.callback=r??null,Mn(d,w,v),i.current.lanes=v,li(i,v,m),Ct(i,m),i}function la(i,r,d,m){var v=r.current,w=mt(),k=Ln(v);return d=Tf(d),r.context===null?r.context=d:r.pendingContext=d,r=fn(w,k),r.payload={element:i},m=m===void 0?null:m,m!==null&&(r.callback=m),i=Mn(v,r,k),i!==null&&(Ot(i,v,k,w),qr(i,v,k)),k}function sa(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ef(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var d=i.retryLane;i.retryLane=d!==0&&d<r?d:r}}function Cs(i,r){Ef(i,r),(i=i.alternate)&&Ef(i,r)}function kv(){return null}var Sf=typeof reportError=="function"?reportError:function(i){console.error(i)};function ks(i){this._internalRoot=i}ua.prototype.render=ks.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(n(409));la(i,r,null,null)},ua.prototype.unmount=ks.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;jn(function(){la(null,i,null,null)}),r[ln]=null}};function ua(i){this._internalRoot=i}ua.prototype.unstable_scheduleHydration=function(i){if(i){var r=sc();i={blockedOn:null,target:i,priority:r};for(var d=0;d<Tn.length&&r!==0&&r<Tn[d].priority;d++);Tn.splice(d,0,i),d===0&&dc(i)}};function Ts(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ca(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Af(){}function Tv(i,r,d,m,v){if(v){if(typeof m=="function"){var w=m;m=function(){var B=sa(k);w.call(B)}}var k=xf(r,m,i,0,null,!1,!1,"",Af);return i._reactRootContainer=k,i[ln]=k.current,Ci(i.nodeType===8?i.parentNode:i),jn(),k}for(;v=i.lastChild;)i.removeChild(v);if(typeof m=="function"){var E=m;m=function(){var B=sa(I);E.call(B)}}var I=bs(i,0,!1,null,null,!1,!1,"",Af);return i._reactRootContainer=I,i[ln]=I.current,Ci(i.nodeType===8?i.parentNode:i),jn(function(){la(r,I,d,m)}),I}function da(i,r,d,m,v){var w=d._reactRootContainer;if(w){var k=w;if(typeof v=="function"){var E=v;v=function(){var I=sa(k);E.call(I)}}la(r,k,i,v)}else k=Tv(d,r,i,v,m);return sa(k)}ac=function(i){switch(i.tag){case 3:var r=i.stateNode;if(r.current.memoizedState.isDehydrated){var d=ai(r.pendingLanes);d!==0&&(Oa(r,d|1),Ct(r,Je()),(Pe&6)===0&&(Lo=Je()+500,_n()))}break;case 13:jn(function(){var m=dn(i,1);if(m!==null){var v=mt();Ot(m,i,1,v)}}),Cs(i,1)}},Ya=function(i){if(i.tag===13){var r=dn(i,134217728);if(r!==null){var d=mt();Ot(r,i,134217728,d)}Cs(i,134217728)}},lc=function(i){if(i.tag===13){var r=Ln(i),d=dn(i,r);if(d!==null){var m=mt();Ot(d,i,r,m)}Cs(i,r)}},sc=function(){return Le},uc=function(i,r){var d=Le;try{return Le=i,r()}finally{Le=d}},Va=function(i,r,d){switch(r){case"input":if(co(i,d),r=d.name,d.type==="radio"&&r!=null){for(d=i;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<d.length;r++){var m=d[r];if(m!==i&&m.form===i.form){var v=Ir(m);if(!v)throw Error(n(90));tr(m),co(m,v)}}}break;case"textarea":ir(i,d);break;case"select":r=d.value,r!=null&&vn(i,!!d.multiple,r,!1)}},Ou=ps,Yu=jn;var xv={usingClientEntryPoint:!1,Events:[xi,ko,Ir,$u,Ju,ps]},qi={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:qi.bundleType,version:qi.version,rendererPackageName:qi.rendererPackageName,rendererConfig:qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Zu(i),i===null?null:i.stateNode},findFiberByHostInstance:qi.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{ur=fa.inject(Ev),Xt=fa}catch{}}return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv,kt.createPortal=function(i,r){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(r))throw Error(n(200));return Cv(i,r,null,d)},kt.createRoot=function(i,r){if(!Ts(i))throw Error(n(299));var d=!1,m="",v=Sf;return r!=null&&(r.unstable_strictMode===!0&&(d=!0),r.identifierPrefix!==void 0&&(m=r.identifierPrefix),r.onRecoverableError!==void 0&&(v=r.onRecoverableError)),r=bs(i,1,!1,null,null,d,!1,m,v),i[ln]=r.current,Ci(i.nodeType===8?i.parentNode:i),new ks(r)},kt.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=Zu(r),i=i===null?null:i.stateNode,i},kt.flushSync=function(i){return jn(i)},kt.hydrate=function(i,r,d){if(!ca(r))throw Error(n(200));return da(null,i,r,!0,d)},kt.hydrateRoot=function(i,r,d){if(!Ts(i))throw Error(n(405));var m=d!=null&&d.hydratedSources||null,v=!1,w="",k=Sf;if(d!=null&&(d.unstable_strictMode===!0&&(v=!0),d.identifierPrefix!==void 0&&(w=d.identifierPrefix),d.onRecoverableError!==void 0&&(k=d.onRecoverableError)),r=xf(r,null,i,1,d??null,v,!1,w,k),i[ln]=r.current,Ci(i),m)for(i=0;i<m.length;i++)d=m[i],v=d._getVersion,v=v(d._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[d,v]:r.mutableSourceEagerHydrationData.push(d,v);return new ua(r)},kt.render=function(i,r,d){if(!ca(r))throw Error(n(200));return da(null,i,r,!1,d)},kt.unmountComponentAtNode=function(i){if(!ca(i))throw Error(n(40));return i._reactRootContainer?(jn(function(){da(null,null,i,!1,function(){i._reactRootContainer=null,i[ln]=null})}),!0):!1},kt.unstable_batchedUpdates=ps,kt.unstable_renderSubtreeIntoContainer=function(i,r,d,m){if(!ca(d))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return da(i,r,d,!1,m)},kt.version="18.3.1-next-f1338f8080-20240426",kt}var Lf;function Nv(){if(Lf)return Ss.exports;Lf=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Ss.exports=Dv(),Ss.exports}var Ff;function Lv(){if(Ff)return ha;Ff=1;var t=Nv();return ha.createRoot=t.createRoot,ha.hydrateRoot=t.hydrateRoot,ha}var Fv=Lv();const Uv=Pa(Fv);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let qv,Bv;function Vv(){return{geminiUrl:qv,vertexUrl:Bv}}function zv(t,e,n,o){var a,u;if(!t?.baseUrl){const c=Vv();return e?(a=c.vertexUrl)!==null&&a!==void 0?a:n:(u=c.geminiUrl)!==null&&u!==void 0?u:o}return t.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ao{}function le(t,e){const n=/\{([^}]+)\}/g;return t.replace(n,(o,a)=>{if(Object.prototype.hasOwnProperty.call(e,a)){const u=e[a];return u!=null?String(u):""}else throw new Error(`Key '${a}' not found in valueMap.`)})}function s(t,e,n){for(let u=0;u<e.length-1;u++){const c=e[u];if(c.endsWith("[]")){const f=c.slice(0,-2);if(!(f in t))if(Array.isArray(n))t[f]=Array.from({length:n.length},()=>({}));else throw new Error(`Value must be a list given an array path ${c}`);if(Array.isArray(t[f])){const p=t[f];if(Array.isArray(n))for(let h=0;h<p.length;h++){const y=p[h];s(y,e.slice(u+1),n[h])}else for(const h of p)s(h,e.slice(u+1),n)}return}else if(c.endsWith("[0]")){const f=c.slice(0,-3);f in t||(t[f]=[{}]);const p=t[f];s(p[0],e.slice(u+1),n);return}(!t[c]||typeof t[c]!="object")&&(t[c]={}),t=t[c]}const o=e[e.length-1],a=t[o];if(a!==void 0){if(!n||typeof n=="object"&&Object.keys(n).length===0||n===a)return;if(typeof a=="object"&&typeof n=="object"&&a!==null&&n!==null)Object.assign(a,n);else throw new Error(`Cannot set value for an existing key. Key: ${o}`)}else o==="_self"&&typeof n=="object"&&n!==null&&!Array.isArray(n)?Object.assign(t,n):t[o]=n}function l(t,e){try{if(e.length===1&&e[0]==="_self")return t;for(let n=0;n<e.length;n++){if(typeof t!="object"||t===null)return;const o=e[n];if(o.endsWith("[]")){const a=o.slice(0,-2);if(a in t){const u=t[a];return Array.isArray(u)?u.map(c=>l(c,e.slice(n+1))):void 0}else return}else t=t[o]}return t}catch(n){if(n instanceof TypeError)return;throw n}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function wu(t){if(typeof t!="string")throw new Error("fromImageBytes must be a string");return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Hv(t){const e={},n=l(t,["operationName"]);n!=null&&s(e,["_url","operationName"],n);const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function Gv(t){const e={},n=l(t,["operationName"]);n!=null&&s(e,["operationName"],n);const o=l(t,["resourceName"]);o!=null&&s(e,["_url","resourceName"],o);const a=l(t,["config"]);return a!=null&&s(e,["config"],a),e}function Wv(t){const e={},n=l(t,["operationName"]);n!=null&&s(e,["_url","operationName"],n);const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function $v(t){const e={},n=l(t,["video","uri"]);n!=null&&s(e,["uri"],n);const o=l(t,["video","encodedVideo"]);o!=null&&s(e,["videoBytes"],wu(o));const a=l(t,["encoding"]);return a!=null&&s(e,["mimeType"],a),e}function Jv(t){const e={},n=l(t,["_self"]);return n!=null&&s(e,["video"],$v(n)),e}function Ov(t){const e={},n=l(t,["generatedSamples"]);if(n!=null){let u=n;Array.isArray(u)&&(u=u.map(c=>Jv(c))),s(e,["generatedVideos"],u)}const o=l(t,["raiMediaFilteredCount"]);o!=null&&s(e,["raiMediaFilteredCount"],o);const a=l(t,["raiMediaFilteredReasons"]);return a!=null&&s(e,["raiMediaFilteredReasons"],a),e}function Yv(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["metadata"]);o!=null&&s(e,["metadata"],o);const a=l(t,["done"]);a!=null&&s(e,["done"],a);const u=l(t,["error"]);u!=null&&s(e,["error"],u);const c=l(t,["response","generateVideoResponse"]);return c!=null&&s(e,["response"],Ov(c)),e}function Kv(t){const e={},n=l(t,["gcsUri"]);n!=null&&s(e,["uri"],n);const o=l(t,["bytesBase64Encoded"]);o!=null&&s(e,["videoBytes"],wu(o));const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function Qv(t){const e={},n=l(t,["_self"]);return n!=null&&s(e,["video"],Kv(n)),e}function Xv(t){const e={},n=l(t,["videos"]);if(n!=null){let u=n;Array.isArray(u)&&(u=u.map(c=>Qv(c))),s(e,["generatedVideos"],u)}const o=l(t,["raiMediaFilteredCount"]);o!=null&&s(e,["raiMediaFilteredCount"],o);const a=l(t,["raiMediaFilteredReasons"]);return a!=null&&s(e,["raiMediaFilteredReasons"],a),e}function Zv(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["metadata"]);o!=null&&s(e,["metadata"],o);const a=l(t,["done"]);a!=null&&s(e,["done"],a);const u=l(t,["error"]);u!=null&&s(e,["error"],u);const c=l(t,["response"]);return c!=null&&s(e,["response"],Xv(c)),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Uf;(function(t){t.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",t.OUTCOME_OK="OUTCOME_OK",t.OUTCOME_FAILED="OUTCOME_FAILED",t.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Uf||(Uf={}));var qf;(function(t){t.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",t.PYTHON="PYTHON"})(qf||(qf={}));var Vn;(function(t){t.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT",t.NULL="NULL"})(Vn||(Vn={}));var Bf;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",t.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",t.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",t.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",t.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"})(Bf||(Bf={}));var Vf;(function(t){t.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",t.SEVERITY="SEVERITY",t.PROBABILITY="PROBABILITY"})(Vf||(Vf={}));var zf;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE",t.OFF="OFF"})(zf||(zf={}));var Hf;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(Hf||(Hf={}));var Gf;(function(t){t.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",t.NO_AUTH="NO_AUTH",t.API_KEY_AUTH="API_KEY_AUTH",t.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",t.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",t.OAUTH="OAUTH",t.OIDC_AUTH="OIDC_AUTH"})(Gf||(Gf={}));var Wf;(function(t){t.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",t.SIMPLE_SEARCH="SIMPLE_SEARCH",t.ELASTIC_SEARCH="ELASTIC_SEARCH"})(Wf||(Wf={}));var $f;(function(t){t.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",t.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",t.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",t.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",t.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})($f||($f={}));var Jf;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.IMAGE_SAFETY="IMAGE_SAFETY",t.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL"})(Jf||(Jf={}));var Of;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Of||(Of={}));var Yf;(function(t){t.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",t.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",t.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",t.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",t.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Yf||(Yf={}));var Kf;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.IMAGE_SAFETY="IMAGE_SAFETY"})(Kf||(Kf={}));var Qf;(function(t){t.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",t.ON_DEMAND="ON_DEMAND",t.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(Qf||(Qf={}));var Ta;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.AUDIO="AUDIO"})(Ta||(Ta={}));var Xf;(function(t){t.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",t.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",t.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",t.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(Xf||(Xf={}));var Ks;(function(t){t.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",t.JOB_STATE_QUEUED="JOB_STATE_QUEUED",t.JOB_STATE_PENDING="JOB_STATE_PENDING",t.JOB_STATE_RUNNING="JOB_STATE_RUNNING",t.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",t.JOB_STATE_FAILED="JOB_STATE_FAILED",t.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",t.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",t.JOB_STATE_PAUSED="JOB_STATE_PAUSED",t.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",t.JOB_STATE_UPDATING="JOB_STATE_UPDATING",t.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Ks||(Ks={}));var Zf;(function(t){t.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",t.TUNING_MODE_FULL="TUNING_MODE_FULL",t.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(Zf||(Zf={}));var jf;(function(t){t.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",t.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",t.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",t.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",t.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",t.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",t.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(jf||(jf={}));var eh;(function(t){t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",t.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",t.BALANCED="BALANCED",t.PRIORITIZE_COST="PRIORITIZE_COST"})(eh||(eh={}));var th;(function(t){t.UNSPECIFIED="UNSPECIFIED",t.BLOCKING="BLOCKING",t.NON_BLOCKING="NON_BLOCKING"})(th||(th={}));var nh;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(nh||(nh={}));var oh;(function(t){t.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",t.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(oh||(oh={}));var ih;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE",t.VALIDATED="VALIDATED"})(ih||(ih={}));var rh;(function(t){t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(rh||(rh={}));var ah;(function(t){t.DONT_ALLOW="DONT_ALLOW",t.ALLOW_ADULT="ALLOW_ADULT",t.ALLOW_ALL="ALLOW_ALL"})(ah||(ah={}));var lh;(function(t){t.auto="auto",t.en="en",t.ja="ja",t.ko="ko",t.hi="hi",t.zh="zh",t.pt="pt",t.es="es"})(lh||(lh={}));var sh;(function(t){t.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",t.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",t.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",t.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",t.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(sh||(sh={}));var uh;(function(t){t.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",t.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",t.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",t.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(uh||(uh={}));var ch;(function(t){t.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",t.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",t.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",t.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(ch||(ch={}));var dh;(function(t){t.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",t.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",t.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",t.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",t.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",t.EDIT_MODE_STYLE="EDIT_MODE_STYLE",t.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",t.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(dh||(dh={}));var fh;(function(t){t.FOREGROUND="FOREGROUND",t.BACKGROUND="BACKGROUND",t.PROMPT="PROMPT",t.SEMANTIC="SEMANTIC",t.INTERACTIVE="INTERACTIVE"})(fh||(fh={}));var hh;(function(t){t.ASSET="ASSET",t.STYLE="STYLE"})(hh||(hh={}));var ph;(function(t){t.OPTIMIZED="OPTIMIZED",t.LOSSLESS="LOSSLESS"})(ph||(ph={}));var mh;(function(t){t.STATE_UNSPECIFIED="STATE_UNSPECIFIED",t.PROCESSING="PROCESSING",t.ACTIVE="ACTIVE",t.FAILED="FAILED"})(mh||(mh={}));var yh;(function(t){t.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",t.UPLOADED="UPLOADED",t.GENERATED="GENERATED"})(yh||(yh={}));var gh;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.VIDEO="VIDEO",t.AUDIO="AUDIO",t.DOCUMENT="DOCUMENT"})(gh||(gh={}));var vh;(function(t){t.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",t.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",t.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(vh||(vh={}));var wh;(function(t){t.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",t.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",t.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(wh||(wh={}));var bh;(function(t){t.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",t.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",t.NO_INTERRUPTION="NO_INTERRUPTION"})(bh||(bh={}));var Ch;(function(t){t.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",t.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",t.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(Ch||(Ch={}));var kh;(function(t){t.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",t.SILENT="SILENT",t.WHEN_IDLE="WHEN_IDLE",t.INTERRUPT="INTERRUPT"})(kh||(kh={}));var Th;(function(t){t.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",t.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",t.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",t.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",t.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",t.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",t.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",t.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",t.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",t.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",t.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",t.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",t.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(Th||(Th={}));var xh;(function(t){t.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",t.QUALITY="QUALITY",t.DIVERSITY="DIVERSITY",t.VOCALIZATION="VOCALIZATION"})(xh||(xh={}));var zo;(function(t){t.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",t.PLAY="PLAY",t.PAUSE="PAUSE",t.STOP="STOP",t.RESET_CONTEXT="RESET_CONTEXT"})(zo||(zo={}));class Qs{constructor(e){const n={};for(const o of e.headers.entries())n[o[0]]=o[1];this.headers=n,this.responseInternal=e}json(){return this.responseInternal.json()}}class Vi{get text(){var e,n,o,a,u,c,f,p;if(((a=(o=(n=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let h="",y=!1;const g=[];for(const b of(p=(f=(c=(u=this.candidates)===null||u===void 0?void 0:u[0])===null||c===void 0?void 0:c.content)===null||f===void 0?void 0:f.parts)!==null&&p!==void 0?p:[]){for(const[C,T]of Object.entries(b))C!=="text"&&C!=="thought"&&(T!==null||T!==void 0)&&g.push(C);if(typeof b.text=="string"){if(typeof b.thought=="boolean"&&b.thought)continue;y=!0,h+=b.text}}return g.length>0&&console.warn(`there are non-text parts ${g} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),y?h:void 0}get data(){var e,n,o,a,u,c,f,p;if(((a=(o=(n=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let h="";const y=[];for(const g of(p=(f=(c=(u=this.candidates)===null||u===void 0?void 0:u[0])===null||c===void 0?void 0:c.content)===null||f===void 0?void 0:f.parts)!==null&&p!==void 0?p:[]){for(const[b,C]of Object.entries(g))b!=="inlineData"&&(C!==null||C!==void 0)&&y.push(b);g.inlineData&&typeof g.inlineData.data=="string"&&(h+=atob(g.inlineData.data))}return y.length>0&&console.warn(`there are non-data parts ${y} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),h.length>0?btoa(h):void 0}get functionCalls(){var e,n,o,a,u,c,f,p;if(((a=(o=(n=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const h=(p=(f=(c=(u=this.candidates)===null||u===void 0?void 0:u[0])===null||c===void 0?void 0:c.content)===null||f===void 0?void 0:f.parts)===null||p===void 0?void 0:p.filter(y=>y.functionCall).map(y=>y.functionCall).filter(y=>y!==void 0);if(h?.length!==0)return h}get executableCode(){var e,n,o,a,u,c,f,p,h;if(((a=(o=(n=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const y=(p=(f=(c=(u=this.candidates)===null||u===void 0?void 0:u[0])===null||c===void 0?void 0:c.content)===null||f===void 0?void 0:f.parts)===null||p===void 0?void 0:p.filter(g=>g.executableCode).map(g=>g.executableCode).filter(g=>g!==void 0);if(y?.length!==0)return(h=y?.[0])===null||h===void 0?void 0:h.code}get codeExecutionResult(){var e,n,o,a,u,c,f,p,h;if(((a=(o=(n=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const y=(p=(f=(c=(u=this.candidates)===null||u===void 0?void 0:u[0])===null||c===void 0?void 0:c.content)===null||f===void 0?void 0:f.parts)===null||p===void 0?void 0:p.filter(g=>g.codeExecutionResult).map(g=>g.codeExecutionResult).filter(g=>g!==void 0);if(y?.length!==0)return(h=y?.[0])===null||h===void 0?void 0:h.output}}class Eh{}class Sh{}class jv{}class ew{}class tw{}class nw{}class Ah{}class Ih{}class _h{}class ow{}class xa{_fromAPIResponse({apiResponse:e,isVertexAI:n}){const o=new xa;let a;const u=e;return n?a=Zv(u):a=Yv(u),Object.assign(o,a),o}}class Ph{}class Mh{}class Rh{}class iw{}class rw{}class aw{}class Dh{}class lw{get text(){var e,n,o;let a="",u=!1;const c=[];for(const f of(o=(n=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||n===void 0?void 0:n.parts)!==null&&o!==void 0?o:[]){for(const[p,h]of Object.entries(f))p!=="text"&&p!=="thought"&&h!==null&&c.push(p);if(typeof f.text=="string"){if(typeof f.thought=="boolean"&&f.thought)continue;u=!0,a+=f.text}}return c.length>0&&console.warn(`there are non-text parts ${c} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),u?a:void 0}get data(){var e,n,o;let a="";const u=[];for(const c of(o=(n=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||n===void 0?void 0:n.parts)!==null&&o!==void 0?o:[]){for(const[f,p]of Object.entries(c))f!=="inlineData"&&p!==null&&u.push(f);c.inlineData&&typeof c.inlineData.data=="string"&&(a+=atob(c.inlineData.data))}return u.length>0&&console.warn(`there are non-data parts ${u} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),a.length>0?btoa(a):void 0}}class sw{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function De(t,e){if(!e||typeof e!="string")throw new Error("model is required and must be a string");if(t.isVertexAI()){if(e.startsWith("publishers/")||e.startsWith("projects/")||e.startsWith("models/"))return e;if(e.indexOf("/")>=0){const n=e.split("/",2);return`publishers/${n[0]}/models/${n[1]}`}else return`publishers/google/models/${e}`}else return e.startsWith("models/")||e.startsWith("tunedModels/")?e:`models/${e}`}function Op(t,e){const n=De(t,e);return n?n.startsWith("publishers/")&&t.isVertexAI()?`projects/${t.getProject()}/locations/${t.getLocation()}/${n}`:n.startsWith("models/")&&t.isVertexAI()?`projects/${t.getProject()}/locations/${t.getLocation()}/publishers/google/${n}`:n:""}function Yp(t){return Array.isArray(t)?t.map(e=>Ea(e)):[Ea(t)]}function Ea(t){if(typeof t=="object"&&t!==null)return t;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof t}`)}function Kp(t){const e=Ea(t);if(e.mimeType&&e.mimeType.startsWith("image/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function Qp(t){const e=Ea(t);if(e.mimeType&&e.mimeType.startsWith("audio/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function Nh(t){if(t==null)throw new Error("PartUnion is required");if(typeof t=="object")return t;if(typeof t=="string")return{text:t};throw new Error(`Unsupported part type: ${typeof t}`)}function Xp(t){if(t==null||Array.isArray(t)&&t.length===0)throw new Error("PartListUnion is required");return Array.isArray(t)?t.map(e=>Nh(e)):[Nh(t)]}function Xs(t){return t!=null&&typeof t=="object"&&"parts"in t&&Array.isArray(t.parts)}function Lh(t){return t!=null&&typeof t=="object"&&"functionCall"in t}function Fh(t){return t!=null&&typeof t=="object"&&"functionResponse"in t}function dt(t){if(t==null)throw new Error("ContentUnion is required");return Xs(t)?t:{role:"user",parts:Xp(t)}}function bu(t,e){if(!e)return[];if(t.isVertexAI()&&Array.isArray(e))return e.flatMap(n=>{const o=dt(n);return o.parts&&o.parts.length>0&&o.parts[0].text!==void 0?[o.parts[0].text]:[]});if(t.isVertexAI()){const n=dt(e);return n.parts&&n.parts.length>0&&n.parts[0].text!==void 0?[n.parts[0].text]:[]}return Array.isArray(e)?e.map(n=>dt(n)):[dt(e)]}function Vt(t){if(t==null||Array.isArray(t)&&t.length===0)throw new Error("contents are required");if(!Array.isArray(t)){if(Lh(t)||Fh(t))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[dt(t)]}const e=[],n=[],o=Xs(t[0]);for(const a of t){const u=Xs(a);if(u!=o)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(u)e.push(a);else{if(Lh(a)||Fh(a))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");n.push(a)}}return o||e.push({role:"user",parts:Xp(n)}),e}function uw(t,e){t.includes("null")&&(e.nullable=!0);const n=t.filter(o=>o!=="null");if(n.length===1)e.type=Object.values(Vn).includes(n[0].toUpperCase())?n[0].toUpperCase():Vn.TYPE_UNSPECIFIED;else{e.anyOf=[];for(const o of n)e.anyOf.push({type:Object.values(Vn).includes(o.toUpperCase())?o.toUpperCase():Vn.TYPE_UNSPECIFIED})}}function Ho(t){const e={},n=["items"],o=["anyOf"],a=["properties"];if(t.type&&t.anyOf)throw new Error("type and anyOf cannot be both populated.");const u=t.anyOf;u!=null&&u.length==2&&(u[0].type==="null"?(e.nullable=!0,t=u[1]):u[1].type==="null"&&(e.nullable=!0,t=u[0])),t.type instanceof Array&&uw(t.type,e);for(const[c,f]of Object.entries(t))if(f!=null)if(c=="type"){if(f==="null")throw new Error("type: null can not be the only possible type for the field.");if(f instanceof Array)continue;e.type=Object.values(Vn).includes(f.toUpperCase())?f.toUpperCase():Vn.TYPE_UNSPECIFIED}else if(n.includes(c))e[c]=Ho(f);else if(o.includes(c)){const p=[];for(const h of f){if(h.type=="null"){e.nullable=!0;continue}p.push(Ho(h))}e[c]=p}else if(a.includes(c)){const p={};for(const[h,y]of Object.entries(f))p[h]=Ho(y);e[c]=p}else{if(c==="additionalProperties")continue;e[c]=f}return e}function Cu(t){return Ho(t)}function ku(t){if(typeof t=="object")return t;if(typeof t=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:t}}};throw new Error(`Unsupported speechConfig type: ${typeof t}`)}function Tu(t){if("multiSpeakerVoiceConfig"in t)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return t}function Oo(t){if(t.functionDeclarations)for(const e of t.functionDeclarations)e.parameters&&(Object.keys(e.parameters).includes("$schema")?e.parametersJsonSchema||(e.parametersJsonSchema=e.parameters,delete e.parameters):e.parameters=Ho(e.parameters)),e.response&&(Object.keys(e.response).includes("$schema")?e.responseJsonSchema||(e.responseJsonSchema=e.response,delete e.response):e.response=Ho(e.response));return t}function Yo(t){if(t==null)throw new Error("tools is required");if(!Array.isArray(t))throw new Error("tools is required and must be an array of Tools");const e=[];for(const n of t)e.push(n);return e}function cw(t,e,n,o=1){const a=!e.startsWith(`${n}/`)&&e.split("/").length===o;return t.isVertexAI()?e.startsWith("projects/")?e:e.startsWith("locations/")?`projects/${t.getProject()}/${e}`:e.startsWith(`${n}/`)?`projects/${t.getProject()}/locations/${t.getLocation()}/${e}`:a?`projects/${t.getProject()}/locations/${t.getLocation()}/${n}/${e}`:e:a?`${n}/${e}`:e}function mn(t,e){if(typeof e!="string")throw new Error("name must be a string");return cw(t,e,"cachedContents")}function Zp(t){switch(t){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return t}}function lo(t){return wu(t)}function dw(t){return t!=null&&typeof t=="object"&&"name"in t}function fw(t){return t!=null&&typeof t=="object"&&"video"in t}function hw(t){return t!=null&&typeof t=="object"&&"uri"in t}function jp(t){var e;let n;if(dw(t)&&(n=t.name),!(hw(t)&&(n=t.uri,n===void 0))&&!(fw(t)&&(n=(e=t.video)===null||e===void 0?void 0:e.uri,n===void 0))){if(typeof t=="string"&&(n=t),n===void 0)throw new Error("Could not extract file name from the provided input.");if(n.startsWith("https://")){const a=n.split("files/")[1].match(/[a-z0-9]+/);if(a===null)throw new Error(`Could not extract file name from URI ${n}`);n=a[0]}else n.startsWith("files/")&&(n=n.split("files/")[1]);return n}}function em(t,e){let n;return t.isVertexAI()?n=e?"publishers/google/models":"models":n=e?"models":"tunedModels",n}function tm(t){for(const e of["models","tunedModels","publisherModels"])if(pw(t,e))return t[e];return[]}function pw(t,e){return t!==null&&typeof t=="object"&&e in t}function mw(t,e={}){const n=t,o={name:n.name,description:n.description,parametersJsonSchema:n.inputSchema};return n.outputSchema&&(o.responseJsonSchema=n.outputSchema),e.behavior&&(o.behavior=e.behavior),{functionDeclarations:[o]}}function yw(t,e={}){const n=[],o=new Set;for(const a of t){const u=a.name;if(o.has(u))throw new Error(`Duplicate function name ${u} found in MCP tools. Please ensure function names are unique.`);o.add(u);const c=mw(a,e);c.functionDeclarations&&n.push(...c.functionDeclarations)}return{functionDeclarations:n}}function nm(t,e){let n;if(typeof e=="string")if(t.isVertexAI())if(e.startsWith("gs://"))n={format:"jsonl",gcsUri:[e]};else if(e.startsWith("bq://"))n={format:"bigquery",bigqueryUri:e};else throw new Error(`Unsupported string source for Vertex AI: ${e}`);else if(e.startsWith("files/"))n={fileName:e};else throw new Error(`Unsupported string source for Gemini API: ${e}`);else if(Array.isArray(e)){if(t.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");n={inlinedRequests:e}}else n=e;const o=[n.gcsUri,n.bigqueryUri].filter(Boolean).length,a=[n.inlinedRequests,n.fileName].filter(Boolean).length;if(t.isVertexAI()){if(a>0||o!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(o>0||a!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return n}function gw(t){if(typeof t!="string")return t;const e=t;if(e.startsWith("gs://"))return{format:"jsonl",gcsUri:e};if(e.startsWith("bq://"))return{format:"bigquery",bigqueryUri:e};throw new Error(`Unsupported destination: ${e}`)}function om(t){if(typeof t!="object"||t===null)return{};const e=t,n=e.inlinedResponses;if(typeof n!="object"||n===null)return t;const a=n.inlinedResponses;if(!Array.isArray(a)||a.length===0)return t;let u=!1;for(const c of a){if(typeof c!="object"||c===null)continue;const p=c.response;if(typeof p!="object"||p===null)continue;if(p.embedding!==void 0){u=!0;break}}return u&&(e.inlinedEmbedContentResponses=e.inlinedResponses,delete e.inlinedResponses),t}function Ko(t,e){const n=e;if(!t.isVertexAI()){if(/batches\/[^/]+$/.test(n))return n.split("/").pop();throw new Error(`Invalid batch job name: ${n}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(n))return n.split("/").pop();if(/^\d+$/.test(n))return n;throw new Error(`Invalid batch job name: ${n}.`)}function im(t){const e=t;return e==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":e==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":e==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":e==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":e==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vw(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function ww(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function bw(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function Cw(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function kw(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],vw(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],ww(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],bw(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],Cw(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function rm(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>kw(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function Tw(t){const e={},n=l(t,["anyOf"]);n!=null&&s(e,["anyOf"],n);const o=l(t,["default"]);o!=null&&s(e,["default"],o);const a=l(t,["description"]);a!=null&&s(e,["description"],a);const u=l(t,["enum"]);u!=null&&s(e,["enum"],u);const c=l(t,["example"]);c!=null&&s(e,["example"],c);const f=l(t,["format"]);f!=null&&s(e,["format"],f);const p=l(t,["items"]);p!=null&&s(e,["items"],p);const h=l(t,["maxItems"]);h!=null&&s(e,["maxItems"],h);const y=l(t,["maxLength"]);y!=null&&s(e,["maxLength"],y);const g=l(t,["maxProperties"]);g!=null&&s(e,["maxProperties"],g);const b=l(t,["maximum"]);b!=null&&s(e,["maximum"],b);const C=l(t,["minItems"]);C!=null&&s(e,["minItems"],C);const T=l(t,["minLength"]);T!=null&&s(e,["minLength"],T);const A=l(t,["minProperties"]);A!=null&&s(e,["minProperties"],A);const R=l(t,["minimum"]);R!=null&&s(e,["minimum"],R);const _=l(t,["nullable"]);_!=null&&s(e,["nullable"],_);const U=l(t,["pattern"]);U!=null&&s(e,["pattern"],U);const D=l(t,["properties"]);D!=null&&s(e,["properties"],D);const z=l(t,["propertyOrdering"]);z!=null&&s(e,["propertyOrdering"],z);const G=l(t,["required"]);G!=null&&s(e,["required"],G);const L=l(t,["title"]);L!=null&&s(e,["title"],L);const Q=l(t,["type"]);return Q!=null&&s(e,["type"],Q),e}function xw(t){const e={};if(l(t,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const n=l(t,["category"]);n!=null&&s(e,["category"],n);const o=l(t,["threshold"]);return o!=null&&s(e,["threshold"],o),e}function Ew(t){const e={},n=l(t,["behavior"]);n!=null&&s(e,["behavior"],n);const o=l(t,["description"]);o!=null&&s(e,["description"],o);const a=l(t,["name"]);a!=null&&s(e,["name"],a);const u=l(t,["parameters"]);u!=null&&s(e,["parameters"],u);const c=l(t,["parametersJsonSchema"]);c!=null&&s(e,["parametersJsonSchema"],c);const f=l(t,["response"]);f!=null&&s(e,["response"],f);const p=l(t,["responseJsonSchema"]);return p!=null&&s(e,["responseJsonSchema"],p),e}function Sw(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function Aw(t){const e={},n=l(t,["timeRangeFilter"]);if(n!=null&&s(e,["timeRangeFilter"],Sw(n)),l(t,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function Iw(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function _w(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],Iw(n)),e}function Pw(){return{}}function Mw(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function Rw(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let p=n;Array.isArray(p)&&(p=p.map(h=>Ew(h))),s(e,["functionDeclarations"],p)}if(l(t,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const o=l(t,["googleSearch"]);o!=null&&s(e,["googleSearch"],Aw(o));const a=l(t,["googleSearchRetrieval"]);if(a!=null&&s(e,["googleSearchRetrieval"],_w(a)),l(t,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(l(t,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");l(t,["urlContext"])!=null&&s(e,["urlContext"],Pw());const c=l(t,["computerUse"]);c!=null&&s(e,["computerUse"],Mw(c));const f=l(t,["codeExecution"]);return f!=null&&s(e,["codeExecution"],f),e}function Dw(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["allowedFunctionNames"]);return o!=null&&s(e,["allowedFunctionNames"],o),e}function Nw(t){const e={},n=l(t,["latitude"]);n!=null&&s(e,["latitude"],n);const o=l(t,["longitude"]);return o!=null&&s(e,["longitude"],o),e}function Lw(t){const e={},n=l(t,["latLng"]);n!=null&&s(e,["latLng"],Nw(n));const o=l(t,["languageCode"]);return o!=null&&s(e,["languageCode"],o),e}function Fw(t){const e={},n=l(t,["functionCallingConfig"]);n!=null&&s(e,["functionCallingConfig"],Dw(n));const o=l(t,["retrievalConfig"]);return o!=null&&s(e,["retrievalConfig"],Lw(o)),e}function Uw(t){const e={},n=l(t,["voiceName"]);return n!=null&&s(e,["voiceName"],n),e}function am(t){const e={},n=l(t,["prebuiltVoiceConfig"]);return n!=null&&s(e,["prebuiltVoiceConfig"],Uw(n)),e}function qw(t){const e={},n=l(t,["speaker"]);n!=null&&s(e,["speaker"],n);const o=l(t,["voiceConfig"]);return o!=null&&s(e,["voiceConfig"],am(o)),e}function Bw(t){const e={},n=l(t,["speakerVoiceConfigs"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>qw(a))),s(e,["speakerVoiceConfigs"],o)}return e}function Vw(t){const e={},n=l(t,["voiceConfig"]);n!=null&&s(e,["voiceConfig"],am(n));const o=l(t,["multiSpeakerVoiceConfig"]);o!=null&&s(e,["multiSpeakerVoiceConfig"],Bw(o));const a=l(t,["languageCode"]);return a!=null&&s(e,["languageCode"],a),e}function zw(t){const e={},n=l(t,["includeThoughts"]);n!=null&&s(e,["includeThoughts"],n);const o=l(t,["thinkingBudget"]);return o!=null&&s(e,["thinkingBudget"],o),e}function Hw(t,e,n){const o={},a=l(e,["systemInstruction"]);n!==void 0&&a!=null&&s(n,["systemInstruction"],rm(dt(a)));const u=l(e,["temperature"]);u!=null&&s(o,["temperature"],u);const c=l(e,["topP"]);c!=null&&s(o,["topP"],c);const f=l(e,["topK"]);f!=null&&s(o,["topK"],f);const p=l(e,["candidateCount"]);p!=null&&s(o,["candidateCount"],p);const h=l(e,["maxOutputTokens"]);h!=null&&s(o,["maxOutputTokens"],h);const y=l(e,["stopSequences"]);y!=null&&s(o,["stopSequences"],y);const g=l(e,["responseLogprobs"]);g!=null&&s(o,["responseLogprobs"],g);const b=l(e,["logprobs"]);b!=null&&s(o,["logprobs"],b);const C=l(e,["presencePenalty"]);C!=null&&s(o,["presencePenalty"],C);const T=l(e,["frequencyPenalty"]);T!=null&&s(o,["frequencyPenalty"],T);const A=l(e,["seed"]);A!=null&&s(o,["seed"],A);const R=l(e,["responseMimeType"]);R!=null&&s(o,["responseMimeType"],R);const _=l(e,["responseSchema"]);_!=null&&s(o,["responseSchema"],Tw(Cu(_)));const U=l(e,["responseJsonSchema"]);if(U!=null&&s(o,["responseJsonSchema"],U),l(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(l(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const D=l(e,["safetySettings"]);if(n!==void 0&&D!=null){let J=D;Array.isArray(J)&&(J=J.map(ee=>xw(ee))),s(n,["safetySettings"],J)}const z=l(e,["tools"]);if(n!==void 0&&z!=null){let J=Yo(z);Array.isArray(J)&&(J=J.map(ee=>Rw(Oo(ee)))),s(n,["tools"],J)}const G=l(e,["toolConfig"]);if(n!==void 0&&G!=null&&s(n,["toolConfig"],Fw(G)),l(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const L=l(e,["cachedContent"]);n!==void 0&&L!=null&&s(n,["cachedContent"],mn(t,L));const Q=l(e,["responseModalities"]);Q!=null&&s(o,["responseModalities"],Q);const se=l(e,["mediaResolution"]);se!=null&&s(o,["mediaResolution"],se);const Z=l(e,["speechConfig"]);if(Z!=null&&s(o,["speechConfig"],Vw(ku(Z))),l(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const N=l(e,["thinkingConfig"]);return N!=null&&s(o,["thinkingConfig"],zw(N)),o}function Gw(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["request","model"],De(t,o));const a=l(e,["contents"]);if(a!=null){let c=Vt(a);Array.isArray(c)&&(c=c.map(f=>rm(f))),s(n,["request","contents"],c)}const u=l(e,["config"]);return u!=null&&s(n,["request","generationConfig"],Hw(t,u,n)),n}function Ww(t,e){const n={};if(l(e,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(l(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(l(e,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const o=l(e,["fileName"]);o!=null&&s(n,["fileName"],o);const a=l(e,["inlinedRequests"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>Gw(t,c))),s(n,["requests","requests"],u)}return n}function $w(t,e){const n={},o=l(t,["displayName"]);if(e!==void 0&&o!=null&&s(e,["batch","displayName"],o),l(t,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return n}function _s(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["src"]);a!=null&&s(n,["batch","inputConfig"],Ww(t,nm(t,a)));const u=l(e,["config"]);return u!=null&&s(n,["config"],$w(u,n)),n}function Jw(t,e){const n={},o=l(t,["taskType"]);e!==void 0&&o!=null&&s(e,["requests[]","taskType"],o);const a=l(t,["title"]);e!==void 0&&a!=null&&s(e,["requests[]","title"],a);const u=l(t,["outputDimensionality"]);if(e!==void 0&&u!=null&&s(e,["requests[]","outputDimensionality"],u),l(t,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(l(t,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return n}function Ow(t,e){const n={},o=l(e,["contents"]);o!=null&&s(n,["requests[]","request","content"],bu(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],Jw(a,n)),n}function Yw(t,e){const n={},o=l(e,["fileName"]);o!=null&&s(n,["file_name"],o);const a=l(e,["inlinedRequests"]);return a!=null&&s(n,["requests"],Ow(t,a)),n}function Kw(t,e){const n={},o=l(t,["displayName"]);return e!==void 0&&o!=null&&s(e,["batch","displayName"],o),n}function Ps(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["src"]);a!=null&&s(n,["batch","inputConfig"],Yw(t,a));const u=l(e,["config"]);return u!=null&&s(n,["config"],Kw(u,n)),n}function Qw(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],Ko(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function Xw(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],Ko(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function Zw(t,e){const n={},o=l(t,["pageSize"]);e!==void 0&&o!=null&&s(e,["_query","pageSize"],o);const a=l(t,["pageToken"]);if(e!==void 0&&a!=null&&s(e,["_query","pageToken"],a),l(t,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return n}function jw(t){const e={},n=l(t,["config"]);return n!=null&&s(e,["config"],Zw(n,e)),e}function eb(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],Ko(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function tb(t){const e={},n=l(t,["format"]);n!=null&&s(e,["instancesFormat"],n);const o=l(t,["gcsUri"]);o!=null&&s(e,["gcsSource","uris"],o);const a=l(t,["bigqueryUri"]);if(a!=null&&s(e,["bigquerySource","inputUri"],a),l(t,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(l(t,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return e}function nb(t){const e={},n=l(t,["format"]);n!=null&&s(e,["predictionsFormat"],n);const o=l(t,["gcsUri"]);o!=null&&s(e,["gcsDestination","outputUriPrefix"],o);const a=l(t,["bigqueryUri"]);if(a!=null&&s(e,["bigqueryDestination","outputUri"],a),l(t,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(l(t,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(l(t,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return e}function ob(t,e){const n={},o=l(t,["displayName"]);e!==void 0&&o!=null&&s(e,["displayName"],o);const a=l(t,["dest"]);return e!==void 0&&a!=null&&s(e,["outputConfig"],nb(gw(a))),n}function ib(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["model"],De(t,o));const a=l(e,["src"]);a!=null&&s(n,["inputConfig"],tb(nm(t,a)));const u=l(e,["config"]);return u!=null&&s(n,["config"],ob(u,n)),n}function rb(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],Ko(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function ab(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],Ko(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function lb(t,e){const n={},o=l(t,["pageSize"]);e!==void 0&&o!=null&&s(e,["_query","pageSize"],o);const a=l(t,["pageToken"]);e!==void 0&&a!=null&&s(e,["_query","pageToken"],a);const u=l(t,["filter"]);return e!==void 0&&u!=null&&s(e,["_query","filter"],u),n}function sb(t){const e={},n=l(t,["config"]);return n!=null&&s(e,["config"],lb(n,e)),e}function ub(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],Ko(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function cb(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function db(t){const e={},n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function fb(t){const e={},n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function hb(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function pb(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],cb(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],db(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],fb(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],hb(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function mb(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>pb(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function yb(t){const e={},n=l(t,["citationSources"]);return n!=null&&s(e,["citations"],n),e}function gb(t){const e={},n=l(t,["retrievedUrl"]);n!=null&&s(e,["retrievedUrl"],n);const o=l(t,["urlRetrievalStatus"]);return o!=null&&s(e,["urlRetrievalStatus"],o),e}function vb(t){const e={},n=l(t,["urlMetadata"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>gb(a))),s(e,["urlMetadata"],o)}return e}function wb(t){const e={},n=l(t,["content"]);n!=null&&s(e,["content"],mb(n));const o=l(t,["citationMetadata"]);o!=null&&s(e,["citationMetadata"],yb(o));const a=l(t,["tokenCount"]);a!=null&&s(e,["tokenCount"],a);const u=l(t,["finishReason"]);u!=null&&s(e,["finishReason"],u);const c=l(t,["urlContextMetadata"]);c!=null&&s(e,["urlContextMetadata"],vb(c));const f=l(t,["avgLogprobs"]);f!=null&&s(e,["avgLogprobs"],f);const p=l(t,["groundingMetadata"]);p!=null&&s(e,["groundingMetadata"],p);const h=l(t,["index"]);h!=null&&s(e,["index"],h);const y=l(t,["logprobsResult"]);y!=null&&s(e,["logprobsResult"],y);const g=l(t,["safetyRatings"]);return g!=null&&s(e,["safetyRatings"],g),e}function bb(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["candidates"]);if(o!=null){let p=o;Array.isArray(p)&&(p=p.map(h=>wb(h))),s(e,["candidates"],p)}const a=l(t,["modelVersion"]);a!=null&&s(e,["modelVersion"],a);const u=l(t,["promptFeedback"]);u!=null&&s(e,["promptFeedback"],u);const c=l(t,["responseId"]);c!=null&&s(e,["responseId"],c);const f=l(t,["usageMetadata"]);return f!=null&&s(e,["usageMetadata"],f),e}function xu(t){const e={},n=l(t,["details"]);n!=null&&s(e,["details"],n);const o=l(t,["code"]);o!=null&&s(e,["code"],o);const a=l(t,["message"]);return a!=null&&s(e,["message"],a),e}function Cb(t){const e={},n=l(t,["response"]);n!=null&&s(e,["response"],bb(n));const o=l(t,["error"]);return o!=null&&s(e,["error"],xu(o)),e}function kb(t){const e={},n=l(t,["values"]);return n!=null&&s(e,["values"],n),e}function Tb(t){const e={},n=l(t,["embedding"]);n!=null&&s(e,["embedding"],kb(n));const o=l(t,["tokenCount"]);return o!=null&&s(e,["tokenCount"],o),e}function xb(t){const e={},n=l(t,["response"]);n!=null&&s(e,["response"],Tb(n));const o=l(t,["error"]);return o!=null&&s(e,["error"],xu(o)),e}function Eb(t){const e={},n=l(t,["responsesFile"]);n!=null&&s(e,["fileName"],n);const o=l(t,["inlinedResponses","inlinedResponses"]);if(o!=null){let u=o;Array.isArray(u)&&(u=u.map(c=>Cb(c))),s(e,["inlinedResponses"],u)}const a=l(t,["inlinedEmbedContentResponses","inlinedResponses"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>xb(c))),s(e,["inlinedEmbedContentResponses"],u)}return e}function Bo(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["metadata","displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["metadata","state"]);a!=null&&s(e,["state"],im(a));const u=l(t,["metadata","createTime"]);u!=null&&s(e,["createTime"],u);const c=l(t,["metadata","endTime"]);c!=null&&s(e,["endTime"],c);const f=l(t,["metadata","updateTime"]);f!=null&&s(e,["updateTime"],f);const p=l(t,["metadata","model"]);p!=null&&s(e,["model"],p);const h=l(t,["metadata","output"]);return h!=null&&s(e,["dest"],Eb(om(h))),e}function Sb(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["operations"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>Bo(c))),s(e,["batchJobs"],u)}return e}function Ab(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["done"]);a!=null&&s(e,["done"],a);const u=l(t,["error"]);return u!=null&&s(e,["error"],xu(u)),e}function lm(t){const e={},n=l(t,["details"]);n!=null&&s(e,["details"],n);const o=l(t,["code"]);o!=null&&s(e,["code"],o);const a=l(t,["message"]);return a!=null&&s(e,["message"],a),e}function Ib(t){const e={},n=l(t,["instancesFormat"]);n!=null&&s(e,["format"],n);const o=l(t,["gcsSource","uris"]);o!=null&&s(e,["gcsUri"],o);const a=l(t,["bigquerySource","inputUri"]);return a!=null&&s(e,["bigqueryUri"],a),e}function _b(t){const e={},n=l(t,["predictionsFormat"]);n!=null&&s(e,["format"],n);const o=l(t,["gcsDestination","outputUriPrefix"]);o!=null&&s(e,["gcsUri"],o);const a=l(t,["bigqueryDestination","outputUri"]);return a!=null&&s(e,["bigqueryUri"],a),e}function Zs(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["state"]);a!=null&&s(e,["state"],im(a));const u=l(t,["error"]);u!=null&&s(e,["error"],lm(u));const c=l(t,["createTime"]);c!=null&&s(e,["createTime"],c);const f=l(t,["startTime"]);f!=null&&s(e,["startTime"],f);const p=l(t,["endTime"]);p!=null&&s(e,["endTime"],p);const h=l(t,["updateTime"]);h!=null&&s(e,["updateTime"],h);const y=l(t,["model"]);y!=null&&s(e,["model"],y);const g=l(t,["inputConfig"]);g!=null&&s(e,["src"],Ib(g));const b=l(t,["outputConfig"]);return b!=null&&s(e,["dest"],_b(om(b))),e}function Pb(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["batchPredictionJobs"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>Zs(c))),s(e,["batchJobs"],u)}return e}function Mb(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["done"]);a!=null&&s(e,["done"],a);const u=l(t,["error"]);return u!=null&&s(e,["error"],lm(u)),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var io;(function(t){t.PAGED_ITEM_BATCH_JOBS="batchJobs",t.PAGED_ITEM_MODELS="models",t.PAGED_ITEM_TUNING_JOBS="tuningJobs",t.PAGED_ITEM_FILES="files",t.PAGED_ITEM_CACHED_CONTENTS="cachedContents"})(io||(io={}));class Xi{constructor(e,n,o,a){this.pageInternal=[],this.paramsInternal={},this.requestInternal=n,this.init(e,o,a)}init(e,n,o){var a,u;this.nameInternal=e,this.pageInternal=n[this.nameInternal]||[],this.sdkHttpResponseInternal=n?.sdkHttpResponse,this.idxInternal=0;let c={config:{}};!o||Object.keys(o).length===0?c={config:{}}:typeof o=="object"?c=Object.assign({},o):c=o,c.config&&(c.config.pageToken=n.nextPageToken),this.paramsInternal=c,this.pageInternalSize=(u=(a=c.config)===null||a===void 0?void 0:a.pageSize)!==null&&u!==void 0?u:this.pageInternal.length}initNextPage(e){this.init(this.nameInternal,e,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(e){return this.pageInternal[e]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const e=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:e,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const e=await this.requestInternal(this.params);return this.initNextPage(e),this.page}hasNextPage(){var e;return((e=this.params.config)===null||e===void 0?void 0:e.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Rb extends ao{constructor(e){super(),this.apiClient=e,this.create=async n=>{var o,a;if(this.apiClient.isVertexAI())return n.config=this.formatDestination(n.src,n.config),this.createInternal(n);const u=n.src;if(!(Array.isArray(n.src)||u.inlinedRequests!==void 0))return this.createInternal(n);const f=this.createInlinedGenerateContentRequest(n),p=f.path,h=f.body,y=_s(this.apiClient,n)._query||{};return this.apiClient.request({path:p,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(o=n.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(a=n.config)===null||a===void 0?void 0:a.abortSignal}).then(b=>b.json()).then(b=>Bo(b))},this.createEmbeddings=async n=>{var o,a;if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");if(!(n.src.inlinedRequests!==void 0))return this.createEmbeddingsInternal(n);const f=this.createInlinedEmbedContentRequest(n),p=f.path,h=f.body,y=Ps(this.apiClient,n)._query||{};return this.apiClient.request({path:p,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(o=n.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(a=n.config)===null||a===void 0?void 0:a.abortSignal}).then(b=>b.json()).then(b=>Bo(b))},this.list=async(n={})=>new Xi(io.PAGED_ITEM_BATCH_JOBS,o=>this.listInternal(o),await this.listInternal(n),n)}createInlinedGenerateContentRequest(e){const n=_s(this.apiClient,e),o=n._url,a=le("{model}:batchGenerateContent",o),f=n.batch.inputConfig.requests,p=f.requests,h=[];for(const y of p){const g=Object.assign({},y);if(g.systemInstruction){const b=g.systemInstruction;delete g.systemInstruction;const C=g.request;C.systemInstruction=b,g.request=C}h.push(g)}return f.requests=h,delete n.config,delete n._url,delete n._query,{path:a,body:n}}createInlinedEmbedContentRequest(e){const n=Ps(this.apiClient,e),o=n._url,a=le("{model}:asyncBatchEmbedContent",o),f=n.batch.inputConfig.requests,p=f.requests,h=[];delete f.config;for(const y of p){const g=Object.assign({},y),b=g.request;for(const C in g)C!=="request"&&(b[C]=g[C],delete g[C]);h.push(g)}return f.requests=h,delete n.config,delete n._url,delete n._query,{path:a,body:n}}getGcsUri(e){if(typeof e=="string")return e.startsWith("gs://")?e:void 0;if(!Array.isArray(e)&&e.gcsUri&&e.gcsUri.length>0)return e.gcsUri[0]}getBigqueryUri(e){if(typeof e=="string")return e.startsWith("bq://")?e:void 0;if(!Array.isArray(e))return e.bigqueryUri}formatDestination(e,n){const o=n?Object.assign({},n):{},a=Date.now().toString();if(o.displayName||(o.displayName=`genaiBatchJob_${a}`),o.dest===void 0){const u=this.getGcsUri(e),c=this.getBigqueryUri(e);if(u)u.endsWith(".jsonl")?o.dest=`${u.slice(0,-6)}/dest`:o.dest=`${u}_dest_${a}`;else if(c)o.dest=`${c}_dest_${a}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return o}async createInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=ib(this.apiClient,e);return f=le("batchPredictionJobs",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>Zs(y))}else{const h=_s(this.apiClient,e);return f=le("{model}:batchGenerateContent",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>Bo(y))}}async createEmbeddingsInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const f=Ps(this.apiClient,e);return u=le("{model}:asyncBatchEmbedContent",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),a.then(p=>Bo(p))}}async get(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=rb(this.apiClient,e);return f=le("batchPredictionJobs/{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>Zs(y))}else{const h=Qw(this.apiClient,e);return f=le("batches/{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>Bo(y))}}async cancel(e){var n,o,a,u;let c="",f={};if(this.apiClient.isVertexAI()){const p=ab(this.apiClient,e);c=le("batchPredictionJobs/{name}:cancel",p._url),f=p._query,delete p.config,delete p._url,delete p._query,await this.apiClient.request({path:c,queryParams:f,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal})}else{const p=Xw(this.apiClient,e);c=le("batches/{name}:cancel",p._url),f=p._query,delete p.config,delete p._url,delete p._query,await this.apiClient.request({path:c,queryParams:f,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal})}}async listInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=sb(e);return f=le("batchPredictionJobs",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Pb(y),b=new Dh;return Object.assign(b,g),b})}else{const h=jw(e);return f=le("batches",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Sb(y),b=new Dh;return Object.assign(b,g),b})}}async delete(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=ub(this.apiClient,e);return f=le("batchPredictionJobs/{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>Mb(y))}else{const h=eb(this.apiClient,e);return f=le("batches/{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>Ab(y))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Db(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function Nb(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function Lb(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function Fb(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function Ub(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],Db(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],Nb(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],Lb(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],Fb(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function Uh(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>Ub(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function qb(t){const e={},n=l(t,["behavior"]);n!=null&&s(e,["behavior"],n);const o=l(t,["description"]);o!=null&&s(e,["description"],o);const a=l(t,["name"]);a!=null&&s(e,["name"],a);const u=l(t,["parameters"]);u!=null&&s(e,["parameters"],u);const c=l(t,["parametersJsonSchema"]);c!=null&&s(e,["parametersJsonSchema"],c);const f=l(t,["response"]);f!=null&&s(e,["response"],f);const p=l(t,["responseJsonSchema"]);return p!=null&&s(e,["responseJsonSchema"],p),e}function Bb(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function Vb(t){const e={},n=l(t,["timeRangeFilter"]);if(n!=null&&s(e,["timeRangeFilter"],Bb(n)),l(t,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function zb(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function Hb(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],zb(n)),e}function Gb(){return{}}function Wb(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function $b(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let p=n;Array.isArray(p)&&(p=p.map(h=>qb(h))),s(e,["functionDeclarations"],p)}if(l(t,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const o=l(t,["googleSearch"]);o!=null&&s(e,["googleSearch"],Vb(o));const a=l(t,["googleSearchRetrieval"]);if(a!=null&&s(e,["googleSearchRetrieval"],Hb(a)),l(t,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(l(t,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");l(t,["urlContext"])!=null&&s(e,["urlContext"],Gb());const c=l(t,["computerUse"]);c!=null&&s(e,["computerUse"],Wb(c));const f=l(t,["codeExecution"]);return f!=null&&s(e,["codeExecution"],f),e}function Jb(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["allowedFunctionNames"]);return o!=null&&s(e,["allowedFunctionNames"],o),e}function Ob(t){const e={},n=l(t,["latitude"]);n!=null&&s(e,["latitude"],n);const o=l(t,["longitude"]);return o!=null&&s(e,["longitude"],o),e}function Yb(t){const e={},n=l(t,["latLng"]);n!=null&&s(e,["latLng"],Ob(n));const o=l(t,["languageCode"]);return o!=null&&s(e,["languageCode"],o),e}function Kb(t){const e={},n=l(t,["functionCallingConfig"]);n!=null&&s(e,["functionCallingConfig"],Jb(n));const o=l(t,["retrievalConfig"]);return o!=null&&s(e,["retrievalConfig"],Yb(o)),e}function Qb(t,e){const n={},o=l(t,["ttl"]);e!==void 0&&o!=null&&s(e,["ttl"],o);const a=l(t,["expireTime"]);e!==void 0&&a!=null&&s(e,["expireTime"],a);const u=l(t,["displayName"]);e!==void 0&&u!=null&&s(e,["displayName"],u);const c=l(t,["contents"]);if(e!==void 0&&c!=null){let y=Vt(c);Array.isArray(y)&&(y=y.map(g=>Uh(g))),s(e,["contents"],y)}const f=l(t,["systemInstruction"]);e!==void 0&&f!=null&&s(e,["systemInstruction"],Uh(dt(f)));const p=l(t,["tools"]);if(e!==void 0&&p!=null){let y=p;Array.isArray(y)&&(y=y.map(g=>$b(g))),s(e,["tools"],y)}const h=l(t,["toolConfig"]);if(e!==void 0&&h!=null&&s(e,["toolConfig"],Kb(h)),l(t,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return n}function Xb(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["model"],Op(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],Qb(a,n)),n}function Zb(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],mn(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function jb(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],mn(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function e1(t,e){const n={},o=l(t,["ttl"]);e!==void 0&&o!=null&&s(e,["ttl"],o);const a=l(t,["expireTime"]);return e!==void 0&&a!=null&&s(e,["expireTime"],a),n}function t1(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],mn(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],e1(a,n)),n}function n1(t,e){const n={},o=l(t,["pageSize"]);e!==void 0&&o!=null&&s(e,["_query","pageSize"],o);const a=l(t,["pageToken"]);return e!==void 0&&a!=null&&s(e,["_query","pageToken"],a),n}function o1(t){const e={},n=l(t,["config"]);return n!=null&&s(e,["config"],n1(n,e)),e}function i1(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function r1(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["data"]);o!=null&&s(e,["data"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function a1(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["fileUri"]);o!=null&&s(e,["fileUri"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function l1(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function s1(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],i1(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],r1(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],a1(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],l1(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function qh(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>s1(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function u1(t){const e={};if(l(t,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const n=l(t,["description"]);n!=null&&s(e,["description"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["parameters"]);a!=null&&s(e,["parameters"],a);const u=l(t,["parametersJsonSchema"]);u!=null&&s(e,["parametersJsonSchema"],u);const c=l(t,["response"]);c!=null&&s(e,["response"],c);const f=l(t,["responseJsonSchema"]);return f!=null&&s(e,["responseJsonSchema"],f),e}function c1(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function d1(t){const e={},n=l(t,["timeRangeFilter"]);n!=null&&s(e,["timeRangeFilter"],c1(n));const o=l(t,["excludeDomains"]);return o!=null&&s(e,["excludeDomains"],o),e}function f1(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function h1(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],f1(n)),e}function p1(t){const e={},n=l(t,["excludeDomains"]);return n!=null&&s(e,["excludeDomains"],n),e}function m1(t){const e={},n=l(t,["apiKeyString"]);return n!=null&&s(e,["apiKeyString"],n),e}function y1(t){const e={},n=l(t,["apiKeyConfig"]);n!=null&&s(e,["apiKeyConfig"],m1(n));const o=l(t,["authType"]);o!=null&&s(e,["authType"],o);const a=l(t,["googleServiceAccountConfig"]);a!=null&&s(e,["googleServiceAccountConfig"],a);const u=l(t,["httpBasicAuthConfig"]);u!=null&&s(e,["httpBasicAuthConfig"],u);const c=l(t,["oauthConfig"]);c!=null&&s(e,["oauthConfig"],c);const f=l(t,["oidcConfig"]);return f!=null&&s(e,["oidcConfig"],f),e}function g1(t){const e={},n=l(t,["authConfig"]);return n!=null&&s(e,["authConfig"],y1(n)),e}function v1(){return{}}function w1(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function b1(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let g=n;Array.isArray(g)&&(g=g.map(b=>u1(b))),s(e,["functionDeclarations"],g)}const o=l(t,["retrieval"]);o!=null&&s(e,["retrieval"],o);const a=l(t,["googleSearch"]);a!=null&&s(e,["googleSearch"],d1(a));const u=l(t,["googleSearchRetrieval"]);u!=null&&s(e,["googleSearchRetrieval"],h1(u));const c=l(t,["enterpriseWebSearch"]);c!=null&&s(e,["enterpriseWebSearch"],p1(c));const f=l(t,["googleMaps"]);f!=null&&s(e,["googleMaps"],g1(f)),l(t,["urlContext"])!=null&&s(e,["urlContext"],v1());const h=l(t,["computerUse"]);h!=null&&s(e,["computerUse"],w1(h));const y=l(t,["codeExecution"]);return y!=null&&s(e,["codeExecution"],y),e}function C1(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["allowedFunctionNames"]);return o!=null&&s(e,["allowedFunctionNames"],o),e}function k1(t){const e={},n=l(t,["latitude"]);n!=null&&s(e,["latitude"],n);const o=l(t,["longitude"]);return o!=null&&s(e,["longitude"],o),e}function T1(t){const e={},n=l(t,["latLng"]);n!=null&&s(e,["latLng"],k1(n));const o=l(t,["languageCode"]);return o!=null&&s(e,["languageCode"],o),e}function x1(t){const e={},n=l(t,["functionCallingConfig"]);n!=null&&s(e,["functionCallingConfig"],C1(n));const o=l(t,["retrievalConfig"]);return o!=null&&s(e,["retrievalConfig"],T1(o)),e}function E1(t,e){const n={},o=l(t,["ttl"]);e!==void 0&&o!=null&&s(e,["ttl"],o);const a=l(t,["expireTime"]);e!==void 0&&a!=null&&s(e,["expireTime"],a);const u=l(t,["displayName"]);e!==void 0&&u!=null&&s(e,["displayName"],u);const c=l(t,["contents"]);if(e!==void 0&&c!=null){let g=Vt(c);Array.isArray(g)&&(g=g.map(b=>qh(b))),s(e,["contents"],g)}const f=l(t,["systemInstruction"]);e!==void 0&&f!=null&&s(e,["systemInstruction"],qh(dt(f)));const p=l(t,["tools"]);if(e!==void 0&&p!=null){let g=p;Array.isArray(g)&&(g=g.map(b=>b1(b))),s(e,["tools"],g)}const h=l(t,["toolConfig"]);e!==void 0&&h!=null&&s(e,["toolConfig"],x1(h));const y=l(t,["kmsKeyName"]);return e!==void 0&&y!=null&&s(e,["encryption_spec","kmsKeyName"],y),n}function S1(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["model"],Op(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],E1(a,n)),n}function A1(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],mn(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function I1(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],mn(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function _1(t,e){const n={},o=l(t,["ttl"]);e!==void 0&&o!=null&&s(e,["ttl"],o);const a=l(t,["expireTime"]);return e!==void 0&&a!=null&&s(e,["expireTime"],a),n}function P1(t,e){const n={},o=l(e,["name"]);o!=null&&s(n,["_url","name"],mn(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],_1(a,n)),n}function M1(t,e){const n={},o=l(t,["pageSize"]);e!==void 0&&o!=null&&s(e,["_query","pageSize"],o);const a=l(t,["pageToken"]);return e!==void 0&&a!=null&&s(e,["_query","pageToken"],a),n}function R1(t){const e={},n=l(t,["config"]);return n!=null&&s(e,["config"],M1(n,e)),e}function ba(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["model"]);a!=null&&s(e,["model"],a);const u=l(t,["createTime"]);u!=null&&s(e,["createTime"],u);const c=l(t,["updateTime"]);c!=null&&s(e,["updateTime"],c);const f=l(t,["expireTime"]);f!=null&&s(e,["expireTime"],f);const p=l(t,["usageMetadata"]);return p!=null&&s(e,["usageMetadata"],p),e}function D1(t){const e={},n=l(t,["sdkHttpResponse"]);return n!=null&&s(e,["sdkHttpResponse"],n),e}function N1(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["cachedContents"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>ba(c))),s(e,["cachedContents"],u)}return e}function Ca(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["model"]);a!=null&&s(e,["model"],a);const u=l(t,["createTime"]);u!=null&&s(e,["createTime"],u);const c=l(t,["updateTime"]);c!=null&&s(e,["updateTime"],c);const f=l(t,["expireTime"]);f!=null&&s(e,["expireTime"],f);const p=l(t,["usageMetadata"]);return p!=null&&s(e,["usageMetadata"],p),e}function L1(t){const e={},n=l(t,["sdkHttpResponse"]);return n!=null&&s(e,["sdkHttpResponse"],n),e}function F1(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["cachedContents"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>Ca(c))),s(e,["cachedContents"],u)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class U1 extends ao{constructor(e){super(),this.apiClient=e,this.list=async(n={})=>new Xi(io.PAGED_ITEM_CACHED_CONTENTS,o=>this.listInternal(o),await this.listInternal(n),n)}async create(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=S1(this.apiClient,e);return f=le("cachedContents",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>Ca(y))}else{const h=Xb(this.apiClient,e);return f=le("cachedContents",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>ba(y))}}async get(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=A1(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>Ca(y))}else{const h=Zb(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>ba(y))}}async delete(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=I1(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=L1(y),b=new Mh;return Object.assign(b,g),b})}else{const h=jb(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=D1(y),b=new Mh;return Object.assign(b,g),b})}}async update(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=P1(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>Ca(y))}else{const h=t1(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>ba(y))}}async listInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=R1(e);return f=le("cachedContents",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=F1(y),b=new Rh;return Object.assign(b,g),b})}else{const h=o1(e);return f=le("cachedContents",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=N1(y),b=new Rh;return Object.assign(b,g),b})}}}function Bh(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],o=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ze(t){return this instanceof ze?(this.v=t,this):new ze(t)}function Go(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(t,e||[]),a,u=[];return a=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),f("next"),f("throw"),f("return",c),a[Symbol.asyncIterator]=function(){return this},a;function c(C){return function(T){return Promise.resolve(T).then(C,g)}}function f(C,T){o[C]&&(a[C]=function(A){return new Promise(function(R,_){u.push([C,A,R,_])>1||p(C,A)})},T&&(a[C]=T(a[C])))}function p(C,T){try{h(o[C](T))}catch(A){b(u[0][3],A)}}function h(C){C.value instanceof ze?Promise.resolve(C.value.v).then(y,g):b(u[0][2],C)}function y(C){p("next",C)}function g(C){p("throw",C)}function b(C,T){C(T),u.shift(),u.length&&p(u[0][0],u[0][1])}}function $i(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Bh=="function"?Bh(t):t[Symbol.iterator](),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(u){n[u]=t[u]&&function(c){return new Promise(function(f,p){c=t[u](c),a(f,p,c.done,c.value)})}}function a(u,c,f,p){Promise.resolve(p).then(function(h){u({value:h,done:f})},c)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function q1(t){var e;if(t.candidates==null||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;return n===void 0?!1:sm(n)}function sm(t){if(t.parts===void 0||t.parts.length===0)return!1;for(const e of t.parts)if(e===void 0||Object.keys(e).length===0)return!1;return!0}function B1(t){if(t.length!==0){for(const e of t)if(e.role!=="user"&&e.role!=="model")throw new Error(`Role must be user or model, but got ${e.role}.`)}}function Vh(t){if(t===void 0||t.length===0)return[];const e=[],n=t.length;let o=0;for(;o<n;)if(t[o].role==="user")e.push(t[o]),o++;else{const a=[];let u=!0;for(;o<n&&t[o].role==="model";)a.push(t[o]),u&&!sm(t[o])&&(u=!1),o++;u?e.push(...a):e.pop()}return e}class V1{constructor(e,n){this.modelsModule=e,this.apiClient=n}create(e){return new z1(this.apiClient,this.modelsModule,e.model,e.config,structuredClone(e.history))}}class z1{constructor(e,n,o,a={},u=[]){this.apiClient=e,this.modelsModule=n,this.model=o,this.config=a,this.history=u,this.sendPromise=Promise.resolve(),B1(u)}async sendMessage(e){var n;await this.sendPromise;const o=dt(e.message),a=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(o),config:(n=e.config)!==null&&n!==void 0?n:this.config});return this.sendPromise=(async()=>{var u,c,f;const p=await a,h=(c=(u=p.candidates)===null||u===void 0?void 0:u[0])===null||c===void 0?void 0:c.content,y=p.automaticFunctionCallingHistory,g=this.getHistory(!0).length;let b=[];y!=null&&(b=(f=y.slice(g))!==null&&f!==void 0?f:[]);const C=h?[h]:[];this.recordHistory(o,C,b)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),a}async sendMessageStream(e){var n;await this.sendPromise;const o=dt(e.message),a=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(o),config:(n=e.config)!==null&&n!==void 0?n:this.config});this.sendPromise=a.then(()=>{}).catch(()=>{});const u=await a;return this.processStreamResponse(u,o)}getHistory(e=!1){const n=e?Vh(this.history):this.history;return structuredClone(n)}processStreamResponse(e,n){var o,a;return Go(this,arguments,function*(){var c,f,p,h;const y=[];try{for(var g=!0,b=$i(e),C;C=yield ze(b.next()),c=C.done,!c;g=!0){h=C.value,g=!1;const T=h;if(q1(T)){const A=(a=(o=T.candidates)===null||o===void 0?void 0:o[0])===null||a===void 0?void 0:a.content;A!==void 0&&y.push(A)}yield yield ze(T)}}catch(T){f={error:T}}finally{try{!g&&!c&&(p=b.return)&&(yield ze(p.call(b)))}finally{if(f)throw f.error}}this.recordHistory(n,y)})}recordHistory(e,n,o){let a=[];n.length>0&&n.every(u=>u.role!==void 0)?a=n:a.push({role:"model",parts:[]}),o&&o.length>0?this.history.push(...Vh(o)):this.history.push(e),this.history.push(...a)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ma extends Error{constructor(e){super(e.message),this.name="ApiError",this.status=e.status,Object.setPrototypeOf(this,Ma.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function H1(t,e){const n={},o=l(t,["pageSize"]);e!==void 0&&o!=null&&s(e,["_query","pageSize"],o);const a=l(t,["pageToken"]);return e!==void 0&&a!=null&&s(e,["_query","pageToken"],a),n}function G1(t){const e={},n=l(t,["config"]);return n!=null&&s(e,["config"],H1(n,e)),e}function W1(t){const e={},n=l(t,["details"]);n!=null&&s(e,["details"],n);const o=l(t,["message"]);o!=null&&s(e,["message"],o);const a=l(t,["code"]);return a!=null&&s(e,["code"],a),e}function $1(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["mimeType"]);a!=null&&s(e,["mimeType"],a);const u=l(t,["sizeBytes"]);u!=null&&s(e,["sizeBytes"],u);const c=l(t,["createTime"]);c!=null&&s(e,["createTime"],c);const f=l(t,["expirationTime"]);f!=null&&s(e,["expirationTime"],f);const p=l(t,["updateTime"]);p!=null&&s(e,["updateTime"],p);const h=l(t,["sha256Hash"]);h!=null&&s(e,["sha256Hash"],h);const y=l(t,["uri"]);y!=null&&s(e,["uri"],y);const g=l(t,["downloadUri"]);g!=null&&s(e,["downloadUri"],g);const b=l(t,["state"]);b!=null&&s(e,["state"],b);const C=l(t,["source"]);C!=null&&s(e,["source"],C);const T=l(t,["videoMetadata"]);T!=null&&s(e,["videoMetadata"],T);const A=l(t,["error"]);return A!=null&&s(e,["error"],W1(A)),e}function J1(t){const e={},n=l(t,["file"]);n!=null&&s(e,["file"],$1(n));const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function O1(t){const e={},n=l(t,["name"]);n!=null&&s(e,["_url","file"],jp(n));const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function Y1(t){const e={},n=l(t,["name"]);n!=null&&s(e,["_url","file"],jp(n));const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function K1(t){const e={},n=l(t,["details"]);n!=null&&s(e,["details"],n);const o=l(t,["message"]);o!=null&&s(e,["message"],o);const a=l(t,["code"]);return a!=null&&s(e,["code"],a),e}function js(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["mimeType"]);a!=null&&s(e,["mimeType"],a);const u=l(t,["sizeBytes"]);u!=null&&s(e,["sizeBytes"],u);const c=l(t,["createTime"]);c!=null&&s(e,["createTime"],c);const f=l(t,["expirationTime"]);f!=null&&s(e,["expirationTime"],f);const p=l(t,["updateTime"]);p!=null&&s(e,["updateTime"],p);const h=l(t,["sha256Hash"]);h!=null&&s(e,["sha256Hash"],h);const y=l(t,["uri"]);y!=null&&s(e,["uri"],y);const g=l(t,["downloadUri"]);g!=null&&s(e,["downloadUri"],g);const b=l(t,["state"]);b!=null&&s(e,["state"],b);const C=l(t,["source"]);C!=null&&s(e,["source"],C);const T=l(t,["videoMetadata"]);T!=null&&s(e,["videoMetadata"],T);const A=l(t,["error"]);return A!=null&&s(e,["error"],K1(A)),e}function Q1(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["files"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>js(c))),s(e,["files"],u)}return e}function X1(t){const e={},n=l(t,["sdkHttpResponse"]);return n!=null&&s(e,["sdkHttpResponse"],n),e}function Z1(t){const e={},n=l(t,["sdkHttpResponse"]);return n!=null&&s(e,["sdkHttpResponse"],n),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class j1 extends ao{constructor(e){super(),this.apiClient=e,this.list=async(n={})=>new Xi(io.PAGED_ITEM_FILES,o=>this.listInternal(o),await this.listInternal(n),n)}async upload(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(e.file,e.config).then(n=>js(n))}async download(e){await this.apiClient.downloadFile(e)}async listInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const f=G1(e);return u=le("files",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json().then(h=>{const y=h;return y.sdkHttpResponse={headers:p.headers},y})),a.then(p=>{const h=Q1(p),y=new iw;return Object.assign(y,h),y})}}async createInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const f=J1(e);return u=le("upload/v1beta/files",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),a.then(p=>{const h=X1(p),y=new rw;return Object.assign(y,h),y})}}async get(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const f=O1(e);return u=le("files/{file}",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),a.then(p=>js(p))}}async delete(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const f=Y1(e);return u=le("files/{file}",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json().then(h=>{const y=h;return y.sdkHttpResponse={headers:p.headers},y})),a.then(p=>{const h=Z1(p),y=new aw;return Object.assign(y,h),y})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function e0(t){const e={},n=l(t,["voiceName"]);return n!=null&&s(e,["voiceName"],n),e}function um(t){const e={},n=l(t,["prebuiltVoiceConfig"]);return n!=null&&s(e,["prebuiltVoiceConfig"],e0(n)),e}function t0(t){const e={},n=l(t,["speaker"]);n!=null&&s(e,["speaker"],n);const o=l(t,["voiceConfig"]);return o!=null&&s(e,["voiceConfig"],um(o)),e}function n0(t){const e={},n=l(t,["speakerVoiceConfigs"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>t0(a))),s(e,["speakerVoiceConfigs"],o)}return e}function o0(t){const e={},n=l(t,["voiceConfig"]);n!=null&&s(e,["voiceConfig"],um(n));const o=l(t,["multiSpeakerVoiceConfig"]);o!=null&&s(e,["multiSpeakerVoiceConfig"],n0(o));const a=l(t,["languageCode"]);return a!=null&&s(e,["languageCode"],a),e}function i0(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function r0(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function a0(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function l0(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function s0(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],i0(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],r0(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],a0(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],l0(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function u0(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>s0(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function c0(t){const e={},n=l(t,["behavior"]);n!=null&&s(e,["behavior"],n);const o=l(t,["description"]);o!=null&&s(e,["description"],o);const a=l(t,["name"]);a!=null&&s(e,["name"],a);const u=l(t,["parameters"]);u!=null&&s(e,["parameters"],u);const c=l(t,["parametersJsonSchema"]);c!=null&&s(e,["parametersJsonSchema"],c);const f=l(t,["response"]);f!=null&&s(e,["response"],f);const p=l(t,["responseJsonSchema"]);return p!=null&&s(e,["responseJsonSchema"],p),e}function d0(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function f0(t){const e={},n=l(t,["timeRangeFilter"]);if(n!=null&&s(e,["timeRangeFilter"],d0(n)),l(t,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function h0(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function p0(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],h0(n)),e}function m0(){return{}}function y0(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function g0(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let p=n;Array.isArray(p)&&(p=p.map(h=>c0(h))),s(e,["functionDeclarations"],p)}if(l(t,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const o=l(t,["googleSearch"]);o!=null&&s(e,["googleSearch"],f0(o));const a=l(t,["googleSearchRetrieval"]);if(a!=null&&s(e,["googleSearchRetrieval"],p0(a)),l(t,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(l(t,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");l(t,["urlContext"])!=null&&s(e,["urlContext"],m0());const c=l(t,["computerUse"]);c!=null&&s(e,["computerUse"],y0(c));const f=l(t,["codeExecution"]);return f!=null&&s(e,["codeExecution"],f),e}function v0(t){const e={},n=l(t,["handle"]);if(n!=null&&s(e,["handle"],n),l(t,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function zh(){return{}}function w0(t){const e={},n=l(t,["disabled"]);n!=null&&s(e,["disabled"],n);const o=l(t,["startOfSpeechSensitivity"]);o!=null&&s(e,["startOfSpeechSensitivity"],o);const a=l(t,["endOfSpeechSensitivity"]);a!=null&&s(e,["endOfSpeechSensitivity"],a);const u=l(t,["prefixPaddingMs"]);u!=null&&s(e,["prefixPaddingMs"],u);const c=l(t,["silenceDurationMs"]);return c!=null&&s(e,["silenceDurationMs"],c),e}function b0(t){const e={},n=l(t,["automaticActivityDetection"]);n!=null&&s(e,["automaticActivityDetection"],w0(n));const o=l(t,["activityHandling"]);o!=null&&s(e,["activityHandling"],o);const a=l(t,["turnCoverage"]);return a!=null&&s(e,["turnCoverage"],a),e}function C0(t){const e={},n=l(t,["targetTokens"]);return n!=null&&s(e,["targetTokens"],n),e}function k0(t){const e={},n=l(t,["triggerTokens"]);n!=null&&s(e,["triggerTokens"],n);const o=l(t,["slidingWindow"]);return o!=null&&s(e,["slidingWindow"],C0(o)),e}function T0(t){const e={},n=l(t,["proactiveAudio"]);return n!=null&&s(e,["proactiveAudio"],n),e}function x0(t,e){const n={},o=l(t,["generationConfig"]);e!==void 0&&o!=null&&s(e,["setup","generationConfig"],o);const a=l(t,["responseModalities"]);e!==void 0&&a!=null&&s(e,["setup","generationConfig","responseModalities"],a);const u=l(t,["temperature"]);e!==void 0&&u!=null&&s(e,["setup","generationConfig","temperature"],u);const c=l(t,["topP"]);e!==void 0&&c!=null&&s(e,["setup","generationConfig","topP"],c);const f=l(t,["topK"]);e!==void 0&&f!=null&&s(e,["setup","generationConfig","topK"],f);const p=l(t,["maxOutputTokens"]);e!==void 0&&p!=null&&s(e,["setup","generationConfig","maxOutputTokens"],p);const h=l(t,["mediaResolution"]);e!==void 0&&h!=null&&s(e,["setup","generationConfig","mediaResolution"],h);const y=l(t,["seed"]);e!==void 0&&y!=null&&s(e,["setup","generationConfig","seed"],y);const g=l(t,["speechConfig"]);e!==void 0&&g!=null&&s(e,["setup","generationConfig","speechConfig"],o0(Tu(g)));const b=l(t,["enableAffectiveDialog"]);e!==void 0&&b!=null&&s(e,["setup","generationConfig","enableAffectiveDialog"],b);const C=l(t,["systemInstruction"]);e!==void 0&&C!=null&&s(e,["setup","systemInstruction"],u0(dt(C)));const T=l(t,["tools"]);if(e!==void 0&&T!=null){let G=Yo(T);Array.isArray(G)&&(G=G.map(L=>g0(Oo(L)))),s(e,["setup","tools"],G)}const A=l(t,["sessionResumption"]);e!==void 0&&A!=null&&s(e,["setup","sessionResumption"],v0(A));const R=l(t,["inputAudioTranscription"]);e!==void 0&&R!=null&&s(e,["setup","inputAudioTranscription"],zh());const _=l(t,["outputAudioTranscription"]);e!==void 0&&_!=null&&s(e,["setup","outputAudioTranscription"],zh());const U=l(t,["realtimeInputConfig"]);e!==void 0&&U!=null&&s(e,["setup","realtimeInputConfig"],b0(U));const D=l(t,["contextWindowCompression"]);e!==void 0&&D!=null&&s(e,["setup","contextWindowCompression"],k0(D));const z=l(t,["proactivity"]);return e!==void 0&&z!=null&&s(e,["setup","proactivity"],T0(z)),n}function E0(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["setup","model"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],x0(a,n)),n}function S0(){return{}}function A0(){return{}}function I0(t){const e={},n=l(t,["media"]);n!=null&&s(e,["mediaChunks"],Yp(n));const o=l(t,["audio"]);o!=null&&s(e,["audio"],Qp(o));const a=l(t,["audioStreamEnd"]);a!=null&&s(e,["audioStreamEnd"],a);const u=l(t,["video"]);u!=null&&s(e,["video"],Kp(u));const c=l(t,["text"]);return c!=null&&s(e,["text"],c),l(t,["activityStart"])!=null&&s(e,["activityStart"],S0()),l(t,["activityEnd"])!=null&&s(e,["activityEnd"],A0()),e}function cm(t){const e={},n=l(t,["text"]);n!=null&&s(e,["text"],n);const o=l(t,["weight"]);return o!=null&&s(e,["weight"],o),e}function _0(t){const e={},n=l(t,["weightedPrompts"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>cm(a))),s(e,["weightedPrompts"],o)}return e}function dm(t){const e={},n=l(t,["temperature"]);n!=null&&s(e,["temperature"],n);const o=l(t,["topK"]);o!=null&&s(e,["topK"],o);const a=l(t,["seed"]);a!=null&&s(e,["seed"],a);const u=l(t,["guidance"]);u!=null&&s(e,["guidance"],u);const c=l(t,["bpm"]);c!=null&&s(e,["bpm"],c);const f=l(t,["density"]);f!=null&&s(e,["density"],f);const p=l(t,["brightness"]);p!=null&&s(e,["brightness"],p);const h=l(t,["scale"]);h!=null&&s(e,["scale"],h);const y=l(t,["muteBass"]);y!=null&&s(e,["muteBass"],y);const g=l(t,["muteDrums"]);g!=null&&s(e,["muteDrums"],g);const b=l(t,["onlyBassAndDrums"]);b!=null&&s(e,["onlyBassAndDrums"],b);const C=l(t,["musicGenerationMode"]);return C!=null&&s(e,["musicGenerationMode"],C),e}function P0(t){const e={},n=l(t,["musicGenerationConfig"]);return n!=null&&s(e,["musicGenerationConfig"],dm(n)),e}function fm(t){const e={},n=l(t,["model"]);return n!=null&&s(e,["model"],n),e}function hm(t){const e={},n=l(t,["weightedPrompts"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>cm(a))),s(e,["weightedPrompts"],o)}return e}function eu(t){const e={},n=l(t,["setup"]);n!=null&&s(e,["setup"],fm(n));const o=l(t,["clientContent"]);o!=null&&s(e,["clientContent"],hm(o));const a=l(t,["musicGenerationConfig"]);a!=null&&s(e,["musicGenerationConfig"],dm(a));const u=l(t,["playbackControl"]);return u!=null&&s(e,["playbackControl"],u),e}function M0(t){const e={},n=l(t,["voiceName"]);return n!=null&&s(e,["voiceName"],n),e}function R0(t){const e={},n=l(t,["prebuiltVoiceConfig"]);return n!=null&&s(e,["prebuiltVoiceConfig"],M0(n)),e}function D0(t){const e={},n=l(t,["voiceConfig"]);if(n!=null&&s(e,["voiceConfig"],R0(n)),l(t,["multiSpeakerVoiceConfig"])!==void 0)throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");const o=l(t,["languageCode"]);return o!=null&&s(e,["languageCode"],o),e}function N0(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function L0(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["data"]);o!=null&&s(e,["data"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function F0(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["fileUri"]);o!=null&&s(e,["fileUri"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function U0(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function q0(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],N0(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],L0(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],F0(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],U0(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function B0(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>q0(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function V0(t){const e={};if(l(t,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const n=l(t,["description"]);n!=null&&s(e,["description"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["parameters"]);a!=null&&s(e,["parameters"],a);const u=l(t,["parametersJsonSchema"]);u!=null&&s(e,["parametersJsonSchema"],u);const c=l(t,["response"]);c!=null&&s(e,["response"],c);const f=l(t,["responseJsonSchema"]);return f!=null&&s(e,["responseJsonSchema"],f),e}function z0(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function H0(t){const e={},n=l(t,["timeRangeFilter"]);n!=null&&s(e,["timeRangeFilter"],z0(n));const o=l(t,["excludeDomains"]);return o!=null&&s(e,["excludeDomains"],o),e}function G0(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function W0(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],G0(n)),e}function $0(t){const e={},n=l(t,["excludeDomains"]);return n!=null&&s(e,["excludeDomains"],n),e}function J0(t){const e={},n=l(t,["apiKeyString"]);return n!=null&&s(e,["apiKeyString"],n),e}function O0(t){const e={},n=l(t,["apiKeyConfig"]);n!=null&&s(e,["apiKeyConfig"],J0(n));const o=l(t,["authType"]);o!=null&&s(e,["authType"],o);const a=l(t,["googleServiceAccountConfig"]);a!=null&&s(e,["googleServiceAccountConfig"],a);const u=l(t,["httpBasicAuthConfig"]);u!=null&&s(e,["httpBasicAuthConfig"],u);const c=l(t,["oauthConfig"]);c!=null&&s(e,["oauthConfig"],c);const f=l(t,["oidcConfig"]);return f!=null&&s(e,["oidcConfig"],f),e}function Y0(t){const e={},n=l(t,["authConfig"]);return n!=null&&s(e,["authConfig"],O0(n)),e}function K0(){return{}}function Q0(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function X0(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let g=n;Array.isArray(g)&&(g=g.map(b=>V0(b))),s(e,["functionDeclarations"],g)}const o=l(t,["retrieval"]);o!=null&&s(e,["retrieval"],o);const a=l(t,["googleSearch"]);a!=null&&s(e,["googleSearch"],H0(a));const u=l(t,["googleSearchRetrieval"]);u!=null&&s(e,["googleSearchRetrieval"],W0(u));const c=l(t,["enterpriseWebSearch"]);c!=null&&s(e,["enterpriseWebSearch"],$0(c));const f=l(t,["googleMaps"]);f!=null&&s(e,["googleMaps"],Y0(f)),l(t,["urlContext"])!=null&&s(e,["urlContext"],K0());const h=l(t,["computerUse"]);h!=null&&s(e,["computerUse"],Q0(h));const y=l(t,["codeExecution"]);return y!=null&&s(e,["codeExecution"],y),e}function Z0(t){const e={},n=l(t,["handle"]);n!=null&&s(e,["handle"],n);const o=l(t,["transparent"]);return o!=null&&s(e,["transparent"],o),e}function Hh(){return{}}function j0(t){const e={},n=l(t,["disabled"]);n!=null&&s(e,["disabled"],n);const o=l(t,["startOfSpeechSensitivity"]);o!=null&&s(e,["startOfSpeechSensitivity"],o);const a=l(t,["endOfSpeechSensitivity"]);a!=null&&s(e,["endOfSpeechSensitivity"],a);const u=l(t,["prefixPaddingMs"]);u!=null&&s(e,["prefixPaddingMs"],u);const c=l(t,["silenceDurationMs"]);return c!=null&&s(e,["silenceDurationMs"],c),e}function eC(t){const e={},n=l(t,["automaticActivityDetection"]);n!=null&&s(e,["automaticActivityDetection"],j0(n));const o=l(t,["activityHandling"]);o!=null&&s(e,["activityHandling"],o);const a=l(t,["turnCoverage"]);return a!=null&&s(e,["turnCoverage"],a),e}function tC(t){const e={},n=l(t,["targetTokens"]);return n!=null&&s(e,["targetTokens"],n),e}function nC(t){const e={},n=l(t,["triggerTokens"]);n!=null&&s(e,["triggerTokens"],n);const o=l(t,["slidingWindow"]);return o!=null&&s(e,["slidingWindow"],tC(o)),e}function oC(t){const e={},n=l(t,["proactiveAudio"]);return n!=null&&s(e,["proactiveAudio"],n),e}function iC(t,e){const n={},o=l(t,["generationConfig"]);e!==void 0&&o!=null&&s(e,["setup","generationConfig"],o);const a=l(t,["responseModalities"]);e!==void 0&&a!=null&&s(e,["setup","generationConfig","responseModalities"],a);const u=l(t,["temperature"]);e!==void 0&&u!=null&&s(e,["setup","generationConfig","temperature"],u);const c=l(t,["topP"]);e!==void 0&&c!=null&&s(e,["setup","generationConfig","topP"],c);const f=l(t,["topK"]);e!==void 0&&f!=null&&s(e,["setup","generationConfig","topK"],f);const p=l(t,["maxOutputTokens"]);e!==void 0&&p!=null&&s(e,["setup","generationConfig","maxOutputTokens"],p);const h=l(t,["mediaResolution"]);e!==void 0&&h!=null&&s(e,["setup","generationConfig","mediaResolution"],h);const y=l(t,["seed"]);e!==void 0&&y!=null&&s(e,["setup","generationConfig","seed"],y);const g=l(t,["speechConfig"]);e!==void 0&&g!=null&&s(e,["setup","generationConfig","speechConfig"],D0(Tu(g)));const b=l(t,["enableAffectiveDialog"]);e!==void 0&&b!=null&&s(e,["setup","generationConfig","enableAffectiveDialog"],b);const C=l(t,["systemInstruction"]);e!==void 0&&C!=null&&s(e,["setup","systemInstruction"],B0(dt(C)));const T=l(t,["tools"]);if(e!==void 0&&T!=null){let G=Yo(T);Array.isArray(G)&&(G=G.map(L=>X0(Oo(L)))),s(e,["setup","tools"],G)}const A=l(t,["sessionResumption"]);e!==void 0&&A!=null&&s(e,["setup","sessionResumption"],Z0(A));const R=l(t,["inputAudioTranscription"]);e!==void 0&&R!=null&&s(e,["setup","inputAudioTranscription"],Hh());const _=l(t,["outputAudioTranscription"]);e!==void 0&&_!=null&&s(e,["setup","outputAudioTranscription"],Hh());const U=l(t,["realtimeInputConfig"]);e!==void 0&&U!=null&&s(e,["setup","realtimeInputConfig"],eC(U));const D=l(t,["contextWindowCompression"]);e!==void 0&&D!=null&&s(e,["setup","contextWindowCompression"],nC(D));const z=l(t,["proactivity"]);return e!==void 0&&z!=null&&s(e,["setup","proactivity"],oC(z)),n}function rC(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["setup","model"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],iC(a,n)),n}function aC(){return{}}function lC(){return{}}function sC(t){const e={},n=l(t,["media"]);n!=null&&s(e,["mediaChunks"],Yp(n));const o=l(t,["audio"]);o!=null&&s(e,["audio"],Qp(o));const a=l(t,["audioStreamEnd"]);a!=null&&s(e,["audioStreamEnd"],a);const u=l(t,["video"]);u!=null&&s(e,["video"],Kp(u));const c=l(t,["text"]);return c!=null&&s(e,["text"],c),l(t,["activityStart"])!=null&&s(e,["activityStart"],aC()),l(t,["activityEnd"])!=null&&s(e,["activityEnd"],lC()),e}function uC(){return{}}function cC(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function dC(t){const e={},n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function fC(t){const e={},n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function pm(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function hC(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],cC(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],dC(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],fC(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],pm(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function pC(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>hC(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function Gh(t){const e={},n=l(t,["text"]);n!=null&&s(e,["text"],n);const o=l(t,["finished"]);return o!=null&&s(e,["finished"],o),e}function mC(t){const e={},n=l(t,["retrievedUrl"]);n!=null&&s(e,["retrievedUrl"],n);const o=l(t,["urlRetrievalStatus"]);return o!=null&&s(e,["urlRetrievalStatus"],o),e}function yC(t){const e={},n=l(t,["urlMetadata"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>mC(a))),s(e,["urlMetadata"],o)}return e}function gC(t){const e={},n=l(t,["modelTurn"]);n!=null&&s(e,["modelTurn"],pC(n));const o=l(t,["turnComplete"]);o!=null&&s(e,["turnComplete"],o);const a=l(t,["interrupted"]);a!=null&&s(e,["interrupted"],a);const u=l(t,["groundingMetadata"]);u!=null&&s(e,["groundingMetadata"],u);const c=l(t,["generationComplete"]);c!=null&&s(e,["generationComplete"],c);const f=l(t,["inputTranscription"]);f!=null&&s(e,["inputTranscription"],Gh(f));const p=l(t,["outputTranscription"]);p!=null&&s(e,["outputTranscription"],Gh(p));const h=l(t,["urlContextMetadata"]);return h!=null&&s(e,["urlContextMetadata"],yC(h)),e}function vC(t){const e={},n=l(t,["functionCalls"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>pm(a))),s(e,["functionCalls"],o)}return e}function wC(t){const e={},n=l(t,["ids"]);return n!=null&&s(e,["ids"],n),e}function pa(t){const e={},n=l(t,["modality"]);n!=null&&s(e,["modality"],n);const o=l(t,["tokenCount"]);return o!=null&&s(e,["tokenCount"],o),e}function bC(t){const e={},n=l(t,["promptTokenCount"]);n!=null&&s(e,["promptTokenCount"],n);const o=l(t,["cachedContentTokenCount"]);o!=null&&s(e,["cachedContentTokenCount"],o);const a=l(t,["responseTokenCount"]);a!=null&&s(e,["responseTokenCount"],a);const u=l(t,["toolUsePromptTokenCount"]);u!=null&&s(e,["toolUsePromptTokenCount"],u);const c=l(t,["thoughtsTokenCount"]);c!=null&&s(e,["thoughtsTokenCount"],c);const f=l(t,["totalTokenCount"]);f!=null&&s(e,["totalTokenCount"],f);const p=l(t,["promptTokensDetails"]);if(p!=null){let b=p;Array.isArray(b)&&(b=b.map(C=>pa(C))),s(e,["promptTokensDetails"],b)}const h=l(t,["cacheTokensDetails"]);if(h!=null){let b=h;Array.isArray(b)&&(b=b.map(C=>pa(C))),s(e,["cacheTokensDetails"],b)}const y=l(t,["responseTokensDetails"]);if(y!=null){let b=y;Array.isArray(b)&&(b=b.map(C=>pa(C))),s(e,["responseTokensDetails"],b)}const g=l(t,["toolUsePromptTokensDetails"]);if(g!=null){let b=g;Array.isArray(b)&&(b=b.map(C=>pa(C))),s(e,["toolUsePromptTokensDetails"],b)}return e}function CC(t){const e={},n=l(t,["timeLeft"]);return n!=null&&s(e,["timeLeft"],n),e}function kC(t){const e={},n=l(t,["newHandle"]);n!=null&&s(e,["newHandle"],n);const o=l(t,["resumable"]);o!=null&&s(e,["resumable"],o);const a=l(t,["lastConsumedClientMessageIndex"]);return a!=null&&s(e,["lastConsumedClientMessageIndex"],a),e}function TC(t){const e={};l(t,["setupComplete"])!=null&&s(e,["setupComplete"],uC());const o=l(t,["serverContent"]);o!=null&&s(e,["serverContent"],gC(o));const a=l(t,["toolCall"]);a!=null&&s(e,["toolCall"],vC(a));const u=l(t,["toolCallCancellation"]);u!=null&&s(e,["toolCallCancellation"],wC(u));const c=l(t,["usageMetadata"]);c!=null&&s(e,["usageMetadata"],bC(c));const f=l(t,["goAway"]);f!=null&&s(e,["goAway"],CC(f));const p=l(t,["sessionResumptionUpdate"]);return p!=null&&s(e,["sessionResumptionUpdate"],kC(p)),e}function xC(){return{}}function EC(t){const e={},n=l(t,["text"]);n!=null&&s(e,["text"],n);const o=l(t,["weight"]);return o!=null&&s(e,["weight"],o),e}function SC(t){const e={},n=l(t,["weightedPrompts"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>EC(a))),s(e,["weightedPrompts"],o)}return e}function AC(t){const e={},n=l(t,["temperature"]);n!=null&&s(e,["temperature"],n);const o=l(t,["topK"]);o!=null&&s(e,["topK"],o);const a=l(t,["seed"]);a!=null&&s(e,["seed"],a);const u=l(t,["guidance"]);u!=null&&s(e,["guidance"],u);const c=l(t,["bpm"]);c!=null&&s(e,["bpm"],c);const f=l(t,["density"]);f!=null&&s(e,["density"],f);const p=l(t,["brightness"]);p!=null&&s(e,["brightness"],p);const h=l(t,["scale"]);h!=null&&s(e,["scale"],h);const y=l(t,["muteBass"]);y!=null&&s(e,["muteBass"],y);const g=l(t,["muteDrums"]);g!=null&&s(e,["muteDrums"],g);const b=l(t,["onlyBassAndDrums"]);b!=null&&s(e,["onlyBassAndDrums"],b);const C=l(t,["musicGenerationMode"]);return C!=null&&s(e,["musicGenerationMode"],C),e}function IC(t){const e={},n=l(t,["clientContent"]);n!=null&&s(e,["clientContent"],SC(n));const o=l(t,["musicGenerationConfig"]);return o!=null&&s(e,["musicGenerationConfig"],AC(o)),e}function _C(t){const e={},n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);o!=null&&s(e,["mimeType"],o);const a=l(t,["sourceMetadata"]);return a!=null&&s(e,["sourceMetadata"],IC(a)),e}function PC(t){const e={},n=l(t,["audioChunks"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>_C(a))),s(e,["audioChunks"],o)}return e}function MC(t){const e={},n=l(t,["text"]);n!=null&&s(e,["text"],n);const o=l(t,["filteredReason"]);return o!=null&&s(e,["filteredReason"],o),e}function RC(t){const e={};l(t,["setupComplete"])!=null&&s(e,["setupComplete"],xC());const o=l(t,["serverContent"]);o!=null&&s(e,["serverContent"],PC(o));const a=l(t,["filteredPrompt"]);return a!=null&&s(e,["filteredPrompt"],MC(a)),e}function DC(t){const e={},n=l(t,["sessionId"]);return n!=null&&s(e,["sessionId"],n),e}function NC(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function LC(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["data"]);o!=null&&s(e,["data"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function FC(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["fileUri"]);o!=null&&s(e,["fileUri"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function mm(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function UC(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],NC(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],LC(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],FC(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],mm(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function qC(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>UC(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function Wh(t){const e={},n=l(t,["text"]);n!=null&&s(e,["text"],n);const o=l(t,["finished"]);return o!=null&&s(e,["finished"],o),e}function BC(t){const e={},n=l(t,["modelTurn"]);n!=null&&s(e,["modelTurn"],qC(n));const o=l(t,["turnComplete"]);o!=null&&s(e,["turnComplete"],o);const a=l(t,["interrupted"]);a!=null&&s(e,["interrupted"],a);const u=l(t,["groundingMetadata"]);u!=null&&s(e,["groundingMetadata"],u);const c=l(t,["generationComplete"]);c!=null&&s(e,["generationComplete"],c);const f=l(t,["inputTranscription"]);f!=null&&s(e,["inputTranscription"],Wh(f));const p=l(t,["outputTranscription"]);return p!=null&&s(e,["outputTranscription"],Wh(p)),e}function VC(t){const e={},n=l(t,["functionCalls"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>mm(a))),s(e,["functionCalls"],o)}return e}function zC(t){const e={},n=l(t,["ids"]);return n!=null&&s(e,["ids"],n),e}function ma(t){const e={},n=l(t,["modality"]);n!=null&&s(e,["modality"],n);const o=l(t,["tokenCount"]);return o!=null&&s(e,["tokenCount"],o),e}function HC(t){const e={},n=l(t,["promptTokenCount"]);n!=null&&s(e,["promptTokenCount"],n);const o=l(t,["cachedContentTokenCount"]);o!=null&&s(e,["cachedContentTokenCount"],o);const a=l(t,["candidatesTokenCount"]);a!=null&&s(e,["responseTokenCount"],a);const u=l(t,["toolUsePromptTokenCount"]);u!=null&&s(e,["toolUsePromptTokenCount"],u);const c=l(t,["thoughtsTokenCount"]);c!=null&&s(e,["thoughtsTokenCount"],c);const f=l(t,["totalTokenCount"]);f!=null&&s(e,["totalTokenCount"],f);const p=l(t,["promptTokensDetails"]);if(p!=null){let C=p;Array.isArray(C)&&(C=C.map(T=>ma(T))),s(e,["promptTokensDetails"],C)}const h=l(t,["cacheTokensDetails"]);if(h!=null){let C=h;Array.isArray(C)&&(C=C.map(T=>ma(T))),s(e,["cacheTokensDetails"],C)}const y=l(t,["candidatesTokensDetails"]);if(y!=null){let C=y;Array.isArray(C)&&(C=C.map(T=>ma(T))),s(e,["responseTokensDetails"],C)}const g=l(t,["toolUsePromptTokensDetails"]);if(g!=null){let C=g;Array.isArray(C)&&(C=C.map(T=>ma(T))),s(e,["toolUsePromptTokensDetails"],C)}const b=l(t,["trafficType"]);return b!=null&&s(e,["trafficType"],b),e}function GC(t){const e={},n=l(t,["timeLeft"]);return n!=null&&s(e,["timeLeft"],n),e}function WC(t){const e={},n=l(t,["newHandle"]);n!=null&&s(e,["newHandle"],n);const o=l(t,["resumable"]);o!=null&&s(e,["resumable"],o);const a=l(t,["lastConsumedClientMessageIndex"]);return a!=null&&s(e,["lastConsumedClientMessageIndex"],a),e}function $C(t){const e={},n=l(t,["setupComplete"]);n!=null&&s(e,["setupComplete"],DC(n));const o=l(t,["serverContent"]);o!=null&&s(e,["serverContent"],BC(o));const a=l(t,["toolCall"]);a!=null&&s(e,["toolCall"],VC(a));const u=l(t,["toolCallCancellation"]);u!=null&&s(e,["toolCallCancellation"],zC(u));const c=l(t,["usageMetadata"]);c!=null&&s(e,["usageMetadata"],HC(c));const f=l(t,["goAway"]);f!=null&&s(e,["goAway"],GC(f));const p=l(t,["sessionResumptionUpdate"]);return p!=null&&s(e,["sessionResumptionUpdate"],WC(p)),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function JC(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function OC(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function YC(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function KC(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function QC(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],JC(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],OC(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],YC(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],KC(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function Ra(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>QC(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function XC(t){const e={},n=l(t,["anyOf"]);n!=null&&s(e,["anyOf"],n);const o=l(t,["default"]);o!=null&&s(e,["default"],o);const a=l(t,["description"]);a!=null&&s(e,["description"],a);const u=l(t,["enum"]);u!=null&&s(e,["enum"],u);const c=l(t,["example"]);c!=null&&s(e,["example"],c);const f=l(t,["format"]);f!=null&&s(e,["format"],f);const p=l(t,["items"]);p!=null&&s(e,["items"],p);const h=l(t,["maxItems"]);h!=null&&s(e,["maxItems"],h);const y=l(t,["maxLength"]);y!=null&&s(e,["maxLength"],y);const g=l(t,["maxProperties"]);g!=null&&s(e,["maxProperties"],g);const b=l(t,["maximum"]);b!=null&&s(e,["maximum"],b);const C=l(t,["minItems"]);C!=null&&s(e,["minItems"],C);const T=l(t,["minLength"]);T!=null&&s(e,["minLength"],T);const A=l(t,["minProperties"]);A!=null&&s(e,["minProperties"],A);const R=l(t,["minimum"]);R!=null&&s(e,["minimum"],R);const _=l(t,["nullable"]);_!=null&&s(e,["nullable"],_);const U=l(t,["pattern"]);U!=null&&s(e,["pattern"],U);const D=l(t,["properties"]);D!=null&&s(e,["properties"],D);const z=l(t,["propertyOrdering"]);z!=null&&s(e,["propertyOrdering"],z);const G=l(t,["required"]);G!=null&&s(e,["required"],G);const L=l(t,["title"]);L!=null&&s(e,["title"],L);const Q=l(t,["type"]);return Q!=null&&s(e,["type"],Q),e}function ZC(t){const e={};if(l(t,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const n=l(t,["category"]);n!=null&&s(e,["category"],n);const o=l(t,["threshold"]);return o!=null&&s(e,["threshold"],o),e}function jC(t){const e={},n=l(t,["behavior"]);n!=null&&s(e,["behavior"],n);const o=l(t,["description"]);o!=null&&s(e,["description"],o);const a=l(t,["name"]);a!=null&&s(e,["name"],a);const u=l(t,["parameters"]);u!=null&&s(e,["parameters"],u);const c=l(t,["parametersJsonSchema"]);c!=null&&s(e,["parametersJsonSchema"],c);const f=l(t,["response"]);f!=null&&s(e,["response"],f);const p=l(t,["responseJsonSchema"]);return p!=null&&s(e,["responseJsonSchema"],p),e}function ek(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function tk(t){const e={},n=l(t,["timeRangeFilter"]);if(n!=null&&s(e,["timeRangeFilter"],ek(n)),l(t,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function nk(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function ok(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],nk(n)),e}function ik(){return{}}function rk(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function ak(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let p=n;Array.isArray(p)&&(p=p.map(h=>jC(h))),s(e,["functionDeclarations"],p)}if(l(t,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const o=l(t,["googleSearch"]);o!=null&&s(e,["googleSearch"],tk(o));const a=l(t,["googleSearchRetrieval"]);if(a!=null&&s(e,["googleSearchRetrieval"],ok(a)),l(t,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(l(t,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");l(t,["urlContext"])!=null&&s(e,["urlContext"],ik());const c=l(t,["computerUse"]);c!=null&&s(e,["computerUse"],rk(c));const f=l(t,["codeExecution"]);return f!=null&&s(e,["codeExecution"],f),e}function lk(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["allowedFunctionNames"]);return o!=null&&s(e,["allowedFunctionNames"],o),e}function sk(t){const e={},n=l(t,["latitude"]);n!=null&&s(e,["latitude"],n);const o=l(t,["longitude"]);return o!=null&&s(e,["longitude"],o),e}function uk(t){const e={},n=l(t,["latLng"]);n!=null&&s(e,["latLng"],sk(n));const o=l(t,["languageCode"]);return o!=null&&s(e,["languageCode"],o),e}function ck(t){const e={},n=l(t,["functionCallingConfig"]);n!=null&&s(e,["functionCallingConfig"],lk(n));const o=l(t,["retrievalConfig"]);return o!=null&&s(e,["retrievalConfig"],uk(o)),e}function dk(t){const e={},n=l(t,["voiceName"]);return n!=null&&s(e,["voiceName"],n),e}function ym(t){const e={},n=l(t,["prebuiltVoiceConfig"]);return n!=null&&s(e,["prebuiltVoiceConfig"],dk(n)),e}function fk(t){const e={},n=l(t,["speaker"]);n!=null&&s(e,["speaker"],n);const o=l(t,["voiceConfig"]);return o!=null&&s(e,["voiceConfig"],ym(o)),e}function hk(t){const e={},n=l(t,["speakerVoiceConfigs"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>fk(a))),s(e,["speakerVoiceConfigs"],o)}return e}function pk(t){const e={},n=l(t,["voiceConfig"]);n!=null&&s(e,["voiceConfig"],ym(n));const o=l(t,["multiSpeakerVoiceConfig"]);o!=null&&s(e,["multiSpeakerVoiceConfig"],hk(o));const a=l(t,["languageCode"]);return a!=null&&s(e,["languageCode"],a),e}function mk(t){const e={},n=l(t,["includeThoughts"]);n!=null&&s(e,["includeThoughts"],n);const o=l(t,["thinkingBudget"]);return o!=null&&s(e,["thinkingBudget"],o),e}function yk(t,e,n){const o={},a=l(e,["systemInstruction"]);n!==void 0&&a!=null&&s(n,["systemInstruction"],Ra(dt(a)));const u=l(e,["temperature"]);u!=null&&s(o,["temperature"],u);const c=l(e,["topP"]);c!=null&&s(o,["topP"],c);const f=l(e,["topK"]);f!=null&&s(o,["topK"],f);const p=l(e,["candidateCount"]);p!=null&&s(o,["candidateCount"],p);const h=l(e,["maxOutputTokens"]);h!=null&&s(o,["maxOutputTokens"],h);const y=l(e,["stopSequences"]);y!=null&&s(o,["stopSequences"],y);const g=l(e,["responseLogprobs"]);g!=null&&s(o,["responseLogprobs"],g);const b=l(e,["logprobs"]);b!=null&&s(o,["logprobs"],b);const C=l(e,["presencePenalty"]);C!=null&&s(o,["presencePenalty"],C);const T=l(e,["frequencyPenalty"]);T!=null&&s(o,["frequencyPenalty"],T);const A=l(e,["seed"]);A!=null&&s(o,["seed"],A);const R=l(e,["responseMimeType"]);R!=null&&s(o,["responseMimeType"],R);const _=l(e,["responseSchema"]);_!=null&&s(o,["responseSchema"],XC(Cu(_)));const U=l(e,["responseJsonSchema"]);if(U!=null&&s(o,["responseJsonSchema"],U),l(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(l(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const D=l(e,["safetySettings"]);if(n!==void 0&&D!=null){let J=D;Array.isArray(J)&&(J=J.map(ee=>ZC(ee))),s(n,["safetySettings"],J)}const z=l(e,["tools"]);if(n!==void 0&&z!=null){let J=Yo(z);Array.isArray(J)&&(J=J.map(ee=>ak(Oo(ee)))),s(n,["tools"],J)}const G=l(e,["toolConfig"]);if(n!==void 0&&G!=null&&s(n,["toolConfig"],ck(G)),l(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const L=l(e,["cachedContent"]);n!==void 0&&L!=null&&s(n,["cachedContent"],mn(t,L));const Q=l(e,["responseModalities"]);Q!=null&&s(o,["responseModalities"],Q);const se=l(e,["mediaResolution"]);se!=null&&s(o,["mediaResolution"],se);const Z=l(e,["speechConfig"]);if(Z!=null&&s(o,["speechConfig"],pk(ku(Z))),l(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const N=l(e,["thinkingConfig"]);return N!=null&&s(o,["thinkingConfig"],mk(N)),o}function $h(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["contents"]);if(a!=null){let c=Vt(a);Array.isArray(c)&&(c=c.map(f=>Ra(f))),s(n,["contents"],c)}const u=l(e,["config"]);return u!=null&&s(n,["generationConfig"],yk(t,u,n)),n}function gk(t,e){const n={},o=l(t,["taskType"]);e!==void 0&&o!=null&&s(e,["requests[]","taskType"],o);const a=l(t,["title"]);e!==void 0&&a!=null&&s(e,["requests[]","title"],a);const u=l(t,["outputDimensionality"]);if(e!==void 0&&u!=null&&s(e,["requests[]","outputDimensionality"],u),l(t,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(l(t,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return n}function vk(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["contents"]);a!=null&&s(n,["requests[]","content"],bu(t,a));const u=l(e,["config"]);u!=null&&s(n,["config"],gk(u,n));const c=l(e,["model"]);return c!==void 0&&s(n,["requests[]","model"],De(t,c)),n}function wk(t,e){const n={};if(l(t,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(l(t,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const o=l(t,["numberOfImages"]);e!==void 0&&o!=null&&s(e,["parameters","sampleCount"],o);const a=l(t,["aspectRatio"]);e!==void 0&&a!=null&&s(e,["parameters","aspectRatio"],a);const u=l(t,["guidanceScale"]);if(e!==void 0&&u!=null&&s(e,["parameters","guidanceScale"],u),l(t,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const c=l(t,["safetyFilterLevel"]);e!==void 0&&c!=null&&s(e,["parameters","safetySetting"],c);const f=l(t,["personGeneration"]);e!==void 0&&f!=null&&s(e,["parameters","personGeneration"],f);const p=l(t,["includeSafetyAttributes"]);e!==void 0&&p!=null&&s(e,["parameters","includeSafetyAttributes"],p);const h=l(t,["includeRaiReason"]);e!==void 0&&h!=null&&s(e,["parameters","includeRaiReason"],h);const y=l(t,["language"]);e!==void 0&&y!=null&&s(e,["parameters","language"],y);const g=l(t,["outputMimeType"]);e!==void 0&&g!=null&&s(e,["parameters","outputOptions","mimeType"],g);const b=l(t,["outputCompressionQuality"]);if(e!==void 0&&b!=null&&s(e,["parameters","outputOptions","compressionQuality"],b),l(t,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");const C=l(t,["imageSize"]);if(e!==void 0&&C!=null&&s(e,["parameters","sampleImageSize"],C),l(t,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return n}function bk(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["prompt"]);a!=null&&s(n,["instances[0]","prompt"],a);const u=l(e,["config"]);return u!=null&&s(n,["config"],wk(u,n)),n}function Ck(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","name"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function kk(t,e,n){const o={},a=l(e,["pageSize"]);n!==void 0&&a!=null&&s(n,["_query","pageSize"],a);const u=l(e,["pageToken"]);n!==void 0&&u!=null&&s(n,["_query","pageToken"],u);const c=l(e,["filter"]);n!==void 0&&c!=null&&s(n,["_query","filter"],c);const f=l(e,["queryBase"]);return n!==void 0&&f!=null&&s(n,["_url","models_url"],em(t,f)),o}function Tk(t,e){const n={},o=l(e,["config"]);return o!=null&&s(n,["config"],kk(t,o,n)),n}function xk(t,e){const n={},o=l(t,["displayName"]);e!==void 0&&o!=null&&s(e,["displayName"],o);const a=l(t,["description"]);e!==void 0&&a!=null&&s(e,["description"],a);const u=l(t,["defaultCheckpointId"]);return e!==void 0&&u!=null&&s(e,["defaultCheckpointId"],u),n}function Ek(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","name"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],xk(a,n)),n}function Sk(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","name"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function Ak(t){const e={};if(l(t,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(l(t,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(l(t,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return e}function Ik(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["contents"]);if(a!=null){let c=Vt(a);Array.isArray(c)&&(c=c.map(f=>Ra(f))),s(n,["contents"],c)}const u=l(e,["config"]);return u!=null&&s(n,["config"],Ak(u)),n}function gm(t){const e={};if(l(t,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const n=l(t,["imageBytes"]);n!=null&&s(e,["bytesBase64Encoded"],lo(n));const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function _k(t,e){const n={},o=l(t,["prompt"]);e!==void 0&&o!=null&&s(e,["instances[0]","prompt"],o);const a=l(t,["image"]);if(e!==void 0&&a!=null&&s(e,["instances[0]","image"],gm(a)),l(t,["video"])!==void 0)throw new Error("video parameter is not supported in Gemini API.");return n}function Pk(t,e){const n={},o=l(t,["numberOfVideos"]);if(e!==void 0&&o!=null&&s(e,["parameters","sampleCount"],o),l(t,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(l(t,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const a=l(t,["durationSeconds"]);if(e!==void 0&&a!=null&&s(e,["parameters","durationSeconds"],a),l(t,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const u=l(t,["aspectRatio"]);e!==void 0&&u!=null&&s(e,["parameters","aspectRatio"],u);const c=l(t,["resolution"]);e!==void 0&&c!=null&&s(e,["parameters","resolution"],c);const f=l(t,["personGeneration"]);if(e!==void 0&&f!=null&&s(e,["parameters","personGeneration"],f),l(t,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const p=l(t,["negativePrompt"]);e!==void 0&&p!=null&&s(e,["parameters","negativePrompt"],p);const h=l(t,["enhancePrompt"]);if(e!==void 0&&h!=null&&s(e,["parameters","enhancePrompt"],h),l(t,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");if(l(t,["lastFrame"])!==void 0)throw new Error("lastFrame parameter is not supported in Gemini API.");if(l(t,["referenceImages"])!==void 0)throw new Error("referenceImages parameter is not supported in Gemini API.");if(l(t,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(l(t,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return n}function Mk(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["prompt"]);a!=null&&s(n,["instances[0]","prompt"],a);const u=l(e,["image"]);if(u!=null&&s(n,["instances[0]","image"],gm(u)),l(e,["video"])!==void 0)throw new Error("video parameter is not supported in Gemini API.");const c=l(e,["source"]);c!=null&&s(n,["config"],_k(c,n));const f=l(e,["config"]);return f!=null&&s(n,["config"],Pk(f,n)),n}function Rk(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function Dk(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["data"]);o!=null&&s(e,["data"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function Nk(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["fileUri"]);o!=null&&s(e,["fileUri"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function Lk(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function Fk(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],Rk(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],Dk(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],Nk(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],Lk(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function Qo(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>Fk(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function Uk(t){const e={},n=l(t,["anyOf"]);n!=null&&s(e,["anyOf"],n);const o=l(t,["default"]);o!=null&&s(e,["default"],o);const a=l(t,["description"]);a!=null&&s(e,["description"],a);const u=l(t,["enum"]);u!=null&&s(e,["enum"],u);const c=l(t,["example"]);c!=null&&s(e,["example"],c);const f=l(t,["format"]);f!=null&&s(e,["format"],f);const p=l(t,["items"]);p!=null&&s(e,["items"],p);const h=l(t,["maxItems"]);h!=null&&s(e,["maxItems"],h);const y=l(t,["maxLength"]);y!=null&&s(e,["maxLength"],y);const g=l(t,["maxProperties"]);g!=null&&s(e,["maxProperties"],g);const b=l(t,["maximum"]);b!=null&&s(e,["maximum"],b);const C=l(t,["minItems"]);C!=null&&s(e,["minItems"],C);const T=l(t,["minLength"]);T!=null&&s(e,["minLength"],T);const A=l(t,["minProperties"]);A!=null&&s(e,["minProperties"],A);const R=l(t,["minimum"]);R!=null&&s(e,["minimum"],R);const _=l(t,["nullable"]);_!=null&&s(e,["nullable"],_);const U=l(t,["pattern"]);U!=null&&s(e,["pattern"],U);const D=l(t,["properties"]);D!=null&&s(e,["properties"],D);const z=l(t,["propertyOrdering"]);z!=null&&s(e,["propertyOrdering"],z);const G=l(t,["required"]);G!=null&&s(e,["required"],G);const L=l(t,["title"]);L!=null&&s(e,["title"],L);const Q=l(t,["type"]);return Q!=null&&s(e,["type"],Q),e}function qk(t){const e={},n=l(t,["featureSelectionPreference"]);return n!=null&&s(e,["featureSelectionPreference"],n),e}function Bk(t){const e={},n=l(t,["method"]);n!=null&&s(e,["method"],n);const o=l(t,["category"]);o!=null&&s(e,["category"],o);const a=l(t,["threshold"]);return a!=null&&s(e,["threshold"],a),e}function Vk(t){const e={};if(l(t,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const n=l(t,["description"]);n!=null&&s(e,["description"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["parameters"]);a!=null&&s(e,["parameters"],a);const u=l(t,["parametersJsonSchema"]);u!=null&&s(e,["parametersJsonSchema"],u);const c=l(t,["response"]);c!=null&&s(e,["response"],c);const f=l(t,["responseJsonSchema"]);return f!=null&&s(e,["responseJsonSchema"],f),e}function zk(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function Hk(t){const e={},n=l(t,["timeRangeFilter"]);n!=null&&s(e,["timeRangeFilter"],zk(n));const o=l(t,["excludeDomains"]);return o!=null&&s(e,["excludeDomains"],o),e}function Gk(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function Wk(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],Gk(n)),e}function $k(t){const e={},n=l(t,["excludeDomains"]);return n!=null&&s(e,["excludeDomains"],n),e}function Jk(t){const e={},n=l(t,["apiKeyString"]);return n!=null&&s(e,["apiKeyString"],n),e}function Ok(t){const e={},n=l(t,["apiKeyConfig"]);n!=null&&s(e,["apiKeyConfig"],Jk(n));const o=l(t,["authType"]);o!=null&&s(e,["authType"],o);const a=l(t,["googleServiceAccountConfig"]);a!=null&&s(e,["googleServiceAccountConfig"],a);const u=l(t,["httpBasicAuthConfig"]);u!=null&&s(e,["httpBasicAuthConfig"],u);const c=l(t,["oauthConfig"]);c!=null&&s(e,["oauthConfig"],c);const f=l(t,["oidcConfig"]);return f!=null&&s(e,["oidcConfig"],f),e}function Yk(t){const e={},n=l(t,["authConfig"]);return n!=null&&s(e,["authConfig"],Ok(n)),e}function Kk(){return{}}function Qk(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function vm(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let g=n;Array.isArray(g)&&(g=g.map(b=>Vk(b))),s(e,["functionDeclarations"],g)}const o=l(t,["retrieval"]);o!=null&&s(e,["retrieval"],o);const a=l(t,["googleSearch"]);a!=null&&s(e,["googleSearch"],Hk(a));const u=l(t,["googleSearchRetrieval"]);u!=null&&s(e,["googleSearchRetrieval"],Wk(u));const c=l(t,["enterpriseWebSearch"]);c!=null&&s(e,["enterpriseWebSearch"],$k(c));const f=l(t,["googleMaps"]);f!=null&&s(e,["googleMaps"],Yk(f)),l(t,["urlContext"])!=null&&s(e,["urlContext"],Kk());const h=l(t,["computerUse"]);h!=null&&s(e,["computerUse"],Qk(h));const y=l(t,["codeExecution"]);return y!=null&&s(e,["codeExecution"],y),e}function Xk(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["allowedFunctionNames"]);return o!=null&&s(e,["allowedFunctionNames"],o),e}function Zk(t){const e={},n=l(t,["latitude"]);n!=null&&s(e,["latitude"],n);const o=l(t,["longitude"]);return o!=null&&s(e,["longitude"],o),e}function jk(t){const e={},n=l(t,["latLng"]);n!=null&&s(e,["latLng"],Zk(n));const o=l(t,["languageCode"]);return o!=null&&s(e,["languageCode"],o),e}function eT(t){const e={},n=l(t,["functionCallingConfig"]);n!=null&&s(e,["functionCallingConfig"],Xk(n));const o=l(t,["retrievalConfig"]);return o!=null&&s(e,["retrievalConfig"],jk(o)),e}function tT(t){const e={},n=l(t,["voiceName"]);return n!=null&&s(e,["voiceName"],n),e}function nT(t){const e={},n=l(t,["prebuiltVoiceConfig"]);return n!=null&&s(e,["prebuiltVoiceConfig"],tT(n)),e}function oT(t){const e={},n=l(t,["voiceConfig"]);if(n!=null&&s(e,["voiceConfig"],nT(n)),l(t,["multiSpeakerVoiceConfig"])!==void 0)throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");const o=l(t,["languageCode"]);return o!=null&&s(e,["languageCode"],o),e}function iT(t){const e={},n=l(t,["includeThoughts"]);n!=null&&s(e,["includeThoughts"],n);const o=l(t,["thinkingBudget"]);return o!=null&&s(e,["thinkingBudget"],o),e}function rT(t,e,n){const o={},a=l(e,["systemInstruction"]);n!==void 0&&a!=null&&s(n,["systemInstruction"],Qo(dt(a)));const u=l(e,["temperature"]);u!=null&&s(o,["temperature"],u);const c=l(e,["topP"]);c!=null&&s(o,["topP"],c);const f=l(e,["topK"]);f!=null&&s(o,["topK"],f);const p=l(e,["candidateCount"]);p!=null&&s(o,["candidateCount"],p);const h=l(e,["maxOutputTokens"]);h!=null&&s(o,["maxOutputTokens"],h);const y=l(e,["stopSequences"]);y!=null&&s(o,["stopSequences"],y);const g=l(e,["responseLogprobs"]);g!=null&&s(o,["responseLogprobs"],g);const b=l(e,["logprobs"]);b!=null&&s(o,["logprobs"],b);const C=l(e,["presencePenalty"]);C!=null&&s(o,["presencePenalty"],C);const T=l(e,["frequencyPenalty"]);T!=null&&s(o,["frequencyPenalty"],T);const A=l(e,["seed"]);A!=null&&s(o,["seed"],A);const R=l(e,["responseMimeType"]);R!=null&&s(o,["responseMimeType"],R);const _=l(e,["responseSchema"]);_!=null&&s(o,["responseSchema"],Uk(Cu(_)));const U=l(e,["responseJsonSchema"]);U!=null&&s(o,["responseJsonSchema"],U);const D=l(e,["routingConfig"]);D!=null&&s(o,["routingConfig"],D);const z=l(e,["modelSelectionConfig"]);z!=null&&s(o,["modelConfig"],qk(z));const G=l(e,["safetySettings"]);if(n!==void 0&&G!=null){let re=G;Array.isArray(re)&&(re=re.map(Se=>Bk(Se))),s(n,["safetySettings"],re)}const L=l(e,["tools"]);if(n!==void 0&&L!=null){let re=Yo(L);Array.isArray(re)&&(re=re.map(Se=>vm(Oo(Se)))),s(n,["tools"],re)}const Q=l(e,["toolConfig"]);n!==void 0&&Q!=null&&s(n,["toolConfig"],eT(Q));const se=l(e,["labels"]);n!==void 0&&se!=null&&s(n,["labels"],se);const Z=l(e,["cachedContent"]);n!==void 0&&Z!=null&&s(n,["cachedContent"],mn(t,Z));const N=l(e,["responseModalities"]);N!=null&&s(o,["responseModalities"],N);const J=l(e,["mediaResolution"]);J!=null&&s(o,["mediaResolution"],J);const ee=l(e,["speechConfig"]);ee!=null&&s(o,["speechConfig"],oT(ku(ee)));const ne=l(e,["audioTimestamp"]);ne!=null&&s(o,["audioTimestamp"],ne);const oe=l(e,["thinkingConfig"]);return oe!=null&&s(o,["thinkingConfig"],iT(oe)),o}function Jh(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["contents"]);if(a!=null){let c=Vt(a);Array.isArray(c)&&(c=c.map(f=>Qo(f))),s(n,["contents"],c)}const u=l(e,["config"]);return u!=null&&s(n,["generationConfig"],rT(t,u,n)),n}function aT(t,e){const n={},o=l(t,["taskType"]);e!==void 0&&o!=null&&s(e,["instances[]","task_type"],o);const a=l(t,["title"]);e!==void 0&&a!=null&&s(e,["instances[]","title"],a);const u=l(t,["outputDimensionality"]);e!==void 0&&u!=null&&s(e,["parameters","outputDimensionality"],u);const c=l(t,["mimeType"]);e!==void 0&&c!=null&&s(e,["instances[]","mimeType"],c);const f=l(t,["autoTruncate"]);return e!==void 0&&f!=null&&s(e,["parameters","autoTruncate"],f),n}function lT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["contents"]);a!=null&&s(n,["instances[]","content"],bu(t,a));const u=l(e,["config"]);return u!=null&&s(n,["config"],aT(u,n)),n}function sT(t,e){const n={},o=l(t,["outputGcsUri"]);e!==void 0&&o!=null&&s(e,["parameters","storageUri"],o);const a=l(t,["negativePrompt"]);e!==void 0&&a!=null&&s(e,["parameters","negativePrompt"],a);const u=l(t,["numberOfImages"]);e!==void 0&&u!=null&&s(e,["parameters","sampleCount"],u);const c=l(t,["aspectRatio"]);e!==void 0&&c!=null&&s(e,["parameters","aspectRatio"],c);const f=l(t,["guidanceScale"]);e!==void 0&&f!=null&&s(e,["parameters","guidanceScale"],f);const p=l(t,["seed"]);e!==void 0&&p!=null&&s(e,["parameters","seed"],p);const h=l(t,["safetyFilterLevel"]);e!==void 0&&h!=null&&s(e,["parameters","safetySetting"],h);const y=l(t,["personGeneration"]);e!==void 0&&y!=null&&s(e,["parameters","personGeneration"],y);const g=l(t,["includeSafetyAttributes"]);e!==void 0&&g!=null&&s(e,["parameters","includeSafetyAttributes"],g);const b=l(t,["includeRaiReason"]);e!==void 0&&b!=null&&s(e,["parameters","includeRaiReason"],b);const C=l(t,["language"]);e!==void 0&&C!=null&&s(e,["parameters","language"],C);const T=l(t,["outputMimeType"]);e!==void 0&&T!=null&&s(e,["parameters","outputOptions","mimeType"],T);const A=l(t,["outputCompressionQuality"]);e!==void 0&&A!=null&&s(e,["parameters","outputOptions","compressionQuality"],A);const R=l(t,["addWatermark"]);e!==void 0&&R!=null&&s(e,["parameters","addWatermark"],R);const _=l(t,["imageSize"]);e!==void 0&&_!=null&&s(e,["parameters","sampleImageSize"],_);const U=l(t,["enhancePrompt"]);return e!==void 0&&U!=null&&s(e,["parameters","enhancePrompt"],U),n}function uT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["prompt"]);a!=null&&s(n,["instances[0]","prompt"],a);const u=l(e,["config"]);return u!=null&&s(n,["config"],sT(u,n)),n}function Kt(t){const e={},n=l(t,["gcsUri"]);n!=null&&s(e,["gcsUri"],n);const o=l(t,["imageBytes"]);o!=null&&s(e,["bytesBase64Encoded"],lo(o));const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function cT(t){const e={},n=l(t,["maskMode"]);n!=null&&s(e,["maskMode"],n);const o=l(t,["segmentationClasses"]);o!=null&&s(e,["maskClasses"],o);const a=l(t,["maskDilation"]);return a!=null&&s(e,["dilation"],a),e}function dT(t){const e={},n=l(t,["controlType"]);n!=null&&s(e,["controlType"],n);const o=l(t,["enableControlImageComputation"]);return o!=null&&s(e,["computeControl"],o),e}function fT(t){const e={},n=l(t,["styleDescription"]);return n!=null&&s(e,["styleDescription"],n),e}function hT(t){const e={},n=l(t,["subjectType"]);n!=null&&s(e,["subjectType"],n);const o=l(t,["subjectDescription"]);return o!=null&&s(e,["subjectDescription"],o),e}function pT(t){const e={},n=l(t,["referenceImage"]);n!=null&&s(e,["referenceImage"],Kt(n));const o=l(t,["referenceId"]);o!=null&&s(e,["referenceId"],o);const a=l(t,["referenceType"]);a!=null&&s(e,["referenceType"],a);const u=l(t,["maskImageConfig"]);u!=null&&s(e,["maskImageConfig"],cT(u));const c=l(t,["controlImageConfig"]);c!=null&&s(e,["controlImageConfig"],dT(c));const f=l(t,["styleImageConfig"]);f!=null&&s(e,["styleImageConfig"],fT(f));const p=l(t,["subjectImageConfig"]);return p!=null&&s(e,["subjectImageConfig"],hT(p)),e}function mT(t,e){const n={},o=l(t,["outputGcsUri"]);e!==void 0&&o!=null&&s(e,["parameters","storageUri"],o);const a=l(t,["negativePrompt"]);e!==void 0&&a!=null&&s(e,["parameters","negativePrompt"],a);const u=l(t,["numberOfImages"]);e!==void 0&&u!=null&&s(e,["parameters","sampleCount"],u);const c=l(t,["aspectRatio"]);e!==void 0&&c!=null&&s(e,["parameters","aspectRatio"],c);const f=l(t,["guidanceScale"]);e!==void 0&&f!=null&&s(e,["parameters","guidanceScale"],f);const p=l(t,["seed"]);e!==void 0&&p!=null&&s(e,["parameters","seed"],p);const h=l(t,["safetyFilterLevel"]);e!==void 0&&h!=null&&s(e,["parameters","safetySetting"],h);const y=l(t,["personGeneration"]);e!==void 0&&y!=null&&s(e,["parameters","personGeneration"],y);const g=l(t,["includeSafetyAttributes"]);e!==void 0&&g!=null&&s(e,["parameters","includeSafetyAttributes"],g);const b=l(t,["includeRaiReason"]);e!==void 0&&b!=null&&s(e,["parameters","includeRaiReason"],b);const C=l(t,["language"]);e!==void 0&&C!=null&&s(e,["parameters","language"],C);const T=l(t,["outputMimeType"]);e!==void 0&&T!=null&&s(e,["parameters","outputOptions","mimeType"],T);const A=l(t,["outputCompressionQuality"]);e!==void 0&&A!=null&&s(e,["parameters","outputOptions","compressionQuality"],A);const R=l(t,["addWatermark"]);e!==void 0&&R!=null&&s(e,["parameters","addWatermark"],R);const _=l(t,["editMode"]);e!==void 0&&_!=null&&s(e,["parameters","editMode"],_);const U=l(t,["baseSteps"]);return e!==void 0&&U!=null&&s(e,["parameters","editConfig","baseSteps"],U),n}function yT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["prompt"]);a!=null&&s(n,["instances[0]","prompt"],a);const u=l(e,["referenceImages"]);if(u!=null){let f=u;Array.isArray(f)&&(f=f.map(p=>pT(p))),s(n,["instances[0]","referenceImages"],f)}const c=l(e,["config"]);return c!=null&&s(n,["config"],mT(c,n)),n}function gT(t,e){const n={},o=l(t,["outputGcsUri"]);e!==void 0&&o!=null&&s(e,["parameters","storageUri"],o);const a=l(t,["includeRaiReason"]);e!==void 0&&a!=null&&s(e,["parameters","includeRaiReason"],a);const u=l(t,["outputMimeType"]);e!==void 0&&u!=null&&s(e,["parameters","outputOptions","mimeType"],u);const c=l(t,["outputCompressionQuality"]);e!==void 0&&c!=null&&s(e,["parameters","outputOptions","compressionQuality"],c);const f=l(t,["enhanceInputImage"]);e!==void 0&&f!=null&&s(e,["parameters","upscaleConfig","enhanceInputImage"],f);const p=l(t,["imagePreservationFactor"]);e!==void 0&&p!=null&&s(e,["parameters","upscaleConfig","imagePreservationFactor"],p);const h=l(t,["numberOfImages"]);e!==void 0&&h!=null&&s(e,["parameters","sampleCount"],h);const y=l(t,["mode"]);return e!==void 0&&y!=null&&s(e,["parameters","mode"],y),n}function vT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["image"]);a!=null&&s(n,["instances[0]","image"],Kt(a));const u=l(e,["upscaleFactor"]);u!=null&&s(n,["parameters","upscaleConfig","upscaleFactor"],u);const c=l(e,["config"]);return c!=null&&s(n,["config"],gT(c,n)),n}function wT(t){const e={},n=l(t,["productImage"]);return n!=null&&s(e,["image"],Kt(n)),e}function bT(t,e){const n={},o=l(t,["prompt"]);e!==void 0&&o!=null&&s(e,["instances[0]","prompt"],o);const a=l(t,["personImage"]);e!==void 0&&a!=null&&s(e,["instances[0]","personImage","image"],Kt(a));const u=l(t,["productImages"]);if(e!==void 0&&u!=null){let c=u;Array.isArray(c)&&(c=c.map(f=>wT(f))),s(e,["instances[0]","productImages"],c)}return n}function CT(t,e){const n={},o=l(t,["numberOfImages"]);e!==void 0&&o!=null&&s(e,["parameters","sampleCount"],o);const a=l(t,["baseSteps"]);e!==void 0&&a!=null&&s(e,["parameters","editConfig","baseSteps"],a);const u=l(t,["outputGcsUri"]);e!==void 0&&u!=null&&s(e,["parameters","storageUri"],u);const c=l(t,["seed"]);e!==void 0&&c!=null&&s(e,["parameters","seed"],c);const f=l(t,["safetyFilterLevel"]);e!==void 0&&f!=null&&s(e,["parameters","safetySetting"],f);const p=l(t,["personGeneration"]);e!==void 0&&p!=null&&s(e,["parameters","personGeneration"],p);const h=l(t,["addWatermark"]);e!==void 0&&h!=null&&s(e,["parameters","addWatermark"],h);const y=l(t,["outputMimeType"]);e!==void 0&&y!=null&&s(e,["parameters","outputOptions","mimeType"],y);const g=l(t,["outputCompressionQuality"]);e!==void 0&&g!=null&&s(e,["parameters","outputOptions","compressionQuality"],g);const b=l(t,["enhancePrompt"]);return e!==void 0&&b!=null&&s(e,["parameters","enhancePrompt"],b),n}function kT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["source"]);a!=null&&s(n,["config"],bT(a,n));const u=l(e,["config"]);return u!=null&&s(n,["config"],CT(u,n)),n}function TT(t){const e={},n=l(t,["image"]);return n!=null&&s(e,["image"],Kt(n)),e}function xT(t,e){const n={},o=l(t,["prompt"]);e!==void 0&&o!=null&&s(e,["instances[0]","prompt"],o);const a=l(t,["image"]);e!==void 0&&a!=null&&s(e,["instances[0]","image"],Kt(a));const u=l(t,["scribbleImage"]);return e!==void 0&&u!=null&&s(e,["instances[0]","scribble"],TT(u)),n}function ET(t,e){const n={},o=l(t,["mode"]);e!==void 0&&o!=null&&s(e,["parameters","mode"],o);const a=l(t,["maxPredictions"]);e!==void 0&&a!=null&&s(e,["parameters","maxPredictions"],a);const u=l(t,["confidenceThreshold"]);e!==void 0&&u!=null&&s(e,["parameters","confidenceThreshold"],u);const c=l(t,["maskDilation"]);e!==void 0&&c!=null&&s(e,["parameters","maskDilation"],c);const f=l(t,["binaryColorThreshold"]);return e!==void 0&&f!=null&&s(e,["parameters","binaryColorThreshold"],f),n}function ST(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["source"]);a!=null&&s(n,["config"],xT(a,n));const u=l(e,["config"]);return u!=null&&s(n,["config"],ET(u,n)),n}function AT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","name"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function IT(t,e,n){const o={},a=l(e,["pageSize"]);n!==void 0&&a!=null&&s(n,["_query","pageSize"],a);const u=l(e,["pageToken"]);n!==void 0&&u!=null&&s(n,["_query","pageToken"],u);const c=l(e,["filter"]);n!==void 0&&c!=null&&s(n,["_query","filter"],c);const f=l(e,["queryBase"]);return n!==void 0&&f!=null&&s(n,["_url","models_url"],em(t,f)),o}function _T(t,e){const n={},o=l(e,["config"]);return o!=null&&s(n,["config"],IT(t,o,n)),n}function PT(t,e){const n={},o=l(t,["displayName"]);e!==void 0&&o!=null&&s(e,["displayName"],o);const a=l(t,["description"]);e!==void 0&&a!=null&&s(e,["description"],a);const u=l(t,["defaultCheckpointId"]);return e!==void 0&&u!=null&&s(e,["defaultCheckpointId"],u),n}function MT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],PT(a,n)),n}function RT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","name"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],a),n}function DT(t,e){const n={},o=l(t,["systemInstruction"]);e!==void 0&&o!=null&&s(e,["systemInstruction"],Qo(dt(o)));const a=l(t,["tools"]);if(e!==void 0&&a!=null){let c=a;Array.isArray(c)&&(c=c.map(f=>vm(f))),s(e,["tools"],c)}const u=l(t,["generationConfig"]);return e!==void 0&&u!=null&&s(e,["generationConfig"],u),n}function NT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["contents"]);if(a!=null){let c=Vt(a);Array.isArray(c)&&(c=c.map(f=>Qo(f))),s(n,["contents"],c)}const u=l(e,["config"]);return u!=null&&s(n,["config"],DT(u,n)),n}function LT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["contents"]);if(a!=null){let c=Vt(a);Array.isArray(c)&&(c=c.map(f=>Qo(f))),s(n,["contents"],c)}const u=l(e,["config"]);return u!=null&&s(n,["config"],u),n}function wm(t){const e={},n=l(t,["uri"]);n!=null&&s(e,["gcsUri"],n);const o=l(t,["videoBytes"]);o!=null&&s(e,["bytesBase64Encoded"],lo(o));const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function FT(t,e){const n={},o=l(t,["prompt"]);e!==void 0&&o!=null&&s(e,["instances[0]","prompt"],o);const a=l(t,["image"]);e!==void 0&&a!=null&&s(e,["instances[0]","image"],Kt(a));const u=l(t,["video"]);return e!==void 0&&u!=null&&s(e,["instances[0]","video"],wm(u)),n}function UT(t){const e={},n=l(t,["image"]);n!=null&&s(e,["image"],Kt(n));const o=l(t,["referenceType"]);return o!=null&&s(e,["referenceType"],o),e}function qT(t){const e={},n=l(t,["image"]);n!=null&&s(e,["_self"],Kt(n));const o=l(t,["maskMode"]);return o!=null&&s(e,["maskMode"],o),e}function BT(t,e){const n={},o=l(t,["numberOfVideos"]);e!==void 0&&o!=null&&s(e,["parameters","sampleCount"],o);const a=l(t,["outputGcsUri"]);e!==void 0&&a!=null&&s(e,["parameters","storageUri"],a);const u=l(t,["fps"]);e!==void 0&&u!=null&&s(e,["parameters","fps"],u);const c=l(t,["durationSeconds"]);e!==void 0&&c!=null&&s(e,["parameters","durationSeconds"],c);const f=l(t,["seed"]);e!==void 0&&f!=null&&s(e,["parameters","seed"],f);const p=l(t,["aspectRatio"]);e!==void 0&&p!=null&&s(e,["parameters","aspectRatio"],p);const h=l(t,["resolution"]);e!==void 0&&h!=null&&s(e,["parameters","resolution"],h);const y=l(t,["personGeneration"]);e!==void 0&&y!=null&&s(e,["parameters","personGeneration"],y);const g=l(t,["pubsubTopic"]);e!==void 0&&g!=null&&s(e,["parameters","pubsubTopic"],g);const b=l(t,["negativePrompt"]);e!==void 0&&b!=null&&s(e,["parameters","negativePrompt"],b);const C=l(t,["enhancePrompt"]);e!==void 0&&C!=null&&s(e,["parameters","enhancePrompt"],C);const T=l(t,["generateAudio"]);e!==void 0&&T!=null&&s(e,["parameters","generateAudio"],T);const A=l(t,["lastFrame"]);e!==void 0&&A!=null&&s(e,["instances[0]","lastFrame"],Kt(A));const R=l(t,["referenceImages"]);if(e!==void 0&&R!=null){let D=R;Array.isArray(D)&&(D=D.map(z=>UT(z))),s(e,["instances[0]","referenceImages"],D)}const _=l(t,["mask"]);e!==void 0&&_!=null&&s(e,["instances[0]","mask"],qT(_));const U=l(t,["compressionQuality"]);return e!==void 0&&U!=null&&s(e,["parameters","compressionQuality"],U),n}function VT(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["_url","model"],De(t,o));const a=l(e,["prompt"]);a!=null&&s(n,["instances[0]","prompt"],a);const u=l(e,["image"]);u!=null&&s(n,["instances[0]","image"],Kt(u));const c=l(e,["video"]);c!=null&&s(n,["instances[0]","video"],wm(c));const f=l(e,["source"]);f!=null&&s(n,["config"],FT(f,n));const p=l(e,["config"]);return p!=null&&s(n,["config"],BT(p,n)),n}function zT(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function HT(t){const e={},n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function GT(t){const e={},n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function WT(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function $T(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],zT(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],HT(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],GT(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],WT(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function JT(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>$T(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function OT(t){const e={},n=l(t,["citationSources"]);return n!=null&&s(e,["citations"],n),e}function YT(t){const e={},n=l(t,["retrievedUrl"]);n!=null&&s(e,["retrievedUrl"],n);const o=l(t,["urlRetrievalStatus"]);return o!=null&&s(e,["urlRetrievalStatus"],o),e}function KT(t){const e={},n=l(t,["urlMetadata"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>YT(a))),s(e,["urlMetadata"],o)}return e}function QT(t){const e={},n=l(t,["content"]);n!=null&&s(e,["content"],JT(n));const o=l(t,["citationMetadata"]);o!=null&&s(e,["citationMetadata"],OT(o));const a=l(t,["tokenCount"]);a!=null&&s(e,["tokenCount"],a);const u=l(t,["finishReason"]);u!=null&&s(e,["finishReason"],u);const c=l(t,["urlContextMetadata"]);c!=null&&s(e,["urlContextMetadata"],KT(c));const f=l(t,["avgLogprobs"]);f!=null&&s(e,["avgLogprobs"],f);const p=l(t,["groundingMetadata"]);p!=null&&s(e,["groundingMetadata"],p);const h=l(t,["index"]);h!=null&&s(e,["index"],h);const y=l(t,["logprobsResult"]);y!=null&&s(e,["logprobsResult"],y);const g=l(t,["safetyRatings"]);return g!=null&&s(e,["safetyRatings"],g),e}function Oh(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["candidates"]);if(o!=null){let p=o;Array.isArray(p)&&(p=p.map(h=>QT(h))),s(e,["candidates"],p)}const a=l(t,["modelVersion"]);a!=null&&s(e,["modelVersion"],a);const u=l(t,["promptFeedback"]);u!=null&&s(e,["promptFeedback"],u);const c=l(t,["responseId"]);c!=null&&s(e,["responseId"],c);const f=l(t,["usageMetadata"]);return f!=null&&s(e,["usageMetadata"],f),e}function XT(t){const e={},n=l(t,["values"]);return n!=null&&s(e,["values"],n),e}function ZT(){return{}}function jT(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["embeddings"]);if(o!=null){let u=o;Array.isArray(u)&&(u=u.map(c=>XT(c))),s(e,["embeddings"],u)}return l(t,["metadata"])!=null&&s(e,["metadata"],ZT()),e}function ex(t){const e={},n=l(t,["bytesBase64Encoded"]);n!=null&&s(e,["imageBytes"],lo(n));const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function bm(t){const e={},n=l(t,["safetyAttributes","categories"]);n!=null&&s(e,["categories"],n);const o=l(t,["safetyAttributes","scores"]);o!=null&&s(e,["scores"],o);const a=l(t,["contentType"]);return a!=null&&s(e,["contentType"],a),e}function tx(t){const e={},n=l(t,["_self"]);n!=null&&s(e,["image"],ex(n));const o=l(t,["raiFilteredReason"]);o!=null&&s(e,["raiFilteredReason"],o);const a=l(t,["_self"]);return a!=null&&s(e,["safetyAttributes"],bm(a)),e}function nx(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["predictions"]);if(o!=null){let u=o;Array.isArray(u)&&(u=u.map(c=>tx(c))),s(e,["generatedImages"],u)}const a=l(t,["positivePromptSafetyAttributes"]);return a!=null&&s(e,["positivePromptSafetyAttributes"],bm(a)),e}function ox(t){const e={},n=l(t,["baseModel"]);n!=null&&s(e,["baseModel"],n);const o=l(t,["createTime"]);o!=null&&s(e,["createTime"],o);const a=l(t,["updateTime"]);return a!=null&&s(e,["updateTime"],a),e}function tu(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["description"]);a!=null&&s(e,["description"],a);const u=l(t,["version"]);u!=null&&s(e,["version"],u);const c=l(t,["_self"]);c!=null&&s(e,["tunedModelInfo"],ox(c));const f=l(t,["inputTokenLimit"]);f!=null&&s(e,["inputTokenLimit"],f);const p=l(t,["outputTokenLimit"]);p!=null&&s(e,["outputTokenLimit"],p);const h=l(t,["supportedGenerationMethods"]);return h!=null&&s(e,["supportedActions"],h),e}function ix(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["_self"]);if(a!=null){let u=tm(a);Array.isArray(u)&&(u=u.map(c=>tu(c))),s(e,["models"],u)}return e}function rx(t){const e={},n=l(t,["sdkHttpResponse"]);return n!=null&&s(e,["sdkHttpResponse"],n),e}function ax(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["totalTokens"]);o!=null&&s(e,["totalTokens"],o);const a=l(t,["cachedContentTokenCount"]);return a!=null&&s(e,["cachedContentTokenCount"],a),e}function lx(t){const e={},n=l(t,["video","uri"]);n!=null&&s(e,["uri"],n);const o=l(t,["video","encodedVideo"]);o!=null&&s(e,["videoBytes"],lo(o));const a=l(t,["encoding"]);return a!=null&&s(e,["mimeType"],a),e}function sx(t){const e={},n=l(t,["_self"]);return n!=null&&s(e,["video"],lx(n)),e}function ux(t){const e={},n=l(t,["generatedSamples"]);if(n!=null){let u=n;Array.isArray(u)&&(u=u.map(c=>sx(c))),s(e,["generatedVideos"],u)}const o=l(t,["raiMediaFilteredCount"]);o!=null&&s(e,["raiMediaFilteredCount"],o);const a=l(t,["raiMediaFilteredReasons"]);return a!=null&&s(e,["raiMediaFilteredReasons"],a),e}function cx(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["metadata"]);o!=null&&s(e,["metadata"],o);const a=l(t,["done"]);a!=null&&s(e,["done"],a);const u=l(t,["error"]);u!=null&&s(e,["error"],u);const c=l(t,["response","generateVideoResponse"]);return c!=null&&s(e,["response"],ux(c)),e}function dx(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function fx(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["data"]);o!=null&&s(e,["data"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function hx(t){const e={},n=l(t,["displayName"]);n!=null&&s(e,["displayName"],n);const o=l(t,["fileUri"]);o!=null&&s(e,["fileUri"],o);const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function px(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function mx(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],dx(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],fx(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],hx(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],px(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function yx(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>mx(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function gx(t){const e={},n=l(t,["citations"]);return n!=null&&s(e,["citations"],n),e}function vx(t){const e={},n=l(t,["retrievedUrl"]);n!=null&&s(e,["retrievedUrl"],n);const o=l(t,["urlRetrievalStatus"]);return o!=null&&s(e,["urlRetrievalStatus"],o),e}function wx(t){const e={},n=l(t,["urlMetadata"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>vx(a))),s(e,["urlMetadata"],o)}return e}function bx(t){const e={},n=l(t,["content"]);n!=null&&s(e,["content"],yx(n));const o=l(t,["citationMetadata"]);o!=null&&s(e,["citationMetadata"],gx(o));const a=l(t,["finishMessage"]);a!=null&&s(e,["finishMessage"],a);const u=l(t,["finishReason"]);u!=null&&s(e,["finishReason"],u);const c=l(t,["urlContextMetadata"]);c!=null&&s(e,["urlContextMetadata"],wx(c));const f=l(t,["avgLogprobs"]);f!=null&&s(e,["avgLogprobs"],f);const p=l(t,["groundingMetadata"]);p!=null&&s(e,["groundingMetadata"],p);const h=l(t,["index"]);h!=null&&s(e,["index"],h);const y=l(t,["logprobsResult"]);y!=null&&s(e,["logprobsResult"],y);const g=l(t,["safetyRatings"]);return g!=null&&s(e,["safetyRatings"],g),e}function Yh(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["candidates"]);if(o!=null){let h=o;Array.isArray(h)&&(h=h.map(y=>bx(y))),s(e,["candidates"],h)}const a=l(t,["createTime"]);a!=null&&s(e,["createTime"],a);const u=l(t,["modelVersion"]);u!=null&&s(e,["modelVersion"],u);const c=l(t,["promptFeedback"]);c!=null&&s(e,["promptFeedback"],c);const f=l(t,["responseId"]);f!=null&&s(e,["responseId"],f);const p=l(t,["usageMetadata"]);return p!=null&&s(e,["usageMetadata"],p),e}function Cx(t){const e={},n=l(t,["truncated"]);n!=null&&s(e,["truncated"],n);const o=l(t,["token_count"]);return o!=null&&s(e,["tokenCount"],o),e}function kx(t){const e={},n=l(t,["values"]);n!=null&&s(e,["values"],n);const o=l(t,["statistics"]);return o!=null&&s(e,["statistics"],Cx(o)),e}function Tx(t){const e={},n=l(t,["billableCharacterCount"]);return n!=null&&s(e,["billableCharacterCount"],n),e}function xx(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["predictions[]","embeddings"]);if(o!=null){let u=o;Array.isArray(u)&&(u=u.map(c=>kx(c))),s(e,["embeddings"],u)}const a=l(t,["metadata"]);return a!=null&&s(e,["metadata"],Tx(a)),e}function Cm(t){const e={},n=l(t,["gcsUri"]);n!=null&&s(e,["gcsUri"],n);const o=l(t,["bytesBase64Encoded"]);o!=null&&s(e,["imageBytes"],lo(o));const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function km(t){const e={},n=l(t,["safetyAttributes","categories"]);n!=null&&s(e,["categories"],n);const o=l(t,["safetyAttributes","scores"]);o!=null&&s(e,["scores"],o);const a=l(t,["contentType"]);return a!=null&&s(e,["contentType"],a),e}function Da(t){const e={},n=l(t,["_self"]);n!=null&&s(e,["image"],Cm(n));const o=l(t,["raiFilteredReason"]);o!=null&&s(e,["raiFilteredReason"],o);const a=l(t,["_self"]);a!=null&&s(e,["safetyAttributes"],km(a));const u=l(t,["prompt"]);return u!=null&&s(e,["enhancedPrompt"],u),e}function Ex(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["predictions"]);if(o!=null){let u=o;Array.isArray(u)&&(u=u.map(c=>Da(c))),s(e,["generatedImages"],u)}const a=l(t,["positivePromptSafetyAttributes"]);return a!=null&&s(e,["positivePromptSafetyAttributes"],km(a)),e}function Sx(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["predictions"]);if(o!=null){let a=o;Array.isArray(a)&&(a=a.map(u=>Da(u))),s(e,["generatedImages"],a)}return e}function Ax(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["predictions"]);if(o!=null){let a=o;Array.isArray(a)&&(a=a.map(u=>Da(u))),s(e,["generatedImages"],a)}return e}function Ix(t){const e={},n=l(t,["predictions"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>Da(a))),s(e,["generatedImages"],o)}return e}function _x(t){const e={},n=l(t,["label"]);n!=null&&s(e,["label"],n);const o=l(t,["score"]);return o!=null&&s(e,["score"],o),e}function Px(t){const e={},n=l(t,["_self"]);n!=null&&s(e,["mask"],Cm(n));const o=l(t,["labels"]);if(o!=null){let a=o;Array.isArray(a)&&(a=a.map(u=>_x(u))),s(e,["labels"],a)}return e}function Mx(t){const e={},n=l(t,["predictions"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>Px(a))),s(e,["generatedMasks"],o)}return e}function Rx(t){const e={},n=l(t,["endpoint"]);n!=null&&s(e,["name"],n);const o=l(t,["deployedModelId"]);return o!=null&&s(e,["deployedModelId"],o),e}function Dx(t){const e={},n=l(t,["labels","google-vertex-llm-tuning-base-model-id"]);n!=null&&s(e,["baseModel"],n);const o=l(t,["createTime"]);o!=null&&s(e,["createTime"],o);const a=l(t,["updateTime"]);return a!=null&&s(e,["updateTime"],a),e}function Nx(t){const e={},n=l(t,["checkpointId"]);n!=null&&s(e,["checkpointId"],n);const o=l(t,["epoch"]);o!=null&&s(e,["epoch"],o);const a=l(t,["step"]);return a!=null&&s(e,["step"],a),e}function nu(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["displayName"]);o!=null&&s(e,["displayName"],o);const a=l(t,["description"]);a!=null&&s(e,["description"],a);const u=l(t,["versionId"]);u!=null&&s(e,["version"],u);const c=l(t,["deployedModels"]);if(c!=null){let g=c;Array.isArray(g)&&(g=g.map(b=>Rx(b))),s(e,["endpoints"],g)}const f=l(t,["labels"]);f!=null&&s(e,["labels"],f);const p=l(t,["_self"]);p!=null&&s(e,["tunedModelInfo"],Dx(p));const h=l(t,["defaultCheckpointId"]);h!=null&&s(e,["defaultCheckpointId"],h);const y=l(t,["checkpoints"]);if(y!=null){let g=y;Array.isArray(g)&&(g=g.map(b=>Nx(b))),s(e,["checkpoints"],g)}return e}function Lx(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["_self"]);if(a!=null){let u=tm(a);Array.isArray(u)&&(u=u.map(c=>nu(c))),s(e,["models"],u)}return e}function Fx(t){const e={},n=l(t,["sdkHttpResponse"]);return n!=null&&s(e,["sdkHttpResponse"],n),e}function Ux(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["totalTokens"]);return o!=null&&s(e,["totalTokens"],o),e}function qx(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["tokensInfo"]);return o!=null&&s(e,["tokensInfo"],o),e}function Bx(t){const e={},n=l(t,["gcsUri"]);n!=null&&s(e,["uri"],n);const o=l(t,["bytesBase64Encoded"]);o!=null&&s(e,["videoBytes"],lo(o));const a=l(t,["mimeType"]);return a!=null&&s(e,["mimeType"],a),e}function Vx(t){const e={},n=l(t,["_self"]);return n!=null&&s(e,["video"],Bx(n)),e}function zx(t){const e={},n=l(t,["videos"]);if(n!=null){let u=n;Array.isArray(u)&&(u=u.map(c=>Vx(c))),s(e,["generatedVideos"],u)}const o=l(t,["raiMediaFilteredCount"]);o!=null&&s(e,["raiMediaFilteredCount"],o);const a=l(t,["raiMediaFilteredReasons"]);return a!=null&&s(e,["raiMediaFilteredReasons"],a),e}function Hx(t){const e={},n=l(t,["name"]);n!=null&&s(e,["name"],n);const o=l(t,["metadata"]);o!=null&&s(e,["metadata"],o);const a=l(t,["done"]);a!=null&&s(e,["done"],a);const u=l(t,["error"]);u!=null&&s(e,["error"],u);const c=l(t,["response"]);return c!=null&&s(e,["response"],zx(c)),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gx="Content-Type",Wx="X-Server-Timeout",$x="User-Agent",ou="x-goog-api-client",Jx="1.19.0",Ox=`google-genai-sdk/${Jx}`,Yx="v1beta1",Kx="v1beta",Kh=/^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;class Qx{constructor(e){var n,o;this.clientOptions=Object.assign(Object.assign({},e),{project:e.project,location:e.location,apiKey:e.apiKey,vertexai:e.vertexai});const a={};this.clientOptions.vertexai?(a.apiVersion=(n=this.clientOptions.apiVersion)!==null&&n!==void 0?n:Yx,a.baseUrl=this.baseUrlFromProjectLocation(),this.normalizeAuthParameters()):(a.apiVersion=(o=this.clientOptions.apiVersion)!==null&&o!==void 0?o:Kx,a.baseUrl="https://generativelanguage.googleapis.com/"),a.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=a,e.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(a,e.httpOptions))}baseUrlFromProjectLocation(){return this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location!=="global"?`https://${this.clientOptions.location}-aiplatform.googleapis.com/`:"https://aiplatform.googleapis.com/"}normalizeAuthParameters(){if(this.clientOptions.project&&this.clientOptions.location){this.clientOptions.apiKey=void 0;return}this.clientOptions.project=void 0,this.clientOptions.location=void 0}isVertexAI(){var e;return(e=this.clientOptions.vertexai)!==null&&e!==void 0?e:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(e){if(!e||e.baseUrl===void 0||e.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const o=[e.baseUrl.endsWith("/")?e.baseUrl.slice(0,-1):e.baseUrl];return e.apiVersion&&e.apiVersion!==""&&o.push(e.apiVersion),o.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const e=this.getBaseUrl(),n=new URL(e);return n.protocol=n.protocol=="http:"?"ws":"wss",n.toString()}setBaseUrl(e){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=e;else throw new Error("HTTP options are not correctly set.")}constructUrl(e,n,o){const a=[this.getRequestUrlInternal(n)];return o&&a.push(this.getBaseResourcePath()),e!==""&&a.push(e),new URL(`${a.join("/")}`)}shouldPrependVertexProjectPath(e){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||e.path.startsWith("projects/")||e.httpMethod==="GET"&&e.path.startsWith("publishers/google/models"))}async request(e){let n=this.clientOptions.httpOptions;e.httpOptions&&(n=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const o=this.shouldPrependVertexProjectPath(e),a=this.constructUrl(e.path,n,o);if(e.queryParams)for(const[c,f]of Object.entries(e.queryParams))a.searchParams.append(c,String(f));let u={};if(e.httpMethod==="GET"){if(e.body&&e.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else u.body=e.body;return u=await this.includeExtraHttpOptionsToRequestInit(u,n,e.abortSignal),this.unaryApiCall(a,u,e.httpMethod)}patchHttpOptions(e,n){const o=JSON.parse(JSON.stringify(e));for(const[a,u]of Object.entries(n))typeof u=="object"?o[a]=Object.assign(Object.assign({},o[a]),u):u!==void 0&&(o[a]=u);return o}async requestStream(e){let n=this.clientOptions.httpOptions;e.httpOptions&&(n=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const o=this.shouldPrependVertexProjectPath(e),a=this.constructUrl(e.path,n,o);(!a.searchParams.has("alt")||a.searchParams.get("alt")!=="sse")&&a.searchParams.set("alt","sse");let u={};return u.body=e.body,u=await this.includeExtraHttpOptionsToRequestInit(u,n,e.abortSignal),this.streamApiCall(a,u,e.httpMethod)}async includeExtraHttpOptionsToRequestInit(e,n,o){if(n&&n.timeout||o){const a=new AbortController,u=a.signal;if(n.timeout&&n?.timeout>0){const c=setTimeout(()=>a.abort(),n.timeout);c&&typeof c.unref=="function"&&c.unref()}o&&o.addEventListener("abort",()=>{a.abort()}),e.signal=u}return n&&n.extraBody!==null&&Xx(e,n.extraBody),e.headers=await this.getHeadersInternal(n),e}async unaryApiCall(e,n,o){return this.apiCall(e.toString(),Object.assign(Object.assign({},n),{method:o})).then(async a=>(await Qh(a),new Qs(a))).catch(a=>{throw a instanceof Error?a:new Error(JSON.stringify(a))})}async streamApiCall(e,n,o){return this.apiCall(e.toString(),Object.assign(Object.assign({},n),{method:o})).then(async a=>(await Qh(a),this.processStreamResponse(a))).catch(a=>{throw a instanceof Error?a:new Error(JSON.stringify(a))})}processStreamResponse(e){var n;return Go(this,arguments,function*(){const a=(n=e?.body)===null||n===void 0?void 0:n.getReader(),u=new TextDecoder("utf-8");if(!a)throw new Error("Response body is empty");try{let c="";for(;;){const{done:f,value:p}=yield ze(a.read());if(f){if(c.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const h=u.decode(p,{stream:!0});try{const g=JSON.parse(h);if("error"in g){const b=JSON.parse(JSON.stringify(g.error)),C=b.status,T=b.code,A=`got status: ${C}. ${JSON.stringify(g)}`;if(T>=400&&T<600)throw new Ma({message:A,status:T})}}catch(g){if(g.name==="ApiError")throw g}c+=h;let y=c.match(Kh);for(;y;){const g=y[1];try{const b=new Response(g,{headers:e?.headers,status:e?.status,statusText:e?.statusText});yield yield ze(new Qs(b)),c=c.slice(y[0].length),y=c.match(Kh)}catch(b){throw new Error(`exception parsing stream chunk ${g}. ${b}`)}}}}finally{a.releaseLock()}})}async apiCall(e,n){return fetch(e,n).catch(o=>{throw new Error(`exception ${o} sending request`)})}getDefaultHeaders(){const e={},n=Ox+" "+this.clientOptions.userAgentExtra;return e[$x]=n,e[ou]=n,e[Gx]="application/json",e}async getHeadersInternal(e){const n=new Headers;if(e&&e.headers){for(const[o,a]of Object.entries(e.headers))n.append(o,a);e.timeout&&e.timeout>0&&n.append(Wx,String(Math.ceil(e.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(n),n}async uploadFile(e,n){var o;const a={};n!=null&&(a.mimeType=n.mimeType,a.name=n.name,a.displayName=n.displayName),a.name&&!a.name.startsWith("files/")&&(a.name=`files/${a.name}`);const u=this.clientOptions.uploader,c=await u.stat(e);a.sizeBytes=String(c.size);const f=(o=n?.mimeType)!==null&&o!==void 0?o:c.type;if(f===void 0||f==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");a.mimeType=f;const p=await this.fetchUploadUrl(a,n);return u.upload(e,p,this)}async downloadFile(e){await this.clientOptions.downloader.download(e,this)}async fetchUploadUrl(e,n){var o;let a={};n?.httpOptions?a=n.httpOptions:a={apiVersion:"",headers:{"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${e.sizeBytes}`,"X-Goog-Upload-Header-Content-Type":`${e.mimeType}`}};const u={file:e},c=await this.request({path:le("upload/v1beta/files",u._url),body:JSON.stringify(u),httpMethod:"POST",httpOptions:a});if(!c||!c?.headers)throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const f=(o=c?.headers)===null||o===void 0?void 0:o["x-goog-upload-url"];if(f===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return f}}async function Qh(t){var e;if(t===void 0)throw new Error("response is undefined");if(!t.ok){const n=t.status;let o;!((e=t.headers.get("content-type"))===null||e===void 0)&&e.includes("application/json")?o=await t.json():o={error:{message:await t.text(),code:t.status,status:t.statusText}};const a=JSON.stringify(o);throw n>=400&&n<600?new Ma({message:a,status:n}):new Error(a)}}function Xx(t,e){if(!e||Object.keys(e).length===0)return;if(t.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let n={};if(typeof t.body=="string"&&t.body.length>0)try{const u=JSON.parse(t.body);if(typeof u=="object"&&u!==null&&!Array.isArray(u))n=u;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function o(u,c){const f=Object.assign({},u);for(const p in c)if(Object.prototype.hasOwnProperty.call(c,p)){const h=c[p],y=f[p];h&&typeof h=="object"&&!Array.isArray(h)&&y&&typeof y=="object"&&!Array.isArray(y)?f[p]=o(y,h):(y&&h&&typeof y!=typeof h&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${p}". Original type: ${typeof y}, New type: ${typeof h}. Overwriting.`),f[p]=h)}return f}const a=o(n,e);t.body=JSON.stringify(a)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zx="mcp_used/unknown";let jx=!1;function Tm(t){for(const e of t)if(eE(e)||typeof e=="object"&&"inputSchema"in e)return!0;return jx}function xm(t){var e;const n=(e=t[ou])!==null&&e!==void 0?e:"";t[ou]=(n+` ${Zx}`).trimStart()}function eE(t){return t!==null&&typeof t=="object"&&t instanceof Eu}function tE(t,e=100){return Go(this,arguments,function*(){let o,a=0;for(;a<e;){const u=yield ze(t.listTools({cursor:o}));for(const c of u.tools)yield yield ze(c),a++;if(!u.nextCursor)break;o=u.nextCursor}})}class Eu{constructor(e=[],n){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=e,this.config=n}static create(e,n){return new Eu(e,n)}async initialize(){var e,n,o,a;if(this.mcpTools.length>0)return;const u={},c=[];for(const y of this.mcpClients)try{for(var f=!0,p=(n=void 0,$i(tE(y))),h;h=await p.next(),e=h.done,!e;f=!0){a=h.value,f=!1;const g=a;c.push(g);const b=g.name;if(u[b])throw new Error(`Duplicate function name ${b} found in MCP tools. Please ensure function names are unique.`);u[b]=y}}catch(g){n={error:g}}finally{try{!f&&!e&&(o=p.return)&&await o.call(p)}finally{if(n)throw n.error}}this.mcpTools=c,this.functionNameToMcpClient=u}async tool(){return await this.initialize(),yw(this.mcpTools,this.config)}async callTool(e){await this.initialize();const n=[];for(const o of e)if(o.name in this.functionNameToMcpClient){const a=this.functionNameToMcpClient[o.name];let u;this.config.timeout&&(u={timeout:this.config.timeout});const c=await a.callTool({name:o.name,arguments:o.args},void 0,u);n.push({functionResponse:{name:o.name,response:c.isError?{error:c}:c}})}return n}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function nE(t,e,n){const o=new sw;let a;n.data instanceof Blob?a=JSON.parse(await n.data.text()):a=JSON.parse(n.data);const u=RC(a);Object.assign(o,u),e(o)}class oE{constructor(e,n,o){this.apiClient=e,this.auth=n,this.webSocketFactory=o}async connect(e){var n,o;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const a=this.apiClient.getWebsocketBaseUrl(),u=this.apiClient.getApiVersion(),c=aE(this.apiClient.getDefaultHeaders()),f=this.apiClient.getApiKey(),p=`${a}/ws/google.ai.generativelanguage.${u}.GenerativeService.BidiGenerateMusic?key=${f}`;let h=()=>{};const y=new Promise(D=>{h=D}),g=e.callbacks,b=function(){h({})},C=this.apiClient,T={onopen:b,onmessage:D=>{nE(C,g.onmessage,D)},onerror:(n=g?.onerror)!==null&&n!==void 0?n:function(D){},onclose:(o=g?.onclose)!==null&&o!==void 0?o:function(D){}},A=this.webSocketFactory.create(p,rE(c),T);A.connect(),await y;const R=De(this.apiClient,e.model),_=fm({model:R}),U=eu({setup:_});return A.send(JSON.stringify(U)),new iE(A,this.apiClient)}}class iE{constructor(e,n){this.conn=e,this.apiClient=n}async setWeightedPrompts(e){if(!e.weightedPrompts||Object.keys(e.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const n=_0(e),o=hm(n);this.conn.send(JSON.stringify({clientContent:o}))}async setMusicGenerationConfig(e){e.musicGenerationConfig||(e.musicGenerationConfig={});const n=P0(e),o=eu(n);this.conn.send(JSON.stringify(o))}sendPlaybackControl(e){const n=eu({playbackControl:e});this.conn.send(JSON.stringify(n))}play(){this.sendPlaybackControl(zo.PLAY)}pause(){this.sendPlaybackControl(zo.PAUSE)}stop(){this.sendPlaybackControl(zo.STOP)}resetContext(){this.sendPlaybackControl(zo.RESET_CONTEXT)}close(){this.conn.close()}}function rE(t){const e={};return t.forEach((n,o)=>{e[o]=n}),e}function aE(t){const e=new Headers;for(const[n,o]of Object.entries(t))e.append(n,o);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const lE="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function sE(t,e,n){const o=new lw;let a;n.data instanceof Blob?a=await n.data.text():n.data instanceof ArrayBuffer?a=new TextDecoder().decode(n.data):a=n.data;const u=JSON.parse(a);if(t.isVertexAI()){const c=$C(u);Object.assign(o,c)}else{const c=TC(u);Object.assign(o,c)}e(o)}class uE{constructor(e,n,o){this.apiClient=e,this.auth=n,this.webSocketFactory=o,this.music=new oE(this.apiClient,this.auth,this.webSocketFactory)}async connect(e){var n,o,a,u,c,f;if(e.config&&e.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const p=this.apiClient.getWebsocketBaseUrl(),h=this.apiClient.getApiVersion();let y;const g=this.apiClient.getHeaders();e.config&&e.config.tools&&Tm(e.config.tools)&&xm(g);const b=hE(g);if(this.apiClient.isVertexAI())y=`${p}/ws/google.cloud.aiplatform.${h}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(b);else{const Z=this.apiClient.getApiKey();let N="BidiGenerateContent",J="key";Z?.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),h!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),N="BidiGenerateContentConstrained",J="access_token"),y=`${p}/ws/google.ai.generativelanguage.${h}.GenerativeService.${N}?${J}=${Z}`}let C=()=>{};const T=new Promise(Z=>{C=Z}),A=e.callbacks,R=function(){var Z;(Z=A?.onopen)===null||Z===void 0||Z.call(A),C({})},_=this.apiClient,U={onopen:R,onmessage:Z=>{sE(_,A.onmessage,Z)},onerror:(n=A?.onerror)!==null&&n!==void 0?n:function(Z){},onclose:(o=A?.onclose)!==null&&o!==void 0?o:function(Z){}},D=this.webSocketFactory.create(y,fE(b),U);D.connect(),await T;let z=De(this.apiClient,e.model);if(this.apiClient.isVertexAI()&&z.startsWith("publishers/")){const Z=this.apiClient.getProject(),N=this.apiClient.getLocation();z=`projects/${Z}/locations/${N}/`+z}let G={};this.apiClient.isVertexAI()&&((a=e.config)===null||a===void 0?void 0:a.responseModalities)===void 0&&(e.config===void 0?e.config={responseModalities:[Ta.AUDIO]}:e.config.responseModalities=[Ta.AUDIO]),!((u=e.config)===null||u===void 0)&&u.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const L=(f=(c=e.config)===null||c===void 0?void 0:c.tools)!==null&&f!==void 0?f:[],Q=[];for(const Z of L)if(this.isCallableTool(Z)){const N=Z;Q.push(await N.tool())}else Q.push(Z);Q.length>0&&(e.config.tools=Q);const se={model:z,config:e.config,callbacks:e.callbacks};return this.apiClient.isVertexAI()?G=rC(this.apiClient,se):G=E0(this.apiClient,se),delete G.config,D.send(JSON.stringify(G)),new dE(D,this.apiClient)}isCallableTool(e){return"callTool"in e&&typeof e.callTool=="function"}}const cE={turnComplete:!0};class dE{constructor(e,n){this.conn=e,this.apiClient=n}tLiveClientContent(e,n){if(n.turns!==null&&n.turns!==void 0){let o=[];try{o=Vt(n.turns),e.isVertexAI()?o=o.map(a=>Qo(a)):o=o.map(a=>Ra(a))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof n.turns}'`)}return{clientContent:{turns:o,turnComplete:n.turnComplete}}}return{clientContent:{turnComplete:n.turnComplete}}}tLiveClienttToolResponse(e,n){let o=[];if(n.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(n.functionResponses)?o=n.functionResponses:o=[n.functionResponses],o.length===0)throw new Error("functionResponses is required.");for(const u of o){if(typeof u!="object"||u===null||!("name"in u)||!("response"in u))throw new Error(`Could not parse function response, type '${typeof u}'.`);if(!e.isVertexAI()&&!("id"in u))throw new Error(lE)}return{toolResponse:{functionResponses:o}}}sendClientContent(e){e=Object.assign(Object.assign({},cE),e);const n=this.tLiveClientContent(this.apiClient,e);this.conn.send(JSON.stringify(n))}sendRealtimeInput(e){let n={};this.apiClient.isVertexAI()?n={realtimeInput:sC(e)}:n={realtimeInput:I0(e)},this.conn.send(JSON.stringify(n))}sendToolResponse(e){if(e.functionResponses==null)throw new Error("Tool response parameters are required.");const n=this.tLiveClienttToolResponse(this.apiClient,e);this.conn.send(JSON.stringify(n))}close(){this.conn.close()}}function fE(t){const e={};return t.forEach((n,o)=>{e[o]=n}),e}function hE(t){const e=new Headers;for(const[n,o]of Object.entries(t))e.append(n,o);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xh=10;function Zh(t){var e,n,o;if(!((e=t?.automaticFunctionCalling)===null||e===void 0)&&e.disable)return!0;let a=!1;for(const c of(n=t?.tools)!==null&&n!==void 0?n:[])if(Wo(c)){a=!0;break}if(!a)return!0;const u=(o=t?.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls;return u&&(u<0||!Number.isInteger(u))||u==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",u),!0):!1}function Wo(t){return"callTool"in t&&typeof t.callTool=="function"}function pE(t){var e,n,o;return(o=(n=(e=t.config)===null||e===void 0?void 0:e.tools)===null||n===void 0?void 0:n.some(a=>Wo(a)))!==null&&o!==void 0?o:!1}function mE(t){var e,n,o;return(o=(n=(e=t.config)===null||e===void 0?void 0:e.tools)===null||n===void 0?void 0:n.some(a=>!Wo(a)))!==null&&o!==void 0?o:!1}function jh(t){var e;return!(!((e=t?.automaticFunctionCalling)===null||e===void 0)&&e.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class yE extends ao{constructor(e){super(),this.apiClient=e,this.generateContent=async n=>{var o,a,u,c,f;const p=await this.processParamsMaybeAddMcpUsage(n);if(this.maybeMoveToResponseJsonSchem(n),!pE(n)||Zh(n.config))return await this.generateContentInternal(p);if(mE(n))throw new Error("Automatic function calling with CallableTools and Tools is not yet supported.");let h,y;const g=Vt(p.contents),b=(u=(a=(o=p.config)===null||o===void 0?void 0:o.automaticFunctionCalling)===null||a===void 0?void 0:a.maximumRemoteCalls)!==null&&u!==void 0?u:Xh;let C=0;for(;C<b&&(h=await this.generateContentInternal(p),!(!h.functionCalls||h.functionCalls.length===0));){const T=h.candidates[0].content,A=[];for(const R of(f=(c=n.config)===null||c===void 0?void 0:c.tools)!==null&&f!==void 0?f:[])if(Wo(R)){const U=await R.callTool(h.functionCalls);A.push(...U)}C++,y={role:"user",parts:A},p.contents=Vt(p.contents),p.contents.push(T),p.contents.push(y),jh(p.config)&&(g.push(T),g.push(y))}return jh(p.config)&&(h.automaticFunctionCallingHistory=g),h},this.generateContentStream=async n=>{if(this.maybeMoveToResponseJsonSchem(n),Zh(n.config)){const o=await this.processParamsMaybeAddMcpUsage(n);return await this.generateContentStreamInternal(o)}else return await this.processAfcStream(n)},this.generateImages=async n=>await this.generateImagesInternal(n).then(o=>{var a;let u;const c=[];if(o?.generatedImages)for(const p of o.generatedImages)p&&p?.safetyAttributes&&((a=p?.safetyAttributes)===null||a===void 0?void 0:a.contentType)==="Positive Prompt"?u=p?.safetyAttributes:c.push(p);let f;return u?f={generatedImages:c,positivePromptSafetyAttributes:u,sdkHttpResponse:o.sdkHttpResponse}:f={generatedImages:c,sdkHttpResponse:o.sdkHttpResponse},f}),this.list=async n=>{var o;const c={config:Object.assign(Object.assign({},{queryBase:!0}),n?.config)};if(this.apiClient.isVertexAI()&&!c.config.queryBase){if(!((o=c.config)===null||o===void 0)&&o.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");c.config.filter="labels.tune-type:*"}return new Xi(io.PAGED_ITEM_MODELS,f=>this.listInternal(f),await this.listInternal(c),c)},this.editImage=async n=>{const o={model:n.model,prompt:n.prompt,referenceImages:[],config:n.config};return n.referenceImages&&n.referenceImages&&(o.referenceImages=n.referenceImages.map(a=>a.toReferenceImageAPI())),await this.editImageInternal(o)},this.upscaleImage=async n=>{let o={numberOfImages:1,mode:"upscale"};n.config&&(o=Object.assign(Object.assign({},o),n.config));const a={model:n.model,image:n.image,upscaleFactor:n.upscaleFactor,config:o};return await this.upscaleImageInternal(a)},this.generateVideos=async n=>{if((n.prompt||n.image||n.video)&&n.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return await this.generateVideosInternal(n)}}maybeMoveToResponseJsonSchem(e){e.config&&e.config.responseSchema&&(e.config.responseJsonSchema||Object.keys(e.config.responseSchema).includes("$schema")&&(e.config.responseJsonSchema=e.config.responseSchema,delete e.config.responseSchema))}async processParamsMaybeAddMcpUsage(e){var n,o,a;const u=(n=e.config)===null||n===void 0?void 0:n.tools;if(!u)return e;const c=await Promise.all(u.map(async p=>Wo(p)?await p.tool():p)),f={model:e.model,contents:e.contents,config:Object.assign(Object.assign({},e.config),{tools:c})};if(f.config.tools=c,e.config&&e.config.tools&&Tm(e.config.tools)){const p=(a=(o=e.config.httpOptions)===null||o===void 0?void 0:o.headers)!==null&&a!==void 0?a:{};let h=Object.assign({},p);Object.keys(h).length===0&&(h=this.apiClient.getDefaultHeaders()),xm(h),f.config.httpOptions=Object.assign(Object.assign({},e.config.httpOptions),{headers:h})}return f}async initAfcToolsMap(e){var n,o,a;const u=new Map;for(const c of(o=(n=e.config)===null||n===void 0?void 0:n.tools)!==null&&o!==void 0?o:[])if(Wo(c)){const f=c,p=await f.tool();for(const h of(a=p.functionDeclarations)!==null&&a!==void 0?a:[]){if(!h.name)throw new Error("Function declaration name is required.");if(u.has(h.name))throw new Error(`Duplicate tool declaration name: ${h.name}`);u.set(h.name,f)}}return u}async processAfcStream(e){var n,o,a;const u=(a=(o=(n=e.config)===null||n===void 0?void 0:n.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls)!==null&&a!==void 0?a:Xh;let c=!1,f=0;const p=await this.initAfcToolsMap(e);return(function(h,y,g){var b,C;return Go(this,arguments,function*(){for(var T,A,R,_;f<u;){c&&(f++,c=!1);const G=yield ze(h.processParamsMaybeAddMcpUsage(g)),L=yield ze(h.generateContentStreamInternal(G)),Q=[],se=[];try{for(var U=!0,D=(A=void 0,$i(L)),z;z=yield ze(D.next()),T=z.done,!T;U=!0){_=z.value,U=!1;const Z=_;if(yield yield ze(Z),Z.candidates&&(!((b=Z.candidates[0])===null||b===void 0)&&b.content)){se.push(Z.candidates[0].content);for(const N of(C=Z.candidates[0].content.parts)!==null&&C!==void 0?C:[])if(f<u&&N.functionCall){if(!N.functionCall.name)throw new Error("Function call name was not returned by the model.");if(y.has(N.functionCall.name)){const J=yield ze(y.get(N.functionCall.name).callTool([N.functionCall]));Q.push(...J)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${y.keys()}, mising tool: ${N.functionCall.name}`)}}}}catch(Z){A={error:Z}}finally{try{!U&&!T&&(R=D.return)&&(yield ze(R.call(D)))}finally{if(A)throw A.error}}if(Q.length>0){c=!0;const Z=new Vi;Z.candidates=[{content:{role:"user",parts:Q}}],yield yield ze(Z);const N=[];N.push(...se),N.push({role:"user",parts:Q});const J=Vt(g.contents).concat(N);g.contents=J}else break}})})(this,p,e)}async generateContentInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=Jh(this.apiClient,e);return f=le("{model}:generateContent",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Yh(y),b=new Vi;return Object.assign(b,g),b})}else{const h=$h(this.apiClient,e);return f=le("{model}:generateContent",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Oh(y),b=new Vi;return Object.assign(b,g),b})}}async generateContentStreamInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=Jh(this.apiClient,e);return f=le("{model}:streamGenerateContent?alt=sse",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.requestStream({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}),c.then(function(g){return Go(this,arguments,function*(){var b,C,T,A;try{for(var R=!0,_=$i(g),U;U=yield ze(_.next()),b=U.done,!b;R=!0){A=U.value,R=!1;const D=A,z=Yh(yield ze(D.json()));z.sdkHttpResponse={headers:D.headers};const G=new Vi;Object.assign(G,z),yield yield ze(G)}}catch(D){C={error:D}}finally{try{!R&&!b&&(T=_.return)&&(yield ze(T.call(_)))}finally{if(C)throw C.error}}})})}else{const h=$h(this.apiClient,e);return f=le("{model}:streamGenerateContent?alt=sse",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.requestStream({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}),c.then(function(g){return Go(this,arguments,function*(){var b,C,T,A;try{for(var R=!0,_=$i(g),U;U=yield ze(_.next()),b=U.done,!b;R=!0){A=U.value,R=!1;const D=A,z=Oh(yield ze(D.json()));z.sdkHttpResponse={headers:D.headers};const G=new Vi;Object.assign(G,z),yield yield ze(G)}}catch(D){C={error:D}}finally{try{!R&&!b&&(T=_.return)&&(yield ze(T.call(_)))}finally{if(C)throw C.error}}})})}}async embedContent(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=lT(this.apiClient,e);return f=le("{model}:predict",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=xx(y),b=new Eh;return Object.assign(b,g),b})}else{const h=vk(this.apiClient,e);return f=le("{model}:batchEmbedContents",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=jT(y),b=new Eh;return Object.assign(b,g),b})}}async generateImagesInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=uT(this.apiClient,e);return f=le("{model}:predict",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Ex(y),b=new Sh;return Object.assign(b,g),b})}else{const h=bk(this.apiClient,e);return f=le("{model}:predict",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=nx(y),b=new Sh;return Object.assign(b,g),b})}}async editImageInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI()){const f=yT(this.apiClient,e);return u=le("{model}:predict",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json().then(h=>{const y=h;return y.sdkHttpResponse={headers:p.headers},y})),a.then(p=>{const h=Sx(p),y=new jv;return Object.assign(y,h),y})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI()){const f=vT(this.apiClient,e);return u=le("{model}:predict",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json().then(h=>{const y=h;return y.sdkHttpResponse={headers:p.headers},y})),a.then(p=>{const h=Ax(p),y=new ew;return Object.assign(y,h),y})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI()){const f=kT(this.apiClient,e);return u=le("{model}:predict",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),a.then(p=>{const h=Ix(p),y=new tw;return Object.assign(y,h),y})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI()){const f=ST(this.apiClient,e);return u=le("{model}:predict",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),a.then(p=>{const h=Mx(p),y=new nw;return Object.assign(y,h),y})}else throw new Error("This method is only supported by the Vertex AI.")}async get(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=AT(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>nu(y))}else{const h=Ck(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>tu(y))}}async listInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=_T(this.apiClient,e);return f=le("{models_url}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Lx(y),b=new Ah;return Object.assign(b,g),b})}else{const h=Tk(this.apiClient,e);return f=le("{models_url}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=ix(y),b=new Ah;return Object.assign(b,g),b})}}async update(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=MT(this.apiClient,e);return f=le("{model}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>nu(y))}else{const h=Ek(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>tu(y))}}async delete(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=RT(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Fx(y),b=new Ih;return Object.assign(b,g),b})}else{const h=Sk(this.apiClient,e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=rx(y),b=new Ih;return Object.assign(b,g),b})}}async countTokens(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=NT(this.apiClient,e);return f=le("{model}:countTokens",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=Ux(y),b=new _h;return Object.assign(b,g),b})}else{const h=Ik(this.apiClient,e);return f=le("{model}:countTokens",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=ax(y),b=new _h;return Object.assign(b,g),b})}}async computeTokens(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI()){const f=LT(this.apiClient,e);return u=le("{model}:computeTokens",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json().then(h=>{const y=h;return y.sdkHttpResponse={headers:p.headers},y})),a.then(p=>{const h=qx(p),y=new ow;return Object.assign(y,h),y})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=VT(this.apiClient,e);return f=le("{model}:predictLongRunning",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c.then(y=>{const g=Hx(y),b=new xa;return Object.assign(b,g),b})}else{const h=Mk(this.apiClient,e);return f=le("{model}:predictLongRunning",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c.then(y=>{const g=cx(y),b=new xa;return Object.assign(b,g),b})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gE extends ao{constructor(e){super(),this.apiClient=e}async getVideosOperation(e){const n=e.operation,o=e.config;if(n.name===void 0||n.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const a=n.name.split("/operations/")[0];let u;o&&"httpOptions"in o&&(u=o.httpOptions);const c=await this.fetchPredictVideosOperationInternal({operationName:n.name,resourceName:a,config:{httpOptions:u}});return n._fromAPIResponse({apiResponse:c,isVertexAI:!0})}else{const a=await this.getVideosOperationInternal({operationName:n.name,config:o});return n._fromAPIResponse({apiResponse:a,isVertexAI:!1})}}async get(e){const n=e.operation,o=e.config;if(n.name===void 0||n.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const a=n.name.split("/operations/")[0];let u;o&&"httpOptions"in o&&(u=o.httpOptions);const c=await this.fetchPredictVideosOperationInternal({operationName:n.name,resourceName:a,config:{httpOptions:u}});return n._fromAPIResponse({apiResponse:c,isVertexAI:!0})}else{const a=await this.getVideosOperationInternal({operationName:n.name,config:o});return n._fromAPIResponse({apiResponse:a,isVertexAI:!1})}}async getVideosOperationInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=Wv(e);return f=le("{operationName}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json()),c}else{const h=Hv(e);return f=le("{operationName}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json()),c}}async fetchPredictVideosOperationInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI()){const f=Gv(e);return u=le("{resourceName}:fetchPredictOperation",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),a}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vE(t){const e={},n=l(t,["voiceName"]);return n!=null&&s(e,["voiceName"],n),e}function Em(t){const e={},n=l(t,["prebuiltVoiceConfig"]);return n!=null&&s(e,["prebuiltVoiceConfig"],vE(n)),e}function wE(t){const e={},n=l(t,["speaker"]);n!=null&&s(e,["speaker"],n);const o=l(t,["voiceConfig"]);return o!=null&&s(e,["voiceConfig"],Em(o)),e}function bE(t){const e={},n=l(t,["speakerVoiceConfigs"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>wE(a))),s(e,["speakerVoiceConfigs"],o)}return e}function CE(t){const e={},n=l(t,["voiceConfig"]);n!=null&&s(e,["voiceConfig"],Em(n));const o=l(t,["multiSpeakerVoiceConfig"]);o!=null&&s(e,["multiSpeakerVoiceConfig"],bE(o));const a=l(t,["languageCode"]);return a!=null&&s(e,["languageCode"],a),e}function kE(t){const e={},n=l(t,["fps"]);n!=null&&s(e,["fps"],n);const o=l(t,["endOffset"]);o!=null&&s(e,["endOffset"],o);const a=l(t,["startOffset"]);return a!=null&&s(e,["startOffset"],a),e}function TE(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["data"]);n!=null&&s(e,["data"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function xE(t){const e={};if(l(t,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(t,["fileUri"]);n!=null&&s(e,["fileUri"],n);const o=l(t,["mimeType"]);return o!=null&&s(e,["mimeType"],o),e}function EE(t){const e={},n=l(t,["id"]);n!=null&&s(e,["id"],n);const o=l(t,["args"]);o!=null&&s(e,["args"],o);const a=l(t,["name"]);return a!=null&&s(e,["name"],a),e}function SE(t){const e={},n=l(t,["videoMetadata"]);n!=null&&s(e,["videoMetadata"],kE(n));const o=l(t,["thought"]);o!=null&&s(e,["thought"],o);const a=l(t,["inlineData"]);a!=null&&s(e,["inlineData"],TE(a));const u=l(t,["fileData"]);u!=null&&s(e,["fileData"],xE(u));const c=l(t,["thoughtSignature"]);c!=null&&s(e,["thoughtSignature"],c);const f=l(t,["functionCall"]);f!=null&&s(e,["functionCall"],EE(f));const p=l(t,["codeExecutionResult"]);p!=null&&s(e,["codeExecutionResult"],p);const h=l(t,["executableCode"]);h!=null&&s(e,["executableCode"],h);const y=l(t,["functionResponse"]);y!=null&&s(e,["functionResponse"],y);const g=l(t,["text"]);return g!=null&&s(e,["text"],g),e}function AE(t){const e={},n=l(t,["parts"]);if(n!=null){let a=n;Array.isArray(a)&&(a=a.map(u=>SE(u))),s(e,["parts"],a)}const o=l(t,["role"]);return o!=null&&s(e,["role"],o),e}function IE(t){const e={},n=l(t,["behavior"]);n!=null&&s(e,["behavior"],n);const o=l(t,["description"]);o!=null&&s(e,["description"],o);const a=l(t,["name"]);a!=null&&s(e,["name"],a);const u=l(t,["parameters"]);u!=null&&s(e,["parameters"],u);const c=l(t,["parametersJsonSchema"]);c!=null&&s(e,["parametersJsonSchema"],c);const f=l(t,["response"]);f!=null&&s(e,["response"],f);const p=l(t,["responseJsonSchema"]);return p!=null&&s(e,["responseJsonSchema"],p),e}function _E(t){const e={},n=l(t,["startTime"]);n!=null&&s(e,["startTime"],n);const o=l(t,["endTime"]);return o!=null&&s(e,["endTime"],o),e}function PE(t){const e={},n=l(t,["timeRangeFilter"]);if(n!=null&&s(e,["timeRangeFilter"],_E(n)),l(t,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");return e}function ME(t){const e={},n=l(t,["mode"]);n!=null&&s(e,["mode"],n);const o=l(t,["dynamicThreshold"]);return o!=null&&s(e,["dynamicThreshold"],o),e}function RE(t){const e={},n=l(t,["dynamicRetrievalConfig"]);return n!=null&&s(e,["dynamicRetrievalConfig"],ME(n)),e}function DE(){return{}}function NE(t){const e={},n=l(t,["environment"]);return n!=null&&s(e,["environment"],n),e}function LE(t){const e={},n=l(t,["functionDeclarations"]);if(n!=null){let p=n;Array.isArray(p)&&(p=p.map(h=>IE(h))),s(e,["functionDeclarations"],p)}if(l(t,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const o=l(t,["googleSearch"]);o!=null&&s(e,["googleSearch"],PE(o));const a=l(t,["googleSearchRetrieval"]);if(a!=null&&s(e,["googleSearchRetrieval"],RE(a)),l(t,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");if(l(t,["googleMaps"])!==void 0)throw new Error("googleMaps parameter is not supported in Gemini API.");l(t,["urlContext"])!=null&&s(e,["urlContext"],DE());const c=l(t,["computerUse"]);c!=null&&s(e,["computerUse"],NE(c));const f=l(t,["codeExecution"]);return f!=null&&s(e,["codeExecution"],f),e}function FE(t){const e={},n=l(t,["handle"]);if(n!=null&&s(e,["handle"],n),l(t,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function ep(){return{}}function UE(t){const e={},n=l(t,["disabled"]);n!=null&&s(e,["disabled"],n);const o=l(t,["startOfSpeechSensitivity"]);o!=null&&s(e,["startOfSpeechSensitivity"],o);const a=l(t,["endOfSpeechSensitivity"]);a!=null&&s(e,["endOfSpeechSensitivity"],a);const u=l(t,["prefixPaddingMs"]);u!=null&&s(e,["prefixPaddingMs"],u);const c=l(t,["silenceDurationMs"]);return c!=null&&s(e,["silenceDurationMs"],c),e}function qE(t){const e={},n=l(t,["automaticActivityDetection"]);n!=null&&s(e,["automaticActivityDetection"],UE(n));const o=l(t,["activityHandling"]);o!=null&&s(e,["activityHandling"],o);const a=l(t,["turnCoverage"]);return a!=null&&s(e,["turnCoverage"],a),e}function BE(t){const e={},n=l(t,["targetTokens"]);return n!=null&&s(e,["targetTokens"],n),e}function VE(t){const e={},n=l(t,["triggerTokens"]);n!=null&&s(e,["triggerTokens"],n);const o=l(t,["slidingWindow"]);return o!=null&&s(e,["slidingWindow"],BE(o)),e}function zE(t){const e={},n=l(t,["proactiveAudio"]);return n!=null&&s(e,["proactiveAudio"],n),e}function HE(t,e){const n={},o=l(t,["generationConfig"]);e!==void 0&&o!=null&&s(e,["setup","generationConfig"],o);const a=l(t,["responseModalities"]);e!==void 0&&a!=null&&s(e,["setup","generationConfig","responseModalities"],a);const u=l(t,["temperature"]);e!==void 0&&u!=null&&s(e,["setup","generationConfig","temperature"],u);const c=l(t,["topP"]);e!==void 0&&c!=null&&s(e,["setup","generationConfig","topP"],c);const f=l(t,["topK"]);e!==void 0&&f!=null&&s(e,["setup","generationConfig","topK"],f);const p=l(t,["maxOutputTokens"]);e!==void 0&&p!=null&&s(e,["setup","generationConfig","maxOutputTokens"],p);const h=l(t,["mediaResolution"]);e!==void 0&&h!=null&&s(e,["setup","generationConfig","mediaResolution"],h);const y=l(t,["seed"]);e!==void 0&&y!=null&&s(e,["setup","generationConfig","seed"],y);const g=l(t,["speechConfig"]);e!==void 0&&g!=null&&s(e,["setup","generationConfig","speechConfig"],CE(Tu(g)));const b=l(t,["enableAffectiveDialog"]);e!==void 0&&b!=null&&s(e,["setup","generationConfig","enableAffectiveDialog"],b);const C=l(t,["systemInstruction"]);e!==void 0&&C!=null&&s(e,["setup","systemInstruction"],AE(dt(C)));const T=l(t,["tools"]);if(e!==void 0&&T!=null){let G=Yo(T);Array.isArray(G)&&(G=G.map(L=>LE(Oo(L)))),s(e,["setup","tools"],G)}const A=l(t,["sessionResumption"]);e!==void 0&&A!=null&&s(e,["setup","sessionResumption"],FE(A));const R=l(t,["inputAudioTranscription"]);e!==void 0&&R!=null&&s(e,["setup","inputAudioTranscription"],ep());const _=l(t,["outputAudioTranscription"]);e!==void 0&&_!=null&&s(e,["setup","outputAudioTranscription"],ep());const U=l(t,["realtimeInputConfig"]);e!==void 0&&U!=null&&s(e,["setup","realtimeInputConfig"],qE(U));const D=l(t,["contextWindowCompression"]);e!==void 0&&D!=null&&s(e,["setup","contextWindowCompression"],VE(D));const z=l(t,["proactivity"]);return e!==void 0&&z!=null&&s(e,["setup","proactivity"],zE(z)),n}function GE(t,e){const n={},o=l(e,["model"]);o!=null&&s(n,["setup","model"],De(t,o));const a=l(e,["config"]);return a!=null&&s(n,["config"],HE(a,n)),n}function WE(t,e,n){const o={},a=l(e,["expireTime"]);n!==void 0&&a!=null&&s(n,["expireTime"],a);const u=l(e,["newSessionExpireTime"]);n!==void 0&&u!=null&&s(n,["newSessionExpireTime"],u);const c=l(e,["uses"]);n!==void 0&&c!=null&&s(n,["uses"],c);const f=l(e,["liveConnectConstraints"]);n!==void 0&&f!=null&&s(n,["bidiGenerateContentSetup"],GE(t,f));const p=l(e,["lockAdditionalFields"]);return n!==void 0&&p!=null&&s(n,["fieldMask"],p),o}function $E(t,e){const n={},o=l(e,["config"]);return o!=null&&s(n,["config"],WE(t,o,n)),n}function JE(t){const e={},n=l(t,["name"]);return n!=null&&s(e,["name"],n),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function OE(t){const e=[];for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const o=t[n];if(typeof o=="object"&&o!=null&&Object.keys(o).length>0){const a=Object.keys(o).map(u=>`${n}.${u}`);e.push(...a)}else e.push(n)}return e.join(",")}function YE(t,e){let n=null;const o=t.bidiGenerateContentSetup;if(typeof o=="object"&&o!==null&&"setup"in o){const u=o.setup;typeof u=="object"&&u!==null?(t.bidiGenerateContentSetup=u,n=u):delete t.bidiGenerateContentSetup}else o!==void 0&&delete t.bidiGenerateContentSetup;const a=t.fieldMask;if(n){const u=OE(n);if(Array.isArray(e?.lockAdditionalFields)&&e?.lockAdditionalFields.length===0)u?t.fieldMask=u:delete t.fieldMask;else if(e?.lockAdditionalFields&&e.lockAdditionalFields.length>0&&a!==null&&Array.isArray(a)&&a.length>0){const c=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let f=[];a.length>0&&(f=a.map(h=>c.includes(h)?`generationConfig.${h}`:h));const p=[];u&&p.push(u),f.length>0&&p.push(...f),p.length>0?t.fieldMask=p.join(","):delete t.fieldMask}else delete t.fieldMask}else a!==null&&Array.isArray(a)&&a.length>0?t.fieldMask=a.join(","):delete t.fieldMask;return t}class KE extends ao{constructor(e){super(),this.apiClient=e}async create(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const f=$E(this.apiClient,e);u=le("auth_tokens",f._url),c=f._query,delete f.config,delete f._url,delete f._query;const p=YE(f,e.config);return a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(h=>h.json()),a.then(h=>JE(h))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function QE(t){const e={},n=l(t,["name"]);n!=null&&s(e,["_url","name"],n);const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function XE(t,e){const n={},o=l(t,["pageSize"]);e!==void 0&&o!=null&&s(e,["_query","pageSize"],o);const a=l(t,["pageToken"]);e!==void 0&&a!=null&&s(e,["_query","pageToken"],a);const u=l(t,["filter"]);return e!==void 0&&u!=null&&s(e,["_query","filter"],u),n}function ZE(t){const e={},n=l(t,["config"]);return n!=null&&s(e,["config"],XE(n,e)),e}function jE(t){const e={},n=l(t,["name"]);n!=null&&s(e,["_url","name"],n);const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function eS(t){const e={},n=l(t,["textInput"]);n!=null&&s(e,["textInput"],n);const o=l(t,["output"]);return o!=null&&s(e,["output"],o),e}function tS(t){const e={};if(l(t,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(l(t,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const n=l(t,["examples"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(a=>eS(a))),s(e,["examples","examples"],o)}return e}function nS(t,e){const n={};if(l(t,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const o=l(t,["tunedModelDisplayName"]);if(e!==void 0&&o!=null&&s(e,["displayName"],o),l(t,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const a=l(t,["epochCount"]);e!==void 0&&a!=null&&s(e,["tuningTask","hyperparameters","epochCount"],a);const u=l(t,["learningRateMultiplier"]);if(u!=null&&s(n,["tuningTask","hyperparameters","learningRateMultiplier"],u),l(t,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(l(t,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(l(t,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const c=l(t,["batchSize"]);e!==void 0&&c!=null&&s(e,["tuningTask","hyperparameters","batchSize"],c);const f=l(t,["learningRate"]);if(e!==void 0&&f!=null&&s(e,["tuningTask","hyperparameters","learningRate"],f),l(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");return n}function oS(t){const e={},n=l(t,["baseModel"]);n!=null&&s(e,["baseModel"],n);const o=l(t,["preTunedModel"]);o!=null&&s(e,["preTunedModel"],o);const a=l(t,["trainingDataset"]);a!=null&&s(e,["tuningTask","trainingData"],tS(a));const u=l(t,["config"]);return u!=null&&s(e,["config"],nS(u,e)),e}function iS(t){const e={},n=l(t,["name"]);n!=null&&s(e,["_url","name"],n);const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function rS(t,e){const n={},o=l(t,["pageSize"]);e!==void 0&&o!=null&&s(e,["_query","pageSize"],o);const a=l(t,["pageToken"]);e!==void 0&&a!=null&&s(e,["_query","pageToken"],a);const u=l(t,["filter"]);return e!==void 0&&u!=null&&s(e,["_query","filter"],u),n}function aS(t){const e={},n=l(t,["config"]);return n!=null&&s(e,["config"],rS(n,e)),e}function lS(t){const e={},n=l(t,["name"]);n!=null&&s(e,["_url","name"],n);const o=l(t,["config"]);return o!=null&&s(e,["config"],o),e}function sS(t,e){const n={},o=l(t,["gcsUri"]);e!==void 0&&o!=null&&s(e,["supervisedTuningSpec","trainingDatasetUri"],o);const a=l(t,["vertexDatasetResource"]);if(e!==void 0&&a!=null&&s(e,["supervisedTuningSpec","trainingDatasetUri"],a),l(t,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return n}function uS(t,e){const n={},o=l(t,["gcsUri"]);o!=null&&s(n,["validationDatasetUri"],o);const a=l(t,["vertexDatasetResource"]);return e!==void 0&&a!=null&&s(e,["supervisedTuningSpec","trainingDatasetUri"],a),n}function cS(t,e){const n={},o=l(t,["validationDataset"]);e!==void 0&&o!=null&&s(e,["supervisedTuningSpec"],uS(o,n));const a=l(t,["tunedModelDisplayName"]);e!==void 0&&a!=null&&s(e,["tunedModelDisplayName"],a);const u=l(t,["description"]);e!==void 0&&u!=null&&s(e,["description"],u);const c=l(t,["epochCount"]);e!==void 0&&c!=null&&s(e,["supervisedTuningSpec","hyperParameters","epochCount"],c);const f=l(t,["learningRateMultiplier"]);e!==void 0&&f!=null&&s(e,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],f);const p=l(t,["exportLastCheckpointOnly"]);e!==void 0&&p!=null&&s(e,["supervisedTuningSpec","exportLastCheckpointOnly"],p);const h=l(t,["preTunedModelCheckpointId"]);h!=null&&s(n,["preTunedModel","checkpointId"],h);const y=l(t,["adapterSize"]);if(e!==void 0&&y!=null&&s(e,["supervisedTuningSpec","hyperParameters","adapterSize"],y),l(t,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(l(t,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");const g=l(t,["labels"]);return e!==void 0&&g!=null&&s(e,["labels"],g),n}function dS(t){const e={},n=l(t,["baseModel"]);n!=null&&s(e,["baseModel"],n);const o=l(t,["preTunedModel"]);o!=null&&s(e,["preTunedModel"],o);const a=l(t,["trainingDataset"]);a!=null&&s(e,["supervisedTuningSpec","trainingDatasetUri"],sS(a,e));const u=l(t,["config"]);return u!=null&&s(e,["config"],cS(u,e)),e}function fS(t){const e={},n=l(t,["name"]);n!=null&&s(e,["model"],n);const o=l(t,["name"]);return o!=null&&s(e,["endpoint"],o),e}function Sm(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["state"]);a!=null&&s(e,["state"],Zp(a));const u=l(t,["createTime"]);u!=null&&s(e,["createTime"],u);const c=l(t,["tuningTask","startTime"]);c!=null&&s(e,["startTime"],c);const f=l(t,["tuningTask","completeTime"]);f!=null&&s(e,["endTime"],f);const p=l(t,["updateTime"]);p!=null&&s(e,["updateTime"],p);const h=l(t,["description"]);h!=null&&s(e,["description"],h);const y=l(t,["baseModel"]);y!=null&&s(e,["baseModel"],y);const g=l(t,["_self"]);g!=null&&s(e,["tunedModel"],fS(g));const b=l(t,["customBaseModel"]);b!=null&&s(e,["customBaseModel"],b);const C=l(t,["experiment"]);C!=null&&s(e,["experiment"],C);const T=l(t,["labels"]);T!=null&&s(e,["labels"],T);const A=l(t,["outputUri"]);A!=null&&s(e,["outputUri"],A);const R=l(t,["pipelineJob"]);R!=null&&s(e,["pipelineJob"],R);const _=l(t,["serviceAccount"]);_!=null&&s(e,["serviceAccount"],_);const U=l(t,["tunedModelDisplayName"]);return U!=null&&s(e,["tunedModelDisplayName"],U),e}function hS(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["tunedModels"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>Sm(c))),s(e,["tuningJobs"],u)}return e}function pS(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["metadata"]);a!=null&&s(e,["metadata"],a);const u=l(t,["done"]);u!=null&&s(e,["done"],u);const c=l(t,["error"]);return c!=null&&s(e,["error"],c),e}function mS(t){const e={},n=l(t,["checkpointId"]);n!=null&&s(e,["checkpointId"],n);const o=l(t,["epoch"]);o!=null&&s(e,["epoch"],o);const a=l(t,["step"]);a!=null&&s(e,["step"],a);const u=l(t,["endpoint"]);return u!=null&&s(e,["endpoint"],u),e}function yS(t){const e={},n=l(t,["model"]);n!=null&&s(e,["model"],n);const o=l(t,["endpoint"]);o!=null&&s(e,["endpoint"],o);const a=l(t,["checkpoints"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>mS(c))),s(e,["checkpoints"],u)}return e}function iu(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["name"]);o!=null&&s(e,["name"],o);const a=l(t,["state"]);a!=null&&s(e,["state"],Zp(a));const u=l(t,["createTime"]);u!=null&&s(e,["createTime"],u);const c=l(t,["startTime"]);c!=null&&s(e,["startTime"],c);const f=l(t,["endTime"]);f!=null&&s(e,["endTime"],f);const p=l(t,["updateTime"]);p!=null&&s(e,["updateTime"],p);const h=l(t,["error"]);h!=null&&s(e,["error"],h);const y=l(t,["description"]);y!=null&&s(e,["description"],y);const g=l(t,["baseModel"]);g!=null&&s(e,["baseModel"],g);const b=l(t,["tunedModel"]);b!=null&&s(e,["tunedModel"],yS(b));const C=l(t,["preTunedModel"]);C!=null&&s(e,["preTunedModel"],C);const T=l(t,["supervisedTuningSpec"]);T!=null&&s(e,["supervisedTuningSpec"],T);const A=l(t,["tuningDataStats"]);A!=null&&s(e,["tuningDataStats"],A);const R=l(t,["encryptionSpec"]);R!=null&&s(e,["encryptionSpec"],R);const _=l(t,["partnerModelTuningSpec"]);_!=null&&s(e,["partnerModelTuningSpec"],_);const U=l(t,["customBaseModel"]);U!=null&&s(e,["customBaseModel"],U);const D=l(t,["experiment"]);D!=null&&s(e,["experiment"],D);const z=l(t,["labels"]);z!=null&&s(e,["labels"],z);const G=l(t,["outputUri"]);G!=null&&s(e,["outputUri"],G);const L=l(t,["pipelineJob"]);L!=null&&s(e,["pipelineJob"],L);const Q=l(t,["serviceAccount"]);Q!=null&&s(e,["serviceAccount"],Q);const se=l(t,["tunedModelDisplayName"]);return se!=null&&s(e,["tunedModelDisplayName"],se),e}function gS(t){const e={},n=l(t,["sdkHttpResponse"]);n!=null&&s(e,["sdkHttpResponse"],n);const o=l(t,["nextPageToken"]);o!=null&&s(e,["nextPageToken"],o);const a=l(t,["tuningJobs"]);if(a!=null){let u=a;Array.isArray(u)&&(u=u.map(c=>iu(c))),s(e,["tuningJobs"],u)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vS extends ao{constructor(e){super(),this.apiClient=e,this.get=async n=>await this.getInternal(n),this.list=async(n={})=>new Xi(io.PAGED_ITEM_TUNING_JOBS,o=>this.listInternal(o),await this.listInternal(n),n),this.tune=async n=>{if(this.apiClient.isVertexAI())if(n.baseModel.startsWith("projects/")){const o={tunedModelName:n.baseModel},a=Object.assign(Object.assign({},n),{preTunedModel:o});return a.baseModel=void 0,await this.tuneInternal(a)}else{const o=Object.assign({},n);return await this.tuneInternal(o)}else{const o=Object.assign({},n),a=await this.tuneMldevInternal(o);let u="";return a.metadata!==void 0&&a.metadata.tunedModel!==void 0?u=a.metadata.tunedModel:a.name!==void 0&&a.name.includes("/operations/")&&(u=a.name.split("/operations/")[0]),{name:u,state:Ks.JOB_STATE_QUEUED}}}}async getInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=iS(e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>iu(y))}else{const h=QE(e);return f=le("{name}",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>Sm(y))}}async listInternal(e){var n,o,a,u;let c,f="",p={};if(this.apiClient.isVertexAI()){const h=aS(e);return f=le("tuningJobs",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=gS(y),b=new Ph;return Object.assign(b,g),b})}else{const h=ZE(e);return f=le("tunedModels",h._url),p=h._query,delete h.config,delete h._url,delete h._query,c=this.apiClient.request({path:f,queryParams:p,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal}).then(y=>y.json().then(g=>{const b=g;return b.sdkHttpResponse={headers:y.headers},b})),c.then(y=>{const g=hS(y),b=new Ph;return Object.assign(b,g),b})}}async cancel(e){var n,o,a,u;let c="",f={};if(this.apiClient.isVertexAI()){const p=lS(e);c=le("{name}:cancel",p._url),f=p._query,delete p.config,delete p._url,delete p._query,await this.apiClient.request({path:c,queryParams:f,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal})}else{const p=jE(e);c=le("{name}:cancel",p._url),f=p._query,delete p.config,delete p._url,delete p._query,await this.apiClient.request({path:c,queryParams:f,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(u=e.config)===null||u===void 0?void 0:u.abortSignal})}}async tuneInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI()){const f=dS(e);return u=le("tuningJobs",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json().then(h=>{const y=h;return y.sdkHttpResponse={headers:p.headers},y})),a.then(p=>iu(p))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(e){var n,o;let a,u="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const f=oS(e);return u=le("tunedModels",f._url),c=f._query,delete f.config,delete f._url,delete f._query,a=this.apiClient.request({path:u,queryParams:c,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(n=e.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=e.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json().then(h=>{const y=h;return y.sdkHttpResponse={headers:p.headers},y})),a.then(p=>pS(p))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wS{async download(e,n){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const bS=1024*1024*8,CS=3,kS=1e3,TS=2,Ms="x-goog-upload-status";async function xS(t,e,n){var o,a,u;let c=0,f=0,p=new Qs(new Response),h="upload";for(c=t.size;f<c;){const g=Math.min(bS,c-f),b=t.slice(f,f+g);f+g>=c&&(h+=", finalize");let C=0,T=kS;for(;C<CS&&(p=await n.request({path:"",body:b,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:e,headers:{"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":String(f),"Content-Length":String(g)}}}),!(!((o=p?.headers)===null||o===void 0)&&o[Ms]));)C++,await SS(T),T=T*TS;if(f+=g,((a=p?.headers)===null||a===void 0?void 0:a[Ms])!=="active")break;if(c<=f)throw new Error("All content has been uploaded, but the upload status is not finalized.")}const y=await p?.json();if(((u=p?.headers)===null||u===void 0?void 0:u[Ms])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return y.file}async function ES(t){return{size:t.size,type:t.type}}function SS(t){return new Promise(e=>setTimeout(e,t))}class AS{async upload(e,n,o){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await xS(e,n,o)}async stat(e){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await ES(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class IS{create(e,n,o){return new _S(e,n,o)}}class _S{constructor(e,n,o){this.url=e,this.headers=n,this.callbacks=o}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(e){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(e)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tp="x-goog-api-key";class PS{constructor(e){this.apiKey=e}async addAuthHeaders(e){if(e.get(tp)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");e.append(tp,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const MS="gl-node/";class RS{constructor(e){var n;if(e.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(e.project||e.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(n=e.vertexai)!==null&&n!==void 0?n:!1,this.apiKey=e.apiKey;const o=zv(e.httpOptions,e.vertexai,void 0,void 0);o&&(e.httpOptions?e.httpOptions.baseUrl=o:e.httpOptions={baseUrl:o}),this.apiVersion=e.apiVersion;const a=new PS(this.apiKey);this.apiClient=new Qx({auth:a,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:e.httpOptions,userAgentExtra:MS+"web",uploader:new AS,downloader:new wS}),this.models=new yE(this.apiClient),this.live=new uE(this.apiClient,a,new IS),this.batches=new Rb(this.apiClient),this.chats=new V1(this.models,this.apiClient),this.caches=new U1(this.apiClient),this.files=new j1(this.apiClient),this.operations=new gE(this.apiClient),this.authTokens=new KE(this.apiClient),this.tunings=new vS(this.apiClient)}}var zn=(t=>(t.USER="USER",t.BOT="BOT",t))(zn||{});const DS={id:"initial-message-sre",sender:zn.BOT,text:"Hello! I am an AI assistant with expertise in the Ship Repair (East) (SR (E)) collective agreement. Please ask me any questions you have about this document."},NS={id:"initial-message-src",sender:zn.BOT,text:"Hello! I am an AI assistant with expertise in the Ship Repair (Chargehands, East Coast) (SR (C)) collective agreement. Please ask me any questions you have about this document."};function LS(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const FS=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,US=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,qS={};function np(t,e){return(qS.jsx?US:FS).test(t)}const BS=/[ \t\n\f\r]/g;function VS(t){return typeof t=="object"?t.type==="text"?op(t.value):!1:op(t)}function op(t){return t.replace(BS,"")===""}class Zi{constructor(e,n,o){this.normal=n,this.property=e,o&&(this.space=o)}}Zi.prototype.normal={};Zi.prototype.property={};Zi.prototype.space=void 0;function Am(t,e){const n={},o={};for(const a of t)Object.assign(n,a.property),Object.assign(o,a.normal);return new Zi(n,o,e)}function ru(t){return t.toLowerCase()}class xt{constructor(e,n){this.attribute=n,this.property=e}}xt.prototype.attribute="";xt.prototype.booleanish=!1;xt.prototype.boolean=!1;xt.prototype.commaOrSpaceSeparated=!1;xt.prototype.commaSeparated=!1;xt.prototype.defined=!1;xt.prototype.mustUseProperty=!1;xt.prototype.number=!1;xt.prototype.overloadedBoolean=!1;xt.prototype.property="";xt.prototype.spaceSeparated=!1;xt.prototype.space=void 0;let zS=0;const be=so(),Qe=so(),au=so(),K=so(),qe=so(),$o=so(),Pt=so();function so(){return 2**++zS}const lu=Object.freeze(Object.defineProperty({__proto__:null,boolean:be,booleanish:Qe,commaOrSpaceSeparated:Pt,commaSeparated:$o,number:K,overloadedBoolean:au,spaceSeparated:qe},Symbol.toStringTag,{value:"Module"})),Rs=Object.keys(lu);class Su extends xt{constructor(e,n,o,a){let u=-1;if(super(e,n),ip(this,"space",a),typeof o=="number")for(;++u<Rs.length;){const c=Rs[u];ip(this,Rs[u],(o&lu[c])===lu[c])}}}Su.prototype.defined=!0;function ip(t,e,n){n&&(t[e]=n)}function Xo(t){const e={},n={};for(const[o,a]of Object.entries(t.properties)){const u=new Su(o,t.transform(t.attributes||{},o),a,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(u.mustUseProperty=!0),e[o]=u,n[ru(o)]=o,n[ru(u.attribute)]=o}return new Zi(e,n,t.space)}const Im=Xo({properties:{ariaActiveDescendant:null,ariaAtomic:Qe,ariaAutoComplete:null,ariaBusy:Qe,ariaChecked:Qe,ariaColCount:K,ariaColIndex:K,ariaColSpan:K,ariaControls:qe,ariaCurrent:null,ariaDescribedBy:qe,ariaDetails:null,ariaDisabled:Qe,ariaDropEffect:qe,ariaErrorMessage:null,ariaExpanded:Qe,ariaFlowTo:qe,ariaGrabbed:Qe,ariaHasPopup:null,ariaHidden:Qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:qe,ariaLevel:K,ariaLive:null,ariaModal:Qe,ariaMultiLine:Qe,ariaMultiSelectable:Qe,ariaOrientation:null,ariaOwns:qe,ariaPlaceholder:null,ariaPosInSet:K,ariaPressed:Qe,ariaReadOnly:Qe,ariaRelevant:null,ariaRequired:Qe,ariaRoleDescription:qe,ariaRowCount:K,ariaRowIndex:K,ariaRowSpan:K,ariaSelected:Qe,ariaSetSize:K,ariaSort:null,ariaValueMax:K,ariaValueMin:K,ariaValueNow:K,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function _m(t,e){return e in t?t[e]:e}function Pm(t,e){return _m(t,e.toLowerCase())}const HS=Xo({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$o,acceptCharset:qe,accessKey:qe,action:null,allow:null,allowFullScreen:be,allowPaymentRequest:be,allowUserMedia:be,alt:null,as:null,async:be,autoCapitalize:null,autoComplete:qe,autoFocus:be,autoPlay:be,blocking:qe,capture:null,charSet:null,checked:be,cite:null,className:qe,cols:K,colSpan:null,content:null,contentEditable:Qe,controls:be,controlsList:qe,coords:K|$o,crossOrigin:null,data:null,dateTime:null,decoding:null,default:be,defer:be,dir:null,dirName:null,disabled:be,download:au,draggable:Qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:be,formTarget:null,headers:qe,height:K,hidden:au,high:K,href:null,hrefLang:null,htmlFor:qe,httpEquiv:qe,id:null,imageSizes:null,imageSrcSet:null,inert:be,inputMode:null,integrity:null,is:null,isMap:be,itemId:null,itemProp:qe,itemRef:qe,itemScope:be,itemType:qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:be,low:K,manifest:null,max:null,maxLength:K,media:null,method:null,min:null,minLength:K,multiple:be,muted:be,name:null,nonce:null,noModule:be,noValidate:be,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:be,optimum:K,pattern:null,ping:qe,placeholder:null,playsInline:be,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:be,referrerPolicy:null,rel:qe,required:be,reversed:be,rows:K,rowSpan:K,sandbox:qe,scope:null,scoped:be,seamless:be,selected:be,shadowRootClonable:be,shadowRootDelegatesFocus:be,shadowRootMode:null,shape:null,size:K,sizes:null,slot:null,span:K,spellCheck:Qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:K,step:null,style:null,tabIndex:K,target:null,title:null,translate:null,type:null,typeMustMatch:be,useMap:null,value:Qe,width:K,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:qe,axis:null,background:null,bgColor:null,border:K,borderColor:null,bottomMargin:K,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:be,declare:be,event:null,face:null,frame:null,frameBorder:null,hSpace:K,leftMargin:K,link:null,longDesc:null,lowSrc:null,marginHeight:K,marginWidth:K,noResize:be,noHref:be,noShade:be,noWrap:be,object:null,profile:null,prompt:null,rev:null,rightMargin:K,rules:null,scheme:null,scrolling:Qe,standby:null,summary:null,text:null,topMargin:K,valueType:null,version:null,vAlign:null,vLink:null,vSpace:K,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:be,disableRemotePlayback:be,prefix:null,property:null,results:K,security:null,unselectable:null},space:"html",transform:Pm}),GS=Xo({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Pt,accentHeight:K,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:K,amplitude:K,arabicForm:null,ascent:K,attributeName:null,attributeType:null,azimuth:K,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:K,by:null,calcMode:null,capHeight:K,className:qe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:K,diffuseConstant:K,direction:null,display:null,dur:null,divisor:K,dominantBaseline:null,download:be,dx:null,dy:null,edgeMode:null,editable:null,elevation:K,enableBackground:null,end:null,event:null,exponent:K,externalResourcesRequired:null,fill:null,fillOpacity:K,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$o,g2:$o,glyphName:$o,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:K,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:K,horizOriginX:K,horizOriginY:K,id:null,ideographic:K,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:K,k:K,k1:K,k2:K,k3:K,k4:K,kernelMatrix:Pt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:K,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:K,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:K,overlineThickness:K,paintOrder:null,panose1:null,path:null,pathLength:K,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:qe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:K,pointsAtY:K,pointsAtZ:K,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Pt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Pt,rev:Pt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Pt,requiredFeatures:Pt,requiredFonts:Pt,requiredFormats:Pt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:K,specularExponent:K,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:K,strikethroughThickness:K,string:null,stroke:null,strokeDashArray:Pt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:K,strokeOpacity:K,strokeWidth:null,style:null,surfaceScale:K,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Pt,tabIndex:K,tableValues:null,target:null,targetX:K,targetY:K,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Pt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:K,underlineThickness:K,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:K,values:null,vAlphabetic:K,vMathematical:K,vectorEffect:null,vHanging:K,vIdeographic:K,version:null,vertAdvY:K,vertOriginX:K,vertOriginY:K,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:K,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:_m}),Mm=Xo({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),Rm=Xo({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Pm}),Dm=Xo({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),WS={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},$S=/[A-Z]/g,rp=/-[a-z]/g,JS=/^data[-\w.:]+$/i;function OS(t,e){const n=ru(e);let o=e,a=xt;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&JS.test(e)){if(e.charAt(4)==="-"){const u=e.slice(5).replace(rp,KS);o="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=e.slice(4);if(!rp.test(u)){let c=u.replace($S,YS);c.charAt(0)!=="-"&&(c="-"+c),e="data"+c}}a=Su}return new a(o,e)}function YS(t){return"-"+t.toLowerCase()}function KS(t){return t.charAt(1).toUpperCase()}const QS=Am([Im,HS,Mm,Rm,Dm],"html"),Au=Am([Im,GS,Mm,Rm,Dm],"svg");function XS(t){return t.join(" ").trim()}var Uo={},Ds,ap;function ZS(){if(ap)return Ds;ap=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,e=/\n/g,n=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,f=/^\s+|\s+$/g,p=`
`,h="/",y="*",g="",b="comment",C="declaration";Ds=function(A,R){if(typeof A!="string")throw new TypeError("First argument must be a string");if(!A)return[];R=R||{};var _=1,U=1;function D(ne){var oe=ne.match(e);oe&&(_+=oe.length);var re=ne.lastIndexOf(p);U=~re?ne.length-re:U+ne.length}function z(){var ne={line:_,column:U};return function(oe){return oe.position=new G(ne),se(),oe}}function G(ne){this.start=ne,this.end={line:_,column:U},this.source=R.source}G.prototype.content=A;function L(ne){var oe=new Error(R.source+":"+_+":"+U+": "+ne);if(oe.reason=ne,oe.filename=R.source,oe.line=_,oe.column=U,oe.source=A,!R.silent)throw oe}function Q(ne){var oe=ne.exec(A);if(oe){var re=oe[0];return D(re),A=A.slice(re.length),oe}}function se(){Q(n)}function Z(ne){var oe;for(ne=ne||[];oe=N();)oe!==!1&&ne.push(oe);return ne}function N(){var ne=z();if(!(h!=A.charAt(0)||y!=A.charAt(1))){for(var oe=2;g!=A.charAt(oe)&&(y!=A.charAt(oe)||h!=A.charAt(oe+1));)++oe;if(oe+=2,g===A.charAt(oe-1))return L("End of comment missing");var re=A.slice(2,oe-2);return U+=2,D(re),A=A.slice(oe),U+=2,ne({type:b,comment:re})}}function J(){var ne=z(),oe=Q(o);if(oe){if(N(),!Q(a))return L("property missing ':'");var re=Q(u),Se=ne({type:C,property:T(oe[0].replace(t,g)),value:re?T(re[0].replace(t,g)):g});return Q(c),Se}}function ee(){var ne=[];Z(ne);for(var oe;oe=J();)oe!==!1&&(ne.push(oe),Z(ne));return ne}return se(),ee()};function T(A){return A?A.replace(f,g):g}return Ds}var lp;function jS(){if(lp)return Uo;lp=1;var t=Uo&&Uo.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Uo,"__esModule",{value:!0}),Uo.default=n;var e=t(ZS());function n(o,a){var u=null;if(!o||typeof o!="string")return u;var c=(0,e.default)(o),f=typeof a=="function";return c.forEach(function(p){if(p.type==="declaration"){var h=p.property,y=p.value;f?a(h,y,p):y&&(u=u||{},u[h]=y)}}),u}return Uo}var zi={},sp;function eA(){if(sp)return zi;sp=1,Object.defineProperty(zi,"__esModule",{value:!0}),zi.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,e=/-([a-z])/g,n=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,u=function(h){return!h||n.test(h)||t.test(h)},c=function(h,y){return y.toUpperCase()},f=function(h,y){return"".concat(y,"-")},p=function(h,y){return y===void 0&&(y={}),u(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(a,f):h=h.replace(o,f),h.replace(e,c))};return zi.camelCase=p,zi}var Hi,up;function tA(){if(up)return Hi;up=1;var t=Hi&&Hi.__importDefault||function(a){return a&&a.__esModule?a:{default:a}},e=t(jS()),n=eA();function o(a,u){var c={};return!a||typeof a!="string"||(0,e.default)(a,function(f,p){f&&p&&(c[(0,n.camelCase)(f,u)]=p)}),c}return o.default=o,Hi=o,Hi}var nA=tA();const oA=Pa(nA),Nm=Lm("end"),Iu=Lm("start");function Lm(t){return e;function e(n){const o=n&&n.position&&n.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function iA(t){const e=Iu(t),n=Nm(t);if(e&&n)return{start:e,end:n}}function Ji(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?cp(t.position):"start"in t||"end"in t?cp(t):"line"in t||"column"in t?su(t):""}function su(t){return dp(t&&t.line)+":"+dp(t&&t.column)}function cp(t){return su(t&&t.start)+"-"+su(t&&t.end)}function dp(t){return t&&typeof t=="number"?t:1}class ht extends Error{constructor(e,n,o){super(),typeof n=="string"&&(o=n,n=void 0);let a="",u={},c=!1;if(n&&("line"in n&&"column"in n?u={place:n}:"start"in n&&"end"in n?u={place:n}:"type"in n?u={ancestors:[n],place:n.position}:u={...n}),typeof e=="string"?a=e:!u.cause&&e&&(c=!0,a=e.message,u.cause=e),!u.ruleId&&!u.source&&typeof o=="string"){const p=o.indexOf(":");p===-1?u.ruleId=o:(u.source=o.slice(0,p),u.ruleId=o.slice(p+1))}if(!u.place&&u.ancestors&&u.ancestors){const p=u.ancestors[u.ancestors.length-1];p&&(u.place=p.position)}const f=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=a,this.line=f?f.line:void 0,this.name=Ji(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=c&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ht.prototype.file="";ht.prototype.name="";ht.prototype.reason="";ht.prototype.message="";ht.prototype.stack="";ht.prototype.column=void 0;ht.prototype.line=void 0;ht.prototype.ancestors=void 0;ht.prototype.cause=void 0;ht.prototype.fatal=void 0;ht.prototype.place=void 0;ht.prototype.ruleId=void 0;ht.prototype.source=void 0;const _u={}.hasOwnProperty,rA=new Map,aA=/[A-Z]/g,lA=new Set(["table","tbody","thead","tfoot","tr"]),sA=new Set(["td","th"]),Fm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function uA(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let o;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=gA(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=yA(n,e.jsx,e.jsxs)}const a={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:o,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Au:QS,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},u=Um(a,t,void 0);return u&&typeof u!="string"?u:a.create(t,a.Fragment,{children:u||void 0},void 0)}function Um(t,e,n){if(e.type==="element")return cA(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return dA(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return hA(t,e,n);if(e.type==="mdxjsEsm")return fA(t,e);if(e.type==="root")return pA(t,e,n);if(e.type==="text")return mA(t,e)}function cA(t,e,n){const o=t.schema;let a=o;e.tagName.toLowerCase()==="svg"&&o.space==="html"&&(a=Au,t.schema=a),t.ancestors.push(e);const u=Bm(t,e.tagName,!1),c=vA(t,e);let f=Mu(t,e);return lA.has(e.tagName)&&(f=f.filter(function(p){return typeof p=="string"?!VS(p):!0})),qm(t,c,u,e),Pu(c,f),t.ancestors.pop(),t.schema=o,t.create(e,u,c,n)}function dA(t,e){if(e.data&&e.data.estree&&t.evaluater){const o=e.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}Ki(t,e.position)}function fA(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);Ki(t,e.position)}function hA(t,e,n){const o=t.schema;let a=o;e.name==="svg"&&o.space==="html"&&(a=Au,t.schema=a),t.ancestors.push(e);const u=e.name===null?t.Fragment:Bm(t,e.name,!0),c=wA(t,e),f=Mu(t,e);return qm(t,c,u,e),Pu(c,f),t.ancestors.pop(),t.schema=o,t.create(e,u,c,n)}function pA(t,e,n){const o={};return Pu(o,Mu(t,e)),t.create(e,t.Fragment,o,n)}function mA(t,e){return e.value}function qm(t,e,n,o){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=o)}function Pu(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function yA(t,e,n){return o;function o(a,u,c,f){const h=Array.isArray(c.children)?n:e;return f?h(u,c,f):h(u,c)}}function gA(t,e){return n;function n(o,a,u,c){const f=Array.isArray(u.children),p=Iu(o);return e(a,u,c,f,{columnNumber:p?p.column-1:void 0,fileName:t,lineNumber:p?p.line:void 0},void 0)}}function vA(t,e){const n={};let o,a;for(a in e.properties)if(a!=="children"&&_u.call(e.properties,a)){const u=bA(t,a,e.properties[a]);if(u){const[c,f]=u;t.tableCellAlignToStyle&&c==="align"&&typeof f=="string"&&sA.has(e.tagName)?o=f:n[c]=f}}if(o){const u=n.style||(n.style={});u[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return n}function wA(t,e){const n={};for(const o of e.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const u=o.data.estree.body[0];u.type;const c=u.expression;c.type;const f=c.properties[0];f.type,Object.assign(n,t.evaluater.evaluateExpression(f.argument))}else Ki(t,e.position);else{const a=o.name;let u;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const f=o.value.data.estree.body[0];f.type,u=t.evaluater.evaluateExpression(f.expression)}else Ki(t,e.position);else u=o.value===null?!0:o.value;n[a]=u}return n}function Mu(t,e){const n=[];let o=-1;const a=t.passKeys?new Map:rA;for(;++o<e.children.length;){const u=e.children[o];let c;if(t.passKeys){const p=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(p){const h=a.get(p)||0;c=p+"-"+h,a.set(p,h+1)}}const f=Um(t,u,c);f!==void 0&&n.push(f)}return n}function bA(t,e,n){const o=OS(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=o.commaSeparated?LS(n):XS(n)),o.property==="style"){let a=typeof n=="object"?n:CA(t,String(n));return t.stylePropertyNameCase==="css"&&(a=kA(a)),["style",a]}return[t.elementAttributeNameCase==="react"&&o.space?WS[o.property]||o.property:o.attribute,n]}}function CA(t,e){try{return oA(e,{reactCompat:!0})}catch(n){if(t.ignoreInvalidStyle)return{};const o=n,a=new ht("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=t.filePath||void 0,a.url=Fm+"#cannot-parse-style-attribute",a}}function Bm(t,e,n){let o;if(!n)o={type:"Literal",value:e};else if(e.includes(".")){const a=e.split(".");let u=-1,c;for(;++u<a.length;){const f=np(a[u])?{type:"Identifier",name:a[u]}:{type:"Literal",value:a[u]};c=c?{type:"MemberExpression",object:c,property:f,computed:!!(u&&f.type==="Literal"),optional:!1}:f}o=c}else o=np(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(o.type==="Literal"){const a=o.value;return _u.call(t.components,a)?t.components[a]:a}if(t.evaluater)return t.evaluater.evaluateExpression(o);Ki(t)}function Ki(t,e){const n=new ht("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=Fm+"#cannot-handle-mdx-estrees-without-createevaluater",n}function kA(t){const e={};let n;for(n in t)_u.call(t,n)&&(e[TA(n)]=t[n]);return e}function TA(t){let e=t.replace(aA,xA);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function xA(t){return"-"+t.toLowerCase()}const Ns={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},EA={};function Ru(t,e){const n=EA,o=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,a=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Vm(t,o,a)}function Vm(t,e,n){if(SA(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return fp(t.children,e,n)}return Array.isArray(t)?fp(t,e,n):""}function fp(t,e,n){const o=[];let a=-1;for(;++a<t.length;)o[a]=Vm(t[a],e,n);return o.join("")}function SA(t){return!!(t&&typeof t=="object")}const hp=document.createElement("i");function Du(t){const e="&"+t+";";hp.innerHTML=e;const n=hp.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Mt(t,e,n,o){const a=t.length;let u=0,c;if(e<0?e=-e>a?0:a+e:e=e>a?a:e,n=n>0?n:0,o.length<1e4)c=Array.from(o),c.unshift(e,n),t.splice(...c);else for(n&&t.splice(e,n);u<o.length;)c=o.slice(u,u+1e4),c.unshift(e,0),t.splice(...c),u+=1e4,e+=1e4}function Bt(t,e){return t.length>0?(Mt(t,t.length,0,e),t):e}const pp={}.hasOwnProperty;function zm(t){const e={};let n=-1;for(;++n<t.length;)AA(e,t[n]);return e}function AA(t,e){let n;for(n in e){const a=(pp.call(t,n)?t[n]:void 0)||(t[n]={}),u=e[n];let c;if(u)for(c in u){pp.call(a,c)||(a[c]=[]);const f=u[c];IA(a[c],Array.isArray(f)?f:f?[f]:[])}}}function IA(t,e){let n=-1;const o=[];for(;++n<e.length;)(e[n].add==="after"?t:o).push(e[n]);Mt(t,0,0,o)}function Hm(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Yt(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const yt=Hn(/[A-Za-z]/),ft=Hn(/[\dA-Za-z]/),_A=Hn(/[#-'*+\--9=?A-Z^-~]/);function Sa(t){return t!==null&&(t<32||t===127)}const uu=Hn(/\d/),PA=Hn(/[\dA-Fa-f]/),MA=Hn(/[!-/:-@[-`{-~]/);function me(t){return t!==null&&t<-2}function Fe(t){return t!==null&&(t<0||t===32)}function Ae(t){return t===-2||t===-1||t===32}const Na=Hn(new RegExp("\\p{P}|\\p{S}","u")),ro=Hn(/\s/);function Hn(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function Zo(t){const e=[];let n=-1,o=0,a=0;for(;++n<t.length;){const u=t.charCodeAt(n);let c="";if(u===37&&ft(t.charCodeAt(n+1))&&ft(t.charCodeAt(n+2)))a=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(c=String.fromCharCode(u));else if(u>55295&&u<57344){const f=t.charCodeAt(n+1);u<56320&&f>56319&&f<57344?(c=String.fromCharCode(u,f),a=1):c="�"}else c=String.fromCharCode(u);c&&(e.push(t.slice(o,n),encodeURIComponent(c)),o=n+a+1,c=""),a&&(n+=a,a=0)}return e.join("")+t.slice(o)}function Ie(t,e,n,o){const a=o?o-1:Number.POSITIVE_INFINITY;let u=0;return c;function c(p){return Ae(p)?(t.enter(n),f(p)):e(p)}function f(p){return Ae(p)&&u++<a?(t.consume(p),f):(t.exit(n),e(p))}}const RA={tokenize:DA};function DA(t){const e=t.attempt(this.parser.constructs.contentInitial,o,a);let n;return e;function o(f){if(f===null){t.consume(f);return}return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Ie(t,e,"linePrefix")}function a(f){return t.enter("paragraph"),u(f)}function u(f){const p=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=p),n=p,c(f)}function c(f){if(f===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(f);return}return me(f)?(t.consume(f),t.exit("chunkText"),u):(t.consume(f),c)}}const NA={tokenize:LA},mp={tokenize:FA};function LA(t){const e=this,n=[];let o=0,a,u,c;return f;function f(D){if(o<n.length){const z=n[o];return e.containerState=z[1],t.attempt(z[0].continuation,p,h)(D)}return h(D)}function p(D){if(o++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,a&&U();const z=e.events.length;let G=z,L;for(;G--;)if(e.events[G][0]==="exit"&&e.events[G][1].type==="chunkFlow"){L=e.events[G][1].end;break}_(o);let Q=z;for(;Q<e.events.length;)e.events[Q][1].end={...L},Q++;return Mt(e.events,G+1,0,e.events.slice(z)),e.events.length=Q,h(D)}return f(D)}function h(D){if(o===n.length){if(!a)return b(D);if(a.currentConstruct&&a.currentConstruct.concrete)return T(D);e.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(mp,y,g)(D)}function y(D){return a&&U(),_(o),b(D)}function g(D){return e.parser.lazy[e.now().line]=o!==n.length,c=e.now().offset,T(D)}function b(D){return e.containerState={},t.attempt(mp,C,T)(D)}function C(D){return o++,n.push([e.currentConstruct,e.containerState]),b(D)}function T(D){if(D===null){a&&U(),_(0),t.consume(D);return}return a=a||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:a,contentType:"flow",previous:u}),A(D)}function A(D){if(D===null){R(t.exit("chunkFlow"),!0),_(0),t.consume(D);return}return me(D)?(t.consume(D),R(t.exit("chunkFlow")),o=0,e.interrupt=void 0,f):(t.consume(D),A)}function R(D,z){const G=e.sliceStream(D);if(z&&G.push(null),D.previous=u,u&&(u.next=D),u=D,a.defineSkip(D.start),a.write(G),e.parser.lazy[D.start.line]){let L=a.events.length;for(;L--;)if(a.events[L][1].start.offset<c&&(!a.events[L][1].end||a.events[L][1].end.offset>c))return;const Q=e.events.length;let se=Q,Z,N;for(;se--;)if(e.events[se][0]==="exit"&&e.events[se][1].type==="chunkFlow"){if(Z){N=e.events[se][1].end;break}Z=!0}for(_(o),L=Q;L<e.events.length;)e.events[L][1].end={...N},L++;Mt(e.events,se+1,0,e.events.slice(Q)),e.events.length=L}}function _(D){let z=n.length;for(;z-- >D;){const G=n[z];e.containerState=G[1],G[0].exit.call(e,t)}n.length=D}function U(){a.write([null]),u=void 0,a=void 0,e.containerState._closeFlow=void 0}}function FA(t,e,n){return Ie(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Jo(t){if(t===null||Fe(t)||ro(t))return 1;if(Na(t))return 2}function La(t,e,n){const o=[];let a=-1;for(;++a<t.length;){const u=t[a].resolveAll;u&&!o.includes(u)&&(e=u(e,n),o.push(u))}return e}const cu={name:"attention",resolveAll:UA,tokenize:qA};function UA(t,e){let n=-1,o,a,u,c,f,p,h,y;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(o=n;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&e.sliceSerialize(t[o][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[o][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;p=t[o][1].end.offset-t[o][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const g={...t[o][1].end},b={...t[n][1].start};yp(g,-p),yp(b,p),c={type:p>1?"strongSequence":"emphasisSequence",start:g,end:{...t[o][1].end}},f={type:p>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:b},u={type:p>1?"strongText":"emphasisText",start:{...t[o][1].end},end:{...t[n][1].start}},a={type:p>1?"strong":"emphasis",start:{...c.start},end:{...f.end}},t[o][1].end={...c.start},t[n][1].start={...f.end},h=[],t[o][1].end.offset-t[o][1].start.offset&&(h=Bt(h,[["enter",t[o][1],e],["exit",t[o][1],e]])),h=Bt(h,[["enter",a,e],["enter",c,e],["exit",c,e],["enter",u,e]]),h=Bt(h,La(e.parser.constructs.insideSpan.null,t.slice(o+1,n),e)),h=Bt(h,[["exit",u,e],["enter",f,e],["exit",f,e],["exit",a,e]]),t[n][1].end.offset-t[n][1].start.offset?(y=2,h=Bt(h,[["enter",t[n][1],e],["exit",t[n][1],e]])):y=0,Mt(t,o-1,n-o+3,h),n=o+h.length-y-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function qA(t,e){const n=this.parser.constructs.attentionMarkers.null,o=this.previous,a=Jo(o);let u;return c;function c(p){return u=p,t.enter("attentionSequence"),f(p)}function f(p){if(p===u)return t.consume(p),f;const h=t.exit("attentionSequence"),y=Jo(p),g=!y||y===2&&a||n.includes(p),b=!a||a===2&&y||n.includes(o);return h._open=!!(u===42?g:g&&(a||!b)),h._close=!!(u===42?b:b&&(y||!g)),e(p)}}function yp(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const BA={name:"autolink",tokenize:VA};function VA(t,e,n){let o=0;return a;function a(C){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(C),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),u}function u(C){return yt(C)?(t.consume(C),c):C===64?n(C):h(C)}function c(C){return C===43||C===45||C===46||ft(C)?(o=1,f(C)):h(C)}function f(C){return C===58?(t.consume(C),o=0,p):(C===43||C===45||C===46||ft(C))&&o++<32?(t.consume(C),f):(o=0,h(C))}function p(C){return C===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(C),t.exit("autolinkMarker"),t.exit("autolink"),e):C===null||C===32||C===60||Sa(C)?n(C):(t.consume(C),p)}function h(C){return C===64?(t.consume(C),y):_A(C)?(t.consume(C),h):n(C)}function y(C){return ft(C)?g(C):n(C)}function g(C){return C===46?(t.consume(C),o=0,y):C===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(C),t.exit("autolinkMarker"),t.exit("autolink"),e):b(C)}function b(C){if((C===45||ft(C))&&o++<63){const T=C===45?b:g;return t.consume(C),T}return n(C)}}const ji={partial:!0,tokenize:zA};function zA(t,e,n){return o;function o(u){return Ae(u)?Ie(t,a,"linePrefix")(u):a(u)}function a(u){return u===null||me(u)?e(u):n(u)}}const Gm={continuation:{tokenize:GA},exit:WA,name:"blockQuote",tokenize:HA};function HA(t,e,n){const o=this;return a;function a(c){if(c===62){const f=o.containerState;return f.open||(t.enter("blockQuote",{_container:!0}),f.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(c),t.exit("blockQuoteMarker"),u}return n(c)}function u(c){return Ae(c)?(t.enter("blockQuotePrefixWhitespace"),t.consume(c),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(c))}}function GA(t,e,n){const o=this;return a;function a(c){return Ae(c)?Ie(t,u,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):u(c)}function u(c){return t.attempt(Gm,e,n)(c)}}function WA(t){t.exit("blockQuote")}const Wm={name:"characterEscape",tokenize:$A};function $A(t,e,n){return o;function o(u){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(u),t.exit("escapeMarker"),a}function a(u){return MA(u)?(t.enter("characterEscapeValue"),t.consume(u),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(u)}}const $m={name:"characterReference",tokenize:JA};function JA(t,e,n){const o=this;let a=0,u,c;return f;function f(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),p}function p(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),u=31,c=ft,y(g))}function h(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),u=6,c=PA,y):(t.enter("characterReferenceValue"),u=7,c=uu,y(g))}function y(g){if(g===59&&a){const b=t.exit("characterReferenceValue");return c===ft&&!Du(o.sliceSerialize(b))?n(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return c(g)&&a++<u?(t.consume(g),y):n(g)}}const gp={partial:!0,tokenize:YA},vp={concrete:!0,name:"codeFenced",tokenize:OA};function OA(t,e,n){const o=this,a={partial:!0,tokenize:G};let u=0,c=0,f;return p;function p(L){return h(L)}function h(L){const Q=o.events[o.events.length-1];return u=Q&&Q[1].type==="linePrefix"?Q[2].sliceSerialize(Q[1],!0).length:0,f=L,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),y(L)}function y(L){return L===f?(c++,t.consume(L),y):c<3?n(L):(t.exit("codeFencedFenceSequence"),Ae(L)?Ie(t,g,"whitespace")(L):g(L))}function g(L){return L===null||me(L)?(t.exit("codeFencedFence"),o.interrupt?e(L):t.check(gp,A,z)(L)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),b(L))}function b(L){return L===null||me(L)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(L)):Ae(L)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ie(t,C,"whitespace")(L)):L===96&&L===f?n(L):(t.consume(L),b)}function C(L){return L===null||me(L)?g(L):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),T(L))}function T(L){return L===null||me(L)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(L)):L===96&&L===f?n(L):(t.consume(L),T)}function A(L){return t.attempt(a,z,R)(L)}function R(L){return t.enter("lineEnding"),t.consume(L),t.exit("lineEnding"),_}function _(L){return u>0&&Ae(L)?Ie(t,U,"linePrefix",u+1)(L):U(L)}function U(L){return L===null||me(L)?t.check(gp,A,z)(L):(t.enter("codeFlowValue"),D(L))}function D(L){return L===null||me(L)?(t.exit("codeFlowValue"),U(L)):(t.consume(L),D)}function z(L){return t.exit("codeFenced"),e(L)}function G(L,Q,se){let Z=0;return N;function N(re){return L.enter("lineEnding"),L.consume(re),L.exit("lineEnding"),J}function J(re){return L.enter("codeFencedFence"),Ae(re)?Ie(L,ee,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(re):ee(re)}function ee(re){return re===f?(L.enter("codeFencedFenceSequence"),ne(re)):se(re)}function ne(re){return re===f?(Z++,L.consume(re),ne):Z>=c?(L.exit("codeFencedFenceSequence"),Ae(re)?Ie(L,oe,"whitespace")(re):oe(re)):se(re)}function oe(re){return re===null||me(re)?(L.exit("codeFencedFence"),Q(re)):se(re)}}}function YA(t,e,n){const o=this;return a;function a(c){return c===null?n(c):(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),u)}function u(c){return o.parser.lazy[o.now().line]?n(c):e(c)}}const Ls={name:"codeIndented",tokenize:QA},KA={partial:!0,tokenize:XA};function QA(t,e,n){const o=this;return a;function a(h){return t.enter("codeIndented"),Ie(t,u,"linePrefix",5)(h)}function u(h){const y=o.events[o.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?c(h):n(h)}function c(h){return h===null?p(h):me(h)?t.attempt(KA,c,p)(h):(t.enter("codeFlowValue"),f(h))}function f(h){return h===null||me(h)?(t.exit("codeFlowValue"),c(h)):(t.consume(h),f)}function p(h){return t.exit("codeIndented"),e(h)}}function XA(t,e,n){const o=this;return a;function a(c){return o.parser.lazy[o.now().line]?n(c):me(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),a):Ie(t,u,"linePrefix",5)(c)}function u(c){const f=o.events[o.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?e(c):me(c)?a(c):n(c)}}const ZA={name:"codeText",previous:eI,resolve:jA,tokenize:tI};function jA(t){let e=t.length-4,n=3,o,a;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(o=n;++o<e;)if(t[o][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(o=n-1,e++;++o<=e;)a===void 0?o!==e&&t[o][1].type!=="lineEnding"&&(a=o):(o===e||t[o][1].type==="lineEnding")&&(t[a][1].type="codeTextData",o!==a+2&&(t[a][1].end=t[o-1][1].end,t.splice(a+2,o-a-2),e-=o-a-2,o=a+2),a=void 0);return t}function eI(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function tI(t,e,n){let o=0,a,u;return c;function c(g){return t.enter("codeText"),t.enter("codeTextSequence"),f(g)}function f(g){return g===96?(t.consume(g),o++,f):(t.exit("codeTextSequence"),p(g))}function p(g){return g===null?n(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),p):g===96?(u=t.enter("codeTextSequence"),a=0,y(g)):me(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),p):(t.enter("codeTextData"),h(g))}function h(g){return g===null||g===32||g===96||me(g)?(t.exit("codeTextData"),p(g)):(t.consume(g),h)}function y(g){return g===96?(t.consume(g),a++,y):a===o?(t.exit("codeTextSequence"),t.exit("codeText"),e(g)):(u.type="codeTextData",h(g))}}class nI{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const o=n??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(e,o):e>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(e,n,o){const a=n||0;this.setCursor(Math.trunc(e));const u=this.right.splice(this.right.length-a,Number.POSITIVE_INFINITY);return o&&Gi(this.left,o),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Gi(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Gi(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);Gi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Gi(this.left,n.reverse())}}}function Gi(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function Jm(t){const e={};let n=-1,o,a,u,c,f,p,h;const y=new nI(t);for(;++n<y.length;){for(;n in e;)n=e[n];if(o=y.get(n),n&&o[1].type==="chunkFlow"&&y.get(n-1)[1].type==="listItemPrefix"&&(p=o[1]._tokenizer.events,u=0,u<p.length&&p[u][1].type==="lineEndingBlank"&&(u+=2),u<p.length&&p[u][1].type==="content"))for(;++u<p.length&&p[u][1].type!=="content";)p[u][1].type==="chunkText"&&(p[u][1]._isInFirstContentOfListItem=!0,u++);if(o[0]==="enter")o[1].contentType&&(Object.assign(e,oI(y,n)),n=e[n],h=!0);else if(o[1]._container){for(u=n,a=void 0;u--;)if(c=y.get(u),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(a&&(y.get(a)[1].type="lineEndingBlank"),c[1].type="lineEnding",a=u);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;a&&(o[1].end={...y.get(a)[1].start},f=y.slice(a,n),f.unshift(o),y.splice(a,n-a+1,f))}}return Mt(t,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function oI(t,e){const n=t.get(e)[1],o=t.get(e)[2];let a=e-1;const u=[];let c=n._tokenizer;c||(c=o.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const f=c.events,p=[],h={};let y,g,b=-1,C=n,T=0,A=0;const R=[A];for(;C;){for(;t.get(++a)[1]!==C;);u.push(a),C._tokenizer||(y=o.sliceStream(C),C.next||y.push(null),g&&c.defineSkip(C.start),C._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(y),C._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),g=C,C=C.next}for(C=n;++b<f.length;)f[b][0]==="exit"&&f[b-1][0]==="enter"&&f[b][1].type===f[b-1][1].type&&f[b][1].start.line!==f[b][1].end.line&&(A=b+1,R.push(A),C._tokenizer=void 0,C.previous=void 0,C=C.next);for(c.events=[],C?(C._tokenizer=void 0,C.previous=void 0):R.pop(),b=R.length;b--;){const _=f.slice(R[b],R[b+1]),U=u.pop();p.push([U,U+_.length-1]),t.splice(U,2,_)}for(p.reverse(),b=-1;++b<p.length;)h[T+p[b][0]]=T+p[b][1],T+=p[b][1]-p[b][0]-1;return h}const iI={resolve:aI,tokenize:lI},rI={partial:!0,tokenize:sI};function aI(t){return Jm(t),t}function lI(t,e){let n;return o;function o(f){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),a(f)}function a(f){return f===null?u(f):me(f)?t.check(rI,c,u)(f):(t.consume(f),a)}function u(f){return t.exit("chunkContent"),t.exit("content"),e(f)}function c(f){return t.consume(f),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function sI(t,e,n){const o=this;return a;function a(c){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),Ie(t,u,"linePrefix")}function u(c){if(c===null||me(c))return n(c);const f=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?e(c):t.interrupt(o.parser.constructs.flow,n,e)(c)}}function Om(t,e,n,o,a,u,c,f,p){const h=p||Number.POSITIVE_INFINITY;let y=0;return g;function g(_){return _===60?(t.enter(o),t.enter(a),t.enter(u),t.consume(_),t.exit(u),b):_===null||_===32||_===41||Sa(_)?n(_):(t.enter(o),t.enter(c),t.enter(f),t.enter("chunkString",{contentType:"string"}),A(_))}function b(_){return _===62?(t.enter(u),t.consume(_),t.exit(u),t.exit(a),t.exit(o),e):(t.enter(f),t.enter("chunkString",{contentType:"string"}),C(_))}function C(_){return _===62?(t.exit("chunkString"),t.exit(f),b(_)):_===null||_===60||me(_)?n(_):(t.consume(_),_===92?T:C)}function T(_){return _===60||_===62||_===92?(t.consume(_),C):C(_)}function A(_){return!y&&(_===null||_===41||Fe(_))?(t.exit("chunkString"),t.exit(f),t.exit(c),t.exit(o),e(_)):y<h&&_===40?(t.consume(_),y++,A):_===41?(t.consume(_),y--,A):_===null||_===32||_===40||Sa(_)?n(_):(t.consume(_),_===92?R:A)}function R(_){return _===40||_===41||_===92?(t.consume(_),A):A(_)}}function Ym(t,e,n,o,a,u){const c=this;let f=0,p;return h;function h(C){return t.enter(o),t.enter(a),t.consume(C),t.exit(a),t.enter(u),y}function y(C){return f>999||C===null||C===91||C===93&&!p||C===94&&!f&&"_hiddenFootnoteSupport"in c.parser.constructs?n(C):C===93?(t.exit(u),t.enter(a),t.consume(C),t.exit(a),t.exit(o),e):me(C)?(t.enter("lineEnding"),t.consume(C),t.exit("lineEnding"),y):(t.enter("chunkString",{contentType:"string"}),g(C))}function g(C){return C===null||C===91||C===93||me(C)||f++>999?(t.exit("chunkString"),y(C)):(t.consume(C),p||(p=!Ae(C)),C===92?b:g)}function b(C){return C===91||C===92||C===93?(t.consume(C),f++,g):g(C)}}function Km(t,e,n,o,a,u){let c;return f;function f(b){return b===34||b===39||b===40?(t.enter(o),t.enter(a),t.consume(b),t.exit(a),c=b===40?41:b,p):n(b)}function p(b){return b===c?(t.enter(a),t.consume(b),t.exit(a),t.exit(o),e):(t.enter(u),h(b))}function h(b){return b===c?(t.exit(u),p(c)):b===null?n(b):me(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),Ie(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===c||b===null||me(b)?(t.exit("chunkString"),h(b)):(t.consume(b),b===92?g:y)}function g(b){return b===c||b===92?(t.consume(b),y):y(b)}}function Oi(t,e){let n;return o;function o(a){return me(a)?(t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),n=!0,o):Ae(a)?Ie(t,o,n?"linePrefix":"lineSuffix")(a):e(a)}}const uI={name:"definition",tokenize:dI},cI={partial:!0,tokenize:fI};function dI(t,e,n){const o=this;let a;return u;function u(C){return t.enter("definition"),c(C)}function c(C){return Ym.call(o,t,f,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(C)}function f(C){return a=Yt(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),C===58?(t.enter("definitionMarker"),t.consume(C),t.exit("definitionMarker"),p):n(C)}function p(C){return Fe(C)?Oi(t,h)(C):h(C)}function h(C){return Om(t,y,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(C)}function y(C){return t.attempt(cI,g,g)(C)}function g(C){return Ae(C)?Ie(t,b,"whitespace")(C):b(C)}function b(C){return C===null||me(C)?(t.exit("definition"),o.parser.defined.push(a),e(C)):n(C)}}function fI(t,e,n){return o;function o(f){return Fe(f)?Oi(t,a)(f):n(f)}function a(f){return Km(t,u,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function u(f){return Ae(f)?Ie(t,c,"whitespace")(f):c(f)}function c(f){return f===null||me(f)?e(f):n(f)}}const hI={name:"hardBreakEscape",tokenize:pI};function pI(t,e,n){return o;function o(u){return t.enter("hardBreakEscape"),t.consume(u),a}function a(u){return me(u)?(t.exit("hardBreakEscape"),e(u)):n(u)}}const mI={name:"headingAtx",resolve:yI,tokenize:gI};function yI(t,e){let n=t.length-2,o=3,a,u;return t[o][1].type==="whitespace"&&(o+=2),n-2>o&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(o===n-1||n-4>o&&t[n-2][1].type==="whitespace")&&(n-=o+1===n?2:4),n>o&&(a={type:"atxHeadingText",start:t[o][1].start,end:t[n][1].end},u={type:"chunkText",start:t[o][1].start,end:t[n][1].end,contentType:"text"},Mt(t,o,n-o+1,[["enter",a,e],["enter",u,e],["exit",u,e],["exit",a,e]])),t}function gI(t,e,n){let o=0;return a;function a(y){return t.enter("atxHeading"),u(y)}function u(y){return t.enter("atxHeadingSequence"),c(y)}function c(y){return y===35&&o++<6?(t.consume(y),c):y===null||Fe(y)?(t.exit("atxHeadingSequence"),f(y)):n(y)}function f(y){return y===35?(t.enter("atxHeadingSequence"),p(y)):y===null||me(y)?(t.exit("atxHeading"),e(y)):Ae(y)?Ie(t,f,"whitespace")(y):(t.enter("atxHeadingText"),h(y))}function p(y){return y===35?(t.consume(y),p):(t.exit("atxHeadingSequence"),f(y))}function h(y){return y===null||y===35||Fe(y)?(t.exit("atxHeadingText"),f(y)):(t.consume(y),h)}}const vI=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],wp=["pre","script","style","textarea"],wI={concrete:!0,name:"htmlFlow",resolveTo:kI,tokenize:TI},bI={partial:!0,tokenize:EI},CI={partial:!0,tokenize:xI};function kI(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function TI(t,e,n){const o=this;let a,u,c,f,p;return h;function h(S){return y(S)}function y(S){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(S),g}function g(S){return S===33?(t.consume(S),b):S===47?(t.consume(S),u=!0,A):S===63?(t.consume(S),a=3,o.interrupt?e:x):yt(S)?(t.consume(S),c=String.fromCharCode(S),R):n(S)}function b(S){return S===45?(t.consume(S),a=2,C):S===91?(t.consume(S),a=5,f=0,T):yt(S)?(t.consume(S),a=4,o.interrupt?e:x):n(S)}function C(S){return S===45?(t.consume(S),o.interrupt?e:x):n(S)}function T(S){const ge="CDATA[";return S===ge.charCodeAt(f++)?(t.consume(S),f===ge.length?o.interrupt?e:ee:T):n(S)}function A(S){return yt(S)?(t.consume(S),c=String.fromCharCode(S),R):n(S)}function R(S){if(S===null||S===47||S===62||Fe(S)){const ge=S===47,ke=c.toLowerCase();return!ge&&!u&&wp.includes(ke)?(a=1,o.interrupt?e(S):ee(S)):vI.includes(c.toLowerCase())?(a=6,ge?(t.consume(S),_):o.interrupt?e(S):ee(S)):(a=7,o.interrupt&&!o.parser.lazy[o.now().line]?n(S):u?U(S):D(S))}return S===45||ft(S)?(t.consume(S),c+=String.fromCharCode(S),R):n(S)}function _(S){return S===62?(t.consume(S),o.interrupt?e:ee):n(S)}function U(S){return Ae(S)?(t.consume(S),U):N(S)}function D(S){return S===47?(t.consume(S),N):S===58||S===95||yt(S)?(t.consume(S),z):Ae(S)?(t.consume(S),D):N(S)}function z(S){return S===45||S===46||S===58||S===95||ft(S)?(t.consume(S),z):G(S)}function G(S){return S===61?(t.consume(S),L):Ae(S)?(t.consume(S),G):D(S)}function L(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(t.consume(S),p=S,Q):Ae(S)?(t.consume(S),L):se(S)}function Q(S){return S===p?(t.consume(S),p=null,Z):S===null||me(S)?n(S):(t.consume(S),Q)}function se(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||Fe(S)?G(S):(t.consume(S),se)}function Z(S){return S===47||S===62||Ae(S)?D(S):n(S)}function N(S){return S===62?(t.consume(S),J):n(S)}function J(S){return S===null||me(S)?ee(S):Ae(S)?(t.consume(S),J):n(S)}function ee(S){return S===45&&a===2?(t.consume(S),Se):S===60&&a===1?(t.consume(S),Ce):S===62&&a===4?(t.consume(S),M):S===63&&a===3?(t.consume(S),x):S===93&&a===5?(t.consume(S),fe):me(S)&&(a===6||a===7)?(t.exit("htmlFlowData"),t.check(bI,H,ne)(S)):S===null||me(S)?(t.exit("htmlFlowData"),ne(S)):(t.consume(S),ee)}function ne(S){return t.check(CI,oe,H)(S)}function oe(S){return t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),re}function re(S){return S===null||me(S)?ne(S):(t.enter("htmlFlowData"),ee(S))}function Se(S){return S===45?(t.consume(S),x):ee(S)}function Ce(S){return S===47?(t.consume(S),c="",j):ee(S)}function j(S){if(S===62){const ge=c.toLowerCase();return wp.includes(ge)?(t.consume(S),M):ee(S)}return yt(S)&&c.length<8?(t.consume(S),c+=String.fromCharCode(S),j):ee(S)}function fe(S){return S===93?(t.consume(S),x):ee(S)}function x(S){return S===62?(t.consume(S),M):S===45&&a===2?(t.consume(S),x):ee(S)}function M(S){return S===null||me(S)?(t.exit("htmlFlowData"),H(S)):(t.consume(S),M)}function H(S){return t.exit("htmlFlow"),e(S)}}function xI(t,e,n){const o=this;return a;function a(c){return me(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),u):n(c)}function u(c){return o.parser.lazy[o.now().line]?n(c):e(c)}}function EI(t,e,n){return o;function o(a){return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),t.attempt(ji,e,n)}}const SI={name:"htmlText",tokenize:AI};function AI(t,e,n){const o=this;let a,u,c;return f;function f(x){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(x),p}function p(x){return x===33?(t.consume(x),h):x===47?(t.consume(x),G):x===63?(t.consume(x),D):yt(x)?(t.consume(x),se):n(x)}function h(x){return x===45?(t.consume(x),y):x===91?(t.consume(x),u=0,T):yt(x)?(t.consume(x),U):n(x)}function y(x){return x===45?(t.consume(x),C):n(x)}function g(x){return x===null?n(x):x===45?(t.consume(x),b):me(x)?(c=g,Ce(x)):(t.consume(x),g)}function b(x){return x===45?(t.consume(x),C):g(x)}function C(x){return x===62?Se(x):x===45?b(x):g(x)}function T(x){const M="CDATA[";return x===M.charCodeAt(u++)?(t.consume(x),u===M.length?A:T):n(x)}function A(x){return x===null?n(x):x===93?(t.consume(x),R):me(x)?(c=A,Ce(x)):(t.consume(x),A)}function R(x){return x===93?(t.consume(x),_):A(x)}function _(x){return x===62?Se(x):x===93?(t.consume(x),_):A(x)}function U(x){return x===null||x===62?Se(x):me(x)?(c=U,Ce(x)):(t.consume(x),U)}function D(x){return x===null?n(x):x===63?(t.consume(x),z):me(x)?(c=D,Ce(x)):(t.consume(x),D)}function z(x){return x===62?Se(x):D(x)}function G(x){return yt(x)?(t.consume(x),L):n(x)}function L(x){return x===45||ft(x)?(t.consume(x),L):Q(x)}function Q(x){return me(x)?(c=Q,Ce(x)):Ae(x)?(t.consume(x),Q):Se(x)}function se(x){return x===45||ft(x)?(t.consume(x),se):x===47||x===62||Fe(x)?Z(x):n(x)}function Z(x){return x===47?(t.consume(x),Se):x===58||x===95||yt(x)?(t.consume(x),N):me(x)?(c=Z,Ce(x)):Ae(x)?(t.consume(x),Z):Se(x)}function N(x){return x===45||x===46||x===58||x===95||ft(x)?(t.consume(x),N):J(x)}function J(x){return x===61?(t.consume(x),ee):me(x)?(c=J,Ce(x)):Ae(x)?(t.consume(x),J):Z(x)}function ee(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(t.consume(x),a=x,ne):me(x)?(c=ee,Ce(x)):Ae(x)?(t.consume(x),ee):(t.consume(x),oe)}function ne(x){return x===a?(t.consume(x),a=void 0,re):x===null?n(x):me(x)?(c=ne,Ce(x)):(t.consume(x),ne)}function oe(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||Fe(x)?Z(x):(t.consume(x),oe)}function re(x){return x===47||x===62||Fe(x)?Z(x):n(x)}function Se(x){return x===62?(t.consume(x),t.exit("htmlTextData"),t.exit("htmlText"),e):n(x)}function Ce(x){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),j}function j(x){return Ae(x)?Ie(t,fe,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):fe(x)}function fe(x){return t.enter("htmlTextData"),c(x)}}const Nu={name:"labelEnd",resolveAll:MI,resolveTo:RI,tokenize:DI},II={tokenize:NI},_I={tokenize:LI},PI={tokenize:FI};function MI(t){let e=-1;const n=[];for(;++e<t.length;){const o=t[e][1];if(n.push(t[e]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const a=o.type==="labelImage"?4:2;o.type="data",e+=a}}return t.length!==n.length&&Mt(t,0,t.length,n),t}function RI(t,e){let n=t.length,o=0,a,u,c,f;for(;n--;)if(a=t[n][1],u){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;t[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(c){if(t[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(u=n,a.type!=="labelLink")){o=2;break}}else a.type==="labelEnd"&&(c=n);const p={type:t[u][1].type==="labelLink"?"link":"image",start:{...t[u][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[u][1].start},end:{...t[c][1].end}},y={type:"labelText",start:{...t[u+o+2][1].end},end:{...t[c-2][1].start}};return f=[["enter",p,e],["enter",h,e]],f=Bt(f,t.slice(u+1,u+o+3)),f=Bt(f,[["enter",y,e]]),f=Bt(f,La(e.parser.constructs.insideSpan.null,t.slice(u+o+4,c-3),e)),f=Bt(f,[["exit",y,e],t[c-2],t[c-1],["exit",h,e]]),f=Bt(f,t.slice(c+1)),f=Bt(f,[["exit",p,e]]),Mt(t,u,t.length,f),t}function DI(t,e,n){const o=this;let a=o.events.length,u,c;for(;a--;)if((o.events[a][1].type==="labelImage"||o.events[a][1].type==="labelLink")&&!o.events[a][1]._balanced){u=o.events[a][1];break}return f;function f(b){return u?u._inactive?g(b):(c=o.parser.defined.includes(Yt(o.sliceSerialize({start:u.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(b),t.exit("labelMarker"),t.exit("labelEnd"),p):n(b)}function p(b){return b===40?t.attempt(II,y,c?y:g)(b):b===91?t.attempt(_I,y,c?h:g)(b):c?y(b):g(b)}function h(b){return t.attempt(PI,y,g)(b)}function y(b){return e(b)}function g(b){return u._balanced=!0,n(b)}}function NI(t,e,n){return o;function o(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),a}function a(g){return Fe(g)?Oi(t,u)(g):u(g)}function u(g){return g===41?y(g):Om(t,c,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function c(g){return Fe(g)?Oi(t,p)(g):y(g)}function f(g){return n(g)}function p(g){return g===34||g===39||g===40?Km(t,h,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function h(g){return Fe(g)?Oi(t,y)(g):y(g)}function y(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),e):n(g)}}function LI(t,e,n){const o=this;return a;function a(f){return Ym.call(o,t,u,c,"reference","referenceMarker","referenceString")(f)}function u(f){return o.parser.defined.includes(Yt(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?e(f):n(f)}function c(f){return n(f)}}function FI(t,e,n){return o;function o(u){return t.enter("reference"),t.enter("referenceMarker"),t.consume(u),t.exit("referenceMarker"),a}function a(u){return u===93?(t.enter("referenceMarker"),t.consume(u),t.exit("referenceMarker"),t.exit("reference"),e):n(u)}}const UI={name:"labelStartImage",resolveAll:Nu.resolveAll,tokenize:qI};function qI(t,e,n){const o=this;return a;function a(f){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(f),t.exit("labelImageMarker"),u}function u(f){return f===91?(t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelImage"),c):n(f)}function c(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):e(f)}}const BI={name:"labelStartLink",resolveAll:Nu.resolveAll,tokenize:VI};function VI(t,e,n){const o=this;return a;function a(c){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelLink"),u}function u(c){return c===94&&"_hiddenFootnoteSupport"in o.parser.constructs?n(c):e(c)}}const Fs={name:"lineEnding",tokenize:zI};function zI(t,e){return n;function n(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Ie(t,e,"linePrefix")}}const ka={name:"thematicBreak",tokenize:HI};function HI(t,e,n){let o=0,a;return u;function u(h){return t.enter("thematicBreak"),c(h)}function c(h){return a=h,f(h)}function f(h){return h===a?(t.enter("thematicBreakSequence"),p(h)):o>=3&&(h===null||me(h))?(t.exit("thematicBreak"),e(h)):n(h)}function p(h){return h===a?(t.consume(h),o++,p):(t.exit("thematicBreakSequence"),Ae(h)?Ie(t,f,"whitespace")(h):f(h))}}const Tt={continuation:{tokenize:JI},exit:YI,name:"list",tokenize:$I},GI={partial:!0,tokenize:KI},WI={partial:!0,tokenize:OI};function $I(t,e,n){const o=this,a=o.events[o.events.length-1];let u=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,c=0;return f;function f(C){const T=o.containerState.type||(C===42||C===43||C===45?"listUnordered":"listOrdered");if(T==="listUnordered"?!o.containerState.marker||C===o.containerState.marker:uu(C)){if(o.containerState.type||(o.containerState.type=T,t.enter(T,{_container:!0})),T==="listUnordered")return t.enter("listItemPrefix"),C===42||C===45?t.check(ka,n,h)(C):h(C);if(!o.interrupt||C===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),p(C)}return n(C)}function p(C){return uu(C)&&++c<10?(t.consume(C),p):(!o.interrupt||c<2)&&(o.containerState.marker?C===o.containerState.marker:C===41||C===46)?(t.exit("listItemValue"),h(C)):n(C)}function h(C){return t.enter("listItemMarker"),t.consume(C),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||C,t.check(ji,o.interrupt?n:y,t.attempt(GI,b,g))}function y(C){return o.containerState.initialBlankLine=!0,u++,b(C)}function g(C){return Ae(C)?(t.enter("listItemPrefixWhitespace"),t.consume(C),t.exit("listItemPrefixWhitespace"),b):n(C)}function b(C){return o.containerState.size=u+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(C)}}function JI(t,e,n){const o=this;return o.containerState._closeFlow=void 0,t.check(ji,a,u);function a(f){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Ie(t,e,"listItemIndent",o.containerState.size+1)(f)}function u(f){return o.containerState.furtherBlankLines||!Ae(f)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,c(f)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(WI,e,c)(f))}function c(f){return o.containerState._closeFlow=!0,o.interrupt=void 0,Ie(t,t.attempt(Tt,e,n),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function OI(t,e,n){const o=this;return Ie(t,a,"listItemIndent",o.containerState.size+1);function a(u){const c=o.events[o.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===o.containerState.size?e(u):n(u)}}function YI(t){t.exit(this.containerState.type)}function KI(t,e,n){const o=this;return Ie(t,a,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function a(u){const c=o.events[o.events.length-1];return!Ae(u)&&c&&c[1].type==="listItemPrefixWhitespace"?e(u):n(u)}}const bp={name:"setextUnderline",resolveTo:QI,tokenize:XI};function QI(t,e){let n=t.length,o,a,u;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){o=n;break}t[n][1].type==="paragraph"&&(a=n)}else t[n][1].type==="content"&&t.splice(n,1),!u&&t[n][1].type==="definition"&&(u=n);const c={type:"setextHeading",start:{...t[o][1].start},end:{...t[t.length-1][1].end}};return t[a][1].type="setextHeadingText",u?(t.splice(a,0,["enter",c,e]),t.splice(u+1,0,["exit",t[o][1],e]),t[o][1].end={...t[u][1].end}):t[o][1]=c,t.push(["exit",c,e]),t}function XI(t,e,n){const o=this;let a;return u;function u(h){let y=o.events.length,g;for(;y--;)if(o.events[y][1].type!=="lineEnding"&&o.events[y][1].type!=="linePrefix"&&o.events[y][1].type!=="content"){g=o.events[y][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||g)?(t.enter("setextHeadingLine"),a=h,c(h)):n(h)}function c(h){return t.enter("setextHeadingLineSequence"),f(h)}function f(h){return h===a?(t.consume(h),f):(t.exit("setextHeadingLineSequence"),Ae(h)?Ie(t,p,"lineSuffix")(h):p(h))}function p(h){return h===null||me(h)?(t.exit("setextHeadingLine"),e(h)):n(h)}}const ZI={tokenize:jI};function jI(t){const e=this,n=t.attempt(ji,o,t.attempt(this.parser.constructs.flowInitial,a,Ie(t,t.attempt(this.parser.constructs.flow,a,t.attempt(iI,a)),"linePrefix")));return n;function o(u){if(u===null){t.consume(u);return}return t.enter("lineEndingBlank"),t.consume(u),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function a(u){if(u===null){t.consume(u);return}return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const e2={resolveAll:Xm()},t2=Qm("string"),n2=Qm("text");function Qm(t){return{resolveAll:Xm(t==="text"?o2:void 0),tokenize:e};function e(n){const o=this,a=this.parser.constructs[t],u=n.attempt(a,c,f);return c;function c(y){return h(y)?u(y):f(y)}function f(y){if(y===null){n.consume(y);return}return n.enter("data"),n.consume(y),p}function p(y){return h(y)?(n.exit("data"),u(y)):(n.consume(y),p)}function h(y){if(y===null)return!0;const g=a[y];let b=-1;if(g)for(;++b<g.length;){const C=g[b];if(!C.previous||C.previous.call(o,o.previous))return!0}return!1}}}function Xm(t){return e;function e(n,o){let a=-1,u;for(;++a<=n.length;)u===void 0?n[a]&&n[a][1].type==="data"&&(u=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==u+2&&(n[u][1].end=n[a-1][1].end,n.splice(u+2,a-u-2),a=u+2),u=void 0);return t?t(n,o):n}}function o2(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const o=t[n-1][1],a=e.sliceStream(o);let u=a.length,c=-1,f=0,p;for(;u--;){const h=a[u];if(typeof h=="string"){for(c=h.length;h.charCodeAt(c-1)===32;)f++,c--;if(c)break;c=-1}else if(h===-2)p=!0,f++;else if(h!==-1){u++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(f=0),f){const h={type:n===t.length||p||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?c:o.start._bufferIndex+c,_index:o.start._index+u,line:o.end.line,column:o.end.column-f,offset:o.end.offset-f},end:{...o.end}};o.end={...h.start},o.start.offset===o.end.offset?Object.assign(o,h):(t.splice(n,0,["enter",h,e],["exit",h,e]),n+=2)}n++}return t}const i2={42:Tt,43:Tt,45:Tt,48:Tt,49:Tt,50:Tt,51:Tt,52:Tt,53:Tt,54:Tt,55:Tt,56:Tt,57:Tt,62:Gm},r2={91:uI},a2={[-2]:Ls,[-1]:Ls,32:Ls},l2={35:mI,42:ka,45:[bp,ka],60:wI,61:bp,95:ka,96:vp,126:vp},s2={38:$m,92:Wm},u2={[-5]:Fs,[-4]:Fs,[-3]:Fs,33:UI,38:$m,42:cu,60:[BA,SI],91:BI,92:[hI,Wm],93:Nu,95:cu,96:ZA},c2={null:[cu,e2]},d2={null:[42,95]},f2={null:[]},h2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:d2,contentInitial:r2,disable:f2,document:i2,flow:l2,flowInitial:a2,insideSpan:c2,string:s2,text:u2},Symbol.toStringTag,{value:"Module"}));function p2(t,e,n){let o={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const a={},u=[];let c=[],f=[];const p={attempt:Q(G),check:Q(L),consume:U,enter:D,exit:z,interrupt:Q(L,{interrupt:!0})},h={code:null,containerState:{},defineSkip:A,events:[],now:T,parser:t,previous:null,sliceSerialize:b,sliceStream:C,write:g};let y=e.tokenize.call(h,p);return e.resolveAll&&u.push(e),h;function g(J){return c=Bt(c,J),R(),c[c.length-1]!==null?[]:(se(e,0),h.events=La(u,h.events,h),h.events)}function b(J,ee){return y2(C(J),ee)}function C(J){return m2(c,J)}function T(){const{_bufferIndex:J,_index:ee,line:ne,column:oe,offset:re}=o;return{_bufferIndex:J,_index:ee,line:ne,column:oe,offset:re}}function A(J){a[J.line]=J.column,N()}function R(){let J;for(;o._index<c.length;){const ee=c[o._index];if(typeof ee=="string")for(J=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===J&&o._bufferIndex<ee.length;)_(ee.charCodeAt(o._bufferIndex));else _(ee)}}function _(J){y=y(J)}function U(J){me(J)?(o.line++,o.column=1,o.offset+=J===-3?2:1,N()):J!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===c[o._index].length&&(o._bufferIndex=-1,o._index++)),h.previous=J}function D(J,ee){const ne=ee||{};return ne.type=J,ne.start=T(),h.events.push(["enter",ne,h]),f.push(ne),ne}function z(J){const ee=f.pop();return ee.end=T(),h.events.push(["exit",ee,h]),ee}function G(J,ee){se(J,ee.from)}function L(J,ee){ee.restore()}function Q(J,ee){return ne;function ne(oe,re,Se){let Ce,j,fe,x;return Array.isArray(oe)?H(oe):"tokenize"in oe?H([oe]):M(oe);function M(ye){return Me;function Me(Te){const Ne=Te!==null&&ye[Te],Ye=Te!==null&&ye.null,rn=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Ye)?Ye:Ye?[Ye]:[]];return H(rn)(Te)}}function H(ye){return Ce=ye,j=0,ye.length===0?Se:S(ye[j])}function S(ye){return Me;function Me(Te){return x=Z(),fe=ye,ye.partial||(h.currentConstruct=ye),ye.name&&h.parser.constructs.disable.null.includes(ye.name)?ke():ye.tokenize.call(ee?Object.assign(Object.create(h),ee):h,p,ge,ke)(Te)}}function ge(ye){return J(fe,x),re}function ke(ye){return x.restore(),++j<Ce.length?S(Ce[j]):Se}}}function se(J,ee){J.resolveAll&&!u.includes(J)&&u.push(J),J.resolve&&Mt(h.events,ee,h.events.length-ee,J.resolve(h.events.slice(ee),h)),J.resolveTo&&(h.events=J.resolveTo(h.events,h))}function Z(){const J=T(),ee=h.previous,ne=h.currentConstruct,oe=h.events.length,re=Array.from(f);return{from:oe,restore:Se};function Se(){o=J,h.previous=ee,h.currentConstruct=ne,h.events.length=oe,f=re,N()}}function N(){o.line in a&&o.column<2&&(o.column=a[o.line],o.offset+=a[o.line]-1)}}function m2(t,e){const n=e.start._index,o=e.start._bufferIndex,a=e.end._index,u=e.end._bufferIndex;let c;if(n===a)c=[t[n].slice(o,u)];else{if(c=t.slice(n,a),o>-1){const f=c[0];typeof f=="string"?c[0]=f.slice(o):c.shift()}u>0&&c.push(t[a].slice(0,u))}return c}function y2(t,e){let n=-1;const o=[];let a;for(;++n<t.length;){const u=t[n];let c;if(typeof u=="string")c=u;else switch(u){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=e?" ":"	";break}case-1:{if(!e&&a)continue;c=" ";break}default:c=String.fromCharCode(u)}a=u===-2,o.push(c)}return o.join("")}function g2(t){const o={constructs:zm([h2,...(t||{}).extensions||[]]),content:a(RA),defined:[],document:a(NA),flow:a(ZI),lazy:{},string:a(t2),text:a(n2)};return o;function a(u){return c;function c(f){return p2(o,u,f)}}}function v2(t){for(;!Jm(t););return t}const Cp=/[\0\t\n\r]/g;function w2(){let t=1,e="",n=!0,o;return a;function a(u,c,f){const p=[];let h,y,g,b,C;for(u=e+(typeof u=="string"?u.toString():new TextDecoder(c||void 0).decode(u)),g=0,e="",n&&(u.charCodeAt(0)===65279&&g++,n=void 0);g<u.length;){if(Cp.lastIndex=g,h=Cp.exec(u),b=h&&h.index!==void 0?h.index:u.length,C=u.charCodeAt(b),!h){e=u.slice(g);break}if(C===10&&g===b&&o)p.push(-3),o=void 0;else switch(o&&(p.push(-5),o=void 0),g<b&&(p.push(u.slice(g,b)),t+=b-g),C){case 0:{p.push(65533),t++;break}case 9:{for(y=Math.ceil(t/4)*4,p.push(-2);t++<y;)p.push(-1);break}case 10:{p.push(-4),t=1;break}default:o=!0,t=1}g=b+1}return f&&(o&&p.push(-5),e&&p.push(e),p.push(null)),p}}const b2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function C2(t){return t.replace(b2,k2)}function k2(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),u=a===120||a===88;return Hm(n.slice(u?2:1),u?16:10)}return Du(n)||t}const Zm={}.hasOwnProperty;function T2(t,e,n){return typeof e!="string"&&(n=e,e=void 0),x2(n)(v2(g2(n).document().write(w2()(t,e,!0))))}function x2(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(fo),autolinkProtocol:Z,autolinkEmail:Z,atxHeading:u(ei),blockQuote:u(Ye),characterEscape:Z,characterReference:Z,codeFenced:u(rn),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:u(rn,c),codeText:u(tr,c),codeTextData:Z,data:Z,codeFlowValue:Z,definition:u(uo),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:u(jo),hardBreakEscape:u(ti),hardBreakTrailing:u(ti),htmlFlow:u(co,c),htmlFlowData:Z,htmlText:u(co,c),htmlTextData:Z,image:u(nr),label:c,link:u(fo),listItem:u(vn),listItemValue:b,listOrdered:u(gn,g),listUnordered:u(gn),paragraph:u(ni),reference:S,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:u(ei),strong:u(or),thematicBreak:u(rr)},exit:{atxHeading:p(),atxHeadingSequence:G,autolink:p(),autolinkEmail:Ne,autolinkProtocol:Te,blockQuote:p(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:ye,characterReference:Me,codeFenced:p(R),codeFencedFence:A,codeFencedFenceInfo:C,codeFencedFenceMeta:T,codeFlowValue:N,codeIndented:p(_),codeText:p(re),codeTextData:N,data:N,definition:p(),definitionDestinationString:z,definitionLabelString:U,definitionTitleString:D,emphasis:p(),hardBreakEscape:p(ee),hardBreakTrailing:p(ee),htmlFlow:p(ne),htmlFlowData:N,htmlText:p(oe),htmlTextData:N,image:p(Ce),label:fe,labelText:j,lineEnding:J,link:p(Se),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:ge,resourceDestinationString:x,resourceTitleString:M,resource:H,setextHeading:p(se),setextHeadingLineSequence:Q,setextHeadingText:L,strong:p(),thematicBreak:p()}};jm(e,(t||{}).mdastExtensions||[]);const n={};return o;function o(V){let te={type:"root",children:[]};const ve={stack:[te],tokenStack:[],config:e,enter:f,exit:h,buffer:c,resume:y,data:n},xe=[];let _e=-1;for(;++_e<V.length;)if(V[_e][1].type==="listOrdered"||V[_e][1].type==="listUnordered")if(V[_e][0]==="enter")xe.push(_e);else{const nt=xe.pop();_e=a(V,nt,_e)}for(_e=-1;++_e<V.length;){const nt=e[V[_e][0]];Zm.call(nt,V[_e][1].type)&&nt[V[_e][1].type].call(Object.assign({sliceSerialize:V[_e][2].sliceSerialize},ve),V[_e][1])}if(ve.tokenStack.length>0){const nt=ve.tokenStack[ve.tokenStack.length-1];(nt[1]||kp).call(ve,void 0,nt[0])}for(te.position={start:Bn(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:Bn(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<e.transforms.length;)te=e.transforms[_e](te)||te;return te}function a(V,te,ve){let xe=te-1,_e=-1,nt=!1,an,Rt,wn,Gn;for(;++xe<=ve;){const ot=V[xe];switch(ot[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ot[0]==="enter"?_e++:_e--,Gn=void 0;break}case"lineEndingBlank":{ot[0]==="enter"&&(an&&!Gn&&!_e&&!wn&&(wn=xe),Gn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Gn=void 0}if(!_e&&ot[0]==="enter"&&ot[1].type==="listItemPrefix"||_e===-1&&ot[0]==="exit"&&(ot[1].type==="listUnordered"||ot[1].type==="listOrdered")){if(an){let Qt=xe;for(Rt=void 0;Qt--;){const Et=V[Qt];if(Et[1].type==="lineEnding"||Et[1].type==="lineEndingBlank"){if(Et[0]==="exit")continue;Rt&&(V[Rt][1].type="lineEndingBlank",nt=!0),Et[1].type="lineEnding",Rt=Qt}else if(!(Et[1].type==="linePrefix"||Et[1].type==="blockQuotePrefix"||Et[1].type==="blockQuotePrefixWhitespace"||Et[1].type==="blockQuoteMarker"||Et[1].type==="listItemIndent"))break}wn&&(!Rt||wn<Rt)&&(an._spread=!0),an.end=Object.assign({},Rt?V[Rt][1].start:ot[1].end),V.splice(Rt||xe,0,["exit",an,ot[2]]),xe++,ve++}if(ot[1].type==="listItemPrefix"){const Qt={type:"listItem",_spread:!1,start:Object.assign({},ot[1].start),end:void 0};an=Qt,V.splice(xe,0,["enter",Qt,ot[2]]),xe++,ve++,wn=void 0,Gn=!0}}}return V[te][1]._spread=nt,ve}function u(V,te){return ve;function ve(xe){f.call(this,V(xe),xe),te&&te.call(this,xe)}}function c(){this.stack.push({type:"fragment",children:[]})}function f(V,te,ve){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([te,ve||void 0]),V.position={start:Bn(te.start),end:void 0}}function p(V){return te;function te(ve){V&&V.call(this,ve),h.call(this,ve)}}function h(V,te){const ve=this.stack.pop(),xe=this.tokenStack.pop();if(xe)xe[0].type!==V.type&&(te?te.call(this,V,xe[0]):(xe[1]||kp).call(this,V,xe[0]));else throw new Error("Cannot close `"+V.type+"` ("+Ji({start:V.start,end:V.end})+"): it’s not open");ve.position.end=Bn(V.end)}function y(){return Ru(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(V){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function C(){const V=this.resume(),te=this.stack[this.stack.length-1];te.lang=V}function T(){const V=this.resume(),te=this.stack[this.stack.length-1];te.meta=V}function A(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function R(){const V=this.resume(),te=this.stack[this.stack.length-1];te.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function _(){const V=this.resume(),te=this.stack[this.stack.length-1];te.value=V.replace(/(\r?\n|\r)$/g,"")}function U(V){const te=this.resume(),ve=this.stack[this.stack.length-1];ve.label=te,ve.identifier=Yt(this.sliceSerialize(V)).toLowerCase()}function D(){const V=this.resume(),te=this.stack[this.stack.length-1];te.title=V}function z(){const V=this.resume(),te=this.stack[this.stack.length-1];te.url=V}function G(V){const te=this.stack[this.stack.length-1];if(!te.depth){const ve=this.sliceSerialize(V).length;te.depth=ve}}function L(){this.data.setextHeadingSlurpLineEnding=!0}function Q(V){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function se(){this.data.setextHeadingSlurpLineEnding=void 0}function Z(V){const ve=this.stack[this.stack.length-1].children;let xe=ve[ve.length-1];(!xe||xe.type!=="text")&&(xe=ir(),xe.position={start:Bn(V.start),end:void 0},ve.push(xe)),this.stack.push(xe)}function N(V){const te=this.stack.pop();te.value+=this.sliceSerialize(V),te.position.end=Bn(V.end)}function J(V){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ve=te.children[te.children.length-1];ve.position.end=Bn(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(te.type)&&(Z.call(this,V),N.call(this,V))}function ee(){this.data.atHardBreak=!0}function ne(){const V=this.resume(),te=this.stack[this.stack.length-1];te.value=V}function oe(){const V=this.resume(),te=this.stack[this.stack.length-1];te.value=V}function re(){const V=this.resume(),te=this.stack[this.stack.length-1];te.value=V}function Se(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=te,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function Ce(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=te,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function j(V){const te=this.sliceSerialize(V),ve=this.stack[this.stack.length-2];ve.label=C2(te),ve.identifier=Yt(te).toLowerCase()}function fe(){const V=this.stack[this.stack.length-1],te=this.resume(),ve=this.stack[this.stack.length-1];if(this.data.inReference=!0,ve.type==="link"){const xe=V.children;ve.children=xe}else ve.alt=te}function x(){const V=this.resume(),te=this.stack[this.stack.length-1];te.url=V}function M(){const V=this.resume(),te=this.stack[this.stack.length-1];te.title=V}function H(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function ge(V){const te=this.resume(),ve=this.stack[this.stack.length-1];ve.label=te,ve.identifier=Yt(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function ke(V){this.data.characterReferenceType=V.type}function ye(V){const te=this.sliceSerialize(V),ve=this.data.characterReferenceType;let xe;ve?(xe=Hm(te,ve==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):xe=Du(te);const _e=this.stack[this.stack.length-1];_e.value+=xe}function Me(V){const te=this.stack.pop();te.position.end=Bn(V.end)}function Te(V){N.call(this,V);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(V)}function Ne(V){N.call(this,V);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(V)}function Ye(){return{type:"blockquote",children:[]}}function rn(){return{type:"code",lang:null,meta:null,value:""}}function tr(){return{type:"inlineCode",value:""}}function uo(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function jo(){return{type:"emphasis",children:[]}}function ei(){return{type:"heading",depth:0,children:[]}}function ti(){return{type:"break"}}function co(){return{type:"html",value:""}}function nr(){return{type:"image",title:null,url:"",alt:null}}function fo(){return{type:"link",title:null,url:"",children:[]}}function gn(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[]}}function vn(V){return{type:"listItem",spread:V._spread,checked:null,children:[]}}function ni(){return{type:"paragraph",children:[]}}function or(){return{type:"strong",children:[]}}function ir(){return{type:"text",value:""}}function rr(){return{type:"thematicBreak"}}}function Bn(t){return{line:t.line,column:t.column,offset:t.offset}}function jm(t,e){let n=-1;for(;++n<e.length;){const o=e[n];Array.isArray(o)?jm(t,o):E2(t,o)}}function E2(t,e){let n;for(n in e)if(Zm.call(e,n))switch(n){case"canContainEols":{const o=e[n];o&&t[n].push(...o);break}case"transforms":{const o=e[n];o&&t[n].push(...o);break}case"enter":case"exit":{const o=e[n];o&&Object.assign(t[n],o);break}}}function kp(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Ji({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Ji({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Ji({start:e.start,end:e.end})+") is still open")}function S2(t){const e=this;e.parser=n;function n(o){return T2(o,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function A2(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function I2(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function _2(t,e){const n=e.value?e.value+`
`:"",o={};e.lang&&(o.className=["language-"+e.lang]);let a={type:"element",tagName:"code",properties:o,children:[{type:"text",value:n}]};return e.meta&&(a.data={meta:e.meta}),t.patch(e,a),a=t.applyData(e,a),a={type:"element",tagName:"pre",properties:{},children:[a]},t.patch(e,a),a}function P2(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function M2(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function R2(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(e.identifier).toUpperCase(),a=Zo(o.toLowerCase()),u=t.footnoteOrder.indexOf(o);let c,f=t.footnoteCounts.get(o);f===void 0?(f=0,t.footnoteOrder.push(o),c=t.footnoteOrder.length):c=u+1,f+=1,t.footnoteCounts.set(o,f);const p={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+a,id:n+"fnref-"+a+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};t.patch(e,p);const h={type:"element",tagName:"sup",properties:{},children:[p]};return t.patch(e,h),t.applyData(e,h)}function D2(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function N2(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function ey(t,e){const n=e.referenceType;let o="]";if(n==="collapsed"?o+="[]":n==="full"&&(o+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+o}];const a=t.all(e),u=a[0];u&&u.type==="text"?u.value="["+u.value:a.unshift({type:"text",value:"["});const c=a[a.length-1];return c&&c.type==="text"?c.value+=o:a.push({type:"text",value:o}),a}function L2(t,e){const n=String(e.identifier).toUpperCase(),o=t.definitionById.get(n);if(!o)return ey(t,e);const a={src:Zo(o.url||""),alt:e.alt};o.title!==null&&o.title!==void 0&&(a.title=o.title);const u={type:"element",tagName:"img",properties:a,children:[]};return t.patch(e,u),t.applyData(e,u)}function F2(t,e){const n={src:Zo(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const o={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,o),t.applyData(e,o)}function U2(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const o={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,o),t.applyData(e,o)}function q2(t,e){const n=String(e.identifier).toUpperCase(),o=t.definitionById.get(n);if(!o)return ey(t,e);const a={href:Zo(o.url||"")};o.title!==null&&o.title!==void 0&&(a.title=o.title);const u={type:"element",tagName:"a",properties:a,children:t.all(e)};return t.patch(e,u),t.applyData(e,u)}function B2(t,e){const n={href:Zo(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const o={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,o),t.applyData(e,o)}function V2(t,e,n){const o=t.all(e),a=n?z2(n):ty(e),u={},c=[];if(typeof e.checked=="boolean"){const y=o[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},o.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let f=-1;for(;++f<o.length;){const y=o[f];(a||f!==0||y.type!=="element"||y.tagName!=="p")&&c.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!a?c.push(...y.children):c.push(y)}const p=o[o.length-1];p&&(a||p.type!=="element"||p.tagName!=="p")&&c.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:u,children:c};return t.patch(e,h),t.applyData(e,h)}function z2(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let o=-1;for(;!e&&++o<n.length;)e=ty(n[o])}return e}function ty(t){const e=t.spread;return e??t.children.length>1}function H2(t,e){const n={},o=t.all(e);let a=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++a<o.length;){const c=o[a];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const u={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(o,!0)};return t.patch(e,u),t.applyData(e,u)}function G2(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function W2(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function $2(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function J2(t,e){const n=t.all(e),o=n.shift(),a=[];if(o){const c={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(e.children[0],c),a.push(c)}if(n.length>0){const c={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},f=Iu(e.children[1]),p=Nm(e.children[e.children.length-1]);f&&p&&(c.position={start:f,end:p}),a.push(c)}const u={type:"element",tagName:"table",properties:{},children:t.wrap(a,!0)};return t.patch(e,u),t.applyData(e,u)}function O2(t,e,n){const o=n?n.children:void 0,u=(o?o.indexOf(e):1)===0?"th":"td",c=n&&n.type==="table"?n.align:void 0,f=c?c.length:e.children.length;let p=-1;const h=[];for(;++p<f;){const g=e.children[p],b={},C=c?c[p]:void 0;C&&(b.align=C);let T={type:"element",tagName:u,properties:b,children:[]};g&&(T.children=t.all(g),t.patch(g,T),T=t.applyData(g,T)),h.push(T)}const y={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(e,y),t.applyData(e,y)}function Y2(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const Tp=9,xp=32;function K2(t){const e=String(t),n=/\r?\n|\r/g;let o=n.exec(e),a=0;const u=[];for(;o;)u.push(Ep(e.slice(a,o.index),a>0,!0),o[0]),a=o.index+o[0].length,o=n.exec(e);return u.push(Ep(e.slice(a),a>0,!1)),u.join("")}function Ep(t,e,n){let o=0,a=t.length;if(e){let u=t.codePointAt(o);for(;u===Tp||u===xp;)o++,u=t.codePointAt(o)}if(n){let u=t.codePointAt(a-1);for(;u===Tp||u===xp;)a--,u=t.codePointAt(a-1)}return a>o?t.slice(o,a):""}function Q2(t,e){const n={type:"text",value:K2(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function X2(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const Z2={blockquote:A2,break:I2,code:_2,delete:P2,emphasis:M2,footnoteReference:R2,heading:D2,html:N2,imageReference:L2,image:F2,inlineCode:U2,linkReference:q2,link:B2,listItem:V2,list:H2,paragraph:G2,root:W2,strong:$2,table:J2,tableCell:Y2,tableRow:O2,text:Q2,thematicBreak:X2,toml:ya,yaml:ya,definition:ya,footnoteDefinition:ya};function ya(){}const ny=-1,Fa=0,Yi=1,Aa=2,Lu=3,Fu=4,Uu=5,qu=6,oy=7,iy=8,Sp=typeof self=="object"?self:globalThis,j2=(t,e)=>{const n=(a,u)=>(t.set(u,a),a),o=a=>{if(t.has(a))return t.get(a);const[u,c]=e[a];switch(u){case Fa:case ny:return n(c,a);case Yi:{const f=n([],a);for(const p of c)f.push(o(p));return f}case Aa:{const f=n({},a);for(const[p,h]of c)f[o(p)]=o(h);return f}case Lu:return n(new Date(c),a);case Fu:{const{source:f,flags:p}=c;return n(new RegExp(f,p),a)}case Uu:{const f=n(new Map,a);for(const[p,h]of c)f.set(o(p),o(h));return f}case qu:{const f=n(new Set,a);for(const p of c)f.add(o(p));return f}case oy:{const{name:f,message:p}=c;return n(new Sp[f](p),a)}case iy:return n(BigInt(c),a);case"BigInt":return n(Object(BigInt(c)),a);case"ArrayBuffer":return n(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:f}=new Uint8Array(c);return n(new DataView(f),c)}}return n(new Sp[u](c),a)};return o},Ap=t=>j2(new Map,t)(0),qo="",{toString:e_}={},{keys:t_}=Object,Wi=t=>{const e=typeof t;if(e!=="object"||!t)return[Fa,e];const n=e_.call(t).slice(8,-1);switch(n){case"Array":return[Yi,qo];case"Object":return[Aa,qo];case"Date":return[Lu,qo];case"RegExp":return[Fu,qo];case"Map":return[Uu,qo];case"Set":return[qu,qo];case"DataView":return[Yi,n]}return n.includes("Array")?[Yi,n]:n.includes("Error")?[oy,n]:[Aa,n]},ga=([t,e])=>t===Fa&&(e==="function"||e==="symbol"),n_=(t,e,n,o)=>{const a=(c,f)=>{const p=o.push(c)-1;return n.set(f,p),p},u=c=>{if(n.has(c))return n.get(c);let[f,p]=Wi(c);switch(f){case Fa:{let y=c;switch(p){case"bigint":f=iy,y=c.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return a([ny],c)}return a([f,y],c)}case Yi:{if(p){let b=c;return p==="DataView"?b=new Uint8Array(c.buffer):p==="ArrayBuffer"&&(b=new Uint8Array(c)),a([p,[...b]],c)}const y=[],g=a([f,y],c);for(const b of c)y.push(u(b));return g}case Aa:{if(p)switch(p){case"BigInt":return a([p,c.toString()],c);case"Boolean":case"Number":case"String":return a([p,c.valueOf()],c)}if(e&&"toJSON"in c)return u(c.toJSON());const y=[],g=a([f,y],c);for(const b of t_(c))(t||!ga(Wi(c[b])))&&y.push([u(b),u(c[b])]);return g}case Lu:return a([f,c.toISOString()],c);case Fu:{const{source:y,flags:g}=c;return a([f,{source:y,flags:g}],c)}case Uu:{const y=[],g=a([f,y],c);for(const[b,C]of c)(t||!(ga(Wi(b))||ga(Wi(C))))&&y.push([u(b),u(C)]);return g}case qu:{const y=[],g=a([f,y],c);for(const b of c)(t||!ga(Wi(b)))&&y.push(u(b));return g}}const{message:h}=c;return a([f,{name:p,message:h}],c)};return u},Ip=(t,{json:e,lossy:n}={})=>{const o=[];return n_(!(e||n),!!e,new Map,o)(t),o},Ia=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?Ap(Ip(t,e)):structuredClone(t):(t,e)=>Ap(Ip(t,e));function o_(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function i_(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function r_(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||o_,o=t.options.footnoteBackLabel||i_,a=t.options.footnoteLabel||"Footnotes",u=t.options.footnoteLabelTagName||"h2",c=t.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let p=-1;for(;++p<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[p]);if(!h)continue;const y=t.all(h),g=String(h.identifier).toUpperCase(),b=Zo(g.toLowerCase());let C=0;const T=[],A=t.footnoteCounts.get(g);for(;A!==void 0&&++C<=A;){T.length>0&&T.push({type:"text",value:" "});let U=typeof n=="string"?n:n(p,C);typeof U=="string"&&(U={type:"text",value:U}),T.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+b+(C>1?"-"+C:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(p,C),className:["data-footnote-backref"]},children:Array.isArray(U)?U:[U]})}const R=y[y.length-1];if(R&&R.type==="element"&&R.tagName==="p"){const U=R.children[R.children.length-1];U&&U.type==="text"?U.value+=" ":R.children.push({type:"text",value:" "}),R.children.push(...T)}else y.push(...T);const _={type:"element",tagName:"li",properties:{id:e+"fn-"+b},children:t.wrap(y,!0)};t.patch(h,_),f.push(_)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...Ia(c),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(f,!0)},{type:"text",value:`
`}]}}const Ua=(function(t){if(t==null)return u_;if(typeof t=="function")return qa(t);if(typeof t=="object")return Array.isArray(t)?a_(t):l_(t);if(typeof t=="string")return s_(t);throw new Error("Expected function, string, or object as test")});function a_(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=Ua(t[n]);return qa(o);function o(...a){let u=-1;for(;++u<e.length;)if(e[u].apply(this,a))return!0;return!1}}function l_(t){const e=t;return qa(n);function n(o){const a=o;let u;for(u in t)if(a[u]!==e[u])return!1;return!0}}function s_(t){return qa(e);function e(n){return n&&n.type===t}}function qa(t){return e;function e(n,o,a){return!!(c_(n)&&t.call(this,n,typeof o=="number"?o:void 0,a||void 0))}}function u_(){return!0}function c_(t){return t!==null&&typeof t=="object"&&"type"in t}const ry=[],d_=!0,du=!1,f_="skip";function ay(t,e,n,o){let a;typeof e=="function"&&typeof n!="function"?(o=n,n=e):a=e;const u=Ua(a),c=o?-1:1;f(t,void 0,[])();function f(p,h,y){const g=p&&typeof p=="object"?p:{};if(typeof g.type=="string"){const C=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(p.type+(C?"<"+C+">":""))+")"})}return b;function b(){let C=ry,T,A,R;if((!e||u(p,h,y[y.length-1]||void 0))&&(C=h_(n(p,y)),C[0]===du))return C;if("children"in p&&p.children){const _=p;if(_.children&&C[0]!==f_)for(A=(o?_.children.length:-1)+c,R=y.concat(_);A>-1&&A<_.children.length;){const U=_.children[A];if(T=f(U,A,R)(),T[0]===du)return T;A=typeof T[1]=="number"?T[1]:A+c}}return C}}}function h_(t){return Array.isArray(t)?t:typeof t=="number"?[d_,t]:t==null?ry:[t]}function Bu(t,e,n,o){let a,u,c;typeof e=="function"&&typeof n!="function"?(u=void 0,c=e,a=n):(u=e,c=n,a=o),ay(t,u,f,a);function f(p,h){const y=h[h.length-1],g=y?y.children.indexOf(p):void 0;return c(p,g,y)}}const fu={}.hasOwnProperty,p_={};function m_(t,e){const n=e||p_,o=new Map,a=new Map,u=new Map,c={...Z2,...n.handlers},f={all:h,applyData:g_,definitionById:o,footnoteById:a,footnoteCounts:u,footnoteOrder:[],handlers:c,one:p,options:n,patch:y_,wrap:w_};return Bu(t,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?o:a,b=String(y.identifier).toUpperCase();g.has(b)||g.set(b,y)}}),f;function p(y,g){const b=y.type,C=f.handlers[b];if(fu.call(f.handlers,b)&&C)return C(f,y,g);if(f.options.passThrough&&f.options.passThrough.includes(b)){if("children"in y){const{children:A,...R}=y,_=Ia(R);return _.children=f.all(y),_}return Ia(y)}return(f.options.unknownHandler||v_)(f,y,g)}function h(y){const g=[];if("children"in y){const b=y.children;let C=-1;for(;++C<b.length;){const T=f.one(b[C],y);if(T){if(C&&b[C-1].type==="break"&&(!Array.isArray(T)&&T.type==="text"&&(T.value=_p(T.value)),!Array.isArray(T)&&T.type==="element")){const A=T.children[0];A&&A.type==="text"&&(A.value=_p(A.value))}Array.isArray(T)?g.push(...T):g.push(T)}}}return g}}function y_(t,e){t.position&&(e.position=iA(t))}function g_(t,e){let n=e;if(t&&t.data){const o=t.data.hName,a=t.data.hChildren,u=t.data.hProperties;if(typeof o=="string")if(n.type==="element")n.tagName=o;else{const c="children"in n?n.children:[n];n={type:"element",tagName:o,properties:{},children:c}}n.type==="element"&&u&&Object.assign(n.properties,Ia(u)),"children"in n&&n.children&&a!==null&&a!==void 0&&(n.children=a)}return n}function v_(t,e){const n=e.data||{},o="value"in e&&!(fu.call(n,"hProperties")||fu.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,o),t.applyData(e,o)}function w_(t,e){const n=[];let o=-1;for(e&&n.push({type:"text",value:`
`});++o<t.length;)o&&n.push({type:"text",value:`
`}),n.push(t[o]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function _p(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function Pp(t,e){const n=m_(t,e),o=n.one(t,void 0),a=r_(n),u=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return a&&u.children.push({type:"text",value:`
`},a),u}function b_(t,e){return t&&"run"in t?async function(n,o){const a=Pp(n,{file:o,...e});await t.run(a,o)}:function(n,o){return Pp(n,{file:o,...t||e})}}function Mp(t){if(t)throw t}var Us,Rp;function C_(){if(Rp)return Us;Rp=1;var t=Object.prototype.hasOwnProperty,e=Object.prototype.toString,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=function(h){return typeof Array.isArray=="function"?Array.isArray(h):e.call(h)==="[object Array]"},u=function(h){if(!h||e.call(h)!=="[object Object]")return!1;var y=t.call(h,"constructor"),g=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!g)return!1;var b;for(b in h);return typeof b>"u"||t.call(h,b)},c=function(h,y){n&&y.name==="__proto__"?n(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},f=function(h,y){if(y==="__proto__")if(t.call(h,y)){if(o)return o(h,y).value}else return;return h[y]};return Us=function p(){var h,y,g,b,C,T,A=arguments[0],R=1,_=arguments.length,U=!1;for(typeof A=="boolean"&&(U=A,A=arguments[1]||{},R=2),(A==null||typeof A!="object"&&typeof A!="function")&&(A={});R<_;++R)if(h=arguments[R],h!=null)for(y in h)g=f(A,y),b=f(h,y),A!==b&&(U&&b&&(u(b)||(C=a(b)))?(C?(C=!1,T=g&&a(g)?g:[]):T=g&&u(g)?g:{},c(A,{name:y,newValue:p(U,T,b)})):typeof b<"u"&&c(A,{name:y,newValue:b}));return A},Us}var k_=C_();const qs=Pa(k_);function hu(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function T_(){const t=[],e={run:n,use:o};return e;function n(...a){let u=-1;const c=a.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);f(null,...a);function f(p,...h){const y=t[++u];let g=-1;if(p){c(p);return}for(;++g<a.length;)(h[g]===null||h[g]===void 0)&&(h[g]=a[g]);a=h,y?x_(y,f)(...h):c(null,...h)}}function o(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return t.push(a),e}}function x_(t,e){let n;return o;function o(...c){const f=t.length>c.length;let p;f&&c.push(a);try{p=t.apply(this,c)}catch(h){const y=h;if(f&&n)throw y;return a(y)}f||(p&&p.then&&typeof p.then=="function"?p.then(u,a):p instanceof Error?a(p):u(p))}function a(c,...f){n||(n=!0,e(c,...f))}function u(c){a(null,c)}}const nn={basename:E_,dirname:S_,extname:A_,join:I_,sep:"/"};function E_(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');er(t);let n=0,o=-1,a=t.length,u;if(e===void 0||e.length===0||e.length>t.length){for(;a--;)if(t.codePointAt(a)===47){if(u){n=a+1;break}}else o<0&&(u=!0,o=a+1);return o<0?"":t.slice(n,o)}if(e===t)return"";let c=-1,f=e.length-1;for(;a--;)if(t.codePointAt(a)===47){if(u){n=a+1;break}}else c<0&&(u=!0,c=a+1),f>-1&&(t.codePointAt(a)===e.codePointAt(f--)?f<0&&(o=a):(f=-1,o=c));return n===o?o=c:o<0&&(o=t.length),t.slice(n,o)}function S_(t){if(er(t),t.length===0)return".";let e=-1,n=t.length,o;for(;--n;)if(t.codePointAt(n)===47){if(o){e=n;break}}else o||(o=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function A_(t){er(t);let e=t.length,n=-1,o=0,a=-1,u=0,c;for(;e--;){const f=t.codePointAt(e);if(f===47){if(c){o=e+1;break}continue}n<0&&(c=!0,n=e+1),f===46?a<0?a=e:u!==1&&(u=1):a>-1&&(u=-1)}return a<0||n<0||u===0||u===1&&a===n-1&&a===o+1?"":t.slice(a,n)}function I_(...t){let e=-1,n;for(;++e<t.length;)er(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":__(n)}function __(t){er(t);const e=t.codePointAt(0)===47;let n=P_(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function P_(t,e){let n="",o=0,a=-1,u=0,c=-1,f,p;for(;++c<=t.length;){if(c<t.length)f=t.codePointAt(c);else{if(f===47)break;f=47}if(f===47){if(!(a===c-1||u===1))if(a!==c-1&&u===2){if(n.length<2||o!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(p=n.lastIndexOf("/"),p!==n.length-1){p<0?(n="",o=0):(n=n.slice(0,p),o=n.length-1-n.lastIndexOf("/")),a=c,u=0;continue}}else if(n.length>0){n="",o=0,a=c,u=0;continue}}e&&(n=n.length>0?n+"/..":"..",o=2)}else n.length>0?n+="/"+t.slice(a+1,c):n=t.slice(a+1,c),o=c-a-1;a=c,u=0}else f===46&&u>-1?u++:u=-1}return n}function er(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const M_={cwd:R_};function R_(){return"/"}function pu(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function D_(t){if(typeof t=="string")t=new URL(t);else if(!pu(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return N_(t)}function N_(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const o=e.codePointAt(n+2);if(o===70||o===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(e)}const Bs=["history","path","basename","stem","extname","dirname"];class ly{constructor(e){let n;e?pu(e)?n={path:e}:typeof e=="string"||L_(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":M_.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Bs.length;){const u=Bs[o];u in n&&n[u]!==void 0&&n[u]!==null&&(this[u]=u==="history"?[...n[u]]:n[u])}let a;for(a in n)Bs.includes(a)||(this[a]=n[a])}get basename(){return typeof this.path=="string"?nn.basename(this.path):void 0}set basename(e){zs(e,"basename"),Vs(e,"basename"),this.path=nn.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?nn.dirname(this.path):void 0}set dirname(e){Dp(this.basename,"dirname"),this.path=nn.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?nn.extname(this.path):void 0}set extname(e){if(Vs(e,"extname"),Dp(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=nn.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){pu(e)&&(e=D_(e)),zs(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?nn.basename(this.path,this.extname):void 0}set stem(e){zs(e,"stem"),Vs(e,"stem"),this.path=nn.join(this.dirname||"",e+(this.extname||""))}fail(e,n,o){const a=this.message(e,n,o);throw a.fatal=!0,a}info(e,n,o){const a=this.message(e,n,o);return a.fatal=void 0,a}message(e,n,o){const a=new ht(e,n,o);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Vs(t,e){if(t&&t.includes(nn.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+nn.sep+"`")}function zs(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function Dp(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function L_(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const F_=(function(t){const o=this.constructor.prototype,a=o[t],u=function(){return a.apply(u,arguments)};return Object.setPrototypeOf(u,o),u}),U_={}.hasOwnProperty;class Vu extends F_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=T_()}copy(){const e=new Vu;let n=-1;for(;++n<this.attachers.length;){const o=this.attachers[n];e.use(...o)}return e.data(qs(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Ws("data",this.frozen),this.namespace[e]=n,this):U_.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Ws("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const a=n.call(e,...o);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=va(e),o=this.parser||this.Parser;return Hs("parse",o),o(String(n),n)}process(e,n){const o=this;return this.freeze(),Hs("process",this.parser||this.Parser),Gs("process",this.compiler||this.Compiler),n?a(void 0,n):new Promise(a);function a(u,c){const f=va(e),p=o.parse(f);o.run(p,f,function(y,g,b){if(y||!g||!b)return h(y);const C=g,T=o.stringify(C,b);V_(T)?b.value=T:b.result=T,h(y,b)});function h(y,g){y||!g?c(y):u?u(g):n(void 0,g)}}}processSync(e){let n=!1,o;return this.freeze(),Hs("processSync",this.parser||this.Parser),Gs("processSync",this.compiler||this.Compiler),this.process(e,a),Lp("processSync","process",n),o;function a(u,c){n=!0,Mp(u),o=c}}run(e,n,o){Np(e),this.freeze();const a=this.transformers;return!o&&typeof n=="function"&&(o=n,n=void 0),o?u(void 0,o):new Promise(u);function u(c,f){const p=va(n);a.run(e,p,h);function h(y,g,b){const C=g||e;y?f(y):c?c(C):o(void 0,C,b)}}}runSync(e,n){let o=!1,a;return this.run(e,n,u),Lp("runSync","run",o),a;function u(c,f){Mp(c),a=f,o=!0}}stringify(e,n){this.freeze();const o=va(n),a=this.compiler||this.Compiler;return Gs("stringify",a),Np(e),a(e,o)}use(e,...n){const o=this.attachers,a=this.namespace;if(Ws("use",this.frozen),e!=null)if(typeof e=="function")p(e,n);else if(typeof e=="object")Array.isArray(e)?f(e):c(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function u(h){if(typeof h=="function")p(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...g]=h;p(y,g)}else c(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function c(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(h.plugins),h.settings&&(a.settings=qs(!0,a.settings,h.settings))}function f(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const g=h[y];u(g)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function p(h,y){let g=-1,b=-1;for(;++g<o.length;)if(o[g][0]===h){b=g;break}if(b===-1)o.push([h,...y]);else if(y.length>0){let[C,...T]=y;const A=o[b][1];hu(A)&&hu(C)&&(C=qs(!0,A,C)),o[b]=[h,C,...T]}}}}const q_=new Vu().freeze();function Hs(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Gs(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Ws(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Np(t){if(!hu(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Lp(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function va(t){return B_(t)?t:new ly(t)}function B_(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function V_(t){return typeof t=="string"||z_(t)}function z_(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const H_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Fp=[],Up={allowDangerousHtml:!0},G_=/^(https?|ircs?|mailto|xmpp)$/i,W_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function mu(t){const e=$_(t),n=J_(t);return O_(e.runSync(e.parse(n),n),t)}function $_(t){const e=t.rehypePlugins||Fp,n=t.remarkPlugins||Fp,o=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Up}:Up;return q_().use(S2).use(n).use(b_,o).use(e)}function J_(t){const e=t.children||"",n=new ly;return typeof e=="string"&&(n.value=e),n}function O_(t,e){const n=e.allowedElements,o=e.allowElement,a=e.components,u=e.disallowedElements,c=e.skipHtml,f=e.unwrapDisallowed,p=e.urlTransform||Y_;for(const y of W_)Object.hasOwn(e,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+H_+y.id,void 0);return Bu(t,h),uA(t,{Fragment:Y.Fragment,components:a,ignoreInvalidStyle:!0,jsx:Y.jsx,jsxs:Y.jsxs,passKeys:!0,passNode:!0});function h(y,g,b){if(y.type==="raw"&&b&&typeof g=="number")return c?b.children.splice(g,1):b.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let C;for(C in Ns)if(Object.hasOwn(Ns,C)&&Object.hasOwn(y.properties,C)){const T=y.properties[C],A=Ns[C];(A===null||A.includes(y.tagName))&&(y.properties[C]=p(String(T||""),C,y))}}if(y.type==="element"){let C=n?!n.includes(y.tagName):u?u.includes(y.tagName):!1;if(!C&&o&&typeof g=="number"&&(C=!o(y,g,b)),C&&b&&typeof g=="number")return f&&y.children?b.children.splice(g,1,...y.children):b.children.splice(g,1),g}}}function Y_(t){const e=t.indexOf(":"),n=t.indexOf("?"),o=t.indexOf("#"),a=t.indexOf("/");return e===-1||a!==-1&&e>a||n!==-1&&e>n||o!==-1&&e>o||G_.test(t.slice(0,e))?t:""}function qp(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let o=0,a=n.indexOf(e);for(;a!==-1;)o++,a=n.indexOf(e,a+e.length);return o}function K_(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Q_(t,e,n){const a=Ua((n||{}).ignore||[]),u=X_(e);let c=-1;for(;++c<u.length;)ay(t,"text",f);function f(h,y){let g=-1,b;for(;++g<y.length;){const C=y[g],T=b?b.children:void 0;if(a(C,T?T.indexOf(C):void 0,b))return;b=C}if(b)return p(h,y)}function p(h,y){const g=y[y.length-1],b=u[c][0],C=u[c][1];let T=0;const R=g.children.indexOf(h);let _=!1,U=[];b.lastIndex=0;let D=b.exec(h.value);for(;D;){const z=D.index,G={index:D.index,input:D.input,stack:[...y,h]};let L=C(...D,G);if(typeof L=="string"&&(L=L.length>0?{type:"text",value:L}:void 0),L===!1?b.lastIndex=z+1:(T!==z&&U.push({type:"text",value:h.value.slice(T,z)}),Array.isArray(L)?U.push(...L):L&&U.push(L),T=z+D[0].length,_=!0),!b.global)break;D=b.exec(h.value)}return _?(T<h.value.length&&U.push({type:"text",value:h.value.slice(T)}),g.children.splice(R,1,...U)):U=[h],R+U.length}}function X_(t){const e=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!t[0]||Array.isArray(t[0])?t:[t];let o=-1;for(;++o<n.length;){const a=n[o];e.push([Z_(a[0]),j_(a[1])])}return e}function Z_(t){return typeof t=="string"?new RegExp(K_(t),"g"):t}function j_(t){return typeof t=="function"?t:function(){return t}}const $s="phrasing",Js=["autolink","link","image","label"];function eP(){return{transforms:[lP],enter:{literalAutolink:nP,literalAutolinkEmail:Os,literalAutolinkHttp:Os,literalAutolinkWww:Os},exit:{literalAutolink:aP,literalAutolinkEmail:rP,literalAutolinkHttp:oP,literalAutolinkWww:iP}}}function tP(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:$s,notInConstruct:Js},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:$s,notInConstruct:Js},{character:":",before:"[ps]",after:"\\/",inConstruct:$s,notInConstruct:Js}]}}function nP(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Os(t){this.config.enter.autolinkProtocol.call(this,t)}function oP(t){this.config.exit.autolinkProtocol.call(this,t)}function iP(t){this.config.exit.data.call(this,t);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function rP(t){this.config.exit.autolinkEmail.call(this,t)}function aP(t){this.exit(t)}function lP(t){Q_(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,sP],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),uP]],{ignore:["link","linkReference"]})}function sP(t,e,n,o,a){let u="";if(!sy(a)||(/^w/i.test(e)&&(n=e+n,e="",u="http://"),!cP(n)))return!1;const c=dP(n+o);if(!c[0])return!1;const f={type:"link",title:null,url:u+e+c[0],children:[{type:"text",value:e+c[0]}]};return c[1]?[f,{type:"text",value:c[1]}]:f}function uP(t,e,n,o){return!sy(o,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function cP(t){const e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function dP(t){const e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],o=n.indexOf(")");const a=qp(t,"(");let u=qp(t,")");for(;o!==-1&&a>u;)t+=n.slice(0,o+1),n=n.slice(o+1),o=n.indexOf(")"),u++;return[t,n]}function sy(t,e){const n=t.input.charCodeAt(t.index-1);return(t.index===0||ro(n)||Na(n))&&(!e||n!==47)}uy.peek=bP;function fP(){this.buffer()}function hP(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function pP(){this.buffer()}function mP(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function yP(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Yt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function gP(t){this.exit(t)}function vP(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Yt(this.sliceSerialize(t)).toLowerCase(),n.label=e}function wP(t){this.exit(t)}function bP(){return"["}function uy(t,e,n,o){const a=n.createTracker(o);let u=a.move("[^");const c=n.enter("footnoteReference"),f=n.enter("reference");return u+=a.move(n.safe(n.associationId(t),{after:"]",before:u})),f(),c(),u+=a.move("]"),u}function CP(){return{enter:{gfmFootnoteCallString:fP,gfmFootnoteCall:hP,gfmFootnoteDefinitionLabelString:pP,gfmFootnoteDefinition:mP},exit:{gfmFootnoteCallString:yP,gfmFootnoteCall:gP,gfmFootnoteDefinitionLabelString:vP,gfmFootnoteDefinition:wP}}}function kP(t){let e=!1;return t&&t.firstLineBlank&&(e=!0),{handlers:{footnoteDefinition:n,footnoteReference:uy},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(o,a,u,c){const f=u.createTracker(c);let p=f.move("[^");const h=u.enter("footnoteDefinition"),y=u.enter("label");return p+=f.move(u.safe(u.associationId(o),{before:p,after:"]"})),y(),p+=f.move("]:"),o.children&&o.children.length>0&&(f.shift(4),p+=f.move((e?`
`:" ")+u.indentLines(u.containerFlow(o,f.current()),e?cy:TP))),h(),p}}function TP(t,e,n){return e===0?t:cy(t,e,n)}function cy(t,e,n){return(n?"":"    ")+t}const xP=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];dy.peek=_P;function EP(){return{canContainEols:["delete"],enter:{strikethrough:AP},exit:{strikethrough:IP}}}function SP(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:xP}],handlers:{delete:dy}}}function AP(t){this.enter({type:"delete",children:[]},t)}function IP(t){this.exit(t)}function dy(t,e,n,o){const a=n.createTracker(o),u=n.enter("strikethrough");let c=a.move("~~");return c+=n.containerPhrasing(t,{...a.current(),before:c,after:"~"}),c+=a.move("~~"),u(),c}function _P(){return"~"}function PP(t){return t.length}function MP(t,e){const n=e||{},o=(n.align||[]).concat(),a=n.stringLength||PP,u=[],c=[],f=[],p=[];let h=0,y=-1;for(;++y<t.length;){const A=[],R=[];let _=-1;for(t[y].length>h&&(h=t[y].length);++_<t[y].length;){const U=RP(t[y][_]);if(n.alignDelimiters!==!1){const D=a(U);R[_]=D,(p[_]===void 0||D>p[_])&&(p[_]=D)}A.push(U)}c[y]=A,f[y]=R}let g=-1;if(typeof o=="object"&&"length"in o)for(;++g<h;)u[g]=Bp(o[g]);else{const A=Bp(o);for(;++g<h;)u[g]=A}g=-1;const b=[],C=[];for(;++g<h;){const A=u[g];let R="",_="";A===99?(R=":",_=":"):A===108?R=":":A===114&&(_=":");let U=n.alignDelimiters===!1?1:Math.max(1,p[g]-R.length-_.length);const D=R+"-".repeat(U)+_;n.alignDelimiters!==!1&&(U=R.length+U+_.length,U>p[g]&&(p[g]=U),C[g]=U),b[g]=D}c.splice(1,0,b),f.splice(1,0,C),y=-1;const T=[];for(;++y<c.length;){const A=c[y],R=f[y];g=-1;const _=[];for(;++g<h;){const U=A[g]||"";let D="",z="";if(n.alignDelimiters!==!1){const G=p[g]-(R[g]||0),L=u[g];L===114?D=" ".repeat(G):L===99?G%2?(D=" ".repeat(G/2+.5),z=" ".repeat(G/2-.5)):(D=" ".repeat(G/2),z=D):z=" ".repeat(G)}n.delimiterStart!==!1&&!g&&_.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&U==="")&&(n.delimiterStart!==!1||g)&&_.push(" "),n.alignDelimiters!==!1&&_.push(D),_.push(U),n.alignDelimiters!==!1&&_.push(z),n.padding!==!1&&_.push(" "),(n.delimiterEnd!==!1||g!==h-1)&&_.push("|")}T.push(n.delimiterEnd===!1?_.join("").replace(/ +$/,""):_.join(""))}return T.join(`
`)}function RP(t){return t==null?"":String(t)}function Bp(t){const e=typeof t=="string"?t.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}function DP(t,e,n,o){const a=n.enter("blockquote"),u=n.createTracker(o);u.move("> "),u.shift(2);const c=n.indentLines(n.containerFlow(t,u.current()),NP);return a(),c}function NP(t,e,n){return">"+(n?"":" ")+t}function LP(t,e){return Vp(t,e.inConstruct,!0)&&!Vp(t,e.notInConstruct,!1)}function Vp(t,e,n){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return n;let o=-1;for(;++o<e.length;)if(t.includes(e[o]))return!0;return!1}function zp(t,e,n,o){let a=-1;for(;++a<n.unsafe.length;)if(n.unsafe[a].character===`
`&&LP(n.stack,n.unsafe[a]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function FP(t,e){const n=String(t);let o=n.indexOf(e),a=o,u=0,c=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===a?++u>c&&(c=u):u=1,a=o+e.length,o=n.indexOf(e,a);return c}function UP(t,e){return!!(e.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function qP(t){const e=t.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function BP(t,e,n,o){const a=qP(n),u=t.value||"",c=a==="`"?"GraveAccent":"Tilde";if(UP(t,n)){const g=n.enter("codeIndented"),b=n.indentLines(u,VP);return g(),b}const f=n.createTracker(o),p=a.repeat(Math.max(FP(u,a)+1,3)),h=n.enter("codeFenced");let y=f.move(p);if(t.lang){const g=n.enter(`codeFencedLang${c}`);y+=f.move(n.safe(t.lang,{before:y,after:" ",encode:["`"],...f.current()})),g()}if(t.lang&&t.meta){const g=n.enter(`codeFencedMeta${c}`);y+=f.move(" "),y+=f.move(n.safe(t.meta,{before:y,after:`
`,encode:["`"],...f.current()})),g()}return y+=f.move(`
`),u&&(y+=f.move(u+`
`)),y+=f.move(p),h(),y}function VP(t,e,n){return(n?"":"    ")+t}function zu(t){const e=t.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function zP(t,e,n,o){const a=zu(n),u=a==='"'?"Quote":"Apostrophe",c=n.enter("definition");let f=n.enter("label");const p=n.createTracker(o);let h=p.move("[");return h+=p.move(n.safe(n.associationId(t),{before:h,after:"]",...p.current()})),h+=p.move("]: "),f(),!t.url||/[\0- \u007F]/.test(t.url)?(f=n.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(n.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(f=n.enter("destinationRaw"),h+=p.move(n.safe(t.url,{before:h,after:t.title?" ":`
`,...p.current()}))),f(),t.title&&(f=n.enter(`title${u}`),h+=p.move(" "+a),h+=p.move(n.safe(t.title,{before:h,after:a,...p.current()})),h+=p.move(a),f()),c(),h}function HP(t){const e=t.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function Qi(t){return"&#x"+t.toString(16).toUpperCase()+";"}function _a(t,e,n){const o=Jo(t),a=Jo(e);return o===void 0?a===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:o===1?a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}fy.peek=GP;function fy(t,e,n,o){const a=HP(n),u=n.enter("emphasis"),c=n.createTracker(o),f=c.move(a);let p=c.move(n.containerPhrasing(t,{after:a,before:f,...c.current()}));const h=p.charCodeAt(0),y=_a(o.before.charCodeAt(o.before.length-1),h,a);y.inside&&(p=Qi(h)+p.slice(1));const g=p.charCodeAt(p.length-1),b=_a(o.after.charCodeAt(0),g,a);b.inside&&(p=p.slice(0,-1)+Qi(g));const C=c.move(a);return u(),n.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+p+C}function GP(t,e,n){return n.options.emphasis||"*"}function WP(t,e){let n=!1;return Bu(t,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return n=!0,du}),!!((!t.depth||t.depth<3)&&Ru(t)&&(e.options.setext||n))}function $P(t,e,n,o){const a=Math.max(Math.min(6,t.depth||1),1),u=n.createTracker(o);if(WP(t,n)){const y=n.enter("headingSetext"),g=n.enter("phrasing"),b=n.containerPhrasing(t,{...u.current(),before:`
`,after:`
`});return g(),y(),b+`
`+(a===1?"=":"-").repeat(b.length-(Math.max(b.lastIndexOf("\r"),b.lastIndexOf(`
`))+1))}const c="#".repeat(a),f=n.enter("headingAtx"),p=n.enter("phrasing");u.move(c+" ");let h=n.containerPhrasing(t,{before:"# ",after:`
`,...u.current()});return/^[\t ]/.test(h)&&(h=Qi(h.charCodeAt(0))+h.slice(1)),h=h?c+" "+h:c,n.options.closeAtx&&(h+=" "+c),p(),f(),h}hy.peek=JP;function hy(t){return t.value||""}function JP(){return"<"}py.peek=OP;function py(t,e,n,o){const a=zu(n),u=a==='"'?"Quote":"Apostrophe",c=n.enter("image");let f=n.enter("label");const p=n.createTracker(o);let h=p.move("![");return h+=p.move(n.safe(t.alt,{before:h,after:"]",...p.current()})),h+=p.move("]("),f(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(f=n.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(n.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(f=n.enter("destinationRaw"),h+=p.move(n.safe(t.url,{before:h,after:t.title?" ":")",...p.current()}))),f(),t.title&&(f=n.enter(`title${u}`),h+=p.move(" "+a),h+=p.move(n.safe(t.title,{before:h,after:a,...p.current()})),h+=p.move(a),f()),h+=p.move(")"),c(),h}function OP(){return"!"}my.peek=YP;function my(t,e,n,o){const a=t.referenceType,u=n.enter("imageReference");let c=n.enter("label");const f=n.createTracker(o);let p=f.move("![");const h=n.safe(t.alt,{before:p,after:"]",...f.current()});p+=f.move(h+"]["),c();const y=n.stack;n.stack=[],c=n.enter("reference");const g=n.safe(n.associationId(t),{before:p,after:"]",...f.current()});return c(),n.stack=y,u(),a==="full"||!h||h!==g?p+=f.move(g+"]"):a==="shortcut"?p=p.slice(0,-1):p+=f.move("]"),p}function YP(){return"!"}yy.peek=KP;function yy(t,e,n){let o=t.value||"",a="`",u=-1;for(;new RegExp("(^|[^`])"+a+"([^`]|$)").test(o);)a+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++u<n.unsafe.length;){const c=n.unsafe[u],f=n.compilePattern(c);let p;if(c.atBreak)for(;p=f.exec(o);){let h=p.index;o.charCodeAt(h)===10&&o.charCodeAt(h-1)===13&&h--,o=o.slice(0,h)+" "+o.slice(p.index+1)}}return a+o+a}function KP(){return"`"}function gy(t,e){const n=Ru(t);return!!(!e.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(n===t.url||"mailto:"+n===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}vy.peek=QP;function vy(t,e,n,o){const a=zu(n),u=a==='"'?"Quote":"Apostrophe",c=n.createTracker(o);let f,p;if(gy(t,n)){const y=n.stack;n.stack=[],f=n.enter("autolink");let g=c.move("<");return g+=c.move(n.containerPhrasing(t,{before:g,after:">",...c.current()})),g+=c.move(">"),f(),n.stack=y,g}f=n.enter("link"),p=n.enter("label");let h=c.move("[");return h+=c.move(n.containerPhrasing(t,{before:h,after:"](",...c.current()})),h+=c.move("]("),p(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(p=n.enter("destinationLiteral"),h+=c.move("<"),h+=c.move(n.safe(t.url,{before:h,after:">",...c.current()})),h+=c.move(">")):(p=n.enter("destinationRaw"),h+=c.move(n.safe(t.url,{before:h,after:t.title?" ":")",...c.current()}))),p(),t.title&&(p=n.enter(`title${u}`),h+=c.move(" "+a),h+=c.move(n.safe(t.title,{before:h,after:a,...c.current()})),h+=c.move(a),p()),h+=c.move(")"),f(),h}function QP(t,e,n){return gy(t,n)?"<":"["}wy.peek=XP;function wy(t,e,n,o){const a=t.referenceType,u=n.enter("linkReference");let c=n.enter("label");const f=n.createTracker(o);let p=f.move("[");const h=n.containerPhrasing(t,{before:p,after:"]",...f.current()});p+=f.move(h+"]["),c();const y=n.stack;n.stack=[],c=n.enter("reference");const g=n.safe(n.associationId(t),{before:p,after:"]",...f.current()});return c(),n.stack=y,u(),a==="full"||!h||h!==g?p+=f.move(g+"]"):a==="shortcut"?p=p.slice(0,-1):p+=f.move("]"),p}function XP(){return"["}function Hu(t){const e=t.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function ZP(t){const e=Hu(t),n=t.options.bulletOther;if(!n)return e==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+n+"`) to be different");return n}function jP(t){const e=t.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function by(t){const e=t.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function eM(t,e,n,o){const a=n.enter("list"),u=n.bulletCurrent;let c=t.ordered?jP(n):Hu(n);const f=t.ordered?c==="."?")":".":ZP(n);let p=e&&n.bulletLastUsed?c===n.bulletLastUsed:!1;if(!t.ordered){const y=t.children?t.children[0]:void 0;if((c==="*"||c==="-")&&y&&(!y.children||!y.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(p=!0),by(n)===c&&y){let g=-1;for(;++g<t.children.length;){const b=t.children[g];if(b&&b.type==="listItem"&&b.children&&b.children[0]&&b.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(c=f),n.bulletCurrent=c;const h=n.containerFlow(t,o);return n.bulletLastUsed=c,n.bulletCurrent=u,a(),h}function tM(t){const e=t.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function nM(t,e,n,o){const a=tM(n);let u=n.bulletCurrent||Hu(n);e&&e.type==="list"&&e.ordered&&(u=(typeof e.start=="number"&&e.start>-1?e.start:1)+(n.options.incrementListMarker===!1?0:e.children.indexOf(t))+u);let c=u.length+1;(a==="tab"||a==="mixed"&&(e&&e.type==="list"&&e.spread||t.spread))&&(c=Math.ceil(c/4)*4);const f=n.createTracker(o);f.move(u+" ".repeat(c-u.length)),f.shift(c);const p=n.enter("listItem"),h=n.indentLines(n.containerFlow(t,f.current()),y);return p(),h;function y(g,b,C){return b?(C?"":" ".repeat(c))+g:(C?u:u+" ".repeat(c-u.length))+g}}function oM(t,e,n,o){const a=n.enter("paragraph"),u=n.enter("phrasing"),c=n.containerPhrasing(t,o);return u(),a(),c}const iM=Ua(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function rM(t,e,n,o){return(t.children.some(function(c){return iM(c)})?n.containerPhrasing:n.containerFlow).call(n,t,o)}function aM(t){const e=t.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}Cy.peek=lM;function Cy(t,e,n,o){const a=aM(n),u=n.enter("strong"),c=n.createTracker(o),f=c.move(a+a);let p=c.move(n.containerPhrasing(t,{after:a,before:f,...c.current()}));const h=p.charCodeAt(0),y=_a(o.before.charCodeAt(o.before.length-1),h,a);y.inside&&(p=Qi(h)+p.slice(1));const g=p.charCodeAt(p.length-1),b=_a(o.after.charCodeAt(0),g,a);b.inside&&(p=p.slice(0,-1)+Qi(g));const C=c.move(a+a);return u(),n.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+p+C}function lM(t,e,n){return n.options.strong||"*"}function sM(t,e,n,o){return n.safe(t.value,o)}function uM(t){const e=t.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function cM(t,e,n){const o=(by(n)+(n.options.ruleSpaces?" ":"")).repeat(uM(n));return n.options.ruleSpaces?o.slice(0,-1):o}const ky={blockquote:DP,break:zp,code:BP,definition:zP,emphasis:fy,hardBreak:zp,heading:$P,html:hy,image:py,imageReference:my,inlineCode:yy,link:vy,linkReference:wy,list:eM,listItem:nM,paragraph:oM,root:rM,strong:Cy,text:sM,thematicBreak:cM};function dM(){return{enter:{table:fM,tableData:Hp,tableHeader:Hp,tableRow:pM},exit:{codeText:mM,table:hM,tableData:Ys,tableHeader:Ys,tableRow:Ys}}}function fM(t){const e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function hM(t){this.exit(t),this.data.inTable=void 0}function pM(t){this.enter({type:"tableRow",children:[]},t)}function Ys(t){this.exit(t)}function Hp(t){this.enter({type:"tableCell",children:[]},t)}function mM(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,yM));const n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function yM(t,e){return e==="|"?e:t}function gM(t){const e=t||{},n=e.tableCellPadding,o=e.tablePipeAlign,a=e.stringLength,u=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:b,table:c,tableCell:p,tableRow:f}};function c(C,T,A,R){return h(y(C,A,R),C.align)}function f(C,T,A,R){const _=g(C,A,R),U=h([_]);return U.slice(0,U.indexOf(`
`))}function p(C,T,A,R){const _=A.enter("tableCell"),U=A.enter("phrasing"),D=A.containerPhrasing(C,{...R,before:u,after:u});return U(),_(),D}function h(C,T){return MP(C,{align:T,alignDelimiters:o,padding:n,stringLength:a})}function y(C,T,A){const R=C.children;let _=-1;const U=[],D=T.enter("table");for(;++_<R.length;)U[_]=g(R[_],T,A);return D(),U}function g(C,T,A){const R=C.children;let _=-1;const U=[],D=T.enter("tableRow");for(;++_<R.length;)U[_]=p(R[_],C,T,A);return D(),U}function b(C,T,A){let R=ky.inlineCode(C,T,A);return A.stack.includes("tableCell")&&(R=R.replace(/\|/g,"\\$&")),R}}function vM(){return{exit:{taskListCheckValueChecked:Gp,taskListCheckValueUnchecked:Gp,paragraph:bM}}}function wM(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:CM}}}function Gp(t){const e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function bM(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const o=n.children[0];if(o&&o.type==="text"){const a=e.children;let u=-1,c;for(;++u<a.length;){const f=a[u];if(f.type==="paragraph"){c=f;break}}c===n&&(o.value=o.value.slice(1),o.value.length===0?n.children.shift():n.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,n.position.start=Object.assign({},o.position.start)))}}this.exit(t)}function CM(t,e,n,o){const a=t.children[0],u=typeof t.checked=="boolean"&&a&&a.type==="paragraph",c="["+(t.checked?"x":" ")+"] ",f=n.createTracker(o);u&&f.move(c);let p=ky.listItem(t,e,n,{...o,...f.current()});return u&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),p;function h(y){return y+c}}function kM(){return[eP(),CP(),EP(),dM(),vM()]}function TM(t){return{extensions:[tP(),kP(t),SP(),gM(t),wM()]}}const xM={tokenize:PM,partial:!0},Ty={tokenize:MM,partial:!0},xy={tokenize:RM,partial:!0},Ey={tokenize:DM,partial:!0},EM={tokenize:NM,partial:!0},Sy={name:"wwwAutolink",tokenize:IM,previous:Iy},Ay={name:"protocolAutolink",tokenize:_M,previous:_y},yn={name:"emailAutolink",tokenize:AM,previous:Py},on={};function SM(){return{text:on}}let oo=48;for(;oo<123;)on[oo]=yn,oo++,oo===58?oo=65:oo===91&&(oo=97);on[43]=yn;on[45]=yn;on[46]=yn;on[95]=yn;on[72]=[yn,Ay];on[104]=[yn,Ay];on[87]=[yn,Sy];on[119]=[yn,Sy];function AM(t,e,n){const o=this;let a,u;return c;function c(g){return!yu(g)||!Py.call(o,o.previous)||Gu(o.events)?n(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),f(g))}function f(g){return yu(g)?(t.consume(g),f):g===64?(t.consume(g),p):n(g)}function p(g){return g===46?t.check(EM,y,h)(g):g===45||g===95||ft(g)?(u=!0,t.consume(g),p):y(g)}function h(g){return t.consume(g),a=!0,p}function y(g){return u&&a&&yt(o.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(g)):n(g)}}function IM(t,e,n){const o=this;return a;function a(c){return c!==87&&c!==119||!Iy.call(o,o.previous)||Gu(o.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(xM,t.attempt(Ty,t.attempt(xy,u),n),n)(c))}function u(c){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(c)}}function _M(t,e,n){const o=this;let a="",u=!1;return c;function c(g){return(g===72||g===104)&&_y.call(o,o.previous)&&!Gu(o.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),a+=String.fromCodePoint(g),t.consume(g),f):n(g)}function f(g){if(yt(g)&&a.length<5)return a+=String.fromCodePoint(g),t.consume(g),f;if(g===58){const b=a.toLowerCase();if(b==="http"||b==="https")return t.consume(g),p}return n(g)}function p(g){return g===47?(t.consume(g),u?h:(u=!0,p)):n(g)}function h(g){return g===null||Sa(g)||Fe(g)||ro(g)||Na(g)?n(g):t.attempt(Ty,t.attempt(xy,y),n)(g)}function y(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(g)}}function PM(t,e,n){let o=0;return a;function a(c){return(c===87||c===119)&&o<3?(o++,t.consume(c),a):c===46&&o===3?(t.consume(c),u):n(c)}function u(c){return c===null?n(c):e(c)}}function MM(t,e,n){let o,a,u;return c;function c(h){return h===46||h===95?t.check(Ey,p,f)(h):h===null||Fe(h)||ro(h)||h!==45&&Na(h)?p(h):(u=!0,t.consume(h),c)}function f(h){return h===95?o=!0:(a=o,o=void 0),t.consume(h),c}function p(h){return a||o||!u?n(h):e(h)}}function RM(t,e){let n=0,o=0;return a;function a(c){return c===40?(n++,t.consume(c),a):c===41&&o<n?u(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?t.check(Ey,e,u)(c):c===null||Fe(c)||ro(c)?e(c):(t.consume(c),a)}function u(c){return c===41&&o++,t.consume(c),a}}function DM(t,e,n){return o;function o(f){return f===33||f===34||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===63||f===95||f===126?(t.consume(f),o):f===38?(t.consume(f),u):f===93?(t.consume(f),a):f===60||f===null||Fe(f)||ro(f)?e(f):n(f)}function a(f){return f===null||f===40||f===91||Fe(f)||ro(f)?e(f):o(f)}function u(f){return yt(f)?c(f):n(f)}function c(f){return f===59?(t.consume(f),o):yt(f)?(t.consume(f),c):n(f)}}function NM(t,e,n){return o;function o(u){return t.consume(u),a}function a(u){return ft(u)?n(u):e(u)}}function Iy(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Fe(t)}function _y(t){return!yt(t)}function Py(t){return!(t===47||yu(t))}function yu(t){return t===43||t===45||t===46||t===95||ft(t)}function Gu(t){let e=t.length,n=!1;for(;e--;){const o=t[e][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){n=!0;break}if(o._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const LM={tokenize:GM,partial:!0};function FM(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:VM,continuation:{tokenize:zM},exit:HM}},text:{91:{name:"gfmFootnoteCall",tokenize:BM},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:UM,resolveTo:qM}}}}function UM(t,e,n){const o=this;let a=o.events.length;const u=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c;for(;a--;){const p=o.events[a][1];if(p.type==="labelImage"){c=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return f;function f(p){if(!c||!c._balanced)return n(p);const h=Yt(o.sliceSerialize({start:c.end,end:o.now()}));return h.codePointAt(0)!==94||!u.includes(h.slice(1))?n(p):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(p),t.exit("gfmFootnoteCallLabelMarker"),e(p))}}function qM(t,e){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;const u={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},t[t.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},u.start),end:Object.assign({},u.end)},f=[t[n+1],t[n+2],["enter",o,e],t[n+3],t[n+4],["enter",a,e],["exit",a,e],["enter",u,e],["enter",c,e],["exit",c,e],["exit",u,e],t[t.length-2],t[t.length-1],["exit",o,e]];return t.splice(n,t.length-n+1,...f),t}function BM(t,e,n){const o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let u=0,c;return f;function f(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),p}function p(g){return g!==94?n(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(g){if(u>999||g===93&&!c||g===null||g===91||Fe(g))return n(g);if(g===93){t.exit("chunkString");const b=t.exit("gfmFootnoteCallString");return a.includes(Yt(o.sliceSerialize(b)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(g)}return Fe(g)||(c=!0),u++,t.consume(g),g===92?y:h}function y(g){return g===91||g===92||g===93?(t.consume(g),u++,h):h(g)}}function VM(t,e,n){const o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let u,c=0,f;return p;function p(T){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(T),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(T){return T===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(T),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",y):n(T)}function y(T){if(c>999||T===93&&!f||T===null||T===91||Fe(T))return n(T);if(T===93){t.exit("chunkString");const A=t.exit("gfmFootnoteDefinitionLabelString");return u=Yt(o.sliceSerialize(A)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(T),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),b}return Fe(T)||(f=!0),c++,t.consume(T),T===92?g:y}function g(T){return T===91||T===92||T===93?(t.consume(T),c++,y):y(T)}function b(T){return T===58?(t.enter("definitionMarker"),t.consume(T),t.exit("definitionMarker"),a.includes(u)||a.push(u),Ie(t,C,"gfmFootnoteDefinitionWhitespace")):n(T)}function C(T){return e(T)}}function zM(t,e,n){return t.check(ji,e,t.attempt(LM,e,n))}function HM(t){t.exit("gfmFootnoteDefinition")}function GM(t,e,n){const o=this;return Ie(t,a,"gfmFootnoteDefinitionIndent",5);function a(u){const c=o.events[o.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?e(u):n(u)}}function WM(t){let n=(t||{}).singleTilde;const o={name:"strikethrough",tokenize:u,resolveAll:a};return n==null&&(n=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function a(c,f){let p=-1;for(;++p<c.length;)if(c[p][0]==="enter"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._close){let h=p;for(;h--;)if(c[h][0]==="exit"&&c[h][1].type==="strikethroughSequenceTemporary"&&c[h][1]._open&&c[p][1].end.offset-c[p][1].start.offset===c[h][1].end.offset-c[h][1].start.offset){c[p][1].type="strikethroughSequence",c[h][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},c[h][1].start),end:Object.assign({},c[p][1].end)},g={type:"strikethroughText",start:Object.assign({},c[h][1].end),end:Object.assign({},c[p][1].start)},b=[["enter",y,f],["enter",c[h][1],f],["exit",c[h][1],f],["enter",g,f]],C=f.parser.constructs.insideSpan.null;C&&Mt(b,b.length,0,La(C,c.slice(h+1,p),f)),Mt(b,b.length,0,[["exit",g,f],["enter",c[p][1],f],["exit",c[p][1],f],["exit",y,f]]),Mt(c,h-1,p-h+3,b),p=h+b.length-2;break}}for(p=-1;++p<c.length;)c[p][1].type==="strikethroughSequenceTemporary"&&(c[p][1].type="data");return c}function u(c,f,p){const h=this.previous,y=this.events;let g=0;return b;function b(T){return h===126&&y[y.length-1][1].type!=="characterEscape"?p(T):(c.enter("strikethroughSequenceTemporary"),C(T))}function C(T){const A=Jo(h);if(T===126)return g>1?p(T):(c.consume(T),g++,C);if(g<2&&!n)return p(T);const R=c.exit("strikethroughSequenceTemporary"),_=Jo(T);return R._open=!_||_===2&&!!A,R._close=!A||A===2&&!!_,f(T)}}}class $M{constructor(){this.map=[]}add(e,n,o){JM(this,e,n,o)}consume(e){if(this.map.sort(function(u,c){return u[0]-c[0]}),this.map.length===0)return;let n=this.map.length;const o=[];for(;n>0;)n-=1,o.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];o.push(e.slice()),e.length=0;let a=o.pop();for(;a;){for(const u of a)e.push(u);a=o.pop()}this.map.length=0}}function JM(t,e,n,o){let a=0;if(!(n===0&&o.length===0)){for(;a<t.map.length;){if(t.map[a][0]===e){t.map[a][1]+=n,t.map[a][2].push(...o);return}a+=1}t.map.push([e,n,o])}}function OM(t,e){let n=!1;const o=[];for(;e<t.length;){const a=t[e];if(n){if(a[0]==="enter")a[1].type==="tableContent"&&o.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){const u=o.length-1;o[u]=o[u]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return o}function YM(){return{flow:{null:{name:"table",tokenize:KM,resolveAll:QM}}}}function KM(t,e,n){const o=this;let a=0,u=0,c;return f;function f(N){let J=o.events.length-1;for(;J>-1;){const oe=o.events[J][1].type;if(oe==="lineEnding"||oe==="linePrefix")J--;else break}const ee=J>-1?o.events[J][1].type:null,ne=ee==="tableHead"||ee==="tableRow"?L:p;return ne===L&&o.parser.lazy[o.now().line]?n(N):ne(N)}function p(N){return t.enter("tableHead"),t.enter("tableRow"),h(N)}function h(N){return N===124||(c=!0,u+=1),y(N)}function y(N){return N===null?n(N):me(N)?u>1?(u=0,o.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(N),t.exit("lineEnding"),C):n(N):Ae(N)?Ie(t,y,"whitespace")(N):(u+=1,c&&(c=!1,a+=1),N===124?(t.enter("tableCellDivider"),t.consume(N),t.exit("tableCellDivider"),c=!0,y):(t.enter("data"),g(N)))}function g(N){return N===null||N===124||Fe(N)?(t.exit("data"),y(N)):(t.consume(N),N===92?b:g)}function b(N){return N===92||N===124?(t.consume(N),g):g(N)}function C(N){return o.interrupt=!1,o.parser.lazy[o.now().line]?n(N):(t.enter("tableDelimiterRow"),c=!1,Ae(N)?Ie(t,T,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):T(N))}function T(N){return N===45||N===58?R(N):N===124?(c=!0,t.enter("tableCellDivider"),t.consume(N),t.exit("tableCellDivider"),A):G(N)}function A(N){return Ae(N)?Ie(t,R,"whitespace")(N):R(N)}function R(N){return N===58?(u+=1,c=!0,t.enter("tableDelimiterMarker"),t.consume(N),t.exit("tableDelimiterMarker"),_):N===45?(u+=1,_(N)):N===null||me(N)?z(N):G(N)}function _(N){return N===45?(t.enter("tableDelimiterFiller"),U(N)):G(N)}function U(N){return N===45?(t.consume(N),U):N===58?(c=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(N),t.exit("tableDelimiterMarker"),D):(t.exit("tableDelimiterFiller"),D(N))}function D(N){return Ae(N)?Ie(t,z,"whitespace")(N):z(N)}function z(N){return N===124?T(N):N===null||me(N)?!c||a!==u?G(N):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(N)):G(N)}function G(N){return n(N)}function L(N){return t.enter("tableRow"),Q(N)}function Q(N){return N===124?(t.enter("tableCellDivider"),t.consume(N),t.exit("tableCellDivider"),Q):N===null||me(N)?(t.exit("tableRow"),e(N)):Ae(N)?Ie(t,Q,"whitespace")(N):(t.enter("data"),se(N))}function se(N){return N===null||N===124||Fe(N)?(t.exit("data"),Q(N)):(t.consume(N),N===92?Z:se)}function Z(N){return N===92||N===124?(t.consume(N),se):se(N)}}function QM(t,e){let n=-1,o=!0,a=0,u=[0,0,0,0],c=[0,0,0,0],f=!1,p=0,h,y,g;const b=new $M;for(;++n<t.length;){const C=t[n],T=C[1];C[0]==="enter"?T.type==="tableHead"?(f=!1,p!==0&&(Wp(b,e,p,h,y),y=void 0,p=0),h={type:"table",start:Object.assign({},T.start),end:Object.assign({},T.end)},b.add(n,0,[["enter",h,e]])):T.type==="tableRow"||T.type==="tableDelimiterRow"?(o=!0,g=void 0,u=[0,0,0,0],c=[0,n+1,0,0],f&&(f=!1,y={type:"tableBody",start:Object.assign({},T.start),end:Object.assign({},T.end)},b.add(n,0,[["enter",y,e]])),a=T.type==="tableDelimiterRow"?2:y?3:1):a&&(T.type==="data"||T.type==="tableDelimiterMarker"||T.type==="tableDelimiterFiller")?(o=!1,c[2]===0&&(u[1]!==0&&(c[0]=c[1],g=wa(b,e,u,a,void 0,g),u=[0,0,0,0]),c[2]=n)):T.type==="tableCellDivider"&&(o?o=!1:(u[1]!==0&&(c[0]=c[1],g=wa(b,e,u,a,void 0,g)),u=c,c=[u[1],n,0,0])):T.type==="tableHead"?(f=!0,p=n):T.type==="tableRow"||T.type==="tableDelimiterRow"?(p=n,u[1]!==0?(c[0]=c[1],g=wa(b,e,u,a,n,g)):c[1]!==0&&(g=wa(b,e,c,a,n,g)),a=0):a&&(T.type==="data"||T.type==="tableDelimiterMarker"||T.type==="tableDelimiterFiller")&&(c[3]=n)}for(p!==0&&Wp(b,e,p,h,y),b.consume(e.events),n=-1;++n<e.events.length;){const C=e.events[n];C[0]==="enter"&&C[1].type==="table"&&(C[1]._align=OM(e.events,n))}return t}function wa(t,e,n,o,a,u){const c=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",f="tableContent";n[0]!==0&&(u.end=Object.assign({},Vo(e.events,n[0])),t.add(n[0],0,[["exit",u,e]]));const p=Vo(e.events,n[1]);if(u={type:c,start:Object.assign({},p),end:Object.assign({},p)},t.add(n[1],0,[["enter",u,e]]),n[2]!==0){const h=Vo(e.events,n[2]),y=Vo(e.events,n[3]),g={type:f,start:Object.assign({},h),end:Object.assign({},y)};if(t.add(n[2],0,[["enter",g,e]]),o!==2){const b=e.events[n[2]],C=e.events[n[3]];if(b[1].end=Object.assign({},C[1].end),b[1].type="chunkText",b[1].contentType="text",n[3]>n[2]+1){const T=n[2]+1,A=n[3]-n[2]-1;t.add(T,A,[])}}t.add(n[3]+1,0,[["exit",g,e]])}return a!==void 0&&(u.end=Object.assign({},Vo(e.events,a)),t.add(a,0,[["exit",u,e]]),u=void 0),u}function Wp(t,e,n,o,a){const u=[],c=Vo(e.events,n);a&&(a.end=Object.assign({},c),u.push(["exit",a,e])),o.end=Object.assign({},c),u.push(["exit",o,e]),t.add(n+1,0,u)}function Vo(t,e){const n=t[e],o=n[0]==="enter"?"start":"end";return n[1][o]}const XM={name:"tasklistCheck",tokenize:jM};function ZM(){return{text:{91:XM}}}function jM(t,e,n){const o=this;return a;function a(p){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?n(p):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),u)}function u(p){return Fe(p)?(t.enter("taskListCheckValueUnchecked"),t.consume(p),t.exit("taskListCheckValueUnchecked"),c):p===88||p===120?(t.enter("taskListCheckValueChecked"),t.consume(p),t.exit("taskListCheckValueChecked"),c):n(p)}function c(p){return p===93?(t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),f):n(p)}function f(p){return me(p)?e(p):Ae(p)?t.check({tokenize:eR},e,n)(p):n(p)}}function eR(t,e,n){return Ie(t,o,"whitespace");function o(a){return a===null?n(a):e(a)}}function tR(t){return zm([SM(),FM(),WM(t),YM(),ZM()])}const nR={};function gu(t){const e=this,n=t||nR,o=e.data(),a=o.micromarkExtensions||(o.micromarkExtensions=[]),u=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),c=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);a.push(tR(n)),u.push(kM()),c.push(TM(n))}const My=()=>Y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",fill:"currentColor",children:Y.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.43.8-1.02.8-1.78s-.37-1.35-.8-1.78c-.43-.43-1.02-.8-1.78-.8s-1.35.37-1.78.8c-.43.43-.8 1.02-.8 1.78s.37 1.35.8 1.78c.43.43 1.02.8 1.78.8s1.35-.37 1.78-.8zm9.86 0c.43-.43.8-1.02.8-1.78s-.37-1.35-.8-1.78c-.43-.43-1.02-.8-1.78-.8s-1.35.37-1.78.8c-.43.43-.8 1.02-.8 1.78s.37 1.35.8 1.78c.43.43 1.02.8 1.78.8s1.35-.37 1.78-.8zM12 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"})}),oR=()=>Y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",fill:"currentColor",children:Y.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})}),iR=({message:t})=>{const e=t.sender===zn.BOT,n={table:({node:a,...u})=>Y.jsx("div",{className:"overflow-x-auto my-2",children:Y.jsx("table",{className:"w-full text-sm text-left text-gray-300",...u})}),thead:({node:a,...u})=>Y.jsx("thead",{className:"text-xs text-gray-200 uppercase bg-gray-600",...u}),tbody:({node:a,...u})=>Y.jsx("tbody",{...u}),tr:({node:a,...u})=>Y.jsx("tr",{className:"border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700",...u}),th:({node:a,...u})=>Y.jsx("th",{scope:"col",className:"px-4 py-2 border border-gray-500",...u}),td:({node:a,...u})=>Y.jsx("td",{className:"px-4 py-2 border border-gray-500",...u})},o=a=>a.replace(/^(Article )(\d+)(:[^\r\n]+)/gim,`
# $1**$2**$3
`).replace(/^(Pay group \d+)/gim,`
## $1
`).replace(/\*\*(SR CPS \d+ annual rates of pay \(in dollars\))\*\*/gm,"## $1").replace(/^(I+)\.\s(.*)/gm,"### $1. $2").replace(/^([A-Z]{3}-\d{1,2})\s(.+)/gm,"* **$1** $2").replace(/^(\d{1,2}\.\d{2})/gm,"**$1**").replace(/^\s+([ivxcl]+)\.\s/gim,"  * $&").replace(/^([a-z])\.\s/gim,"* $&");if(e){const a=o(t.text),u={h1:({node:c,...f})=>Y.jsx("h1",{className:"text-3xl font-bold mb-4 text-black",...f}),h2:({node:c,...f})=>Y.jsx("h2",{className:"text-2xl font-bold mt-6 mb-3 text-black",...f}),h3:({node:c,...f})=>Y.jsx("h3",{className:"text-xl font-semibold mt-4 mb-2 text-black",...f}),p:({node:c,...f})=>{const p=(c?.children||[]).filter(g=>!(g.type==="text"&&g.value.trim()==="")),y=p.length===1&&p[0].type==="element"&&p[0].tagName==="strong"?"mb-1 text-black text-base leading-relaxed":"mb-3 text-black text-base leading-relaxed";return Y.jsx("p",{className:y,...f})},strong:({node:c,...f})=>Y.jsx("strong",{className:"font-bold text-black",...f}),ul:({node:c,...f})=>Y.jsx("ul",{className:"list-none pl-8",...f}),li:({node:c,...f})=>Y.jsx("li",{className:"mb-2 text-black text-base leading-relaxed",...f}),table:({node:c,...f})=>Y.jsx("div",{className:"overflow-x-auto my-2",children:Y.jsx("table",{className:"w-full text-sm text-left text-gray-700",...f})}),thead:({node:c,...f})=>Y.jsx("thead",{className:"text-xs text-gray-800 uppercase bg-gray-200",...f}),tbody:({node:c,...f})=>Y.jsx("tbody",{...f}),tr:({node:c,...f})=>Y.jsx("tr",{className:"border-b border-gray-300 odd:bg-white even:bg-gray-100",...f}),th:({node:c,...f})=>Y.jsx("th",{scope:"col",className:"px-4 py-2 border border-gray-400",...f}),td:({node:c,...f})=>Y.jsx("td",{className:"px-4 py-2 border border-gray-400",...f})};return Y.jsxs("div",{className:"flex items-start gap-4 p-4",children:[Y.jsx("div",{className:"flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white bg-gray-700",children:Y.jsx(My,{})}),Y.jsx("div",{className:"w-full max-w-xl rounded-md bg-white p-6 shadow-sm",children:Y.jsx(mu,{remarkPlugins:[gu],components:u,children:a})})]})}return Y.jsxs("div",{className:"flex items-start gap-4 p-4 flex-row-reverse",children:[Y.jsx("div",{className:"flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white bg-blue-600",children:"U"}),Y.jsx("div",{className:"max-w-xl rounded-lg px-4 py-2 prose prose-invert prose-p:my-1 prose-headings:my-2 bg-blue-600 text-white",children:Y.jsx(mu,{remarkPlugins:[gu],components:n,children:t.text})})]})},rR=({onSendMessage:t,isLoading:e})=>{const[n,o]=ct.useState(""),a=u=>{u.preventDefault(),n.trim()&&!e&&(t(n.trim()),o(""))};return Y.jsx("div",{className:"bg-gray-800 p-4 border-t border-gray-700",children:Y.jsxs("form",{onSubmit:a,className:"flex items-center space-x-4",children:[Y.jsx("input",{type:"text",value:n,onChange:u=>o(u.target.value),placeholder:"Type your message...",disabled:e,className:"flex-grow bg-gray-700 text-white rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"}),Y.jsx("button",{type:"submit",disabled:e,className:"bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed",children:Y.jsx(oR,{})})]})})},aR=()=>Y.jsxs("div",{className:"flex items-center space-x-4 p-4",children:[Y.jsx("div",{className:"flex-shrink-0",children:Y.jsx("div",{className:"h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white",children:Y.jsx(My,{})})}),Y.jsxs("div",{className:"flex items-center space-x-1",children:[Y.jsx("div",{className:"w-2 h-2 bg-blue-400 rounded-full animate-pulse"}),Y.jsx("div",{className:"w-2 h-2 bg-blue-400 rounded-full animate-pulse",style:{animationDelay:"0.2s"}}),Y.jsx("div",{className:"w-2 h-2 bg-blue-400 rounded-full animate-pulse",style:{animationDelay:"0.4s"}})]})]}),lR=t=>t.replace(/^(Article )(\d+)(:[^\r\n]+)/gim,`
# $1**$2**$3
`).replace(/^(Pay group \d+)/gim,`
## $1
`).replace(/\*\*(SR CPS \d+ annual rates of pay \(in dollars\))\*\*/gm,"## $1").replace(/^(I+)\.\s(.*)/gm,"### $1. $2").replace(/^([A-Z]{3}-\d{1,2})\s(.+)/gm,"* **$1** $2").replace(/^(\d{1,2}\.\d{2})/gm,"**$1**").replace(/^\s+([ivxcl]+)\.\s/gim,"  * $&").replace(/^([a-z])\.\s/gim,"* $&"),sR={h1:({node:t,...e})=>Y.jsx("h1",{className:"text-3xl font-bold mb-4 text-black",...e}),h2:({node:t,...e})=>Y.jsx("h2",{className:"text-2xl font-bold mt-6 mb-3 text-black",...e}),h3:({node:t,...e})=>Y.jsx("h3",{className:"text-xl font-semibold mt-4 mb-2 text-black",...e}),p:({node:t,...e})=>{const n=(t?.children||[]).filter(u=>!(u.type==="text"&&u.value.trim()==="")),a=n.length===1&&n[0].type==="element"&&n[0].tagName==="strong"?"mb-1 text-black text-base leading-relaxed":"mb-3 text-black text-base leading-relaxed";return Y.jsx("p",{className:a,...e})},strong:({node:t,...e})=>Y.jsx("strong",{className:"font-bold text-black",...e}),ul:({node:t,...e})=>Y.jsx("ul",{className:"list-none pl-8",...e}),li:({node:t,...e})=>Y.jsx("li",{className:"mb-2 text-black text-base leading-relaxed",...e}),table:({node:t,...e})=>Y.jsx("div",{className:"overflow-x-auto my-2",children:Y.jsx("table",{className:"w-full text-sm text-left text-gray-700",...e})}),thead:({node:t,...e})=>Y.jsx("thead",{className:"text-xs text-gray-800 uppercase bg-gray-200",...e}),tbody:({node:t,...e})=>Y.jsx("tbody",{...e}),tr:({node:t,...e})=>Y.jsx("tr",{className:"border-b border-gray-300 odd:bg-white even:bg-gray-100",...e}),th:({node:t,...e})=>Y.jsx("th",{scope:"col",className:"px-4 py-2 border border-gray-400",...e}),td:({node:t,...e})=>Y.jsx("td",{className:"px-4 py-2 border border-gray-400",...e})},uR=({isOpen:t,onClose:e,title:n,content:o})=>{if(ct.useEffect(()=>{const u=c=>{c.key==="Escape"&&e()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[e]),!t)return null;const a=lR(o);return Y.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4",role:"dialog","aria-modal":"true","aria-labelledby":"agreement-modal-title",onClick:e,children:Y.jsxs("div",{className:"bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col",onClick:u=>u.stopPropagation(),children:[Y.jsxs("header",{className:"flex justify-between items-center p-4 border-b border-gray-300 sticky top-0 bg-white z-10",children:[Y.jsx("h2",{id:"agreement-modal-title",className:"text-xl font-bold text-gray-800",children:n}),Y.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-800 text-3xl leading-none font-bold p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500","aria-label":"Close",children:"×"})]}),Y.jsx("main",{className:"overflow-y-auto p-6",children:Y.jsx(mu,{remarkPlugins:[gu],components:sR,children:a})}),Y.jsx("footer",{className:"p-4 border-t border-gray-300 sticky bottom-0 bg-white",children:Y.jsx("button",{onClick:e,className:"w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Close"})})]})})},$p=`
*
Treasury Board of Canada Secrétariat du Conseil du Trésor
Secretariat
du Canada
Ship Repair (East) (SR (E))
Agreement Between the Treasury Board and the Federal Government
Dockyard Trades and Labour Council (East)
Group: Ship Repair (East)
(All Employees)
Expiry date: 2022-12-31
Canada
This agreement covers the following group:
Code
Group
611
Ship Repair (East) (SR (E))
Treasury Board of Canada Secretariat
Employment Conditions and Labour Relations
219 Laurier Ave West
Ottawa ON K1A 0R5
Her Majesty the Queen in right of Canada,
represented by the President of the Treasury Board, 2019
Catalogue No.: BT42-611/2022E-PDF
ISSN: 978-0-660-33123-2
This document is available on the Government of Canada website a:t
www.tbs-sct.gc.ca/agreements-conventions/index-eng.aspx
Federal Government Dockyard Trades and Labour Council (East)
Building D-126, Fleet Maintenance Facility
Cape Scott
P.O. Box 99000 Stn Forces
Halifax NS B3K 5X5
Table of contents
Council affiliates.
Article 1: purpose of agreement
Article 2: interpretation and definitions
Article 3: conflict between future legislation and the collective
agreement
Article 4: application
Article 5: managerial responsibilities.
Article 6: recognition
Article 7: Union representation
Article 8: Council security
Article 9: leave, general
Article 10: vacation leave with pay
Article 11: designated paid holidays
Article 12: sick leave with pay
**Article 13: other types of leave with or without pay
Article 14: severance pay
Article 15: hours of work and overtime
Article 16: wash-up time
Article 17: travelling
Article 18: call-back pay
**Article 19: grievance procedure
Article 20: safety and health
Article 21: technological change
Article 22: agreement re-opener
**Article 23: allowances
Article 24: shift premium
Article 25: pay
Article 26: loss of personal effects
Article 27: tools
Article 28: illegal strikes
Article 29: notice to amend or renew the collective agreement
Article 30: joint consultation
Article 31: employee performance review and employee files
Article 32: statement of duties
Article 33: National Joint Council agreements
**Article 34: registration fees
Article 35: sexual harassment
**Article 36: no discrimination
Article 37: education leave without pay, career development leave
with pay and examination leave with pay
Article 38: discipline
Article 39: contracting out
**Article 40: duration and renewal
**Appendix A
SR, Ship Repair (East) Group hourly rates of pay (all employees
located on the east coast).
**Appendix “B”
Memorandum of Agreement on Supporting Employee Wellness 
Appendix "C”.
Archived Provisions for the Elimination of Severance Pay for
Voluntary Separations (Resignation and Retirement).
**Appendix “D”
Memorandum of Understanding Between the Treasury Board of
Canada and the Federal Government Dockyard Trades and Labour
Council (East) With Respect to Gender-Inclusive Language
**Appendix "E”
Memorandum of Understanding Between the Treasury Board of
Canada and the Federal Government Dockyard Trades and Labour
Council (East) With Respect to Implementation of the Collective
Agreement.
**Appendix “F”
Memorandum of Understanding Between the Treasury Board of
Canada and the Federal Government Dockyard Trades and Labour
Council (East) With Respect to Workplace Harassment
Letter of Understanding (17-1)

Council affiliates
International Brotherhood of Painters, and Allied Trades Local No. 1949
International Association of Heat and Frost Insulators and Asbestos Workers Local No. 116-B
International Association of Machinists and Aerospace Workers Local No. 2797
Ship Repair Machinists and Mechanics Union (Atlantic)
International Brotherhood of Boilermakers, Iron Ship Builders, Blacksmiths, Forgers and
Helpers Local No. 580
International Brotherhood of Electrical Workers Local No. 1131
International Brotherhood of Electrical Workers Local No. 1133
Sheet Metal Workers' International Association Local No. 290
United Association of Journeymen and Apprentices of the Plumbing and Pipefitting Industry of
the United States and Canada Local No. 282
United Brotherhood of Carpenters and Joiners of America Local No. 1405
Article 1: purpose of agreement
1.01 The purpose of this agreement is to maintain harmonious relationships between the
Employer, the Council and the employees and to set forth herein the terms and conditions of
employment upon which agreement has been reached through collective bargaining.
Article 2: interpretation and definitions
2.01 For the purpose of this agreement:
a. “annual rate of pay"
means an employee's weekly rate of pay multiplied by fifty-two point one seventy-six (52.176);
b. "bargaining unit"
means all employees, other than chargehands, of the Employer in the Ship Repair Group of the
Operational Category located on the east coast as described in the certificate issued by the former
Public Service Labour Relations Board on August 20, 1976, as amended on May 12, 2000, and
December 21, 2005;
c. a “common-law partner"
relationship is said to exist when, for a continuous period of at least one year, an employee has
lived with a person, publicly represented that person to be his/her partner, and lives and intends
to continue to live with that person as if that person were his/her partner;
d. "continuous employment”
has the same meaning as specified in the Treasury Board Directive on Terms and Conditions of
Employment, except that for the purpose of calculating leave and severance pay entitlements, it
will not include former service in the Royal Canadian Mounted Police or the Canadian
Armed Forces;
e. "Council"
means the Federal Government Dockyard Trades and Labour Council East;
f. "daily rate of pay"
means an employee's hourly rate of pay multiplied by eight (8);
g. "day"
means a twenty-four (24) hour period:
i.
commencing at 2345 hours and ending at 2345 hours the following day for employees
subject to paragraph 15.02(a),
ii.
commencing at 0000 hours and ending at 2400 hours for employees subject to
paragraph 15.02(b),
and
iii.
commencing at 0015 hours and ending at 0015 hours the following day for employees
subject to paragraph 15.02(c);
h. "double time"
means two (2) times the straight-time rate;
i. "employee"
means an employee as defined in the Federal Public Sector Labour Relations Act and who is a
member of the Ship Repair bargaining unit;
j. "Employer”
except as specifically provided in clause 14.01, means Her Majesty in right of Canada as
represented by the Treasury Board, and includes any person authorized to exercise the authority
of the Treasury Board;
k. "harbour limits"
means an East-West line of 063 degrees (true) from York Redoubt through Maughers Beach on
McNabbs Island. The area north of this line constitutes the Halifax harbour area and includes
Bedford Basin;
1. "holiday pay"
means eight (8) hours' pay;
m. "lay-off"
means an employee whose employment has been terminated because of lack of work or because
of the discontinuance of a function;
n. "leave"
means authorized absence from duty by an employee during the employee's regular or normal
hours of work;
0. "overtime"
means time worked by an employee outside of the employee's regularly scheduled hours;
p. "pay"
means basic hourly rates of pay as specified in Appendix “A” and the differentials specified in
Appendix "A" where applicable, and does not include shift premium;
q. "sea trials"
means trials conducted outside the harbour limits;
r. "straight-time rate”
means the hourly rate of pay;
S. "time and one half"
means one and one half (1 1/2) times the straight-time rate;
t. "triple time”
means three (3) times the straight-time rate;
u. “weekly rate of pay”
means an employee's hourly rate of pay multiplied by forty (40).
2.02 Except as otherwise provided in this agreement, expressions used in this agreement
a. if defined in the Federal Public Sector Labour Relations Act, have the same meaning
as given to them in that act;
b. if defined in the Interpretation Act, but not defined in the Federal Public Sector
Labour Relations Act, have the same meaning as given to them in the
Interpretation Act.
Article 3: conflict between future legislation and the collective
agreement
3.01 If any law now in force or enacted during the term of this agreement renders null and void
any provision of this agreement, the remaining provisions shall remain in effect for the term of
the agreement. The parties shall thereupon seek to negotiate substitute provisions which are in
conformity with the applicable law.
3.02 In the event that there is a conflict between the contents of this agreement and any
regulation except as provided under section 113 of the Federal Public Sector Labour Relations
Act, this agreement shall take precedence over the said regulation.
Article 4: application
4.01 The provisions of this agreement apply to the Council, employees and the Employer.
4.02 Both the English and French texts of this agreement shall be official.
4.03 Unless otherwise expressly stipulated, the provisions of this agreement apply equally to
male and female employees and words importing the masculine gender include the
feminine gender.
Article 5: managerial responsibilities
5.01 The Council recognizes and acknowledges that the Employer has and shall retain the
exclusive right and responsibility to manage its operation in all respects and it is expressly
understood that all such rights and responsibilities not specifically covered or modified by this
agreement shall remain the exclusive rights and responsibilities of the Employer.
Such rights will not be exercised in a manner inconsistent with the expressed provisions of this
agreement.
5.02 This article will not restrict the right of an employee to submit a grievance in accordance
with the Federal Public Sector Labour Relations Act.
Article 6: recognition
6.01 The Employer recognizes the Federal Government Dockyard Trades and Labour Council
(East) as the exclusive bargaining agent for all employees, other than chargehands, in the Ship
Repair Occupational Group located on the east coast described in the certificate issued to the
Council by the former Public Service Labour Relations Board on the twentieth (20th) day of
August 1976 as amended on the twelfth (12th) day of May 2000 and on the twenty-first
(21st) day of December 2005.
Article 7: Union representation
7.01 Access to Employer's premises
The Employer agrees that accredited Union representatives of the Council and its constituent
Unions may have access to the Employer's premises upon notice to and the consent of the
Employer and such consent shall not be unreasonably withheld.
7.02 Appointment of stewards
The Employer acknowledges the right of the Council to appoint employees as stewards.
7.03 Recognition of Council representatives
The Employer recognizes Council officers and stewards as official Union representatives and
will not discriminate against them because of their legitimate activities as such. The Employer
will not define the disciplinary action to be taken against a Council officer or steward without
first giving the Council or the Union, as the case may be, an opportunity of making
representations on his/her behalf.
The Council shall supply a list of the names of Council officers and stewards to the Employer
and shall advise the Employer of any changes thereafter.
7.04 Leave for Council officers and/or stewards
a. Time off with pay for Council officers and/or stewards to investigate and process
complaints of employees may be granted upon request to their supervisor. Such
permission shall not be unreasonably withheld.
b. Council officers and/or stewards shall inform their supervisor before leaving their
work to attend pre-arranged meetings with local management.
c. Where practicable such representatives shall report back to their supervisor before
resuming their normal duties.
7.05 Provision of bulletin board space
The Employer shall provide bulletin board space at appropriate locations in the shops for the
posting of Union material by the Council and its affiliates. The posting of this material shall be
subject to management approval.
Article 8: Council security
8.01 The Employer shall as a condition of employment, deduct monthly an amount equivalent to
regular membership dues, in a fixed amount, established by each of the Council affiliates
according to each of their constitutional provisions, exclusive of any separate deduction for
initiation fees, pension deductions, special assessments or arrears which may exist on the date
this agreement comes into effect, from the pay of all employees of the bargaining unit.
8.02 The Council shall inform the Employer in writing of the authorized monthly deduction to be
checked off for each employee defined in clause 8.01.
8.03 For the purpose of applying clause 8.01, deductions from pay for each employee in respect
of each month will start with the first full calendar month of employment to the extent that
earnings are available.
8.04 As soon as practicable after the signing of this agreement, the Employer will provide the
Council with an up-to-date list of all employees in the Ship Repair bargaining unit and will
provide appropriate quarterly lists of all employees who have been assigned to or have left the
bargaining unit during the quarter.
8.05 An employee who satisfies the Council as to the bona fides of his or her claim and declares
in an affidavit that he or she is a member of a religious organization whose doctrine prevents him
or her as a matter of conscience from making financial contributions to an employee organization
and that he or she will make contributions to a charitable organization registered pursuant to the
Income Tax Act, equal to dues, shall not be subject to this article, provided that the affidavit
submitted by the employee is countersigned by an official representative of the religious
organization involved. The Council will inform the Employer accordingly.
8.06 From the date of signing and for the duration of this agreement, no employee organization,
as defined in section 2 of the Federal Public Sector Labour Relations Act, other than the
Council, shall be permitted to have membership dues deducted by the Employer from the pay of
employees in the bargaining unit.
8.07 The amounts deducted in accordance with clause 8.01 shall be remitted by cheque to the
person designated by the Council within fifteen (15) working days of the date on which the
deduction is made. The cheque shall be made payable to each Council affiliate and shall be
accompanied by particulars identifying, by Council affiliate, each employee alphabetically and
the deductions made on the employee's behalf.
8.08 The Council agrees to indemnify and save the Employer harmless against any claim or
liability arising out of the application of this article except for any claim or liability arising out of
an error committed by the Employer limited to the amount actually involved in the error.
Article 9: leave, general
9.01 The amount of leave with pay credited to an employee by the Employer at the time this
agreement becomes effective, or at the time when the employee becomes subject to this
agreement, shall be retained by the employee.
9.02 When the employment of an employee who has been granted more vacation or sick leave
with pay than the employee has earned is terminated by death, the employee is considered to
have earned the amount of leave with pay granted to him or her.
9.03 An employee shall not earn leave credits under this collective agreement in any month for
which leave has already been credited to the employee under the terms of any other collective
agreement to which the Employer is a party or under other rules or regulations of the Employer.
9.04 An employee shall not be granted two (2) different types of leave with pay with respect to
the same time.
9.05 Except as otherwise specified in this agreement, where leave without pay for a period in
excess of three (3) months is granted to an employee, for reasons other than illness, the total
period of leave granted shall be deducted from “continuous employment" for the purpose of
calculating severance pay and “service” for the purpose of calculating vacation leave. Time spent
on such leave which is for a period of more than three (3) months shall not be counted for pay
increment purposes.
9.06 Leave credits will be earned on a basis of a day being equal to eight (8) hours.
9.07 When leave is granted, it will be granted on an hourly basis and the hours debited for each
day of leave shall be the same as the hours the employee would normally have been scheduled to
work on that day.
9.08
a. When an employee becomes subject to this agreement, the employee's earned daily
leave credits shall be converted into hours on the basis of one (1) day being equal to
eight (8) hours.
b. When an employee ceases to be subject to this agreement, the employee's earned
hourly leave credits shall be converted into days on the basis of eight (8) hours being
equal to one (1) day.
Article 10: vacation leave with pay
10.01 Vacation year
The vacation year shall be from April 1 to March 31 of the following year, inclusively.
10.02 Accumulation of vacation leave credits
An employee shall earn, during the vacation year, vacation leave credits at the following rates for
each calendar month during which the employee receives at least eighty (80) hours pay:
a. six decimal six seven (6.67) hours per month until the month (for an annual total of ten
(10) days) in which the anniversary of the employee's first (1st) year of service occurs;
or
b. ten (10) hours per month (for an annual total of fifteen (15) days) commencing with
the month in which the employee's first (1st) anniversary of service occurs;
or
c. thirteen decimal three four (13.34) hours per month (for an annual total of twenty
(20) days) commencing with the month in which the employee's eight
(8th) anniversary of service occurs;
or
d. fourteen decimal six seven (14.67) hours per month (for an annual total of twenty-two
(22) days) commencing with the month in which the employee's fifteenth
(15th) anniversary of service occurs;
or
e. fifteen decimal three four (15.34) hours per month (for an annual total of twenty-three
(23) days) commencing with the month in which the employee's seventeenth
(17th) anniversary of service occurs;
or
f. sixteen decimal six seven (16.67) hours per month (for an annual total of twenty-five
(25) days) commencing with the month in which the employee's eighteenth
(18th) anniversary of service occurs;
or
g. eighteen (18) hours per month (for an annual total of twenty-seven (27) days)
commencing with the month in which the employee's twenty-fifth (25th) anniversary
of service occurs;
or
h. twenty (20) hours per month (for an annual total of thirty (30) days) commencing with
the month in which the employee's twenty-eighth (28th) anniversary of service occurs.
i. For the purpose of this clause only, all service within the public service, whether
continuous or discontinuous, shall count toward vacation leave.
j. For the purpose of clause 10.02 only, effective April 1, 2012, on a go-forward basis,
any former service in the Canadian Forces for a continuous period of six (6) months or
more, either as a member of the Regular Force or of the Reserve Force while on
class B or C service, shall also be included in the calculation of vacation leave credits.
For greater certainty, severance termination benefits taken under clauses 14.10 to
14.13, or similar provisions in other collective agreements, do not reduce the
calculation of service for employees who have not left the public service.
10.03 Entitlement to vacation leave with pay
An employee is entitled to vacation leave with pay to the extent of the employee's earned credits
but an employee who has completed six (6) months of continuous employment may receive an
advance of credits equivalent to the anticipated credits for the current vacation year.
Scheduling of vacation leave with pay
10.04 Subject to clauses 10.05, 10.06 and 10.07, employees shall, subject to work requirements,
normally take all their vacation leave during the vacation year in which it is earned.
10.05 The Employer shall, subject to work requirements, schedule vacation leave at a time
convenient to the employee.
10.06 In order to ensure that vacation leave is used in accordance with clauses 10.04 and 10.05,
any employee with more than one hundred and twenty (120) hours on January 1 of that fiscal
year, shall meet and discuss with his or her supervisor when they are going to use the portion of
their leave over the one hundred and twenty (120) hours by March 31 of the same fiscal year. If
they cannot reach an agreement, the Employer will schedule such leave.
10.07 Carry-over provisions
a. An employee may carry over a maximum of one hundred and twenty (120) hours as
stated in clause 10.06.
b. By November 1 of each year, requests to carry over vacation leave in excess of one
hundred and twenty (120) total accumulated hours, for special circumstances, must be
submitted in writing by the employee stating the reasons and approximate proposed
vacation dates to the supervisor. Such requests will be considered by the leave tribunal.
For purposes of vacation leave in excess of one hundred and twenty (120) hours,
examples of special circumstances are:
i.
planned vacations requiring extensive periods;
ii.
periods to build a house;
and
iii.
extensive periods for special events or circumstances requiring the employee's
attendance or participation.
c.
i.
An employee who has accumulated vacation leave is required to use, in addition
to his/her annual vacation leave one hundred and twenty (120) hours of his/her
accumulated vacation leave until all previously accumulated vacation leave is
reduced to one hundred and twenty (120) hours.
ii.
Carry-over of such vacation leave will be allowed under the following
circumstances:
A. an employee, subject to work requirements, was not permitted to take
vacation leave;
and
B. the total amount of leave is large and cannot be used within one (1) year.
d. During any vacation year, upon application by the employee and at the discretion of
the Employer, earned but unused vacation leave credits in excess of one hundred and
twenty (120) hours may be paid at the employee's rate of pay as calculated from the
classification prescribed in the employee's certificate of appointment of the
employee's substantive position on March 31, of the previous vacation year.
e.
When the Employer cancels or alters a period of vacation leave which it has previously
approved in writing, the Employer shall reimburse the employee for the non-returnable
portion of vacation contracts and reservations made by the employee in respect of that
period, subject to the presentation of such documentation as the Employer may require.
The employee must make every reasonable attempt to mitigate such losses.
Leave when employment terminates
10.08 When an employee dies or otherwise ceases to be employed, the employee or the
employee's estate shall be paid an amount equal to the product obtained by multiplying the
number of days earned but unused vacation with pay to the employee's credit by the daily rate of
pay (that is rate in effect at time of termination) to which the employee is entitled by virtue of the
certificate of appointment in effect at the time of the termination of employment.
10.09 In the event of termination of employment for reasons other than death, the Employer shall
recover from any monies owed the employee an amount equivalent to unearned vacation leave
taken by the employee, calculated on the basis of the daily rate of pay (that is rate in effect at
time of termination) to which the employee is entitled by virtue of the certificate of appointment
in effect at the time of the termination of employment.
Advance payments
10.10 In view of special circumstances concerning this group, the Employer agrees to issue
advance payments of estimated net salary for the period of vacation requested, provided four
(4) weeks' notice is received from the employee prior to the last pay day before proceeding
on leave.
10.11 Providing the employee has been authorized to proceed on vacation leave for the period
concerned, the Employer agrees to issue advance payments of estimated net salary for a period of
two (2) or more complete weeks.
10.12 Any overpayments in respect of such pay advances shall be an immediate first charge
against any subsequent pay entitlements and shall be recovered in full prior to any further
payment of salary.
One-time leave entitlement
10.13 Employees shall be credited a one-time entitlement of twenty-four (24) hours of vacation
leave with pay on the first (1st) day of the month following the anniversary of the employee's
first (1st) year of service.
10.14 Where, in respect of any period of vacation leave, an employee is granted sick leave on
production of a medical certificate which includes the name, address and phone number of the
attending physician, and provided that the employee satisfies the Employer of this condition if
deemed necessary by the Employer, the period of vacation leave so displaced shall either be
added to the vacation period if requested by the employee and approved by the Employer or
reinstated for the use at a later date. Employees are to advise the Employer as soon as possible of
the illness.
Article 11: designated paid holidays
11.01 Subject to clause 11.02, the following days shall be designated paid holidays:
a. New Year's Day,
b. Good Friday,
c. Easter Monday,
d. the day fixed by proclamation of the Governor in Council for celebration of the
Sovereign's birthday,
e. Canada Day,
f. Labour Day,
g. the day fixed by proclamation of the Governor in Council as a general day of
Thanksgiving,
h. Remembrance Day,
i.
Christmas Day,
j.
Boxing Day,
k. one additional day in each year that, in the opinion of the Employer, is recognized to
be a provincial or civic holiday in the area in which the employee is employed or in
any area where, in the opinion of the Employer, no such day is recognized as a
provincial or civic holiday, the first Monday in August,
and
1.
one additional day when proclaimed by an act of Parliament as a national holiday.
For greater certainty, full-time employees who do not work on a designated paid holiday are
entitled to eight (8) hours pay at the straight-time rate for the designated paid holiday.
11.02 An employee absent without pay on both his or her full working day immediately
preceding and his or her full working day immediately following a designated holiday is not
entitled to pay for the holiday.
11.03 Holiday falling on a day of rest
When a day designated as a holiday under clause 11.01 coincides with an employee's day of rest,
the holiday shall be moved to the employee's next scheduled working day or to the second
scheduled workday if the employee would otherwise lose credit for the holiday.
11.04 When a day designated as a holiday for an employee is moved to another day under the
provisions of clause 11.03:
a. work performed by an employee on the day from which the holiday was moved shall
be considered as work performed on a day of rest,
and
b. work performed by an employee on the day to which the holiday was moved, shall be
considered as work performed on a holiday.
11.05 Compensation for work on a holiday
Where an employee works on a holiday the employee shall be paid at the following rates:
a. holiday pay plus double (2) time for the first eight (8) hours of work,
b. triple (3) time for hours worked in excess of eight (8).
The compensation that the employee would have been granted as holiday pay had the employee
not worked on a designated paid holiday is eight (8) hours remunerated at straight-time.
11.06 Holiday coinciding with a day of paid leave
Where a day that is a designated holiday for an employee falls within a period of leave with pay,
the holiday shall not count as a day of leave.
Article 12: sick leave with pay
12.01 Credits
An employee shall earn sick leave credits at the rate of ten (10) hours for each calendar month
for which the employee is entitled to pay for at least eighty (80) hours.
12.02 Granting of sick leave with pay
An employee is eligible for sick leave with pay when the employee, is unable to perform his/her
duties because of illness or injury provided that:
a. the employee satisfies the Employer of this condition in such manner and at such time
as may be determined by the Employer,
and
b. the employee has the necessary sick leave credits.
12.03 Unless otherwise informed by the Employer, a statement signed by the employee stating
that because of illness or injury the employee was unable to perform his or her duties shall, when
delivered to the Employer, be considered as meeting the requirements of paragraph 12.02(a), if
the period of leave requested does not exceed forty (40) hours.
12.04 An employee is not eligible for sick leave with pay during any period in which the
employee is on leave without pay or under suspension.
12.05 Where an employee has insufficient or no credits to cover the granting of sick leave with
pay under the provisions of clause 12.02 (sick leave with pay) may, at the discretion of the
Employer, be granted:
a. for a period of up to two hundred (200) hours if the employee is awaiting a decision on
an application for injury-on-duty leave,
or
b. for a period of up to one hundred and twenty (120) hours if the employee has not
submitted an application for injury-on-duty leave,
subject to the deduction of such advanced leave from any sick leave credits subsequently earned
and, in the event of termination of employment for reasons other than death, the recovery of the
advance from any monies owed the employee.
12.06 When an employee is granted sick leave with pay and injury-on-duty leave is subsequently
approved for the same period, it shall be considered, for the purpose of the record of sick leave
credits, that the employee was not granted sick leave with pay.
12.07
a.
Sick leave credits earned but unused by an employee during a previous period of
employment in the public service shall be restored to an employee whose employment
was terminated by reason of lay-off and who is reappointed in the core public
administration within two (2) years from the date of lay-off.
b. Sick leave credits earned but unused by an employee during a previous period of
employment in the public service shall be restored to an employee whose employment
was terminated due to the end of a specified period of employment, and who is
reappointed in the core public administration within one (1) year from the end of the
specified period of employment.
**Article 13: other types of leave with or without pay
13.01
**
a.
In respect of any request for leave under this article, the employee may be required by
the Employer to provide satisfactory validation of the circumstances necessitating such
requests.
b. A statement, written on or accompanying the leave form, signed by the employee
describing the reason for the leave shall normally satisfy the requirements of
paragraph 13.01(a), and may be used by the Employer in considering such leave
requests.
13.02 Bereavement leave with pay
For the purpose of this article, immediate family is defined as father, mother (or alternatively
stepfather, stepmother, or foster parent), brother, sister, stepbrother, stepsister, spouse (including
common-law spouse resident with the employee), child (including child of common-law spouse),
stepchild, ward of the employee or foster child, grandchild, grandparent, father-in-law, mother-
in-law, daughter-in-law, son-in law, relative permanently residing in the employee's household
or with whom the employee permanently resides, and a person who stands in the place of a
relative for the employee whether or not there is any degree of consanguinity between such a
person and the employee.
a. Where a member of the employee's immediate family dies, an employee shall be
entitled to bereavement leave with pay for a period of not more than five (5) days
which must include the day of the funeral, and may, in addition, be granted up to three
(3) days' bereavement leave with pay for the purpose of travel related to the death.
b. At the request of the employee, such bereavement leave with pay may be taken in a
single period or may be taken in two (2) periods.
c.
When requested to be taken in two (2) periods:
i. The first period must include the day of the memorial commemorating the
deceased or must begin within two (2) days following the death,
and
ii.
The second period must be taken no later than twelve (12) months from the date
of death for the purpose of attending a ceremony.
iii.
The employee may be granted no more than three (3) days' leave with pay, in
total, for the purposes of travel for these two (2) periods.
d. An employee is entitled to one (1) day's bereavement leave with pay for the purpose
related to the death of his or her brother-in-law, sister-in-law or grandparent of spouse.
e. It is recognized by the parties that the circumstances which call for leave in respect of
bereavement are based on individual circumstances. On request, the deputy head of a
department may, after considering the particular circumstances involved, grant
bereavement leave with pay in a manner other than specified in paragraphs 13.02(a)
and 13.02(d) provided that the combined period of bereavement leave with pay does
not exceed the amounts specified in paragraph 13.02(a).
f. If, during a period of paid leave, an employee is bereaved in circumstances under
which he or she would have been eligible for bereavement leave with pay under
clauses 13.02(a) and (d), the employee shall be granted bereavement leave with pay
and his or her paid leave credits shall be restored to the extent of any concurrent
bereavement leave with pay granted.
**
g. An employee shall be entitled to bereavement leave for a person who stands in the
place of a relative for the employee whether or not there is a degree of consanguinity
between such person and the employee only once during the employee's total period of
employment in the public service.
13.03 Court leave with pay
The Employer shall grant leave with pay to an employee, other than an employee on leave
without pay, or under suspension for the period of time his or her presence is required during his
or her scheduled hours of work:
a. to be available for jury selection;
b. to serve on a jury;
c. by subpoena or summons to attend as a witness in any proceedings, except one to
which an employee is a party, held:
i.
in or under the authority of a court of justice,
ii.
before a court, judge, justice magistrate or coroner,
iii.
before the Senate or House of Commons of Canada or a committee of the Senate
or House of Commons otherwise than in the performance of the duties of the
employee's position,
iv.
before a legislative Council, legislative assembly or house of assembly, or any
committee thereof that is authorized by law to compel the attendance of
witnesses before it,
or
v.
before an arbitrator or umpire or a person or body of persons authorized by law
to make an inquiry and to compel the attendance of witnesses before it;
or
d. to appear on his/her own behalf or, when operational requirements permit, as a witness,
before an adjudicator appointed by the Federal Public Sector Labour Relations and
Employment Board.
13.04 Injury-on-duty leave with pay
An employee shall be granted injury-on-duty leave with pay for such reasonable period as may
be determined by the Employer where a claim has been made pursuant to the Government
Employees' Compensation Act, and a workers' compensation authority has notified the Employer
that it has certified that the employee is unable to work because of:
a. personal injury accidentally received in the performance of the employee's duties and
not caused by the employee's wilful misconduct,
or
b. an industrial illness arising out of and in the course of the employee's employment;
if the employee agrees to remit to the Receiver General for Canada any amount received by
him/her in compensation for loss of pay resulting from or in respect of such injury or illness,
providing, however, that such amount does not stem from a personal disability policy for which
the employee or the employee's agent has paid the premium.
13.05 Maternity leave without pay
a. An employee who becomes pregnant shall, upon request, be granted maternity leave
without pay for a period beginning before, on or after the termination date of
pregnancy and ending not later than eighteen (18) weeks after the termination date of
pregnancy.
b. Notwithstanding paragraph (a):
i. where the employee has not yet proceeded on maternity leave without pay and
her newborn child is hospitalized,
or
ii.
where the employee has proceeded on maternity leave without pay and then
returns to work for all or part of the period during which her newborn child is
hospitalized,
the period of maternity leave without pay defined in paragraph (a) may be extended
beyond the date falling eighteen (18) weeks after the date of termination of pregnancy
by a period equal to that portion of the period of the child's hospitalization during
which the employee was not on maternity leave, to a maximum of eighteen
(18) weeks.
c. The extension described in paragraph (b) shall end not later than fifty-two (52) weeks
after the termination date of pregnancy.
d. The Employer may require an employee to submit a medical certificate certifying
pregnancy.
e. An employee who has not commenced maternity leave without pay may elect to:
i.
use earned vacation and compensatory leave credits up to and beyond the date
that her pregnancy terminates;
ii.
use her sick leave credits up to and beyond the date that her pregnancy
terminates, subject to the provisions set out in Article 12 (sick leave with pay).
For purposes of this subparagraph, the terms “illness” or “injury" used in
Article 12 (sick leave with pay) shall include medical disability related to
pregnancy.
f. An employee shall inform the Employer in writing of her plans for taking leave with
and without pay to cover her absence from work due to the pregnancy at least four
(4) weeks in advance of the initial date of continuous leave of absence during which
termination of pregnancy is expected to occur unless there is a valid reason why the
notice cannot be given.
g. Leave granted under this clause shall be counted for the calculation of “continuous
employment" for the purpose of calculating severance pay and “service” for the
purpose of calculating vacation leave. Time spent on such leave shall be counted for
pay increment purposes.
13.06 Maternity allowance
a. An employee who has been granted maternity leave without pay shall be paid a
maternity allowance in accordance with the terms of the Supplemental Unemployment
Benefit (SUB) Plan described in paragraphs (c) to (i), provided that she:
i.
has completed six (6) months of continuous employment before the
commencement of her maternity leave without pay,
ii.
provides the Employer with proof that she has applied for and is in receipt of
maternity benefits under the Employment Insurance or the Quebec Parental
Insurance Plan in respect of insurable employment with the Employer,
and
iii.
has signed an agreement with the Employer stating that:
**
A. she will return to work within the federal public administration, as
specified in Schedule I, Schedule IV or Schedule V of the Financial
Administration Act, on the expiry date of her maternity leave without pay
unless the return-to-work date is modified by the approval of another form
of leave;
B. following her return to work, as described in section (A), she will work for
a period equal to the period she was in receipt of maternity allowance;
**
C. should she fail to return to work in accordance with section (A), or should
she return to work but fail to work for the total period specified in
section (B), for reasons other than death, lay-off, early termination due to
lack of work or discontinuance of a function of a specified period of
employment that would have been sufficient to meet the obligations
specified in section (B), or having become disabled as defined in the
Public Service Superannuation Act, she will be indebted to the Employer
for an amount determined as follows:
(allowance received)
X
(remaining period to be worked
following her return to work)
[total period to be worked as
specified in (B)]
however, an employee whose specified period of employment expired and
who is rehired within the federal public administration as described in
section (A), within a period of ninety (90) days or less is not indebted for
the amount if her new period of employment is sufficient to meet the
obligations specified in section (B).
b. For the purpose of sections (a)(iii)(B) and (C), periods of leave with pay shall count as
time worked. Periods of leave without pay during the employee's return to work will
not be counted as time worked but shall interrupt the period referred to in
section (a)(iii)(B), without activating the recovery provisions described in
section (a)(iii)(C).
c. Maternity allowance payments made in accordance with the SUB Plan will consist of
the following:
i.
where an employee is subject to a waiting period before receiving Employment
Insurance maternity benefits, ninety-three per cent (93%) of her weekly rate of
pay for each week of the waiting period, less any other monies earned during
this period,
and
ii.
for each week that the employee receives a maternity benefit under the
Employment Insurance or the Quebec Parental Insurance Plan, she is eligible to
receive the difference between ninety-three per cent (93%) of her weekly rate of
pay and the maternity benefit, less any other monies earned during this period
which may result in a decrease in her maternity benefit to which she would have
been eligible if no extra monies had been earned during this period.
iii.
Where an employee has received the full fifteen (15) weeks of maternity benefit
under Employment Insurance and thereafter remains on maternity leave without
pay, she is eligible to receive a further maternity allowance for a period of one
(1) week, ninety-three per cent (93%) of her weekly rate of pay, less any other
monies earned during this period.
d. At the employee's request, the payment referred to in subparagraph 13.06(c)(i) will be
estimated and advanced to the employee. Adjustments will be made once the employee
provides proof of receipt of Employment Insurance or Quebec Parental Insurance Plan
maternity benefits.
e. The maternity allowance to which an employee is entitled is limited to that provided in
paragraph (c) and an employee will not be reimbursed for any amount that she may be
required to repay pursuant to the Employment Insurance Act or the Act Respecting
Parental Insurance in Quebec.
f. The weekly rate of pay referred to in paragraph (c) shall be:
i.
for a full-time employee, the employee's weekly rate of pay on the day
immediately preceding the commencement of maternity leave without pay,
ii.
for an employee who has been employed on a part-time or on a combined full-
time and part-time basis during the six (6) month period preceding the
commencement of maternity leave, the rate obtained by multiplying the weekly
rate of pay in subparagraph (i) by the fraction obtained by dividing the
employee's straight-time earnings by the straight-time earnings the employee
would have earned working full-time during such period.
g. The weekly rate of pay referred to in paragraph (f) shall be the rate to which the
employee is entitled for her substantive level to which she is appointed.
h. Notwithstanding paragraph (g), and subject to subparagraph (f)(ii), if on the day
immediately preceding the commencement of maternity leave without pay an
employee has been on an acting assignment for at least four (4) months, the weekly
rate shall be the rate she was being paid on that day.
i. Where an employee becomes eligible for a pay increment or pay revision that would
increase the maternity allowance, the allowance shall be adjusted accordingly.
j. Maternity allowance payments made under the SUB Plan will neither reduce nor
increase an employee's deferred remuneration or severance pay.
13.07 Special maternity allowance for totally disabled employees
a.
An employee who:
i.
fails to satisfy the eligibility requirement specified in subparagraph 13.06(a)(ii)
solely because a concurrent entitlement to benefits under the Disability
Insurance (DI) Plan, the Long-Term Disability (LTD) Insurance portion of the
Public Service Management Insurance Plan (PSMIP) or the Government
Employees Compensation Act prevents her from receiving Employment
Insurance or Quebec Parental Insurance Plan maternity benefits;
and
ii.
has satisfied all of the other eligibility criteria specified in paragraph 13.06(a),
other than those specified in sections (A) and (B) of subparagraph 13.06(a)(iii);
shall be paid, in respect of each week of maternity allowance not received for the
reason described in subparagraph 13.07(a)(i), the difference between ninety-three
per cent (93%) of her weekly rate of pay, and the gross amount of her weekly disability
benefit under the DI Plan, the LTD Plan or via the Government Employees
Compensation Act.
b. An employee shall be paid an allowance under this clause and under clause 13.06 for a
combined period of no more than the number of weeks during which she would have
been eligible for maternity benefits under the Employment Insurance or the Quebec
Parental Insurance Plan had she not been disqualified from Employment Insurance or
Quebec Parental Insurance Plan maternity benefits for the reasons described in
subparagraph 13.07(a)(i).
13.08 Parental leave without pay
**
a.
Where an employee has or will have the actual care and custody of a newborn child
(including the newborn child of a common-law partner), the employee shall, upon
request, be granted parental leave without pay for either:
i.
a single period of up to thirty-seven (37) consecutive weeks in the fifty-two
(52) week period (standard option),
or
ii.
a single period of up to sixty-three (63) consecutive weeks in the seventy-eight
(78) week period (extended option),
beginning on the day on which the child is born or the day on which the child comes
into the employee's care.
**
b. Where an employee commences legal proceedings under the laws of a province to
adopt a child or obtains an order under the laws of a province for the adoption of a
child, the employee shall, upon request, be granted parental leave without pay
for either:
i.
a single period of up to thirty-seven (37) consecutive weeks in the fifty-two
(52) week period (standard option),
or
ii.
a single period of up to sixty-three (63) consecutive weeks in the seventy-eight
(78) week period (extended option)
beginning on the day on which the child comes into the employee's care.
c. Notwithstanding paragraphs (a) and (b) above, at the request of an employee and at the
discretion of the Employer, the leave referred to in the paragraphs (a) and (b) above
may be taken in two (2) periods.
d. Notwithstanding paragraphs (a) and (b):
i.
where the employee's child is hospitalized within the period defined in the above
paragraphs, and the employee has not yet proceeded on parental leave
without pay,
or
ii.
where the employee has proceeded on parental leave without pay and then
returns to work for all or part of the period during which his or her child is
hospitalized,
the period of parental leave without pay specified in the original leave request may be
extended by a period equal to that portion of the period of the child's hospitalization
during which the employee was not on parental leave. However, the extension shall
end not later than one hundred and four (104) weeks after the day on which the child
comes into the employee's care.
e. An employee who intends to request parental leave without pay shall notify the
Employer at least four (4) weeks in advance of the commencement date of such leave.
f. The Employer may:
i.
defer the commencement of parental leave without pay at the request of the
employee;
ii.
grant the employee parental leave without pay with less than four
(4) weeks' notice;
iii.
require an employee to submit a birth certificate or proof of adoption of
the child.
g. Leave granted under this clause shall count for the calculation of “continuous
employment" for the purpose of calculating severance pay and “service” for the
purpose of calculating vacation leave. Time spent on such leave shall count for pay
increment purposes.
**
13.09 Parental allowance
Under the Employment Insurance (EI) benefits plan, parental allowance is payable under two
options, either:
•
Option 1: standard parental benefits, 13.09, paragraphs (c) to (k),
or
•
Option 2: extended parental benefits, 13.09, paragraphs (1) to (t).
Once an employee elects the standard or extended parental benefits and the weekly benefit top-
up allowance is set, the decision is irrevocable and shall not be changed should the employee
return to work at an earlier date than that originally scheduled.
Under the Quebec Parental Insurance Plan (QPIP), parental allowance is payable only under
Option 1: standard parental benefits.
Parental allowance administration
a.
An employee who has been granted parental leave without pay, shall be paid a parental
allowance in accordance with the terms of the Supplemental Unemployment Benefit
(SUB) Plan described in paragraphs (c) to (i), or (l) to (r), providing he or she:
i.
has completed six (6) months of continuous employment before the
commencement of parental leave without pay,
ii.
provides the Employer with proof that he or she has applied for and is in receipt
of parental, paternity or adoption benefits under the Employment Insurance or
the Quebec Parental Insurance Plan in respect of insurable employment with the
Employer,
and
iii.
has signed an agreement with the Employer stating that:
A. the employee will return to work within the federal public administration,
as specified in Schedule I, Schedule IV or Schedule V of the Financial
Administration Act on the expiry date of his/her parental leave without
pay, unless the return-to-work date is modified by the approval of another
form of leave;
B. following his or her return to work, as described in section (A), the
employee will work for a period equal to the period the employee was in
receipt of the standard parental allowance, in addition to the period of time
referred to in section 13.06(a)(iii)(B), if applicable. Where the employee
has elected the extended parental allowance, following his or her return to
work, as described in section (A), the employee will work for a period
equal to sixty percent (60%) of the period the employee was in receipt of
the extended parental allowance in addition to the period of time referred
to in section 13.06(a)(iii)(B), if applicable;
C. should he or she fail to return to work in accordance with section (A) or
should he or she return to work but fail to work the total period specified
in section (B), for reasons other than death, lay-off, early termination due
to lack of work or discontinuance of a function of a specified period of
employment that would have been sufficient to meet the obligations
specified in section (B), or having become disabled as defined in the
Public Service Superannuation Act, he or she will be indebted to the
Employer for an amount determined as follows:
(remaining period to be worked, as specified
in (B), following his or her return to work)
(allowance received)
X
[total period to be worked as specified in (B)]
however, an employee whose specified period of employment expired and
who is rehired within the federal public administration as described in
section (A), within a period of ninety (90) days or less is not indebted for
the amount if his or her new period of employment is sufficient to meet
the obligations specified in section (B).
b. For the purpose of sections (a)(iii)(B) and (C), periods of leave with pay shall count as
time worked. Periods of leave without pay during the employee's return to work will
not be counted as time worked but shall interrupt the period referred to in
section (a)(iii)(B), without activating the recovery provisions described in
section (a)(iii)(C).
**
(Option 1): standard parental allowance
c. Parental allowance payments made in accordance with the SUB Plan will consist of the
following:
i.
where an employee on parental leave without pay as described in
subparagraphs 13.08(a)(i) and (b)(i) has elected to receive standard Employment
Insurance parental benefits and is subject to a waiting period before receiving
Employment Insurance parental benefits, ninety-three per cent (93%) of his/her
weekly rate of pay, for the waiting period, less any other monies earned during
this period;
ii.
for each week the employee receives parental, adoption or paternity benefits
under the Employment Insurance or the Quebec Parental Insurance Plan, he or
she is eligible to receive the difference between ninety-three per cent (93%) of
his or her weekly rate of pay and the parental, adoption or paternity benefits, less
any other monies earned during this period which may result in a decrease in
his/her parental, adoption or paternity benefits to which he or she would have
been eligible if no extra monies had been earned during this period;
iii.
where an employee has received the full eighteen (18) weeks of maternity
benefit and the full thirty-two (32) weeks of parental benefit or has divided the
full thirty-two (32) weeks of parental benefits with another employee in receipt
of the full five (5) weeks paternity under the Quebec Parental Insurance Plan for
the same child and either employee thereafter remains on parental leave without
pay, that employee is eligible to receive a further parental allowance for a period
of two (2) weeks, ninety-three per cent (93%) of their weekly rate of pay for
each week, less any other monies earned during this period.
iv.
where an employee has divided the full thirty-seven (37) weeks of adoption
benefits with another employee under the Quebec Parental Insurance Plan for the
same child and either employee thereafter remains on parental leave without pay,
that employee is eligible to receive a further parental allowance for a period of
up to two (2) weeks, ninety-three percent (93%) of their weekly rate of pay for
each week, less any other monies earned during this period;
v.
where an employee has received the full thirty-five (35) weeks of parental
benefit under Employment Insurance Plan and thereafter remains on parental
leave without pay, he/she is eligible to receive a further parental allowance for a
period of one (1) week, ninety-three per cent (93%) of his or her weekly rate of
pay less any other monies earned during this period, unless said employee has
already received the one (1) week of allowance contained in 13.06(c)(iii) for the
same child;
vi.
where an employee has divided the full forty (40) weeks of parental benefits
with another employee under the Employment Insurance Plan for the same child
and either employee thereafter remains on parental leave without pay, that
employee is eligible to receive a further parental allowance for a period of one
(1) week, ninety-three percent (93%) of their weekly rate of pay for each week,
less any other monies earned during this period, unless said employee has
already received the one (1) week of allowance contained in
subparagraphs 13.06(c)(iii) and 13.09(c)(v) for the same child.
d.
At the employee's request, the payment referred to in subparagraph 13.09(c)(i) will be
estimated and advanced to the employee. Adjustments will be made once the employee
provides proof of receipt of Employment Insurance.
e.
The parental allowance to which an employee is entitled is limited to that provided in
paragraph (c) and an employee will not be reimbursed for any amount that he or she is
required to repay pursuant to the Employment Insurance Act or the Act Respecting
Parental Insurance in Quebec.
f.
The weekly rate of pay referred to in paragraph (c) shall be:
i.
For a full-time employee, the employee's weekly rate of pay on the day
immediately preceding the commencement of maternity or parental leave
without pay;
ii.
for an employee who has been employed on a part-time or on a combined full-
time and part-time basis during the six (6) month period preceding the
commencement of maternity or parental leave without pay, the rate obtained by
multiplying the weekly rate of pay in subparagraph (i) by the fraction obtained
by dividing the employee's straight-time earnings by the straight-time earnings
the employee would have earned working full-time during such period.
g.
The weekly rate of pay referred to in paragraph (f) shall be the rate to which the
employee is entitled for the substantive level to which she or he is appointed.
h. Notwithstanding paragraph (g), and subject to subparagraph (f)(ii), if on the day
immediately preceding the commencement of parental leave without pay an employee
is performing an acting assignment for at least four (4) months, the weekly rate shall be
the rate, the employee was being paid on that day.
i.
Where an employee becomes eligible for a pay increment or pay revision that would
increase the parental allowance, the allowance shall be adjusted accordingly.
j.
Parental allowance payments made under the SUB Plan will neither reduce nor
increase an employee's deferred remuneration or severance pay.
k. The maximum combined, shared maternity and standard parental allowances payable
shall not exceed fifty-seven (57) weeks for each combined maternity and parental leave
without pay.
**
(Option 2): extended parental allowance
1. Parental allowance payments made in accordance with the SUB Plan will consist of the
following:
i. where an employee on parental leave without pay as described in
subparagraphs 13.08(a)(ii) and (b)(ii), has chosen to receive extended
Employment Insurance parental benefits and is subject to a waiting period
before receiving Employment Insurance parental benefits, fifty-five decimal
eight percent (55.8%) of his or her weekly rate of pay for the waiting period,
less any other monies earned during this period;
ii.
for each week the employee receives parental or adoption benefits under the
Employment Insurance, he or she is eligible to receive the difference between
fifty-five decimal eight percent (55.8%) of his or her weekly rate and the
parental, adoption benefit, less any other monies earned during this period
which may result in a decrease in his or her parental, adoption benefit to which
he or she would have been eligible if no extra monies had been earned during
this period;
iii.
where an employee has received the full sixty-one (61) weeks of parental
benefits under the Employment Insurance and thereafter remains on parental
leave without pay, he or she is eligible to receive a further parental allowance
for a period of one (1) week, fifty-five decimal eight percent (55.8%) of his or
her weekly rate of pay for each week, less any other monies earned during this
period, unless said employee has already received the one (1) week of
allowance contained in subparagraph 13.06(c)(iii) for the same child.
iv.
where an employee has divided the full sixty-nine (69) weeks of parental
benefits with another employee under the Employment Insurance Plan for the
same child and either employee thereafter remains on parental leave without
pay, that employee is eligible to receive a further parental allowance for a period
of one (1) week, fifty-five decimal eight percent (55.8%) of their weekly rate of
pay for each week, less any other monies earned during this period, unless said
employee has already received the one (1) week of allowance contained in
subparagraph 13.06(c)(iii) for the same child;
m.
At the employee's request, the payment referred to in subparagraph 13.09(1)(i) will be
estimated and advanced to the employee. Adjustments will be made once the employee
provides proof of receipt of Employment Insurance.
n.
The parental allowance to which an employee is entitled is limited to that provided in
paragraph (1) and an employee will not be reimbursed for any amount that he or she is
required to repay pursuant to the Employment Insurance Act.
o.
The weekly rate of pay referred to in paragraphs (1) shall be:
i.
for a full-time employee, the employee's weekly rate of pay on the day
immediately preceding the commencement of parental leave without pay;
ii.
for an employee who has been employed on a part-time or on a combined full-
time and part-time basis during the six (6) month period preceding the
commencement of parental leave without pay, the rate obtained by multiplying
the weekly rate of pay in subparagraph (i) by the fraction obtained by dividing
the employee's straight-time earnings by the straight-time earnings the
employee would have earned working full-time during such period.
p.
The weekly rate of pay referred to in paragraph (1) shall be the rate (and the
recruitment and retention “terminable allowance” if applicable) to which the employee
is entitled for the substantive level to which he or she is appointed.
q.
Notwithstanding paragraph (p), and subject to subparagraph (o)(ii), if on the day
immediately preceding the commencement of parental leave without pay an employee
is performing an acting assignment for at least four (4) months, the weekly rate shall be
the rate (and the recruitment and retention “terminable allowance" if applicable), the
employee was being paid on that day.
r.
Where an employee becomes eligible for a pay increment or pay revision while in
receipt of the allowance, the allowance shall be adjusted accordingly.
s.
Parental allowance payments made under the SUB Plan will neither reduce nor
increase an employee's deferred remuneration or severance pay.
t.
The maximum combined, shared, maternity and extended parental allowances payable
shall not exceed eighty-six (86) weeks for each combined maternity and parental leave
without pay.
13.10 Special parental allowance for totally disabled employees
a.
An employee who:
i.
fails to satisfy the eligibility requirement specified in subparagraph 13.09(a)(ii)
solely because a concurrent entitlement to benefits under the Disability Insurance
(DI) Plan, the Long-Term Disability (LTD) Insurance portion of the Public
Service Management Insurance Plan (PSMIP) or via the Government Employees
Compensation Act prevents the employee from receiving Employment Insurance
or Quebec Parental Insurance Plan benefits;
and
ii.
has satisfied all of the other eligibility criteria specified in paragraph 13.09(a),
other than those specified in sections (A) and (B) of subparagraph 13.09(a)(iii);
shall be paid, in respect of each week of benefits under the parental allowance not
received for the reason described in subparagraph 13.10(a)(i), the difference between
ninety-three per cent (93%) of the employee's rate of pay, and the gross amount of his
or her weekly disability benefit under the DI Plan, the LTD Plan or via the Government
Employees Compensation Act.
b. An employee shall be paid an allowance under this clause and under clause 13.09 for a
combined period of no more than the number of weeks during which the employee
would have been eligible for parental, paternity or adoption benefits under the
Employment Insurance or the Quebec Parental Insurance Plan, had the employee not
been disqualified from Employment Insurance or Quebec Parental Insurance Plan
benefits for the reasons described in subparagraph 13.10(a)(i).
13.11 Leave without pay for the care of immediate family
a. Both parties recognize the importance of access to leave for the purpose of care for the
immediate family.
b. For the purpose of this clause, family is defined as spouse (or common-law partner),
children (including foster children or children of legal or common-law partner), ward of
the employee, grandchild, parents (including stepparents or foster parents), father-in-
law, mother-in-law, son-in-law, daughter-in-law, brother, sister, stepbrother, stepsister,
the employee's grandparents or any relative permanently residing in the employee's
household or with whom the employee permanently resides, and a person who stands in
the place of a relative for the employee whether or not there is any degree of
consanguinity between such person and the employee.
c. Subject to paragraph 13.11(b), an employee shall be granted leave without pay for the
care of immediate family in accordance with the following conditions:
i.
an employee shall notify the Employer in writing as far in advance as possible but
not less than four (4) weeks in advance of the commencement date of such leave,
unless, because of urgent or unforeseeable circumstances, such notice cannot
be given;
ii.
leave granted under this clause shall be for a minimum period of three (3) weeks;
iii.
the total leave granted under this article shall not exceed five (5) years during an
employee's total period of employment in the public service;
iv.
leave granted for a period of one (1) year or less shall be scheduled in a manner
which ensures continued service delivery.
Transitional provisions
These transitional provisions are applicable to employees who have been granted and have
proceeded on leave on or after the date of signature of this agreement.
a. An employee who, on the date of signature of this agreement, is on leave without pay for
the care and nurturing of pre-school age children under the terms of a previous agreement
continues on that leave for the approved duration or until the employee's return to work,
if the employee returns to work before the end of the approved leave.
b. An employee who becomes a member of the bargaining unit on or after the date of
signature of this agreement and who is on leave without pay for the care and nurturing of
pre-school age children under the terms of another agreement, continues on that leave for
the approved duration or until the employee's return to work before the end of the
approved leave.
**
13.12 Caregiving leave
a. Notwithstanding the definition of “family” found in paragraph 13.11(a), an employee
who provides the Employer with proof that he or she is in receipt of or awaiting
Employment Insurance (EI) benefits for compassionate care benefits, family caregiver
benefits for children and/or family caregiver benefits for adults may be granted leave
without pay while in receipt of or awaiting these benefits.
b. The leave without pay described in paragraph 13.12(a) shall not exceed twenty-six
(26) weeks for compassionate care benefits, thirty-five (35) weeks for family caregiver
benefits for children and fifteen (15) weeks for family caregiver benefits for adults, in
addition to any applicable waiting period.
c. When notified, an employee who was awaiting benefits must provide the Employer with
proof that the request for Employment Insurance (EI) compassionate care benefits, family
caregiver benefits for children and/or family caregiver benefits for adults has been
accepted.
d. When an employee is notified that their request for Employment Insurance (EI)
compassionate care benefits, family caregiver benefits for children and/or family
caregiver benefits for adults has been denied, paragraph 13.12(a) above ceases to apply.
e. Leave granted under this clause shall count for the calculation of “continuous
employment" for the purposes of calculating severance pay and “service” for the purpose
of calculating vacation leave. Time spent on such leave shall count for pay increment
purposes.
13.13 Leave without pay for family-related needs
Leave without pay will be granted for family-related needs, in the following manner:
a. subject to operational requirements as determined by the Employer, leave without pay for
a period of up to three (3) months will be granted to an employee for family-
related needs;
b. subject to operational requirements as determined by the Employer, leave without pay of
more than three (3) months but not exceeding one (1) year will be granted to an employee
for family-related needs;
c. an employee is entitled to leave without pay for family-related needs only once under
each of paragraphs (a) and (b) of this clause during the employee's total period of
employment in the public service. Leave without pay granted under this clause may not
be used in combination with maternity, paternity or adoption leave without the consent of
the Employer;
d. leave without pay granted under paragraph (a) of this clause shall be counted for the
calculation of “continuous employment” for the purpose of calculating severance pay and
vacation leave for the employee involved;
e.
leave without pay granted under paragraph (b) of this clause shall be deducted from the
calculation of "“continuous employment” for the purpose of calculating severance pay and
vacation leave for the employee involved.
13.14 Leave without pay for relocation of spouse
a. At the request of an employee, leave without pay for a period up to one (1) year shall be
granted to an employee whose spouse is permanently relocated and up to five (5) years to
an employee whose spouse is temporarily relocated.
b. Leave without pay granted under this clause shall be deducted from the calculation of
“continuous employment” for the purpose of calculating severance pay and vacation
leave for the employee involved except where the period of such leave is less than three
(3) months.
13.15 Leave with pay for family-related responsibilities
**
a.
For the purpose of this clause, family is defined as spouse (or common-law spouse
resident with the employee), children (including children of legal or common-law
spouse), foster children, ward of the employee, parents (including stepparents or foster
parents), father-in-law, mother-in-law, brother, sister, stepbrother, stepsister,
grandchildren, grandparents of the employee, any relative residing in the employee's
household or with whom the employee permanently resides or any relative for whom the
employee has a duty of care, irrespective of whether they reside with the employee, and a
person who stands in the place of a relative for the employee whether or not there is any
degree of consanguinity between such person and the employee.
b. Leave with pay shall be granted under the following circumstances:
i.
an employee requesting leave under this provision must make every reasonable
effort to schedule medical or dental appointments for family members to minimize
or preclude the employee's absence from work, and must notify his/her supervisor
of the appointment as far in advance as possible. However, when alternate
arrangements are not possible an employee shall be granted, subject to urgent
work requirements, leave for an appointment to take a family member as defined
in paragraph 13.15(a), for a medical or dental appointment when the family
member is incapable of attending the appointment by himself/herself, or for
appointments with appropriate authorities in schools or adoption agencies;
ii.
to provide for the immediate and temporary care of a sick family member and to
provide an employee with time to make alternate care arrangements where the
illness is of a longer duration;
iii.
for needs directly related to the birth or to the adoption of the employee's child;
iv.
to attend school functions, if the supervisor was notified of the functions as far in
advance as possible;
v.
to provide for the employee's child in the case of an unforeseeable closure of the
school or daycare facility;
vi.
eight (8) hours out of the forty (40) hours stipulated in paragraph 13.15(c) below
may be used to attend an appointment with a legal or paralegal representative for
non-employment related matters, or with a financial or other professional
representative, if the supervisor was notified of the appointment as far in advance
as possible.
c. The total leave with pay which may be granted under subparagraphs (b)(i) to (v) shall not
exceed forty (40) hours in a fiscal year.
13.16 Leave with or without pay for other reasons
a. At its discretion, the Employer may grant leave with or without pay for purposes other
than those specified in this agreement.
b. At its discretion, the Employer may grant leave with pay when circumstances not
directly attributable to the employee prevent his/her reporting for work, including civil
defence exercises and emergencies affecting the community or place of work.
c. Reasons for requesting leave without pay for personal reasons, other than those
specified in this agreement, will not be required of the employee unless the request is
excessive or the granting of such leave would interfere with urgent work commitments.
Permission to take such leave will not be unreasonably withheld. Where a dispute
occurs, the matter may be referred directly to the appropriate division head.
d.
i.
Subject to operational requirements as determined by the Employer and with an
advance notice of at least five (5) working days, the employee shall be granted, in
each fiscal year, sixteen (16) hours of leave with pay for reasons of a personal
nature. This leave can be taken in periods of eight (8) hours or four
(4) hours each.
ii.
The leave will be scheduled at times convenient to both the employee and the
Employer. Nevertheless, the Employer shall make every reasonable effort to
grant the leave at such times as the employee may request.
Leave with or without pay for Council business
13.17 Contract negotiation meetings
The Employer will grant leave without pay to an employee for the purpose of attending contract
negotiation meetings on behalf of the Council.
13.18 Preparatory contract negotiation meetings
When operational requirements permit, the Employer will grant leave without pay to a
reasonable number of employees to attend preparatory contract negotiation meetings.
13.19 Employee representatives' training courses
When operational requirements permit, the Employer will grant leave without pay to employees
appointed as Employee representatives by the Council, to undertake training sponsored by the
Council related to the duties of an Employee representative.
When operational requirements permit, the Employer will grant leave with pay to employees
appointed as Employee representatives by the Council, to attend training sessions concerning
Employer-employee relations sponsored by the Employer.
**
13.20 Domestic violence leave
For the purposes of this clause domestic violence is considered to be any form of abuse or
neglect that an employee or an employee's child experiences from someone with whom the
employee has or had an intimate relationship.
a. The parties recognize that employees may be subject to domestic violence in their
personal life that could affect their attendance at work.
b. Upon request, an employee who is subject to domestic violence or who is the parent of a
dependent child who is subject to domestic violence from someone with whom the
employee has or had an intimate relationship shall be granted domestic violence leave in
order to enable the employee, in respect of such violence:
i.
to seek care and/or support for themselves or their dependent child in respect of a
physical or psychological injury or disability;
ii.
to obtain services from an organization which provides services for individuals
who are subject to domestic violence;
iii.
to obtain professional counselling;
iv.
to relocate temporarily or permanently;
or
v.
to seek legal or law enforcement assistance or to prepare for or participate in any
civil or criminal legal proceeding.
c. The total domestic violence leave with pay which may be granted under this clause shall
not exceed eighty (80) hours in a fiscal year.
d. The Employer may, in writing and no later than fifteen (15) days after an employee's
return to work, request the employee to provide documentation to support the reasons for
the leave. The employee shall provide that documentation only if it is reasonably
practicable for them to obtain and provide it.
e. Notwithstanding paragraphs 13.20(b) and 13.20(c), an employee is not entitled to
domestic violence leave if the employee is charged with an offence related to that act or if
it is probable, considering the circumstances, that the employee committed that act.
Article 14: severance pay
14.01 For the purpose of this article, the terms:
a. "Employer” includes any organization, service with which is included in the calculation
of "continuous employment";
b. "weekly rate of pay” means the employee's hourly rate of pay as set out in
Appendix "A" multiplied by forty (40) applying to the employee's classification, as
shown in the instrument of appointment.
14.02 Lay-off
Under the following circumstances and subject to clause 14.08, an employee with one (1) or
more years of continuous employment who is laid off after April 7, 1971, shall be paid severance
pay based on completed years of continuous employment, less any period within the period of
continuous employment in respect of which the employee was granted a termination of
employment benefit paid by the Employer. It shall be calculated at the rate of:
a. On the first (1st) lay-off, for the first (1st) year of continuous employment, two
(2) weeks' pay, or three (3) weeks' pay for employees with ten (10) or more and less than
twenty (20) years of continuous employment, or four (4) weeks' pay for employees with
twenty (20) or more years of continuous employment, plus one (1) week's pay for each
succeeding completed year of continuous employment, and in the case of a partial year of
continuous employment, one (1) week's pay multiplied by the number of days of
continuous employment divided by three hundred and sixty-five (365).
b. On the second (2nd) or subsequent lay-off, one (1) week's pay for each complete year of
continuous employment and, in the case of a partial year of continuous employment, one
(1) week's pay multiplied by the number of days of continuous employment divided by
three hundred and sixty-five (365), less any period in respect of which the employee was
granted severance pay under paragraph 14.02(a).
14.03 Death
If an employee dies, there shall be paid to the employee's estate a severance payment in respect
of the employee's complete period of continuous employment, comprised of one (1) week's pay
for each complete year of continuous employment and, in the case of a partial year of continuous
employment, one (1) week's pay multiplied by the number of days of continuous employment
divided by three hundred and sixty-five (365), to a maximum of thirty (30) weeks' pay,
regardless of any other benefit payable.
14.04 Termination for cause for reasons of incapacity
When an employee ceases to be employed by reason of termination for cause for reason of
incapacity pursuant to paragraph 12(1)(e) of the Financial Administration Act, one (1) week's
pay for each complete year of continuous employment with a maximum benefit of twenty-eight
(28) weeks.
14.05 Rejection on probation
An employee with two (2) or more years of continuous employment who ceases to be employed
for reasons of rejection during the employee's probationary period immediately following a
second or subsequent appointment shall be paid severance pay calculated by multiplying the
employee's weekly rate of pay on rejection during probation by the number of completed years
of continuous employment to a maximum of twenty-seven (27) years less any period within that
period of continuous employment in respect of which the employee was granted a termination of
employment benefit paid by the Employer.
14.06 Continuous employment
The period of continuous employment used in the calculation of severance benefits payable to an
employee under this article shall be reduced by any period of continuous employment in respect
of which the employee was already granted any type of termination benefit. Under no
circumstances shall the maximum severance pay provided under this article be pyramided.
For greater certainty, payments for the elimination of severance pay for voluntary separation
(resignation and retirement) made pursuant to clauses 14.10 to 14.13 of Appendix C or similar
provisions in other collective agreements shall be considered as a termination benefit for the
administration of clause 14.06.
14.07 Appointment to a separate agency
An employee who resigns to accept an appointment with an organization listed in Schedule V of
the Financial Administration Act shall be paid any outstanding payment in lieu of severance if
applicable under Appendix C.
14.08 Employees hired on or before September 18, 2013, who are subject to the payment in lieu
of severance for the elimination of severance pay for voluntary separation (resignation and
retirement) and who opted to defer the payment, the former provisions outlining the payment in
lieu are found at Appendix C.
Article 15: hours of work and overtime
15.01 Hours of work
a. The hours of work shall be forty (40) hours per week and eight (8) hours per day.
b. The workweek and workdays shall be:
i.
from Sunday 2345 hours to Friday 2345 hours inclusive for employees subject to
paragraph 15.02(a),
ii.
from Monday to Friday inclusive for employees subject to paragraph 15.02(b),
and
iii.
from Monday 0015 hours to Saturday 0015 hours inclusive for employees
subject to paragraph 15.02(c).
c. The first and second days of rest shall be:
i.
from Friday 2345 hours to Saturday 2345 hours and from Saturday 2345 hours to
Sunday 2345 hours respectively for employees subject to paragraph 15.02(a),
ii.
Saturday and Sunday respectively for employees subject to paragraph 15.02(b),
and
iii.
from Saturday 0015 hours to Sunday 0015 hours and from Sunday 0015 hours to
Monday 0015 hours respectively for employees subject to paragraph 15.02(c).
15.02 The hours of work shall be scheduled as follows:
a.
the first (night) shift shall be from 2345 hours to 0815 hours with an unpaid meal period
from 0345 hours to 0415 hours;
b. the second (day) shift shall be from 0745 hours to 1615 hours with an unpaid meal period
from 1200 hours to 1230 hours;
c. the third (evening) shift shall be from 1545 hours to 0015 hours with an unpaid meal
period from 1945 hours to 2015 hours.
15.03 Notwithstanding the provisions of clause 15.02, the Council recognizes the requirement
for certain employees to regularly report for work and to cease work at different hours than those
established in clause 15.02, and the Employer agrees to discuss with the Council such changes in
working hours before implementing them.
15.04 The hours of work described in clauses 15.01 and 15.02 shall not be construed as a
guarantee of a minimum or of a maximum hours of work.
15.05 An employee may be transferred from one shift to another within a workday subject to the
application of clause 15.10.
15.06 Notwithstanding the provisions of clause 15.02:
a.
An employee who works on the first (night) or third (evening) shift:
i.
on three (3) or more consecutive workdays within a workweek,
or
ii.
on the first or on the first and second workdays in a workweek following a full
workweek on the first (night) or third (evening) shift,
or
iii.
on the last or on the last and next to last workdays in a workweek preceding a full
workweek on the first (night) or third (evening) shift,
shall receive a shift premium as specified in clause 24.01.
For the purpose of paragraph 15.06(a), an employee on leave during the days referred to in
paragraph 15.06(a) shall not be considered as breaking the consecutive workday or full
workweek requirement of that clause.
For the purpose of subparagraph 15.06(a)(i), a paid holiday shall not be considered as breaking
the consecutive workday requirement providing three (3) days of shift work are scheduled.
Where shift work is scheduled for a full workweek which includes a designated paid holiday,
the holiday shall not affect the requirements of a full workweek referred to in
subparagraphs 15.06(a)(ii) and (iii).
b. An employee who works on the first or third shift, other than as described in
paragraph 15.06(a) shall be paid at double (2) time rate for each hour so worked and no
shift premium shall be paid.
Shift while on course
c. Notwithstanding clause 15.05 and paragraphs 15.06(a) and (b), the parties recognize the
need to amend shift schedules by mutual consent to accommodate training courses.
15.07 The Employer will schedule shift work only when necessary. On the occasion of shift on a
project, the Employer will give to the employees and Council, as much notice as practicable
prior to the commencement of shift work.
15.08 When a Monday or Tuesday shift is scheduled, employees will be notified by the end of
their shift on the preceding Friday. When a Wednesday shift is scheduled, employees will be
notified by the end of their shift on the preceding Monday. When a Thursday shift is scheduled,
employees will be notified by the end of their shift on the preceding Tuesday. When a Friday
shift is scheduled, employees will be notified by the end of their shift on the preceding
Wednesday.
15.09 Overtime
The Employer will make every reasonable effort:
a. to distribute overtime fairly among available qualified employees;
b. to give at least four (4) hours' advance notice to employees who are required to work
overtime;
c. to keep overtime to a minimum.
15.10 Overtime compensation
Subject to clause 15.14, overtime shall be compensated at the following rates:
a.
double (2) time for all hours worked in excess of eight (8) hours in a continuous period of
work or in excess of eight (8) hours in a day to a maximum of sixteen (16) hours in a
continuous period of work; and for all hours worked on a day of rest to a maximum of
sixteen (16) hours;
b. triple (3) time for each hour worked in excess of sixteen (16) hours in a continuous period
of work or in excess of sixteen (16) hours in any twenty-four (24) hour period, and for all
hours worked by an employee who is recalled to work before the expiration of the nine
(9) hour period referred to in clause 15.11.
15.11 Subject to clause 15.12, an employee who works for a period of fifteen (15) hours or more
in a twenty-four (24) hour period shall not report on his/her next regular scheduled shift until
nine (9) hours has elapsed from the end of the previous working period unless otherwise
informed by the supervisor. If, in the application of this clause, an employee works less than
his/her next full shift, the employee shall, nevertheless, receive eight (8) hours' regular pay.
15.12 An employee will not work more than fifteen (15) hours in a twenty-four (24) hour period
except where operational requirements dictate otherwise.
15.13 When an employee is required to report for prescheduled overtime and reports to work on
a designated paid holiday which is not the employee's scheduled day of work, or on the
employee's day of rest, the employee shall be paid the greater of:
a. compensation at the applicable overtime rate for all hours worked,
or
b. compensation equivalent to four (4) hours' pay at the employee's hourly rate of pay,
except that the minimum of four (4) hours' pay shall apply the first time only an
employee is required to report for prescheduled overtime during a period of eight
(8) hours, starting with the employee's first reporting.
15.14 An employee is entitled to overtime compensation for each completed six (6) minute
period of overtime worked by him/her.
15.15 When management requires an employee to work through his/her regular meal period, the
employee shall be paid at the applicable overtime rate for the period worked therein, and the
employee shall be given time off with pay to eat commencing within one half (1/2) hour
immediately prior to the regular meal period or commencing within one half (1/2) hour of the
termination of the regular meal period.
15.16
a. Notwithstanding the provisions of clauses 15.10 and 17.03, an employee may request, in
lieu of overtime payment, compensatory leave with pay for a maximum credit equivalent
to one hundred and twenty (120) hours straight-time pay in a fiscal year. Approval of the
Employer shall not be unreasonably withheld.
b. The rate of pay to which an employee is entitled during such leave shall be based on the
employee's hourly rate of pay as calculated from the classification prescribed in the
employee's certificate of appointment in the employee's substantive position on the day
immediately prior to the day on which leave is taken.
c. The Employer shall grant compensatory leave at times convenient to both the employee
and the Employer.
d. Accumulated compensatory leave not used by March 31 of each year shall normally be
paid. Such leave may by mutual agreement be carried over to the following leave year.
15.17 Rest periods
The Employer shall schedule two (2) rest periods of ten (10) minutes each during each full shift.
15.18 Overtime meal allowance
a. A meal allowance of twelve dollars ($12.00) will be paid:
i.
to an employee who is required to work overtime and provided the employee
works for three (3) hours, commencing not more than one (1) hour following the
employee's normal quitting time;
ii.
to an employee who is required to work at least three (3) hours immediately
preceding the employee's normal starting time;
iii.
after an employee has worked an initial period of three (3) hours overtime, for
each subsequent four (4) hour period of overtime worked;
and
iv.
to an employee who has been recalled to work as provided in clause 18.01 for
each four (4) hour period of overtime worked;
b. Except as provided in subparagraph 15.18(a)(iv), an employee who works overtime on
days of rest or holidays is not entitled to a meal allowance for the first eight (8) hours
worked. A meal allowance of twelve dollars ($12.00) will be paid for each subsequent
four (4) hour period of overtime worked.
c. The provisions of paragraphs 15.18(a) and (b) will not apply to employees assigned to sea
trials where meals are provided without charge to the employees during periods described
in paragraphs 15.18(a) and (b).
15.19 Unless otherwise informed by the Employer, any employee required to work overtime
shall take an unpaid meal break of not less than forty-five (45) minutes immediately following
the end of his/her normal shift.
Article 16: wash-up time
16.01 A schedule shall be arranged by management to allow employees time to put away tools
and wash up before meal periods and before the end of each shift. Periods of five (5) minutes
will be allowed for employees working at their regular work centres and longer periods will be
scheduled as necessary when employees are assigned to other locations.
Article 17: travelling
17.01 No employee shall be required by the Employer to use his/her own car for government
business.
17.02
a. Where an employee is required by the Employer to work at a point outside the
employee's headquarters area, the employee shall be reimbursed for reasonable expenses
as defined by the Employer.
b. When an employee is required by the Employer to travel to points within the
headquarters area, the employee shall be paid a kilometric allowance or transportation
expenses at the rate paid by the Employer.
c. When an employee travels through more than one (1) time zone, computation will be
made as if he or she had remained in the time zone of the point of origin for continuous
travel and in the time zone of each point of overnight stay after the first day of travel.
17.03 Where an employee is required by the Employer to travel to a point away from the
employee's normal place of work, the employee shall be compensated as follows:
a. on any day on which the employee travels but does not work, at the applicable straight-
time or overtime rate for the hours travelled, but the total amount shall not exceed fifteen
(15) hours' straight time;
b. on a normal workday in which the employee travels and works:
i.
during the employee's regular scheduled hours of work at the straight-time rate
not exceeding eight (8) hours' pay,
ii.
at the applicable overtime rate for all time worked outside the employee's regular
scheduled hours of work,
iii.
at the applicable overtime rate for all travel outside the employee's regular
scheduled hours of work to a maximum of fifteen (15) hours' pay at straight time
in any twenty-four (24) hour period;
c. on a rest day on which the employee travels and works, at the applicable overtime rate:
i.
for travel time, in an amount not exceeding fifteen (15) hours' straight-time pay,
and
ii.
for all time worked;
d. notwithstanding the limitations stated in paragraphs 17.03(a), (b) and (c), where an
employee travels on duty, but does not work, for more than four (4) hours between
2200 hours and 0600 hours, and no sleeping accommodation is provided, the employee
shall be compensated at the applicable overtime rate for a maximum of fifteen (15) hours'
straight-time pay.
17.04 The Employer recognizes the value of safety belts or barriers in vehicles not designed for
the carrying of passengers and will endeavour to provide vehicles with such equipment for
transporting employees.
17.05 When an employee dies or is injured as a result of an unscheduled flight the employee is
required to undertake, the employee or the employee's estate shall be paid compensation with
respect to flying accidents in accordance with the policy in force at the time the accident
occurred.
17.06
a. An employee assigned to a military establishment when in travel status will not be
required to make use of the establishment for accommodation and messing except where
it is evident that to stay elsewhere would be inconsistent with good order and common
sense (for example, certain training courses, no suitable commercial accommodation is
convenient and available, etc.).
b. Subject to paragraph 17.06(a), when an employee is required to utilize service
accommodation, such accommodation shall be the equivalent where available, of good
commercial accommodation.
17.07 Travel status leave
a. An employee who is required to travel outside his or her headquarters area on
government business, as these expressions are defined by the Employer, and is away
from his permanent residence for forty (40) nights during a fiscal year shall be granted
eight (8) hours of time off with pay. The employee shall be credited with eight
(8) additional hours of time off for each additional twenty (20) nights that the employee
is away from his or her permanent residence to a maximum of eighty (80) nights.
b. The maximum number of hours off earned under this clause shall not exceed forty
(40) hours in a fiscal year and shall accumulate as compensatory leave with pay.
c. This leave with pay is deemed to be compensatory leave and is subject to
paragraphs 15.16(c) and (d)
The provisions of this clause do not apply when the employee travels in connection with courses,
training sessions, professional conferences and seminars unless the employee is required to
attend by the Employer.
Article 18: call-back pay
18.01 When an employee is called back to work overtime after he/she has left the Employer's
premises:
a. on a designated paid holiday which is not an employee scheduled day of work or
b. on an employee's day of rest,
or
c. after the employee has completed his/her work for the day, and returns to work the
employee shall be paid the greater of:
i.
compensation at the applicable overtime rate for time worked,
or
ii.
compensation equivalent to four (4) hours' pay at the straight-time rate,
provided that the period worked by the employee is not contiguous to the employee's scheduled
shift and the employee was not notified of such overtime requirement prior to completing his/her
last period of work.
18.02 Other than when required by the Employer to operate a vehicle of the Employer for
transportation to a work location other than the employee's normal place of work, time spent by
the employee reporting to work or returning to the employee's residence shall not constitute
time worked.
18.03 Compensation under this article is not to be construed as different from or additional to
overtime pay, but shall be construed as establishing minimum compensation to be paid.
**Article 19: grievance procedure
19.01 In cases of alleged misinterpretation or misapplication arising out of agreements concluded
by the National Joint Council of the public service on items which may be included in a
collective agreement and which the parties to this agreement have endorsed, the grievance
procedure will be in accordance with section 15 of the NJC by-laws.
Individual grievances
19.02 Subject to and as provided in section 208 of the Federal Public Sector Labour Relations
Act, an employee may present an individual grievance to the Employer if he or she feels
aggrieved:
a. by the interpretation or application, in respect of the employee, of:
i.
a provision of a statute or regulation, or of a direction or other instrument made or
issued by the Employer, that deals with terms and conditions of employment;
or
ii.
a provision of the collective agreement or an arbitral award;
or
b. as a result of any occurrence or matter affecting his or her terms and conditions of
employment.
Group grievances
19.03 Subject to and as provided in section 215 of the Federal Public Sector Labour Relations
Act, the Council may present a group grievance to the Employer on behalf of employees in the
bargaining unit who feel aggrieved by the interpretation or application, common in respect of
those employees, of a provision of the collective agreement or an arbitral award.
a. In order to present a group grievance, the Council must first obtain the written consent of
each of the employees concerned.
b. A group grievance shall not be deemed to be invalid by reason only of the fact that the
consent is not in accordance with form 19.
c. A group grievance must relate to employees in a single portion of the federal public
administration.
Policy grievances
19.04 Subject to and as provided in section 220 of the Federal Public Sector Labour Relations
Act, the Council or the Employer may present a policy grievance in respect of the interpretation
or application of the collective agreement or of an arbitral award.
a. A policy grievance may be presented by the Council only at the final level of the
grievance procedure, to an authorized representative of the Employer. The Employer
shall inform the Council of the name, title and address of this representative.
b. The grievance procedure for a policy grievance by the Employer shall also be composed
of a single level, with the grievance presented to an authorized representative of the
Council. The Council shall inform the Employer of the name, title and address of this
representative.
Grievance procedure
19.05 For the purposes of this article, a grievor is an employee or, in the case of a group or
policy grievance, the Council.
19.06 No person shall seek by intimidation, by threat of dismissal or by any other kind of threat
to cause a grievor to abandon a grievance or refrain from exercising the right to present a
grievance, as provided in this collective agreement.
19.07 The parties recognize the value of informal discussion between employees and their
supervisors and between the Council and the Employer to the end that problems might be
resolved without recourse to a formal grievance. When notice is given that an employee or the
Council, within the time limits prescribed in clause 19.15, wishes to take advantage of this
clause, it is agreed that the period between the initial discussion and the final response shall not
count as elapsed time for the purpose of grievance time limits.
19.08 A grievor wishing to present a grievance at any prescribed level in the grievance
procedure, shall transmit this grievance to the employee's immediate supervisor or local officer-
in-charge who shall forthwith:
a. forward the grievance to the representative of the Employer authorized to deal with
grievances at the appropriate level,
and
b. provide the grievor with a receipt stating the date on which the grievance was received.
19.09 A grievance shall not be deemed to be invalid by reason only of the fact that it is not in
accordance with the form supplied by the Employer.
19.10 Subject to and as provided for in the Federal Public Sector Labour Relations Act, a grievor
who feels treated unjustly or aggrieved by an action or lack of action by the Employer in matters
other than those arising from the classification process is entitled to present a grievance in the
manner prescribed in clause 19.08, except that:
a. where there is another administrative procedure provided by or under any act of
Parliament to deal with the grievor's specific complaint such procedure must be
followed,
and
b. where the grievance relates to the interpretation or application of this collective
agreement or an Arbitral Award, an employee is not entitled to present the grievance
unless he has the approval of and is represented by the Council.
19.11 There shall be no more than a maximum of four (4) levels in the grievance procedure.
These levels shall be as follows:
a.
Level 1, first level of management;
b. Levels 2 and 3 in departments or agencies where such a levels are established
intermediate level(s);
c. Final level, chief executive or deputy head or an authorized representative.
Whenever there are four (4) levels in the grievance procedure, the grievor may elect to waive
either Level 2 or 3.
No employer representative may hear the same grievance at more than one level in the grievance
procedure.
19.12 The Employer shall designate a representative at each level in the grievance procedure and
shall inform each employee to whom the procedure applies of the name or title of the person so
designated together with the name or title and address of the immediate supervisor or local
officer-in-charge to whom a grievance is to be presented.
**
19.13 This information shall be communicated to employees by means of notices posted by the
Employer in places where such notices are most likely to come to the attention of the employees
to whom the grievance procedure applies, or otherwise as determined by agreement between the
Employer and the Council. For the purposes of satisfying the Employer's obligation under this
clause, the notices may be posted electronically. Where electronic access is unavailable or
impractical a paper copy will be posted.
19.14 An employee may be assisted and/or represented by the Council when presenting a
grievance at any level. The Council shall have the right to consult with the Employer with
respect to a grievance at each or any level of the grievance procedure.
19.15 A grievor may present a grievance to the first level of the procedure in the manner
prescribed in clause 19.08, not later than the twenty-fifth (25th) day after the date on which the
grievor is notified or on which the grievor first becomes aware of the action or circumstances
giving rise to the grievance. The Employer may present a policy grievance in the manner
prescribed in clause 19.04 not later than the twenty-fifth (25th) day after the date on which the
Employer is notified orally or in writing or on which the Employer first becomes aware of the
action or circumstances giving rise to the policy grievance.
19.16 A grievor may present a grievance at each succeeding level in the grievance procedure
beyond the first level either:
a.
where the decision or settlement is not satisfactory to the grievor, within ten (10) days
after that decision or settlement has been conveyed in writing to the grievor by the
Employer,
or
b. where the Employer has not conveyed a decision to the grievor within the time prescribed
in clause 19.17, within fifteen (15) days after presentation by the grievor of the grievance
at the previous level.
19.17 The Employer shall normally reply to a grievance at any level of the grievance procedure,
except the final level, within twenty (20) days after the grievance is presented, and within thirty
(30) days where the grievance is presented at the final level except in the case of a policy
grievance, to which the Employer shall normally respond within sixty (60) days. The Council
shall normally reply to a policy grievance presented by the Employer within sixty (60) days.
19.18 Where an employee has been represented by the Council in the presentation of the
employee's grievance, the Employer will provide the appropriate representative of the Council
with a copy of the Employer's decision at each level of the grievance procedure at the same time
that the Employer's decision is conveyed to the employee.
19.19 The decision given by the Employer at the final level in the grievance procedure shall be
final and binding upon the employee unless the grievance is a class of grievance that may be
referred to adjudication.
19.20 In determining the time within which any action is to be taken as prescribed in this
procedure, Saturdays, Sundays and designated paid holidays shall be excluded.
19.21 Where the provisions of clause 19.08 cannot be complied with and it is necessary to
present a grievance by mail, the grievance shall be deemed to have been presented on the day on
which it is postmarked and it shall be deemed to have been received by the Employer on the day
it is delivered to the appropriate office of the department or agency concerned. Similarly, the
Employer shall be deemed to have delivered a reply at any level on the date on which the letter
containing the reply is postmarked, but the time limit within which the grievor may present the
grievance at the next higher level shall be calculated from the date on which the Employer's
reply was delivered to the address shown on the grievance form.
19.22 The time limits stipulated in this procedure may be extended by mutual agreement
between the Employer and the grievor and, where appropriate the Council representative.
19.23 Where it appears that the nature of the grievance is such that a decision cannot be given
below a particular level of authority, any or all the levels except the final level may be eliminated
by agreement of the Employer and the grievor, and, where applicable, the Council.
19.24 Where the Employer demotes or terminates an employee for cause pursuant to
paragraph 12(1)(c), (d) or (e) of the Financial Administration Act, the grievance procedure set forth
in this agreement shall apply except that the grievance shall be presented at the final level only.
19.25 A grievor may by written notice to the immediate supervisor or officer-in-charge abandon
a grievance.
19.26 Any grievor who fails to present a grievance to the next higher level within the prescribed
time limits shall be deemed to have abandoned the grievance unless, due to circumstances
beyond the grievor's control, the grievor was unable to comply with the prescribed time limits.
19.27 Where a grievance has been presented up to and including the final level in the grievance
procedure with respect to:
a. the interpretation or application of a provision of this collective agreement or related
Arbitral Award,
or
b. termination of employment or demotion pursuant to paragraph 12(1)(c), (d) or (e) of the
Financial Administration Act,
or
c. disciplinary action resulting in suspension or financial penalty,
and the grievance has not been dealt with to the grievor's satisfaction, it may be referred to
adjudication in accordance with the provisions of the Federal Public Sector Labour Relations
Act and Regulations.
19.28 Where a grievance that may be presented by an employee to adjudication is a grievance
relating to the interpretation or application in respect of the employee of a provision of this
agreement or an Arbitral Award, the employee is not entitled to refer the grievance to
adjudication unless the Council signifies:
a. its approval of the reference of the grievance to adjudication,
and
b. its willingness to represent the employee in the adjudication proceedings.
Article 20: safety and health
20.01 The Employer shall make all reasonable provisions for the occupational safety and health
of employees. The Employer will welcome suggestions on the subject from the Council and the
parties undertake to consult with a view to adopting and expeditiously carrying out reasonable
procedures and techniques designed or intended to prevent or reduce the risk of employment
injury. The Council agrees to encourage its members to observe all safety rules and to use all
appropriate protective equipment and safeguards.
Article 21: technological change
21.01 Both parties recognize the overall advantages of technological change, as well as the
effects that its introduction sometimes has on specific individuals when such change results in
loss of jobs. Therefore, both parties shall encourage and promote improvements in production
and moreover, will cooperate to find ways of reducing, and if possible, eliminating the loss of
employment which may be the direct result of any major improvements.
21.02 Recognizing the nature of the Fleet Maintenance Facility Cape Scott's operations, the
Employer will provide one hundred and twenty (120) days' advance notice, whenever possible,
of the introduction or implementation of technological change when it may result in significant
change in the employment status or working conditions of employees.
21.03 The Employer agrees to consult with the Council with a view to resolving problems which
may arise as a result of the introduction of such technological change.
21.04 The Council shall be informed in advance of all training courses related to technological
change and, except when prevented by unforeseen circumstances or short notice, the Employer
agrees to display in appropriate locations notices of forthcoming job-related training courses.
Management will consult with the Council when establishing training criteria for such courses.
Article 22: agreement re-opener
22.01 This agreement may be amended by mutual consent.
**Article 23: allowances
23.01 Dirty work
a. The Employer agrees to continue the present practice of paying a dirty work allowance to
an employee for work requiring exposure to particularly dirty or obnoxious conditions.
b. An employee, who while working is exposed to such conditions, shall be paid a dirty
work allowance equal to twenty-five per cent (25%) of the employee's basic hourly rate
of pay on a pro rata basis for actual time exposed to these conditions.
c.
Shall include situations agreed to by the parties as being particularly dirty or obnoxious,
or which an adjudicator determines as being particularly dirty or obnoxious.
d. Consultation between management and the Council will take place with a view to
immediate resolution of disagreements on dirty work.
e. Recognizing that changes in methods will introduce new situations which may qualify for
compensation as outlined above, and delete old situations, local management will consult
with the Council with a view to reviewing jobs for which compensation will be paid.
f. The utilization of either paragraph 23.01(d) or (e) will not serve to deny an employee the
right to present a grievance arising out of the application of paragraph 23.01(a).
23.02 Height pay
An employee shall be paid a height pay allowance equal to twenty-five per cent (25%) of the
employee's basic hourly rate of pay on a pro rata basis for actual time worked:
a. on land-based radio antenna towers of one hundred and fifty meters (150 m) or more
where they may be required to work up to the full height of the tower;
b. while suspended from a crane in a Mast Box or boatswain's chair;
c. more than nine meters (9 m) above the base of ship's masts where no scaffolding is
arranged;
d. for repair work on jetty cranes which is at height greater than nine meters (9 m) above the
crane base and no scaffolding exists;
e.
for installation work on the side of buildings, ships or structures nine meters (9 m) above
the ground in CFB Halifax or other establishments where the method of support is by
moveable platform (excluding manlifts) or boatswain's chair or mast box;
f. for erecting or removing staging on the outboard side of the fixed structure supporting the
CIWS, and the forward end of the AFT CEROS on Halifax Class ships;
**
g. on repair work on CPF CWIS, CPF AFT CEROS, and for work on CPF port and stbd
hangar top PTZ cameras and port and stbd bridgetop PTZ cameras, aft horizon roll bar,
and multi-ammunition softkill system (M.A.S.S.) launcher that are outside of the
guardrails; in instances where staging is not provided and the method of support is by
safety harness;
and
h. while tying off grey and black water support lines when a ship is on the synchrolift in
situations where there is no guard rail or the guard rail has been dismantled during
progression of this work.
New technology in similar circumstances will be open for discussion.
23.03 Submarine trials
a. When an employee is required to be in a submarine during trials under the following
conditions:
i.
the employee is in a submarine when it is in a closed down condition either
alongside a jetty or within a harbour, on the surface or submerged, that is, when
the pressure hull is sealed and undergoing trials such as vacuum tests, high
pressure tests, snort trials, battery ventilation trials or other recognized formal
trials, or the submarine is rigged for diving;
or
ii.
Employees that are completing trials aft of 56 Bulkhead and 56 Bulkhead door
and the after escape hatch are shut.
The employee shall receive a submarine trials allowance equal to twenty-five
percent (25%) of the employee's basic hourly rate for each completed one half
(1/2) hour the employee is required to be in a submarine,
or
iii.
the employee is in a submarine when it is beyond the harbour limits on the surface
or submerged;
the employee shall be compensated for all hours aboard at the applicable rate of pay for
all hours worked and at the straight-time rate for all unworked hours.
b. In addition, an employee shall receive a submarine trials allowance equal to twenty-five
per cent (25%) of the employee's basic hourly rate for each completed one half (1/2) hour
the employee is required to be in a submarine during trials as per the conditions
prescribed in paragraph 23.03(a).
23.04 Sea duties aboard surface vessels
When an employee is required to go to sea (that is beyond the harbour limits) in a vessel for the
purpose of conducting trials, repairing defects, dumping ammunition, etc., the employee shall be
compensated, from the time he/she reports aboard until one (1) hour after reaching the harbour
limits on the final return, as follows:
a.
for the first twelve (12) hours aboard or less, at the applicable rate of pay;
b. for all hours aboard in excess of twelve (12) hours, at the applicable rate of pay for all
hours worked and at the regular rate of pay for all unworked hours.
For the purpose of this clause, an employee is considered to be working if he/she is actually
performing or assisting in the performance of the duties of the job or has received specific
instructions to remain available for work at the specific location where the work is being
performed.
23.05 Transfer at sea allowance
When an employee is required to transfer to a ship, submarine or barge (not berthed) from a
helicopter, ship's boat, yardcraft or auxiliary vessel, the employee shall be paid a transfer
allowance of ten dollars ($10.00) except when transferring between vessels and/or work
platforms which are in a secured state to each other for the purpose of performing a specific task
such as deperming. If the employee leaves the ship, submarine or barge by a similar transfer, the
employee shall be paid an additional ten dollars ($10.00).
23.06 Part-time instructor allowance
When an employee other than a Leadhand, is required to act as a facilitator, team leader or to
instruct a course on a part-time basis, the employee shall be paid, in addition to the applicable
rate of pay, the Leadhand rate for the actual time the employee is performing the duties.
Article 24: shift premium
24.01 An employee who is regularly scheduled to work third (evening) or first (night) shift shall
be paid a shift premium of:
a. one seventh (1/7) of the employee's basic hourly rate of pay for each hour worked on
third (evening) shift,
and
b. one seventh (1/7) of the employee's basic hourly rate of pay for each half-hour worked
on the first (night) shift.
Article 25: pay
25.01 Except as provided in this article, the terms and conditions governing the application of
pay to employees are not affected by this agreement.
25.02
a. The rates of pay set forth in Appendix “A” shall become effective on the date specified
therein.
b. Where the rates of pay set forth in Appendix “A” have an effective date prior to the date
of signing of the collective agreement, the following shall apply:
i.
retroactive period," for the purpose of subparagraphs 25.02(b)(ii) to (v), means
the period commencing on the effective date of the retroactive upward revision in
rates of pay and ending on the day the collective agreement is signed or when an
arbitral award is rendered therefor;
ii.
a retroactive upward revision in rates of pay shall apply to employees, former
employees or in the case of death the estates of former employees, who were
employees in the bargaining unit during the retroactive period;
iii.
rates of pay shall be paid in an amount equal to what would have been paid had
the collective agreement been signed or an arbitral award rendered therefor on the
effective date of the revision in rates of pay;
iv.
in order for former employees, or in the case of death for the former employees'
representatives, to receive payment in accordance with subparagraph 25.02(b)(iii),
the Employer shall notify, by registered mail, such individuals at their last known
address that they have thirty (30) days from the date of receipt of the registered
letter to request in writing such payment after which time any obligation upon the
Employer to provide payment ceases;
v.
no payment nor notification shall be made pursuant to paragraph 25.02(b) for one
(1) dollar or less.
25.03
a. An employee is entitled to be paid for services rendered at the rate of pay specified in
Appendix "A" for the classification of the position to which he or she is appointed.
b. Acting pay
An employee, when required by the Employer to perform substantially the duties of a
higher position on an acting basis shall:
i.
be required to act in the higher position for a period of no less than one (1) day.
ii.
be paid acting pay from the date on which the employee commenced to act for the
full period in which the employee acts as if the employee had been appointed to
that higher classification level.
25.04 Delayed progression to next pay period(s) for apprentices
When an apprentice has not worked the required nine hundred (900) hours in a six (6) month
period, the makeup time will be deducted from hours worked in the next six (6) month period
and progression to the next pay period will be paid the day after the day the nine hundred
(900) hours have been worked. Thus, in that succeeding six (6) month period, depending on the
total hours to be made up, an apprentice may receive both progression to the next pay period
related to makeup time and progression to the next period based on an additional nine hundred
(900) hours worked.
25.05 When an employee is temporarily required by the Employer to perform the duties of a
classification in the bargaining unit with a lower rate of pay than the employee is receiving, the
employee shall continue to hold the employee's higher classification and be paid at the rate for
that classification.
The provision of this clause shall not apply to an employee on “lay-off” as defined in
paragraph 2.01(m).
25.06 An employee who was receiving a holding rate of pay on the effective date of this
agreement shall continue to receive that rate of pay until such time as there is a rate for the
employee's classification level which is equal to or higher than the employee's holding rate. At
that time, the employee will be paid the rate which is equal to or higher than the employee's
holding rate.
25.07 Payments made as a result of clause 25.05 shall not change the holding rates of pay or the
holding scale of rates to which an employee is entitled.
25.08 For the information of employees the assignment of jobs to subgroups and levels shall be
as described in Appendix "A.”
25.09 If, during the term of this agreement, a new classification standard is established, and new
rates of pay are applied, any disagreement between the parties arising out of the new rates of pay
shall be subject to negotiation.
Article 26: loss of personal effects
26.01 An employee who suffers loss of clothes or personal effects will be compensated in
accordance with Order-in-Council PC-1991-8/1695.
26.02 Where an employee is assigned to duty aboard a ship and suffers loss of clothing or
personal effects (those which can reasonably be expected to accompany the employee aboard the
ship) because of a marine accident or disaster, the employee shall be reimbursed the value of
those articles up to a maximum of three thousand dollars ($3,000) based on replacement cost less
the usual rate of depreciation.
26.03 An employee or the employee's estate making a claim under this article shall submit to the
Employer reasonable proof of such loss, and shall submit a signed affidavit listing the individual
items and values claimed.
Article 27: tools
27.01 The Employer agrees to continue its present practice of supplying tools where it considers
them necessary, and such tools shall remain the property of the Employer.
27.02 An employee who through negligence destroys or loses any of the tools issued to the
employee by the Employer shall be held responsible for such damage or loss based on
replacement cost less the usual rate of depreciation.
Article 28: illegal strikes
28.01 The Federal Public Sector Labour Relations Act provides penalties for illegal strikes. A
strike includes a cessation of work or a refusal to work or to continue to work by employees in
combination or in concert or in accordance with a common understanding, or a slowdown or
other concerted activity on the part of employees designed to restrict or limit output.
Article 29: notice to amend or renew the collective agreement
29.01 Should either party, at the expiration of this agreement, desire amendments or alterations
therein for its renewal, a written notice to that effect shall be served upon the other party in
accordance with the provisions of the Federal Public Sector Labour Relations Act.
Article 30: joint consultation
30.01 The Employer and the Council recognize that consultation and communication on matters
of mutual interest outside the terms of the collective agreement should promote constructive and
harmonious Employer-Council relations.
30.02 It is agreed that Labour-Management meetings are an appropriate forum for consultation;
that a subject for discussion may be within or without the authority of either the management or
Council representatives. In these circumstances, consultation may take place for the purpose of
providing information, discussing the application of policy or air problems to promote
understanding, but it is expressly understood that no commitment may be made by either party
on a subject that is not within their authority or jurisdiction, nor shall any commitment made be
construed as to alter, amend, add to, or modify the terms of this agreement.
30.03 The following matters may be regarded as appropriate subjects for joint consultation:
a. accident prevention;
b. productivity;
c. leave administration;
d. training;
and
e. contracting out.
Article 31: employee performance review and employee files
31.01 When a formal review of an employee's performance is made, the employee concerned
shall be given an opportunity to discuss and then sign the review form in question to indicate that
its contents have been read and understood. A copy of the completed review form will be
provided to the employee.
31.02 Upon written request of an employee, the personnel file of that employee shall be made
available once per year for the employee's examination in the presence of an authorized
representative of the Employer.
Article 32: statement of duties
32.01 Upon written request, an employee shall be given an official statement of the duties and
responsibilities of his or her position, including the classification level and, where applicable, the
point rating allotted by factor, and an organization chart depicting the position's place in the
organization.
Article 33: National Joint Council agreements
33.01 Agreements concluded by the National Joint Council (NJC) of the public service on items
which may be included in a collective agreement, and which the parties to this agreement have
endorsed after December 6, 1978, will form part of this collective agreement, subject to the
Federal Public Sector Labour Relations Act (FPSLRA) and any legislation by Parliament that
has been or may be, as the case may be, established pursuant to any act specified in
subsection 113(b) of the FPSLRA.
33.02 NJC items which may be included in a collective agreement are those items which the
parties to the NJC agreement have designated as such or upon which the Chairman of the Federal
Public Sector Labour Relations and Employment Board has made a ruling pursuant to clause (c)
of the NJC Memorandum of Understanding which became effective December 6, 1978.
33.03 The relevant directives, policies or regulations as amended from time to time by National
Joint Council recommendation, and which have been approved by the Treasury Board of
Canada, form part of this collective agreement.
During the term of this collective agreement, other directives, policies or regulations may
be added.
**Article 34: registration fees
34.01 The Employer shall reimburse an employee for the payment of membership, registration or
other related fees to organizations or governing bodies when the Employer is satisfied that the
payment of such fees is a requirement for the continuation of the performance of the duties of the
employee's position.
Article 35: sexual harassment
35.01 The Council and the Employer recognize the right of employees to work in an
environment free from sexual harassment and agree that sexual harassment will not be tolerated
in the workplace.
35.02
a. Any level in the grievance procedure shall be waived if a person hearing the grievance is
the subject of the complaint.
b. If by reason of paragraph (a) a level in the grievance procedure is waived, no other level
shall be waived except by mutual agreement.
35.03 By mutual agreement, the parties may use a mediator in an attempt to settle a grievance
dealing with sexual harassment. The selection of the mediator will be by mutual agreement.
**Article 36: no discrimination
**
36.01 There shall be no discrimination, interference, restriction, coercion, harassment,
intimidation, or any disciplinary action exercised or practiced with respect to an employee by
reason of age, race, creed, colour, national origin, religious affiliation, sex, sexual orientation,
gender identity and expression, family status, mental or physical disability, genetic
characteristics, membership or activity in the Council, marital status or a conviction for which a
pardon has been granted.
36.02
a. Any level in the grievance procedure shall be waived if a person hearing the grievance is
the subject of the complaint.
b. If by reason of paragraph (a) a level in the grievance procedure is waived, no other level
shall be waived except by mutual agreement.
36.03 By mutual agreement, the parties may use a mediator in an attempt to settle a grievance
dealing with discrimination. The selection of the mediator will be by mutual agreement.
Article 37: education leave without pay, career development leave
with pay and examination leave with pay
Education leave without pay
37.01 The Employer recognizes the usefulness of education leave. Upon written application by
the employee and with the approval of the Employer, an employee may be granted education
leave without pay for varying periods of up to one (1) year, which can be renewed by mutual
agreement, to attend a recognized institution for studies in some field of education in which
preparation is needed to fill the employee's present role more adequately or to undertake studies
in some field in order to provide a service which the Employer requires or is planning to provide.
37.02 At the Employer's discretion, an employee on education leave without pay under this
article may receive an allowance in lieu of salary of up to one hundred per cent (100%) of the
employee's annual rate of pay, depending on the degree to which the education leave is deemed,
by the Employer, to be relevant to organizational requirements. Where the employee receives a
grant, bursary or scholarship, the education leave allowance may be reduced. In such cases, the
amount of the reduction shall not exceed the amount of the grant, bursary or scholarship.
37.03 Allowances already being received by the employee may at the discretion of the Employer
be continued during the period of the education leave. The employee shall be notified when the
leave is approved whether such allowances are to be continued in whole or in part.
37.04 As a condition of the granting of education leave without pay, an employee shall, if
required, give a written undertaking prior to the commencement of the leave to return to the
service of the Employer for a period of not less than the period of the leave granted.
If the employee:
a. fails to complete the course;
b. does not resume employment with the Employer on completion of the course;
or
c. ceases to be employed, except by reason of death or lay-off, before termination of the
period he or she has undertaken to serve after completion of the course;
the employee shall repay the Employer all allowances paid to him or her under this article during
the education leave or such lesser sum as shall be determined by the Employer.
Career development leave with pay
37.05
a. Career development refers to an activity which in the opinion of the Employer is likely to
be of assistance to the individual in furthering his or her career development and to the
organization in achieving its goals. The following activities shall be deemed to be part of
career development:
i.
a course given by the Employer;
ii.
a course offered by a recognized academic institution;
iii.
a seminar, convention or study session in a specialized field directly related to the
employee's work.
b. Upon written application by the employee, and with the approval of the Employer, career
development leave with pay may be given for any one of the activities described in
paragraph 37.05(a) above. The employee shall receive no compensation under Article 15
(hours of work and overtime) and Article 17 (travelling) of this collective agreement
during time spent on career development leave provided for in this clause.
c. Employees on career development leave shall be reimbursed for all reasonable travel and
other expenses incurred by them which the Employer may deem appropriate.
Examination leave with pay
37.06 At the Employer's discretion, examination leave with pay may be granted to an employee
for the purpose of writing an examination which takes place during the employee's scheduled
hours of work. Such leave will only be granted where, in the opinion of the Employer, the course
of study is directly related to the employee's duties or will improve his or her qualifications.
Article 38: discipline
38.01 When an employee is required to attend a meeting, the purpose of which is to conduct a
disciplinary hearing or to render a disciplinary decision, the employee is entitled to have a
representative of the Council attend the meeting. Where practicable, the employee shall receive a
minimum of two (2) days' notice of such meeting.
Article 39: contracting out
39.01 The Employer will continue past practice in giving all reasonable consideration to
continued employment in the public service of employees who would otherwise become
redundant because work is contracted out.
**Article 40: duration and renewal
40.01 Unless otherwise expressly stipulated, the provisions of this collective agreement shall
become effective on the date of signature of the collective agreement.
**
40.02 This collective agreement shall expire on December 31, 2022.
40.03 The provisions of this collective agreement shall be implemented by the parties within a
period of one hundred and twenty (120) days from the date of signing.
Signed at Ottawa, this 30th day of the month of August 2019.
The Treasury Board of Canada
Sandra Hassan
Ted Leindecker
Greg Enright
Craig O'Blenis
Capt(N) David Benoit
Derek Cann
Brandi Roberts
Lenny MacArthur
Tammy Moir
Adam Vickery
The Federal Government Dockyard Trades and Labour Council (East)
Jerome Ryan
Yves Fournier
Barry Ollerhead
John Hutchison
Fred Cox
Marty Stewart
Dan Lapham
Herbie Barron
Chris Johnson
Richard Walters
Paul Gaudet
Wayne Roode
Trevor Burton
**Appendix A
SR, Ship Repair (East) Group hourly rates of pay (all employees located on the
east coast)
I. Basic hourly rates of pay
Table legend
$) Effective January 1, 2018
X)* Effective January 1, 2019 – Wage adjustment
A)* Effective January 1, 2019
Y)* Effective January 1, 2020 – Wage adjustment
B)* Effective January 1, 2020
C) Effective January 1, 2021
D) Effective January 1, 2022
Pay group 1
Basic Hourly Rates of Pay (in dollars)
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
27.82
28.94
30.12
X) Effective January 1, 2019- Wage Adjustment*
28.04
29.17
30.36
A) January 1, 2019*
28.60
29.75
30.97
Y) Effective January 1, 2020 - Wage Adjustment*
28.66
29.81
31.03
B) January 1, 2020*
29.23
30.41
31.65
C) January 1, 2021
29.67
30.87
32.12
D) January 1, 2022
30.12
31.33
32.60
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 2
Basic hourly rates of pay (in dollars)
ELE-2 Trades Helper
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
29.18
30.40
31.60
X) Effective January 1, 2019- Wage Adjustment*
29.41
30.64
31.85
A) January 1, 2019*
30.00
31.25
32.49
Y) Effective January 1, 2020 - Wage Adjustment*
30.06
31.31
32.55
B) January 1, 2020*
30.66
31.94
33.20
C) January 1, 2021
31.12
32.42
33.70
D) January 1, 2022
31.59
32.91
34.21
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 3
Basic hourly rates of pay (in dollars)
MDO-4 Forklift Operator
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
30.91
32.14
33.41
X) Effective January 1, 2019- Wage Adjustment*
31.16
32.40
33.68
A) January 1, 2019*
31.78
33.05
34.35
Y) Effective January 1, 2020 - Wage Adjustment*
31.84
33.12
34.42
B) January 1, 2020*
32.48
33.78
35.11
C) January 1, 2021
32.97
34.29
35.64
D) January 1, 2022
33.46
34.80
36.17
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 4
Basic hourly rates of pay (in dollars)
MDO-5 Stationary Engineer Hoisting Plant Operator (OEBI) and Forklift
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
34.36
35.69
37.15
X) Effective January 1, 2019- Wage Adjustment*
34.63
35.98
37.45
A) January 1, 2019*
35.32
36.70
38.20
Y) Effective January 1, 2020 - Wage Adjustment*
35.39
36.77
38.28
B) January 1, 2020*
36.10
37.51
39.05
C) January 1, 2021
36.64
38.07
39.64
D) January 1, 2022
37.19
38.64
40.23
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 5
Basic hourly rates of pay (in dollars)
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
35.34
36.76
38.20
X) Effective January 1, 2019- Wage Adjustment*
35.62
37.05
38.51
A) January 1, 2019*
36.33
37.79
39.28
Y) Effective January 1, 2020 - Wage Adjustment*
36.40
37.87
39.36
B) January 1, 2020*
37.13
38.63
40.15
C) January 1, 2021
37.69
39.21
40.75
D) January 1, 2022
38.26
39.80
41.36
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 6
Basic hourly rates of pay (in dollars)
PRW-4 Sail and Canvas Worker
MAN-6 Marine Insulator
SPS-6 Chemical Treatment Technician
SPS-6 Marine Treatment Finishing Specialist
SPS-7 Metal Finisher Technician
PRW-6 Marine Survival Technician
MAN-7 Combination Welder
MDO-6 Stationary Engineer – Hoisting Plant Operator
PIP-8 Marine Pipefitter Coppersmith
PRW-8 Rigging
SMW-8 Sheet Metal Technician
WOW-8 Shipwright
BOB-9 Boiler & Plate Tech.
MAC-9 Machinist
MAM-9 Maintenance Mechanic (Refrig)
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
36.35
37.79
39.31
X) Effective January 1, 2019- Wage Adjustment*
36.64
38.09
39.62
A) January 1, 2019*
37.37
38.85
40.41
Y) Effective January 1, 2020 - Wage Adjustment*
37.44
38.93
40.49
B) January 1, 2020*
38.19
39.71
41.30
C) January 1, 2021
38.76
40.31
41.92
D) January 1, 2022
39.34
40.91
42.55
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 7
Basic hourly rates of pay (in dollars)
EEW-10 Marine/Industrial Electrical Tech.
EEW-10 Electronics Repairman
EME-10 Marine Mechanic Tech.
MAM-10 Maintenance Mechanic
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
36.73
38.17
39.71
X) Effective January 1, 2019- Wage Adjustment*
37.02
38.48
40.03
A) January 1, 2019*
37.76
39.25
40.83
Y) Effective January 1, 2020 - Wage Adjustment*
37.84
39.33
40.91
B) January 1, 2020*
38.60
40.12
41.73
C) January 1, 2021
39.18
40.72
42.36
D) January 1, 2022
39.77
41.33
43.00
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 8
Basic hourly rates of pay (in dollars)
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
37.22
38.74
40.27
X) Effective January 1, 2019- Wage Adjustment*
37.52
39.05
40.59
A) January 1, 2019*
38.27
39.83
41.40
Y) Effective January 1, 2020 - Wage Adjustment*
38.35
39.91
41.48
B) January 1, 2020*
39.12
40.71
42.31
C) January 1, 2021
39.71
41.32
42.94
D) January 1, 2022
40.31
41.94
43.58
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 9
Basic hourly rates of pay (in dollars)
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
37.73
39.22
40.83
X) Effective January 1, 2019- Wage Adjustment*
38.03
39.53
41.16
A) January 1, 2019*
38.79
40.32
41.98
Y) Effective January 1, 2020 - Wage Adjustment*
38.87
40.40
42.06
B) January 1, 2020*
39.65
41.21
42.90
C) January 1, 2021
40.24
41.83
43.54
D) January 1, 2022
40.84
42.46
44.19
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 10
Basic hourly rates of pay (in dollars)
MAN-8 Combination Welder (HP) (1)
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
38.41
39.94
41.56
X) Effective January 1, 2019- Wage Adjustment*
38.72
40.26
41.89
A) January 1, 2019*
39.49
41.07
42.73
Y) Effective January 1, 2020 - Wage Adjustment*
39.57
41.15
42.82
B) January 1, 2020*
40.36
41.97
43.68
C) January 1, 2021
40.97
42.60
44.34
D) January 1, 2022
41.58
43.24
45.01
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 11
Basic hourly rates of pay (in dollars)
MAC-11 Precision Tool & Die Maker
QCW-11 Dimensional Inspection
QCW-11 Quality Control
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
39.00
40.56
42.21
X) Effective January 1, 2019- Wage Adjustment*
39.31
40.88
42.55
A) January 1, 2019*
40.10
41.70
43.40
Y) Effective January 1, 2020 - Wage Adjustment*
40.18
41.78
43.49
B) January 1, 2020*
40.98
42.62
44.36
C) January 1, 2021
41.59
43.26
45.03
D) January 1, 2022
42.21
43.91
45.71
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay group 12
Basic hourly rates of pay (in dollars)
EEW-11 Electrical Systems Tech.
PLE-10 Planner & Scheduler
INM-11 Mech. Inst. Systems Tech.
EEW-11 Electronic Systems Tech. (2)
Effective Date
Step 1
Step 2
Step 3
$) January 1, 2018
39.43
41.01
42.64
X) Effective January 1, 2019- Wage Adjustment*
39.75
41.34
42.98
A) January 1, 2019*
40.55
42.17
43.84
Y) Effective January 1, 2020 - Wage Adjustment*
40.63
42.25
43.93
B) January 1, 2020*
41.44
43.10
44.81
C) January 1, 2021
42.06
43.75
45.48
D) January 1, 2022
42.69
44.41
46.16
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a.
Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Apprentices Period (3)
APA Apprentices 2 years (3)
Effective Date
Step 1
Step 2
Step 3
Step 4
$) January 1, 2018
29.09
30.91
32.71
34.57
X) Effective January 1, 2019- Wage Adjustment*
29.32
31.16
32.97
34.85
A) January 1, 2019*
29.91
31.78
33.63
35.55
Y) Effective January 1, 2020 - Wage Adjustment*
29.97
31.84
33.70
35.62
B) January 1, 2020*
30.57
32.48
34.37
36.33
C) January 1, 2021
31.03
32.97
34.89
36.87
D) January 1, 2022
31.50
33.46
35.41
37.42
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
APB Apprentices 3 years (3)
Effective Date
Step 1
Step 2
Step 3
Step 4
Step 5
Step 6
$) January 1, 2018
25.43
27.28
29.09
30.91
32.71
34.57
X) Effective January 1, 2019-
Wage Adjustment
25.63
27.50
29.32
31.16
32.97
34.85
A) January 1, 2019*
26.14
28.05
29.91
31.78
33.63
35.55
Y) Effective January 1, 2020 -
Wage Adjustment
26.19
28.11
29.97
31.84
33.70
35.62
B) January 1, 2020*
26.71
28.67
30.57
32.48
34.37
36.33
C) January 1, 2021
27.11
29.10
31.03
32.97
34.89
36.87
D) January 1, 2022
27.52
29.54
31.50
33.46
35.41
37.42
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
II. Supervisory Hourly Rates of Pay
The following hourly rates of pay for supervision will be paid in addition to the basic hourly
rates of pay specified in (I) above.
Pay group 1
Basic hourly rates of pay (in dollars)
Leadhand
Effective Date
Step 1
$) January 1, 2018
1.82
X) Effective January 1, 2019- Wage Adjustment*
1.83
A) January 1, 2019*
1.87
Y) Effective January 1, 2020 - Wage Adjustment*
1.87
B) January 1, 2020*
1.91
C) January 1, 2021
1.94
D) January 1, 2022
1.97
* Rates of pay will change within 180 days after the signing of the collective agreement. In accordance with
Appendix E, rates prior to the salary change will be paid as lump sum payments:
a. Year 1: Retroactive lump sum payment equal to a 2% economic increase and 0.8% wage adjustment for
a compounded total of 2.816%. Changes to the pay rates will not appear on employees' pay statements.
b. Year 2: Retroactive lump sum payment equal to Year 1 increases plus a 2% economic increase and a
0.2% wage adjustment for a compounded total of 5.082%. The revised pay rates will be reflected on the
employee's pay statements upon implementation of prospective salary increases.
Pay notes
1. The rate will be paid to the Welder (High Pressure) upon satisfactory completion of a High-
Pressure Welding test, and while remaining qualified.
2. The rate will be paid to an EEW-10 (Electronic Repairman) upon satisfactory completion of
an Electronic Systems trade test.
3. For Apprentices, subject to clause 25.04, all increment periods are for six (6) months with a
minimum of nine hundred (900) hours worked.
Apprenticeship progression will be based on a combination of satisfactory performance in a
six-month period, and the required hours.
If an apprentice is unable to meet the performance criteria resulting in a delayed increment,
this increment will be implemented immediately upon successfully meeting the performance
criteria. The completion date of the apprenticeship program will remain as stated in the
employee's letter of offer unless there is a requirement for make-up time to meet
industry/departmental standards.
The APA and APB sub-groups are being used only for pay purposes and not for
classification.
4. The pay increment date for an employee appointed to a position in the bargaining unit on
promotion, demotion or appointment from outside the public service, shall be every twelve
(12) month period, on the anniversary date of such appointment or the date on which the
employee received his or her last pay increment.
**Appendix "B”
Memorandum of Agreement on Supporting Employee Wellness
This memorandum of agreement is to give effect to the agreement reached between the
Employer and the bargaining agent (hereinafter referred to as “the parties”) regarding issues of
employee wellness. This MOA replaces the prior Employee Wellness MOA previously signed.
The parties have engaged in meaningful negotiations and co-development of comprehensive
EWSP language and program design to capture the key features and other recommendations
agreed to by the technical committee and steering committee, which is reflected in the Plan
Document agreed to by the parties on May 26, 2019.
The program and its principles focus on improving employee wellness and the reintegration of
employees into the workplace after periods of leave due to illness or injury. The previous MOA
identified the following key features:
•
contained in collective agreements;
•
benefits for up to 26 weeks (130 working days) with income support replacement
at 100%;
•
the annual allotment shall be 9 days of paid sick leave for illness or injury that falls
outside of the parameters of the EWSP;
•
100% income replacement during the 3 day (working) qualification period when the
employee's claim is approved;
•
qualifying chronic or episodic illnesses will be exempt of the waiting period;
•
the qualification period will be waived in cases of hospitalization or recurrence of a prior
illness or injury approved under EWSP within 30 days;
•
employees are entitled to carry over a maximum of 3 days of unused sick leave credits
remaining at the end of the fiscal year, for use in the following fiscal year;
•
the accumulation of current sick leave credits will cease once the EWSP is implemented.
Employees with banked sick leave in excess of 26 weeks, will be entitled to carry over
those excess days to provide extended coverage at 100% income replacement prior to
accessing LTD;
•
travel time for diagnosis and treatment;
•
internal case management and return-to-work services focused on supporting employees
when ill or injured;
•
an employee on EWSP will be considered to be on leave with pay;
•
full costs of administering the EWSP to be borne by Employer;
and
•
increase the quantum of family related leave by one (1) day.
The Plan Document approved on May 26, 2019, takes precedence over the principles, if there's a
difference in interpretation.
Process
The parties agree to continue the work of the TBS / Bargaining Agent Employee Wellness
Support Program (EWSP) Steering Committee, which will focus on finalizing a service delivery
model for program implementation, including its governance, for the improvement of employee
wellness and the reintegration of employees into the workplace after periods of leave due to
illness or injury.
As required, the Steering Committee will direct a sub-committee to make recommendations on
the overall implementation, service delivery and governance issues of the Program. As a first
priority, the Steering Committee will develop a planning framework with timelines to guide
work toward the timely implementation of the new EWSP. A governance model will be
developed taking in to account there will be only one (1) EWSP.
The Steering Committee will complete the necessary work on overall implementation, including
service delivery and governance issues no later than March 21, 2020, a date which can be moved
based on mutual agreement of the parties.
If accepted by the Steering Committee, the recommendation(s) concerning program
implementation, including service delivery and governance, as well as the proposal for the
EWSP itself, approval will be sought on these elements from the Treasury Board of Canada and
by the bargaining units.
If approved by both parties, the parties mutually consent to re-open the collective agreement to
vary the agreement only insofar as to include the EWSP wording, and include consequential
changes. No further items are to be varied through this reopener; the sole purpose will be EWSP-
related modifications. The EWSP Program would be included in the relevant collective
agreements only as a reopener.
Should the parties not be able to reach agreement on EWSP, the existing sick leave provisions, as
currently stipulated in collective agreements, will remain in force.
For greater certainty, this MOA forms part of the collective agreement.
Appendix “C”
Archived Provisions for the Elimination of Severance Pay for Voluntary
Separations (Resignation and Retirement)
This appendix is to reflect the language signed by the Employer and the Federal Government
Dockyard Trades and Labour Council (East) for the elimination of severance pay for voluntary
separations (resignation and retirement) on September 18, 2013. These historical provisions are
being reproduced to reflect the signed language in cases of deferred payment.
Article 14: severance pay
Effective September 18, 2013, clauses 14.03 and 14.04 are deleted from the collective
agreement.
14.01 For the purpose of this article, the terms:
a. "Employer” includes any organization, service with which is included in the
calculation of “continuous employment”;
b. “weekly rate of pay” means the employee's hourly rate of pay as set out in
Appendix "A" multiplied by forty (40) applying to the employee's classification, as
shown in the instrument of appointment.
14.02 Lay-off
Under the following circumstances and subject to clause 14.08, an employee with one (1) or
more years of continuous employment who is laid off after April 7, 1971, shall be paid severance
pay based on completed years of continuous employment, less any period within the period of
continuous employment in respect of which the employee was granted a termination of
employment benefit paid by the Employer. It shall be calculated at the rate of:
a. On the first (1st) lay-off, for the first (1st) year of continuous employment, two
(2) weeks' pay, or three (3) weeks' pay for employees with ten (10) or more and less than
twenty (20) years of continuous employment, or four (4) weeks' pay for employees with
twenty (20) or more years of continuous employment, plus one (1) week's pay for each
succeeding completed year of continuous employment, and in the case of a partial year of
continuous employment, one (1) week's pay multiplied by the number of days of
continuous employment divided by three hundred and sixty-five (365).
b. On the second (2nd) or subsequent lay-off, one (1) week's pay for each complete year of
continuous employment and, in the case of a partial year of continuous employment, one
(1) week's pay multiplied by the number of days of continuous employment divided by
three hundred and sixty-five (365), less any period in respect of which the employee was
granted severance pay under paragraph 14.02(a).
14.03 Resignation
An employee who has ten (10) or more years of continuous employment on resignation shall be
paid severance pay calculated by multiplying half the employee's weekly rate of pay on
resignation by the number of completed years of continuous employment to a maximum of
twenty-six (26) years, less any period within that period of continuous employment in respect of
which the employee was granted a termination of employment benefit paid by the Employer.
14.04 Retirement
An employee who is entitled to an immediate annuity or an immediate annual allowance under
the Public Service Superannuation Act, or who has five (5) years of continuous employment and
who has attained the age of fifty-five (55) years and has resigned, shall be paid severance pay
calculated by multiplying the employee's weekly rate of pay on termination of employment by
the number of completed years of continuous employment to a maximum of thirty (30) years,
less any period within that period of continuous employment in respect of which the employee
was granted a termination of employment benefit paid by the Employer. In the case of a partial
year of continuous employment, one (1) week's pay multiplied by the number of days of
continuous employment divided by three hundred and sixty-five (365).
14.05 Death
If an employee dies, there shall be paid to the employee's estate a severance payment in respect
of the employee's complete period of continuous employment, comprised of one (1) week's pay
for each complete year of continuous employment and, in the case of a partial year of continuous
employment, one (1) week's pay multiplied by the number of days of continuous employment
divided by three hundred and sixty-five (365), to a maximum of thirty (30) weeks' pay,
regardless of any other benefit payable.
14.06 Termination for cause for reasons of incapacity
When an employee ceases to be employed by reason of termination for cause for reason of
incapacity pursuant to paragraph 12(1)(e) of the Financial Administration Act, one (1) week's
pay for each complete year of continuous employment with a maximum benefit of twenty-eight
(28) weeks.
14.07 Rejection on probation
An employee with two (2) or more years of continuous employment who ceases to be employed
for reasons of rejection during the employee's probationary period immediately following a
second or subsequent appointment shall be paid severance pay calculated by multiplying the
employee's weekly rate of pay on rejection during probation by the number of completed years
of continuous employment to a maximum of twenty-seven (27) years less any period within that
period of continuous employment in respect of which the employee was granted a termination of
employment benefit paid by the Employer.
14.08 Continuous employment
The period of continuous employment used in the calculation of severance benefits payable to an
employee under this article shall be reduced by any period of continuous employment in respect
of which the employee was already granted any type of termination benefit. Under no
circumstances shall the maximum severance pay provided under this article be pyramided.
For greater certainty, payments made pursuant to clauses 14.10 to 14.13 or similar provisions in
other collective agreements shall be considered as a termination benefit for the administration of
clause 14.08.
14.09 Appointment to a separate agency
An employee who resigns to accept an appointment with an organization listed in Schedule V of
the Financial Administration Act shall be paid all severance payments resulting from the
application of clause 14.03 (prior to September 18, 2013) or clauses 14.10 to 14.13 (commencing
on September 18, 2013).
14.10 Severance termination
a. Subject to clause 14.08 above, indeterminate employees on September 18, 2013, shall
be entitled to severance termination benefits equal to one (1) week's pay for each
complete year of continuous employment and, in the case of a partial year of
continuous employment, one (1) week's pay multiplied by the number of days of
continuous employment divided by three hundred and sixty-five (365), to a maximum
of thirty (30) weeks.
b. Subject to clause 14.08 above, term employees on September 18, 2013, shall be
entitled to severance termination benefits equal to one (1) week's pay for each
complete year of continuous employment, to a maximum of thirty (30) weeks.
Terms of payment
14.11 Options
The amount to which an employee is entitled shall be paid, at the employee's discretion, either:
a. as a single payment at the rate of pay of the employee's substantive position as of
September 18, 2013,
or
b. as a single payment at the time of the employee's termination of employment from the
core public administration, based on the rate of pay of the employee's substantive
position at the date of termination of employment from the core public administration,
or
c. as a combination of (a) and (b), pursuant to paragraph 14.12(c).
14.12 Selection of option
a. The Employer will advise the employee of his or her years of continuous employment
no later than three (3) months following the date of signing of the arbitral award.
b. The employee shall advise the Employer of the term of payment option selected within
six (6) months from the date of the arbitral award.
c.
The employee who opts for the option described in paragraph 14.11(c) must specify
the number of complete weeks to be paid out pursuant to paragraph 14.11(a) and the
remainder shall be paid out pursuant to paragraph 14.11(b).
d. An employee who does not make a selection under paragraph 14.12(b) will be deemed
to have chosen option paragraph 14.11(b).
14.13 Appointment from a different bargaining unit
This clause applies in a situation where an employee is appointed into a position in the SR-E
bargaining unit from a position outside the SR-E bargaining unit where, at the date of
appointment, provisions similar to those in clauses 14.03 and 14.04 are still in force, unless the
appointment is only on an acting basis.
a. Subject to clause 14.08 above, on the date an indeterminate employee becomes subject
to this agreement after September 18, 2013, he or she shall be entitled to severance
termination benefits equal to one (1) week's pay for each complete year of continuous
employment and, in the case of a partial year of continuous employment, one
(1) week's pay multiplied by the number of days of continuous employment divided by
three hundred and sixty-five (365), to a maximum of thirty (30) weeks, based on the
employee's rate of pay of his substantive position on the day preceding the
appointment.
b. Subject to clause 14.08 above, on the date a term employee becomes subject to this
agreement after September 18, 2013, he or she shall be entitled to severance
termination benefits equal to one (1) week's pay for each complete year of continuous
employment, to a maximum of thirty (30) weeks, based on the employee's rate of pay
of his substantive position on the day preceding the appointment.
c. An employee entitled to severance termination benefits under paragraph (a) or (b) shall
have the same choice of options outlined in clause 14.11, however the selection of
which option must be made within three (3) months of being appointed to the
bargaining unit.
d. An employee who does not make a selection under paragraph 14.13(c) will be deemed
to have chosen option paragraph 14.11(b).
**Appendix "D”
Memorandum of Understanding Between the Treasury Board of Canada and the
Federal Government Dockyard Trades and Labour Council (East) With Respect to
Gender-Inclusive Language
This memorandum is to give effect to the agreement reached between the Treasury Board of
Canada and the Federal Government Dockyard Trades and Labour Council (East) regarding the
review of language in the Council collective agreement.
Both parties are committed to and support gender neutrality and inclusivity. To that end, the
parties commit to, during the life of the above-noted collective agreements, establishing a Joint
Committee to review the collective agreements to identify opportunities to render the language
more gender-inclusive. The parties agree that any changes in language will not result in changes
in application, scope or value.
Both parties acknowledge that gender inclusivity is more difficult to achieve in the French
language compared to the English language, but are committed nonetheless to further supporting
and increasing gender neutrality and inclusivity in the collective agreement.
The Joint Committee agrees to begin their work in 2020 and will endeavour to finalize the
review by December 2022. These timelines may be extended by mutual agreement.
**Appendix “E”
Memorandum of Understanding Between the Treasury Board of Canada and the
Federal Government Dockyard Trades and Labour Council (East) With Respect to
Implementation of the Collective Agreement
Notwithstanding the provisions of Article 25 on the calculation of retroactive payments and
Article 40 on the collective agreement implementation period, this memorandum is to give effect
to the understanding reached between the Employer and the Federal Government Dockyard
Trades and Labour Council (East) regarding a modified approach to the calculation and
administration of retroactive payments for the current round of negotiations.
1. Calculation of retroactive payments
a.
Retroactive calculations that determine amounts payable to employees for a retroactive
period shall be made based on all transactions that have been entered into the pay
system up to the date on which the historical salary records for the retroactive period
are retrieved for the calculation of the retroactive payment.
b. Retroactive amounts will be calculated by applying the relevant percentage increases
indicated in the collective agreement rather than based on pay tables in agreement
annexes. The value of the retroactive payment will differ from that calculated using the
traditional approach, as no rounding will be applied. The payment of retroactive
amount will not affect pension entitlements or contributions relative to previous
methods, except in respect of the rounding differences.
c.
Elements of salary traditionally included in the calculation of retroactivity will
continue to be included in the retroactive payment calculation and administration, and
will maintain their pensionable status as applicable. The elements of salary included in
the historical salary records and therefore included in the calculation of retroactivity
include:
•
substantive salary
•
promotions
•
deployments
•
acting pay
•
extra duty pay / overtime
•
additional hours worked
•
maternity leave allowance
•
parental leave allowance
•
vacation leave and extra duty pay cash-out
•
severance pay
•
salary for the month of death
•
Transition Support Measure
•
eligible allowances and supplemental salary depending on collective agreement
d. The payment of retroactive amounts related to transactions that have not been entered
in the pay system as of the date when the historical salary records are retrieved, such
as acting pay, promotions, overtime and/or deployments, will not be considered in
determining whether an agreement has been implemented.
e.
Any outstanding pay transactions will be processed once they are entered into the pay
system and any retroactive payment from the collective agreement will be issued to
impacted employees.
2. Implementation
a.
The effective dates for economic increases will be specified in the agreement. Other
provisions of the collective agreement will be effective as follows:
i.
All components of the agreement unrelated to pay administration will come into
force on signature of agreement.
ii.
Changes to existing compensation elements and new compensation elements such
as premiums, allowances, insurance premiums and coverage and changes to
overtime rates will become effective within one hundred and eighty (180) days
after signature of agreement, on the date at which prospective elements of
compensation increases will be implemented under 2(b)(i).
iii.
Payment of premiums, allowances, insurance premiums and coverage and
overtime rates in the collective agreement will continue to be paid until changes
come in to force as stipulated in 2(a)(ii).
b. Collective agreement will be implemented over the following timeframes:
i.
The prospective elements of compensation increases (such as prospective salary
rate changes and other compensation elements such as premiums, allowances,
changes to overtime rates) will be implemented within one hundred and eighty
(180) days after signature of agreement where there is no need for manual
intervention.
ii.
Retroactive amounts payable to employees will be implemented within one
hundred and eighty (180) days after signature of the agreement where there is no
need for manual intervention.
iii.
Prospective compensation increases and retroactive amounts that require manual
processing by compensation advisors will be implemented within five hundred
and sixty (560) days after signature of agreement. Manual intervention is
generally required for employees on an extended period of leave without pay
(e.g., maternity/parental leave), salary protected employees and those with
transactions such as leave with income averaging, pre-retirement transition leave
and employees paid below minimum, above maximum or in between steps.
Manual intervention may also be required for specific accounts with complex
salary history.
3. Employee recourse
a. An employee who is in the bargaining unit for all or part of the period between the first
day of the collective agreement (i.e., the day after the expiry of the previous collective
agreement) and the signature date of the collective agreement will be entitled to a non-
pensionable amount of four hundred dollars ($400) payable within one hundred and
eighty (180) days of signature, in recognition of extended implementation timeframes and
the significant number of transactions that have not been entered in the pay system as of
the date when the historical salary records are retrieved.
b. Employees in the bargaining unit for whom the collective agreement is not implemented
within one hundred and eighty-one (181) days after signature will be entitled to a fifty-
dollar ($50) non-pensionable amount; these employees will be entitled to an additional
fifty-dollar ($50) non-pensionable amount for every subsequent complete period of
ninety (90) days their collective agreement is not implemented, to a total maximum of
nine (9) payments. These amounts will be included in their final retroactive payment. For
greater certainty, the total maximum amount payable under this paragraph is four hundred
and fifty dollars ($450).
c. If an employee is eligible for compensation in respect of section 3 under more than one
collective agreement, the following applies: the employee shall receive only one non-
pensionable amount of four hundred dollars ($400); for any period under 3(b), the
employee may receive one fifty dollar ($50) payment, to a maximum total payment of
four hundred and fifty dollars ($450).
d. Should the Employer negotiate higher amounts for 3(a) or 3(b) with any other bargaining
agent representing core public administration employees, it will compensate FGDTLC
(EAST) members for the difference in an administratively feasible manner.
e. Late implementation of the 2018 collective agreements will not create any entitlements
pursuant to the agreement between the CPA bargaining agents and the Treasury Board of
Canada with regard to damages caused by the Phoenix pay system.
f. Employees for whom collective agreement implementation requires manual intervention
will be notified of the delay within one hundred and eighty (180) days after signature of
the agreement.
g. Employees will be provided a detailed breakdown of the retroactive payments received
and may request that the departmental compensation unit or the Public Service Pay
Centre verify the calculation of their retroactive payments, where they believe these
amounts are incorrect. The Employer will consult with the Council regarding the format
of the detailed breakdown.
h. In such a circumstance, for employees in organizations serviced by the Pay Centre, they
must first complete a Phoenix feedback form indicating what period they believe is
missing from their pay.
**Appendix "F”
Memorandum of Understanding Between the Treasury Board of Canada and the
Federal Government Dockyard Trades and Labour Council (East) With Respect to
Workplace Harassment
This memorandum is to give effect to the agreement reached between the Treasury Board and
the Federal Government Dockyard Trades and Labour Council (East).
Both parties share the objective of creating healthy work environments that are free from
harassment and violence. In the context of the passage of Bill C-65 An Act to amend the Canada
Labour Code by the Government of Canada, as well as the Clerk of the Privy Council's initiative
to take action to eliminate workplace harassment, the Treasury Board is developing a new
directive covering both harassment and violence situations.
During this process, the Treasury Board will consult with the members of National Joint Council
(NJC) on the following:
•
mechanisms to guide and support employees through the harassment resolution process;
•
redress for the detrimental impacts on an employee resulting from an incident of
harassment;
and
•
ensuring that employees can report harassment without fear of reprisal.
The Employer also agrees to hold bilateral discussion with the Council if the Council requests it.
Any report resulting from these discussions will be shared with the NJC.
The implementation and application of this directive do not fall within the purview of this MOU
or the collective agreement.
This memorandum expires upon issuance of the new directive or December 31, 2022, whichever
comes first.
Letter of Understanding (17-1)
Mr. Lorne Brown
National President
Federal Government Dockyard Trades
and Labour Council (East)
Building D-126
Fleet Maintenance Facility Cape Scott
P.O. Box 99000 Stn Forces
Halifax, Nova Scotia
B3K 5X5
Dear Mr. Brown:
Subject: vehicle/liability
This will confirm that the Employer will, subject to this letter, waive its claim against any
employee in the bargaining unit for reimbursement of damages paid by it to a third party for
bodily injury, death or property damage caused by an accident involving a motor vehicle owned
or rented by the Employer and driven by the employee in the normal course of performing
his/her duties.
The Employer agrees to indemnify an employee in the bargaining unit against any liability
imposed upon him/her, by a court of competent jurisdiction, to pay any damages arising from
bodily injury, death or property damage suffered by a third party and caused by an accident
which occurs while the employee is driving a motor vehicle owned or rented by the Employer,
while in the normal course of performing his/her duties. No employee in the bargaining unit will
be eligible for such indemnification, unless he/she has, prior to the occurrence of such an
accident, executed and delivered to the Employer, an instrument in writing in a form acceptable
to the Employer, having the following effect:
1. constituting and appointing the Employer as irrevocable attorney to appear and defend
in any court of competent jurisdiction in which an action is brought against him/her
claiming damages allegedly arising out of such an accident,
and
2. authorizing the Employer to conduct all negotiations in respect of such damages and to
effect any settlement relating to the payment thereof.
None of the undertakings described in this letter will apply where the accident occurred while the
employee was driving a vehicle owned or rented by the Employer outside the scope of his/her
employment.
This letter of understanding will expire on December 31, 2022.
`,Jp=`
Treasury Board of Canada Secrétariat du Conseil du Trésor
Secretariat
du Canada
Ship Repair (all Chargehand and Production Supervisor employees located on the East Coast) (SR(C))
Agreement Between the Treasury Board and the Federal Government Dockyard Chargehands Association
Group: Ship Repair (all Chargehand and Production Supervisor employees located on the East Coast)
(All Employees)
Code: 663
Expiry date: 2026-03-31
Part I: general
Article 1: purpose of agreement
Article 2: interpretation and definitions
Article 3: conflict between future legislation and the collective agreement
Article 4: application
Article 5: managerial responsibilities
Part II: working conditions
Article 6: hours of work and overtime
Article 7: call-back pay
Article 8: designated paid holidays
Article 9: travelling
Article 10: leave, general
Article 11: vacation leave with pay
Article 12: sick leave with pay
**Article 13: other types of leave with or without pay
Article 14: severance pay
Article 15: statement of duties
Article 16: safety and health
Article 17: technological change
Article 18: shift premium
Article 19: loss of personal effects
Article 20: tools
Part III: staff relations matters
Article 21: Association representation
Article 22: Association security
Article 23: illegal strikes
**Article 24: grievance procedure
Article 25: notice to amend or renew the collective agreement
Article 26: joint consultation
Article 27: National Joint Council agreements
Article 28: recognition
Part IV: other terms and conditions
Article 29: employee performance review and employee files
Article 30: sexual harassment
**Article 31: no discrimination
Part V: pay and duration
Article 32: pay
Article 33: agreement reopener
Article 34: contracting out
Article 35: duration and renewal
**Appendix A: SR(C) Ship Repair Chargehands and Production Supervisors, East, annual rates of pay (in dollars)
**Appendix B: Archived provisions for the elimination of severance pay for voluntary separations (resignation and retirement)
**Appendix C: Memorandum of agreement on supporting employee wellness
**Appendix D: Memorandum of understanding between the Treasury Board of Canada and the Federal Government Dockyard Chargehands Association with respect to gender-inclusive language
**Appendix E: Memorandum of understanding with respect to implementation of the collective agreement
**Appendix F: Memorandum of understanding between the Treasury Board of Canada and the Federal Government Dockyard Chargehands Association with respect to workplace harassment
**Appendix G: Memorandum of understanding between the Treasury Board of Canada and the Federal Government Dockyard Chargehands Association with respect to leave for union business: cost recovery
**Appendix H: Memorandum of understanding with respect to telework
Part I: general
Article 1: purpose of agreement
1.01 The purpose of this agreement is to maintain harmonious relationships between the Employer, the Association and the employees and to set forth herein the terms and conditions of employment upon which agreement has been reached through collective bargaining.
Article 2: interpretation and definitions
2.01 For the purpose of this agreement,
a. "Association” (« Association »)
means the Federal Government Dockyard Chargehands Association
b. "bargaining unit” (« unité de négociation »)
means all chargehands, and production supervisor employees of the Employer in the Ship Repair Group of the Operational Category located on the east coast as described in the certificate issued by the former Public Service Labour Relations Board on May 20, 1999
c. “common-law partner”(« conjoint de fait »)
in relation to an individual, means a person who is cohabiting with the individual in a conjugal relationship, having so cohabited for a period of at least one year
d. "continuous employment” (« emploi continu »)
has the same meaning as specified in the Directive on Terms and Conditions of Employment
e. "daily rate of pay” (« taux de rémunération journalier »)
means an employee's weekly rate of pay divided by five (5)
f. "day"(« journée »)
means a twenty-four (24) hour period:
i. commencing at 23:45 and ending at 23:45 the following day for employees subject to paragraph 6.02(a),
ii. commencing at 00:00 and ending at 24:00 for employees subject to paragraph 6.02(b),
and
iii. commencing at 00:15 and ending at 00:15 hours the following day for employees subject to paragraph 6.02(c).
g. "double time” (« tarif double »)
means two (2) times the straight-time rate
h. "employee” (« employé »)
means an employee as defined in the Federal Public Sector Labour Relations Act and who is a member of the Ship Repair Chargehands bargaining unit
i. "Employer” (« employeur »)
except as specifically provided in clause 14.01, means Her Majesty in right of Canada as represented by the Treasury Board, and includes any person authorized to exercise the authority of the Treasury Board
j. “harbour limits” (« limites du port »)
means an East-West line of 063 degrees (true) from York Redoubt through Maughers Beach on McNabbs Island. The area north of this line constitutes the Halifax harbour area and includes Bedford Basin
k. "holiday pay” (« rémunération de jour férié »)
means eight (8) hours' pay
l. “hourly rate of pay” (« taux de rémunération horaire »)
means the employee's weekly rate of pay divided by forty (40)
m. “layoff”(« personne licenciée »)
means an employee whose employment has been terminated because of lack of work or because of the discontinuance of a function
n. "leave” (« congé »)
means authorized absence from duty by an employee during the employee's regular or normal hours of work
o. “overtime” (« travail supplémentaire »)
means time worked by an employee outside of the employee's regularly scheduled hours
p. “pay” (« rémunération »)
means basic rates of pay as specified in Appendix “A,” and does not include shift premium
q. "sea trials” (« essais en mer »)
means trials conducted outside the harbour limits
r. "straight-time rate” (« taux des heures normales »)
means the hourly rate of pay
s. "triple time” (« tarif triple »)
means three (3) times the straight-time rate
t. "weekly rate of pay” (« taux de rémunération hebdomadaire »)
means an employee's annual rate of pay divided by 52.176
2.02 Except as otherwise provided in this agreement, expressions used in this agreement
a. if defined in the Federal Public Sector Labour Relations Act, have the same meaning as given to them in that act;
b. if defined in the Interpretation Act, but not defined in the Federal Public Sector Labour Relations Act, have the same meaning as given to them in the Interpretation Act.
Article 3: conflict between future legislation and the collective agreement
3.01 If any law now in force or enacted during the term of this agreement renders null and void any provision of this agreement, the remaining provisions shall remain in effect for the term of the agreement. The parties shall thereupon seek to negotiate substitute provisions which are in conformity with the applicable law.
3.02 In the event that there is a conflict between the contents of this agreement and any regulation except as provided under section 113 of the Federal Public Sector Labour Relations Act, this agreement shall take precedence over the said regulation.
Article 4: application
4.01 The provisions of this agreement apply to the Association, employees and the Employer.
4.02 Both the English and French texts of this agreement shall be official.
Article 5: managerial responsibilities
5.01 The Association recognizes and acknowledges that the Employer has and shall retain the exclusive right and responsibility to manage its operation in all respects and it is expressly understood that all such rights and responsibilities not specifically covered or modified by this agreement shall remain the exclusive rights and responsibilities of the Employer.
Such rights will not be exercised in a manner inconsistent with the expressed provisions of this agreement.
5.02 This article will not restrict the right of an employee to submit a grievance in accordance with the Federal Public Sector Labour Relations Act.
Part II: working conditions
Article 6: hours of work and overtime
6.01 Hours of work
a. The hours of work shall be forty (40) hours per week and eight (8) hours per day
b. The workweek and workdays shall be:
i. from Sunday 23:45 to Friday 23:45 inclusive for employees subject to paragraph 6.02(a),
ii. from Monday to Friday inclusive for employees subject to paragraph 6.02(b),
iii. from Monday 00:15 to Saturday 00:15 inclusive for employees subject to paragraph 6.02(c).
c. The first and second days of rest shall be:
i. from Friday 23:45 to Saturday 23:45 and from Saturday 23:45 to Sunday 23:45 respectively for employees subject to paragraph 6.02(a),
ii. Saturday and Sunday respectively for employees subject to paragraph 6.02(b),
iii. from Saturday 00:15 to Sunday 00:15 and from Sunday 00:15 to Monday 00:15 respectively for employees subject to paragraph 6.02(c).
6.02 The hours of work shall be scheduled as follows:
a. the first (night) shift shall be from 23:45 to 08:15 with an unpaid meal period from 03:45 to 04:15;
b. the second (day) shift shall be from 07:45 to 16:15 with an unpaid meal period from 12:00 to 12:30;
c. the third (evening) shift shall be from 15:45 to 00:15 with an unpaid meal period from 19:45 to 20:15.
6.03 Notwithstanding the provisions of clause 6.02, the Association recognizes the requirement for certain employees to regularly report for work and to cease work at different hours than those established in clause 6.02, and the Employer agrees to discuss, and to inform the Association in writing of such changes in working hours before implementing them.
6.04 The hours of work described in clauses 6.01 and 6.02 shall not be construed as a guarantee of a minimum or of a maximum hours of work.
6.05 An employee may be transferred from one shift to another within a workday subject to the application of clause 6.10.
6.06 Notwithstanding the provisions of clause 6.02:
a. An employee who works on the first (night) or third (evening) shift:
i. on three (3) or more consecutive workdays within a workweek,
or
ii. on the first or on the first and second workdays in a workweek following a full workweek on the first (night) or third (evening) shift,
or
iii. on the last or on the last and next-to-last workdays in a workweek preceding a full workweek on the first (night) or third (evening) shift,
shall receive a shift premium as specified in clause 18.01.
For the purpose of paragraph 6.06(a), an employee on leave during the days referred to in paragraph 6.06(a) shall not be considered as breaking the consecutive workday or full workweek requirement of that clause.
For the purpose of subparagraph 6.06(a)(i), a paid holiday shall not be considered as breaking the consecutive workday requirement providing three (3) days of shift work are scheduled.
Where shift work is scheduled for a full workweek which includes a designated paid holiday, the holiday shall not affect the requirements of a full workweek referred to in subparagraphs 6.06(a)(ii) and (iii).
b. An employee who works on the first or third shift, other than as described in paragraph 6.06(a) shall be paid at double (2) time rate for each hour so worked and no shift premium shall be paid
6.07 The Employer will schedule shift work only when necessary. On the occasion of shift on a project the Employer will give to the employees and Association as much notice as practicable prior to the commencement of shift work.
6.08 When a Monday or Tuesday shift is scheduled, employees will be notified by the end of their shift on the preceding Friday. When a Wednesday shift is scheduled, employees will be notified by the end of their shift on the preceding Monday. When a Thursday shift is scheduled, employees will be notified by the end of their shift on the preceding Tuesday. When a Friday shift is scheduled, employees will be notified by the end of their shift on the preceding Wednesday.
6.09 Overtime
The Employer will make every reasonable effort:
a. to distribute overtime fairly among available qualified employees;
b. to give at least four (4) hours' advance notice to employees who are required to work overtime;
c. to keep overtime to a minimum.
6.10 Overtime compensation
Subject to clause 6.14, overtime shall be compensated at the following rates:
a. double (2) time for all hours worked in excess of eight (8) hours in a continuous period of work or in excess of eight (8) hours in a day to a maximum of sixteen (16) hours in a continuous period of work; and for all hours worked on a day of rest to a maximum of sixteen (16) hours;
b. triple (3) time for each hour worked in excess of sixteen (16) hours in a continuous period of work or in excess of sixteen (16) hours in any twenty-four (24) hour period, and for all hours worked by an employee who is recalled to work before the expiration of the nine (9) hour period referred to in clause 6.11.
6.11 Subject to clause 6.12, an employee who works for a period of fifteen (15) hours or more in a twenty-four (24) hour period shall not report on his or her next regular scheduled shift until nine (9) hours has elapsed from the end of the previous working period unless otherwise informed by his or her supervisor. If, in the application of this clause, an employee works less than his or her next full shift, the employee shall, nevertheless, receive eight (8) hours' regular pay.
6.12 An employee will not work more than fifteen (15) hours in a twenty-four (24) hour period except where operational requirements dictate otherwise.
6.13 When an employee is required to report for pre-scheduled overtime and reports to work on a designated paid holiday which is not the employee's scheduled day of work, or on the employee's day of rest, the employee shall be paid the greater of:
a. compensation at the applicable overtime rate for all hours worked,
or
b. compensation equivalent to four (4) hours' pay at the employee's hourly rate of pay,
except that the minimum of four (4) hours' pay shall apply the first time only an employee is required to report for pre-scheduled overtime during a period of eight (8) hours, starting with the employee's first reporting.
6.14 An employee is entitled to overtime compensation for each completed six (6) minute period of overtime worked by him/her.
6.15 When management requires an employee to work through his or her regular meal period, the employee shall be paid at the applicable overtime rate for the period worked therein, and the employee shall be given time off with pay to eat.
6.16
a. Notwithstanding the provisions of clauses 6.10 and 9.03, an employee may request, in lieu of overtime payment, compensatory leave with pay for a maximum credit equivalent to one hundred and twenty (120) hours straight-time pay in a fiscal year. Approval of the Employer shall not be unreasonably withheld.
b. The rate of pay to which an employee is entitled during such leave shall be based on the employee's hourly rate of pay as calculated from the classification prescribed in the employee's certificate of appointment in the employee's substantive position on the day immediately prior to the day on which leave is taken.
c. The Employer shall grant compensatory leave at times convenient to both the employee and the Employer.
d. Accumulated compensatory leave not used by March 31 of each year shall normally be paid in cash. Such leave may by mutual agreement be carried over to the following leave year.
6.17 Rest periods
The Employer shall schedule two (2) rest periods of ten (10) minutes each during each full shift.
6.18 Overtime meal allowance
a. A meal allowance of twelve dollars and fifty cents ($12.50) will be paid:
i. to an employee who is not advised prior to mid-shift that he/she will be required to work overtime and provided the employee works for three (3) hours, commencing not more than one (1) hour following the employee's normal quitting time;
ii. to an employee who is required to work at least three (3) hours immediately preceding the employee's normal starting time;
iii. after an employee has worked an initial period of three (3) hours overtime, for each subsequent four (4) hour period of overtime worked;
iv. to an employee who has been recalled to work as provided in clause 7.01 for each four (4) hour period of overtime worked;
and
v. to an employee who has been advised that he/she is required to work overtime commencing not more than one (1) hour following the normal quitting time and is subsequently advised after mid-shift that he/she is not required to work.
b. Except as provided in subparagraph 6.18(a)(iv), an employee who works overtime on days of rest or holidays is not entitled to a meal allowance for the first eight (8) hours worked. A meal allowance of twelve dollars and fifty cents ($12.50) will be paid for each subsequent four (4) hour period of overtime worked.
c. The provisions of paragraphs 6.18(a) and (b) will not apply to employees assigned to sea trials where meals are provided without charge to the employees during periods described in paragraphs 6.18(a) and (b).
Article 7: call-back pay
7.01 When an employee is called back to work overtime after he/she has left the Employer's premises:
a. on a designated paid holiday which is not an employee scheduled day of work,
or
b. on an employee's day of rest,
or
c. after the employee has completed his or her work for the day, and returns to work the employee shall be paid the greater of:
i. compensation at the applicable overtime rate for time worked,
or
ii. compensation equivalent to four (4) hours' pay at the straight-time rate,
provided that the period worked by the employee is not contiguous to the employee's scheduled shift and the employee was not notified of such overtime requirement prior to completing his or her last period of work.
7.02 Other than when required by the Employer to operate a vehicle of the Employer for transportation to a work location other than the employee's normal place of work, time spent by the employee reporting to work or returning to the employee's residence shall not constitute time worked.
7.03 An employee who receives a call to duty or responds to a telephone or data line call after completing his or her work for the day and leaving his or her place of work may, at the discretion of the Employer, work at the employee's residence or at another place to which the Employer agrees, and receive compensation for time worked in accordance with the overtime article. In such instances, employees shall not be entitled to the minimum compensation under subparagraph 7.01(c)(ii).
7.04 Compensation under this article is not to be construed as different from or additional to overtime pay, but shall be construed as establishing minimum compensation to be paid.
Article 8: designated paid holidays
8.01 Subject to clause 8.02, the following days shall be designated paid holidays:
a. New Year's Day,
b. Good Friday,
c. Easter Monday,
d. the day fixed by proclamation of the Governor in Council for celebration of the Sovereign's birthday,
e. National Day for Truth and Reconciliation,
f. Canada Day,
g. Labour Day,
h. the day fixed by proclamation of the Governor in Council as a general day of Thanksgiving,
i. Remembrance Day,
j. Christmas Day,
k. Boxing Day,
l. one additional day in each year that, in the opinion of the Employer, is recognized to be a provincial or civic holiday in the area in which the employee is employed or in any area where, in the opinion of the Employer, no such day is recognized as a provincial or civic holiday, the first Monday in August,
and
m. one additional day when proclaimed by an act of Parliament as a national holiday.
8.02 Clause 8.01 applies only to an employee who is entitled to pay for at least ten (10) days during the thirty (30) calendar days immediately preceding the holiday.
8.03 Holiday falling on a day of rest
When a day designated as a holiday under clause 8.01 coincides with an employee's day of rest, the holiday shall be moved to the employee's next scheduled working day or to the second scheduled workday if the employee would otherwise lose credit for the holiday.
8.04 When a day designated as a holiday for an employee is moved to another day under the provisions of clause 8.03,
a. work performed by an employee on the day from which the holiday was moved shall be considered as work performed on a day of rest,
and
b. work performed by an employee on the day to which the holiday was moved, shall be considered as work performed on a holiday.
8.05 Compensation for work on a holiday
Where an employee works on a holiday the employee shall be paid at the following rates:
a. holiday pay plus double time for the first eight (8) hours of work,
b. triple time for hours worked in excess of eight (8).
The compensation that the employee would have been granted as holiday pay had the employee not worked on a designated paid holiday is eight (8) hours remunerated at straight time.
8.06 Holiday coinciding with a day of paid leave
Where a day that is a designated holiday for an employee falls within a period of leave with pay, the holiday shall not count as a day of leave.
Article 9: travelling
9.01 No employee shall be required by the Employer to use his or her own car for government business.
9.02
a. Where an employee is required by the Employer to work at a point outside the employee's headquarters area, the employee shall be reimbursed for reasonable expenses as defined by the Employer.
b. When an employee is required by the Employer to travel to points within the headquarters area, the employee shall be paid a kilometric rate or transportation expenses at the rate paid by the Employer.
c. When an employee travels through more than one (1) time zone, computation will be made as if he had remained in the time zone of the point of origin for continuous travel and in the time zone of each point of overnight stay after the first day of travel.
9.03 Where an employee is required by the Employer to travel to a point away from the employee's normal place of work, the employee shall be compensated as follows:
a. on any day on which the employee travels but does not work, at the applicable straight-time or overtime rate for the hours travelled, but the total amount shall not exceed fifteen (15) hours' straight time.
b. on a normal workday in which the employee travels and works:
i. during the employee's regular scheduled hours of work at the straight-time rate not exceeding eight (8) hours' pay,
ii. at the applicable overtime rate for all time worked outside the employee's regular scheduled hours of work,
iii. at the applicable overtime rate for all travel outside the employee's regular scheduled hours of work to a maximum of fifteen (15) hours' pay at straight time in any twenty-four (24) hour period.
c. on a rest day on which the employee travels and works, at the applicable overtime rate:
i. for travel time, in an amount not exceeding fifteen (15) hours straight-time pay,
and
ii. for all time worked.
d. notwithstanding the limitations stated in paragraphs 9.03(a), (b) and (c), where an employee travels on duty, but does not work, for more than four (4) hours between 22:00 and 06:00, and no sleeping accommodation is provided, the employee shall be compensated at the applicable overtime rate for a maximum of fifteen (15) hours' straight-time pay.
9.04 The Employer recognizes the value of safety belts or barriers in vehicles not designed for the carrying of passengers and will endeavour to provide vehicles with such equipment for transporting employees.
9.05 When an employee dies or is injured as a result of an unscheduled flight the employee is required to undertake, the employee or the employee's estate shall be paid compensation with respect to flying accidents in accordance with the policy in force at the time the accident occurred.
9.06
a. An employee assigned to a military establishment when in travel status will not be required to make use of the establishment for accommodation and messing except where it is evident that to stay elsewhere would be inconsistent with good order and common sense (for example, certain training courses, no suitable commercial accommodation is convenient and available, etc.).
b. Subject to paragraph 9.06(a), when an employee is required to utilize service accommodation, such accommodation shall be the equivalent where available, of good commercial accommodation.
9.07 Travel status leave
a. An employee who is required to travel outside his or her headquarters area on government business, as these expressions are defined by the Employer, and is away from his permanent residence for forty (40) nights during a fiscal year shall be granted one (1) day off with pay. The employee shall be credited with one additional day off for each additional twenty (20) nights that the employee is away from his or her permanent residence to a maximum of eighty (80) nights.
b. The maximum number of days off earned under this clause shall not exceed five (5) days in a fiscal year and shall accumulate as compensatory leave with pay.
c. This leave with pay is deemed to be compensatory leave and is subject to clause 6.16.
The provisions of this clause do not apply when the employee travels in connection with courses, training sessions, professional conferences and seminars.
Article 10: leave, general
10.01 The amount of leave with pay credited to an employee by the Employer at the time this agreement becomes effective, or at the time when the employee becomes subject to this agreement, shall be retained by the employee.
10.02 When the employment of an employee who has been granted more vacation or sick leave with pay than the employee has earned is terminated by death, the employee is considered to have earned the amount of leave with pay granted to him.
10.03 An employee shall not earn leave credits under this collective agreement in any month for which leave has already been credited to the employee under the terms of any other collective agreement to which the Employer is a party or under other rules or regulations of the Employer.
10.04 An employee shall not be granted two (2) different types of leave with pay with respect to the same time.
10.05 Except as otherwise specified in this agreement, where leave without pay for a period in excess of three (3) months is granted to an employee for reasons other than illness, the total period of leave granted shall be deducted from “continuous employment” for the purpose of calculating severance pay and “service” for the purpose of calculating vacation leave. Time spent on such leave which is for a period of more than three (3) months shall not be counted for pay increment purposes.
Article 11: vacation leave with pay
11.01 Vacation year
The vacation year shall be from April 1 to March 31 of the following year, inclusively.
11.02 Accumulation of vacation leave credits
An employee shall earn, during the vacation year, vacation leave credits at the following rates for each calendar month during which the employee receives at least eighty (80) hours' pay:
a. six decimal six seven (6.67) hours per month until the month in which the anniversary of the employee's first (1st) year of service occurs,
or
b. ten (10) hours per month commencing with the month in which the employee's first (1st) anniversary of service occurs,
or
c. thirteen decimal three four (13.34) hours per month commencing with the month in which the employee's eighth (8th) anniversary of service occurs,
or
d. fourteen decimal six seven (14.67) hours per month (for an annual total of twenty-two (22) days) commencing with the month in which the employee's fifteenth (15th) anniversary of service occurs,
or
e. fifteen decimal three four (15.34) hours per month (for an annual total of twenty-three (23) days) commencing with the month in which the employee's seventeenth (17th) anniversary of service occurs,
or
f. sixteen decimal six seven (16.67) hours per month (for an annual total of twenty-five (25) days) commencing with the month in which the employee's eighteenth (18th) anniversary of service occurs,
or
g. eighteen (18) hours per month (for an annual total of twenty-seven (27) days) commencing with the month in which the employee's twenty-fifth (25th) anniversary of service occurs,
or
h. twenty (20) hours per month (for an annual total of thirty (30) days) commencing with the month in which the employee's twenty-eighth (28th) anniversary of service occurs.
i. For the purpose of this clause only, all service within the public service, whether continuous or discontinuous, shall count toward vacation leave except where a person who, on leaving the public service, takes or has taken severance pay. However, the above exception shall not apply to an employee who receives severance pay on layoff and is reappointed to the public service within one (1) year following the date of layoff. For greater certainty, severance payments taken under clauses 14.09 to 14.12, or similar provisions in other collective agreements, do not reduce the calculation of service for persons who have not yet left the public service.
j. For the purpose of clause 11.02 only, effective April 1, 2012, on a go-forward basis, any former service in the Canadian Forces for a continuous period of six (6) months or more, either as a member of the Regular Force or of the Reserve Force while on Class B or C service, shall also be included in the calculation of vacation leave credits.
11.03 Entitlement to vacation leave with pay
An employee is entitled to vacation leave with pay to the extent of the employee's earned credits but an employee who has completed six (6) months of continuous employment may receive an advance of credits equivalent to the anticipated credits for the current vacation year.
Scheduling of vacation leave with pay
11.04 Subject to clauses 11.05, 11.06 and 11.07, employees shall, subject to work requirements, normally take all their vacation leave during the vacation year in which it is earned.
11.05 The Employer shall, subject to work requirements, approve vacation leave earned in the current or prior year(s) at a time convenient to the employee.
11.06 In order to ensure that vacation leave is used in accordance with clauses 11.03 and 11.04, any employee with more than one hundred and twenty (120) hours remaining on December 1 of that vacation year shall meet and discuss with his or her supervisor when they are going to use that portion of their leave in excess of one hundred and twenty (120) hours by March 31 of the same vacation year. If they cannot reach an agreement the Employer will schedule such leave subject to clause 11.07.
11.07 Carry-over provisions
a. Carry-over of total accumulated vacation leave up to and including one hundred and twenty (120) hours either because of an employee's personal circumstances or work requirements, will be approved.
b.
i. An employee who has accumulated vacation leave is required to use, in addition to his or her annual vacation leave one hundred and twenty (120) hours of his or her accumulated vacation leave until all previously accumulated vacation leave is reduced to one hundred and twenty (120) hours.
ii. Carry-over of such vacation leave will be allowed under the following circumstances:
A. an employee, subject to work requirements, was not permitted to take vacation leave,
and
B. the total amount of leave is large and cannot be used within one (1) year.
c. During any vacation year, upon application by the employee and at the discretion of the Employer, earned but unused vacation leave credits in excess of one hundred and twenty (120) hours may be paid in cash at the employee's hourly rate of pay as calculated from the classification prescribed in the employee's certificate of appointment of the employee's substantive position on March 31, of the previous vacation year.
Leave when employment terminates
11.08 When an employee dies or otherwise ceases to be employed, the employee or the employee's estate shall be paid an amount equal to the product obtained by multiplying the number of hours earned but unused vacation with pay to the employee's credit by the hourly rate of pay (that is, rate in effect at time of termination) to which the employee is entitled by virtue of the certificate of appointment in effect at the time of the termination of employment.
11.09 In the event of termination of employment for reasons other than death, the Employer shall recover from any monies owed the employee an amount equivalent to unearned vacation leave taken by the employee, calculated on the basis of the hourly rate of pay (that is, rate in effect at time of termination) to which the employee is entitled by virtue of the certificate of appointment in effect at the time of the termination of employment.
11.10 Where, in respect of any period of vacation leave, an employee is granted sick leave with pay on production of a medical certificate which includes the name, address and phone number of the attending physician, and provided that the employee satisfies the Employer of this condition if deemed necessary by the Employer, the period of vacation leave so displaced shall either be added to the vacation period if requested by the employee and approved by the Employer, or reinstated for use at a later date. Employees are to advise the Employer as soon as possible of the illness.
Article 12: sick leave with pay
12.01 Credits
An employee shall earn sick leave credits at the rate of one and one quarter (1 1/4) days for each calendar month for which the employee is entitled to pay for at least ten (10) days.
12.02 Granting of sick leave with pay
An employee is eligible for sick leave with pay when the employee is unable to perform his or her duties because of illness or injury provided that:
a. the employee satisfies the Employer of this condition in such manner and at such time as may be determined by the Employer,
and
b. the employee has the necessary sick leave credits.
12.03 Unless otherwise informed by the Employer a statement signed by the employee stating that because of illness or injury the employee was unable to perform his or her duties shall, when delivered to the Employer, be considered as meeting the requirements of paragraph 12.02(a), if the period of leave requested does not exceed five (5) days.
12.04 An employee is not eligible for sick leave with pay during any period in which the employee is on leave without pay or under suspension.
12.05 Where an employee has insufficient or no credits to cover the granting of sick leave with pay under the provisions of clause 12.02 (sick leave with pay) may, at the discretion of the Employer, be granted
a. for a period of up to twenty-five (25) days if the employee is awaiting a decision on an application for injury-on-duty leave,
or
b. for a period of up to fifteen (15) days if the employee has not submitted an application for injury-on-duty leave,
subject to the deduction of such advanced leave from any sick leave credits subsequently earned and, in the event of termination of employment for reasons other than death, the recovery of the advance from any monies owed the employee.
12.06 When an employee is granted sick leave with pay and injury-on-duty leave is subsequently approved for the same period, it shall be considered, for the purpose of the record of sick leave credits, that the employee was not granted sick leave with pay.
**Article 13: other types of leave with or without pay
13.01 In respect of any request for leave under this article, the employee may be required by the Employer to provide satisfactory validation of the circumstances necessitating such requests. A statement, written on or accompanying the leave form, signed by the employee describing the reason for the leave shall normally satisfy the requirements of this clause, and may be used by the Employer in considering such leave requests.
13.02 Bereavement leave with pay
For the purpose of this clause, family is defined as father, mother (or, alternatively, stepfather, stepmother, or foster parent), brother, sister, step-brother, step-sister, spouse (including common-law partner), child (including child of common-law partner), stepchild, ward of the employee, foster child, grandparent, grandchild, father-in-law, mother-in-law, daughter-in-law, son-in-law and relative permanently residing in the employee's household or with whom the employee permanently resides, and includes a person who stands in the place of a relative for the employee whether or not there is any degree of consanguinity between such person and the employee.
a. When a member of the employee's family dies, an employee shall be entitled to a bereavement period of seven (7) consecutive calendar days. Such bereavement period, as determined by the employee, must include the day of the memorial commemorating the deceased or must begin within two (2) days following the death. During such period the employee shall be paid for those days which are not regularly scheduled days of rest for the employee. In addition, the employee may be granted up to three (3) days' leave with pay for the purpose of travel related to the death.
b. At the request of the employee, such bereavement leave with pay may be taken in a single period or may be taken in two (2) periods.
c. When requested to be taken in two (2) periods:
i. The first period must include the day of the memorial commemorating the deceased or must begin within two (2) days following the death,
and
ii. The second period must be taken no later than twelve (12) months from the date of death for the purpose of attending a ceremony.
iii. The employee may be granted no more than three (3) days' leave with pay, in total, for the purposes of travel for these two (2) periods.
d. An employee is entitled to one (1) day's bereavement leave with pay for the purpose related to the death of the employee's brother-in-law, sister-in-law or grandparent of spouse.
e. If, during a period of paid leave, an employee is bereaved in circumstances under which he or she would have been eligible for bereavement leave with pay under paragraphs 13.02(a) and 13.02(d), the employee shall be granted bereavement leave with pay and his or her paid leave credits shall be restored to the extent of any concurrent bereavement leave with pay granted.
f. It is recognized by the parties that the circumstances which call for leave in respect of bereavement are based on individual circumstances. On request, the deputy head of a department may, after considering the particular circumstances involved, grant leave with pay for a period greater than that provided for in paragraphs 13.02(a) and 13.02(d).
g. An employee shall be entitled to bereavement leave for a person who stands in the place of a relative for the employee whether or not there is a degree of consanguinity between such person and the employee only once during the employee's total period of employment in the public service.
13.03 Court leave with pay
The Employer shall grant leave with pay to an employee, other than an employee on leave without pay, or under suspension for the period of time his presence is required during his scheduled hours of work:
a. to be available for jury selection;
b. to serve on a jury;
c. by subpoena or summons to attend as a witness in any proceedings, except one to which an employee is a party, held:
i. in or under the authority of a court of justice or before a grand jury,
ii. before a court, judge, justice magistrate or coroner,
iii. before the Senate or House of Commons of Canada or a committee of the Senate or House of Commons otherwise than in the performance of the duties of the employee's position,
iv. before a legislative council, legislative assembly or house of assembly, or any committee thereof that is authorized by law to compel the attendance of witnesses before it,
or
v. before an arbitrator or umpire or a person or body of persons authorized by law to make an inquiry and to compel the attendance of witnesses before it,
or
d. to appear on his or her own behalf or, when operational requirements permit, as a witness, before an adjudicator appointed by the Federal Public Sector Labour Relations and Employment Board.
13.04 Injury-on-duty leave with pay
An employee shall be granted injury-on-duty leave with pay for such reasonable period as may be determined by the Employer where a claim has been made pursuant to the Government Employees Compensation Act, and a Worker's Compensation authority has notified the Employer that it has certified that the employee is unable to work because of:
a. personal injury accidentally received in the performance of the employee's duties and not caused by the employee's wilful misconduct,
or
b. an industrial illness arising out of and in the course of the employee's employment;
if the employee agrees to remit to the Receiver General for Canada any amount received by him/her in compensation for loss of pay resulting from or in respect of such injury or illness, providing, however, that such amount does not stem from a personal disability policy for which the employee or the employee's agent has paid the premium.
13.05 Maternity leave without pay
a. An employee who becomes pregnant shall, upon request, be granted maternity leave without pay for a period beginning before, on or after the termination date of pregnancy and ending not later than eighteen (18) weeks after the termination date of pregnancy.
b. Notwithstanding paragraph (a):
i. where the employee has not yet proceeded on maternity leave without pay and her newborn child is hospitalized,
or
ii. where the employee has proceeded on maternity leave without pay and then returns to work for all or part of the period during which her newborn child is hospitalized,
the period of maternity leave without pay defined in paragraph (a) may be extended beyond the date falling eighteen (18) weeks after the date of termination of pregnancy by a period equal to that portion of the period of the child's hospitalization during which the employee was not on maternity leave, to a maximum of eighteen (18) weeks.
c. The extension described in paragraph (b) shall end not later than fifty-two (52) weeks after the termination date of pregnancy.
d. The Employer may require an employee to submit a medical certificate certifying pregnancy.
e. An employee who has not commenced maternity leave without pay may elect to:
i. use earned vacation and compensatory leave credits up to and beyond the date that her pregnancy terminates;
ii. use her sick leave credits up to and beyond the date that her pregnancy terminates, subject to the provisions set out in Article 12 (sick leave). For purposes of this subparagraph, the terms “illness” or “injury” used in Article 12 (sick leave), shall include medical disability related to pregnancy.
f. An employee shall inform the Employer in writing of her plans for taking leave with and without pay to cover her absence from work due to the pregnancy at least four (4) weeks in advance of the initial date of continuous leave of absence during which termination of pregnancy is expected to occur unless there is a valid reason why the notice cannot be given.
g. Leave granted under this clause shall be counted for the calculation of “continuous employment" for the purpose of calculating severance pay and “service” for the purpose of calculating vacation leave. Time spent on such leave shall be counted for pay increment purposes.
13.06 Maternity allowance
a. An employee who has been granted maternity leave without pay shall be paid a maternity allowance in accordance with the terms of the Supplemental Unemployment Benefit (SUB) Plan described in paragraphs (c) to (i), provided that she:
i. has completed six (6) months of continuous employment before the commencement of her maternity leave without pay,
ii. provides the Employer with proof that she has applied for and is in receipt of maternity benefits under the Employment Insurance or the Quebec Parental Insurance Plan in respect of insurable employment with the Employer,
and
iii. has signed an agreement with the Employer stating that:
A. she will return to work within the federal public administration, as specified in Schedule I, Schedule IV or Schedule V of the Financial Administration Act, on the expiry date of her maternity leave without pay unless the return-to-work date is modified by the approval of another form of leave;
B. following her return to work, as described in section (A), she will work for a period equal to the period she was in receipt of maternity allowance;
C. should she fail to return to work in accordance with section (A), or should she return to work but fail to work for the total period specified in section (B), for reasons other than death, layoff, early termination due to lack of work or discontinuance of a function of a specified period of employment that would have been sufficient to meet the obligations specified in section (B), or having become disabled as defined in the Public Service Superannuation Act, she will be indebted to the Employer for an amount determined as follows:
(allowance received) X (remaining period to be worked following her return to work) / [total period to be worked as specified in (B)]
However, an employee whose specified period of employment expired and who is rehired within the federal public administration as described in section (A), within a period of ninety (90) days or less is not indebted for the amount if her new period of employment is sufficient to meet the obligations specified in section (B).
b. For the purpose of sections (a)(iii)(B) and (C), periods of leave with pay shall count as time worked. Periods of leave without pay during the employee's return to work will not be counted as time worked but shall interrupt the period referred to in section (a)(iii)(B), without activating the recovery provisions described in section (a)(iii)(C).
c. Maternity allowance payments made in accordance with the SUB Plan will consist of the following:
i. where an employee is subject to a waiting period before receiving Employment Insurance maternity benefits, ninety-three per cent (93%) of her weekly rate of pay and the recruitment and retention “terminable allowance” for each week of the waiting period, less any other monies earned during this period,
and
ii. for each week that the employee receives a maternity benefit under the Employment Insurance or the Quebec Parental Insurance Plan, she is eligible to receive the difference between ninety-three per cent (93%) of her weekly rate of pay and the recruitment and retention “terminable allowance” and the maternity benefit, less any other monies earned during this period which may result in a decrease in her maternity benefit to which she would have been eligible if no extra monies had been earned during this period.
iii. Where an employee has received the full fifteen (15) weeks of maternity benefit under Employment Insurance and thereafter remains on maternity leave without pay, she is eligible to receive a further maternity allowance for a period of one (1) week, ninety-three per cent (93%) of her weekly rate of pay, less any other monies earned during this period.
d. At the employee's request, the payment referred to in subparagraph 13.06(c)(i) will be estimated and advanced to the employee. Adjustments will be made once the employee provides proof of receipt of Employment Insurance or Quebec Parental Insurance Plan maternity benefits.
e. The maternity allowance to which an employee is entitled is limited to that provided in paragraph (c) and an employee will not be reimbursed for any amount that she may be required to repay pursuant to the Employment Insurance Act or the Act Respecting Parental Insurance Act in Quebec.
f. The weekly rate of pay referred to in paragraph (c) shall be:
i. for a full-time employee, the employee's weekly rate of pay on the day immediately preceding the commencement of maternity leave without pay,
ii. for an employee who has been employed on a part-time or on a combined full-time and part-time basis during the six (6) month period preceding the commencement of maternity leave, the rate obtained by multiplying the weekly rate of pay in subparagraph (i) by the fraction obtained by dividing the employee's straight-time earnings by the straight-time earnings the employee would have earned working full-time during such period.
g. The weekly rate of pay referred to in paragraph (f) shall be the rate and the recruitment and retention “terminable allowance” to which the employee is entitled for her substantive level to which she is appointed.
h. Notwithstanding paragraph (g), and subject to subparagraph (f)(ii), if on the day immediately preceding the commencement of maternity leave without pay an employee has been on an acting assignment for at least four (4) months, the weekly rate shall be the rate and the recruitment and retention "terminable allowance" she was being paid on that day.
i. Where an employee becomes eligible for a pay increment or pay revision that would increase the maternity allowance, the allowance shall be adjusted accordingly.
j. Maternity allowance payments made under the SUB Plan will neither reduce nor increase an employee's deferred remuneration or severance pay.
13.07 Special maternity allowance for totally disabled employees
a. An employee who:
i. fails to satisfy the eligibility requirement specified in subparagraph 13.06(a)(ii) solely because a concurrent entitlement to benefits under the Disability Insurance (DI) Plan, the Long-Term Disability (LTD) Insurance portion of the Public Service Management Insurance Plan (PSMIP) or the Government Employees Compensation Act prevents her from receiving Employment Insurance or Quebec Parental Insurance Plan maternity benefits;
and
ii. has satisfied all of the other eligibility criteria specified in paragraph 13.06(a), other than those specified in sections (A) and (B) of subparagraph 13.06(a)(iii);
shall be paid, in respect of each week of maternity allowance not received for the reason described in subparagraph 13.07(a)(i), the difference between ninety-three per cent (93%) of her weekly rate of pay and recruitment and retention “terminable allowance," and the gross amount of her weekly disability benefit under the DI Plan, the LTD Plan or via the Government Employees Compensation Act.
b. An employee shall be paid an allowance under this clause and under clause 13.06 for a combined period of no more than the number of weeks during which she would have been eligible for maternity benefits under the Employment Insurance or the Quebec Parental Insurance Plan had she not been disqualified from Employment Insurance or Quebec Parental Insurance Plan maternity benefits for the reasons described in subparagraph 13.07(a)(i).
13.08 Parental leave without pay
a. Where an employee has or will have the actual care and custody of a newborn child (including the newborn child of a common-law partner), the employee shall, upon request, be granted parental leave without pay for either:
i. a single period of up to thirty-seven (37) consecutive weeks in the fifty-two (52) week period (standard option),
or
ii. a single period of up to sixty-three (63) consecutive weeks in the seventy-eight (78) week period (extended option),
beginning on the day on which the child is born or the day on which the child comes into the employee's care.
b. Where an employee commences legal proceedings under the laws of a province to adopt a child or obtains an order under the laws of a province for the adoption of a child, the employee shall, upon request, be granted parental leave without pay for either:
i. a single period of up to thirty-seven (37) consecutive weeks in the fifty-two (52) week period (standard option)
or
ii. a single period of up to sixty-three (63) consecutive weeks in the seventy-eight (78) week period (extended option),
beginning on the day on which the child comes into the employee's care.
c. Notwithstanding paragraphs (a) and (b) above, at the request of an employee and at the discretion of the Employer, the leave referred to in the paragraphs (a) and (b) above may be taken in two periods.
d. Notwithstanding paragraphs (a) and (b):
i. where the employee's child is hospitalized within the period defined in the above paragraphs, and the employee has not yet proceeded on parental leave without pay,
or
ii. where the employee has proceeded on parental leave without pay and then returns to work for all or part of the period during which his or her child is hospitalized,
the period of parental leave without pay specified in the original leave request may be extended by a period equal to that portion of the period of the child's hospitalization during which the employee was not on parental leave. However, the extension shall end not later than one hundred and four (104) weeks after the day on which the child comes into the employee's care.
e. An employee who intends to request parental leave without pay shall notify the Employer at least four (4) weeks in advance of the commencement date of such leave.
f. The Employer may:
i. defer the commencement of parental leave without pay at the request of the employee;
ii. grant the employee parental leave without pay with less than four (4) weeks' notice;
iii. require an employee to submit a birth certificate or proof of adoption of the child.
g. Leave granted under this clause shall count for the calculation of “continuous employment" for the purpose of calculating severance pay and “service” for the purpose of calculating vacation leave. Time spent on such leave shall count for pay increment purposes.
13.09 Parental allowance
Under the Employment Insurance (EI) benefits plan, parental allowance is payable under two (2) options, either:
• Option 1: standard parental benefits, 13.09, paragraphs (c) to (k),
or
• Option 2: extended parental benefits, 13.09, paragraphs (l) to (t).
Once an employee elects the standard or extended parental benefits and the weekly benefit top-up allowance is set, the decision is irrevocable and shall not be changed should the employee return to work at an earlier date than that originally scheduled.
Under the Quebec Parental Insurance Plan (QPIP), parental allowance is payable only under Option 1: standard parental benefits.
Parental allowance administration
a. An employee who has been granted parental leave without pay, shall be paid a parental allowance in accordance with the terms of the Supplemental Unemployment Benefit (SUB) Plan described in paragraphs (c) to (i), or (l) to (r), providing he or she:
i. has completed six (6) months of continuous employment before the commencement of parental leave without pay,
ii. provides the Employer with proof that he or she has applied for and is in receipt of parental, paternity or adoption benefits under the Employment Insurance or the Quebec Parental Insurance Plan in respect of insurable employment with the Employer,
and
iii. has signed an agreement with the Employer stating that:
A. the employee will return to work on the expiry date of his/her parental leave without pay, unless the return to work within the federal public administration, as specified in Schedule I, Schedule IV or Schedule V of the Financial Administration Act date is modified by the approval of another form of leave;
B. following his or her return to work, as described in section (A), the employee will work for a period equal to the period the employee was in receipt of the standard parental allowance, in addition to the period of time referred to in section 13.06(a)(iii)(B), if applicable. Where the employee has elected the extended parental allowance, following his or her return to work, as described in section (A), the employee will work for a period equal to sixty per cent (60%) of the period the employee was in receipt of the extended parental allowance in addition to the period of time referred to in section 13.06(a)(iii)(B), if applicable;
C. should he or she fail to return to work in accordance with section (A) or should he or she return to work but fail to work the total period specified in section (B), for reasons other than death, layoff, early termination due to lack of work or discontinuance of a function of a specified period of employment that would have been sufficient to meet the obligations specified in section (B), or having become disabled as defined in the Public Service Superannuation Act, he or she will be indebted to the Employer for an amount determined as follows:
(allowance received) X (remaining period to be worked, as specified in (B), following his or her return to work) / [total period to be worked as specified in (B)]
however, an employee whose specified period of employment expired and who is rehired within the federal public administration as described in section (A), within a period of ninety (90) days or less is not indebted for the amount if his or her new period of employment is sufficient to meet the obligations specified in section (B).
b. For the purpose of sections (a)(iii)(B) and (C), periods of leave with pay shall count as time worked. Periods of leave without pay during the employee's return to work will not be counted as time worked but shall interrupt the period referred to in section (a)(iii)(B), without activating the recovery provisions described in section (a)(iii)(C).
(Option 1): standard parental allowance
c. Parental allowance payments made in accordance with the SUB Plan will consist of the following:
i. where an employee on parental leave without pay as described in subparagraphs 13.08(a)(i) and (b)(i) has elected to receive Standard Employment Insurance parental benefits and is subject to a waiting period before receiving Employment Insurance parental benefits, ninety-three per cent (93%) of his/her weekly rate of pay (and the recruitment and retention “terminable allowance,” if applicable), for the waiting period, less any other monies earned during this period;
ii. for each week the employee receives parental, adoption or paternity benefits under the Employment Insurance or the Quebec Parental Insurance Plan, he or she is eligible to receive the difference between ninety-three per cent (93%) of his or her weekly rate of pay (and the recruitment and retention “terminable allowance," if applicable) and the parental, adoption or paternity benefits, less any other monies earned during this period which may result in a decrease in his/her parental, adoption or paternity benefit to which he or she would have been eligible if no extra monies had been earned during this period;
iii. where an employee has received the full eighteen (18) weeks of maternity benefit and the full thirty-two (32) weeks of parental benefit or has divided the full thirty-two (32) weeks of parental benefits with another employee in receipt of the full five (5) weeks paternity under the Quebec Parental Insurance Plan for the same child and either employee thereafter remains on parental leave without pay, that employee is eligible to receive a further parental allowance for a period of up to two (2) weeks, ninety-three per cent (93%) of their weekly rate of pay (and the recruitment and retention “terminable allowance," if applicable) for each week, less any other monies earned during this period;
iv. where an employee has divided the full thirty-seven (37) weeks of adoption benefits with another employee under the Quebec Parental Insurance Plan for the same child and either employee thereafter remains on parental leave without pay, that employee is eligible to receive a further parental allowance for a period of up to two (2) weeks, ninety-three per cent (93%) of their weekly rate of pay for each week, less any other monies earned during this period;
v. where an employee has received the full thirty-five (35) weeks of parental benefit under Employment Insurance Plan and thereafter remains on parental leave without pay, he/she is eligible to receive a further parental allowance for a period of one (1) week, ninety-three per cent (93%) of his or her weekly rate of pay less any other monies earned during this period, unless said employee has already received the one (1) week of allowance contained in subparagraph 13.06 c)(iii) for the same child;
vi. where an employee has divided the full forty (40) weeks of parental benefits with another employee under the Employment Insurance Plan for the same child and either employee thereafter remains on parental leave without pay, that employee is eligible to receive a further parental allowance for a period of one (1) week, ninety-three per cent (93%) of their weekly rate of pay for each week, less any other monies earned during this period, unless said employee has already received the one (1) week of allowance contained in subparagraphs 13.06(c)(iii) and 13.09(c)(v) for the same child.
d. At the employee's request, the payment referred to in subparagraph 13.09(c)(i) will be estimated and advanced to the employee. Adjustments will be made once the employee provides proof of receipt of Employment Insurance Plan.
e. The parental allowance to which an employee is entitled is limited to that provided in paragraph (c) and an employee will not be reimbursed for any amount that he or she is required to repay pursuant to the Employment Insurance Act or the Act Respecting Parental Insurance in Quebec.
f. The weekly rate of pay referred to in paragraph (c) shall be:
i. for a full-time employee, the employee's weekly rate of pay on the day immediately preceding the commencement of maternity or parental leave without pay;
ii. for an employee who has been employed on a part-time or on a combined full-time and part-time basis during the six (6) month period preceding the commencement of maternity or parental leave without pay, the rate obtained by multiplying the weekly rate of pay in subparagraph (i) by the fraction obtained by dividing the employee's straight-time earnings by the straight-time earnings the employee would have earned working full-time during such period.
g. The weekly rate of pay referred to in paragraph (f) shall be the rate and the recruitment and retention “terminable allowance” to which the employee is entitled for the substantive level to which she or he is appointed.
h. Notwithstanding paragraph (g), and subject to subparagraph (f)(ii), if on the day immediately preceding the commencement of parental leave without pay an employee is performing an acting assignment for at least four (4) months, the weekly rate shall be the rate and the recruitment and retention “terminable allowance,” the employee was being paid on that day.
i. Where an employee becomes eligible for a pay increment or pay revision that would increase the parental allowance, the allowance shall be adjusted accordingly.
j. Parental allowance payments made under the SUB Plan will neither reduce nor increase an employee's deferred remuneration or severance pay.
k. The maximum combined, shared, maternity and standard parental allowances payable shall not exceed fifty-seven (57) weeks for each combined maternity and parental leave without pay.
(Option 2): extended parental allowance
l. Parental allowance payments made in accordance with the SUB Plan will consist of the following:
i. where an employee on parental leave without pay as described in subparagraphs 13.08(a)(ii) and (b)(ii), has chosen to receive Extended Employment Insurance parental benefits and is subject to a waiting period before receiving Employment Insurance parental benefits, fifty-five decimal eight per cent (55.8%) of his or her weekly rate of pay for the waiting period, less any other monies earned during this period;
ii. for each week the employee receives parental or adoption benefits under the Employment Insurance, he or she is eligible to receive the difference between fifty-five decimal eight per cent (55.8%) of his or her weekly rate and the parental, adoption benefit, less any other monies earned during this period which may result in a decrease in his or her parental, adoption benefit to which he or she would have been eligible if no extra monies had been earned during this period;
iii. where an employee has received the full sixty-one (61) weeks of parental benefits under the Employment Insurance and thereafter remains on parental leave without pay, he or she is eligible to receive a further parental allowance for a period of one (1) week, fifty-five decimal eight per cent (55.8%) of his or her weekly rate of pay for each week, less any other monies earned during this period, unless said employee has already received the one (1) week of allowance contained in subparagraph 13.06(c)(iii) for the same child.
iv. where an employee has divided the full sixty-nine (69) weeks of parental benefits with another employee under the Employment Insurance Plan for the same child and either employee thereafter remains on parental leave without pay, that employee is eligible to receive a further parental allowance for a period of one (1) week, fifty-five decimal eight per cent (55.8%) of their weekly rate of pay for each week, less any other monies earned during this period, unless said employee has already received the one (1) week of allowance contained in subparagraph 13.06(c)(iii) for the same child;
m. At the employee's request, the payment referred to in subparagraph 13.09(l)(i) will be estimated and advanced to the employee. Adjustments will be made once the employee provides proof of receipt of Employment Insurance.
n. The parental allowance to which an employee is entitled is limited to that provided in paragraph (l) and an employee will not be reimbursed for any amount that he or she is required to repay pursuant to the Employment Insurance Act.
o. The weekly rate of pay referred to in paragraphs (l) shall be:
i. for a full-time employee, the employee's weekly rate of pay on the day immediately preceding the commencement of parental leave without pay;
ii. for an employee who has been employed on a part-time or on a combined full-time and part-time basis during the six (6) month period preceding the commencement of parental leave without pay, the rate obtained by multiplying the weekly rate of pay in subparagraph (i) by the fraction obtained by dividing the employee's straight-time earnings by the straight-time earnings the employee would have earned working full-time during such period.
p. The weekly rate of pay referred to in paragraph (l) shall be the rate (and the recruitment and retention “terminable allowance" if applicable) to which the employee is entitled for the substantive level to which he or she is appointed.
q. Notwithstanding paragraph (p), and subject to subparagraph (o)(ii), if on the day immediately preceding the commencement of parental leave without pay an employee is performing an acting assignment for at least four (4) months, the weekly rate shall be the rate (and the recruitment and retention “terminable allowance" if applicable), the employee was being paid on that day.
r. Where an employee becomes eligible for a pay increment or pay revision while in receipt of the allowance, the allowance shall be adjusted accordingly.
s. Parental allowance payments made under the SUB Plan will neither reduce nor increase an employee's deferred remuneration or severance pay.
t. The maximum combined, shared, maternity and extended parental allowances payable shall not exceed eighty-six (86) weeks for each combined maternity and parental leave without pay.
13.10 Special parental allowance for totally disabled employees
a. An employee who:
i. fails to satisfy the eligibility requirement specified in subparagraph 13.09(a)(ii) solely because a concurrent entitlement to benefits under the Disability Insurance (DI) Plan, the Long-Term Disability (LTD) Insurance portion of the Public Service Management Insurance Plan (PSMIP) or via the Government Employees Compensation Act prevents the employee from receiving Employment Insurance or Quebec Parental Insurance Plan benefits;
and
ii. has satisfied all of the other eligibility criteria specified in paragraph 13.09(a), other than those specified in sections (A) and (B) of subparagraph 13.09(a)(iii);
shall be paid, in respect of each week of benefits under the parental allowance not received for the reason described in subparagraph 13.10(a)(i), the difference between ninety-three per cent (93%) of the employee's rate of pay and the recruitment and retention “terminable allowance,” and the gross amount of his or her weekly disability benefit under the DI Plan, the LTD Plan or via the Government Employees Compensation Act.
b. An employee shall be paid an allowance under this clause and under clause 13.09 for a combined period of no more than the number of weeks during which the employee would have been eligible for parental, paternity or adoption benefits under the Employment Insurance or the Quebec Parental Insurance Plan, had the employee not been disqualified from Employment Insurance or Quebec Parental Insurance Plan benefits for the reasons described in subparagraph 13.10(a)(i).
13.11 Leave without pay for the care of family
a. Both parties recognize the importance of access to leave for the purpose of care for the family.
b. For the purpose of this article, family is defined as spouse (or common-law partner), children (including foster children or children of legal or common-law partner), parents (including step-parents or foster parents) or any relative permanently residing in the employee's household or with whom the employee permanently resides, and includes a person who stands in the place of a relative for the employee whether or not there is any degree of consanguinity between such person and the employee.
c. Subject to paragraph 13.11(b), an employee shall be granted leave without pay for the care of family in accordance with the following conditions:
i. an employee shall notify the Employer in writing as far in advance as possible but not less than four (4) weeks in advance of the commencement date of such leave, unless, because of urgent or unforeseeable circumstances, such notice cannot be given;
ii. leave granted under this clause shall be for a minimum period of three (3) weeks;
iii. the total leave granted under this article shall not exceed five (5) years during an employee's total period of employment in the public service;
iv. leave granted for a period of one (1) year or less shall be scheduled in a manner which ensures continued service delivery;
13.12 Caregiving leave
a. Notwithstanding the definition of "family" found in paragraph 13.11(b), an employee who provides the Employer with proof that he or she is in receipt of or awaiting Employment Insurance (EI) benefits for Compassionate Care Benefits, Family Caregiver Benefits for Children and/or Family Caregiver Benefits for Adults may be granted leave without pay while in receipt of or awaiting these benefits.
b. The leave without pay described in paragraph 13.12(a) shall not exceed twenty-six (26) weeks for Compassionate Care Benefits, thirty-five (35) weeks for Family Caregiver Benefits for Children and fifteen (15) weeks for Family Caregiver Benefits for Adults, in addition to any applicable waiting period.
c. When notified, an employee who was awaiting benefits must provide the Employer with proof that the request for Employment Insurance (EI) Compassionate Care Benefits, Family Caregiver Benefits for Children and/or Family Caregiver Benefits for Adults has been accepted.
d. When an employee is notified that their request for Employment Insurance (EI) Compassionate Care Benefits, Family Caregiver Benefits for Children and/or Family Caregiver Benefits for Adults has been denied, paragraph 13.12(a) above ceases to apply.
e. Leave granted under this clause shall count for the calculation of “continuous employment" for the purposes of calculating severance pay and “service” for the purpose of calculating vacation leave. Time spent on such leave shall count for pay increment purposes.
13.13 Leave without pay for relocation of spouse
a. At the request of an employee, leave without pay for a period up to one (1) year shall be granted to an employee whose spouse is permanently relocated and up to five (5) years to an employee whose spouse is temporarily relocated.
b. Leave without pay granted under this clause shall be deducted from the calculation of “continuous employment” for the purpose of calculating severance pay and vacation leave for the employee involved except where the period of such leave is less than three (3) months.
13.14 Leave with pay for family-related responsibilities
a. For the purpose of this clause, family is defined as spouse (or common-law partner), children (including children of legal or common-law partner), foster child and ward of the employee, parents (including step-parents or foster parents), father-in-law, mother-in-law, brother, sister, stepbrother, stepsister, grandchildren, grandparents of the employee, any relative residing in the employee's household or with whom the employee permanently resides or any relative for whom the employee has a duty of care, irrespective of whether they reside with the employee, and includes a person who stands in the place of a relative for the employee whether or not there is any degree of consanguinity between such person and the employee.
b. Leave with pay shall be granted under the following circumstances:
i. an employee requesting leave under this provision must make every reasonable effort to schedule medical or dental appointments for family members to minimize or preclude the employee's absence from work, and must notify his or her supervisor of the appointment as far in advance as possible. However, when alternate arrangements are not possible an employee shall be granted, subject to urgent work requirements, leave for an appointment to take a family member as defined in paragraph 13.14(a), for a medical or dental appointment when the family member is incapable of attending the appointment by himself/herself, or for appointments with appropriate authorities in schools or adoption agencies;
ii. to provide for the immediate and temporary care of a sick family member and to provide an employee with time to make alternate care arrangements where the illness is of a longer duration;
iii. for needs directly related to the birth or to the adoption of the employee's child;
iv. to attend school functions, if the supervisor was notified of the functions as far in advance as possible;
v. to provide for the employee's child in the case of an unforeseeable closure of the school or daycare facility;
vi. eight (8) hours out of the five (5) days stipulated in paragraph 13.14(c) below may be used to attend an appointment with a legal or paralegal representative for non-employment-related matters, or with a financial or other professional representative, if the supervisor was notified of the appointment as far in advance as possible.
vii. up to five (5) days' marriage leave for the purpose of getting married provided that the employee gives the Employer at least five (5) days' notice.
c. The total leave with pay which may be granted under subparagraphs (b)(i) to (v) shall not exceed five (5) days in a fiscal year.
13.15 Leave with or without pay for other reasons
a. At its discretion, the Employer may grant leave with or without pay for purposes other than those specified in this agreement.
b. Personal leave
Subject to operational requirements as determined by the Employer and with an advance notice of at least five (5) working days, the employee shall be granted, in each fiscal year, sixteen (16) hours of leave with pay for reasons of a personal nature. This leave can be taken in periods of eight (8) hours or four (4) hours each.
The leave will be scheduled at times convenient to both the employee and the Employer. Nevertheless, the Employer shall make every reasonable effort to grant the leave at such time as the employee may request.
13.16 Domestic violence leave
For the purposes of this clause domestic violence is considered to be any form of abuse or neglect that an employee or an employee's child experiences from someone with whom the employee has or had an intimate relationship.
a. The parties recognize that employees may be subject to domestic violence in their personal life that could affect their attendance at work.
b. Upon request, an employee who is subject to domestic violence or who is the parent of a dependent child who is subject to domestic violence from someone with whom the employee has or had an intimate relationship shall be granted domestic violence leave in order to enable the employee, in respect of such violence:
i. to seek care and/or support for themselves or their dependent child in respect of a physical or psychological injury or disability;
ii. to obtain services from an organization which provides services for individuals who are subject to domestic violence;
iii. to obtain professional counselling;
iv. to relocate temporarily or permanently;
or
v. to seek legal or law enforcement assistance or to prepare for or participate in any civil or criminal legal proceeding.
c. The total domestic violence leave with pay which may be granted under this clause shall not exceed eighty (80) hours in a fiscal year.
d. The Employer may, in writing and no later than fifteen (15) days after an employee's return to work, request the employee to provide documentation to support the reasons for the leave. The employee shall provide that documentation only if it is reasonably practicable for them to obtain and provide it.
e. Notwithstanding paragraphs 13.16(b) and 13.16(c), an employee is not entitled to domestic violence leave if the employee is charged with an offence related to that act or if it is probable, considering the circumstances, that the employee committed that act.
Article 14: severance pay
14.01 For the purpose of this article, the terms:
a. "Employer” includes any organization, service with which is included in the calculation of “continuous employment”;
b. “weekly rate of pay” means the employee's annual rate of pay divided by fifty-two decimal one seven six (52.176) applying to the employee's classification, as shown in the instrument of appointment.
14.02 Layoff
An employee with one (1) or more years of continuous employment who is laid off shall be paid severance pay based on completed years of continuous employment. It shall be calculated at the rate of two (2) weeks' pay for the first (1st) year of continuous employment or three (3) weeks' pay for employees with ten (10) or more and less than twenty (20) years' continuous employment, or four (4) weeks' pay for employees with twenty (20) or more years of continuous employment, plus one (1) week's pay for each succeeding completed year of continuous employment on the first layoff and one (1) week's pay for each completed year of continuous employment on a subsequent layoff. In the case of a partial year of continuous employment, one (1) week's pay multiplied by the number of days of continuous employment divided by three hundred and sixty-five (365).
14.03 Death
Regardless of any other payment to an employee's estate, if the employee dies there shall be paid to the estate, severance pay calculated by multiplying the employee's weekly rate of pay at the time of death by the number of completed years of continuous employment to a maximum of thirty (30) years.
14.04 Termination for cause for reasons of incapacity
When an employee ceases to be employed by reason of termination for cause for reason of incapacity pursuant to section 12(1)(e) of the Financial Administration Act, one (1) week's pay for each complete year of continuous employment with a maximum benefit of twenty-eight (28) weeks.
14.05 Continuous employment
The period of continuous employment used in the calculation of severance benefits payable to an employee under this article shall be reduced by any period of continuous employment in respect of which the employee was already granted any type of termination benefit by the public service, a Federal Crown Corporation, the Canadian Forces or the Royal Canadian Mounted Police. Under no circumstances shall the maximum severance pay provided under clauses 14.01 to 14.06 and 14.09 of Appendix B be pyramided.
For greater certainty, payments in lieu of severance for the elimination of severance pay for voluntary separation (resignation and retirement) made pursuant to clauses 14.09 to 14.12 under Appendix B or similar provisions in other collective agreements shall be considered as a termination benefit for the administration of this article.
14.06 Appointment to a separate agency
An employee who resigns to accept an appointment with an organization listed in Schedule V of the Financial Administration Act shall be paid any outstanding payment in lieu of severance, if applicable, under Appendix B.
14.07 Employees who were subject to the payment in lieu of severance for the elimination of severance pay for voluntary separation (resignation and retirement) and who opted to defer their payment, the former provisions outlining the payment in lieu are found at Appendix B.
Article 15: statement of duties
15.01 Upon written request, an employee shall be given a copy of his or her current position analysis schedule (PAS).
Article 16: safety and health
16.01 The Employer shall make all reasonable provisions for the occupational safety and health of employees. The Employer will welcome suggestions on the subject from the Association and the parties undertake to consult with a view to adopting and expeditiously carrying out reasonable procedures and techniques designed or intended to prevent or reduce the risk of employment injury. The Association agrees to encourage its members to observe and promote all safety rules and to use all appropriate protective equipment and safeguards.
Article 17: technological change
17.01 Both parties recognize the overall advantages of technological change, as well as the effects that its introduction sometimes has on specific individuals when such change results in loss of jobs. Therefore, both parties shall encourage and promote improvements in production and moreover, will cooperate to find ways of reducing, and if possible, eliminating the loss of employment which may be the direct result of any major improvements.
17.02 Recognizing the nature of the Fleet Maintenance Facility Cape Scott's operations, the Employer will provide one hundred and twenty (120) days' advance notice, whenever possible, of the introduction or implementation of technological change when it may result in significant change in the employment status or working conditions of employees.
17.03 The Employer agrees to consult with the Association with a view to resolving problems which may arise as a result of the introduction of such technological change.
17.04 The Association shall be informed in advance of all training courses related to technological change and, except when prevented by unforeseen circumstances or short notice, the Employer agrees to display in appropriate locations notices of forthcoming job-related training courses. Management will consult with the Association when establishing training criteria for such courses.
Article 18: shift premium
18.01 An employee who is regularly scheduled to work third (evening) or first (night) shift shall be paid a shift premium of:
a. one seventh (1/7) of the employee's basic hourly rate of pay for each hour worked on third (evening) shift,
and
b. one seventh (1/7) of the employee's basic hourly rate of pay for each half-hour worked on the first (night) shift.
Article 19: loss of personal effects
19.01 An employee who suffers loss of clothes or personal effects will be compensated in accordance with Order-in-Council PC-1991-8/1695.
19.02 Where an employee is assigned to duty aboard a ship and suffers loss of clothing or personal effects (those which can reasonably be expected to accompany the employee aboard the ship) because of a marine accident or disaster, the employee shall be reimbursed the value of those articles up to a maximum of three thousand dollars ($3,000) based on replacement cost less the usual rate of depreciation.
19.03 An employee or the employee's estate making a claim under this article shall submit to the Employer reasonable proof of such loss, and shall submit a signed affidavit listing the individual items and values claimed.
Article 20: tools
20.01 The Employer agrees to continue its present practice of supplying tools where it considers them necessary, and such tools shall remain the property of the Employer.
20.02 An employee who through neglect or negligence destroys or loses any of the tools issued to the employee by the Employer shall be held responsible for such damage or loss based on replacement cost less the usual rate of depreciation.
Part III: staff relations matters
Article 21: Association representation
21.01 Access to employer's premises
The Employer agrees that accredited Union representatives of the Association may have access to the Employer's premises upon notice to and the consent of the Employer. Such consent shall not be unreasonably withheld.
21.02 Appointment of stewards
a. The Employer acknowledges the right of the Association to appoint a reasonable number of Stewards, having regard to the plan of organization, the dispersement of employees at the workplace and the administrative structure implied in the grievance procedure.
b. The Association recognizes that employees who are representatives of the Association have regular duties to perform in connection with their work for the Employer.
21.03 Recognition of Association representatives
The Employer recognizes Association officers and stewards as official chargehands representatives and will not discriminate against them because of their legitimate activities as such. The Employer will not define the disciplinary action to be taken against an Association officer or steward without first giving the Association an opportunity of making representations on the employee's behalf.
The Association shall supply a list of the names of Association officers and stewards to the Employer and shall advise the Employer of any changes thereafter.
21.04 Leave for Association officers and/or stewards
Subject to operational requirements:
a. Time off with pay for Association officers and/or stewards to investigate employee complaints of an urgent nature may be granted upon request to their supervisor. Such permission shall not be unreasonably denied.
b. Association officers and/or stewards shall inform their supervisor before leaving their work to attend pre-arranged meetings with local management.
c. Where practicable such representatives shall report back to their supervisor before resuming their normal duties.
21.05 Bulletin boards
Reasonable space on bulletin boards, including electronic bulletin boards where available, will be made available to the Association for the posting of official notices in convenient locations determined by the Employer and the Association. Notices or other material shall require the prior approval of the Employer, except notices relating to the business affairs of the Association and social and recreational events. The Employer shall have the right to refuse the posting of any information that it considers adverse to its interests or the interests of any of its representatives.
21.06 Contract negotiation meetings
The Employer will grant leave without pay to an employee for the purpose of attending contract negotiation meetings on behalf of the Association.
21.07 Preparatory contract negotiation meetings
When operational requirements permit, the Employer will grant leave without pay to a reasonable number of employees to attend preparatory contract negotiation meetings.
21.08 Employee representatives' training courses
When operational requirements permit, the Employer will grant leave without pay to employees appointed as Employee Representatives by the Association to undertake training sponsored by the Association related to the duties of an Employee Representative.
When operational requirements permit, the Employer will grant leave with pay to employees appointed as Employee Representatives by the Association to attend training sessions concerning Employer-employee relations sponsored by the Employer.
Article 22: Association security
22.01 The Employer shall as a condition of employment, deduct monthly an amount equivalent to regular membership dues, in a fixed amount, established by the Association according to their constitutional provisions, exclusive of any separate deduction for initiation fees, pension deductions, special assessments or arrears which may exist on the date this agreement comes into effect, from the pay of all employees of the bargaining unit.
22.02 The Association shall inform the Employer in writing of the authorized monthly deduction to be checked off for each employee defined in clause 22.01.
22.03 For the purpose of applying clause 22.01, deductions from pay for each employee in respect of each month will start with the first full calendar month of employment to the extent that earnings are available.
22.04 As soon as practicable after the signing of this agreement, the Employer will provide the Association with an up-to-date list of all employees in the Ship Repair Chargehands bargaining unit and will provide appropriate quarterly lists of all employees who have been assigned to or have left the bargaining unit during the quarter.
22.05 An employee who satisfies the Association to the extent that he or she declares in an affidavit that he or she is a member of a religious organization whose doctrine prevents him or her as a matter of conscience from making financial contributions to an employee organization and that he or she will make contributions to a charitable organization registered pursuant to the Income Tax Act, equal to dues, shall not be subject to this article, provided that the affidavit submitted by the employee is countersigned by an official representative of the religious organization involved. The Association will inform the Employer accordingly.
22.06 From the date of signing and for the duration of this agreement, no employee organization, as defined in section 2 of the Federal Public Sector Labour Relations Act, other than the Association, shall be permitted to have membership dues and/or other monies deducted by the Employer from the pay of employees in the bargaining unit.
22.07 The amounts deducted in accordance with clause 22.01 shall be remitted by electronic payment to the financial institution designated by the Association within fifteen (15) working days of the date on which the deduction is made. The electronic payment shall be accompanied by particulars identifying each employee alphabetically and the deductions made on the employee's behalf.
22.08 The Association agrees to indemnify and save the Employer harmless against any claim or liability arising out of the application of this article except for any claim or liability arising out of an error committed by the Employer limited to the amount actually involved in the error.
Article 23: illegal strikes
23.01 The Federal Public Sector Labour Relations Act provides penalties for illegal strikes. A strike includes a cessation of work or a refusal to work or to continue to work by employees in combination or in concert or in accordance with a common understanding, or a slowdown or other concerted activity on the part of employees designed to restrict or limit output.
**Article 24: grievance procedure
24.01 In cases of alleged misinterpretation or misapplication arising out of agreements concluded by the National Joint Council (NJC) of the public service on items which may be included in a collective agreement and which the parties to this agreement have endorsed, the grievance procedure will be in accordance with section 15.0 of the NJC By-Laws.
24.02 The parties recognize the value of informal discussion between employees and their supervisors to the end that problems might be resolved without recourse to a formal grievance. When the parties agree in writing to avail themselves of an informal conflict management system established pursuant to section 207 of the FPSLRA, the time limits prescribed in this grievance procedure are suspended until either party gives the other notice in writing to the contrary.
24.03 In determining the time within which any action is to be taken as prescribed in this procedure, Saturdays, Sundays and designated holidays shall be excluded.
24.04 The time limits stipulated in this procedure may be extended by mutual agreement between the Employer and the employee and, where appropriate, the Association Representative.
24.05 Where the provisions of clauses 24.07, 24.24 or 24.38 cannot be complied with and it is necessary to present a grievance by mail, the grievance shall be deemed to have been presented on the day on which it is postmarked and it shall be deemed to have been received by the Employer on the day it is delivered to the appropriate office of the department or agency concerned. Similarly the Employer shall be deemed to have delivered a reply at any level on the date on which the letter containing the reply is postmarked, but the time limit within which the grievor may present his grievance at the next higher level shall be calculated from the date on which the Employer's reply was delivered to the address shown on the grievance form.
24.06 A grievance shall not be deemed to be invalid by reason only of the fact that it is not in accordance with the form supplied by the Employer.
Individual grievances
24.07 An employee who wishes to present a grievance at any prescribed level in the grievance procedure, shall transmit this grievance to the employee's immediate supervisor or local officer-in-charge who shall forthwith:
a. forward the grievance to the representative of the Employer authorized to deal with grievances at the appropriate level,
and
b. provide the employee with a receipt stating the date on which the grievance was received by the Employer.
24.08 Presentation of grievance
a. Subject to paragraphs (b) to (g), an employee is entitled to present an individual grievance if he or she feels aggrieved:
i. by the interpretation or application, in respect of the employee, of
A. a provision of a statute or regulation, or of a direction or other instrument made or issued by the Employer, that deals with terms and conditions of employment,
or
B. a provision of a collective agreement or an arbitral award;
or
ii. as a result of any occurrence or matter affecting his or her terms and conditions of employment.
b. An employee may not present an individual grievance in respect of which an administrative procedure for redress is provided under any act of Parliament, other than the Canadian Human Rights Act.
c. Despite paragraph (b), an employee may not present an individual grievance in respect of the right to equal pay for work of equal value.
d. An employee may not present an individual grievance relating to the interpretation or application, in respect of the employee, of a provision of a collective agreement or an arbitral award unless the employee has the approval of and is represented by the bargaining agent for the bargaining unit to which the collective agreement or arbitral award applies.
e. An employee who, in respect of any matter, avails himself or herself of a complaint procedure established by a policy of the Employer may not present an individual grievance in respect of that matter if the policy expressly provides that an employee who avails himself or herself of the complaint procedure is precluded from presenting an individual grievance under this article.
f. An employee may not present an individual grievance relating to any action taken under any instruction, direction or regulation given or made by or on behalf of the Government of Canada in the interest of the safety or security of Canada or any state allied or associated with Canada.
g. For the purposes of paragraph (f), an order made by the Governor in Council is conclusive proof of the matters stated in the order in relation to the giving or making of an instruction, a direction or a regulation by or on behalf of the Government of Canada in the interest of the safety or security of Canada or any state allied or associated with Canada.
24.09 There shall be no more than a maximum of four (4) levels in the grievance procedure. These levels shall be as follows:
a. level 1, first (1st) level of management;
b. levels 2 and 3 where such level or levels are established in Departments or Agencies, intermediate level(s);
c. final level: the deputy minister (or his equivalent) or his delegated representative.
Whenever there are four (4) levels in the grievance procedure, the grievor may elect to waive either level 2 or 3.
24.10 Representatives
a. The Employer shall designate a representative at each level in the grievance procedure and shall inform each employee to whom the procedure applies of the title of the person so designated together with the title and address of the immediate supervisor or local officer-in-charge to whom a grievance is to be presented.
b. This information shall be communicated to employees by means of notices posted by the Employer in places where such notices are most likely to come to the attention of the employees to whom the grievance procedure applies, or otherwise as determined by agreement between the Employer and the Association. For the purposes of satisfying the Employer's obligation under this clause, the notices may be posted electronically. Where electronic access is unavailable or impractical a paper copy will be posted.
24.11 An employee may be assisted and/or represented by the Association when presenting a grievance at any level. The Association shall have the right to consult with the Employer with respect to a grievance at each or any level of the grievance procedure.
24.12 An employee may present a grievance to the first (1st) level of the procedure in the manner prescribed in clause 24.07, not later than the twenty-fifth (25th) day after the date on which he is notified orally or in writing or on which he first becomes aware of the action or circumstances giving rise to grievance.
24.13 An employee may present a grievance at each succeeding level in the grievance procedure beyond the first (1st) level either:
a. where the decision is not satisfactory to the employee, within ten (10) days after that decision has been conveyed in writing to the employee by the Employer,
or
b. where the Employer has not conveyed a decision to the employee within the time prescribed in clause 24.14, within twenty-five (25) days after he presented the grievance at the previous level.
24.14 The Employer shall normally reply to an employee's grievance at any level of the grievance procedure, except the final level, within twenty (20) days after the grievance is presented, and within thirty (30) days when the grievance is presented at the final level.
24.15 Where an employee has been represented by the Association in the presentation of his grievance, the Employer will provide the Association with a copy of the Employer's decision at each level of the grievance procedure at the same time that the Employer's decision is conveyed to the employee.
24.16 Where a grievance has been presented up to and including the final level in the grievance process, and the grievance is not one that may be referred to adjudication, the decision on the grievance taken at the final level in the grievance process is final and binding and no further action may be taken under the Federal Public Sector Labour Relations Act.
24.17 Where it appears that the nature of the grievance is such that a decision cannot be given below a particular level of authority, any or all the levels except the final level may be eliminated by agreement of the Employer and the employee, and, where applicable, the Association.
24.18 Where the Employer demotes or terminates an employee for cause pursuant to paragraph 12(1)(c), (d) or (e) of the Financial Administration Act, the grievance procedure set forth in this agreement shall apply, except that the grievance may be presented at the final level only.
24.19 An employee may by written notice to his immediate supervisor or officer-in-charge withdraw a grievance.
24.20 Any employee who fails to present a grievance to the next higher level within the prescribed time limits shall be deemed to have abandoned the grievance unless, due to circumstances beyond his control, he was unable to comply with the prescribed time limits.
24.21 No person shall seek by intimidation, by threat of dismissal or by any other kind of threat to cause an employee to abandon his grievance or refrain from exercising his right to present a grievance, as provided in this collective agreement.
24.22 Reference to adjudication
a. An employee may refer to adjudication an individual grievance that has been presented up to and including the final level in the grievance process and that has not been dealt with to the employee's satisfaction if the grievance is related to:
i. the interpretation or application in respect of the employee of a provision of a collective agreement or an arbitral award;
ii. a disciplinary action resulting in termination, demotion, suspension or financial penalty;
iii. demotion or termination under paragraph 12(1)(d) of the Financial Administration Act for unsatisfactory performance or under paragraph 12(1)(e) of that act for any other reason that does not relate to a breach of discipline or misconduct,
b. When an individual grievance has been referred to adjudication and a party to the grievance raises an issue involving the interpretation or application of the Canadian Human Rights Act, that party must, in accordance with the regulations, give notice of the issue to the Canadian Human Rights Commission.
c. The Canadian Human Rights Commission has standing in adjudication proceedings for the purpose of making submissions regarding an issue referred to in paragraph (b).
d. Nothing in paragraph (a) above is to be construed or applied as permitting the referral to adjudication of an individual grievance with respect to
i. any termination of employment under the Public Service Employment Act;
or
ii. any deployment under the Public Service Employment Act, other than the deployment of the employee who presented the grievance.
24.23 Before referring an individual grievance related to matters referred to in paragraph 24.22(a)(i), the employee must obtain the approval of his or her bargaining agent to represent him or her in the adjudication proceedings.
Group grievances
24.24 The Association may present a grievance at any prescribed level in the grievance procedure, and shall transmit this grievance to the officer-in-charge who shall forthwith:
a. forward the grievance to the representative of the Employer authorized to deal with grievances at the appropriate level,
and
b. provide the Association with a receipt stating the date on which the grievance was received by the Employer.
24.25 Presentation of group grievance
a. The bargaining agent for a bargaining unit may present to the Employer a group grievance on behalf of employees in the bargaining unit who feel aggrieved by the interpretation or application, common in respect of those employees, of a provision of a collective agreement or an arbitral award.
b. In order to present the grievance, the Association must first obtain the consent of each of the employees concerned in the form provided for by the regulations. The consent of an employee is valid only in respect of the particular group grievance for which it is obtained.
c. The group grievance must relate to employees in a single portion of the federal public administration.
d. The Association may not present a group grievance in respect of which an administrative procedure for redress is provided under any act of Parliament, other than the Canadian Human Rights Act.
e. Despite paragraph (d), the Association may not present a group grievance in respect of the right to equal pay for work of equal value.
f. If an employee has, in respect of any matter, availed himself or herself of a complaint procedure established by a policy of the Employer, the Association may not include that employee as one on whose behalf it presents a group grievance in respect of that matter if the policy expressly provides that an employee who avails himself or herself of the complaint procedure is precluded from participating in a group grievance under this article.
g. The Association may not present a group grievance relating to any action taken under any instruction, direction or regulation given or made by or on behalf of the Government of Canada in the interest of the safety or security of Canada or any state allied or associated with Canada.
h. For the purposes of paragraph (g), an order made by the Governor in Council is conclusive proof of the matters stated in the order in relation to the giving or making of an instruction, a direction or a regulation by or on behalf of the Government of Canada in the interest of the safety or security of Canada or any state allied or associated with Canada.
24.26 There shall be no more than a maximum of four (4) levels in the grievance procedure. These levels shall be as follows:
a. level 1, first (1st) level of management;
b. levels 2 and 3 where such level or levels are established in Departments or Agencies, intermediate level(s);
c. final level: the deputy minister (or his equivalent) or his delegated representative.
Whenever there are four (4) levels in the grievance procedure, the Association may elect to waive either level 2 or 3.
24.27 The Employer shall designate a representative at each level in the grievance procedure and shall inform the Association of the title of the person so designated together with the title and address of the officer-in-charge to whom a grievance is to be presented.
24.28 The Association shall have the right to consult with the Employer with respect to a grievance at each or any level of the grievance procedure.
24.29 The Association may present a grievance to the first (1st) level of the procedure in the manner prescribed in clause 24.24, no later than the twenty-fifth (25th) day after the earlier of the day on which the aggrieved employees received notification and the day on which they had knowledge of any act, omission or other matter giving rise to the group grievance.
24.30 The Association may present a grievance at each succeeding level in the grievance procedure beyond the first (1st) level either:
a. where the decision or offer for settlement is not satisfactory to the Association, within ten (10) days after that decision or offer for settlement has been conveyed in writing to the Association by the Employer,
or
b. where the Employer has not conveyed a decision to the Association within the time prescribed in clause 24.31, within twenty-five (25) days after the Association presented the grievance at the previous level.
24.31 The Employer shall normally reply to the Association's grievance at any level of the grievance procedure, except the final level, within twenty (20) days after the grievance is presented, and within thirty (30) days when the grievance is presented at the final level.
24.32 Where it appears that the nature of the grievance is such that a decision cannot be given below a particular level of authority, any or all the levels except the final level may be eliminated by agreement of the Employer and the Association.
24.33 The Association may by written notice to the officer-in-charge withdraw a grievance.
24.34 Opting out of a group grievance
a. An employee in respect of whom a group grievance has been presented may, at any time before a final decision is made in respect of the grievance, notify the Association that the employee no longer wishes to be involved in the group grievance.
b. The Association shall provide to the representatives of the Employer authorized to deal with the grievance, a copy of the notice received pursuant to paragraph (a) above.
c. After receiving the notice, the Association may not pursue the grievance in respect of the employee.
24.35 The Association failing to present a grievance to the next higher level within the prescribed time limits shall be deemed to have abandoned the grievance unless, due to circumstances beyond its control, it was unable to comply with the prescribed time limits.
24.36 No person shall seek by intimidation, by threat of dismissal or by any other kind of threat to cause the Association to abandon the grievance or refrain from exercising the right to present a grievance, as provided in this collective agreement.
24.37 Reference to adjudication
a. The Association may refer to adjudication any group grievance that has been presented up to and including the final level in the grievance process and that has not been dealt with to its satisfaction.
b. When a group grievance has been referred to adjudication and a party to the grievance raises an issue involving the interpretation or application of the Canadian Human Rights Act, that party must, in accordance with the regulations, give notice of the issue to the Canadian Human Rights Commission.
c. The Canadian Human Rights Commission has standing in adjudication proceedings for the purpose of making submissions regarding an issue referred to in paragraph (b).
Policy grievances
24.38 The Employer and the Association may present a grievance at the prescribed level in the grievance procedure, and forward the grievance to the representative of the Association or the Employer, as the case may be, authorized to deal with the grievance. The party who receives the grievance shall provide the other party with a receipt stating the date on which the grievance was received by him.
24.39 Presentation of policy grievance
a. The Employer and the Association may present a policy grievance to the other in respect of the interpretation or application of the collective agreement or arbitral award as it relates to either of them or to the bargaining unit generally.
b. Neither the Employer nor the Association may present a policy grievance in respect of which an administrative procedure for redress is provided under any other act of Parliament, other than the Canadian Human Rights Act.
c. Despite paragraph (b), neither the Employer nor the Association may present a policy grievance in respect of the right to equal pay for work of equal value.
d. The Association may not present a policy grievance relating to any action taken under any instruction, direction or regulation given or made by or on behalf of the Government of Canada in the interest of the safety or security of Canada or any state allied or associated with Canada.
e. For the purposes of paragraph (d), an order made by the Governor in Council is conclusive proof of the matters stated in the order in relation to the giving or making of an instruction, a direction or a regulation by or on behalf of the Government of Canada in the interest of the safety or security of Canada or any state allied or associated with Canada.
24.40 There shall be no more than one (1) level in the grievance procedure.
24.41 The Employer and the Association shall designate a representative and shall notify each other of the title of the person so designated together with the title and address of the officer-in-charge to whom a grievance is to be presented.
24.42 The Employer and the Association may present a grievance in the manner prescribed in clause 24.38, no later than the twenty-fifth (25th) day after the earlier of the day on which it received notification and the day on which it had knowledge of any act, omission or other matter giving rise to the policy grievance.
24.43 The Employer and the Association shall normally reply to the grievance within sixty (60) days when the grievance is presented.
24.44 The Employer or the Association, as the case may be, may by written notice to the officer-in-charge withdraw a grievance.
24.45 No person shall seek by intimidation, by threat of dismissal or by any other kind of threat to cause the Employer or the Association to abandon the grievance or refrain from exercising the right to present a grievance, as provided in this collective agreement.
24.46 Reference to adjudication
a. A party that presents a policy grievance may refer it to adjudication.
b. When a policy grievance has been referred to adjudication and a party to the grievance raises an issue involving the interpretation or application of the Canadian Human Rights Act, that party must, in accordance with the regulations, give notice of the issue to the Canadian Human Rights Commission.
c. The Canadian Human Rights Commission has standing in adjudication proceedings for the purpose of making submissions regarding an issue referred to in paragraph (b).
Article 25: notice to amend or renew the collective agreement
25.01 Should either party, at the expiration of this agreement, desire amendments or alterations therein for its renewal, a written notice to that effect shall be served upon the other party in accordance with the provisions of the Federal Public Sector Labour Relations Act.
Article 26: joint consultation
26.01 The Employer and the Association recognize that consultation and communication on matters of mutual interest outside the terms of the collective agreement should promote constructive and harmonious Employer-Association relations.
26.02 It is agreed that Labour-Management meetings are an appropriate forum for consultation; that a subject for discussion may be within or without the authority of either the Management or Association representatives. In these circumstances, consultation may take place for the purpose of providing information, discussing the application of policy or air problems to promote understanding, but it is expressly understood that no commitment may be made by either party on a subject that is not within their authority or jurisdiction, nor shall any commitment made be construed as to alter, amend, add to, or modify the terms of this agreement.
26.03 The following matters may be regarded as appropriate subjects for joint consultation:
a. accident prevention;
b. productivity;
c. leave administration;
d. training;
e. contracting out.
Article 27: National Joint Council agreements
27.01 Agreements concluded by the National Joint Council (NJC) of the public service on items which may be included in a collective agreement, and which the parties to this agreement have endorsed after December 6, 1978, will form part of this collective agreement, subject to the Federal Public Sector Labour Relations Act (FPSLRA) and any legislation by Parliament that has been or may be, as the case may be, established pursuant to any act specified in section 113(b) of the FPSLRA.
27.02 NJC items which may be included in a collective agreement are those items which the parties to the NJC agreement have designated as such or upon which the Chairman of the Federal Public Sector Labour Relations and Employment Board has made a ruling pursuant to paragraph (c) of the NJC Memorandum of Understanding which became effective December 6, 1978.
27.03 The directives, policies or regulations as amended from time to time by National Joint Council recommendation, and which have been approved by the Treasury Board of Canada, form part of this collective agreement. During the term of this collective agreement, other directives, policies or regulations may be added.
Article 28: recognition
28.01 The Employer recognizes the Federal Government Dockyard Chargehands Association as the exclusive bargaining agent for all Chargehands and Production Supervisors in the Ship Repair Occupational Group located on the east coast described in the certificate issued to the Association by the Federal Public Sector Labour Relations and Employment Board on the twentieth (20th) day of May, 1999.
Part IV: other terms and conditions
Article 29: employee performance review and employee files
29.01 When a formal review of an employee's performance is made, the employee concerned shall be given an opportunity to discuss and then sign the review form in question to indicate that its contents have been read and understood. A copy of the completed review form will be provided to the employee.
29.02 Upon written request of an employee, the personnel file of that employee shall be made available once per year for the employee's examination in the presence of an authorized representative of the Employer.
Article 30: sexual harassment
30.01 The Association and the Employer recognize the right of employees to work in an environment free from sexual harassment and agree that sexual harassment will not be tolerated in the workplace.
30.02
a. Any level in the grievance procedure shall be waived if a person hearing the grievance is the subject of the complaint.
b. If by reason of paragraph (a) a level in the grievance procedure is waived, no other level shall be waived except by mutual agreement.
30.03 By mutual agreement, the parties may use a mediator in an attempt to settle a grievance dealing with sexual harassment. The selection of the mediator will be by mutual agreement.
**Article 31: no discrimination
31.01 There shall be no discrimination, interference, restriction, coercion, harassment, intimidation, or any disciplinary action exercised or practiced with respect to an employee by reason of age, race, creed, colour, national or ethnic origin, religious affiliation, sex, sexual orientation, gender identity and expression, family status, genetic characteristics, disability, membership or activity in the Association, marital status or a conviction for which a pardon has been granted or a record suspended.
31.02
a. Any level in the grievance procedure shall be waived if a person hearing the grievance is the subject of the complaint.
b. If by reason of paragraph (a) a level in the grievance procedure is waived, no other level shall be waived except by mutual agreement.
31.03 By mutual agreement, the parties may use a mediator in an attempt to settle a grievance dealing with discrimination. The selection of the mediator will be by mutual agreement.
Part V: pay and duration
Article 32: pay
32.01 Except as provided in this article, the terms and conditions governing the application of pay to employees are not affected by this agreement.
32.02 An employee is entitled to be paid for services rendered at the rate of pay specified in Appendix "A" for the classification of the position to which he is appointed.
32.03
a. The rates of pay set forth in Appendix “A” shall become effective on the date specified therein.
b. Where the rates of pay set forth in Appendix “A” have an effective date prior to the date of signing of the collective agreement, the following shall apply:
i. "retroactive period," for the purpose of subparagraphs 32.03(b)(ii) to (v), means the period from the revision up to and including the day before the day the collective agreement is signed or when an arbitral award is rendered therefor;
ii. a retroactive upward revision in rates of pay shall apply to employees, former employees or in the case of death, the estates of former employees who were employees in the group during the retroactive period;
iii. for initial appointments made during the retroactive period, the rate of pay selected in the revised rates of pay is the rate which is immediately below the rate of pay being received prior to the revision;
iv. for promotions, demotions, deployments, transfers or acting situations effective during the retroactive period, the rate of pay shall be recalculated, in accordance with the Directive on Terms and Conditions of Employment, using the revised rates of pay. If the recalculated rate of pay is less than the rate of pay the employee was previously receiving, the revised rate of pay shall be the rate, which is nearest to, but not less than the rate of pay being received prior to the revision. However, where the recalculated rate is at a lower step in the range, the new rate shall be the rate of pay immediately below the rate of pay being received prior to the revision;
v. no payment or no notification shall be made pursuant to paragraph 32.03(b) for one dollar ($1.00) or less.
32.04 Acting pay
When an employee is required by the Employer to perform substantially the duties of a higher classification level on an acting basis and performs those duties for at least one (1) working day, the employee shall be paid acting pay from the date on which the employee commenced to act for the period in which the employee acts as if the employee had been appointed to that higher classification level.
32.05 When an employee is temporarily required by the Employer to perform the duties of a classification in the bargaining unit with a lower rate of pay than the employee is receiving, the employee shall continue to hold the employee's higher classification and be paid at the rate for that classification.
The provision of this clause shall not apply to an employee on “layoff” as defined in clause 2.01.
32.06 An employee who was receiving a holding rate of pay on the effective date of this agreement shall continue to receive that rate of pay until such time as there is a rate for the employee's classification level which is equal to or higher than the employee's holding rate. At that time, the employee will be paid the rate which is equal to or higher than the employee's holding rate.
32.07 Payments made as a result of clause 32.05 shall not change the holding rates of pay or the holding scale of rates to which an employee is entitled.
32.08 If, during the term of this agreement, a new classification standard is established, and new rates of pay are applied, any disagreement between the parties arising out of the new rates of pay shall be subject to negotiation.
Article 33: agreement reopener
33.01 This agreement may be amended by mutual consent.
Article 34: contracting out
34.01 The Employer will continue past practice in giving all reasonable consideration to continued employment in the public service of employees who would otherwise become redundant because work is contracted out.
Article 35: duration and renewal
35.01 Unless otherwise expressly stipulated, the provisions of this collective agreement shall become effective on the date it is signed.
35.02 This collective agreement shall expire on March 31, 2026.
35.03 The provisions of this collective agreement shall be implemented by the parties within a period of one hundred and eighty (180) days from the date of signing of the collective agreement.
**Appendix A: SR(C) Ship Repair Chargehands and Production Supervisors, East, annual rates of pay (in dollars)
A) Effective April 1, 2022
B) Effective April 1, 2023
C) Effective April 1, 2024
D) Effective April 1, 2025
**SR CPS 1 annual rates of pay (in dollars)
Effective Date: April 1, 2022 (A)
Step 1: 99,120
Step 2: 102,600
Step 3: 107,212
Step 4: 112,574
Effective Date: April 1, 2023 (B)
Step 1: 102,589
Step 2: 106,191
Step 3: 110,964
Step 4: 116,514
Effective Date: April 1, 2024 (C)
Step 1: 104,895
Step 2: 108,586
Step 3: 113,460
Step 4: 119,129
Effective Date: April 1, 2025 (D)
Step 1: 107,255
Step 2: 111,049
Step 3: 116,001
Step 4: 121,809
For clarification purposes SR-MGT-01 employees are paid in the SR-CPS-01 rates of pay.
Pay notes
1. The pay increment date for an employee appointed to a position in the bargaining unit on promotion, demotion or appointment from outside the public service, shall be the first Monday following the increment period listed below as calculated from the date of the promotion, demotion or appointment from outside the public service.
2. The pay increment period is twelve (12) months.
**Appendix B: Archived provisions for the elimination of severance pay for voluntary separations (resignation and retirement)
This appendix is to reflect the language agreed to by the Employer and the Federal Government Dockyard Chargehands Association for the elimination of severance pay for voluntary separations (resignation and retirement) on October 15, 2012. These historical provisions are being reproduced to reflect the agreed language in case of deferred payment.
Article 14: severance pay
Effective October 15, 2012, clauses 14.03 and 14.04 are deleted from the collective agreement.
14.01 For the purpose of this article, the terms:
a. "Employer” includes any organization, service with which is included in the calculation of "continuous employment";
b. “weekly rate of pay” means the employee's annual rate of pay divided by fifty-two decimal one seven six (52.176) applying to the employee's classification, as shown in the instrument of appointment.
14.02 Layoff
An employee with one (1) or more years of continuous employment who is laid off shall be paid severance pay based on completed years of continuous employment. It shall be calculated at the rate of two (2) weeks' pay for the first (1st) year of continuous employment or three (3) weeks' pay for employees with ten (10) or more and less than twenty (20) years' continuous employment, or four (4) weeks' pay for employees with twenty (20) or more years of continuous employment, plus one (1) week's pay for each succeeding completed year of continuous employment on the first layoff and one (1) week's pay for each completed year of continuous employment on a subsequent layoff. In the case of a partial year of continuous employment, one (1) week's pay multiplied by the number of days of continuous employment divided by three hundred and sixty-five (365).
14.03 Resignation
An employee who has ten (10) or more years of continuous employment on resignation shall be paid severance pay calculated by multiplying half the employee's weekly rate of pay on resignation by the number of completed years of continuous employment to a maximum of twenty-six (26) years.
14.04 Retirement
An employee who is entitled to an immediate annuity or an immediate annual allowance under the Public Service Superannuation Act, or who has five (5) years of continuous employment and who has attained the age of fifty-five (55) years and has resigned, shall be paid severance pay calculated by multiplying the employee's weekly rate of pay on termination of employment by the number of completed years of continuous employment to a maximum of thirty (30) years.
14.05 Death
Regardless of any other payment to an employee's estate, if the employee dies there shall be paid to the estate, severance pay calculated by multiplying the employee's weekly rate of pay at the time of death by the number of completed years of continuous employment to a maximum of thirty (30) years.
14.06 Termination for cause for reasons of incapacity
When an employee ceases to be employed by reason of termination for cause for reason of incapacity pursuant to section 12(1)(e) of the Financial Administration Act, one (1) week's pay for each complete year of continuous employment with a maximum benefit of twenty-eight (28) weeks.
14.07 Continuous employment
The period of continuous employment used in the calculation of severance benefits payable to an employee under this article shall be reduced by any period of continuous employment in respect of which the employee was already granted any type of termination benefit by the public service, a federal Crown Corporation, the Canadian Forces or the Royal Canadian Mounted Police. Under no circumstances shall the maximum severance pay provided under this article be pyramided.
For greater certainty, payments made pursuant to clauses 14.09 to 14.12 or similar provisions in other collective agreements shall be considered as a termination benefit for the administration of this article.
14.08 Appointment to a separate agency
An employee who resigns to accept an appointment with an organization listed in Schedule V of the Financial Administration Act shall be paid all severance payments resulting from the application of clause 14.03 (prior to date of signing) or clauses 14.09 to 14.12 (commencing date of signing).
14.09 Severance termination
a. Subject to clause 14.07 above, indeterminate employees on October 15, 2012, shall be entitled to a severance payment equal to one (1) week's pay for each complete year of continuous employment and, in the case of a partial year of continuous employment, one (1) week's pay multiplied by the number of days of continuous employment divided by three hundred and sixty-five (365), to a maximum of thirty (30) weeks.
b. Subject to clause 14.07 above, term employees on October 15, 2012, shall be entitled to a severance payment equal to one (1) week's pay for each complete year of continuous employment, to a maximum of thirty (30) weeks.
Terms of payment
14.10 Options
The amount to which an employee is entitled shall be paid, at the employee's discretion, either:
a. as a single payment at the rate of pay of the employee's substantive position as of October 15, 2012,
or
b. as a single payment at the time of the employee's termination of employment from the core public administration, based on the rate of pay of the employee's substantive position at the date of termination of employment from the core public administration,
or
c. as a combination of (a) and (b), pursuant to paragraph 14.11(c).
14.11 Selection of option
a. The Employer will advise the employee of his or her years of continuous employment no later than three (3) months following date of signing of the collective agreement.
b. The employee shall advise the Employer of the term of payment option selected within six (6) months from the official date of signing of the collective agreement.
c. The employee who opts for the option described in paragraph 14.10(c) must specify the number of complete weeks to be paid out pursuant to paragraph 14.10(a) and the remainder to be paid out pursuant to paragraph 14.10(b).
d. An employee who does not make a selection under paragraph 14.11(b) will be deemed to have chosen option paragraph 14.10(b).
14.12 Appointment from a different bargaining unit
This clause applies in a situation where an employee is appointed into a position in the SR-C bargaining unit from a position outside the SR-C bargaining unit where, at the date of appointment, provisions similar to those in clauses 14.03 and 14.04 are still in force, unless the appointment is only on an acting basis.
a. Subject to clause 14.07 above, on the date an indeterminate employee becomes subject to this agreement after October 15, 2012, he or she shall be entitled to severance termination benefits equal to one (1) week's pay for each complete year of continuous employment and, in the case of a partial year of continuous employment, one (1) week's pay multiplied by the number of days of continuous employment divided by three hundred and sixty-five (365), to a maximum of thirty (30) weeks, based on the employee's rate of pay of his substantive position on the day preceding the appointment.
b. Subject to clause 14.07 above, on the date a term employee becomes subject to this agreement after October 15, 2012, he or she shall be entitled to severance termination benefits equal to one (1) week's pay for each complete year of continuous employment, to a maximum of thirty (30) weeks, based on the employee's rate of pay of his substantive position on the day preceding the appointment.
c. An employee entitled to a severance termination benefits under subparagraph (a) or (b) shall have the same choice of options outlined in clause 14.10; however, the selection of which option must be made within three (3) months of being appointed to the bargaining unit.
d. An employee who does not make a selection under paragraph 14.12(c) will be deemed to have chosen option paragraph 14.10(b).
**Appendix C: Memorandum of agreement on supporting employee wellness
This Memorandum of Agreement is to give effect to the agreement reached between the Employer and the Bargaining Agent (hereinafter referred to as "the parties") regarding issues of employee wellness.
The parties have engaged in meaningful negotiations and co-development of comprehensive EWSP language and program design to capture the key features and other recommendations agreed to by the technical committee and steering committee.
The program and its principles focus on improving employee wellness and the reintegration of employees into the workplace after periods of leave due to illness or injury. The EWSP will be comprised of three parts:
1. The existing sick leave provisions of the collective agreement will be retained;
2. A new paid short-term disability plan;
3. Modifications to the existing disability insurance plan to transition to the new EWSP.
Part 1: Sick leave
The existing sick leave provisions of the collective agreement will be maintained.
An employee’s unused sick leave credits will be converted to a sick leave bank, which can be used during the short-term disability waiting period, for short-term disability top up and to cover absences due to illness that are not covered by the short-term disability plan.
Part 2: Short-term disability (STD) plan
The STD plan will be mandatory and provide coverage for all indeterminate and term employees greater than three (3) months.
The plan will provide income protection for employees who are unable to work for a lengthy period because of illness or injury.
The STD plan will be seamless with the existing disability insurance plan.
The STD plan will come into effect on the date of implementation of the EWSP. On that date, the accumulation of new sick leave credits under the collective agreement will cease.
The STD plan will have the following features:
• Benefits for up to 26 weeks (130 working days) with income support replacement at 90% of the employee’s salary.
• A 7-day waiting period for most illnesses and injuries.
• A 1-day waiting period for employees who are hospitalized, who are undergoing surgery and for those with chronic and episodic illnesses.
• Employees can use their sick leave credits to cover the waiting period and to top up their STD benefit from 90% to 100%.
• Travel time for diagnosis and treatment will not be covered by the STD plan. Employees can use their sick leave credits to cover these absences.
• Absences due to illness and injury that are not covered by the STD plan, such as short-term illnesses, can be covered by the employee’s sick leave credits.
Part 3: Disability insurance (DI) plan
The DI plan will continue to provide income protection for employees who have exhausted their STD benefits and who are unable to return to work.
The DI plan will be modified to include the following features:
• A new benefit of 85% of salary, which will be available after the 26-week STD period ends.
• An increase to the salary threshold for catastrophic injuries from $150,000 to $200,000.
• A new provision that will allow employees to work while on DI and still receive a partial benefit.
The changes to the DI plan will come into effect on the date of implementation of the EWSP.
The parties agree to continue to work together to develop the full details of the EWSP, including the governance structure and the claims adjudication process. The parties also agree to meet within 180 days of the signing of this agreement to finalize the implementation of the EWSP.
**Appendix D: Memorandum of understanding between the Treasury Board of Canada and the Federal Government Dockyard Chargehands Association with respect to gender-inclusive language
This memorandum is to give effect to the agreement reached between the Treasury Board of Canada and the Federal Government Dockyard Chargehands Association regarding the review of language in the Association collective agreement.
Both parties are committed to and support gender neutrality and inclusivity. To that end, the parties commit to, during the life of the above-noted collective agreements, establishing a Joint Committee to review the collective agreements to identify opportunities to render the language more gender-inclusive. The parties agree that any changes in language will not result in changes in application, scope or value.
Both parties acknowledge that gender inclusivity is more difficult to achieve in the French language compared to the English language, but are committed nonetheless to further supporting and increasing gender neutrality and inclusivity in the collective agreement.
The Joint Committee agrees to begin their work and will endeavor to finalize the review by December 2022. These timelines may be extended by mutual agreement.
**Appendix E: Memorandum of understanding with respect to implementation of the collective agreement
This memorandum of understanding (MOU) is to give effect to the agreement reached between the Employer and the Federal Government Dockyard Chargehands Association regarding issues concerning the implementation of the collective agreement.
The parties acknowledge that the Phoenix pay system issues have created unforeseen and unprecedented challenges for the implementation of collective agreements in the federal public service. As such, the parties have agreed to the following measures to facilitate the implementation of this collective agreement:
1. The collective agreement will be implemented within 180 days of its signing.
2. The Employer will provide a detailed breakdown of the retroactive payments to each employee.
3. The Employer will provide a $250 lump-sum payment to each employee in recognition of the extended implementation timeline and the additional work required to validate the retroactive payments. This payment will be made within 180 days of the signing of the collective agreement.
4. The Employer will provide a report to the Association on the status of the implementation of the collective agreement every 90 days.
5. The parties will meet within 90 days of the signing of the collective agreement to discuss the lessons learned from the implementation of this collective agreement and to identify best practices for future negotiations.
This MOU will expire upon the full implementation of the collective agreement.
**Appendix F: Memorandum of understanding between the Treasury Board of Canada and the Federal Government Dockyard Chargehands Association with respect to workplace harassment
This memorandum is to give effect to the agreement reached between the Treasury Board and the Federal Government Dockyard Chargehands Association.
Both parties share the objective of creating healthy work environments that are free from harassment and violence. In the context of the passage of Bill C-65 An Act to amend the Canada Labour Code by the Government of Canada, as well as the Clerk of the Privy Council's initiative to take action to eliminate workplace harassment, the Treasury Board is developing a new directive covering both harassment and violence situations.
During this process, the Treasury Board will consult with the members of National Joint Council (NJC) on the following:
• mechanisms to guide and support employees through the harassment resolution process;
• redress for the detrimental impacts on an employee resulting from an incident of harassment;
and
• ensuring that employees can report harassment without fear of reprisal.
The Employer also agrees to hold bilateral discussion with the Association if the Association requests it. Any report resulting from these discussions will be shared with the NJC.
The implementation and application of this directive do not fall within the purview of this MOU or the collective agreement.
This memorandum expires upon issuance of the new directive or March 31, 2022, whichever comes first.
**Appendix G: Memorandum of understanding between the Treasury Board of Canada and the Federal Government Dockyard Chargehands Association with respect to leave for union business: cost recovery
This memorandum of understanding (MoU) is to give effect to an agreement reached between the Treasury Board (the Employer) and the Federal Government Dockyard Chargehands Association to implement a system of cost recovery for leave for Union business.
The parties agree to this MoU as a direct result of current Phoenix pay system implementation concerns related to the administration of leave without pay for Union business.
The MoU shall form part of the Ship Repair Chargehands (SR(C)) collective agreement expiring March 31, 2022.
• Leave granted to an employee under the following clauses of the collective agreement: 21.06, 21.07 and 21.08 will be with pay for a total cumulative maximum period of three (3) months per fiscal year.
• It is agreed that leave with pay granted under the above-noted clauses for Union business will be paid for by the Employer pursuant to this MoU, effective upon its signature.
• Federal Government Dockyard Chargehands Association shall then reimburse the Employer for the actual gross salary paid for each person-day, in addition to which shall also be paid to the Employer by the Association an amount equal to six per cent (6%) of the actual gross salary paid for each person-day, which sum represents the Employer's contribution for the benefits the employee acquired at work during the period of approved leave with pay pursuant to this MoU.
• On a bimonthly basis, and within 120 days of the end of the relevant period of leave, the hiring Department/Agency will invoice the Federal Government Dockyard Chargehands Association for the amount owed to them by virtues of this understanding. The amount of the gross salaries and the number of days of leave taken for each employee will be included in the statement.
• Federal Government Dockyard Chargehands Association agrees to reimburse the Department/Agency for the invoice within sixty (60) days of the date of the invoice.
**Appendix H: Memorandum of understanding with respect to telework
This memorandum of understanding (MOU) is to give effect to the agreement reached between the Treasury Board (the Employer) and the Federal Government Dockyard Chargehands Association (the Association) regarding telework.
Preamble
The Employer and the Association recognize that telework is a flexible work arrangement that can benefit both employees and the Employer. The parties are committed to fostering a modern and inclusive workplace that supports employee well-being and productivity.
This MOU is intended to provide a framework for the implementation of telework in the workplace. The parties agree that telework arrangements will be implemented in a fair, equitable, and transparent manner.
1. General principles
1.1 Telework is a voluntary work arrangement that allows employees to work from a location other than their designated workplace.
1.2 Telework arrangements are subject to operational requirements and the approval of the Employer.
1.3 The Employer will provide employees with the necessary equipment and technology to perform their duties while teleworking.
1.4 Employees who telework are subject to the same terms and conditions of employment as employees who work from the designated workplace.
1.5 The Employer will ensure that employees who telework are not disadvantaged in terms of career advancement, training, or other opportunities.
2. Eligibility
2.1 All employees in the bargaining unit are eligible to apply for a telework arrangement.
2.2 The Employer will consider each request for a telework arrangement on a case-by-case basis, taking into account the following factors:
a. The nature of the employee's duties and responsibilities;
b. The operational requirements of the workplace;
c. The employee's ability to work independently and productively from a remote location;
d. The availability of suitable workspace and equipment at the remote location.
3. Telework agreement
3.1 A written telework agreement will be established between the Employer and the employee, outlining the terms and conditions of the telework arrangement.
3.2 The telework agreement will include the following information:
a. The duration of the telework arrangement;
b. The employee's work schedule and hours of work;
c. The employee's designated workplace and remote work location;
d. The equipment and technology to be provided by the Employer;
e. The responsibilities of the employee and the Employer;
f. The process for monitoring and evaluating the telework arrangement;
g. The conditions under which the telework arrangement may be terminated.
4. Termination of telework arrangement
4.1 A telework arrangement may be terminated by either the Employer or the employee with reasonable notice.
4.2 The Employer may terminate a telework arrangement for operational reasons or if the employee is not meeting the performance expectations of the position.
4.3 The employee may terminate a telework arrangement for any reason.
5. Grievance procedure
5.1 Any dispute arising from the interpretation or application of this MOU will be subject to the grievance procedure in the collective agreement.
This MOU will expire on the same date as the collective agreement.
`,cR=()=>{const[t,e]=ct.useState("sre"),[n,o]=ct.useState({sre:[DS],src:[NS]}),[a,u]=ct.useState(!1),[c,f]=ct.useState(!1),[p,h]=ct.useState({title:"",text:""}),y=ct.useRef(null),g=ct.useRef(null),b=ct.useRef(null),C=ct.useCallback(async()=>{try{const D=new RS({apiKey:"AIzaSyBplq3ASdHCaPkWBJBAiI-wOXoRmbL76c8"}),z=`You are a helpful AI assistant knowledgeable about the collective agreement for the Ship Repair (East) (SR (E)) group. Your task is to answer questions based *only* on the text of the agreement provided below.

When a user asks about the pay rate for a specific job classification, you MUST respond by displaying the full pay table for that classification's pay group. You MUST also list all job classifications that fall within that same pay group. The specific classification the user asked about MUST be included in this list and formatted in bold (for example, using markdown like **EME-10 Marine Mechanic Tech.**). Clearly state the Pay Group number.

If the user's question cannot be answered from the provided text, you must state that the information is not available in the agreement. Do not use any external knowledge or make assumptions.

Here is the full text of the agreement:
---
${$p}
---
`,G=`You are a helpful AI assistant knowledgeable about the collective agreement for the Ship Repair (All Chargehand and Production Supervisor Employees Located on the East Coast) (SR (C)) group. Your task is to answer questions based *only* on the text of the agreement provided below.

When a user asks about the pay rate for a specific job classification, you MUST respond by displaying the full pay table for that classification's pay group. You MUST also list all job classifications that fall within that same pay group. The specific classification the user asked about MUST be included in this list and formatted in bold (for example, using markdown like **SR CPS 1**). Clearly state the Pay Group number.

If the user's question cannot be answered from the provided text, you must state that the information is not available in the agreement. Do not use any external knowledge or make assumptions.

Here is the full text of the agreement:
---
${Jp}
---
`;y.current=D.chats.create({model:"gemini-2.5-flash",config:{systemInstruction:z}}),g.current=D.chats.create({model:"gemini-2.5-flash",config:{systemInstruction:G}})}catch(D){console.error("Failed to initialize Gemini AI:",D);const z={id:"error-init",sender:zn.BOT,text:"I'm having trouble initializing. Please check the console for errors."};o(G=>({sre:[...G.sre,z],src:[...G.src,z]}))}},[]);ct.useEffect(()=>{C()},[C]),ct.useEffect(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[n,a,t]);const T=ct.useCallback(async D=>{const z=t==="sre"?y.current:g.current;if(!z){console.error(`Chat for ${t} not initialized.`);return}u(!0);const G={id:`user-${Date.now()}`,text:D,sender:zn.USER};o(L=>({...L,[t]:[...L[t],G]}));try{const L=await z.sendMessageStream({message:D}),Q=`bot-${Date.now()}`;let se="",Z=!1;for await(const N of L){if(!Z){const J={id:Q,text:"",sender:zn.BOT};o(ee=>({...ee,[t]:[...ee[t],J]})),Z=!0}se+=N.text,o(J=>{const ee=J[t];return{...J,[t]:ee.map(ne=>ne.id===Q?{...ne,text:se}:ne)}})}}catch(L){console.error("Error sending message:",L);const Q=L instanceof Error?L.message:"An unknown error occurred.",se={id:`bot-error-${Date.now()}`,text:`Sorry, something went wrong: ${Q}`,sender:zn.BOT};o(Z=>({...Z,[t]:[...Z[t],se]}))}finally{u(!1)}},[t]),A=ct.useCallback(D=>{h({title:D==="sre"?"Ship Repair (East) Collective Agreement":"Chargehands (East Coast) Collective Agreement",text:D==="sre"?$p:Jp}),f(!0)},[]),R=()=>{f(!1)},_=n[t],U=()=>Y.jsxs("div",{className:"border-b border-gray-700 bg-gray-800",children:[Y.jsxs("div",{className:"flex",children:[Y.jsx("button",{onClick:()=>e("sre"),"aria-selected":t==="sre",className:`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${t==="sre"?"bg-gray-900 text-white border-b-2 border-blue-500":"text-gray-400 hover:bg-gray-700"}`,children:"Ship Repair (East)"}),Y.jsx("button",{onClick:()=>e("src"),"aria-selected":t==="src",className:`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${t==="src"?"bg-gray-900 text-white border-b-2 border-blue-500":"text-gray-400 hover:bg-gray-700"}`,children:"Chargehands (East Coast)"})]}),Y.jsxs("div",{className:"flex",children:[Y.jsx("div",{className:"w-1/2 p-2",children:Y.jsx("button",{onClick:()=>A("sre"),className:"w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"View full Ship Repair (East) agreement",children:"View Full Agreement"})}),Y.jsx("div",{className:"w-1/2 p-2",children:Y.jsx("button",{onClick:()=>A("src"),className:"w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500","aria-label":"View full Chargehands (East Coast) agreement",children:"View Full Agreement"})})]})]});return Y.jsxs("div",{className:"flex flex-col h-screen bg-gray-900 text-white max-w-4xl mx-auto border-x border-gray-700",children:[Y.jsx("header",{className:"p-4 border-b border-gray-700 shadow-md bg-gray-800",children:Y.jsx("h1",{className:"text-2xl font-bold text-center",children:"Union Agreement Chat Bot"})}),U(),Y.jsxs("div",{ref:b,className:"flex-grow p-4 overflow-y-auto space-y-4",children:[_.map(D=>Y.jsx(iR,{message:D},D.id)),a&&Y.jsx(aR,{})]}),Y.jsx(rR,{onSendMessage:T,isLoading:a}),Y.jsx(uR,{isOpen:c,onClose:R,title:p.title,content:p.text})]})},Ry=document.getElementById("root");if(!Ry)throw new Error("Could not find root element to mount to");const dR=Uv.createRoot(Ry);dR.render(Y.jsx(Pv.StrictMode,{children:Y.jsx(cR,{})}));
