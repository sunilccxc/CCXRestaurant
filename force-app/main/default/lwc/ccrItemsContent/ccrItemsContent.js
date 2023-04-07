import { LightningElement,track,wire,api } from 'lwc';
import getItmList from '@salesforce/apex/EmployeeDataController.getItemList';
import deleteRecordItm from '@salesforce/apex/EmployeeDataController.deleteItems';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import BackgroundImg from '@salesforce/resourceUrl/logo2';
import { NavigationMixin } from "lightning/navigation";
import {refreshApex} from '@salesforce/apex';
export default class CcrRS extends NavigationMixin(LightningElement ) {
   // imageUrl = BackgroundImg;

    @track error;
    @track  itmList;
    @track i=0;
    @api upRecordIDs;
    @api imageURL;
    @api drecordId;

    
    @track isShowModal=false;
    showModalBox() {  
        this.isShowModal = true;
    }
    hideModalBox() {  
        this.isShowModal = false;
    }

    @track showModalBox1 = false;
    showComp1() {
        this.showModalBox1 = true;
    }
    
    
    itmList = [
        { id:'1',label: 'Item Name', fieldName: 'CCXR_Item_Name__c' },
        { id:'2',label: 'Item Status', fieldName: 'CCXR_Item_Status__c' },
        { id:'3',label: 'Item Image', fieldName: 'Item_Image_Link__c' },
        { id:'4',label: 'Item Description', fieldName: 'CCXR_Description__c' },
        { id:'5',label: 'Item Description', fieldName: 'CCXR_Price__c' }
       ];
       @wire(getItmList,{ } )
       wiredColumns(result)
       {
         this.wiredData = result;
         this.itmList = result.data;
         this.errors = result.error;
       }
      
       /* get getBackgroundImage(){
            return `background-image:url("${this.imageUrl}")`;
        }*/
    handleDelete(event) 
        {
            this.drecordId=event.target.value;
            
            
            deleteRecordItm({delRecordId:this.drecordId})
              .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Record deleted successfully.',
                            variant: 'success'
                        })
                    );
                    return refreshApex(this.wiredData);
                })
                .catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: 'Error deleting record: ' + error.body.message,
                            variant: 'error'
                        })
                    );
                });
                
        }
        handleUpdate(event)
        {
            
             this.upRecordIDs=event.target.value;
            
            // getItmList({upRecordId:this.upRecordIDs})
             this[NavigationMixin.Navigate]({
                 type: 'standard__recordPage',
                 attributes: {
                     recordId: this.upRecordIDs,
                     objectApiName: 'CCXR_Items__c',
                     actionName: 'edit'
                 },
             });
             this.i=0
             
         }
         handleMouseOver() {
             if(this.i >= 1)
             {
                 return refreshApex(this.wiredData);
             }
             this.i++;
             console.log(this.i)
         }
}