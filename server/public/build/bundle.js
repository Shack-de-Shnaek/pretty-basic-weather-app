var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function l(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function a(e,n,i){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const i=e.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),p=u?t=>requestAnimationFrame(t):t;const f=new Set;function m(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&p(m)}function h(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=w("style");return function(t,e){h(t.head||t,e)}(g(t),e),e}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function x(){return _(" ")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e){t.value=null==e?"":e}function C(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function z(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e)return void(i.selected=!0)}t.selectedIndex=-1}function I(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function q(t,e,n){t.classList[n?"add":"remove"](e)}function N(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}const P=new Set;let M,T=0;function A(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-i.length;s&&(t.style.animation=i.join(", "),T-=s,T||p((()=>{T||(P.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),P.clear())})))}function F(t){M=t}function R(){if(!M)throw new Error("Function called outside component initialization");return M}function j(t){R().$$.on_destroy.push(t)}const L=[],O=[],D=[],W=[],H=Promise.resolve();let V=!1;function K(t){D.push(t)}const B=new Set;let Q,Y=0;function G(){const t=M;do{for(;Y<L.length;){const t=L[Y];Y++,F(t),J(t.$$)}for(F(null),L.length=0,Y=0;O.length;)O.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];B.has(e)||(B.add(e),e())}D.length=0}while(L.length);for(;W.length;)W.pop()();V=!1,B.clear(),F(t)}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function X(t,e,n){t.dispatchEvent(N(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||s(tt.c),tt=tt.p}function it(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function st(t,e,n,i){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const rt={duration:0};function ot(n,i,s){let o,c,l=i(n,s),a=!1,u=0;function h(){o&&A(n,o)}function y(){const{delay:i=0,duration:s=300,easing:r=e,tick:y=t,css:b}=l||rt;b&&(o=function(t,e,n,i,s,r,o,c=0){const l=16.666/i;let a="{\n";for(let t=0;t<=1;t+=l){const i=e+(n-e)*r(t);a+=100*t+`%{${o(i,1-i)}}\n`}const u=a+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,p=g(t);P.add(p);const f=p.__svelte_stylesheet||(p.__svelte_stylesheet=v(t).sheet),m=p.__svelte_rules||(p.__svelte_rules={});m[d]||(m[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${i}ms linear ${s}ms 1 both`,T+=1,d}(n,0,1,s,i,r,b,u++)),y(0,1);const $=d()+i,w=$+s;c&&c.abort(),a=!0,K((()=>X(n,!0,"start"))),c=function(t){let e;return 0===f.size&&p(m),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}((t=>{if(a){if(t>=w)return y(1,0),X(n,!0,"end"),h(),a=!1;if(t>=$){const e=r((t-$)/s);y(e,1-e)}}return a}))}let b=!1;return{start(){b||(b=!0,A(n),r(l)?(l=l(),(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then(y)):y())},invalidate(){b=!1},end(){a&&(h(),a=!1)}}}function ct(t){t&&t.c()}function lt(t,e,i,o){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,i),o||K((()=>{const e=l.map(n).filter(r);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(K)}function at(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(L.push(t),V||(V=!0,H.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(e,n,r,o,c,l,a,u=[-1]){const d=M;F(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(p.root);let f=!1;if(p.ctx=r?r(e,n.props||{},((t,n,...i)=>{const s=i.length?i[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),f&&ut(e,t)),n})):[],p.update(),f=!0,s(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(b)}else p.fragment&&p.fragment.c();n.intro&&it(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),G()}F(d)}class pt{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft=[];function mt(e,n=t){let i;const s=new Set;function r(t){if(o(e,t)&&(e=t,i)){const t=!ft.length;for(const t of s)t[1](),ft.push(t,e);if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,c=t){const l=[o,c];return s.add(l),1===s.size&&(i=n(r)||t),o(e),()=>{s.delete(l),0===s.size&&(i(),i=null)}}}}const ht=mt({weather:{main:"",description:"",icon:"01d"},temperature:{temp:273.15,realfeel:273.15},pressure:0,humidity:0,visibility:0,wind:{speed:0,deg:0}}),gt=mt({city:"",country:""}),vt=(()=>{const{subscribe:t,set:e,update:n}=mt({tempUnit:"C",visibilityUnit:"m",windSpeedUnit:"km/h"});return{subscribe:t,set:e,update:n,setTempUnit:t=>n((e=>(e.tempUnit=t,e))),setVisibilityUnit:t=>n((e=>(e.visibilityUnit=t,e))),setWindSpeedUnit:t=>n((e=>(e.windSpeedUnit=t,e)))}})();function yt(t){let e;return{c(){e=w("div"),e.textContent="Could not fetch weather data",S(e,"class","error-message svelte-f8leww")},m(t,n){y(t,e,n)},d(t){t&&b(e)}}}function bt(e){let n,i,r,o,c,l,a,u,d,p,f,m,g,v,$,_,k=e[0]&&yt();return{c(){n=w("header"),i=w("form"),r=w("span"),o=w("label"),o.textContent="City:",c=x(),l=w("input"),a=x(),u=w("span"),d=w("label"),d.textContent="Country Code:",p=x(),f=w("input"),m=x(),g=w("div"),g.innerHTML='<input type="submit" value="Search" class="search-button svelte-f8leww"/>',v=x(),k&&k.c(),S(o,"for","city-input"),S(o,"class","location-input-label"),S(l,"type","text"),S(l,"id","city-input"),S(l,"class","location-input-field svelte-f8leww"),l.required=!0,S(d,"for","country-input"),S(d,"class","location-input-label"),S(f,"type","text"),S(f,"id","country-input"),S(f,"class","location-input-field svelte-f8leww"),S(g,"class","search-button-wrapper svelte-f8leww"),q(g,"visible",""!=e[1]),S(i,"class","location-input-form svelte-f8leww"),S(n,"class","header svelte-f8leww")},m(t,s){var b;y(t,n,s),h(n,i),h(i,r),h(r,o),h(r,c),h(r,l),E(l,e[2].city),h(i,a),h(i,u),h(u,d),h(u,p),h(u,f),E(f,e[2].country),h(i,m),h(i,g),h(i,v),k&&k.m(i,null),$||(_=[U(l,"input",e[4]),U(f,"input",e[5]),U(i,"submit",(b=e[6],function(t){return t.preventDefault(),b.call(this,t)}))],$=!0)},p(t,[e]){4&e&&l.value!==t[2].city&&E(l,t[2].city),4&e&&f.value!==t[2].country&&E(f,t[2].country),2&e&&q(g,"visible",""!=t[1]),t[0]?k||(k=yt(),k.c(),k.m(i,null)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&b(n),k&&k.d(),$=!1,s(_)}}}function $t(t,e,n){let i;a(t,gt,(t=>n(2,i=t)));let s,{queryError:r=!1}=e;const o=gt.subscribe((t=>{n(1,s=t.city)})),c=function(){const t=R();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=N(e,n);i.slice().forEach((e=>{e.call(t,s)}))}}}(),l=()=>{c("command",{text:"startQuery"})};j((()=>{o()}));return t.$$set=t=>{"queryError"in t&&n(0,r=t.queryError)},[r,s,i,l,function(){i.city=this.value,gt.set(i)},function(){i.country=this.value,gt.set(i)},()=>l()]}class wt extends pt{constructor(t){super(),dt(this,t,$t,bt,o,{queryError:0})}}function _t(t,{delay:n=0,duration:i=400,easing:s=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:i,easing:s,css:t=>"opacity: "+t*r}}function xt(e){let n,i,s;return{c(){n=w("span"),i=_(e[1])},m(t,e){y(t,n,e),h(n,i)},p(t,e){2&e&&k(i,t[1])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function Ut(e){let n,i,s,r;return{c(){n=w("span"),i=_("°"),s=_(e[0])},m(t,e){y(t,n,e),h(n,i),h(n,s)},p(t,e){1&e&&k(s,t[0])},i(t){r||K((()=>{r=ot(n,_t,{}),r.start()}))},o:t,d(t){t&&b(n)}}}function St(e){let n,i,s;return{c(){n=w("span"),i=_(e[2])},m(t,e){y(t,n,e),h(n,i)},p(t,e){4&e&&k(i,t[2])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function kt(e){let n,i,s,r;return{c(){n=w("span"),i=_("°"),s=_(e[0])},m(t,e){y(t,n,e),h(n,i),h(n,s)},p(t,e){1&e&&k(s,t[0])},i(t){r||K((()=>{r=ot(n,_t,{}),r.start()}))},o:t,d(t){t&&b(n)}}}function Et(e){let n,i,s,r,c,a,u,d,p,f,m,g,v,$=e[1],U=e[0],k=e[2],E=e[0],C=xt(e),z=Ut(e),I=St(e),q=kt(e);return{c(){n=w("div"),i=w("div"),s=w("img"),c=x(),a=w("span"),C.c(),u=x(),z.c(),d=x(),p=w("hr"),f=x(),m=w("div"),g=_("Feels like \r\n        "),I.c(),v=x(),q.c(),l(s.src,r="./icons/"+e[3].weather.icon+".png")||S(s,"src",r),S(s,"alt","weather icon"),S(s,"class","weather-icon svelte-1p27wzz"),S(a,"class","temp svelte-1p27wzz"),S(i,"class","main-temp-container svelte-1p27wzz"),S(m,"class","realfeel-container svelte-1p27wzz"),S(n,"class","primary-container weather-card")},m(t,e){y(t,n,e),h(n,i),h(i,s),h(i,c),h(i,a),C.m(a,null),h(a,u),z.m(a,null),h(n,d),h(n,p),h(n,f),h(n,m),h(m,g),I.m(m,null),h(m,v),q.m(m,null)},p(e,[n]){8&n&&!l(s.src,r="./icons/"+e[3].weather.icon+".png")&&S(s,"src",r),2&n&&o($,$=e[1])?(et(),st(C,1,1,t),nt(),C=xt(e),C.c(),it(C),C.m(a,u)):C.p(e,n),1&n&&o(U,U=e[0])?(et(),st(z,1,1,t),nt(),z=Ut(e),z.c(),it(z),z.m(a,null)):z.p(e,n),4&n&&o(k,k=e[2])?(et(),st(I,1,1,t),nt(),I=St(e),I.c(),it(I),I.m(m,v)):I.p(e,n),1&n&&o(E,E=e[0])?(et(),st(q,1,1,t),nt(),q=kt(e),q.c(),it(q),q.m(m,null)):q.p(e,n)},i(t){it(C),it(z),it(I),it(q)},o(t){st(C),st(z),st(I),st(q)},d(t){t&&b(n),C.d(t),z.d(t),I.d(t),q.d(t)}}}function Ct(t,e,n){let i,s,r,o;a(t,ht,(t=>n(3,i=t)));const c=ht.subscribe((t=>{n(4,s=t.temperature.temp),n(5,r=t.temperature.realfeel)})),l=vt.subscribe((t=>{n(0,o=t.tempUnit)})),u=t=>{switch(o){case"C":return Math.round(t-273.15);case"F":return Math.round(9*(t-273.15)/5+32);default:return t}};let d=0,p=0;return j((()=>{c(),l()})),t.$$.update=()=>{49&t.$$.dirty&&(s||r||o)&&(n(1,d=u(s)),n(2,p=u(r)))},[o,d,p,i,s,r]}class zt extends pt{constructor(t){super(),dt(this,t,Ct,Et,o,{})}}function It(e){let n,i,s;return{c(){n=w("span"),i=_(e[1]),S(n,"class","svelte-ap0krx")},m(t,e){y(t,n,e),h(n,i)},p(t,e){2&e&&k(i,t[1])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function qt(e){let n,i,s;return{c(){n=w("span"),i=_(e[2]),S(n,"class","svelte-ap0krx")},m(t,e){y(t,n,e),h(n,i)},p(t,e){4&e&&k(i,t[2])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function Nt(e){let n,i,s;return{c(){n=w("span"),i=_(e[3]),S(n,"class","svelte-ap0krx")},m(t,e){y(t,n,e),h(n,i)},p(t,e){8&e&&k(i,t[3])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function Pt(e){let n,i,s;return{c(){n=w("span"),i=_(e[0]),S(n,"class","svelte-ap0krx")},m(t,e){y(t,n,e),h(n,i)},p(t,e){1&e&&k(i,t[0])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function Mt(e){let n,i,s,r,c,a,u,d,p,f,m,g,v,$,U,k,E,C,z,I,q,N,P,M=e[1],T=e[2],A=e[3],F=e[0],R=It(e),j=qt(e),L=Nt(e),O=Pt(e);return{c(){n=w("div"),i=w("div"),s=w("div"),r=w("img"),a=x(),u=w("span"),d=_("Humidity: \r\n                "),R.c(),p=_("\r\n            %"),f=x(),m=w("div"),g=w("img"),$=x(),U=w("span"),k=_("Pressure\r\n                "),j.c(),E=_("\r\n            hPa"),C=x(),z=w("div"),I=w("img"),N=x(),L.c(),P=x(),O.c(),l(r.src,c="./icons/humidity.png")||S(r,"src","./icons/humidity.png"),S(r,"alt","humidity-icon"),S(r,"class","svelte-ap0krx"),S(u,"class","svelte-ap0krx"),S(s,"class","weather-property-weather svelte-ap0krx"),l(g.src,v="./icons/gauge.png")||S(g,"src","./icons/gauge.png"),S(g,"alt","pressure-icon"),S(g,"class","svelte-ap0krx"),S(U,"class","svelte-ap0krx"),S(m,"class","weather-property-weather svelte-ap0krx"),l(I.src,q="./icons/visibility.png")||S(I,"src","./icons/visibility.png"),S(I,"alt","visibility-icon"),S(I,"class","svelte-ap0krx"),S(z,"class","weather-property-weather svelte-ap0krx"),S(i,"class","weather-property-container svelte-ap0krx"),S(n,"class","secondary-container weather-card")},m(t,e){y(t,n,e),h(n,i),h(i,s),h(s,r),h(s,a),h(s,u),h(u,d),R.m(u,null),h(u,p),h(i,f),h(i,m),h(m,g),h(m,$),h(m,U),h(U,k),j.m(U,null),h(U,E),h(i,C),h(i,z),h(z,I),h(z,N),L.m(z,null),h(z,P),O.m(z,null)},p(e,[n]){2&n&&o(M,M=e[1])?(et(),st(R,1,1,t),nt(),R=It(e),R.c(),it(R),R.m(u,p)):R.p(e,n),4&n&&o(T,T=e[2])?(et(),st(j,1,1,t),nt(),j=qt(e),j.c(),it(j),j.m(U,E)):j.p(e,n),8&n&&o(A,A=e[3])?(et(),st(L,1,1,t),nt(),L=Nt(e),L.c(),it(L),L.m(z,P)):L.p(e,n),1&n&&o(F,F=e[0])?(et(),st(O,1,1,t),nt(),O=Pt(e),O.c(),it(O),O.m(z,null)):O.p(e,n)},i(t){it(R),it(j),it(L),it(O)},o(t){st(R),st(j),st(L),st(O)},d(t){t&&b(n),R.d(t),j.d(t),L.d(t),O.d(t)}}}function Tt(t,e,n){let i,s,r,o;const c=ht.subscribe((t=>{n(1,i=t.humidity),n(2,s=t.pressure),n(4,r=t.visibility)})),l=vt.subscribe((t=>{n(0,o=t.visibilityUnit)}));let a=0;return j((()=>{c(),l()})),t.$$.update=()=>{17&t.$$.dirty&&(r||o)&&n(3,a="y"===o?Math.round(1.094*r):r)},[o,i,s,a,r]}class At extends pt{constructor(t){super(),dt(this,t,Tt,Mt,o,{})}}function Ft(e){let n,i,s;return{c(){n=w("span"),i=_(e[2])},m(t,e){y(t,n,e),h(n,i)},p(t,e){4&e&&k(i,t[2])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function Rt(e){let n,i,s;return{c(){n=w("span"),i=_(e[0])},m(t,e){y(t,n,e),h(n,i)},p(t,e){1&e&&k(i,t[0])},i(t){s||K((()=>{s=ot(n,_t,{}),s.start()}))},o:t,d(t){t&&b(n)}}}function jt(e){let n,i,s,r,c,a,u,d,p,f,m,g=e[2],v=e[0],$=Ft(e),_=Rt(e);return{c(){n=w("div"),i=w("div"),s=w("div"),s.innerHTML='<div class="top">N</div> \n            <div class="middle svelte-1b1hy2c"><span class="svelte-1b1hy2c">W</span> \n                <div class="compass-center-circle svelte-1b1hy2c"></div> \n                <span class="svelte-1b1hy2c">E</span></div> \n            <div class="bottom">S</div>',r=x(),c=w("img"),u=x(),d=w("hr"),p=x(),f=w("div"),$.c(),m=x(),_.c(),S(s,"class","compass-background svelte-1b1hy2c"),l(c.src,a="./icons/compass-arrow.png")||S(c,"src","./icons/compass-arrow.png"),S(c,"alt","compass-arrow"),S(c,"class","compass-arrow svelte-1b1hy2c"),C(c,"transform","rotate("+e[1]+"deg)"),S(i,"class","compass-container svelte-1b1hy2c"),S(f,"class","wind-speed-container svelte-1b1hy2c"),S(n,"class","wind-container weather-card")},m(t,e){y(t,n,e),h(n,i),h(i,s),h(i,r),h(i,c),h(n,u),h(n,d),h(n,p),h(n,f),$.m(f,null),h(f,m),_.m(f,null)},p(e,[n]){2&n&&C(c,"transform","rotate("+e[1]+"deg)"),4&n&&o(g,g=e[2])?(et(),st($,1,1,t),nt(),$=Ft(e),$.c(),it($),$.m(f,m)):$.p(e,n),1&n&&o(v,v=e[0])?(et(),st(_,1,1,t),nt(),_=Rt(e),_.c(),it(_),_.m(f,null)):_.p(e,n)},i(t){it($),it(_)},o(t){st($),st(_)},d(t){t&&b(n),$.d(t),_.d(t)}}}function Lt(t,e,n){let i,s,r;const o=ht.subscribe((t=>{n(3,i=t.wind.speed),n(1,s=t.wind.deg)})),c=vt.subscribe((t=>{n(0,r=t.windSpeedUnit)}));let l=0;return j((()=>{o(),c()})),t.$$.update=()=>{9&t.$$.dirty&&(i||r)&&n(2,l=(()=>{switch(r){case"km/h":return Number((3.6*i).toPrecision(3));case"mph":return Number((2.237*i).toPrecision(3));case"fps":return Number((3.281*i).toPrecision(3));default:return i}})())},[r,s,l,i]}class Ot extends pt{constructor(t){super(),dt(this,t,Lt,jt,o,{})}}function Dt(t,e,n){const i=t.slice();return i[10]=e[n],i}function Wt(t,e,n){const i=t.slice();return i[10]=e[n],i}function Ht(t,e,n){const i=t.slice();return i[10]=e[n],i}function Vt(e){let n,i,s,r=e[10].text+"";return{c(){n=w("option"),i=_(r),n.__value=s=e[10].unit,n.value=n.__value},m(t,e){y(t,n,e),h(n,i)},p:t,d(t){t&&b(n)}}}function Kt(e){let n,i,s,r=e[10].text+"";return{c(){n=w("option"),i=_(r),n.__value=s=e[10].unit,n.value=n.__value},m(t,e){y(t,n,e),h(n,i)},p:t,d(t){t&&b(n)}}}function Bt(e){let n,i,s,r=e[10].text+"";return{c(){n=w("option"),i=_(r),n.__value=s=e[10].text,n.value=n.__value},m(t,e){y(t,n,e),h(n,i)},p:t,d(t){t&&b(n)}}}function Qt(e){let n,i,r,o,c,l,a,u,d,p,f,m,g,v,_,k,E,C,I,q,N,P,M,T,A,F,R=e[1],j=[];for(let t=0;t<R.length;t+=1)j[t]=Vt(Ht(e,R,t));let L=e[2],O=[];for(let t=0;t<L.length;t+=1)O[t]=Kt(Wt(e,L,t));let D=e[3],W=[];for(let t=0;t<D.length;t+=1)W[t]=Bt(Dt(e,D,t));return{c(){n=w("div"),i=w("div"),r=w("form"),o=w("label"),o.textContent="Temperature Unit",c=x(),l=w("select");for(let t=0;t<j.length;t+=1)j[t].c();a=x(),u=w("hr"),d=x(),p=w("div"),f=w("form"),m=w("label"),m.textContent="Visibility Unit",g=x(),v=w("select");for(let t=0;t<O.length;t+=1)O[t].c();_=x(),k=w("hr"),E=x(),C=w("div"),I=w("form"),q=w("label"),q.textContent="Wind Speed Unit",N=x(),P=w("select");for(let t=0;t<W.length;t+=1)W[t].c();M=x(),T=w("hr"),S(o,"for","select-temp-unit"),S(l,"id","select-temp-unit"),S(l,"class","select-unit svelte-b67a5s"),void 0===e[0].tempUnit&&K((()=>e[4].call(l))),S(r,"class","unit-option-form svelte-b67a5s"),S(i,"class","option-container svelte-b67a5s"),S(m,"for","select-temp-unit"),S(v,"id","select-visibility-unit"),S(v,"class","select-unit svelte-b67a5s"),void 0===e[0].visibilityUnit&&K((()=>e[6].call(v))),S(f,"class","unit-option-form svelte-b67a5s"),S(p,"class","option-container svelte-b67a5s"),S(q,"for","select-temp-unit"),S(P,"id","select-wind-speed-unit"),S(P,"class","select-unit svelte-b67a5s"),void 0===e[0].windSpeedUnit&&K((()=>e[8].call(P))),S(I,"class","unit-option-form svelte-b67a5s"),S(C,"class","option-container svelte-b67a5s"),S(n,"class","weather-card settings-card svelte-b67a5s")},m(t,s){y(t,n,s),h(n,i),h(i,r),h(r,o),h(r,c),h(r,l);for(let t=0;t<j.length;t+=1)j[t].m(l,null);z(l,e[0].tempUnit),h(i,a),h(i,u),h(n,d),h(n,p),h(p,f),h(f,m),h(f,g),h(f,v);for(let t=0;t<O.length;t+=1)O[t].m(v,null);z(v,e[0].visibilityUnit),h(p,_),h(p,k),h(n,E),h(n,C),h(C,I),h(I,q),h(I,N),h(I,P);for(let t=0;t<W.length;t+=1)W[t].m(P,null);z(P,e[0].windSpeedUnit),h(C,M),h(C,T),A||(F=[U(l,"change",e[4]),U(l,"change",e[5]),U(v,"change",e[6]),U(v,"change",e[7]),U(P,"change",e[8]),U(P,"change",e[9])],A=!0)},p(t,[e]){if(2&e){let n;for(R=t[1],n=0;n<R.length;n+=1){const i=Ht(t,R,n);j[n]?j[n].p(i,e):(j[n]=Vt(i),j[n].c(),j[n].m(l,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=R.length}if(3&e&&z(l,t[0].tempUnit),4&e){let n;for(L=t[2],n=0;n<L.length;n+=1){const i=Wt(t,L,n);O[n]?O[n].p(i,e):(O[n]=Kt(i),O[n].c(),O[n].m(v,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=L.length}if(3&e&&z(v,t[0].visibilityUnit),8&e){let n;for(D=t[3],n=0;n<D.length;n+=1){const i=Dt(t,D,n);W[n]?W[n].p(i,e):(W[n]=Bt(i),W[n].c(),W[n].m(P,null))}for(;n<W.length;n+=1)W[n].d(1);W.length=D.length}3&e&&z(P,t[0].windSpeedUnit)},i:t,o:t,d(t){t&&b(n),$(j,t),$(O,t),$(W,t),A=!1,s(F)}}}function Yt(t,e,n){let i;a(t,vt,(t=>n(0,i=t)));let s=[{id:1,text:"Celsius",unit:"C"},{id:2,text:"Fahrenheit",unit:"F"},{id:3,text:"Kelvin",unit:"K"}];return[i,s,[{id:1,text:"Meters",unit:"m"},{id:2,text:"Yards",unit:"y"}],[{id:1,text:"km/h"},{id:2,text:"mph"},{id:3,text:"m/s"},{id:4,text:"fps"}],function(){i.tempUnit=I(this),vt.set(i),n(1,s)},()=>localStorage.setItem("tempUnit",i.tempUnit),function(){i.visibilityUnit=I(this),vt.set(i),n(1,s)},()=>localStorage.setItem("visibilityUnit",i.visibilityUnit),function(){i.windSpeedUnit=I(this),vt.set(i),n(1,s)},()=>localStorage.setItem("windSpeedUnit",i.windSpeedUnit)]}class Gt extends pt{constructor(t){super(),dt(this,t,Yt,Qt,o,{})}}function Jt(t){let e,n,i,s,r,o,c,l,a,u,d,p;return n=new wt({props:{queryError:"could not fetch weather data"==t[0]}}),n.$on("command",t[2]),r=new zt({}),c=new At({}),a=new Ot({}),d=new Gt({}),{c(){e=w("main"),ct(n.$$.fragment),i=x(),s=w("div"),ct(r.$$.fragment),o=x(),ct(c.$$.fragment),l=x(),ct(a.$$.fragment),u=x(),ct(d.$$.fragment),S(s,"class","main-container svelte-1io6lar")},m(t,f){y(t,e,f),lt(n,e,null),h(e,i),h(e,s),lt(r,s,null),h(s,o),lt(c,s,null),h(s,l),lt(a,s,null),h(s,u),lt(d,s,null),p=!0},p(t,[e]){const i={};1&e&&(i.queryError="could not fetch weather data"==t[0]),n.$set(i)},i(t){p||(it(n.$$.fragment,t),it(r.$$.fragment,t),it(c.$$.fragment,t),it(a.$$.fragment,t),it(d.$$.fragment,t),p=!0)},o(t){st(n.$$.fragment,t),st(r.$$.fragment,t),st(c.$$.fragment,t),st(a.$$.fragment,t),st(d.$$.fragment,t),p=!1},d(t){t&&b(e),at(n),at(r),at(c),at(a),at(d)}}}function Xt(t,e,n){let i,s,r;gt.subscribe((t=>{i=t.city,s=t.country}));const o=()=>{(async()=>{n(0,r=await(async(t,e)=>{console.log("querying weather api...");try{let n=`api/weather/forecast?city=${t}${e?"&country="+e:""}`;console.log(n);let i=await fetch(n),s=await i.json();return console.log(s),ht.set(s),s}catch(t){return console.log("Could not fetch weather data"),"could not fetch weather data"}})(i,s))})()};var c;c=()=>{(()=>{const t=vt.subscribe((t=>{}));localStorage.getItem("tempUnit")&&(vt.setTempUnit(localStorage.getItem("tempUnit")),console.log(`tempUnit loaded from local storage ${localStorage.getItem("tempUnit")}`)),localStorage.getItem("visibilityUnit")&&(vt.setVisibilityUnit(localStorage.getItem("visibilityUnit")),console.log(`visibilityUnit loaded from local storage ${localStorage.getItem("visibilityUnit")}`)),localStorage.getItem("windSpeedUnit")&&(vt.setWindSpeedUnit(localStorage.getItem("windSpeedUnit")),console.log(`windSpeedUnit loaded from local storage ${localStorage.getItem("windSpeedUnit")}`)),t()})()},R().$$.on_mount.push(c);return[r,o,()=>o()]}return new class extends pt{constructor(t){super(),dt(this,t,Xt,Jt,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map