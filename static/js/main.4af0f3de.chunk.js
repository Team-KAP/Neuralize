(this.webpackJsonparia=this.webpackJsonparia||[]).push([[0],{66:function(e,t,n){e.exports=n(91)},72:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),l=n.n(i),c=(n(71),n(10)),o=n(11),s=n(14),u=n(15),m=(n(72),n(73),n(62)),d=n(46),p=n(16),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={test:13,input:12,value:0,setValue:0,currentActivation:"<select activation function>",currentInit:"<select weight initializer>",activations:["<select activation function>","relu","tanh","sigmoid","softmax"],inits:["<select weight initializer>","zeros","ones","normal","uniform","glorot uniform","he uniform"]},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(p.a.Toggle,{variant:"success",id:"dropdown-basic"},"Activation"),r.a.createElement(p.a.Menu,null,this.state.activations.map((function(t){return r.a.createElement(p.a.Item,{as:"button",onClick:function(){e.setState({currentActivation:t})}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.state.currentActivation),r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(p.a.Toggle,{variant:"success",id:"dropdown-basic"},"Weight Initializer"),r.a.createElement(p.a.Menu,null,this.state.inits.map((function(t){return r.a.createElement(p.a.Item,{as:"button",onClick:function(){e.setState({currentInit:t})}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.state.currentInit),r.a.createElement("br",null))}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={test:13,input:12,value:0,setValue:0,currentOpti:"<select optimizer>",optimizers:["<select optimizer>","SGD","RMSProp","Adadelta","Adam"]},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(p.a.Toggle,{variant:"success",id:"dropdown-basic"},"Optimizer"),r.a.createElement(p.a.Menu,null,this.state.optimizers.map((function(t){return r.a.createElement(p.a.Item,{as:"button",onClick:function(){e.setState({currentOpti:t}),e.props.appState.doSetOptimizer(t)}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.state.currentOpti),r.a.createElement("br",null))}}]),n}(a.Component),f=(n(76),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={currentCode:"model = Sequential()"},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{class:"codepanel"},r.a.createElement("h1",null,"Code"),r.a.createElement("p",null,this.state.currentCode))}}]),n}(a.Component)),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"TrainPanel"))}}]),n}(a.Component),b=(n(77),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{class:"settings"},r.a.createElement(m.a,{defaultActiveKey:"build",id:"settings"},r.a.createElement(d.a,{eventKey:"build",title:"Build"},r.a.createElement("div",null,r.a.createElement(v,{appState:this.props.appState}))),r.a.createElement(d.a,{eventKey:"learn",title:"Learn"},r.a.createElement("div",null,r.a.createElement(h,this.props))),r.a.createElement(d.a,{eventKey:"train",title:"Train"},r.a.createElement("div",null,r.a.createElement(E,this.props))))),r.a.createElement(f,null))}}]),n}(a.Component)),O=(n(64),function(){function e(){Object(c.a)(this,e),this.arrLayers=[],this.optimizer=0,this.metrics=0,this.loss=0}return Object(o.a)(e,[{key:"copy",value:function(e){console.log("keys of old:"),console.log(Object.keys(e)),this.arrLayers=e.arrLayers,this.optimizer=e.optimizer,this.metrics=e.metrics,this.loss=e.loss,this.initializer=e.initializer}},{key:"setOptimizer",value:function(e){this.optimizer=e}},{key:"reportContent",value:function(){console.log(this.arrLayers),console.log(this.optimizer),console.log(this.metrics),console.log(this.loss),console.log(" ")}}]),e}()),g=new Map;g.set("beginModel","model = Sequential()"),g.set("addLayer","model.add(Dense("),g.set("input_dim","input_dim="),g.set("compile","model.compile("),g.set("losser","loss="),g.set("optimizer","optimizer="),g.set("metrics","metrics=["),g.set("network_end","))");var y=n(61),j=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Model"),r.a.createElement(y.a,{graph:{nodes:[{id:"n0",x:0,y:0,size:3},{id:"n1",x:3,y:1,size:2},{id:"n2",x:1,y:3,size:1}],edges:[{id:"e0",source:"n0",target:"n1"},{id:"e1",source:"n1",target:"n2"},{id:"e2",source:"n2",target:"n0"}]},settings:{drawEdges:!0,clone:!1,defaultNodeColor:"#fff"}}))}}]),n}(a.Component);function z(){return r.a.createElement("div",{id:"content"},r.a.createElement(j,null))}var k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).doSetOptimizer=function(e){console.log("starting");var t=new O;t.copy(a.state.network),t.setOptimizer(e),a.setState((function(e){return{network:t}}))},a.state={network:new O,doAddLayer:function(){return a.doAddLayer()},doSetOptimizer:function(e){return a.doSetOptimizer(e)},doSetActivation:function(e){return a.doSetActivation(e)},doSetInitializer:function(e){return a.doSetInitializer(e)}},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{class:"wrapper"},r.a.createElement("p",null,r.a.createElement("br",null),this.state.network.optimizer," ",r.a.createElement("br",null)),r.a.createElement(z,null),r.a.createElement(b,{appState:this.state}))}},{key:"doAddLayer",value:function(){this.state.network;alert("Added Layer!")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.4af0f3de.chunk.js.map