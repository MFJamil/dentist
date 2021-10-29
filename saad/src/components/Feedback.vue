<template>
  <div style="width:100%;">
                <h3 style="direction:rtl;margin-top:250px;font-size:30px;color:var(--v-primary-base);">{{$i18n.t('txt_feedback')}}</h3>

                <p ref="feedbackText" class="ft_small">
                    {{messageText}}
                </p>
  </div>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Feedback extends Vue {
    $refs!:{
        feedbackText:HTMLElement;
    }

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;

  public msgIndex = 0;
  
  public messageText = '';  
  mounted(){
      
      setInterval(() => {
          this.updateText();
      }, 8000);

  }

  updateText(){
    if (this.msgIndex>this.messages.length-1) this.msgIndex = 0;
    this.messageText = '' + this.$i18n.t(this.messages[this.msgIndex].id);
    this.msgIndex = this.msgIndex + 1;  
  }


  public messages = [
    {
        id: 'feedback_1',
    },
    {
        id: 'feedback_2',
    },
    {
        id: 'feedback_3',
    }

  ];

}
</script>
<style >
.ft_small{
    font-family: poppins,sans-serif !important;
    font-weight: 700 !important;
    line-height: 1.3 !important;
    font-size: 20px;
    height: 80px;
    
    animation: fadeIn ease var(--feedback-time) infinite;
    -webkit-animation: fadeIn ease var(--feedback-time) infinite;
    -moz-animation: fadeIn ease var(--feedback-time) infinite;
    -o-animation: fadeIn ease var(--feedback-time) infinite;
    -ms-animation: fadeIn ease var(--feedback-time) infinite;
}
@keyframes fadeIn {
  0% {
    opacity:0;
    font-size: var(--feedback-small);
  }
  100% {
    opacity:1;
    font-size: var(--feedback-big);
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
    font-size: var(--feedback-small);
  }
  100% {
    opacity:1;
    font-size: var(--feedback-big);
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
    font-size: var(--feedback-small);
  }
  100% {
    opacity:1;
    font-size: var(--feedback-big);;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
    font-size: var(--feedback-small);
  }
  100% {
    opacity:1;
    font-size: var(--feedback-big);;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
    font-size: var(--feedback-small);
  }
  100% {
    opacity:1;
    font-size: var(--feedback-big);;
    }
}
</style>





