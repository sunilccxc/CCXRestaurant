
import { LightningElement,track ,wire,api} from 'lwc';
import getAllFeed from '@salesforce/apex/displayingorderlineitems.displayingorder';
import {refreshApex} from '@salesforce/apex';

export default class Displayingorderlineitems extends LightningElement
 {
    @api id;
    @track data;
    @track errors;
  
    connectedCallback(){
       
        getAllFeed({csn :this.id}) 
      
            .then(result=>{
                this.data=result;
               
                alert(this.data);
            })
            .catch(error=>{
                this.error=error;
            })
    }
 }
