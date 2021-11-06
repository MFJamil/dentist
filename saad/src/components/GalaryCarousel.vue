<template>
<v-container fluid style="height:100vh;">
    <div class="scene" @touchstart="touchStart" @touchmove="touchMove">
    <div class="carousel" ref="mainComp">
        <!--
        <div class="carousel__cell">1</div>
        <div class="carousel__cell">2</div>
        <div class="carousel__cell">3</div>
        <div class="carousel__cell">4</div>
        <div class="carousel__cell">5</div>
        <div class="carousel__cell">6</div>
        <div class="carousel__cell">7</div>
        <div class="carousel__cell">8</div>
        <div class="carousel__cell">9</div>
        <div class="carousel__cell">10</div>
        <div class="carousel__cell">11</div>
        <div class="carousel__cell">12</div>
        <div class="carousel__cell">13</div>
        <div class="carousel__cell">14</div>
        <div class="carousel__cell">15</div>
        -->
        <div class="carousel__cell" v-for="img in images" :key="img.name" @click="showImages=true">
            <img class="carousel_img" :src="img.pic" >
        </div>

    </div>
    <div class="controlPanel" >
        <v-btn v-show="isHorizontal" icon small @click="move(lang=='ar')" ><v-icon>{{lang=='ar'?'mdi-arrow-right-bold': 'mdi-arrow-left-bold'}}</v-icon></v-btn>
        <v-btn icon small @click="onOrientationChange(!isHorizontal)" :style="'position:relative;left:' + (isHorizontal?0:lang=='ar'?-27:27 )+ 'px;'"><v-icon>{{horizontalIcon}}</v-icon></v-btn>
        <v-btn v-show="isHorizontal" icon small @click="move(lang!='ar')" ><v-icon>{{lang=='ar'?'mdi-arrow-left-bold': 'mdi-arrow-right-bold'}}</v-icon></v-btn>



        <v-btn v-show="!isHorizontal" icon small @click="next" style="position:relative;top:-20px;" ><v-icon>mdi-arrow-up-bold</v-icon></v-btn>
        <v-btn v-show="!isHorizontal" icon small @click="previous" :style="'position:relative;top:20px;left:' + (lang=='ar'?27:-27) + 'px;'"><v-icon>mdi-arrow-down-bold</v-icon></v-btn>
        
    </div>
    </div>
        <v-dialog v-model="showImages">
        
        <v-carousel  dark show-arrows-on-hover progress-color="white" height="80vh">
            <v-carousel-item
                v-for="(item,i) in images"
                :key="i"
                :src="item.pic"
                
                ></v-carousel-item>
        </v-carousel>  
        <!--<v-btn @click="slideShow=!slideShow" fab small><v-icon>mdi-play-box-outline</v-icon></v-btn>-->
    </v-dialog>

</v-container>    
</template>

<script  lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';


@Component
export default class GalaryCarousel extends Vue {
    $refs!:{
        mainComp:HTMLElement
    }
  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;

  public comp!:HTMLElement;
  public selectedIndex = 0;
  public cells!:NodeListOf<HTMLElement>;
  public isHorizontal = true;
  public cellCount = 8; //To be updated dynamically
  public cellWidth = 0;
  public cellHeight = 0;
  public rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
  public radius!:number; theta!:number;
  public horizontalIcon='mdi-swap-vertical-bold';
  public showImages = false;

  public xDown:any=null;
  public yDown:any=null;

  mounted(){
      this.comp = this.$refs.mainComp;
      this.doInit();
      this.onOrientationChange();
  }
  doInit(){
      this.cells = this.comp.querySelectorAll('.carousel__cell');
      this.cellWidth = this.comp.offsetWidth;
      this.cellHeight = this.comp.offsetHeight;
  }
  rotateCarousel() {
    var angle = this.theta * this.selectedIndex * -1;
    this.comp.style.transform = 'translateZ(' + -this.radius + 'px) ' + 
    this.rotateFn + '(' + angle + 'deg)';
  }
  
  changeCarousel() {
    //Below count should be updated via component params
    //this.cellCount = cellsRange.value;
    this.theta = 360 / this.cellCount;
    var cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
    this.radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / this.cellCount ) );

    for ( var i=0; i < this.cells.length; i++ ) {
        let cell:HTMLElement = this.cells[i];
        if ( i < this.cellCount ) {
            // visible cell
            cell.style.opacity = '1';
            var cellAngle = this.theta * i;
            cell.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
        } else {
            // hidden cell
            cell.style.opacity = '0';
            cell.style.transform = 'none';
        }
    }
    this.rotateCarousel();
   }
   onOrientationChange(horizontalDirection=true) {
    //Code below to be updated via a special control
    this.horizontalIcon = horizontalDirection?'mdi-swap-vertical-bold':'mdi-swap-horizontal-bold';
    this.isHorizontal = horizontalDirection;
    this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
    this.changeCarousel();
   }

   next():any{
       this.selectedIndex++;
       this.changeCarousel();
   }

    previous():any{
        this.selectedIndex--;
        this.changeCarousel();
   }

   move(forward:boolean){
      this.selectedIndex = this.selectedIndex + (forward?1:-1);       
      this.changeCarousel();
   }

   touchStart(e:any){
       //console.log("Touch Start detected ....");
        const firstTouch = e.touches[0];                                      
        this.xDown = firstTouch.clientX;                                      
        this.yDown = firstTouch.clientY;          
   }
   touchMove(e:any){
       //console.log("Touch Move detected ....");
       if (this.yDown==null||this.xDown==null) return;
        let xUp = e.touches[0].clientX;                                    
        let yUp = e.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;
         if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                if (this.isHorizontal)
                    this.next();
            } else {
                if (this.isHorizontal)
                    this.previous();
            }                       
        } else {
            if ( yDiff > 0 ) {
                if (!this.isHorizontal) this.next();
                
            } else { 
                /* up swipe */
                if (!this.isHorizontal) this.previous();
            }                                                                 
        }
        /* reset values */
        this.xDown = null;
        this.yDown = null;  
        e.preventDefault();                                          
   }
       public images = [
        {
            name: 'pic1',
            pic: 'images/tour/cln_1.jpg',
        },
        {
            name: 'pic2',
            pic: 'images/tour/cln_2.jpg',
        },
        {
            name: 'pic3',
            pic: 'images/tour/cln_3.jpg',
        },
        {
            name: 'pic4',
            pic: 'images/tour/cln_4.jpg',
        },
        {
            name: 'pic5',
            pic: 'images/tour/cln_5.jpg',
        },
        {
            name: 'pic6',
            pic: 'images/tour/cln_6.jpg',
        },
        {
            name: 'pic7',
            pic: 'images/tour/cln_7.jpg',
        },
        {
            name: 'pic8',
            pic: 'images/tour/cln_8.jpg',
        },

       ];


}
</script>

<style>
.scene {
  border: 1px solid #CCC;
  margin: 40px 0;
  position: relative;
  width: 210px;
  height: 140px;
  margin: 80px auto;
  perspective: 1000px;
}

.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(-288px);
  transform-style: preserve-3d;
  transition: transform 1s;
}

.carousel__cell {
  position: absolute;
  width: 190px;
  height: 120px;
  left: 10px;
  top: 10px;
  border: 2px solid black;
  line-height: 116px;
  font-size: 80px;
  font-weight: bold;
  color: white;
  text-align: center;
  transition: transform 1s, opacity 1s;
}
.carousel_img{
  width: 190px;
  height: 120px;

}

.carousel__cell:nth-child(9n+1) { background: hsla(  0, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+2) { background: hsla( 40, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+3) { background: hsla( 80, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+4) { background: hsla(120, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+5) { background: hsla(160, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+6) { background: hsla(200, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+7) { background: hsla(240, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+8) { background: hsla(280, 100%, 50%, 0.8); }
.carousel__cell:nth-child(9n+0) { background: hsla(320, 100%, 50%, 0.8); }

.carousel__cell:nth-child(1) { transform: rotateY(  0deg) translateZ(288px); }
.carousel__cell:nth-child(2) { transform: rotateY( 40deg) translateZ(288px); }
.carousel__cell:nth-child(3) { transform: rotateY( 80deg) translateZ(288px); }
.carousel__cell:nth-child(4) { transform: rotateY(120deg) translateZ(288px); }
.carousel__cell:nth-child(5) { transform: rotateY(160deg) translateZ(288px); }
.carousel__cell:nth-child(6) { transform: rotateY(200deg) translateZ(288px); }
.carousel__cell:nth-child(7) { transform: rotateY(240deg) translateZ(288px); }
.carousel__cell:nth-child(8) { transform: rotateY(280deg) translateZ(288px); }
.carousel__cell:nth-child(9) { transform: rotateY(320deg) translateZ(288px); }



.carousel-options {
  text-align: center;
  position: relative;
  z-index: 2;
  background: hsla(0, 0%, 100%, 0.8);
}
.controlPanel{
    position: absolute;
    bottom: -50px;
    right: -50px;
}
</style>