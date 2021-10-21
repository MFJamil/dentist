<template>
<div>
    <v-system-bar app
        color="primary"
        lights-out
        dark

      >
        <v-spacer></v-spacer>
        <v-icon>mdi-email</v-icon>
        Nachricht
        <v-spacer></v-spacer>
        <div class="d-none d-sm-flex">
        <v-icon>mdi-clock-time-eight</v-icon>
         Mo.Di.Do (9 - 13) + (15 - 18)  |  Mi. (9 - 14:30) | Fr. (8 - 13)
        </div>
         <v-spacer></v-spacer>
        <a href="tel:06131229816"><v-icon>mdi-phone</v-icon></a>
        06131-229816
         
        <v-spacer></v-spacer>
        
      </v-system-bar>
    <v-app-bar app
      
      color="primary"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#pageBody"
      scroll-threshold="500"
    >
    <v-app-bar-nav-icon
        @click="switchLang();"
      > 
      </v-app-bar-nav-icon>
     <v-img
          alt="Zahn Bild"
          class="shrink mr-2 d-none d-sm-flex toothIcon"
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
      <v-app-bar-title :class="isMobile?'bar-title-mobile':''" style="transition-duration: 1000ms !important;">{{ $i18n.t('appTitle') }}</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
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
                  
                  
                >
                  {{ $i18n.t(menu.title)}}
                </v-btn>
              </template>
              <v-list dense>
                  <template v-for="item in menu.subMenu" >
                    <v-list-item  :key="item.title" link @click="handleAction(item.action.Aktion)" 
                      
                    >
                      <v-list-item-icon >
                        <v-icon small :color="item.action.enabled?'primary':'grey'">{{item.icon}}</v-icon>
                      </v-list-item-icon>

                      <v-list-item-title style="position:relative;left:-30px;"
                      
                      >{{item.title}}</v-list-item-title>
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

</div>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import themHandler from '../ThemeHandler';

@Component
export default class Header extends Vue {
  @Prop()
  public isMobile! :boolean;
  public lang = "de";
  public openedMenu!:string;
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
     {action: '',title: 'Ärtzte',icon:'mdi-medical-bag'},
     {action: '',title: 'Team'  ,icon:'mdi-account-multiple'},
     {action: '',title: 'Tour'  ,icon:'mdi-magnify-plus-outline' },
     
    ]
   },
   {
    id: 'Leistungen',
    title: 'mnuLeistungen',
    subMenu: [
     {action: '',title: 'Implantologie', icon:'mdi-account-wrench'},
     {action: '',title: 'Chirurgische Leistungen', icon:'mdi-account-wrench'},
     {action: '',title: 'Funktionsdiagnostik', icon:'mdi-account-wrench'},
     {action: '',title: 'Allgemeine Diagnostik', icon: 'mdi-account-wrench'},
     {action: '',title: 'Kosmetische Leistungen', icon:'mdi-account-wrench'},
     {action: '',title: 'Vorsorge', icon: 'mdi-account-wrench'},
     {action: '',title: 'Cerec', icon: 'mdi-account-wrench'},
     {action: '',title: 'Hahnerhaltung', icon: 'mdi-account-wrench'},
     {action: '',title: 'Patenschaft', icon: 'mdi-account-wrench'},

    ]
   },
   {
    id: 'Kontakt',
    title: 'mnuKontakt',
    subMenu: [
     {action: '',title: 'Standort'      ,icon: 'mdi-map-marker'},
     {action: '',title: 'Öffnungszeiten',icon: 'mdi-clock-time-five-outline'},
    ]
   },
   {
    id: 'Notdienst',
    title: 'mnuNotdienst',
    subMenu: [
     {action: '',title: 'Standort'      ,icon: 'mdi-phone'},
     {action: '',title: 'Öffnungszeiten',icon: 'mdi-phone'},
    ]
   },

];
}
</script>

<style lang="scss" scoped>

  @import '../scss/variables.scss';

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
.toothIcon{
  position:fixed !important;
  @debug "Testing debug :  #{$lang}";
  @if $lang == ar {
    left:20px;  
  }@else{
    right:20px;  
  }
  
  top:50px;
  width: 40px;


}
</style>
