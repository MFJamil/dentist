<template>
  <v-container fluid style="display: grid !important;justify-content: center;">
    
      <div class="compareCont">
          
      <PicCompare :isMobile="isMobile" :lang="lang" 
        :pic1="'images/services/teethCleaning/case_1_after.png'"
        :pic2="'images/services/teethCleaning/case_1_before.png'"
        />
      
<!--
      <div class="img-comp-container">
        <div class="img-comp-img">
            <img src="images/services/implantology/case_1_before.png" width="300" height="200">
        </div>
        <div class="img-comp-img img-comp-overlay">
            <img src="images/services/implantology/case_1_after.png" width="300" height="200">
        </div>
        </div>
        -->
      </div>
        <div class="compareCont">
      <div style="width: 60vw;">
        <h3 class="section-title" style="color:var(--v-primary-base);">{{$i18n.t('txt_cleaning_title')}}</h3>
        <br />
        <p :style="'width:60vw;text-align:' + (lang=='ar'?'right':'left')">
            <span v-show="lang=='de'">
                Die professionelle Zahnreinigung, auch PZR oder Prophylaxe genannt, hat einen sowohl optischen als auch gesundheitlichen Nutzen.
            </span>
            <span v-show="lang=='en'">
            Professional teeth cleaning, also called PZR or prophylaxis, has both visual and health benefits
            </span>

            <span v-show="lang=='ar'">
                تنظيف الأسنان الاحترافي ، الذي يُطلق عليه أيضًا PZR أو الوقاية ، له فوائد بصرية وصحية.
            </span>

        </p>
      </div>
      </div>
  </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PicCompare from '../PicCompare.vue';

@Component({
  components: {
  PicCompare  
  }})
export default class ToothCleaning extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;

}
</script>

<style scoped>
.compareCont{
    width:100vw;
    
    display: flex;
    justify-content: center;
    align-items: center;
    

}


</style>