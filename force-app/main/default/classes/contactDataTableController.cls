public with sharing class contactDataTableController {
    @AuraEnabled
    public static String getContactData(){
       List<ContactWrapper> contactDetailsList = new List<ContactWrapper>();
       List<Test_Object__c> contacList =  [SELECT Email__c,name__c,Phone__c,createdDate from Test_Object__c ];
       for(Test_Object__c c: contacList){
            ContactWrapper currentContact = new ContactWrapper();
            currentContact.email = c.Email__c;
            currentContact.name = c.name__c;
            currentContact.phone = c.Phone__c;
            currentContact.createdDate = c.CreatedDate;
            contactDetailsList.add(currentContact);
       }
       return JSON.serialize(contactDetailsList);
    }
    public Class ContactWrapper{
        String email;
        String phone;
        String name;
        DateTime createdDate;
    }
}
