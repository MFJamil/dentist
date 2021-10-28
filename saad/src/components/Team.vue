<template>
    <v-container  style="text-align: center;">
        <h1 class="section-title">{{$i18n.t('praxisTeam')}}</h1>
        <br />

        <div v-if="!isMobile">
            <v-row>
                <v-col v-for="(item,id) in team" :key="id" :id="id">
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
                        :src="item.pic"
                        height="150px"
                        
                        />
                        </v-avatar>
                    </v-responsive>

                        <v-card-title primary-title class="justify-center" style="word-break: break-word !important;">
                        {{$i18n.t(item.name)}}
                        </v-card-title>

                        <v-card-subtitle style="text-weight:bold !important;">
                        {{$i18n.t(item.position)}}
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div v-if="isMobile">
            <v-row v-for="(item,id) in team" :key="id" :id="id">
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
                        :src="item.pic"
                        height="150px"
                        
                        />
                        </v-avatar>
                    </v-responsive>

                        <v-card-title primary-title class="justify-center" style="word-break: break-word !important;">
                        {{$i18n.t(item.name)}}
                        </v-card-title>

                        <v-card-subtitle style="text-weight:bold !important;">
                        {{$i18n.t(item.position)}}
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
export default class Team extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
    public team = [
        {
            name: 'team_name_ma1',
            position: 'team_pos_zf',
            pic: 'images/no-profile-pic.jpg',
        },
        {
            name: 'team_name_ma1',
            position: 'team_pos_zf',
            pic: 'images/no-profile-pic.jpg',
        },
        {
            name: 'team_name_ma1',
            position: 'team_pos_ab',
            pic: 'images/no-profile-pic.jpg',
        },


];

}
</script>

<style>

</style>