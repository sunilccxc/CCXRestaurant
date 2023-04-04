import { LightningElement } from 'lwc';
import TableID from '@salesforce/schema/CCXR_Table__c.Name';
import Capacity from '@salesforce/schema/CCXR_Table__c.CCXR_Capacity__c';
import Assigned_Waiter from '@salesforce/schema/CCXR_Table__c.Assigned_Waiter__c';
import Restaurant_Employee from '@salesforce/schema/CCXR_Table__c.CCXR_Restaurant_Employee__c';
import Table_Status from '@salesforce/schema/CCXR_Table__c.CCXR_Table_Status__c';
import Table_Image_Link from '@salesforce/schema/CCXR_Table__c.Table_Image_Link__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class MultipletableCreation extends LightningElement
{
    objectApiName='CCXR_Table__c';
    fieldList=[TableID,Capacity,Assigned_Waiter,Restaurant_Employee,Table_Status,Table_Image_Link];
    handleTableCreate(event){
        const evt=new ShowToastEvent({
            title:"Table Create",
            message:"Record ID: "+event.detail.id,
            variant:"success"
        });
    }
}