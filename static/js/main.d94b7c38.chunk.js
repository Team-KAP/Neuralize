(this.webpackJsonpneuralize=this.webpackJsonpneuralize||[]).push([[0],{62:function(e,t,n){e.exports=n(74)},68:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},69:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),l=n.n(i),c=(n(67),n(23)),o=n(24),u=n(29),s=n(30),m=(n(68),n(69),n(59)),v=n(45),d=n(18),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setValue=function(e){return a.setState({value:e})},a.state={test:13,input:12,value:0,setValue:0,currentActivation:"Activ2ation",currentInit:"Weight Initializers",activations:["relu","tanh","sigmoid","softmax"],inits:["zeros","ones","normal","uniform","glorot uniform","he uniform"]},a}return Object(o.a)(n,[{key:"changeValue",value:function(e){console.log("Current Value is ",e.target.value)}},{key:"render",value:function(){var e=this;return console.log("stfu2"),r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(d.a.Toggle,{variant:"success",id:"dropdown-basic"},this.state.currentActivation),r.a.createElement(d.a.Menu,null,this.state.activations.map((function(t){return r.a.createElement(d.a.Item,{as:"button",onClick:function(){return e.setState({currentActivation:t})}},t)})))),r.a.createElement("br",null),r.a.createElement(d.a,null,r.a.createElement(d.a.Toggle,{variant:"success",id:"dropdown-basic"},this.state.currentInit),r.a.createElement(d.a.Menu,null,this.state.inits.map((function(e){return r.a.createElement(d.a.Item,{as:"button",onClick:function(){return console.log({init:e})}},e)})))))}}]),n}(a.Component),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement(m.a,{defaultActiveKey:"build",id:"settings"},r.a.createElement(v.a,{eventKey:"build",title:"Build"},r.a.createElement("div",null,r.a.createElement("p",null,"o"),r.a.createElement(f,this.props))),r.a.createElement(v.a,{eventKey:"learn",title:"Learn"},r.a.createElement("div",null,r.a.createElement("p",null,"mega"))),r.a.createElement(v.a,{eventKey:"train",title:"Train"},r.a.createElement("p",null,"lul"))))}}]),n}(a.Component);function h(){return r.a.createElement("div",{id:"content"})}var p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={units:0,test:13},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{class:"wrapper"},r.a.createElement(h,null),r.a.createElement(E,this.state))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.d94b7c38.chunk.js.map