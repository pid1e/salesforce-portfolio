import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class Projects extends LightningElement {
    project1ImageURL = IMAGES + '/Project-1 (1).png';
    project2ImageURL = IMAGES + '/Project-2.jpg';
    project3ImageURL = IMAGES + '/Project-3.png';
}