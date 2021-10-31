<template>
    <v-container fluid style="display: grid !important;justify-content: center;">
  <v-card 
  outlined
  elevation="5"
  :width="mob?'96vw':'400'">
        <v-img
          height="150px"
          src="images/time.jpg"
        >
          <v-card-title color="primary" class="mt-8">
            <p class="ml-3">
              {{$i18n.t('mnuOffnungsZeiten')}}
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="(day,id) in days"
              :key="id"
              :color=getDayColor(day.value) 
              small
            >
              <div>
                <div class="font-weight-normal">
                    <v-row>
                        <v-col>
                            <strong :style="'tex-align:left;color:'+getDayColor(day.value)">{{$i18n.t(day.name)}}</strong>  
                        </v-col>
                        <v-col>
                            <div :style="'tex-align:left;color:'+getDayColor(day.value)" v-for="t in day.time" :key="t">{{$i18n.t(t)}}<br /></div>
                        </v-col>
                    </v-row>
                </div>
                
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
     </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import webUtils from '../utils/WebUtils';
@Component
export default class Timings extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
  public mob = false;
  mounted(){
      console.log("Current day is : " + new Date().getDay());
      this.mob = webUtils.isMobile(this);
  }

  getDayColor(dayIndex:number):string{
      let curDay = new Date().getDay();
      let color = 'primary';
      if (dayIndex===curDay){
          let targetDay = this.days.filter(d => d.value===dayIndex)[0];
          if (targetDay.time[0]==='txt_Closed') color = 'red';
          else color ='green';
      }
      return color;
  }

  public days= [
        {
          value:1,
          name: 'day_Mon',
          time: ['09:00 - 13:00','15:00 - 18:00'],
          color: 'primary lighten-1',
        },
        {
          value:2,
          name: 'day_Tus',
          time: ['09:00 - 13:00','15:00 - 18:00'],
          color: 'primary lighten-1',
        },
        {
            value:3,
          name: 'day_Wed',
          time: ['09:00 - 13:00'],
          color: 'primary lighten-1',
        },
        {
            value:4,
          name: 'day_Thu',
          time: ['09:00 - 13:00','15:00 - 18:00'],
          color: 'green',
        },
        {
            value:5,
          name: 'day_Fri',
          time: ['09:00 - 13:00'],
          color: 'primary lighten-1',
        },
        {
            value:6,
          name: 'day_Sat',
          time: ['txt_Closed'],
          color: 'primary lighten-1',
        },

        {
            value:0,
          name: 'day_Sun',
          time: ['txt_Closed'],
          color: 'primary lighten-1',
        },


];
}
</script>

<style>

</style>