(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{159:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),c=n(13),o=n.n(c),s=n(18),l=n(209),j=n(45),d=n(213);var u=function(){return Object(a.jsxs)(l.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(j.a,{variant:"h4",children:"Loading"}),Object(a.jsx)(d.a,{color:"secondary"})]})},b=n(214),m=n(215),p=n(216),O=n(218),x=n(217),h=Object(b.a)({root:{},content:{display:"flex",justifyContent:"center"}});function f(e){var t=e.title,n=e.icon,r=e.form,i=h();return Object(a.jsxs)(m.a,{className:i.root,children:[Object(a.jsxs)(p.a,{className:i.content,children:[n,Object(a.jsx)(x.a,{children:Object(a.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t})})]}),Object(a.jsx)(O.a,{className:i.content,children:r})]})}var v=n(220),y=n(219),g=n(221);var C=function(e){var t=e.FixedData,n=e.id,i=Object(r.useState)(null),c=Object(s.a)(i,2),o=c[0],d=c[1],b=Object(r.useState)(!1),m=Object(s.a)(b,2),p=m[0],O=m[1];function x(e){O(!0),fetch("/api/get/".concat(e,"?id=").concat(n)).then((function(e){e.json().then((function(e){d(e.response[0])}))})).catch((function(e){return console.log(e)})),O(!1)}return Object(a.jsxs)("div",{children:[t&&Object(a.jsxs)(l.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(l.a,{item:!0,children:Object(a.jsxs)(j.a,{color:"primary",variant:"h5",children:[t[0]," ",t[1]]})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsxs)(l.a,{container:!0,alignItems:"center",children:[Object(a.jsx)(y.a,{color:"secondary"}),t[2]]})})]}),Object(a.jsxs)(l.a,{style:{marginTop:"10px"},container:!0,spacing:1,justify:"center",children:[Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(v.a,{onClick:function(){return x("customeradress")},variant:"contained",color:"secondary",children:"Address"})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(v.a,{onClick:function(){return x("customertel")},variant:"contained",color:"secondary",children:"Telephone"})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(v.a,{onClick:function(){return x("paymentinfo")},variant:"contained",color:"secondary",children:"Payment Info"})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(v.a,{onClick:function(){return d(null)},variant:"contained",color:"primary",children:Object(a.jsx)(g.a,{})})})]}),Object(a.jsxs)(l.a,{style:{marginTop:"10px"},container:!0,direction:"column",spacing:1,children:[p&&Object(a.jsx)(u,{}),o&&Object.keys(o).map((function(e,t){return t===Object.keys(o).length-1?null:Object(a.jsxs)(l.a,{item:!0,children:[Object(a.jsxs)(j.a,{display:"inline",color:t%2===0?"primary":"secondary",variant:"h5",children:[e," :"]}),Object(a.jsxs)(j.a,{display:"inline",variant:"h5",children:[" ",o[e]]})]})}))]})]})},S=n(51),I=n.n(S);var D=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),j=o[0],d=o[1];return Object(r.useEffect)((function(){d(!0),fetch("/api/get/customer").then((function(e){e.json().then((function(e){i(e.response)}))})).catch((function(e){return console.log(e)})),d(!1)}),[]),Object(a.jsxs)(l.a,{style:{marginTop:"20px"},spacing:3,container:!0,children:[j&&Object(a.jsx)(u,{}),n&&n.map((function(e){return Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:e.idCustomer,icon:Object(a.jsx)(I.a,{color:"primary",style:{fontSize:200}}),form:Object(a.jsx)(C,{FixedData:[e.Name,e.Surname,e.Rating],id:e.idCustomer})})})}))]})},q=n(223),w=n(227),F=n(226),N=n(222),R=n(224),E=n(225),k=n(118),K=Object(b.a)({table:{minWidth:650}});function _(e){var t=e.rows,n=e.headers,r=K();return Object(a.jsx)(N.a,{component:k.a,children:Object(a.jsxs)(q.a,{className:r.table,"aria-label":"simple table",children:[Object(a.jsx)(R.a,{children:Object(a.jsx)(E.a,{children:n.map((function(e,t){return Object(a.jsx)(F.a,{align:0===t?"":"right",children:e},t)}))})}),Object(a.jsx)(w.a,{children:t.map((function(e,t){return Object(a.jsx)(E.a,{children:Object.keys(e).map((function(t,n){return 0===n?Object(a.jsx)(F.a,{component:"th",scope:"row",children:e[t]},n):Object(a.jsx)(F.a,{align:"right",children:e[t]},n)}))},t)}))})]})})}var P=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(null),o=Object(s.a)(c,2),j=o[0],d=o[1],b=Object(r.useState)(!1),m=Object(s.a)(b,2),p=m[0],O=m[1];return Object(r.useEffect)((function(){O(!0),fetch("/api/get/order").then((function(e){e.json().then((function(e){i(e.response)}))})).catch((function(e){return console.log(e)})),O(!1),O(!0),fetch("/api/get/shipmentinfo").then((function(e){e.json().then((function(e){d(e.response)}))})).catch((function(e){return console.log(e)})),O(!1)}),[]),Object(a.jsxs)(l.a,{style:{marginTop:"20px"},container:!0,children:[p&&Object(a.jsx)(u,{}),Object(a.jsxs)(l.a,{container:!0,spacing:1,justify:"center",children:[n&&Object(a.jsx)(l.a,{item:!0,sm:5,children:Object(a.jsx)(_,{headers:["Order id","Order Date","Order Status","Customer","Product"],rows:n})}),j&&Object(a.jsx)(l.a,{item:!0,sm:5,children:Object(a.jsx)(_,{headers:["Shipment id","Shipment Status","ETA","VolWeight","Order Id"],rows:j})})]})]})},A=n(99),T=n.n(A),V=n(8),M=n(228);var B=function(e){var t=e.ApiCallRoute,n=e.fields,r=e.validateFunc,i=e.initialValsObj;return Object(a.jsx)(V.c,{initialValues:i,validate:r,onSubmit:function(e,n){var a=n.setSubmitting;setTimeout((function(){var n,r;a(!1),n="/api/insert/".concat(t),r=JSON.stringify(e,null,2),T.a.post(n,{request:r}).then((function(e){console.log("Got Response:".concat(e))}))}),500)},children:function(e){var t=e.submitForm,r=e.isSubmitting;return Object(a.jsxs)(V.b,{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"20px"},children:[n.map((function(e){return e})),r&&Object(a.jsx)(M.a,{}),Object(a.jsx)(v.a,{variant:"contained",color:"secondary",disabled:r,onClick:t,children:"Submit"})]})}})},z=n(10);var L=function(){var e=[Object(a.jsx)(V.a,{component:z.a,name:"name",type:"text",label:"Name",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"text",label:"Surname",name:"surname",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"Rating",variant:"outlined",name:"rating"}),Object(a.jsx)(V.a,{component:z.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"tel",label:"Telephone",name:"tel",variant:"outlined",required:!0})];return Object(a.jsx)(B,{ApiCallRoute:"customer",fields:e,validateFunc:function(e){var t={};return e.name||(t.name="Required"),e.surname||(t.surname="Required"),(e.rating<0||e.rating>10)&&(t.rating="Rating cannot be negative or greater than 10"),e.tel||(t.tel="Required"),e.FK_CustomerID||(t.FK_CustomerID="Required"),t},initialValsObj:{name:"",surname:"",rating:"",FK_CustomerID:"",tel:"+90"}})};var Y=function(){var e=[Object(a.jsx)(V.a,{component:z.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"country",label:"Country",name:"country",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"city",label:"City",name:"city",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"state",label:"State",name:"state",variant:"outlined"}),Object(a.jsx)(V.a,{component:z.a,type:"street",label:"Street",name:"street",variant:"outlined"}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"House Number",name:"houseNumber",variant:"outlined"}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"Flat Number",name:"flatNumber",variant:"outlined"})];return Object(a.jsx)(B,{ApiCallRoute:"customeradress",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.country||(t.country="Required"),e.city||(t.city="Required"),t},initialValsObj:{FK_CustomerID:"",country:"",city:"",state:"",street:"",houseNumber:"",flatNumber:""}})};var W=function(){var e=[Object(a.jsx)(V.a,{component:z.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"text",label:"Card Holder Name",name:"cardName",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"text",label:"Card Holder Surname",name:"cardSurname",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"text",label:"Card Number",name:"cardNo",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"Expiration Month",variant:"outlined",name:"cardExpM",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"Expiration Year",variant:"outlined",name:"cardExpY",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"CVV",variant:"outlined",name:"cardCvv",required:!0})];return Object(a.jsx)(B,{ApiCallRoute:"paymentinfo",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.cardName||(t.cardName="Required"),e.cardSurname||(t.cardSurname="Required"),e.cardNo||(t.cardNo="Required"),e.cardExpM?(e.cardExpM<1||e.cardExpM>12)&&(t.cardNo="Invalid Expiration Month"):t.cardExpM="Required",e.cardExpY?(e.cardExpY<20||e.cardExpY>99)&&(t.cardNo="Invalid Expiration Year"):t.cardExpY="Required",e.cardCvv||(t.cardCvv="Required"),t},initialValsObj:{FK_CustomerID:"",cardName:"",cardSurname:"",cardNo:"",cardExpM:12,cardExpY:20,cardCvv:123}})};var G=function(){var e=[Object(a.jsx)(V.a,{component:z.a,name:"name",type:"text",label:"Name",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"Price",name:"price",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,type:"url",label:"ImageUrl",variant:"outlined",name:"url"}),Object(a.jsx)(V.a,{component:z.a,type:"text",label:"Description",name:"description",multiline:!0,variant:"outlined",rows:4,rowsMax:8}),Object(a.jsx)(V.a,{component:z.a,type:"number",label:"Likes",variant:"outlined",name:"likes"})];return Object(a.jsx)(B,{ApiCallRoute:"product",fields:e,validateFunc:function(e){var t={};return e.name||(t.name="Required"),e.price||(t.price="Required"),(e.price<0||e.rating>1e6)&&(t.price="Price cannot be negative or greater than 1 million"),e.description.length>255&&(t.description="Description cannot be longer than 255 characters. Go Thank twitter ;D"),t},initialValsObj:{name:"",price:"",url:"",description:"",likes:""}})};var H=function(){var e=[Object(a.jsx)(V.a,{component:z.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,name:"FK_ProductID",type:"number",label:"Product ID",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,name:"orderedAt",type:"date",label:"Order Date",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,name:"FK_OrderID",type:"number",label:"Order ID",variant:"outlined",required:!0}),Object(a.jsx)(V.a,{component:z.a,name:"orderStatus",type:"text",label:"Order Status",variant:"outlined"}),Object(a.jsx)(V.a,{component:z.a,name:"eta",type:"date",label:"Estimated Delivery Date",variant:"outlined"}),Object(a.jsx)(V.a,{component:z.a,name:"shipmentStatus",type:"text",label:"Shipment Status",variant:"outlined"}),Object(a.jsx)(V.a,{component:z.a,name:"volweight",type:"number",label:"Volumetric Weight",variant:"outlined",required:!0})];return Object(a.jsx)(B,{ApiCallRoute:"order",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.FK_ProductID||(t.FK_ProductID="Required"),e.FK_OrderID||(t.FK_OrderID="Required"),e.orderedAt||(t.orderedAt="Required"),e.orderedAt>e.eta&&(t.eta="Delivery date is invalid"),e.volweight||(t.volweight="Required"),t},initialValsObj:{FK_CustomerID:"",FK_ProductID:"",orderedAt:"2020-01-01",orderStatus:"placed",FK_OrderID:"",shipmentStatus:"waiting",eta:"2020-01-01",volweight:0}})},J=n(102),U=n.n(J),X=n(71),Q=n.n(X),Z=n(103),$=n.n(Z),ee=n(104),te=n.n(ee);var ne=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(l.a,{container:!0,spacing:4,direction:"row",justify:"space-around",children:[Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Product",icon:Object(a.jsx)(U.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(G,{})})}),Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Order",icon:Object(a.jsx)(Q.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(H,{})})}),Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"User",icon:Object(a.jsx)(I.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(L,{})})})]}),Object(a.jsxs)(l.a,{container:!0,spacing:4,direction:"row",justify:"space-around",children:[Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Adress",icon:Object(a.jsx)($.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(Y,{})})}),Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Credit Card",icon:Object(a.jsx)(te.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(W,{})})})]})]})},ae=n(32),re=n(4),ie=n(231),ce=n(230),oe=n(232),se=n(233),le=n(72),je=n(106),de=n.n(je),ue=n(107),be=n.n(ue),me=n(108),pe=n.n(me),Oe=n(105),xe=n.n(Oe),he=Object(b.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%",transition:"padding-top .2s ease-in-out"},mediaExpanded:{height:0,paddingTop:"450px",transition:"padding-top .2s ease-in-out"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:le.a[500]}}}));function fe(e){var t=e.data,n=he(),r=i.a.useState(!1),c=Object(s.a)(r,2),o=c[0],d=c[1],u=t.idProduct,b=t.Name,p=t.Price,h=t.ImgUrl,f=t.Description,v=t.Likes;return Object(a.jsxs)(m.a,{className:n.root,children:[Object(a.jsx)(ie.a,{action:Object(a.jsx)(ce.a,{onClick:function(){fetch("/api/delete/product?id="+u)},"aria-label":"settings",children:Object(a.jsx)(xe.a,{})}),title:b}),Object(a.jsx)(oe.a,{className:o?n.mediaExpanded:n.media,image:h,title:b}),Object(a.jsx)(x.a,{children:Object(a.jsx)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:f})}),Object(a.jsxs)(O.a,{disableSpacing:!0,children:[Object(a.jsx)(ce.a,{"aria-label":"add to favorites",children:Object(a.jsx)(de.a,{})}),Object(a.jsx)(ce.a,{"aria-label":"share",children:Object(a.jsx)(be.a,{})}),Object(a.jsx)(ce.a,{className:Object(re.a)(n.expand,Object(ae.a)({},n.expandOpen,o)),onClick:function(){d(!o)},"aria-expanded":o,"aria-label":"show more",children:Object(a.jsx)(pe.a,{})})]}),Object(a.jsx)(se.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(l.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(a.jsxs)(j.a,{variant:"h5",color:"secondary",children:[v," likes"]}),Object(a.jsxs)(j.a,{variant:"h5",color:"secondary",children:[p,"\u20ba"]})]})})})]})}var ve=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),j=o[0],d=o[1];return Object(r.useEffect)((function(){d(!0),fetch("/api/get/product").then((function(e){e.json().then((function(e){i(e.response)}))})).catch((function(e){return console.log(e)})),d(!1)}),[]),Object(a.jsxs)(l.a,{style:{marginTop:"20px"},spacing:3,container:!0,children:[j&&Object(a.jsx)(u,{}),n&&n.map((function(e,t){return Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(fe,{data:e})},t)}))]})},ye=n(56),ge=n(14),Ce=n(109),Se=n(20),Ie=n(242),De=n(235),qe=n(236),we=n(229),Fe=n(234),Ne=n(110),Re=n.n(Ne),Ee=n(111),ke=n.n(Ee),Ke=n(113),_e=n.n(Ke),Pe=n(112),Ae=n.n(Pe),Te=n(237),Ve=n(238),Me=n(239),Be=n(114),ze=n.n(Be),Le=240,Ye=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Le,width:"calc(100% - ".concat(Le,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:Le,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Le,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ae.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(Ce.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},topbar:{display:"flex"}}}));function We(e){var t,n,r=e.children,c=e.links,o=Ye(),l=Object(Se.a)(),d=i.a.useState(!1),u=Object(s.a)(d,2),b=u[0],m=u[1];return Object(a.jsxs)("div",{className:o.root,children:[Object(a.jsx)(Fe.a,{}),Object(a.jsx)(De.a,{color:"secondary",position:"fixed",className:Object(re.a)(o.appBar,Object(ae.a)({},o.appBarShift,b)),children:Object(a.jsxs)(qe.a,{className:o.topbar,children:[Object(a.jsx)(ce.a,{color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},edge:"start",className:Object(re.a)(o.menuButton,Object(ae.a)({},o.hide,b)),children:Object(a.jsx)(Re.a,{})}),Object(a.jsx)(j.a,{variant:"h6",noWrap:!0,children:"Online E-Commerce Database"}),Object(a.jsx)(v.a,{component:ye.b,to:c[3],endIcon:Object(a.jsx)(ke.a,{}),variant:"contained",color:"primary",style:{marginLeft:"auto"},children:"Insert Data"})]})}),Object(a.jsxs)(Ie.a,{variant:"permanent",className:Object(re.a)(o.drawer,(t={},Object(ae.a)(t,o.drawerOpen,b),Object(ae.a)(t,o.drawerClose,!b),t)),classes:{paper:Object(re.a)((n={},Object(ae.a)(n,o.drawerOpen,b),Object(ae.a)(n,o.drawerClose,!b),n))},children:[Object(a.jsx)("div",{className:o.toolbar,children:Object(a.jsx)(ce.a,{onClick:function(){m(!1)},children:"rtl"===l.direction?Object(a.jsx)(Ae.a,{}):Object(a.jsx)(_e.a,{})})}),Object(a.jsx)(we.a,{children:["Products","Customers","Orders"].map((function(e,t){return Object(a.jsxs)(Te.a,{component:ye.b,to:c[t],button:!0,children:[Object(a.jsx)(Ve.a,{children:0===t?Object(a.jsx)(ze.a,{color:"primary"}):1===t?Object(a.jsx)(I.a,{color:"primary"}):Object(a.jsx)(Q.a,{color:"primary"})}),Object(a.jsx)(Me.a,{primary:e})]},e)}))})]}),Object(a.jsxs)("main",{className:o.content,children:[Object(a.jsx)("div",{className:o.toolbar}),r]})]})}var Ge=n(115),He=n(240),Je=Object(Ge.a)({palette:{primary:{main:"#000000"},secondary:{main:"#e50914"}},fontFamily:"Roboto"});function Ue(){var e=Object(r.useState)(["/","/customers","/orders","/panel"]),t=Object(s.a)(e,1)[0];return Object(a.jsx)(ye.a,{children:Object(a.jsx)("div",{children:Object(a.jsx)(He.a,{theme:Je,children:Object(a.jsx)(We,{links:t,children:Object(a.jsxs)(ge.c,{children:[Object(a.jsx)(ge.a,{path:"/customers",children:Object(a.jsx)(D,{})}),Object(a.jsx)(ge.a,{path:"/orders",children:Object(a.jsx)(P,{})}),Object(a.jsx)(ge.a,{path:"/panel",children:Object(a.jsx)(ne,{})}),Object(a.jsx)(ge.a,{path:"/",children:Object(a.jsx)(ve,{})})]})})})})})}var Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Ue,{})}),document.getElementById("root")),Xe()}},[[159,1,2]]]);
//# sourceMappingURL=main.35b257f8.chunk.js.map