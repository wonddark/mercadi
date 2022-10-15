export const formatMoney = (val: string) => {
  const formatter = new Intl.NumberFormat("es-CU", {
    style: "currency",
    currency: "CUP",
  });
  return formatter.format(Number(val));
};
