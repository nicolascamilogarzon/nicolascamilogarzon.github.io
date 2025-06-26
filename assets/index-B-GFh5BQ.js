(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Eo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const fe={},Bn=[],yt=()=>{},Wf=()=>!1,Gs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),So=t=>t.startsWith("onUpdate:"),be=Object.assign,Ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qf=Object.prototype.hasOwnProperty,le=(t,e)=>qf.call(t,e),q=Array.isArray,Wn=t=>Wi(t)==="[object Map]",Js=t=>Wi(t)==="[object Set]",Xa=t=>Wi(t)==="[object Date]",Z=t=>typeof t=="function",ve=t=>typeof t=="string",It=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Oc=t=>(ge(t)||Z(t))&&Z(t.then)&&Z(t.catch),Dc=Object.prototype.toString,Wi=t=>Dc.call(t),Kf=t=>Wi(t).slice(8,-1),Nc=t=>Wi(t)==="[object Object]",Co=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=Eo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ys=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zf=/-(\w)/g,it=Ys(t=>t.replace(zf,(e,n)=>n?n.toUpperCase():"")),Gf=/\B([A-Z])/g,sn=Ys(t=>t.replace(Gf,"-$1").toLowerCase()),Xs=Ys(t=>t.charAt(0).toUpperCase()+t.slice(1)),Or=Ys(t=>t?`on${Xs(t)}`:""),Xt=(t,e)=>!Object.is(t,e),_s=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lc=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Qr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Jf=t=>{const e=ve(t)?Number(t):NaN;return isNaN(e)?t:e};let Qa;const Qs=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ve(i)?Zf(i):Po(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(ve(t)||ge(t))return t}const Yf=/;(?![^(]*\))/g,Xf=/:([^]+)/,Qf=/\/\*[^]*?\*\//g;function Zf(t){const e={};return t.replace(Qf,"").split(Yf).forEach(n=>{if(n){const i=n.split(Xf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zs(t){let e="";if(ve(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const i=Zs(t[n]);i&&(e+=i+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",td=Eo(ed);function Mc(t){return!!t||t===""}function nd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=er(t[i],e[i]);return n}function er(t,e){if(t===e)return!0;let n=Xa(t),i=Xa(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=It(t),i=It(e),n||i)return t===e;if(n=q(t),i=q(e),n||i)return n&&i?nd(t,e):!1;if(n=ge(t),i=ge(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in t){const c=t.hasOwnProperty(a),h=e.hasOwnProperty(a);if(c&&!h||!c&&h||!er(t[a],e[a]))return!1}}return String(t)===String(e)}function xc(t,e){return t.findIndex(n=>er(n,e))}const Uc=t=>!!(t&&t.__v_isRef===!0),Fc=t=>ve(t)?t:t==null?"":q(t)||ge(t)&&(t.toString===Dc||!Z(t.toString))?Uc(t)?Fc(t.value):JSON.stringify(t,jc,2):String(t),jc=(t,e)=>Uc(e)?jc(t,e.value):Wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[Dr(i,o)+" =>"]=r,n),{})}:Js(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dr(n))}:It(e)?Dr(e):ge(e)&&!q(e)&&!Nc(e)?String(e):e,Dr=(t,e="")=>{var n;return It(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class id{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function sd(){return Ke}let pe;const Nr=new WeakSet;class Vc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nr.has(this)&&(Nr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Za(this),Bc(this);const e=pe,n=lt;pe=this,lt=!0;try{return this.fn()}finally{Wc(this),pe=e,lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oo(e);this.deps=this.depsTail=void 0,Za(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zr(this)&&this.run()}get dirty(){return Zr(this)}}let $c=0,Si,Ai;function Hc(t,e=!1){if(t.flags|=8,e){t.next=Ai,Ai=t;return}t.next=Si,Si=t}function Ro(){$c++}function ko(){if(--$c>0)return;if(Ai){let e=Ai;for(Ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Si;){let e=Si;for(Si=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Bc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wc(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Oo(i),rd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Zr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function qc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Li))return;t.globalVersion=Li;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Zr(t)){t.flags&=-3;return}const n=pe,i=lt;pe=t,lt=!0;try{Bc(t);const r=t.fn(t._value);(e.version===0||Xt(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{pe=n,lt=i,Wc(t),t.flags&=-3}}function Oo(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Oo(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function rd(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let lt=!0;const Kc=[];function rn(){Kc.push(lt),lt=!1}function on(){const t=Kc.pop();lt=t===void 0?!0:t}function Za(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pe;pe=void 0;try{e()}finally{pe=n}}}let Li=0;class od{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Do{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pe||!lt||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new od(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,zc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=i)}return n}trigger(e){this.version++,Li++,this.notify(e)}notify(e){Ro();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ko()}}}function zc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zc(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const eo=new WeakMap,bn=Symbol(""),to=Symbol(""),Mi=Symbol("");function Oe(t,e,n){if(lt&&pe){let i=eo.get(t);i||eo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Do),r.map=i,r.key=n),r.track()}}function Rt(t,e,n,i,r,o){const a=eo.get(t);if(!a){Li++;return}const c=h=>{h&&h.trigger()};if(Ro(),e==="clear")a.forEach(c);else{const h=q(t),d=h&&Co(n);if(h&&n==="length"){const p=Number(i);a.forEach((E,P)=>{(P==="length"||P===Mi||!It(P)&&P>=p)&&c(E)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),d&&c(a.get(Mi)),e){case"add":h?d&&c(a.get("length")):(c(a.get(bn)),Wn(t)&&c(a.get(to)));break;case"delete":h||(c(a.get(bn)),Wn(t)&&c(a.get(to)));break;case"set":Wn(t)&&c(a.get(bn));break}}ko()}function Fn(t){const e=ae(t);return e===t?e:(Oe(e,"iterate",Mi),tt(t)?e:e.map(De))}function tr(t){return Oe(t=ae(t),"iterate",Mi),t}const ad={__proto__:null,[Symbol.iterator](){return Lr(this,Symbol.iterator,De)},concat(...t){return Fn(this).concat(...t.map(e=>q(e)?Fn(e):e))},entries(){return Lr(this,"entries",t=>(t[1]=De(t[1]),t))},every(t,e){return Ct(this,"every",t,e,void 0,arguments)},filter(t,e){return Ct(this,"filter",t,e,n=>n.map(De),arguments)},find(t,e){return Ct(this,"find",t,e,De,arguments)},findIndex(t,e){return Ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ct(this,"findLast",t,e,De,arguments)},findLastIndex(t,e){return Ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mr(this,"includes",t)},indexOf(...t){return Mr(this,"indexOf",t)},join(t){return Fn(this).join(t)},lastIndexOf(...t){return Mr(this,"lastIndexOf",t)},map(t,e){return Ct(this,"map",t,e,void 0,arguments)},pop(){return _i(this,"pop")},push(...t){return _i(this,"push",t)},reduce(t,...e){return el(this,"reduce",t,e)},reduceRight(t,...e){return el(this,"reduceRight",t,e)},shift(){return _i(this,"shift")},some(t,e){return Ct(this,"some",t,e,void 0,arguments)},splice(...t){return _i(this,"splice",t)},toReversed(){return Fn(this).toReversed()},toSorted(t){return Fn(this).toSorted(t)},toSpliced(...t){return Fn(this).toSpliced(...t)},unshift(...t){return _i(this,"unshift",t)},values(){return Lr(this,"values",De)}};function Lr(t,e,n){const i=tr(t),r=i[e]();return i!==t&&!tt(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const ld=Array.prototype;function Ct(t,e,n,i,r,o){const a=tr(t),c=a!==t&&!tt(t),h=a[e];if(h!==ld[e]){const E=h.apply(t,o);return c?De(E):E}let d=n;a!==t&&(c?d=function(E,P){return n.call(this,De(E),P,t)}:n.length>2&&(d=function(E,P){return n.call(this,E,P,t)}));const p=h.call(a,d,i);return c&&r?r(p):p}function el(t,e,n,i){const r=tr(t);let o=n;return r!==t&&(tt(t)?n.length>3&&(o=function(a,c,h){return n.call(this,a,c,h,t)}):o=function(a,c,h){return n.call(this,a,De(c),h,t)}),r[e](o,...i)}function Mr(t,e,n){const i=ae(t);Oe(i,"iterate",Mi);const r=i[e](...n);return(r===-1||r===!1)&&xo(n[0])?(n[0]=ae(n[0]),i[e](...n)):r}function _i(t,e,n=[]){rn(),Ro();const i=ae(t)[e].apply(t,n);return ko(),on(),i}const cd=Eo("__proto__,__v_isRef,__isVue"),Gc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(It));function ud(t){It(t)||(t=String(t));const e=ae(this);return Oe(e,"has",t),e.hasOwnProperty(t)}class Jc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?wd:Zc:o?Qc:Xc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=q(e);if(!r){let h;if(a&&(h=ad[n]))return h;if(n==="hasOwnProperty")return ud}const c=Reflect.get(e,n,Ne(e)?e:i);return(It(n)?Gc.has(n):cd(n))||(r||Oe(e,"get",n),o)?c:Ne(c)?a&&Co(n)?c:c.value:ge(c)?r?eu(c):Lo(c):c}}class Yc extends Jc{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];if(!this._isShallow){const h=En(o);if(!tt(i)&&!En(i)&&(o=ae(o),i=ae(i)),!q(e)&&Ne(o)&&!Ne(i))return h?!1:(o.value=i,!0)}const a=q(e)&&Co(n)?Number(n)<e.length:le(e,n),c=Reflect.set(e,n,i,Ne(e)?e:r);return e===ae(r)&&(a?Xt(i,o)&&Rt(e,"set",n,i):Rt(e,"add",n,i)),c}deleteProperty(e,n){const i=le(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Rt(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!It(n)||!Gc.has(n))&&Oe(e,"has",n),i}ownKeys(e){return Oe(e,"iterate",q(e)?"length":bn),Reflect.ownKeys(e)}}class hd extends Jc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fd=new Yc,dd=new hd,pd=new Yc(!0);const no=t=>t,ds=t=>Reflect.getPrototypeOf(t);function gd(t,e,n){return function(...i){const r=this.__v_raw,o=ae(r),a=Wn(o),c=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=r[t](...i),p=n?no:e?io:De;return!e&&Oe(o,"iterate",h?to:bn),{next(){const{value:E,done:P}=d.next();return P?{value:E,done:P}:{value:c?[p(E[0]),p(E[1])]:p(E),done:P}},[Symbol.iterator](){return this}}}}function ps(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function md(t,e){const n={get(r){const o=this.__v_raw,a=ae(o),c=ae(r);t||(Xt(r,c)&&Oe(a,"get",r),Oe(a,"get",c));const{has:h}=ds(a),d=e?no:t?io:De;if(h.call(a,r))return d(o.get(r));if(h.call(a,c))return d(o.get(c));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Oe(ae(r),"iterate",bn),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,a=ae(o),c=ae(r);return t||(Xt(r,c)&&Oe(a,"has",r),Oe(a,"has",c)),r===c?o.has(r):o.has(r)||o.has(c)},forEach(r,o){const a=this,c=a.__v_raw,h=ae(c),d=e?no:t?io:De;return!t&&Oe(h,"iterate",bn),c.forEach((p,E)=>r.call(o,d(p),d(E),a))}};return be(n,t?{add:ps("add"),set:ps("set"),delete:ps("delete"),clear:ps("clear")}:{add(r){!e&&!tt(r)&&!En(r)&&(r=ae(r));const o=ae(this);return ds(o).has.call(o,r)||(o.add(r),Rt(o,"add",r,r)),this},set(r,o){!e&&!tt(o)&&!En(o)&&(o=ae(o));const a=ae(this),{has:c,get:h}=ds(a);let d=c.call(a,r);d||(r=ae(r),d=c.call(a,r));const p=h.call(a,r);return a.set(r,o),d?Xt(o,p)&&Rt(a,"set",r,o):Rt(a,"add",r,o),this},delete(r){const o=ae(this),{has:a,get:c}=ds(o);let h=a.call(o,r);h||(r=ae(r),h=a.call(o,r)),c&&c.call(o,r);const d=o.delete(r);return h&&Rt(o,"delete",r,void 0),d},clear(){const r=ae(this),o=r.size!==0,a=r.clear();return o&&Rt(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=gd(r,t,e)}),n}function No(t,e){const n=md(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(le(n,r)&&r in i?n:i,r,o)}const vd={get:No(!1,!1)},yd={get:No(!1,!0)},_d={get:No(!0,!1)};const Xc=new WeakMap,Qc=new WeakMap,Zc=new WeakMap,wd=new WeakMap;function Id(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bd(t){return t.__v_skip||!Object.isExtensible(t)?0:Id(Kf(t))}function Lo(t){return En(t)?t:Mo(t,!1,fd,vd,Xc)}function Td(t){return Mo(t,!1,pd,yd,Qc)}function eu(t){return Mo(t,!0,dd,_d,Zc)}function Mo(t,e,n,i,r){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const a=bd(t);if(a===0)return t;const c=new Proxy(t,a===2?i:n);return r.set(t,c),c}function qn(t){return En(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function tt(t){return!!(t&&t.__v_isShallow)}function xo(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Ed(t){return!le(t,"__v_skip")&&Object.isExtensible(t)&&Lc(t,"__v_skip",!0),t}const De=t=>ge(t)?Lo(t):t,io=t=>ge(t)?eu(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function Qt(t){return Sd(t,!1)}function Sd(t,e){return Ne(t)?t:new Ad(t,e)}class Ad{constructor(e,n){this.dep=new Do,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ae(e),this._value=n?e:De(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||tt(e)||En(e);e=i?e:ae(e),Xt(e,n)&&(this._rawValue=e,this._value=i?e:De(e),this.dep.trigger())}}function Cd(t){return Ne(t)?t.value:t}const Pd={get:(t,e,n)=>e==="__v_raw"?t:Cd(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function tu(t){return qn(t)?t:new Proxy(t,Pd)}class Rd{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Do(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Li-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Hc(this,!0),!0}get value(){const e=this.dep.track();return qc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kd(t,e,n=!1){let i,r;return Z(t)?i=t:(i=t.get,r=t.set),new Rd(i,r,n)}const gs={},Rs=new WeakMap;let yn;function Od(t,e=!1,n=yn){if(n){let i=Rs.get(n);i||Rs.set(n,i=[]),i.push(t)}}function Dd(t,e,n=fe){const{immediate:i,deep:r,once:o,scheduler:a,augmentJob:c,call:h}=n,d=V=>r?V:tt(V)||r===!1||r===0?kt(V,1):kt(V);let p,E,P,N,U=!1,$=!1;if(Ne(t)?(E=()=>t.value,U=tt(t)):qn(t)?(E=()=>d(t),U=!0):q(t)?($=!0,U=t.some(V=>qn(V)||tt(V)),E=()=>t.map(V=>{if(Ne(V))return V.value;if(qn(V))return d(V);if(Z(V))return h?h(V,2):V()})):Z(t)?e?E=h?()=>h(t,2):t:E=()=>{if(P){rn();try{P()}finally{on()}}const V=yn;yn=p;try{return h?h(t,3,[N]):t(N)}finally{yn=V}}:E=yt,e&&r){const V=E,te=r===!0?1/0:r;E=()=>kt(V(),te)}const J=sd(),X=()=>{p.stop(),J&&J.active&&Ao(J.effects,p)};if(o&&e){const V=e;e=(...te)=>{V(...te),X()}}let ee=$?new Array(t.length).fill(gs):gs;const Y=V=>{if(!(!(p.flags&1)||!p.dirty&&!V))if(e){const te=p.run();if(r||U||($?te.some((se,T)=>Xt(se,ee[T])):Xt(te,ee))){P&&P();const se=yn;yn=p;try{const T=[te,ee===gs?void 0:$&&ee[0]===gs?[]:ee,N];h?h(e,3,T):e(...T),ee=te}finally{yn=se}}}else p.run()};return c&&c(Y),p=new Vc(E),p.scheduler=a?()=>a(Y,!1):Y,N=V=>Od(V,!1,p),P=p.onStop=()=>{const V=Rs.get(p);if(V){if(h)h(V,4);else for(const te of V)te();Rs.delete(p)}},e?i?Y(!0):ee=p.run():a?a(Y.bind(null,!0),!0):p.run(),X.pause=p.pause.bind(p),X.resume=p.resume.bind(p),X.stop=X,X}function kt(t,e=1/0,n){if(e<=0||!ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))kt(t.value,e,n);else if(q(t))for(let i=0;i<t.length;i++)kt(t[i],e,n);else if(Js(t)||Wn(t))t.forEach(i=>{kt(i,e,n)});else if(Nc(t)){for(const i in t)kt(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&kt(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(t,e,n,i){try{return i?t(...i):t()}catch(r){nr(r,e,n)}}function ct(t,e,n,i){if(Z(t)){const r=qi(t,e,n,i);return r&&Oc(r)&&r.catch(o=>{nr(o,e,n)}),r}if(q(t)){const r=[];for(let o=0;o<t.length;o++)r.push(ct(t[o],e,n,i));return r}}function nr(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||fe;if(e){let c=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p){for(let E=0;E<p.length;E++)if(p[E](t,h,d)===!1)return}c=c.parent}if(o){rn(),qi(o,null,10,[t,h,d]),on();return}}Nd(t,n,r,i,a)}function Nd(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Fe=[];let mt=-1;const Kn=[];let qt=null,Vn=0;const nu=Promise.resolve();let ks=null;function Ld(t){const e=ks||nu;return t?e.then(this?t.bind(this):t):e}function Md(t){let e=mt+1,n=Fe.length;for(;e<n;){const i=e+n>>>1,r=Fe[i],o=xi(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function Uo(t){if(!(t.flags&1)){const e=xi(t),n=Fe[Fe.length-1];!n||!(t.flags&2)&&e>=xi(n)?Fe.push(t):Fe.splice(Md(e),0,t),t.flags|=1,iu()}}function iu(){ks||(ks=nu.then(ru))}function xd(t){q(t)?Kn.push(...t):qt&&t.id===-1?qt.splice(Vn+1,0,t):t.flags&1||(Kn.push(t),t.flags|=1),iu()}function tl(t,e,n=mt+1){for(;n<Fe.length;n++){const i=Fe[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Fe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function su(t){if(Kn.length){const e=[...new Set(Kn)].sort((n,i)=>xi(n)-xi(i));if(Kn.length=0,qt){qt.push(...e);return}for(qt=e,Vn=0;Vn<qt.length;Vn++){const n=qt[Vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qt=null,Vn=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ru(t){try{for(mt=0;mt<Fe.length;mt++){const e=Fe[mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mt<Fe.length;mt++){const e=Fe[mt];e&&(e.flags&=-2)}mt=-1,Fe.length=0,su(),ks=null,(Fe.length||Kn.length)&&ru()}}let Be=null,ou=null;function Os(t){const e=Be;return Be=t,ou=t&&t.type.__scopeId||null,e}function au(t,e=Be,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&fl(-1);const o=Os(e);let a;try{a=t(...r)}finally{Os(o),i._d&&fl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Qn(t,e){if(Be===null)return t;const n=or(Be),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,h=fe]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&kt(a),i.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:h}))}return t}function gn(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];o&&(c.oldValue=o[a].value);let h=c.dir[i];h&&(rn(),ct(h,n,8,[t.el,c,t,e]),on())}}const Ud=Symbol("_vte"),Fd=t=>t.__isTeleport,jn=Symbol("_leaveCb"),ms=Symbol("_enterCb");function jd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fo(()=>{t.isMounted=!0}),du(()=>{t.isUnmounting=!0}),t}const Ze=[Function,Array],Vd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze};function $d(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function so(t,e,n,i,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:h,onEnter:d,onAfterEnter:p,onEnterCancelled:E,onBeforeLeave:P,onLeave:N,onAfterLeave:U,onLeaveCancelled:$,onBeforeAppear:J,onAppear:X,onAfterAppear:ee,onAppearCancelled:Y}=e,V=String(t.key),te=$d(n,t),se=(g,w)=>{g&&ct(g,i,9,w)},T=(g,w)=>{const I=w[1];se(g,w),q(g)?g.every(_=>_.length<=1)&&I():g.length<=1&&I()},m={mode:a,persisted:c,beforeEnter(g){let w=h;if(!n.isMounted)if(o)w=J||h;else return;g[jn]&&g[jn](!0);const I=te[V];I&&$n(t,I)&&I.el[jn]&&I.el[jn](),se(w,[g])},enter(g){let w=d,I=p,_=E;if(!n.isMounted)if(o)w=X||d,I=ee||p,_=Y||E;else return;let v=!1;const de=g[ms]=Le=>{v||(v=!0,Le?se(_,[g]):se(I,[g]),m.delayedLeave&&m.delayedLeave(),g[ms]=void 0)};w?T(w,[g,de]):de()},leave(g,w){const I=String(t.key);if(g[ms]&&g[ms](!0),n.isUnmounting)return w();se(P,[g]);let _=!1;const v=g[jn]=de=>{_||(_=!0,w(),de?se($,[g]):se(U,[g]),g[jn]=void 0,te[I]===t&&delete te[I])};te[I]=t,N?T(N,[g,v]):v()},clone(g){return so(g,e,n,i)}};return m}function Ui(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ui(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lu(t,e=!1,n){let i=[],r=0;for(let o=0;o<t.length;o++){let a=t[o];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===je?(a.patchFlag&128&&r++,i=i.concat(lu(a.children,e,c))):(e||a.type!==Zn)&&i.push(c!=null?Sn(a,{key:c}):a)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function cu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ds(t,e,n,i,r=!1){if(q(t)){t.forEach((U,$)=>Ds(U,e&&(q(e)?e[$]:e),n,i,r));return}if(Ci(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ds(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?or(i.component):i.el,a=r?null:o,{i:c,r:h}=t,d=e&&e.r,p=c.refs===fe?c.refs={}:c.refs,E=c.setupState,P=ae(E),N=E===fe?()=>!1:U=>le(P,U);if(d!=null&&d!==h&&(ve(d)?(p[d]=null,N(d)&&(E[d]=null)):Ne(d)&&(d.value=null)),Z(h))qi(h,c,12,[a,p]);else{const U=ve(h),$=Ne(h);if(U||$){const J=()=>{if(t.f){const X=U?N(h)?E[h]:p[h]:h.value;r?q(X)&&Ao(X,o):q(X)?X.includes(o)||X.push(o):U?(p[h]=[o],N(h)&&(E[h]=p[h])):(h.value=[o],t.k&&(p[t.k]=h.value))}else U?(p[h]=a,N(h)&&(E[h]=a)):$&&(h.value=a,t.k&&(p[t.k]=a))};a?(J.id=-1,qe(J,n)):J()}}}Qs().requestIdleCallback;Qs().cancelIdleCallback;const Ci=t=>!!t.type.__asyncLoader,uu=t=>t.type.__isKeepAlive;function Hd(t,e){hu(t,"a",e)}function Bd(t,e){hu(t,"da",e)}function hu(t,e,n=Ae){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ir(e,i,n),n){let r=n.parent;for(;r&&r.parent;)uu(r.parent.vnode)&&Wd(i,e,n,r),r=r.parent}}function Wd(t,e,n,i){const r=ir(e,t,i,!0);pu(()=>{Ao(i[e],r)},n)}function ir(t,e,n=Ae,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{rn();const c=Ki(n),h=ct(e,n,t,a);return c(),on(),h});return i?r.unshift(o):r.push(o),o}}const xt=t=>(e,n=Ae)=>{(!ji||t==="sp")&&ir(t,(...i)=>e(...i),n)},qd=xt("bm"),Fo=xt("m"),Kd=xt("bu"),fu=xt("u"),du=xt("bum"),pu=xt("um"),zd=xt("sp"),Gd=xt("rtg"),Jd=xt("rtc");function Yd(t,e=Ae){ir("ec",t,e)}const gu="components";function nl(t,e){return vu(gu,t,!0,e)||t}const mu=Symbol.for("v-ndc");function Xd(t){return ve(t)?vu(gu,t,!1)||t:t||mu}function vu(t,e,n=!0,i=!1){const r=Be||Ae;if(r){const o=r.type;{const c=Bp(o,!1);if(c&&(c===e||c===it(e)||c===Xs(it(e))))return o}const a=il(r[t]||o[t],e)||il(r.appContext[t],e);return!a&&i?o:a}}function il(t,e){return t&&(t[e]||t[it(e)]||t[Xs(it(e))])}function Qd(t,e,n,i){let r;const o=n,a=q(t);if(a||ve(t)){const c=a&&qn(t);let h=!1;c&&(h=!tt(t),t=tr(t)),r=new Array(t.length);for(let d=0,p=t.length;d<p;d++)r[d]=e(h?De(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,o)}else if(ge(t))if(t[Symbol.iterator])r=Array.from(t,(c,h)=>e(c,h,void 0,o));else{const c=Object.keys(t);r=new Array(c.length);for(let h=0,d=c.length;h<d;h++){const p=c[h];r[h]=e(t[p],p,h,o)}}else r=[];return r}const ro=t=>t?ju(t)?or(t):ro(t.parent):null,Pi=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ro(t.parent),$root:t=>ro(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_u(t),$forceUpdate:t=>t.f||(t.f=()=>{Uo(t.update)}),$nextTick:t=>t.n||(t.n=Ld.bind(t.proxy)),$watch:t=>wp.bind(t)}),xr=(t,e)=>t!==fe&&!t.__isScriptSetup&&le(t,e),Zd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:a,type:c,appContext:h}=t;let d;if(e[0]!=="$"){const N=a[e];if(N!==void 0)switch(N){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(xr(i,e))return a[e]=1,i[e];if(r!==fe&&le(r,e))return a[e]=2,r[e];if((d=t.propsOptions[0])&&le(d,e))return a[e]=3,o[e];if(n!==fe&&le(n,e))return a[e]=4,n[e];oo&&(a[e]=0)}}const p=Pi[e];let E,P;if(p)return e==="$attrs"&&Oe(t.attrs,"get",""),p(t);if((E=c.__cssModules)&&(E=E[e]))return E;if(n!==fe&&le(n,e))return a[e]=4,n[e];if(P=h.config.globalProperties,le(P,e))return P[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return xr(r,e)?(r[e]=n,!0):i!==fe&&le(i,e)?(i[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},a){let c;return!!n[a]||t!==fe&&le(t,a)||xr(e,a)||(c=o[0])&&le(c,a)||le(i,a)||le(Pi,a)||le(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sl(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oo=!0;function ep(t){const e=_u(t),n=t.proxy,i=t.ctx;oo=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:a,watch:c,provide:h,inject:d,created:p,beforeMount:E,mounted:P,beforeUpdate:N,updated:U,activated:$,deactivated:J,beforeDestroy:X,beforeUnmount:ee,destroyed:Y,unmounted:V,render:te,renderTracked:se,renderTriggered:T,errorCaptured:m,serverPrefetch:g,expose:w,inheritAttrs:I,components:_,directives:v,filters:de}=e;if(d&&tp(d,i,null),a)for(const ue in a){const re=a[ue];Z(re)&&(i[ue]=re.bind(n))}if(r){const ue=r.call(n,n);ge(ue)&&(t.data=Lo(ue))}if(oo=!0,o)for(const ue in o){const re=o[ue],st=Z(re)?re.bind(n,n):Z(re.get)?re.get.bind(n,n):yt,cn=!Z(re)&&Z(re.set)?re.set.bind(n):yt,Tt=$u({get:st,set:cn});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:we=>Tt.value=we})}if(c)for(const ue in c)yu(c[ue],i,n,ue);if(h){const ue=Z(h)?h.call(n):h;Reflect.ownKeys(ue).forEach(re=>{ap(re,ue[re])})}p&&rl(p,t,"c");function _e(ue,re){q(re)?re.forEach(st=>ue(st.bind(n))):re&&ue(re.bind(n))}if(_e(qd,E),_e(Fo,P),_e(Kd,N),_e(fu,U),_e(Hd,$),_e(Bd,J),_e(Yd,m),_e(Jd,se),_e(Gd,T),_e(du,ee),_e(pu,V),_e(zd,g),q(w))if(w.length){const ue=t.exposed||(t.exposed={});w.forEach(re=>{Object.defineProperty(ue,re,{get:()=>n[re],set:st=>n[re]=st})})}else t.exposed||(t.exposed={});te&&t.render===yt&&(t.render=te),I!=null&&(t.inheritAttrs=I),_&&(t.components=_),v&&(t.directives=v),g&&cu(t)}function tp(t,e,n=yt){q(t)&&(t=ao(t));for(const i in t){const r=t[i];let o;ge(r)?"default"in r?o=ws(r.from||i,r.default,!0):o=ws(r.from||i):o=ws(r),Ne(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function rl(t,e,n){ct(q(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function yu(t,e,n,i){let r=i.includes(".")?Nu(n,i):()=>n[i];if(ve(t)){const o=e[t];Z(o)&&Is(r,o)}else if(Z(t))Is(r,t.bind(n));else if(ge(t))if(q(t))t.forEach(o=>yu(o,e,n,i));else{const o=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(o)&&Is(r,o,t)}}function _u(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let h;return c?h=c:!r.length&&!n&&!i?h=e:(h={},r.length&&r.forEach(d=>Ns(h,d,a,!0)),Ns(h,e,a)),ge(e)&&o.set(e,h),h}function Ns(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Ns(t,o,n,!0),r&&r.forEach(a=>Ns(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const c=np[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const np={data:ol,props:al,emits:al,methods:Ii,computed:Ii,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:Ii,directives:Ii,watch:sp,provide:ol,inject:ip};function ol(t,e){return e?t?function(){return be(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function ip(t,e){return Ii(ao(t),ao(e))}function ao(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ii(t,e){return t?be(Object.create(null),t,e):e}function al(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:be(Object.create(null),sl(t),sl(e??{})):e}function sp(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const i in e)n[i]=xe(t[i],e[i]);return n}function wu(){return{app:null,config:{isNativeTag:Wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rp=0;function op(t,e){return function(i,r=null){Z(i)||(i=be({},i)),r!=null&&!ge(r)&&(r=null);const o=wu(),a=new WeakSet,c=[];let h=!1;const d=o.app={_uid:rp++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:qp,get config(){return o.config},set config(p){},use(p,...E){return a.has(p)||(p&&Z(p.install)?(a.add(p),p.install(d,...E)):Z(p)&&(a.add(p),p(d,...E))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,E){return E?(o.components[p]=E,d):o.components[p]},directive(p,E){return E?(o.directives[p]=E,d):o.directives[p]},mount(p,E,P){if(!h){const N=d._ceVNode||Ge(i,r);return N.appContext=o,P===!0?P="svg":P===!1&&(P=void 0),t(N,p,P),h=!0,d._container=p,p.__vue_app__=d,or(N.component)}},onUnmount(p){c.push(p)},unmount(){h&&(ct(c,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,E){return o.provides[p]=E,d},runWithContext(p){const E=zn;zn=d;try{return p()}finally{zn=E}}};return d}}let zn=null;function ap(t,e){if(Ae){let n=Ae.provides;const i=Ae.parent&&Ae.parent.provides;i===n&&(n=Ae.provides=Object.create(i)),n[t]=e}}function ws(t,e,n=!1){const i=Ae||Be;if(i||zn){const r=zn?zn._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(i&&i.proxy):e}}const Iu={},bu=()=>Object.create(Iu),Tu=t=>Object.getPrototypeOf(t)===Iu;function lp(t,e,n,i=!1){const r={},o=bu();t.propsDefaults=Object.create(null),Eu(t,e,r,o);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Td(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function cp(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:a}}=t,c=ae(r),[h]=t.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let E=0;E<p.length;E++){let P=p[E];if(sr(t.emitsOptions,P))continue;const N=e[P];if(h)if(le(o,P))N!==o[P]&&(o[P]=N,d=!0);else{const U=it(P);r[U]=lo(h,c,U,N,t,!1)}else N!==o[P]&&(o[P]=N,d=!0)}}}else{Eu(t,e,r,o)&&(d=!0);let p;for(const E in c)(!e||!le(e,E)&&((p=sn(E))===E||!le(e,p)))&&(h?n&&(n[E]!==void 0||n[p]!==void 0)&&(r[E]=lo(h,c,E,void 0,t,!0)):delete r[E]);if(o!==c)for(const E in o)(!e||!le(e,E))&&(delete o[E],d=!0)}d&&Rt(t.attrs,"set","")}function Eu(t,e,n,i){const[r,o]=t.propsOptions;let a=!1,c;if(e)for(let h in e){if(Ei(h))continue;const d=e[h];let p;r&&le(r,p=it(h))?!o||!o.includes(p)?n[p]=d:(c||(c={}))[p]=d:sr(t.emitsOptions,h)||(!(h in i)||d!==i[h])&&(i[h]=d,a=!0)}if(o){const h=ae(n),d=c||fe;for(let p=0;p<o.length;p++){const E=o[p];n[E]=lo(r,h,E,d[E],t,!le(d,E))}}return a}function lo(t,e,n,i,r,o){const a=t[n];if(a!=null){const c=le(a,"default");if(c&&i===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&Z(h)){const{propsDefaults:d}=r;if(n in d)i=d[n];else{const p=Ki(r);i=d[n]=h.call(null,e),p()}}else i=h;r.ce&&r.ce._setProp(n,i)}a[0]&&(o&&!c?i=!1:a[1]&&(i===""||i===sn(n))&&(i=!0))}return i}const up=new WeakMap;function Su(t,e,n=!1){const i=n?up:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,a={},c=[];let h=!1;if(!Z(t)){const p=E=>{h=!0;const[P,N]=Su(E,e,!0);be(a,P),N&&c.push(...N)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return ge(t)&&i.set(t,Bn),Bn;if(q(o))for(let p=0;p<o.length;p++){const E=it(o[p]);ll(E)&&(a[E]=fe)}else if(o)for(const p in o){const E=it(p);if(ll(E)){const P=o[p],N=a[E]=q(P)||Z(P)?{type:P}:be({},P),U=N.type;let $=!1,J=!0;if(q(U))for(let X=0;X<U.length;++X){const ee=U[X],Y=Z(ee)&&ee.name;if(Y==="Boolean"){$=!0;break}else Y==="String"&&(J=!1)}else $=Z(U)&&U.name==="Boolean";N[0]=$,N[1]=J,($||le(N,"default"))&&c.push(E)}}const d=[a,c];return ge(t)&&i.set(t,d),d}function ll(t){return t[0]!=="$"&&!Ei(t)}const Au=t=>t[0]==="_"||t==="$stable",jo=t=>q(t)?t.map(vt):[vt(t)],hp=(t,e,n)=>{if(e._n)return e;const i=au((...r)=>jo(e(...r)),n);return i._c=!1,i},Cu=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Au(r))continue;const o=t[r];if(Z(o))e[r]=hp(r,o,i);else if(o!=null){const a=jo(o);e[r]=()=>a}}},Pu=(t,e)=>{const n=jo(e);t.slots.default=()=>n},Ru=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},fp=(t,e,n)=>{const i=t.slots=bu();if(t.vnode.shapeFlag&32){const r=e._;r?(Ru(i,e,n),n&&Lc(i,"_",r,!0)):Cu(e,i)}else e&&Pu(t,e)},dp=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,a=fe;if(i.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:Ru(r,e,n):(o=!e.$stable,Cu(e,r)),a=e}else e&&(Pu(t,e),a={default:1});if(o)for(const c in r)!Au(c)&&a[c]==null&&delete r[c]},qe=Cp;function pp(t){return gp(t)}function gp(t,e){const n=Qs();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:a,createText:c,createComment:h,setText:d,setElementText:p,parentNode:E,nextSibling:P,setScopeId:N=yt,insertStaticContent:U}=t,$=(y,b,C,k=null,R=null,O=null,F=void 0,M=null,L=!!b.dynamicChildren)=>{if(y===b)return;y&&!$n(y,b)&&(k=Et(y),we(y,R,O,!0),y=null),b.patchFlag===-2&&(L=!1,b.dynamicChildren=null);const{type:D,ref:B,shapeFlag:j}=b;switch(D){case rr:J(y,b,C,k);break;case Zn:X(y,b,C,k);break;case bs:y==null&&ee(b,C,k,F);break;case je:_(y,b,C,k,R,O,F,M,L);break;default:j&1?te(y,b,C,k,R,O,F,M,L):j&6?v(y,b,C,k,R,O,F,M,L):(j&64||j&128)&&D.process(y,b,C,k,R,O,F,M,L,dt)}B!=null&&R&&Ds(B,y&&y.ref,O,b||y,!b)},J=(y,b,C,k)=>{if(y==null)i(b.el=c(b.children),C,k);else{const R=b.el=y.el;b.children!==y.children&&d(R,b.children)}},X=(y,b,C,k)=>{y==null?i(b.el=h(b.children||""),C,k):b.el=y.el},ee=(y,b,C,k)=>{[y.el,y.anchor]=U(y.children,b,C,k,y.el,y.anchor)},Y=({el:y,anchor:b},C,k)=>{let R;for(;y&&y!==b;)R=P(y),i(y,C,k),y=R;i(b,C,k)},V=({el:y,anchor:b})=>{let C;for(;y&&y!==b;)C=P(y),r(y),y=C;r(b)},te=(y,b,C,k,R,O,F,M,L)=>{b.type==="svg"?F="svg":b.type==="math"&&(F="mathml"),y==null?se(b,C,k,R,O,F,M,L):g(y,b,R,O,F,M,L)},se=(y,b,C,k,R,O,F,M)=>{let L,D;const{props:B,shapeFlag:j,transition:H,dirs:z}=y;if(L=y.el=a(y.type,O,B&&B.is,B),j&8?p(L,y.children):j&16&&m(y.children,L,null,k,R,Ur(y,O),F,M),z&&gn(y,null,k,"created"),T(L,y,y.scopeId,F,k),B){for(const Q in B)Q!=="value"&&!Ei(Q)&&o(L,Q,null,B[Q],O,k);"value"in B&&o(L,"value",null,B.value,O),(D=B.onVnodeBeforeMount)&&pt(D,k,y)}z&&gn(y,null,k,"beforeMount");const W=mp(R,H);W&&H.beforeEnter(L),i(L,b,C),((D=B&&B.onVnodeMounted)||W||z)&&qe(()=>{D&&pt(D,k,y),W&&H.enter(L),z&&gn(y,null,k,"mounted")},R)},T=(y,b,C,k,R)=>{if(C&&N(y,C),k)for(let O=0;O<k.length;O++)N(y,k[O]);if(R){let O=R.subTree;if(b===O||Mu(O.type)&&(O.ssContent===b||O.ssFallback===b)){const F=R.vnode;T(y,F,F.scopeId,F.slotScopeIds,R.parent)}}},m=(y,b,C,k,R,O,F,M,L=0)=>{for(let D=L;D<y.length;D++){const B=y[D]=M?Kt(y[D]):vt(y[D]);$(null,B,b,C,k,R,O,F,M)}},g=(y,b,C,k,R,O,F)=>{const M=b.el=y.el;let{patchFlag:L,dynamicChildren:D,dirs:B}=b;L|=y.patchFlag&16;const j=y.props||fe,H=b.props||fe;let z;if(C&&mn(C,!1),(z=H.onVnodeBeforeUpdate)&&pt(z,C,b,y),B&&gn(b,y,C,"beforeUpdate"),C&&mn(C,!0),(j.innerHTML&&H.innerHTML==null||j.textContent&&H.textContent==null)&&p(M,""),D?w(y.dynamicChildren,D,M,C,k,Ur(b,R),O):F||re(y,b,M,null,C,k,Ur(b,R),O,!1),L>0){if(L&16)I(M,j,H,C,R);else if(L&2&&j.class!==H.class&&o(M,"class",null,H.class,R),L&4&&o(M,"style",j.style,H.style,R),L&8){const W=b.dynamicProps;for(let Q=0;Q<W.length;Q++){const ne=W[Q],Ce=j[ne],Te=H[ne];(Te!==Ce||ne==="value")&&o(M,ne,Ce,Te,R,C)}}L&1&&y.children!==b.children&&p(M,b.children)}else!F&&D==null&&I(M,j,H,C,R);((z=H.onVnodeUpdated)||B)&&qe(()=>{z&&pt(z,C,b,y),B&&gn(b,y,C,"updated")},k)},w=(y,b,C,k,R,O,F)=>{for(let M=0;M<b.length;M++){const L=y[M],D=b[M],B=L.el&&(L.type===je||!$n(L,D)||L.shapeFlag&70)?E(L.el):C;$(L,D,B,null,k,R,O,F,!0)}},I=(y,b,C,k,R)=>{if(b!==C){if(b!==fe)for(const O in b)!Ei(O)&&!(O in C)&&o(y,O,b[O],null,R,k);for(const O in C){if(Ei(O))continue;const F=C[O],M=b[O];F!==M&&O!=="value"&&o(y,O,M,F,R,k)}"value"in C&&o(y,"value",b.value,C.value,R)}},_=(y,b,C,k,R,O,F,M,L)=>{const D=b.el=y?y.el:c(""),B=b.anchor=y?y.anchor:c("");let{patchFlag:j,dynamicChildren:H,slotScopeIds:z}=b;z&&(M=M?M.concat(z):z),y==null?(i(D,C,k),i(B,C,k),m(b.children||[],C,B,R,O,F,M,L)):j>0&&j&64&&H&&y.dynamicChildren?(w(y.dynamicChildren,H,C,R,O,F,M),(b.key!=null||R&&b===R.subTree)&&ku(y,b,!0)):re(y,b,C,B,R,O,F,M,L)},v=(y,b,C,k,R,O,F,M,L)=>{b.slotScopeIds=M,y==null?b.shapeFlag&512?R.ctx.activate(b,C,k,F,L):de(b,C,k,R,O,F,L):Le(y,b,L)},de=(y,b,C,k,R,O,F)=>{const M=y.component=Up(y,k,R);if(uu(y)&&(M.ctx.renderer=dt),jp(M,!1,F),M.asyncDep){if(R&&R.registerDep(M,_e,F),!y.el){const L=M.subTree=Ge(Zn);X(null,L,b,C)}}else _e(M,y,b,C,R,O,F)},Le=(y,b,C)=>{const k=b.component=y.component;if(Sp(y,b,C))if(k.asyncDep&&!k.asyncResolved){ue(k,b,C);return}else k.next=b,k.update();else b.el=y.el,k.vnode=b},_e=(y,b,C,k,R,O,F)=>{const M=()=>{if(y.isMounted){let{next:j,bu:H,u:z,parent:W,vnode:Q}=y;{const Pe=Ou(y);if(Pe){j&&(j.el=Q.el,ue(y,j,F)),Pe.asyncDep.then(()=>{y.isUnmounted||M()});return}}let ne=j,Ce;mn(y,!1),j?(j.el=Q.el,ue(y,j,F)):j=Q,H&&_s(H),(Ce=j.props&&j.props.onVnodeBeforeUpdate)&&pt(Ce,W,j,Q),mn(y,!0);const Te=ul(y),Ye=y.subTree;y.subTree=Te,$(Ye,Te,E(Ye.el),Et(Ye),y,R,O),j.el=Te.el,ne===null&&Ap(y,Te.el),z&&qe(z,R),(Ce=j.props&&j.props.onVnodeUpdated)&&qe(()=>pt(Ce,W,j,Q),R)}else{let j;const{el:H,props:z}=b,{bm:W,m:Q,parent:ne,root:Ce,type:Te}=y,Ye=Ci(b);mn(y,!1),W&&_s(W),!Ye&&(j=z&&z.onVnodeBeforeMount)&&pt(j,ne,b),mn(y,!0);{Ce.ce&&Ce.ce._injectChildStyle(Te);const Pe=y.subTree=ul(y);$(null,Pe,C,k,y,R,O),b.el=Pe.el}if(Q&&qe(Q,R),!Ye&&(j=z&&z.onVnodeMounted)){const Pe=b;qe(()=>pt(j,ne,Pe),R)}(b.shapeFlag&256||ne&&Ci(ne.vnode)&&ne.vnode.shapeFlag&256)&&y.a&&qe(y.a,R),y.isMounted=!0,b=C=k=null}};y.scope.on();const L=y.effect=new Vc(M);y.scope.off();const D=y.update=L.run.bind(L),B=y.job=L.runIfDirty.bind(L);B.i=y,B.id=y.uid,L.scheduler=()=>Uo(B),mn(y,!0),D()},ue=(y,b,C)=>{b.component=y;const k=y.vnode.props;y.vnode=b,y.next=null,cp(y,b.props,k,C),dp(y,b.children,C),rn(),tl(y),on()},re=(y,b,C,k,R,O,F,M,L=!1)=>{const D=y&&y.children,B=y?y.shapeFlag:0,j=b.children,{patchFlag:H,shapeFlag:z}=b;if(H>0){if(H&128){cn(D,j,C,k,R,O,F,M,L);return}else if(H&256){st(D,j,C,k,R,O,F,M,L);return}}z&8?(B&16&&hn(D,R,O),j!==D&&p(C,j)):B&16?z&16?cn(D,j,C,k,R,O,F,M,L):hn(D,R,O,!0):(B&8&&p(C,""),z&16&&m(j,C,k,R,O,F,M,L))},st=(y,b,C,k,R,O,F,M,L)=>{y=y||Bn,b=b||Bn;const D=y.length,B=b.length,j=Math.min(D,B);let H;for(H=0;H<j;H++){const z=b[H]=L?Kt(b[H]):vt(b[H]);$(y[H],z,C,null,R,O,F,M,L)}D>B?hn(y,R,O,!0,!1,j):m(b,C,k,R,O,F,M,L,j)},cn=(y,b,C,k,R,O,F,M,L)=>{let D=0;const B=b.length;let j=y.length-1,H=B-1;for(;D<=j&&D<=H;){const z=y[D],W=b[D]=L?Kt(b[D]):vt(b[D]);if($n(z,W))$(z,W,C,null,R,O,F,M,L);else break;D++}for(;D<=j&&D<=H;){const z=y[j],W=b[H]=L?Kt(b[H]):vt(b[H]);if($n(z,W))$(z,W,C,null,R,O,F,M,L);else break;j--,H--}if(D>j){if(D<=H){const z=H+1,W=z<B?b[z].el:k;for(;D<=H;)$(null,b[D]=L?Kt(b[D]):vt(b[D]),C,W,R,O,F,M,L),D++}}else if(D>H)for(;D<=j;)we(y[D],R,O,!0),D++;else{const z=D,W=D,Q=new Map;for(D=W;D<=H;D++){const Ee=b[D]=L?Kt(b[D]):vt(b[D]);Ee.key!=null&&Q.set(Ee.key,D)}let ne,Ce=0;const Te=H-W+1;let Ye=!1,Pe=0;const Ft=new Array(Te);for(D=0;D<Te;D++)Ft[D]=0;for(D=z;D<=j;D++){const Ee=y[D];if(Ce>=Te){we(Ee,R,O,!0);continue}let Xe;if(Ee.key!=null)Xe=Q.get(Ee.key);else for(ne=W;ne<=H;ne++)if(Ft[ne-W]===0&&$n(Ee,b[ne])){Xe=ne;break}Xe===void 0?we(Ee,R,O,!0):(Ft[Xe-W]=D+1,Xe>=Pe?Pe=Xe:Ye=!0,$(Ee,b[Xe],C,null,R,O,F,M,L),Ce++)}const oi=Ye?vp(Ft):Bn;for(ne=oi.length-1,D=Te-1;D>=0;D--){const Ee=W+D,Xe=b[Ee],es=Ee+1<B?b[Ee+1].el:k;Ft[D]===0?$(null,Xe,C,es,R,O,F,M,L):Ye&&(ne<0||D!==oi[ne]?Tt(Xe,C,es,2):ne--)}}},Tt=(y,b,C,k,R=null)=>{const{el:O,type:F,transition:M,children:L,shapeFlag:D}=y;if(D&6){Tt(y.component.subTree,b,C,k);return}if(D&128){y.suspense.move(b,C,k);return}if(D&64){F.move(y,b,C,dt);return}if(F===je){i(O,b,C);for(let j=0;j<L.length;j++)Tt(L[j],b,C,k);i(y.anchor,b,C);return}if(F===bs){Y(y,b,C);return}if(k!==2&&D&1&&M)if(k===0)M.beforeEnter(O),i(O,b,C),qe(()=>M.enter(O),R);else{const{leave:j,delayLeave:H,afterLeave:z}=M,W=()=>i(O,b,C),Q=()=>{j(O,()=>{W(),z&&z()})};H?H(O,W,Q):Q()}else i(O,b,C)},we=(y,b,C,k=!1,R=!1)=>{const{type:O,props:F,ref:M,children:L,dynamicChildren:D,shapeFlag:B,patchFlag:j,dirs:H,cacheIndex:z}=y;if(j===-2&&(R=!1),M!=null&&Ds(M,null,C,y,!0),z!=null&&(b.renderCache[z]=void 0),B&256){b.ctx.deactivate(y);return}const W=B&1&&H,Q=!Ci(y);let ne;if(Q&&(ne=F&&F.onVnodeBeforeUnmount)&&pt(ne,b,y),B&6)un(y.component,C,k);else{if(B&128){y.suspense.unmount(C,k);return}W&&gn(y,null,b,"beforeUnmount"),B&64?y.type.remove(y,b,C,dt,k):D&&!D.hasOnce&&(O!==je||j>0&&j&64)?hn(D,b,C,!1,!0):(O===je&&j&384||!R&&B&16)&&hn(L,b,C),k&&Ie(y)}(Q&&(ne=F&&F.onVnodeUnmounted)||W)&&qe(()=>{ne&&pt(ne,b,y),W&&gn(y,null,b,"unmounted")},C)},Ie=y=>{const{type:b,el:C,anchor:k,transition:R}=y;if(b===je){dr(C,k);return}if(b===bs){V(y);return}const O=()=>{r(C),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(y.shapeFlag&1&&R&&!R.persisted){const{leave:F,delayLeave:M}=R,L=()=>F(C,O);M?M(y.el,O,L):L()}else O()},dr=(y,b)=>{let C;for(;y!==b;)C=P(y),r(y),y=C;r(b)},un=(y,b,C)=>{const{bum:k,scope:R,job:O,subTree:F,um:M,m:L,a:D}=y;cl(L),cl(D),k&&_s(k),R.stop(),O&&(O.flags|=8,we(F,y,b,C)),M&&qe(M,b),qe(()=>{y.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},hn=(y,b,C,k=!1,R=!1,O=0)=>{for(let F=O;F<y.length;F++)we(y[F],b,C,k,R)},Et=y=>{if(y.shapeFlag&6)return Et(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const b=P(y.anchor||y.el),C=b&&b[Ud];return C?P(C):b};let si=!1;const Zi=(y,b,C)=>{y==null?b._vnode&&we(b._vnode,null,null,!0):$(b._vnode||null,y,b,null,null,null,C),b._vnode=y,si||(si=!0,tl(),su(),si=!1)},dt={p:$,um:we,m:Tt,r:Ie,mt:de,mc:m,pc:re,pbc:w,n:Et,o:t};return{render:Zi,hydrate:void 0,createApp:op(Zi)}}function Ur({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function mp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ku(t,e,n=!1){const i=t.children,r=e.children;if(q(i)&&q(r))for(let o=0;o<i.length;o++){const a=i[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=Kt(r[o]),c.el=a.el),!n&&c.patchFlag!==-2&&ku(a,c)),c.type===rr&&(c.el=a.el)}}function vp(t){const e=t.slice(),n=[0];let i,r,o,a,c;const h=t.length;for(i=0;i<h;i++){const d=t[i];if(d!==0){if(r=n[n.length-1],t[r]<d){e[i]=r,n.push(i);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<d?o=c+1:a=c;d<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Ou(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ou(e)}function cl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yp=Symbol.for("v-scx"),_p=()=>ws(yp);function Is(t,e,n){return Du(t,e,n)}function Du(t,e,n=fe){const{immediate:i,deep:r,flush:o,once:a}=n,c=be({},n),h=e&&i||!e&&o!=="post";let d;if(ji){if(o==="sync"){const N=_p();d=N.__watcherHandles||(N.__watcherHandles=[])}else if(!h){const N=()=>{};return N.stop=yt,N.resume=yt,N.pause=yt,N}}const p=Ae;c.call=(N,U,$)=>ct(N,p,U,$);let E=!1;o==="post"?c.scheduler=N=>{qe(N,p&&p.suspense)}:o!=="sync"&&(E=!0,c.scheduler=(N,U)=>{U?N():Uo(N)}),c.augmentJob=N=>{e&&(N.flags|=4),E&&(N.flags|=2,p&&(N.id=p.uid,N.i=p))};const P=Dd(t,e,c);return ji&&(d?d.push(P):h&&P()),P}function wp(t,e,n){const i=this.proxy,r=ve(t)?t.includes(".")?Nu(i,t):()=>i[t]:t.bind(i,i);let o;Z(e)?o=e:(o=e.handler,n=e);const a=Ki(this),c=Du(r,o.bind(i),n);return a(),c}function Nu(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Ip=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${it(e)}Modifiers`]||t[`${sn(e)}Modifiers`];function bp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||fe;let r=n;const o=e.startsWith("update:"),a=o&&Ip(i,e.slice(7));a&&(a.trim&&(r=n.map(p=>ve(p)?p.trim():p)),a.number&&(r=n.map(Qr)));let c,h=i[c=Or(e)]||i[c=Or(it(e))];!h&&o&&(h=i[c=Or(sn(e))]),h&&ct(h,t,6,r);const d=i[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ct(d,t,6,r)}}function Lu(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let a={},c=!1;if(!Z(t)){const h=d=>{const p=Lu(d,e,!0);p&&(c=!0,be(a,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!c?(ge(t)&&i.set(t,null),null):(q(o)?o.forEach(h=>a[h]=null):be(a,o),ge(t)&&i.set(t,a),a)}function sr(t,e){return!t||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,sn(e))||le(t,e))}function ul(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:a,attrs:c,emit:h,render:d,renderCache:p,props:E,data:P,setupState:N,ctx:U,inheritAttrs:$}=t,J=Os(t);let X,ee;try{if(n.shapeFlag&4){const V=r||i,te=V;X=vt(d.call(te,V,p,E,N,P,U)),ee=c}else{const V=e;X=vt(V.length>1?V(E,{attrs:c,slots:a,emit:h}):V(E,null)),ee=e.props?c:Tp(c)}}catch(V){Ri.length=0,nr(V,t,1),X=Ge(Zn)}let Y=X;if(ee&&$!==!1){const V=Object.keys(ee),{shapeFlag:te}=Y;V.length&&te&7&&(o&&V.some(So)&&(ee=Ep(ee,o)),Y=Sn(Y,ee,!1,!0))}return n.dirs&&(Y=Sn(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&Ui(Y,n.transition),X=Y,Os(J),X}const Tp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gs(n))&&((e||(e={}))[n]=t[n]);return e},Ep=(t,e)=>{const n={};for(const i in t)(!So(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Sp(t,e,n){const{props:i,children:r,component:o}=t,{props:a,children:c,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?hl(i,a,d):!!a;if(h&8){const p=e.dynamicProps;for(let E=0;E<p.length;E++){const P=p[E];if(a[P]!==i[P]&&!sr(d,P))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:i===a?!1:i?a?hl(i,a,d):!0:!!a;return!1}function hl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!sr(n,o))return!0}return!1}function Ap({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mu=t=>t.__isSuspense;function Cp(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):xd(t)}const je=Symbol.for("v-fgt"),rr=Symbol.for("v-txt"),Zn=Symbol.for("v-cmt"),bs=Symbol.for("v-stc"),Ri=[];let ze=null;function Zt(t=!1){Ri.push(ze=t?null:[])}function Pp(){Ri.pop(),ze=Ri[Ri.length-1]||null}let Fi=1;function fl(t,e=!1){Fi+=t,t<0&&ze&&e&&(ze.hasOnce=!0)}function xu(t){return t.dynamicChildren=Fi>0?ze||Bn:null,Pp(),Fi>0&&ze&&ze.push(t),t}function Tn(t,e,n,i,r,o){return xu(G(t,e,n,i,r,o,!0))}function Rp(t,e,n,i,r){return xu(Ge(t,e,n,i,r,!0))}function Uu(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Fu=({key:t})=>t??null,Ts=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ve(t)||Ne(t)||Z(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,i=0,r=null,o=t===je?0:1,a=!1,c=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fu(e),ref:e&&Ts(e),scopeId:ou,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Be};return c?(Vo(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=ve(n)?8:16),Fi>0&&!a&&ze&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&ze.push(h),h}const Ge=kp;function kp(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===mu)&&(t=Zn),Uu(t)){const c=Sn(t,e,!0);return n&&Vo(c,n),Fi>0&&!o&&ze&&(c.shapeFlag&6?ze[ze.indexOf(t)]=c:ze.push(c)),c.patchFlag=-2,c}if(Wp(t)&&(t=t.__vccOpts),e){e=Op(e);let{class:c,style:h}=e;c&&!ve(c)&&(e.class=Zs(c)),ge(h)&&(xo(h)&&!q(h)&&(h=be({},h)),e.style=Po(h))}const a=ve(t)?1:Mu(t)?128:Fd(t)?64:ge(t)?4:Z(t)?2:0;return G(t,e,n,i,r,a,o,!0)}function Op(t){return t?xo(t)||Tu(t)?be({},t):t:null}function Sn(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:a,children:c,transition:h}=t,d=e?Lp(r||{},e):r,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Fu(d),ref:e&&e.ref?n&&o?q(o)?o.concat(Ts(e)):[o,Ts(e)]:Ts(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sn(t.ssContent),ssFallback:t.ssFallback&&Sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&Ui(p,h.clone(p)),p}function Dp(t=" ",e=0){return Ge(rr,null,t,e)}function Np(t,e){const n=Ge(bs,null,t);return n.staticCount=e,n}function vt(t){return t==null||typeof t=="boolean"?Ge(Zn):q(t)?Ge(je,null,t.slice()):Uu(t)?Kt(t):Ge(rr,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sn(t)}function Vo(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Vo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Tu(e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),i&64?(n=16,e=[Dp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zs([e.class,i.class]));else if(r==="style")e.style=Po([e.style,i.style]);else if(Gs(r)){const o=e[r],a=i[r];a&&o!==a&&!(q(o)&&o.includes(a))&&(e[r]=o?[].concat(o,a):a)}else r!==""&&(e[r]=i[r])}return e}function pt(t,e,n,i=null){ct(t,e,7,[n,i])}const Mp=wu();let xp=0;function Up(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Mp,o={uid:xp++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Su(i,r),emitsOptions:Lu(i,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=bp.bind(null,o),t.ce&&t.ce(o),o}let Ae=null;const Fp=()=>Ae||Be;let Ls,co;{const t=Qs(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(a=>a(o)):r[0](o)}};Ls=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),co=e("__VUE_SSR_SETTERS__",n=>ji=n)}const Ki=t=>{const e=Ae;return Ls(t),t.scope.on(),()=>{t.scope.off(),Ls(e)}},dl=()=>{Ae&&Ae.scope.off(),Ls(null)};function ju(t){return t.vnode.shapeFlag&4}let ji=!1;function jp(t,e=!1,n=!1){e&&co(e);const{props:i,children:r}=t.vnode,o=ju(t);lp(t,i,o,e),fp(t,r,n);const a=o?Vp(t,e):void 0;return e&&co(!1),a}function Vp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zd);const{setup:i}=n;if(i){rn();const r=t.setupContext=i.length>1?Hp(t):null,o=Ki(t),a=qi(i,t,0,[t.props,r]),c=Oc(a);if(on(),o(),(c||t.sp)&&!Ci(t)&&cu(t),c){if(a.then(dl,dl),e)return a.then(h=>{pl(t,h)}).catch(h=>{nr(h,t,0)});t.asyncDep=a}else pl(t,a)}else Vu(t)}function pl(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=tu(e)),Vu(t)}function Vu(t,e,n){const i=t.type;t.render||(t.render=i.render||yt);{const r=Ki(t);rn();try{ep(t)}finally{on(),r()}}}const $p={get(t,e){return Oe(t,"get",""),t[e]}};function Hp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$p),slots:t.slots,emit:t.emit,expose:e}}function or(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tu(Ed(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pi)return Pi[n](t)},has(e,n){return n in e||n in Pi}})):t.proxy}function Bp(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function Wp(t){return Z(t)&&"__vccOpts"in t}const $u=(t,e)=>kd(t,e,ji),qp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uo;const gl=typeof window<"u"&&window.trustedTypes;if(gl)try{uo=gl.createPolicy("vue",{createHTML:t=>t})}catch{}const Hu=uo?t=>uo.createHTML(t):t=>t,Kp="http://www.w3.org/2000/svg",zp="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,ml=Pt&&Pt.createElement("template"),Gp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Pt.createElementNS(Kp,t):e==="mathml"?Pt.createElementNS(zp,t):n?Pt.createElement(t,{is:n}):Pt.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Pt.createTextNode(t),createComment:t=>Pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const a=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{ml.innerHTML=Hu(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const c=ml.content;if(i==="svg"||i==="mathml"){const h=c.firstChild;for(;h.firstChild;)c.appendChild(h.firstChild);c.removeChild(h)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ht="transition",wi="animation",ei=Symbol("_vtc"),Bu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Jp=be({},Vd,Bu),vn=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},vl=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function Yp(t){const e={};for(const _ in t)_ in Bu||(e[_]=t[_]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:h=o,appearActiveClass:d=a,appearToClass:p=c,leaveFromClass:E=`${n}-leave-from`,leaveActiveClass:P=`${n}-leave-active`,leaveToClass:N=`${n}-leave-to`}=t,U=Xp(r),$=U&&U[0],J=U&&U[1],{onBeforeEnter:X,onEnter:ee,onEnterCancelled:Y,onLeave:V,onLeaveCancelled:te,onBeforeAppear:se=X,onAppear:T=ee,onAppearCancelled:m=Y}=e,g=(_,v,de,Le)=>{_._enterCancelled=Le,Wt(_,v?p:c),Wt(_,v?d:a),de&&de()},w=(_,v)=>{_._isLeaving=!1,Wt(_,E),Wt(_,N),Wt(_,P),v&&v()},I=_=>(v,de)=>{const Le=_?T:ee,_e=()=>g(v,_,de);vn(Le,[v,_e]),yl(()=>{Wt(v,_?h:o),gt(v,_?p:c),vl(Le)||_l(v,i,$,_e)})};return be(e,{onBeforeEnter(_){vn(X,[_]),gt(_,o),gt(_,a)},onBeforeAppear(_){vn(se,[_]),gt(_,h),gt(_,d)},onEnter:I(!1),onAppear:I(!0),onLeave(_,v){_._isLeaving=!0;const de=()=>w(_,v);gt(_,E),_._enterCancelled?(gt(_,P),ho()):(ho(),gt(_,P)),yl(()=>{_._isLeaving&&(Wt(_,E),gt(_,N),vl(V)||_l(_,i,J,de))}),vn(V,[_,de])},onEnterCancelled(_){g(_,!1,void 0,!0),vn(Y,[_])},onAppearCancelled(_){g(_,!0,void 0,!0),vn(m,[_])},onLeaveCancelled(_){w(_),vn(te,[_])}})}function Xp(t){if(t==null)return null;if(ge(t))return[Fr(t.enter),Fr(t.leave)];{const e=Fr(t);return[e,e]}}function Fr(t){return Jf(t)}function gt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ei]||(t[ei]=new Set)).add(e)}function Wt(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ei];n&&(n.delete(e),n.size||(t[ei]=void 0))}function yl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Qp=0;function _l(t,e,n,i){const r=t._endId=++Qp,o=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:c,propCount:h}=Wu(t,e);if(!a)return i();const d=a+"end";let p=0;const E=()=>{t.removeEventListener(d,P),o()},P=N=>{N.target===t&&++p>=h&&E()};setTimeout(()=>{p<h&&E()},c+1),t.addEventListener(d,P)}function Wu(t,e){const n=window.getComputedStyle(t),i=U=>(n[U]||"").split(", "),r=i(`${Ht}Delay`),o=i(`${Ht}Duration`),a=wl(r,o),c=i(`${wi}Delay`),h=i(`${wi}Duration`),d=wl(c,h);let p=null,E=0,P=0;e===Ht?a>0&&(p=Ht,E=a,P=o.length):e===wi?d>0&&(p=wi,E=d,P=h.length):(E=Math.max(a,d),p=E>0?a>d?Ht:wi:null,P=p?p===Ht?o.length:h.length:0);const N=p===Ht&&/\b(transform|all)(,|$)/.test(i(`${Ht}Property`).toString());return{type:p,timeout:E,propCount:P,hasTransform:N}}function wl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Il(n)+Il(t[i])))}function Il(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ho(){return document.body.offsetHeight}function Zp(t,e,n){const i=t[ei];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bl=Symbol("_vod"),eg=Symbol("_vsh"),tg=Symbol(""),ng=/(^|;)\s*display\s*:/;function ig(t,e,n){const i=t.style,r=ve(n);let o=!1;if(n&&!r){if(e)if(ve(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Es(i,c,"")}else for(const a in e)n[a]==null&&Es(i,a,"");for(const a in n)a==="display"&&(o=!0),Es(i,a,n[a])}else if(r){if(e!==n){const a=i[tg];a&&(n+=";"+a),i.cssText=n,o=ng.test(n)}}else e&&t.removeAttribute("style");bl in t&&(t[bl]=o?i.display:"",t[eg]&&(i.display="none"))}const Tl=/\s*!important$/;function Es(t,e,n){if(q(n))n.forEach(i=>Es(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=sg(t,e);Tl.test(n)?t.setProperty(sn(i),n.replace(Tl,""),"important"):t[i]=n}}const El=["Webkit","Moz","ms"],jr={};function sg(t,e){const n=jr[e];if(n)return n;let i=it(e);if(i!=="filter"&&i in t)return jr[e]=i;i=Xs(i);for(let r=0;r<El.length;r++){const o=El[r]+i;if(o in t)return jr[e]=o}return e}const Sl="http://www.w3.org/1999/xlink";function Al(t,e,n,i,r,o=td(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sl,e.slice(6,e.length)):t.setAttributeNS(Sl,e,n):n==null||o&&!Mc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":It(n)?String(n):n)}function Cl(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hu(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(c!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function wn(t,e,n,i){t.addEventListener(e,n,i)}function rg(t,e,n,i){t.removeEventListener(e,n,i)}const Pl=Symbol("_vei");function og(t,e,n,i,r=null){const o=t[Pl]||(t[Pl]={}),a=o[e];if(i&&a)a.value=i;else{const[c,h]=ag(e);if(i){const d=o[e]=ug(i,r);wn(t,c,d,h)}else a&&(rg(t,c,a,h),o[e]=void 0)}}const Rl=/(?:Once|Passive|Capture)$/;function ag(t){let e;if(Rl.test(t)){e={};let i;for(;i=t.match(Rl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let Vr=0;const lg=Promise.resolve(),cg=()=>Vr||(lg.then(()=>Vr=0),Vr=Date.now());function ug(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ct(hg(i,n.value),e,5,[i])};return n.value=t,n.attached=cg(),n}function hg(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fg=(t,e,n,i,r,o)=>{const a=r==="svg";e==="class"?Zp(t,i,a):e==="style"?ig(t,n,i):Gs(e)?So(e)||og(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(t,e,i,a))?(Cl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Al(t,e,i,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ve(i))?Cl(t,it(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Al(t,e,i,a))};function dg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&kl(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return kl(e)&&ve(n)?!1:e in t}const qu=new WeakMap,Ku=new WeakMap,Ms=Symbol("_moveCb"),Ol=Symbol("_enterCb"),pg=t=>(delete t.props.mode,t),gg=pg({name:"TransitionGroup",props:be({},Jp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Fp(),i=jd();let r,o;return fu(()=>{if(!r.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!wg(r[0].el,n.vnode.el,a))return;r.forEach(vg),r.forEach(yg);const c=r.filter(_g);ho(),c.forEach(h=>{const d=h.el,p=d.style;gt(d,a),p.transform=p.webkitTransform=p.transitionDuration="";const E=d[Ms]=P=>{P&&P.target!==d||(!P||/transform$/.test(P.propertyName))&&(d.removeEventListener("transitionend",E),d[Ms]=null,Wt(d,a))};d.addEventListener("transitionend",E)})}),()=>{const a=ae(t),c=Yp(a);let h=a.tag||je;if(r=[],o)for(let d=0;d<o.length;d++){const p=o[d];p.el&&p.el instanceof Element&&(r.push(p),Ui(p,so(p,c,i,n)),qu.set(p,p.el.getBoundingClientRect()))}o=e.default?lu(e.default()):[];for(let d=0;d<o.length;d++){const p=o[d];p.key!=null&&Ui(p,so(p,c,i,n))}return Ge(h,null,o)}}}),mg=gg;function vg(t){const e=t.el;e[Ms]&&e[Ms](),e[Ol]&&e[Ol]()}function yg(t){Ku.set(t,t.el.getBoundingClientRect())}function _g(t){const e=qu.get(t),n=Ku.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${i}px,${r}px)`,o.transitionDuration="0s",t}}function wg(t,e,n){const i=t.cloneNode(),r=t[ei];r&&r.forEach(c=>{c.split(/\s+/).forEach(h=>h&&i.classList.remove(h))}),n.split(/\s+/).forEach(c=>c&&i.classList.add(c)),i.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(i);const{hasTransform:a}=Wu(i);return o.removeChild(i),a}const xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>_s(e,n):e};function Ig(t){t.target.composing=!0}function Dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gn=Symbol("_assign"),Vi={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Gn]=xs(r);const o=i||r.props&&r.props.type==="number";wn(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Qr(c)),t[Gn](c)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",Ig),wn(t,"compositionend",Dl),wn(t,"change",Dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:o}},a){if(t[Gn]=xs(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Qr(t.value):t.value,h=e??"";c!==h&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===h)||(t.value=h))}},bg={deep:!0,created(t,e,n){t[Gn]=xs(n),wn(t,"change",()=>{const i=t._modelValue,r=Tg(t),o=t.checked,a=t[Gn];if(q(i)){const c=xc(i,r),h=c!==-1;if(o&&!h)a(i.concat(r));else if(!o&&h){const d=[...i];d.splice(c,1),a(d)}}else if(Js(i)){const c=new Set(i);o?c.add(r):c.delete(r),a(c)}else a(zu(t,o))})},mounted:Nl,beforeUpdate(t,e,n){t[Gn]=xs(n),Nl(t,e,n)}};function Nl(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(q(e))r=xc(e,i.props.value)>-1;else if(Js(e))r=e.has(i.props.value);else{if(e===n)return;r=er(e,zu(t,!0))}t.checked!==r&&(t.checked=r)}function Tg(t){return"_value"in t?t._value:t.value}function zu(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Eg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Sg=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const o=sn(r.key);if(e.some(a=>a===o||Eg[a]===o))return t(r)})},Ag=be({patchProp:fg},Gp);let Ll;function Cg(){return Ll||(Ll=pp(Ag))}const Pg=(...t)=>{const e=Cg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=kg(i);if(!r)return;const o=e._component;!Z(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Rg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Rg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kg(t){return ve(t)?document.querySelector(t):t}const Gu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Og={};function Dg(t,e,n,i,r,o){return Zt(),Tn(je,null,[e[0]||(e[0]=G("head",null,[G("link",{href:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",integrity:"sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",crossorigin:"anonymous"})],-1)),e[1]||(e[1]=G("h1",{class:"display-1"},"Home",-1)),e[2]||(e[2]=G("button",{class:"btn btn-primary"},"CLick me",-1)),e[3]||(e[3]=G("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur libero nec purus varius, ac vehicula nunc dignissim. Nullam tristique felis ut lectus convallis, in sagittis arcu imperdiet. Vivamus at justo venenatis, auctor quam vitae, elementum dui. Phasellus fermentum mauris eget eros finibus, sed scelerisque magna rutrum. Aliquam erat volutpat. Integer tincidunt lacus non magna lobortis, vel suscipit turpis tristique. Praesent faucibus metus quis metus pellentesque, vel sollicitudin nulla vestibulum. Morbi in ex ullamcorper, dignissim ligula ac, porttitor sapien. Cras aliquam nisi sed enim venenatis, in placerat tortor auctor. Fusce euismod lectus vel velit interdum, sit amet lacinia ipsum bibendum. Aenean vitae semper quam. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur libero nec purus varius, ac vehicula nunc dignissim. Nullam tristique felis ut lectus convallis, in sagittis arcu imperdiet. Vivamus at justo venenatis, auctor quam vitae, elementum dui. Phasellus fermentum mauris eget eros finibus, sed scelerisque magna rutrum. Aliquam erat volutpat. Integer tincidunt lacus non magna lobortis, vel suscipit turpis tristique. Praesent faucibus metus quis metus pellentesque, vel sollicitudin nulla vestibulum. Morbi in ex ullamcorper, dignissim ligula ac, porttitor sapien. Cras aliquam nisi sed enim venenatis, in placerat tortor auctor. Fusce euismod lectus vel velit interdum, sit amet lacinia ipsum bibendum. Aenean vitae semper quam. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur libero nec purus varius, ac vehicula nunc dignissim. Nullam tristique felis ut lectus convallis, in sagittis arcu imperdiet. Vivamus at justo venenatis, auctor quam vitae, elementum dui. Phasellus fermentum mauris eget eros finibus, sed scelerisque magna rutrum. Aliquam erat volutpat. Integer tincidunt lacus non magna lobortis, vel suscipit turpis tristique. Praesent faucibus metus quis metus pellentesque, vel sollicitudin nulla vestibulum. Morbi in ex ullamcorper, dignissim ligula ac, porttitor sapien. Cras aliquam nisi sed enim venenatis, in placerat tortor auctor. Fusce euismod lectus vel velit interdum, sit amet lacinia ipsum bibendum. Aenean vitae semper quam. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",-1))],64)}const Ng=Gu(Og,[["render",Dg]]),Lg=()=>{};var Ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Mg=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],c=t[n++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,c=a?t[r+1]:0,h=r+2<t.length,d=h?t[r+2]:0,p=o>>2,E=(o&3)<<4|c>>4;let P=(c&15)<<2|d>>6,N=d&63;h||(N=64,a||(P=64)),i.push(n[p],n[E],n[P],n[N])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ju(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const E=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||c==null||d==null||E==null)throw new xg;const P=o<<2|c>>4;if(i.push(P),d!==64){const N=c<<4&240|d>>2;if(i.push(N),E!==64){const U=d<<6&192|E;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ug=function(t){const e=Ju(t);return Yu.encodeByteArray(e,!0)},Us=function(t){return Ug(t).replace(/\./g,"")},Xu=function(t){try{return Yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=()=>Fg().__FIREBASE_DEFAULTS__,Vg=()=>{if(typeof process>"u"||typeof Ml>"u")return;const t=Ml.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$g=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xu(t[1]);return e&&JSON.parse(e)},$o=()=>{try{return Lg()||jg()||Vg()||$g()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qu=t=>{var e,n;return(n=(e=$o())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hg=t=>{const e=Qu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Zu=()=>{var t;return(t=$o())===null||t===void 0?void 0:t.config},eh=t=>{var e;return(e=$o())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Us(JSON.stringify(n)),Us(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Kg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function th(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gg(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nh(){try{return typeof indexedDB=="object"}catch{return!1}}function ih(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Jg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="FirebaseError";class ft extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Yg,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Xg(o,i):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new ft(r,c,i)}}function Xg(t,e){return t.replace(Qg,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Qg=/\{\$([^}]+)}/g;function Zg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],a=e[r];if(xl(o)&&xl(a)){if(!nn(o,a))return!1}else if(o!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function xl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,o]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function em(t,e){const n=new tm(t,e);return n.subscribe.bind(n)}class tm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");nm(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=$r),r.error===void 0&&(r.error=$r),r.complete===void 0&&(r.complete=$r);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $r(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=1e3,sm=2,rm=4*60*60*1e3,om=.5;function Ul(t,e=im,n=sm){const i=e*Math.pow(n,t),r=Math.round(om*i*(Math.random()-.5)*2);return Math.min(rm,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Bg;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cm(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&a.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lm(t){return t===_n?void 0:t}function cm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const hm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},fm=ce.INFO,dm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},pm=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=dm[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ar{constructor(e){this.name=e,this._logLevel=fm,this._logHandler=pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const gm=(t,e)=>e.some(n=>t instanceof n);let Fl,jl;function mm(){return Fl||(Fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vm(){return jl||(jl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sh=new WeakMap,fo=new WeakMap,rh=new WeakMap,Hr=new WeakMap,Ho=new WeakMap;function ym(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(en(t.result)),r()},a=()=>{i(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&sh.set(n,t)}).catch(()=>{}),Ho.set(e,t),e}function _m(t){if(fo.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});fo.set(t,e)}let po={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wm(t){po=t(po)}function Im(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Br(this),e,...n);return rh.set(i,e.sort?e.sort():[e]),en(i)}:vm().includes(t)?function(...e){return t.apply(Br(this),e),en(sh.get(this))}:function(...e){return en(t.apply(Br(this),e))}}function bm(t){return typeof t=="function"?Im(t):(t instanceof IDBTransaction&&_m(t),gm(t,mm())?new Proxy(t,po):t)}function en(t){if(t instanceof IDBRequest)return ym(t);if(Hr.has(t))return Hr.get(t);const e=bm(t);return e!==t&&(Hr.set(t,e),Ho.set(e,t)),e}const Br=t=>Ho.get(t);function oh(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),c=en(a);return i&&a.addEventListener("upgradeneeded",h=>{i(en(a.result),h.oldVersion,h.newVersion,en(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Tm=["get","getKey","getAll","getAllKeys","count"],Em=["put","add","delete","clear"],Wr=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Em.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Tm.includes(n)))return;const o=async function(a,...c){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),r&&h.done]))[0]};return Wr.set(e,o),o}wm(t=>({...t,get:(e,n,i)=>Vl(e,n)||t.get(e,n,i),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Am(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Am(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const go="@firebase/app",$l="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new ar("@firebase/app"),Cm="@firebase/app-compat",Pm="@firebase/analytics-compat",Rm="@firebase/analytics",km="@firebase/app-check-compat",Om="@firebase/app-check",Dm="@firebase/auth",Nm="@firebase/auth-compat",Lm="@firebase/database",Mm="@firebase/data-connect",xm="@firebase/database-compat",Um="@firebase/functions",Fm="@firebase/functions-compat",jm="@firebase/installations",Vm="@firebase/installations-compat",$m="@firebase/messaging",Hm="@firebase/messaging-compat",Bm="@firebase/performance",Wm="@firebase/performance-compat",qm="@firebase/remote-config",Km="@firebase/remote-config-compat",zm="@firebase/storage",Gm="@firebase/storage-compat",Jm="@firebase/firestore",Ym="@firebase/vertexai",Xm="@firebase/firestore-compat",Qm="firebase",Zm="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="[DEFAULT]",ev={[go]:"fire-core",[Cm]:"fire-core-compat",[Rm]:"fire-analytics",[Pm]:"fire-analytics-compat",[Om]:"fire-app-check",[km]:"fire-app-check-compat",[Dm]:"fire-auth",[Nm]:"fire-auth-compat",[Lm]:"fire-rtdb",[Mm]:"fire-data-connect",[xm]:"fire-rtdb-compat",[Um]:"fire-fn",[Fm]:"fire-fn-compat",[jm]:"fire-iid",[Vm]:"fire-iid-compat",[$m]:"fire-fcm",[Hm]:"fire-fcm-compat",[Bm]:"fire-perf",[Wm]:"fire-perf-compat",[qm]:"fire-rc",[Km]:"fire-rc-compat",[zm]:"fire-gcs",[Gm]:"fire-gcs-compat",[Jm]:"fire-fst",[Xm]:"fire-fst-compat",[Ym]:"fire-vertex","fire-js":"fire-js",[Qm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,tv=new Map,vo=new Map;function Hl(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bt(t){const e=t.name;if(vo.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;vo.set(e,t);for(const n of Fs.values())Hl(n,t);for(const n of tv.values())Hl(n,t);return!0}function On(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function et(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new kn("app","Firebase",nv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=Zm;function ah(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:mo,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw tn.create("bad-app-name",{appName:String(r)});if(n||(n=Zu()),!n)throw tn.create("no-options");const o=Fs.get(r);if(o){if(nn(n,o.options)&&nn(i,o.config))return o;throw tn.create("duplicate-app",{appName:r})}const a=new um(r);for(const h of vo.values())a.addComponent(h);const c=new iv(n,i,a);return Fs.set(r,c),c}function Bo(t=mo){const e=Fs.get(t);if(!e&&t===mo&&Zu())return ah();if(!e)throw tn.create("no-app",{appName:t});return e}function nt(t,e,n){var i;let r=(i=ev[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${r}" with version "${e}":`];o&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(c.join(" "));return}bt(new ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="firebase-heartbeat-database",rv=1,$i="firebase-heartbeat-store";let qr=null;function lh(){return qr||(qr=oh(sv,rv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($i)}catch(n){console.warn(n)}}}}).catch(t=>{throw tn.create("idb-open",{originalErrorMessage:t.message})})),qr}async function ov(t){try{const n=(await lh()).transaction($i),i=await n.objectStore($i).get(ch(t));return await n.done,i}catch(e){if(e instanceof ft)Lt.warn(e.message);else{const n=tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}async function Bl(t,e){try{const i=(await lh()).transaction($i,"readwrite");await i.objectStore($i).put(e,ch(t)),await i.done}catch(n){if(n instanceof ft)Lt.warn(n.message);else{const i=tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(i.message)}}}function ch(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=1024,lv=30;class cv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>lv){const a=fv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Lt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wl(),{heartbeatsToSend:i,unsentEntries:r}=uv(this._heartbeatsCache.heartbeats),o=Us(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Lt.warn(n),""}}}function Wl(){return new Date().toISOString().substring(0,10)}function uv(t,e=av){const n=[];let i=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),ql(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ql(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class hv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nh()?ih().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ov(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ql(t){return Us(JSON.stringify({version:2,heartbeats:t})).length}function fv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){bt(new ut("platform-logger",e=>new Sm(e),"PRIVATE")),bt(new ut("heartbeat",e=>new cv(e),"PRIVATE")),nt(go,$l,t),nt(go,$l,"esm2017"),nt("fire-js","")}dv("");var pv="firebase",gv="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(pv,gv,"app");function Wo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mv=uh,hh=new kn("auth","Firebase",uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new ar("@firebase/auth");function vv(t,...e){js.logLevel<=ce.WARN&&js.warn(`Auth (${ni}): ${t}`,...e)}function Ss(t,...e){js.logLevel<=ce.ERROR&&js.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw qo(t,...e)}function _t(t,...e){return qo(t,...e)}function fh(t,e,n){const i=Object.assign(Object.assign({},mv()),{[e]:n});return new kn("auth","Firebase",i).create(e,{appName:t.name})}function Nt(t){return fh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return hh.create(t,...e)}function K(t,e,...n){if(!t)throw qo(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ss(e),new Error(e)}function Mt(t,e){t||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yv(){return Kl()==="http:"||Kl()==="https:"}function Kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yv()||th()||"connection"in navigator)?navigator.onLine:!0}function wv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=qg()||zg()}get(){return _v()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Tv=new Gi(3e4,6e4);function an(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ln(t,e,n,i,r={}){return ph(t,r,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const c=zi(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return Kg()||(d.referrerPolicy="no-referrer"),dh.fetch()(await gh(t,t.config.apiHost,n,c),d)})}async function ph(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Iv),e);try{const r=new Sv(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw vs(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw vs(t,"user-disabled",a);const p=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fh(t,p,d);ht(t,p)}}catch(r){if(r instanceof ft)throw r;ht(t,"network-request-failed",{message:String(r)})}}async function Ji(t,e,n,i,r={}){const o=await ln(t,e,n,i,r);return"mfaPendingCredential"in o&&ht(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function gh(t,e,n,i){const r=`${e}${n}?${i}`,o=t,a=o.config.emulator?Ko(t.config,r):`${t.config.apiScheme}://${r}`;return bv.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function Ev(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(_t(this.auth,"network-request-failed")),Tv.get())})}}function vs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=_t(t,e,i);return r.customData._tokenResponse=n,r}function zl(t){return t!==void 0&&t.enterprise!==void 0}class Av{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ev(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Cv(t,e){return ln(t,"GET","/v2/recaptchaConfig",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function Vs(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rv(t,e=!1){const n=Ut(t),i=await n.getIdToken(e),r=zo(i);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:ki(Kr(r.auth_time)),issuedAtTime:ki(Kr(r.iat)),expirationTime:ki(Kr(r.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Kr(t){return Number(t)*1e3}function zo(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xu(n);return r?JSON.parse(r):(Ss("Failed to decode base64 JWT payload"),null)}catch(r){return Ss("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Gl(t){const e=zo(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ft&&kv(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function kv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Hi(t,Vs(n,{idToken:i}));K(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?mh(o.providerUserInfo):[],c=Nv(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),p=h?d:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new _o(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,E)}async function Dv(t){const e=Ut(t);await $s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nv(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function mh(t){return t.map(e=>{var{providerId:n}=e,i=Wo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(t,e){const n=await ph(t,{},async()=>{const i=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,a=await gh(t,r,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",dh.fetch()(a,{method:"POST",headers:c,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mv(t,e){return ln(t,"POST","/v2/accounts:revokeToken",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Gl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await Lv(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,a=new Jn;return i&&(K(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(K(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(K(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=Wo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ov(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _o(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rv(this,e)}reload(){return Dv(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(Nt(this.auth));const e=await this.getIdToken();return await Hi(this,Pv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,a,c,h,d,p;const E=(i=n.displayName)!==null&&i!==void 0?i:void 0,P=(r=n.email)!==null&&r!==void 0?r:void 0,N=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,U=(a=n.photoURL)!==null&&a!==void 0?a:void 0,$=(c=n.tenantId)!==null&&c!==void 0?c:void 0,J=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,X=(d=n.createdAt)!==null&&d!==void 0?d:void 0,ee=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:Y,emailVerified:V,isAnonymous:te,providerData:se,stsTokenManager:T}=n;K(Y&&T,e,"internal-error");const m=Jn.fromJSON(this.name,T);K(typeof Y=="string",e,"internal-error"),Bt(E,e.name),Bt(P,e.name),K(typeof V=="boolean",e,"internal-error"),K(typeof te=="boolean",e,"internal-error"),Bt(N,e.name),Bt(U,e.name),Bt($,e.name),Bt(J,e.name),Bt(X,e.name),Bt(ee,e.name);const g=new ot({uid:Y,auth:e,email:P,emailVerified:V,displayName:E,isAnonymous:te,photoURL:U,phoneNumber:N,tenantId:$,stsTokenManager:m,createdAt:X,lastLoginAt:ee});return se&&Array.isArray(se)&&(g.providerData=se.map(w=>Object.assign({},w))),J&&(g._redirectEventId=J),g}static async _fromIdTokenResponse(e,n,i=!1){const r=new Jn;r.updateFromServerResponse(n);const o=new ot({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await $s(o),o}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];K(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?mh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),c=new Jn;c.updateFromIdToken(i);const h=new ot({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new _o(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map;function Dt(t){Mt(t instanceof Function,"Expected a class definition");let e=Jl.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vh.type="NONE";const Yl=vh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e,n){return`firebase:${t}:${e}:${n}`}class Yn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=As(this.userKey,r.apiKey,o),this.fullPersistenceKey=As("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Vs(this.auth,{idToken:e}).catch(()=>{});return n?ot._fromGetAccountInfoResponse(this.auth,n,e):null}return ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Yn(Dt(Yl),e,i);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=r[0]||Dt(Yl);const a=As(i,e.config.apiKey,e.name);let c=null;for(const d of n)try{const p=await d._get(a);if(p){let E;if(typeof p=="string"){const P=await Vs(e,{idToken:p}).catch(()=>{});if(!P)break;E=await ot._fromGetAccountInfoResponse(e,P,p)}else E=ot._fromJSON(e,p);d!==o&&(c=E),o=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Yn(o,e,i):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Yn(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ih(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Th(e))return"Blackberry";if(Eh(e))return"Webos";if(_h(e))return"Safari";if((e.includes("chrome/")||wh(e))&&!e.includes("edge/"))return"Chrome";if(bh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yh(t=Ve()){return/firefox\//i.test(t)}function _h(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wh(t=Ve()){return/crios\//i.test(t)}function Ih(t=Ve()){return/iemobile/i.test(t)}function bh(t=Ve()){return/android/i.test(t)}function Th(t=Ve()){return/blackberry/i.test(t)}function Eh(t=Ve()){return/webos/i.test(t)}function Go(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xv(t=Ve()){var e;return Go(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uv(){return Gg()&&document.documentMode===10}function Sh(t=Ve()){return Go(t)||bh(t)||Eh(t)||Th(t)||/windows phone/i.test(t)||Ih(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t,e=[]){let n;switch(t){case"Browser":n=Xl(Ve());break;case"Worker":n=`${Xl(Ve())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(t,e={}){return ln(t,"GET","/v2/passwordPolicy",an(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=6;class $v{constructor(e){var n,i,r,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Vv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,o,a,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(r=h.containsLowercaseLetter)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ql(this),this.idTokenSubscription=new Ql(this),this.beforeStateQueue=new Fv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var i,r,o;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vs(this,{idToken:e}),i=await ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(r=h.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $s(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(Nt(this));const n=e?Ut(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(Nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(Nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jv(this),n=new $v(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Mv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,r);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dn(t){return Ut(t)}class Ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=em(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bv(t){lr=t}function Ch(t){return lr.loadJS(t)}function Wv(){return lr.recaptchaEnterpriseScript}function qv(){return lr.gapiScript}function Kv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zv{constructor(){this.enterprise=new Gv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Gv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Jv="recaptcha-enterprise",Ph="NO_RECAPTCHA";class Yv{constructor(e){this.type=Jv,this.auth=Dn(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{Cv(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Av(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{c(h)})})}function r(o,a,c){const h=window.grecaptcha;zl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ph)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zv().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{i(this.auth).then(c=>{if(!n&&zl(window.grecaptcha))r(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Wv();h.length!==0&&(h+=c),Ch(h).then(()=>{r(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Zl(t,e,n,i=!1,r=!1){const o=new Yv(t);let a;if(r)a=Ph;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function wo(t,e,n,i,r){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zl(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Zl(t,e,n,n==="getOobCode");return i(t,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e){const n=On(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(nn(o,e??{}))return r;ht(r,"already-initialized")}return n.initialize({options:e})}function Qv(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Zv(t,e,n){const i=Dn(t);K(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,o=Rh(e),{host:a,port:c}=ey(e),h=c===null?"":`:${c}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){K(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),K(nn(d,i.config.emulator)&&nn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,ty()}function Rh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ey(t){const e=Rh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:ec(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:ec(a)}}}function ec(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ty(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}async function ny(t,e){return ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(t,e){return Ji(t,"POST","/v1/accounts:signInWithPassword",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(t,e){return Ji(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}async function ry(t,e){return Ji(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Jo{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Bi(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Bi(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wo(e,n,"signInWithPassword",iy);case"emailLink":return sy(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wo(e,i,"signUpPassword",ny);case"emailLink":return ry(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t,e){return Ji(t,"POST","/v1/accounts:signInWithIdp",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="http://localhost";class An extends Jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=Wo(n,["providerId","signInMethod"]);if(!i||!r)return null;const a=new An(i,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Xn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}buildRequest(){const e={requestUri:oy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ly(t){const e=bi(Ti(t)).link,n=e?bi(Ti(e)).deep_link_id:null,i=bi(Ti(t)).deep_link_id;return(i?bi(Ti(i)).link:null)||i||n||e||t}class Yo{constructor(e){var n,i,r,o,a,c;const h=bi(Ti(e)),d=(n=h.apiKey)!==null&&n!==void 0?n:null,p=(i=h.oobCode)!==null&&i!==void 0?i:null,E=ay((r=h.mode)!==null&&r!==void 0?r:null);K(d&&p&&E,"argument-error"),this.apiKey=d,this.operation=E,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=h.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=ly(e);try{return new Yo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,n){return Bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Yo.parseLink(n);return K(i,"argument-error"),Bi._fromEmailAndCode(e,i.code,i.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends kh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Yi{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return An._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Gt.credential(n,i)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Yi{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Yi{constructor(){super("twitter.com")}static credential(e,n){return An._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Yt.credential(n,i)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t,e){return Ji(t,"POST","/v1/accounts:signUp",an(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await ot._fromIdTokenResponse(e,i,r),a=tc(i);return new Cn({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=tc(i);return new Cn({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function tc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends ft{constructor(e,n,i,r){var o;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Hs.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Hs(e,n,i,r)}}function Oh(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Hs._fromErrorAndOperation(t,o,e,i):o})}async function uy(t,e,n=!1){const i=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(t,e,n=!1){const{auth:i}=t;if(et(i.app))return Promise.reject(Nt(i));const r="reauthenticate";try{const o=await Hi(t,Oh(i,r,e,t),n);K(o.idToken,i,"internal-error");const a=zo(o.idToken);K(a,i,"internal-error");const{sub:c}=a;return K(t.uid===c,i,"user-mismatch"),Cn._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ht(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(t,e,n=!1){if(et(t.app))return Promise.reject(Nt(t));const i="signIn",r=await Oh(t,i,e),o=await Cn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}async function fy(t,e){return Dh(Dn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(t){const e=Dn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dy(t,e,n){if(et(t.app))return Promise.reject(Nt(t));const i=Dn(t),a=await wo(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cy).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Nh(t),h}),c=await Cn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function py(t,e,n){return et(t.app)?Promise.reject(Nt(t)):fy(Ut(t),ii.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Nh(t),i})}function gy(t,e,n,i){return Ut(t).onIdTokenChanged(e,n,i)}function my(t,e,n){return Ut(t).beforeAuthStateChanged(e,n)}const Bs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=1e3,yy=10;class Mh extends Lh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);Uv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yy):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mh.type="LOCAL";const _y=Mh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends Lh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xh.type="SESSION";const Uh=xh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new cr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(a).map(async d=>d(n.origin,o)),h=await wy(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const d=Xo("",20);r.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(E){const P=E;if(P.data.eventId===d)switch(P.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(P.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function by(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Ty(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ey(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sy(){return Fh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="firebaseLocalStorageDb",Ay=1,Ws="firebaseLocalStorage",Vh="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ur(t,e){return t.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function Cy(){const t=indexedDB.deleteDatabase(jh);return new Xi(t).toPromise()}function Io(){const t=indexedDB.open(jh,Ay);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ws,{keyPath:Vh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ws)?e(i):(i.close(),await Cy(),e(await Io()))})})}async function nc(t,e,n){const i=ur(t,!0).put({[Vh]:e,value:n});return new Xi(i).toPromise()}async function Py(t,e){const n=ur(t,!1).get(e),i=await new Xi(n).toPromise();return i===void 0?null:i.value}function ic(t,e){const n=ur(t,!0).delete(e);return new Xi(n).toPromise()}const Ry=800,ky=3;class $h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Io(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>ky)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cr._getInstance(Sy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ty(),!this.activeServiceWorker)return;this.sender=new Iy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ey()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Io();return await nc(e,Bs,"1"),await ic(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nc(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Py(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=ur(r,!1).getAll();return new Xi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ry)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$h.type="LOCAL";const Oy=$h;new Gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t,e){return e?Dt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ny(t){return Dh(t.auth,new Qo(t),t.bypassAuthState)}function Ly(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),hy(n,new Qo(t),t.bypassAuthState)}async function My(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),uy(n,new Qo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ny;case"linkViaPopup":case"linkViaRedirect":return My;case"reauthViaPopup":case"reauthViaRedirect":return Ly;default:ht(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Gi(2e3,1e4);class Hn extends Hh{constructor(e,n,i,r,o){super(e,n,r,o),this.provider=i,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xy.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="pendingRedirect",Cs=new Map;class Fy extends Hh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Cs.get(this.auth._key());if(!e){try{const i=await jy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Cs.set(this.auth._key(),e)}return this.bypassAuthState||Cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jy(t,e){const n=Hy(e),i=$y(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Vy(t,e){Cs.set(t._key(),e)}function $y(t){return Dt(t._redirectPersistence)}function Hy(t){return As(Uy,t.config.apiKey,t.name)}async function By(t,e,n=!1){if(et(t.app))return Promise.reject(Nt(t));const i=Dn(t),r=Dy(i,e),a=await new Fy(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=10*60*1e3;class qy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ky(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Bh(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wy&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ky(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jy=/^https?/;async function Yy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zy(t);for(const n of e)try{if(Xy(n))return}catch{}ht(t,"unauthorized-domain")}function Xy(t){const e=yo(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!Jy.test(n))return!1;if(Gy.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Gi(3e4,6e4);function rc(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zy(t){return new Promise((e,n)=>{var i,r,o;function a(){rc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rc(),n(_t(t,"network-request-failed"))},timeout:Qy.get()})}if(!((r=(i=wt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=wt().gapi)===null||o===void 0)&&o.load)a();else{const c=Kv("iframefcb");return wt()[c]=()=>{gapi.load?a():n(_t(t,"network-request-failed"))},Ch(`${qv()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Ps=null,e})}let Ps=null;function e_(t){return Ps=Ps||Zy(t),Ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Gi(5e3,15e3),n_="__/auth/iframe",i_="emulator/auth/iframe",s_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o_(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ko(e,i_):`https://${t.config.authDomain}/${n_}`,i={apiKey:e.apiKey,appName:t.name,v:ni},r=r_.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${zi(i).slice(1)}`}async function a_(t){const e=await e_(t),n=wt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:o_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s_,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const a=_t(t,"network-request-failed"),c=wt().setTimeout(()=>{o(a)},t_.get());function h(){wt().clearTimeout(c),r(i)}i.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c_=500,u_=600,h_="_blank",f_="http://localhost";class oc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d_(t,e,n,i=c_,r=u_){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const h=Object.assign(Object.assign({},l_),{width:i.toString(),height:r.toString(),top:o,left:a}),d=Ve().toLowerCase();n&&(c=wh(d)?h_:n),yh(d)&&(e=e||f_,h.scrollbars="yes");const p=Object.entries(h).reduce((P,[N,U])=>`${P}${N}=${U},`,"");if(xv(d)&&c!=="_self")return p_(e||"",c),new oc(null);const E=window.open(e||"",c,p);K(E,t,"popup-blocked");try{E.focus()}catch{}return new oc(E)}function p_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="__/auth/handler",m_="emulator/auth/handler",v_=encodeURIComponent("fac");async function ac(t,e,n,i,r,o){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ni,eventId:r};if(e instanceof kh){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Zg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,E]of Object.entries({}))a[p]=E}if(e instanceof Yi){const p=e.getScopes().filter(E=>E!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const h=await t._getAppCheckToken(),d=h?`#${v_}=${encodeURIComponent(h)}`:"";return`${y_(t)}?${zi(c).slice(1)}${d}`}function y_({config:t}){return t.emulator?Ko(t,m_):`https://${t.authDomain}/${g_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="webStorageSupport";class __{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uh,this._completeRedirectFn=By,this._overrideRedirectResult=Vy}async _openPopup(e,n,i,r){var o;Mt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ac(e,n,i,yo(),r);return d_(e,a,Xo())}async _openRedirect(e,n,i,r){await this._originValidation(e);const o=await ac(e,n,i,yo(),r);return by(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(Mt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await a_(e),i=new qy(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zr,{type:zr},r=>{var o;const a=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[zr];a!==void 0&&n(!!a),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sh()||_h()||Go()}}const w_=__;var lc="@firebase/auth",cc="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T_(t){bt(new ut("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ah(t)},d=new Hv(i,r,o,h);return Qv(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),bt(new ut("auth-internal",e=>{const n=Dn(e.getProvider("auth").getImmediate());return(i=>new I_(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(lc,cc,b_(t)),nt(lc,cc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=5*60,S_=eh("authIdTokenMaxAge")||E_;let uc=null;const A_=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>S_)return;const r=n==null?void 0:n.token;uc!==r&&(uc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function C_(t=Bo()){const e=On(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xv(t,{popupRedirectResolver:w_,persistence:[Oy,_y,Uh]}),i=eh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=A_(o.toString());my(n,a,()=>a(n.currentUser)),gy(n,c=>a(c))}}const r=Qu("auth");return r&&Zv(n,`http://${r}`),n}function P_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Bv({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=_t("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",P_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T_("Browser");var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function g(){}g.prototype=m.prototype,T.D=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(w,I,_){for(var v=Array(arguments.length-2),de=2;de<arguments.length;de++)v[de-2]=arguments[de];return m.prototype[I].apply(w,v)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,m,g){g||(g=0);var w=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)w[I]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(I=0;16>I;++I)w[I]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],I=T.g[2];var _=T.g[3],v=m+(_^g&(I^_))+w[0]+3614090360&4294967295;m=g+(v<<7&4294967295|v>>>25),v=_+(I^m&(g^I))+w[1]+3905402710&4294967295,_=m+(v<<12&4294967295|v>>>20),v=I+(g^_&(m^g))+w[2]+606105819&4294967295,I=_+(v<<17&4294967295|v>>>15),v=g+(m^I&(_^m))+w[3]+3250441966&4294967295,g=I+(v<<22&4294967295|v>>>10),v=m+(_^g&(I^_))+w[4]+4118548399&4294967295,m=g+(v<<7&4294967295|v>>>25),v=_+(I^m&(g^I))+w[5]+1200080426&4294967295,_=m+(v<<12&4294967295|v>>>20),v=I+(g^_&(m^g))+w[6]+2821735955&4294967295,I=_+(v<<17&4294967295|v>>>15),v=g+(m^I&(_^m))+w[7]+4249261313&4294967295,g=I+(v<<22&4294967295|v>>>10),v=m+(_^g&(I^_))+w[8]+1770035416&4294967295,m=g+(v<<7&4294967295|v>>>25),v=_+(I^m&(g^I))+w[9]+2336552879&4294967295,_=m+(v<<12&4294967295|v>>>20),v=I+(g^_&(m^g))+w[10]+4294925233&4294967295,I=_+(v<<17&4294967295|v>>>15),v=g+(m^I&(_^m))+w[11]+2304563134&4294967295,g=I+(v<<22&4294967295|v>>>10),v=m+(_^g&(I^_))+w[12]+1804603682&4294967295,m=g+(v<<7&4294967295|v>>>25),v=_+(I^m&(g^I))+w[13]+4254626195&4294967295,_=m+(v<<12&4294967295|v>>>20),v=I+(g^_&(m^g))+w[14]+2792965006&4294967295,I=_+(v<<17&4294967295|v>>>15),v=g+(m^I&(_^m))+w[15]+1236535329&4294967295,g=I+(v<<22&4294967295|v>>>10),v=m+(I^_&(g^I))+w[1]+4129170786&4294967295,m=g+(v<<5&4294967295|v>>>27),v=_+(g^I&(m^g))+w[6]+3225465664&4294967295,_=m+(v<<9&4294967295|v>>>23),v=I+(m^g&(_^m))+w[11]+643717713&4294967295,I=_+(v<<14&4294967295|v>>>18),v=g+(_^m&(I^_))+w[0]+3921069994&4294967295,g=I+(v<<20&4294967295|v>>>12),v=m+(I^_&(g^I))+w[5]+3593408605&4294967295,m=g+(v<<5&4294967295|v>>>27),v=_+(g^I&(m^g))+w[10]+38016083&4294967295,_=m+(v<<9&4294967295|v>>>23),v=I+(m^g&(_^m))+w[15]+3634488961&4294967295,I=_+(v<<14&4294967295|v>>>18),v=g+(_^m&(I^_))+w[4]+3889429448&4294967295,g=I+(v<<20&4294967295|v>>>12),v=m+(I^_&(g^I))+w[9]+568446438&4294967295,m=g+(v<<5&4294967295|v>>>27),v=_+(g^I&(m^g))+w[14]+3275163606&4294967295,_=m+(v<<9&4294967295|v>>>23),v=I+(m^g&(_^m))+w[3]+4107603335&4294967295,I=_+(v<<14&4294967295|v>>>18),v=g+(_^m&(I^_))+w[8]+1163531501&4294967295,g=I+(v<<20&4294967295|v>>>12),v=m+(I^_&(g^I))+w[13]+2850285829&4294967295,m=g+(v<<5&4294967295|v>>>27),v=_+(g^I&(m^g))+w[2]+4243563512&4294967295,_=m+(v<<9&4294967295|v>>>23),v=I+(m^g&(_^m))+w[7]+1735328473&4294967295,I=_+(v<<14&4294967295|v>>>18),v=g+(_^m&(I^_))+w[12]+2368359562&4294967295,g=I+(v<<20&4294967295|v>>>12),v=m+(g^I^_)+w[5]+4294588738&4294967295,m=g+(v<<4&4294967295|v>>>28),v=_+(m^g^I)+w[8]+2272392833&4294967295,_=m+(v<<11&4294967295|v>>>21),v=I+(_^m^g)+w[11]+1839030562&4294967295,I=_+(v<<16&4294967295|v>>>16),v=g+(I^_^m)+w[14]+4259657740&4294967295,g=I+(v<<23&4294967295|v>>>9),v=m+(g^I^_)+w[1]+2763975236&4294967295,m=g+(v<<4&4294967295|v>>>28),v=_+(m^g^I)+w[4]+1272893353&4294967295,_=m+(v<<11&4294967295|v>>>21),v=I+(_^m^g)+w[7]+4139469664&4294967295,I=_+(v<<16&4294967295|v>>>16),v=g+(I^_^m)+w[10]+3200236656&4294967295,g=I+(v<<23&4294967295|v>>>9),v=m+(g^I^_)+w[13]+681279174&4294967295,m=g+(v<<4&4294967295|v>>>28),v=_+(m^g^I)+w[0]+3936430074&4294967295,_=m+(v<<11&4294967295|v>>>21),v=I+(_^m^g)+w[3]+3572445317&4294967295,I=_+(v<<16&4294967295|v>>>16),v=g+(I^_^m)+w[6]+76029189&4294967295,g=I+(v<<23&4294967295|v>>>9),v=m+(g^I^_)+w[9]+3654602809&4294967295,m=g+(v<<4&4294967295|v>>>28),v=_+(m^g^I)+w[12]+3873151461&4294967295,_=m+(v<<11&4294967295|v>>>21),v=I+(_^m^g)+w[15]+530742520&4294967295,I=_+(v<<16&4294967295|v>>>16),v=g+(I^_^m)+w[2]+3299628645&4294967295,g=I+(v<<23&4294967295|v>>>9),v=m+(I^(g|~_))+w[0]+4096336452&4294967295,m=g+(v<<6&4294967295|v>>>26),v=_+(g^(m|~I))+w[7]+1126891415&4294967295,_=m+(v<<10&4294967295|v>>>22),v=I+(m^(_|~g))+w[14]+2878612391&4294967295,I=_+(v<<15&4294967295|v>>>17),v=g+(_^(I|~m))+w[5]+4237533241&4294967295,g=I+(v<<21&4294967295|v>>>11),v=m+(I^(g|~_))+w[12]+1700485571&4294967295,m=g+(v<<6&4294967295|v>>>26),v=_+(g^(m|~I))+w[3]+2399980690&4294967295,_=m+(v<<10&4294967295|v>>>22),v=I+(m^(_|~g))+w[10]+4293915773&4294967295,I=_+(v<<15&4294967295|v>>>17),v=g+(_^(I|~m))+w[1]+2240044497&4294967295,g=I+(v<<21&4294967295|v>>>11),v=m+(I^(g|~_))+w[8]+1873313359&4294967295,m=g+(v<<6&4294967295|v>>>26),v=_+(g^(m|~I))+w[15]+4264355552&4294967295,_=m+(v<<10&4294967295|v>>>22),v=I+(m^(_|~g))+w[6]+2734768916&4294967295,I=_+(v<<15&4294967295|v>>>17),v=g+(_^(I|~m))+w[13]+1309151649&4294967295,g=I+(v<<21&4294967295|v>>>11),v=m+(I^(g|~_))+w[4]+4149444226&4294967295,m=g+(v<<6&4294967295|v>>>26),v=_+(g^(m|~I))+w[11]+3174756917&4294967295,_=m+(v<<10&4294967295|v>>>22),v=I+(m^(_|~g))+w[2]+718787259&4294967295,I=_+(v<<15&4294967295|v>>>17),v=g+(_^(I|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+_&4294967295}i.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var g=m-this.blockSize,w=this.B,I=this.h,_=0;_<m;){if(I==0)for(;_<=g;)r(this,T,_),_+=this.blockSize;if(typeof T=="string"){for(;_<m;)if(w[I++]=T.charCodeAt(_++),I==this.blockSize){r(this,w),I=0;break}}else for(;_<m;)if(w[I++]=T[_++],I==this.blockSize){r(this,w),I=0;break}}this.h=I,this.o+=m},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var g=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=g&255,g/=256;for(this.u(T),T=Array(16),m=g=0;4>m;++m)for(var w=0;32>w;w+=8)T[g++]=this.g[m]>>>w&255;return T};function o(T,m){var g=c;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function a(T,m){this.h=m;for(var g=[],w=!0,I=T.length-1;0<=I;I--){var _=T[I]|0;w&&_==m||(g[I]=_,w=!1)}this.g=g}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return E;if(0>T)return J(d(-T));for(var m=[],g=1,w=0;T>=g;w++)m[w]=T/g|0,g*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return J(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),w=E,I=0;I<T.length;I+=8){var _=Math.min(8,T.length-I),v=parseInt(T.substring(I,I+_),m);8>_?(_=d(Math.pow(m,_)),w=w.j(_).add(d(v))):(w=w.j(g),w=w.add(d(v)))}return w}var E=h(0),P=h(1),N=h(16777216);t=a.prototype,t.m=function(){if($(this))return-J(this).m();for(var T=0,m=1,g=0;g<this.g.length;g++){var w=this.i(g);T+=(0<=w?w:4294967296+w)*m,m*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(U(this))return"0";if($(this))return"-"+J(this).toString(T);for(var m=d(Math.pow(T,6)),g=this,w="";;){var I=V(g,m).g;g=X(g,I.j(m));var _=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=I,U(g))return _+w;for(;6>_.length;)_="0"+_;w=_+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function U(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function $(T){return T.h==-1}t.l=function(T){return T=X(this,T),$(T)?-1:U(T)?0:1};function J(T){for(var m=T.g.length,g=[],w=0;w<m;w++)g[w]=~T.g[w];return new a(g,~T.h).add(P)}t.abs=function(){return $(this)?J(this):this},t.add=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0,I=0;I<=m;I++){var _=w+(this.i(I)&65535)+(T.i(I)&65535),v=(_>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);w=v>>>16,_&=65535,v&=65535,g[I]=v<<16|_}return new a(g,g[g.length-1]&-2147483648?-1:0)};function X(T,m){return T.add(J(m))}t.j=function(T){if(U(this)||U(T))return E;if($(this))return $(T)?J(this).j(J(T)):J(J(this).j(T));if($(T))return J(this.j(J(T)));if(0>this.l(N)&&0>T.l(N))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,g=[],w=0;w<2*m;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<T.g.length;I++){var _=this.i(w)>>>16,v=this.i(w)&65535,de=T.i(I)>>>16,Le=T.i(I)&65535;g[2*w+2*I]+=v*Le,ee(g,2*w+2*I),g[2*w+2*I+1]+=_*Le,ee(g,2*w+2*I+1),g[2*w+2*I+1]+=v*de,ee(g,2*w+2*I+1),g[2*w+2*I+2]+=_*de,ee(g,2*w+2*I+2)}for(w=0;w<m;w++)g[w]=g[2*w+1]<<16|g[2*w];for(w=m;w<2*m;w++)g[w]=0;return new a(g,0)};function ee(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Y(T,m){this.g=T,this.h=m}function V(T,m){if(U(m))throw Error("division by zero");if(U(T))return new Y(E,E);if($(T))return m=V(J(T),m),new Y(J(m.g),J(m.h));if($(m))return m=V(T,J(m)),new Y(J(m.g),m.h);if(30<T.g.length){if($(T)||$(m))throw Error("slowDivide_ only works with positive integers.");for(var g=P,w=m;0>=w.l(T);)g=te(g),w=te(w);var I=se(g,1),_=se(w,1);for(w=se(w,2),g=se(g,2);!U(w);){var v=_.add(w);0>=v.l(T)&&(I=I.add(g),_=v),w=se(w,1),g=se(g,1)}return m=X(T,I.j(m)),new Y(I,m)}for(I=E;0<=T.l(m);){for(g=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),_=d(g),v=_.j(m);$(v)||0<v.l(T);)g-=w,_=d(g),v=_.j(m);U(_)&&(_=P),I=I.add(_),T=X(T,v)}return new Y(I,T)}t.A=function(T){return V(this,T).h},t.and=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0;w<m;w++)g[w]=this.i(w)&T.i(w);return new a(g,this.h&T.h)},t.or=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0;w<m;w++)g[w]=this.i(w)|T.i(w);return new a(g,this.h|T.h)},t.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],w=0;w<m;w++)g[w]=this.i(w)^T.i(w);return new a(g,this.h^T.h)};function te(T){for(var m=T.g.length+1,g=[],w=0;w<m;w++)g[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(g,T.h)}function se(T,m){var g=m>>5;m%=32;for(var w=T.g.length-g,I=[],_=0;_<w;_++)I[_]=0<m?T.i(_+g)>>>m|T.i(_+g+1)<<32-m:T.i(_+g);return new a(I,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Wh=a}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,u){return s==Array.prototype||s==Object.prototype||(s[l]=u.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=n(this);function r(s,l){if(l)e:{var u=i;s=s.split(".");for(var f=0;f<s.length-1;f++){var S=s[f];if(!(S in u))break e;u=u[S]}s=s[s.length-1],f=u[s],l=l(f),l!=f&&l!=null&&e(u,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var u=0,f=!1,S={next:function(){if(!f&&u<s.length){var A=u++;return{value:l(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}r("Array.prototype.values",function(s){return s||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function p(s,l,u){return s.call.apply(s.bind,arguments)}function E(s,l,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,f),s.apply(l,S)}}return function(){return s.apply(l,arguments)}}function P(s,l,u){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,P.apply(null,arguments)}function N(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function U(s,l){function u(){}u.prototype=l.prototype,s.aa=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,S,A){for(var x=Array(arguments.length-2),he=2;he<arguments.length;he++)x[he-2]=arguments[he];return l.prototype[S].apply(f,x)}}function $(s){const l=s.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=s[f];return u}return[]}function J(s,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const S=s.length||0,A=f.length||0;s.length=S+A;for(let x=0;x<A;x++)s[S+x]=f[x]}else s.push(f)}}class X{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function ee(s){return/^[\s\xa0]*$/.test(s)}function Y(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function V(s){return V[" "](s),s}V[" "]=function(){};var te=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function se(s,l,u){for(const f in s)l.call(u,s[f],f,s)}function T(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function m(s){const l={};for(const u in s)l[u]=s[u];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(s,l){let u,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(u in f)s[u]=f[u];for(let A=0;A<g.length;A++)u=g[A],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function I(s){var l=1;s=s.split(":");const u=[];for(;0<l&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function _(s){c.setTimeout(()=>{throw s},0)}function v(){var s=st;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class de{constructor(){this.h=this.g=null}add(l,u){const f=Le.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Le=new X(()=>new _e,s=>s.reset());class _e{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,re=!1,st=new de,cn=()=>{const s=c.Promise.resolve(void 0);ue=()=>{s.then(Tt)}};var Tt=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(u){_(u)}var l=Le;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}re=!1};function we(){this.s=this.s,this.C=this.C}we.prototype.s=!1,we.prototype.ma=function(){this.s||(this.s=!0,this.N())},we.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var dr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return s}();function un(s,l){if(Ie.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(te){e:{try{V(l.nodeName);var S=!0;break e}catch{}S=!1}S||(l=null)}}else u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:hn[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&un.aa.h.call(this)}}U(un,Ie);var hn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),si=0;function Zi(s,l,u,f,S){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=S,this.key=++si,this.da=this.fa=!1}function dt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ri(s){this.src=s,this.g={},this.h=0}ri.prototype.add=function(s,l,u,f,S){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var x=b(s,l,f,S);return-1<x?(l=s[x],u||(l.fa=!1)):(l=new Zi(l,this.src,A,!!f,S),l.fa=u,s.push(l)),l};function y(s,l){var u=l.type;if(u in s.g){var f=s.g[u],S=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=S)&&Array.prototype.splice.call(f,S,1),A&&(dt(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function b(s,l,u,f){for(var S=0;S<s.length;++S){var A=s[S];if(!A.da&&A.listener==l&&A.capture==!!u&&A.ha==f)return S}return-1}var C="closure_lm_"+(1e6*Math.random()|0),k={};function R(s,l,u,f,S){if(Array.isArray(l)){for(var A=0;A<l.length;A++)R(s,l[A],u,f,S);return null}return u=z(u),s&&s[Et]?s.K(l,u,d(f)?!!f.capture:!1,S):O(s,l,u,!1,f,S)}function O(s,l,u,f,S,A){if(!l)throw Error("Invalid event type");var x=d(S)?!!S.capture:!!S,he=j(s);if(he||(s[C]=he=new ri(s)),u=he.add(l,u,f,x,A),u.proxy)return u;if(f=F(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)dr||(S=x),S===void 0&&(S=!1),s.addEventListener(l.toString(),f,S);else if(s.attachEvent)s.attachEvent(D(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function F(){function s(u){return l.call(s.src,s.listener,u)}const l=B;return s}function M(s,l,u,f,S){if(Array.isArray(l))for(var A=0;A<l.length;A++)M(s,l[A],u,f,S);else f=d(f)?!!f.capture:!!f,u=z(u),s&&s[Et]?(s=s.i,l=String(l).toString(),l in s.g&&(A=s.g[l],u=b(A,u,f,S),-1<u&&(dt(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete s.g[l],s.h--)))):s&&(s=j(s))&&(l=s.g[l.toString()],s=-1,l&&(s=b(l,u,f,S)),(u=-1<s?l[s]:null)&&L(u))}function L(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Et])y(l.i,s);else{var u=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(u,f,s.capture):l.detachEvent?l.detachEvent(D(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=j(l))?(y(u,s),u.h==0&&(u.src=null,l[C]=null)):dt(s)}}}function D(s){return s in k?k[s]:k[s]="on"+s}function B(s,l){if(s.da)s=!0;else{l=new un(l,this);var u=s.listener,f=s.ha||s.src;s.fa&&L(s),s=u.call(f,l)}return s}function j(s){return s=s[C],s instanceof ri?s:null}var H="__closure_events_fn_"+(1e9*Math.random()>>>0);function z(s){return typeof s=="function"?s:(s[H]||(s[H]=function(l){return s.handleEvent(l)}),s[H])}function W(){we.call(this),this.i=new ri(this),this.M=this,this.F=null}U(W,we),W.prototype[Et]=!0,W.prototype.removeEventListener=function(s,l,u,f){M(this,s,l,u,f)};function Q(s,l){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new Ie(l,s);else if(l instanceof Ie)l.target=l.target||s;else{var S=l;l=new Ie(f,s),w(l,S)}if(S=!0,u)for(var A=u.length-1;0<=A;A--){var x=l.g=u[A];S=ne(x,f,!0,l)&&S}if(x=l.g=s,S=ne(x,f,!0,l)&&S,S=ne(x,f,!1,l)&&S,u)for(A=0;A<u.length;A++)x=l.g=u[A],S=ne(x,f,!1,l)&&S}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var u=s.g[l],f=0;f<u.length;f++)dt(u[f]);delete s.g[l],s.h--}}this.F=null},W.prototype.K=function(s,l,u,f){return this.i.add(String(s),l,!1,u,f)},W.prototype.L=function(s,l,u,f){return this.i.add(String(s),l,!0,u,f)};function ne(s,l,u,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var S=!0,A=0;A<l.length;++A){var x=l[A];if(x&&!x.da&&x.capture==u){var he=x.listener,Se=x.ha||x.src;x.fa&&y(s.i,x),S=he.call(Se,f)!==!1&&S}}return S&&!f.defaultPrevented}function Ce(s,l,u){if(typeof s=="function")u&&(s=P(s,u));else if(s&&typeof s.handleEvent=="function")s=P(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function Te(s){s.g=Ce(()=>{s.g=null,s.i&&(s.i=!1,Te(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class Ye extends we{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Te(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(s){we.call(this),this.h=s,this.g={}}U(Pe,we);var Ft=[];function oi(s){se(s.g,function(l,u){this.g.hasOwnProperty(u)&&L(l)},s),s.g={}}Pe.prototype.N=function(){Pe.aa.N.call(this),oi(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ee=c.JSON.stringify,Xe=c.JSON.parse,es=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function pr(){}pr.prototype.h=null;function la(s){return s.h||(s.h=s.i())}function _f(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){Ie.call(this,"d")}U(gr,Ie);function mr(){Ie.call(this,"c")}U(mr,Ie);var Nn={},ca=null;function vr(){return ca=ca||new W}Nn.La="serverreachability";function ua(s){Ie.call(this,Nn.La,s)}U(ua,Ie);function li(s){const l=vr();Q(l,new ua(l))}Nn.STAT_EVENT="statevent";function ha(s,l){Ie.call(this,Nn.STAT_EVENT,s),this.stat=l}U(ha,Ie);function Me(s){const l=vr();Q(l,new ha(l,s))}Nn.Ma="timingevent";function fa(s,l){Ie.call(this,Nn.Ma,s),this.size=l}U(fa,Ie);function ci(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function ui(){this.g=!0}ui.prototype.xa=function(){this.g=!1};function wf(s,l,u,f,S,A){s.info(function(){if(s.g)if(A)for(var x="",he=A.split("&"),Se=0;Se<he.length;Se++){var oe=he[Se].split("=");if(1<oe.length){var Re=oe[0];oe=oe[1];var ke=Re.split("_");x=2<=ke.length&&ke[1]=="type"?x+(Re+"="+oe+"&"):x+(Re+"=redacted&")}}else x=null;else x=A;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+l+`
`+u+`
`+x})}function If(s,l,u,f,S,A,x){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+l+`
`+u+`
`+A+" "+x})}function Ln(s,l,u,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Tf(s,u)+(f?" "+f:"")})}function bf(s,l){s.info(function(){return"TIMEOUT: "+l})}ui.prototype.info=function(){};function Tf(s,l){if(!s.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var S=f[1];if(Array.isArray(S)&&!(1>S.length)){var A=S[0];if(A!="noop"&&A!="stop"&&A!="close")for(var x=1;x<S.length;x++)S[x]=""}}}}return Ee(u)}catch{return l}}var yr={NO_ERROR:0,TIMEOUT:8},Ef={},_r;function ts(){}U(ts,pr),ts.prototype.g=function(){return new XMLHttpRequest},ts.prototype.i=function(){return{}},_r=new ts;function jt(s,l,u,f){this.j=s,this.i=l,this.l=u,this.R=f||1,this.U=new Pe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new da}function da(){this.i=null,this.g="",this.h=!1}var pa={},wr={};function Ir(s,l,u){s.L=1,s.v=rs(St(l)),s.m=u,s.P=!0,ga(s,null)}function ga(s,l){s.F=Date.now(),ns(s),s.A=St(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Ra(u.i,"t",f),s.C=0,u=s.j.J,s.h=new da,s.g=za(s.j,u?l:null,!s.m),0<s.O&&(s.M=new Ye(P(s.Y,s,s.g),s.O)),l=s.U,u=s.g,f=s.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ft[0]=S.toString()),S=Ft);for(var A=0;A<S.length;A++){var x=R(u,S[A],f||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),li(),wf(s.i,s.u,s.A,s.l,s.R,s.m)}jt.prototype.ca=function(s){s=s.target;const l=this.M;l&&At(s)==3?l.j():this.Y(s)},jt.prototype.Y=function(s){try{if(s==this.g)e:{const ke=At(this.g);var l=this.g.Ba();const Un=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||xa(this.g)))){this.J||ke!=4||l==7||(l==8||0>=Un?li(3):li(2)),br(this);var u=this.g.Z();this.X=u;t:if(ma(this)){var f=xa(this.g);s="";var S=f.length,A=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),hi(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<S;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(A&&l==S-1)});f.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=u==200,If(this.i,this.u,this.A,this.l,this.R,ke,u),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Se=this.g;if((he=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(he)){var oe=he;break t}}oe=null}if(u=oe)Ln(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tr(this,u);else{this.o=!1,this.s=3,Me(12),fn(this),hi(this);break e}}if(this.P){u=!0;let rt;for(;!this.J&&this.C<x.length;)if(rt=Sf(this,x),rt==wr){ke==4&&(this.s=4,Me(14),u=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==pa){this.s=4,Me(15),Ln(this.i,this.l,x,"[Invalid Chunk]"),u=!1;break}else Ln(this.i,this.l,rt,null),Tr(this,rt);if(ma(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||x.length!=0||this.h.h||(this.s=1,Me(16),u=!1),this.o=this.o&&u,!u)Ln(this.i,this.l,x,"[Invalid Chunked Response]"),fn(this),hi(this);else if(0<x.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Rr(Re),Re.M=!0,Me(11))}}else Ln(this.i,this.l,x,null),Tr(this,x);ke==4&&fn(this),this.o&&!this.J&&(ke==4?Ba(this.j,this):(this.o=!1,ns(this)))}else Hf(this.g),u==400&&0<x.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),fn(this),hi(this)}}}catch{}finally{}};function ma(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Sf(s,l){var u=s.C,f=l.indexOf(`
`,u);return f==-1?wr:(u=Number(l.substring(u,f)),isNaN(u)?pa:(f+=1,f+u>l.length?wr:(l=l.slice(f,f+u),s.C=f+u,l)))}jt.prototype.cancel=function(){this.J=!0,fn(this)};function ns(s){s.S=Date.now()+s.I,va(s,s.I)}function va(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ci(P(s.ba,s),l)}function br(s){s.B&&(c.clearTimeout(s.B),s.B=null)}jt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(bf(this.i,this.A),this.L!=2&&(li(),Me(17)),fn(this),this.s=2,hi(this)):va(this,this.S-s)};function hi(s){s.j.G==0||s.J||Ba(s.j,s)}function fn(s){br(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,oi(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Tr(s,l){try{var u=s.j;if(u.G!=0&&(u.g==s||Er(u.h,s))){if(!s.K&&Er(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)hs(u),cs(u);else break e;Pr(u),Me(18)}}else u.za=S[1],0<u.za-u.T&&37500>S[2]&&u.F&&u.v==0&&!u.C&&(u.C=ci(P(u.Za,u),6e3));if(1>=wa(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else pn(u,11)}else if((s.K||u.g==s)&&hs(u),!ee(l))for(S=u.Da.g.parse(l),l=0;l<S.length;l++){let oe=S[l];if(u.T=oe[0],oe=oe[1],u.G==2)if(oe[0]=="c"){u.K=oe[1],u.ia=oe[2];const Re=oe[3];Re!=null&&(u.la=Re,u.j.info("VER="+u.la));const ke=oe[4];ke!=null&&(u.Aa=ke,u.j.info("SVER="+u.Aa));const Un=oe[5];Un!=null&&typeof Un=="number"&&0<Un&&(f=1.5*Un,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const rt=s.g;if(rt){const fs=rt.g?rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fs){var A=f.h;A.g||fs.indexOf("spdy")==-1&&fs.indexOf("quic")==-1&&fs.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Sr(A,A.h),A.h=null))}if(f.D){const kr=rt.g?rt.g.getResponseHeader("X-HTTP-Session-Id"):null;kr&&(f.ya=kr,me(f.I,f.D,kr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var x=s;if(f.qa=Ka(f,f.J?f.ia:null,f.W),x.K){Ia(f.h,x);var he=x,Se=f.L;Se&&(he.I=Se),he.B&&(br(he),ns(he)),f.g=x}else $a(f);0<u.i.length&&us(u)}else oe[0]!="stop"&&oe[0]!="close"||pn(u,7);else u.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?pn(u,7):Cr(u):oe[0]!="noop"&&u.l&&u.l.ta(oe),u.v=0)}}li(4)}catch{}}var Af=class{constructor(s,l){this.g=s,this.map=l}};function ya(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _a(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function wa(s){return s.h?1:s.g?s.g.size:0}function Er(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Sr(s,l){s.g?s.g.add(l):s.h=l}function Ia(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}ya.prototype.cancel=function(){if(this.i=ba(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ba(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.D);return l}return $(s.i)}function Cf(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],u=s.length,f=0;f<u;f++)l.push(s[f]);return l}l=[],u=0;for(f in s)l[u++]=s[f];return l}function Pf(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var u=0;u<s;u++)l.push(u);return l}l=[],u=0;for(const f in s)l[u++]=f;return l}}}function Ta(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var u=Pf(s),f=Cf(s),S=f.length,A=0;A<S;A++)l.call(void 0,f[A],u&&u[A],s)}var Ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rf(s,l){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),S=null;if(0<=f){var A=s[u].substring(0,f);S=s[u].substring(f+1)}else A=s[u];l(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function dn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof dn){this.h=s.h,is(this,s.j),this.o=s.o,this.g=s.g,ss(this,s.s),this.l=s.l;var l=s.i,u=new pi;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Sa(this,u),this.m=s.m}else s&&(l=String(s).match(Ea))?(this.h=!1,is(this,l[1]||"",!0),this.o=fi(l[2]||""),this.g=fi(l[3]||"",!0),ss(this,l[4]),this.l=fi(l[5]||"",!0),Sa(this,l[6]||"",!0),this.m=fi(l[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}dn.prototype.toString=function(){var s=[],l=this.j;l&&s.push(di(l,Aa,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(di(l,Aa,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(di(u,u.charAt(0)=="/"?Df:Of,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",di(u,Lf)),s.join("")};function St(s){return new dn(s)}function is(s,l,u){s.j=u?fi(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function ss(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Sa(s,l,u){l instanceof pi?(s.i=l,Mf(s.i,s.h)):(u||(l=di(l,Nf)),s.i=new pi(l,s.h))}function me(s,l,u){s.i.set(l,u)}function rs(s){return me(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function fi(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function di(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,kf),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function kf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Aa=/[#\/\?@]/g,Of=/[#\?:]/g,Df=/[#\?]/g,Nf=/[#\?@]/g,Lf=/#/g;function pi(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Vt(s){s.g||(s.g=new Map,s.h=0,s.i&&Rf(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}t=pi.prototype,t.add=function(s,l){Vt(this),this.i=null,s=Mn(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function Ca(s,l){Vt(s),l=Mn(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Pa(s,l){return Vt(s),l=Mn(s,l),s.g.has(l)}t.forEach=function(s,l){Vt(this),this.g.forEach(function(u,f){u.forEach(function(S){s.call(l,S,f,this)},this)},this)},t.na=function(){Vt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const S=s[f];for(let A=0;A<S.length;A++)u.push(l[f])}return u},t.V=function(s){Vt(this);let l=[];if(typeof s=="string")Pa(this,s)&&(l=l.concat(this.g.get(Mn(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)l=l.concat(s[u])}return l},t.set=function(s,l){return Vt(this),this.i=null,s=Mn(this,s),Pa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},t.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Ra(s,l,u){Ca(s,l),0<u.length&&(s.i=null,s.g.set(Mn(s,l),$(u)),s.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const A=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var S=A;x[f]!==""&&(S+="="+encodeURIComponent(String(x[f]))),s.push(S)}}return this.i=s.join("&")};function Mn(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function Mf(s,l){l&&!s.j&&(Vt(s),s.i=null,s.g.forEach(function(u,f){var S=f.toLowerCase();f!=S&&(Ca(this,f),Ra(this,S,u))},s)),s.j=l}function xf(s,l){const u=new ui;if(c.Image){const f=new Image;f.onload=N($t,u,"TestLoadImage: loaded",!0,l,f),f.onerror=N($t,u,"TestLoadImage: error",!1,l,f),f.onabort=N($t,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=N($t,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function Uf(s,l){const u=new ui,f=new AbortController,S=setTimeout(()=>{f.abort(),$t(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(S),A.ok?$t(u,"TestPingServer: ok",!0,l):$t(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),$t(u,"TestPingServer: error",!1,l)})}function $t(s,l,u,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(u)}catch{}}function Ff(){this.g=new es}function jf(s,l,u){const f=u||"";try{Ta(s,function(S,A){let x=S;d(S)&&(x=Ee(S)),l.push(f+A+"="+encodeURIComponent(x))})}catch(S){throw l.push(f+"type="+encodeURIComponent("_badmap")),S}}function os(s){this.l=s.Ub||null,this.j=s.eb||!1}U(os,pr),os.prototype.g=function(){return new as(this.l,this.j)},os.prototype.i=function(s){return function(){return s}}({});function as(s,l){W.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(as,W),t=as.prototype,t.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,mi(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ka(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ka(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?gi(this):mi(this),this.readyState==3&&ka(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,gi(this))},t.Qa=function(s){this.g&&(this.response=s,gi(this))},t.ga=function(){this.g&&gi(this)};function gi(s){s.readyState=4,s.l=null,s.j=null,s.v=null,mi(s)}t.setRequestHeader=function(s,l){this.u.append(s,l)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function mi(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Oa(s){let l="";return se(s,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Ar(s,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Oa(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):me(s,l,u))}function ye(s){W.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(ye,W);var Vf=/^https?$/i,$f=["POST","PUT"];t=ye.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_r.g(),this.v=this.o?la(this.o):la(_r),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(A){Da(this,A);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)u.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())u.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),S=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call($f,l,void 0))||f||S||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,x]of u)this.g.setRequestHeader(A,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ma(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Da(this,A)}};function Da(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Na(s),ls(s)}function Na(s){s.A||(s.A=!0,Q(s,"complete"),Q(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Q(this,"complete"),Q(this,"abort"),ls(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?La(this):this.bb())},t.bb=function(){La(this)};function La(s){if(s.h&&typeof a<"u"&&(!s.v[1]||At(s)!=4||s.Z()!=2)){if(s.u&&At(s)==4)Ce(s.Ea,0,s);else if(Q(s,"readystatechange"),At(s)==4){s.h=!1;try{const x=s.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=x===0){var S=String(s.D).match(Ea)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),f=!Vf.test(S?S.toLowerCase():"")}u=f}if(u)Q(s,"complete"),Q(s,"success");else{s.m=6;try{var A=2<At(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Na(s)}}finally{ls(s)}}}}function ls(s,l){if(s.g){Ma(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Q(s,"ready");try{u.onreadystatechange=f}catch{}}}function Ma(s){s.I&&(c.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function At(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Xe(l)}};function xa(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Hf(s){const l={};s=(s.g&&2<=At(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(ee(s[f]))continue;var u=I(s[f]);const S=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=l[S]||[];l[S]=A,A.push(u)}T(l,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function Ua(s){this.Aa=0,this.i=[],this.j=new ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,s),this.cb=vi("retryDelaySeedMs",1e4,s),this.Wa=vi("forwardChannelMaxRetries",2,s),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ya(s&&s.concurrentRequestLimit),this.Da=new Ff,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ua.prototype,t.la=8,t.G=1,t.connect=function(s,l,u,f){Me(0),this.W=s,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Ka(this,null,this.W),us(this)};function Cr(s){if(Fa(s),s.G==3){var l=s.U++,u=St(s.I);if(me(u,"SID",s.K),me(u,"RID",l),me(u,"TYPE","terminate"),yi(s,u),l=new jt(s,s.j,l),l.L=2,l.v=rs(St(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=za(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ns(l)}qa(s)}function cs(s){s.g&&(Rr(s),s.g.cancel(),s.g=null)}function Fa(s){cs(s),s.u&&(c.clearTimeout(s.u),s.u=null),hs(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function us(s){if(!_a(s.h)&&!s.s){s.s=!0;var l=s.Ga;ue||cn(),re||(ue(),re=!0),st.add(l,s),s.B=0}}function Bf(s,l){return wa(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ci(P(s.Ga,s,l),Wa(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const S=new jt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=m(A),w(A,this.S)):A=this.S),this.m!==null||this.O||(S.H=A,A=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Va(this,S,l),u=St(this.I),me(u,"RID",s),me(u,"CVER",22),this.D&&me(u,"X-HTTP-Session-Id",this.D),yi(this,u),A&&(this.O?l="headers="+encodeURIComponent(String(Oa(A)))+"&"+l:this.m&&Ar(u,this.m,A)),Sr(this.h,S),this.Ua&&me(u,"TYPE","init"),this.P?(me(u,"$req",l),me(u,"SID","null"),S.T=!0,Ir(S,u,null)):Ir(S,u,l),this.G=2}}else this.G==3&&(s?ja(this,s):this.i.length==0||_a(this.h)||ja(this))};function ja(s,l){var u;l?u=l.l:u=s.U++;const f=St(s.I);me(f,"SID",s.K),me(f,"RID",u),me(f,"AID",s.T),yi(s,f),s.m&&s.o&&Ar(f,s.m,s.o),u=new jt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Va(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Sr(s.h,u),Ir(u,f,l)}function yi(s,l){s.H&&se(s.H,function(u,f){me(l,f,u)}),s.l&&Ta({},function(u,f){me(l,f,u)})}function Va(s,l,u){u=Math.min(s.i.length,u);var f=s.l?P(s.l.Na,s.l,s):null;e:{var S=s.i;let A=-1;for(;;){const x=["count="+u];A==-1?0<u?(A=S[0].g,x.push("ofs="+A)):A=0:x.push("ofs="+A);let he=!0;for(let Se=0;Se<u;Se++){let oe=S[Se].g;const Re=S[Se].map;if(oe-=A,0>oe)A=Math.max(0,S[Se].g-100),he=!1;else try{jf(Re,x,"req"+oe+"_")}catch{f&&f(Re)}}if(he){f=x.join("&");break e}}}return s=s.i.splice(0,u),l.D=s,f}function $a(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;ue||cn(),re||(ue(),re=!0),st.add(l,s),s.v=0}}function Pr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ci(P(s.Fa,s),Wa(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,Ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ci(P(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),cs(this),Ha(this))};function Rr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Ha(s){s.g=new jt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=St(s.qa);me(l,"RID","rpc"),me(l,"SID",s.K),me(l,"AID",s.T),me(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&me(l,"TO",s.ja),me(l,"TYPE","xmlhttp"),yi(s,l),s.m&&s.o&&Ar(l,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=rs(St(l)),u.m=null,u.P=!0,ga(u,s)}t.Za=function(){this.C!=null&&(this.C=null,cs(this),Pr(this),Me(19))};function hs(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ba(s,l){var u=null;if(s.g==l){hs(s),Rr(s),s.g=null;var f=2}else if(Er(s.h,l))u=l.D,Ia(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var S=s.B;f=vr(),Q(f,new fa(f,u)),us(s)}else $a(s);else if(S=l.s,S==3||S==0&&0<l.X||!(f==1&&Bf(s,l)||f==2&&Pr(s)))switch(u&&0<u.length&&(l=s.h,l.i=l.i.concat(u)),S){case 1:pn(s,5);break;case 4:pn(s,10);break;case 3:pn(s,6);break;default:pn(s,2)}}}function Wa(s,l){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*l}function pn(s,l){if(s.j.info("Error code "+l),l==2){var u=P(s.fb,s),f=s.Xa;const S=!f;f=new dn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||is(f,"https"),rs(f),S?xf(f.toString(),u):Uf(f.toString(),u)}else Me(2);s.G=0,s.l&&s.l.sa(l),qa(s),Fa(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function qa(s){if(s.G=0,s.ka=[],s.l){const l=ba(s.h);(l.length!=0||s.i.length!=0)&&(J(s.ka,l),J(s.ka,s.i),s.h.i.length=0,$(s.i),s.i.length=0),s.l.ra()}}function Ka(s,l,u){var f=u instanceof dn?St(u):new dn(u);if(f.g!="")l&&(f.g=l+"."+f.g),ss(f,f.s);else{var S=c.location;f=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;var A=new dn(null);f&&is(A,f),l&&(A.g=l),S&&ss(A,S),u&&(A.l=u),f=A}return u=s.D,l=s.ya,u&&l&&me(f,u,l),me(f,"VER",s.la),yi(s,f),f}function za(s,l,u){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new ye(new os({eb:u})):new ye(s.pa),l.Ha(s.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ga(){}t=Ga.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qe(s,l){W.call(this),this.g=new Ua(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!ee(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!ee(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new xn(this)}U(Qe,W),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){Cr(this.g)},Qe.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Ee(s),s=u);l.i.push(new Af(l.Ya++,s)),l.G==3&&us(l)},Qe.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,Qe.aa.N.call(this)};function Ja(s){gr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const u in l){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}U(Ja,gr);function Ya(){mr.call(this),this.status=1}U(Ya,mr);function xn(s){this.g=s}U(xn,Ga),xn.prototype.ua=function(){Q(this.g,"a")},xn.prototype.ta=function(s){Q(this.g,new Ja(s))},xn.prototype.sa=function(s){Q(this.g,new Ya)},xn.prototype.ra=function(){Q(this.g,"b")},Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,Ef.COMPLETE="complete",_f.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",W.prototype.listen=W.prototype.K,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const fc="@firebase/firestore",dc="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new ar("@firebase/firestore");function at(t,...e){if(ti.logLevel<=ce.DEBUG){const n=e.map(Zo);ti.debug(`Firestore (${Qi}): ${t}`,...n)}}function qh(t,...e){if(ti.logLevel<=ce.ERROR){const n=e.map(Zo);ti.error(`Firestore (${Qi}): ${t}`,...n)}}function R_(t,...e){if(ti.logLevel<=ce.WARN){const n=e.map(Zo);ti.warn(`Firestore (${Qi}): ${t}`,...n)}}function Zo(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw qh(e),new Error(e)}function Oi(t,e){t||ea()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class He extends ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class O_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class D_{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oi(this.o===void 0);let i=this.i;const r=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new Di;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Di,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},c=h=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Di)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Oi(typeof i.accessToken=="string"),new Kh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oi(e===null||typeof e=="string"),new Ue(e)}}class N_{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class L_{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new N_(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M_{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,et(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Oi(this.o===void 0);const i=o=>{o.error!=null&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,at("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new pc(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oi(typeof n.token=="string"),this.R=n.token,new pc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function x_(t){return t.name==="IndexedDbTransactionError"}const bo="(default)";class qs{constructor(e,n){this.projectId=e,this.database=n||bo}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database===bo}isEqual(e){return e instanceof qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gc,ie;(ie=gc||(gc={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Wh([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=1048576;function Gr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,i=1e3,r=1.5,o=6e4){this.Ti=e,this.timerId=n,this.Go=i,this.zo=r,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),r=Math.max(0,n-i);r>0&&at("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,i,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new Di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,o){const a=Date.now()+i,c=new ta(e,n,a,r,o);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He($e.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var mc,vc;(vc=mc||(mc={}))._a="default",vc.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map;function $_(t,e,n,i){if(e===!0&&i===!0)throw new He($e.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function H_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ea()}function B_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new He($e.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=H_(t);throw new He($e.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="firestore.googleapis.com",_c=!0;class wc{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new He($e.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zh,this.ssl=_c}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:_c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=U_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<F_)throw new He($e.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new He($e.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new He($e.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new He($e.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gh{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new He($e.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new He($e.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new k_;switch(i.type){case"firstParty":return new L_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new He($e.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=yc.get(n);i&&(at("ComponentProvider","Removing Datastore"),yc.delete(n),i.terminate())}(this),Promise.resolve()}}function W_(t,e,n,i={}){var r;const o=(t=B_(t,Gh))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;o.host!==zh&&o.host!==c&&R_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:i});if(!nn(h,a)&&(t._setSettings(h),i.mockUserToken)){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ue.MOCK_USER;else{d=Wg(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new He($e.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ue(E)}t._authCredentials=new O_(new Kh(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="AsyncQueue";class bc{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new j_(this,"async_queue_retry"),this.Su=()=>{const i=Gr();i&&at(Ic,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const n=Gr();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Gr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Di;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!x_(e))throw e;at(Ic,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const r=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(i);throw qh("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.pu=!1,i))));return this.bu=n,n}enqueueAfterDelay(e,n,i){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const r=ta.createAndSchedule(this,e,n,i,o=>this.Fu(o));return this.fu.push(r),r}Du(){this.gu&&ea()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class q_ extends Gh{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new bc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bc(e),this._firestoreClient=void 0,await e}}}function K_(t,e){const n=typeof t=="object"?t:Bo(),i=typeof t=="string"?t:bo,r=On(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const o=Hg("firestore");o&&W_(r,...o)}return r}(function(e,n=!0){(function(r){Qi=r})(ni),bt(new ut("firestore",(i,{instanceIdentifier:r,options:o})=>{const a=i.getProvider("app").getImmediate(),c=new q_(new D_(i.getProvider("auth-internal")),new M_(a,i.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new He($e.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(d.options.projectId,p)}(a,r),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),nt(fc,dc,e),nt(fc,dc,"esm2017")})();const Jh="@firebase/installations",na="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=1e4,Xh=`w:${na}`,Qh="FIS_v2",z_="https://firebaseinstallations.googleapis.com/v1",G_=60*60*1e3,J_="installations",Y_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pn=new kn(J_,Y_,X_);function Zh(t){return t instanceof ft&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef({projectId:t}){return`${z_}/projects/${t}/installations`}function tf(t){return{token:t.token,requestStatus:2,expiresIn:Z_(t.expiresIn),creationTime:Date.now()}}async function nf(t,e){const i=(await e.json()).error;return Pn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function sf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Q_(t,{refreshToken:e}){const n=sf(t);return n.append("Authorization",ew(e)),n}async function rf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Z_(t){return Number(t.replace("s","000"))}function ew(t){return`${Qh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=ef(t),r=sf(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:n,authVersion:Qh,appId:t.appId,sdkVersion:Xh},c={method:"POST",headers:r,body:JSON.stringify(a)},h=await rf(()=>fetch(i,c));if(h.ok){const d=await h.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:tf(d.authToken)}}else throw await nf("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=/^[cdef][\w-]{21}$/,To="";function sw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rw(t);return iw.test(n)?n:To}catch{return To}}function rw(t){return nw(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function lf(t,e){const n=hr(t);cf(n,e),ow(n,e)}function cf(t,e){const n=af.get(t);if(n)for(const i of n)i(e)}function ow(t,e){const n=aw();n&&n.postMessage({key:t,fid:e}),lw()}let In=null;function aw(){return!In&&"BroadcastChannel"in self&&(In=new BroadcastChannel("[Firebase] FID Change"),In.onmessage=t=>{cf(t.data.key,t.data.fid)}),In}function lw(){af.size===0&&In&&(In.close(),In=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="firebase-installations-database",uw=1,Rn="firebase-installations-store";let Jr=null;function ia(){return Jr||(Jr=oh(cw,uw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rn)}}})),Jr}async function Ks(t,e){const n=hr(t),r=(await ia()).transaction(Rn,"readwrite"),o=r.objectStore(Rn),a=await o.get(n);return await o.put(e,n),await r.done,(!a||a.fid!==e.fid)&&lf(t,e.fid),e}async function uf(t){const e=hr(t),i=(await ia()).transaction(Rn,"readwrite");await i.objectStore(Rn).delete(e),await i.done}async function fr(t,e){const n=hr(t),r=(await ia()).transaction(Rn,"readwrite"),o=r.objectStore(Rn),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await r.done,c&&(!a||a.fid!==c.fid)&&lf(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t){let e;const n=await fr(t.appConfig,i=>{const r=hw(i),o=fw(t,r);return e=o.registrationPromise,o.installationEntry});return n.fid===To?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function hw(t){const e=t||{fid:sw(),registrationStatus:0};return hf(e)}function fw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Pn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=dw(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pw(t)}:{installationEntry:e}}async function dw(t,e){try{const n=await tw(t,e);return Ks(t.appConfig,n)}catch(n){throw Zh(n)&&n.customData.serverCode===409?await uf(t.appConfig):await Ks(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pw(t){let e=await Tc(t.appConfig);for(;e.registrationStatus===1;)await of(100),e=await Tc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await sa(t);return i||n}return e}function Tc(t){return fr(t,e=>{if(!e)throw Pn.create("installation-not-found");return hf(e)})}function hf(t){return gw(t)?{fid:t.fid,registrationStatus:0}:t}function gw(t){return t.registrationStatus===1&&t.registrationTime+Yh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw({appConfig:t,heartbeatServiceProvider:e},n){const i=vw(t,n),r=Q_(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Xh,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},h=await rf(()=>fetch(i,c));if(h.ok){const d=await h.json();return tf(d)}else throw await nf("Generate Auth Token",h)}function vw(t,{fid:e}){return`${ef(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t,e=!1){let n;const i=await fr(t.appConfig,o=>{if(!ff(o))throw Pn.create("not-registered");const a=o.authToken;if(!e&&ww(a))return o;if(a.requestStatus===1)return n=yw(t,e),o;{if(!navigator.onLine)throw Pn.create("app-offline");const c=bw(o);return n=_w(t,c),c}});return n?await n:i.authToken}async function yw(t,e){let n=await Ec(t.appConfig);for(;n.authToken.requestStatus===1;)await of(100),n=await Ec(t.appConfig);const i=n.authToken;return i.requestStatus===0?ra(t,e):i}function Ec(t){return fr(t,e=>{if(!ff(e))throw Pn.create("not-registered");const n=e.authToken;return Tw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _w(t,e){try{const n=await mw(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ks(t.appConfig,i),n}catch(n){if(Zh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uf(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ks(t.appConfig,i)}throw n}}function ff(t){return t!==void 0&&t.registrationStatus===2}function ww(t){return t.requestStatus===2&&!Iw(t)}function Iw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+G_}function bw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Tw(t){return t.requestStatus===1&&t.requestTime+Yh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t){const e=t,{installationEntry:n,registrationPromise:i}=await sa(e);return i?i.catch(console.error):ra(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(t,e=!1){const n=t;return await Aw(n),(await ra(n,e)).token}async function Aw(t){const{registrationPromise:e}=await sa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){if(!t||!t.options)throw Yr("App Configuration");if(!t.name)throw Yr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Yr(t){return Pn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="installations",Pw="installations-internal",Rw=t=>{const e=t.getProvider("app").getImmediate(),n=Cw(e),i=On(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},kw=t=>{const e=t.getProvider("app").getImmediate(),n=On(e,df).getImmediate();return{getId:()=>Ew(n),getToken:r=>Sw(n,r)}};function Ow(){bt(new ut(df,Rw,"PUBLIC")),bt(new ut(Pw,kw,"PRIVATE"))}Ow();nt(Jh,na);nt(Jh,na,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="analytics",Dw="firebase_id",Nw="origin",Lw=60*1e3,Mw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",oa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new ar("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Je=new kn("analytics","Analytics",xw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){if(!t.startsWith(oa)){const e=Je.create("invalid-gtag-resource",{gtagURL:t});return We.warn(e.message),""}return t}function pf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Fw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function jw(t,e){const n=Fw("firebase-js-sdk-policy",{createScriptURL:Uw}),i=document.createElement("script"),r=`${oa}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function Vw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $w(t,e,n,i,r,o){const a=i[r];try{if(a)await e[a];else{const h=(await pf(n)).find(d=>d.measurementId===r);h&&await e[h.appId]}}catch(c){We.error(c)}t("config",r,o)}async function Hw(t,e,n,i,r){try{let o=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await pf(n);for(const h of a){const d=c.find(E=>E.measurementId===h),p=d&&e[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,r||{})}catch(o){We.error(o)}}function Bw(t,e,n,i){async function r(o,...a){try{if(o==="event"){const[c,h]=a;await Hw(t,e,n,c,h)}else if(o==="config"){const[c,h]=a;await $w(t,e,n,i,c,h)}else if(o==="consent"){const[c,h]=a;t("consent",c,h)}else if(o==="get"){const[c,h,d]=a;t("get",c,h,d)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){We.error(c)}}return r}function Ww(t,e,n,i,r){let o=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=Bw(o,t,e,n),{gtagCore:o,wrappedGtag:window[r]}}function qw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(oa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=30,zw=1e3;class Gw{constructor(e={},n=zw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gf=new Gw;function Jw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Yw(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:Jw(i)},o=Mw.replace("{app-id}",n),a=await fetch(o,r);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((e=h.error)===null||e===void 0)&&e.message&&(c=h.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Xw(t,e=gf,n){const{appId:i,apiKey:r,measurementId:o}=t.options;if(!i)throw Je.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw Je.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new eI;return setTimeout(async()=>{c.abort()},Lw),mf({appId:i,apiKey:r,measurementId:o},a,c,e)}async function mf(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=gf){var o;const{appId:a,measurementId:c}=t;try{await Qw(i,e)}catch(h){if(c)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw h}try{const h=await Yw(t);return r.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Zw(d)){if(r.deleteThrottleMetadata(a),c)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ul(n,r.intervalMillis,Kw):Ul(n,r.intervalMillis),E={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return r.setThrottleMetadata(a,E),We.debug(`Calling attemptFetch again in ${p} millis`),mf(t,E,i,r)}}function Qw(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(o),i(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Zw(t){if(!(t instanceof ft)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class eI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tI(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const o=await e,a=Object.assign(Object.assign({},i),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(){if(nh())try{await ih()}catch(t){return We.warn(Je.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return We.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iI(t,e,n,i,r,o,a){var c;const h=Xw(t);h.then(N=>{n[N.measurementId]=N.appId,t.options.measurementId&&N.measurementId!==t.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>We.error(N)),e.push(h);const d=nI().then(N=>{if(N)return i.getId()}),[p,E]=await Promise.all([h,d]);qw(o)||jw(o,p.measurementId),r("js",new Date);const P=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return P[Nw]="firebase",P.update=!0,E!=null&&(P[Dw]=E),r("config",p.measurementId,P),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.app=e}_delete(){return delete Ni[this.app.options.appId],Promise.resolve()}}let Ni={},Sc=[];const Ac={};let Xr="dataLayer",rI="gtag",Cc,vf,Pc=!1;function oI(){const t=[];if(th()&&t.push("This is a browser extension environment."),Jg()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=Je.create("invalid-analytics-context",{errorInfo:e});We.warn(n.message)}}function aI(t,e,n){oI();const i=t.options.appId;if(!i)throw Je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(Ni[i]!=null)throw Je.create("already-exists",{id:i});if(!Pc){Vw(Xr);const{wrappedGtag:o,gtagCore:a}=Ww(Ni,Sc,Ac,Xr,rI);vf=o,Cc=a,Pc=!0}return Ni[i]=iI(t,Sc,Ac,e,Cc,Xr,n),new sI(t)}function lI(t=Bo()){t=Ut(t);const e=On(t,zs);return e.isInitialized()?e.getImmediate():cI(t)}function cI(t,e={}){const n=On(t,zs);if(n.isInitialized()){const r=n.getImmediate();if(nn(e,n.getOptions()))return r;throw Je.create("already-initialized")}return n.initialize({options:e})}function uI(t,e,n,i){t=Ut(t),tI(vf,Ni[t.app.options.appId],e,n,i).catch(r=>We.error(r))}const Rc="@firebase/analytics",kc="0.10.12";function hI(){bt(new ut(zs,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return aI(i,r,n)},"PUBLIC")),bt(new ut("analytics-internal",t,"PRIVATE")),nt(Rc,kc),nt(Rc,kc,"esm2017");function t(e){try{const n=e.getProvider(zs).getImmediate();return{logEvent:(i,r,o)=>uI(n,i,r,o)}}catch(n){throw Je.create("interop-component-reg-failed",{reason:n})}}}hI();const fI={apiKey:"AIzaSyAClt2QU-RFLXFurenha-uhbxAI9HsAp3g",authDomain:"task-manager-25ae4.firebaseapp.com",databaseURL:"https://task-manager-25ae4-default-rtdb.firebaseio.com",projectId:"task-manager-25ae4",storageBucket:"task-manager-25ae4.firebasestorage.app",messagingSenderId:"702427926685",appId:"1:702427926685:web:b468252ca7ead572020474",measurementId:"G-3KWHV7YS86"},aa=ah(fI);lI(aa);const yf=C_(aa);K_(aa);const dI={__name:"Login",setup(t){const e=Qt(""),n=Qt(""),i=async()=>{try{await py(yf,e.value,n.value),console.log("Logged in!")}catch(r){alert(r.message)}};return(r,o)=>(Zt(),Tn("div",null,[Qn(G("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),placeholder:"Email",type:"email"},null,512),[[Vi,e.value]]),Qn(G("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),placeholder:"Password",type:"password"},null,512),[[Vi,n.value]]),G("button",{onClick:i},"Login")]))}},pI={__name:"Signup",setup(t){const e=Qt(""),n=Qt("");Qt("");const i=async()=>{try{await dy(yf,e.value,n.value),console.log("Signed up!")}catch(r){alert(r.message)}};return(r,o)=>(Zt(),Tn(je,null,[o[2]||(o[2]=G("h1",null,"Signup",-1)),G("div",null,[Qn(G("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),placeholder:"Email",type:"email"},null,512),[[Vi,e.value]]),Qn(G("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),placeholder:"Password",type:"password"},null,512),[[Vi,n.value]]),G("button",{onClick:i},"Sign Up")])],64))}},gI={class:"filters"},mI=["onUpdate:modelValue"],vI=["onClick"],yI={__name:"TaskManager",setup(t){const e=Qt([]),n=Qt(""),i=Qt("all"),r=$u(()=>{switch(i.value){case"done":return e.value.filter(h=>h.done);case"undone":return e.value.filter(h=>!h.done);default:return e.value}});function o(){n.value.trim()&&(e.value.push({id:Date.now(),text:n.value,done:!1}),n.value="")}function a(h){e.value=e.value.filter(d=>d.id!==h)}Fo(()=>{const h=localStorage.getItem("tasks");h&&(e.value=JSON.parse(h))}),Is(e,h=>{localStorage.setItem("tasks",JSON.stringify(h))},{deep:!0});function c(){confirm("Clear all tasks?")&&(e.value=[],alert("All tasks deleted!"))}return(h,d)=>(Zt(),Tn("div",gI,[d[4]||(d[4]=G("h1",null,"Task Manager",-1)),Qn(G("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>n.value=p),onKeyup:Sg(o,["enter"]),placeholder:"Type and press Enter"},null,544),[[Vi,n.value]]),G("ul",null,[Ge(mg,{name:"task-anim",tag:"ul"},{default:au(()=>[(Zt(!0),Tn(je,null,Qd(r.value,p=>(Zt(),Tn("li",{key:p.id},[Qn(G("input",{type:"checkbox","onUpdate:modelValue":E=>p.done=E},null,8,mI),[[bg,p.done]]),G("span",{class:Zs([p.done?"done":[],"task-text"])},Fc(p.text),3),G("button",{onClick:E=>a(p.id),class:"trash-btn"},"🗑️",8,vI)]))),128))]),_:1})]),G("button",{onClick:d[1]||(d[1]=p=>i.value="all"),class:"all-btn"},"All"),G("button",{onClick:d[2]||(d[2]=p=>i.value="done"),class:"done-btn"},"Done"),G("button",{onClick:d[3]||(d[3]=p=>i.value="undone"),class:"undone-btn"},"Undone"),G("button",{onClick:c,class:"clear-btn"},"Clear All")]))}},_I={"/":Ng,"/login":dI,"/signup":pI,"/taskmanager":yI},wI={data(){return{currentPath:window.location.hash}},computed:{currentView(){return _I[this.currentPath.slice(1)||"/"]||NotFound}},mounted(){window.addEventListener("hashchange",()=>{this.currentPath=window.location.hash})}},II={id:"app"},bI={class:"wrapper"},TI={class:"main"};function EI(t,e,n,i,r,o){const a=nl("Login"),c=nl("TaskManager");return Zt(),Tn(je,null,[G("div",II,[Ge(a),Ge(c)]),G("div",bI,[e[0]||(e[0]=G("header",{class:"header"},[G("nav",{class:"navbar navbar-expand-lg bg-body-tertiary"},[G("div",{class:"container-fluid"},[G("a",{class:"navbar-brand",href:"#"},"Nicolas C. Garzon"),G("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[G("span",{class:"navbar-toggler-icon"})]),G("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},[G("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[G("li",{class:"nav-item"},[G("a",{class:"nav-link active","aria-current":"page",href:"#/"},"Home")]),G("li",{class:"nav-item"},[G("a",{class:"nav-link active",href:"#/login"},"Login")]),G("li",{class:"nav-item"},[G("a",{class:"nav-link active","aria-disabled":"true",href:"#/signup"},"Signup")]),G("li",{class:"nav-item"},[G("a",{class:"nav-link active","aria-disabled":"true",href:"#/taskmanager"},"Projects")])]),G("form",{class:"d-flex",role:"search"},[G("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),G("button",{class:"btn btn-outline-dark",type:"submit"},"Search")])])])])],-1)),G("article",TI,[(Zt(),Rp(Xd(o.currentView)))]),e[1]||(e[1]=Np('<aside class="aside aside-1">Aside 1</aside><aside class="aside aside-2">Aside 2</aside><footer class="footer"><p><a href="#/">Home</a></p><p><a href="#/login">Login</a></p><p><a href="#/signup">Signup</a></p><p><a href="#/taskmanager">Projects</a></p> Website created by Nicolas C. Garzon </footer>',3))])],64)}const SI=Gu(wI,[["render",EI]]);Pg(SI).mount("#app");
