import { LightningElement,api,wire,track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { decodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
import BackgroundImg from '@salesforce/resourceUrl/logo';
//1.veg
import vegStarters from '@salesforce/apex/GetNonVegItems.nonVegStarterItems';
import vegSoups from '@salesforce/apex/GetNonVegItems.nonVegSoupItems';
import vegRice from '@salesforce/apex/GetNonVegItems.nonVegCurryItems';
import vegCurries from '@salesforce/apex/GetNonVegItems.nonVegRiceItems';
import vegDesserts from '@salesforce/apex/GetNonVegItems.nonVegDessertItems';
import Roti from '@salesforce/apex/GetNonVegItems.nonVegRotiItems';
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

import { NavigationMixin } from 'lightning/navigation';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class displayItemsScreen extends NavigationMixin(LightningElement) {
    @wire(CurrentPageReference)
    setCurrentPageRef(pageRef) {
        alert(pageRef+'pageRef from Item');
        if (pageRef.state.defaultFieldValues) {
            
            const decodedValues = decodeDefaultFieldValues(pageRef.state.defaultFieldValues);
            console.log(decodedValues);
            parseInt(decodedValues);
            alert(decodedValues);
        }
    }
   

    imageUrl = BackgroundImg;

    get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    }
    @api recordId;

    //1. Veg Starters
    starters;
    @track itemid;
    @api errors;
    @api imageURL;
    @wire(vegStarters,{})
   
    wiredContacts({ error, data }) {
        if (data) {
            this.starters = data;
            this.errors = undefined;
        }
        else if (error) 
        {
            console.error=error;
            this.records = undefined;
        }
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