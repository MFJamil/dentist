(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],m=0,d=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dentist/saad/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0a9d":function(t,e,i){},"1a70":function(t,e,i){"use strict";i("a768")},"3ce0":function(t,e,i){t.exports={lang:"ar"}},"760c":function(t,e,i){"use strict";i("c3f5")},"7aec":function(t,e,i){},8205:function(t,e,i){t.exports=i.p+"img/tooth.ca7e49ec.png"},"85cc":function(t,e,i){"use strict";i("7aec")},a768:function(t,e,i){},c3f5:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("e623"),i("e379"),i("5dc8"),i("37e1");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-expand-x-transition",[i("Header",{attrs:{isMobile:t.isOnMobile,lang:t.curLang},on:{action:t.handleAction}})],1),i("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{"overflow-x":"hidden"},attrs:{id:"pageBody","max-height":"100vh"}},[i("v-main",[i("v-container",{attrs:{fluid:""}},[i("v-fab-transition",[i("router-view",{attrs:{isMobile:t.isOnMobile,lang:t.curLang}})],1)],1)],1),i("Footer",{attrs:{isMobile:t.isOnMobile,lang:t.curLang},on:{action:t.handleAction}}),i("Toolbox",{on:{langUpdate:t.langUpdated}})],1)],1)},o=[],r=i("53ca"),s=i("d4ec"),c=i("bee2"),l=i("262e"),u=i("2caf"),m=i("9ab4"),d=i("1b40"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{attrs:{app:"",color:"primary","lights-out":"",dark:""}},[a("v-spacer"),a("v-icon",[t._v("mdi-email")]),t._v("   "+t._s(t.$i18n.t("actNachricht"))+" "),a("v-spacer"),t.isMobile?a("div",{on:{click:function(e){return t.$emit("action","/")}}},[a("v-icon",[t._v(" mdi-home")])],1):a("div",{staticClass:"d-none d-sm-flex"},[a("v-icon",[t._v("mdi-clock-time-eight")]),t._v("   Mo.Di.Do (9 - 13) + (15 - 18) | Mi. (9 - 14:30) | Fr. (8 - 13) ")],1),a("v-spacer"),a("a",{attrs:{href:"tel:06131229816"}},[a("v-icon",[t._v("mdi-phone-classic")])],1),t._v("   06131-229816 "),a("v-spacer")],1),a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","shrink-on-scroll":"",prominent:"",src:t.getHeaderPic(),"fade-img-on-scroll":"","scroll-target":"#pageBody","scroll-threshold":"500"},scopedSlots:t._u([{key:"img",fn:function(e){var i=e.props;return[a("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",i,!1))]}},t.isMobile?null:{key:"extension",fn:function(){return[a("v-tabs",{attrs:{"align-with-title":""}},t._l(t.menus,(function(e,i){return a("v-menu",{key:i,ref:e.title,refInFor:!0,attrs:{"close-on-content-click":!1,"open-on-hover":"",bottom:"",origin:"center center","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var n=i.on,o=i.attrs;return[a("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{text:"",small:"",width:"100px"},on:{mouseover:function(i){return t.menuOpened(e.title)},click:function(i){return t.$emit("action",e)}}},"v-btn",o,!1),n),[t._v(" "+t._s(t.$i18n.t(e.title))+" ")])]}}],null,!0)},[e.subMenu?a("v-list",{attrs:{dense:""}},[t._l(e.subMenu,(function(e){return[a("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(i){return t.$emit("action",e)}}},[a("v-list-item-icon",{style:"ar"==t.lang?"margin-left:0px !important;":"margin-right:0px !important;"},[a("v-icon",{attrs:{small:"",color:e.action.enabled?"primary":"grey"}},[t._v(t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(t.$i18n.t(e.title)))]),a("v-list-item-action-text",[t._v(t._s(e.key))])],1)]}))],2):t._e()],1)})),1)]},proxy:!0}],null,!0)},[t.isMobile&&t.showMobileMenu?a("v-app-bar-nav-icon",{staticStyle:{"transition-duration":"1000ms"},attrs:{transition:"fade-transition"},on:{click:function(e){e.stopPropagation(),t.showMobileMenu=!1}}},[a("v-icon",[t._v(" mdi-close ")])],1):t._e(),t.isMobile&&!t.showMobileMenu?a("v-app-bar-nav-icon",{staticStyle:{"transition-duration":"1000ms"},attrs:{transition:"fade-transition"},on:{click:function(e){e.stopPropagation(),t.showMobileMenu=!0}}},[a("v-icon",[t._v("mdi-menu")])],1):t._e(),t.isMobile?t._e():a("v-app-bar-nav-icon",{on:{click:function(e){return t.$emit("action","/")}}},[a("v-icon",[t._v(" mdi-home")])],1),a("v-img",{class:["shrink","mr-2","d-none","d-sm-flex","ar"==t.lang?"toothIcon_left":"toothIcon_right"],attrs:{alt:"Zahn Bild",contain:"",src:i("8205"),transition:"scale-transition"}}),a("v-app-bar-title",{class:t.isMobile?"bar-title-mobile":"",staticStyle:{"transition-duration":"700ms !important"}},[t._v(t._s(t.$i18n.t("appTitle")))]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.showMobileMenu,callback:function(e){t.showMobileMenu=e},expression:"showMobileMenu"}},[a("v-list",{attrs:{nav:"",dense:""}},t._l(t.menus,(function(e,i){return a("v-list-group",{key:i,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.$i18n.t(e.title))},on:{click:function(i){return t.$emit("action",e)}}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"menu.active"}},t._l(e.subMenu,(function(e){return a("v-list-item",{key:e.title,on:{click:function(i){return t.$emit("action",e)}}},[a("v-list-item-icon",[e.icon?a("v-icon",[t._v(" "+t._s(e.icon)+" ")]):t._e()],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.$i18n.t(e.title))}})],1)],1)})),1)})),1)],1)],1)},v=[],h=(i("4de4"),i("b0c0"),i("159b"),function(){function t(){Object(s["a"])(this,t),this.props=[],this.PROP_STEPS_COLOR="stepsColor",this.PROP_SHOW_KFW_ARROW="showKfwArrow",this.PROP_DARK="dark",this.PROP_KFW_LOGO="kfwLogo",this.PROP_PAGE_UP_COLOR="pageUpColor",this.ICON_ARROW_DOWN="iconArrowDown",this.ICON_ARROW_UP="iconArrowUp",this.ICON_CALENDAR="iconCalendar",this.ICON_CANCEL="iconCancel",this.ICON_DELETE="iconDelete",this.ICON_DOUBLE_ARROW_LEFT="iconDoubleArrowLeft",this.ICON_DOUBLE_ARROW_RIGHT="iconDoubleArrowRight",this.ICON_EXIT="iconExit",this.ICON_HELP="iconHelp",this.ICON_INFO="iconInfo",this.ICON_MAIL="iconMail",this.ICON_OK="iconOk",this.ICON_PRINTER="iconPrinter",this.ICON_PAUSE="iconPause",this.ICON_PLUS="iconPlus",this.ICON_UNDO="iconUndo",this.ICON_WARNING="iconWarning",this.themes=[{name:"default",dark:!1,lang:"de",props:[{name:"--app-lang",value:"de"},{name:"--app-bar-title-size",value:"24px"},{name:"--app-bar-title-compressed-size",value:"24px"},{name:"--app-bar-title-left",value:"52px"},{name:"--footer-link-size",value:"12px"},{name:"--footer-title-size",value:"14px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"mobile",dark:!1,lang:"de",props:[{name:"--app-lang",value:"de"},{name:"--app-bar-title-size",value:"18px"},{name:"--app-bar-title-compressed-size",value:"16px"},{name:"--app-bar-title-left",value:"10px"},{name:"--footer-link-size",value:"10px"},{name:"--footer-title-size",value:"12px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"default",dark:!1,lang:"ar",props:[{name:"--app-lang",value:"ar"},{name:"--app-bar-title-size",value:"24px"},{name:"--app-bar-title-compressed-size",value:"24px"},{name:"--app-bar-title-left",value:"52px"},{name:"--footer-link-size",value:"12px"},{name:"--footer-title-size",value:"14px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"mobile",dark:!1,lang:"ar",props:[{name:"--app-lang",value:"ar"},{name:"--app-bar-title-size",value:"18px"},{name:"--app-bar-title-compressed-size",value:"16px"},{name:"--app-bar-title-left",value:"10px"},{name:"--footer-link-size",value:"10px"},{name:"--footer-title-size",value:"12px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"default",dark:!1,lang:"en",props:[{name:"--app-lang",value:"ar"},{name:"--app-bar-title-size",value:"24px"},{name:"--app-bar-title-compressed-size",value:"24px"},{name:"--app-bar-title-left",value:"52px"},{name:"--footer-link-size",value:"12px"},{name:"--footer-title-size",value:"14px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]},{name:"mobile",dark:!1,lang:"en",props:[{name:"--app-lang",value:"en"},{name:"--app-bar-title-size",value:"18px"},{name:"--app-bar-title-compressed-size",value:"16px"},{name:"--app-bar-title-left",value:"10px"},{name:"--footer-link-size",value:"10px"},{name:"--footer-title-size",value:"12px"},{name:this.PROP_KFW_LOGO,value:"kfw_blue.png"}]}]}return Object(c["a"])(t,[{key:"activateTheme",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"de",a=arguments.length>3?arguments[3]:void 0,n=document.documentElement;console.log("Setting lang to : "+i);var o=this.themes.filter((function(t){return t.name===(e?"mobile":"default")&&t.lang===i}))[0];this.props=[],this.currentTheme=o,null!==n&&o.props.forEach((function(e){n.style.setProperty(e.name,""+e.value),t.props[e.name]=e.value})),this.props[this.PROP_DARK]=o.dark,a.$vuetify.rtl="ar"===i,a.$i18n.locale=i}},{key:"getProperty",value:function(t){return this.currentTheme.props.filter((function(e){return e["name"]===t}))[0].value}},{key:"getTheme",value:function(){return this.currentTheme}},{key:"isThemeDefault",value:function(){return"default"===this.currentTheme.name}},{key:"getIcon",value:function(t){var e=this.getCustomIcon(t);return void 0===e&&(e=this.props[t],void 0===e)?t:e}},{key:"getCustomIcon",value:function(t){}}]),t}()),g=new h,_=g,b=i("3ce0"),f=i.n(b),y=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.lang="de",t.showMobileMenu=!1,t.menus=[{id:"Praxis",title:"mnuPraxis",subMenu:[{action:"docs",title:"mnuAertzte",icon:"mdi-medical-bag"},{action:"team",title:"mnuTeam",icon:"mdi-account-multiple"},{action:"tour",title:"mnuTour",icon:"mdi-magnify-plus-outline"}]},{id:"Leistungen",title:"mnuLeistungen",action:"services",subMenu:[{action:"",title:"srv_implantologie",icon:"mdi-account-wrench"},{action:"",title:"srv_chirurgische",icon:"mdi-account-wrench"},{action:"",title:"srv_funkDiag",icon:"mdi-account-wrench"},{action:"",title:"Allgemeine Diagnostik",icon:"mdi-account-wrench"},{action:"",title:"Kosmetische Leistungen",icon:"mdi-account-wrench"},{action:"",title:"Vorsorge",icon:"mdi-account-wrench"},{action:"",title:"Cerec",icon:"mdi-account-wrench"},{action:"",title:"Hahnerhaltung",icon:"mdi-account-wrench"},{action:"",title:"Patenschaft",icon:"mdi-account-wrench"}]},{id:"Kontakt",title:"mnuKontakt",subMenu:[{action:"",title:"mnuStandort",icon:"mdi-map-marker"},{action:"timings",title:"mnuOffnungsZeiten",icon:"mdi-clock-time-five-outline"}]},{id:"Notdienst",title:"mnuNotdienst"}],t}return Object(c["a"])(i,[{key:"getHeaderPic",value:function(){var t="images/header/hpic_"+Math.floor(10*Math.random())+".jpg";return console.log("Header pic : "+t),t}},{key:"mounted",value:function(){console.log("Vars read : "+f.a.lang)}},{key:"menuOpened",value:function(t){this.openedMenu=t}},{key:"handleAction",value:function(t){console.log("Handle Action is called for "+t)}},{key:"switchLang",value:function(){_.activateTheme(!1,!1,this.lang,this),this.lang="de"===this.lang?"ar":"de"}}]),i}(d["c"]);Object(m["a"])([Object(d["b"])()],y.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],y.prototype,"lang",void 0),y=Object(m["a"])([d["a"]],y);var O=y,k=O,x=(i("85cc"),i("2877")),w=i("6544"),j=i.n(w),C=i("40dc"),M=i("5bc1"),S=i("bb78"),T=i("8336"),V=i("132d"),z=i("adda"),P=i("8860"),$=i("56b0"),I=i("da13"),D=i("5d23"),L=i("34c3"),A=i("e449"),R=i("f774"),N=i("2fa4"),K=i("afd9"),F=i("fe57"),E=Object(x["a"])(k,p,v,!1,null,"28f594e4",null),W=E.exports;j()(E,{VAppBar:C["a"],VAppBarNavIcon:M["a"],VAppBarTitle:S["a"],VBtn:T["a"],VIcon:V["a"],VImg:z["a"],VList:P["a"],VListGroup:$["a"],VListItem:I["a"],VListItemActionText:D["a"],VListItemContent:D["b"],VListItemIcon:L["a"],VListItemTitle:D["c"],VMenu:A["a"],VNavigationDrawer:R["a"],VSpacer:N["a"],VSystemBar:K["a"],VTabs:F["a"]});var B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{dark:"",padless:"",fixed:!1,absolute:!1}},[i("v-card",{staticClass:"white--text text-center",attrs:{color:"primary",flat:"",tile:""}},[i("v-card-text",{staticClass:"white--text pt-0",staticStyle:{width:"100vw","margin-top":"20px","text-align":"center"}},[t.isMobile?i("div",t._l(t.items,(function(e,a){return i("v-row",{key:a,style:"text-align: "+("ar"!=t.lang?"left":"right")},[i("v-col",[i("span",{staticClass:"footerTitle",on:{click:function(i){return t.$emit("action",e)}}},[t._v(t._s(t.$i18n.t(e.title)))]),t._l(e.list,(function(e,a){return i("div",{key:a,staticClass:"footerLink"},[e.url?i("a",{attrs:{href:e.url,target:"_blank"}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1):i("div",{on:{click:function(i){return t.$emit("action",e)}}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1)])}))],2)],1)})),1):i("div",[i("v-row",{staticStyle:{"text-align":"center !important"}},[i("v-col",{staticStyle:{width:"200vw"}}),t._l(t.items,(function(e,a){return i("v-col",{key:a,style:"text-align: "+("ar"!=t.lang?"left":"right")},[i("span",{staticClass:"footerTitle",on:{click:function(i){return t.$emit("action",e)}}},[t._v(t._s(t.$i18n.t(e.title)))]),t._l(e.list,(function(e,a){return i("div",{key:a,staticClass:"footerLink"},[e.url?i("a",{attrs:{href:e.url,target:"_blank"}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1):i("div",{on:{click:function(i){return t.$emit("action",e)}}},[i("v-icon",{attrs:{"x-small":"",color:"yellow"}},[t._v("mdi-star-four-points")]),t._v("  "+t._s(t.$i18n.t(e.title))+"   "),i("v-icon",{attrs:{size:t.isMobile?"x-small":"small"}},[t._v(t._s(e.icon))])],1)])}))],2)})),i("v-col",{staticStyle:{width:"200vw"}})],2)],1)]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{staticStyle:{"font-size":"var(--footer-link-size)","vertical-align":"middle !important"}},[i("span",{staticStyle:{height:"100%",position:"relative",top:"8px"}},[t._v(" © "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("Kundakji & Partner")])])]),i("v-col",t._l(t.icons,(function(e){return i("v-btn",{key:e,staticClass:"white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:t.isMobile?"16px":"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1)],1)],1)],1)],1)},H=[],U=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.lang="de",t.icons=["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],t.items=[{title:"mnuPraxis",list:[{title:"mnuAertzte",icon:"mdi-medical-bag",action:"docs"},{title:"mnuTeam",icon:"mdi-account-multiple",action:"team"},{title:"mnuTour",icon:"mdi-magnify-plus-outline",action:"tour"}]},{title:"mnuLeistungen",action:"services",list:[{title:"srv_implantologie",icon:"mdi-cog"},{title:"srv_chirurgische",icon:"mdi-cog"},{title:"srv_funkDiag",icon:"mdi-cog"},{title:"Allgemeine Diagnostik",icon:"mdi-cog"},{title:"Kosmetische Leistungen",icon:"mdi-cog"},{title:"Vorsorge",icon:"mdi-cog"},{title:"Cerec",icon:"mdi-cog"},{title:"Hahnerhaltung",icon:"mdi-cog"},{title:"Patenschaft",icon:"mdi-cog"}]},{title:"mnuKontakt",list:[{title:"mnuStandort",icon:"mdi-map-marker",url:"https://www.google.com/maps/place/Zahnarzt+Praxis+Kundakji+%26+Partner/@49.9999337,8.2611765,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x22cbe0caf65b9e9!8m2!3d49.9999649!4d8.2633183"},{title:"mnuOffnungsZeiten",icon:"mdi-clock-time-five-outline",action:"timings"}]}],t}return i}(d["c"]);Object(m["a"])([Object(d["b"])()],U.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],U.prototype,"lang",void 0),U=Object(m["a"])([d["a"]],U);var Z=U,G=Z,J=(i("760c"),i("b0af")),X=i("99d9"),Y=i("62ad"),q=i("ce7e"),Q=i("553a"),tt=i("0fd9b"),et=Object(x["a"])(G,B,H,!1,null,null,null),it=et.exports;j()(et,{VBtn:T["a"],VCard:J["a"],VCardText:X["b"],VCol:Y["a"],VDivider:q["a"],VFooter:Q["a"],VIcon:V["a"],VRow:tt["a"]});var at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.outsideClick,expression:"outsideClick"}],ref:"toolBoxCont",attrs:{id:"toolBoxCont"}},[i("div",{attrs:{id:"tlbIcon"},on:{click:t.handleVisibility}},[i("v-icon",{attrs:{dark:""}},[t._v(t._s(t.panelIcon))])],1),i("div",{staticClass:"group"},[i("li",{staticClass:"mr-2 em em-flag-sa langItem",on:{click:function(e){return t.switchLang("ar")}}}),i("li",{staticClass:"mr-2 em em-flag-de langItem",on:{click:function(e){return t.switchLang("de")}}}),i("li",{staticClass:"mr-2 em em-flag-gb langItem",on:{click:function(e){return t.switchLang("en")}}})])])},nt=[],ot=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.isShown=!1,t.panelIcon="mdi-web",t}return Object(c["a"])(i,[{key:"switchLang",value:function(t){_.activateTheme(!1,!1,t,this),f.a.lang=t,this.$emit("langUpdate",t)}},{key:"outsideClick",value:function(){this.isShown&&this.handleVisibility()}},{key:"handleVisibility",value:function(){console.log("Check Visibility is called "+this.isShown),console.dir(this.$refs.toolBoxCont),this.isShown?(this.panelIcon="mdi-web",this.$refs.toolBoxCont.classList.remove("slideRight")):(this.panelIcon="mdi-arrow-left-bold-outline",this.$refs.toolBoxCont.classList.add("slideRight")),this.isShown=!this.isShown}}]),i}(d["c"]);ot=Object(m["a"])([d["a"]],ot);var rt=ot,st=rt,ct=(i("d0b0"),i("269a")),lt=i.n(ct),ut=i("a293"),mt=Object(x["a"])(st,at,nt,!1,null,"49b27cce",null),dt=mt.exports;j()(mt,{VIcon:V["a"]}),lt()(mt,{ClickOutside:ut["a"]});var pt=function(){function t(){Object(s["a"])(this,t)}return Object(c["a"])(t,[{key:"screenSize",value:function(t){return t.$vuetify.breakpoint.name}},{key:"isMobile",value:function(t){return"xs"===this.screenSize(t)}}]),t}(),vt=new pt,ht=vt,gt=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.isOnMobile=!1,t.curLang="de",t}return Object(c["a"])(i,[{key:"mounted",value:function(){console.log("Screen Size : "+ht.screenSize(this)),console.log("Is Mobile   : "+ht.isMobile(this)),this.isOnMobile=ht.isMobile(this),_.activateTheme(this.isOnMobile,!1,this.curLang,this)}},{key:"langUpdated",value:function(t){this.curLang=t}},{key:"handleAction",value:function(t){if(console.log("Handle Action called for : "+JSON.stringify(t)+" holding type "+Object(r["a"])(t)),t.action||"string"==typeof t){var e=t.action?t.action:t;console.log("Current path : "+this.$router.currentRoute.path+" new path: "+e),this.$router.currentRoute.path!=="/"+e&&this.$router.push(e)}}}]),i}(d["c"]);gt=Object(m["a"])([Object(d["a"])({components:{Header:W,Footer:it,Toolbox:dt}})],gt);var _t=gt,bt=_t,ft=i("7496"),yt=i("a523"),Ot=i("0789"),kt=i("f6c4"),xt=i("8dd9"),wt=Object(x["a"])(bt,n,o,!1,null,null,null),jt=wt.exports;j()(wt,{VApp:ft["a"],VContainer:yt["a"],VExpandXTransition:Ot["b"],VFabTransition:Ot["c"],VMain:kt["a"],VSheet:xt["a"]});var Ct=i("8c4f"),Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"text-align":"center"}},[i("v-row",[i("v-col",{attrs:{cols:"24"}},[i("h3",{staticStyle:{direction:"rtl","margin-top":"250px","font-size":"30px"}},[t._v(t._s(t.$i18n.t("txt_feedback")))]),i("p",{staticStyle:{"margin-top":"30px"}},[t._v(' "'+t._s(t.$i18n.t("feedback_1"))+'" ')]),i("p",[t._v(' "'+t._s(t.$i18n.t("feedback_2"))+'" ')]),i("p",[t._v(' "'+t._s(t.$i18n.t("feedback_3"))+'" ')])]),i("v-col",[i("Timings")],1)],1),i("div",{staticStyle:{height:"150px"}}),i("v-divider"),i("div",{staticStyle:{height:"150px"}}),i("v-row",[i("v-col",[i("Doctors")],1)],1),i("div",{staticStyle:{height:"150px"}}),i("v-row",[i("v-col",[i("Services")],1)],1),i("div",{staticStyle:{height:"150px"}}),i("v-row",[i("v-col",[i("Team")],1)],1),i("div",{staticStyle:{height:"150px"}}),i("v-row",[i("v-col",[i("Tour",{attrs:{slideOnly:t.isMobile}})],1)],1)],1)},St=[],Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"text-align":"center"},attrs:{fluid:""}},[i("h1",{staticClass:"section-title"},[t._v(t._s(t.$i18n.t("praxisDocs")))]),i("br"),t.isMobile?t._e():i("div",[i("v-row",t._l(t.doctors,(function(e,a){return i("v-col",{key:a,attrs:{id:a}},[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",elevation:"5",shaped:""}},[i("v-responsive",{staticClass:"pt-4"},[i("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"150",rounded:""}},[i("img",{attrs:{src:e.pic,height:"150px"}})])],1),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")]),i("v-card-subtitle",{staticStyle:{"text-weight":"bold !important"}},[t._v(" "+t._s(t.$i18n.t(e.position))+" ")])],1)],1)})),1)],1),t.isMobile?i("div",t._l(t.doctors,(function(e,a){return i("v-row",{key:a,attrs:{id:a}},[i("v-col",[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",shaped:""}},[i("v-responsive",{staticClass:"pt-4"},[i("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"150",rounded:""}},[i("img",{attrs:{src:e.pic,height:"150px"}})])],1),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")]),i("v-card-subtitle",{staticStyle:{"text-weight":"bold !important"}},[t._v(" "+t._s(t.$i18n.t(e.position))+" ")])],1)],1)],1)})),1):t._e()])},Vt=[],zt=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.doctors=[{name:"dct_name_sa",position:"dct_pos_za",pic:"images/saad_1.jpg"},{name:"dct_name_aa",position:"dct_pos_za",pic:"images/no-profile-pic.jpg"},{name:"dct_name_aj",position:"dct_pos_za",pic:"images/no-profile-pic.jpg"}],t}return i}(d["c"]);Object(m["a"])([Object(d["b"])()],zt.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],zt.prototype,"lang",void 0),zt=Object(m["a"])([d["a"]],zt);var Pt=zt,$t=Pt,It=i("8212"),Dt=i("6b53"),Lt=Object(x["a"])($t,Tt,Vt,!1,null,null,null),At=Lt.exports;j()(Lt,{VAvatar:It["a"],VCard:J["a"],VCardSubtitle:X["a"],VCardTitle:X["c"],VCol:Y["a"],VContainer:yt["a"],VResponsive:Dt["a"],VRow:tt["a"]});var Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"text-align":"center"}},[i("h1",{staticClass:"section-title"},[t._v(t._s(t.$i18n.t("praxisTeam")))]),i("br"),t.isMobile?t._e():i("div",[i("v-row",t._l(t.team,(function(e,a){return i("v-col",{key:a,attrs:{id:a}},[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",elevation:"5",shaped:""}},[i("v-responsive",{staticClass:"pt-4"},[i("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"150",rounded:""}},[i("img",{attrs:{src:e.pic,height:"150px"}})])],1),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")]),i("v-card-subtitle",{staticStyle:{"text-weight":"bold !important"}},[t._v(" "+t._s(t.$i18n.t(e.position))+" ")])],1)],1)})),1)],1),t.isMobile?i("div",t._l(t.team,(function(e,a){return i("v-row",{key:a,attrs:{id:a}},[i("v-col",[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",shaped:""}},[i("v-responsive",{staticClass:"pt-4"},[i("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"150",rounded:""}},[i("img",{attrs:{src:e.pic,height:"150px"}})])],1),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")]),i("v-card-subtitle",{staticStyle:{"text-weight":"bold !important"}},[t._v(" "+t._s(t.$i18n.t(e.position))+" ")])],1)],1)],1)})),1):t._e()])},Nt=[],Kt=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.team=[{name:"team_name_ma1",position:"team_pos_zf",pic:"images/no-profile-pic.jpg"},{name:"team_name_ma1",position:"team_pos_zf",pic:"images/no-profile-pic.jpg"},{name:"team_name_ma1",position:"team_pos_ab",pic:"images/no-profile-pic.jpg"}],t}return i}(d["c"]);Object(m["a"])([Object(d["b"])()],Kt.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],Kt.prototype,"lang",void 0),Kt=Object(m["a"])([d["a"]],Kt);var Ft=Kt,Et=Ft,Wt=Object(x["a"])(Et,Rt,Nt,!1,null,null,null),Bt=Wt.exports;j()(Wt,{VAvatar:It["a"],VCard:J["a"],VCardSubtitle:X["a"],VCardTitle:X["c"],VCol:Y["a"],VContainer:yt["a"],VResponsive:Dt["a"],VRow:tt["a"]});var Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"text-align":"center"}},[i("h1",{staticClass:"section-title"},[t._v(t._s(t.$i18n.t("titleServices")))]),i("br"),t.isMobile?t._e():i("div",[i("v-row",t._l(t.services,(function(e,a){return i("v-col",{key:a,attrs:{id:a}},[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",shaped:"",elevation:"5"}},[i("v-img",{attrs:{src:e.pic,height:"150px"}}),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")])],1)],1)})),1)],1),t.isMobile?i("div",t._l(t.services,(function(e,a){return i("v-row",{key:a,attrs:{id:a}},[i("v-col",[i("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"250",outlined:"",shaped:"",flat:""}},[i("v-img",{attrs:{src:e.pic,height:"150px"}}),i("v-card-title",{staticClass:"justify-center",staticStyle:{"word-break":"break-word !important"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.$i18n.t(e.name))+" ")])],1)],1)],1)})),1):t._e()])},Ut=[],Zt=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.services=[{name:"srv_implantologie",pic:"images/services/kiefer-implantat.jpg"},{name:"srv_chirurgische",pic:"images/services/schirurgie.jpg"},{name:"srv_funkDiag",pic:"images/services/funkDiag.jpg"}],t}return i}(d["c"]);Object(m["a"])([Object(d["b"])()],Zt.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],Zt.prototype,"lang",void 0),Zt=Object(m["a"])([d["a"]],Zt);var Gt=Zt,Jt=Gt,Xt=Object(x["a"])(Jt,Ht,Ut,!1,null,null,null),Yt=Xt.exports;j()(Xt,{VCard:J["a"],VCardTitle:X["c"],VCol:Y["a"],VContainer:yt["a"],VImg:z["a"],VRow:tt["a"]});var qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{display:"grid !important","justify-content":"center"},attrs:{fluid:""}},[i("div",{staticClass:"imagePage"},[i("h1",{staticClass:"section-title"},[t._v(t._s(t.$i18n.t("titleTour")))]),i("br"),i("br"),!t.slideOnly&&t.isMobile?i("div",{ref:"imageCont",class:t.isMobile?"imageCont_mobile":"",attrs:{id:"imageCont"}},[i("div",{staticClass:"imageWindow"},t._l(t.images,(function(e){return i("div",{key:e.name,staticClass:"imageDiv"},[i("v-fade-transition",[i("img",{staticClass:"timage",attrs:{src:e.pic},on:{click:function(e){t.showImages=!0}}})])],1)})),0)]):t.slideOnly||t.isMobile?i("div",[i("v-btn",{attrs:{icon:"",depressed:""},on:{click:function(e){t.showImages=!0}}},[i("v-icon",[t._v("mdi-image-multiple-outline")])],1)],1):i("div",{attrs:{id:"imageCont"}},t._l(t.images,(function(e){return i("div",{key:e.name,staticClass:"imageDiv"},[i("v-fade-transition",[i("img",{staticClass:"timage",attrs:{src:e.pic},on:{click:function(e){t.showImages=!0}}})])],1)})),0),i("v-dialog",{model:{value:t.showImages,callback:function(e){t.showImages=e},expression:"showImages"}},[i("v-carousel",{attrs:{cycle:t.slideShow,dark:"","show-arrows-on-hover":"","progress-color":"white",height:"80vh"}},t._l(t.images,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.pic}})})),1)],1)],1)])},Qt=[],te=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.showImages=!1,t.slideShow=!1,t.images=[{name:"pic1",pic:"images/tour/cln_1.jpg"},{name:"pic2",pic:"images/tour/cln_2.jpg"},{name:"pic3",pic:"images/tour/cln_3.jpg"},{name:"pic4",pic:"images/tour/cln_4.jpg"},{name:"pic5",pic:"images/tour/cln_5.jpg"},{name:"pic6",pic:"images/tour/cln_6.jpg"},{name:"pic7",pic:"images/tour/cln_7.jpg"}],t}return Object(c["a"])(i,[{key:"mounted",value:function(){void 0===this.isMobile&&this.$emit("update:isMobile",ht.isMobile(this)),console.log("Tour Panel activated with Mobile value set to :"+this.isMobile)}}]),i}(d["c"]);Object(m["a"])([Object(d["b"])()],te.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],te.prototype,"lang",void 0),Object(m["a"])([Object(d["b"])({default:!1})],te.prototype,"slideOnly",void 0),te=Object(m["a"])([d["a"]],te);var ee=te,ie=ee,ae=(i("1a70"),i("5e66")),ne=i("3e35"),oe=i("169a"),re=Object(x["a"])(ie,qt,Qt,!1,null,"5b5f3b60",null),se=re.exports;j()(re,{VBtn:T["a"],VCarousel:ae["a"],VCarouselItem:ne["a"],VContainer:yt["a"],VDialog:oe["a"],VFadeTransition:Ot["d"],VIcon:V["a"]});var ce=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{display:"grid !important","justify-content":"center"},attrs:{fluid:""}},[i("v-card",{attrs:{outlined:"",elevation:"5",width:"400"}},[i("v-img",{attrs:{height:"150px",src:"images/time.jpg"}},[i("v-card-title",{staticClass:"mt-8",attrs:{color:"primary"}},[i("p",{staticClass:"ml-3"},[t._v(" "+t._s(t.$i18n.t("mnuOffnungsZeiten"))+" ")])])],1),i("v-card-text",[i("div",{staticClass:"font-weight-bold ml-8 mb-2"},[t._v(" Today ")]),i("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.days,(function(e){return i("v-timeline-item",{key:e.id,attrs:{color:t.getDayColor(e.id),small:""}},[i("div",[i("div",{staticClass:"font-weight-normal"},[i("v-row",[i("v-col",[i("strong",{style:"tex-align:left;color:"+t.getDayColor(e.id)},[t._v(t._s(t.$i18n.t(e.name)))])]),i("v-col",t._l(e.time,(function(a){return i("div",{key:a,style:"tex-align:left;color:"+t.getDayColor(e.id)},[t._v(t._s(t.$i18n.t(a))),i("br")])})),0)],1)],1)])])})),1)],1)],1)],1)},le=[],ue=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.days=[{id:1,name:"day_Mon",time:["9:00 - 13:00","15:00 - 18:00"],color:"primary lighten-1"},{id:2,name:"day_Tus",time:["9:00 - 13:00","15:00 - 18:00"],color:"primary lighten-1"},{id:3,name:"day_Wed",time:["9:00 - 13:00"],color:"primary lighten-1"},{id:4,name:"day_Thu",time:["9:00 - 13:00","15:00 - 18:00"],color:"green"},{id:5,name:"day_Fri",time:["9:00 - 13:00"],color:"primary lighten-1"},{id:6,name:"day_Sat",time:["txt_Closed"],color:"primary lighten-1"},{id:7,name:"day_Sun",time:["txt_Closed"],color:"primary lighten-1"}],t}return Object(c["a"])(i,[{key:"mounted",value:function(){console.log("Current day is : "+(new Date).getDay())}},{key:"getDayColor",value:function(t){var e=(new Date).getDay();return t===e?"green":"primary"}}]),i}(d["c"]);Object(m["a"])([Object(d["b"])()],ue.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],ue.prototype,"lang",void 0),ue=Object(m["a"])([d["a"]],ue);var me=ue,de=me,pe=i("8414"),ve=i("1e06"),he=Object(x["a"])(de,ce,le,!1,null,null,null),ge=he.exports;j()(he,{VCard:J["a"],VCardText:X["b"],VCardTitle:X["c"],VCol:Y["a"],VContainer:yt["a"],VImg:z["a"],VRow:tt["a"],VTimeline:pe["a"],VTimelineItem:ve["a"]});var _e=function(t){Object(l["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.show=!1,t.doctors=[{name:"dct_name_sa",position:"dct_pos_za",pic:"images/saad_1.jpg"},{name:"dct_name_aa",position:"dct_pos_za",pic:"https://cdn.vuetifyjs.com/images/john.jpg"},{name:"dct_name_aj",position:"dct_pos_za",pic:"https://cdn.vuetifyjs.com/images/lists/2.jpg"}],t}return i}(d["c"]);Object(m["a"])([Object(d["b"])()],_e.prototype,"isMobile",void 0),Object(m["a"])([Object(d["b"])()],_e.prototype,"lang",void 0),_e=Object(m["a"])([Object(d["a"])({components:{Doctors:At,Team:Bt,Services:Yt,Timings:ge,Tour:se}})],_e);var be=_e,fe=be,ye=Object(x["a"])(fe,Mt,St,!1,null,null,null),Oe=ye.exports;j()(ye,{VCol:Y["a"],VContainer:yt["a"],VDivider:q["a"],VRow:tt["a"]}),a["a"].use(Ct["a"]);var ke=[{path:"/",name:"Home",component:Oe},{path:"/docs",name:"Doctors",component:At},{path:"/team",name:"Team",component:Bt},{path:"/services",name:"Services",component:Yt},{path:"/tour",name:"Tour",component:se},{path:"/timings",name:"Timings",component:ge}],xe=new Ct["a"]({mode:"history",base:"/dentist/saad/dist/",routes:ke}),we=xe,je=i("f309");a["a"].use(je["a"],{options:{customProperties:!0}});var Ce=new je["a"]({theme:{dark:!1,options:{customProperties:!0},themes:{light:{primary:"#306dc1",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),Me=i("a925"),Se={de:{appTitle:"Zahnarzt Praxis Kundakji & Partner",mnuKontakt:"Kontakt",mnuLeistungen:"Leistungen",mnuNotdienst:"Notdienst",mnuOffnungsZeiten:"Öffnungszeiten",mnuPraxis:"Praxis",mnuStandort:"Standort",praxisDocs:"Ärzteteam der Klinik",praxisTeam:"Das Team der Zahnarztpraxis",mnuAertzte:"Ärtzte",mnuTeam:"Team",mnuTour:"Tour",actNachricht:"Nachricht",dct_name_sa:"Saad Kundakji",dct_name_aa:"Ahmad Alluh",dct_name_aj:"Ayman Jajeh",dct_pos_za:"Zahnarzt",titleServices:"Zahnärztliche Behandlungen",srv_implantologie:"Implantologie",srv_chirurgische:"Chirurgische Leistungen",srv_funkDiag:"Funktionsdiagnostik",titleTour:"Rundgang durch die Klinik",team_pos_ab:"Auszubildende",team_pos_zf:"Zahnmedizinische Fachangestellte",team_name_ma1:"Mustermann Maximilian",day_Mon:"Montag",day_Tus:"Dienstag",day_Wed:"Mittwoch",day_Thu:"Donnerstag",day_Fri:"Feitag",day_Sat:"Samstag",day_Sun:"Sonntag",txt_Closed:"geschlossen",txt_feedback:"Rückmeldung",feedback_1:"Und immer ohne Angst einfach hingehen und man wird schmerzfrei behandelt.",feedback_2:"Das die Ärzte auf Arabisch sprechen stört mich persönlich überhaupt nicht.",feedback_3:"Ich war bei Herr Faress al Maghribi (Partner von Herr Kundakji) sehr guter Arzt."},ar:{appTitle:"عيادة طبيب الأسنان د سعد قندقجى و شركائه ",mnuPraxis:"العيادة",mnuLeistungen:"خدمات",mnuKontakt:"الاتصال",mnuNotdienst:"خدمات الطوارئ",mnuOffnungsZeiten:"أوقات العمل",mnuStandort:"الموقع",praxisDocs:"فريق أطباء العيادة",praxisTeam:"فريق عيادة طب الأسنان",mnuAertzte:"الأطباء",mnuTeam:"فريق",mnuTour:"جولة",actNachricht:"رسالة ",dct_name_sa:"د سعد قندقجى",dct_name_aa:"أحمد اللوح",dct_name_aj:"أيمن جاجه",dct_pos_za:"دكتورالاسنان",titleServices:"علاجات الأسنان",srv_implantologie:"زراعة الأسنان",srv_chirurgische:"الخدمات الجراحية",srv_funkDiag:"التشخيصات الوظيفية",titleTour:"جولة في أرجاء العيادة ",team_pos_ab:"المتدرب",team_pos_zf:"مساعد طبيب الاسنان",team_name_ma1:"نموذج أسم",day_Mon:"الاثنين",day_Tus:"الثلاثاء",day_Wed:"الأربعاء",day_Thu:"الخميس",day_Fri:"الجمعة ",day_Sat:"السبت",day_Sun:"الأحد",txt_Closed:"مغلق",txt_feedback:"تعليقات",feedback_1:"دائمًا اذهب إلى هناك دون خوف وستتم معاملتك بدون ألم",feedback_2:"أن يتحدث الأطباء باللغة العربية لا يزعجني شخصيًا على الإطلاق.",feedback_3:"كان طبيبا جيدا جدا السيد فارس المغربي (شريك السيد قندقجى)"},en:{appTitle:"Dentist clinic Kundakji & Partner",mnuPraxis:"Clinic",mnuLeistungen:"Services",mnuKontakt:"Contact",mnuNotdienst:"Emergency service",mnuOffnungsZeiten:"opening hours",mnuStandort:"Location",praxisDocs:"Medical team of the clinic",praxisTeam:"The Team of the dental Clinic",mnuAertzte:"Doctors",mnuTeam:"Team",mnuTour:"Tour",actNachricht:"Message",dct_name_sa:"Saad Kundakji",dct_name_aa:"Ahmad Alluh",dct_name_aj:"Ayman Jajeh",dct_pos_za:"Dentist",titleServices:"Dental treatments",srv_implantologie:"Implantology",srv_chirurgische:"Surgical services",srv_funkDiag:"Functional diagnostics",titleTour:"Tour around the clinic",team_pos_ab:"trainee",team_pos_zf:"Dental assistant",team_name_ma1:"Sample Maximilian",day_Mon:"Monday",day_Tus:"Tuesday",day_Wed:"Wednesday",day_Thu:"Wednesday",day_Fri:"Friday",day_Sat:"Saturday",day_Sun:"Sunday",txt_Closed:"closed",txt_feedback:"Feedback",feedback_1:"And always just go there without fear and you will be treated painlessly.",feedback_2:"That the doctors speak in Arabic doesn't bother me personally at all.",feedback_3:"Mr. Faress al Maghribi (partner of Mr. Kundakji) was a very good doctor "}},Te=Se;a["a"].config.productionTip=!1,a["a"].use(Me["a"]);var Ve=new Me["a"]({locale:"de",fallbackLocale:"ar",messages:Te});new a["a"]({i18n:Ve,router:we,vuetify:Ce,render:function(t){return t(jt)}}).$mount("#app")},d0b0:function(t,e,i){"use strict";i("0a9d")}});
//# sourceMappingURL=app.8bf7761d.js.map