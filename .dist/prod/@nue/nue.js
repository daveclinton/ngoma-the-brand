function u(Z){let{root:Q,fn:R,fns:F,deps:g,ctx:N}=Z;var C,M,X,W,V,_,Y=[];function T(J){return new Proxy({},{get(E,S){if(_){let U=W.indexOf(S);if(U>=0)return J[U]}return S===W?J:W.includes(S)?J[S]:S==V?X.indexOf(J):N[S]}})}function I(J,E,S,U){let K=O({fns:F,dom:Q.cloneNode(!0)},T(J),g,N);Y[U?"unshift":"push"](K),K.before(U||C),N.oninsert?.call(N,K.$el,J,{index:E,is_repaint:!!S,is_first:!E,is_last:E==X.length-1,items:X})}function j(){Y.forEach((J)=>J.unmount()),Y=[],X.forEach(I)}function w(J){let{unshift:E,splice:S,push:U,sort:K,reverse:q}=J;return Object.assign(J,{push(z){U.call(X,z),I(z,X.length-1)},unshift(z){E.call(X,z),I(z,0,null,Y[0].$el)},sort(z){K.call(X,z),j()},reverse(){q.call(X),j()},splice(z,D){Y.slice(z,z+D).forEach((G)=>G.unmount()),Y.splice(z,D),S.call(X,z,D)},shift(){J.splice(0,1)},pop(){J.splice(J.length-1,1)},remove(z){let D=X.indexOf(z);if(D>=0)J.splice(D,1)}})}function $(){var J;if([W,J=[],V,_]=R(N),X){if(J!==M)X=w(J),j(),M=J;return Y.forEach((E)=>E.update())}if(J){let E=Q.parentElement;C=document.createTextNode(""),E.insertBefore(C,Q),E.removeChild(Q),X=w(J),J.forEach(I),M=J}}return{update:$}}function h(Z){let{root:Q,fn:R,fns:F,deps:g,ctx:N}=Z,C=[];var M=Q,X,W;function V(Y,T){Z.processAttrs(Y);let I=O({fns:F,dom:Y},N,g,N);C.push(I),I.fn=T}V(Q,R);while(M=M.nextElementSibling){let Y=M.getAttribute(":else-if");if(Y)V(M,F[Y]),M.removeAttribute(":else-if");else if(M.hasAttribute(":else"))V(M,()=>!0),M.removeAttribute(":else");else{W=M;break}}function _(){if(!X){let T=Q.parentElement;X=document.createTextNode(""),T.insertBefore(X,Q)}let Y=C.find((T)=>T.fn(N));C.forEach((T)=>T==Y?T.before(X):T.unmount())}return{update:_,next:W}}var b={":if":h,":for":u},x=["class","style","id"];function O(Z,Q={},R=[],F={}){let{Impl:g,tmpl:N,fns:C=[],dom:M,inner:X}=Z,W=[];function V(q){let z=q.nodeType;if(z==3){let[D,G]=/:(\d+):/.exec(q.textContent.trim())||[],H=C[G];if(H)W.push((B)=>q.textContent=A(H(K)))}if(z==1){for(let B in b){let L=C[q.getAttribute(B)];if(B==":if"&&L&&q.getAttribute(":for"))if(L(K))continue;else q.removeAttribute(":for");if(L){q.removeAttribute(B);let P=b[B]({root:q,fn:L,fns:C,deps:R,ctx:K,processAttrs:_});return W.push(P.update),P}}let D=q.tagName.toLowerCase(),G=q.nextSibling;if(X&&D=="slot")return X.replace(q),{next:G};let H=R.find((B)=>B.name==D);if(H){if(q.firstChild){let P=document.createElement("_");P.append(...q.childNodes),H.inner=O({fns:C,dom:P},K,R)}let B=$(q),L=O(H,K,R,B).mount(q);if(M?.tagName.toLowerCase()==H.name)U.$el=L.$el;return W.push((P)=>J(L.$el,B)),U.$refs[q.getAttribute("ref")||D]=L.impl,{next:G}}else _(q),I(q,V)}}function _(q){for(let z of[...q.attributes])T(q,z.name,z.value)}function Y(q,z,D){if(q.getAttribute(z)!==D)if(D)q.setAttribute(z,D);else q.removeAttribute(z)}function T(q,z,D){if(z=="ref"||z=="name")U.$refs[D]=q;let G=C[D];if(!G)return;let H=z.slice(1),B=z[0];if(":@$".includes(B))q.removeAttribute(z);if(H=="attr")return W.push((L)=>{for(let[P,v]of Object.entries(G(K)))Y(q,P,v===!0?"":v)});if(B==":"){if(!["html","bind"].includes(H))W.push((L)=>{let P=G(K);Y(q,H,A(P))})}else if(B=="@")q[`on${H}`]=(L)=>{G.call(K,K,L);let P=F?.update;if(P)P();E()};else if(B=="$")W.push((L)=>{if(!(q[H]=!!G(K)))q.removeAttribute(H)});if(H=="html")W.push((L)=>q.innerHTML=G(K))}function I(q,z){let D=q.firstChild;while(D)D=z(D)?.next||D.nextSibling}function j(q,z){let D=q.getAttribute(":"+z),G=C[D];return G?G(K):K[D]||q.getAttribute(z)||q[z]||void 0}function w(q){let z={};for(let D of[...q.attributes]){let G=D.name.replace(":",""),H=j(q,G);if(!x.includes(G)&&typeof H!="object")z[G]=H==null?!0:H}return z}function $(q){return q.$attrs=w(q),new Proxy(q,{get(z,D){return j(q,D)}})}function J(q,z){let D=f(j(q,"class")||[],z.class);if(D[0])Y(q,"class",A(D," "));let{id:G,style:H}=z;if(H&&H.x!="")q.style=A(H);if(G)q.id=A(G)}function E(q){if(q)Object.assign(S,q);return W.map((z)=>z()),S.updated?.call(K,K),U}let S={},U={update:E,$el:M,get root(){return U.$el},$refs:{},$parent:F,impl:S,mountChild(q,z,D){let G=R.find((H)=>H.name==q);if(G){let H=O(G,D,R,K);return H.mount(z),H}},mount(q){let z=M||(U.$el=y(N)),D=q.querySelector("script");if(D)Object.assign(Q,JSON.parse(D.textContent)),q.insertAdjacentElement("afterend",D);if(g)S=U.impl=new g(K);S.mountChild=U.mountChild,S.$refs=U.$refs,S.update=E,V(z),q.replaceWith(z);for(let G of[...q.attributes])Y(z,G.name,G.value);return S.mounted?.call(K,K),E()},append(q){let z=document.createElement("_");return q.append(z),U.mount(z)},replace(q){V(M),q.replaceWith(...M.children),E()},before(q){if(M){if(U.$el=M,!document.body.contains(M))q.before(M);if(!M.walked)V(M),M.walked=1;return E()}},unmount(){try{U.root.remove()}catch(q){}S.unmounted?.call(K,K),E()}},K=new Proxy({},{get(q,z){if(z==="$attrs")return F.$attrs||{};for(let D of[U,S,Q,F,F.bind]){let G=D&&D[z];if(G!=null)return G}},set(q,z,D){if(F&&F[z]!==void 0)F[z]=D,F.update();else if(Object.prototype.hasOwnProperty.call(S,z))S[z]=D;else U[z]=D;return!0}});return U}function y(Z){let Q=document.createElement("_");return Q.innerHTML=Z.trim(),Q.firstChild}function A(Z,Q=""){return Z?.join?Z.filter((R)=>R||R===0).join(Q).trim().replace(/\s+/g," "):Z||""}function f(Z,Q){if(Z==Q)return[Z];if(!Z.join)Z=[Z];if(Q&&!Q.join)Q=[Q];return Z.concat(Q)}export{O as default,O as createApp};
