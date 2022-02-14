public with sharing class AccountsController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account>getAccounts(){

        return [select id,name,type,Phone, Website, Industry, Industry_Image__c from Account limit 10];
    }


    @AuraEnabled(cacheable=true)
    public static List<Account>getAccountss(){

        return [select id,name,type,phone,industry from Account limit 10];
    }
}
