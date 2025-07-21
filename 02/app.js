document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.cart__btn-calculate');
  const totalPrice = document.querySelector('.cart__total-price');
  const inputs = document.getElementsByClassName('cart__quantity');

  btn.addEventListener('click', () => {
    let sum = 0;

    Array.from(inputs).forEach(({ value, dataset }) => {
      const price = parseFloat(dataset.price);
      const quantity = parseInt(value);
      sum += price * quantity;
    });

    totalPrice.textContent = sum.toFixed(2);
  });
});
