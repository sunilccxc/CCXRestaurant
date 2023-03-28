import { LightningElement, track, wire, api } from 'lwc';
import getAllFeed from '@salesforce/apex/displayingorderlineitems.displayingorder';
import {refreshApex} from '@salesforce/apex';
export default class Displayingorderlineitems extends LightningElement {
  @api id;
  @track data;
  @track errors;

  @wire(getAllFeed, {csn: '$id'})
wiredData;

  handleRefresh() {
    getAllFeed({csn : this.id})
        .then(result => {
            this.data = result;
            return refreshApex(this.wiredData);
        })
        .catch(error => {
            this.errors = error;
        });
  }
}
