/**
 * Sample frontend-only Gold Loan estimate.
 * Not a real lending policy. Rules can be changed later.
 */
export function estimateGoldLoan({
  goldWeight,
  goldPurity,
  marketGoldRate,
  loanToValueRatio = 0.75,
}) {
  const weight = Number(goldWeight) || 0;
  const purity = Number(goldPurity) || 0;
  const rate = Number(marketGoldRate) || 0;
  const ltv = Number(loanToValueRatio) || 0;

  const purityFactor = purity / 24;
  const estimatedGoldValue = weight * rate * purityFactor;
  const estimatedLoanAmount = estimatedGoldValue * ltv;

  return {
    estimatedGoldValue,
    estimatedLoanAmount,
  };
}

export function formatINR(amount) {
  const value = Number(amount) || 0;

  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return 'Rs ' + Math.round(value).toLocaleString('en-IN');
  }
}
