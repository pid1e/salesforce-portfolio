import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class SkillCards extends LightningElement {
    salesforceImageURL = IMAGES + '/salesforce.svg';
    sapImageURL = IMAGES + '/sap.svg';
    minnesotaImageURL = IMAGES + '/m.svg';
    giesImageURL = IMAGES + '/gies2.svg';
    
}