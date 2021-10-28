<template>
    <v-container  style="text-align: center;">
        <v-row>
            <v-col cols="24" >

                <h3 style="direction:rtl;margin-top:250px;font-size:30px;">{{$i18n.t('txt_feedback')}}</h3>
                <p style="margin-top:30px;">
                    "{{$i18n.t('feedback_1')}}"
                </p>
                <p>
                    "{{$i18n.t('feedback_2')}}"
                </p>
                <p>
                    "{{$i18n.t('feedback_3')}}"
                </p>
                
            </v-col>
            <v-col>
                <Timings />
            </v-col>
        </v-row>
        
        <div style="height:150px;"></div>
        <v-divider></v-divider>
        <div style="height:150px;"></div>
        <v-row>
            <v-col>
                <Doctors />
            </v-col>
        </v-row>
        <div style="height:150px;"></div>
        
        <v-row>
            <v-col>
                <Services />
            </v-col>
        </v-row>
        <div style="height:150px;"></div>
        <v-row>
            <v-col>
                <Team />
            </v-col>
        </v-row>
        <div style="height:150px;"></div>
        <v-row>
            <v-col>
                <Tour :slideOnly="isMobile"/>
            </v-col>
        </v-row>
        
    </v-container> 
   

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Doctors from './Doctors.vue';
import Team from './Team.vue';
import Services from './Services.vue';
import Tour from './Tour.vue';
import Timings from './Timings.vue';

@Component({
  components: {
    Doctors,
    Team,
    Services,
    Timings,
    Tour
  }, 
})
export default class MainBoard extends Vue {
  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;


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