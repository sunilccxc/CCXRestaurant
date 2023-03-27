public with sharing class displayingorderlineitems {
    @AuraEnabled(cacheable=true)
    
    public static list<CCXR_Order_Line_Item__c> displayingorder(id csn)
   
    {
        CCXR_Order__c cts = [select id from CCXR_Order__c where CCXR_Customer_Table_Status__r.id=:csn and CCXR_Order_Status__c='Progress'];
        id ord=cts.id;
       list<CCXR_Order_Line_Item__c> orditem = [select CCXR_Item_Name__c,CCXR_Order_Id__r.Name,CCXR_Order_ID__c,CCXR_Price__c,CCXR_Quantity__c,CCXR_Order_Id__r.id
                                 from CCXR_Order_Line_Item__c where CCXR_Order_Id__r.id=:ord];
                                        
      return orditem;
    }
   
}