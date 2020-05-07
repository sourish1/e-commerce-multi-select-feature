(this["webpackJsonpe-commerce-filter"]=this["webpackJsonpe-commerce-filter"]||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),l=(n(20),n(3)),i=n(4),s=n(7),u=n(6),m=n(5),p=function(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "},d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this.props.products.map((function(e){return a.a.createElement("div",{className:"col-md-4",key:e.id},a.a.createElement("div",{className:"thumbnail text-center"},a.a.createElement("a",{href:"#".concat(e.id)},a.a.createElement("img",{src:"products/".concat(e.sku,"_2.jpg"),alt:e.title}),a.a.createElement("p",null,e.title)),a.a.createElement("b",null,p(e.price)),a.a.createElement("button",{className:"btn btn-primary"},"Add to cart")))}));return a.a.createElement("div",{className:"row"},e)}}]),n}(r.Component),f=Object(m.b)((function(e){return{products:e.products.filteredItems}}),{fetchProducts:function(){return function(e){fetch("http://localhost:8000/products").then((function(e){return e.json()})).catch((function(e){return fetch("db.json").then((function(e){return e.json()})).then((function(e){return e.products}))})).then((function(t){e({type:"FETCH_PRODUCTS",payload:t})}))}}})(d),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-4"},"".concat(this.props.filteredProducts.length," products found.")),a.a.createElement("div",{className:"col-md-4"},a.a.createElement("label",null,"Order by Price",a.a.createElement("select",{className:"form-control",value:this.props.sort,onChange:function(t){e.props.sortProducts(e.props.filteredProducts,t.target.value)}},a.a.createElement("option",{value:""},"Select"),a.a.createElement("option",{value:"lowestprice"},"Lowest to highest"),a.a.createElement("option",{value:"highestprice"},"Highest to lowest")))),a.a.createElement("div",{className:"col-md-4"},a.a.createElement("label",null," ","Select Size",a.a.createElement("select",{className:"form-control",value:this.props.size,onChange:function(t){e.props.filterProducts(e.props.products,t.target.value)}},a.a.createElement("option",{value:""},"ALL"),a.a.createElement("option",{value:"x"},"XS"),a.a.createElement("option",{value:"s"},"S"),a.a.createElement("option",{value:"m"},"M"),a.a.createElement("option",{value:"l"},"L"),a.a.createElement("option",{value:"xl"},"XL"),a.a.createElement("option",{value:"xxl"},"XXL")))))}}]),n}(r.Component),h=Object(m.b)((function(e){return{products:e.products.items,filteredProducts:e.products.filteredItems,size:e.products.size,sort:e.products.sort}}),{filterProducts:function(e,t){return function(n){n({type:"FILTER_PRODUCTS_BY_SIZE",payload:{size:t,items:""===t?e:e.filter((function(e){return e.availableSizes.indexOf(t.toUpperCase())>=0}))}})}},sortProducts:function(e,t){return function(n){var r=e.slice();""!==t?r.sort((function(e,n){return"lowestprice"===t?e.price>n.price?1:-1:e.price<n.price?1:-1})):r.sort((function(e,t){return e.id>t.id?1:-1})),n({type:"ORDER_PRODUCTS_BY_PRICE",payload:{sort:t,items:r}})}}})(E),v=n(1),b=n(14),O=n(2),j={items:[],filteredItems:[],size:"",sort:""},y=Object(v.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(O.a)(Object(O.a)({},e),{},{items:t.payload,filteredItems:t.payload});case"FILTER_PRODUCTS_BY_SIZE":return Object(O.a)(Object(O.a)({},e),{},{filteredItems:t.payload.items,size:t.payload.size,sort:""});case"ORDER_PRODUCTS_BY_PRICE":return Object(O.a)(Object(O.a)({},e),{},{filteredItems:t.payload.items,sort:t.payload.sort});default:return e}}}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,S=Object(v.e)(y,_(Object(v.a)(b.a))),g=(n(27),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(m.a,{store:S},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"E-commerce Shopping Cart Application"),a.a.createElement("hr",null),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-9"},a.a.createElement(h,null),a.a.createElement("hr",null),a.a.createElement(f,null)),a.a.createElement("div",{className:"col-md-3"}))))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a5a1779d.chunk.js.map