@isTest
private class customertableControllerTest {
    @isTest static void testGetAllAccountsas() {
        // Create test data
        CCXR_Customer_Table_Status__c testRecord = new CCXR_Customer_Table_Status__c(Customer_Table_Status__c = 'Waiting');
        insert testRecord;
        
        // Call the method being tested
        List<CCXR_Customer_Table_Status__c> result = customertableController.getAllAccountsas();
        
        // Verify the expected result
        System.assertEquals(1, result.size());
        
    }
    
    @isTest static void testSetstatus() {
        // Create test data
        CCXR_Table__c testTable = new CCXR_Table__c(CCXR_Table_Status__c = 'Vacant');
        insert testTable;
        
        CCXR_Customer_Table_Status__c testRecord = new CCXR_Customer_Table_Status__c(Customer_Table_Status__c = 'Waiting', Token_Number__c = 0);
        insert testRecord;
        
        // Call the method being tested
        List<CCXR_Customer_Table_Status__c> result = customertableController.setstatus(testRecord.Id, testTable.Id, 123);
        
        // Verify the expected result
        System.assertEquals(1, result.size());
        System.assertEquals('Occupied', result[0].Customer_Table_Status__c);
        
        System.assertEquals(123, result[0].Token_Number__c);
    }
    
    @isTest static void testTsetstatus() {
        // Create test data
        CCXR_Table__c testTable = new CCXR_Table__c(CCXR_Table_Status__c = 'Vacant');
        insert testTable;
        
        // Call the method being tested
        List<CCXR_Table__c> result = customertableController.tsetstatus(testTable.Id);
        
        // Verify the expected result
        System.assertEquals(1, result.size());
        System.assertEquals('Occupied', result[0].CCXR_Table_Status__c);
    }
    
    @isTest static void testGetAccountNames() {
        // Create test data
        CCXR_Table__c testTable1 = new CCXR_Table__c(CCXr_Capacity__c = 2, CCXR_Table_Status__c = 'Vacant');
        CCXR_Table__c testTable2 = new CCXR_Table__c(CCXr_Capacity__c = 4, CCXR_Table_Status__c = 'Reserved');
        insert new List<CCXR_Table__c> { testTable1, testTable2 };
        
        // Call the method being tested
        List<CCXR_Table__c> result = customertableController.getAccountNames();
        
        // Verify the expected result
        System.assertEquals(2, result.size());
       
    }
    
    @isTest static void testGetCustomerTableStatus() {
        // Create test data
        CCXR_Customer_Table_Status__c testRecord = new CCXR_Customer_Table_Status__c(Customer_Table_Status__c = 'Occupied');
        insert testRecord;
        
        // Call the method being tested
        List<CCXR_Customer_Table_Status__c> result = customertableController.getCustomerTableStatus();
    }
}