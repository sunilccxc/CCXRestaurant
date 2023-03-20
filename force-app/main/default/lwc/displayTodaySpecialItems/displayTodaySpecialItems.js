import { LightningElement,api,wire } from 'lwc';
import BackgroundImg from '@salesforce/resourceUrl/logo';
import specialItems from '@salesforce/apex/GetSpecialItems.getTodaySpecialMenu';
export default class DisplayItems extends LightningElement {
    imageUrl = BackgroundImg;

    get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    }

    @api recordId;
    //Speacial Items
        items;
        @api errors;
        @wire(specialItems,{})
        wiredSpeacialItems({ error, data }) {
            if (data) {
                this.items = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }

        handleClick(event) {
            // Handle detail button click here
        }
}