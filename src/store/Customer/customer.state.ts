export interface BillData {
    acctId: string;
    customerName: string;
    billId: string;
    billStatus: string;
    billDate: string;
    billingPeriodEndDate: string;
    billingPeriodStartDate: string;
    dueDate: string;
    amtDue: number;
    prevBalance: number;
    totalAdjustments: number;
    totalCurrentCharges: number;
    totalBalanceAfterBill: number;
    hasBills: true;
    summaryFlag: false;
    paymentAmount: number;
    paymentDate: string;
  }
  
  export type ViewBillState = {
    readonly viewBillDetails: BillData | undefined;
    // readonly selectedAccount: Account | null;
    readonly isLoading: boolean | false;
    readonly error: {} | undefined;
  };
  
  const INITIAL_STATE: ViewBillState = {
    viewBillDetails: undefined,
    isLoading: false,
    error: undefined,
  };
  
  export default INITIAL_STATE;
  