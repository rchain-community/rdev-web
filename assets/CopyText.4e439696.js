import{S as T,i as C,s as j,e as d,a as I,c as u,b as y,d as S,f,g as n,h as g,j as k,k as E,l as p,m as O,n as b,o as $}from"./vendor.2d6b14af.js";/* empty css                                               */var q="/rdev-web/assets/copy.43c52bd9.svg";function w(i){let t,a,e,c,s,o,h,_,m;return{c(){t=d("div"),a=d("div"),e=d("input"),c=I(),s=d("button"),o=d("img"),this.h()},l(l){t=u(l,"DIV",{class:!0});var r=y(t);a=u(r,"DIV",{});var v=y(a);e=u(v,"INPUT",{type:!0,class:!0,style:!0}),c=S(v),s=u(v,"BUTTON",{class:!0});var x=y(s);o=u(x,"IMG",{src:!0,style:!0,alt:!0}),x.forEach(f),v.forEach(f),r.forEach(f),this.h()},h(){n(e,"type","text"),e.readOnly="readonly",n(e,"class","project-text projectRevAddr svelte-xgphns"),e.value=i[0],g(e,"color","#A93226"),k(o.src,h=q)||n(o,"src",h),g(o,"width","1em"),n(o,"alt",""),n(s,"class","CopyButton svelte-xgphns"),n(t,"class","CopyText svelte-xgphns")},m(l,r){E(l,t,r),p(t,a),p(a,e),p(a,c),p(a,s),p(s,o),_||(m=O(s,"click",i[1]),_=!0)},p(l,[r]){r&1&&e.value!==l[0]&&(e.value=l[0])},i:b,o:b,d(l){l&&f(t),_=!1,m()}}}function A(i,t,a){let{text:e=""}=t;const c=()=>{$(e)&&console.info("Text copied")};return i.$$set=s=>{"text"in s&&a(0,e=s.text)},[e,c]}class B extends T{constructor(t){super();C(this,t,A,w,j,{text:0})}}var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});export{N as $,B as C};