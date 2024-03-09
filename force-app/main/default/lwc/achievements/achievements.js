import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class Achievements extends LightningElement {
    sharkbowl1ImageURL = IMAGES + '/sharkbowl1.jpg';
    sharkbowl2ImageURL = IMAGES + '/sharkbowl2.png';
    projectEvolveImageURL = IMAGES + '/projectEvolve.jpg';
    projectEvolve1ImageURL = IMAGES + '/projectEvolve1.jpg';
    projectEvolve2ImageURL = IMAGES + '/projectEvolve2.png';

    sharkbowlProjectURL = '@salesforce/resourceUrl/Sharkbowl.pdf';

    mouseOver (evt) {
        var dataId = evt.target.getAttribute('data-id');

        switch(dataId) {
            case "sharkbowlImage":
                this.template.querySelector(`[data-id="${dataId}"]`).src = this.sharkbowl2ImageURL;
              break;
            case "evolveImage":
                this.template.querySelector(`[data-id="${dataId}"]`).src = this.projectEvolve2ImageURL;
              break;
        }
    }

    mouseOut (evt) {
        var dataId = evt.target.getAttribute('data-id');

        switch(dataId) {
            case "sharkbowlImage":
                this.template.querySelector(`[data-id="${dataId}"]`).src = this.sharkbowl1ImageURL;
              break;
            case "evolveImage":
                this.template.querySelector(`[data-id="${dataId}"]`).src = this.projectEvolveImageURL;
              break;
        }
    }
    
}