export const formatPrice = (amt) => {
  return '$' + amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
