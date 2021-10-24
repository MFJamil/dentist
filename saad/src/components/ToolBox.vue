<template>
  <div id="toolBoxCont">
      <!--<li class="['mr-2','em','em-flag-ae']"></li>-->
      <div id="tlbIcon"><v-icon dark>mdi-account-cog</v-icon></div>
      <div class="group"> 
            <li class="mr-2 em em-flag-sa langItem" @click="switchLang('ar');" ></li>
            <li class="mr-2 em em-flag-de langItem" @click="switchLang('de');"></li>
            <li class="mr-2 em em-flag-gb langItem" @click="switchLang('en');"></li>
            <!--          
       <v-btn-toggle
          multiple
        >

          <v-btn class="btnTr">
            <li class="mr-2 em em-flag-sa"></li>
          </v-btn>
          <v-btn class="btnTr">
            <li class="mr-2 em em-flag-de"></li>
          </v-btn>
          <v-btn class="btnTr">
            <li class="mr-2 em em-flag-gb"></li>
          </v-btn>
        </v-btn-toggle>
          -->

      </div>
      

  </div>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import themHandler from '../ThemeHandler';

@Component
export default class Toolbox extends Vue {
    switchLang(lang:string){
        themHandler.activateTheme(false,false,lang,this);

    }
}
</script>

<style lang="scss" scoped>
    #tlbIcon{
        position: absolute;
        right: 5px;
        top: 10px;

    }
    #toolBoxCont{
        position: fixed;
        bottom: 50px;
        left: -220px;
        width: 250px;
        height: 45px;
        border-top-right-radius: 10px;
        
        border: 1px solid var(--v-primary-lighten5);
        padding: 4px;
        background-color: var(--v-primary-base);
        transition-duration: 1000ms;
        z-index: 50000;

    }
    #toolBoxCont:hover{
        padding: 4px;
        left: -10px;

    }
    .group{
        left: 30px !important;
        top: 10px;
        position: absolute !important;

    }
    .langItem{
        background-color: transparent !important;
        cursor: pointer;

    }
</style>