public with sharing class payment {
    public payment() {

    }
    @AuraEnabled(cacheable=true)
    public static CCXR_Order__c upi(id order){
        CCXR_Order__c ord=[select id,Name,CCXR_Net_Total__c from CCXR_Order__c where id=:order];
        return ord;
        
    }
    
} 