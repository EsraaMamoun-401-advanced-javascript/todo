(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{152:function(e,t,a){e.exports=a(288)},161:function(e,t,a){},166:function(e,t){},168:function(e,t){},182:function(e,t){},184:function(e,t){},212:function(e,t){},214:function(e,t){},215:function(e,t){},220:function(e,t){},222:function(e,t){},229:function(e,t){},231:function(e,t){},249:function(e,t){},252:function(e,t){},268:function(e,t){},271:function(e,t){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),c=a.n(o),l=a(10),s=a.n(l),i=a(17),u=a(14),m=a(293),d=a(146),p=a(290),h=a(147),f=a(294),g=a(295),E=(a(39),a(55));var b=function(e,t){var a=Object(n.useState)(t||{}),r=Object(u.a)(a,2),o=r[0],c=r[1];return[function(e,t){var a=Object(E.a)({},o);a[e]=t,console.log("key,,Form==",e),console.log("value,,Form==",t),console.log("newFormData===",a),c(a)},function(t){t.preventDefault(),t.target.reset(),console.log("formData===",o),e(o)},o]};var v=function(e){var t=b(e.addTask),a=Object(u.a)(t,3),n=a[0],o=a[1],c=a[2];return console.log("in Form formData===",c),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(m.a,{bg:"light"},r.a.createElement(m.a.Brand,null,"Home"))),r.a.createElement(d.a,{className:"todoHeader",fluid:!0},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("h2",null,"To Do List Manager ")))),r.a.createElement(f.a,{className:"todoF",onSubmit:o},r.a.createElement(f.a.Group,{controlId:"todo-description"},r.a.createElement(f.a.Label,null,"Add To Do Item:"),r.a.createElement(f.a.Control,{as:"input",placeholder:"Add To Do List Item",rows:"3",onChange:function(e){n("text",e.target.value)}})),r.a.createElement(f.a.Group,{controlId:"todo-assignee"},r.a.createElement(f.a.Label,null,"Assigned To:"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Assigned To",onChange:function(e){n("assignee",e.target.value)}})),r.a.createElement(f.a.Group,{controlId:"todo-status"},r.a.createElement(f.a.Label,null,"Status:"),r.a.createElement(f.a.Check,{onChange:function(e){n("complete",e.target.checked)},type:"switch",id:"status-switch",label:c.complete?"Complete":"Pending"})),r.a.createElement(f.a.Group,{controlId:"todo-difficulty"},r.a.createElement(f.a.Label,null,r.a.createElement("span",null,"Difficulty: \xa0")),r.a.createElement("input",{type:"range",defaultValue:"0",min:0,max:5,step:1,onChange:function(e){n("difficulty",e.target.value)}})),r.a.createElement(g.a,{variant:"primary",type:"submit"},"Add Task")))},y=a(291);var k=function(e){return r.a.createElement("div",{className:"itemD"},r.a.createElement("div",{className:"threeE"},r.a.createElement("span",{className:"status"},!0===e.data.complete?r.a.createElement(y.a,{variant:"danger"},"Complete"):r.a.createElement(y.a,{variant:"success"},"Pending")),r.a.createElement("span",{className:"assignee"},e.data.assignee),r.a.createElement("span",{className:"deleteB",onClick:function(){e.deleteTask(e.indx)}},"x")),r.a.createElement("p",{className:"text"},e.data.text),r.a.createElement("span",{className:"switch"},r.a.createElement(f.a.Check,{type:"switch",onChange:function(){var t=Object(E.a)({},e.data);t.complete=!t.complete,e.modifyTask(e.indx,t)},id:"status-switch-"+e.indx,label:"Change Status"})),r.a.createElement("span",{className:"difficulty"},"Difficulty: ",e.data.difficulty))},O=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,o=[],c=1;c<=Math.ceil(a/t);c++)o.push(c);return r.a.createElement("nav",{className:"pageD"},r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e))}))))};var j=function(e){var t=[],a=r.a.useState(1),n=Object(u.a)(a,2),o=n[0],c=n[1],l=r.a.useState(2),s=Object(u.a)(l,1)[0];if(e.tasks)for(var i=0;i<e.tasks.length;i++)t.push(r.a.createElement(k,{key:i,indx:i,data:e.tasks[i],deleteTask:e.deleteTask,modifyTask:e.modifyTask}));var m=o*s,d=m-s,p=t.slice(d,m);return r.a.createElement("div",{className:"listD"},r.a.createElement(O,{postsPerPage:s,totalPosts:t.length,paginate:function(e){return c(e)}}),p)};a(161);var x=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(e),l=Object(u.a)(c,2),m=l[0],d=l[1],p=Object(n.useState)(),h=Object(u.a)(p,2),f=h[0],g=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m.url?m.url:r,{method:m.method||"GET",body:JSON.stringify(m.body),headers:{"Content-Type":"application/json"}});case 2:if(t=e.sent,!m.getMethod){e.next=7;break}return e.next=6,fetch(m.getMethod,{method:"GET",headers:{"Content-Type":"application/json"}});case 6:t=e.sent;case 7:return e.t0=g,e.next=10,t.json();case 10:return e.t1=e.sent,e.next=13,(0,e.t0)(e.t1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("request===",m),m&&function(){e.apply(this,arguments)}()}),[m,r]),{setUrl:o,setRequest:d,response:f}},C="https://lab32-401.herokuapp.com/todo";var T=function(e){var t=x({url:C}),a=t.setRequest,n=t.response;function o(){return(o=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:C,method:"POST",body:t,getMethod:C});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(i.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"".concat(C,"/").concat(n[t]._id),method:"PUT",body:r,getMethod:C});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"".concat(C,"/").concat(n[t]._id),method:"DELETE",getMethod:C});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(d.a,null,r.a.createElement(v,{addTask:function(e){return o.apply(this,arguments)}}),r.a.createElement(j,{tasks:n,modifyTask:function(e,t){return c.apply(this,arguments)},deleteTask:function(e){return l.apply(this,arguments)}}))},N=a(20),w=a(21),S=a(23),P=a(22),D=a(80),I=a.n(D),R=a(149),L=a.n(R),_=r.a.createContext(),U=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).login=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://lab32-401.herokuapp.com","/signin"),{method:"POST",mode:"cors",cache:"no-cache",headers:new Headers({Authorization:"Basic ".concat(btoa("".concat(t,":").concat(a)))})});case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,console.log("res: ",o),n.validateToken(o.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("ERROR: SIGNIN");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),n.signup=function(){var e=Object(i.a)(s.a.mark((function e(t,a,r,o){var c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://lab32-401.herokuapp.com","/signup"),{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a,email:r,role:o})});case 3:return c=e.sent,e.next=6,c.json();case 6:l=e.sent,console.log("res: ",l),n.validateToken(l.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("ERROR: SIGNUP");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),n.logout=function(){n.setLoginState(!1,null,{})},n.validateToken=function(e){try{console.log({token:e});var t=L.a.verify(e,Object({NODE_ENV:"production",PUBLIC_URL:"/todo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SECRET||"supersecret");console.log("user: ",t),n.setLoginState(!0,e,t)}catch(a){n.logout(),console.log("token Validation error")}},n.setLoginState=function(e,t,a){I.a.save("auth",t),n.setState({token:t,loggedIn:e,user:a})},n.state={loggedIn:!1,login:n.login,logout:n.logout,signup:n.signup,user:{}},n}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=I.a.load("auth")||null;this.validateToken(e)}},{key:"render",value:function(){return r.a.createElement(_.Provider,{value:this.state},this.props.children)}}]),a}(r.a.Component),A=function(e){return e.condition?e.children:null},F=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){var e=!1;try{e=this.context.loggedIn&&(!this.props.capability||this.context.user.capabilities.includes(this.props.capability)),console.log("okToRender: ",e)}catch(t){console.warn("Not Authorized!")}return r.a.createElement(A,{condition:e},this.props.children)}}]),a}(r.a.Component);F.contextType=_;var G=F,M=a(35),B=a(292),H=a(148),J=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.context.login(n.state.username,n.state.password)},n.state={username:"",password:""},n}return Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{condition:this.context.loggedIn},r.a.createElement("button",{className:"signout",onClick:this.context.logout},"Logout")),r.a.createElement(A,{condition:!this.context.loggedIn},r.a.createElement(m.a,{className:"swish-justify-content-between justify-content-between"},r.a.createElement(f.a,{inline:!0,onSubmit:this.handleSubmit},r.a.createElement(B.a,null,r.a.createElement(B.a.Prepend,null,r.a.createElement(B.a.Text,{id:"basic-addon1"},"@")),r.a.createElement(H.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",name:"username",onChange:this.handleChange,className:"signinI"}),r.a.createElement(H.a,{type:"password",placeholder:"Password",className:" mr-sm-2",name:"password",onChange:this.handleChange}),r.a.createElement(g.a,{type:"submit"},"Login"))))))}}]),a}(r.a.Component);J.contextType=_;var q=J,K=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.context.signup(n.state.username,n.state.password,n.state.email,n.state.role)},n.state={username:"",password:"",email:"",role:""},n}return Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{condition:!this.context.loggedIn},r.a.createElement("div",{className:"signupF"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Sign Up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"UserName"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"UserName",name:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",name:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Role"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Role",name:"role",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign Up")))))}}]),a}(r.a.Component);K.contextType=_;var V=K;var W=function(){return r.a.createElement(U,null,r.a.createElement(q,null),r.a.createElement(V,null),r.a.createElement(G,{capability:"read"},r.a.createElement(T,null)))};function z(){return r.a.createElement(W,null)}var Q=document.getElementById("root");c.a.render(r.a.createElement(z,null),Q)}},[[152,1,2]]]);
//# sourceMappingURL=main.b1c9a74e.chunk.js.map