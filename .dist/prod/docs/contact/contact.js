import{loadPage as l}from"/@nue/view-transitions.js";var t=[{name:"contact-me",tagName:"form",tmpl:'<form autocomplete="on" @submit="0"> <label> <span>Your name</span> <input type="text" name="name" placeholder="Example: John Doe" required> </label> <label> <span>Your email</span> <input type="email" name="email" placeholder="your@email.com" required> </label> <label> <span>Requirements</span> <textarea name="feedback" placeholder="Type here..."></textarea> </label> <button>Lets talk!</button> </form>',Impl:class{submit(){l("thanks.html")}},fns:[(e,a)=>{a.preventDefault(),e.submit.call(e,a)}]}],n=t[0];export{t as lib,n as default};
