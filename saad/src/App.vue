<template >
<!-- App.vue -->
<!-- base color 011838 -->
<v-app >
  <v-expand-x-transition>
  <Header :isMobile="isOnMobile" :lang="curLang" @action="handleAction"/>
  </v-expand-x-transition>
  <!-- Sizes your content based upon application components -->
  <v-sheet ref="pageBody" id="scroll-target" class="overflow-y-auto scroll-y" max-height="100vh" style="overflow-x: hidden;" v-scroll.self="onScroll">
    
  <v-main >
    
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="scroll-y">

        <!-- If using vue-router -->
        <v-fab-transition >
        <router-view :isMobile="isOnMobile" :lang="curLang"  ></router-view>
        </v-fab-transition>
      </v-container>
   
  </v-main>
    
<Footer  :isMobile="isOnMobile" :lang="curLang" @action="handleAction"/>
<Toolbox @langUpdate="langUpdated" />



      <div class="scrollUpIcon" v-show="showScrollUp" ref="scrEl">
        <v-btn
          color="primary"
          fab
          x-small
          dark
          @click="goUp"
          >
          <v-icon>mdi-arrow-up-bold-outline</v-icon>
        </v-btn>
      </div>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Toolbox from './components/ToolBox.vue';
import webUtils from './utils/WebUtils';
import themHandler from './ThemeHandler';

@Component({
  components: {
    Header,
    Footer,
    Toolbox
  }, 
})

export default class App extends Vue{
  $refs!:{
    pageBody:HTMLElement;
    scrEl:HTMLElement;
  }
  isOnMobile = false;
  curLang = 'de';
  public showScrollUp = false;
  mounted(){
    console.log("Screen Size : " + webUtils.screenSize(this));
    console.log("Is Mobile   : " + webUtils.isMobile(this));
    this.isOnMobile = webUtils.isMobile(this);
    themHandler.activateTheme(this.isOnMobile,false,this.curLang,this);
    this.$refs.scrEl.style.right  = this.isOnMobile?'10px':'30px';
  }

  langUpdated(lang:string){
    this.curLang = lang
  }
  public handleAction(item:any){
    console.log("Handle Action called for : " + JSON.stringify(item) + " holding type " + typeof item);
    if (item.action || typeof item == 'string'){
      let path = item.action?item.action:item;
      console.log("Current path : " + this.$router.currentRoute.path + " new path: " + path);
      if(this.$router.currentRoute.path!=='/'+path)
        this.$router.push(path);
    }
    
  }
  public  onScroll(e:any){
    const top = window.pageYOffset || e.target.scrollTop||0;
    this.showScrollUp = top>0;

  }
  public goUp(){
     document.getElementById('scroll-target')?.scrollTo(0,0);
  }

}
</script>
<style scoped>
.scrollUpIcon{
  position: fixed;
  bottom: 50px;
  right: 30px;


}
</style>
