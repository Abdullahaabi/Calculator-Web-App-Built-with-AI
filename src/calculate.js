export function calculateLoan(principal, annualRate, years) {
  if (![principal,annualRate,years].every(Number.isFinite)) throw new Error('Enter valid numbers in every field.');
  if (principal <= 0 || principal > 1e12) throw new Error('Loan amount must be greater than 0 and at most 1 trillion.');
  if (annualRate < 0 || annualRate > 100) throw new Error('Interest rate must be between 0% and 100%.');
  if (years <= 0 || years > 50 || !Number.isInteger(years*12)) throw new Error('Loan tenure must be between 1 month and 50 years, in whole months.');
  const months=Math.round(years*12), rate=annualRate/1200;
  const payment=rate===0?principal/months:principal*rate/(1-Math.pow(1+rate,-months));
  if (!Number.isFinite(payment)) throw new Error('Unable to calculate. Please review your inputs.');
  let balance=principal; const schedule=[];
  for(let month=1;month<=months;month++){
    const interest=balance*rate;
    const principalPaid=month===months?balance:Math.min(balance,payment-interest);
    const paid=principalPaid+interest;
    balance=Math.max(0,balance-principalPaid);
    schedule.push({month,payment:paid,principal:principalPaid,interest,balance});
  }
  const totalPayment=schedule.reduce((sum,r)=>sum+r.payment,0);
  return {payment,totalPayment,totalInterest:totalPayment-principal,schedule};
}
