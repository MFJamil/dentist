<template>
    <v-container  style="text-align: center;">
        <h1 class="section-title">{{$i18n.t('titleServices')}}</h1>
        <br />

        <div v-if="!isMobile">
            <v-row>
                <v-col v-for="(service,id) in services" :key="id" :id="id">
                    <v-card
                        class="mx-auto text-center"
                        max-width="250"
                        outlined
                        shaped
                        elevation="5"
                        
                    >
                        <v-img
                        :src="service.pic"
                        height="150px"
                        
                        />
                        <v-card-title 
                        
                        primary-title
                        class="justify-center" 
                        style="word-break: break-word !important;cursor:pointer;color:var(--v-primary-base);"
                        @click="$emit('action', service.action)">
                        {{$i18n.t(service.name)}}
                        </v-card-title>

                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div v-if="isMobile">
            <v-row v-for="(service,id) in services" :key="id" :id="id">
                <v-col >
                    <v-card
                        class="mx-auto text-center"
                        max-width="250"
                        outlined
                        shaped
                        flat

                    >
                        <v-img
                        :src="service.pic"
                        height="150px"
                        
                        />

                        <v-card-title primary-title class="justify-center" 
                        style="word-break: break-word !important;"
                        @click="$emit('action', service.action)"
                        >
                        {{$i18n.t(service.name)}}
                        </v-card-title>
                        </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Services extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
    public services = [
        {
            name: 'srv_implantologie',
            pic: 'images/services/kiefer-implantat.jpg',
            action: 'implantology'
        },
        {
            name: 'srv_chirurgische',
            pic: 'images/services/schirurgie.jpg',
        },
        {
            name: 'srv_funkDiag',
            pic: 'images/services/funkDiag.jpg',            
        },
        {
            name: 'srv_generalDiag',
            pic: 'images/services/generalDiag.jpg',            
        },
        {
            name: 'srv_cosmetic',
            pic: 'images/services/cosmetic.jpg',            
        },


];

}
</script>

<style>

</style>