<template>
    <v-container 
    
    style="text-align: center;">
        <h1 class="section-title">{{$i18n.t('praxisTeam')}}</h1>
        <br />

    <v-row>
        <v-col   v-for="(doc,id) in doctors" :key="id" :id="id">

            <v-card
                class="mx-auto text-center"
                max-width="250"
                outlined
                shaped
                flat

            >
            <v-responsive class="pt-4">
                <v-avatar size="150" rounded class="grey lighten-2">
                <img
                :src="doc.pic"
                height="150px"
                
                />
                </v-avatar>
            </v-responsive>

                <v-card-title primary-title class="justify-center" style="word-break: break-word !important;">
                {{$i18n.t(doc.name)}}
                </v-card-title>

                <v-card-subtitle style="text-weight:bold !important;">
                {{$i18n.t(doc.position)}}
                </v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
    
    <v-spacer />
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
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class MainBoard extends Vue {
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