<template>
  <div ref="toolBoxCont" id="toolBoxCont" v-click-outside="outsideClick">
      <!--<li class="['mr-2','em','em-flag-ae']"></li>-->
      <div id="tlbIcon" @click="handleVisibility" ><v-icon dark>{{panelIcon}}</v-icon></div>
      <div class="group"> 
        <!--
            <li class="mr-2 em em-flag-sa langItem" @click="switchLang('ar');" ><img src="../assets/saudi-arabia.png"  class="flagIcon" /></li>
            <li class="mr-2 em em-flag-de langItem" @click="switchLang('de');"></li>
            <li class="mr-2 em em-flag-gb langItem" @click="switchLang('en');"></li>
            -->
            <img src="../assets/saudi-arabia.png"  class="flagIcon"  @click="switchLang('ar');"/>
            <img src="../assets/germany.png"  class="flagIcon"  @click="switchLang('de');"/>
            <img src="../assets/united-kingdom.png"  class="flagIcon"  @click="switchLang('en');"/>
      </div>
      

  </div>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import themHandler from '../ThemeHandler';
import vars from '../scss/vars.scss';

@Component
export default class Toolbox extends Vue {
  $refs!:{
    toolBoxCont:HTMLElement;
  }

    public isShown = false;
    public panelIcon = 'mdi-web';
    public toolBoxCont! :HTMLElement;


    switchLang(lang:string){
        themHandler.activateTheme(false,false,lang,this);
        vars.lang = lang;
        this.$emit('langUpdate',lang);

    }
    outsideClick(){
      if (this.isShown) this.handleVisibility();

    }
    handleVisibility(){
      console.log("Check Visibility is called " + this.isShown);
      console.dir(this.$refs.toolBoxCont);
      if (this.isShown){
        this.panelIcon = 'mdi-web';
        this.$refs.toolBoxCont.classList.remove("slideRight");
      }else{
        this.panelIcon = 'mdi-arrow-left-bold-outline';
        this.$refs.toolBoxCont.classList.add("slideRight");
      }
      this.isShown = !this.isShown;

    }
}
</script>

<style lang="scss" scoped>
    #tlbIcon{
        position: absolute;
        right: 5px;
        top: 10px;
        cursor: pointer;

    }
    #toolBoxCont{
        position: fixed;
        bottom: 50px;
        left: -140px;
        width: 170px;
        height: 45px;
        border-top-right-radius: 10px;
        
        border: 1px solid var(--v-primary-lighten5);
        padding: 4px;
        background-color: var(--v-primary-base);
        transition-duration: 1000ms;
        z-index: 50000;


    }
    #toolBoxCont:hover1{
        padding: 4px;
        left: -10px;

    }
    .slideRight{
        padding: 4px !important;
        left: -10px !important;

    }
    .group{
        left: 30px !important;
        top: 10px;
        position: absolute !important;
        display: flex;

    }
    .flagIcon{
      width: 24px;
      height: 24px;
      cursor: pointer;
      margin-right: 4px;
      margin-left: 4px;

    }
    .langItem{
        background-color: transparent !important;
        cursor: pointer;

    }
</style>