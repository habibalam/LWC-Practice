public with sharing class OpportunitySearchController {
  
    @AuraEnabled
    public static List<Opportunity> SearchOpportunities(String OpportunityName){
        String keyinput = '%'+OpportunityName+'%';
        return[select Id, Name, StageName, Type FROM Opportunity where name like:keyinput];
    }


}
