<template>
    <v-container fluid>
    <div class="imagePage">
        <h1 class="section-title">{{$i18n.t('titleTour')}}</h1>
        <br />
        <br />

        <div v-if="isMobile" id="imageCont" ref="imageCont" :class="isMobile?'imageCont_mobile':''">
            <div  class="imageWindow">
                <div v-for="img in images" :key="img.name" class="imageDiv">
                    <v-fade-transition >
                        <img :src="img.pic" class="timage"  @click="showImages=true" />
                    </v-fade-transition>
                </div>
            </div>
        </div>
        <div v-else id="imageCont">
            <div v-for="img in images" :key="img.name" class="imageDiv">
                <v-fade-transition>
                    <img :src="img.pic" class="timage"  @click="showImages=true" />
                </v-fade-transition>
            </div>
        </div>

        <!--
    <v-row align="center" justify="center">
        <v-col
        v-for="img in images"
        :key="img.name"
        class="d-flex child-flex"
        cols="1"
        >

        <v-img
            :src="img.pic"
            :lazy-src="img.pic"
            aspect-ratio="1"
            transition="scale-transition"
            class="grey lighten-2"
            width="150px"
        >
            <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
                <v-progress-circular
                indeterminate
                color="grey lighten-5"
                ></v-progress-circular>
            </v-row>
            </template>
        </v-img>
        </v-col>
    </v-row>

        -->
    <v-dialog v-model="showImages">
        
        <v-carousel :cycle="slideShow" dark show-arrows-on-hover progress-color="white" height="80vh">
            <v-carousel-item
                v-for="(item,i) in images"
                :key="i"
                :src="item.pic"
                
                ></v-carousel-item>
        </v-carousel>  
        <!--<v-btn @click="slideShow=!slideShow" fab small><v-icon>mdi-play-box-outline</v-icon></v-btn>-->
    </v-dialog>
    </div>
    </v-container>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class Tour extends Vue {
 $refs!:{
     imageCont:HTMLElement;
 }

  @Prop()
  public isMobile! :boolean;
  @Prop()
  public lang!:string;
  public showImages =false;
  public slideShow=false;

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


];

}
</script>

<style scoped>
.imagePage{
    width: 70vw;
    height: 60vh;
    text-align: center;
}

#imageCont{
    display: flex;
    width: 70vw;
    text-align: center;
    justify-content: center;
    height: 150px;
    vertical-align: middle;
}

.imageCont_mobile{
    display: inline-table !important;
    width: 180px !important;
}

.imageWindow{
    height: 65vh !important;
    overflow-y: auto;
}

.imageDiv{
    display: block;
    height: 150px;
    overflow: hidden;
}

.timage::before{
    width:0px;
    transition-duration: 500ms;
}
.timage{
    border-radius: 8px;
    cursor: zoom-in;
    width: 80px;
    transition-duration: 500ms;
    margin: auto 25px;

}
.timage::after{
    width:80px;
}
.timage:hover{
    opacity: .5;
    width: 90px !important;

}

</style>