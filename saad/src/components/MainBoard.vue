<template>
    <v-container  style="text-align: center;">
        <Doctors />
    <br />
    <br />
    <br />
    <br />
        <Services />


    <v-card
       style="margin-top: 1500px;"
        class="mx-auto"
        max-width="344"
    >
        <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        ></v-img>

        <v-card-title>
        Top western road trips
        </v-card-title>

        <v-card-subtitle>
        1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
        <v-btn
            color="orange lighten-2"
            text
        >
            Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>

        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>

    </v-container> 
   

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Doctors from './Doctors.vue';
import Services from './Services.vue';

@Component({
  components: {
    Doctors,
    Services
  }, 
})
export default class MainBoard extends Vue {
  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang = "de";


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