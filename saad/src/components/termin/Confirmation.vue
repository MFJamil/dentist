    <template>
        <div ref="mainDiv" style="width:100% !important;text-align: center;padding-left:4px;padding-right:4px;" >
            <h3 class="section-title" :style="!isMobile?'padding-bottom:50px;':'font-size:14px !important;'">{{$i18n.t('txt_apt_confirm')}}</h3>
            <v-row v-if="!isMobile">
                <v-col class="flex_middle" style=" display:flex !important;align-items:center !important;">
                    <div class="flex_middle" style="width:250px !important;">
                        <v-avatar size="80"><v-img :src="dateInfo.handler.pic"></v-img></v-avatar> 
                        <div :class="lang=='ar'?'space_10_rtl':'space_10_ltr'">
                            <span><strong>{{$i18n.t(dateInfo.handler.name)}}</strong></span> <br>
                            <span style="color:rgba(0, 0, 0, 0.6);">{{$i18n.t(dateInfo.handler.position)}}</span>
                        </div>
                    </div>
                </v-col>
                <v-col >
                    <v-subheader >{{$i18n.t('stp_type')}}</v-subheader>
                    <div :class="lang=='ar'?'text-align:left;margin-right:50px;':'text-align:left;margin-left:50px;'">
                        <v-avatar><v-img :src="dateInfo.treatment.pic"></v-img></v-avatar> 
                        <span :class="lang=='ar'?'space_20_rtl':'space_20_ltr'"><strong>{{$i18n.t(dateInfo.treatment.name)}}</strong></span>
                    </div>
                </v-col>
                <v-col>
                    <v-subheader>{{$i18n.t('stp_date')}}</v-subheader>
                    <v-icon color="primary">mdi-calendar-range</v-icon> <span :class="lang=='ar'?'space_10_rtl':'space_10_ltr'"  :style="'position:relative;left:10px;' + (isMobile?'font-size:12px !important;':'')"><strong>{{getDateValue()}}</strong></span><br>
                    <v-icon color="primary">mdi-clock-time-four-outline</v-icon><span :class="lang=='ar'?'space_10_rtl':'space_10_ltr'"><strong>{{getTimeValue()}}</strong></span>
                </v-col>
            </v-row>
            <v-row v-if="isMobile">
                <v-col class="flex_middle" style="display:flex !important;align-items:center !important;">
                    <div class="flex_middle" style="width:250px !important;">
                        <v-avatar size="80"><v-img :src="dateInfo.handler.pic"></v-img></v-avatar> 
                        <div :class="lang=='ar'?'space_10_rtl':'space_10_ltr'">
                            <span><strong>{{$i18n.t(dateInfo.handler.name)}}</strong></span> <br>
                            <span class="sub_title">{{$i18n.t(dateInfo.handler.position)}}</span>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row v-if="isMobile" width="100vw">
                <v-col>
                    <span class="sub_title">{{$i18n.t('stp_type')}}</span>
                    <div :class="lang=='ar'?'text-align:left;margin-right:10px;':'text-align:left;margin-left:10px;'">
                        <span style="position:relative;left:10px;font-size:12px !important;" :class="lang=='ar'?'space_20_rtl':'space_20_ltr'"><strong>{{$i18n.t(dateInfo.treatment.name)}}</strong></span>
                    </div>
                </v-col>
                <v-col>
                    <span class="sub_title">{{$i18n.t('stp_date')}}</span>
                    <div :class="lang=='ar'?'text-align:left;margin-right:50px;':'text-align:left;margin-left:50px;'">
                        <span :class="lang=='ar'?'space_10_rtl':'space_10_ltr'"  style="position:relative;left:10px;font-size:12px !important;"><strong>{{getDateValue()}}</strong></span><br>
                    <v-icon color="primary">mdi-clock-time-four-outline</v-icon><span :class="lang=='ar'?'space_10_rtl':'space_10_ltr'"><strong>{{getTimeValue()}}</strong></span>
                    </div>
                </v-col>
            </v-row>

            <v-row><v-col> <v-divider></v-divider></v-col></v-row>
            <v-row dense>
                <v-col cols="2">
                     <v-radio-group v-model="gender" row>
                        <v-radio :label="$i18n.t('gender_female')" value="1"></v-radio>
                        <v-radio :label="$i18n.t('gender_male')" value="2"></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
            <v-row dense >
                <v-col cols="4" md="2">
                    <v-text-field dense  :label="$i18n.t('lbl_name')"  :placeholder="$i18n.t('lbl_name')"  outlined  required :counter="20"></v-text-field>
                </v-col>
                <v-col cols="4" md="4">
                    <v-text-field dense :label="$i18n.t('lbl_family_name')"  :placeholder="$i18n.t('lbl_family_name')"  required outlined :counter="40"></v-text-field>
                </v-col>
            </v-row>
            <v-row dense >
                <v-col>
                   <v-text-field  :rules="emailRules" :label="$i18n.t('frm_mail')"  required></v-text-field>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col>
                   <v-text-field   :label="$i18n.t('frm_tel')"  required></v-text-field>
                </v-col>
            </v-row>

        </div>
    </template>
    
<script  lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';


    @Component
    export default class Confirmation extends Vue {
        $refs!:{
            mainDiv:HTMLElement;
        }

    @Prop()
    public isMobile! :boolean;
    @Prop()
    public lang!:string;
    @Prop()
    public dateInfo!:any;

    public gender='1';
     public nameRules= [
        (v:any) => !!v || 'Name is required',
        (v:any) => v.length <= 10 || 'Name must be less than 10 characters',
      ];
      public  emailRules= [
        (v:any) => !!v || this.$i18n.t('frm_val_email_req'),
        (v:any) => /.+@.+/.test(v) || this.$i18n.t('frm_val_email_req'),
      ];

    haveDateValue(){return (this.dateInfo.date!==undefined)&&( typeof this.dateInfo.date!='string');}
    getDateValue(){
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        console.dir(this.dateInfo.date);
        if (this.haveDateValue())
            return this.dateInfo.date.toLocaleDateString(this.getLocale(), options);
        return '';
    }
    getTimeValue(){
        let dt:Date = this.dateInfo.date;
        if (this.haveDateValue())
            return dt.getHours() + ":" + dt.getMinutes();

    }
    getLocale(){
        switch(this.lang){
            case 'ar': return 'ar-EG';
            case 'de': return 'de-DE';
            default: return 'en-us';
        }
    }
    mounted(){
        if (this.isMobile){
            let parentEl = this.$refs.mainDiv.parentElement;
            parentEl.classList.add('v-stp-up');
            /*
            parentEl.style.width = "95vw !important";
            parentEl.style.position = "relative";
            parentEl.style.left = "-10px";
            parentEl.style.border = '1px solid black';
            */
        }

    }
    
    }
    </script>
    
    <style >
        .flex_middle{
            display:flex !important;
            align-items:center !important;
        }
        .space_10_ltr{
            position:relative;
            left:10px;
        }
        .space_10_rtl{
            position:relative;
            right:10px;
        }
        .space_20_ltr{
            position:relative;
            left:20px;
        }
        .space_20_rtl{
            position:relative;
            right:20px;
        }
        .sub_title{
            color:rgba(0, 0, 0, 0.6);
        }
        .v-stp-up{
        width: 95vw !important;
        left: -10px;
        position: relative;
        }



    </style>