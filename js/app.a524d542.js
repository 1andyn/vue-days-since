(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bd8":function(t,e){t.exports={clientId:"94juhKCvbJq1SgnhnoANXZ8pEytHYE9o",domain:"andyworkdev.us.auth0.com",responseType:"token id_token",audience:"https://vds-db.andywork.dev",audience_dev:"http://localhost:5000",redirectUri:"http://localhost:3000",scope:"read:events add:events delete:events",dev:!1}},"0d00":function(t,e,n){"use strict";var a=n("cc4d"),i=n.n(a);i.a},1182:function(t,e,n){},2326:function(t,e,n){"use strict";var a=n("6f70"),i=n.n(a);i.a},"34ba":function(t,e,n){"use strict";var a=n("1182"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[n("nav-bar"),n("div",{staticClass:"container flex-grow-1"},[n("error"),n("div",{staticClass:"mt-5"},[n("router-view")],1)],1),n("footer",{staticClass:"bg-light text-center p-3"},[n("table",{staticClass:"tb-centered"},[n("tr",[n("td",[n("div",{staticClass:"logo"})]),n("td",[n("span",{staticStyle:{"text-align":"center"}},[t._v("Login with "),n("a",{attrs:{href:"https://auth0.com"}},[t._v("Auth0")])])])])])])],1)])],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container mb-3"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[t.$auth.isAuthenticated?t._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/main"}},[t._v("Main")])],1):t._e(),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings"}},[t._v("Settings")])],1):t._e(),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/archive"}},[t._v("Archive")])],1):t._e()]),n("ul",{staticClass:"navbar-nav d-none d-md-block"},[t.$auth.isAuthenticated||t.$auth.loading?t._e():n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-primary btn-margin",attrs:{id:"qsLoginBtn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login / Register")])]),t.$auth.isAuthenticated?n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"profileDropDown","data-toggle":"dropdown"}},[n("img",{staticClass:"nav-user-profile rounded-circle",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}})]),n("div",{staticClass:"dropdown-menu dropdown-menu-right"},[n("div",{staticClass:"dropdown-header"},[t._v(t._s(t.$auth.user.name))]),n("router-link",{staticClass:"dropdown-item dropdown-profile",attrs:{to:"/profile"}},[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),t._v("Profile ")],1),n("a",{staticClass:"dropdown-item",attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),t._v("Log out ")],1)],1)]):t._e()]),t.$auth.isAuthenticated||t.$auth.loading?t._e():n("ul",{staticClass:"navbar-nav d-md-none"},[n("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"qsLoginBtn"},on:{click:t.login}},[t._v("Log in")])]),t.$auth.isAuthenticated?n("ul",{staticClass:"navbar-nav d-md-none d-flex",attrs:{id:"mobileAuthNavBar"}},[n("li",{staticClass:"nav-item"},[n("span",{staticClass:"user-info"},[n("img",{staticClass:"nav-user-profile d-inline-block rounded-circle mr-3",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}}),n("h6",{staticClass:"d-inline-block"},[t._v(t._s(t.$auth.user.name))])])]),n("li",[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),n("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),n("li",[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),n("a",{attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Log out")])],1)]):t._e()])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"NavBar",methods:{login:function(){this.$auth.loginWithRedirect(),this.$router.push({path:"/main"})},logout:function(){this.$auth.logout(),this.$router.push({path:"/"})}}},c=l,d=(n("34ba"),n("2877")),u=Object(d["a"])(c,s,o,!1,null,null,null),v=u.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.msg?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),t._m(0)]):t._e()},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],m={name:"Error",computed:{msg:function(){return this.$auth.error}}},f=m,_=Object(d["a"])(f,h,p,!1,null,null,null),g=_.exports,b={components:{NavBar:v,Error:g}},w=b,C=n("6544"),x=n.n(C),y=n("7496"),k=n("f6c4"),E=Object(d["a"])(w,i,r,!1,null,null,null),I=E.exports;x()(E,{VApp:y["a"],VMain:k["a"]});var $=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero"),n("hr")],1)},j=[],A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center hero"},[n("img",{staticClass:"mb-3 app-logo",attrs:{src:"/logo.png",alt:"Vue.js logo",width:"120"}}),n("h1",{staticClass:"mb-4"},[t._v("Days Since")]),n("p",[t._v("Webapp to track days since a particular date. "),n("i",[t._v("Powered by Vue")])]),n("img",{staticClass:"ctr-img",attrs:{src:"/sample.jpg"}})])}],D={name:"Hero"},T=D,R=Object(d["a"])(T,A,S,!1,null,null,null),V=R.exports,N={name:"home",components:{Hero:V}},P=N,L=(n("2326"),Object(d["a"])(P,O,j,!1,null,"1cf25d54",null)),B=L.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("List"),n("hr")],1)},M=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",[n("v-row",[n("v-col",[n("v-card",{staticClass:"mx-auto card-style",attrs:{"max-width":"395"}},[n("v-list-item-content",[n("div",{staticClass:"mb-1 card-overlist"},[t._v("Oldest Elapsed")]),n("v-list-item-title",{staticClass:"headline mb-1 card-right"},[t._v(t._s(t.db_oldest))]),n("v-list-item-subtitle",{staticClass:"card-sub"},[t._v(t._s(t.db_oldest_name))])],1)],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto card-style",attrs:{"max-width":"395"}},[n("v-list-item-content",[n("div",{staticClass:"mb-1 card-overlist"},[t._v("Average Elapsed")]),n("v-list-item-title",{staticClass:"headline mb-1 card-right"},[t._v(t._s(t.db_average))]),n("v-list-item-subtitle",{staticClass:"card-sub"},[t._v(t._s(t.db_average_name))])],1)],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto card-style",attrs:{"max-width":"395"}},[n("v-list-item-content",[n("div",{staticClass:"mb-1 card-overlist"},[t._v("Newest Elapsed")]),n("v-list-item-title",{staticClass:"headline mb-1 card-right"},[t._v(t._s(t.db_newest))]),n("v-list-item-subtitle",{staticClass:"card-sub"},[t._v(t._s(t.db_newest_name))])],1)],1)],1)],1)],1),n("div",[n("v-alert",{attrs:{value:!t.$auth.user.email_verified,color:"#FFFF99",icon:"warning"}},[n("span",{staticClass:"alert-unverified"},[n("b",[t._v("Email address")]),t._v(" is "),n("b",[t._v("unverified")]),t._v(", Please check your inbox! ")])]),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.myevents,"sort-by":["strEvent","dtmDate"],sortDesc:[!1,!0]},scopedSlots:t._u([{key:"item.intElapsed",fn:function(e){var a=e.item;return[n("v-chip",{attrs:{color:t.getColor(a.intElapsed),dark:""}},[t._v(t._s(a.intElapsed))])]}},{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",{staticClass:"tbl-title"},[t._v("Days Since")]),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",{staticClass:"mb-2 ds-btn",attrs:{color:"#e91e63",dark:"",width:"150"},on:{click:function(e){t.delete_diag=!0}}},[t._v("Delete All")]),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.delete_diag,callback:function(e){t.delete_diag=e},expression:"delete_diag"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete all events")]),n("v-card-text",[t._v("Are you sure you want to delete everything?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.delete_diag=!1}}},[t._v("No")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteAll()}}},[t._v("Yes!")])],1)],1)],1),n("v-btn",t._g(t._b({staticClass:"mb-2 ds-btn",attrs:{color:"primary",dark:"",width:"150"}},"v-btn",i,!1),a),[t._v("New Item")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("p")]),n("v-row",[n("v-col",{attrs:{cols:"16",sm:"8",md:"6"}},[n("v-text-field",{attrs:{rules:t.rules,hint:"Andy's Birthday","prepend-inner-icon":"mdi-emoticon",outlined:"",label:"Event Name"},model:{value:t.editedItem.strEvent,callback:function(e){t.$set(t.editedItem,"strEvent",e)},expression:"editedItem.strEvent"}})],1),n("v-col",{attrs:{cols:"14",sm:"8",md:"6"}},[n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Date of Event",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"event",readonly:""},model:{value:t.editedItem.dtmDate,callback:function(e){t.$set(t.editedItem,"dtmDate",e)},expression:"editedItem.dtmDate"}},"v-text-field",i,!1),a))]}}]),model:{value:t.datepicker,callback:function(e){t.datepicker=e},expression:"datepicker"}},[n("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.datepicker=!1}},model:{value:t.editedItem.dtmDate,callback:function(e){t.$set(t.editedItem,"dtmDate",e)},expression:"editedItem.dtmDate"}})],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v("mdi-pencil")]),n("v-icon",{attrs:{small:""},on:{click:function(e){t.delete_diag_sp=!0}}},[t._v("mdi-delete")]),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.delete_diag_sp,callback:function(e){t.delete_diag_sp=e},expression:"delete_diag_sp"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Delete this event")]),n("v-card-text",[t._v("Are you sure you want to delete this item?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.delete_diag_sp=!1}}},[t._v("No")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v("Yes!")])],1)],1)],1)]}}],null,!0)},[n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:t.loading,color:"white",icon:"info"}},[t._v("Loading data from the cloud ☁️")]),n("v-alert",{attrs:{value:!t.loading,color:"white",icon:"info"}},[t._v("You don't have any days tracked 😔")])],1)],2)],1)])},W=[],Y=(n("96cf"),n("1da1")),J=(n("55dd"),n("9612")),z=n("bc3a"),F=n.n(z),H=n("0bd8"),K=n.n(H),X={data:function(){return{loading:!0,api_endpt:"",db_oldest:0,db_oldest_name:"",db_average:0,db_average_name:"",db_newest:0,db_newest_name:"",delete_diag_sp:!1,delete_diag:!1,dialog:!1,interval:"day",datepicker:!1,rules:[function(t){return!!t||"Required"}],headers:[{text:"Event",align:"start",value:"strEvent",width:500},{text:"Date",value:"dtmDate"},{text:"Elapsed",value:"intElapsed",divider:!0},{text:"Actions",value:"actions",sortable:!1,align:"center"}],myevents:[],editedIndex:-1,editedItem:{strId:"",strEvent:"",dtmDate:(new Date).toISOString().substr(0,10),intElapsed:0},defaultItem:{strId:"",strEvent:"My event",dtmDate:(new Date).toISOString().substr(0,10),intElapsed:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()},myevents:{handler:function(){this.update_dashboard()}},deep:!0},created:function(){this.initialize()},methods:{set_api_end:function(){this.api_endpt=K.a.dev?K.a.audience_dev:K.a.audience},sort_events:function(){var t=this.myevents;t.sort((function(t,e){return t.intElapsed-e.intElapsed})),this.myevents=t},api_retrieve_events:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,F.a.get(this.api_endpt+"/retrieve",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){n.myevents=t.data.message,n.recalculateElapsed(),n.loading=!1})).catch((function(){n.loading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),api_add_event:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return n=t.sent,a={strId:e.strId,strEvent:e.strEvent,dtmDate:e.dtmDate},t.next=6,F.a.put(this.api_endpt+"/add",a,{headers:{Authorization:"Bearer ".concat(n)}});case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),api_del_event:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return n=t.sent,t.next=5,F.a.delete(this.api_endpt+"/delsp",{headers:{Authorization:"Bearer ".concat(n)},data:{strId:e.strId}});case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),api_del_all:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.next=5,F.a.delete(this.api_endpt+"/delete/all",{headers:{Authorization:"Bearer ".concat(e)}});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initialize:function(){this.set_api_end(),this.api_retrieve_events(),this.sort_events()},recalculateElapsed:function(){for(var t=0;t<this.myevents.length;t++)this.myevents[t].intElapsed=this.timeElapsed(this.myevents[t].dtmDate)},update_dashboard:function(){this.update_db_max(),this.update_db_avg(),this.update_db_min()},update_db_max:function(){this.db_oldest=this.myevents[this.myevents.length-1].intElapsed,this.db_oldest_name=this.myevents[this.myevents.length-1].strEvent},update_db_avg:function(){for(var t=0,e=0;e<this.myevents.length;e++)t+=this.myevents[e].intElapsed;this.db_average=parseInt(t/this.myevents.length);var n=this.db_binary_search(this.db_average);this.db_average_name=""===n?"No events at average":n},update_db_min:function(){this.db_newest=this.myevents[0].intElapsed,this.db_newest_name=this.myevents[0].strEvent},db_binary_search:function(t){var e=this.myevents,n=0,a=e.length-1;while(n<a){var i=n+(a-n)/2;if(e[i]===t)return e[i].strEvent;e[i]>t?a=i-1:n=i+1}return""},timeElapsed:function(t){var e=new Date,n=new Date(t),a=e.getTime()-n.getTime();return"day"===this.interval?parseInt(a/864e5):"week"===this.interval?parseInt(a/6048e5):"month"===this.interval?parseInt(a/2592e6):void 0},editItem:function(t){this.editedIndex=this.myevents.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.api_del_event(t);var e=this.myevents.indexOf(t);this.myevents.splice(e,1),this.delete_diag_sp=!1,this.sort_events()},deleteAll:function(){this.api_del_all(),this.clearEvents(),this.delete_diag=!1},clearEvents:function(){this.myevents=[]},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){""!==this.editedItem.strEvent&&(this.editedItem.intElapsed=this.timeElapsed(this.editedItem.dtmDate),this.editedIndex>-1?Object.assign(this.myevents[this.editedIndex],this.editedItem):(this.editedItem.strId=J["b"].v1(),this.myevents.push(this.editedItem)),this.api_add_event(this.editedItem),this.sort_events(),this.close())},getColor:function(t){return t>30?"red":t>14?"orange":"green"}}},Z=X,G=n("0798"),Q=n("8336"),tt=n("b0af"),et=n("99d9"),nt=n("cc20"),at=n("62ad"),it=n("a523"),rt=n("8fea"),st=n("2e4b"),ot=n("169a"),lt=n("132d"),ct=n("5d23"),dt=n("e449"),ut=n("0fd9"),vt=n("2fa4"),ht=n("8654"),pt=n("71d9"),mt=n("2a7f"),ft=Object(d["a"])(Z,q,W,!1,null,null,null),_t=ft.exports;x()(ft,{VAlert:G["a"],VBtn:Q["a"],VCard:tt["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VChip:nt["a"],VCol:at["a"],VContainer:it["a"],VDataTable:rt["a"],VDatePicker:st["a"],VDialog:ot["a"],VIcon:lt["a"],VListItemContent:ct["a"],VListItemSubtitle:ct["b"],VListItemTitle:ct["c"],VMenu:dt["a"],VRow:ut["a"],VSpacer:vt["a"],VTextField:ht["a"],VToolbar:pt["a"],VToolbarTitle:mt["a"]});var gt,bt={name:"list",components:{List:_t}},wt=bt,Ct=(n("593d"),Object(d["a"])(wt,U,M,!1,null,"418a4fd6",null)),xt=Ct.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center profile-header"},[n("div",{staticClass:"col-md-2 mb-3"},[n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"col-md text-center text-md-left"},[n("h2",[t._v(t._s(t.$auth.user.name))]),n("p",{staticClass:"lead text-muted"},[t._v(t._s(t.$auth.user.email))])])]),n("div",{staticClass:"row"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:JSON.stringify(t.$auth.user,null,2),expression:"JSON.stringify($auth.user, null, 2)"}],staticClass:"rounded w-100"},[n("code",{staticClass:"json"})])])])},kt=[],Et=(n("0d00"),{}),It=Object(d["a"])(Et,yt,kt,!1,null,"3ca96a3c",null),$t=It.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Settings"),n("hr")],1)},jt=[],At=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("To be implemented in the future.")])])}],Dt={name:"Settings"},Tt=Dt,Rt=Object(d["a"])(Tt,At,St,!1,null,null,null),Vt=Rt.exports,Nt={name:"settings",components:{Settings:Vt}},Pt=Nt,Lt=(n("7193"),Object(d["a"])(Pt,Ot,jt,!1,null,"df2d68ae",null)),Bt=Lt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Archive"),n("hr")],1)},Mt=[],qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("To be implemented in the future.")])])}],Yt={name:"Archive"},Jt=Yt,zt=Object(d["a"])(Jt,qt,Wt,!1,null,null,null),Ft=zt.exports,Ht={name:"archive",components:{Archive:Ft}},Kt=Ht,Xt=(n("cf9a"),Object(d["a"])(Kt,Ut,Mt,!1,null,"b6c39aa6",null)),Zt=Xt.exports,Gt=(n("386d"),n("6762"),n("2fdb"),n("15fd")),Qt=n("9767"),te=function(){return window.history.replaceState({},document.title,window.location.pathname)},ee=function(){return gt},ne=function(t){var e=t.onRedirectCallback,n=void 0===e?te:e,i=t.redirectUri,r=void 0===i?window.location.origin:i,s=Object(Gt["a"])(t,["onRedirectCallback","redirectUri"]);return gt||(gt=new a["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e);case 4:return t.next=6,this.auth0Client.getUser();case 6:return this.user=t.sent,t.next=9,this.auth0Client.isAuthenticated();case 9:this.isAuthenticated=t.sent,this.error=null,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.error(t.t0),this.error=t.t0;case 17:return t.prev=17,this.popupOpen=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[1,13,17,20]])})));function e(e){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:this.user=t.sent,this.isAuthenticated=!0,this.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0;case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(Qt["a"])({domain:s.domain,client_id:s.clientId,audience:s.audience,redirect_uri:r});case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:e=t.sent,a=e.appState,this.error=null,n(a);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),this.error=t.t0;case 16:return t.prev=16,t.next=19,this.auth0Client.isAuthenticated();case 19:return this.isAuthenticated=t.sent,t.next=22,this.auth0Client.getUser();case 22:return this.user=t.sent,this.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,this,[[3,13,16,25]])})));function e(){return t.apply(this,arguments)}return e}()}),gt)},ae={install:function(t,e){t.prototype.$auth=ne(e)}},ie=function(t,e,n){var a=ee(),i=function(){if(a.isAuthenticated)return n();a.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!a.loading)return i();a.$watch("loading",(function(t){if(!1===t)return i()}))};n("6672"),a["a"].use($["a"]);var re=new $["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:B},{path:"/main",name:"list",component:xt,beforeEnter:ie},{path:"/profile",name:"profile",component:$t,beforeEnter:ie},{path:"/settings",name:"settings",component:Bt,beforeEnter:ie},{path:"/archive",name:"archive",component:Zt,beforeEnter:ie}]}),se=re,oe=(n("ac6a"),n("a70e")),le=n.n(oe),ce=n("5ad2"),de=n.n(ce);n("6e2e");le.a.registerLanguage("json",de.a);var ue={deep:!0,bind:function(t,e){var n=t.querySelectorAll("code");n.forEach((function(t){e.value&&(t.textContent=e.value),le.a.highlightBlock(t)}))},componentUpdated:function(t,e){var n=t.querySelectorAll("code");n.forEach((function(t){e.value&&(t.textContent=e.value,le.a.highlightBlock(t))}))}},ve=n("ecee"),he=n("c074"),pe=n("ad3d"),me=n("8160"),fe=n("f309");a["a"].use(fe["a"]);var _e=new fe["a"]({});n("d1e7");a["a"].config.productionTip=!1,a["a"].use(ae,{domain:me["b"],clientId:me["a"],responseType:K.a.responseType,audience:K.a.audience,scope:K.a.scope,onRedirectCallback:function(t){se.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}},J["a"]),a["a"].directive("highlightjs",ue),ve["c"].add(he["a"],he["c"],he["b"]),a["a"].component("font-awesome-icon",pe["a"]),new a["a"]({router:se,vuetify:_e,render:function(t){return t(I)}}).$mount("#app")},"575f":function(t,e,n){},"593d":function(t,e,n){"use strict";var a=n("575f"),i=n.n(a);i.a},6672:function(t,e,n){},"6b25":function(t,e,n){},"6f70":function(t,e,n){},7193:function(t,e,n){"use strict";var a=n("f9f3"),i=n.n(a);i.a},8160:function(t){t.exports=JSON.parse('{"b":"andyworkdev.us.auth0.com","a":"94juhKCvbJq1SgnhnoANXZ8pEytHYE9o"}')},cc4d:function(t,e,n){},cf9a:function(t,e,n){"use strict";var a=n("6b25"),i=n.n(a);i.a},f9f3:function(t,e,n){}});
//# sourceMappingURL=app.a524d542.js.map