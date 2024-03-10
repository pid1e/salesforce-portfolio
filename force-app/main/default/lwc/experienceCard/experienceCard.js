import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class SkillCards extends LightningElement {
    wayfairImageURL = IMAGES + '/wayfair-logo.jpeg';
    capgeminiImageURL = IMAGES + '/Cap-logo.jpeg';
    atombergImageURL = IMAGES + '/atom-logo.png';
    lntImageURL = IMAGES + '/Lntlogo.jpeg';
}