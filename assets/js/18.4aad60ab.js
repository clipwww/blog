(window.webpackJsonp=window.webpackJsonp||[]).push([[18,23],{303:function(e,t,n){},306:function(e,t,n){"use strict";n(303)},307:function(e,t,n){"use strict";n.r(t);var s={props:{theme:{type:String,default:"github-dark"}}},i=(n(306),n(4)),h=Object(i.a)(s,(function(){var e=this._self._c;return e("div",[e("script",{attrs:{src:"https://utteranc.es/client.js",type:"text/javascript",async:"",label:"Utterances","issue-term":"title",theme:this.theme,repo:"clipwww/blog",crossorigin:"anonymous"}})])}),[],!1,null,null,null);t.default=h.exports},313:function(e,t,n){"use strict";n.r(t);var s=n(64),i={components:{Utterances:n(307).default},data:()=>({theme:""}),mounted(){this.onThemeChanged(),window.addEventListener("theme-changed",this.onThemeChanged)},beforeDestroy(){window.removeEventListener("theme-changed",this.onThemeChanged)},methods:{onThemeChanged(e){const t=Object(s.f)().get();this.theme=t?"github-dark":"github-light"}}},h=n(4),r=Object(h.a)(i,(function(){return(0,this._self._c)("Utterances",{key:this.theme,attrs:{theme:this.theme}})}),[],!1,null,null,null);t.default=r.exports}}]);