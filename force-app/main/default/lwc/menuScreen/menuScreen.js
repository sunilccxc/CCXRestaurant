import { LightningElement,api,wire,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//import BackgroundImg from '@salesforce/resourceUrl/logo2';
import createOrderAndOrderLines from '@salesforce/apex/Order_Creation.createOrderAndOrderLines';
//1.veg
import menuItems from '@salesforce/apex/GetItems.getMenuItems';
import getCustomerTableStatusData from '@salesforce/apex/Order_Creation.getCustomerTableStatusData';
import getCustomerTableStatusData1 from '@salesforce/apex/Order_Creation.getCustomerTableStatusData1';


export default class displayItemsScreen extends NavigationMixin(LightningElement) {

    @api cat;
    @api sub;
    items;
    @api errors;
    @api imageURL;

    @api itemid;
    @api quantitynumber=1;
    @api token;
    @api id;
    @api table;
    @api cname;
    @api ordername;
    /*@wire(vegStarters,{})
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.errors = undefined;
        } else if (error) {
            console.error=error;
            this.records = undefined;
        }
    }*/
    call(event)
    {
        this.cat=event.target.value;
       
        
    }
    call1(event)
    {
        this.sub=event.target.value;
       
      
        menuItems({cat: this.cat,sub: this.sub})
        .then(result=>{
            this.items=result;
           
        })
        .catch(error=>{
            this.error=error;
        }) 
        
    }
    handleChange1(event) {
        this.quantitynumber=event.target.value;
      }
    handleClick(event)
    {
        this.itemid=event.target.value;
        
        createOrderAndOrderLines({csn :this.id,itemid:this.itemid,quantity:this.quantitynumber})
        
        
    } 
    generateBill()
    {
        getCustomerTableStatusData1({csn :this.id})  
        getCustomerTableStatusData({csn :this.id}) 
        .then(result=>{
            this.data=result;
            this.order=this.data.Id;
            alert(this.order);
            alert(this.data.Name);
           this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__billingcomponent"
            },
            state: {
                c__order: this.data.Id,
                c__ordername:this.data.Name
            }
        });
           
        })
      
       
       
}
}

