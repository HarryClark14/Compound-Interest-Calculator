document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("interest-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const principal = parseFloat(document.getElementById("principal").value);
      const rate = parseFloat(document.getElementById("rate").value);
      const compounding = parseInt(
        document.getElementById("compounding").value,
        10
      );
      const years = parseInt(document.getElementById("years").value, 10);

      console.log("Principal:", principal);
      console.log("Rate:", rate);
      console.log("Compounding:", compounding);
      console.log("Years:", years);

      const n = compounding;
      const r = rate / 100;
      const t = years;

      const amount = principal * Math.pow(1 + r / n, n * t);

      console.log("Calculated Amount:", amount);

      const resultAmountElement = document.getElementById("result");
      resultAmountElement.textContent =
        "Your investment will be worth: $" + amount.toFixed(2);
    });
  }
});
