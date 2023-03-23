import { LightningElement,api } from 'lwc';
import Roti from '@salesforce/apex/tabsssss.rotiItems';

export default class MyComponent extends LightningElement {
    @api contacts;
    @api cat;
    @api sub;
    call(event)
    {
        this.cat=event.target.value;
       
        alert(this.cat);
    }
    call1(event)
    {
        this.sub=event.target.value;
       
        alert(this.sub);
       
    }
    display()
    {
        Roti({cat:cat,sub:sub})
        .then(result=>{
            this.data=result;
            alert(this.data);
        })
        .catch(error=>{
            this.error=error;
        })
    } 
}
