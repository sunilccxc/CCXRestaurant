public class Order_Creation 
{
    public void  createOrderAndOrderLines(id cid,id tid)
    {
      
        
         CCXR_Order__c order = new CCXR_Order__c (); 
        CCXR_Order_Line_Item__c orderlineitems = new CCXR_Order_Line_Item__c (); 
        
       list< CCXR_Order__c> currentord = [select CCXR_Customer__c,CCXR_Table__c from CCXR_Order__c where 
                                          CCXR_Customer_Table_Status__r.CCXR_Customer__r.id=:cid AND 
                                          CCXR_Customer_Table_Status__r.CCXR_Table__r.id =:tid AND 
                                          CCXR_Order_Status__c ='Progress'];
        if(currentord ==null)
        {
            CCXR_Order__c neworder = new CCXR_Order__c();
            neworder.CCXR_Order_Status__c ='Progress';
            insert neworder;
        }
       
      
         
    }
    
/*,id itemid,integer quantity*/
}