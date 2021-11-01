<template>
    <div class="img-comp-container" @mouseup="slideFinish">
        <div class="img-comp-img">
            <img :src="pic1" width="300" height="200">
        </div>
        <div class="img-comp-img img-comp-overlay" ref="overlayImg">
            <img :src="pic2" width="300" height="200">
        </div>
    </div>
</template>

<script  lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';


@Component
export default class PicCompare extends Vue {
    $refs!:{
        overlayImg:HTMLElement;
    }
  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
  @Prop()
  public pic1!:string;
  @Prop()
  public pic2!:string;

  public clicked = 0;
  public width = 0;
  public  slider = document.createElement("DIV");
  public  ovImg!:HTMLElement ;
  mounted(){
      this.doInit();
  }
  doInit(){
      this.ovImg  = this.$refs.overlayImg;
      this.width = this.ovImg.offsetWidth;
      let h = this.ovImg.offsetHeight;
      this.ovImg.style.width = (this.width/2)+ 'px';
      
      this.slider.classList.add("img-comp-slider");
      this.ovImg.parentElement?.insertBefore(this.slider,this.ovImg);
      this.slider.style.top = (h/2)-(this.slider.offsetHeight/2) + 'px';
      this.slider.style.left = (this.width/2)-(this.slider.offsetWidth/2) + 'px';
      this.slider.addEventListener("mousedown",this.slideReady);
      this.slider.addEventListener("mouseup",this.slideFinish);
      this.slider.addEventListener("touchstart",this.slideReady);
      this.slider.addEventListener("touchend",this.slideFinish);
      this.slider.addEventListener("mousemove",this.slideMove);
      this.slider.addEventListener("touchmove",this.slideMove);

  }
  slideReady(e:any){
      e.preventDefault();
      this.clicked = 1;
      window.addEventListener("mousemove", this.slideMove);
      window.addEventListener("touchmove", this.slideMove);


  }
  slideFinish(e:any){
      this.clicked = 0;
  }
  slideMove(e:any){
      if (this.clicked===0) return;
      
      let pos = this.getCursorPos(e);
      //console.log(pos + ":: " + this.ovImg.offsetWidth);
      if (this.lang=='ar'){
          if (pos>0) pos=0;
          else pos = Math.abs(pos);
      }
        
      if (pos<0) pos=0;
      if (pos>this.width) pos= this.width;
      this.ovImg.style.width = pos + 'px';
      this.updateSlider();

  }
  updateSlider(){
      if (this.lang!=='ar')
        this.slider.style.left = this.ovImg.offsetWidth-(this.slider.offsetWidth/2) + 'px';
      else
        this.slider.style.right = this.ovImg.offsetWidth-(this.slider.offsetWidth/2) + 'px';


  }
  getCursorPos(e:any){
      var a, x = 0;
      
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = this.ovImg.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      
      x =  e.pageX - (this.lang=='ar'?a.right:a.left);

      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;      

  }
  @Watch('lang')
  langChanged(){
      console.log("Language is changed to " + this.lang);
    this.updateSlider();
  }

}
//* {box-sizing: border-box;}
</script>

<style >


.img-comp-container {
  position: relative;
  height: 200px; /*should be the same height as the images*/
  width: 300px ;
  
  border-radius: 10px; 
  
}

.img-comp-img {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
}

.img-comp-img img {
  display: block;

  
}

.img-comp-slider {
  position: absolute;
  z-index: 1;
  cursor: ew-resize;
  /*set the appearance of the slider:*/
  width: 40px;
  height: 40px;
  background-color: var(--v-primary-base);
  opacity: 0.7;
  border-radius: 50%;
}
</style>