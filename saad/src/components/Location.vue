<template>
    <v-container  style="text-align: center;" fluid>
        <h1 class="section-title">{{$i18n.t('titleOrt')}}</h1>
        <div style="height:50px;"></div>
        <v-row>
            <v-col style="justify-content:left;text-center:left;">
                <v-card
                    class="mx-auto"
                    max-width="360"
                    elevation="6"

                >
                    <v-img
                    src="images/location/praxis_mainz.jpg"
                    height="340px"
                    ></v-img>

                    <v-card-title>
                     Zahnarzt Praxis Kundakji &amp; Parnter
                    </v-card-title>

                    <v-card-subtitle>
                    <v-icon>mdi-map-marker</v-icon>&nbsp;Münsterpl. 1, 55116 Mainz
                    </v-card-subtitle>

                </v-card>
            </v-col>

            <v-col>
                <v-sheet
                    color="white"
                    elevation="6"
                    height="500"
                    width="600"
                    >
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=kundakji%20und%20par&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                            <a href="https://vincheckeurope.eu">vincheckeurope.eu</a>
                            <br>
                            <a href="https://embedmaps.info">Embed Google Maps</a>
                        </div>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        <!--
        <div v-if="!isMobile">
            <v-row>
                <v-col v-for="(doc,id) in doctors" :key="id" :id="id">
                    <v-card
                        class="mx-auto text-center"
                        max-width="250"
                        outlined
                        elevation="5"
                        shaped
                        
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
        </div>
        <div v-if="isMobile">
            <v-row v-for="(doc,id) in doctors" :key="id" :id="id">
                <v-col >
                    <v-card
                        class="mx-auto text-center"
                        max-width="250"
                        outlined
                        shaped
                        

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
        </div>
        -->
    </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Location extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
    public doctors = [
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

}
</script>

<style>
.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
</style>