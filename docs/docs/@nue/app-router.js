import{onclick as u,loadPage as m,setActive as d}from"./view-transitions.js";var g=typeof window=="object",o=[];async function h(t){for(let{pattern:e,fn:a}of o){let r=p(e,t);if(r)await a(r)}d(t)}g&&addEventListener("before:route",()=>{o.splice(0,o.length)});var w={on(t,e){o.push({pattern:t,fn:e})},start({path:t,root:e}){if(e)u(e,this.route);this.pattern=t,h(location.pathname)},route(t){scrollTo(0,0);let e=t.endsWith(".html");history.pushState({path:t,is_spa:!e},0,t),e?m(t):h(t)},set(t,e){let a=new URLSearchParams(location.search);a.set(t,e),history.replaceState(w.data,0,`?${a}`)},get data(){let{pattern:t}=this,e=t?p(t,location.pathname,!0):{},a=Object.fromEntries(new URLSearchParams(location.search));return{...e,...a}}};function p(t,e,a){let r=t.split("/").slice(1),i=e.split("/").slice(1);if(!a&&r.length!=i.length)return null;let l=!0,c={};return r.forEach((s,f)=>{let n=i[f];if(s[0]==":"){if(n)c[s.slice(1)]=1*n||n}else if(!a&&s!=n)l=!1}),l?c:null}export{w as router,p as match};
