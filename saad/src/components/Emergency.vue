<template>
    <v-container fluid style="display: grid !important;justify-content: center;">
        <div style="height:60vh">
            <h2 style="color:var(--v-primary-base);">{{$i18n.t('titleEmergency')}}</h2>
            <p style="text-align:left;width:60vw;">{{$i18n.t('prg_emergency')}}</p>
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