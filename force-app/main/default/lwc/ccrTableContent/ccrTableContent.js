import { LightningElement,track,api,wire } from 'lwc';
import deleteTables from '@salesforce/apex/EmployeeData.deleteTable';
import getTables from '@salesforce/apex/TableController.getTableData';
//import upTables from '@salesforce/apex/EmployeeData.updateTable';
import BackgroundImg from '@salesforce/resourceUrl/logo2';

export default class CcrTableContent extends LightningElement {
    imageUrl = BackgroundImg;
    @track getTab;
    @api drecordId;
   // @api upRecord;
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

    
    @wire(getTables)
    WiredItems({
         error,
         data
     }) {
         if (data) {
             this.getTab = data;
         } else if(error) {
             this.error = error;
         }
     }

     get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    }
    
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

       /* handleUpdate(event){
            this.upRecord=event.target.value;
            upTables({upRecordId:this.upRecord})
            .then(() => {
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: 'upRecord',
                        objectApiName: 'CCXR_Table__c',
                        actionName: 'edit'
                    }
                });
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
            
        }*/
}