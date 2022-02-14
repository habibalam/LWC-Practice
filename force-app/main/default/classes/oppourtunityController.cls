public with sharing class oppourtunityController {
    
    @AuraEnabled
    public static List<Opportunity> fetchOpportunities(){
        return[select Id, Name, StageName, Type FROM Opportunity LIMIT 10];
    }

    @AuraEnabled
    public static List<Opportunity> fetchTwoOpps(){

    return [SELECT Id,Name,StageName,Type FROM Opportunity LIMIT 2];

    }

}
