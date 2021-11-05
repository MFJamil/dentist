<template>
  <v-container fluid style="display: grid !important;justify-content: center;">
    
      <div class="compareCont">
          
      <PicCompare :isMobile="isMobile" :lang="lang" 
        :pic1="'images/services/implantology/case_1_after.png'"
        :pic2="'images/services/implantology/case_1_before.png'"
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
        <h3 class="section-title" style="color:var(--v-primary-base);">{{$i18n.t('srv_implantologie')}}</h3>
        <br />
        <p :style="'width:60vw;text-align:' + (lang=='ar'?'right':'left')">
            <span v-show="lang=='de'">
                Als Implantat bezeichnet man in der Zahnheilkunde eine künstliche Zahnwurzel. Sie wird dauerhaft im Kieferknochen verankert und muss die tägliche Kaubelastung wie eine natürliche Zahnwurzel problemlos aushalten. Implantate bestehen in der Regel aus Titan, einem gewebefreundlichen Material, das keine allergischen Reaktionen auslöst. Damit Kieferknochen und Implantat zu einer stabilen und sicheren Einheit zusammenwachsen können, ist die Oberfläche der künstlichen Zahnwurzel angeraut. Implantate werden eingesetzt bei Einzelzahnersatz, verkürzten Zahnreihen und im Fall einer Totalprothetik.
            </span>
            <span v-show="lang=='en'">
            In dentistry, an implant is an artificial tooth root. It is permanently anchored in the jawbone and has to withstand the daily chewing load like a natural tooth root without any problems. Implants are usually made of titanium, a tissue-friendly material that does not cause allergic reactions. The surface of the artificial tooth root is roughened so that the jawbone and implant can grow together to form a stable and safe unit. Implants are used for single tooth replacements, shortened rows of teeth and in the case of full dentures.
            </span>

            <span v-show="lang=='ar'">
                في طب الأسنان ، الزرع هو جذر سن صناعي. يتم تثبيته بشكل دائم في عظم الفك ويجب أن يتحمل عبء المضغ اليومي مثل جذر الأسنان الطبيعي دون أي مشاكل. تصنع الغرسات عادة من التيتانيوم ، وهو مادة صديقة للأنسجة ولا تسبب تفاعلات حساسية. يتم تقوية سطح جذر السن الاصطناعي بحيث يمكن أن ينمو عظم الفك والغرسة معًا لتشكيل وحدة مستقرة وآمنة. تُستخدم الغرسات لاستبدال الأسنان الواحدة والصفوف المختصرة من الأسنان وفي حالة أطقم الأسنان الكاملة.
            </span>

        </p>
      </div>
      <div >
        <v-btn  elevation="5" color="primary">
          <v-icon left>mdi-calendar-plus</v-icon>
              {{$i18n.t('txtBooking')}}
        </v-btn>
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
export default class Implantology extends Vue {

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