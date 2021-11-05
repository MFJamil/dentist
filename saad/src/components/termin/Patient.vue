<template>
    <v-container  style="text-align: center;">
        <h3 class="section-title" style="padding-bottom:50px;">{{$i18n.t('txt_apt_treatPatient')}}</h3>
        
            <v-row>
                <v-col v-for="(treat,id) in treatments" :key="id" :id="id">
                    <v-hover
                        v-slot="{ hover }"
                        close-delay="300"
                    >
                        <v-card
                            :elevation="hover ? 10 : 2"
                            :class="{ 'on-hover': hover }"
                            class="mx-auto text-center"
                            max-width="200"
                            outlined
                            
                        >
                            <v-img
                            :src="treat.pic"
                            height="180px"
                            
                            />
                            <v-card-title 
                            color="primary"
                            
                            class="justify-center treatmentTitle" 
                            @click="$emit('done', 2)">
                            {{$i18n.t(treat.name)}}
                            </v-card-title>

                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
    </v-container>

</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Patient extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
    public treatments = [
        {
            name: 'apt_pnt_exists',
            pic: 'images/appointment/member.png',
            
        },
        {
            name: 'apt_pnt_not_exist',
            pic: 'images/appointment/not_member.png',
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