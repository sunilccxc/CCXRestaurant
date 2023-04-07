import { LightningElement,wire,track } from 'lwc';
import myStyles from './ccrFeedbackTable.css';
import getAllFeed from '@salesforce/apex/EmployeeDataController.getAllFeedback';
//import myStyles from '@salesforce/resourceUrl/ccrFeedbackTable';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class CcrFeedbackTable extends LightningElement {

    @track records;
    @track errors;
    

    @wire(getAllFeed,{} )
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
}