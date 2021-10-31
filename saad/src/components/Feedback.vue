<template>
  <div style="width:100%;">
    <h3 style="direction:rtl;margin-top:250px;font-size:var(--feedback-title-size);color:var(--v-primary-base);">{{$i18n.t('txt_feedback')}}</h3>
    <div v-if="!isMobile">
      <p ref="feedbackText" class="ft_small">
          {{messageText}}
      </p>
    </div>
    <div v-if="isMobile">
      <div class="hwrap">
        <div :class=getTickerClass()>
          <div class="hitem" v-for="(msg,id) in messages" :key="id">{{$i18n.t(msg.txt)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import webUtils from '../utils/WebUtils';

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

  getTickerClass(){
    let target = this.lang=='ar'?'hmove_ar':'hmove';
    console.log("Selected class: " + target);
    return target;
  }
  mounted(){
      if (!webUtils.isMobile(this)){
        setInterval(() => {
            this.updateText();
        }, 8000);


      }
      //*/
  }

  updateText(){
    if (this.msgIndex>this.messages.length-1) this.msgIndex = 0;
    this.messageText = '' + this.$i18n.t(this.messages[this.msgIndex].txt);
    this.msgIndex = this.msgIndex + 1;  
  }


  public messages = [
    {
        txt: 'feedback_1',
    },
    {
        txt: 'feedback_2',
    },
    {
        txt: 'feedback_3',
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

.hwrap {
  overflow: hidden; /* HIDE SCROLL BAR */
  background: #fff;
}
 
/* (B) MOVING TICKER WRAPPER */
.hmove { display: flex; }

/* (C) ITEMS - INTO A LONG HORIZONTAL ROW */
.hitem {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}
 
/* (D) ANIMATION - MOVE ITEMS FROM RIGHT TO LEFT */
/* 4 ITEMS -400%, CHANGE THIS IF YOU ADD/REMOVE ITEMS */
@keyframes tickerh_ltr {
  0% { transform: translate3d(100%, 0, 0); }
  100% { transform: translate3d(-400%, 0, 0); }
}
@keyframes tickerh_rtl {
  0% { transform: translate3d( -100%, 0, 0); }
  100% { transform: translate3d(400%, 0, 0); }
}

.hmove { 
  
  animation: tickerh_ltr linear 25s infinite; 
  width:600px; 
  
  }
.hmove_ar { 
  display: flex;
  animation: tickerh_rtl linear 25s infinite; 
  
  width:600px; 
  }

.hmove:hover { animation-play-state: paused; }
</style>





