(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{119:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=n(9),i=n(25),l=n(63),u=n(5),j="[ui] Open modal",d="[ui] Close modal",b="[event] Set active",m="[event] Clean",p="[event] Add new",f="[event] Updated",O="[event] Deleted",v="[event] Clear active",h="[event] Loaded",x="[Auth] Finish checking login state",g="[Auth] Login",y="[Auth] Logout",w={checking:!0},N=n(52),k={events:[],activeEvent:null},E={modalOpen:!1},S=Object(i.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case f:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case h:return Object(u.a)(Object(u.a)({},e),{},{events:Object(N.a)(t.payload)});case m:return Object(u.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{checking:!1},t.payload);case x:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case y:return Object(u.a)(Object(u.a)({},w),{},{checking:!1});default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,_=Object(i.d)(S,C(Object(i.a)(l.a))),D=n(33),T=n(10),A=n(13),I=n.n(A),H=n(21),L=n(12),R=n.n(L),F="https://mern-calendar-core.herokuapp.com/api",G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},P=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},M=n(18),V=n.n(M),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:V()(e.end).toDate(),start:V()(e.start).toDate()})}))},U=function(e){return{type:p,payload:e}},q=function(){return{type:v}},B=function(e){return{type:f,payload:e}},X=function(){return{type:O}},z=function(e){return{type:h,payload:e}},K=function(){return{type:x}},Q=function(e){return{type:g,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:m}),e(Y())}},Y=function(){return{type:y}},Z=n(17),$=n(34),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Z.a)(t,2),r=n[0],c=n[1],o=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object($.a)({},t.name,t.value)))},s=function(){c(e)};return[r,o,c,s]},te=(n(86),n(2)),ne=function(){var e=Object(s.b)(),t=ee({l_email:"ivangrestorres@hotmail.com",l_password:"123456"}),n=Object(Z.a)(t,2),a=n[0],r=n[1],c=ee({r_name:"",r_email:"",r_password:"",r_password2:""}),o=Object(Z.a)(c,2),i=o[0],l=o[1],u=a.l_email,j=a.l_password,d=i.r_name,b=i.r_email,m=i.r_password,p=i.r_password2;return Object(te.jsx)("div",{className:"container login-container",children:Object(te.jsxs)("div",{className:"row",children:[Object(te.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(te.jsx)("h3",{children:"Ingreso"}),Object(te.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(H.a)(I.a.mark((function e(t){var r,c,o,s,i,l,u;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,o=c.ok,s=c.token,i=c.uid,l=c.name,u=c.msg,o?(localStorage.setItem("token",s),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:i,name:l}))):R.a.fire("Error",u);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"l_email",value:u,onChange:r})}),Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"l_password",value:j,onChange:r})}),Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(te.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(te.jsx)("h3",{children:"Registro"}),Object(te.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==p)return R.a.fire("Error","Las contrase\xf1as deben ser iguales");var n,a,r;e((n=d,a=b,r=m,function(){var e=Object(H.a)(I.a.mark((function e(t){var c,o,s,i,l,u,j;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:o=e.sent,s=o.ok,i=o.token,l=o.uid,u=o.name,j=o.msg,s?(localStorage.setItem("token",i),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:l,name:u}))):R.a.fire("Error",j);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",value:d,name:"r_name",onChange:l})}),Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",value:b,name:"r_email",onChange:l})}),Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:m,name:"r_password",onChange:l})}),Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",value:p,name:"r_password2",onChange:l})}),Object(te.jsx)("div",{className:"form-group",children:Object(te.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ae=n(51),re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(te.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(te.jsx)("span",{className:"navbar-brand",children:t}),Object(te.jsxs)("button",{onClick:function(){e(W())},className:"btn btn-outline-danger",children:[Object(te.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(te.jsx)("span",{children:" Salir"})]})]})},ce=function(e){var t=e.event,n=t.title,a=t.user;return Object(te.jsxs)("div",{children:[Object(te.jsx)("strong",{children:n}),Object(te.jsx)("div",{children:a.name})]})},oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},se=(n(88),n(89),n(47)),ie=n.n(se),le=n(49),ue=n.n(le),je=function(){return{type:j}},de={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ue.a.setAppElement("#root");var be=V()().minutes(0).seconds(0).add(1,"hours"),me=be.clone().add(1,"hours"),pe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalOpen,n=Object(s.c)((function(e){return e.event})).activeEvent,r=Object(a.useState)(be.toDate()),c=Object(Z.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(me.toDate()),j=Object(Z.a)(l,2),b=j[0],m=j[1],p=Object(a.useState)(!1),f=Object(Z.a)(p,2),O=f[0],v=f[1],h=ee({title:"",notes:"",start:be.toDate(),end:me.toDate()}),x=Object(Z.a)(h,4),g=x[0],y=x[1],w=x[2],N=x[3],k=g.notes,E=g.title,S=g.start,C=g.end;Object(a.useEffect)((function(){n?(w(Object(u.a)({},n)),i(n.start),m(n.end)):(N(),i(be.toDate()),m(me.toDate()))}),[n,w]);var _=function(){N(),v(!1),e({type:d}),e(q())};return Object(te.jsxs)(ue.a,{isOpen:t,onRequestClose:_,style:de,className:"modal",closeTimeoutMS:200,overlayClassName:"modal-fondo",children:[Object(te.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(te.jsx)("hr",{}),Object(te.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault(),v(!0);var a,r=V()(S),c=V()(C);return r.isSameOrAfter(c)?R.a.fire("Error","Fecha fin debe ser mayor que fecha inicio","error"):E.trim().length<3?R.a.fire("Error","El titulo es demasiado corto","error"):(e(n?(a=g,function(){var e=Object(H.a)(I.a.mark((function e(t){var n,r,c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,c=r.ok,o=r.msg,c?t(B(a)):R.a.fire("Error",o),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),R.a.fire("Error","Hable con el administrador");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(H.a)(I.a.mark((function t(n,a){var r,c,o,s,i,l,u,j;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,P("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,l=i.ok,u=i.evento,j=i.msg,l?(e.id=u.id,e.user={_id:c,name:o},n(U(e))):R.a.fire("Error",j),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),R.a.fire("Error","Hable con el administrador");case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),void _())},children:[Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("label",{children:"Fecha y hora inicio"}),Object(te.jsx)(ie.a,{onChange:function(e){i(e),w(Object(u.a)(Object(u.a)({},g),{},{start:e}))},name:"startDate",value:o,className:"form-control"})]}),Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("label",{children:"Fecha y hora fin"}),Object(te.jsx)(ie.a,{onChange:function(e){m(e),w(Object(u.a)(Object(u.a)({},g),{},{end:e}))},name:"endDate",value:b,minDate:o,className:"form-control"})]}),Object(te.jsx)("hr",{}),Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("label",{children:"Titulo y notas"}),Object(te.jsx)("input",{type:"text",className:"form-control ".concat(E.trim().length<3&&O&&"is-invalid"," ").concat(E.trim().length>=3&&"is-valid"),placeholder:"T\xedtulo del evento",name:"title",value:E,onChange:y,autoComplete:"off"}),Object(te.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:k,onChange:y}),Object(te.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(te.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(te.jsx)("i",{className:"far fa-save"}),Object(te.jsx)("span",{children:" Guardar"})]})]})]})},fe=function(){var e=Object(s.b)();return Object(te.jsx)("button",{onClick:function(){e(q()),e(je())},className:"btn btn-primary fab",children:Object(te.jsx)("i",{className:"fas fa-plus"})})},Oe=function(){var e=Object(s.b)();return Object(te.jsxs)("button",{onClick:function(){e(function(){var e=Object(H.a)(I.a.mark((function e(t,n){var a,r,c,o,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().event.activeEvent,e.prev=1,e.next=4,P("events/".concat(a.id),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,o=c.ok,s=c.msg,o?t(X()):R.a.fire("Error",s),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),R.a.fire("Error","Hable con el administrador");case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}())},className:"btn btn-danger fab-danger",children:[Object(te.jsx)("i",{className:"fas fa-trash"}),Object(te.jsx)("span",{children:" Borrar evento"})]})};V.a.locale("es");var ve=Object(ae.b)(V.a),he=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.event})),n=t.events,r=t.activeEvent,c=Object(s.c)((function(e){return e.auth})).uid,o=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(Z.a)(o,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(H.a)(I.a.mark((function e(t){var n,a,r,c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.ok,c=a.events,o=a.msg,r?t(z(J(c))):R.a.fire("Error",o),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),R.a.fire("Error","Hable con el administrador");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(te.jsxs)("div",{className:"calendar-page",children:[Object(te.jsx)(re,{}),Object(te.jsx)(ae.a,{messages:oe,localizer:ve,startAccessor:"start",endAccessor:"end",events:n,onDoubleClickEvent:function(t){e(je())},onSelectEvent:function(t){e({type:b,payload:t})},onSelectSlot:function(){e(q())},selectable:!0,onView:function(e){u(e),localStorage.setItem("lastView",e)},eventPropGetter:function(e){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0",opacity:.8,display:"block",color:"white",cursor:c===e.user._id?"pointer":"not-allowed"}}},components:{event:ce},view:l}),Object(te.jsx)(pe,{}),Object(te.jsx)(fe,{}),!!r&&Object(te.jsx)(Oe,{})]})},xe=n(37),ge=["isAuthenticated","component"],ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,ge);return localStorage.setItem("lastpath",a.location.pathname),Object(te.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(te.jsx)(n,Object(u.a)({},e)):Object(te.jsx)(T.a,{to:"/login"})}}))},we=["isAuthenticated","component"],Ne=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,we);return Object(te.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(te.jsx)(T.a,{to:"/"}):Object(te.jsx)(n,Object(u.a)({},e))}}))},ke=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.uid,r=t.checking;return Object(a.useEffect)((function(){e(function(){var e=Object(H.a)(I.a.mark((function e(t){var n,a,r,c,o,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=a.ok,c=a.token,o=a.uid,s=a.name,a.msg,r?(localStorage.setItem("token",c),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:o,name:s}))):t(K());case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r?Object(te.jsx)("h5",{children:"Espere..."}):Object(te.jsx)("div",{children:Object(te.jsx)(D.a,{children:Object(te.jsx)("div",{children:Object(te.jsxs)(T.d,{children:[Object(te.jsx)(Ne,{exact:!0,path:"/login",component:ne,isAuthenticated:!!n}),Object(te.jsx)(ye,{exact:!0,path:"/",isAuthenticated:!!n,component:he}),Object(te.jsx)(T.a,{to:"/"})]})})})})},Ee=function(){return Object(te.jsx)(s.a,{store:_,children:Object(te.jsx)(ke,{})})};n(119);o.a.render(Object(te.jsx)(r.a.StrictMode,{children:Object(te.jsx)(Ee,{})}),document.getElementById("root"))},86:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.fc735576.chunk.js.map