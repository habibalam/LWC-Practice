public with sharing class AccountController {

   @AuraEnabled(cacheable=true)
   public static List<account> getAccounts(){
        return [SELECT Id,Name,phone,website,Industry,AnnualRevenue from Account LIMIT 10];
    }
    
    @AuraEnabled 
    public static Account getAccount(Id accId){
        return [SELECT Id, Name, Phone, Website, Industry FROM Account WHERE Id = :accId LIMIT 1];
    }
}
