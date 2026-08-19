function calculateTip(billAmount, tipPercentage) {
  let tip = billAmount * (tipPercentage / 100);
  let total = billAmount + tip;

  return `Bill: $${billAmount}, Tip (${tipPercentage}%): $${tip}, Total: $${total}`;
}

console.log(calculateTip(50, 20));
