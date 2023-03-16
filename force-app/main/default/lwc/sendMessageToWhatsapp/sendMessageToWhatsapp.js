import { LightningElement, track } from 'lwc';
import sendEmail from '@salesforce/apex/SendWhatsappMessage.send';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SendMessageToWhatsapp extends LightningElement {
     mobileno;
     message;

    _title;
    _message;
    _variant;

    handleClick=()=>{
        
        this.mobileno = this.template.querySelectorAll('lightning-input')[0].value;
        this.message = this.template.querySelectorAll('lightning-input')[1].value;
        sendEmail({mobileno: this.mobileno, message: this.message}).then(result=>{
            if(result == '201'){
                this._message = 'Message sent successfully';
                this._variant = 'success';
                this.showNotification();
                this.template.querySelectorAll('lightning-input')[0].value = '';
                this.message = this.template.querySelectorAll('lightning-input')[1].value='';
            }else{
                this._message = 'Message failed to send';
                this._variant = 'Error';
                this.showNotification();
            }
        });
    };

    showNotification(_title, _message, variant) {
        const evt = new ShowToastEvent({
            title: this._title,
            message: this._message,
            variant: this._variant,
        });
        this.dispatchEvent(evt);
    }
}