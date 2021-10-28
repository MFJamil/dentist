<template>
    <v-container  style="text-align: center;" fluid>
        <h1 class="section-title">{{$i18n.t('praxisDocs')}}</h1>
        <br />

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
    </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Doctors extends Vue {

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

</style>