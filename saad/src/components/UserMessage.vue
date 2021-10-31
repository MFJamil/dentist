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
      :counter="40"
      :label="$i18n.t('frm_name')"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
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
  public valid = true;
  public name ='';
  public email ='';
   public rules:any = {
            required: (value:any) => {
                return value!==null||'Erforderlich';
            },
            isInteger: (value:any) => !isNaN(Number(value)) || "Muss nummerisch (Integer) sein",
            isPositiveInteger: (value:any) => (!isNaN(Number(value))&&(Number(value)>0)) || "Bitte geben Sie eine positive Zahl ein",
            jahreCheck: (value:any) => {
                if (value == undefined) return false;
                return (value+'').length == 4 || "keine 4-Stellige Jahreszahl sein";
            },
            isDecimal: (value:any) => {
                if (value == undefined) return false;
                if (Number(value)) return true;
                let pValue = value+''.replace(",", ".");
                return (
                    !isNaN(Number(pValue) - parseFloat(pValue)) || "Muss nummerisch (Dezimal) sein"
                );
            },
            percentCheck:(value:any) =>{
            return (value>=0 && value<=100)||'Bitte eine Zahl zwischen 0 – 100 % eingeben';
            },

        };
}
</script>

<style>

</style>