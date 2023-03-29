import { LightningElement, track, wire, api } from 'lwc';
import getAllFeed from '@salesforce/apex/displayingorderlineitems.displayingorder';
import {refreshApex} from '@salesforce/apex';
export default class Displayingorderlineitems extends LightningElement {
  @api id;
  @track data;
  @track errors;
  @wire(getAllFeed,{csn: '$id' } )
  wiredCases(result)
  {
    this.wiredData = result;
    this.data = result.data;
    this.errors = result.error;
    
  }
  connectedCallback() {
 
    window.addEventListener('message', this.handleMessage.bind(this));
    
   
  }

  

  handleMessage(event) {
    if (event.data.type === 'doSomething') {
       
        this.doSomething();

        
    }
  }

  doSomething() 
  {
   
    alert('dfsa');
    getAllFeed({csn : this.id})
        .then(result => {
            this.data = result;
            alert(this.data);
            return refreshApex(this.wiredData); 
        })
        .catch(error => {
            this.errors = error;
        });
        
  }

}
