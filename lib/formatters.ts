const CURRENCY_FORMATTER = new Intl.NumberFormat("fa-IR", {
  currency: "IRR",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMMATER = new Intl.NumberFormat("fa-IR");

export function formatNumber(number: number) {
  return NUMBER_FORMMATER.format(number);
}
