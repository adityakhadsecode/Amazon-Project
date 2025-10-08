export function formatCurrency(amountInCents) {
  return (Math.round(amountInCents) / 100).toFixed(2);
}

export default formatCurrency;
