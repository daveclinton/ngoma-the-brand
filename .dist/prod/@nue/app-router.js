var H={},I=[],G;function Z(){H={},I=[]}var N={configure(w){let{route:z="/",url_params:A=[],session_params:B=[],persistent_params:C=[]}=w;G={route:z.split("/"),url_params:A,session_params:B,persistent_params:C}},get state(){return{...K(H)?W(location):H,...R()}},on(w,z){I.push({names:w,fn:z})},bind(w,z){let[A,B]=w.split(":");I=I.filter((C)=>!(C.namespace==B&&C.names==A)),I.push({names:A,fn:z,namespace:B})},set(w,z){if(typeof w=="string")w={[w]:z};if(V(w,[...G.url_params,...G.session_params,...G.persistent_params]))w={...H,...w};let A=J(w);if(A&&history)q(A)},toggle(w,z){if(z===void 0)z=!N.state[w];return N.set({[w]:z}),z},del(w){N.set({[w]:null})},initialize(w={}){J(W(location)),O(w.root)},cleanup:Z};function O(w=document){w.addEventListener("click",(z)=>{let A=z.target.closest("[href]");if(!A||z.defaultPrevented||z.metaKey||z.ctrlKey||!L(A.pathname))return;z.preventDefault();let B=W(A),C=J(A.search?{...H,...B}:B);if(C)q(C)})}addEventListener("popstate",(w)=>{let z=w.state?.path;if(z&&!L(z))Z();J(w.state||{})});addEventListener("hmr",Z);function J(w){let z={...j(w),...Q(H,w)};if(!z)return;H=w;for(let A of I.reverse())if(V(z,A.names.split(" ")))A.fn(w,{path:U(w)});return z}function Q(w,z){let A={};for(let B in{...w,...z})if(B in z){if(z[B]!==w[B])A[B]=z[B]}else A[B]=null;return K(A)?null:A}function q(w){if(x(w))history.pushState(H,0,U()+$());else history.pushState(H,0,$()||"./")}function x(w){for(let z of G.route)if(z[0]==":"&&w[z.slice(1)]!==void 0)return!0}function T(w){let z=w.split("/"),A={};for(let B=1;B<G.route.length;B++){let C=G.route[B],M=z[B];if(C[0]==":"){if(M)A[C.slice(1)]=M}else if(C!=M)return}return A}function Y(w){let z=new URLSearchParams(w),A={};for(let[B,C]of z)if(G.url_params.includes(B))A[B]=C;return A}function W({pathname:w,search:z}){let A={...T(w),...Y(z)};if(!x(A))A[b()]="";return A}function b(){return G.route.find((z)=>z[0]==":").slice(1)}function L(w=""){let z=G.route[1];return z[0]==":"||z==w.split("/")[1]}function U(w=H){let z=G.route.map((B,C)=>B[0]==":"?w[B.slice(1)]:B),A=z.findIndex((B)=>B==null);if(A>0)z=z.slice(0,A+1);return z.join("/").replaceAll("//","/")}function $(){let w={};G.url_params.forEach(function(A){let B=H[A];if(B)w[A]=B});let z=new URLSearchParams(w);return z.size?"?"+z:""}function V(w,z){let A=Object.keys(w);return z.filter((B)=>A.includes(B))[0]}function K(w){return!w||!Object.keys(w)[0]}var X="$nue_state";function j(w){let z={};for(let[A,B]of Object.entries(w))if(G.session_params.includes(A)&&F(sessionStorage,A,B)||G.persistent_params.includes(A)&&F(localStorage,A,B))z[A]=B;return z}function R(){let w={};for(let z of[sessionStorage,localStorage]){let A=z[X];if(A)Object.assign(w,JSON.parse(A))}return w}function F(w,z,A){let B=JSON.parse(w[X]||"{}");if(B[z]!=A)return B[z]=A,w[X]=JSON.stringify(B),!0}export{N as router,$ as renderQuery,U as renderPath,Y as parseQueryData,T as parsePathData,L as matchesPath,x as hasPathData,J as fire,Q as diff,Z as cleanup};
