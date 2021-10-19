<template>
  <v-footer 
    dark
    padless
    :fixed="false"
    :absolute="false"
  >
    <v-card
      color="primary"
      flat
      tile
      class="white--text text-center"
      
    >
    <!-- base color 011838 -->

      <v-card-text class="white--text pt-0" style="width: 100vw;margin-top: 20px;text-align: center;">
       <v-row style="text-align: center !important;">
         
         <v-col v-if="!isMobile" style="width: 200vw; text-align: left;">
         </v-col>
         <v-col  v-for="(item,id) in items" :key="id" style="text-align: left;">
           <span class="footerTitle">{{item.title}}</span>
           <!--<li v-for="(sitem,id) in item.list" :key="id">{{sitem.title}}&nbsp;&nbsp;<v-icon small>{{sitem.icon}}</v-icon></li>-->
           
            <div v-for="(sitem,id) in item.list" :key="id" class="footerLink">
              <a v-if="sitem.url" :href="sitem.url" target="_blank" >
                <v-icon x-small color="yellow">mdi-star-four-points</v-icon>
                &nbsp;{{sitem.title}}&nbsp;&nbsp;
                <v-icon :size="isMobile?'x-small':'small'">{{sitem.icon}}</v-icon>
              </a>
              <div v-else >
                <v-icon x-small color="yellow">mdi-star-four-points</v-icon>
                &nbsp;{{sitem.title}}&nbsp;&nbsp;
                <v-icon :size="isMobile?'x-small':'small'">{{sitem.icon}}</v-icon>
              </div>
            </div>
            
         </v-col>


       </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text >
       <v-row>
         <v-col style="font-size: var(--footer-link-size);vertical-align: middle !important;" >
           <span style="height: 100%;position:relative;top: 8px;"> ©  {{ new Date().getFullYear() }} — <strong>Kundakji &amp; Partner</strong></span>
         </v-col>
         <v-col >
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="white--text"
            icon
          >
            <v-icon :size="isMobile?'16px':'24px'">
              {{ icon }}
            </v-icon>
          </v-btn>
           
         </v-col>
       </v-row>


      </v-card-text>
    </v-card>
</v-footer>

</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Footer extends Vue {

  @Prop()
  public isMobile! :boolean;

    public icons = [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ];
    public items=[
      {
          title: 'Praxis',
          list: [
            {
              title: 'Ärtzte',
              icon: 'mdi-medical-bag'
            },
            {
              title: 'Team',
              icon: 'mdi-account-multiple'
            },
            {
              title: 'Tour',
              icon: 'mdi-magnify-plus-outline'
            },
          ]
      },
      {
          title: 'Leistungen',
          list: [
            {
              title: 'Implantologie',
              icon: 'mdi-cog'
            },
            {
              title: 'Chirurgische Leistungen',
              icon: 'mdi-cog'
            },
            {
              title: 'Funktionsdiagnostik',
              icon: 'mdi-cog'
            },
            {
              title: 'Allgemeine Diagnostik',
              icon: 'mdi-cog'
            },
            {
              title: 'Kosmetische Leistungen',
              icon: 'mdi-cog'
            },
            {
              title: 'Vorsorge',
              icon: 'mdi-cog'
            },
            {
              title: 'Cerec',
              icon: 'mdi-cog'
            },
            {
              title: 'Hahnerhaltung',
              icon: 'mdi-cog'
            },
            {
              title: 'Patenschaft',
              icon: 'mdi-cog'
            },

          ]
      },

     {
          title: 'Kontakt',
          list: [
            {
              title: 'Standort',
              icon: 'mdi-map-marker',
              url: 'https://www.google.com/maps/place/Zahnarzt+Praxis+Kundakji+%26+Partner/@49.9999337,8.2611765,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x22cbe0caf65b9e9!8m2!3d49.9999649!4d8.2633183'
            },
            {
              title: 'Öffnungszeiten',
              icon: 'mdi-clock-time-five-outline'
            },
          ]
      },

  ];

}
</script>

<style>
.footerLink{
  position: relative;
  left: 4px;
  
  font-size: var(--footer-link-size);
}
.footerLink a{
  color: white !important;
  text-decoration: none;

}
.footerTitle{
  font-weight: bold;
  font-size: var(--footer-title-size);
}
</style>