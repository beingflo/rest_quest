const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};Te();const x={};function Le(e){x.context=e}const De=(e,t)=>e===t,C=Symbol("solid-proxy"),pe=Symbol("solid-track"),H={equals:De};let ye=$e;const O={},_=1,V=2,we={owned:null,cleanups:null,context:null,owner:null};var g=null;let R=null,h=null,D=null,y=null,$=null,se=0;function G(e,t){const n=h,r=g,s=e.length===0?we:{owned:null,cleanups:null,context:null,owner:t||r};g=s,h=null;try{return ie(()=>e(()=>le(s)),!0)}finally{h=n,g=r}}function E(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,pending:O,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==O?n.pending:n.value)),oe(n,s));return[ve.bind(n),r]}function Ie(e,t,n){const r=z(e,t,!0,_);k(r)}function M(e,t,n){const r=z(e,t,!1,_);k(r)}function Me(e,t,n){ye=Fe;const r=z(e,t,!1,_);r.user=!0,$?$.push(r):k(r)}function U(e,t,n){n=n?Object.assign({},H,n):H;const r=z(e,t,!0,0);return r.pending=O,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,k(r),ve.bind(r)}function me(e){if(D)return e();let t;const n=D=[];try{t=e()}finally{D=null}return ie(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==O){const o=s.pending;s.pending=O,oe(s,o)}}},!1),t}function K(e){let t,n=h;return h=null,t=e(),h=n,t}function Ue(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function be(){return h}function Be(e){const t=Symbol("context");return{id:t,Provider:Ge(t),defaultValue:e}}function qe(e){let t;return(t=xe(g,e.id))!==void 0?t:e.defaultValue}function Re(e){const t=U(e);return U(()=>te(t()))}function ve(){const e=R;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===_||e?k(this):W(this),y=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function oe(e,t,n){if(D)return e.pending===O&&D.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&ie(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];r&&R.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?y.push(o):$.push(o),o.observers&&Se(o)),r||(o.state=_)}if(y.length>1e6)throw y=[],new Error},!1),t}function k(e){if(!e.fn)return;le(e);const t=g,n=h,r=se;h=g=e,Ke(e,e.value,r),h=n,g=t}function Ke(e,t,n){let r;try{r=e.fn(t)}catch(s){Ae(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?oe(e,r):e.value=r,e.updatedAt=n)}function z(e,t,n,r=_,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==we&&(g.owned?g.owned.push(o):g.owned=[o]),o}function I(e){const t=R;if(e.state===0||t)return;if(e.state===V||t)return W(e);if(e.suspense&&K(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===_||t)k(e);else if(e.state===V||t){const s=y;y=null,W(e,n[0]),y=s}}function ie(e,t){if(y)return e();let n=!1;t||(y=[]),$?n=!0:$=[],se++;try{const r=e();return Qe(n),r}catch(r){Ae(r)}finally{y=null,n||($=null)}}function Qe(e){y&&($e(y),y=null),!e&&($.length?me(()=>{ye($),$=null}):$=null)}function $e(e){for(let t=0;t<e.length;t++)I(e[t])}function Fe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:I(s)}x.context&&Le();const r=e.length;for(t=0;t<n;t++)I(e[t]);for(t=r;t<e.length;t++)I(e[t])}function W(e,t){const n=R;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===_||n?s!==t&&I(s):(s.state===V||n)&&W(s,t))}}function Se(e){const t=R;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=V,r.pure?y.push(r):$.push(r),r.observers&&Se(r))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ae(e){throw e}function xe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:xe(e.owner,t):void 0}function te(e){if(typeof e=="function"&&!e.length)return te(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=te(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ge(e){return function(n){let r;return Ie(()=>r=K(()=>(g.context={[e]:n.value},Re(()=>n.children)))),r}}const He=Symbol("fallback");function ae(e){for(let t=0;t<e.length;t++)e[t]()}function Ve(e,t,n={}){let r=[],s=[],o=[],i=0,l=t.length>1?[]:null;return Ue(()=>ae(o)),()=>{let f=e()||[],u,c;return f[pe],K(()=>{let d=f.length,p,m,T,Q,F,S,A,N,P;if(d===0)i!==0&&(ae(o),o=[],r=[],s=[],i=0,l&&(l=[])),n.fallback&&(r=[He],s[0]=G(ke=>(o[0]=ke,n.fallback())),i=1);else if(i===0){for(s=new Array(d),c=0;c<d;c++)r[c]=f[c],s[c]=G(a);i=d}else{for(T=new Array(d),Q=new Array(d),l&&(F=new Array(d)),S=0,A=Math.min(i,d);S<A&&r[S]===f[S];S++);for(A=i-1,N=d-1;A>=S&&N>=S&&r[A]===f[N];A--,N--)T[N]=s[A],Q[N]=o[A],l&&(F[N]=l[A]);for(p=new Map,m=new Array(N+1),c=N;c>=S;c--)P=f[c],u=p.get(P),m[c]=u===void 0?-1:u,p.set(P,c);for(u=S;u<=A;u++)P=r[u],c=p.get(P),c!==void 0&&c!==-1?(T[c]=s[u],Q[c]=o[u],l&&(F[c]=l[u]),c=m[c],p.set(P,c)):o[u]();for(c=S;c<d;c++)c in T?(s[c]=T[c],o[c]=Q[c],l&&(l[c]=F[c],l[c](c))):s[c]=G(a);s=s.slice(0,i=d),r=f.slice(0)}return s});function a(d){if(o[c]=d,l){const[p,m]=E(c);return l[c]=m,t(f[c],p)}return t(f[c])}}}function w(e,t){return K(()=>e(t||{}))}function Ne(e){const t="fallback"in e&&{fallback:()=>e.fallback};return U(Ve(()=>e.each,e.children,t||void 0))}function B(e){let t=!1;const n=U(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return U(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?K(()=>s(r)):s}return e.fallback})}function We(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,f=t[s-1].nextSibling,u=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const c=o<r?l?n[l-1].nextSibling:n[o-l]:f;for(;l<o;)e.insertBefore(n[l++],c)}else if(o===l)for(;i<s;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],c),t[s]=n[o]}else{if(!u){u=new Map;let a=l;for(;a<o;)u.set(n[a],a++)}const c=u.get(t[i]);if(c!=null)if(l<c&&c<o){let a=i,d=1,p;for(;++a<s&&a<o&&!((p=u.get(t[a]))==null||p!==c+d);)d++;if(d>c-l){const m=t[i];for(;l<c;)e.insertBefore(n[l++],m)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const de="_$DX_DELEGATE";function Je(e,t,n){let r;return G(s=>{r=s,t===document?e():v(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function b(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function ce(e,t=window.document){const n=t[de]||(t[de]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Xe))}}function v(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return J(e,t,r,n);M(s=>J(e,t(),s,n),r)}function Xe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r(s,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function J(e,t,n,r,s){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(x.context)return n;if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=j(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(x.context)return n;n=j(e,n,r)}else{if(o==="function")return M(()=>{let l=t();for(;typeof l=="function";)l=l();n=J(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[];if(ne(l,t,s))return M(()=>n=J(e,l,n,r,!0)),()=>n;if(x.context){for(let f=0;f<l.length;f++)if(l[f].parentNode)return n=l}if(l.length===0){if(n=j(e,n,r),i)return n}else Array.isArray(n)?n.length===0?he(e,l,r):We(e,n,l):(n&&j(e),he(e,l));n=l}else if(t instanceof Node){if(x.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=j(e,n,r,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n){let r=!1;for(let s=0,o=t.length;s<o;s++){let i=t[s],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=ne(e,i)||r;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();r=ne(e,Array.isArray(i)?i:[i])||r}else e.push(i),r=!0;else e.push(document.createTextNode(i.toString()))}return r}function he(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function j(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const f=l.parentNode===e;!o&&!i?f?e.replaceChild(s,l):e.insertBefore(s,n):f&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Ee=Symbol("store-raw"),X=Symbol("store-node"),Ye=Symbol("store-name");function _e(e,t){let n=e[C];if(!n){Object.defineProperty(e,C,{value:n=new Proxy(e,et)});const r=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let o=0,i=r.length;o<i;o++){const l=r[o];if(s[l].get){const f=s[l].get.bind(n);Object.defineProperty(e,l,{get:f})}}}return n}function Y(e){return e!=null&&typeof e=="object"&&(e[C]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function q(e,t=new Set){let n,r,s,o;if(n=e!=null&&e[Ee])return n;if(!Y(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,l=e.length;i<l;i++)s=e[i],(r=q(s,t))!==s&&(e[i]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let f=0,u=i.length;f<u;f++)o=i[f],!l[o].get&&(s=e[o],(r=q(s,t))!==s&&(e[o]=r))}return e}function ue(e){let t=e[X];return t||Object.defineProperty(e,X,{value:t={}}),t}function re(e,t,n){return e[t]||(e[t]=je(n,!0))}function Ze(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===C||t===X||t===Ye||(delete n.value,delete n.writable,n.get=()=>e[C][t]),n}function Pe(e){if(be()){const t=ue(e);(t._||(t._=je()))()}}function ze(e){return Pe(e),Reflect.ownKeys(e)}function je(e,t){const[n,r]=E(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=r,n}const et={get(e,t,n){if(t===Ee)return e;if(t===C)return n;if(t===pe)return Pe(e);const r=ue(e),s=r[t];let o=s?r[t]():e[t];if(t===X||t==="__proto__")return o;if(!s){const i=Object.getOwnPropertyDescriptor(e,t);be()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(o=re(r,t,o)())}return Y(o)?_e(o):o},set(){return!0},deleteProperty(){return!0},ownKeys:ze,getOwnPropertyDescriptor:Ze};function Z(e,t,n){if(e[t]===n)return;const r=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let o=ue(e),i;(i=re(o,t,r))&&i.$(()=>n),Array.isArray(e)&&e.length!==s&&(i=re(o,"length",s))&&i.$(e.length),(i=o._)&&i.$()}function Ce(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];Z(e,s,t[s])}}function tt(e,t){if(typeof t=="function"&&(t=t(e)),t=q(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&Z(e,n,s)}Z(e,"length",r)}else Ce(e,t)}function L(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const i=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let f=0;f<r.length;f++)L(e,[r[f]].concat(t),n);return}else if(l&&i==="function"){for(let f=0;f<e.length;f++)r(e[f],f)&&L(e,[f].concat(t),n);return}else if(l&&i==="object"){const{from:f=0,to:u=e.length-1,by:c=1}=r;for(let a=f;a<=u;a+=c)L(e,[a].concat(t),n);return}else if(t.length>1){L(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let o=t[0];typeof o=="function"&&(o=o(s,n),o===s)||r===void 0&&o==null||(o=q(o),r===void 0||Y(s)&&Y(o)&&!Array.isArray(o)?Ce(s,o):Z(e,r,o))}function nt(e,t){const n=q(e||{}),r=Array.isArray(n),s=_e(n);function o(...i){me(()=>{r&&i.length===1?tt(n,i[0]):L(n,i)})}return[s,o]}const rt=e=>t=>t.target.tagName!=="INPUT"&&e(),st=()=>crypto.randomUUID(),ge="quests",Oe=Be({});function ot(e){const t=localStorage.getItem(ge),[n,r]=nt(t?JSON.parse(t):{});Me(()=>localStorage.setItem(ge,JSON.stringify(n)));const s=[n,{setSelectedProject(o){r({selectedProject:o})},addProject(o){const i=st();return r({projects:[...n.projects??[],{id:i,name:o,quests:[]}]}),i},deleteProject(o){const i=n.projects?.filter(l=>l.id!==o)??[];r({projects:[...i]})}}];return w(Oe.Provider,{value:s,get children(){return e.children}})}function fe(){return qe(Oe)}const it=b('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),lt=b('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),ct=b('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Del</div>'),ut=b('<div class="group flex flex-row gap-1 items-baseline"></div>'),ft=b('<div class="cursor-pointer"></div>'),at=e=>{const[,{setSelectedProject:t,deleteProject:n}]=fe(),[r,s]=E(!1),[o,i]=E(e.project.name),l=()=>{t(e.project.name)};return(()=>{const f=ut.cloneNode(!0);return v(f,w(B,{get when(){return r()},get fallback(){return(()=>{const u=ft.cloneNode(!0);return u.$$click=l,v(u,o),u})()},get children(){const u=it.cloneNode(!0),c=u.firstChild;return u.addEventListener("submit",()=>s(!1)),c.$$input=a=>i(a?.currentTarget.value),c.addEventListener("blur",()=>s(!1)),M(()=>c.value=o()),u}}),null),v(f,w(B,{get when(){return!r()},get children(){return[(()=>{const u=lt.cloneNode(!0);return u.$$click=()=>s(!0),u})(),(()=>{const u=ct.cloneNode(!0);return u.$$click=()=>n(e.project.id),u})()]}}),null),f})()};ce(["input","click"]);var dt=["Shift","Meta","Alt","Control"],ht=typeof navigator=="object"&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function ee(e,t){return typeof e.getModifierState=="function"&&e.getModifierState(t)}function gt(e){return e.trim().split(" ").map(function(t){var n=t.split(/\b\+/),r=n.pop();return[n=n.map(function(s){return s==="$mod"?ht:s}),r]})}function pt(e,t){var n;t===void 0&&(t={});var r=(n=t.timeout)!=null?n:1e3,s=Object.keys(e).map(function(l){return[gt(l),e[l]]}),o=new Map,i=null;return function(l){l instanceof KeyboardEvent&&(s.forEach(function(f){var u=f[0],c=f[1],a=o.get(u)||u;(function(d,p){return!(p[1].toUpperCase()!==d.key.toUpperCase()&&p[1]!==d.code||p[0].find(function(m){return!ee(d,m)})||dt.find(function(m){return!p[0].includes(m)&&p[1]!==m&&ee(d,m)}))})(l,a[0])?a.length>1?o.set(u,a.slice(1)):(o.delete(u),c(l)):ee(l,l.key)||o.delete(u)}),i&&clearTimeout(i),i=setTimeout(o.clear.bind(o),r))}}function yt(e,t,n){var r;n===void 0&&(n={});var s=(r=n.event)!=null?r:"keydown",o=pt(t,n);return e.addEventListener(s,o),function(){e.removeEventListener(s,o)}}const wt=b('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),mt=b('<div class="w-1/5 h-screen p-4 flex overflow-y-scroll"><div class="my-auto"></div></div>'),bt=()=>{const[e,{addProject:t}]=fe(),[n,r]=E(!1),[s,o]=E("");yt(window,{l:rt(()=>r(!0))});const i=()=>{r(!1),t(s())};return(()=>{const l=mt.cloneNode(!0),f=l.firstChild;return v(f,w(Ne,{get each(){return e.projects},children:u=>w(at,{project:u})}),null),v(f,w(B,{get when(){return n()},get children(){const u=wt.cloneNode(!0),c=u.firstChild;return u.addEventListener("submit",i),c.$$input=a=>o(a?.currentTarget.value),c.addEventListener("blur",i),u}}),null),l})()};ce(["input"]);const vt=b('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),$t=b('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),St=b('<div class="group flex flex-row gap-1 items-baseline w-fit"></div>'),At=b('<div class="max-w-lg truncate cursor-pointer"></div>'),xt=e=>{const[t,n]=E(!1),[r,s]=E(e.questName),o=()=>{n(!1),e.setName(r())};return(()=>{const i=St.cloneNode(!0);return v(i,w(B,{get when(){return t()},get fallback(){return(()=>{const l=At.cloneNode(!0);return l.$$click=()=>e.checkQuest(),v(l,r),l})()},get children(){const l=vt.cloneNode(!0),f=l.firstChild;return l.addEventListener("submit",o),f.$$input=u=>s(u?.currentTarget.value),f.addEventListener("blur",o),M(()=>f.value=r()),l}}),null),v(i,w(B,{get when(){return!t()},get children(){const l=$t.cloneNode(!0);return l.$$click=()=>n(!0),l}}),null),i})()};ce(["input","click"]);const Nt=b('<div class="w-full"><div class="mx-auto w-96 pt-4"></div></div>'),Et=()=>{fe();const[e,t]=E([]);let n=0;for(;n<20;)t([...e(),"quest "+n]),n+=1;return(()=>{const r=Nt.cloneNode(!0),s=r.firstChild;return v(s,w(Ne,{get each(){return e()},children:o=>w(xt,{questName:o,setName:i=>console.log(i),checkQuest:()=>console.log("check "+o)})})),r})()},_t=b('<div class="flex flex-row"></div>'),Pt=()=>w(ot,{get children(){const e=_t.cloneNode(!0);return v(e,w(bt,{}),null),v(e,w(Et,{}),null),e}});Je(()=>w(Pt,{}),document.getElementById("root"));
