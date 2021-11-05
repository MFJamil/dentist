<template>
    <v-container  style="text-align: center;">
        <h3 class="section-title" style="padding-bottom:50px;">{{$i18n.t('txt_apt_treatHandler')}}</h3>
        
                    <v-row>
                <v-col v-for="(doc,id) in doctors" :key="id" :id="id">
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
                            :src="doc.pic"
                            height="160px"
                            
                            />
                            <v-card-title 
                            color="primary"
                            
                            class="justify-center treatmentTitle" 
                            @click="$emit('done', 3)">
                            {{$i18n.t(doc.name)}}
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
export default class Staff extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
    public doctors = [
        {
            name: 'txt_quick_apt',
            position: 'dct_pos_za',
            pic: 'images/appointment/speed.png',
        },
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