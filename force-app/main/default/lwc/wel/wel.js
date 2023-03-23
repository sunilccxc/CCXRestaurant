import { LightningElement,api } from 'lwc';

import getCustomerTableStatusData1 from '@salesforce/apex/test.igg1';
import { NavigationMixin } from 'lightning/navigation';
export default class Wel extends LightningElement {
    @api id='a0P5g00000EgzfFEAR'
    @api id1;
    connectedCallback()
    {
      
        }
       
        generateBill()
        {
            getCustomerTableStatusData1({csn: this.id}) 
            .then(result=>{
                this.data=result;
                alert(this.data);
        
            alert(this.data.Id);  
             
                
            })
            .catch(error=>{
                this.error=error;
            }) 
               
           
          
          
    }
      
}