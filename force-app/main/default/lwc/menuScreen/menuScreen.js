import { LightningElement,api,wire,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import BackgroundImg from '@salesforce/resourceUrl/logo2';
import createOrderAndOrderLines from '@salesforce/apex/Order_Creation.createOrderAndOrderLines';
import getCustomerTableStatusData from '@salesforce/apex/Order_Creation.getCustomerTableStatusData';
//1.veg
import vegStarters from '@salesforce/apex/GetVegItems.vegStarterItems';
import vegSoups from '@salesforce/apex/GetVegItems.vegSoupItems';
import vegRice from '@salesforce/apex/GetVegItems.vegRiceItems';
import vegCurries from '@salesforce/apex/GetVegItems.vegCurryItems';
import vegDesserts from '@salesforce/apex/GetVegItems.vegDessertItems';
import Roti from '@salesforce/apex/GetVegItems.rotiItems';
//2.Non-Veg
import nonVegStarters from '@salesforce/apex/GetNonVegItems.nonVegStarterItems';
import nonVegSoups from '@salesforce/apex/GetNonVegItems.nonVegSoupItems';
import nonVegRice from '@salesforce/apex/GetNonVegItems.nonVegRiceItems';
import nonVegCurries from '@salesforce/apex/GetNonVegItems.nonVegCurryItems';
import nonVegDesserts from '@salesforce/apex/GetNonVegItems.nonVegDessertItems';
import nonVegRoti from '@salesforce/apex/GetNonVegItems.nonVegRotiItems';
//3. Beverage
import Water from '@salesforce/apex/GetBeverageItems.waterItems';
import Milkshakes from '@salesforce/apex/GetBeverageItems.milkshakeItems';
import IceCreams from '@salesforce/apex/GetBeverageItems.iceCreamItems';
import Sweets from '@salesforce/apex/GetBeverageItems.sweetItems';

export default class displayItemsScreen extends NavigationMixin(LightningElement) {
    @api itemid;
    @api quantitynumber=1;
    @api token;
    @api id;
    @api table;
    @api cname;
    @api  csn;
    @api id1;
    @track imageUrl = BackgroundImg;
    get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    }
    //1. Veg Starters
        contacts;
        @api errors;
        @api imageURL;
        @wire(vegStarters,{})
        wiredContacts({ error, data }) {
            if (data) {
                this.contacts = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
        handleChange1(event) {
            this.quantitynumber=event.target.value;
          }
        handleClick(event)
        {
            
           
            this.itemid=event.target.value;
            
            createOrderAndOrderLines({csn :this.id,itemid:this.itemid,quantity:this.quantitynumber})
           getCustomerTableStatusData({csn :this.id}) 
            .then(result=>{
                this.data=result;
               this.id1=this.data.Id
                alert(this.data);
            
               
             alert( this.data.Id);
            
                
            })
            .catch(error=>{
                this.error=error;
            })
        }
        generateBill()
        {
        
           this[NavigationMixin.Navigate]({
                type: "standard__component",
                attributes: {
                    componentName: "c__billingcomponent"
                },
                state: {
                   
                    c__order: this.id1
                  
                }
            });
      
        }

       

        //2. Veg Soups
        soups;
        @wire(vegSoups,{})
        wiredSoups({ error, data }) {
            if (data) {
                this.soups = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }

        


        //3. Veg Rice
        riceItem;
        @wire(vegRice,{})
        wiredRice({ error, data }) {
            if (data) {
                this.riceItem = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }

       

        //4. Veg Curries
        curries;
        @wire(vegCurries,{})
        wiredCurries({ error, data }) {
            if (data) {
                this.curries = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
      


        //5. Veg Desserts
        desserts;
        @wire(vegDesserts,{})
        wiredDesserts({ error, data }) {
            if (data) {
                this.desserts = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
       
        //1.6. Non-Veg Roti
        nonVegRoties;
        @wire(nonVegRoti,{})
        wiredNonVegRoti({ error, data }) {
            if (data) {
                this.nonVegRoties = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
       

        //2.1 Non-Veg Starters
        nonVegStarters;
        @wire(nonVegStarters,{})
        wiredNonVegStarters({ error, data }) {
            if (data) {
                this.nonVegStarters = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }

       

        //2.2 Non-Veg Soups
        nonVegSoups;
        @wire(nonVegSoups,{})
        wiredNonVegSoups({ error, data }) {
            if (data) {
                this.nonVegSoups = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }

       

        //2.3. Non-Veg Rice
        nonvegRiceItem;
        @wire(nonVegRice,{})
        wiredNonvegRiceItem({ error, data }) {
            if (data) {
                this.nonvegRiceItem = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }

      
        //2.4. Non-Veg Curries
        nonVegCurries;
        @wire(nonVegCurries,{})
        wiredNonVegCurries({ error, data }) {
            if (data) {
                this.nonVegCurries = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
        

        //2.5. Non-Veg Desserts
        nonVegDesserts;
        @wire(nonVegDesserts,{})
        wiredNonVegDesserts({ error, data }) {
            if (data) {
                this.nonVegDesserts = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
        
        //2.6. Non-Veg Roti
        roties;
        @wire(Roti,{})
        wiredRoti({ error, data }) {
            if (data) {
                this.roties = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
       


        //3.1 Water
        waterItem;
        @wire(Water,{})
        wiredWater({ error, data }) {
            if (data) {
                this.waterItem = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
       

        //3.2 Milkshakes
        milkshakes;
        @wire(Milkshakes,{})
        wiredMilkshakes({ error, data }) {
            if (data) {
                this.milkshakes = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
       

        //3.3 Ice Creams
        icecreams;
        @wire(IceCreams,{})
        wiredIceCreams({ error, data }) {
            if (data) {
                this.icecreams = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
      

        //3.4 Sweets
        sweets;
        @wire(Sweets,{})
        wiredSweets({ error, data }) {
            if (data) {
                this.sweets = data;
                this.errors = undefined;
            } else if (error) {
                console.error=error;
                this.records = undefined;
            }
        }
       

}