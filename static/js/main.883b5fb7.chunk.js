(this.webpackJsonporganizer=this.webpackJsonporganizer||[]).push([[0],{55:function(e,t,n){e.exports=n(99)},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),u=n.n(c),o=n(54),i=n(9),l=["January","February","March","April","May","June","July","August","September","October","November","December"],s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d="DAY",f="WEEK",b="MOUNTH",v=[{value:d,label:"Day"},{value:f,label:"Week"},{value:b,label:"Month"}],m=new Array(15).fill(0).map((function(e,t){var n=2010+t;return{value:n,label:n}})),p=new Array(12).fill(0).map((function(e,t){return{value:t,label:l[t]}})),h=n(14),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD.MM.YYYY",n=e.getMonth()+1<10?"0".concat(e.getMonth()+1):e.getMonth()+1,a=e.getFullYear(),r=e.getDate(),c=e.getHours()<10?"0".concat(e.getHours()):e.getHours(),u=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes();return"DD.MM.YYYY"===t?"".concat(r,".").concat(n,".").concat(a):"DD.MM"===t?"".concat(r,".").concat(n):"DD"===t?"".concat(r):"object"===t?{DD:r,MM:n-1,YYYY:a}:"hh:mm"===t?"".concat(c,":").concat(u):"DD.MM.YYYY hh:mm"===t?"".concat(r,".").concat(n,".").concat(a," ").concat(c,":").concat(u):void 0},w=function(e){var t=new Date;return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()},D=function(e){var t=e.year,n=e.month,a=new Date(t,n,1),r=function(e,t){return new Date(e,t+1,0).getDate()}(t,n),c=a.getDay(),u=new Array(c).fill(0).map((function(e,a){return new Date(t,n,0-a)})).reverse(),o=new Array(r).fill(0).map((function(e,a){return new Date(t,n,a+1)})),i=new Array(49-c-r).fill(0).map((function(e,a){return new Date(t,n+1,a+1)}));return[].concat(Object(h.a)(u),Object(h.a)(o),Object(h.a)(i))},y=function(e){var t=e.getDay(),n=g(e,"object"),a=n.DD,r=n.MM,c=n.YYYY;return new Date(c,r,a-t)},O=n(4),j=n(3);function E(){var e=Object(O.a)(["\n  margin: 15px;\n"]);return E=function(){return e},e}function M(){var e=Object(O.a)(["\n  width: calc(100% / 7);\n  outline: 1px solid gray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  background-color: ",";\n  :hover {\n    background-color: rgb(232, 238, 201);\n  }\n"]);return M=function(){return e},e}function k(){var e=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-width: 700px;\n  height: 700px;\n"]);return k=function(){return e},e}var x=j.default.div(k()),C=j.default.div(M(),(function(e){var t=e.isCurrentMonth;return e.isCurrentDate?"rgb(247, 177, 85)":t?"rgb(255, 221, 176)":"white"}));j.default.div(E());function S(){var e=Object(O.a)(["\n        width: ",";\n      "]);return S=function(){return e},e}function T(){var e=Object(O.a)(["\n        width: ",";\n      "]);return T=function(){return e},e}function Y(){var e=Object(O.a)(["\n  margin: 15px;\n  ","\n"]);return Y=function(){return e},e}function N(){var e=Object(O.a)(["\n  display: flex;\n"]);return N=function(){return e},e}var W=j.default.div(N()),A=j.default.div(Y(),(function(e){var t=e.position;return"LEFT"===t?Object(j.css)(T(),"250px"):"RIGHT"===t?Object(j.css)(S(),"100%"):void 0}));function _(){var e=Object(O.a)(["\n  width: calc(100% / 7);\n  outline: 1px solid gray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return _=function(){return e},e}function I(){var e=Object(O.a)(["\n  width: 100%;\n  min-width: 700px;\n  display: flex;\n  height: 50px;\n"]);return I=function(){return e},e}var F=j.default.div(I()),H=j.default.div(_()),R=function(e){var t=e.startWeekDate,n=e.mode,c=e.setSelectedDate,u=e.setMode,o=Object(a.useMemo)((function(){var e=new Date(t).getDate();return new Array(7).fill(0).map((function(n,a){return new Date(t).setDate(e+a)})).map((function(e){return new Date(e)}))}),[t]),i=Object(a.useCallback)((function(e){c(e),u(d)}),[c,u]);return r.a.createElement(F,null,o.map((function(e,t){return r.a.createElement(H,{onClick:function(){return i(e)}},s[t]," ",n===f&&g(e,"DD.MM"))})))},V=n(18),J=n.n(V),L=function(e){var t=e.year,n=e.month,c=e.setYear,u=e.setMonth,o=e.setSelectedWeek,i=Object(a.useCallback)((function(e){var t=e.value;o(null),c(t)}),[u,c]),l=Object(a.useCallback)((function(e){var t=e.value;o(null),u(t)}),[u,c]),s=Object(a.useMemo)((function(){return m.find((function(e){return e.value===t}))}),[t,n]),d=Object(a.useMemo)((function(){return p.find((function(e){return e.value===n}))}),[n]);return r.a.createElement("div",null,r.a.createElement(J.a,{value:d,options:p,onChange:l,isSearchable:!0}),r.a.createElement(J.a,{value:s,options:m,onChange:i,isSearchable:!0}))},G=function(e){e.data;var t=e.setSelectedDate,n=e.setMode,c=e.year,u=e.month,o=Object(a.useMemo)((function(){return D({year:c,month:u})}),[u,c]),i=Object(a.useCallback)((function(e){t(e),n(d)}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,o.map((function(e){var t=u===e.getMonth(),n=w(e);return r.a.createElement(C,{isCurrentMonth:t,isCurrentDate:n,onClick:function(){return i(e)}},g(e))}))))};function X(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return X=function(){return e},e}function z(){var e=Object(O.a)(["\n  width: calc(100% / 7);\n  outline: 1px solid gray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return z=function(){return e},e}function U(){var e=Object(O.a)(["\n  width: ",";\n  display: flex;\n  height: 24px;\n"]);return U=function(){return e},e}function B(){var e=Object(O.a)(["\n  width: calc(100% / 7);\n  outline: 1px solid gray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  background-color: ",";\n"]);return B=function(){return e},e}function K(){var e=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: ",";\n  height: ",";\n"]);return K=function(){return e},e}var q=j.default.div(K(),"250px","250px"),P=j.default.div(B(),(function(e){var t=e.isCurrentMonth,n=e.isCurrentDate,a=e.isCurrentWeekHovered,r=e.isCurrentWeekSelect;return n?"rgb(247, 177, 85)":a&&r?"rgb(136, 196, 24)":r?"rgb(189, 241, 91)":a?"rgb(221, 253, 160)":t?"rgb(255, 221, 176)":"white"})),Q=j.default.div(U(),"250px"),Z=j.default.div(z()),$=j.default.div(X()),ee=function(e){e.data;var t=e.year,n=e.month,c=e.setStartWeekDate,u=e.setMode,o=e.setMonth,d=e.setYear,b=e.selectedWeek,v=e.setSelectedWeek,m=Object(a.useState)(null),p=Object(i.a)(m,2),h=p[0],O=p[1],j=Object(a.useMemo)((function(){return D({year:t,month:n})}),[n,t]),E=Object(a.useCallback)((function(e){O(e)}),[]),M=Object(a.useCallback)((function(e){O(null)}),[]),k=Object(a.useCallback)((function(e,t){var n=y(t);c(n),v(e),u(f)}),[]),x=Object(a.useCallback)((function(e){v(null),n+e>11?(o(0),d(t+1)):n+e>0?o(n+e):n+e<0&&(o(11),d(t-1))}),[t,n,d,o]);return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,r.a.createElement("button",{onClick:function(){return x(-1)}},"<="),l[n],r.a.createElement("button",{onClick:function(){return x(1)}},"=>")),r.a.createElement(Q,null,s.map((function(e,t){return r.a.createElement(Z,null,s[t].slice(0,3))}))),r.a.createElement(q,null,j.map((function(e,t){var a=n===e.getMonth(),c=w(e),u=parseInt(t/7),o=u===h,i=u===b;return r.a.createElement(P,{isCurrentMonth:a,isCurrentDate:c,isCurrentWeekHovered:o,isCurrentWeekSelect:i,onMouseOver:function(){return E(parseInt(t/7))},onMouseLeave:M,onClick:function(){return k(parseInt(t/7),e)}},g(e,"DD"))}))))};function te(){var e=Object(O.a)(["\n  height: 20px;\n  border-top: 1px solid gray;\n  padding: 2px;\n  :hover {\n    background-color: rgb(232, 238, 201);\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(O.a)(["\n  width: calc(100% / 7);\n  outline: 1px solid gray;\n  transition: 0.2s;\n  flex-grow: 2;\n"]);return ne=function(){return e},e}var ae=j.default.div(ne()),re=j.default.div(te()),ce=function(e){var t=e.date,n=e.setSelectedDate,c=void 0===n?function(){}:n,u=e.setMode,o=void 0===u?function(){}:u,i=Object(a.useMemo)((function(){return new Array(96).fill(0).map((function(e,n){return new Date(t).setMinutes(15*n)})).map((function(e){return new Date(e)}))}),[t]),l=Object(a.useCallback)((function(){c(t),o("day")}),[c,t]);return r.a.createElement(ae,{onClick:l},i.map((function(e){return r.a.createElement(re,null,g(e,"hh:mm"))})))};function ue(){var e=Object(O.a)(["\n  ::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0);\n  }\n  ::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0);\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0);\n  }\n  scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n  scrollbar-width: thin;\n  :focus {\n    outline: none;\n  }\n"]);return ue=function(){return e},e}function oe(){var e=Object(O.a)(["\n  ::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0);\n  }\n  ::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.2);\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.8);\n  }\n  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0);\n  scrollbar-width: thin;\n  :focus {\n    outline: none;\n  }\n"]);return oe=function(){return e},e}var ie=Object(j.css)(oe()),le=Object(j.css)(ue());function se(){var e=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 8px);\n  min-width: 700px;\n  height: 700px;\n  overflow: auto;\n  ",";\n  :hover {\n    ",";\n  }\n"]);return se=function(){return e},e}var de=j.default.div(se(),le,ie),fe=function(e){var t=e.startWeekDate,n=(e.year,e.month,Object(a.useMemo)((function(){var e=new Date(t).getDate();return new Array(7).fill(0).map((function(n,a){return new Date(t).setDate(e+a)})).map((function(e){return new Date(e)}))}),[t]));return r.a.createElement(de,null,n.map((function(e){return r.a.createElement(ce,{date:e})})))},be=function(e){var t=e.mode,n=e.setMode,c=Object(a.useMemo)((function(){return v.find((function(e){return e.value===t}))}),[t]),u=Object(a.useCallback)((function(e){var t=e.value;return n(t)}));return r.a.createElement(J.a,{value:c,options:v,onChange:u})},ve=function(e){var t=e.date;return r.a.createElement("div",null,s[t.getDay()]," ",g(t,"DD.MM"))};function me(){var e=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 8px);\n  min-width: 700px;\n  height: 700px;\n  overflow: auto;\n  ",";\n  :hover {\n    ",";\n  }\n"]);return me=function(){return e},e}var pe=j.default.div(me(),le,ie),he=function(e){e.data;var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],u=n[1],o=Object(a.useState)((new Date).getMonth()),l=Object(i.a)(o,2),s=l[0],v=l[1],m=Object(a.useState)((new Date).getFullYear()),p=Object(i.a)(m,2),h=p[0],g=p[1],w=Object(a.useState)(y(new Date)),D=Object(i.a)(w,2),O=D[0],j=D[1],E=Object(a.useState)(new Date),M=Object(i.a)(E,2),k=M[0],x=M[1],C=Object(a.useState)(b),S=Object(i.a)(C,2),T=S[0],Y=S[1];return r.a.createElement(W,null,r.a.createElement(A,{position:"LEFT"},r.a.createElement(ee,{setStartWeekDate:j,year:h,month:s,setMode:Y,setMonth:v,setYear:g,selectedWeek:c,setSelectedWeek:u})),r.a.createElement(A,{position:"RIGHT"},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"10px",paddingTop:"10px"}},r.a.createElement(L,{year:h,setYear:g,month:s,setMonth:v,setSelectedWeek:u}),r.a.createElement(be,{mode:T,setMode:Y})),T===d?r.a.createElement(ve,{date:k}):r.a.createElement(R,{setSelectedDate:x,setMode:Y,startWeekDate:O,mode:T}),T===b&&r.a.createElement(G,{setSelectedDate:x,year:h,month:s,setMode:Y}),T===f&&r.a.createElement(fe,{year:h,month:s,startWeekDate:O}),T===d&&r.a.createElement(pe,null,r.a.createElement(ce,{year:h,month:s,date:k}))))},ge=(n(98),n(16)),we={displayMode:"MONTH"},De=Object(ge.c)(Object(ge.b)({organizerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EVENTS":return{events:t.payload};case"REMOVE_EVENT":return{events:e.events.filter((function(e){return e.id!==t.payload.id}))};case"CREATE_EVENT":return{events:[].concat(Object(h.a)(e.events),[t.payload])};case"CHANGE_EVENT":var n=e.events.map((function(e){return e.id!==t.payload.id?e:t.payload}));return{events:n};default:return e}}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:De},r.a.createElement(he,{data:[{id:936,managerId:3799200,eventName:"1",eventType:"Call",eventStatus:"Active",eventDate:"2020-04-05T08:30:00",description:"1"},{firstName:"\u0648\u062c\u062f\u0627\u0646",lastName:"\u0645\u062d\u0645\u062f \u0627\u0644\u0639\u062a\u064a\u0628\u064a",salesStatus:"No Response",id:937,managerId:4159748,leadId:132465,eventName:"Test",eventType:"Call",eventStatus:"Active",eventDate:"2020-04-14T15:00:00",description:"test calendar events"},{firstName:"\u0648\u062c\u062f\u0627\u0646",lastName:"\u0645\u062d\u0645\u062f \u0627\u0644\u0639\u062a\u064a\u0628\u064a",salesStatus:"No Response",id:939,managerId:4159748,leadId:132465,eventName:"Test",eventType:"Call",eventStatus:"Active",eventDate:"2020-04-10T08:00:00",description:"fsdfsdfsdsdf"},{firstName:"\u0648\u062c\u062f\u0627\u0646",lastName:"\u0645\u062d\u0645\u062f \u0627\u0644\u0639\u062a\u064a\u0628\u064a",salesStatus:"No Response",id:940,managerId:4159748,leadId:132465,eventName:"Test",eventType:"Call",eventStatus:"Active",eventDate:"2020-04-09T18:30:00",description:"fsdfsdfs"}]}))),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.883b5fb7.chunk.js.map