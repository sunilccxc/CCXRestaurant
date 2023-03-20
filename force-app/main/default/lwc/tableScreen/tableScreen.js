import { LightningElement,track } from 'lwc';

export default class TableScreen extends LightningElement 
{
    @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

   @track isShowModal1 = false;

    showModalBox1() {  
        this.isShowModal1 = true;
    }

    hideModalBox1() {  
        this.isShowModal1 = false;
    }

    @track isShowModal2 = false;

    showModalBox2() {  
        this.isShowModal2 = true;
    }

    hideModalBox2() {  
        this.isShowModal2 = false;
    }
}