function r(t,e=document){return e.querySelector(t)}function l(t,e=document){return[...e.querySelectorAll(t)]}var y={};async function f(t,e){if(dispatchEvent(new Event("before:route")),y[location.pathname]=window.scrollY,!e)history.pushState({path:t},0,t);let n=H(await k(t)),i=r("title",n)?.textContent;if(i)document.title=i;let a='[name="nue:components"]';r(a).content=r(a,n).content;for(let o of l("script[src]",n))await import(o.getAttribute("src"));let c=A(n);$(c,()=>{let o=h(r("main"),r("main",n));h(r("body"),r("body2",n),o);let{hash:u}=location,s=u&&r(u);scrollTo(0,s?s.offsetTop-parseInt(getComputedStyle(s).scrollMarginTop)||0:0),dispatchEvent(new Event("route"));let[I,v]=location.pathname.split("/");dispatchEvent(new Event(`route:${v||"home"}`)),g(t)})}function w(t,e){t.addEventListener("click",(n)=>{let i=n.target.closest("[href]"),a=i?.getAttribute("href"),c=i?.getAttribute("target"),o=a?.split("/")?.pop()?.split(/[#?]/)?.shift();if(n.defaultPrevented||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||!a||a[0]=="#"||a?.includes("//")||a?.startsWith("mailto:")||o?.includes(".")&&!o?.endsWith(".html")||!!c)return;if(a!=location.pathname)e(a,i);n.preventDefault()})}function E(t){let e=location.pathname;return e.slice(0,e.lastIndexOf("/")+1)+t}function g(t,e="aria-current"){if(t[0]!="/")t=E(t);l(`[${e}]`).forEach((n)=>n.removeAttribute(e)),l("a").forEach((n)=>{if(!n.hash&&n.pathname==t)setTimeout(()=>n.setAttribute(e,"page"),50)})}var T=typeof window=="object";if(T){if(!document.startViewTransition)document.startViewTransition=(t)=>t();history.pushState({path:location.pathname},0),w(document,async(t,e)=>{let n=r("img",e);if(n)n.style.viewTransitionName="active-image";document.startViewTransition(async()=>{await f(t)})}),g(location.pathname),addEventListener("popstate",(t)=>{let{path:e}=t.state||{};if(e){let n=y[e];document.startViewTransition(async()=>{await f(e,!0),setTimeout(()=>window.scrollTo(0,n||0),10)})}})}function h(t,e,n){if(t.classList.value=e.classList.value,t.children.length==e.children.length)return[...t.children].forEach((i,a)=>{if(!(n&&i.tagName=="MAIN"))b(i,e.children[a])}),!0;else t.innerHTML=e.innerHTML}function b(t,e){if(t.outerHTML.replace(' aria-current="page"',"")!=e.outerHTML)t.replaceWith(e.cloneNode(!0))}function A(t){let e=l("link, style"),n=L(e,l("link, style",t));return n.forEach((i)=>r("head").appendChild(i)),M(t),n.filter((i)=>i.tagName=="link")}function d(t,e){return e.find((n)=>n.getAttribute("href")==t.getAttribute("href"))}function L(t,e){return t.forEach((n,i)=>n.disabled=!d(n,e)),e.filter((n)=>!d(n,t))}function p(t){return l("style",t).find((e)=>!e.attributes.length)}function M(t){let e=p(),n=p(t);if(e)e.replaceWith(n);else if(n)r("head").appendChild(n)}var m={};async function k(t){let e=m[t];if(e)return e;let n=await fetch(t);if(e=await n.text(),n.status==404&&e?.trim()[0]!="<"){let i=document.title="Page not found";r("article").innerHTML=`<section><h1>${i}</h1></section>`}else m[t]=e;return e}function H(t){t=t.replace(/<(\/?)body/g,"<$1body2");let e=document.createElement("template");return e.innerHTML=t.trim(),e.content}function $(t,e){let n=0;!t[0]?e():t.forEach((i,a)=>{C(i.href,()=>{if(++n==t.length)e()})})}function C(t,e){let n=document.createElement("link");n.rel="stylesheet",n.href=t,r("head").appendChild(n),n.onload=e}export{g as setActive,w as onclick,f as loadPage,l as $$,r as $};
