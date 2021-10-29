<template>
    <v-container fluid style="display: grid !important;justify-content: center;">
  <v-card 
  outlined
  elevation="5"
  width="400">
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
              v-for="day in days"
              :key="day.id"
              :color=getDayColor(day.id) 
              small
            >
              <div>
                <div class="font-weight-normal">
                    <v-row>
                        <v-col>
                            <strong :style="'tex-align:left;color:'+getDayColor(day.id)">{{$i18n.t(day.name)}}</strong>  
                        </v-col>
                        <v-col>
                            <div :style="'tex-align:left;color:'+getDayColor(day.id)" v-for="t in day.time" :key="t">{{$i18n.t(t)}}<br /></div>
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


@Component
export default class Timings extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;

  mounted(){
      console.log("Current day is : " + new Date().getDay());
  }

  getDayColor(dayIndex:number):string{
      let curDay = new Date().getDay();
      return (dayIndex===curDay? 'green':'primary');
  }

  public days= [
        {
          id:1,
          name: 'day_Mon',
          time: ['09:00 - 13:00','15:00 - 18:00'],
          color: 'primary lighten-1',
        },
        {
          id:2,
          name: 'day_Tus',
          time: ['09:00 - 13:00','15:00 - 18:00'],
          color: 'primary lighten-1',
        },
        {
            id:3,
          name: 'day_Wed',
          time: ['09:00 - 13:00'],
          color: 'primary lighten-1',
        },
        {
            id:4,
          name: 'day_Thu',
          time: ['09:00 - 13:00','15:00 - 18:00'],
          color: 'green',
        },
        {
            id:5,
          name: 'day_Fri',
          time: ['09:00 - 13:00'],
          color: 'primary lighten-1',
        },
        {
            id:6,
          name: 'day_Sat',
          time: ['txt_Closed'],
          color: 'primary lighten-1',
        },
        {
            id:7,
          name: 'day_Sun',
          time: ['txt_Closed'],
          color: 'primary lighten-1',
        },

];
}
</script>

<style>

</style>