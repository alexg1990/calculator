(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(e,t,r){e.exports=r(23)},16:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(4),c=r.n(l),u=(r(16),r(3));function i(e,t){return 0===e?{type:"SET_FIRSTNUMBER",addedNumber:t}:1===e?{type:"SET_SECONDNUMBER",addedNumber:t}:void 0}var s=Object(u.b)((function(e){return{display:e.display,firstNumber:e.firstNumber,secondNumber:e.secondNumber,operator:e.operator}}))((function(e){return n.a.createElement("div",{style:{display:"flex",alignItems:"center",outline:"1px black solid",flex:"large"===e.size?2:1,justifyContent:"center",background:"number"===e.type?"#4d4d4d":"operation"===e.type?"rgb(102, 102, 102)":"result"===e.type?"rgb(0, 68, 102)":"rgb(172, 57, 57)"},onClick:function(t){switch(e.type){case"number":null===e.operator?e.dispatch(i(0,t.target.getAttribute("value"))):e.dispatch(i(1,t.target.getAttribute("value")));break;case"operation":e.dispatch({type:"SET_OPERATOR",operator:t.target.getAttribute("value")});break;case"clear":e.dispatch({type:"CLEAR"});break;case"result":e.dispatch({type:"CALC"});break;default:e.dispatch({type:"CLEAR"})}},value:e.value},e.value)})),o=function(e){return n.a.createElement("div",{style:{display:"flex",background:"black",color:"white",outline:"1px solid black",justifyContent:"flex-end",alignItems:"center",flex:"1",fontSize:"40px"}},e.displayValue)},m=Object(u.b)((function(e){return{display:e.display,firstNumber:e.firstNumber,secondNumber:e.secondNumber,operator:e.operator}}))((function(e){return n.a.createElement("div",{className:"container",style:{minHeight:"100vh",maxWidth:"500px",margin:"auto",flexDirection:"column"}},n.a.createElement(o,{displayValue:function(t){switch(t){case"firstNumber":return e.firstNumber;case"secondNumber":return e.secondNumber;case"operator":return e.operator;default:return e.firstNumber}}(e.display)}),n.a.createElement("div",{style:{display:"flex",outline:"1px black solid",flex:"5"}},n.a.createElement("div",{className:"container",style:{flexDirection:"column",flex:"3"}},n.a.createElement("div",{className:"container",style:{flex:1}},n.a.createElement(s,{value:"AC",size:"large",type:"clear"}),n.a.createElement(s,{value:"/",type:"operation"})),n.a.createElement("div",{className:"container",style:{flex:1}},n.a.createElement(s,{value:"7",type:"number"}),n.a.createElement(s,{value:"8",type:"number"}),n.a.createElement(s,{value:"9",type:"number"})),n.a.createElement("div",{className:"container",style:{flex:1}},n.a.createElement(s,{value:"4",type:"number"}),n.a.createElement(s,{value:"5",type:"number"}),n.a.createElement(s,{value:"6",type:"number"})),n.a.createElement("div",{className:"container",style:{flex:1}},n.a.createElement(s,{value:"1",type:"number"}),n.a.createElement(s,{value:"2",type:"number"}),n.a.createElement(s,{value:"3",type:"number"})),n.a.createElement("div",{className:"container",style:{flex:1}},n.a.createElement(s,{value:"0",size:"large",type:"number"}))),n.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:"1"}},n.a.createElement(s,{value:"x",type:"operation"}),n.a.createElement(s,{value:"-",type:"operation"}),n.a.createElement(s,{value:"+",type:"operation"}),n.a.createElement(s,{value:"=",size:"large",type:"result"}))))})),d=r(5),p={display:"firstNumber",firstNumber:0,secondNumber:0,operator:null};function b(e,t,r){switch(r){case"+":return e+t;case"-":return e-t;case"x":return e*t;case"/":return e/t;default:return e}}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FIRSTNUMBER":return Object.assign({},e,{firstNumber:10*e.firstNumber+parseInt(t.addedNumber)});case"SET_SECONDNUMBER":return Object.assign({},e,{secondNumber:10*e.secondNumber+parseInt(t.addedNumber),display:"secondNumber"});case"SET_OPERATOR":return Object.assign({},e,{operator:t.operator,display:"operator"});case"CALC":return Object.assign({},e,{display:"firstNumber",firstNumber:b(e.firstNumber,e.secondNumber,e.operator),secondNumber:0,operator:null});case"CLEAR":return p;default:return e}},E=Object(d.b)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=(r(22),function(){return n.a.createElement(u.a,{store:E},n.a.createElement(m,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.db8640af.chunk.js.map