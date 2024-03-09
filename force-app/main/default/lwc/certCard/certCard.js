import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'
import CERTIFICATES from '@salesforce/resourceUrl/Pdf'

export default class SkillCards extends LightningElement {
    salesforceImageURL = IMAGES + '/salesforce.svg';
    sapImageURL = IMAGES + '/sap.svg';
    minnesotaImageURL = IMAGES + '/m.svg';
    giesImageURL = IMAGES + '/gies2.svg';

    salesforceCertificateURL = CERTIFICATES + '/salesforce.pdf';
    sapCertificateURL = CERTIFICATES + '/sap.pdf';
    agileCertificateURL = CERTIFICATES + '/agile.pdf';
    digitalMarketingCertificateURL = CERTIFICATES + '/digitalMarketing.pdf';
}