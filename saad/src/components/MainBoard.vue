<template>
    <v-container  style="text-align: center;">
        <v-row>
            <v-col>
                <v-btn  elevation="5" color="primary" @click="showBooking=true">
                <v-icon left>mdi-calendar-plus</v-icon>
                    {{$i18n.t('txtBooking')}}
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="24" >
                <Feedback :isMobile="isMobile" :lang="lang" />
            </v-col>
            <v-col>
                <Timings :isMobile="isMobile" :lang="lang" />
            </v-col>
        </v-row>
        
        <div style="height:150px;"></div>
        <v-divider></v-divider>
        <div style="height:150px;"></div>
        <v-row>
            <v-col>
                <Doctors :isMobile="isMobile" :lang="lang" />
            </v-col>
        </v-row>
        <div style="height:150px;"></div>
        
        <v-row>
            <v-col>
                <Services :isMobile="isMobile" :lang="lang" @action="$emit('action',$event)" />
            </v-col>
        </v-row>
        <div style="height:150px;"></div>
        <v-row>
            <v-col>
                <Team  :isMobile="isMobile" :lang="lang" />
            </v-col>
        </v-row>
        <div style="height:150px;"></div>
        <v-row>
            <v-col>
                <GalaryCarousel :slideOnly="isMobile" :isMobile="isMobile" :lang="lang"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn  elevation="5" color="primary">
                <v-icon left>mdi-calendar-plus</v-icon>
                    {{$i18n.t('txtBooking')}}
                </v-btn>
            </v-col>
        </v-row>
    <v-dialog 
        v-if="!isMobile"
        min-height="66vh"
        min-width="67vw"
        width="65vw"
        v-model="showBooking" >
        <Appointment :isMobile="isMobile" :lang="lang" @doClose="showBooking=false"/>
    </v-dialog>
    <v-dialog
        v-if="isMobile" 
        fullscreen
        v-model="showBooking" >
        <MAppointment :isMobile="isMobile" :lang="lang" @doClose="showBooking=false"/>
    </v-dialog>

     <!--
    <v-dialog 
        v-if="isMobile"
        style="position:fixed;left:0px;top:0px;"
        fullscreen
        v-model="showBooking" >
        <Appointment :isMobile="isMobile" :lang="lang" @doClose="showBooking=false"/>
    </v-dialog>
    -->
     

    </v-container> 
   

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Doctors from './Doctors.vue';
import Team from './Team.vue';
import Services from './service/Services.vue';
import Appointment from './termin/Appointment.vue';
import MAppointment from './termin/MAppointment.vue';
import GalaryCarousel from './GalaryCarousel.vue';
import Timings from './Timings.vue';
import Feedback from './Feedback.vue';

@Component({
  components: {
    Doctors,
    Team,
    Services,
    Timings,
    Feedback,
    GalaryCarousel,
    Appointment,
    MAppointment
    
  }, 
})
export default class MainBoard extends Vue {
  @Prop({default:false})
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
    public showBooking = false;
    e6=1;
    public show = false;
    public doctors = [
        {
            name: 'dct_name_sa',
            position: 'dct_pos_za',
            pic: 'images/saad_1.jpg',
        },
        {
            name: 'dct_name_aa',
            position: 'dct_pos_za',
            pic: 'https://cdn.vuetifyjs.com/images/john.jpg',
        },
        {
            name: 'dct_name_aj',
            position: 'dct_pos_za',
            pic: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },


];

}
</script>

<style>

</style>