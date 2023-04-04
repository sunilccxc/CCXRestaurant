import { LightningElement,track } from 'lwc';
import imageUrl from '@salesforce/resourceUrl/logo'
export default class Wel extends LightningElement {
    @track imageUrl1=imageUrl;
}