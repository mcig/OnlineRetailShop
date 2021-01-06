(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),i=a.n(r),c=a(12),o=a.n(c),s=a(21),l=a(196),d=a(43),j=a(200);var u=function(){return Object(n.jsxs)(l.a,{container:!0,direction:"column",alignItems:"center",children:[Object(n.jsx)(d.a,{variant:"h4",children:"Loading"}),Object(n.jsx)(j.a,{color:"secondary"})]})};var b=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),d=o[0],j=o[1];return Object(r.useEffect)((function(){j(!0),fetch("/api/get/customer").then((function(e){e.json().then((function(e){i(e.response),console.log(a)}))})).catch((function(e){return console.log(e)})),j(!1)}),[]),Object(n.jsxs)(l.a,{style:{marginTop:"20px"},spacing:3,container:!0,children:[d&&Object(n.jsx)(u,{}),a&&a.map((function(e){return Object(n.jsx)("h3",{children:e})}))]})};var m=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),d=o[0],j=o[1];return Object(r.useEffect)((function(){j(!0),fetch("/api/get/order").then((function(e){e.json().then((function(e){i(e.response),console.log(a)}))})).catch((function(e){return console.log(e)})),j(!1)}),[]),Object(n.jsxs)(l.a,{style:{marginTop:"20px"},spacing:3,container:!0,children:[d&&Object(n.jsx)(u,{}),a&&a.map((function(e){return Object(n.jsx)("h3",{children:e})}))]})},p=a(201),x=a(202),O=a(203),h=a(205),v=a(204),f=Object(p.a)({root:{},content:{display:"flex",justifyContent:"center"}});function g(e){var t=e.title,a=e.icon,r=e.form,i=f();return Object(n.jsxs)(x.a,{className:i.root,children:[Object(n.jsxs)(O.a,{className:i.content,children:[a,Object(n.jsx)(v.a,{children:Object(n.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t})})]}),Object(n.jsx)(h.a,{className:i.content,children:r})]})}var y=a(94),C=a.n(y),S=a(8),q=a(206),I=a(207);var D=function(e){var t=e.ApiCallRoute,a=e.fields,r=e.validateFunc,i=e.initialValsObj;return Object(n.jsx)(S.c,{initialValues:i,validate:r,onSubmit:function(e,a){var n=a.setSubmitting;setTimeout((function(){var a,r;n(!1),a="/api/insert/".concat(t),r=JSON.stringify(e,null,2),C.a.post(a,{request:r}).then((function(e){console.log("Got Response:".concat(e))}))}),500)},children:function(e){var t=e.submitForm,r=e.isSubmitting;return Object(n.jsxs)(S.b,{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"20px"},children:[a.map((function(e){return e})),r&&Object(n.jsx)(q.a,{}),Object(n.jsx)(I.a,{variant:"contained",color:"secondary",disabled:r,onClick:t,children:"Submit"})]})}})},w=a(9);var F=function(){var e=[Object(n.jsx)(S.a,{component:w.a,name:"name",type:"text",label:"Name",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"text",label:"Surname",name:"surname",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"Rating",variant:"outlined",name:"rating"}),Object(n.jsx)(S.a,{component:w.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"tel",label:"Telephone",name:"tel",variant:"outlined",required:!0})];return Object(n.jsx)(D,{ApiCallRoute:"customer",fields:e,validateFunc:function(e){var t={};return e.name||(t.name="Required"),e.surname||(t.surname="Required"),(e.rating<0||e.rating>10)&&(t.rating="Rating cannot be negative or greater than 10"),e.tel||(t.tel="Required"),e.FK_CustomerID||(t.FK_CustomerID="Required"),t},initialValsObj:{name:"",surname:"",rating:"",FK_CustomerID:"",tel:"+90"}})};var N=function(){var e=[Object(n.jsx)(S.a,{component:w.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"country",label:"Country",name:"country",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"city",label:"City",name:"city",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"state",label:"State",name:"state",variant:"outlined"}),Object(n.jsx)(S.a,{component:w.a,type:"street",label:"Street",name:"street",variant:"outlined"}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"House Number",name:"houseNumber",variant:"outlined"}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"Flat Number",name:"flatNumber",variant:"outlined"})];return Object(n.jsx)(D,{ApiCallRoute:"customeradress",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.country||(t.country="Required"),e.city||(t.city="Required"),t},initialValsObj:{FK_CustomerID:"",country:"",city:"",state:"",street:"",houseNumber:"",flatNumber:""}})};var R=function(){var e=[Object(n.jsx)(S.a,{component:w.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"text",label:"Card Holder Name",name:"cardName",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"text",label:"Card Holder Surname",name:"cardSurname",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"text",label:"Card Number",name:"cardNo",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"Expiration Month",variant:"outlined",name:"cardExpM",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"Expiration Year",variant:"outlined",name:"cardExpY",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"CVV",variant:"outlined",name:"cardCvv",required:!0})];return Object(n.jsx)(D,{ApiCallRoute:"paymentinfo",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.cardName||(t.cardName="Required"),e.cardSurname||(t.cardSurname="Required"),e.cardNo||(t.cardNo="Required"),e.cardExpM?(e.cardExpM<1||e.cardExpM>12)&&(t.cardNo="Invalid Expiration Month"):t.cardExpM="Required",e.cardExpY?(e.cardExpY<20||e.cardExpY>99)&&(t.cardNo="Invalid Expiration Year"):t.cardExpY="Required",e.cardCvv||(t.cardCvv="Required"),t},initialValsObj:{FK_CustomerID:"",cardName:"",cardSurname:"",cardNo:"",cardExpM:12,cardExpY:20,cardCvv:123}})};var E=function(){var e=[Object(n.jsx)(S.a,{component:w.a,name:"name",type:"text",label:"Name",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"Price",name:"price",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,type:"url",label:"ImageUrl",variant:"outlined",name:"url"}),Object(n.jsx)(S.a,{component:w.a,type:"text",label:"Description",name:"description",multiline:!0,variant:"outlined",rows:4,rowsMax:8}),Object(n.jsx)(S.a,{component:w.a,type:"number",label:"Likes",variant:"outlined",name:"likes"})];return Object(n.jsx)(D,{ApiCallRoute:"product",fields:e,validateFunc:function(e){var t={};return e.name||(t.name="Required"),e.price||(t.price="Required"),(e.price<0||e.rating>1e6)&&(t.price="Price cannot be negative or greater than 1 million"),e.description.length>255&&(t.description="Description cannot be longer than 255 characters. Go Thank twitter ;D"),t},initialValsObj:{name:"",price:"",url:"",description:"",likes:""}})};var K=function(){var e=[Object(n.jsx)(S.a,{component:w.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,name:"FK_ProductID",type:"number",label:"Product ID",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,name:"orderedAt",type:"date",label:"Order Date",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,name:"FK_OrderID",type:"number",label:"Order ID",variant:"outlined",required:!0}),Object(n.jsx)(S.a,{component:w.a,name:"orderStatus",type:"text",label:"Order Status",variant:"outlined"}),Object(n.jsx)(S.a,{component:w.a,name:"eta",type:"date",label:"Estimated Delivery Date",variant:"outlined"}),Object(n.jsx)(S.a,{component:w.a,name:"shipmentStatus",type:"text",label:"Shipment Status",variant:"outlined"}),Object(n.jsx)(S.a,{component:w.a,name:"volweight",type:"number",label:"Volumetric Weight",variant:"outlined",required:!0})];return Object(n.jsx)(D,{ApiCallRoute:"order",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.FK_ProductID||(t.FK_ProductID="Required"),e.FK_OrderID||(t.FK_OrderID="Required"),e.orderedAt||(t.orderedAt="Required"),e.orderedAt>e.eta&&(t.eta="Delivery date is invalid"),e.volweight||(t.volweight="Required"),t},initialValsObj:{FK_CustomerID:"",FK_ProductID:"",orderedAt:"2020-01-01",orderStatus:"placed",FK_OrderID:"",shipmentStatus:"waiting",eta:"2020-01-01",volweight:0}})},_=a(97),k=a.n(_),A=a(66),P=a.n(A),M=a(65),T=a.n(M),V=a(98),B=a.n(V),L=a(99),Y=a.n(L);var z=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(l.a,{container:!0,spacing:4,direction:"row",justify:"space-around",children:[Object(n.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(n.jsx)(g,{title:"Product",icon:Object(n.jsx)(k.a,{color:"primary",style:{fontSize:250}}),form:Object(n.jsx)(E,{})})}),Object(n.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(n.jsx)(g,{title:"Order",icon:Object(n.jsx)(T.a,{color:"primary",style:{fontSize:250}}),form:Object(n.jsx)(K,{})})}),Object(n.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(n.jsx)(g,{title:"User",icon:Object(n.jsx)(P.a,{color:"primary",style:{fontSize:250}}),form:Object(n.jsx)(F,{})})})]}),Object(n.jsxs)(l.a,{container:!0,spacing:4,direction:"row",justify:"space-around",children:[Object(n.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(n.jsx)(g,{title:"Adress",icon:Object(n.jsx)(B.a,{color:"primary",style:{fontSize:250}}),form:Object(n.jsx)(N,{})})}),Object(n.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(n.jsx)(g,{title:"Credit Card",icon:Object(n.jsx)(Y.a,{color:"primary",style:{fontSize:250}}),form:Object(n.jsx)(R,{})})})]})]})},W=a(31),G=a(4),H=a(210),J=a(209),U=a(211),X=a(212),Q=a(67),Z=a(101),$=a.n(Z),ee=a(102),te=a.n(ee),ae=a(103),ne=a.n(ae),re=a(100),ie=a.n(re),ce=Object(p.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%",transition:"padding-top .2s ease-in-out"},mediaExpanded:{height:0,paddingTop:"450px",transition:"padding-top .2s ease-in-out"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Q.a[500]}}}));function oe(e){var t=e.data,a=ce(),r=i.a.useState(!1),c=Object(s.a)(r,2),o=c[0],j=c[1],u=t.Name,b=t.Price,m=t.ImgUrl,p=t.Description,O=t.Likes;return Object(n.jsxs)(x.a,{className:a.root,children:[Object(n.jsx)(H.a,{action:Object(n.jsx)(J.a,{"aria-label":"settings",children:Object(n.jsx)(ie.a,{})}),title:u}),Object(n.jsx)(U.a,{className:o?a.mediaExpanded:a.media,image:m,title:u}),Object(n.jsx)(v.a,{children:Object(n.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:p})}),Object(n.jsxs)(h.a,{disableSpacing:!0,children:[Object(n.jsx)(J.a,{"aria-label":"add to favorites",children:Object(n.jsx)($.a,{})}),Object(n.jsx)(J.a,{"aria-label":"share",children:Object(n.jsx)(te.a,{})}),Object(n.jsx)(J.a,{className:Object(G.a)(a.expand,Object(W.a)({},a.expandOpen,o)),onClick:function(){j(!o)},"aria-expanded":o,"aria-label":"show more",children:Object(n.jsx)(ne.a,{})})]}),Object(n.jsx)(X.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(v.a,{children:Object(n.jsxs)(l.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(n.jsxs)(d.a,{variant:"h5",color:"secondary",children:[O," likes"]}),Object(n.jsxs)(d.a,{variant:"h5",color:"secondary",children:[b,"\u20ba"]})]})})})]})}var se=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),d=o[0],j=o[1];return Object(r.useEffect)((function(){j(!0),fetch("/api/get/product").then((function(e){e.json().then((function(e){i(e.response)}))})).catch((function(e){return console.log(e)})),j(!1)}),[]),Object(n.jsxs)(l.a,{style:{marginTop:"20px"},spacing:3,container:!0,children:[d&&Object(n.jsx)(u,{}),a&&a.map((function(e,t){return Object(n.jsx)(l.a,{item:!0,children:Object(n.jsx)(oe,{data:e})},t)}))]})},le=a(54),de=a(14),je=a(104),ue=a(19),be=a(220),me=a(214),pe=a(215),xe=a(208),Oe=a(213),he=a(105),ve=a.n(he),fe=a(106),ge=a.n(fe),ye=a(108),Ce=a.n(ye),Se=a(107),qe=a.n(Se),Ie=a(216),De=a(217),we=a(218),Fe=a(109),Ne=a.n(Fe),Re=240,Ee=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Re,width:"calc(100% - ".concat(Re,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:Re,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Re,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(W.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(je.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},topbar:{display:"flex"}}}));function Ke(e){var t,a,r=e.children,c=e.links,o=Ee(),l=Object(ue.a)(),j=i.a.useState(!1),u=Object(s.a)(j,2),b=u[0],m=u[1];return Object(n.jsxs)("div",{className:o.root,children:[Object(n.jsx)(Oe.a,{}),Object(n.jsx)(me.a,{color:"secondary",position:"fixed",className:Object(G.a)(o.appBar,Object(W.a)({},o.appBarShift,b)),children:Object(n.jsxs)(pe.a,{className:o.topbar,children:[Object(n.jsx)(J.a,{color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},edge:"start",className:Object(G.a)(o.menuButton,Object(W.a)({},o.hide,b)),children:Object(n.jsx)(ve.a,{})}),Object(n.jsx)(d.a,{variant:"h6",noWrap:!0,children:"Online E-Commerce Database"}),Object(n.jsx)(I.a,{component:le.b,to:c[3],endIcon:Object(n.jsx)(ge.a,{}),variant:"contained",color:"primary",style:{marginLeft:"auto"},children:"Insert Data"})]})}),Object(n.jsxs)(be.a,{variant:"permanent",className:Object(G.a)(o.drawer,(t={},Object(W.a)(t,o.drawerOpen,b),Object(W.a)(t,o.drawerClose,!b),t)),classes:{paper:Object(G.a)((a={},Object(W.a)(a,o.drawerOpen,b),Object(W.a)(a,o.drawerClose,!b),a))},children:[Object(n.jsx)("div",{className:o.toolbar,children:Object(n.jsx)(J.a,{onClick:function(){m(!1)},children:"rtl"===l.direction?Object(n.jsx)(qe.a,{}):Object(n.jsx)(Ce.a,{})})}),Object(n.jsx)(xe.a,{children:["Products","Customers","Orders"].map((function(e,t){return Object(n.jsxs)(Ie.a,{component:le.b,to:c[t],button:!0,children:[Object(n.jsx)(De.a,{children:0===t?Object(n.jsx)(Ne.a,{color:"primary"}):1===t?Object(n.jsx)(P.a,{color:"primary"}):Object(n.jsx)(T.a,{color:"primary"})}),Object(n.jsx)(we.a,{primary:e})]},e)}))})]}),Object(n.jsxs)("main",{className:o.content,children:[Object(n.jsx)("div",{className:o.toolbar}),r]})]})}function _e(){var e=Object(r.useState)(["/","/users","/orders","/panel"]),t=Object(s.a)(e,1)[0];return Object(n.jsx)(le.a,{children:Object(n.jsx)("div",{children:Object(n.jsx)(Ke,{links:t,children:Object(n.jsxs)(de.c,{children:[Object(n.jsx)(de.a,{path:"/users",children:Object(n.jsx)(b,{})}),Object(n.jsx)(de.a,{path:"/orders",children:Object(n.jsx)(m,{})}),Object(n.jsx)(de.a,{path:"/panel",children:Object(n.jsx)(z,{})}),Object(n.jsx)(de.a,{path:"/",children:Object(n.jsx)(se,{})})]})})})})}var ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,221)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(_e,{})}),document.getElementById("root")),ke()}},[[152,1,2]]]);
//# sourceMappingURL=main.bd2b6c90.chunk.js.map