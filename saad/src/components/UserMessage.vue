<template>
<v-container  style="text-align: center;" fluid>
<div style="width:70vw;">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      :label="$i18n.t('frm_name')"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      :label="$i18n.t('frm_mail')"
      required
    ></v-text-field>
    <v-textarea :label="$i18n.t('frm_text')" rows="6"></v-textarea>
    <v-btn
      color="success"
      class="mr-4"
    >
    {{$i18n.t('frm_send ')}}
    </v-btn>

<!--
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
    -->
  </v-form>
</div>
</v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class UserMessage extends Vue {

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;

}
</script>

<style>

</style>