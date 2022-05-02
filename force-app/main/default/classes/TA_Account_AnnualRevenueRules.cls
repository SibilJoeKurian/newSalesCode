public class TA_Account_AnnualRevenueRules implements TriggerAction.BeforeInsert{
    @TestVisible
    private static final String INVALID_REVENUE_VALUE = 'Revenue value should be greater than 1000';
    public void beforeInsert(List<Account> newList){
        for(Account acc: newList){
            if(acc.AnnualRevenue == null || acc.AnnualRevenue<1000){
                acc.addError(INVALID_REVENUE_VALUE);
            }
        }
    }
}
