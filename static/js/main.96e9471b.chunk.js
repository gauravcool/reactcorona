(this.webpackJsonpreactcorona=this.webpackJsonpreactcorona||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},121:function(e,t,a){e.exports=a.p+"static/media/SARS-CoV-2_without_background.bc71574b.png"},128:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},129:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},134:function(e,t,a){e.exports=a(255)},255:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(117),o=a.n(c),u=a(25),s=a.n(u),i=a(39),l=a(118),d=a(119),m=a(131),p=a(130),f=a(76),v=a.n(f),h=a(77),b=a.n(h),E="https://covid19.mathdro.id/api",g=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.deaths,u=r.recovered,i=r.lastUpdate,e.abrupt("return",{confirmed:c,deaths:o,recovered:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log("Error: "+e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("Error: "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=a(120),C=a.n(x),w=a(121),O=a.n(w),j=a(272),k=a(277),D=a(273),S=a(274),N=a(78),I=a.n(N),V=a(79),A=a.n(V),B=a(48),U=a.n(B),R=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return console.log({confirmed:a,deaths:c,recovered:n,lastUpdate:o}),a?r.a.createElement("div",{className:U.a.container},r.a.createElement(j.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(j.a,{item:!0,component:k.a,xs:12,md:3,className:A()(U.a.card,U.a.infected)},r.a.createElement(D.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(I.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(S.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(j.a,{item:!0,component:k.a,xs:12,md:3,className:A()(U.a.card,U.a.deaths)},r.a.createElement(D.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(I.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(S.a,{variant:"body2"},"Number of deaths due to COVID-19"))),r.a.createElement(j.a,{item:!0,component:k.a,xs:12,md:3,className:A()(U.a.card,U.a.recovered)},r.a.createElement(D.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(I.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(S.a,{variant:"body2"},"Number of recovered cases of COVID-19"))))):"Loading..."},P=a(75),z=a(89),G=a(128),J=a.n(G),M=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(P.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(z.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=m.length?r.a.createElement(z.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:J.a.container},u?f:v)},Q=a(276),q=a(275),L=a(129),X=a.n(L),Y=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(P.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(Q.a,{className:X.a.formControl},r.a.createElement(q.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{data:{},country:""}},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement("div",null,r.a.createElement("img",{className:v.a.wiki,src:O.a,alt:"covid"}),r.a.createElement("img",{className:v.a.image,src:C.a,alt:"COVID-19"})),r.a.createElement(R,{data:t}),r.a.createElement(Y,{handleCountryChange:this.handleCountryChange}),r.a.createElement(M,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Z,null),document.getElementById("root"))},48:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},76:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1",wiki:"App_wiki__1RBX8"}}},[[134,1,2]]]);
//# sourceMappingURL=main.96e9471b.chunk.js.map