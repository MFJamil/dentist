<template>
    <v-container  style="text-align: center;height:100%;" fluid>

        <h3 class="section-title" :style="!isMobile?'padding-bottom:50px;':'font-size:14px !important;'">{{$i18n.t(message)}}</h3>
            <div v-if="!isMobile" style="height:100%">
                <v-row>
                    <v-col v-for="(opt,id) in opts" :key="id" :id="id">
                        <v-hover
                            v-slot="{ hover }"
                            close-delay="300"
                        >
                            <v-card
                                
                                :color="selectedOpt==opt.name?'primary':'white'"
                                :elevation="hover ? 10 : 2"
                                :class="{ 'on-hover': hover }"
                                class="mx-auto text-center"
                                :max-width="isMobile?'50vw':'200px'"
                                outlined
                                
                            >
                                <v-img
                                :src="opt.pic"
                                :height="optHeight"
                                
                                />
                                <v-card-title 
                                :style="'color:' + (selectedOpt===opt.name?'white':'var(--v-primary-base)')"
                                
                                class="justify-center treatmentTitle" 
                                @click="handleClick(opt)">
                                {{$i18n.t(opt.name)}}
                                </v-card-title>

                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </div>
            <div v-else style="width:100%;">
                  <v-list style="width:100%;">
                    <template v-for="opt in opts" >
                        <v-list-item 
                            :key="opt.name"
                        >
                        <v-list-item-avatar size="50" >
                            <v-img  :src="opt.pic"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content :style="lang=='ar'?'text-align:right;':'text-align:left;'">
                            <v-list-item-title v-html="$i18n.t(opt.name)" @click="handleClick(opt)"></v-list-item-title>
                            <v-list-item-subtitle v-html="opt.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </template>
                    </v-list>
            </div>
            
    </v-container>

</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class OptionsSlide extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
  @Prop()
  public message!:string;

  @Prop()
  public opts!:any[];
  @Prop({default:'120px'})
  public optHeight!:string;
  @Prop()
  public dateInfo!:any;
  @Prop()
  public updateField!:any;



  public selectedOpt='';

  handleClick(optEl:any){
    this.selectedOpt=optEl.name; 
    this.dateInfo[this.updateField] = this.opts.filter(el=>el.name==optEl.name)[0]  ;
    this.opts.push();
    this.$emit('done', 1);
  }



}
</script>
<style lang="scss" scoped>
    .treatmentTitle{
        word-break: break-word !important;
        cursor:pointer;
        font-size: 14px;
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