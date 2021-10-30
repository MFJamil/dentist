<template>
<div>
    <v-system-bar app
        color="primary"
        lights-out
        dark

      >
        <v-spacer></v-spacer>
        <v-icon>mdi-email</v-icon>
        &nbsp; {{ $i18n.t('actNachricht') }}
        <v-spacer></v-spacer>
        <div v-if="isMobile"  @click="$emit('action','/')"> 
          <v-icon> mdi-home</v-icon>
        </div>
        <div v-else class="d-none d-sm-flex">
          <v-icon>mdi-clock-time-eight</v-icon>
          &nbsp; Mo.Di.Do (9 - 13) + (15 - 18)  |  Mi. (9 - 14:30) | Fr. (8 - 13)
        </div>

         <v-spacer></v-spacer>
        <a href="tel:06131229816"><v-icon>mdi-phone-classic</v-icon></a>
        &nbsp; 06131-229816
         
        <v-spacer></v-spacer>
        
      </v-system-bar>
    
    <!--  
      src="https://picsum.photos/1920/1080?random"
      -->
    <v-app-bar app
      
      color="primary"
      dark
      shrink-on-scroll
      prominent
      
      :src=getHeaderPic()
      fade-img-on-scroll
      scroll-target="#pageBody"
      scroll-threshold="500"
    >
    <v-app-bar-nav-icon transition="fade-transition" style="transition-duration:1000ms;"
      v-if="isMobile && showMobileMenu"
      @click.stop="showMobileMenu=false"
    >
      <v-icon>
        mdi-close
      </v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon transition="fade-transition" style="transition-duration:1000ms;"
      v-if="isMobile && !showMobileMenu"
      @click.stop="showMobileMenu=true"
    >
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon v-if="!isMobile" @click="$emit('action','/')"> <v-icon> mdi-home</v-icon> </v-app-bar-nav-icon>
     <v-img
          alt="Zahn Bild"
          :class="['shrink' , 'mr-2' ,'d-none', 'd-sm-flex' , (lang=='ar'?'toothIcon_left':'toothIcon_right')]"
          contain
          src="../assets/tooth.png"
          transition="scale-transition"
          
        />

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      

      <!--<v-app-bar-title :class="isMobile?'bar-title-mobile':''" style="transition-duration: 1000ms !important;">Zahnarzt Praxis Kundakji &amp; Partner</v-app-bar-title>-->
      <v-app-bar-title :class="isMobile?'bar-title-mobile':''" style="transition-duration: 700ms !important;">{{ $i18n.t('appTitle') }}</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!--
      <v-btn icon > 
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      -->

      <template v-if="!isMobile" v-slot:extension>
        <v-tabs align-with-title>
          
          <v-menu
              :close-on-content-click="false"
              open-on-hover
              v-for="(menu,id) in menus"
              :key="id"
              bottom
              origin="center center"
              offset-y
              transition="slide-y-transition"
              :ref="menu.title"
            >
             <template v-slot:activator="{ on,attrs }">
                <v-btn
                  text small
                  v-on="on"
                  v-bind="attrs"
                  width="100px"
                  @mouseover="menuOpened(menu.title)"
                  class="text-capitalize"
                  @click="$emit('action',menu)"
                  
                >
                  {{ $i18n.t(menu.title)}}
                </v-btn>
              </template>
              <v-list dense v-if="menu.subMenu">
                  <template v-for="item in menu.subMenu" >
                    <v-list-item  :key="item.title" link @click="$emit('action',item)"
                      
                    >
                      <v-list-item-icon :style="lang=='ar'?'margin-left:0px !important;':'margin-right:0px !important;'" >
                        <v-icon small :color="item.action.enabled?'primary':'grey'">{{item.icon}}</v-icon>
                      </v-list-item-icon>

                      <v-list-item-title 
                      
                      >{{ $i18n.t(item.title)}}</v-list-item-title>
                      <v-list-item-action-text>{{item.key}}</v-list-item-action-text>
                    </v-list-item>
                  </template>
              </v-list>
            </v-menu>
          <!--
          <v-tab>Leistungen</v-tab>
          <v-tab>Notdienst</v-tab>
          <v-tab>Kontakt</v-tab>
          -->
        </v-tabs>
      </template> 
 </v-app-bar>
  <v-navigation-drawer
      v-model="showMobileMenu"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-group
          v-for="(menu,id) in menus"
          :key="id"
          v-model="menu.active"
          
          no-action
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title @click="$emit('action',menu)" v-text="$i18n.t(menu.title)"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="child in menu.subMenu"
          :key="child.title"
          @click="$emit('action',child)"
        >
        <v-list-item-icon>
          <v-icon
            v-if="child.icon"
          >
            {{child.icon}}
          </v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="$i18n.t(child.title)"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!--
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        -->
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

</div>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import themHandler from '../ThemeHandler';
import vars from '../scss/vars.scss';


@Component
export default class Header extends Vue {
  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang = "de";

  public showMobileMenu = false;
  public totalPics = 11;
  public getHeaderPic():string{
    let path = 'images/header/hpic_' + Math.floor(Math.random() * this.totalPics) + '.jpg';
    console.log("Header pic : " + path);
    return path;

  }
  public openedMenu!:string;
      mounted(){
        console.log("Vars read : " + vars.lang);
      }
        menuOpened(title:string){
         // this.$log.info("Menu is opened : " + title );
          this.openedMenu=title;
        }
        handleAction(action?:string){
          console.log("Handle Action is called for " + action);
        }
        
  public switchLang(){
    themHandler.activateTheme(false,false,this.lang,this);
    this.lang = this.lang==='de'?'ar':'de'; 
  }

public menus=[            {
    id: 'Praxis',
    title: 'mnuPraxis',
    subMenu: [
     {action: 'docs',title: 'mnuAertzte',icon:'mdi-medical-bag'},
     {action: 'team',title: 'mnuTeam'  ,icon:'mdi-account-multiple'},
     {action: 'tour',title: 'mnuTour'  ,icon:'mdi-magnify-plus-outline' },
     
    ]
   },
   {
    id: 'Leistungen',
    title: 'mnuLeistungen',
    action: 'services',
    subMenu: [
     {action: '',title: 'srv_implantologie', icon:'mdi-account-wrench'},
     {action: '',title: 'srv_chirurgische', icon:'mdi-account-wrench'},
     {action: '',title: 'srv_funkDiag', icon:'mdi-account-wrench'},
     {action: '',title: 'srv_generalDiag', icon: 'mdi-account-wrench'},
     {action: '',title: 'srv_cosmetic', icon:'mdi-account-wrench'},
     
     /*
     {action: '',title: 'Vorsorge', icon: 'mdi-account-wrench'},
     {action: '',title: 'Cerec', icon: 'mdi-account-wrench'},
     {action: '',title: 'Hahnerhaltung', icon: 'mdi-account-wrench'},
     {action: '',title: 'Patenschaft', icon: 'mdi-account-wrench'},
     */

    ]
   },
   {
    id: 'Kontakt',
    title: 'mnuKontakt',
    subMenu: [
     {action: 'location',title: 'mnuStandort'      ,icon: 'mdi-map-marker'},
     {action: 'timings',title: 'mnuOffnungsZeiten',icon: 'mdi-clock-time-five-outline'},
    ]
   },
   {
    id: 'Notdienst',
    title: 'mnuNotdienst',
    action: 'emergency'
   },

];
}
</script>

<style lang="scss" scoped>

  

@mixin baseTitle(){
    margin-bottom: .5rem;
    font-family: poppins,sans-serif;
    font-weight: 700 !important;
    line-height: 1.3 ;
    text-overflow: clip !important;
    overflow: visible !important;
    width: 600px;
    font-size: var(--app-bar-title-size) !important ;
    text-shadow: 2px 2px 2px rgb(0 0 0 / 10%);
}
.v-app-bar-title__content {
    @include baseTitle();
    left: var(--app-bar-title-left);
}

.v-app-bar-title__placeholder {
    @include baseTitle();
    top: 10px;
    position: relative;
}

.bar-title-mobile{
  font-size: 18px !important ;
}

@mixin toothIcon(){
  position:fixed !important;
  bottom:20px;
  width: 40px;
}

.toothIcon_left{
  @include toothIcon();
    left:20px;  
}

.toothIcon_right{
  @include toothIcon();
    right:20px;  
}

</style>
