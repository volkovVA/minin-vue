(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.links,(function(e,a){return r("v-list-item",{key:a.link,attrs:{to:e.url}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),t.isUserLoggedIn?r("v-list-item",{on:{click:t.onLogout}},[r("v-list-item-icon",[r("v-icon",[t._v("exit_to_app")])],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s("Logout")}})],1)],1):t._e()],2)],1)],1),r("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[r("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",[r("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[t._v("Ad application")])],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.links,(function(e,a){return r("v-btn",{key:a.link,attrs:{to:e.url,color:"blue darken-2"}},[r("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),t.isUserLoggedIn?r("v-btn",{on:{click:t.onLogout}},[r("v-icon",[t._v("exit_to_app")]),t._v(" Logout ")],1):t._e()],2)],1),r("v-content",[r("router-view")],1),t.error?[r("v-snackbar",{attrs:{timeout:5e3,"multi-line":!0,color:"error",value:!0},on:{input:t.closeError}},[t._v(" "+t._s(t.error)+" "),r("v-btn",{attrs:{dark:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e()],2)},i=[],s={data:function(){return{drawer:!1}},computed:{error:function(){return this.$store.getters.error},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},links:function(){return this.isUserLoggedIn?[{title:"Orders",icon:"bookmark_border",url:"/orders"},{title:"New ad",icon:"note_add",url:"/new"},{title:"My ads",icon:"list",url:"/list"}]:[{title:"Login",icon:"lock",url:"/login"},{title:"Registration",icon:"face",url:"/registration"}]}},methods:{closeError:function(){this.$store.dispatch("clearError")},onLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/")}}},o=s,c=(r("5cbd"),r("2877")),l=r("6544"),d=r.n(l),u=r("7496"),p=r("40dc"),v=r("5bc1"),m=r("8336"),f=r("a75b"),h=r("132d"),g=r("8860"),b=r("da13"),x=r("5d23"),w=r("1baa"),V=r("34c3"),y=r("f774"),_=r("2db4"),C=r("2fa4"),k=r("2a7f"),L=Object(c["a"])(o,n,i,!1,null,"b6e90130",null),O=L.exports;d()(L,{VApp:u["a"],VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:m["a"],VContent:f["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemContent:x["a"],VListItemGroup:w["a"],VListItemIcon:V["a"],VListItemTitle:x["c"],VNavigationDrawer:y["a"],VSnackbar:_["a"],VSpacer:C["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var E=r("8c4f"),I=r("2f62"),A=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("7db0"),r("4160"),r("baa5"),r("fb6a"),r("b0c0"),r("b64b"),r("159b"),r("5530")),$=(r("96cf"),r("1da1")),S=r("d4ec"),T=r("8aa5"),j=function t(e,r,a,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;Object(S["a"])(this,t),this.title=e,this.description=r,this.ownerId=a,this.imageSrc=n,this.promo=i,this.id=s},R={state:{ads:[]},mutations:{createAd:function(t,e){t.ads.push(e)},loadAds:function(t,e){t.ads=e},updateAd:function(t,e){var r=e.title,a=e.description,n=e.id,i=t.ads.find((function(t){return t.id===n}));i.title=r,i.description=a}},actions:{createAd:function(t,e){var r=t.commit,a=t.getters;return Object($["a"])(regeneratorRuntime.mark((function t(){var n,i,s,o,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),n=e.image,t.prev=3,i=new j(e.title,e.description,a.user.id,"",e.promo),t.next=7,T["database"]().ref("ads").push(i);case 7:return s=t.sent,o=n.name.slice(n.name.lastIndexOf(".")),t.next=11,T["storage"]().ref("ads/".concat(s.key,".").concat(o)).put(n);case 11:return c=t.sent,t.next=14,c.ref.getDownloadURL();case 14:l=t.sent,T["database"]().ref("ads").child(s.key).update({imageSrc:l}).then((function(){r("setLoading",!1),r("createAd",Object(A["a"])({},i,{id:s.key,imageSrc:l}))})),t.next=23;break;case 18:throw t.prev=18,t.t0=t["catch"](3),r("setError",t.t0.message),r("setLoading",!1),t.t0;case 23:case"end":return t.stop()}}),t,null,[[3,18]])})))()},fetchAds:function(t){var e=t.commit;return Object($["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e("clearError"),e("setLoading",!0),r=[],t.prev=3,t.next=6,T["database"]().ref("ads").once("value");case 6:a=t.sent,n=a.val(),Object.keys(n).forEach((function(t){var e=n[t];r.push(new j(e.title,e.description,e.ownerId,e.imageSrc,e.promo,t))})),e("loadAds",r),e("setLoading",!1),t.next=18;break;case 13:throw t.prev=13,t.t0=t["catch"](3),e("setError",t.t0.message),e("setLoading",!1),t.t0;case 18:case"end":return t.stop()}}),t,null,[[3,13]])})))()},updateAd:function(t,e){var r=t.commit,a=e.title,n=e.description,i=e.id;return Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),t.prev=2,t.next=5,T["database"]().ref("ads").child(i).update({title:a,description:n});case 5:r("updateAd",{title:a,description:n,id:i}),r("setLoading",!1),t.next=14;break;case 9:throw t.prev=9,t.t0=t["catch"](2),r("setError",t.t0.message),r("setLoading",!1),t.t0;case 14:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},getters:{ads:function(t){return t.ads},promoAds:function(t){return t.ads.filter((function(t){return t.promo}))},myAds:function(t,e){return t.ads.filter((function(t){return t.ownerId===e.user.id}))},adById:function(t){return function(e){return t.ads.find((function(t){return t.id===e}))}}}},P=function t(e){Object(S["a"])(this,t),this.id=e},U={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{registerUser:function(t,e){var r=t.commit,a=e.email,n=e.password;return Object($["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),t.prev=2,t.next=5,T["auth"]().createUserWithEmailAndPassword(a,n);case 5:e=t.sent,r("setUser",new P(e.user.uid)),r("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t["catch"](2),r("setLoading",!1),r("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,10]])})))()},loginUser:function(t,e){var r=t.commit,a=e.email,n=e.password;return Object($["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),t.prev=2,t.next=5,T["auth"]().signInWithEmailAndPassword(a,n);case 5:e=t.sent,r("setUser",new P(e.user.uid)),r("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t["catch"](2),r("setLoading",!1),r("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,10]])})))()},autoLoginUser:function(t,e){var r=t.commit;r("setUser",new P(e.uid))},logoutUser:function(t){var e=t.commit;T["auth"]().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user},isUserLoggedIn:function(t){return null!==t.user}}},D={state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){var r=t.commit;r("setLoading",e)},setError:function(t,e){var r=t.commit;r("setError",e)},clearError:function(t){var e=t.commit;e("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}},F=function t(e,r,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;Object(S["a"])(this,t),this.name=e,this.phone=r,this.adId=a,this.done=n,this.id=i},B={state:{orders:[]},mutations:{loadOrders:function(t,e){t.orders=e}},actions:{createOrder:function(t,e){var r=t.commit,a=e.name,n=e.phone,i=e.adId,s=e.ownerId;return Object($["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new F(a,n,i),r("clearError"),t.prev=2,t.next=5,T["database"]().ref("/users/".concat(s,"/orders")).push(e);case 5:t.next=11;break;case 7:throw t.prev=7,t.t0=t["catch"](2),r("serError",t.t0.message),t.t0;case 11:case"end":return t.stop()}}),t,null,[[2,7]])})))()},fetchOrders:function(t){var e=t.commit,r=t.getters;return Object($["a"])(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e("setLoading",!0),e("clearError"),a=[],t.prev=3,t.next=6,T["database"]().ref("/users/".concat(r.user.id,"/orders")).once("value");case 6:n=t.sent,i=n.val(),Object.keys(i).forEach((function(t){var e=i[t];a.push(new F(e.name,e.phone,e.adId,e.done,t))})),e("loadOrders",a),e("setLoading",!1),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](3),e("setLoading",!1),e("setError",t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[3,13]])})))()},markOrderDone:function(t,e){var r=t.commit,a=t.getters;return Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r("clearError"),t.prev=1,t.next=4,T["database"]().ref("/users/".concat(a.user.id,"/orders")).child(e).update({done:!0});case 4:t.next=10;break;case 6:throw t.prev=6,t.t0=t["catch"](1),r("setError",t.t0.message),t.t0;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()}},getters:{doneOrders:function(t){return t.orders.filter((function(t){return t.done}))},undoneOrders:function(t){return t.orders.filter((function(t){return!t.done}))},orders:function(t,e){return e.undoneOrders.concat(e.doneOrders)}}};a["a"].use(I["a"]);var q=new I["a"].Store({modules:{ads:R,user:U,shared:D,orders:B},state:{},mutations:{},actions:{}}),z=function(t,e,r){q.getters.user?r():r("/login?loginError=true")},M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",[r("v-container",[r("v-layout",[r("v-flex",{staticClass:"text-center pt-10",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{size:100,width:4,color:"purple",indeterminate:""}})],1)],1)],1)],1):r("div",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-carousel",t._l(t.promoAds,(function(e){return r("v-carousel-item",{key:e.id,attrs:{src:e.imageSrc,"reverse-transition":"fade-transition",transition:"fade-transition"}},[r("div",{staticClass:"car-link"},[r("v-btn",{staticClass:"error",attrs:{to:"/ad/"+e.id}},[t._v(t._s(e.title))])],1)])})),1)],1)],1)],1),r("v-container",{attrs:{"grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.ads,(function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",sm4:"",md3:""}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.imageSrc}}),r("v-card-title",[t._v(t._s(e.title))]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.description))])]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:"",to:"/ad/"+e.id}},[t._v(" Open ")]),r("app-buy-modal",{attrs:{ad:e}})],1)],1)],1)})),1)],1)],1)},Y=[],J={computed:{promoAds:function(){return this.$store.getters.promoAds},ads:function(){return this.$store.getters.ads},loading:function(){return this.$store.getters.loading}}},N=J,W=(r("dc58"),r("b0af")),G=r("99d9"),H=r("5e66"),K=r("3e35"),X=r("a523"),Q=r("0e8f"),Z=r("adda"),tt=r("a722"),et=r("490a"),rt=Object(c["a"])(N,M,Y,!1,null,"d1ebf98a",null),at=rt.exports;d()(rt,{VBtn:m["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VCarousel:H["a"],VCarouselItem:K["a"],VContainer:X["a"],VFlex:Q["a"],VImg:Z["a"],VLayout:tt["a"],VProgressCircular:et["a"],VSpacer:C["a"]});var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[t.loading?r("div",{staticClass:"text-center pt-5"},[r("v-progress-circular",{attrs:{size:100,width:4,color:"purple",indeterminate:""}})],1):r("v-card",[r("v-img",{attrs:{src:t.ad.imageSrc,height:"500px"}}),r("v-card-text",[r("h1",{staticClass:"text--primary mb-5"},[t._v(t._s(t.ad.title))]),r("p",[t._v(t._s(t.ad.description))])]),r("v-card-actions",[r("v-spacer"),t.isOwner?r("app-edit-ad-modal",{attrs:{ad:t.ad}}):t._e(),r("app-buy-modal",{attrs:{ad:t.ad}})],1)],1)],1)],1)],1)},it=[],st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"mr-2",attrs:{color:"warning",dark:""}},a),[t._v("Edit")])]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-card",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v("Edit ad")])])],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",[r("v-text-field",{attrs:{label:"Title",name:"title",type:"text"},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),r("v-textarea",{attrs:{label:"Description",name:"description",type:"text","multi-line":""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-actions",[r("v-spacer"),r("v-btn",{on:{click:t.onCancel}},[t._v("Cancel")]),r("v-btn",{staticClass:"success",on:{click:t.onSave}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},ot=[],ct={props:["ad"],data:function(){return{modal:!1,editedDescription:this.ad.description,editedTitle:this.ad.title}},methods:{onCancel:function(){this.editedDescription=this.ad.description,this.editedTitle=this.ad.title,this.modal=!1},onSave:function(){""!==this.editedDescription&&""!==this.editedTitle&&(this.$store.dispatch("updateAd",{title:this.editedTitle,description:this.editedDescription,id:this.ad.id}),this.modal=!1)}}},lt=ct,dt=r("169a"),ut=r("8654"),pt=r("a844"),vt=Object(c["a"])(lt,st,ot,!1,null,null,null),mt=vt.exports;d()(vt,{VBtn:m["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VContainer:X["a"],VDialog:dt["a"],VFlex:Q["a"],VLayout:tt["a"],VSpacer:C["a"],VTextField:ut["a"],VTextarea:pt["a"]});var ft={components:{appEditAdModal:mt},props:["id"],computed:{ad:function(){var t=this.id;return this.$store.getters.adById(t)},loading:function(){return this.$store.getters.loading},isOwner:function(){return this.ad.ownerId===this.$store.getters.user.id}}},ht=ft,gt=Object(c["a"])(ht,nt,it,!1,null,null,null),bt=gt.exports;d()(gt,{VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VContainer:X["a"],VFlex:Q["a"],VImg:Z["a"],VLayout:tt["a"],VProgressCircular:et["a"],VSpacer:C["a"]});var xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-container",{attrs:{"grid-list-lg":""}},[t.loading||0===t.myAds.length?t.loading||0!==t.myAds.length?r("v-layout",[r("v-flex",{staticClass:"text-center",attrs:{"xs-12":""}},[r("v-progress-circular",{attrs:{size:100,width:4,color:"purple",indeterminate:""}})],1)],1):r("v-layout",[r("v-flex",{staticClass:"text-center",attrs:{"xs-12":""}},[r("h1",{staticClass:"text-primary"},[t._v("You have no ads")])])],1):r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.myAds,(function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md3:""}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.imageSrc}}),r("v-card-title",[t._v(t._s(e.title))]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.description))])]),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"primary",attrs:{text:"",to:"/ad/"+e.id}},[t._v(" Open ")])],1)],1)],1)})),1)],1)],1)},wt=[],Vt={computed:{myAds:function(){return this.$store.getters.myAds},loading:function(){return this.$store.getters.loading}}},yt=Vt,_t=Object(c["a"])(yt,xt,wt,!1,null,null,null),Ct=_t.exports;d()(_t,{VBtn:m["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VContainer:X["a"],VFlex:Q["a"],VImg:Z["a"],VLayout:tt["a"],VProgressCircular:et["a"],VSpacer:C["a"]});var kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v("Create new ad")]),r("v-form",{ref:"form",staticClass:"mb-10",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"Ad title",name:"title",type:"text",required:"",rules:[function(t){return!!t||"Title is required"}]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("v-textarea",{attrs:{label:"Ad description",name:"description",type:"text",rules:[function(t){return!!t||"Description is required"}]},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),r("v-layout",{attrs:{row:"","mb-3":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"warning",on:{click:t.triggerUpload}},[t._v("Upload "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-cloud-upload")])],1),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[t.imageSrc?r("img",{attrs:{src:t.imageSrc,alt:"",height:"100"}}):t._e()])],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-switch",{attrs:{label:"Add to promo?",color:"primary"},model:{value:t.promo,callback:function(e){t.promo=e},expression:"promo"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-spacer"),r("v-btn",{staticClass:"success",attrs:{loading:t.loading,disabled:!t.valid||!t.image||t.loading},on:{click:t.createAd}},[t._v("Create ad")])],1)],1)],1)],1)],1)},Lt=[],Ot={data:function(){return{title:"",description:"",promo:!1,valid:!1,image:null,imageSrc:""}},computed:{loading:function(){return this.$store.getters.loading}},methods:{createAd:function(){var t=this;if(this.$refs.form.validate()&&this.image){var e={title:this.title,description:this.description,promo:this.promo,image:this.image};this.$store.dispatch("createAd",e).then((function(){t.$router.push("/list")})).catch((function(){}))}},triggerUpload:function(){this.$refs.fileInput.click()},onFileChange:function(t){var e=this,r=t.target.files[0],a=new FileReader;a.onload=function(t){e.imageSrc=a.result},a.readAsDataURL(r),this.image=r}}},Et=Ot,It=r("4bd4"),At=r("b73d"),$t=Object(c["a"])(Et,kt,Lt,!1,null,null,null),St=$t.exports;d()($t,{VBtn:m["a"],VContainer:X["a"],VFlex:Q["a"],VForm:It["a"],VIcon:h["a"],VLayout:tt["a"],VSpacer:C["a"],VSwitch:At["a"],VTextField:ut["a"],VTextarea:pt["a"]});var Tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("Login form")])],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"E-mail",name:"email","prepend-icon":"person",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"lock",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v("Login")])],1)],1)],1)],1)],1)},jt=[],Rt={data:function(){return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then((function(){t.$router.push("/")})).catch((function(){}))}}},created:function(){this.$route.query.loginError&&this.$store.dispatch("setError","Please log in to access this page.")}},Pt=Rt,Ut=r("62ad"),Dt=r("0fd9"),Ft=r("71d9"),Bt=Object(c["a"])(Pt,Tt,jt,!1,null,null,null),qt=Bt.exports;d()(Bt,{VBtn:m["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCol:Ut["a"],VContainer:X["a"],VForm:It["a"],VRow:Dt["a"],VSpacer:C["a"],VTextField:ut["a"],VToolbar:Ft["a"],VToolbarTitle:k["b"]});var zt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("Registration form")])],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"E-mail",name:"email","prepend-icon":"person",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"lock",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-text-field",{attrs:{label:"Confirm password",name:"confirm-password","prepend-icon":"lock",type:"password",counter:6,rules:t.confirmPasswordRules},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v("Create account")])],1)],1)],1)],1)],1)},Mt=[],Yt={data:function(){var t=this;return{email:"",password:"",confirmPassword:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}],confirmPasswordRules:[function(t){return!!t||"Password is required"},function(e){return e===t.password||"Password should match"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("registerUser",e).then((function(){t.$router.push("/")})).catch((function(){}))}}}},Jt=Yt,Nt=Object(c["a"])(Jt,zt,Mt,!1,null,null,null),Wt=Nt.exports;d()(Nt,{VBtn:m["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCol:Ut["a"],VContainer:X["a"],VForm:It["a"],VRow:Dt["a"],VSpacer:C["a"],VTextField:ut["a"],VToolbar:Ft["a"],VToolbarTitle:k["b"]});var Gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:""}},[t.loading?r("v-flex",{staticClass:"text-center pt-5",attrs:{xs12:""}},[r("v-progress-circular",{attrs:{size:100,width:4,color:"purple",indeterminate:""}})],1):t.loading||0===t.orders.length?r("v-flex",{staticClass:"text-center",attrs:{xs12:""}},[r("h1",{staticClass:"text--secondary"},[t._v("You have no orders")])]):r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("h1",{staticClass:"text--secondary mb-3"},[t._v("Orders")]),r("v-list",{attrs:{subheader:"","two-line":"",flat:""}},[r("v-list-item-group",{attrs:{multiple:""}},t._l(t.orders,(function(e){return r("v-list-item",{key:e.id},[[r("v-list-item-action",[r("v-checkbox",{attrs:{"input-value":e.done,color:"primary"},on:{change:function(r){return t.markDone(e)}}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))]),r("v-list-item-subtitle",[t._v(t._s(e.phone))])],1),r("v-list-item-action",[r("v-btn",{staticClass:"primary",attrs:{to:"/ad/"+e.adId}},[t._v("Open")])],1)]],2)})),1)],1)],1)],1)],1)},Ht=[],Kt={computed:{loading:function(){return this.$store.getters.loading},orders:function(){return this.$store.getters.orders}},methods:{markDone:function(t){this.$store.dispatch("markOrderDone",t.id).then((function(){t.done=!0})).catch((function(){})),t.done=!0}},created:function(){this.$store.dispatch("fetchOrders")}},Xt=Kt,Qt=r("ac7c"),Zt=r("1800"),te=Object(c["a"])(Xt,Gt,Ht,!1,null,null,null),ee=te.exports;d()(te,{VBtn:m["a"],VCheckbox:Qt["a"],VContainer:X["a"],VFlex:Q["a"],VLayout:tt["a"],VList:g["a"],VListItem:b["a"],VListItemAction:Zt["a"],VListItemContent:x["a"],VListItemGroup:w["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VProgressCircular:et["a"]}),a["a"].use(E["a"]);var re=new E["a"]({routes:[{path:"",name:"home",component:at},{path:"/ad/:id",props:!0,name:"ad",component:bt},{path:"/list",name:"list",component:Ct,beforeEnter:z},{path:"/new",name:"newAd",component:St,beforeEnter:z},{path:"/login",name:"login",component:qt},{path:"/registration",name:"reg",component:Wt},{path:"/orders",name:"orders",component:ee,beforeEnter:z}],mode:"history"}),ae=(r("d1e78"),r("f309"));a["a"].use(ae["a"],{iconfont:"md"});var ne=new ae["a"]({}),ie=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"primary",attrs:{dark:""}},a),[t._v("Buy")])]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-card",[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("h1",{staticClass:"text--primary"},[t._v("Want to by it?")])])],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",[r("v-text-field",{attrs:{label:"Your name",name:"name",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),r("v-textarea",{attrs:{label:"Your phone",name:"phone",type:"text","multi-line":""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{disabled:t.localLoading},on:{click:t.onCancel}},[t._v(" Close ")]),r("v-btn",{staticClass:"success",attrs:{disabled:t.localLoading,loading:t.localLoading},on:{click:t.onSave}},[t._v(" Buy it ")])],1)],1)],1)],1)],1)],1)},se=[],oe=(r("d3b7"),{props:["ad"],data:function(){return{modal:!1,name:"",phone:"",localLoading:!1}},methods:{onCancel:function(){this.name="",this.phone="",this.modal=!1},onSave:function(){var t=this;""!==this.name&&""!==this.phone&&(this.localLoading=!0,this.$store.dispatch("createOrder",{name:this.name,phone:this.phone,adId:this.ad.id,ownerId:this.ad.ownerId}).finally((function(){t.name="",t.phone="",t.localLoading=!1,t.modal=!1})),this.modal=!1)}}}),ce=oe,le=Object(c["a"])(ce,ie,se,!1,null,null,null),de=le.exports;d()(le,{VBtn:m["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VContainer:X["a"],VDialog:dt["a"],VFlex:Q["a"],VLayout:tt["a"],VSpacer:C["a"],VTextField:ut["a"],VTextarea:pt["a"]}),a["a"].config.productionTip=!1,a["a"].component("app-buy-modal",de),new a["a"]({router:re,store:q,vuetify:ne,render:function(t){return t(O)},created:function(){var t=this;T["initializeApp"]({apiKey:"AIzaSyD-gH3J2vRpmdaszhPLSrsXLde7_uf9t6c",authDomain:"itc-ads-7568c.firebaseapp.com",databaseURL:"https://itc-ads-7568c.firebaseio.com",projectId:"itc-ads-7568c",storageBucket:"itc-ads-7568c.appspot.com",messagingSenderId:"465476665125",appId:"1:465476665125:web:356aa0dfe4a1cc140d24cc"}),T["auth"]().onAuthStateChanged((function(e){e&&t.$store.dispatch("autoLoginUser",e)})),this.$store.dispatch("fetchAds")}}).$mount("#app")},"5cbd":function(t,e,r){"use strict";var a=r("99f3"),n=r.n(a);n.a},"99f3":function(t,e,r){},d1db:function(t,e,r){},dc58:function(t,e,r){"use strict";var a=r("d1db"),n=r.n(a);n.a}});
//# sourceMappingURL=app.69836d5c.js.map