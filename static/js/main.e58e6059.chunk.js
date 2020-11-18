(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t.n(c),a=t(23),o=t.n(a),u=t(13),s=t.n(u),d=t(17),l=t(6),j=t(3),x=t(10),b=t(4),p=Object(c.createContext)(),h=function(n){var e=Object(c.useState)({color:"ligth"}),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(r.jsx)(p.Provider,{value:[i,a],children:n.children})},f=Object(c.createContext)(),O=function(n){var e=Object(c.useState)([]),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(r.jsx)(f.Provider,{value:{countries:i,setCountries:a},children:n.children})},m=t(2),g=function(n){return n.map((function(e,t){return n.length>1?Object(r.jsx)("span",{children:"".concat(e.name,", ")},t):Object(r.jsx)("span",{children:"".concat(e.name)},t)}))};function v(){var n=Object(j.a)(["\n  padding: 5px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  transition: .2s;\n  border-radius: 5px;\n  color: ",";\n  &:hover {\n    opacity: 0.8;\n    border: 3px solid ",";\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(j.a)(["\n  flex-grow: 1;\n  max-width: 85%;\n"]);return w=function(){return n},n}function F(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n\n  @media screen and (max-width: 700px) {\n    padding: 10px;\n  }\n"]);return F=function(){return n},n}var y=m.default.header(F()),k=m.default.div(w()),C=m.default.button(v(),(function(n){return"dark"===n.theme.color?"#E7EDF0":"#1C1D1F"}),(function(n){return"dark"===n.theme.color?"#E7EDF0":"#1C1D1F"}));function D(){var n,e=Object(c.useContext)(p),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)(y,{className:"shadow",children:[Object(r.jsx)(k,{children:Object(r.jsx)("h1",{children:"Where in the world?"})}),Object(r.jsxs)(C,{onClick:function(){a({color:"ligth"===i.color?"dark":"ligth"})},children:[Object(r.jsx)("ion-icon",{name:"moon-outline"}),Object(r.jsxs)("span",{children:[(n=i.color,n.split(" ").map((function(n){return n.charAt(0).toUpperCase().concat(n.substring(1))})).toString().replace(/,/g," "))," Mode"]})]})]})}var E=t(16);function A(){var n=Object(j.a)(["\n  font-size: 14px;\n"]);return A=function(){return n},n}function N(){var n=Object(j.a)(["\n  display: block;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 15px;\n"]);return N=function(){return n},n}function S(){var n=Object(j.a)(["\n  font-weight: bold;\n  margin-right: 5px;\n"]);return S=function(){return n},n}function B(){var n=Object(j.a)(["\n  background-color: ",";\n  max-width: 250px;\n  padding: 15px;\n  padding-bottom: 40px;\n"]);return B=function(){return n},n}function R(){var n=Object(j.a)(["\n  position: static;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return R=function(){return n},n}function P(){var n=Object(j.a)(["\n  max-width: 250px;\n  height: 150px;\n"]);return P=function(){return n},n}function L(){var n=Object(j.a)(["\n  width: 100%;\n  max-width: 250px;\n  margin-bottom: 85px;\n  transition: all .2s ease-in-out;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);return L=function(){return n},n}var z=m.default.div(L()),T=m.default.div(P()),I=m.default.img(R()),J=m.default.div(B(),(function(n){return"dark"===n.theme.color?"#2B3743":"#FFFFFF"})),G=m.default.span(S()),M=m.default.span(N()),U=m.default.div(A());function W(n){var e=n.country,t=e.flag,c=e.name,i=e.population,a=e.region,o=e.capital;return Object(r.jsxs)(z,{className:"shadow",children:[Object(r.jsx)(T,{children:Object(r.jsx)(x.b,{to:{pathname:"/country/".concat(c),state:{country:e}},children:Object(r.jsx)(I,{src:t,alt:"banner",className:"shadow"})})}),Object(r.jsxs)(J,{children:[Object(r.jsx)(M,{children:c}),Object(r.jsxs)(U,{children:[Object(r.jsx)(G,{children:"Population:"}),Object(r.jsx)("span",{children:(new Intl.NumberFormat).format(i)})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(G,{children:"Region:"}),Object(r.jsx)("span",{children:a})]}),Object(r.jsxs)(U,{children:[Object(r.jsx)(G,{children:"Capital:"}),Object(r.jsx)("span",{children:o})]})]})]})}function q(){var n=Object(j.a)(["\n  padding: 60px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (max-width: 750px) {\n    padding: 40px;\n  }\n  @media screen and (max-width: 581px) {\n    justify-content: center;\n  }\n"]);return q=function(){return n},n}var H=m.default.div(q()),K=i.a.memo((function(n){var e=n.byRegion,t=n.byName,i=Object(c.useContext)(f).countries,a=e||t?function(n,e,t){var r=e?n.filter((function(n){return n.region===e})):n;return t?r.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):r}(i,e,t):i;return Object(r.jsx)("div",{children:Object(r.jsx)(H,{children:a.map((function(n,e){return Object(r.jsx)(W,{country:n},e)}))})})}));function Q(){var n=Object(j.a)(["\n  cursor: pointer;\n  width: 100%;\n  max-width: 250px;\n  padding: 20px;\n  border-radius: 10px;\n  outline: none;\n  transition: background-color 0.3s ease;\n  \n  &:hover {\n    background-color: ",";\n    opacity: 0.7;\n  }\n"]);return Q=function(){return n},n}function V(){var n=Object(j.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 500px;\n  flex-grow: 1;\n  padding: 20px;\n  padding-left: 40px;\n  transition: background-color 0.3s ease;\n  &:hover {\n    background-color: ",";\n    opacity: 0.7;  \n  }\n\n  @media (max-width: 750px) {\n    max-width: 100%;\n  }\n"]);return V=function(){return n},n}function X(){var n=Object(j.a)(["\n  flex-grow: 1;\n  max-width: 80%;\n\n  @media (max-width: 750px) {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 25px;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(j.a)(["\n  position: relative;\n  padding: 20px 60px 20px 60px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 750px) {\n    flex-direction: column;\n    padding: 10px;\n    align-items: start;\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(j.a)(["\n  margin-top: 45px;\n"]);return Z=function(){return n},n}var $=m.default.div(Z()),_=m.default.div(Y()),nn=m.default.div(X()),en=m.default.input(V(),(function(n){return"dark"===n.theme.color?"#202D36":"#FAFAFA"})),tn=m.default.select(Q(),(function(n){return"dark"===n.theme.color?"#202D36":"#FAFAFA"})),rn={byName:"",byRegion:""},cn=i.a.memo((function(){var n=Object(c.useState)(rn),e=Object(l.a)(n,2),t=e[0],i=e[1];return Object(r.jsxs)($,{children:[Object(r.jsxs)(_,{children:[Object(r.jsx)("ion-icon",{name:"search-outline",class:"search"}),Object(r.jsx)(nn,{children:Object(r.jsx)(en,{className:"shadow",type:"text",placeholder:"Search for country...",name:"search-country",onChange:function(n){i(Object(E.a)(Object(E.a)({},t),{},{byName:n.target.value}))}})}),Object(r.jsxs)(tn,{name:"select-continent",className:"shadow",onChange:function(n){i(Object(E.a)(Object(E.a)({},t),{},{byRegion:n.target.value}))},children:[Object(r.jsx)("option",{disabled:!0,value:"none",children:"Filter by region"}),Object(r.jsx)("option",{value:"Africa",children:"Africa"}),Object(r.jsx)("option",{value:"Americas",children:"Americas"}),Object(r.jsx)("option",{value:"Asia",children:"Asia"}),Object(r.jsx)("option",{value:"Europe",children:"Europe"}),Object(r.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(r.jsx)(K,{url:"https://restcountries.eu/rest/v2/all",byRegion:t.byRegion,byName:t.byName})]})})),an=t(27);function on(){var n=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return on=function(){return n},n}var un=m.default.div(on());function sn(){var n=Object(c.useContext)(p),e=Object(l.a)(n,1)[0];return Object(r.jsx)(un,{children:Object(r.jsx)(an.AtomSpinner,{color:"ligth"===e.color?"black":"white",size:100})})}function dn(){var n=Object(j.a)(["\n  align-items: center;\n  width: 120px;\n  height: 50px;\n  padding: 3px;\n  margin-top: 0;\n  margin-bottom: 5px;\n"]);return dn=function(){return n},n}function ln(){var n=Object(j.a)(["\n  width: 60%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  @media screen and (max-width: 980px) {\n    width: 100%;\n  }\n"]);return ln=function(){return n},n}function jn(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  @media screen and (max-width: 980px) {\n    flex-direction: column;\n  }\n"]);return jn=function(){return n},n}function xn(){var n=Object(j.a)(["\n  list-style-type: none;\n  padding-inline-start: 0px;\n  padding-inline-end: 40px;\n"]);return xn=function(){return n},n}function bn(){var n=Object(j.a)(["\n  font-weight: bold;\n  margin-right: 5px;\n"]);return bn=function(){return n},n}function pn(){var n=Object(j.a)(["\n  max-width: 250px;\n  @media screen and (max-width: 980px) {\n    margin-top: 20px;\n    max-width: 100%;\n  }\n"]);return pn=function(){return n},n}function hn(){var n=Object(j.a)(["\n  max-width: 250px;\n  @media screen and (max-width: 980px) {\n    margin-top: 20px;\n    max-width: 100%;\n  }\n"]);return hn=function(){return n},n}function fn(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  @media screen and (max-width: 1080px) {\n    width: 100%;\n    max-width: 450px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]);return fn=function(){return n},n}function On(){var n=Object(j.a)(["\n  width: 100%;\n  max-width: 600px;\n"]);return On=function(){return n},n}function mn(){var n=Object(j.a)(["\n  width: 100%;\n  max-height: 100%;\n"]);return mn=function(){return n},n}function gn(){var n=Object(j.a)(["\n  max-width: 450px;\n  max-height: 350px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(j.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1080px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return vn=function(){return n},n}function wn(){var n=Object(j.a)(["\n  margin-top: 20px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n  width: 150px;\n  border-radius: 10px;\n  background-color: ",";\n  color: ",";\n  padding: 15px;\n  outline: none;\n  border: none;\n  text-decoration: none;\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return wn=function(){return n},n}function Fn(){var n=Object(j.a)(["\n  width: 80%;\n  padding: 60px;\n  @media screen and (max-width: 750px) {\n    padding: 10px;\n  }\n"]);return Fn=function(){return n},n}function yn(){var n=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n"]);return yn=function(){return n},n}var kn=m.default.div(yn()),Cn=m.default.div(Fn()),Dn=m.default.button(wn(),(function(n){return"dark"===n.theme.color?"#2B3743":"#FFFFFF"}),(function(n){return"dark"===n.theme.color?"#E7EDF0":"#1C1D1F"})),En=m.default.div(vn()),An=m.default.div(gn()),Nn=m.default.img(mn()),Sn=m.default.div(On()),Bn=m.default.div(fn()),Rn=m.default.div(hn()),Pn=m.default.div(pn()),Ln=m.default.span(bn()),zn=m.default.ul(xn()),Tn=m.default.div(jn()),In=m.default.div(ln()),Jn=Object(m.default)(Dn)(dn()),Gn=function(){var n=Object(d.a)(s.a.mark((function n(e){var t,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://restcountries.eu/rest/v2/alpha/",n.next=3,fetch("https://restcountries.eu/rest/v2/alpha/"+e);case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Mn=[];function Un(){var n=Object(b.g)().state,e=Object(c.useState)(Mn),t=Object(l.a)(e,2),i=t[0],a=t[1],o=Object(c.useState)(!0),u=Object(l.a)(o,2),s=u[0],d=u[1];if(Object(c.useEffect)((function(){n&&Promise.all(n.country.borders.map((function(n){return Gn(n)}))).then((function(n){a(n),d(!1)}))}),[n]),!n)return Object(r.jsx)(b.a,{to:"/"});if(s)return Object(r.jsx)(sn,{color:"red",size:100});console.log(i);var j=n.country,p=(j=void 0===j?{}:j).flag,h=j.name,f=j.nativeName,O=j.subRegion,m=j.topLevelDomain,v=j.currencies,w=j.languages,F=j.population,y=j.region,k=j.capital,C=g(v),D=g(w);return console.log(s),Object(r.jsx)(kn,{children:Object(r.jsxs)(Cn,{children:[Object(r.jsx)(x.b,{to:"/",children:Object(r.jsxs)(Dn,{className:"shadow",children:[Object(r.jsx)("div",{children:Object(r.jsx)("ion-icon",{name:"arrow-back-outline"})}),Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"Back"})})]})}),Object(r.jsxs)(En,{children:[Object(r.jsx)(An,{children:Object(r.jsx)(Nn,{src:p,alt:"flag"})}),Object(r.jsxs)(Sn,{children:[Object(r.jsx)("h2",{children:h}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Rn,{children:Object(r.jsxs)(zn,{children:[Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(Ln,{children:"Native name: "}),Object(r.jsx)("span",{children:f})]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(Ln,{children:"Population: "}),Object(r.jsx)("span",{children:F})]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(Ln,{children:"Region: "}),Object(r.jsx)("span",{children:y})]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(Ln,{children:"Sub Region: "}),Object(r.jsx)("span",{children:O})]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(Ln,{children:"Capital: "}),Object(r.jsx)("span",{children:k})]})]})}),Object(r.jsx)(Pn,{children:Object(r.jsxs)(zn,{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)(Ln,{children:"Top Level Domain: "}),Object(r.jsx)("span",{children:m})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(Ln,{children:"Currencies: "}),C]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(Ln,{children:"Languages: "}),D]}),Object(r.jsx)("li",{})]})})]}),Object(r.jsxs)(Tn,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(Ln,{children:"Border Countries: "})}),Object(r.jsx)(In,{children:i.map((function(n,e){return Object(r.jsx)(x.b,{to:{pathname:"/country/".concat(n.name),state:{country:n}},children:Object(r.jsx)(Jn,{className:"shadow",children:n.name})},e)}))})]})]})]})]})})}function Wn(){var n=Object(j.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    transition: .1s;\n    line-height: 1.8;\n    margin: 0;\n    padding: 0;\n    background-color: ",";\n    color: ",";\n    font-family: 'Nunito Sans', sans-serif;\n  }\n\n  header {\n    background-color: ",";\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n\n  input {\n    background-color: ",";\n    color: ",";\n    border: none;\n    outline: none;\n    border-radius: 10px;\n    \n  }\n\n  select {\n    background-color: ",";\n    color: ",";\n    border: none;\n    outline: none;\n    border-radius: 10px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ion-icon {\n    color: ",";\n  }\n\n  .search {\n    position: absolute;\n    text-align: left;\n    top: 40%;\n    left: 75px;\n    @media screen and (max-width: 750px) {\n      top: 19%;\n      left: 20px;\n    }\n  }\n\n  .shadow {\n    -webkit-box-shadow: 1px -1px 12px -1px rgba(0, 0, 0, 0.1);\n    box-shadow: 1px -1px 12px -1px rgba(0, 0, 0, 0.1);\n  }\n"]);return Wn=function(){return n},n}var qn=Object(m.createGlobalStyle)(Wn(),(function(n){return"dark"===n.theme.color?"#202D36":"#FAFAFA"}),(function(n){return"dark"===n.theme.color?"#E7EDF0":"#1C1D1F"}),(function(n){return"dark"===n.theme.color?"#2B3743":"#FFFFFF"}),(function(n){return"dark"===n.theme.color?"#2B3743":"#FFFFFF"}),(function(n){return"dark"===n.theme.color?"#E7EDF0":"#1C1D1F"}),(function(n){return"dark"===n.theme.color?"#2B3743":"#FFFFFF"}),(function(n){return"dark"===n.theme.color?"#E7EDF0":"#1C1D1F"}),(function(n){return"dark"===n.theme.color?"#E7EDF0":"#1C1D1F"}));var Hn=function(){var n=Object(c.useContext)(p),e=Object(l.a)(n,1)[0],t=Object(c.useContext)(f).setCountries,i=Object(c.useState)(!1),a=Object(l.a)(i,2),o=a[0],u=a[1];return Object(c.useEffect)((function(){(function(){var n=Object(d.a)(s.a.mark((function n(){var e,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,fetch("https://restcountries.eu/rest/v2/all");case 3:return e=n.sent,n.next=6,e.json();case 6:r=n.sent,t(r),u(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t,u]),o?Object(r.jsx)(sn,{}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x.a,{children:Object(r.jsxs)(m.ThemeProvider,{theme:e,children:[Object(r.jsx)(qn,{}),Object(r.jsx)(D,{}),Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{exact:!0,path:"/",component:cn}),Object(r.jsx)(b.b,{path:"/country/:name",component:Un})]})]})})})},Kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};o.a.render(Object(r.jsx)(h,{children:Object(r.jsx)(O,{children:Object(r.jsx)(Hn,{})})}),document.getElementById("root")),Kn()}},[[40,1,2]]]);
//# sourceMappingURL=main.e58e6059.chunk.js.map