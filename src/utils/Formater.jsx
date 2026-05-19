export const Formater = (value) => {
    return new Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(value);
}