(this["webpackJsonpvk-app"]=this["webpackJsonpvk-app"]||[]).push([[0],{155:function(e,t,n){e.exports=n(244)},244:function(e,t,n){"use strict";n.r(t);n(156),n(182),n(184),n(185),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224);var a=n(0),c=n.n(a),r=n(32),i=n.n(r),l=n(28),o=n.n(l),u=n(33),s=n.n(u),p=n(13),m=n(45),h=n(9),d=(n(243),n(59),n(39)),b=n(34);var f=function(e){return c.a.createElement("button",{className:"cell",onClick:function(){return e.onChange(e.cell,e.chip,!1)}},e.text)};var E=function(e){var t=Object(a.useState)(e.field),n=Object(p.a)(t,2),r=n[0],i=n[1],l=Object(a.useState)(e.change),o=Object(p.a)(l,2),u=o[0],s=o[1],m=Object(a.useState)(e.turn),h=Object(p.a)(m,2),E=h[0],g=h[1];function v(t,n,a){if(a)i((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},t,n))})),g(!0);else if(E){e.ws.send("GTG".concat(e.enemy_id,"&").concat(e.game_id,"&").concat(t+n));var c=Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},t,n));i((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},t,n))})),g(!1),e.checkWin(c)}}return e.change!==u&&e.change&&(s(e.change),v(e.change[0],e.change[1],!0)),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"board-row"},c.a.createElement(f,{text:r[1],cell:1,chip:e.chip,onChange:v}),c.a.createElement(f,{text:r[2],cell:2,chip:e.chip,onChange:v}),c.a.createElement(f,{text:r[3],cell:3,chip:e.chip,onChange:v})),c.a.createElement("div",{className:"board-row"},c.a.createElement(f,{text:r[4],cell:4,chip:e.chip,onChange:v}),c.a.createElement(f,{text:r[5],cell:5,chip:e.chip,onChange:v}),c.a.createElement(f,{text:r[6],cell:6,chip:e.chip,onChange:v})),c.a.createElement("div",{className:"board-row"},c.a.createElement(f,{text:r[7],cell:7,chip:e.chip,onChange:v}),c.a.createElement(f,{text:r[8],cell:8,chip:e.chip,onChange:v}),c.a.createElement(f,{text:r[9],cell:9,chip:e.chip,onChange:v})))};var g=function(e){return c.a.createElement(E,{field:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},game_id:e.game_id,enemy_id:e.enemy_id,turn:e.turn,ws:e.ws,chip:e.chip,change:e.change,checkWin:function(t){for(var n=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],a=0;a<n.length;a++){var c=Object(p.a)(n[a],3),r=c[0],i=c[1],l=c[2];t[r]&&t[r]===t[i]&&t[r]===t[l]&&(e.ws.send("GTE".concat(e.enemy_id,"&").concat(e.game_id)),e.setPanel({current:"main",previous:""}),e.end())}}})},v=new WebSocket("wss://vk-app-server.herokuapp.com/");function O(e,t){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send(t);case 2:return a=e.sent,e.abrupt("return",a[n]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(a.useState)({current:"main",previous:""}),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430..."),l=Object(p.a)(i,2),o=l[0],u=l[1],d=Object(a.useState)(),b=Object(p.a)(d,2),f=b[0],E=b[1],j=Object(a.useState)(),x=Object(p.a)(j,2),k=x[0],C=x[1],w=Object(a.useState)(0),y=Object(p.a)(w,2),T=y[0],S=y[1],_=Object(a.useState)(!0),G=Object(p.a)(_,2),z=G[0],N=G[1],D=Object(a.useState)(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("VKWebAppGetUserInfoResult","id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),I=Object(p.a)(D,2),W=I[0];function A(){r({current:"main",previous:""}),u(),E(),C(),N(!0)}return I[1],Object(a.useEffect)((function(){v.onmessage=function(e){if("GTF"===e.data.slice(0,3)){var t=JSON.parse(e.data.slice(3));u(+t[1]),E(+t[0]),C(+t[2]),N(!1)}else"GTG"===e.data.slice(0,3)?S(e.data.slice(3)):"GTE"===e.data.slice(0,3)&&A()}})),c.a.createElement(h.g,{activePanel:n.current},c.a.createElement(h.c,{id:"main"},c.a.createElement(h.d,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0433\u0440\u0443 ",W),c.a.createElement(h.b,null,c.a.createElement(h.a,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return r({current:"tic-tac-toe-hub",previous:n.current})}},"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"),c.a.createElement(h.a,{size:"xl",stretched:!0,style:{marginTop:25},mode:"secondary",onClick:function(){return r({current:"sea-battle-hub",previous:n.current})}},"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"))),c.a.createElement(h.c,{id:"tic-tac-toe-hub"},c.a.createElement(h.d,{left:c.a.createElement(h.e,{onClick:function(){return r({current:n.previous,previous:n.current})}})},"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"),c.a.createElement(h.b,null,c.a.createElement(h.a,{size:"xl",stretched:!0,style:{marginTop:25},onClick:Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({current:"tic-tac-toe",previous:n.current}),v.send("GTF".concat(W,"&"));case 2:case"end":return e.stop()}}),e)})))},"\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430"),c.a.createElement(h.a,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return console.log("Development")}},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"))),c.a.createElement(h.c,{id:"sea-battle-hub"},c.a.createElement(h.d,{left:c.a.createElement(h.e,{onClick:function(){return r({current:n.previous,previous:n.current})}})},"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"),c.a.createElement(h.b,null,c.a.createElement(h.a,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return console.log("Development")}},"\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430"),c.a.createElement(h.a,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return console.log("Development")}},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"))),c.a.createElement(h.c,{id:"tic-tac-toe",style:{textAlign:"center"}},c.a.createElement(h.d,null,"\u0411\u0438\u0442\u0432\u0430 ID \u0438\u0433\u0440\u044b: ",f),c.a.createElement("h1",null,"string"!==typeof o&&"ID \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430:"," ",o),z?c.a.createElement(h.f,{size:"large",style:{marginTop:50}}):c.a.createElement(g,{enemy_id:o,game_id:f,turn:k,end:A,chip:k?"O":"X",setPanel:r,ws:v,change:T})))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(x,null),document.getElementById("root"))},59:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.10a3edc7.chunk.js.map