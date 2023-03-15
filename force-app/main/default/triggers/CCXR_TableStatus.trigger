trigger CCXR_TableStatus on CCXR_Customer_Table_Status__c (after insert) 
{
	for(CCXR_Customer_Table_Status__c cts:trigger.new)
    {
        
    }
}