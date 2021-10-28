<template>
    <v-container  style="text-align: center;">
        <Doctors />
    <br />
    <br />
    <br />
    <br />
        <Services />
    <br />
    <br />
    <br />
    <br />
        <Tour :slideOnly="isMobile"/>
    </v-container> 
   

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Doctors from './Doctors.vue';
import Services from './Services.vue';
import Tour from './Tour.vue';

@Component({
  components: {
    Doctors,
    Services,
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