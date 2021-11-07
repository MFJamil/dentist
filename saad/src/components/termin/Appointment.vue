<template>
  <v-container  style="text-align: center;">
  
    <v-card 
      elevation="5"
      :class="isMobile?'mb-12':''"
      outlined
      :min-height="isMobile?'99vh':'66vh'"
      :min-width="isMobile?'99vw':'60vw'"
      
      >
      <v-progress-linear height="8px" :value="(pr/steps.length)*100"></v-progress-linear>
      <v-card-text>
      <v-stepper 
          min-height="66vh"
          
          :min-width="isMobile?'99vw':'58vw'"
          v-model="pr" 
          :vertical="isMobile"
          >
        <v-stepper-header>
          
          <v-stepper-step
            v-for="step in steps"
            :key="step.val"
            :complete="pr>step.val"
            :step="step.val"
          >
            {{!isMobile?$i18n.t(step.name):''}}
          </v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content :step="step.val"
            min-height="66vh"
            style="height:62vh;"
            v-for="step in steps"
            :key="step.val" >
            <component 
              style="height:55vh;width:58vw;" 
              :is="step.component" 
              :key="step.name" 
              @done="infoUpdated" 
              @cancel="pr=step.val-1" 
              :lang="lang" 
              :isMobile="isMobile" 
              :opts="step.data"
              :optHeight="step.slideHeight"
              :dateInfo="dateInfo"
              :updateField="step.field"
              :message="step.message"
              ></component>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      </v-card-text>
      <v-card-actions>
        <v-spacer /> 
        <v-btn v-show="pr==steps.length" color="success" @click="$emit('doClose',false)">{{$i18n.t('frm_book')}}<v-icon right dark>mdi-sort-calendar-descending</v-icon></v-btn>
        <v-spacer /> 
        
        <v-btn v-show="pr>1" icon :disabled="pr==1"  large @click="pr>1? pr--:1"><v-icon>{{(lang=='ar'?'mdi-arrow-right-circle':'mdi-arrow-left-circle')}}</v-icon></v-btn>
        <v-btn v-show="pr<steps.length" icon :disabled="pr>=steps.length"  large @click="pr<steps.length? pr++:1"><v-icon>{{(lang=='ar'?'mdi-arrow-left-circle':'mdi-arrow-right-circle')}}</v-icon></v-btn>
        <v-btn icon v-show="pr==1"   @click="$emit('doClose',false)"><v-icon>mdi-close</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  
  </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import TreatmentType from './TreatmentType.vue';
import Patient from './Patient.vue';
import Staff from './Staff.vue';
import Insurance from './Insurance.vue';
import Bookings from './Bookings.vue';
import OptionsSlide from './OptionsSilde.vue'
import Confirmation from './Confirmation.vue'


@Component
export default class Appointment extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;

  infoUpdated(){
    this.pr ++;
    console.log("Info Updated : " +  JSON.stringify(this.dateInfo,undefined,1));
  }


  public dateInfo={
    treatment:'',
    hasAccount: false,
    handler:'',
    insurance:'',
    date:''
  };

  public pr=1;
      public treatments = [
        {
            name: 'apt_trt_control',
            pic: 'images/appointment/control.jpg',
            
        },
        {
            name: 'apt_trt_cleaning',
            pic: 'images/appointment/cleaning.jpg',
        },
        {
            name: 'apt_trt_invisalign',
            pic: 'images/appointment/invisalign.jpg',            
            
        },
        {
            name: 'apt_trt_pain',
            pic: 'images/appointment/pain.jpg',            
        },
        {
            name: 'apt_trt_whitening',
            pic: 'images/appointment/whitning.jpg',            
        },
    ];
    public patient = [
        {
            name: 'apt_pnt_exists',
            pic: 'images/appointment/id_card.png',
            
        },
        {
            name: 'apt_pnt_not_exist',
            pic: 'images/appointment/no_id_card.png',
        },
    ];

    public doctors = [
        {
            name: 'txt_quick_apt',
            position: 'dct_pos_za',
            pic: 'images/appointment/speed.png',
        },
        {
            name: 'dct_name_sa',
            position: 'dct_pos_za',
            pic: 'images/saad_1.jpg',
        },
        {
            name: 'dct_name_aa',
            position: 'dct_pos_za',
            pic: 'images/no-profile-pic.jpg',
        },
        {
            name: 'dct_name_aj',
            position: 'dct_pos_za',
            pic: 'images/no-profile-pic.jpg',
        },
    ];
    public insurance = [
        {
            name: 'apt_ins_prv',
            pic: 'images/appointment/private_insurance.png',
            
        },
        {
            name: 'apt_ins_gov',
            pic: 'images/appointment/gov_insurance.png',
            
        },
        {
            name: 'apt_ins_tooth',
            pic: 'images/appointment/tooth_insurance.png',
            
        },
    ];



  public steps=[
    /*
    {       
      val:1,
      name:'stp_type',
      component: TreatmentType,

    },
        { 
      val:2,
      name:'stp_patient',
      component: Patient,

    },
    { 
      val:3,
      name:'stp_staff',
      component: Staff,

    },

    { 
      val:4,
      name:'stp_insurance',
      component: Insurance,

    },

        treatment:'',
    hasAccount: false,
    handler:'',
    insurance:'',
    date:''

    
    */
    
    {       
      val:1,
      name:'stp_type',
      message:'txt_apt_treatType',
      component: OptionsSlide,
      data: this.treatments,
      slideHeight: '120px',
      field:'treatment',


    },

    { 
      val:2,
      name:'stp_patient',
      message:'txt_apt_treatPatient',
      component: OptionsSlide,
      data: this.patient,
      slideHeight: '180px',
      field:'hasAccount',

    },
    { 
      val:3,
      name:'stp_staff',
      message:'txt_apt_treatHandler',
      component: OptionsSlide,
      data: this.doctors,
      slideHeight: '200px',
      field:'handler',


    },
    { 
      val:4,
      name:'stp_insurance',
      message:'txt_apt_insurance',
      component: OptionsSlide,
      data: this.insurance,
      slideHeight: '180px',
      field:'insurance',


    },

    { 
      val:5,
      name:'stp_date',
      component: Bookings,

    },
    { 
      val:6,
      name:'stp_confirm',
      component: Confirmation,

    },


    ];

}
</script>

<style>

</style>