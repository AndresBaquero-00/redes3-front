(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6209)}])},6209:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return F}});var i=n(5893),l=n(9008),s=n.n(l),o=n(7357),a=n(5195),r=n(7710),d=n(2763),c=n(7294),x=n(5861),u=n(3252);let p=e=>{let{icon:t}=e;return(0,i.jsx)(o.Z,{sx:{backgroundColor:"#F3F2F2",padding:"10px",borderRadius:"50%",minWidth:"50px",minHeight:"50px",display:"flex",justifyContent:"center",alignItems:"center"},children:t})},h=e=>{var t;let{city:n,country:l,datetime:s}=e,a=(0,c.useMemo)(()=>s.split("T"),[s]);return(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(x.Z,{sx:{fontSize:"30px",fontWeight:600},children:[n,", ",l]}),(0,i.jsx)(x.Z,{sx:{color:"#777777",fontWeight:400},children:"Informaci\xf3n sobre el clima y el ambiente."})]}),(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,i.jsxs)(o.Z,{component:"span",sx:{fontWeight:"500",color:"#444444"},children:[a.at(0),"  ",null===(t=a.at(1))||void 0===t?void 0:t.split(".").at(0)]}),(0,i.jsx)(p,{icon:(0,i.jsx)(u.Z,{sx:{color:"#444444"}})})]})]})};var j=n(4073),v=n(5894),f=n(7355),m=n(443),g=n(2844);let Z={200:{icon:(0,i.jsx)(j.Z,{}),desc:"Tormenta"},600:{icon:(0,i.jsx)(v.Z,{}),desc:"Nieve"},800:{icon:(0,i.jsx)(f.Z,{}),desc:"Despejado"},80:{icon:(0,i.jsx)(m.Z,{}),desc:"Nubado"}},y=e=>{let{code:t,temp:n,feels_like:l}=e,s=(0,c.useMemo)(()=>{var e;return t>800?Z[80]:t>=200&&t<300?Z[200]:t>=600&&t<700?Z[600]:null!==(e=Z[t])&&void 0!==e?e:{icon:(0,i.jsx)(g.Z,{}),desc:""}},[t]);return(0,i.jsxs)(o.Z,{sx:{flex:2,backgroundColor:"#F3F2F2",borderRadius:"10px",padding:"25px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"20px"},children:[c.cloneElement(s.icon,{sx:{width:"100px",height:"100px",color:"#EC6E4C"}}),(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(x.Z,{variant:"h2",children:[n,(0,i.jsx)("sup",{children:"\xba"}),"C"]}),(0,i.jsxs)(x.Z,{sx:{color:"#777777",fontWeight:400},children:["Real Feel - ",l,(0,i.jsx)("sup",{children:"\xba"}),"C"]})]})]}),(0,i.jsx)(x.Z,{variant:"h4",sx:{fontWeight:600},children:s.desc})]})},w=e=>{let{title:t,value:n,icon:l}=e;return(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"30px",width:"100%"},children:[(0,i.jsx)(p,{icon:l}),(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(x.Z,{sx:{fontWeight:600,color:"#444444"},children:t}),(0,i.jsx)(x.Z,{sx:{fontWeight:600,fontSize:"25px",color:"black"},children:n})]})]})},b=e=>{let{title:t,value:n,color:l,units:s=!0}=e;return(0,i.jsxs)(o.Z,{sx:{padding:"30px",borderRadius:"5px",backgroundColor:null!=l?l:"#E3EA46",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",minWidth:"200px"},children:[(0,i.jsx)(x.Z,{variant:"h6",sx:{fontWeight:400},children:t}),(0,i.jsxs)(x.Z,{sx:{fontWeight:500,fontSize:"40px",color:"black"},children:[n,s&&(0,i.jsx)("span",{style:{fontSize:"15px"},children:"μg/m3"})]})]})};var C=n(5152),_=n.n(C);let k=_()(()=>Promise.all([n.e(279),n.e(229)]).then(n.bind(n,7229)),{loadableGenerated:{webpack:()=>[7229]},ssr:!1}),W={chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{title:{text:"\xbaC"}},fill:{opacity:1}},N=e=>{let{data:t}=e,n=(0,c.useMemo)(()=>t.map(e=>{var t;let{datetime:n}=e,i=n.split("T");return"".concat(i.at(0),"  ").concat(null===(t=i.at(1))||void 0===t?void 0:t.split(".").at(0))}),[t]),l=(0,c.useMemo)(()=>[{name:"Temperatura",data:t.map(e=>{let{weather:t}=e;return t.temp})},{name:"NO",data:t.map(e=>{let{aq:t}=e;return t.no})},{name:"NH3",data:t.map(e=>{let{aq:t}=e;return t.nh3})}],[t]);return(0,i.jsx)(o.Z,{children:(0,i.jsx)(k,{options:{...W,xaxis:{categories:n}},series:l,type:"bar",height:350})})};var E=!0;function F(e){var t,n,l,c,x,u,p,j,v,f,m,g,Z,C,_,k,W,E,F,I;let{data:O}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Proyecto Final Redes"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(o.Z,{component:"main",sx:{width:"100vw",height:"100vh",overflow:"auto",padding:"30px 100px"},children:(0,i.jsxs)(o.Z,{sx:{width:"100%"},children:[(0,i.jsx)(h,{city:null!==(_=null===(t=O.at(0))||void 0===t?void 0:t.city)&&void 0!==_?_:"",country:null!==(k=null===(n=O.at(0))||void 0===n?void 0:n.country)&&void 0!==k?k:"",datetime:null!==(W=null===(l=O.at(0))||void 0===l?void 0:l.datetime)&&void 0!==W?W:""}),(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",marginTop:"30px",gap:"120px"},children:[(0,i.jsx)(y,{code:null!==(E=null===(c=O.at(0))||void 0===c?void 0:c.weather.code)&&void 0!==E?E:0,temp:null!==(F=null===(x=O.at(0))||void 0===x?void 0:x.weather.temp)&&void 0!==F?F:0,feels_like:null!==(I=null===(u=O.at(0))||void 0===u?void 0:u.weather.feels_like)&&void 0!==I?I:0}),(0,i.jsxs)(o.Z,{sx:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"},children:[(0,i.jsx)(w,{title:"Humedad",value:(null===(p=O.at(0))||void 0===p?void 0:p.weather.humidity)+" %",icon:(0,i.jsx)(a.Z,{sx:{color:"#444444"}})}),(0,i.jsx)(w,{title:"Presi\xf3n",value:(null===(j=O.at(0))||void 0===j?void 0:j.weather.pressure)+" hPa",icon:(0,i.jsx)(r.Z,{sx:{color:"#444444"}})}),(0,i.jsx)(w,{title:"Viento",value:(null===(v=O.at(0))||void 0===v?void 0:v.wind.speed)+" m/s",icon:(0,i.jsx)(d.Z,{sx:{color:"#444444"}})})]})]}),(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",margin:"60px",gap:"20px"},children:[(0,i.jsx)(b,{title:"CO",value:null===(f=O.at(0))||void 0===f?void 0:f.aq.co}),(0,i.jsx)(b,{title:"O3",value:null===(m=O.at(0))||void 0===m?void 0:m.aq.o3,color:"#36BCBA"}),(0,i.jsx)(b,{title:"PM 2.5",value:null===(g=O.at(0))||void 0===g?void 0:g.aq.pm2_5,color:"#F65606"}),(0,i.jsx)(b,{title:"NO2",value:null===(Z=O.at(0))||void 0===Z?void 0:Z.aq.no2,color:"#304C89"}),(0,i.jsx)(b,{title:"GAS",value:(null===(C=O.at(0))||void 0===C?void 0:C.gas)===0?"Bueno":"Malo",color:"#DB5461",units:!1})]}),(0,i.jsx)(N,{data:[...O].reverse()})]})})]})}}},function(e){e.O(0,[144,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);