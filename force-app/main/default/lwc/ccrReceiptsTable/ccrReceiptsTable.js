import { LightningElement,wire,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; 
import myStyles from './ccrReceiptsTable.css';
import getReceiptList from '@salesforce/apex/ReceiptsDataController.getReceiptList';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class CcrReceiptsTable extends NavigationMixin(LightningElement) {
    @track records;
    @track errors;
    

    @wire(getReceiptList,{} )
    wiredCases({data,error}){
    if(data)
    {
        this.records = data;
        this.errors = undefined;
    }
    if(error)
    {
        this.errors = error;
        this.records = undefined;
        }
    }
    renderedCallback() {
      Promise.all([
        loadStyle(this, myStyles)
      ]).then(() => {
        console.log('CSS loaded successfully');
      }).catch(error => {
        console.error(error);
      });
    }


    redirectToReport(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this[NavigationMixin.Navigate]({
          type: 'standard__recordPage',
          attributes: {
              recordId: '00O2w00000CsTzLEAV',
              objectApiName: 'Report',
              actionName: 'view'
          }
      });
  }
}