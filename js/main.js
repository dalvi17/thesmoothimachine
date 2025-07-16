// Creating Class as mentioned in the instructions
class Smoothie {
  constructor(name, size, base, ingredients) {
    this.customerName = name;
    this.size = size;
    this.base = base;
    this.ingredients = ingredients;
  }

  // Getting  description 
  getDescription() {
    return `
      <h2>Bonjour ${this.customerName}!</h2>
      <p>You've ordered a <strong>${this.size}</strong> smoothie with a <strong>${this.base}</strong> base and the following ingredients:</p>
      <ul>${this.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      <p> Visit us again! Thank you!!</p>
    `;
  }
}

// Calling the event event listener
document.getElementById("smoothieForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value; //Getting values from form
  const lname = document.getElementById("lname").value; //Getting values from form
  
  const size = document.getElementById("size").value;
  const base = document.querySelector('input[name="base"]:checked').value;

  const ingredients = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map(checkbox => checkbox.value);

  const smoothie = new Smoothie(name, size, base, ingredients);

  document.getElementById("orderSummary").innerHTML = smoothie.getDescription();
});
