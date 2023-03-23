import { LightningElement,api,wire } from 'lwc';
import vegStarters from '@salesforce/apex/tabsssss.vegStarterItems';

export default class MyComponent extends LightningElement {

    @api cat;
    @api sub;
    contacts;
    @api errors;
    @api imageURL;
    /*@wire(vegStarters,{})
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.errors = undefined;
        } else if (error) {
            console.error=error;
            this.records = undefined;
        }
    }*/
    call(event)
    {
        this.cat=event.target.value;
       
        
    }
    call1(event)
    {
        this.sub=event.target.value;
       
      
        vegStarters({cat: this.cat,sub: this.sub})
        .then(result=>{
            this.contacts=result;
           
        })
        .catch(error=>{
            this.error=error;
        }) 
        
    } 
       
       
    
    
       
}
