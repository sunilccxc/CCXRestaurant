import { LightningElement,api,track,wire } from 'lwc';
import getAllFeed from '@salesforce/apex/payment.upi';
export default class Upipayment extends LightningElement {
    @api order;
    @track data;
    @track amount;
    
    connectedCallback(){
  alert(this.order);
    getAllFeed({order : this.order})
        .then(result => {
            this.data = result;
            alert(this.data);
            this.amount=result.CCXR_Net_Total__c;     
            alert(this.amount);       
        })
        .catch(error => {
            this.errors = error;
        });
}
}