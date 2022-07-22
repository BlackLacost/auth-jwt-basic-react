export const toRub = () =>
  new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'rub',
    minimumFractionDigits: 0,
  })
