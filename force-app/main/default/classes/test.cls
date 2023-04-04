public class test {
 @AuraEnabled
    
        public static CCXR_Order__c  igg()
        {
          
            CCXR_Order__c cts = [select id from CCXR_Order__c limit 1];
            system.debug(cts.id);
            return cts;
        }
}