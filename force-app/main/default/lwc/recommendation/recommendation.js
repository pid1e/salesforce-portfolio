import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class SkillCards extends LightningElement {
    carlosImageURL = IMAGES + '/rec-carlos.jpeg';
    sandipImageURL = IMAGES + '/sandip.jpg';
    mansiImageURL = IMAGES + '/mansi.jpg';
    shubhamImageURL = IMAGES + '/shubham2.jpg';
    akashImageURL = IMAGES + '/akash2.jpg';
    aniketImageURL = IMAGES + '/aniket.jpg';

    // slider1Link = '#';
    // slider2Link = '#';
    // slider3Link = '#';
    // slider4Link = '#';

    // autoScroll = false;

    // get sliderData() {
    //     return [{
    //         "image": this.carlosImageURL,
    //         "link": this.slider1Link,
    //         "heading": "",
    //         "description": "",
    //     },
    //     {
    //         "image": this.carlosImageURL,
    //         "link": this.slider1Link,
    //         "heading": "",
    //         "description": "",
    //     },
    //     {
    //         "image": this.carlosImageURL,
    //         "link": this.slider1Link,
    //         "heading": "",
    //         "description": "",
    //     },
    //     {
    //         "image": this.carlosImageURL,
    //         "link": this.slider1Link,
    //         "heading": "",
    //         "description": "",
    //     }]
    // }
}