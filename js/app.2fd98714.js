(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bd8":function(t,e){t.exports={clientId:"94juhKCvbJq1SgnhnoANXZ8pEytHYE9o",domain:"andyworkdev.us.auth0.com",responseType:"token id_token",audience:"https://vds-db.andywork.dev",audience_dev:"http://localhost:5000",redirectUri:"http://localhost:3000",scope:"read:events add:events delete:events",dev:!1}},"0d00":function(t,e,n){"use strict";var a=n("cc4d"),i=n.n(a);i.a},1182:function(t,e,n){},2326:function(t,e,n){"use strict";var a=n("6f70"),i=n.n(a);i.a},"34ba":function(t,e,n){"use strict";var a=n("1182"),i=n.n(a);i.a},"3c6b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[n("nav-bar"),n("div",{staticClass:"container flex-grow-1"},[n("error"),n("div",{staticClass:"mt-5"},[n("router-view")],1)],1),n("footer",{staticClass:"bg-light text-center p-3"},[n("table",{staticClass:"tb-centered"},[n("tr",[n("td",[n("div",{staticClass:"logo"})]),n("td",[n("span",{staticStyle:{"text-align":"center"}},[t._v("Login with "),n("a",{attrs:{href:"https://auth0.com"}},[t._v("Auth0")])])])])])])],1)])],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container mb-3"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[t.$auth.isAuthenticated?t._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/main"}},[t._v("Main")])],1):t._e(),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings"}},[t._v("Settings")])],1):t._e(),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/archive"}},[t._v("Archive")])],1):t._e()]),n("ul",{staticClass:"navbar-nav d-none d-md-block"},[t.$auth.isAuthenticated||t.$auth.loading?t._e():n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-primary btn-margin",attrs:{id:"qsLoginBtn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login / Register")])]),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"profileDropDown","data-toggle":"dropdown"}},[n("img",{staticClass:"nav-user-profile rounded-circle",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}})]),n("div",{staticClass:"dropdown-menu dropdown-menu-right"},[n("div",{staticClass:"dropdown-header"},[t._v(t._s(t.$auth.user.name))]),n("router-link",{staticClass:"dropdown-item dropdown-profile",attrs:{to:"/profile"}},[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),t._v("Profile ")],1),n("a",{staticClass:"dropdown-item",attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),t._v("Log out ")],1)],1)]):t._e()]),t.$auth.isAuthenticated||t.$auth.loading?t._e():n("ul",{staticClass:"navbar-nav d-md-none"},[n("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"qsLoginBtn"},on:{click:t.login}},[t._v("Log in")])]),t.$auth.isAuthenticated?n("ul",{staticClass:"navbar-nav d-md-none d-flex",attrs:{id:"mobileAuthNavBar"}},[n("li",{staticClass:"nav-item"},[n("span",{staticClass:"user-info"},[n("img",{staticClass:"nav-user-profile d-inline-block rounded-circle mr-3",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}}),n("h6",{staticClass:"d-inline-block"},[t._v(t._s(t.$auth.user.name))])])]),n("li",[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),n("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),n("li",[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),n("a",{attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Log out")])],1)]):t._e()])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"NavBar",methods:{login:function(){this.$auth.loginWithRedirect(),this.$router.push({path:"/main"})},logout:function(){this.$auth.logout(),this.$router.push({path:"/"})}}},c=l,d=(n("34ba"),n("2877")),u=Object(d["a"])(c,s,o,!1,null,null,null),v=u.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.msg?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),t._m(0)]):t._e()},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],m={name:"Error",computed:{msg:function(){return this.$auth.error}}},f=m,g=Object(d["a"])(f,h,p,!1,null,null,null),b=g.exports,_={components:{NavBar:v,Error:b}},x=_,y=n("6544"),w=n.n(y),k=n("7496"),C=n("f6c4"),E=Object(d["a"])(x,i,r,!1,null,null,null),I=E.exports;w()(E,{VApp:k["a"],VMain:C["a"]});var D=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero"),n("hr")],1)},O=[],S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center hero"},[n("img",{staticClass:"mb-3 app-logo",attrs:{src:"/logo.png",alt:"Vue.js logo",width:"120"}}),n("h1",{staticClass:"mb-4"},[t._v("Days Since")]),n("p",[t._v("Webapp to track days since a particular date. "),n("i",[t._v("Powered by Vue")])]),n("img",{staticClass:"ctr-img",attrs:{src:"/sample.jpg"}})])}],j={name:"Hero"},T=j,R=Object(d["a"])(T,S,$,!1,null,null,null),V=R.exports,N={name:"home",components:{Hero:V}},B=N,L=(n("2326"),Object(d["a"])(B,A,O,!1,null,"1cf25d54",null)),P=L.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("List"),n("hr")],1)},U=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",[n("v-row",[n("v-col",[n("v-card",{staticClass:"mx-auto card-style",attrs:{"max-width":"395"}},[n("v-list-item-content",[n("div",{staticClass:"mb-1 card-overlist"},[t._v("Oldest Elapsed")]),n("v-list-item-title",{staticClass:"headline mb-1 card-right"},[t._v(t._s(t.dbOldest)+t._s(" "+t.interval+"s"))]),n("v-list-item-subtitle",{staticClass:"card-sub"},[t._v(t._s(t.dbOldestName))])],1)],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto card-style",attrs:{"max-width":"395"}},[n("v-list-item-content",[n("div",{staticClass:"mb-1 card-overlist"},[t._v("Average Elapsed")]),n("v-list-item-title",{staticClass:"headline mb-1 card-right"},[t._v(t._s(t.dbAverage)+t._s(" "+t.interval+"s"))]),n("v-list-item-subtitle",{staticClass:"card-sub"},[t._v("Total events: "+t._s(t.dbTotal))])],1)],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto card-style",attrs:{"max-width":"395"}},[n("v-list-item-content",[n("div",{staticClass:"mb-1 card-overlist"},[t._v("Newest Elapsed")]),n("v-list-item-title",{staticClass:"headline mb-1 card-right"},[t._v(t._s(t.dbNewest)+t._s(" "+t.interval+"s"))]),n("v-list-item-subtitle",{staticClass:"card-sub"},[t._v(t._s(t.dbNewestName))])],1)],1)],1)],1)],1),n("div",[n("v-alert",{attrs:{value:!t.$auth.user.email_verified,color:"#FFFF99",icon:"warning"}},[n("span",{staticClass:"alert-unverified"},[n("b",[t._v("Email address")]),t._v(" is "),n("b",[t._v("unverified")]),t._v(", Please check your inbox! ")])]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.myevents,"sort-by":["strEvent","dtmDate"],sortDesc:[!1,!0]},scopedSlots:t._u([{key:"item.intElapsed",fn:function(e){var a=e.item;return[n("v-chip",{attrs:{color:t.getColor(a.intElapsed),dark:""}},[t._v(t._s(a.intElapsed))])]}},{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",{staticClass:"tbl-title"},[t._v("Days Since")]),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",{staticClass:"mb-2 ds-btn",attrs:{color:"#e91e63",dark:"",width:"150"},on:{click:function(e){t.deleteDiag=!0}}},[t._v("Delete All")]),n("v-dialog",{attrs:{"max-width":"290","retain-focus":!1},model:{value:t.deleteDiag,callback:function(e){t.deleteDiag=e},expression:"deleteDiag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete all events")]),n("v-card-text",[t._v("Are you sure you want to delete everything?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.deleteDiag=!1}}},[t._v("No")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteAll()}}},[t._v("Yes!")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290","retain-focus":!1},model:{value:t.deleteDiagSp,callback:function(e){t.deleteDiagSp=e},expression:"deleteDiagSp"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete this event")]),n("v-card-text",[t._v("Are you sure you want to delete this item?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.resetDelete()}}},[t._v("No")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteItem()}}},[t._v("Yes!")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290","retain-focus":!1},model:{value:t.archDiagSp,callback:function(e){t.archDiagSp=e},expression:"archDiagSp"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Archive this event")]),n("v-card-text",[t._v("Are you sure you want to archive this item?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.resetArchive()}}},[t._v("No")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.archiveItem()}}},[t._v("Yes!")])],1)],1)],1),n("v-btn",t._g(t._b({staticClass:"mb-2 ds-btn",attrs:{color:"primary",dark:"",width:"150"}},"v-btn",i,!1),a),[t._v("New Item")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("p")]),n("v-row",[n("v-col",{attrs:{cols:"16",sm:"8",md:"6"}},[n("v-text-field",{attrs:{rules:t.rules,hint:"Andy's Birthday","prepend-inner-icon":"mdi-emoticon",outlined:"",label:"Event Name"},model:{value:t.editedItem.strEvent,callback:function(e){t.$set(t.editedItem,"strEvent",e)},expression:"editedItem.strEvent"}})],1),n("v-col",{attrs:{cols:"14",sm:"8",md:"6"}},[n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Date of Event",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"event",readonly:""},model:{value:t.editedItem.dtmDate,callback:function(e){t.$set(t.editedItem,"dtmDate",e)},expression:"editedItem.dtmDate"}},"v-text-field",i,!1),a))]}}]),model:{value:t.datepicker,callback:function(e){t.datepicker=e},expression:"datepicker"}},[n("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.datepicker=!1}},model:{value:t.editedItem.dtmDate,callback:function(e){t.$set(t.editedItem,"dtmDate",e)},expression:"editedItem.dtmDate"}})],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v("mdi-pencil")]),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.archItemStage(a)}}},[t._v("mdi-archive")]),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItemStage(a)}}},[t._v("mdi-delete")])]}}],null,!0)},[n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:t.loading,color:"white",icon:"info"}},[t._v("Loading data from the cloud ☁️")]),n("v-alert",{attrs:{value:!t.loading,color:"white",icon:"info"}},[t._v("You don't have any days tracked 😔")])],1)],2)],1)])},z=[],q=(n("96cf"),n("1da1")),F=n("9612"),W=n("bc3a"),J=n.n(W),H=n("0bd8"),K=n.n(H),X="/Api/Event",Z="/Api/Events",G="/Api/Archive/Event",Q={data:function(){return{loading:!0,apiEndpoint:"",dbOldest:0,dbOldestName:"Loading...",dbAverage:0,dbTotal:0,dbNewest:0,dbNewestName:"Loading...",deleteDiagSp:!1,deleteDiag:!1,archDiagSp:!1,dialog:!1,interval:"day",datepicker:!1,rules:[function(t){return!!t||"Required"}],headers:[{text:"Event",align:"start",value:"strEvent",width:500},{text:"Date",value:"dtmDate"},{text:"Elapsed",value:"intElapsed",divider:!0},{text:"Actions",value:"actions",sortable:!1,align:"center"}],myevents:[],editedIndex:-1,deleteIndex:-1,deletingItem:{strId:"",strEvent:"",dtmDate:(new Date).toISOString().substr(0,10),intElapsed:0},editedItem:{strId:"",strEvent:"",dtmDate:(new Date).toISOString().substr(0,10),intElapsed:0},defaultItem:{strId:"",strEvent:"My event",dtmDate:(new Date).toISOString().substr(0,10),intElapsed:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()},myevents:{handler:function(){this.updateDashboard()},deep:!0}},created:function(){this.initialize()},methods:{setApiEndpoint:function(){this.apiEndpoint=K.a.dev?K.a.audience_dev:K.a.audience},apiRetrieveEvents:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,J.a.get(this.apiEndpoint+Z,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){n.myevents=t.data.message,n.recalculateElapsed(),n.loading=!1})).catch((function(){n.loading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),apiAddEvent:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return n=t.sent,a={strId:e.strId,strEvent:e.strEvent,dtmDate:e.dtmDate},t.next=6,J.a.put(this.apiEndpoint+X,a,{headers:{Authorization:"Bearer ".concat(n)}});case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),apiArchEvent:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return n=t.sent,a={strId:e.strId,strEvent:e.strEvent,dtmDate:e.dtmDate},t.next=6,J.a.put(this.apiEndpoint+G,a,{headers:{Authorization:"Bearer ".concat(n)}});case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),apiDelEvent:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return n=t.sent,t.next=5,J.a.delete(this.apiEndpoint+X,{headers:{Authorization:"Bearer ".concat(n)},data:{strId:e.strId}});case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),apiDelAll:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,J.a.delete(this.apiEndpoint+Z,{headers:{Authorization:"Bearer ".concat(e)}});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initialize:function(){this.setApiEndpoint(),this.apiRetrieveEvents()},recalculateElapsed:function(){for(var t=0;t<this.myevents.length;t++)this.myevents[t].intElapsed=this.timeElapsed(this.myevents[t].dtmDate)},updateDashboard:function(){this.updateDbMax(),this.updateDbAvg(),this.updateDbMin()},updateDbMax:function(){if(0===this.myevents.length)return this.dbOldest=0,void(this.dbOldestName="There are no events");for(var t=0,e=this.myevents[0].strEvent,n=0;n<this.myevents.length;n++)this.myevents[n].intElapsed>t&&(t=this.myevents[n].intElapsed,e=this.myevents[n].strEvent);this.dbOldest=t,this.dbOldestName=e},updateDbAvg:function(){for(var t=0,e=0;e<this.myevents.length;e++)t+=this.myevents[e].intElapsed;this.dbAverage=0===this.myevents.length?0:parseInt(t/this.myevents.length),this.dbTotal=this.myevents.length},updateDbMin:function(){if(0===this.myevents.length)return this.dbNewest=0,void(this.dbNewestName="There are no events");for(var t=2147483647,e=this.myevents[0].strEvent,n=0;n<this.myevents.length;n++)this.myevents[n].intElapsed<t&&(t=this.myevents[n].intElapsed,e=this.myevents[n].strEvent);this.dbNewest=t,this.dbNewestName=e},timeElapsed:function(t){var e=new Date,n=new Date(t),a=e.getTime()-n.getTime();return"day"===this.interval?parseInt(a/864e5):"week"===this.interval?parseInt(a/6048e5):"month"===this.interval?parseInt(a/2592e6):void 0},editItem:function(t){this.editedIndex=this.myevents.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItemStage:function(t){this.deleteIndex=this.myevents.indexOf(t),this.deletingItem=Object.assign({},this.myevents[this.deleteIndex]),this.deleteDiagSp=!0},archItemStage:function(t){this.editedIndex=this.myevents.indexOf(t),this.editedItem=Object.assign({},this.myevents[this.editedIndex]),this.archDiagSp=!0},resetDelete:function(){this.deleteIndex=-1,this.deletingItem=Object.assign({},this.defaultItem),this.deleteDiagSp=!1},resetArchive:function(){this.editedIndex=-1,this.editedItem=Object.assign({},this.defaultItem),this.archDiagSp=!1},archiveItem:function(){this.apiArchEvent(this.myevents[this.editedIndex]),this.myevents.splice(this.editedIndex,1),this.resetArchive()},deleteItem:function(){this.apiDelEvent(this.deletingItem),this.myevents.splice(this.deleteIndex,1),this.resetDelete()},deleteAll:function(){0!==this.myevents.length&&(this.apiDelAll(),this.clearEvents()),this.deleteDiag=!1},clearEvents:function(){this.myevents=[]},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){""!==this.editedItem.strEvent&&(this.editedItem.intElapsed=this.timeElapsed(this.editedItem.dtmDate),this.editedIndex>-1?Object.assign(this.myevents[this.editedIndex],this.editedItem):(this.editedItem.strId=F["b"].v1(),this.myevents.push(this.editedItem)),this.apiAddEvent(this.editedItem),this.close())},getColor:function(t){return t>30?"red":t>14?"orange":t<0?"blue":"green"}}},tt=Q,et=n("0798"),nt=n("8336"),at=n("b0af"),it=n("99d9"),rt=n("cc20"),st=n("62ad"),ot=n("a523"),lt=n("8fea"),ct=n("2e4b"),dt=n("169a"),ut=n("132d"),vt=n("5d23"),ht=n("e449"),pt=n("0fd9"),mt=n("2fa4"),ft=n("8654"),gt=n("71d9"),bt=n("2a7f"),_t=Object(d["a"])(tt,Y,z,!1,null,null,null),xt=_t.exports;w()(_t,{VAlert:et["a"],VBtn:nt["a"],VCard:at["a"],VCardActions:it["a"],VCardText:it["b"],VCardTitle:it["c"],VChip:rt["a"],VCol:st["a"],VContainer:ot["a"],VDataTable:lt["a"],VDatePicker:ct["a"],VDialog:dt["a"],VIcon:ut["a"],VListItemContent:vt["a"],VListItemSubtitle:vt["b"],VListItemTitle:vt["c"],VMenu:ht["a"],VRow:pt["a"],VSpacer:mt["a"],VTextField:ft["a"],VToolbar:gt["a"],VToolbarTitle:bt["a"]});var yt={name:"list",components:{List:xt}},wt=yt,kt=(n("d65f"),Object(d["a"])(wt,M,U,!1,null,"bbd57e6e",null)),Ct=kt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center profile-header"},[n("div",{staticClass:"col-md-2 mb-3"},[n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"col-md text-center text-md-left"},[n("h2",[t._v(t._s(t.$auth.user.name))]),n("p",{staticClass:"lead text-muted"},[t._v(t._s(t.$auth.user.email))])])]),n("div",{staticClass:"row"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:JSON.stringify(t.$auth.user,null,2),expression:"JSON.stringify($auth.user, null, 2)"}],staticClass:"rounded w-100"},[n("code",{staticClass:"json"})])])])},It=[],Dt=(n("0d00"),{}),At=Object(d["a"])(Dt,Et,It,!1,null,"3ca96a3c",null),Ot=At.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Settings"),n("hr")],1)},$t=[],jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("To be implemented in the future.")])])}],Rt={name:"Settings"},Vt=Rt,Nt=Object(d["a"])(Vt,jt,Tt,!1,null,null,null),Bt=Nt.exports,Lt={name:"settings",components:{Settings:Bt}},Pt=Lt,Mt=(n("7193"),Object(d["a"])(Pt,St,$t,!1,null,"df2d68ae",null)),Ut=Mt.exports,Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Archive"),n("hr")],1)},zt=[],qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",[n("v-alert",{attrs:{value:!t.$auth.user.email_verified,color:"#FFFF99",icon:"warning"}},[n("span",{staticClass:"alert-unverified"},[n("b",[t._v("Email address")]),t._v(" is "),n("b",[t._v("unverified")]),t._v(", Please check your inbox! ")])]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.myevents,"sort-by":["strEvent","dtmDate"],sortDesc:[!1,!0]},scopedSlots:t._u([{key:"item.intElapsed",fn:function(e){var a=e.item;return[n("v-chip",{attrs:{color:t.getColor(a.intElapsed),dark:""}},[t._v(t._s(a.intElapsed))])]}},{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",{staticClass:"tbl-title"},[t._v("Archive")]),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2 ds-btn",attrs:{color:"#e91e63",dark:"",width:"150"},on:{click:function(e){t.delete_diag=!0}}},"v-btn",i,!1),a),[t._v("Delete All")]),n("v-dialog",{attrs:{"max-width":"290","retain-focus":!1},model:{value:t.delete_diag,callback:function(e){t.delete_diag=e},expression:"delete_diag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete all events")]),n("v-card-text",[t._v("Are you sure you want to delete everything?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.close}},[t._v("No")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteAll()}}},[t._v("Yes!")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290","retain-focus":!1},model:{value:t.delete_diag_sp,callback:function(e){t.delete_diag_sp=e},expression:"delete_diag_sp"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete this event")]),n("v-card-text",[t._v("Are you sure you want to delete this item?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.resetDelete()}}},[t._v("No")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteItem()}}},[t._v("Yes!")])],1)],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItemStage(a)}}},[t._v("mdi-delete")])]}}],null,!0)},[n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:t.loading,color:"white",icon:"info"}},[t._v("Loading data from the cloud ☁️")]),n("v-alert",{attrs:{value:!t.loading,color:"white",icon:"info"}},[t._v("You don't have anything archived 😔")])],1)],2)],1)])},Ft=[],Wt="/Api/Archive/Event",Jt="/Api/Archive/Events",Ht={data:function(){return{loading:!0,apiEndpoint:"",delete_diag_sp:!1,delete_diag:!1,dialog:!1,interval:"day",headers:[{text:"Event",align:"start",value:"strEvent",width:500},{text:"Date",value:"dtmDate"},{text:"Elapsed",value:"intElapsed",divider:!0},{text:"Actions",value:"actions",sortable:!1,align:"center"}],myevents:[],deleteIndex:-1,deletingItem:{strId:"",strEvent:"",dtmDate:(new Date).toISOString().substr(0,10),intElapsed:0},defaultItem:{strId:"",strEvent:"My event",dtmDate:(new Date).toISOString().substr(0,10),intElapsed:0}}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{setApiEnd:function(){this.apiEndpoint=K.a.dev?K.a.audience_dev:K.a.audience},apiRetrieveArchive:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,J.a.get(this.apiEndpoint+Jt,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){n.myevents=t.data.message,n.recalculateElapsed(),n.loading=!1})).catch((function(){n.loading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),apiDelEvent:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return n=t.sent,t.next=5,J.a.delete(this.apiEndpoint+Wt,{headers:{Authorization:"Bearer ".concat(n)},data:{strId:e.strId}});case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),apiDelAll:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,J.a.delete(this.apiEndpoint+Jt,{headers:{Authorization:"Bearer ".concat(e)}});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initialize:function(){this.setApiEnd(),this.apiRetrieveArchive()},recalculateElapsed:function(){for(var t=0;t<this.myevents.length;t++)this.myevents[t].intElapsed=this.timeElapsed(this.myevents[t].dtmDate)},close:function(){this.delete_diag=!1,this.dialog=!1},timeElapsed:function(t){var e=new Date,n=new Date(t),a=e.getTime()-n.getTime();return"day"===this.interval?parseInt(a/864e5):"week"===this.interval?parseInt(a/6048e5):"month"===this.interval?parseInt(a/2592e6):void 0},deleteItemStage:function(t){this.deleteIndex=this.myevents.indexOf(t),this.deletingItem=Object.assign({},this.myevents[this.deleteIndex]),this.delete_diag_sp=!0},resetDelete:function(){this.deleteIndex=-1,this.deletingItem=Object.assign({},this.defaultItem),this.delete_diag_sp=!1,this.dialog=!1},deleteItem:function(){this.apiDelEvent(this.deletingItem),this.myevents.splice(this.deleteIndex,1),this.resetDelete()},deleteAll:function(){0!==this.myevents.length&&(this.apiDelAll(),this.clearEvents()),this.delete_diag=!1,this.dialog=!1},clearEvents:function(){this.myevents=[]},getColor:function(t){return t>30?"red":t>14?"orange":"green"}}},Kt=Ht,Xt=Object(d["a"])(Kt,qt,Ft,!1,null,null,null),Zt=Xt.exports;w()(Xt,{VAlert:et["a"],VBtn:nt["a"],VCard:at["a"],VCardActions:it["a"],VCardText:it["b"],VCardTitle:it["c"],VChip:rt["a"],VDataTable:lt["a"],VDialog:dt["a"],VIcon:ut["a"],VSpacer:mt["a"],VToolbar:gt["a"],VToolbarTitle:bt["a"]});var Gt,Qt={name:"archive",components:{Archive:Zt}},te=Qt,ee=(n("cf9a"),Object(d["a"])(te,Yt,zt,!1,null,"b6c39aa6",null)),ne=ee.exports,ae=(n("386d"),n("6762"),n("2fdb"),n("15fd")),ie=n("9767"),re=function(){return window.history.replaceState({},document.title,window.location.pathname)},se=function(){return Gt},oe=function(t){var e=t.onRedirectCallback,n=void 0===e?re:e,i=t.redirectUri,r=void 0===i?window.location.origin:i,s=Object(ae["a"])(t,["onRedirectCallback","redirectUri"]);return Gt||(Gt=new a["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e);case 4:return t.next=6,this.auth0Client.getUser();case 6:return this.user=t.sent,t.next=9,this.auth0Client.isAuthenticated();case 9:this.isAuthenticated=t.sent,this.error=null,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.error(t.t0),this.error=t.t0;case 17:return t.prev=17,this.popupOpen=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[1,13,17,20]])})));function e(e){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:this.user=t.sent,this.isAuthenticated=!0,this.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0;case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(ie["a"])({domain:s.domain,client_id:s.clientId,audience:s.audience,redirect_uri:r});case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:e=t.sent,a=e.appState,this.error=null,n(a);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),this.error=t.t0;case 16:return t.prev=16,t.next=19,this.auth0Client.isAuthenticated();case 19:return this.isAuthenticated=t.sent,t.next=22,this.auth0Client.getUser();case 22:return this.user=t.sent,this.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,this,[[3,13,16,25]])})));function e(){return t.apply(this,arguments)}return e}()}),Gt)},le={install:function(t,e){t.prototype.$auth=oe(e)}},ce=function(t,e,n){var a=se(),i=function(){if(a.isAuthenticated)return n();a.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!a.loading)return i();a.$watch("loading",(function(t){if(!1===t)return i()}))};n("6672"),a["a"].use(D["a"]);var de=new D["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/main",name:"list",component:Ct,beforeEnter:ce},{path:"/profile",name:"profile",component:Ot,beforeEnter:ce},{path:"/settings",name:"settings",component:Ut,beforeEnter:ce},{path:"/archive",name:"archive",component:ne,beforeEnter:ce}]}),ue=de,ve=(n("ac6a"),n("a70e")),he=n.n(ve),pe=n("5ad2"),me=n.n(pe);n("6e2e");he.a.registerLanguage("json",me.a);var fe={deep:!0,bind:function(t,e){var n=t.querySelectorAll("code");n.forEach((function(t){e.value&&(t.textContent=e.value),he.a.highlightBlock(t)}))},componentUpdated:function(t,e){var n=t.querySelectorAll("code");n.forEach((function(t){e.value&&(t.textContent=e.value,he.a.highlightBlock(t))}))}},ge=n("ecee"),be=n("c074"),_e=n("ad3d"),xe=n("8160"),ye=n("f309");a["a"].use(ye["a"]);var we=new ye["a"]({});n("d1e7");a["a"].config.productionTip=!1,a["a"].use(le,{domain:xe["b"],clientId:xe["a"],responseType:K.a.responseType,audience:K.a.audience,scope:K.a.scope,onRedirectCallback:function(t){ue.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}},F["a"]),a["a"].directive("highlightjs",fe),ge["c"].add(be["a"],be["c"],be["b"]),a["a"].component("font-awesome-icon",_e["a"]),new a["a"]({router:ue,vuetify:we,render:function(t){return t(I)}}).$mount("#app")},6672:function(t,e,n){},"6b25":function(t,e,n){},"6f70":function(t,e,n){},7193:function(t,e,n){"use strict";var a=n("f9f3"),i=n.n(a);i.a},8160:function(t){t.exports=JSON.parse('{"b":"andyworkdev.us.auth0.com","a":"94juhKCvbJq1SgnhnoANXZ8pEytHYE9o"}')},cc4d:function(t,e,n){},cf9a:function(t,e,n){"use strict";var a=n("6b25"),i=n.n(a);i.a},d65f:function(t,e,n){"use strict";var a=n("3c6b"),i=n.n(a);i.a},f9f3:function(t,e,n){}});
//# sourceMappingURL=app.2fd98714.js.map