(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],m=0,p=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dentist/saad/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0a9d":function(t,e,i){},"3ce0":function(t,e,i){t.exports={lang:"ar"}},"760c":function(t,e,i){"use strict";i("c3f5")},8205:function(t,e,i){t.exports=i.p+"img/tooth.ca7e49ec.png"},"8e61":function(t,e,i){"use strict";i("e2f5")},"93b0":function(t,e,i){"use strict";i("ddff")},c3f5:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("e623"),i("e379"),i("5dc8"),i("37e1");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-expand-x-transition",[i("Header",{attrs:{isMobile:t.isOnMobile,lang:t.curLang},on:{action:t.handleAction}})],1),i("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{"overflow-x":"hidden"},attrs:{id:"pageBody","max-height":"100vh"}},[i("v-main",[i("v-container",{attrs:{fluid:""}},[i("v-fab-transition",[i("router-view",{attrs:{isMobile:t.isOnMobile,lang:t.curLang}})],1)],1)],1),i("Footer",{attrs:{isMobile:t.isOnMobile,lang:t.curLang},on:{action:t.handleAction}}),i("Toolbox",{on:{langUpdate:t.langUpdated}})],1)],1)},o=[],s=i("53ca"),r=i("d4ec"),c=i("bee2"),l=i("262e"),u=i("2caf"),m=i("9ab4"),p=i("1b40"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-system-bar",{attrs:{app:"",color:"primary","lights-out":"",dark:""}},[n("v-spacer"),n("v-icon",[t._v("mdi-email")]),t._v("   "+t._s(t.$i18n.t("actNachricht"))+" "),n("v-spacer"),t.isMobile?n("div",{on:{click:function(e){return t.$emit("action","/")}}},[n("v-icon",[t._v(" mdi-home")])],1):n("div",{staticClass:"d-none d-sm-flex"},[n("v-icon",[t._v("mdi-clock-time-eight")]),t._v("   Mo.Di.Do (9 - 13) + (15 - 18) | Mi. (9 - 14:30) | Fr. (8 - 13) ")],1),n("v-spacer"),n("a",{attrs:{href:"tel:06131229816"}},[n("v-icon",[t._v("mdi-phone-classic")])],1),t._v("   06131-229816 "),n("v-spacer")],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"","scroll-target":"#pageBody","scroll-threshold":"500"},scopedSlots:t._u([{key:"img",fn:function(e){var i=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",i,!1))]}},t.isMobile?null:{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""}},t._l(t.menus,(function(e,i){return n("v-menu",{key:i,ref:e.title,refInFor:!0,attrs:{"close-on-content-click":!1,"open-on-hover":"",bottom:"",origin:"center center","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,o=i.attrs;return[n("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{text:"",small:"",width:"100px"},on:{mouseover:function(i){return t.menuOpened(e.title)},click:function(i){return t.$emit("action",e)}}},"v-btn",o,!1),a),[t._v(" "+t._s(t.$i18n.t(e.title))+" ")])]}}],null,!0)},[e.subMenu?n("v-list",{attrs:{dense:""}},[t._l(e.subMenu,(function(e){return[n("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(i){return t.$emit("action",e)}}},[n("v-list-item-icon",{style:"ar"==t.lang?"margin-left:0px !important;":"margin-right:0px !important;"},[n("v-icon",{attrs:{small:"",color:e.action.enabled?"primary":"grey"}},[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(t.$i18n.t(e.title)))]),n("v-list-item-action-text",[t._v(t._s(e.key))])],1)]}))],2):t._e()],1)})),1)]},proxy:!0}],null,!0)},[t.isMobile&&t.showMobileMenu?n("v-app-bar-nav-icon",{staticStyle:{"transition-duration":"1000ms"},attrs:{transition:"fade-transition"},on:{click:function(e){e.stopPropagation(),t.showMobileMenu=!1}}},[n("v-icon",[t._v(" mdi-close ")])],1):t._e(),t.isMobile&&!t.showMobileMenu?n("v-app-bar-nav-icon",{staticStyle:{"transition-duration":"1000ms"},attrs:{transition:"fade-transition"},on:{click:function(e){e.stopPropagation(),t.showMobileMenu=!0}}},[n("v-icon",[t._v("mdi-menu")])],1):t._e(),t.isMobile?t._e():n("v-app-bar-nav-icon",{on:{click:function(e){return t.$emit("action","/")}}},[n("v-icon",[t._v(" mdi-home")])],1),n("v-img",{class:["shrink","mr-2","d-none","d-sm-flex","ar"==t.lang?"toothIcon_left":"toothIcon_right"],attrs:{alt:"Zahn Bild",contain:"",src:i("8205"),transition:"scale-transition"}}),n("v-app-bar-title",{class:t.isMobile?"bar-title-mobile":"",staticStyle:{"transition-duration":"700ms !important"}},[t._v(t._s(t.$i18n.t("appTitle")))]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1)],1),n("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.showMobileMenu,callback:function(e){t.showMobileMenu=e},expression:"showMobileMenu"}},[n("v-list",{attrs:{nav:"",dense:""}},t._l(t.menus,(function(e,i){return n("v-list-group",{key:i,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$i18n.t(e.title))},on:{click:function(i){return t.$emit("action",e)}}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"menu.active"}},t._l(e.subMenu,(function(e){return n("v-list-item",{key:e.title,on:{click:function(i){return t.$emit("action",e)}}},[n("v-list-item-icon",[e.icon?n("v-icon",[t._v(" "+t._s(e.icon)+" ")]):t._e()],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$i18n.t(e.title))}})],1)],1)})),1)})),1)],1)],1)},v=[],h=(i("4de4"),i("b0c0"),i("159b"),function(){function t(){Object(r["a"])(this,t),this.props=[],this.PROP_STEPS_COLOR="stepsColor",this.PROP_SHOW_KFW_ARROW="showKfwArrow",this.PROP_DARK="dark",this.PROP_KFW_LOGO="kfwLogo",this.PROP_PAGE_UP_COLOR="pageUpColor",this.ICON_ARROW_DOWN="iconArrowDown",this.ICON_ARROW_UP="iconArrowUp",this.ICON_CALENDAR="iconCalendar",this.ICON_CANCEL="iconCancel",this.ICON_DELETE="iconDelete",this.ICON_DOUBLE_ARROW_LEFT="iconDoubleArrowLeft",this.ICON_DOUBLE_ARROW_RIGHT="iconDoubleArrowRight",this.ICON_EXIT="iconExit",this.ICON_HELP="iconHelp",this.ICON_INFO="iconInfo",this.ICON_MAIL="iconMail",this.ICON_OK="iconOk",this.ICON_PRINTER="iconPrinter",this.ICON_PAUSE="iconPause",this.ICON_PLUS="iconPlus",this.ICON_UNDO="iconUndo",this.ICON_WARNING="iconWarning",this.themes=[{name:"default",dark:!1,lang:"de",props:[{name:"--app-lang",value:"de"},{name:"--app-bar-title-size",value:"24px"},{name:"--app-bar-title-compressed-size",value:"24px"},{name:"--app-bar-title-left",value:"52px"},{name:"--footer-link-size",value:"12px"},{name:"--footer-title-size",value:"14px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"mobile",dark:!1,lang:"de",props:[{name:"--app-lang",value:"de"},{name:"--app-bar-title-size",value:"18px"},{name:"--app-bar-title-compressed-size",value:"16px"},{name:"--app-bar-title-left",value:"10px"},{name:"--footer-link-size",value:"10px"},{name:"--footer-title-size",value:"12px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"default",dark:!1,lang:"ar",props:[{name:"--app-lang",value:"ar"},{name:"--app-bar-title-size",value:"24px"},{name:"--app-bar-title-compressed-size",value:"24px"},{name:"--app-bar-title-left",value:"52px"},{name:"--footer-link-size",value:"12px"},{name:"--footer-title-size",value:"14px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"mobile",dark:!1,lang:"ar",props:[{name:"--app-lang",value:"ar"},{name:"--app-bar-title-size",value:"18px"},{name:"--app-bar-title-compressed-size",value:"16px"},{name:"--app-bar-title-left",value:"10px"},{name:"--footer-link-size",value:"10px"},{name:"--footer-title-size",value:"12px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"default",dark:!1,lang:"en",props:[{name:"--app-lang",value:"ar"},{name:"--app-bar-title-size",value:"24px"},{name:"--app-bar-title-compressed-size",value:"24px"},{name:"--app-bar-title-left",value:"52px"},{name:"--footer-link-size",value:"12px"},{name:"--footer-title-size",value:"14px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"mobile",dark:!1,lang:"en",props:[{name:"--app-lang",value:"en"},{name:"--app-bar-title-size",value:"18px"},{name:"--app-bar-title-compressed-size",value:"16px"},{name:"--app-bar-title-left",value:"10px"},{name:"--footer-link-size",value:"10px"},{name:"--footer-title-size",value:"12px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]}]}return Object(c["a"])(t,[{key:"activateTheme",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"de",n=arguments.length>3?arguments[3]:void 0,a=document.documentElement;console.log("Setting lang to : "+i);var o=this.themes.filter((function(t){return t.name===(e?"mobile":"default")&&t.lang===i}))[0];this.props=[],this.currentTheme=o,null!==a&&o.props.forEach((function(e){a.style.setProperty(e.name,""+e.value),t.props[e.name]=e.value})),this.props[this.PROP_DARK]=o.dark,n.$vuetify.rtl="ar"===i,n.$i18n.locale=i}},{key:"getProperty",value:function(t){return this.currentTheme.props.filter((function(e){return e["name"]===t}))[0].value}},{key:"getTheme",value:function(){return this.currentTheme}},{key:"isThemeDefault",value:function(){return"default"===this.currentTheme.name}},{key:"getIcon",value:function(t){var e=this.getCustomIcon(t);return void 0===e&&(e=this.props[t],void 0===e)?t:e}},{key:"getCustomIcon",value:function(t){}}]),t}()),f=new h,g=f,b=i("3ce0"),_=i.n(b),O=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.lang="de",t.showMobileMenu=!1,t.menus=[{id:"Praxis",title:"mnuPraxis",subMenu:[{action:"docs",title:"mnuAertzte",icon:"mdi-medical-bag"},{action:"",title:"mnuTeam",icon:"mdi-account-multiple"},{action:"tour",title:"mnuTour",icon:"mdi-magnify-plus-outline"}]},{id:"Leistungen",title:"mnuLeistungen",action:"services",subMenu:[{action:"",title:"srv_implantologie",icon:"mdi-account-wrench"},{action:"",title:"srv_chirurgische",icon:"mdi-account-wrench"},{action:"",title:"srv_funkDiag",icon:"mdi-account-wrench"},{action:"",title:"Allgemeine Diagnostik",icon:"mdi-account-wrench"},{action:"",title:"Kosmetische Leistungen",icon:"mdi-account-wrench"},{action:"",title:"Vorsorge",icon:"mdi-account-wrench"},{action:"",title:"Cerec",icon:"mdi-account-wrench"},{action:"",title:"Hahnerhaltung",icon:"mdi-account-wrench"},{action:"",title:"Patenschaft",icon:"mdi-account-wrench"}]},{id:"Kontakt",title:"mnuKontakt",subMenu:[{action:"",title:"mnuStandort",icon:"mdi-map-marker"},{action:"",title:"mnuOffnungsZeiten",icon:"mdi-clock-time-five-outline"}]},{id:"Notdienst",title:"mnuNotdienst"}],t}return Object(c["a"])(i,[{key:"mounted",value:function(){console.log("Vars read : "+_.a.lang)}},{key:"menuOpened",value:function(t){this.openedMenu=t}},{key:"handleAction",value:function(t){console.log("Handle Action is called for "+t)}},{key:"switchLang",value:function(){g.activateTheme(!1,!1,this.lang,this),this.lang="de"===this.lang?"ar":"de"}}]),i}(p["c"]);Object(m["a"])([Object(p["b"])()],O.prototype,"isMobile",void 0),Object(m["a"])([Object(p["b"])()],O.prototype,"lang",void 0),O=Object(m["a"])([p["a"]],O);var y=O,k=y,x=(i("8e61"),i("2877")),w=i("6544"),j=i.n(w),C=i("40dc"),M=i("5bc1"),S=i("bb78"),P=i("8336"),T=i("132d"),I=i("adda"),V=i("8860"),z=i("56b0"),L=i("da13"),$=i("5d23"),A=i("34c3"),R=i("e449"),N=i("f774"),D=i("2fa4"),K=i("afd9"),E=i("fe57"),F=Object(x["a"])(k,d,v,!1,null,"6e74c172",null),B=F.exports;j()(F,{VAppBar:C["a"],VAppBarNavIcon:M["a"],VAppBarTitle:S["a"],VBtn:P["a"],VIcon:T["a"],VImg:I["a"],VList:V["a"],VListGroup:z["a"],VListItem:L["a"],VListItemActionText:$["a"],VListItemContent:$["b"],VListItemIcon:A["a"],VListItemTitle:$["c"],VMenu:R["a"],VNavigationDrawer:N["a"],VSpacer:D["a"],VSystemBar:K["a"],VTabs:E["a"]});var W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{dark:"",padless:"",fixed:!1,absolute:!1}},[i("v-card",{staticClass:"white--text text-center",attrs:{color:"primary",flat:"",tile:""}},[i("v-card-text",{staticClass:"white--text pt-0",staticStyle:{width:"100vw","margin-top":"20px","text-align":"center"}},[t.isMobile?i("div",t._l(t.items,(function(e,n){return i("v-row",{key:n,style:"text-align: "+("ar"!=t.lang?"left":"right")},[i("v-col",[i("span",{staticClass:"footerTitle",on:{click:function(i){return t.$emit("action",e)}}},[t._v(t._s(t.$i18n.t(e.title)))]),t._l(e.list,(function(e,n){return i("div",{key:n,staticClass:"footerLink"},[e.url?i("a",{attrs:{href:e.url,target:"_blank"}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1):i("div",{on:{click:function(i){return t.$emit("action",e)}}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1)])}))],2)],1)})),1):i("div",[i("v-row",{staticStyle:{"text-align":"center !important"}},[i("v-col",{staticStyle:{width:"200vw"}}),t._l(t.items,(function(e,n){return i("v-col",{key:n,style:"text-align: "+("ar"!=t.lang?"left":"right")},[i("span",{staticClass:"footerTitle",on:{click:function(i){return t.$emit("action",e)}}},[t._v(t._s(t.$i18n.t(e.title)))]),t._l(e.list,(function(e,n){return i("div",{key:n,staticClass:"footerLink"},[e.url?i("a",{attrs:{href:e.url,target:"_blank"}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1):i("div",{on:{click:function(i){return t.$emit("action",e)}}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1)])}))],2)})),i("v-col",{staticStyle:{width:"200vw"}})],2)],1)]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{staticStyle:{"font-size":"var(--footer-link-size)","vertical-align":"middle !important"}},[i("span",{staticStyle:{height:"100%",position:"relative",top:"8px"}},[t._v(" © "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("Kundakji & Partner")])])]),i("v-col",t._l(t.icons,(function(e){return i("v-btn",{key:e,staticClass:"white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:t.isMobile?"16px":"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1)],1)],1)],1)],1)},U=[],G=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.lang="de",t.icons=["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],t.items=[{title:"mnuPraxis",list:[{title:"mnuAertzte",icon:"mdi-medical-bag",action:"docs"},{title:"mnuTeam",icon:"mdi-account-multiple"},{title:"mnuTour",icon:"mdi-magnify-plus-outline",action:"tour"}]},{title:"mnuLeistungen",action:"services",list:[{title:"srv_implantologie",icon:"mdi-cog"},{title:"srv_chirurgische",icon:"mdi-cog"},{title:"srv_funkDiag",icon:"mdi-cog"},{title:"Allgemeine Diagnostik",icon:"mdi-cog"},{title:"Kosmetische Leistungen",icon:"mdi-cog"},{title:"Vorsorge",icon:"mdi-cog"},{title:"Cerec",icon:"mdi-cog"},{title:"Hahnerhaltung",icon:"mdi-cog"},{title:"Patenschaft",icon:"mdi-cog"}]},{title:"mnuKontakt",list:[{title:"mnuStandort",icon:"mdi-map-marker",url:"https://www.google.com/maps/place/Zahnarzt+Praxis+Kundakji+%26+Partner/@49.9999337,8.2611765,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x22cbe0caf65b9e9!8m2!3d49.9999649!4d8.2633183"},{title:"mnuOffnungsZeiten",icon:"mdi-clock-time-five-outline"}]}],t}return i}(p["c"]);Object(m["a"])([Object(p["b"])()],G.prototype,"isMobile",void 0),Object(m["a"])([Object(p["b"])()],G.prototype,"lang",void 0),G=Object(m["a"])([p["a"]],G);var H=G,Z=H,J=(i("760c"),i("b0af")),X=i("99d9"),Y=i("62ad"),q=i("ce7e"),Q=i("553a"),tt=i("0fd9b"),et=Object(x["a"])(Z,W,U,!1,null,null,null),it=et.exports;j()(et,{VBtn:P["a"],VCard:J["a"],VCardText:X["b"],VCol:Y["a"],VDivider:q["a"],VFooter:Q["a"],VIcon:T["a"],VRow:tt["a"]});var nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.outsideClick,expression:"outsideClick"}],ref:"toolBoxCont",attrs:{id:"toolBoxCont"}},[i("div",{attrs:{id:"tlbIcon"},on:{click:t.handleVisibility}},[i("v-icon",{attrs:{dark:""}},[t._v(t._s(t.panelIcon))])],1),i("div",{staticClass:"group"},[i("li",{staticClass:"mr-2 em em-flag-sa langItem",on:{click:function(e){return t.switchLang("ar")}}}),i("li",{staticClass:"mr-2 em em-flag-de langItem",on:{click:function(e){return t.switchLang("de")}}}),i("li",{staticClass:"mr-2 em em-flag-gb langItem",on:{click:function(e){return t.switchLang("en")}}})])])},at=[],ot=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.isShown=!1,t.panelIcon="mdi-web",t}return Object(c["a"])(i,[{key:"switchLang",value:function(t){g.activateTheme(!1,!1,t,this),_.a.lang=t,this.$emit("langUpdate",t)}},{key:"outsideClick",value:function(){this.isShown&&this.handleVisibility()}},{key:"handleVisibility",value:function(){console.log("Check Visibility is called "+this.isShown),console.dir(this.$refs.toolBoxCont),this.isShown?(this.panelIcon="mdi-web",this.$refs.toolBoxCont.classList.remove("slideRight")):(this.panelIcon="mdi-arrow-left-bold-outline",this.$refs.toolBoxCont.classList.add("slideRight")),this.isShown=!this.isShown}}]),i}(p["c"]);ot=Object(m["a"])([p["a"]],ot);var st=ot,rt=st,ct=(i("d0b0"),i("269a")),lt=i.n(ct),ut=i("a293"),mt=Object(x["a"])(rt,nt,at,!1,null,"49b27cce",null),pt=mt.exports;j()(mt,{VIcon:T["a"]}),lt()(mt,{ClickOutside:ut["a"]});var dt=function(){function t(){Object(r["a"])(this,t)}return Object(c["a"])(t,[{key:"screenSize",value:function(t){return t.$vuetify.breakpoint.name}},{key:"isMobile",value:function(t){return"xs"===this.screenSize(t)}}]),t}(),vt=new dt,ht=vt,ft=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.isOnMobile=!1,t.curLang="de",t}return Object(c["a"])(i,[{key:"mounted",value:function(){console.log("Screen Size : "+ht.screenSize(this)),console.log("Is Mobile   : "+ht.isMobile(this)),this.isOnMobile=ht.isMobile(this),g.activateTheme(this.isOnMobile,!1,this.curLang,this)}},{key:"langUpdated",value:function(t){this.curLang=t}},{key:"handleAction",value:function(t){if(console.log("Handle Action called for : "+JSON.stringify(t)+" holding type "+Object(s["a"])(t)),t.action||"string"==typeof t){var e=t.action?t.action:t;console.log("Current path : "+this.$router.currentRoute.path+" new path: "+e),this.$router.currentRoute.path!=="/"+e&&this.$router.push(e)}}}]),i}(p["c"]);ft=Object(m["a"])([Object(p["a"])({components:{Header:B,Footer:it,Toolbox:pt}})],ft);var gt=ft,bt=gt,_t=i("7496"),Ot=i("a523"),yt=i("0789"),kt=i("f6c4"),xt=i("8dd9"),wt=Object(x["a"])(bt,a,o,!1,null,null,null),jt=wt.exports;j()(wt,{VApp:_t["a"],VContainer:Ot["a"],VExpandXTransition:yt["b"],VFabTransition:yt["c"],VMain:kt["a"],VSheet:xt["a"]});var Ct=i("8c4f"),Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"text-align":"center"}},[i("Doctors"),i("br"),i("br"),i("br"),i("br"),i("Services"),i("br"),i("br"),i("br"),i("br"),i("Tour",{attrs:{slideOnly:t.isMobile}})],1)},St=[],Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"text-align":"center"}},[i("h1",{staticClass:"section-title"},[t._v(t._s(t.$i18n.t("praxisTeam")))]),i("br"),t.isMobile?t._e():i("div",[i("v-row",t._l(t.doctors,(function(e,n){return i("v-col",{key:n,attrs:{id:n}},[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",elevation:"5",shaped:""}},[i("v-responsive",{staticClass:"pt-4"},[i("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"150",rounded:""}},[i("img",{attrs:{src:e.pic,height:"150px"}})])],1),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")]),i("v-card-subtitle",{staticStyle:{"text-weight":"bold !important"}},[t._v(" "+t._s(t.$i18n.t(e.position))+" ")])],1)],1)})),1)],1),t.isMobile?i("div",t._l(t.doctors,(function(e,n){return i("v-row",{key:n,attrs:{id:n}},[i("v-col",[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",shaped:""}},[i("v-responsive",{staticClass:"pt-4"},[i("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"150",rounded:""}},[i("img",{attrs:{src:e.pic,height:"150px"}})])],1),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")]),i("v-card-subtitle",{staticStyle:{"text-weight":"bold !important"}},[t._v(" "+t._s(t.$i18n.t(e.position))+" ")])],1)],1)],1)})),1):t._e()])},Tt=[],It=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.doctors=[{name:"dct_name_sa",position:"dct_pos_za",pic:"images/saad_1.jpg"},{name:"dct_name_aa",position:"dct_pos_za",pic:"https://cdn.vuetifyjs.com/images/john.jpg"},{name:"dct_name_aj",position:"dct_pos_za",pic:"https://cdn.vuetifyjs.com/images/lists/2.jpg"}],t}return i}(p["c"]);Object(m["a"])([Object(p["b"])()],It.prototype,"isMobile",void 0),Object(m["a"])([Object(p["b"])()],It.prototype,"lang",void 0),It=Object(m["a"])([p["a"]],It);var Vt=It,zt=Vt,Lt=i("8212"),$t=i("6b53"),At=Object(x["a"])(zt,Pt,Tt,!1,null,null,null),Rt=At.exports;j()(At,{VAvatar:Lt["a"],VCard:J["a"],VCardSubtitle:X["a"],VCardTitle:X["c"],VCol:Y["a"],VContainer:Ot["a"],VResponsive:$t["a"],VRow:tt["a"]});var Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"text-align":"center"}},[i("h1",{staticClass:"section-title"},[t._v(t._s(t.$i18n.t("titleServices")))]),i("br"),t.isMobile?t._e():i("div",[i("v-row",t._l(t.services,(function(e,n){return i("v-col",{key:n,attrs:{id:n}},[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",shaped:"",elevation:"5"}},[i("v-img",{attrs:{src:e.pic,height:"150px"}}),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")])],1)],1)})),1)],1),t.isMobile?i("div",t._l(t.services,(function(e,n){return i("v-row",{key:n,attrs:{id:n}},[i("v-col",[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",shaped:"",flat:""}},[i("v-img",{attrs:{src:e.pic,height:"150px"}}),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")])],1)],1)],1)})),1):t._e()])},Dt=[],Kt=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.services=[{name:"srv_implantologie",pic:"images/services/kiefer-implantat.jpg"},{name:"srv_chirurgische",pic:"images/services/schirurgie.jpg"},{name:"srv_funkDiag",pic:"images/services/funkDiag.jpg"}],t}return i}(p["c"]);Object(m["a"])([Object(p["b"])()],Kt.prototype,"isMobile",void 0),Object(m["a"])([Object(p["b"])()],Kt.prototype,"lang",void 0),Kt=Object(m["a"])([p["a"]],Kt);var Et=Kt,Ft=Et,Bt=Object(x["a"])(Ft,Nt,Dt,!1,null,null,null),Wt=Bt.exports;j()(Bt,{VCard:J["a"],VCardTitle:X["c"],VCol:Y["a"],VContainer:Ot["a"],VImg:I["a"],VRow:tt["a"]});var Ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("div",{staticClass:"imagePage"},[i("h1",{staticClass:"section-title"},[t._v(t._s(t.$i18n.t("titleTour")))]),i("br"),i("br"),!t.slideOnly&&t.isMobile?i("div",{ref:"imageCont",class:t.isMobile?"imageCont_mobile":"",attrs:{id:"imageCont"}},[i("div",{staticClass:"imageWindow"},t._l(t.images,(function(e){return i("div",{key:e.name,staticClass:"imageDiv"},[i("v-fade-transition",[i("img",{staticClass:"timage",attrs:{src:e.pic},on:{click:function(e){t.showImages=!0}}})])],1)})),0)]):t.slideOnly||t.isMobile?i("div",[i("v-btn",{attrs:{icon:"",depressed:""},on:{click:function(e){t.showImages=!0}}},[i("v-icon",[t._v("mdi-image-multiple-outline")])],1)],1):i("div",{attrs:{id:"imageCont"}},t._l(t.images,(function(e){return i("div",{key:e.name,staticClass:"imageDiv"},[i("v-fade-transition",[i("img",{staticClass:"timage",attrs:{src:e.pic},on:{click:function(e){t.showImages=!0}}})])],1)})),0),i("v-dialog",{model:{value:t.showImages,callback:function(e){t.showImages=e},expression:"showImages"}},[i("v-carousel",{attrs:{cycle:t.slideShow,dark:"","show-arrows-on-hover":"","progress-color":"white",height:"80vh"}},t._l(t.images,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.pic}})})),1)],1)],1)])},Gt=[],Ht=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.showImages=!1,t.slideShow=!1,t.images=[{name:"pic1",pic:"images/tour/cln_1.jpg"},{name:"pic2",pic:"images/tour/cln_2.jpg"},{name:"pic3",pic:"images/tour/cln_3.jpg"},{name:"pic4",pic:"images/tour/cln_4.jpg"},{name:"pic5",pic:"images/tour/cln_5.jpg"},{name:"pic6",pic:"images/tour/cln_6.jpg"},{name:"pic7",pic:"images/tour/cln_7.jpg"}],t}return Object(c["a"])(i,[{key:"mounted",value:function(){void 0===this.isMobile&&this.$emit("update:isMobile",ht.isMobile(this)),console.log("Tour Panel activated with Mobile value set to :"+this.isMobile)}}]),i}(p["c"]);Object(m["a"])([Object(p["b"])()],Ht.prototype,"isMobile",void 0),Object(m["a"])([Object(p["b"])()],Ht.prototype,"lang",void 0),Object(m["a"])([Object(p["b"])({default:!1})],Ht.prototype,"slideOnly",void 0),Ht=Object(m["a"])([p["a"]],Ht);var Zt=Ht,Jt=Zt,Xt=(i("93b0"),i("5e66")),Yt=i("3e35"),qt=i("169a"),Qt=Object(x["a"])(Jt,Ut,Gt,!1,null,"6bb7843e",null),te=Qt.exports;j()(Qt,{VBtn:P["a"],VCarousel:Xt["a"],VCarouselItem:Yt["a"],VContainer:Ot["a"],VDialog:qt["a"],VFadeTransition:yt["d"],VIcon:T["a"]});var ee=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.show=!1,t.doctors=[{name:"dct_name_sa",position:"dct_pos_za",pic:"images/saad_1.jpg"},{name:"dct_name_aa",position:"dct_pos_za",pic:"https://cdn.vuetifyjs.com/images/john.jpg"},{name:"dct_name_aj",position:"dct_pos_za",pic:"https://cdn.vuetifyjs.com/images/lists/2.jpg"}],t}return i}(p["c"]);Object(m["a"])([Object(p["b"])()],ee.prototype,"isMobile",void 0),Object(m["a"])([Object(p["b"])()],ee.prototype,"lang",void 0),ee=Object(m["a"])([Object(p["a"])({components:{Doctors:Rt,Services:Wt,Tour:te}})],ee);var ie=ee,ne=ie,ae=Object(x["a"])(ne,Mt,St,!1,null,null,null),oe=ae.exports;j()(ae,{VContainer:Ot["a"]}),n["a"].use(Ct["a"]);var se=[{path:"/",name:"Home",component:oe},{path:"/docs",name:"Doctors",component:Rt},{path:"/services",name:"Services",component:Wt},{path:"/tour",name:"Tour",component:te}],re=new Ct["a"]({mode:"history",base:"/dentist/saad/dist/",routes:se}),ce=re,le=i("f309");n["a"].use(le["a"],{options:{customProperties:!0}});var ue=new le["a"]({theme:{dark:!1,options:{customProperties:!0},themes:{light:{primary:"#306dc1",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),me=i("a925"),pe={de:{appTitle:"Zahnarzt Praxis Kundakji & Partner",mnuKontakt:"Kontakt",mnuLeistungen:"Leistungen",mnuNotdienst:"Notdienst",mnuOffnungsZeiten:"Öffnungszeiten",mnuPraxis:"Praxis",mnuStandort:"Standort",praxisTeam:"Das Team der Zahnarztpraxis",mnuAertzte:"Ärtzte",mnuTeam:"Team",mnuTour:"Tour",actNachricht:"Nachricht",dct_name_sa:"Saad Kundakji",dct_name_aa:"Ahmad Alluh",dct_name_aj:"Ayman Jajeh",dct_pos_za:"Zahnarzt",titleServices:"Zahnärztliche Behandlungen",srv_implantologie:"Implantologie",srv_chirurgische:"Chirurgische Leistungen",srv_funkDiag:"Funktionsdiagnostik",titleTour:"Rundgang durch die Klinik"},ar:{appTitle:"عيادة طبيب الأسنان د سعد قندقجى و شركائه ",mnuPraxis:"العيادة",mnuLeistungen:"خدمات",mnuKontakt:"الاتصال",mnuNotdienst:"خدمات الطوارئ",mnuOffnungsZeiten:"أوقات العمل",mnuStandort:"الموقع",praxisTeam:"فريق عيادة طب الأسنان",mnuAertzte:"الأطباء",mnuTeam:"فريق",mnuTour:"جولة",actNachricht:"رسالة ",dct_name_sa:"د سعد قندقجى",dct_name_aa:"أحمد اللوح",dct_name_aj:"أيمن جاجه",dct_pos_za:"دكتورالاسنان",titleServices:"علاجات الأسنان",srv_implantologie:"زراعة الأسنان",srv_chirurgische:"الخدمات الجراحية",srv_funkDiag:"التشخيصات الوظيفية",titleTour:"جولة في أرجاء العيادة "},en:{appTitle:"Dentist clinic Kundakji & Partner",mnuPraxis:"Clinic",mnuLeistungen:"Services",mnuKontakt:"Contact",mnuNotdienst:"Emergency service",mnuOffnungsZeiten:"opening hours",mnuStandort:"Location",praxisTeam:"The Team of the dental Clinic",mnuAertzte:"Doctors",mnuTeam:"Team",mnuTour:"Tour",actNachricht:"Message",dct_name_sa:"Saad Kundakji",dct_name_aa:"Ahmad Alluh",dct_name_aj:"Ayman Jajeh",dct_pos_za:"Dentist",titleServices:"Dental treatments",srv_implantologie:"Implantology",srv_chirurgische:"Surgical services",srv_funkDiag:"Functional diagnostics",titleTour:"Tour around the clinic"}},de=pe;n["a"].config.productionTip=!1,n["a"].use(me["a"]);var ve=new me["a"]({locale:"de",fallbackLocale:"ar",messages:de});new n["a"]({i18n:ve,router:ce,vuetify:ue,render:function(t){return t(jt)}}).$mount("#app")},d0b0:function(t,e,i){"use strict";i("0a9d")},ddff:function(t,e,i){},e2f5:function(t,e,i){}});
//# sourceMappingURL=app.269eb811.js.map