var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t){return""===t?void 0:+t}function g(t,n){t.value=null==n?"":n}let m;function b(t){m=t}const $=[],v=[],y=[],_=[],k=Promise.resolve();let x=!1;function E(t){y.push(t)}let w=!1;const A=new Set;function N(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];b(n),O(n.$$)}for($.length=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];A.has(n)||(A.add(n),n())}y.length=0}while($.length);for(;_.length;)_.pop()();x=!1,w=!1,A.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const j=new Set;function C(t,n){t&&t.i&&(j.delete(t),t.i(n))}function L(t,e,c){const{fragment:u,on_mount:s,on_destroy:i,after_update:l}=t.$$;u&&u.m(e,c),E(()=>{const e=s.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(E)}function S(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,k.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function B(n,r,c,u,s,i,f=[-1]){const a=m;b(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:f,skip_bound:!1};let h=!1;if(p.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&q(n,t)),e}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&C(n.$$.fragment),L(n,r.target,r.anchor),N()}b(a)}class M{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const P=[];const T=function(n,e=t){let o;const r=[];function u(t){if(c(n,t)&&(n=t,o)){const t=!P.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),P.push(e,n)}if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,s=t){const i=[c,s];return r.push(i),1===r.length&&(o=e(u)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}([{name:"치킨",price:5e3},{name:"떡볶이",price:1300},{name:"콜라",price:3e3}]);function z(t,n,e){const o=t.slice();return o[4]=n[e],o}function D(n){let e,o,r,c,u,h,g,m=n[4].name+"",b=n[4].price+"";return{c(){e=f("div"),o=f("p"),r=a(m),c=d(),u=f("p"),h=a(b),g=d(),p(o,"class","name svelte-1gbbfka"),p(u,"class","price svelte-1gbbfka"),p(e,"class","food svelte-1gbbfka")},m(t,n){i(t,e,n),s(e,o),s(o,r),s(e,c),s(e,u),s(u,h),s(e,g)},p:t,d(t){t&&l(e)}}}function F(n){let e,o,r,c,u,h,g,m=n[4].name+"",b=n[4].price+"";return{c(){e=f("div"),o=f("p"),r=a(m),c=d(),u=f("p"),h=a(b),g=d(),p(o,"class","name svelte-1gbbfka"),p(u,"class","price svelte-1gbbfka"),p(e,"class","food cant svelte-1gbbfka")},m(t,n){i(t,e,n),s(e,o),s(o,r),s(e,c),s(e,u),s(u,h),s(e,g)},p:t,d(t){t&&l(e)}}}function G(t){let n;function e(t,n){return t[4].price>t[0]?F:D}let o=e(t),r=o(t);return{c(){r.c(),n=a("")},m(t,e){r.m(t,e),i(t,n,e)},p(t,c){o===(o=e(t))&&r?r.p(t,c):(r.d(1),r=o(t),r&&(r.c(),r.m(n.parentNode,n)))},d(t){r.d(t),t&&l(n)}}}function H(n){let e,o,r,c,u,a,m=n[1],b=[];for(let t=0;t<m.length;t+=1)b[t]=G(z(n,m,t));return{c(){e=f("div"),o=f("input"),r=d(),c=f("div");for(let t=0;t<b.length;t+=1)b[t].c();p(o,"type","number"),p(c,"class","food-list svelte-1gbbfka"),p(e,"class","container svelte-1gbbfka")},m(t,l){i(t,e,l),s(e,o),g(o,n[0]),s(e,r),s(e,c);for(let t=0;t<b.length;t+=1)b[t].m(c,null);var f,d,p,h;u||(f=o,d="input",p=n[2],f.addEventListener(d,p,h),a=()=>f.removeEventListener(d,p,h),u=!0)},p(t,[n]){if(1&n&&h(o.value)!==t[0]&&g(o,t[0]),3&n){let e;for(m=t[1],e=0;e<m.length;e+=1){const o=z(t,m,e);b[e]?b[e].p(o,n):(b[e]=G(o),b[e].c(),b[e].m(c,null))}for(;e<b.length;e+=1)b[e].d(1);b.length=m.length}},i:t,o:t,d(t){t&&l(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(b,t),u=!1,a()}}}function I(t,n,e){let o;u(t,T,t=>e(3,o=t));let r=0;return[r,o,function(){r=h(this.value),e(0,r)}]}class J extends M{constructor(t){super(),B(this,t,I,H,c,{})}}function K(n){let e,o;return e=new J({}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,n){L(e,t,n),o=!0},p:t,i(t){o||(C(e.$$.fragment,t),o=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),(void 0).c.push(()=>{j.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(e.$$.fragment,t),o=!1},d(t){S(e,t)}}}return new class extends M{constructor(t){super(),B(this,t,null,K,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
