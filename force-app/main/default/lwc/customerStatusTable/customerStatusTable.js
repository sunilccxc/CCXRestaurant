import { LightningElement,api,track,wire } from 'lwc';
import getAllAccountsas from '@salesforce/apex/customertable.getAllAccountsas';
import status from '@salesforce/apex/customertable.setstatus';
import statuss from '@salesforce/apex/customertable.tsetstatus';
import getAccountNames from '@salesforce/apex/customertable.getAccountNames';
import {refreshApex} from '@salesforce/apex';
export default class CustomerStatusTable extends LightningElement {
    @api records;
    @api errors;
    @api tbid;
    @api itemId;
    @api recordid;
    accountOptions = [];
    @wire(getAllAccountsas,{ } )
    wiredCases(result)
    {
      this.wiredData = result;
      this.records = result.data;
      this.errors = result.error;
    

    }
    handleSelection(event)
    {
      this.tbid=event.target.value;
      
    }
   
    handleButtonClick(event)
    {
      
        this.recordid=event.target.value;
       
        alert( this.tbid+'');
        
        status({recid : this.recordid,tid :this.tbid })
        .then(() => {
          // Refresh the data
          return refreshApex(this.wiredData);
        })
        .catch((error) => {
          console.error(error);
        });
        statuss({recid : this.tbid })
        .then(() => {
          // Refresh the data
          return refreshApex(this.wiredData);
        })
        .catch((error) => {
          console.error(error);
        });
        
    
    }
    handleMouseOver()
    {
     
      getAccountNames()
      .then(result => {
        this.accountOptions = result.map(account => ({
          label: account.Name+','+'Capcity'+account.CCXR_Capacity__c,
          value: account.Id
        }));
      })

    }

    
    

   
    connectedCallback() 
    {
    
      getAccountNames()
      .then(result => {
        this.accountOptions = result.map(account => ({
          label: account.Name+','+'Capcity'+account.CCXR_Capacity__c,
          value: account.Id
        }));
      })
      
    }
    
}