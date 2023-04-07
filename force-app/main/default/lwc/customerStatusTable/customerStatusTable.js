import { LightningElement,api,track,wire } from 'lwc';
import getAllTable from '@salesforce/apex/CustomerTableController.getAllTable';
import status from '@salesforce/apex/CustomerTableController.setstatus';
import statuss from '@salesforce/apex/CustomerTableController.tsetstatus';
import getTableRecords from '@salesforce/apex/CustomerTableController.getTableRecords';
import {refreshApex} from '@salesforce/apex';
export default class CustomerStatusTable extends LightningElement {
    @api records;
    @api randomno
    @api errors;
    @api tbid;
    @api itemId;
    @api recordid;
    @track i=0;
    accountOptions = [];
    @wire(getAllTable,{ } )
    wiredCases(result)
    {
      this.wiredData = result;
      this.records = result.data;
      this.errors = result.error;
    }
    @wire(getTableRecords,{ } )
    wirednames(result1)
    {
      this.wiredData1 = result1;
      this.records1= result1.data;
      this.errors1 = result1.error;
    }
    handleSelection(event)
    {
      this.tbid=event.target.value;
      
    }
  
    handleButtonClick(event)
    {
      this.randomno=Math.floor(Math.random() * (2000 - 1000)) + 1000;
      alert(this.randomno);
      
      
        this.recordid=event.target.value;
       
      
        status({recid : this.recordid,tid :this.tbid,ran : this.randomno })
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
          return refreshApex(this.wiredData1);
        })
        .catch((error) => {
          console.error(error);
        });
        this.i=0;
      console.log(this.i);
    
    }
 

    
   
   
  
    
    handleMouseOver() {
      if(this.i >= 1)
      {
        return;
      }
    
      getTableRecords()
     
        .then(result => {
          this.accountOptions = result.map(account => ({
            label: account.Name+','+'Capcity'+account.CCXR_Capacity__c,
            value: account.Id
            
          }));
          
        })
    this.i++;
  console.log(this.i);
      
    }
    
}