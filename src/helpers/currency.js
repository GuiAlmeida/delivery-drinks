export function filterCurrency(value) {
  isNaN(parseFloat(value));
  const formatter = new Intl.NumberFormat([], {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(value);
}