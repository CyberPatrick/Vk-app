(this["webpackJsonpvk-app"]=this["webpackJsonpvk-app"]||[]).push([[0],{154:function(e,t,n){e.exports=n(243)},243:function(e,t,n){"use strict";n.r(t);n(155),n(181),n(183),n(184),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223);var c=n(0),a=n.n(c),r=n(32),l=n.n(r),i=n(25),o=n.n(i),s=(n(59),n(11)),u=(n(85),n(9)),m=(n(242),n(57),n(38)),p=n(33);var h=function(e){return a.a.createElement("button",{className:"cell",onClick:function(){return e.onChange(e.cell,e.chip,!1)}},e.text)};var b=function(e){var t=Object(c.useState)(e.field),n=Object(s.a)(t,2),r=n[0],l=n[1],i=Object(c.useState)(e.change),o=Object(s.a)(i,2),u=o[0],b=o[1],d=Object(c.useState)(e.turn),E=Object(s.a)(d,2),g=E[0],f=E[1];function O(t,n,c){if(c)l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(m.a)({},t,n))})),f(!0);else if(g){e.ws.send("GTG".concat(e.enemy_id,"&").concat(e.game_id,"&").concat(t+n));var a=Object(p.a)(Object(p.a)({},r),{},Object(m.a)({},t,n));l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(m.a)({},t,n))})),f(!1),e.checkWin(a)}}return e.change!==u&&e.change&&(b(e.change),O(e.change[0],e.change[1],!0)),a.a.createElement("div",{className:"field"},a.a.createElement("div",{className:"board-row"},a.a.createElement(h,{text:r[1],cell:1,chip:e.chip,onChange:O}),a.a.createElement(h,{text:r[2],cell:2,chip:e.chip,onChange:O}),a.a.createElement(h,{text:r[3],cell:3,chip:e.chip,onChange:O})),a.a.createElement("div",{className:"board-row"},a.a.createElement(h,{text:r[4],cell:4,chip:e.chip,onChange:O}),a.a.createElement(h,{text:r[5],cell:5,chip:e.chip,onChange:O}),a.a.createElement(h,{text:r[6],cell:6,chip:e.chip,onChange:O})),a.a.createElement("div",{className:"board-row"},a.a.createElement(h,{text:r[7],cell:7,chip:e.chip,onChange:O}),a.a.createElement(h,{text:r[8],cell:8,chip:e.chip,onChange:O}),a.a.createElement(h,{text:r[9],cell:9,chip:e.chip,onChange:O})))};var d=function(e){return a.a.createElement(b,{field:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},game_id:e.game_id,enemy_id:e.enemy_id,turn:e.turn,ws:e.ws,chip:e.chip,change:e.change,checkWin:function(t){for(var n=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],c=0;c<n.length;c++){var a=Object(s.a)(n[c],3),r=a[0],l=a[1],i=a[2];t[r]&&t[r]===t[l]&&t[r]===t[i]&&(e.ws.send("GTE".concat(e.enemy_id,"&").concat(e.game_id)),e.setPanel({current:"main",previous:""}),e.end())}}})},E=new WebSocket("wss://vk-app-server.herokuapp.com/");var g=function(){var e=Object(c.useState)({current:"main",previous:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(c.useState)("\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430..."),i=Object(s.a)(l,2),m=i[0],p=i[1],h=Object(c.useState)(),b=Object(s.a)(h,2),g=b[0],f=b[1],O=Object(c.useState)(),j=Object(s.a)(O,2),v=j[0],C=j[1],k=Object(c.useState)(0),x=Object(s.a)(k,2),y=x[0],S=x[1],T=Object(c.useState)(!0),w=Object(s.a)(T,2),_=w[0],G=w[1],z=Object(c.useState)(),N=Object(s.a)(z,2),D=N[0],I=N[1],W=Object(c.useState)(),A=Object(s.a)(W,2),J=A[0],P=A[1],F=Object(c.useState)(),K=Object(s.a)(F,2),V=K[0],B=K[1];function U(){r({current:"main",previous:""}),p("\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430..."),f(),C(),G(!0)}return o.a.send("VKWebAppGetUserInfo").then((function(e){I(e.id),P(e.first_name),B(e.photo_200)})),Object(c.useEffect)((function(){E.onmessage=function(e){if("GTF"===e.data.slice(0,3)){var t=JSON.parse(e.data.slice(3));p(+t[1]),f(+t[0]),C(+t[2]),G(!1)}else"GTG"===e.data.slice(0,3)?S(e.data.slice(3)):"GTE"===e.data.slice(0,3)&&U()}})),a.a.createElement(u.h,{activePanel:n.current},a.a.createElement(u.d,{id:"main"},a.a.createElement(u.e,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0433\u0440\u0443, ",J),a.a.createElement(u.c,null,a.a.createElement(u.a,{src:V}),a.a.createElement(u.b,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return r({current:"tic-tac-toe-hub",previous:n.current})}},"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"),a.a.createElement(u.b,{size:"xl",stretched:!0,style:{marginTop:25},mode:"secondary",onClick:function(){return r({current:"sea-battle-hub",previous:n.current})}},"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"))),a.a.createElement(u.d,{id:"tic-tac-toe-hub"},a.a.createElement(u.e,{left:a.a.createElement(u.f,{onClick:function(){return r({current:n.previous,previous:n.current})}})},"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"),a.a.createElement(u.c,null,a.a.createElement(u.b,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){r({current:"tic-tac-toe",previous:n.current}),E.send("GTF".concat(D,"&"))}},"\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430"),a.a.createElement(u.b,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return console.log("Development")}},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"))),a.a.createElement(u.d,{id:"sea-battle-hub"},a.a.createElement(u.e,{left:a.a.createElement(u.f,{onClick:function(){return r({current:n.previous,previous:n.current})}})},"\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439"),a.a.createElement(u.c,null,a.a.createElement(u.b,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return console.log("Development")}},"\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430"),a.a.createElement(u.b,{size:"xl",stretched:!0,style:{marginTop:25},onClick:function(){return console.log("Development")}},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"))),a.a.createElement(u.d,{id:"tic-tac-toe",style:{textAlign:"center"}},a.a.createElement(u.e,null,"\u0411\u0438\u0442\u0432\u0430 ID \u0438\u0433\u0440\u044b: ",g),a.a.createElement("h1",null,"string"!==typeof m&&"ID \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430:"," ",m),_?a.a.createElement(u.g,{size:"large",style:{marginTop:50}}):a.a.createElement(d,{enemy_id:m,game_id:g,turn:v,end:U,chip:v?"O":"X",setPanel:r,ws:E,change:y})))};o.a.send("VKWebAppInit"),l.a.render(a.a.createElement(g,null),document.getElementById("root"))},57:function(e,t,n){}},[[154,1,2]]]);
//# sourceMappingURL=main.5089a3c4.chunk.js.map