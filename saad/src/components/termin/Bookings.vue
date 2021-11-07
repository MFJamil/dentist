<template>
    <v-container  style="width:100% !important;text-align: center;" fluid >
        <h3 class="section-title" :style="!isMobile?'padding-bottom:50px;':'font-size:12px !important;'">{{$i18n.t('txt_apt_treatDate')}}</h3>
        
        <v-row class="fill-height">
            <v-col>
            <v-sheet height="64">
                <v-toolbar
                flat
                >
                
                <v-btn
                    fab
                    text
                    :small="!isMobile"
                    :x-small="isMobile"
                    color="grey darken-2"
                    @click="prev"
                >
                    <v-icon small>
                    {{lang=='ar'?'mdi-chevron-right':'mdi-chevron-left'}}
                    </v-icon>
                </v-btn>
                <v-btn
                    fab
                    text
                    :small="!isMobile"
                    :x-small="isMobile"
                    color="grey darken-2"
                    @click="next"
                >
                    <v-icon small>
                    {{lang=='ar'?'mdi-chevron-left':'mdi-chevron-right'}}
                    </v-icon>
                </v-btn>
                <v-toolbar-title :style="'color:' + titleColor + ';' + (isMobile?'font-size:12px !important':'')" >
                    {{ title }} <v-icon small :style="lang=='ar'?'right:-8px;':'left:-8px;'" v-if="datesNo>0" color="green">mdi-chevron-double-down</v-icon>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
                <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                type="category"
                category-show-all

                :weekday-format="getWeekDayFormat"
                :categories="categories"
                :events="events"
                :event-color="getEventColor"
                @change="fetchEvents"
                @click:event="showEvent"
                ></v-calendar>
            </v-sheet>
            </v-col>
        </v-row>            
    </v-container>

</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Bookings extends Vue {
    $refs!:{
        calendar:any;
    }
      public events:any[] = [


      ];
      public colors= ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'];
      public names = ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'];
      public categories:any[]= ['Free'];


  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
  @Prop()
  public dateInfo!:any;

  public focus='';
  public title = '';
  public titleColor = 'red';
  public datesNo = 0;
  public selectedDate!:any;

  mounted(){
      this.$refs.calendar.checkChange();
      let now = new Date();
      this.updateTitle(now.getMonth(),now.getFullYear(),now.getDate());
  }

  public prev () {
    this.$refs.calendar.prev();
  }
  public next () {
     this.$refs.calendar.next();
   }

  public createApt(title:string,startD:Date,endD:Date){
        return {
                name: title ,
                start: startD,
                end: endD,
                color: 'blue',
                timed: true,
                category: 'Free',
            };
  }

  public addDemoDates(){
         // Two dates for today 
         let st1 = new Date();st1.setHours(13);st1.setMinutes(30);
         let en1 = new Date();en1.setHours(14);en1.setMinutes(30);
         this.events.push(this.createApt('13:30',st1,en1))
         let st2 = new Date();st2.setHours(15);st2.setMinutes(30);
         let en2 = new Date();en2.setHours(16);en2.setMinutes(30);
         this.events.push(this.createApt('15:30',st2,en2))

         let st3= new Date();st3.setDate(st3.getDate()+1); st3.setHours(10);st3.setMinutes(30);
         let en3 = new Date();en3.setDate(en3.getDate()+1);en3.setHours(11);en3.setMinutes(30);
         this.events.push(this.createApt('10:30',st3,en3))
         let st4= new Date();st4.setDate(st4.getDate()+2); st4.setHours(9);st4.setMinutes(30);
         let en4 = new Date();en4.setDate(en4.getDate()+2);en4.setHours(10);en4.setMinutes(30);

         this.events.push(this.createApt('09:30',st4,en4))

         
         //this.events.push(this.createApt('13:30',new Date().setHours(13),new Date().setHours(14)))
         


  }

  private sameDay(first:Date,second:Date){
      return first.getFullYear() === second.getFullYear() &&
             first.getMonth() === second.getMonth() &&
             first.getDate() === second.getDate();
  }

  public fetchEvents(info:any):any{
     console.log("Checking changes for " + info.start.date + " - " + info.end.date);
     // Below is a demo Info, should be replaced later on with real information
     
     if (this.events.length==0){
        this.addDemoDates();
        /*
        this.events.push({
                name: '13:30',
                start: Date.parse("2021-11-04T13:30:00.000Z"),
                end: Date.parse("2021-11-04T14:00:00.000Z"),
                color: 'blue',
                timed: true,
                category: 'Free',
            });
        this.events.push({
                name: '15:30',
                start: Date.parse("2021-11-04T15:30:00.000Z"),
                end: Date.parse("2021-11-04T16:00:00.000Z"),
                color: 'blue',
                timed: true,
                category: 'Free',
            });
        */
     }
     return this.events;
  }

   getEventColor (event:any) {
        return event.color
    }

    getWeekDayFormat(val:any){
        console.log(val);
        this.updateTitle(val.month,val.year,val.day);
        return this.$i18n.t(this.days[val.weekday]);

    }
    updateTitle(month:number,year:number,day:number){
        console.log("Updating the title for : " + year + " , " + month );
        let newDate = new Date(year,month-1,day,0,0,0);
        this.datesNo = this.events.filter(e=> this.sameDay(e.start,newDate)).length;
        this.titleColor = this.datesNo>0?'green':'red';
        this.title = this.$i18n.t('month_' + [month]) + " - " + year + "      " + (this.datesNo>0?this.datesNo :'');
    }
    getMonthText(val:any){
        console.log("GetMonthText is called");
        console.log(val);
        return this.$i18n.t(this.days[val.weekday]);

    }

    showEvent (evt:any) {
        //{ nativeEvent, event }
        console.log("Show Event is called");
        console.dir(evt);
        console.log ("You picked following time : " +  evt.event.name);
        //console.dir (evt.nativeEvent.target);
        //console.dir (evt.nativeEvent);
        //console.log("Search result is : " );
        if (this.selectedDate!==undefined)
            this.selectedDate.color="blue";
        this.selectedDate  = evt.event;
        this.selectedDate.color="green";
        //console.dir(this.events.find(curEv => curEv===evt.event));
        this.dateInfo.date = evt.event.start;
        console.dir (evt.event);
        this.$emit('done', 1);


    }

    public days=[
        'day_Sun',
        'day_Mon',
        'day_Tus',
        'day_Wed',
        'day_Thu',
        'day_Fri',
        'day_Sat',
    ];

public treatments = [
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



}
</script>
<style lang="scss" scoped>
    .treatmentTitle{
        word-break: break-word !important;
        cursor:pointer;
        font-size: 14px;
        color:var(--v-primary-base);
    }
    .treatmentTitle:hover{
        color: red;
        
    }

    .v-card.on-hover.theme--dark{
        background-color: rgba(#FFF, 0.8);
        .v-card__title{
            color: #000 !important;
        }
    }
  
  
    
</style>
<style>


</style>