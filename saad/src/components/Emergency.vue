<template>
    <v-container fluid style="display: grid !important;justify-content: center;">
        <div style="height:60vh">
            <h2 style="color:var(--v-primary-base);">{{$i18n.t('titleEmergency')}}</h2>
            <p :style="'width:60vw;text-align:' + (lang=='ar'?'right':'left')">{{$i18n.t('prg_emergency')}}</p>
            <div style="text-align: center;">
            <v-btn x-large icon color="primary" href="https://www.zahnarzt-notdienst.de/"><v-icon>mdi-medical-bag</v-icon></v-btn>
            </div>
        </div>

    </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Emergency extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;

}
</script>

<style>

</style>