@isTest
private class waiterScreenTest {

    @isTest
   private static void testGetAllAccountss() {
        // Test data setup
        CCXR_Chef_Orders__c order = new CCXR_Chef_Orders__c(
            CCXR_Order_Id__c = 'a022w00000nfbCVAAY',
            CCXR_Items_ID__c = 'a002w00000aDoHxAAK',
            Order_status__c = 'Ready'
        );
        insert order;

        // Call the method being tested
        List<CCXR_Chef_Orders__c> orders = waiterScreenController.getAllAccountss();

        // Assert the results
        System.assertEquals(1, orders.size());
        System.assertEquals(order.Id, orders[0].Id);
    }
	@isTest
    private static void testStatuspick() {
        // Test data setup
        CCXR_Chef_Orders__c order = new CCXR_Chef_Orders__c(
            CCXR_Order_Id__c = 'a022w00000nfbCVAAY',
            CCXR_Items_ID__c = 'a002w00000aDoHxAAK',
            Order_status__c = 'Ready',
            button3__c = false,
            button4__c = false
        );
        insert order;

        // Call the method being tested
        waiterScreenController.statuspick(order.Id, true, true);

        // Retrieve the updated record
        CCXR_Chef_Orders__c updatedOrder = [SELECT Id, Order_status__c, button3__c, button4__c 
                                            FROM CCXR_Chef_Orders__c WHERE Id = :order.Id];

        // Assert the results
        System.assertEquals('Picked-up', updatedOrder.Order_status__c);
        System.assertEquals(true, updatedOrder.button3__c);
        System.assertEquals(true, updatedOrder.button4__c);
    }
    @isTest
    private static void testStatusser() {
        // Test data setup
        CCXR_Chef_Orders__c order = new CCXR_Chef_Orders__c(
            CCXR_Order_Id__c = 'a022w00000nfbCVAAY',
            CCXR_Items_ID__c = 'a002w00000aDoHxAAK',
            Order_status__c = 'Ready',
            button4__c = false
        );
        insert order;

        // Call the method being tested
        waiterScreenController.statusser(order.Id, true);

        // Retrieve the updated record
        CCXR_Chef_Orders__c updatedOrder = [SELECT Id, Order_status__c, button4__c FROM CCXR_Chef_Orders__c WHERE Id = :order.Id];

        // Assert the results
        System.assertEquals('Served', updatedOrder.Order_status__c);
        System.assertEquals(true, updatedOrder.button4__c);
    }
}