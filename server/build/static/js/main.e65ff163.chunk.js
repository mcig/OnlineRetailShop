(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),c=n(13),o=n.n(c),s=n(19),l=n(206),j=n(44),d=n(210);var u=function(){return Object(a.jsxs)(l.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(j.a,{variant:"h4",children:"Loading"}),Object(a.jsx)(d.a,{color:"secondary"})]})},b=n(211),m=n(212),p=n(213),O=n(215),x=n(214),h=Object(b.a)({root:{},content:{display:"flex",justifyContent:"center"}});function f(e){var t=e.title,n=e.icon,r=e.form,i=h();return Object(a.jsxs)(m.a,{className:i.root,children:[Object(a.jsxs)(p.a,{className:i.content,children:[n,Object(a.jsx)(x.a,{children:Object(a.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t})})]}),Object(a.jsx)(O.a,{className:i.content,children:r})]})}var v=n(217),y=n(216);var g=function(e){var t=e.FixedData,n=e.id,i=Object(r.useState)(null),c=Object(s.a)(i,2),o=c[0],d=c[1],b=Object(r.useState)(!1),m=Object(s.a)(b,2),p=m[0],O=m[1];function x(e){O(!0),fetch("/api/get/".concat(e,"?id=").concat(n)).then((function(e){e.json().then((function(e){d(e.response[0])}))})).catch((function(e){return console.log(e)})),O(!1)}return Object(a.jsxs)("div",{children:[t&&Object(a.jsxs)(l.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(l.a,{item:!0,children:Object(a.jsxs)(j.a,{color:"primary",variant:"h5",children:[t[0]," ",t[1]]})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsxs)(l.a,{container:!0,alignItems:"center",children:[Object(a.jsx)(y.a,{color:"secondary"}),t[2]]})})]}),Object(a.jsxs)(l.a,{style:{marginTop:"10px"},container:!0,spacing:1,justify:"center",children:[Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(v.a,{onClick:function(){return x("customeradress")},variant:"contained",color:"secondary",children:"Address"})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(v.a,{onClick:function(){return x("customertel")},variant:"contained",color:"secondary",children:"Telephone"})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(v.a,{onClick:function(){return x("paymentinfo")},variant:"contained",color:"secondary",children:"Payment Info"})})]}),Object(a.jsxs)(l.a,{style:{marginTop:"10px"},container:!0,direction:"column",spacing:1,children:[p&&Object(a.jsx)(u,{}),o&&Object.keys(o).map((function(e,t){return t!==Object.keys(o).length-1?Object(a.jsx)(l.a,{item:!0,children:Object(a.jsxs)(j.a,{color:t%2===0?"primary":"secondary",variant:"h5",children:[e," : ",Object(a.jsxs)(j.a,{variant:"h5",children:[" ",o[e]]})]})}):null}))]})]})},C=n(50),S=n.n(C);var I=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),j=o[0],d=o[1];return Object(r.useEffect)((function(){d(!0),fetch("/api/get/customer").then((function(e){e.json().then((function(e){i(e.response)}))})).catch((function(e){return console.log(e)})),d(!1)}),[]),Object(a.jsxs)(l.a,{style:{marginTop:"20px"},spacing:3,container:!0,children:[j&&Object(a.jsx)(u,{}),n&&n.map((function(e){return Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:e.idCustomer,icon:Object(a.jsx)(S.a,{color:"primary",style:{fontSize:200}}),form:Object(a.jsx)(g,{FixedData:[e.Name,e.Surname,e.Rating],id:e.idCustomer})})})}))]})},D=n(219),q=n(223),w=n(222),F=n(218),N=n(220),R=n(221),E=n(113),K=Object(b.a)({table:{minWidth:650}});function _(e){var t=e.rows,n=e.headers,r=K();return Object(a.jsx)(F.a,{component:E.a,children:Object(a.jsxs)(D.a,{className:r.table,"aria-label":"simple table",children:[Object(a.jsx)(N.a,{children:Object(a.jsx)(R.a,{children:n.map((function(e,t){return Object(a.jsx)(w.a,{align:0===t?"":"right",children:e},t)}))})}),Object(a.jsx)(q.a,{children:t.map((function(e){return Object(a.jsx)(R.a,{children:Object.keys(e).map((function(t,n){return 0===n?Object(a.jsx)(w.a,{component:"th",scope:"row",children:e[t]}):Object(a.jsx)(w.a,{align:"right",children:e[t]})}))})}))})]})})}var k=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),j=o[0],d=o[1];return Object(r.useEffect)((function(){d(!0),fetch("/api/get/order").then((function(e){e.json().then((function(e){i(e.response)}))})).catch((function(e){return console.log(e)})),d(!1)}),[]),Object(a.jsxs)(l.a,{style:{marginTop:"20px"},container:!0,children:[j&&Object(a.jsx)(u,{}),n&&Object(a.jsx)(l.a,{container:!0,justify:"center",children:Object(a.jsx)(l.a,{children:Object(a.jsx)(_,{headers:["Order id","Order Date","Order Status","Customer","Product"],rows:n})})})]})},P=n(96),A=n.n(P),T=n(8),M=n(224);var V=function(e){var t=e.ApiCallRoute,n=e.fields,r=e.validateFunc,i=e.initialValsObj;return Object(a.jsx)(T.c,{initialValues:i,validate:r,onSubmit:function(e,n){var a=n.setSubmitting;setTimeout((function(){var n,r;a(!1),n="/api/insert/".concat(t),r=JSON.stringify(e,null,2),A.a.post(n,{request:r}).then((function(e){console.log("Got Response:".concat(e))}))}),500)},children:function(e){var t=e.submitForm,r=e.isSubmitting;return Object(a.jsxs)(T.b,{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"20px"},children:[n.map((function(e){return e})),r&&Object(a.jsx)(M.a,{}),Object(a.jsx)(v.a,{variant:"contained",color:"secondary",disabled:r,onClick:t,children:"Submit"})]})}})},B=n(9);var z=function(){var e=[Object(a.jsx)(T.a,{component:B.a,name:"name",type:"text",label:"Name",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"text",label:"Surname",name:"surname",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"Rating",variant:"outlined",name:"rating"}),Object(a.jsx)(T.a,{component:B.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"tel",label:"Telephone",name:"tel",variant:"outlined",required:!0})];return Object(a.jsx)(V,{ApiCallRoute:"customer",fields:e,validateFunc:function(e){var t={};return e.name||(t.name="Required"),e.surname||(t.surname="Required"),(e.rating<0||e.rating>10)&&(t.rating="Rating cannot be negative or greater than 10"),e.tel||(t.tel="Required"),e.FK_CustomerID||(t.FK_CustomerID="Required"),t},initialValsObj:{name:"",surname:"",rating:"",FK_CustomerID:"",tel:"+90"}})};var L=function(){var e=[Object(a.jsx)(T.a,{component:B.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"country",label:"Country",name:"country",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"city",label:"City",name:"city",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"state",label:"State",name:"state",variant:"outlined"}),Object(a.jsx)(T.a,{component:B.a,type:"street",label:"Street",name:"street",variant:"outlined"}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"House Number",name:"houseNumber",variant:"outlined"}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"Flat Number",name:"flatNumber",variant:"outlined"})];return Object(a.jsx)(V,{ApiCallRoute:"customeradress",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.country||(t.country="Required"),e.city||(t.city="Required"),t},initialValsObj:{FK_CustomerID:"",country:"",city:"",state:"",street:"",houseNumber:"",flatNumber:""}})};var Y=function(){var e=[Object(a.jsx)(T.a,{component:B.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"text",label:"Card Holder Name",name:"cardName",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"text",label:"Card Holder Surname",name:"cardSurname",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"text",label:"Card Number",name:"cardNo",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"Expiration Month",variant:"outlined",name:"cardExpM",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"Expiration Year",variant:"outlined",name:"cardExpY",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"CVV",variant:"outlined",name:"cardCvv",required:!0})];return Object(a.jsx)(V,{ApiCallRoute:"paymentinfo",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.cardName||(t.cardName="Required"),e.cardSurname||(t.cardSurname="Required"),e.cardNo||(t.cardNo="Required"),e.cardExpM?(e.cardExpM<1||e.cardExpM>12)&&(t.cardNo="Invalid Expiration Month"):t.cardExpM="Required",e.cardExpY?(e.cardExpY<20||e.cardExpY>99)&&(t.cardNo="Invalid Expiration Year"):t.cardExpY="Required",e.cardCvv||(t.cardCvv="Required"),t},initialValsObj:{FK_CustomerID:"",cardName:"",cardSurname:"",cardNo:"",cardExpM:12,cardExpY:20,cardCvv:123}})};var W=function(){var e=[Object(a.jsx)(T.a,{component:B.a,name:"name",type:"text",label:"Name",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"Price",name:"price",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,type:"url",label:"ImageUrl",variant:"outlined",name:"url"}),Object(a.jsx)(T.a,{component:B.a,type:"text",label:"Description",name:"description",multiline:!0,variant:"outlined",rows:4,rowsMax:8}),Object(a.jsx)(T.a,{component:B.a,type:"number",label:"Likes",variant:"outlined",name:"likes"})];return Object(a.jsx)(V,{ApiCallRoute:"product",fields:e,validateFunc:function(e){var t={};return e.name||(t.name="Required"),e.price||(t.price="Required"),(e.price<0||e.rating>1e6)&&(t.price="Price cannot be negative or greater than 1 million"),e.description.length>255&&(t.description="Description cannot be longer than 255 characters. Go Thank twitter ;D"),t},initialValsObj:{name:"",price:"",url:"",description:"",likes:""}})};var G=function(){var e=[Object(a.jsx)(T.a,{component:B.a,name:"FK_CustomerID",type:"number",label:"Customer ID",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,name:"FK_ProductID",type:"number",label:"Product ID",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,name:"orderedAt",type:"date",label:"Order Date",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,name:"FK_OrderID",type:"number",label:"Order ID",variant:"outlined",required:!0}),Object(a.jsx)(T.a,{component:B.a,name:"orderStatus",type:"text",label:"Order Status",variant:"outlined"}),Object(a.jsx)(T.a,{component:B.a,name:"eta",type:"date",label:"Estimated Delivery Date",variant:"outlined"}),Object(a.jsx)(T.a,{component:B.a,name:"shipmentStatus",type:"text",label:"Shipment Status",variant:"outlined"}),Object(a.jsx)(T.a,{component:B.a,name:"volweight",type:"number",label:"Volumetric Weight",variant:"outlined",required:!0})];return Object(a.jsx)(V,{ApiCallRoute:"order",fields:e,validateFunc:function(e){var t={};return e.FK_CustomerID||(t.FK_CustomerID="Required"),e.FK_ProductID||(t.FK_ProductID="Required"),e.FK_OrderID||(t.FK_OrderID="Required"),e.orderedAt||(t.orderedAt="Required"),e.orderedAt>e.eta&&(t.eta="Delivery date is invalid"),e.volweight||(t.volweight="Required"),t},initialValsObj:{FK_CustomerID:"",FK_ProductID:"",orderedAt:"2020-01-01",orderStatus:"placed",FK_OrderID:"",shipmentStatus:"waiting",eta:"2020-01-01",volweight:0}})},H=n(99),J=n.n(H),U=n(69),X=n.n(U),Q=n(100),Z=n.n(Q),$=n(101),ee=n.n($);var te=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)(l.a,{container:!0,spacing:4,direction:"row",justify:"space-around",children:[Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Product",icon:Object(a.jsx)(J.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(W,{})})}),Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Order",icon:Object(a.jsx)(X.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(G,{})})}),Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"User",icon:Object(a.jsx)(S.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(z,{})})})]}),Object(a.jsxs)(l.a,{container:!0,spacing:4,direction:"row",justify:"space-around",children:[Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Adress",icon:Object(a.jsx)(Z.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(L,{})})}),Object(a.jsx)(l.a,{xs:12,sm:4,item:!0,children:Object(a.jsx)(f,{title:"Credit Card",icon:Object(a.jsx)(ee.a,{color:"primary",style:{fontSize:250}}),form:Object(a.jsx)(Y,{})})})]})]})},ne=n(31),ae=n(4),re=n(227),ie=n(226),ce=n(228),oe=n(229),se=n(70),le=n(103),je=n.n(le),de=n(104),ue=n.n(de),be=n(105),me=n.n(be),pe=n(102),Oe=n.n(pe),xe=Object(b.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%",transition:"padding-top .2s ease-in-out"},mediaExpanded:{height:0,paddingTop:"450px",transition:"padding-top .2s ease-in-out"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:se.a[500]}}}));function he(e){var t=e.data,n=xe(),r=i.a.useState(!1),c=Object(s.a)(r,2),o=c[0],d=c[1],u=t.Name,b=t.Price,p=t.ImgUrl,h=t.Description,f=t.Likes;return Object(a.jsxs)(m.a,{className:n.root,children:[Object(a.jsx)(re.a,{action:Object(a.jsx)(ie.a,{"aria-label":"settings",children:Object(a.jsx)(Oe.a,{})}),title:u}),Object(a.jsx)(ce.a,{className:o?n.mediaExpanded:n.media,image:p,title:u}),Object(a.jsx)(x.a,{children:Object(a.jsx)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:h})}),Object(a.jsxs)(O.a,{disableSpacing:!0,children:[Object(a.jsx)(ie.a,{"aria-label":"add to favorites",children:Object(a.jsx)(je.a,{})}),Object(a.jsx)(ie.a,{"aria-label":"share",children:Object(a.jsx)(ue.a,{})}),Object(a.jsx)(ie.a,{className:Object(ae.a)(n.expand,Object(ne.a)({},n.expandOpen,o)),onClick:function(){d(!o)},"aria-expanded":o,"aria-label":"show more",children:Object(a.jsx)(me.a,{})})]}),Object(a.jsx)(oe.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(l.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(a.jsxs)(j.a,{variant:"h5",color:"secondary",children:[f," likes"]}),Object(a.jsxs)(j.a,{variant:"h5",color:"secondary",children:[b,"\u20ba"]})]})})})]})}var fe=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),o=Object(s.a)(c,2),j=o[0],d=o[1];return Object(r.useEffect)((function(){d(!0),fetch("/api/get/product").then((function(e){e.json().then((function(e){i(e.response)}))})).catch((function(e){return console.log(e)})),d(!1)}),[]),Object(a.jsxs)(l.a,{style:{marginTop:"20px"},spacing:3,container:!0,children:[j&&Object(a.jsx)(u,{}),n&&n.map((function(e,t){return Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(he,{data:e})},t)}))]})},ve=n(56),ye=n(14),ge=n(106),Ce=n(20),Se=n(237),Ie=n(231),De=n(232),qe=n(225),we=n(230),Fe=n(107),Ne=n.n(Fe),Re=n(108),Ee=n.n(Re),Ke=n(110),_e=n.n(Ke),ke=n(109),Pe=n.n(ke),Ae=n(233),Te=n(234),Me=n(235),Ve=n(111),Be=n.n(Ve),ze=240,Le=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:ze,width:"calc(100% - ".concat(ze,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:ze,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:ze,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ne.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(ge.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},topbar:{display:"flex"}}}));function Ye(e){var t,n,r=e.children,c=e.links,o=Le(),l=Object(Ce.a)(),d=i.a.useState(!1),u=Object(s.a)(d,2),b=u[0],m=u[1];return Object(a.jsxs)("div",{className:o.root,children:[Object(a.jsx)(we.a,{}),Object(a.jsx)(Ie.a,{color:"secondary",position:"fixed",className:Object(ae.a)(o.appBar,Object(ne.a)({},o.appBarShift,b)),children:Object(a.jsxs)(De.a,{className:o.topbar,children:[Object(a.jsx)(ie.a,{color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},edge:"start",className:Object(ae.a)(o.menuButton,Object(ne.a)({},o.hide,b)),children:Object(a.jsx)(Ne.a,{})}),Object(a.jsx)(j.a,{variant:"h6",noWrap:!0,children:"Online E-Commerce Database"}),Object(a.jsx)(v.a,{component:ve.b,to:c[3],endIcon:Object(a.jsx)(Ee.a,{}),variant:"contained",color:"primary",style:{marginLeft:"auto"},children:"Insert Data"})]})}),Object(a.jsxs)(Se.a,{variant:"permanent",className:Object(ae.a)(o.drawer,(t={},Object(ne.a)(t,o.drawerOpen,b),Object(ne.a)(t,o.drawerClose,!b),t)),classes:{paper:Object(ae.a)((n={},Object(ne.a)(n,o.drawerOpen,b),Object(ne.a)(n,o.drawerClose,!b),n))},children:[Object(a.jsx)("div",{className:o.toolbar,children:Object(a.jsx)(ie.a,{onClick:function(){m(!1)},children:"rtl"===l.direction?Object(a.jsx)(Pe.a,{}):Object(a.jsx)(_e.a,{})})}),Object(a.jsx)(qe.a,{children:["Products","Customers","Orders"].map((function(e,t){return Object(a.jsxs)(Ae.a,{component:ve.b,to:c[t],button:!0,children:[Object(a.jsx)(Te.a,{children:0===t?Object(a.jsx)(Be.a,{color:"primary"}):1===t?Object(a.jsx)(S.a,{color:"primary"}):Object(a.jsx)(X.a,{color:"primary"})}),Object(a.jsx)(Me.a,{primary:e})]},e)}))})]}),Object(a.jsxs)("main",{className:o.content,children:[Object(a.jsx)("div",{className:o.toolbar}),r]})]})}function We(){var e=Object(r.useState)(["/","/customers","/orders","/panel"]),t=Object(s.a)(e,1)[0];return Object(a.jsx)(ve.a,{children:Object(a.jsx)("div",{children:Object(a.jsx)(Ye,{links:t,children:Object(a.jsxs)(ye.c,{children:[Object(a.jsx)(ye.a,{path:"/customers",children:Object(a.jsx)(I,{})}),Object(a.jsx)(ye.a,{path:"/orders",children:Object(a.jsx)(k,{})}),Object(a.jsx)(ye.a,{path:"/panel",children:Object(a.jsx)(te,{})}),Object(a.jsx)(ye.a,{path:"/",children:Object(a.jsx)(fe,{})})]})})})})}var Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(We,{})}),document.getElementById("root")),Ge()}},[[154,1,2]]]);
//# sourceMappingURL=main.e65ff163.chunk.js.map