(this["webpackJsonpgrocery-list"]=this["webpackJsonpgrocery-list"]||[]).push([[0],{103:function(e,n,t){},112:function(e,n,t){"use strict";t.r(n);var r=t(21),a=t(8),c=t(0),i=t(14),o=t.n(i),l=(t(103),t(26)),u=t(155),d=t(115),s=t(161),j=t(160),b=t(67),m=t(63),O=t(85),h=t.n(O),f=t(84),p=t.n(f),v=t(114),x=t(149),g=t(162),I=t(164),y=t(151),S=t(150),w=t(30),C=t.n(w),_=t(31);function k(){var e=Object(r.a)(["\n  mutation updateOrderedItem($_id: String!) {\n    updateOrderedItem(_id: $_id) {\n      name\n    }\n  }\n"]);return k=function(){return e},e}function D(){var e=Object(r.a)(["\n  mutation updateCompletedItem($_id: String!) {\n    updateCompletedItem(_id: $_id) {\n      name\n    }\n  }\n"]);return D=function(){return e},e}function E(){var e=Object(r.a)(["\n  mutation deleteItem($_id: String!) {\n    deleteItem(_id: $_id) {\n      name\n    }\n  }\n"]);return E=function(){return e},e}var $=C()(E()),q=C()(D()),A=C()(k());function T(e){var n=e.name,t=e.id,r=e.completed,i=e.ordered;console.log(r,i,"STUFF");var o,u=Object(_.a)($),d=Object(l.a)(u,1)[0],s=Object(_.a)(q),j=Object(l.a)(s,1)[0],b=Object(_.a)(A),O=Object(l.a)(b,1)[0],f=Object(c.useState)([0]),w=Object(l.a)(f,2),C=w[0],k=w[1],D="checkbox-list-label-".concat(t);return Object(a.jsxs)(v.a,{role:void 0,dense:!0,button:!0,onClick:(o=t,function(){var e=C.indexOf(o),n=Object(m.a)(C);-1===e?n.push(o):n.splice(e,1),k(n)}),children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(g.a,{edge:"start",checked:-1!==C.indexOf(t),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":D},onClick:function(){j({variables:{_id:t}}).then((function(){return window.location.reload()}))}})}),Object(a.jsx)(I.a,{style:{fontWeight:"bold",textDecoration:r||i?"line-through":"none"},id:D,primary:n}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(S.a,{onClick:function(){O({variables:{_id:t}}).then((function(){return window.location.reload()}))},edge:"end","aria-label":"ordered",children:Object(a.jsx)(p.a,{})}),Object(a.jsx)(S.a,{onClick:function(){window.confirm("Are you sure you want to delete this item?")&&d({variables:{_id:t}}).then((function(){return window.location.reload()}))},edge:"end","aria-label":"delete",children:Object(a.jsx)(h.a,{})})]})]},t)}var F=t(154),R=t(152),M=t(153),N=Object(R.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),P=function(e){var n=e.items,t=N();return Object(a.jsx)(M.a,{className:t.root,children:Object(a.jsx)(F.a,{variant:"outlined",children:Object(a.jsx)(u.a,{children:n.map((function(e){return Object(c.createElement)(T,Object(b.a)(Object(b.a)({},e),{},{key:e.id}))}))})})})},L=t(88),B=t(156),W=t(163),J=t(159);function Q(){var e=Object(r.a)(["\n  query getShops {\n    shops {\n      id\n      name\n\n      item {\n        id\n        name\n      }\n    }\n  }\n"]);return Q=function(){return e},e}function U(){var e=Object(r.a)(["\n  mutation addItem_API($name: String!, $shopID: [String]) {\n    addItem_API(name: $name, shopID: $shopID) {\n      id\n      name\n      shop {\n        id\n        name\n      }\n    }\n  }\n"]);return U=function(){return e},e}var z=C()(U()),G=C()(Q()),H=function(){var e=Object(_.b)(G).data,n=Object(_.a)(z),t=Object(l.a)(n,1)[0],r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)(),s=Object(l.a)(d,2),j=s[0],b=s[1],m=e?e.shops.map((function(e){return{label:e.name,value:e.id}})):{label:"Loading",value:"1"};return Object(a.jsx)("div",{children:Object(a.jsx)("form",{onSubmit:function(e){var n;j&&j.length>0?(t({variables:{name:o,shopID:(n=j,n.map((function(e){return e.value})))}}).then((function(){return window.location.reload()})),u("")):alert("Select a shop"),e.preventDefault()},children:Object(a.jsxs)(B.a,{container:!0,spacing:3,children:[Object(a.jsx)(B.a,{item:!0,xs:12,sm:5,children:Object(a.jsx)(W.a,{value:o,required:!0,id:"newitem",name:"newitem",label:"Add new item",fullWidth:!0,autoComplete:"given-name",onChange:function(e){u(e.target.value)}})}),Object(a.jsx)(B.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(L.a,{options:m,value:j,onChange:b,labelledBy:"Select"})}),Object(a.jsx)(B.a,{item:!0,xs:12,sm:3,children:Object(a.jsx)(J.a,{variant:"contained",color:"primary",type:"submit",children:"Add item"})})]})})})};function K(){var e=Object(r.a)(["\n  query getShops {\n    shops {\n      id\n      name\n    }\n  }\n"]);return K=function(){return e},e}function V(){var e=Object(r.a)(["\n  query getItems {\n    items {\n      id\n      name\n      completed\n      ordered\n      shop {\n        id\n        name\n      }\n    }\n  }\n"]);return V=function(){return e},e}var X=C()(V()),Y=C()(K()),Z=function(){var e=function(e){if(t&&e){var n=null;x("0"===e?t.items:t.items.filter((function(t){return t.shop&&(n=t.shop.filter((function(n){return n.id===e}))),n.length>0?t:null})))}},n=Object(_.b)(X),t=n.data,r=n.loading,i=n.error,o=Object(_.b)(Y).data,b=Object(c.useState)(localStorage.getItem("selectedshop")?localStorage.getItem("selectedshop"):""),m=Object(l.a)(b,2),O=m[0],h=m[1],f=Object(c.useState)(),p=Object(l.a)(f,2),v=p[0],x=p[1];if(Object(c.useEffect)((function(){e(localStorage.getItem("selectedshop")?localStorage.getItem("selectedshop"):null)}),[t]),r)return Object(a.jsx)("p",{children:"loading..."});if(i)return Object(a.jsx)("p",{children:"ERROR"});if(!t)return Object(a.jsx)("p",{children:"Not found"});t&&!v&&x(t.items);return Object(a.jsx)("div",{style:{paddingTop:"5%"},children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(s.a,{labelId:"select-label",id:"select",value:O,onChange:function(n){h(n.target.value),localStorage.setItem("selectedshop",n.target.value),e(n.target.value)},children:[Object(a.jsx)(j.a,{value:"0",children:"All"}),o?o.shops.map((function(e){return Object(a.jsx)(j.a,{value:e.id,children:e.name},e.id)})):Object(a.jsx)(j.a,{value:1,children:"Loading"})]}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(H,{}),Object(a.jsx)("h1",{children:"ITEMS"}),Object(a.jsx)(P,{items:v?v.filter((function(e){return!e.completed&&!e.ordered})):v})]}),Object(a.jsx)("h1",{children:"ORDERED ITEMS"}),Object(a.jsx)(P,{items:v?v.filter((function(e){return e.ordered&&!e.completed})):v}),Object(a.jsx)("h1",{children:"DONE ITEMS"}),Object(a.jsx)(P,{items:v?v.filter((function(e){return e.completed})):v})]})})})};var ee=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(Z,{})})})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,166)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))},te=t(19),re=t(87),ae=t(86),ce=t(49);function ie(){var e=Object(r.a)(["\n  {\n    items @client\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(r.a)(["\n    extend type Mutation {\n        AddItem(item: Item!): [Item]\n    }\n"]);return oe=function(){return e},e}var le=C()(oe()),ue=C()(ie()),de={Mutation:{addItem:function(e,n,t){var r=n.item,a=t.cache,c=function(e,n){return e.find((function(e){return e.name===n.name}))?(console.log("Item is already added"),e):[].concat(Object(m.a)(e),[n])}(a.readQuery({query:ue}).items,r);return a.writeQuery({query:ue,data:{items:c}}),c}}};function se(){var e=Object(r.a)(["\n  {\n    \n      items\n      {\n        id\n        name    \n        shop{\n          id\n          name      \n        }\n      }\n    \n  }\n  "]);return se=function(){return e},e}var je=Object(re.a)({uri:"https://grocery-list-louise.herokuapp.com/graphql"}),be=new ae.a,me=new ce.a({link:je,cache:be,typeDefs:le,resolvers:de});me.query({query:C()(se())}).then((function(e){return null})),o.a.render(Object(a.jsx)(te.a,{client:me,children:Object(a.jsx)(ee,{})}),document.getElementById("root")),ne()}},[[112,1,2]]]);
//# sourceMappingURL=main.75c5ac63.chunk.js.map