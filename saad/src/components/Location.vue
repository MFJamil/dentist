<template>
    <v-container  style="text-align: center;" fluid>
        <h1 class="section-title">{{$i18n.t('titleOrt')}}</h1>
        <div style="height:50px;"></div>
        <v-row>
            <v-col style="justify-content:left;text-center:left;">
                <v-card
                    class="mx-auto"
                    max-width="310"
                    :width="isMobile?'96vw':'400'"
                    elevation="6"

                >
                    <v-img
                    src="images/location/praxis_mainz.jpg"
                    height="340px"
                    ></v-img>

                    <v-card-title style="font-size: 16px;justify-content:center !important;">
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
                    :height="mapHeight"
                    :width="mapWidth"
                    >
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe :width="mapWidth" :height="mapHeight" id="gmap_canvas"
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
  public mapHeight = this.isMobile?400:500;
  public mapWidth = this.isMobile?310:600;
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
.mapouter{position:relative;text-align:right;height:var(--gmap-height);width:var(--gmap-width);}
.gmap_canvas {overflow:hidden;background:none!important;height:var(--gmap-height);width:var(--gmap-width);}
</style>