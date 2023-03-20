import { LightningElement,track,wire } from 'lwc';
import getCustomer from '@salesforce/apex/CustomerTableStatus.getCustomer';

export default class WaiterScreen extends LightningElement 
{
    @track customer=false;
    @track isShowModal = false;
    @track customerstatus= false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

    AssignTable()
    {
        this.customer=true;
    }
    AllCustomerStatus()
    {
        this.customerstatus=true;
    }
    
    
}