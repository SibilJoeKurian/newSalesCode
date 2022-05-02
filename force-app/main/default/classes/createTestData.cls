public with sharing class createTestData {
    @AuraEnabled
    public static String createData(){
        //Email__c,name__c,Phone__c
        Test_Object__c data = new Test_Object__c();
        data.Email__c = 'test@gmail.com';
        data.name__c = 'firstName lastName';
        data.Phone__c = '123456789';
        insert(data);
        return data.Id;
    }
}
