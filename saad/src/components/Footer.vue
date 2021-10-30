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
        <div v-if="isMobile">  
          <v-row  v-for="(item,id) in items" :key="id" :style="'text-align: '+(lang!='ar'? 'left':'right')">
            <v-col>
              <span class="footerTitle" @click="$emit('action',item)">{{ $i18n.t(item.title)}}</span>
              <div v-for="(sitem,id) in item.list" :key="id" class="footerLink">
                <a v-if="sitem.url" :href="sitem.url" target="_blank" >
                  <v-icon :size="'small'" color="yellow">{{sitem.icon}}</v-icon>
                  <!--v-icon x-small color="yellow">mdi-star-four-points</v-icon-->
                  &nbsp;{{ $i18n.t(sitem.title)}}&nbsp;&nbsp;
                  
                </a>
                <div v-else @click="$emit('action',sitem)" >
                  <v-icon :size="'small'" color="yellow">{{sitem.icon}}</v-icon>
                  <!--v-icon x-small color="yellow">mdi-star-four-points</v-icon-->
                  &nbsp;{{ $i18n.t(sitem.title)}}&nbsp;&nbsp;
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div v-else>  
          <v-row style="text-align: center !important;">
            <v-col  style="width: 200vw;"></v-col>
            <v-col  v-for="(item,id) in items" :key="id" :style="'text-align: '+(lang!='ar'? 'left':'right')">
              <span class="footerTitle" @click="$emit('action',item)">{{ $i18n.t(item.title)}}</span>
              
              <div v-for="(sitem,id) in item.list" :key="id" class="footerLink">
                <a v-if="sitem.url" :href="sitem.url" target="_blank" >
                  <v-icon :size="isMobile?'x-small':'small'" color="yellow">{{sitem.icon}}</v-icon>
                  <!--v-icon x-small color="yellow">mdi-star-four-points</v-icon-->
                  &nbsp;{{ $i18n.t(sitem.title)}}&nbsp;&nbsp;
                </a>
                <div v-else @click="$emit('action',sitem)" >
                  <v-icon :size="isMobile?'x-small':'small'" color="yellow">{{sitem.icon}}</v-icon>
                  <!--v-icon x-small color="yellow">mdi-star-four-points</v-icon-->
                  &nbsp;{{ $i18n.t(sitem.title)}}&nbsp;&nbsp;
                </div>
              </div>
            </v-col>
            <v-col style="width: 200vw;"></v-col>
          </v-row>
        </div>

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
  // url: 'https://www.google.com/maps/place/Zahnarzt+Praxis+Kundakji+%26+Partner/@49.9999337,8.2611765,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x22cbe0caf65b9e9!8m2!3d49.9999649!4d8.2633183'
  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang = "de";


    public icons = [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ];
    public items=[
      {
          title: 'mnuPraxis',
          list: [
            {
              title: 'mnuAertzte',
              icon: 'mdi-medical-bag',
              action: 'docs',
            },
            {
              title: 'mnuTeam',
              icon: 'mdi-account-multiple',
              action: 'team'
            },
            {
              title: 'mnuTour',
              icon: 'mdi-magnify-plus-outline',
              action: 'tour'
            },
          ]
      },
      {
          title: 'mnuLeistungen',
          action: 'services',
          list: [
            {
              title: 'srv_implantologie',
              icon: 'mdi-cog'
            },
            {
              title: 'srv_chirurgische',
              icon: 'mdi-cog'
            },
            {
              title: 'srv_funkDiag',
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
          title: 'mnuKontakt',
          list: [
            {
              title: 'mnuStandort',
              icon: 'mdi-map-marker',
              action: 'location',
            },
            {
              title: 'mnuOffnungsZeiten',
              icon: 'mdi-clock-time-five-outline',
              action: 'timings'
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
  cursor: pointer;
  font-size: var(--footer-link-size);
}
.footerLink a{
  color: white !important;
  text-decoration: none;

}
.footerTitle{
  font-weight: bold;
  cursor: pointer;
  font-size: var(--footer-title-size);
}
</style>