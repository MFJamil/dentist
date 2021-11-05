<template>
    <v-container  style="text-align: center;height:100%;" fluid>

        <h3 class="section-title" style="padding-bottom:50px;">{{$i18n.t('txt_apt_treatType')}}</h3>
            <div v-if="!isMobile" style="height:100%">
                <v-row>
                    <v-col v-for="(treat,id) in treatments" :key="id" :id="id">
                        <v-hover
                            v-slot="{ hover }"
                            close-delay="300"
                        >
                            <v-card
                                
                                :color="selectedTreatment==treat.name?'primary':'white'"
                                :elevation="hover ? 10 : 2"
                                :class="{ 'on-hover': hover }"
                                class="mx-auto text-center"
                                :max-width="isMobile?'50vw':'200px'"
                                outlined
                                
                            >
                                <v-img
                                :src="treat.pic"
                                height="120px"
                                
                                />
                                <v-card-title 
                                :style="'color:' + (selectedTreatment===treat.name?'white':'var(--v-primary-base)')"
                                
                                class="justify-center treatmentTitle" 
                                @click="handleClick(treat)">
                                {{$i18n.t(treat.name)}}
                                </v-card-title>

                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </div>
            <div v-else style="width:100vw;">
                  <v-list style="border:1px solid blue;">
                    <template v-for="item in treatments">
                        <v-list-item 
                        :key="item.name"
                        style="border:1px solid red;"
                        >
                        <v-list-item-avatar >
                            <v-img  :src="item.pic"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="$i18n.t(item.name)"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </template>
                    </v-list>
            </div>
    <!--
                <v-row v-for="(treat,id) in treatments" :key="id" :id="id">
                    <v-col style="justify-content:left;text-center:left;">
                        <v-hover
                            v-slot="{ hover }"
                            close-delay="300"
                        >
                            <v-card
                                :elevation="hover ? 20 : 2"
                                :class="{ 'on-hover': hover }"
                                class="mx-auto text-center"
                                :max-width="isMobile?'50vw':'200px'"
                                outlined
                                
                            >
                                <v-img
                                :src="treat.pic"
                                height="120px"
                                
                                />
                                <v-card-title 
                                color="primary"
                                
                                class="justify-center treatmentTitle" 
                                @click="$emit('done', 1)">
                                {{$i18n.t(treat.name)}}
                                </v-card-title>

                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </div>
-->
            
    </v-container>

</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class TreatmentType extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
  public selectedTreatment!:string;
  handleClick(treatmentEl:any){
    this.selectedTreatment=treatmentEl.name; 
    this.treatments.push();
    this.$emit('done', 1);
  }
    public treatments = [
        {
            name: 'apt_trt_control',
            pic: 'images/appointment/control.jpg',
            
        },
        {
            name: 'apt_trt_cleaning',
            pic: 'images/appointment/cleaning.jpg',
        },
        {
            name: 'apt_trt_invisalign',
            pic: 'images/appointment/invisalign.jpg',            
            
        },
        {
            name: 'apt_trt_pain',
            pic: 'images/appointment/pain.jpg',            
        },
        {
            name: 'apt_trt_whitening',
            pic: 'images/appointment/whitning.jpg',            
        },


];



}
</script>
<style lang="scss" scoped>
    .treatmentTitle{
        word-break: break-word !important;
        cursor:pointer;
        font-size: 16px;
        color:var(--v-primary-base);
    }
    .treatmentTitle:hover{
        color: red;
        
    }

    .v-card.on-hover.theme--dark{
        background-color: rgba(#FFF, 0.8);
        .v-card__title{
            color: #000 !important;
        }
    }
  
  
    
</style>
<style>


</style>