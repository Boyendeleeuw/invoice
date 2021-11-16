(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("f36a"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return s(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):o(i(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===u||i(e.prototype))?e=void 0:s(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d03":function(t,e,n){var r=n("e330"),i=n("6eeb"),o=Date.prototype,s="Invalid Date",a="toString",c=r(o[a]),u=r(o.getTime);String(new Date(NaN))!=s&&i(o,a,(function(){var t=u(this);return t===t?c(this):s}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},1148:function(t,e,n){"use strict";var r=n("da84"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r.RangeError;t.exports=function(t){var e=o(s(this)),n="",r=i(t);if(r<0||r==1/0)throw a("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw o("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d1c":function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("37e8");r({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperties:o})},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2266:function(t,e,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),f=n("35a1"),d=n("2a62"),p=r.TypeError,v=function(t,e){this.stopped=t,this.result=e},g=v.prototype;t.exports=function(t,e,n){var r,m,b,y,_,w,O,E=n&&n.that,I=!(!n||!n.AS_ENTRIES),T=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),k=i(e,E),j=function(t){return r&&d(r,"normal",t),new v(!0,t)},C=function(t){return I?(s(t),S?k(t[0],t[1],j):k(t[0],t[1])):S?k(t,j):k(t)};if(T)r=t;else{if(m=f(t),!m)throw p(a(t)+" is not iterable");if(c(m)){for(b=0,y=u(t);y>b;b++)if(_=C(t[b]),_&&l(g,_))return _;return new v(!1)}r=h(t,m)}w=r.next;while(!(O=o(w,r)).done){try{_=C(O.value)}catch(A){d(r,"throw",A)}if("object"==typeof _&&_&&l(g,_))return _}return new v(!1)}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,v=t.target,g=t.global,m=t.stat;if(l=g?r:m?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:v+(m?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var i="firebase-exp",o="9.0.0-beta.5";
/**
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
 */
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),f=n("d039"),d=n("1be4"),p=n("f36a"),v=n("cc12"),g=n("1cdc"),m=n("605d"),b=a.setImmediate,y=a.clearImmediate,_=a.process,w=a.Dispatch,O=a.Function,E=a.MessageChannel,I=a.String,T=0,S={},k="onreadystatechange";try{r=a.location}catch(x){}var j=function(t){if(h(S,t)){var e=S[t];delete S[t],e()}},C=function(t){return function(){j(t)}},A=function(t){j(t.data)},R=function(t){a.postMessage(I(t),r.protocol+"//"+r.host)};b&&y||(b=function(t){var e=p(arguments,1);return S[++T]=function(){c(l(t)?t:O(t),void 0,e)},i(T),T},y=function(t){delete S[t]},m?i=function(t){_.nextTick(C(t))}:w&&w.now?i=function(t){w.now(C(t))}:E&&!g?(o=new E,s=o.port2,o.port1.onmessage=A,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(R)?(i=R,a.addEventListener("message",A,!1)):i=k in v("script")?function(t){d.appendChild(v("script"))[k]=function(){d.removeChild(this),j(t)}}:function(t){setTimeout(C(t),0)}),t.exports={set:b,clear:y}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("fc6a"),a=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),c=a(e),u=c.length,l=0;while(u>l)i.f(t,n=c[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw s("Can't set "+o(t)+" as a prototype")}},"3f4e":function(t,e,n){"use strict";n.d(e,"setupDevtoolsPlugin",(function(){return s}));var r=n("abc5"),i=n("b774"),o=n("f30a");function s(t,e){const n=Object(r["b"])(),s=Object(r["a"])(),a=r["c"]&&t.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new o["a"](t,s):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:e,proxy:r}),r&&e(r.proxiedTarget)}else s.emit(i["b"],t,e)}},"3f8c":function(t,e){t.exports={}},"408a":function(t,e,n){var r=n("e330");t.exports=r(1..valueOf)},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!s(r=i(n,t)))return r;if(o(n=t.valueOf)&&!s(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!s(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("4160"),n("159b"),n("dbb4"),n("1d1c"),n("7a82");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return V})),n.d(e,"c",(function(){return F})),n.d(e,"d",(function(){return B})),n.d(e,"e",(function(){return q})),n.d(e,"f",(function(){return G})),n.d(e,"g",(function(){return K}));var r=n("ffa6"),i=n("abfd"),o=n("a8e9");
/**
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
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app-exp",u="0.0.900-exp.57f19127c",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics-exp",p="@firebase/auth-exp",v="@firebase/auth-compat",g="@firebase/database",m="@firebase/database-compat",b="@firebase/functions-exp",y="@firebase/functions-compat",_="@firebase/installations-exp",w="@firebase/installations-compat",O="@firebase/messaging-exp",E="@firebase/messaging-compat",I="@firebase/performance-exp",T="@firebase/performance-compat",S="@firebase/remote-config-exp",k="@firebase/remote-config-compat",j="@firebase/storage",C="@firebase/storage-compat",A="@firebase/firestore",R="@firebase/firestore-compat",x="firebase-exp",P="9.0.0-beta.5",N="[DEFAULT]",L={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[p]:"fire-auth",[v]:"fire-auth-compat",[g]:"fire-rtdb",[m]:"fire-rtdb-compat",[b]:"fire-fn",[y]:"fire-fn-compat",[_]:"fire-iid",[w]:"fire-iid-compat",[O]:"fire-fcm",[E]:"fire-fcm-compat",[I]:"fire-perf",[T]:"fire-perf-compat",[S]:"fire-rc",[k]:"fire-rc-compat",[j]:"fire-gcs",[C]:"fire-gcs-compat",[A]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[x]:"fire-js-all"},D=new Map,M=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function F(t){const e=t.name;if(M.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;M.set(e,t);for(const n of D.values())U(n,t);return!0}function V(t,e){return t.container.getProvider(e)}function B(t,e,n=N){V(t,e).clearInstance(n)}
/**
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
 */
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new o["b"]("app","Firebase",$);
/**
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
 */
class z{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app-exp",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
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
 */const W=P;function G(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:N,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});if(D.has(i))throw H.create("duplicate-app",{appName:i});const o=new r["b"](i);for(const r of M.values())o.addComponent(r);const s=new z(t,n,o);return D.set(i,s),s}function q(t=N){const e=D.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function K(t,e,n){var i;let o=null!==(i=L[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}F(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
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
 */
function X(t){F(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),K(c,u,t),K("fire-js","")}X()},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),o=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),f=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!f||s((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||a(f({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,s=1,f=c.f,d=u.f;while(i>s){var v,g=h(arguments[s++]),m=f?p(a(g),f(g)):a(g),b=m.length,y=0;while(b>y)v=m[y++],r&&!o(d,g,v)||(n[v]=g[v])}return n}:f},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(u),v=function(t){if(!o(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},g=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!d(f,c(t))};t.exports=!h||i((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?g:v},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),f=n("c6cd"),d=n("f772"),p=n("d012"),v="Object already initialized",g=a.TypeError,m=a.WeakMap,b=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var _=f.state||(f.state=new m),w=c(_.get),O=c(_.has),E=c(_.set);r=function(t,e){if(O(_,t))throw new g(v);return e.facade=t,E(_,t,e),e},i=function(t){return w(_,t)||{}},o=function(t){return O(_,t)}}else{var I=d("state");p[I]=!0,r=function(t,e){if(h(t,I))throw new g(v);return e.facade=t,l(t,I,e),e},i=function(t){return h(t,I)?t[I]:{}},o=function(t){return h(t,I)}}t.exports={set:r,get:i,has:o,enforce:b,getterFor:y}},"6a7c":function(t,e,n){"use strict";n.d(e,"a",(function(){return tr})),n.d(e,"b",(function(){return oe})),n.d(e,"c",(function(){return ie})),n.d(e,"d",(function(){return se}));var r=n("5606"),i=n("a8e9"),o=n("abfd");function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var a=n("ffa6");
/**
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
 */function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=new i["b"]("auth","Firebase",c()),l=new o["b"]("@firebase/auth-exp");function h(t,...e){l.logLevel<=o["a"].ERROR&&l.error(`Auth (${r["a"]}): ${t}`,...e)}
/**
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
 */function f(t,...e){throw p(t,...e)}function d(t,...e){return p(t,...e)}function p(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function v(t,e,...n){if(!t)throw p(e,...n)}function g(t){const e="INTERNAL ASSERTION FAILED: "+t;throw h(e),new Error(e)}function m(t,e){t||g(e)}
/**
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
 */const b=new Map;function y(t){m(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(m(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
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
 */function _(t,e){const n=Object(r["b"])(t,"auth-exp");if(n.isInitialized()){const t=n.getImmediate();f(t,"already-initialized")}const i=n.initialize({options:e});return i}function w(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(y);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
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
 */function O(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||Object(i["j"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
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
 */class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,m(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(i["n"])()||Object(i["o"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function j(t,e){m(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class C{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded"},R=new k(3e4,6e4);
/**
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
 */function x(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,o={}){return N(t,o,()=>{let o={},s={};r&&("GET"===e?s=r:o={body:JSON.stringify(r)});const a=Object(i["q"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=new(C.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),C.fetch()(D(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function N(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},A),e);try{const e=new M(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw U(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const e=i.ok?o.errorMessage:o.error.message,n=e.split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");f(t,s)}}catch(o){if(o instanceof i["c"])throw o;f(t,"network-request-failed")}}async function L(t,e,n,r,i={}){const o=await P(t,e,n,r,i);return"mfaPendingCredential"in o&&f(t,"multi-factor-auth-required",{serverResponse:o}),o}function D(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?j(t.config,i):`${t.config.apiScheme}://${i}`}class M{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(d(this.auth,"timeout")),R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=d(t,e,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function F(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
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
 */function B(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
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
 */async function $(t,e=!1){const n=Object(i["h"])(t),r=await n.getIdToken(e),o=z(r);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:B(H(o.auth_time)),issuedAtTime:B(H(o.iat)),expirationTime:B(H(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function z(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return h("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(i["d"])(n);return t?JSON.parse(t):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",o),null}}function W(t){const e=z(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
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
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i["c"]&&q(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */class K{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function J(t){var e;const n=t.auth,r=await t.getIdToken(),i=await G(t,V(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Z(o.providerUserInfo):[],a=Q(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Y(t){const e=Object(i["h"])(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Q(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function Z(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
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
 */async function tt(t,e){const n=await N(t,{},()=>{const n=Object(i["q"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,s=D(t,r,"/v1/token","key="+o);return C.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await tt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new et;return n&&(v("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
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
 */function nt(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return $(this,t)}reload(){return Y(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,F(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,b=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:E}=e;v(y&&E,t,"internal-error");const I=et.fromJSON(this.name,E);v("string"===typeof y,t,"internal-error"),nt(l,t.name),nt(h,t.name),v("boolean"===typeof _,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),nt(f,t.name),nt(d,t.name),nt(p,t.name),nt(g,t.name),nt(m,t.name),nt(b,t.name);const T=new rt({uid:y,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:b});return O&&Array.isArray(O)&&(T.providerData=O.map(t=>Object.assign({},t))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new et;r.updateFromServerResponse(e);const i=new rt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
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
 */class it{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}it.type="NONE";const ot=it;
/**
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
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class at{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=st(this.userKey,r.apiKey,i),this.fullPersistenceKey=st("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new at(y(ot),t,n);let r=y(ot);for(const a of e)if(await a._isAvailable()){r=a;break}let i=null;const o=st(n,t.config.apiKey,t.name);for(const a of e)try{const e=await a._get(o);if(e){const n=rt._fromJSON(t,e);a!==r&&(i=n);break}}catch(s){}return i&&await r._set(o,i.toJSON()),await Promise.all(e.map(async t=>{if(t!==r)try{await t._remove(o)}catch(s){}})),new at(r,t,n)}}
/**
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
 */function ct(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pt(e))return"Blackberry";if(vt(e))return"Webos";if(lt(e))return"Safari";if((e.includes("chrome/")||ht(e))&&!e.includes("edge/"))return"Chrome";if(dt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ut(t=Object(i["i"])()){return/firefox\//i.test(t)}function lt(t=Object(i["i"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ht(t=Object(i["i"])()){return/crios\//i.test(t)}function ft(t=Object(i["i"])()){return/iemobile/i.test(t)}function dt(t=Object(i["i"])()){return/android/i.test(t)}function pt(t=Object(i["i"])()){return/blackberry/i.test(t)}function vt(t=Object(i["i"])()){return/webos/i.test(t)}function gt(t=Object(i["i"])()){return/iphone|ipad|ipod/i.test(t)}function mt(t=Object(i["i"])()){var e;return gt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return Object(i["m"])()&&10===document.documentMode}function yt(t=Object(i["i"])()){return gt(t)||dt(t)||vt(t)||pt(t)||/windows phone/i.test(t)||ft(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
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
 */function wt(t,e=[]){let n;switch(t){case"Browser":n=ct(Object(i["i"])());break;case"Worker":n=`${ct(Object(i["i"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["a"]}/${o}`}
/**
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
 */class Ot{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new It(this),this.idTokenSubscription=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=y(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await at.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise.then(()=>{if(this.redirectInitializerError)throw this.redirectInitializerError})}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){this.redirectInitializerError=n,await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(i["h"])(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(y(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&y(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[y(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Et(t){return Object(i["h"])(t)}class It{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(i["f"])(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class Tt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return g("not implemented")}_getIdTokenResponse(t){return g("not implemented")}_linkToIdToken(t,e){return g("not implemented")}_getReauthenticationResolver(t){return g("not implemented")}}
/**
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
 */async function St(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
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
 */
async function kt(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}
/**
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
 */
async function jt(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function Ct(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
/**
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
 */class At extends Tt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new At(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new At(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return kt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return St(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ct(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function Rt(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
/**
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
 */const xt="http://localhost";class Pt extends Tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Pt(n,r);return Object.assign(o,i),o}_getIdTokenResponse(t){const e=this.buildRequest();return Rt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Rt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Rt(t,e)}buildRequest(){const t={requestUri:xt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(i["q"])(e)}return t}}
/**
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
 */async function Nt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function Lt(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function Dt(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const Mt={["USER_NOT_FOUND"]:"user-not-found"};async function Ut(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,n),Mt)}
/**
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
 */class Ft extends Tt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ft({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ft({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Lt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Dt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Ut(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Ft({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function Vt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bt(t){const e=Object(i["r"])(Object(i["g"])(t))["link"],n=e?Object(i["r"])(Object(i["g"])(e))["deep_link_id"]:null,r=Object(i["r"])(Object(i["g"])(t))["deep_link_id"],o=r?Object(i["r"])(Object(i["g"])(r))["link"]:null;return o||r||n||e||t}class $t{constructor(t){var e,n,r,o,s,a;const c=Object(i["r"])(Object(i["g"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Vt(null!==(r=c["mode"])&&void 0!==r?r:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Bt(t);try{return new $t(e)}catch(n){return null}}}
/**
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
 */
class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(t,e){return At._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=$t.parseLink(e);return v(n,"argument-error"),At._fromEmailAndCode(t,n.code,n.tenantId)}}Ht.PROVIDER_ID="password",Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class zt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Wt extends zt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Gt extends Wt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch(e){return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gt.PROVIDER_ID="facebook.com";
/**
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
 */
class qt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return qt.credential(e,n)}catch(r){return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com",qt.PROVIDER_ID="google.com";
/**
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
 */
class Kt extends Wt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com",Kt.PROVIDER_ID="github.com";
/**
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
 */
class Xt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com",Xt.PROVIDER_ID="twitter.com";
/**
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
 */
class Jt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await rt._fromIdTokenResponse(t,n,r),o=Yt(n),s=new Jt({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Yt(n);return new Jt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Yt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */
/**
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
 */
class Qt extends i["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Qt.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new Qt(t,e,n,r)}}function Zt(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Qt._fromErrorAndOperation(t,n,e,r);throw n})}
/**
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
 */async function te(t,e,n=!1){const r=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jt._forOperation(t,"link",r)}
/**
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
 */
async function ee(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await G(t,Zt(r,i,e,t),n);v(o.idToken,r,"internal-error");const s=z(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(t.uid===a,r,"user-mismatch"),Jt._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
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
 */async function ne(t,e,n=!1){const r="signIn",i=await Zt(t,r,e),o=await Jt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function re(t,e){return ne(Et(t),e)}function ie(t,e,n){return re(Object(i["h"])(t),Ht.credential(e,n))}
/**
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
 */function oe(t,e,n,r){return Object(i["h"])(t).onAuthStateChanged(e,n,r)}function se(t){return Object(i["h"])(t).signOut()}
/**
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
 */
function ae(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}new WeakMap;var ce="@firebase/auth-exp",ue="0.0.900-exp.57f19127c";
/**
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
 */
class le{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function he(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fe(t){Object(r["c"])(new a["a"]("auth-exp",(e,{options:n})=>{const r=e.getProvider("app-exp").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wt(t)},s=new Ot(e,r);return w(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(r["c"])(new a["a"]("auth-internal",t=>{const e=Et(t.getProvider("auth-exp").getImmediate());return(t=>new le(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["g"])(ce,ue,he(t))}const de="__sak";
/**
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
 */class pe{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(de,"1"),this.storage.removeItem(de),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
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
 */function ve(){const t=Object(i["i"])();return lt(t)||gt(t)}const ge=1e3,me=10;class be extends pe{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ve()&&_t(),this.fallbackToPolling=yt(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,me):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},ge)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}be.type="LOCAL";const ye=be;
/**
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
 */function _e(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
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
 */class we{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new we(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await _e(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Oe(t="",e=20){return`${t}${Math.floor(Math.random()*Math.pow(10,e))}`}we.receivers=[];class Ee{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Oe();r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
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
 */function Ie(){return window}function Te(t){Ie().location.href=t}
/**
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
 */function Se(){return"undefined"!==typeof Ie()["WorkerGlobalScope"]&&"function"===typeof Ie()["importScripts"]}async function ke(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function je(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ce(){return Se()?self:null}
/**
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
 */const Ae="firebaseLocalStorageDb",Re=1,xe="firebaseLocalStorage",Pe="fbase_key";class Ne{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Le(t,e){return t.transaction([xe],e?"readwrite":"readonly").objectStore(xe)}function De(){const t=indexedDB.deleteDatabase(Ae);return new Ne(t).toPromise()}function Me(){const t=indexedDB.open(Ae,Re);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(xe,{keyPath:Pe})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;if(!n.objectStoreNames.contains(xe))return await De(),Me();e(n)})})}async function Ue(t,e,n){const r=Le(t,!0).put({[Pe]:e,value:n});return new Ne(r).toPromise()}async function Fe(t,e){const n=Le(t,!1).get(e),r=await new Ne(n).toPromise();return void 0===r?null:r.value}function Ve(t,e){const n=Le(t,!0).delete(e);return new Ne(n).toPromise()}const Be=800,$e=3;class He{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Me()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>$e)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Se()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=we._getInstance(Ce()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await ke(),!this.activeServiceWorker)return;this.sender=new Ee(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&je()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Me();return await Ue(t,de,"1"),await Ve(t,de),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ue(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Fe(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ve(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Le(t,!1).getAll();return new Ne(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Be)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}He.type="LOCAL";const ze=He,We=6e5;
/**
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
 */class Ge{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Xe(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ke(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(d(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=We&&this.cachedEventUids.clear(),this.cachedEventUids.has(qe(t))}saveEventToCache(t){this.cachedEventUids.add(qe(t)),this.lastProcessedEventTime=Date.now()}}function qe(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function Ke({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Xe(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ke(t);default:return!1}}
/**
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
 */function Je(t){return`${t||""}${Math.floor(1e9*Math.random())}`}
/**
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
 */async function Ye(t){return P(t,"GET","/v1/projects",{})}
/**
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
 */const Qe=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ze=/^https?/;async function tn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ye(t);for(const r of e)try{if(en(r))return}catch(n){}f(t,"unauthorized-domain")}function en(t){const e=O(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ze.test(n))return!1;if(Qe.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
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
 */function nn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function rn(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=n,r.type="text/javascript",r.charset="UTF-8",nn().appendChild(r)})}function on(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
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
 */const sn=new k(3e4,6e4);function an(){const t=Ie().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function cn(t){return new Promise((e,n)=>{var r,i,o;function s(){an(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{an(),n(d(t,"network-request-failed"))},timeout:sn.get()})}if(null===(i=null===(r=Ie().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Ie().gapi)||void 0===o?void 0:o.load)){const e=on("iframefcb");return Ie()[e]=()=>{gapi.load?s():n(d(t,"network-request-failed"))},rn("https://apis.google.com/js/api.js?onload="+e)}s()}}).catch(t=>{throw un=null,t})}let un=null;function ln(t){return un=un||cn(t),un}
/**
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
 */const hn=new k(5e3,15e3),fn="__/auth/iframe",dn="emulator/auth/iframe",pn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},vn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?j(e,dn):`https://${t.config.authDomain}/${fn}`,o={apiKey:e.apiKey,appName:t.name,v:r["a"]},s=vn.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(i["q"])(o).slice(1)}`}async function mn(t){const e=await ln(t),n=Ie().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:gn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=d(t,"network-request-failed"),o=Ie().setTimeout(()=>{r(i)},hn.get());function s(){Ie().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
/**
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
 */class bn extends pe{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}bn.type="SESSION";const yn=bn,_n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wn=500,On=600,En="_blank",In="http://localhost";
/**
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
 */class Tn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Sn(t,e,n,r=wn,o=On){const s=Math.min((window.screen.availHeight-o)/2,0).toString(),a=Math.min((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},_n),{width:r.toString(),height:o.toString(),top:s,left:a}),l=Object(i["i"])().toLowerCase();n&&(c=ht(l)?En:n),ut(l)&&(e=e||In,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(mt(l)&&"_self"!==c)return kn(e||"",c),new Tn(null);const f=window.open(e||"",c,h);v(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Tn(f)}function kn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */function jn(t,e){return e?y(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */class Cn extends Tt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Rt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Rt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function An(t){return ne(t.auth,new Cn(t),t.bypassAuthState)}function Rn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ee(n,new Cn(t),t.bypassAuthState)}async function xn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),te(n,new Cn(t),t.bypassAuthState)}
/**
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
 */class Pn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return An;case"linkViaPopup":case"linkViaRedirect":return xn;case"reauthViaPopup":case"reauthViaRedirect":return Rn;default:f(this.auth,"internal-error")}}resolve(t){m(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){m(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Nn="pendingRedirect",Ln=new Map;class Dn extends Pn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Ln.get(this.auth._key());if(!t){try{const e=await Mn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Ln.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Mn(t,e){const n=Fn(e),r="true"===await Un(t)._get(n);return await Un(t)._remove(n),r}function Un(t){return y(t._redirectPersistence)}function Fn(t){return st(Nn,t.config.apiKey,t.name)}
/**
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
 */async function Vn(t,e,n=!1){const r=Et(t),i=jn(r,e),o=new Dn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
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
 */
const Bn="__/auth/handler",$n="emulator/auth/handler";function Hn(t,e,n,o,s,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:r["a"],eventId:s};if(e instanceof zt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(i["l"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Wt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${zn(t)}?${Object(i["q"])(u).slice(1)}`}function zn({config:t}){return t.emulator?j(t,$n):`https://${t.authDomain}/${Bn}`}
/**
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
 */const Wn="webStorageSupport";class Gn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yn,this._completeRedirectFn=Vn}async _openPopup(t,e,n,r){var i;m(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Hn(t,e,n,O(),r);return Sn(t,o,Je())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Te(Hn(t,e,n,O(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(m(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await mn(t),n=new Ge(t);return e.register("authEvent",e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Wn,{type:Wn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Wn];void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=tn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return yt()||lt()||gt()}}const qn=Gn;
/**
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
 */
/**
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
 */
function Kn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}
/**
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
 */
on("rcb"),new k(3e4,6e4);
/**
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
 */
const Xn="recaptcha";async function Jn(t,e,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,t,"argument-error"),v(n.type===Xn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){v("enroll"===e.type,t,"internal-error");const n=await ae(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,t,"missing-multi-factor-info");const s=await Kn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Nt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
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
 */
class Yn{constructor(t){this.providerId=Yn.PROVIDER_ID,this.auth=Et(t)}verifyPhoneNumber(t,e){return Jn(this.auth,t,Object(i["h"])(e))}static credential(t,e){return Ft._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Yn.credentialFromTaggedObject(e)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ft._fromTokenResponse(e,n):null}}Yn.PROVIDER_ID="phone",Yn.PHONE_SIGN_IN_METHOD="phone";
/**
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
 */
const Qn=new k(2e3,1e4);class Zn extends Pn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){m(1===this.filter.length,"Popup operations only handle one event");const t=Je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(d(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,Qn.get())};t()}}Zn.currentPopupAction=null;function tr(t=Object(r["e"])()){const e=Object(r["b"])(t,"auth-exp");return e.isInitialized()?e.getImmediate():_(t,{popupRedirectResolver:qn,persistence:[ze,ye]})}fe("Browser")},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return z}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>i?Symbol(t):"_vr_"+t,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const v=()=>{};const g=/\/$/,m=t=>t.replace(g,"");function b(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),o=e.slice(a+1,c>-1?c:e.length),i=t(o)),c>-1&&(r=r||e.slice(0,c),s=e.slice(c,e.length)),r=S(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function y(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function w(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(e.matched[r],n.matched[i])&&E(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function O(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function E(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!I(t[n],e[n]))return!1;return!0}function I(t,e){return Array.isArray(t)?T(t,e):Array.isArray(e)?T(e,t):t===e}function T(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function S(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,j;(function(t){t["pop"]="pop",t["push"]="push"})(k||(k={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(j||(j={}));function C(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),m(t)}const A=/^[^#]+#/;function R(t,e){return t.replace(A,"#")+e}function x(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=x(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function L(t,e){const n=history.state?history.state.position-e:-1;return n+t}const D=new Map;function M(t,e){D.set(t,e)}function U(t){const e=D.get(t);return D.delete(t),e}let F=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,t);return s+r+i}function B(t,e,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:k.pop,direction:l?l>0?j.forward:j.back:j.unknown})})};function c(){s=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:P()}),"")}function h(){for(const t of o)t();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?P():null}}function H(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:F()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=d({},e.state,$(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function a(t,n){const s=d({},i.value,e.state,{forward:t,scroll:P()});o(s.current,s,!0);const a=d({},$(r.value,t,null),{position:s.position+1},n);o(t,a,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function z(t){t=C(t);const e=H(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:R.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function W(t){return"string"===typeof t||t&&"object"===typeof t}function G(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var X;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(X||(X={}));function J(t,e){return d(new Error,{type:t,[K]:!0},e)}function Y(t,e){return t instanceof Error&&K in t&&(null==e||!!(t.type&e))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Z,e),r=[];let i=n.start?"^":"";const o=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;o.push({name:t,repeatable:n,optional:a});const h=c||Q;if(h!==Q){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:o,repeatable:s,optional:a}=t,c=o in e?e[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},ot=/[a-zA-Z0-9_]/;function st(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ot.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function at(t,e,n){const r=et(st(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!ft(h)&&s(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)o(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{s(f)}:v}function s(t){if(G(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,o,s,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw J(1,{location:t});s=i.record.name,a=d(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),o=i.stringify(a)}else if("path"in t)o=t.path,i=n.find(t=>t.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw J(1,{location:t,currentLocation:e});s=i.record.name,a=d({},e.params,t.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>o(t)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const vt=/#/g,gt=/&/g,mt=/\//g,bt=/=/g,yt=/\?/g,_t=/\+/g,wt=/%5B/g,Ot=/%5D/g,Et=/%5E/g,It=/%60/g,Tt=/%7B/g,St=/%7C/g,kt=/%7D/g,jt=/%20/g;function Ct(t){return encodeURI(""+t).replace(St,"|").replace(wt,"[").replace(Ot,"]")}function At(t){return Ct(t).replace(Tt,"{").replace(kt,"}").replace(Et,"^")}function Rt(t){return Ct(t).replace(_t,"%2B").replace(jt,"+").replace(vt,"%23").replace(gt,"%26").replace(It,"`").replace(Tt,"{").replace(kt,"}").replace(Et,"^")}function xt(t){return Rt(t).replace(bt,"%3D")}function Pt(t){return Ct(t).replace(vt,"%23").replace(yt,"%3F")}function Nt(t){return null==t?"":Pt(t).replace(mt,"%2F")}function Lt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Dt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(_t," "),n=t.indexOf("="),o=Lt(n<0?t:t.slice(0,n)),s=n<0?null:Lt(t.slice(n+1));if(o in e){let t=e[o];Array.isArray(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=xt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&Rt(t)):[r&&Rt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ut(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ft(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=t=>{!1===t?a(J(4,{from:n,to:e})):t instanceof Error?a(t):W(t)?a(J(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),s())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const o of t)for(const t in o.components){let s=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if($t(s)){const a=s.__vccOpts||s,c=a[e];c&&i.push(Vt(c,n,r,o,t))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const s=f(i)?i.default:i;o.components[t]=s;const a=s.__vccOpts||s,c=a[e];return c&&Vt(c,n,r,o,t)()}))}}return i}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=Object(r["inject"])(c),n=Object(r["inject"])(u),i=Object(r["computed"])(()=>e.resolve(Object(r["unref"])(t.to))),o=Object(r["computed"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=Kt(t[e-2]);return e>1&&Kt(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,t[e-2])):s}),s=Object(r["computed"])(()=>o.value>-1&&qt(n.params,i.value.params)),a=Object(r["computed"])(()=>o.value>-1&&o.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return Gt(n)?e[Object(r["unref"])(t.replace)?"replace":"push"](Object(r["unref"])(t.to)).catch(v):Promise.resolve()}return{route:i,href:Object(r["computed"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const zt=Object(r["defineComponent"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=Object(r["reactive"])(Ht(t)),{options:i}=Object(r["inject"])(c),o=Object(r["computed"])(()=>({[Xt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["h"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Wt=zt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Kt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Jt=Object(r["defineComponent"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["inject"])(l),o=Object(r["computed"])(()=>t.route||i.value),c=Object(r["inject"])(a,0),u=Object(r["computed"])(()=>o.value.matched[c]);Object(r["provide"])(a,c+1),Object(r["provide"])(s,u),Object(r["provide"])(l,o);const h=Object(r["ref"])();return Object(r["watch"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&O(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[t.name],c=t.name;if(!a)return Yt(n.default,{Component:a,route:i});const l=s.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(s.instances[c]=null)},v=Object(r["h"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Yt(n.default,{Component:v,route:i})||v}}});function Yt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Qt=Jt;function Zt(t){const e=ct(t.routes,t),n=t.parseQuery||Dt,i=t.stringifyQuery||Mt,o=t.history;const s=Ft(),a=Ft(),f=Ft(),g=Object(r["shallowRef"])(q);let m=q;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,t=>""+t),O=p.bind(null,Nt),E=p.bind(null,Lt);function I(t,n){let r,i;return G(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function T(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function j(t){return!!e.getRecordMatcher(t)}function C(t,r){if(r=d({},r||g.value),"string"===typeof t){const i=b(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return d(i,s,{params:E(s.params),hash:Lt(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in t)s=d({},t,{path:b(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];s=d({},t,{params:O(t.params)}),r.params=O(r.params)}const a=e.resolve(s,r),c=t.hash||"";a.params=_(E(a.params));const u=y(i,d({},t,{hash:At(c),path:a.path})),l=o.createHref(u);return d({fullPath:u,hash:c,query:i===Mt?Ut(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function A(t){return"string"===typeof t?b(n,t,g.value.path):d({},t)}function R(t,e){if(m!==t)return J(8,{from:e,to:t})}function x(t){return V(t)}function D(t){return x(d(A(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=A(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=m=C(t),r=g.value,o=t.state,s=t.force,a=!0===t.replace,c=F(n);if(c)return V(d(A(c),{state:o,force:s,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!s&&w(i,r,n)&&(l=J(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch(t=>Y(t)?t:tt(t,u,r)).then(t=>{if(t){if(Y(t,2))return V(d(A(t.to),{state:o,force:s,replace:a}),e||u)}else t=z(u,r,!0,a,o);return H(u,r,t),t})}function B(t,e){const n=R(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t,e){let n;const[r,i,o]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Vt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of s.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Vt(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Vt(i,t,e));else n.push(Vt(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(o,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).catch(t=>Y(t,8)?t:Promise.reject(t))}function H(t,e,n){for(const r of f.list())r(t,e,n)}function z(t,e,n,r,i){const s=R(t,e);if(s)return s;const a=e===q,c=h?history.state:{};n&&(r||a?o.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),g.value=t,rt(t,e,n,a),nt()}let W;function K(){W=o.listen((t,e,n)=>{const r=C(t),i=F(r);if(i)return void V(d(i,{replace:!0}),r).catch(v);m=r;const s=g.value;h&&M(L(s.fullPath,n.delta),P()),$(r,s).catch(t=>Y(t,12)?t:Y(t,2)?(V(t.to,r).then(t=>{Y(t,20)&&!n.delta&&n.type===k.pop&&o.go(-1,!1)}).catch(v),Promise.reject()):(n.delta&&o.go(-n.delta,!1),tt(t,r,s))).then(t=>{t=t||z(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===k.pop&&Y(t,20)&&o.go(-1,!1)),H(r,s,t)}).catch(v)})}let X,Q=Ft(),Z=Ft();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return X&&g.value!==q?Promise.resolve():new Promise((t,e)=>{Q.add([t,e])})}function nt(t){X||(X=!0,K(),Q.list().forEach(([e,n])=>t?n(t):e()),Q.reset())}function rt(e,n,i,o){const{scrollBehavior:s}=t;if(!h||!s)return Promise.resolve();const a=!i&&U(L(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["nextTick"])().then(()=>s(e,n,a)).then(t=>t&&N(t)).catch(t=>tt(t,e,n))}const it=t=>o.go(t);let ot;const st=new Set,at={currentRoute:g,addRoute:I,removeRoute:T,hasRoute:j,getRoutes:S,resolve:C,options:t,push:x,replace:D,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",Qt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["unref"])(g)}),h&&!ot&&g.value===q&&(ot=!0,x(o.location).catch(t=>{0}));const n={};for(const o in q)n[o]=Object(r["computed"])(()=>g.value[o]);t.provide(c,e),t.provide(u,Object(r["reactive"])(n)),t.provide(l,g);const i=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(m=q,W&&W(),g.value=q,ot=!1,X=!1),i()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find(t=>O(t,o))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find(t=>O(t,a))||i.push(a))}return[n,r,i]}},"6c56":function(t,e,n){"use strict";(function(t){var e=n("5606"),r=n("ffa6"),i=n("abfd");n("a8e9"),n("c7b2");
/**
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
 */
let o="8.6.8";
/**
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
 */class s{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.t(t),this.i=t=>e.writeSequenceNumber(t))}t(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.i&&this.i(t),t}}s.o=-1;
/**
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
 */
const a={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class c extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */
/**
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
 */const u=new i["b"]("@firebase/firestore");function l(t,...e){if(u.logLevel<=i["a"].DEBUG){const n=e.map(f);u.debug(`Firestore (${o}): ${t}`,...n)}}function h(t,...e){if(u.logLevel<=i["a"].ERROR){const n=e.map(f);u.error(`Firestore (${o}): ${t}`,...n)}}function f(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
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
 */function d(t="Unexpected state"){const e=`FIRESTORE (${o}) INTERNAL ASSERTION FAILED: `+t;throw h(e),new Error(e)}function p(t,e){t||d()}
/**
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
 */
function v(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class g{static u(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=v(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function m(t,e){return t<e?-1:t>e?1:0}
/**
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
 */
class b{constructor(t,e,n){void 0===e?e=0:e>t.length&&d(),void 0===n?n=t.length-e:n>t.length-e&&d(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===b.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof b?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class y extends b{construct(t,e,n){return new y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new c(a.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new y(e)}static emptyPath(){return new y([])}}
/**
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
 */
/**
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
 */
class _{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new _(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new _(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return m(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_.EMPTY_BYTE_STRING=new _("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
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
 */
class w{constructor(t){this.path=t}static fromPath(t){return new w(y.fromString(t))}static fromName(t){return new w(y.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===y.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new y(t.slice()))}}
/**
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
 */
/**
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
 */
var O,E;(E=O||(O={}))[E.OK=0]="OK",E[E.CANCELLED=1]="CANCELLED",E[E.UNKNOWN=2]="UNKNOWN",E[E.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",E[E.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",E[E.NOT_FOUND=5]="NOT_FOUND",E[E.ALREADY_EXISTS=6]="ALREADY_EXISTS",E[E.PERMISSION_DENIED=7]="PERMISSION_DENIED",E[E.UNAUTHENTICATED=16]="UNAUTHENTICATED",E[E.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",E[E.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",E[E.ABORTED=10]="ABORTED",E[E.OUT_OF_RANGE=11]="OUT_OF_RANGE",E[E.UNIMPLEMENTED=12]="UNIMPLEMENTED",E[E.INTERNAL=13]="INTERNAL",E[E.UNAVAILABLE=14]="UNAVAILABLE",E[E.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class I{constructor(t,e){this.comparator=t,this.root=e||S.EMPTY}insert(t,e){return new I(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,S.BLACK,null,null))}remove(t){return new I(this.comparator,this.root.remove(t,this.comparator).copy(null,null,S.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new T(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new T(this.root,t,this.comparator,!1)}getReverseIterator(){return new T(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new T(this.root,t,this.comparator,!0)}}class T{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class S{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:S.RED,this.left=null!=r?r:S.EMPTY,this.right=null!=i?i:S.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new S(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return S.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return S.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,S.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,S.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw d();if(this.right.isRed())throw d();const t=this.left.check();if(t!==this.right.check())throw d();return t+(this.isRed()?0:1)}}S.EMPTY=null,S.RED=!0,S.BLACK=!1,S.EMPTY=new class{constructor(){this.size=0}get key(){throw d()}get value(){throw d()}get color(){throw d()}get left(){throw d()}get right(){throw d()}copy(t,e,n,r,i){return this}insert(t,e,n){return new S(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class k{constructor(t){this.comparator=t,this.data=new I(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new j(this.data.getIterator())}getIteratorFrom(t){return new j(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof k))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new k(this.comparator);return e.data=t,e}}class j{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */new I(w.comparator);new I(w.comparator);new I(w.comparator);new k(w.comparator);new k(m);
/**
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
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();
/**
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
 */
function C(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=R(e)),e=A(t.get(n),e);return R(e)}function A(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function R(t){return t+""}class x{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}x.store="owner",x.key="owner";class P{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}P.store="mutationQueues",P.keyPath="userId";class N{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}N.store="mutations",N.keyPath="batchId",N.userMutationsIndex="userMutationsIndex",N.userMutationsKeyPath=["userId","batchId"];class L{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,C(e)]}static key(t,e,n){return[t,C(e),n]}}L.store="documentMutations",L.PLACEHOLDER=new L;class D{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}D.store="remoteDocuments",D.readTimeIndex="readTimeIndex",D.readTimeIndexPath="readTime",D.collectionReadTimeIndex="collectionReadTimeIndex",D.collectionReadTimeIndexPath=["parentPath","readTime"];class M{constructor(t){this.byteSize=t}}M.store="remoteDocumentGlobal",M.key="remoteDocumentGlobalKey";class U{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}U.store="targets",U.keyPath="targetId",U.queryTargetsIndexName="queryTargetsIndex",U.queryTargetsKeyPath=["canonicalId","targetId"];class F{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}F.store="targetDocuments",F.keyPath=["targetId","path"],F.documentTargetsIndex="documentTargetsIndex",F.documentTargetsKeyPath=["path","targetId"];class V{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}V.key="targetGlobalKey",V.store="targetGlobal";class B{constructor(t,e){this.collectionId=t,this.parent=e}}B.store="collectionParents",B.keyPath=["collectionId","parent"];class ${constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}$.store="clientMetadata",$.keyPath="clientId";class H{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}H.store="bundles",H.keyPath="bundleId";class z{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}z.store="namedQueries",z.keyPath="name";P.store,N.store,L.store,D.store,U.store,x.store,V.store,F.store,$.store,M.store,B.store,H.store,z.store;
/**
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
 */
class W{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
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
 */function G(t){return"IndexedDbTransactionError"===t.name}class q{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new q(t,q.DEFAULT_COLLECTION_PERCENTILE,q.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */q.DEFAULT_COLLECTION_PERCENTILE=10,q.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,q.DEFAULT=new q(41943040,q.DEFAULT_COLLECTION_PERCENTILE,q.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),q.DISABLED=new q(-1,0,0);
/**
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
 */
class K{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid");function X(){return"undefined"!=typeof document?document:null}
/**
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
 */class J{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Se=t,this.timerId=e,this.Mi=n,this.Li=r,this.Bi=i,this.Ui=0,this.qi=null,this.Ki=Date.now(),this.reset()}reset(){this.Ui=0}Qi(){this.Ui=this.Bi}ji(t){this.cancel();const e=Math.floor(this.Ui+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,e-n);r>0&&l("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ui} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qi=this.Se.enqueueAfterDelay(this.timerId,r,()=>(this.Ki=Date.now(),t())),this.Ui*=this.Li,this.Ui<this.Mi&&(this.Ui=this.Mi),this.Ui>this.Bi&&(this.Ui=this.Bi)}Gi(){null!==this.qi&&(this.qi.skipDelay(),this.qi=null)}cancel(){null!==this.qi&&(this.qi.cancel(),this.qi=null)}Wi(){return(Math.random()-.5)*this.Ui}}
/**
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
 */
/**
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
 */
class Y{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new W,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Y(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new c(a.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Q(t,e){if(h("AsyncQueue",`${e}: ${t}`),G(t))return new c(a.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */
/**
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
 */
class Z{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=K.UNAUTHENTICATED,this.clientId=g.u(),this.credentialListener=()=>Promise.resolve(),this.credentials.setChangeListener(e,async t=>{l("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new c(a.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new W;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),t.resolve()}catch(e){const n=Q(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}class tt{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class et{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof et&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const nt=new Map;
/**
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
 */class rt{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class it{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(K.UNAUTHENTICATED))}removeChangeListener(){this.changeListener=null}}class ot{constructor(t){this.currentUser=K.UNAUTHENTICATED,this.oc=new W,this.cc=0,this.forceRefresh=!1,this.auth=null,this.asyncQueue=null,this.ac=()=>{this.cc++,this.currentUser=this.uc(),this.oc.resolve(),this.changeListener&&this.asyncQueue.enqueueRetryable(()=>this.changeListener(this.currentUser))};const e=t=>{l("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.ac)};t.onInit(t=>e(t)),setTimeout(()=>{if(!this.auth){const n=t.getImmediate({optional:!0});n?e(n):(l("FirebaseCredentialsProvider","Auth not yet detected"),this.oc.resolve())}},0)}getToken(){const t=this.cc,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.cc!==t?(l("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(p("string"==typeof e.accessToken),new rt(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(t,e){this.asyncQueue=t,this.asyncQueue.enqueueRetryable(async()=>{await this.oc.promise,await e(this.currentUser),this.changeListener=e})}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.ac),this.changeListener=()=>Promise.resolve()}uc(){const t=this.auth&&this.auth.getUid();return p(null===t||"string"==typeof t),new K(t)}}class st{constructor(t,e,n){this.hc=t,this.lc=e,this.fc=n,this.type="FirstParty",this.user=K.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.lc},e=this.hc.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.fc&&(t["X-Goog-Iam-Authorization-Token"]=this.fc),t}}class at{constructor(t,e,n){this.hc=t,this.lc=e,this.fc=n}getToken(){return Promise.resolve(new st(this.hc,this.lc,this.fc))}setChangeListener(t,e){t.enqueueRetryable(()=>e(K.FIRST_PARTY))}removeChangeListener(){}invalidateToken(){}}
/**
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
 */
/**
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
 */
class ct{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new c(a.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new c(a.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new c(a.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class ut{constructor(t,e){this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ct({}),this._settingsFrozen=!1,t instanceof et?(this._databaseId=t,this._credentials=new it):(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new c(a.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new et(t.options.projectId)}(t),this._credentials=new ot(e))}get app(){if(!this._app)throw new c(a.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new c(a.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ct(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new it;switch(t.type){case"gapi":t.client;return p(!("object"!=typeof e["e"]||null===e["e"]||!e["e"].auth||!e["e"].auth.getAuthHeaderValueForFirstParty)),new at(e["e"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new c(a.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=nt.get(t);e&&(l("ComponentProvider","Removing Datastore"),nt.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */
class lt{constructor(){this.dc=Promise.resolve(),this.wc=[],this._c=!1,this.mc=[],this.gc=null,this.yc=!1,this.Ec=[],this.Zi=new J(this,"async_queue_retry"),this.Tc=()=>{const t=X();t&&l("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Zi.Gi()};const t=X();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Tc)}get isShuttingDown(){return this._c}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ic(),this.Ac(t)}enterRestrictedMode(){if(!this._c){this._c=!0;const t=X();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Tc)}}enqueue(t){return this.Ic(),this._c?new Promise(t=>{}):this.Ac(t)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.wc.push(t),this.Rc()))}async Rc(){if(0!==this.wc.length){try{await this.wc[0](),this.wc.shift(),this.Zi.reset()}catch(t){if(!G(t))throw t;l("AsyncQueue","Operation failed with retryable error: "+t)}this.wc.length>0&&this.Zi.ji(()=>this.Rc())}}Ac(t){const e=this.dc.then(()=>(this.yc=!0,t().catch(t=>{throw this.gc=t,this.yc=!1,h("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t)),t}).then(t=>(this.yc=!1,t))));return this.dc=e,e}enqueueAfterDelay(t,e,n){this.Ic(),this.Ec.indexOf(t)>-1&&(e=0);const r=Y.createAndSchedule(this,t,e,n,t=>this.Pc(t));return this.mc.push(r),r}Ic(){this.gc&&d()}verifyOperationInProgress(){}async bc(){let t;do{t=this.dc,await t}while(t!==this.dc)}vc(t){for(const e of this.mc)if(e.timerId===t)return!0;return!1}Vc(t){return this.bc().then(()=>{this.mc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.mc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bc()})}Sc(t){this.Ec.push(t)}Pc(t){const e=this.mc.indexOf(t);this.mc.splice(e,1)}}class ht extends ut{constructor(t,e){super(t,e),this.type="firestore",this._queue=new lt,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ft(this),this._firestoreClient.terminate()}}function ft(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new tt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Z(t._credentials,t._queue,r)}new RegExp("[~\\*/\\[\\]]");var dt;!function(t){o=t}(e["a"]),Object(e["c"])(new r["a"]("firestore-exp",(t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),r=new ht(n,t.getProvider("auth-internal"));return e=Object.assign({useFetchStreams:!1},e),r._setSettings(e),r},"PUBLIC")),Object(e["g"])("@firebase/firestore","0.0.900-exp.57f19127c",dt)}).call(this,n("4362"))},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==g)&&s(n,"name",g),u=f(n),u.source||(u.source=d.join("string"==typeof g?g:""))),t!==r?(h?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:s(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},"7a23":function(t,e,n){"use strict";n.r(e),n.d(e,"EffectScope",(function(){return s})),n.d(e,"ReactiveEffect",(function(){return I})),n.d(e,"computed",(function(){return se})),n.d(e,"customRef",(function(){return ee})),n.d(e,"effect",(function(){return S})),n.d(e,"effectScope",(function(){return a})),n.d(e,"getCurrentScope",(function(){return u})),n.d(e,"isProxy",(function(){return Ut})),n.d(e,"isReactive",(function(){return Dt})),n.d(e,"isReadonly",(function(){return Mt})),n.d(e,"isRef",(function(){return Wt})),n.d(e,"markRaw",(function(){return Vt})),n.d(e,"onScopeDispose",(function(){return l})),n.d(e,"proxyRefs",(function(){return Zt})),n.d(e,"reactive",(function(){return Rt})),n.d(e,"readonly",(function(){return Pt})),n.d(e,"ref",(function(){return Gt})),n.d(e,"shallowReactive",(function(){return xt})),n.d(e,"shallowReadonly",(function(){return Nt})),n.d(e,"shallowRef",(function(){return qt})),n.d(e,"stop",(function(){return k})),n.d(e,"toRaw",(function(){return Ft})),n.d(e,"toRef",(function(){return ie})),n.d(e,"toRefs",(function(){return ne})),n.d(e,"triggerRef",(function(){return Jt})),n.d(e,"unref",(function(){return Yt})),n.d(e,"camelize",(function(){return r["e"]})),n.d(e,"capitalize",(function(){return r["f"]})),n.d(e,"normalizeClass",(function(){return r["I"]})),n.d(e,"normalizeProps",(function(){return r["J"]})),n.d(e,"normalizeStyle",(function(){return r["K"]})),n.d(e,"toDisplayString",(function(){return r["M"]})),n.d(e,"toHandlerKey",(function(){return r["N"]})),n.d(e,"BaseTransition",(function(){return We})),n.d(e,"Comment",(function(){return Mr})),n.d(e,"Fragment",(function(){return Lr})),n.d(e,"KeepAlive",(function(){return on})),n.d(e,"Static",(function(){return Ur})),n.d(e,"Suspense",(function(){return Ae})),n.d(e,"Teleport",(function(){return Sr})),n.d(e,"Text",(function(){return Dr})),n.d(e,"callWithAsyncErrorHandling",(function(){return eo})),n.d(e,"callWithErrorHandling",(function(){return to})),n.d(e,"cloneVNode",(function(){return oi})),n.d(e,"compatUtils",(function(){return os})),n.d(e,"createBlock",(function(){return Kr})),n.d(e,"createCommentVNode",(function(){return ci})),n.d(e,"createElementBlock",(function(){return qr})),n.d(e,"createElementVNode",(function(){return ei})),n.d(e,"createHydrationRenderer",(function(){return dr})),n.d(e,"createPropsRestProxy",(function(){return qo})),n.d(e,"createRenderer",(function(){return fr})),n.d(e,"createSlots",(function(){return pi})),n.d(e,"createStaticVNode",(function(){return ai})),n.d(e,"createTextVNode",(function(){return si})),n.d(e,"createVNode",(function(){return ni})),n.d(e,"defineAsyncComponent",(function(){return tn})),n.d(e,"defineComponent",(function(){return Qe})),n.d(e,"defineEmits",(function(){return Vo})),n.d(e,"defineExpose",(function(){return Bo})),n.d(e,"defineProps",(function(){return Fo})),n.d(e,"devtools",(function(){return ae})),n.d(e,"getCurrentInstance",(function(){return Si})),n.d(e,"getTransitionRawChildren",(function(){return Ye})),n.d(e,"guardReactiveProps",(function(){return ii})),n.d(e,"h",(function(){return Xo})),n.d(e,"handleError",(function(){return no})),n.d(e,"initCustomFormatter",(function(){return Qo})),n.d(e,"inject",(function(){return Be})),n.d(e,"isMemoSame",(function(){return ts})),n.d(e,"isRuntimeOnly",(function(){return Mi})),n.d(e,"isVNode",(function(){return Xr})),n.d(e,"mergeDefaults",(function(){return Go})),n.d(e,"mergeProps",(function(){return fi})),n.d(e,"nextTick",(function(){return bo})),n.d(e,"onActivated",(function(){return an})),n.d(e,"onBeforeMount",(function(){return vn})),n.d(e,"onBeforeUnmount",(function(){return yn})),n.d(e,"onBeforeUpdate",(function(){return mn})),n.d(e,"onDeactivated",(function(){return cn})),n.d(e,"onErrorCaptured",(function(){return In})),n.d(e,"onMounted",(function(){return gn})),n.d(e,"onRenderTracked",(function(){return En})),n.d(e,"onRenderTriggered",(function(){return On})),n.d(e,"onServerPrefetch",(function(){return wn})),n.d(e,"onUnmounted",(function(){return _n})),n.d(e,"onUpdated",(function(){return bn})),n.d(e,"openBlock",(function(){return Br})),n.d(e,"popScopeId",(function(){return be})),n.d(e,"provide",(function(){return Ve})),n.d(e,"pushScopeId",(function(){return me})),n.d(e,"queuePostFlushCb",(function(){return To})),n.d(e,"registerRuntimeCompiler",(function(){return Di})),n.d(e,"renderList",(function(){return di})),n.d(e,"renderSlot",(function(){return vi})),n.d(e,"resolveComponent",(function(){return Cr})),n.d(e,"resolveDirective",(function(){return xr})),n.d(e,"resolveDynamicComponent",(function(){return Rr})),n.d(e,"resolveFilter",(function(){return is})),n.d(e,"resolveTransitionHooks",(function(){return qe})),n.d(e,"setBlockTracking",(function(){return Wr})),n.d(e,"setDevtoolsHook",(function(){return le})),n.d(e,"setTransitionHooks",(function(){return Je})),n.d(e,"ssrContextKey",(function(){return Jo})),n.d(e,"ssrUtils",(function(){return rs})),n.d(e,"toHandlers",(function(){return mi})),n.d(e,"transformVNodeArgs",(function(){return Yr})),n.d(e,"useAttrs",(function(){return zo})),n.d(e,"useSSRContext",(function(){return Yo})),n.d(e,"useSlots",(function(){return Ho})),n.d(e,"useTransitionState",(function(){return $e})),n.d(e,"version",(function(){return es})),n.d(e,"warn",(function(){return Ki})),n.d(e,"watch",(function(){return No})),n.d(e,"watchEffect",(function(){return Ao})),n.d(e,"watchPostEffect",(function(){return Ro})),n.d(e,"watchSyncEffect",(function(){return xo})),n.d(e,"withAsyncContext",(function(){return Ko})),n.d(e,"withCtx",(function(){return _e})),n.d(e,"withDefaults",(function(){return $o})),n.d(e,"withDirectives",(function(){return er})),n.d(e,"withMemo",(function(){return Zo})),n.d(e,"withScopeId",(function(){return ye})),n.d(e,"Transition",(function(){return Gs})),n.d(e,"TransitionGroup",(function(){return fa})),n.d(e,"VueElement",(function(){return Fs})),n.d(e,"createApp",(function(){return qa})),n.d(e,"createSSRApp",(function(){return Ka})),n.d(e,"defineCustomElement",(function(){return Ds})),n.d(e,"defineSSRCustomElement",(function(){return Ms})),n.d(e,"hydrate",(function(){return Ga})),n.d(e,"initDirectivesForSSR",(function(){return Ya})),n.d(e,"render",(function(){return Wa})),n.d(e,"useCssModule",(function(){return Vs})),n.d(e,"useCssVars",(function(){return Bs})),n.d(e,"vModelCheckbox",(function(){return Oa})),n.d(e,"vModelDynamic",(function(){return Ca})),n.d(e,"vModelRadio",(function(){return Ia})),n.d(e,"vModelSelect",(function(){return Ta})),n.d(e,"vModelText",(function(){return wa})),n.d(e,"vShow",(function(){return Ma})),n.d(e,"withKeys",(function(){return Da})),n.d(e,"withModifiers",(function(){return Na})),n.d(e,"compile",(function(){return Qa}));var r=n("9ff4");let i;const o=[];class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t){return new s(t)}function c(t,e){e=e||i,e&&e.active&&e.effects.push(t)}function u(){return i}function l(t){i&&i.cleanups.push(t)}const h=t=>{const e=new Set(t);return e.w=0,e.n=0,e},f=t=>(t.w&b)>0,d=t=>(t.n&b)>0,p=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=b},v=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];f(i)&&!d(i)?i.delete(t):e[n++]=i,i.w&=~b,i.n&=~b}e.length=n}},g=new WeakMap;let m=0,b=1;const y=30,_=[];let w;const O=Symbol(""),E=Symbol("");class I{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],c(this,n)}run(){if(!this.active)return this.fn();if(!_.includes(this))try{return _.push(w=this),R(),b=1<<++m,m<=y?p(this):T(this),this.fn()}finally{m<=y&&v(this),b=1<<--m,x(),_.pop();const t=_.length;w=t>0?_[t-1]:void 0}}stop(){this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function S(t,e){t.effect&&(t=t.effect.fn);const n=new I(t);e&&(Object(r["h"])(n,e),e.scope&&c(n,e.scope)),e&&e.lazy||n.run();const i=n.run.bind(n);return i.effect=n,i}function k(t){t.effect.stop()}let j=!0;const C=[];function A(){C.push(j),j=!1}function R(){C.push(j),j=!0}function x(){const t=C.pop();j=void 0===t||t}function P(t,e,n){if(!N())return;let r=g.get(t);r||g.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=h());const o=void 0;L(i,o)}function N(){return j&&void 0!==w}function L(t,e){let n=!1;m<=y?d(t)||(t.n|=b,n=!f(t)):n=!t.has(w),n&&(t.add(w),w.deps.push(t))}function D(t,e,n,i,o,s){const a=g.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&Object(r["o"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&c.push(t)});else switch(void 0!==n&&c.push(a.get(n)),e){case"add":Object(r["o"])(t)?Object(r["s"])(n)&&c.push(a.get("length")):(c.push(a.get(O)),Object(r["t"])(t)&&c.push(a.get(E)));break;case"delete":Object(r["o"])(t)||(c.push(a.get(O)),Object(r["t"])(t)&&c.push(a.get(E)));break;case"set":Object(r["t"])(t)&&c.push(a.get(O));break}if(1===c.length)c[0]&&M(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);M(h(t))}}function M(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==w||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const U=Object(r["H"])("__proto__,__v_isRef,__isVue"),F=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["E"])),V=G(),B=G(!1,!0),$=G(!0),H=G(!0,!0),z=W();function W(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Ft(this);for(let e=0,i=this.length;e<i;e++)P(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ft)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){A();const n=Ft(this)[e].apply(this,t);return x(),n}}),t}function G(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&o===(t?e?jt:kt:e?St:Tt).get(n))return n;const s=Object(r["o"])(n);if(!t&&s&&Object(r["k"])(z,i))return Reflect.get(z,i,o);const a=Reflect.get(n,i,o);if(Object(r["E"])(i)?F.has(i):U(i))return a;if(t||P(n,"get",i),e)return a;if(Wt(a)){const t=!s||!Object(r["s"])(i);return t?a.value:a}return Object(r["v"])(a)?t?Pt(a):Rt(a):a}}const q=X(),K=X(!0);function X(t=!1){return function(e,n,i,o){let s=e[n];if(!t&&(i=Ft(i),s=Ft(s),!Object(r["o"])(e)&&Wt(s)&&!Wt(i)))return s.value=i,!0;const a=Object(r["o"])(e)&&Object(r["s"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,i,o);return e===Ft(o)&&(a?Object(r["j"])(i,s)&&D(e,"set",n,i,s):D(e,"add",n,i)),c}}function J(t,e){const n=Object(r["k"])(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&D(t,"delete",e,void 0,i),o}function Y(t,e){const n=Reflect.has(t,e);return Object(r["E"])(e)&&F.has(e)||P(t,"has",e),n}function Q(t){return P(t,"iterate",Object(r["o"])(t)?"length":O),Reflect.ownKeys(t)}const Z={get:V,set:q,deleteProperty:J,has:Y,ownKeys:Q},tt={get:$,set(t,e){return!0},deleteProperty(t,e){return!0}},et=Object(r["h"])({},Z,{get:B,set:K}),nt=Object(r["h"])({},tt,{get:H}),rt=t=>t,it=t=>Reflect.getPrototypeOf(t);function ot(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Ft(t),o=Ft(e);e!==o&&!n&&P(i,"get",e),!n&&P(i,"get",o);const{has:s}=it(i),a=r?rt:n?$t:Bt;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function st(t,e=!1){const n=this["__v_raw"],r=Ft(n),i=Ft(t);return t!==i&&!e&&P(r,"has",t),!e&&P(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function at(t,e=!1){return t=t["__v_raw"],!e&&P(Ft(t),"iterate",O),Reflect.get(t,"size",t)}function ct(t){t=Ft(t);const e=Ft(this),n=it(e),r=n.has.call(e,t);return r||(e.add(t),D(e,"add",t,t)),this}function ut(t,e){e=Ft(e);const n=Ft(this),{has:i,get:o}=it(n);let s=i.call(n,t);s||(t=Ft(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?Object(r["j"])(e,a)&&D(n,"set",t,e,a):D(n,"add",t,e),this}function lt(t){const e=Ft(this),{has:n,get:r}=it(e);let i=n.call(e,t);i||(t=Ft(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&D(e,"delete",t,void 0,o),s}function ht(){const t=Ft(this),e=0!==t.size,n=void 0,r=t.clear();return e&&D(t,"clear",void 0,void 0,n),r}function ft(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=Ft(o),a=e?rt:t?$t:Bt;return!t&&P(s,"iterate",O),o.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function dt(t,e,n){return function(...i){const o=this["__v_raw"],s=Ft(o),a=Object(r["t"])(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?rt:e?$t:Bt;return!e&&P(s,"iterate",u?E:O),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return"delete"!==t&&this}}function vt(){const t={get(t){return ot(this,t)},get size(){return at(this)},has:st,add:ct,set:ut,delete:lt,clear:ht,forEach:ft(!1,!1)},e={get(t){return ot(this,t,!1,!0)},get size(){return at(this)},has:st,add:ct,set:ut,delete:lt,clear:ht,forEach:ft(!1,!0)},n={get(t){return ot(this,t,!0)},get size(){return at(this,!0)},has(t){return st.call(this,t,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ft(!0,!1)},r={get(t){return ot(this,t,!0,!0)},get size(){return at(this,!0)},has(t){return st.call(this,t,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ft(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=dt(i,!1,!1),n[i]=dt(i,!0,!1),e[i]=dt(i,!1,!0),r[i]=dt(i,!0,!0)}),[t,n,e,r]}const[gt,mt,bt,yt]=vt();function _t(t,e){const n=e?t?yt:bt:t?mt:gt;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["k"])(n,i)&&i in e?n:e,i,o)}const wt={get:_t(!1,!1)},Ot={get:_t(!1,!0)},Et={get:_t(!0,!1)},It={get:_t(!0,!0)};const Tt=new WeakMap,St=new WeakMap,kt=new WeakMap,jt=new WeakMap;function Ct(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function At(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Ct(Object(r["P"])(t))}function Rt(t){return t&&t["__v_isReadonly"]?t:Lt(t,!1,Z,wt,Tt)}function xt(t){return Lt(t,!1,et,Ot,St)}function Pt(t){return Lt(t,!0,tt,Et,kt)}function Nt(t){return Lt(t,!0,nt,It,jt)}function Lt(t,e,n,i,o){if(!Object(r["v"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=At(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function Dt(t){return Mt(t)?Dt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Mt(t){return!(!t||!t["__v_isReadonly"])}function Ut(t){return Dt(t)||Mt(t)}function Ft(t){const e=t&&t["__v_raw"];return e?Ft(e):t}function Vt(t){return Object(r["g"])(t,"__v_skip",!0),t}const Bt=t=>Object(r["v"])(t)?Rt(t):t,$t=t=>Object(r["v"])(t)?Pt(t):t;function Ht(t){N()&&(t=Ft(t),t.dep||(t.dep=h()),L(t.dep))}function zt(t,e){t=Ft(t),t.dep&&M(t.dep)}function Wt(t){return Boolean(t&&!0===t.__v_isRef)}function Gt(t){return Kt(t,!1)}function qt(t){return Kt(t,!0)}function Kt(t,e){return Wt(t)?t:new Xt(t,e)}class Xt{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ft(t),this._value=e?t:Bt(t)}get value(){return Ht(this),this._value}set value(t){t=this._shallow?t:Ft(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Bt(t),zt(this,t))}}function Jt(t){zt(t,void 0)}function Yt(t){return Wt(t)?t.value:t}const Qt={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Wt(i)&&!Wt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Zt(t){return Dt(t)?t:new Proxy(t,Qt)}class te{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:e,set:n}=t(()=>Ht(this),()=>zt(this));this._get=e,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function ee(t){return new te(t)}function ne(t){const e=Object(r["o"])(t)?new Array(t.length):{};for(const n in t)e[n]=ie(t,n);return e}class re{constructor(t,e){this._object=t,this._key=e,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(t){this._object[this._key]=t}}function ie(t,e){const n=t[e];return Wt(n)?n:new re(t,e)}class oe{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new I(t,()=>{this._dirty||(this._dirty=!0,zt(this))}),this["__v_isReadonly"]=n}get value(){const t=Ft(this);return Ht(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function se(t,e){let n,i;const o=Object(r["p"])(t);o?(n=t,i=r["d"]):(n=t.get,i=t.set);const s=new oe(n,i,o||!i);return s}Promise.resolve();new Set;new Map;let ae,ce=[],ue=!1;function le(t,e){if(ae=t,ae)ae.enabled=!0,ce.forEach(({event:t,args:e})=>ae.emit(t,...e)),ce=[];else if("undefined"===typeof window||navigator.userAgent.includes("jsdom"))ue=!0,ce=[];else{const t=e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[];t.push(t=>{le(t,e)}),setTimeout(()=>{ae||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ue=!0,ce=[])},3e3)}}function he(t,e,...n){const i=t.vnode.props||r["b"];let o=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:s}=i[t]||r["b"];s?o=n.map(t=>t.trim()):e&&(o=n.map(r["O"]))}let c;let u=i[c=Object(r["N"])(e)]||i[c=Object(r["N"])(Object(r["e"])(e))];!u&&s&&(u=i[c=Object(r["N"])(Object(r["l"])(e))]),u&&eo(u,t,6,o);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,eo(l,t,6,o)}}function fe(t,e,n=!1){const i=e.emitsCache,o=i.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!Object(r["p"])(t)){const i=t=>{const n=fe(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(t=>a[t]=null):Object(r["h"])(a,s),i.set(t,a),a):(i.set(t,null),null)}function de(t,e){return!(!t||!Object(r["w"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let pe=null,ve=null;function ge(t){const e=pe;return pe=t,ve=t&&t.type.__scopeId||null,e}function me(t){ve=t}function be(){ve=null}const ye=t=>_e;function _e(t,e=pe,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Wr(-1);const i=ge(e),o=t(...n);return ge(i),r._d&&Wr(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function we(t){const{type:e,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:v,inheritAttrs:g}=t;let m,b;const y=ge(t);try{if(4&n.shapeFlag){const t=o||i;m=ui(h.call(t,t,f,s,p,d,v)),b=u}else{const t=e;0,m=ui(t.length>1?t(s,{attrs:u,slots:c,emit:l}):t(s,null)),b=e.props?u:Ee(u)}}catch(w){Fr.length=0,no(w,t,1),m=ni(Mr)}let _=m;if(b&&!1!==g){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(a&&t.some(r["u"])&&(b=Ie(b,a)),_=oi(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,ge(y),m}function Oe(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(!Xr(r))return;if(r.type!==Mr||"v-if"===r.children){if(e)return;e=r}}return e}const Ee=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["w"])(n))&&((e||(e={}))[n]=t[n]);return e},Ie=(t,e)=>{const n={};for(const i in t)Object(r["u"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function Te(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Se(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Se(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!de(u,n))return!0}}return!1}function Se(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!de(n,o))return!0}return!1}function ke({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const je=t=>t.__isSuspense,Ce={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,o,s,a,c,u){null==t?xe(e,n,r,i,o,s,a,c,u):Pe(t,e,n,r,i,s,a,c,u)},hydrate:Le,create:Ne,normalize:De},Ae=Ce;function Re(t,e){const n=t.props&&t.props[e];Object(r["p"])(n)&&n()}function xe(t,e,n,r,i,o,s,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),f=t.suspense=Ne(t,i,r,e,h,n,o,s,a,c);u(null,f.pendingBranch=t.ssContent,h,null,r,f,o,s),f.deps>0?(Re(t,"onPending"),Re(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,o,s),Fe(f,t.ssFallback)):f.resolve()}function Pe(t,e,n,r,i,o,s,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:g,isHydrating:m}=h;if(v)h.pendingBranch=f,Jr(f,v)?(c(v,f,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0?h.resolve():g&&(c(p,d,n,r,i,null,o,s,a),Fe(h,d))):(h.pendingId++,m?(h.isHydrating=!1,h.activeBranch=v):u(v,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),g?(c(null,f,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0?h.resolve():(c(p,d,n,r,i,null,o,s,a),Fe(h,d))):p&&Jr(f,p)?(c(p,f,n,r,i,h,o,s,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0&&h.resolve()));else if(p&&Jr(f,p))c(p,f,n,r,i,h,o,s,a),Fe(h,f);else if(Re(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0)h.resolve();else{const{timeout:t,pendingId:e}=h;t>0?setTimeout(()=>{h.pendingId===e&&h.fallback(d)},t):0===t&&h.fallback(d)}}function Ne(t,e,n,i,o,s,a,c,u,l,h=!1){const{p:f,m:d,um:p,n:v,o:{parentNode:g,remove:m}}=l,b=Object(r["O"])(t.props&&t.props.timeout),y={vnode:t,parent:e,parentComponent:n,isSVG:a,container:i,hiddenContainer:o,anchor:s,deps:0,pendingId:0,timeout:"number"===typeof b?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:h,isUnmounted:!1,effects:[],resolve(t=!1){const{vnode:e,activeBranch:n,pendingBranch:r,pendingId:i,effects:o,parentComponent:s,container:a}=y;if(y.isHydrating)y.isHydrating=!1;else if(!t){const t=n&&r.transition&&"out-in"===r.transition.mode;t&&(n.transition.afterLeave=()=>{i===y.pendingId&&d(r,a,e,0)});let{anchor:e}=y;n&&(e=v(n),p(n,s,y,!0)),t||d(r,a,e,0)}Fe(y,r),y.pendingBranch=null,y.isInFallback=!1;let c=y.parent,u=!1;while(c){if(c.pendingBranch){c.effects.push(...o),u=!0;break}c=c.parent}u||To(o),y.effects=[],Re(e,"onResolve")},fallback(t){if(!y.pendingBranch)return;const{vnode:e,activeBranch:n,parentComponent:r,container:i,isSVG:o}=y;Re(e,"onFallback");const s=v(n),a=()=>{y.isInFallback&&(f(null,t,i,s,r,null,o,c,u),Fe(y,t))},l=t.transition&&"out-in"===t.transition.mode;l&&(n.transition.afterLeave=a),y.isInFallback=!0,p(n,r,null,!0),l||a()},move(t,e,n){y.activeBranch&&d(y.activeBranch,t,e,n),y.container=t},next(){return y.activeBranch&&v(y.activeBranch)},registerDep(t,e){const n=!!y.pendingBranch;n&&y.deps++;const r=t.vnode.el;t.asyncDep.catch(e=>{no(e,t,0)}).then(i=>{if(t.isUnmounted||y.isUnmounted||y.pendingId!==t.suspenseId)return;t.asyncResolved=!0;const{vnode:o}=t;Li(t,i,!1),r&&(o.el=r);const s=!r&&t.subTree.el;e(t,o,g(r||t.subTree.el),r?null:v(t.subTree),y,a,u),s&&m(s),ke(t,o.el),n&&0===--y.deps&&y.resolve()})},unmount(t,e){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,t,e),y.pendingBranch&&p(y.pendingBranch,n,t,e)}};return y}function Le(t,e,n,r,i,o,s,a,c){const u=e.suspense=Ne(e,r,n,t.parentNode,document.createElement("div"),null,i,o,s,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,o,s);return 0===u.deps&&u.resolve(),l}function De(t){const{shapeFlag:e,children:n}=t,r=32&e;t.ssContent=Me(r?n.default:n),t.ssFallback=r?Me(n.fallback):ni(Mr)}function Me(t){let e;if(Object(r["p"])(t)){const n=zr&&t._c;n&&(t._d=!1,Br()),t=t(),n&&(t._d=!0,e=Vr,$r())}if(Object(r["o"])(t)){const e=Oe(t);0,t=e}return t=ui(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(e=>e!==t)),t}function Ue(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):To(t)}function Fe(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,ke(r,i))}function Ve(t,e){if(Ti){let n=Ti.provides;const r=Ti.parent&&Ti.parent.provides;r===n&&(n=Ti.provides=Object.create(r)),n[t]=e}else 0}function Be(t,e,n=!1){const i=Ti||pe;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&Object(r["p"])(e)?e.call(i.proxy):e}else 0}function $e(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gn(()=>{t.isMounted=!0}),yn(()=>{t.isUnmounting=!0}),t}const He=[Function,Array],ze={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(t,{slots:e}){const n=Si(),r=$e();let i;return()=>{const o=e.default&&Ye(e.default(),!0);if(!o||!o.length)return;const s=Ft(t),{mode:a}=s;const c=o[0];if(r.isLeaving)return Ke(c);const u=Xe(c);if(!u)return Ke(c);const l=qe(u,s,r,n);Je(u,l);const h=n.subTree,f=h&&Xe(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Mr&&(!Jr(u,f)||d)){const t=qe(f,s,r,n);if(Je(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},Ke(c);"in-out"===a&&u.type!==Mr&&(t.delayLeave=(t,e,n)=>{const i=Ge(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},We=ze;function Ge(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function qe(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:v,onAppear:g,onAfterAppear:m,onAppearCancelled:b}=e,y=String(t.key),_=Ge(n,t),w=(t,e)=>{t&&eo(t,r,9,e)},O={mode:o,persisted:s,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=v||a}e._leaveCb&&e._leaveCb(!0);const o=_[y];o&&Jr(t,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[e])},enter(t){let e=c,r=u,o=l;if(!n.isMounted){if(!i)return;e=g||c,r=m||u,o=b||l}let s=!1;const a=t._enterCb=e=>{s||(s=!0,w(e?o:r,[t]),O.delayedLeave&&O.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();w(h,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),w(n?p:d,[e]),e._leaveCb=void 0,_[i]===t&&delete _[i])};_[i]=t,f?(f(e,s),f.length<=1&&s()):s()},clone(t){return qe(t,e,n,r)}};return O}function Ke(t){if(nn(t))return t=oi(t),t.children=null,t}function Xe(t){return nn(t)?t.children?t.children[0]:void 0:t}function Je(t,e){6&t.shapeFlag&&t.component?Je(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ye(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const o=t[i];o.type===Lr?(128&o.patchFlag&&r++,n=n.concat(Ye(o.children,e))):(e||o.type!==Mr)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Qe(t){return Object(r["p"])(t)?{setup:t,name:t.name}:t}const Ze=t=>!!t.type.__asyncLoader;function tn(t){Object(r["p"])(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:o=200,timeout:s,suspensible:a=!0,onError:c}=t;let u,l=null,h=0;const f=()=>(h++,l=null,d()),d=()=>{let t;return l||(t=l=e().catch(t=>{if(t=t instanceof Error?t:new Error(String(t)),c)return new Promise((e,n)=>{const r=()=>e(f()),i=()=>n(t);c(t,r,i,h+1)});throw t}).then(e=>t!==l&&l?l:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),u=e,e)))};return Qe({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return u},setup(){const t=Ti;if(u)return()=>en(u,t);const e=e=>{l=null,no(e,t,13,!i)};if(a&&t.suspense||xi)return d().then(e=>()=>en(e,t)).catch(t=>(e(t),()=>i?ni(i,{error:t}):null));const r=Gt(!1),c=Gt(),h=Gt(!!o);return o&&setTimeout(()=>{h.value=!1},o),null!=s&&setTimeout(()=>{if(!r.value&&!c.value){const t=new Error(`Async component timed out after ${s}ms.`);e(t),c.value=t}},s),d().then(()=>{r.value=!0,t.parent&&nn(t.parent.vnode)&&_o(t.parent.update)}).catch(t=>{e(t),c.value=t}),()=>r.value&&u?en(u,t):c.value&&i?ni(i,{error:c.value}):n&&!h.value?ni(n):void 0}})}function en(t,{vnode:{ref:e,props:n,children:r}}){const i=ni(t,n,r);return i.ref=e,i}const nn=t=>t.type.__isKeepAlive,rn={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Si(),i=n.ctx;if(!i.renderer)return e.default;const o=new Map,s=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:f}}}=i,d=f("div");function p(t){hn(t),h(t,n,c)}function v(t){o.forEach((e,n)=>{const r=zi(e.type);!r||t&&t(r)||g(n)})}function g(t){const e=o.get(t);a&&e.type===a.type?a&&hn(a):p(e),o.delete(t),s.delete(t)}i.activate=(t,e,n,i,o)=>{const s=t.component;l(t,e,n,0,c),u(s.vnode,t,e,n,s,c,i,t.slotScopeIds,o),hr(()=>{s.isDeactivated=!1,s.a&&Object(r["n"])(s.a);const e=t.props&&t.props.onVnodeMounted;e&&gr(e,s.parent,t)},c)},i.deactivate=t=>{const e=t.component;l(t,d,null,1,c),hr(()=>{e.da&&Object(r["n"])(e.da);const n=t.props&&t.props.onVnodeUnmounted;n&&gr(n,e.parent,t),e.isDeactivated=!0},c)},No(()=>[t.include,t.exclude],([t,e])=>{t&&v(e=>sn(t,e)),e&&v(t=>!sn(e,t))},{flush:"post",deep:!0});let m=null;const b=()=>{null!=m&&o.set(m,fn(n.subTree))};return gn(b),bn(b),yn(()=>{o.forEach(t=>{const{subTree:e,suspense:r}=n,i=fn(e);if(t.type!==i.type)p(t);else{hn(i);const t=i.component.da;t&&hr(t,r)}})}),()=>{if(m=null,!e.default)return null;const n=e.default(),r=n[0];if(n.length>1)return a=null,n;if(!Xr(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=fn(r);const c=i.type,u=zi(Ze(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:h,max:f}=t;if(l&&(!u||!sn(l,u))||h&&u&&sn(h,u))return a=i,r;const d=null==i.key?c:i.key,p=o.get(d);return i.el&&(i=oi(i),128&r.shapeFlag&&(r.ssContent=i)),m=d,p?(i.el=p.el,i.component=p.component,i.transition&&Je(i,i.transition),i.shapeFlag|=512,s.delete(d),s.add(d)):(s.add(d),f&&s.size>parseInt(f,10)&&g(s.values().next().value)),i.shapeFlag|=256,a=i,r}}},on=rn;function sn(t,e){return Object(r["o"])(t)?t.some(t=>sn(t,e)):Object(r["D"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function an(t,e){un(t,"a",e)}function cn(t,e){un(t,"da",e)}function un(t,e,n=Ti){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(dn(e,r,n),n){let t=n.parent;while(t&&t.parent)nn(t.parent.vnode)&&ln(r,e,n,t),t=t.parent}}function ln(t,e,n,i){const o=dn(e,t,i,!0);_n(()=>{Object(r["L"])(i[e],o)},n)}function hn(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function fn(t){return 128&t.shapeFlag?t.ssContent:t}function dn(t,e,n=Ti,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;A(),ki(n);const i=eo(e,n,t,r);return ji(),x(),i});return r?i.unshift(o):i.push(o),o}}const pn=t=>(e,n=Ti)=>(!xi||"sp"===t)&&dn(t,e,n),vn=pn("bm"),gn=pn("m"),mn=pn("bu"),bn=pn("u"),yn=pn("bum"),_n=pn("um"),wn=pn("sp"),On=pn("rtg"),En=pn("rtc");function In(t,e=Ti){dn("ec",t,e)}let Tn=!0;function Sn(t){const e=An(t),n=t.proxy,i=t.ctx;Tn=!1,e.beforeCreate&&jn(e.beforeCreate,t,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:g,deactivated:m,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:w,render:O,renderTracked:E,renderTriggered:I,errorCaptured:T,serverPrefetch:S,expose:k,inheritAttrs:j,components:C,directives:A,filters:R}=e,x=null;if(l&&kn(l,i,x,t.appContext.config.unwrapInjectedRef),a)for(const N in a){const t=a[N];Object(r["p"])(t)&&(i[N]=t.bind(n))}if(o){0;const e=o.call(n,n);0,Object(r["v"])(e)&&(t.data=Rt(e))}if(Tn=!0,s)for(const N in s){const t=s[N],e=Object(r["p"])(t)?t.bind(n,n):Object(r["p"])(t.get)?t.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(t)&&Object(r["p"])(t.set)?t.set.bind(n):r["d"],a=se({get:e,set:o});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Cn(c[r],i,n,r);if(u){const t=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{Ve(e,t[e])})}function P(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&jn(h,t,"c"),P(vn,f),P(gn,d),P(mn,p),P(bn,v),P(an,g),P(cn,m),P(In,T),P(En,E),P(On,I),P(yn,y),P(_n,w),P(wn,S),Object(r["o"])(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});O&&t.render===r["d"]&&(t.render=O),null!=j&&(t.inheritAttrs=j),C&&(t.components=C),A&&(t.directives=A)}function kn(t,e,n=r["d"],i=!1){Object(r["o"])(t)&&(t=Ln(t));for(const o in t){const n=t[o];let s;s=Object(r["v"])(n)?"default"in n?Be(n.from||o,n.default,!0):Be(n.from||o):Be(n),Wt(s)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function jn(t,e,n){eo(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cn(t,e,n,i){const o=i.includes(".")?Mo(n,i):()=>n[i];if(Object(r["D"])(t)){const n=e[t];Object(r["p"])(n)&&No(o,n)}else if(Object(r["p"])(t))No(o,t.bind(n));else if(Object(r["v"])(t))if(Object(r["o"])(t))t.forEach(t=>Cn(t,e,n,i));else{const i=Object(r["p"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["p"])(i)&&No(o,i,t)}else 0}function An(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Rn(c,t,s,!0)),Rn(c,e,s)):c=e,o.set(e,c),c}function Rn(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Rn(t,o,n,!0),i&&i.forEach(e=>Rn(t,e,n,!0));for(const s in e)if(r&&"expose"===s);else{const r=xn[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const xn={data:Pn,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:Dn,created:Dn,beforeMount:Dn,mounted:Dn,beforeUpdate:Dn,updated:Dn,beforeDestroy:Dn,beforeUnmount:Dn,destroyed:Dn,unmounted:Dn,activated:Dn,deactivated:Dn,errorCaptured:Dn,serverPrefetch:Dn,components:Mn,directives:Mn,watch:Un,provide:Pn,inject:Nn};function Pn(t,e){return e?t?function(){return Object(r["h"])(Object(r["p"])(t)?t.call(this,this):t,Object(r["p"])(e)?e.call(this,this):e)}:e:t}function Nn(t,e){return Mn(Ln(t),Ln(e))}function Ln(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dn(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function Un(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=Dn(t[r],e[r]);return n}function Fn(t,e,n,i=!1){const o={},s={};Object(r["g"])(s,Qr,1),t.propsDefaults=Object.create(null),Bn(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:xt(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function Vn(t,e,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=t,c=Ft(o),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;Bn(t,e,o,s)&&(l=!0);for(const s in c)e&&(Object(r["k"])(e,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=$n(u,c,s,void 0,t,!0)):delete o[s]);if(s!==c)for(const t in s)e&&Object(r["k"])(e,t)||(delete s[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["k"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const e=Object(r["e"])(a);o[e]=$n(u,c,e,h,t,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&D(t,"set","$attrs")}function Bn(t,e,n,i){const[o,s]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["z"])(u))continue;const l=e[u];let h;o&&Object(r["k"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:de(t.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(s){const e=Ft(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=$n(o,e,c,i[c],t,!Object(r["k"])(i,c))}}return c}function $n(t,e,n,i,o,s){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["p"])(t)){const{propsDefaults:r}=o;n in r?i=r[n]:(ki(o),i=r[n]=t.call(null,e),ji())}else i=t}a[0]&&(s&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Hn(t,e,n=!1){const i=e.propsCache,o=i.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!Object(r["p"])(t)){const i=t=>{u=!0;const[n,i]=Hn(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!s&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const t=Object(r["e"])(s[h]);zn(t)&&(a[t]=r["b"])}else if(s){0;for(const t in s){const e=Object(r["e"])(t);if(zn(e)){const n=s[t],i=a[e]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const t=qn(Boolean,i.type),n=qn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["k"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function zn(t){return"$"!==t[0]}function Wn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function Gn(t,e){return Wn(t)===Wn(e)}function qn(t,e){return Object(r["o"])(e)?e.findIndex(e=>Gn(e,t)):Object(r["p"])(e)&&Gn(e,t)?0:-1}const Kn=t=>"_"===t[0]||"$stable"===t,Xn=t=>Object(r["o"])(t)?t.map(ui):[ui(t)],Jn=(t,e,n)=>{const r=_e((...t)=>Xn(e(...t)),n);return r._c=!1,r},Yn=(t,e,n)=>{const i=t._ctx;for(const o in t){if(Kn(o))continue;const n=t[o];if(Object(r["p"])(n))e[o]=Jn(o,n,i);else if(null!=n){0;const t=Xn(n);e[o]=()=>t}}},Qn=(t,e)=>{const n=Xn(e);t.slots.default=()=>n},Zn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Ft(e),Object(r["g"])(e,"_",n)):Yn(e,t.slots={})}else t.slots={},e&&Qn(t,e);Object(r["g"])(t.slots,Qr,1)},tr=(t,e,n)=>{const{vnode:i,slots:o}=t;let s=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?s=!1:(Object(r["h"])(o,e),n||1!==t||delete o._):(s=!e.$stable,Yn(e,o)),a=e}else e&&(Qn(t,e),a={default:1});if(s)for(const r in o)Kn(r)||r in a||delete o[r]};function er(t,e){const n=pe;if(null===n)return t;const i=n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=r["b"]]=e[s];Object(r["p"])(t)&&(t={mounted:t,updated:t}),t.deep&&Uo(n),o.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function nr(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(A(),eo(c,n,8,[t.el,a,t,e]),x())}}function rr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ir=0;function or(t,e){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=rr(),s=new Set;let a=!1;const c=o.app={_uid:ir++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:es,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&Object(r["p"])(t.install)?(s.add(t),t.install(c,...e)):Object(r["p"])(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(r,s,u){if(!a){const l=ni(n,i);return l.appContext=o,s&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Bi(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c}};return c}}let sr=!1;const ar=t=>/svg/.test(t.namespaceURI)&&"foreignObject"!==t.tagName,cr=t=>8===t.nodeType;function ur(t){const{mt:e,p:n,o:{patchProp:i,nextSibling:o,parentNode:s,remove:a,insert:c,createComment:u}}=t,l=(t,e)=>{if(!e.hasChildNodes())return n(null,t,e),void ko();sr=!1,h(e.firstChild,t,null,null,null),ko(),sr&&console.error("Hydration completed but contains mismatches.")},h=(n,r,i,a,c,u=!1)=>{const l=cr(n)&&"["===n.data,m=()=>v(n,r,i,a,c,l),{type:b,ref:y,shapeFlag:_}=r,w=n.nodeType;r.el=n;let O=null;switch(b){case Dr:3!==w?O=m():(n.data!==r.children&&(sr=!0,n.data=r.children),O=o(n));break;case Mr:O=8!==w||l?m():o(n);break;case Ur:if(1===w){O=n;const t=!r.children.length;for(let e=0;e<r.staticCount;e++)t&&(r.children+=O.outerHTML),e===r.staticCount-1&&(r.anchor=O),O=o(O);return O}O=m();break;case Lr:O=l?p(n,r,i,a,c,u):m();break;default:if(1&_)O=1!==w||r.type.toLowerCase()!==n.tagName.toLowerCase()?m():f(n,r,i,a,c,u);else if(6&_){r.slotScopeIds=c;const t=s(n);if(e(r,t,null,i,a,ar(t),u),O=l?g(n):o(n),Ze(r)){let e;l?(e=ni(Lr),e.anchor=O?O.previousSibling:t.lastChild):e=3===n.nodeType?si(""):ni("div"),e.el=n,r.component.subTree=e}}else 64&_?O=8!==w?m():r.type.hydrate(n,r,i,a,c,u,t,d):128&_&&(O=r.type.hydrate(n,r,i,a,ar(s(n)),c,u,t,h))}return null!=y&&vr(y,null,a,r),O},f=(t,e,n,o,s,c)=>{c=c||!!e.dynamicChildren;const{type:u,props:l,patchFlag:h,shapeFlag:f,dirs:p}=e,v="input"===u&&p||"option"===u;if(v||-1!==h){if(p&&nr(e,null,n,"created"),l)if(v||!c||48&h)for(const e in l)(v&&e.endsWith("value")||Object(r["w"])(e)&&!Object(r["z"])(e))&&i(t,e,null,l[e],!1,void 0,n);else l.onClick&&i(t,"onClick",null,l.onClick,!1,void 0,n);let u;if((u=l&&l.onVnodeBeforeMount)&&gr(u,n,e),p&&nr(e,null,n,"beforeMount"),((u=l&&l.onVnodeMounted)||p)&&Ue(()=>{u&&gr(u,n,e),p&&nr(e,null,n,"mounted")},o),16&f&&(!l||!l.innerHTML&&!l.textContent)){let r=d(t.firstChild,e,t,n,o,s,c);while(r){sr=!0;const t=r;r=r.nextSibling,a(t)}}else 8&f&&t.textContent!==e.children&&(sr=!0,t.textContent=e.children)}return t.nextSibling},d=(t,e,r,i,o,s,a)=>{a=a||!!e.dynamicChildren;const c=e.children,u=c.length;for(let l=0;l<u;l++){const e=a?c[l]:c[l]=ui(c[l]);if(t)t=h(t,e,i,o,s,a);else{if(e.type===Dr&&!e.children)continue;sr=!0,n(null,e,r,null,i,o,ar(r),s)}}return t},p=(t,e,n,r,i,a)=>{const{slotScopeIds:l}=e;l&&(i=i?i.concat(l):l);const h=s(t),f=d(o(t),e,h,n,r,i,a);return f&&cr(f)&&"]"===f.data?o(e.anchor=f):(sr=!0,c(e.anchor=u("]"),h,f),f)},v=(t,e,r,i,c,u)=>{if(sr=!0,e.el=null,u){const e=g(t);while(1){const n=o(t);if(!n||n===e)break;a(n)}}const l=o(t),h=s(t);return a(t),n(null,e,h,l,r,i,ar(h),c),l},g=t=>{let e=0;while(t)if(t=o(t),t&&cr(t)&&("["===t.data&&e++,"]"===t.data)){if(0===e)return o(t);e--}return t};return[l,h]}function lr(){}const hr=Ue;function fr(t){return pr(t)}function dr(t){return pr(t,ur)}function pr(t,e){lr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:d,setScopeId:p=r["d"],cloneNode:v,insertStaticContent:g}=t,m=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Jr(t,e)&&(r=K(t),H(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Dr:b(t,e,n,r);break;case Mr:y(t,e,n,r);break;case Ur:null==t&&_(e,n,r,s);break;case Lr:P(t,e,n,r,i,o,s,a,c);break;default:1&h?E(t,e,n,r,i,o,s,a,c):6&h?N(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,J)}null!=l&&i&&vr(l,t&&t.ref,o,e||t,!e)},b=(t,e,n,r)=>{if(null==t)i(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},y=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r)},w=({el:t,anchor:e},n,r)=>{let o;while(t&&t!==e)o=d(t),i(t,n,r),t=o;i(e,n,r)},O=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=d(t),o(t),t=n;o(e)},E=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?T(e,n,r,i,o,s,a,c):j(t,e,i,o,s,a,c)},T=(t,e,n,o,c,u,l,f)=>{let d,p;const{type:g,props:m,shapeFlag:b,transition:y,patchFlag:_,dirs:w}=t;if(t.el&&void 0!==v&&-1===_)d=t.el=v(t.el);else{if(d=t.el=a(t.type,u,m&&m.is,m),8&b?h(d,t.children):16&b&&k(t.children,d,null,o,c,u&&"foreignObject"!==g,l,f),w&&nr(t,null,o,"created"),m){for(const e in m)"value"===e||Object(r["z"])(e)||s(d,e,null,m[e],u,t.children,o,c,q);"value"in m&&s(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&gr(p,o,t)}S(d,t,t.scopeId,l,o)}w&&nr(t,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(d),i(d,e,n),((p=m&&m.onVnodeMounted)||O||w)&&hr(()=>{p&&gr(p,o,t),O&&y.enter(d),w&&nr(t,null,o,"mounted")},c)},S=(t,e,n,r,i)=>{if(n&&p(t,n),r)for(let o=0;o<r.length;o++)p(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;S(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},k=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?li(t[u]):ui(t[u]);m(null,c,e,n,r,i,o,s,a)}},j=(t,e,n,i,o,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r["b"],v=e.props||r["b"];let g;(g=v.onVnodeBeforeUpdate)&&gr(g,n,e,t),d&&nr(e,t,n,"beforeUpdate");const m=o&&"foreignObject"!==e.type;if(f?C(t.dynamicChildren,f,u,n,i,m,a):c||F(t,e,u,null,n,i,m,a,!1),l>0){if(16&l)R(u,e,p,v,n,i,o);else if(2&l&&p.class!==v.class&&s(u,"class",null,v.class,o),4&l&&s(u,"style",p.style,v.style,o),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=v[a];l===c&&"value"!==a||s(u,a,c,l,o,t.children,n,i,q)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||R(u,e,p,v,n,i,o);((g=v.onVnodeUpdated)||d)&&hr(()=>{g&&gr(g,n,e,t),d&&nr(e,t,n,"updated")},i)},C=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Lr||!Jr(c,u)||70&c.shapeFlag)?f(c.el):n;m(c,u,l,null,r,i,o,s,!0)}},R=(t,e,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&s(t,u,h,l,c,e.children,o,a,q)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||s(t,u,n[u],null,c,e.children,o,a,q);"value"in i&&s(t,"value",n.value,i.value)}},P=(t,e,n,r,o,s,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:v}=e;v&&(u=u?u.concat(v):v),null==t?(i(h,n,r),i(f,n,r),k(e.children,n,f,o,s,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(C(t.dynamicChildren,p,n,o,s,a,u),(null!=e.key||o&&e===o.subTree)&&mr(t,e,!0)):F(t,e,n,f,o,s,a,u,l)},N=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):L(e,n,r,i,o,s,c):D(t,e,c)},L=(t,e,n,r,i,o,s)=>{const a=t.component=Ii(t,r,i);if(nn(t)&&(a.ctx.renderer=J),Pi(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=ni(Mr);y(null,t,e,n)}}else M(a,t,e,n,i,o,s)},D=(t,e,n)=>{const r=e.component=t.component;if(Te(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,e,n);r.next=e,Oo(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,i,o,s,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:l,vnode:h}=t,d=n;0,u.allowRecurse=!1,n?(n.el=h.el,U(t,n,a)):n=h,i&&Object(r["n"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&gr(e,l,n,h),u.allowRecurse=!0;const p=we(t);0;const v=t.subTree;t.subTree=p,m(v,p,f(v.el),K(v),t,o,s),n.el=p.el,null===d&&ke(t,p.el),c&&hr(c,o),(e=n.props&&n.props.onVnodeUpdated)&&hr(()=>gr(e,l,n,h),o)}else{let a;const{el:c,props:l}=e,{bm:h,m:f,parent:d}=t,p=Ze(e);if(u.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&gr(a,d,e),u.allowRecurse=!0,c&&Q){const n=()=>{t.subTree=we(t),Q(c,t.subTree,t,o,null)};p?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=we(t);0,m(null,r,n,i,t,o,s),e.el=r.el}if(f&&hr(f,o),!p&&(a=l&&l.onVnodeMounted)){const t=e;hr(()=>gr(a,d,t),o)}256&e.shapeFlag&&t.a&&hr(t.a,o),t.isMounted=!0,e=n=i=null}},u=new I(c,()=>_o(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,u.allowRecurse=l.allowRecurse=!0,l()},U=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,Vn(t,e.props,r,n),tr(t,e.children,n),A(),So(void 0,t.update),x()},F=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void B(u,f,n,r,i,o,s,a,c);if(256&d)return void V(u,f,n,r,i,o,s,a,c)}8&p?(16&l&&q(u,i,o),f!==u&&h(n,f)):16&l?16&p?B(u,f,n,r,i,o,s,a,c):q(u,i,o,!0):(8&l&&h(n,""),16&p&&k(f,n,r,i,o,s,a,c))},V=(t,e,n,i,o,s,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?li(e[d]):ui(e[d]);m(t[d],r,n,null,o,s,a,c,u)}l>h?q(t,o,s,!0,!1,f):k(e,n,i,o,s,a,c,u,f)},B=(t,e,n,i,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?li(e[l]):ui(e[l]);if(!Jr(r,i))break;m(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?li(e[d]):ui(e[d]);if(!Jr(r,i))break;m(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:i;while(l<=d)m(null,e[l]=u?li(e[l]):ui(e[l]),n,r,o,s,a,c,u),l++}}else if(l>d)while(l<=f)H(t[l],o,s,!0),l++;else{const p=l,v=l,g=new Map;for(l=v;l<=d;l++){const t=e[l]=u?li(e[l]):ui(e[l]);null!=t.key&&g.set(t.key,l)}let b,y=0;const _=d-v+1;let w=!1,O=0;const E=new Array(_);for(l=0;l<_;l++)E[l]=0;for(l=p;l<=f;l++){const r=t[l];if(y>=_){H(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(b=v;b<=d;b++)if(0===E[b-v]&&Jr(r,e[b])){i=b;break}void 0===i?H(r,o,s,!0):(E[i-v]=l+1,i>=O?O=i:w=!0,m(r,e[i],n,null,o,s,a,c,u),y++)}const I=w?br(E):r["a"];for(b=I.length-1,l=_-1;l>=0;l--){const t=v+l,r=e[t],f=t+1<h?e[t+1].el:i;0===E[l]?m(null,r,n,f,o,s,a,c,u):w&&(b<0||l!==I[b]?$(r,n,f,2):b--)}}},$=(t,e,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void $(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,J);if(a===Lr){i(s,e,n);for(let t=0;t<u.length;t++)$(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Ur)return void w(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),i(s,e,n),hr(()=>c.enter(s),o);else{const{leave:t,delayLeave:r,afterLeave:o}=c,a=()=>i(s,e,n),u=()=>{t(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,e,n)},H=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&vr(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Ze(t);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&gr(v,e,t),6&l)G(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&nr(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,J,r):u&&(o!==Lr||h>0&&64&h)?q(u,e,n,!1,!0):(o===Lr&&384&h||!i&&16&l)&&q(c,e,n),r&&z(t)}(p&&(v=s&&s.onVnodeUnmounted)||d)&&hr(()=>{v&&gr(v,e,t),d&&nr(t,null,e,"unmounted")},n)},z=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Lr)return void W(n,r);if(e===Ur)return void O(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},W=(t,e)=>{let n;while(t!==e)n=d(t),o(t),t=n;o(e)},G=(t,e,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=t;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,H(a,t,e,n)),c&&hr(c,e),hr(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},q=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)H(t[s],e,n,r,i)},K=t=>6&t.shapeFlag?K(t.component.subTree):128&t.shapeFlag?t.suspense.next():d(t.anchor||t.el),X=(t,e,n)=>{null==t?e._vnode&&H(e._vnode,null,null,!0):m(e._vnode||null,t,e,null,null,null,n),ko(),e._vnode=t},J={p:m,um:H,m:$,r:z,mt:L,mc:k,pc:F,pbc:C,n:K,o:t};let Y,Q;return e&&([Y,Q]=e(J)),{render:X,hydrate:Y,createApp:or(X,Y)}}function vr(t,e,n,i,o=!1){if(Object(r["o"])(t))return void t.forEach((t,s)=>vr(t,e&&(Object(r["o"])(e)?e[s]:e),n,i,o));if(Ze(i)&&!o)return;const s=4&i.shapeFlag?Bi(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Wt(l)&&(l.value=null)),Object(r["D"])(u)){const t=()=>{h[u]=a,Object(r["k"])(f,u)&&(f[u]=a)};a?(t.id=-1,hr(t,n)):t()}else if(Wt(u)){const t=()=>{u.value=a};a?(t.id=-1,hr(t,n)):t()}else Object(r["p"])(u)&&to(u,c,12,[a,h])}function gr(t,e,n,r=null){eo(t,e,7,[n,r])}function mr(t,e,n=!1){const i=t.children,o=e.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const t=i[r];let e=o[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[r]=li(o[r]),e.el=t.el),n||mr(t,e))}}function br(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const yr=t=>t.__isTeleport,_r=t=>t&&(t.disabled||""===t.disabled),wr=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,Or=(t,e)=>{const n=t&&t.to;if(Object(r["D"])(n)){if(e){const t=e(n);return t}return null}return n},Er={__isTeleport:!0,process(t,e,n,r,i,o,s,a,c,u){const{mc:l,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:v,createComment:g}}=u,m=_r(e.props);let{shapeFlag:b,children:y,dynamicChildren:_}=e;if(null==t){const t=e.el=v(""),u=e.anchor=v("");d(t,n,r),d(u,n,r);const h=e.target=Or(e.props,p),f=e.targetAnchor=v("");h&&(d(f,h),s=s||wr(h));const g=(t,e)=>{16&b&&l(y,t,e,i,o,s,a,c)};m?g(n,u):h&&g(h,f)}else{e.el=t.el;const r=e.anchor=t.anchor,l=e.target=t.target,d=e.targetAnchor=t.targetAnchor,v=_r(t.props),g=v?n:l,b=v?r:d;if(s=s||wr(l),_?(f(t.dynamicChildren,_,g,i,o,s,a),mr(t,e,!0)):c||h(t,e,g,b,i,o,s,a,!1),m)v||Ir(e,n,r,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=Or(e.props,p);t&&Ir(e,t,null,u,0)}else v&&Ir(e,l,d,u,1)}},remove(t,e,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:f}=t;if(h&&o(l),(s||!_r(f))&&(o(u),16&a))for(let d=0;d<c.length;d++){const t=c[d];i(t,e,n,!0,!!t.dynamicChildren)}},move:Ir,hydrate:Tr};function Ir(t,e,n,{o:{insert:r},m:i},o=2){0===o&&r(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:c,children:u,props:l}=t,h=2===o;if(h&&r(s,e,n),(!h||_r(l))&&16&c)for(let f=0;f<u.length;f++)i(u[f],e,n,2);h&&r(a,e,n)}function Tr(t,e,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:c}},u){const l=e.target=Or(e.props,c);if(l){const c=l._lpa||l.firstChild;16&e.shapeFlag&&(_r(e.props)?(e.anchor=u(s(t),e,a(t),n,r,i,o),e.targetAnchor=c):(e.anchor=s(t),e.targetAnchor=u(c,e,l,n,r,i,o)),l._lpa=e.targetAnchor&&s(e.targetAnchor))}return e.anchor&&s(e.anchor)}const Sr=Er,kr="components",jr="directives";function Cr(t,e){return Pr(kr,t,!0,e)||t}const Ar=Symbol();function Rr(t){return Object(r["D"])(t)?Pr(kr,t,!1)||t:t||Ar}function xr(t){return Pr(jr,t)}function Pr(t,e,n=!0,i=!1){const o=pe||Ti;if(o){const n=o.type;if(t===kr){const t=zi(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const s=Nr(o[t]||n[t],e)||Nr(o.appContext[t],e);return!s&&i?n:s}}function Nr(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Lr=Symbol(void 0),Dr=Symbol(void 0),Mr=Symbol(void 0),Ur=Symbol(void 0),Fr=[];let Vr=null;function Br(t=!1){Fr.push(Vr=t?null:[])}function $r(){Fr.pop(),Vr=Fr[Fr.length-1]||null}let Hr,zr=1;function Wr(t){zr+=t}function Gr(t){return t.dynamicChildren=zr>0?Vr||r["a"]:null,$r(),zr>0&&Vr&&Vr.push(t),t}function qr(t,e,n,r,i,o){return Gr(ei(t,e,n,r,i,o,!0))}function Kr(t,e,n,r,i){return Gr(ni(t,e,n,r,i,!0))}function Xr(t){return!!t&&!0===t.__v_isVNode}function Jr(t,e){return t.type===e.type&&t.key===e.key}function Yr(t){Hr=t}const Qr="__vInternal",Zr=({key:t})=>null!=t?t:null,ti=({ref:t})=>null!=t?Object(r["D"])(t)||Wt(t)||Object(r["p"])(t)?{i:pe,r:t}:t:null;function ei(t,e=null,n=null,i=0,o=null,s=(t===Lr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zr(e),ref:e&&ti(e),scopeId:ve,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(hi(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),zr>0&&!a&&Vr&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Vr.push(u),u}const ni=ri;function ri(t,e=null,n=null,i=0,o=null,s=!1){if(t&&t!==Ar||(t=Mr),Xr(t)){const r=oi(t,e,!0);return n&&hi(r,n),r}if(Gi(t)&&(t=t.__vccOpts),e){e=ii(e);let{class:t,style:n}=e;t&&!Object(r["D"])(t)&&(e.class=Object(r["I"])(t)),Object(r["v"])(n)&&(Ut(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["K"])(n))}const a=Object(r["D"])(t)?1:je(t)?128:yr(t)?64:Object(r["v"])(t)?4:Object(r["p"])(t)?2:0;return ei(t,e,n,i,o,a,s,!0)}function ii(t){return t?Ut(t)||Qr in t?Object(r["h"])({},t):t:null}function oi(t,e,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=t,c=e?fi(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zr(c),ref:e&&e.ref?n&&o?Object(r["o"])(o)?o.concat(ti(e)):[o,ti(e)]:ti(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lr?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&oi(t.ssContent),ssFallback:t.ssFallback&&oi(t.ssFallback),el:t.el,anchor:t.anchor};return u}function si(t=" ",e=0){return ni(Dr,null,t,e)}function ai(t,e){const n=ni(Ur,null,t);return n.staticCount=e,n}function ci(t="",e=!1){return e?(Br(),Kr(Mr,null,t)):ni(Mr,null,t)}function ui(t){return null==t||"boolean"===typeof t?ni(Mr):Object(r["o"])(t)?ni(Lr,null,t.slice()):"object"===typeof t?li(t):ni(Dr,null,String(t))}function li(t){return null===t.el||t.memo?t:oi(t)}function hi(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),hi(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Qr in e?3===r&&pe&&(1===pe.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=pe}}else Object(r["p"])(e)?(e={default:e,_ctx:pe},n=32):(e=String(e),64&i?(n=16,e=[si(e)]):n=8);t.children=e,t.shapeFlag|=n}function fi(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["I"])([e.class,i.class]));else if("style"===t)e.style=Object(r["K"])([e.style,i.style]);else if(Object(r["w"])(t)){const n=e[t],r=i[t];n!==r&&(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}function di(t,e,n,i){let o;const s=n&&n[i];if(Object(r["o"])(t)||Object(r["D"])(t)){o=new Array(t.length);for(let n=0,r=t.length;n<r;n++)o[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,s&&s[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}function pi(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(Object(r["o"])(i))for(let e=0;e<i.length;e++)t[i[e].name]=i[e].fn;else i&&(t[i.name]=i.fn)}return t}function vi(t,e,n={},r,i){if(pe.isCE)return ni("slot","default"===e?null:{name:e},r&&r());let o=t[e];o&&o._c&&(o._d=!1),Br();const s=o&&gi(o(n)),a=Kr(Lr,{key:n.key||"_"+e},s||(r?r():[]),s&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function gi(t){return t.some(t=>!Xr(t)||t.type!==Mr&&!(t.type===Lr&&!gi(t.children)))?t:null}function mi(t){const e={};for(const n in t)e[Object(r["N"])(n)]=t[n];return e}const bi=t=>t?Ci(t)?Bi(t)||t.proxy:bi(t.parent):null,yi=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bi(t.parent),$root:t=>bi(t.root),$emit:t=>t.emit,$options:t=>An(t),$forceUpdate:t=>()=>_o(t.update),$nextTick:t=>bo.bind(t.proxy),$watch:t=>Do.bind(t)}),_i={get({_:t},e){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 0:return i[e];case 1:return o[e];case 3:return n[e];case 2:return s[e]}else{if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=0,i[e];if(o!==r["b"]&&Object(r["k"])(o,e))return a[e]=1,o[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=2,s[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=3,n[e];Tn&&(a[e]=4)}}const h=yi[e];let f,d;return h?("$attrs"===e&&P(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=3,n[e]):(d=u.config.globalProperties,Object(r["k"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:i,setupState:o,ctx:s}=t;if(o!==r["b"]&&Object(r["k"])(o,e))o[e]=n;else if(i!==r["b"]&&Object(r["k"])(i,e))i[e]=n;else if(Object(r["k"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(yi,a)||Object(r["k"])(o.config.globalProperties,a)}};const wi=Object(r["h"])({},_i,{get(t,e){if(e!==Symbol.unscopables)return _i.get(t,e,t)},has(t,e){const n="_"!==e[0]&&!Object(r["q"])(e);return n}});const Oi=rr();let Ei=0;function Ii(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||Oi,a={uid:Ei++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hn(i,o),emitsOptions:fe(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=he.bind(null,a),t.ce&&t.ce(a),a}let Ti=null;const Si=()=>Ti||pe,ki=t=>{Ti=t,t.scope.on()},ji=()=>{Ti&&Ti.scope.off(),Ti=null};function Ci(t){return 4&t.vnode.shapeFlag}let Ai,Ri,xi=!1;function Pi(t,e=!1){xi=e;const{props:n,children:r}=t.vnode,i=Ci(t);Fn(t,n,i,e),Zn(t,r);const o=i?Ni(t,e):void 0;return xi=!1,o}function Ni(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vt(new Proxy(t.ctx,_i));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?Vi(t):null;ki(t),A();const o=to(i,t,0,[t.props,n]);if(x(),ji(),Object(r["y"])(o)){if(o.then(ji,ji),e)return o.then(n=>{Li(t,n,e)}).catch(e=>{no(e,t,0)});t.asyncDep=o}else Li(t,o,e)}else Ui(t,e)}function Li(t,e,n){Object(r["p"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["v"])(e)&&(t.setupState=Zt(e)),Ui(t,n)}function Di(t){Ai=t,Ri=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,wi))}}const Mi=()=>!Ai;function Ui(t,e,n){const i=t.type;if(!t.render){if(!e&&Ai&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=Ai(e,c)}}t.render=i.render||r["d"],Ri&&Ri(t)}ki(t),A(),Sn(t),x(),ji()}function Fi(t){return new Proxy(t.attrs,{get(e,n){return P(t,"get","$attrs"),e[n]}})}function Vi(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Fi(t))},slots:t.slots,emit:t.emit,expose:e}}function Bi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zt(Vt(t.exposed)),{get(e,n){return n in e?e[n]:n in yi?yi[n](t):void 0}}))}const $i=/(?:^|[-_])(\w)/g,Hi=t=>t.replace($i,t=>t.toUpperCase()).replace(/[-_]/g,"");function zi(t){return Object(r["p"])(t)&&t.displayName||t.name}function Wi(t,e,n=!1){let r=zi(e);if(!r&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(r=t[1])}if(!r&&t&&t.parent){const n=t=>{for(const n in t)if(t[n]===e)return n};r=n(t.components||t.parent.type.components)||n(t.appContext.components)}return r?Hi(r):n?"App":"Anonymous"}function Gi(t){return Object(r["p"])(t)&&"__vccOpts"in t}const qi=[];function Ki(t,...e){A();const n=qi.length?qi[qi.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=Xi();if(r)to(r,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:t})=>`at <${Wi(n,t.type)}>`).join("\n"),i]);else{const n=["[Vue warn]: "+t,...e];i.length&&n.push("\n",...Ji(i)),console.warn(...n)}x()}function Xi(){let t=qi[qi.length-1];if(!t)return[];const e=[];while(t){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function Ji(t){const e=[];return t.forEach((t,n)=>{e.push(...0===n?[]:["\n"],...Yi(t))}),e}function Yi({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=!!t.component&&null==t.component.parent,i=" at <"+Wi(t.component,t.type,r),o=">"+n;return t.props?[i,...Qi(t.props),o]:[i+o]}function Qi(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(n=>{e.push(...Zi(n,t[n]))}),n.length>3&&e.push(" ..."),e}function Zi(t,e,n){return Object(r["D"])(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?n?e:[`${t}=${e}`]:Wt(e)?(e=Zi(t,Ft(e.value),!0),n?e:[t+"=Ref<",e,">"]):Object(r["p"])(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Ft(e),n?e:[t+"=",e])}function to(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){no(o,e,n)}return i}function eo(t,e,n,i){if(Object(r["p"])(t)){const o=to(t,e,n,i);return o&&Object(r["y"])(o)&&o.catch(t=>{no(t,e,n)}),o}const o=[];for(let r=0;r<t.length;r++)o.push(eo(t[r],e,n,i));return o}function no(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const s=e.appContext.config.errorHandler;if(s)return void to(s,null,10,[t,i,o])}ro(t,n,i,r)}function ro(t,e,n,r=!0){console.error(t)}let io=!1,oo=!1;const so=[];let ao=0;const co=[];let uo=null,lo=0;const ho=[];let fo=null,po=0;const vo=Promise.resolve();let go=null,mo=null;function bo(t){const e=go||vo;return t?e.then(this?t.bind(this):t):e}function yo(t){let e=ao+1,n=so.length;while(e<n){const r=e+n>>>1,i=jo(so[r]);i<t?e=r+1:n=r}return e}function _o(t){so.length&&so.includes(t,io&&t.allowRecurse?ao+1:ao)||t===mo||(null==t.id?so.push(t):so.splice(yo(t.id),0,t),wo())}function wo(){io||oo||(oo=!0,go=vo.then(Co))}function Oo(t){const e=so.indexOf(t);e>ao&&so.splice(e,1)}function Eo(t,e,n,i){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),wo()}function Io(t){Eo(t,uo,co,lo)}function To(t){Eo(t,fo,ho,po)}function So(t,e=null){if(co.length){for(mo=e,uo=[...new Set(co)],co.length=0,lo=0;lo<uo.length;lo++)uo[lo]();uo=null,lo=0,mo=null,So(t,e)}}function ko(t){if(ho.length){const t=[...new Set(ho)];if(ho.length=0,fo)return void fo.push(...t);for(fo=t,fo.sort((t,e)=>jo(t)-jo(e)),po=0;po<fo.length;po++)fo[po]();fo=null,po=0}}const jo=t=>null==t.id?1/0:t.id;function Co(t){oo=!1,io=!0,So(t),so.sort((t,e)=>jo(t)-jo(e));r["d"];try{for(ao=0;ao<so.length;ao++){const t=so[ao];t&&!1!==t.active&&to(t,null,14)}}finally{ao=0,so.length=0,ko(t),io=!1,go=null,(so.length||co.length||ho.length)&&Co(t)}}function Ao(t,e){return Lo(t,null,e)}function Ro(t,e){return Lo(t,null,{flush:"post"})}function xo(t,e){return Lo(t,null,{flush:"sync"})}const Po={};function No(t,e,n){return Lo(t,e,n)}function Lo(t,e,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=Ti;let u,l,h=!1,f=!1;if(Wt(t)?(u=()=>t.value,h=!!t._shallow):Dt(t)?(u=()=>t,i=!0):Object(r["o"])(t)?(f=!0,h=t.some(Dt),u=()=>t.map(t=>Wt(t)?t.value:Dt(t)?Uo(t):Object(r["p"])(t)?to(t,c,2):void 0)):u=Object(r["p"])(t)?e?()=>to(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),eo(t,c,3,[d])}:r["d"],e&&i){const t=u;u=()=>Uo(t())}let d=t=>{l=m.onStop=()=>{to(t,c,4)}};if(xi)return d=r["d"],e?n&&eo(e,c,3,[u(),f?[]:void 0,d]):u(),r["d"];let p=f?[]:Po;const v=()=>{if(m.active)if(e){const t=m.run();(i||h||(f?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),eo(e,c,3,[t,p===Po?void 0:p,d]),p=t)}else m.run()};let g;v.allowRecurse=!!e,g="sync"===o?v:"post"===o?()=>hr(v,c&&c.suspense):()=>{!c||c.isMounted?Io(v):v()};const m=new I(u,g);return e?n?v():p=m.run():"post"===o?hr(m.run.bind(m),c&&c.suspense):m.run(),()=>{m.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,m)}}function Do(t,e,n){const i=this.proxy,o=Object(r["D"])(t)?t.includes(".")?Mo(i,t):()=>i[t]:t.bind(i,i);let s;Object(r["p"])(e)?s=e:(s=e.handler,n=e);const a=Ti;ki(this);const c=Lo(o,s.bind(i),n);return a?ki(a):ji(),c}function Mo(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Uo(t,e){if(!Object(r["v"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Wt(t))Uo(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)Uo(t[n],e);else if(Object(r["B"])(t)||Object(r["t"])(t))t.forEach(t=>{Uo(t,e)});else if(Object(r["x"])(t))for(const n in t)Uo(t[n],e);return t}function Fo(){return null}function Vo(){return null}function Bo(t){0}function $o(t,e){return null}function Ho(){return Wo().slots}function zo(){return Wo().attrs}function Wo(){const t=Si();return t.setupContext||(t.setupContext=Vi(t))}function Go(t,e){const n=Object(r["o"])(t)?t.reduce((t,e)=>(t[e]={},t),{}):t;for(const i in e){const t=n[i];t?Object(r["o"])(t)||Object(r["p"])(t)?n[i]={type:t,default:e[i]}:t.default=e[i]:null===t&&(n[i]={default:e[i]})}return n}function qo(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Ko(t){const e=Si();let n=t();return ji(),Object(r["y"])(n)&&(n=n.catch(t=>{throw ki(e),t})),[n,()=>ki(e)]}function Xo(t,e,n){const i=arguments.length;return 2===i?Object(r["v"])(e)&&!Object(r["o"])(e)?Xr(e)?ni(t,null,[e]):ni(t,e):ni(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Xr(n)&&(n=[n]),ni(t,e,n))}const Jo=Symbol(""),Yo=()=>{{const t=Be(Jo);return t||Ki("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Qo(){return void 0}function Zo(t,e,n,r){const i=n[r];if(i&&ts(i,t))return i;const o=e();return o.memo=t.slice(),n[r]=o}function ts(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(n[r]!==e[r])return!1;return zr>0&&Vr&&Vr.push(t),!0}const es="3.2.21",ns={createComponentInstance:Ii,setupComponent:Pi,renderComponentRoot:we,setCurrentRenderingInstance:ge,isVNode:Xr,normalizeVNode:ui},rs=ns,is=null,os=null,ss="http://www.w3.org/2000/svg",as="undefined"!==typeof document?document:null,cs=new Map,us={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?as.createElementNS(ss,t):as.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let o=cs.get(t);if(!o){const e=as.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,o=e.content,r){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}cs.set(t,o)}return e.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ls(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hs(t,e,n){const i=t.style,o=Object(r["D"])(n);if(n&&!o){for(const t in n)ds(i,t,n[t]);if(e&&!Object(r["D"])(e))for(const t in e)null==n[t]&&ds(i,t,"")}else{const r=i.display;o?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const fs=/\s*!important$/;function ds(t,e,n){if(Object(r["o"])(n))n.forEach(n=>ds(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=gs(t,e);fs.test(n)?t.setProperty(Object(r["l"])(i),n.replace(fs,""),"important"):t[i]=n}}const ps=["Webkit","Moz","ms"],vs={};function gs(t,e){const n=vs[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return vs[e]=i;i=Object(r["f"])(i);for(let r=0;r<ps.length;r++){const n=ps[r]+i;if(n in t)return vs[e]=n}return e}const ms="http://www.w3.org/1999/xlink";function bs(t,e,n,i,o){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(ms,e.slice(6,e.length)):t.setAttributeNS(ms,e,n);else{const i=Object(r["C"])(e);null==n||i&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ys(t,e,n,i,o,s,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,o,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["m"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let _s=Date.now,ws=!1;if("undefined"!==typeof window){_s()>document.createEvent("Event").timeStamp&&(_s=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ws=!!(t&&Number(t[1])<=53)}let Os=0;const Es=Promise.resolve(),Is=()=>{Os=0},Ts=()=>Os||(Es.then(Is),Os=_s());function Ss(t,e,n,r){t.addEventListener(e,n,r)}function ks(t,e,n,r){t.removeEventListener(e,n,r)}function js(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=As(e);if(r){const s=o[e]=Rs(r,i);Ss(t,n,s,a)}else s&&(ks(t,n,s,a),o[e]=void 0)}}const Cs=/(?:Once|Passive|Capture)$/;function As(t){let e;if(Cs.test(t)){let n;e={};while(n=t.match(Cs))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function Rs(t,e){const n=t=>{const r=t.timeStamp||_s();(ws||r>=n.attached-1)&&eo(xs(t,n.value),e,5,[t])};return n.value=t,n.attached=Ts(),n}function xs(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const Ps=/^on[a-z]/,Ns=(t,e,n,i,o=!1,s,a,c,u)=>{"class"===e?ls(t,i,o):"style"===e?hs(t,n,i):Object(r["w"])(e)?Object(r["u"])(e)||js(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Ls(t,e,i,o))?ys(t,e,i,s,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),bs(t,e,i,o))};function Ls(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&Ps.test(e)&&Object(r["p"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Ps.test(e)||!Object(r["D"])(n))&&e in t))))}function Ds(t,e){const n=Qe(t);class r extends Fs{constructor(t){super(n,t,e)}}return r.def=n,r}const Ms=t=>Ds(t,Ga),Us="undefined"!==typeof HTMLElement?HTMLElement:class{};class Fs extends Us{constructor(t,e={},n){super(),this._def=t,this._props=e,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,bo(()=>{this._connected||(Wa(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver(t=>{for(const e of t)this._setAttr(e.attributeName)}).observe(this,{attributes:!0});const t=t=>{const{props:e,styles:n}=t,i=!Object(r["o"])(e),o=e?i?Object.keys(e):e:[];let s;if(i)for(const a in this._props){const t=e[a];(t===Number||t&&t.type===Number)&&(this._props[a]=Object(r["O"])(this._props[a]),(s||(s=Object.create(null)))[a]=!0)}this._numberProps=s;for(const r of Object.keys(this))"_"!==r[0]&&this._setProp(r,this[r],!0,!1);for(const a of o.map(r["e"]))Object.defineProperty(this,a,{get(){return this._getProp(a)},set(t){this._setProp(a,t)}});this._applyStyles(n),this._update()},e=this._def.__asyncLoader;e?e().then(t):t(this._def)}_setAttr(t){let e=this.getAttribute(t);this._numberProps&&this._numberProps[t]&&(e=Object(r["O"])(e)),this._setProp(Object(r["e"])(t),e,!1)}_getProp(t){return this._props[t]}_setProp(t,e,n=!0,i=!0){e!==this._props[t]&&(this._props[t]=e,i&&this._instance&&this._update(),n&&(!0===e?this.setAttribute(Object(r["l"])(t),""):"string"===typeof e||"number"===typeof e?this.setAttribute(Object(r["l"])(t),e+""):e||this.removeAttribute(Object(r["l"])(t))))}_update(){Wa(this._createVNode(),this.shadowRoot)}_createVNode(){const t=ni(this._def,Object(r["h"])({},this._props));return this._instance||(t.ce=t=>{this._instance=t,t.isCE=!0,t.emit=(t,...e)=>{this.dispatchEvent(new CustomEvent(t,{detail:e}))};let e=this;while(e=e&&(e.parentNode||e.host))if(e instanceof Fs){t.parent=e._instance;break}}),t}_applyStyles(t){t&&t.forEach(t=>{const e=document.createElement("style");e.textContent=t,this.shadowRoot.appendChild(e)})}}function Vs(t="$style"){{const e=Si();if(!e)return r["b"];const n=e.type.__cssModules;if(!n)return r["b"];const i=n[t];return i||r["b"]}}function Bs(t){const e=Si();if(!e)return;const n=()=>$s(e.subTree,t(e.proxy));Ro(n),gn(()=>{const t=new MutationObserver(n);t.observe(e.subTree.el.parentNode,{childList:!0}),_n(()=>t.disconnect())})}function $s(t,e){if(128&t.shapeFlag){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{$s(n.activeBranch,e)})}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)Hs(t.el,e);else if(t.type===Lr)t.children.forEach(t=>$s(t,e));else if(t.type===Ur){let{el:n,anchor:r}=t;while(n){if(Hs(n,e),n===r)break;n=n.nextSibling}}}function Hs(t,e){if(1===t.nodeType){const n=t.style;for(const t in e)n.setProperty("--"+t,e[t])}}const zs="transition",Ws="animation",Gs=(t,{slots:e})=>Xo(We,Ys(t),e);Gs.displayName="Transition";const qs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ks=Gs.props=Object(r["h"])({},We.props,qs),Xs=(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)},Js=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function Ys(t){const e={};for(const r in t)r in qs||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,v=Qs(o),g=v&&v[0],m=v&&v[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:E=b,onAppear:I=y,onAppearCancelled:T=_}=e,S=(t,e,n)=>{ea(t,e?h:c),ea(t,e?l:a),n&&n()},k=(t,e)=>{ea(t,p),ea(t,d),e&&e()},j=t=>(e,n)=>{const r=t?I:y,o=()=>S(e,t,n);Xs(r,[e,o]),na(()=>{ea(e,t?u:s),ta(e,t?h:c),Js(r)||ia(e,i,g,o)})};return Object(r["h"])(e,{onBeforeEnter(t){Xs(b,[t]),ta(t,s),ta(t,a)},onBeforeAppear(t){Xs(E,[t]),ta(t,u),ta(t,l)},onEnter:j(!1),onAppear:j(!0),onLeave(t,e){const n=()=>k(t,e);ta(t,f),ca(),ta(t,d),na(()=>{ea(t,f),ta(t,p),Js(w)||ia(t,i,m,n)}),Xs(w,[t,n])},onEnterCancelled(t){S(t,!1),Xs(_,[t])},onAppearCancelled(t){S(t,!0),Xs(T,[t])},onLeaveCancelled(t){k(t),Xs(O,[t])}})}function Qs(t){if(null==t)return null;if(Object(r["v"])(t))return[Zs(t.enter),Zs(t.leave)];{const e=Zs(t);return[e,e]}}function Zs(t){const e=Object(r["O"])(t);return e}function ta(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function ea(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function na(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ra=0;function ia(t,e,n,r){const i=t._endId=++ra,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=oa(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function oa(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(zs+"Delay"),o=r(zs+"Duration"),s=sa(i,o),a=r(Ws+"Delay"),c=r(Ws+"Duration"),u=sa(a,c);let l=null,h=0,f=0;e===zs?s>0&&(l=zs,h=s,f=o.length):e===Ws?u>0&&(l=Ws,h=u,f=c.length):(h=Math.max(s,u),l=h>0?s>u?zs:Ws:null,f=l?l===zs?o.length:c.length:0);const d=l===zs&&/\b(transform|all)(,|$)/.test(n[zs+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function sa(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>aa(e)+aa(t[n])))}function aa(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ca(){return document.body.offsetHeight}const ua=new WeakMap,la=new WeakMap,ha={name:"TransitionGroup",props:Object(r["h"])({},Ks,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Si(),r=$e();let i,o;return bn(()=>{if(!i.length)return;const e=t.moveClass||(t.name||"v")+"-move";if(!ga(i[0].el,n.vnode.el,e))return;i.forEach(da),i.forEach(pa);const r=i.filter(va);ca(),r.forEach(t=>{const n=t.el,r=n.style;ta(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,ea(n,e))};n.addEventListener("transitionend",i)})}),()=>{const s=Ft(t),a=Ys(s);let c=s.tag||Lr;i=o,o=e.default?Ye(e.default()):[];for(let t=0;t<o.length;t++){const e=o[t];null!=e.key&&Je(e,qe(e,a,r,n))}if(i)for(let t=0;t<i.length;t++){const e=i[t];Je(e,qe(e,a,r,n)),ua.set(e,e.el.getBoundingClientRect())}return ni(c,null,o)}}},fa=ha;function da(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function pa(t){la.set(t,t.el.getBoundingClientRect())}function va(t){const e=ua.get(t),n=la.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function ga(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(t=>{t.split(/\s+/).forEach(t=>t&&r.classList.remove(t))}),n.split(/\s+/).forEach(t=>t&&r.classList.add(t)),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=oa(r);return i.removeChild(r),o}const ma=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["o"])(e)?t=>Object(r["n"])(e,t):e};function ba(t){t.target.composing=!0}function ya(t){const e=t.target;e.composing&&(e.composing=!1,_a(e,"input"))}function _a(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const wa={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t._assign=ma(o);const s=i||o.props&&"number"===o.props.type;Ss(t,e?"change":"input",e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():s&&(i=Object(r["O"])(i)),t._assign(i)}),n&&Ss(t,"change",()=>{t.value=t.value.trim()}),e||(Ss(t,"compositionstart",ba),Ss(t,"compositionend",ya),Ss(t,"change",ya))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},s){if(t._assign=ma(s),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((o||"number"===t.type)&&Object(r["O"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},Oa={deep:!0,created(t,e,n){t._assign=ma(n),Ss(t,"change",()=>{const e=t._modelValue,n=ka(t),i=t.checked,o=t._assign;if(Object(r["o"])(e)){const t=Object(r["G"])(e,n),s=-1!==t;if(i&&!s)o(e.concat(n));else if(!i&&s){const n=[...e];n.splice(t,1),o(n)}}else if(Object(r["B"])(e)){const t=new Set(e);i?t.add(n):t.delete(n),o(t)}else o(ja(t,i))})},mounted:Ea,beforeUpdate(t,e,n){t._assign=ma(n),Ea(t,e,n)}};function Ea(t,{value:e,oldValue:n},i){t._modelValue=e,Object(r["o"])(e)?t.checked=Object(r["G"])(e,i.props.value)>-1:Object(r["B"])(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Object(r["F"])(e,ja(t,!0)))}const Ia={created(t,{value:e},n){t.checked=Object(r["F"])(e,n.props.value),t._assign=ma(n),Ss(t,"change",()=>{t._assign(ka(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t._assign=ma(i),e!==n&&(t.checked=Object(r["F"])(e,i.props.value))}},Ta={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const o=Object(r["B"])(e);Ss(t,"change",()=>{const e=Array.prototype.filter.call(t.options,t=>t.selected).map(t=>n?Object(r["O"])(ka(t)):ka(t));t._assign(t.multiple?o?new Set(e):e:e[0])}),t._assign=ma(i)},mounted(t,{value:e}){Sa(t,e)},beforeUpdate(t,e,n){t._assign=ma(n)},updated(t,{value:e}){Sa(t,e)}};function Sa(t,e){const n=t.multiple;if(!n||Object(r["o"])(e)||Object(r["B"])(e)){for(let i=0,o=t.options.length;i<o;i++){const o=t.options[i],s=ka(o);if(n)Object(r["o"])(e)?o.selected=Object(r["G"])(e,s)>-1:o.selected=e.has(s);else if(Object(r["F"])(ka(o),e))return void(t.selectedIndex!==i&&(t.selectedIndex=i))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function ka(t){return"_value"in t?t._value:t.value}function ja(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ca={created(t,e,n){Aa(t,e,n,null,"created")},mounted(t,e,n){Aa(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Aa(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Aa(t,e,n,r,"updated")}};function Aa(t,e,n,r,i){let o;switch(t.tagName){case"SELECT":o=Ta;break;case"TEXTAREA":o=wa;break;default:switch(n.props&&n.props.type){case"checkbox":o=Oa;break;case"radio":o=Ia;break;default:o=wa}}const s=o[i];s&&s(t,e,n,r)}function Ra(){wa.getSSRProps=({value:t})=>({value:t}),Ia.getSSRProps=({value:t},e)=>{if(e.props&&Object(r["F"])(e.props.value,t))return{checked:!0}},Oa.getSSRProps=({value:t},e)=>{if(Object(r["o"])(t)){if(e.props&&Object(r["G"])(t,e.props.value)>-1)return{checked:!0}}else if(Object(r["B"])(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}}}const xa=["ctrl","shift","alt","meta"],Pa={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>xa.some(n=>t[n+"Key"]&&!e.includes(n))},Na=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=Pa[e[t]];if(r&&r(n,e))return}return t(n,...r)},La={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Da=(t,e)=>n=>{if(!("key"in n))return;const i=Object(r["l"])(n.key);return e.some(t=>t===i||La[t]===i)?t(n):void 0},Ma={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):Ua(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),Ua(t,!0),r.enter(t)):r.leave(t,()=>{Ua(t,!1)}):Ua(t,e))},beforeUnmount(t,{value:e}){Ua(t,e)}};function Ua(t,e){t.style.display=e?t._vod:"none"}function Fa(){Ma.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Va=Object(r["h"])({patchProp:Ns},us);let Ba,$a=!1;function Ha(){return Ba||(Ba=fr(Va))}function za(){return Ba=$a?Ba:dr(Va),$a=!0,Ba}const Wa=(...t)=>{Ha().render(...t)},Ga=(...t)=>{za().hydrate(...t)},qa=(...t)=>{const e=Ha().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=Xa(t);if(!i)return;const o=e._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e},Ka=(...t)=>{const e=za().createApp(...t);const{mount:n}=e;return e.mount=t=>{const e=Xa(t);if(e)return n(e,!0,e instanceof SVGElement)},e};function Xa(t){if(Object(r["D"])(t)){const e=document.querySelector(t);return e}return t}let Ja=!1;const Ya=()=>{Ja||(Ja=!0,Ra(),Fa())};const Qa=()=>{0}},"7a82":function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("9bf2");r({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperty:o.f})},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),o=r.Object;t.exports=function(t){return o(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",v=l("IE_PROTO"),g=function(){},m=function(t){return f+p+h+t+f+"/"+p+h},b=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(m("document.F=Object")),t.close(),t.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var t=s.length;while(t--)delete _[d][s[t]];return _()};a[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[d]=i(t),n=new g,g[d]=null,n[v]=t):n=_(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),f=n("9112"),d=n("6eeb"),p=n("b622"),v=n("3f8c"),g=n("ae93"),m=s.PROPER,b=s.CONFIGURABLE,y=g.IteratorPrototype,_=g.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",E="values",I="entries",T=function(){return this};t.exports=function(t,e,n,s,p,g,S){c(n,e,s);var k,j,C,A=function(t){if(t===p&&L)return L;if(!_&&t in P)return P[t];switch(t){case O:return function(){return new n(this,t)};case E:return function(){return new n(this,t)};case I:return function(){return new n(this,t)}}return function(){return new n(this)}},R=e+" Iterator",x=!1,P=t.prototype,N=P[w]||P["@@iterator"]||p&&P[p],L=!_&&N||A(p),D="Array"==e&&P.entries||N;if(D&&(k=u(D.call(new t)),k!==Object.prototype&&k.next&&(o||u(k)===y||(l?l(k,y):a(k[w])||d(k,w,T)),h(k,R,!0,!0),o&&(v[R]=T))),m&&p==E&&N&&N.name!==E&&(!o&&b?f(P,"name",E):(x=!0,L=function(){return i(N,this)})),p)if(j={values:A(E),keys:g?L:A(O),entries:A(I)},S)for(C in j)(_||x||!(C in P))&&d(P,C,j[C]);else r({target:e,proto:!0,forced:_||x},j);return o&&!S||P[w]===L||d(P,w,L,{name:p}),v[e]=L,j}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;t.exports=function(t){if(i(t))return t;throw s(o(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},"90e3":function(t,e,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(o(n))return s(i(n,t));throw u(a(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;e.f=i?u:function(t,e,n){if(s(t),e=a(e),s(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return I})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return S})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return et})),n.d(e,"g",(function(){return ot})),n.d(e,"h",(function(){return R})),n.d(e,"i",(function(){return ct})),n.d(e,"j",(function(){return rt})),n.d(e,"k",(function(){return N})),n.d(e,"l",(function(){return tt})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return it})),n.d(e,"o",(function(){return L})),n.d(e,"p",(function(){return F})),n.d(e,"q",(function(){return o})),n.d(e,"r",(function(){return m})),n.d(e,"s",(function(){return K})),n.d(e,"t",(function(){return D})),n.d(e,"u",(function(){return A})),n.d(e,"v",(function(){return $})),n.d(e,"w",(function(){return C})),n.d(e,"x",(function(){return q})),n.d(e,"y",(function(){return H})),n.d(e,"z",(function(){return X})),n.d(e,"A",(function(){return b})),n.d(e,"B",(function(){return M})),n.d(e,"C",(function(){return a})),n.d(e,"D",(function(){return V})),n.d(e,"E",(function(){return B})),n.d(e,"F",(function(){return _})),n.d(e,"G",(function(){return w})),n.d(e,"H",(function(){return r})),n.d(e,"I",(function(){return d})),n.d(e,"J",(function(){return p})),n.d(e,"K",(function(){return u})),n.d(e,"L",(function(){return x})),n.d(e,"M",(function(){return O})),n.d(e,"N",(function(){return nt})),n.d(e,"O",(function(){return st})),n.d(e,"P",(function(){return G}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(t){return!!t||""===t}function u(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=V(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return V(t)||$(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(V(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if($(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t){if(!t)return null;let{class:e,style:n}=t;return e&&!V(e)&&(t.class=d(e)),n&&(t.style=u(n)),t}const v="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(v),b=r(g);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=_(t[r],e[r]);return n}function _(t,e){if(t===e)return!0;let n=U(t),r=U(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=L(t),r=L(e),n||r)return!(!n||!r)&&y(t,e);if(n=$(t),r=$(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!_(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>_(t,e))}const O=t=>null==t?"":L(t)||$(t)&&(t.toString===z||!F(t.toString))?JSON.stringify(t,E,2):String(t),E=(t,e)=>e&&e.__v_isRef?E(t,e.value):D(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:M(e)?{[`Set(${e.size})`]:[...e.values()]}:!$(e)||L(e)||q(e)?e:String(e),I={},T=[],S=()=>{},k=()=>!1,j=/^on[^a-z]/,C=t=>j.test(t),A=t=>t.startsWith("onUpdate:"),R=Object.assign,x=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},P=Object.prototype.hasOwnProperty,N=(t,e)=>P.call(t,e),L=Array.isArray,D=t=>"[object Map]"===W(t),M=t=>"[object Set]"===W(t),U=t=>t instanceof Date,F=t=>"function"===typeof t,V=t=>"string"===typeof t,B=t=>"symbol"===typeof t,$=t=>null!==t&&"object"===typeof t,H=t=>$(t)&&F(t.then)&&F(t.catch),z=Object.prototype.toString,W=t=>z.call(t),G=t=>W(t).slice(8,-1),q=t=>"[object Object]"===W(t),K=t=>V(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,X=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},Y=/-(\w)/g,Q=J(t=>t.replace(Y,(t,e)=>e?e.toUpperCase():"")),Z=/\B([A-Z])/g,tt=J(t=>t.replace(Z,"-$1").toLowerCase()),et=J(t=>t.charAt(0).toUpperCase()+t.slice(1)),nt=J(t=>t?"on"+et(t):""),rt=(t,e)=>!Object.is(t,e),it=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ot=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let at;const ct=()=>at||(at="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),f=n("d039"),d=n("1a2d"),p=n("e8b5"),v=n("1626"),g=n("861d"),m=n("3a9b"),b=n("d9b5"),y=n("825a"),_=n("7b0b"),w=n("fc6a"),O=n("a04b"),E=n("577e"),I=n("5c6c"),T=n("7c73"),S=n("df75"),k=n("241c"),j=n("057f"),C=n("7418"),A=n("06cf"),R=n("9bf2"),x=n("d1e7"),P=n("f36a"),N=n("6eeb"),L=n("5692"),D=n("f772"),M=n("d012"),U=n("90e3"),F=n("b622"),V=n("e538"),B=n("746f"),$=n("d44e"),H=n("69f3"),z=n("b727").forEach,W=D("hidden"),G="Symbol",q="prototype",K=F("toPrimitive"),X=H.set,J=H.getterFor(G),Y=Object[q],Q=i.Symbol,Z=Q&&Q[q],tt=i.TypeError,et=i.QObject,nt=o("JSON","stringify"),rt=A.f,it=R.f,ot=j.f,st=x.f,at=c([].push),ct=L("symbols"),ut=L("op-symbols"),lt=L("string-to-symbol-registry"),ht=L("symbol-to-string-registry"),ft=L("wks"),dt=!et||!et[q]||!et[q].findChild,pt=l&&f((function(){return 7!=T(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=rt(Y,e);r&&delete Y[e],it(t,e,n),r&&t!==Y&&it(Y,e,r)}:it,vt=function(t,e){var n=ct[t]=T(Z);return X(n,{type:G,tag:t,description:e}),l||(n.description=e),n},gt=function(t,e,n){t===Y&&gt(ut,e,n),y(t);var r=O(e);return y(n),d(ct,r)?(n.enumerable?(d(t,W)&&t[W][r]&&(t[W][r]=!1),n=T(n,{enumerable:I(0,!1)})):(d(t,W)||it(t,W,I(1,{})),t[W][r]=!0),pt(t,r,n)):it(t,r,n)},mt=function(t,e){y(t);var n=w(e),r=S(n).concat(Ot(n));return z(r,(function(e){l&&!a(yt,n,e)||gt(t,e,n[e])})),t},bt=function(t,e){return void 0===e?T(t):mt(T(t),e)},yt=function(t){var e=O(t),n=a(st,this,e);return!(this===Y&&d(ct,e)&&!d(ut,e))&&(!(n||!d(this,e)||!d(ct,e)||d(this,W)&&this[W][e])||n)},_t=function(t,e){var n=w(t),r=O(e);if(n!==Y||!d(ct,r)||d(ut,r)){var i=rt(n,r);return!i||!d(ct,r)||d(n,W)&&n[W][r]||(i.enumerable=!0),i}},wt=function(t){var e=ot(w(t)),n=[];return z(e,(function(t){d(ct,t)||d(M,t)||at(n,t)})),n},Ot=function(t){var e=t===Y,n=ot(e?ut:w(t)),r=[];return z(n,(function(t){!d(ct,t)||e&&!d(Y,t)||at(r,ct[t])})),r};if(h||(Q=function(){if(m(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,e=U(t),n=function(t){this===Y&&a(n,ut,t),d(this,W)&&d(this[W],e)&&(this[W][e]=!1),pt(this,e,I(1,t))};return l&&dt&&pt(Y,e,{configurable:!0,set:n}),vt(e,t)},Z=Q[q],N(Z,"toString",(function(){return J(this).tag})),N(Q,"withoutSetter",(function(t){return vt(U(t),t)})),x.f=yt,R.f=gt,A.f=_t,k.f=j.f=wt,C.f=Ot,V.f=function(t){return vt(F(t),t)},l&&(it(Z,"description",{configurable:!0,get:function(){return J(this).description}}),u||N(Y,"propertyIsEnumerable",yt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Q}),z(S(ft),(function(t){B(t)})),r({target:G,stat:!0,forced:!h},{for:function(t){var e=E(t);if(d(lt,e))return lt[e];var n=Q(e);return lt[e]=n,ht[n]=e,n},keyFor:function(t){if(!b(t))throw tt(t+" is not a symbol");if(d(ht,t))return ht[t]},useSetter:function(){dt=!0},useSimple:function(){dt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:bt,defineProperty:gt,defineProperties:mt,getOwnPropertyDescriptor:_t}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:wt,getOwnPropertySymbols:Ot}),r({target:"Object",stat:!0,forced:f((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(_(t))}}),nt){var Et=!h||f((function(){var t=Q();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));r({target:"JSON",stat:!0,forced:Et},{stringify:function(t,e,n){var r=P(arguments),i=e;if((g(e)||void 0!==t)&&!b(t))return p(e)||(e=function(t,e){if(v(i)&&(e=a(i,this,t,e)),!b(e))return e}),r[1]=e,s(nt,null,r)}})}if(!Z[K]){var It=Z.valueOf;N(Z,K,(function(t){return a(It,this)}))}$(Q,G),M[W]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a6f4:function(t,e,n){"use strict";n.d(e,"a",(function(){return yt})),n.d(e,"c",(function(){return pt})),n.d(e,"d",(function(){return it}));n("7a23");var r=function(t){return Object.prototype.toString.call(t)};function i(t){return"function"===typeof t&&/native code/.test(t.toString())}var o="undefined"!==typeof Symbol&&i(Symbol)&&"undefined"!==typeof Reflect&&i(Reflect.ownKeys),s=function(t){return t};function a(t,e,n){var r=n.get,i=n.set;Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:r||s,set:i||s})}function c(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function u(t,e){return Object.hasOwnProperty.call(t,e)}function l(t){return Array.isArray(t)}Object.prototype.toString;function h(t){return null!==t&&"object"===typeof t}function f(t){return"[object Object]"===r(t)}function d(t){return"function"===typeof t}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var p=function(t,e){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},p(t,e)};function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var g;function m(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function y(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}var _=[],w=function(){function t(t){this.active=!0,this.effects=[],this.cleanups=[],this.vm=t}return t.prototype.run=function(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0},t.prototype.on=function(){this.active&&(_.push(this),g=this)},t.prototype.off=function(){this.active&&(_.pop(),g=_[_.length-1])},t.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach((function(t){return t.stop()})),this.cleanups.forEach((function(t){return t()})),this.active=!1)},t}();(function(t){function e(e){void 0===e&&(e=!1);var n=this,r=void 0;return M((function(){r=W(N())})),n=t.call(this,r)||this,e||O(n),n}v(e,t)})(w);function O(t,e){var n;if(e=e||g,e&&e.active)e.effects.push(t);else{var r=null===(n=V())||void 0===n?void 0:n.proxy;r&&r.$on("hook:destroyed",(function(){return t.stop()}))}}function E(){return g}function I(){var t,e;return(null===(t=E())||void 0===t?void 0:t.vm)||(null===(e=V())||void 0===e?void 0:e.proxy)}function T(t){if(!t.scope){var e=new w(t.proxy);t.scope=e,t.proxy.$on("hook:destroyed",(function(){return e.stop()}))}return t.scope}var S=void 0;try{var k=n("7a23");k&&x(k)?S=k:k&&"default"in k&&x(k.default)&&(S=k.default)}catch(Rt){}var j=null,C=null,A=!0,R="__composition_api_installed__";function x(t){return t&&d(t)&&"Vue"===t.name}function P(t){return u(t,R)}function N(){return j}function L(){var t=j||S;return t}function D(t){j=t,Object.defineProperty(t,R,{configurable:!0,writable:!0,value:!0})}function M(t){var e=A;A=!1;try{t()}finally{A=e}}function U(t){A&&F(t?H(t):t)}function F(t){if(A){var e=C;null===e||void 0===e||e.scope.off(),C=t,null===C||void 0===C||C.scope.on()}}function V(){return C}var B,$=new WeakMap;function H(t){if($.has(t))return $.get(t);var e={proxy:t,update:t.$forceUpdate,uid:t._uid,emit:t.$emit.bind(t),parent:null,root:null};T(e);var n=["data","props","attrs","refs","vnode","slots"];return n.forEach((function(n){a(e,n,{get:function(){return t["$"+n]}})})),a(e,"isMounted",{get:function(){return t._isMounted}}),a(e,"isUnmounted",{get:function(){return t._isDestroyed}}),a(e,"isDeactivated",{get:function(){return t._inactive}}),a(e,"emitted",{get:function(){return t._events}}),$.set(t,e),t.$parent&&(e.parent=H(t.$parent)),t.$root&&(e.root=H(t.$root)),e}function z(t,e){return e=e||V(),e}function W(t,e){void 0===e&&(e={});var n=t.config.silent;t.config.silent=!0;var r=new t(e);return t.config.silent=n,r}function G(t){var e=N();return e&&t instanceof e}function q(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t.$scopedSlots[e])return t.$scopedSlots[e].apply(t,n)}}function K(t,e){var n;if(t){if(t._normalized)return t._normalized;for(var r in n={},t)t[r]&&"$"!==r[0]&&(n[r]=!0)}else n={};for(var r in e)r in n||(n[r]=!0);return n}var X=function(){if(!B){var t=W(N(),{computed:{value:function(){return 0}}}),e=t._computedWatchers.value.constructor,n=t._data.__ob__.dep.constructor;B={Watcher:e,Dep:n},t.$destroy()}return B};function J(t){return o?Symbol.for(t):t}J("composition-api.preFlushQueue"),J("composition-api.postFlushQueue");var Y="composition-api.refKey",Q=new WeakMap,Z=(new WeakMap,new WeakMap),tt=function(){function t(t){var e=t.get,n=t.set;a(this,"value",{get:e,set:n})}return t}();function et(t,e){var n=new tt(t),r=Object.seal(n);return Z.set(r,!0),r}function nt(t){var e;if(rt(t))return t;var n=pt((e={},e[Y]=t,e));return et({get:function(){return n[Y]},set:function(t){return n[Y]=t}})}function rt(t){return t instanceof tt}function it(t){if(!f(t))return t;var e={};for(var n in t)e[n]=ot(t,n);return e}function ot(t,e){var n=t[e];return rt(n)?n:et({get:function(){return t[e]},set:function(n){return t[e]=n}})}function st(t){var e;return Boolean(t&&u(t,"__ob__")&&"object"===typeof t.__ob__&&(null===(e=t.__ob__)||void 0===e?void 0:e.__raw__))}function at(t){var e;return Boolean(t&&u(t,"__ob__")&&"object"===typeof t.__ob__&&!(null===(e=t.__ob__)||void 0===e?void 0:e.__raw__))}function ct(t){if(!(!f(t)||st(t)||l(t)||rt(t)||G(t)||Q.has(t))){Q.set(t,!0);for(var e=Object.keys(t),n=0;n<e.length;n++)ut(t,e[n])}}function ut(t,e,n){if("__ob__"!==e&&!st(t[e])){var r,i,o=Object.getOwnPropertyDescriptor(t,e);if(o){if(!1===o.configurable)return;r=o.get,i=o.set,r&&!i||2!==arguments.length||(n=t[e])}ct(n),a(t,e,{get:function(){var i=r?r.call(t):n;return e!==Y&&rt(i)?i.value:i},set:function(o){if(!r||i){var s=r?r.call(t):n;e!==Y&&rt(s)&&!rt(o)?s.value=o:i?i.call(t,o):n=o,ct(o)}}})}}function lt(t){var e,n=L();if(n.observable)e=n.observable(t);else{var r=W(n,{data:{$$state:t}});e=r._data.$$state}return u(e,"__ob__")||ht(e),e}function ht(t,e){var n,r;if(void 0===e&&(e=new Set),!e.has(t)){c(t,"__ob__",ft(t)),e.add(t);try{for(var i=m(Object.keys(t)),o=i.next();!o.done;o=i.next()){var s=o.value,a=t[s];(f(a)||l(a))&&!st(a)&&Object.isExtensible(a)&&ht(a,e)}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}}function ft(t){return void 0===t&&(t={}),{value:t,dep:{notify:s,depend:s,addSub:s,removeSub:s}}}function dt(){return lt({}).__ob__}function pt(t){if(!h(t))return t;if(!f(t)&&!l(t)||st(t)||!Object.isExtensible(t))return t;var e=lt(t);return ct(e),e}var vt=function(t){return"on"+(t[0].toUpperCase()+t.slice(1))};function gt(t){return function(e,n){var r=z(vt(t),n);return r&&mt(N(),r,t,e)}}function mt(t,e,n,r){var i=e.proxy.$options,o=t.config.optionMergeStrategies[n],s=bt(e,r);return i[n]=o(i[n],s),s}function bt(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=V();F(t);try{return e.apply(void 0,y([],b(n)))}finally{F(i)}}}gt("beforeMount"),gt("mounted"),gt("beforeUpdate"),gt("updated"),gt("beforeDestroy"),gt("destroyed"),gt("errorCaptured"),gt("activated"),gt("deactivated"),gt("serverPrefetch");function yt(t){var e,n,r,i,o=I();if(d(t)?e=t:(e=t.get,n=t.set),o&&!o.$isServer){var a,c=X(),u=c.Watcher,l=c.Dep;i=function(){return a||(a=new u(o,e,s,{lazy:!0})),a.dirty&&a.evaluate(),l.target&&a.depend(),a.value},r=function(t){n&&n(t)}}else{var h=W(N(),{computed:{$$state:{get:e,set:n}}});o&&o.$on("hook:destroyed",(function(){return h.$destroy()})),i=function(){return h.$$state},r=function(t){h.$$state=t}}return et({get:i,set:r})}function _t(t,e,n){var r=t.__composition_api_state__=t.__composition_api_state__||{};r[e]=n}function wt(t,e){return(t.__composition_api_state__||{})[e]}var Ot={set:_t,get:wt};function Et(t,e,n){var r=t.$options.props;e in t||r&&u(r,e)||(rt(n)?a(t,e,{get:function(){return n.value},set:function(t){n.value=t}}):a(t,e,{get:function(){return at(n)&&n.__ob__.dep.depend(),n},set:function(t){n=t}}))}function It(t){var e=Ot.get(t,"rawBindings")||{};if(e&&Object.keys(e).length){for(var n=t.$refs,r=Ot.get(t,"refs")||[],i=0;i<r.length;i++){var o=r[i],s=e[o];!n[o]&&s&&rt(s)&&(s.value=null)}var a=Object.keys(n),c=[];for(i=0;i<a.length;i++){o=a[i],s=e[o];n[o]&&s&&rt(s)&&(s.value=n[o],c.push(o))}Ot.set(t,"refs",c)}}function Tt(t,e){var n=t.$options._parentVnode;if(n){for(var r=Ot.get(t,"slots")||[],i=K(n.data.scopedSlots,t.$slots),o=0;o<r.length;o++){var s=r[o];i[s]||delete e[s]}var a=Object.keys(i);for(o=0;o<a.length;o++){s=a[o];e[s]||(e[s]=q(t,s))}Ot.set(t,"slots",a)}}function St(t,e,n){var r=V();U(t);try{return e(t)}catch(i){if(!n)throw i;n(i)}finally{F(r)}}function kt(t){function e(){var t=this,e=t.$options,r=e.setup,i=e.render;if(i&&(e.render=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return St(t,(function(){return i.apply(e,n)}))}),r&&d(r)){var o=e.data;e.data=function(){return n(t,t.$props),d(o)?o.call(t,t):o||{}}}}function n(t,e){void 0===e&&(e={});var n,s=t.$options.setup,a=o(t);if(c(e,"__ob__",dt()),Tt(t,a.slots),St(t,(function(){n=s(e,a)})),n)if(d(n)){var u=n;t.$options.render=function(){return Tt(t,a.slots),St(t,(function(){return u()}))}}else if(f(n)){at(n)&&(n=it(n)),Ot.set(t,"rawBindings",n);var p=n;Object.keys(p).forEach((function(e){var n=p[e];if(!rt(n))if(at(n))l(n)&&(n=nt(n));else if(d(n)){var o=n;n=n.bind(t),Object.keys(o).forEach((function(t){n[t]=o[t]}))}else h(n)?i(n)&&r(n):n=nt(n);Et(t,e,n)}))}else 0}function r(t,e){if(void 0===e&&(e=new Set),!e.has(t)&&f(t)&&!rt(t)&&!at(t)&&!st(t)){var n=N(),i=n.util.defineReactive;Object.keys(t).forEach((function(n){var o=t[n];i(t,n,o),o&&(e.add(o),r(o,e))}))}}function i(t,e){return void 0===e&&(e=new Map),e.has(t)?e.get(t):(e.set(t,!1),l(t)&&at(t)?(e.set(t,!0),!0):!(!f(t)||st(t))&&Object.keys(t).some((function(n){return i(t[n],e)})))}function o(t){var e={slots:{}},n=["root","parent","refs","listeners","isServer","ssrContext"],r=["attrs"],i=["emit"];return n.forEach((function(n){var r="$"+n;a(e,n,{get:function(){return t[r]},set:function(){}})})),r.forEach((function(n){var r="$"+n;a(e,n,{get:function(){var e,n,i=pt({}),o=t[r],s=function(e){a(i,e,{get:function(){return t[r][e]}})};try{for(var c=m(Object.keys(o)),u=c.next();!u.done;u=c.next()){var l=u.value;s(l)}}catch(h){e={error:h}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return i},set:function(){}})})),i.forEach((function(n){var r="$"+n;a(e,n,{get:function(){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i=t[r];i.apply(t,e)}}})})),e}t.mixin({beforeCreate:e,mounted:function(){It(this)},updated:function(){var t;It(this),(null===(t=this.$vnode)||void 0===t?void 0:t.context)&&It(this.$vnode.context)}})}function jt(t,e){if(!t)return e;if(!e)return t;for(var n,r,i,s=o?Reflect.ownKeys(t):Object.keys(t),a=0;a<s.length;a++)n=s[a],"__ob__"!==n&&(r=e[n],i=t[n],u(e,n)?r!==i&&f(r)&&!rt(r)&&f(i)&&!rt(i)&&jt(i,r):e[n]=i);return e}function Ct(t){P(t)||(t.config.optionMergeStrategies.setup=function(t,e){return function(n,r){return jt(d(t)?t(n,r)||{}:void 0,d(e)?e(n,r)||{}:void 0)}},D(t),kt(t))}var At={install:function(t){return Ct(t)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(At),e["b"]=At},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),f=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var d=a("Promise").prototype["finally"];o.prototype["finally"]!==d&&h(o.prototype,"finally",d,{unsafe:!0})}},a8e9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return S})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return A})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return O})),n.d(e,"m",(function(){return v})),n.d(e,"n",(function(){return h})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return E})),n.d(e,"r",(function(){return I}));var r=n("fbb0"),i=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},o=function(t){var e=[],n=0,r=0;while(n<t.length){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=t[n++];var s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=o>>2,h=(3&o)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;c||(d=64,s||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;var c=i<t.length,u=c?n[t.charAt(i)]:64;++i;var l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==h)throw Error();var f=o<<2|a>>4;if(r.push(f),64!==u){var d=a<<4&240|u>>2;if(r.push(d),64!==h){var p=u<<6&192|h;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
var c=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"===typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
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
 */function u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var c=Object(r["a"])({iss:"https://securetoken.google.com/"+i,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[s.encodeString(JSON.stringify(n),!1),s.encodeString(JSON.stringify(c),!1),u].join(".")}
/**
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
 */function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){var t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return l().indexOf("Electron/")>=0}function v(){var t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return l().indexOf("MSAppHost/")>=0}
/**
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
 */
var m="FirebaseError",b=function(t){function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=m,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,y.prototype.create),o}return Object(r["b"])(e,t),e}(Error),y=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,o=this.errors[t],s=o?_(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new b(i,a,r);return c},t}();function _(t,e){return t.replace(w,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var w=/\{\$([^}]+)}/g;
/**
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
 */function O(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */
function E(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return e.length?"&"+e.join("&"):""}function I(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function T(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */(function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"===typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),s=1518500249):(o=c^u^l,s=1859775393):r<60?(o=c&u|l&(c|u),s=2400959708):(o=c^u^l,s=3395469782);i=(a<<5|a>>>27)+o+h+s+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);var n=e-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}})();function S(t,e){var n=new k(t,e);return n.subscribe.bind(n)}var k=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=j(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=C),void 0===r.error&&(r.error=C),void 0===r.complete&&(r.complete=C);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),o},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function j(t,e){if("object"!==typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"===typeof t[i])return!0}return!1}function C(){}
/**
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
 */
/**
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
 */
function A(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},abfd:function(t,e,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
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
 */var i;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d}));var o,s=[];(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));var a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},c=o.INFO,u=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var o=(new Date).toISOString(),s=u[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,r(["["+o+"]  "+t.name+":"],n))}},h=function(){function t(t){this.name=t,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,s.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in o))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"===typeof t?a[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],t)),this._logHandler.apply(this,r([this,o.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],t)),this._logHandler.apply(this,r([this,o.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],t)),this._logHandler.apply(this,r([this,o.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],t)),this._logHandler.apply(this,r([this,o.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],t)),this._logHandler.apply(this,r([this,o.ERROR],t))},t}();function f(t){s.forEach((function(e){e.setLogLevel(t)}))}function d(t,e){for(var n=function(n){var r=null;e&&e.level&&(r=a[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var a=i.map((function(t){if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((function(t){return t})).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:o[n].toLowerCase(),message:a,args:i,type:e.name})}},r=0,i=s;r<i.length;r++){var c=i[r];n(c)}}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),f=n("c430"),d=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var v=void 0==r||s((function(){var t={};return r[d].call(t)!==t}));v?r={}:f&&(r=c(r)),a(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/^\s*function ([^ (]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("0366"),d=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),g=n("d4c3"),m=n("a4b4"),b=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,_=h.document,w=h.process,O=h.Promise,E=d(h,"queueMicrotask"),I=E&&E.value;I||(r=function(){var t,e;b&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},v||b||m||!y||!_?!g&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=f(u.then,u),s=function(){l(r)}):b?s=function(){w.nextTick(r)}:(p=f(p,h),s=function(){p(r)}):(a=!0,c=_.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=I||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b680:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e330"),s=n("5926"),a=n("408a"),c=n("1148"),u=n("d039"),l=i.RangeError,h=i.String,f=Math.floor,d=o(c),p=o("".slice),v=o(1..toFixed),g=function(t,e,n){return 0===e?n:e%2===1?g(t,e-1,n*t):g(t*t,e/2,n)},m=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},b=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=f(i/1e7)},y=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=f(r/e),r=r%e*1e7},_=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=h(t[e]);n=""===n?r:n+d("0",7-r.length)+r}return n},w=u((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!u((function(){v({})}));r({target:"Number",proto:!0,forced:w},{toFixed:function(t){var e,n,r,i,o=a(this),c=s(t),u=[0,0,0,0,0,0],f="",v="0";if(c<0||c>20)throw l("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return h(o);if(o<0&&(f="-",o=-o),o>1e-21)if(e=m(o*g(2,69,1))-69,n=e<0?o*g(2,-e,1):o/g(2,e,1),n*=4503599627370496,e=52-e,e>0){b(u,0,n),r=c;while(r>=7)b(u,1e7,0),r-=7;b(u,g(10,r,1),0),r=e-1;while(r>=23)y(u,1<<23),r-=23;y(u,1<<r),b(u,1,1),y(u,2),v=_(u)}else b(u,0,n),b(u,1<<-e,0),v=_(u)+d("0",c);return c>0?(i=v.length,v=f+(i<=c?"0."+d("0",c-i)+v:p(v,0,i-c)+"."+p(v,i-c))):v=f+v,v}})},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,v,g,m){for(var b,y,_=s(p),w=o(_),O=r(v,g),E=a(w),I=0,T=m||c,S=e?T(p,E):n||f?T(p,0):void 0;E>I;I++)if((d||I in w)&&(b=w[I],y=O(b,I,_),t))if(e)S[I]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return I;case 2:u(S,b)}else switch(t){case 4:return!1;case 7:u(S,b)}return h?-1:i||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b774:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));const r="devtools-plugin:setup",i="plugin:settings:set"},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c7b2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ar})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Rr})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return Pr})),n.d(e,"f",(function(){return Lr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return jr})),n.d(e,"i",(function(){return Cr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var s,a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},c=c||{},u=a||self;function l(){}function h(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function d(t){return Object.prototype.hasOwnProperty.call(t,p)&&t[p]||(t[p]=++v)}var p="closure_uid_"+(1e9*Math.random()>>>0),v=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:m,b.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(){return Date.now()}function w(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Pb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function O(){this.j=this.j,this.i=this.i}var E=0;O.prototype.j=!1,O.prototype.ka=function(){if(!this.j&&(this.j=!0,this.H(),0!=E))d(this)},O.prototype.H=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"===typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function S(t){t:{for(var e=Fn,n=t.length,r="string"===typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function k(t){return Array.prototype.concat.apply([],arguments)}function j(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var A,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var N=u.navigator;if(N){var L=N.userAgent;if(L){A=L;break t}}A=""}function D(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function M(t){var e={};for(var n in t)e[n]=t[n];return e}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(var o=0;o<U.length;o++)n=U[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}function B(t,e){var n=tt;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}V[" "]=l;var $,H=x(A,"Opera"),z=x(A,"Trident")||x(A,"MSIE"),W=x(A,"Edge"),G=W||z,q=x(A,"Gecko")&&!(x(A.toLowerCase(),"webkit")&&!x(A,"Edge"))&&!(x(A,"Trident")||x(A,"MSIE"))&&!x(A,"Edge"),K=x(A.toLowerCase(),"webkit")&&!x(A,"Edge");function X(){var t=u.document;return t?t.documentMode:void 0}t:{var J="",Y=function(){var t=A;return q?/rv:([^\);]+)(\)|;)/.exec(t):W?/Edge\/([\d\.]+)/.exec(t):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):H?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(J=Y?Y[1]:""),z){var Q=X();if(null!=Q&&Q>parseFloat(J)){$=String(Q);break t}}$=J}var Z,tt={};function et(t){return B(t,(function(){for(var e=0,n=R(String($)).split("."),r=R(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var s=n[o]||"",a=r[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;e=P(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||P(0==s[2].length,0==a[2].length)||P(s[2],a[2]),s=s[3],a=a[3]}while(0==e)}return 0<=e}))}if(u.document&&z){var nt=X();Z=nt||(parseInt($,10)||void 0)}else Z=void 0;var rt=Z,it=!z||9<=Number(rt),ot=z&&!et("9"),st=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",l,e),u.removeEventListener("test",l,e)}catch(n){}return t}();function at(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(q){t:{try{V(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}at.prototype.b=function(){this.defaultPrevented=!0},w(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.b=function(){ct.X.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,ot)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(e){}};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.da=i,this.key=++ht,this.Y=this.Z=!1}function dt(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.da=null}function pt(t){this.src=t,this.a={},this.b=0}function vt(t,e){var n=e.type;if(n in t.a){var r,i=t.a[n],o=I(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(dt(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function gt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.Y&&o.listener==e&&o.capture==!!n&&o.da==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.a[o],t||(t=this.a[o]=[],this.b++);var s=gt(t,e,r,i);return-1<s?(e=t[s],n||(e.Z=!1)):(e=new ft(e,this.src,o,!!r,i),e.Z=n,t.push(e)),e};var mt="closure_lm_"+(1e6*Math.random()|0),bt={};function yt(t,e,n,r,i){if(r&&r.once)return Ot(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=At(n),t&&t[lt]?t.wa(e,n,f(r)?!!r.capture:!!r,i):_t(t,e,n,!1,r,i)}function _t(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=f(i)?!!i.capture:!!i;if(s&&!it)return null;var a=jt(t);if(a||(t[mt]=a=new pt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=wt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)st||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Tt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function wt(){var t=kt,e=it?function(n){return t.call(e.src,e.listener,n)}:function(n){if(n=t.call(e.src,e.listener,n),!n)return n};return e}function Ot(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Ot(t,e[o],n,r,i);return null}return n=At(n),t&&t[lt]?t.xa(e,n,f(r)?!!r.capture:!!r,i):_t(t,e,n,!0,r,i)}function Et(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Et(t,e[o],n,r,i);else r=f(r)?!!r.capture:!!r,n=At(n),t&&t[lt]?(t=t.c,e=String(e).toString(),e in t.a&&(o=t.a[e],n=gt(o,n,r,i),-1<n&&(dt(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.a[e],t.b--)))):t&&(t=jt(t))&&(e=t.a[e.toString()],t=-1,e&&(t=gt(e,n,r,i)),(n=-1<t?e[t]:null)&&It(n))}function It(t){if("number"!==typeof t&&t&&!t.Y){var e=t.src;if(e&&e[lt])vt(e.c,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jt(e))?(vt(n,t),0==n.b&&(n.src=null,e[mt]=null)):dt(t)}}}function Tt(t){return t in bt?bt[t]:bt[t]="on"+t}function St(t,e){var n=t.listener,r=t.da||t.src;return t.Z&&It(t),n.call(r,e)}function kt(t,e){if(t.Y)return!0;if(!it){if(!e)t:{e=["window","event"];for(var n=u,r=0;r<e.length;r++)if(n=n[e[r]],null==n){e=null;break t}e=n}return e=new ct(e,this),St(t,e)}return St(t,new ct(e,this))}function jt(t){return t=t[mt],t instanceof pt?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function Rt(){O.call(this),this.c=new pt(this),this.J=this,this.D=null}function xt(t,e){var n,r=t.D;if(r)for(n=[];r;r=r.D)n.push(r);if(t=t.J,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),F(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.a=n[o];i=Pt(s,r,!0,e)&&i}if(s=e.a=t,i=Pt(s,r,!0,e)&&i,i=Pt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.a=n[o],i=Pt(s,r,!1,e)&&i}function Pt(t,e,n,r){if(e=t.c.a[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.Y&&s.capture==n){var a=s.listener,c=s.da||s.src;s.Z&&vt(t.c,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}w(Rt,O),Rt.prototype[lt]=!0,s=Rt.prototype,s.addEventListener=function(t,e,n,r){yt(this,t,e,n,r)},s.removeEventListener=function(t,e,n,r){Et(this,t,e,n,r)},s.H=function(){if(Rt.X.H.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)dt(n[r]);delete e.a[t],e.b--}}this.D=null},s.wa=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},s.xa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var Nt=u.JSON.stringify;function Lt(){this.b=this.a=null}var Dt,Mt=new(function(){function t(t,e){this.c=t,this.f=e,this.b=0,this.a=null}return t.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new Ft}),(function(t){t.reset()}));function Ut(){var t=zt,e=null;return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Ft(){this.next=this.b=this.a=null}function Vt(t){u.setTimeout((function(){throw t}),0)}function Bt(t,e){Dt||$t(),Ht||(Dt(),Ht=!0),zt.add(t,e)}function $t(){var t=u.Promise.resolve(void 0);Dt=function(){t.then(Wt)}}Lt.prototype.add=function(t,e){var n=Mt.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Ft.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Ft.prototype.reset=function(){this.next=this.b=this.a=null};var Ht=!1,zt=new Lt;function Wt(){for(var t;t=Ut();){try{t.a.call(t.b)}catch(n){Vt(n)}var e=Mt;e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}Ht=!1}function Gt(t,e){Rt.call(this),this.b=t||1,this.a=e||u,this.f=b(this.eb,this),this.g=_()}function qt(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Xt(t){t.a=Kt((function(){t.a=null,t.c&&(t.c=!1,Xt(t))}),t.h);var e=t.b;t.b=null,t.g.apply(null,e)}w(Gt,Rt),s=Gt.prototype,s.aa=!1,s.M=null,s.eb=function(){if(this.aa){var t=_()-this.g;0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),xt(this,"tick"),this.aa&&(qt(this),this.start()))}},s.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=_())},s.H=function(){Gt.X.H.call(this),qt(this),delete this.a};var Jt=function(t){function e(e,n){var r=t.call(this)||this;return r.g=e,r.h=n,r.b=null,r.c=!1,r.a=null,r}return i(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:Xt(this)},e.prototype.H=function(){t.prototype.H.call(this),this.a&&(u.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(O);function Yt(t){O.call(this),this.b=t,this.a={}}w(Yt,O);var Qt=[];function Zt(t,e,n,r){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var i=0;i<n.length;i++){var o=yt(e,n[i],r||t.handleEvent,!1,t.b||t);if(!o)break;t.a[o.key]=o}}function te(t){D(t.a,(function(t,e){this.a.hasOwnProperty(e)&&It(t)}),t),t.a={}}function ee(){this.a=!0}function ne(t,e,n,r,i,o){t.info((function(){if(t.a)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function re(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function ie(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function oe(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.a)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Nt(n)}catch(a){return e}}Yt.prototype.H=function(){Yt.X.H.call(this),te(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ee.prototype.info=function(){};var ae={},ce=null;function ue(){return ce=ce||new Rt}function le(t){at.call(this,ae.Ga,t)}function he(t){var e=ue();xt(e,new le(e,t))}function fe(t,e){at.call(this,ae.STAT_EVENT,t),this.stat=e}function de(t){var e=ue();xt(e,new fe(e,t))}function pe(t){at.call(this,ae.Ha,t)}function ve(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}ae.Ga="serverreachability",w(le,at),ae.STAT_EVENT="statevent",w(fe,at),ae.Ha="timingevent",w(pe,at);var ge={NO_ERROR:0,fb:1,sb:2,rb:3,mb:4,qb:5,tb:6,Ea:7,TIMEOUT:8,wb:9},me={kb:"complete",Gb:"success",Fa:"error",Ea:"abort",yb:"ready",zb:"readystatechange",TIMEOUT:"timeout",ub:"incrementaldata",xb:"progress",nb:"downloadprogress",Ob:"uploadprogress"};function be(){}function ye(t){return t.b||(t.b=t.c())}function _e(){}be.prototype.b=null;var we,Oe={OPEN:"a",jb:"b",Fa:"c",vb:"d"};function Ee(){at.call(this,"d")}function Ie(){at.call(this,"c")}function Te(){}function Se(t,e,n,r){this.g=t,this.c=e,this.f=n,this.S=r||1,this.J=new Yt(this),this.P=ke,t=G?125:void 0,this.R=new Gt(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.G=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}w(Ee,at),w(Ie,at),w(Te,be),Te.prototype.a=function(){return new XMLHttpRequest},Te.prototype.c=function(){return{}},we=new Te;var ke=45e3,je={},Ce={};function Ae(t,e,n){t.G=1,t.i=tn(Ke(e)),t.j=n,t.I=!0,Re(t,null)}function Re(t,e){t.u=_(),Ne(t),t.l=Ke(t.i);var n=t.l,r=t.S;Array.isArray(r)||(r=[String(r)]),gn(n.b,"t",r),t.D=0,t.a=vr(t.g,t.g.C?e:null),0<t.O&&(t.F=new Jt(b(t.Da,t,t.a),t.O)),Zt(t.J,t.a,"readystatechange",t.bb),e=t.B?M(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),he(1),ne(t.c,t.m,t.l,t.f,t.S,t.j)}function xe(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=Pe(t,n);if(i==Ce){4==e&&(t.h=4,de(14),r=!1),ie(t.c,t.f,null,"[Incomplete Response]");break}if(i==je){t.h=4,de(15),ie(t.c,t.f,n,"[Invalid Chunk]"),r=!1;break}ie(t.c,t.f,i,null),Fe(t,i)}4==e&&0==n.length&&(t.h=1,de(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.V&&(t.V=!0,e=t.g,e.a==t&&e.U&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),ar(e),e.F=!0,de(11))):(ie(t.c,t.f,n,"[Invalid Chunked Response]"),Ue(t),Me(t))}function Pe(t,e){var n=t.D,r=e.indexOf("\n",n);return-1==r?Ce:(n=Number(e.substring(n,r)),isNaN(n)?je:(r+=1,r+n>e.length?Ce:(e=e.substr(r,n),t.D=r+n,e)))}function Ne(t){t.T=_()+t.P,Le(t,t.P)}function Le(t,e){if(null!=t.o)throw Error("WatchDog timer not null");t.o=ve(b(t.$a,t),e)}function De(t){t.o&&(u.clearTimeout(t.o),t.o=null)}function Me(t){0==t.g.v||t.A||lr(t.g,t)}function Ue(t){De(t);var e=t.F;e&&"function"==typeof e.ka&&e.ka(),t.F=null,qt(t.R),te(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ka())}function Fe(t,e){try{var n=t.g;if(0!=n.v&&(n.a==t||In(n.b,t)))if(n.I=t.N,!t.C&&In(n.b,t)&&3==n.v){try{var r=n.la.a.parse(e)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t;ur(n),Yn(n)}sr(n),de(18)}}else n.pa=i[1],0<n.pa-n.P&&37500>i[2]&&n.G&&0==n.o&&!n.m&&(n.m=ve(b(n.Xa,n),6e3));if(1>=En(n.b)&&n.fa){try{n.fa()}catch(g){}n.fa=void 0}}else fr(n,11)}else if((t.C||n.a==t)&&ur(n),!C(e))for(e=r=n.la.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ha=i[2];var o=i[3];null!=o&&(n.ia=o,n.c.info("VER="+n.ia));var s=i[4];null!=s&&(n.qa=s,n.c.info("SVER="+n.qa));var a=i[5];if(null!=a&&"number"===typeof a&&0<a){var c=1.5*a;n.D=c,n.c.info("backChannelRequestTimeoutMs_="+c)}c=n;var u=t.a;if(u){var l=u.a?u.a.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=c.b;!h.a&&(x(l,"spdy")||x(l,"quic")||x(l,"h2"))&&(h.f=h.g,h.a=new Set,h.b&&(Tn(h,h.b),h.b=null))}if(c.A){var f=u.a?u.a.getResponseHeader("X-HTTP-Session-Id"):null;f&&(c.oa=f,Ze(c.B,c.A,f))}}n.v=3,n.f&&n.f.ua(),n.U&&(n.N=_()-t.u,n.c.info("Handshake RTT: "+n.N+"ms")),c=n;var d=t;if(c.ma=pr(c,c.C?c.ha:null,c.ga),d.C){Sn(c.b,d);var p=d,v=c.D;v&&p.setTimeout(v),p.o&&(De(p),Ne(p)),c.a=d}else or(c);0<n.g.length&&tr(n)}else"stop"!=i[0]&&"close"!=i[0]||fr(n,7);else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?fr(n,7):Jn(n):"noop"!=i[0]&&n.f&&n.f.ta(i),n.o=0);he(4)}catch(g){}}function Ve(t){if(t.K&&"function"==typeof t.K)return t.K();if("string"===typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"===typeof t)T(t,e,void 0);else{if(t.L&&"function"==typeof t.L)var n=t.L();else if(t.K&&"function"==typeof t.K)n=void 0;else if(h(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ve(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function $e(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof $e)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];ze(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)r=t.a[e],ze(i,r)||(t.a[n++]=r,i[r]=1),e++;t.a.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Se.prototype,s.setTimeout=function(t){this.P=t},s.bb=function(t){t=t.target;var e=this.F;e&&3==Wn(t)?e.f():this.Da(t)},s.Da=function(t){try{if(t==this.a)t:{var e=Wn(this.a),n=this.a.va(),r=this.a.W();if(!(3>e||3==e&&!G&&!this.a.$())){this.A||4!=e||7==n||he(8==n||0>=r?3:2),De(this);var i=this.a.W();this.N=i;var o=this.a.$();if(this.b=200==i,re(this.c,this.m,this.l,this.f,this.S,e,i),this.b){if(this.U&&!this.C){e:{if(this.a){var s,a=this.a;if((s=a.a?a.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(s)){var c=s;break e}}c=null}if(!c){this.b=!1,this.h=3,de(12),Ue(this),Me(this);break t}ie(this.c,this.f,c,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Fe(this,c)}this.I?(xe(this,e,o),G&&this.b&&3==e&&(Zt(this.J,this.R,"tick",this.ab),this.R.start())):(ie(this.c,this.f,o,null),Fe(this,o)),4==e&&Ue(this),this.b&&!this.A&&(4==e?lr(this.g,this):(this.b=!1,Ne(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.h=3,de(12)):(this.h=0,de(13)),Ue(this),Me(this)}}}catch(u){}},s.ab=function(){if(this.a){var t=Wn(this.a),e=this.a.$();this.D<e.length&&(De(this),xe(this,t,e),this.b&&4!=t&&Ne(this))}},s.cancel=function(){this.A=!0,Ue(this)},s.$a=function(){this.o=null;var t=_();0<=t-this.T?(oe(this.c,this.l),2!=this.G&&(he(3),de(17)),Ue(this),this.h=2,Me(this)):Le(this,this.T-t)},s=$e.prototype,s.K=function(){He(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},s.L=function(){return He(this),this.a.concat()},s.get=function(t,e){return ze(this.b,t)?this.b[t]:e},s.set=function(t,e){ze(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},s.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof qe){this.a=void 0!==e?e:t.a,Xe(this,t.f),this.j=t.j,Je(this,t.c),Ye(this,t.h),this.g=t.g,e=t.b;var n=new fn;n.c=e.c,e.a&&(n.a=new $e(e.a),n.b=e.b),Qe(this,n),this.i=t.i}else t&&(n=String(t).match(We))?(this.a=!!e,Xe(this,n[1]||"",!0),this.j=rn(n[2]||""),Je(this,n[3]||"",!0),Ye(this,n[4]),this.g=rn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.i=rn(n[7]||"")):(this.a=!!e,this.b=new fn(null,this.a))}function Ke(t){return new qe(t)}function Xe(t,e,n){t.f=n?rn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Je(t,e,n){t.c=n?rn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.h=e}else t.h=null}function Qe(t,e,n){e instanceof fn?(t.b=e,bn(t.b,t.a)):(n||(e=on(e,ln)),t.b=new fn(e,t.a))}function Ze(t,e,n){t.b.set(e,n)}function tn(t){return Ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^_()).toString(36)),t}function en(t){return t instanceof qe?Ke(t):new qe(t,void 0)}function nn(t,e,n,r){var i=new qe(null,void 0);return t&&Xe(i,t),e&&Je(i,e),n&&Ye(i,n),r&&(i.g=r),i}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,sn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.f;e&&t.push(on(e,an,!0),":");var n=this.c;return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(on(e,an,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.h,null!=n&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:cn,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",on(n,hn)),t.join("")};var an=/[#\/\?@]/g,cn=/[#\?:]/g,un=/[#\?]/g,ln=/[#\?@]/g,hn=/#/g;function fn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function dn(t){t.a||(t.a=new $e,t.b=0,t.c&&Ge(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function pn(t,e){dn(t),e=mn(t,e),ze(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,t=t.a,ze(t.b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&He(t)))}function vn(t,e){return dn(t),e=mn(t,e),ze(t.a.b,e)}function gn(t,e,n){pn(t,e),0<n.length&&(t.c=null,t.a.set(mn(t,e),j(n)),t.b+=n.length)}function mn(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.f&&(dn(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(pn(this,e),gn(this,n,t))}),t)),t.f=e}s=fn.prototype,s.add=function(t,e){dn(this),this.c=null,t=mn(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},s.forEach=function(t,e){dn(this),this.a.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},s.L=function(){dn(this);for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},s.K=function(t){dn(this);var e=[];if("string"===typeof t)vn(this,t)&&(e=k(e,this.a.get(mn(this,t))));else{t=this.a.K();for(var n=0;n<t.length;n++)e=k(e,t[n])}return e},s.set=function(t,e){return dn(this),this.c=null,t=mn(this,t),vn(this,t)&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},s.get=function(t,e){return t?(t=this.K(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.K(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.c=t.join("&")};var yn=function(){function t(t,e){this.b=t,this.a=e}return t}();function _n(t){this.g=t||wn,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(u.ja&&u.ja.za&&u.ja.za()&&u.ja.za().Qb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var wn=10;function On(t){return!!t.b||!!t.a&&t.a.size>=t.f}function En(t){return t.b?1:t.a?t.a.size:0}function In(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function Tn(t,e){t.a?t.a.add(e):t.b=e}function Sn(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function kn(t){var e,n;if(null!=t.b)return t.c.concat(t.b.s);if(null!=t.a&&0!==t.a.size){var r=t.c;try{for(var i=o(t.a.values()),s=i.next();!s.done;s=i.next()){var a=s.value;r=r.concat(a.s)}}catch(c){e={error:c}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return j(t.c)}function jn(){}function Cn(){this.a=new jn}function An(t,e,n){var r=n||"";try{Be(t,(function(t,n){var i=t;f(t)&&(i=Nt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rn(t,e){var n=new ee;if(u.Image){var r=new Image;r.onload=y(xn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(xn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(xn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(xn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function xn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}_n.prototype.cancel=function(){var t,e;if(this.c=kn(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=o(this.a.values()),r=n.next();!r.done;r=n.next()){var i=r.value;i.cancel()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},jn.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},jn.prototype.parse=function(t){return u.JSON.parse(t,void 0)};var Pn=u.JSON.parse;function Nn(t){Rt.call(this),this.headers=new $e,this.l=t||null,this.b=!1,this.u=this.a=null,this.C="",this.h=0,this.f="",this.g=this.B=this.m=this.A=!1,this.s=0,this.o=null,this.I=Ln,this.F=this.G=!1}w(Nn,Rt);var Ln="",Dn=/^https?$/i,Mn=["POST","PUT"];function Un(t){return z&&et(9)&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Fn(t){return"content-type"==t.toLowerCase()}function Vn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,Bn(t),Hn(t)}function Bn(t){t.A||(t.A=!0,xt(t,"complete"),xt(t,"error"))}function $n(t){if(t.b&&"undefined"!=typeof c&&(!t.u[1]||4!=Wn(t)||2!=t.W()))if(t.m&&4==Wn(t))Kt(t.Aa,0,t);else if(xt(t,"readystatechange"),4==Wn(t)){t.b=!1;try{var e,n=t.W();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var o=String(t.C).match(We)[1]||null;if(!o&&u.self&&u.self.location){var s=u.self.location.protocol;o=s.substr(0,s.length-1)}i=!Dn.test(o?o.toLowerCase():"")}e=i}var a=e;if(a)xt(t,"complete"),xt(t,"success");else{t.h=6;try{var l=2<Wn(t)?t.a.statusText:""}catch(n){l=""}t.f=l+" ["+t.W()+"]",Bn(t)}}finally{Hn(t)}}}function Hn(t,e){if(t.a){zn(t);var n=t.a,r=t.u[0]?l:null;t.a=null,t.u=null,e||xt(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function zn(t){t.a&&t.F&&(t.a.ontimeout=null),t.o&&(u.clearTimeout(t.o),t.o=null)}function Wn(t){return t.a?t.a.readyState:0}function Gn(t){var e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Gn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ze(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xn(t){this.qa=0,this.g=[],this.c=new ee,this.ha=this.ma=this.B=this.ga=this.a=this.oa=this.A=this.V=this.i=this.O=this.l=null,this.Pa=this.R=0,this.Ma=Kn("failFast",!1,t),this.G=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.pa=this.P=-1,this.T=this.o=this.u=0,this.Ia=Kn("baseRetryDelayMs",5e3,t),this.Sa=Kn("retryDelaySeedMs",1e4,t),this.Na=Kn("forwardChannelMaxRetries",2,t),this.na=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.Oa=t&&t.xmlHttpFactory||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new _n(t&&t.concurrentRequestLimit),this.la=new Cn,this.ea=t&&t.fastHandshake||!1,this.Ja=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.S=!1),this.U=!this.ea&&this.S&&t&&t.detectBufferingProxy||!1,this.fa=void 0,this.N=0,this.F=!1,this.s=null,(this.La=t&&t.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function Jn(t){if(Qn(t),3==t.v){var e=t.R++,n=Ke(t.B);Ze(n,"SID",t.J),Ze(n,"RID",e),Ze(n,"TYPE","terminate"),rr(t,n),e=new Se(t,t.c,e,void 0),e.G=2,e.i=tn(Ke(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.i.toString(),"")),!n&&u.Image&&((new Image).src=e.i,n=!0),n||(e.a=vr(e.g,null),e.a.ba(e.i)),e.u=_(),Ne(e)}dr(t)}function Yn(t){t.a&&(ar(t),t.a.cancel(),t.a=null)}function Qn(t){Yn(t),t.j&&(u.clearTimeout(t.j),t.j=null),ur(t),t.b.cancel(),t.h&&("number"===typeof t.h&&u.clearTimeout(t.h),t.h=null)}function Zn(t,e){t.g.push(new yn(t.Pa++,e)),3==t.v&&tr(t)}function tr(t){On(t.b)||t.h||(t.h=!0,Bt(t.Ca,t),t.u=0)}function er(t,e){return!(En(t.b)>=t.b.f-(t.h?1:0))&&(t.h?(t.g=e.s.concat(t.g),!0):!(1==t.v||2==t.v||t.u>=(t.Ma?0:t.Na))&&(t.h=ve(b(t.Ca,t,e),hr(t,t.u)),t.u++,!0))}function nr(t,e){var n;n=e?e.f:t.R++;var r=Ke(t.B);Ze(r,"SID",t.J),Ze(r,"RID",n),Ze(r,"AID",t.P),rr(t,r),t.i&&t.l&&qn(r,t.i,t.l),n=new Se(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=ir(t,n,1e3),n.setTimeout(Math.round(.5*t.na)+Math.round(.5*t.na*Math.random())),Tn(t.b,n),Ae(n,r,e)}function rr(t,e){t.f&&Be({},(function(t,n){Ze(e,n,t)}))}function ir(t,e,n){n=Math.min(t.g.length,n);var r=t.f?b(t.f.Ka,t.f,t):null;t:for(var i=t.g,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].b,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,c=0;c<n;c++){var u=i[c].b,l=i[c].a;if(u-=o,0>u)o=Math.max(0,i[c].b-100),a=!1;else try{An(l,s,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=s.join("&");break t}}return t=t.g.splice(0,n),e.s=t,r}function or(t){t.a||t.j||(t.T=1,Bt(t.Ba,t),t.o=0)}function sr(t){return!(t.a||t.j||3<=t.o)&&(t.T++,t.j=ve(b(t.Ba,t),hr(t,t.o)),t.o++,!0)}function ar(t){null!=t.s&&(u.clearTimeout(t.s),t.s=null)}function cr(t){t.a=new Se(t,t.c,"rpc",t.T),null===t.i&&(t.a.B=t.l),t.a.O=0;var e=Ke(t.ma);Ze(e,"RID","rpc"),Ze(e,"SID",t.J),Ze(e,"CI",t.G?"0":"1"),Ze(e,"AID",t.P),rr(t,e),Ze(e,"TYPE","xmlhttp"),t.i&&t.l&&qn(e,t.i,t.l),t.D&&t.a.setTimeout(t.D);var n=t.a;t=t.ha,n.G=1,n.i=tn(Ke(e)),n.j=null,n.I=!0,Re(n,t)}function ur(t){null!=t.m&&(u.clearTimeout(t.m),t.m=null)}function lr(t,e){var n=null;if(t.a==e){ur(t),ar(t),t.a=null;var r=2}else{if(!In(t.b,e))return;n=e.s,Sn(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=_()-e.u;var i=t.u;r=ue(),xt(r,new pe(r,n,e,i)),tr(t)}else or(t);else if(i=e.h,3==i||0==i&&0<t.I||!(1==r&&er(t,e)||2==r&&sr(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:fr(t,5);break;case 4:fr(t,10);break;case 3:fr(t,6);break;default:fr(t,2)}}function hr(t,e){var n=t.Ia+Math.floor(Math.random()*t.Sa);return t.f||(n*=2),n*e}function fr(t,e){if(t.c.info("Error code "+e),2==e){var n=null;t.f&&(n=null);var r=b(t.cb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Xe(n,"https"),tn(n)),Rn(n.toString(),r)}else de(2);t.v=0,t.f&&t.f.sa(e),dr(t),Qn(t)}function dr(t){t.v=0,t.I=-1,t.f&&(0==kn(t.b).length&&0==t.g.length||(t.b.c.length=0,j(t.g),t.g.length=0),t.f.ra())}function pr(t,e,n){var r=en(n);if(""!=r.c)e&&Je(r,e+"."+r.c),Ye(r,r.h);else{var i=u.location;r=nn(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.V&&D(t.V,(function(t,e){Ze(r,e,t)})),e=t.A,n=t.oa,e&&n&&Ze(r,e,n),Ze(r,"VER",t.ia),rr(t,r),r}function vr(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.");return e=new Nn(t.Oa),e.G=t.C,e}function gr(){}function mr(){if(z&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function br(t,e){Rt.call(this),this.a=new Xn(e),this.g=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.a.i=t),this.o=e&&e.supportsCrossDomainXhr||!1,this.m=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.a.A=e,t=this.b,null!==t&&e in t&&(t=this.b,e in t&&delete t[e])),this.f=new wr(this)}function yr(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function _r(){Ie.call(this),this.status=1}function wr(t){this.a=t}function Or(t){this.f=t}function Er(t){Rt.call(this),this.u=t,this.h=void 0,this.readyState=Ir,this.status=0,this.responseType=this.responseText=this.statusText="",this.onreadystatechange=null,this.l=new Headers,this.b=null,this.s="GET",this.o="",this.a=!1,this.m=this.f=this.g=null}s=Nn.prototype,s.ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.C+"; newUri="+t);e=e?e.toUpperCase():"GET",this.C=t,this.f="",this.h=0,this.A=!1,this.b=!0,this.a=this.l?this.l.a():we.a(),this.u=this.l?ye(this.l):ye(we),this.a.onreadystatechange=b(this.Aa,this);try{this.B=!0,this.a.open(e,String(t),!0),this.B=!1}catch(o){return void Vn(this,o)}t=n||"";var i=new $e(this.headers);r&&Be(r,(function(t,e){i.set(e,t)})),r=S(i.L()),n=u.FormData&&t instanceof u.FormData,!(0<=I(Mn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.G&&(this.a.withCredentials=this.G);try{zn(this),0<this.s&&((this.F=Un(this.a))?(this.a.timeout=this.s,this.a.ontimeout=b(this.ya,this)):this.o=Kt(this.ya,this.s,this)),this.m=!0,this.a.send(t),this.m=!1}catch(o){Vn(this,o)}},s.ya=function(){"undefined"!=typeof c&&this.a&&(this.f="Timed out after "+this.s+"ms, aborting",this.h=8,xt(this,"timeout"),this.abort(8))},s.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,xt(this,"complete"),xt(this,"abort"),Hn(this))},s.H=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),Hn(this,!0)),Nn.X.H.call(this)},s.Aa=function(){this.j||(this.B||this.m||this.g?$n(this):this.Za())},s.Za=function(){$n(this)},s.W=function(){try{return 2<Wn(this)?this.a.status:-1}catch(t){return-1}},s.$=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},s.va=function(){return this.h},s.Ra=function(){return"string"===typeof this.f?this.f:String(this.f)},s=Xn.prototype,s.ia=8,s.v=1,s.Ca=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++;var e,n=new Se(this,this.c,t,void 0),r=this.l;if(this.O&&(r?(r=M(r),F(r,this.O)):r=this.O),null===this.i&&(n.B=r),this.ea)t:{for(var i=e=0;i<this.g.length;i++){var o=this.g[i];if(o="__data__"in o.a&&(o=o.a.__data__,"string"===typeof o)?o.length:void 0,void 0===o)break;if(e+=o,4096<e){e=i;break t}if(4096===e||i===this.g.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=ir(this,n,e),i=Ke(this.B),Ze(i,"RID",t),Ze(i,"CVER",22),this.A&&Ze(i,"X-HTTP-Session-Id",this.A),rr(this,i),this.i&&r&&qn(i,this.i,r),Tn(this.b,n),this.Ja&&Ze(i,"TYPE","init"),this.ea?(Ze(i,"$req",e),Ze(i,"SID","null"),n.U=!0,Ae(n,i,null)):Ae(n,i,e),this.v=2}}else 3==this.v&&(t?nr(this,t):0==this.g.length||On(this.b)||nr(this))},s.Ba=function(){if(this.j=null,cr(this),this.U&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N;this.c.info("BP detection timer enabled: "+t),this.s=ve(b(this.Ya,this),t)}},s.Ya=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.F=!0,de(10),Yn(this),cr(this))},s.Xa=function(){null!=this.m&&(this.m=null,Yn(this),sr(this),de(19))},s.cb=function(t){t?(this.c.info("Successfully pinged google.com"),de(2)):(this.c.info("Failed to ping google.com"),de(1))},s=gr.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.Ka=function(){},mr.prototype.a=function(t,e){return new br(t,e)},w(br,Rt),br.prototype.h=function(){this.a.f=this.f,this.o&&(this.a.C=!0);var t=this.a,e=this.g,n=this.b||void 0;de(0),t.ga=e,t.V=n||{},t.G=t.S,t.B=pr(t,null,t.ga),tr(t)},br.prototype.close=function(){Jn(this.a)},br.prototype.l=function(t){if("string"===typeof t){var e={};e.__data__=t,Zn(this.a,e)}else this.m?(e={},e.__data__=Nt(t),Zn(this.a,e)):Zn(this.a,t)},br.prototype.H=function(){this.a.f=null,delete this.f,Jn(this.a),delete this.a,br.X.H.call(this)},w(yr,Ee),w(_r,Ie),w(wr,gr),wr.prototype.ua=function(){xt(this.a,"a")},wr.prototype.ta=function(t){xt(this.a,new yr(t))},wr.prototype.sa=function(t){xt(this.a,new _r(t))},wr.prototype.ra=function(){xt(this.a,"b")},w(Or,be),Or.prototype.a=function(){return new Er(this.f)},Or.prototype.c=function(t){return function(){return t}}({}),w(Er,Rt);var Ir=0;function Tr(t){t.f.read().then(t.Ta.bind(t)).catch(t.ca.bind(t))}function Sr(t){t.readyState=4,t.g=null,t.f=null,t.m=null,kr(t)}function kr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Er.prototype,s.open=function(t,e){if(this.readyState!=Ir)throw this.abort(),Error("Error reopening a connection");this.s=t,this.o=e,this.readyState=1,kr(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var e={headers:this.l,method:this.s,credentials:this.h,cache:void 0};t&&(e.body=t),this.u.fetch(new Request(this.o,e)).then(this.Wa.bind(this),this.ca.bind(this))},s.abort=function(){this.responseText="",this.l=new Headers,this.status=0,this.f&&this.f.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Sr(this)),this.readyState=Ir},s.Wa=function(t){this.a&&(this.g=t,this.b||(this.status=this.g.status,this.statusText=this.g.statusText,this.b=t.headers,this.readyState=2,kr(this)),this.a&&(this.readyState=3,kr(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.Ua.bind(this),this.ca.bind(this)):"undefined"!==typeof u.ReadableStream&&"body"in t?(this.responseText="",this.f=t.body.getReader(),this.m=new TextDecoder,Tr(this)):t.text().then(this.Va.bind(this),this.ca.bind(this)))))},s.Ta=function(t){if(this.a){var e=this.m.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done});e&&(this.responseText+=e),t.done?Sr(this):kr(this),3==this.readyState&&Tr(this)}},s.Va=function(t){this.a&&(this.responseText=t,Sr(this))},s.Ua=function(){this.a&&Sr(this)},s.ca=function(){this.a&&Sr(this)},s.setRequestHeader=function(t,e){this.l.append(t,e)},s.getResponseHeader=function(t){return this.b&&this.b.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.b)return"";for(var t=[],e=this.b.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return"include"===this.h},set:function(t){this.h=t?"include":"same-origin"}}),mr.prototype.createWebChannel=mr.prototype.a,br.prototype.send=br.prototype.l,br.prototype.open=br.prototype.h,br.prototype.close=br.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",_e.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",Rt.prototype.listen=Rt.prototype.wa,Nn.prototype.listenOnce=Nn.prototype.xa,Nn.prototype.getLastError=Nn.prototype.Ra,Nn.prototype.getLastErrorCode=Nn.prototype.va,Nn.prototype.getStatus=Nn.prototype.W,Nn.prototype.getResponseJson=Nn.prototype.Qa,Nn.prototype.getResponseText=Nn.prototype.$,Nn.prototype.send=Nn.prototype.ba;var jr=function(){return new mr},Cr=function(){return ue()},Ar=ge,Rr=me,xr=ae,Pr={lb:0,ob:1,pb:2,Ib:3,Nb:4,Kb:5,Lb:6,Jb:7,Hb:8,Mb:9,PROXY:10,NOPROXY:11,Fb:12,Bb:13,Cb:14,Ab:15,Db:16,Eb:17,hb:18,gb:19,ib:20},Nr=Or,Lr=_e,Dr=Nn}).call(this,n("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d959:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&s(e.prototype,c(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=s(t);if(i(e,u))return e[u];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i);t.exports=r?function(t){return t&&o(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),f=n("fea9"),d=n("6eeb"),p=n("e2cc"),v=n("d2bb"),g=n("d44e"),m=n("2626"),b=n("59ed"),y=n("1626"),_=n("861d"),w=n("19aa"),O=n("8925"),E=n("2266"),I=n("1c7e"),T=n("4840"),S=n("2cf4").set,k=n("b575"),j=n("cdf9"),C=n("44de"),A=n("f069"),R=n("e667"),x=n("69f3"),P=n("94ca"),N=n("b622"),L=n("6069"),D=n("605d"),M=n("2d00"),U=N("species"),F="Promise",V=x.get,B=x.set,$=x.getterFor(F),H=f&&f.prototype,z=f,W=H,G=u.TypeError,q=u.document,K=u.process,X=A.f,J=X,Y=!!(q&&q.createEvent&&u.dispatchEvent),Q=y(u.PromiseRejectionEvent),Z="unhandledrejection",tt="rejectionhandled",et=0,nt=1,rt=2,it=1,ot=2,st=!1,at=P(F,(function(){var t=O(z),e=t!==String(z);if(!e&&66===M)return!0;if(c&&!W["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new z((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,st=n.then((function(){}))instanceof r,!st||!e&&L&&!Q})),ct=at||!I((function(t){z.all(t)["catch"]((function(){}))})),ut=function(t){var e;return!(!_(t)||!y(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;k((function(){var r=t.value,i=t.state==nt,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain;try{l?(i||(t.rejection===ot&&pt(t),t.rejection=it),!0===l?s=r:(p&&p.enter(),s=l(r),p&&(p.exit(),c=!0)),s===u.promise?d(G("Promise-chain cycle")):(a=ut(s))?h(a,s,f,d):f(s)):d(r)}catch(v){p&&!c&&p.exit(),d(v)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ft(t)}))}},ht=function(t,e,n){var r,i;Y?(r=q.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Q&&(i=u["on"+t])?i(r):t===Z&&C("Unhandled promise rejection",n)},ft=function(t){h(S,u,(function(){var e,n=t.facade,r=t.value,i=dt(t);if(i&&(e=R((function(){D?K.emit("unhandledRejection",r,n):ht(Z,n,r)})),t.rejection=D||dt(t)?ot:it,e.error))throw e.value}))},dt=function(t){return t.rejection!==it&&!t.parent},pt=function(t){h(S,u,(function(){var e=t.facade;D?K.emit("rejectionHandled",e):ht(tt,e,t.value)}))},vt=function(t,e,n){return function(r){t(e,r,n)}},gt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=rt,lt(t,!0))},mt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var r=ut(e);r?k((function(){var n={done:!1};try{h(r,e,vt(mt,n,t),vt(gt,n,t))}catch(i){gt(n,i,t)}})):(t.value=e,t.state=nt,lt(t,!1))}catch(i){gt({done:!1},i,t)}}};if(at&&(z=function(t){w(this,W),b(t),h(r,this);var e=V(this);try{t(vt(mt,e),vt(gt,e))}catch(n){gt(e,n)}},W=z.prototype,r=function(t){B(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:et,value:void 0})},r.prototype=p(W,{then:function(t,e){var n=$(this),r=n.reactions,i=X(T(this,z));return i.ok=!y(t)||t,i.fail=y(e)&&e,i.domain=D?K.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=et&&lt(n,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=V(t);this.promise=t,this.resolve=vt(mt,e),this.reject=vt(gt,e)},A.f=X=function(t){return t===z||t===o?new i(t):J(t)},!c&&y(f)&&H!==Object.prototype)){s=H.then,st||(d(H,"then",(function(t,e){var n=this;return new z((function(t,e){h(s,n,t,e)})).then(t,e)}),{unsafe:!0}),d(H,"catch",W["catch"],{unsafe:!0}));try{delete H.constructor}catch(bt){}v&&v(H,W)}a({global:!0,wrap:!0,forced:at},{Promise:z}),g(z,F,!1,!0),m(F),o=l(F),a({target:F,stat:!0,forced:at},{reject:function(t){var e=X(this);return h(e.reject,void 0,t),e.promise}}),a({target:F,stat:!0,forced:c||at},{resolve:function(t){return j(c&&this===o?z:this,t)}}),a({target:F,stat:!0,forced:ct},{all:function(t){var e=this,n=X(e),r=n.resolve,i=n.reject,o=R((function(){var n=b(e.resolve),o=[],s=0,a=1;E(t,(function(t){var c=s++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=X(e),r=n.reject,i=R((function(){var i=b(e.resolve);E(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";n("6c56")},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ea7b:function(t,e,n){"use strict";var r=n("6a7c");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]}))},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f30a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("b774");class i{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const r in t.settings){const e=t.settings[r];n[r]=e.defaultValue}const i="__vue-devtools-plugin-settings__"+t.id;let o={...n};try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(o,e)}catch(s){}this.fallbacks={getSettings(){return o},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(s){}o=t}},e.on(r["a"],(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?s(e):"Object"==(r=s(e))&&o(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fbb0:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};Object.create;Object.create},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));function r(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function o(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function a(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create;var c=n("a8e9"),u=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),l="[DEFAULT]",h=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new c["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(d(t))try{this.getOrInitializeService({instanceIdentifier:l})}catch(p){}try{for(var r=o(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var a=s(i.value,2),c=a[0],u=a[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});u.resolve(f)}catch(p){}}}catch(v){e={error:v}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=l),this.instancesDeferred.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return r(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(a(a([],s(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),s(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=l),this.instances.has(t)},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:i});try{for(var u=o(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var h=s(l.value,2),f=h[0],d=h[1],p=this.normalizeInstanceIdentifier(f);a===p&&d.resolve(c)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}return this.invokeOnInitCallbacks(c,a),c},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=o(i),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:f(e),options:r}),this.instances.set(e,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=l),this.component?this.component.multipleInstances?t:l:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function f(t){return t===l?void 0:t}function d(t){return"EAGER"===t.instantiationMode}
/**
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
 */var p=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new h(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.c9bc7259.js.map