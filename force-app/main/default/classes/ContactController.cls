public with sharing class ContactController {
    
    @AuraEnabled
   public static List<Contact> fetchFewContacts(){

    return [select Id,Name,phone,email from Contact LIMIT 5];
   }

}
