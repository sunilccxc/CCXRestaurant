import { LightningElement,track,api,wire } from 'lwc';
import deleteTables from '@salesforce/apex/EmployeeDataController.deleteTable';
import getTables from '@salesforce/apex/EmployeeDataController.getTableData1';
//import BackgroundImg from '@salesforce/resourceUrl/logo2';
import { NavigationMixin } from "lightning/navigation";
import {refreshApex} from '@salesforce/apex';
export default class CcrTableContent extends NavigationMixin(LightningElement )
{
    //imageUrl = BackgroundImg;
    @track getTab;
    @api drecordId;
    @api upRecordIDs;
    @track i=0;

    @track isShowModal = false;
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
    @wire(getTables,{ } )
    wiredColumns(result)
    {
      this.wiredData = result;
      this.getTab = result.data;
      this.errors = result.error;
    }
    
    

    /* get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    }
    */
    handleDelete(event) 
        {
            this.drecordId=event.target.value;
            deleteTables({tabRecordId:this.drecordId})
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
            //getTables({upRecordId:this.upRecordIDs})
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.upRecordIDs,
                    objectApiName: 'CCXR_Table__c',
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