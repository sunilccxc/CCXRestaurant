@isTest
private class CustomerTableStatusTest {
    
    @isTest
    private static void testGetCustomerTableStatus() {
        // Create test data
        CCXR_Customer__c customer = new CCXR_Customer__c(CCXR_Name__c = 'Test Customer', No_Of_Persons__c = 4,CCXR_Phone_Number__c ='90890');
        insert customer;
        
        CCXR_Table__c table = new CCXR_Table__c(CCXR_Capacity__c = 6);
        insert table;
        
        CCXR_Customer_Table_Status__c customerStatus = new CCXR_Customer_Table_Status__c(
            CCXR_Customer__c = customer.Id,
            CCXR_Table__c = table.Id,
            
            Customer_Table_Status__c = 'Occupied',
            Token_Number__c = 1234
        );
        insert customerStatus;
        
        // Call the method being tested
        CustomerTableStatusController.getCustomerTableStatus();
        
        // Verify the expected results
        System.assertEquals(4, customer.No_Of_Persons__c);
    }
}