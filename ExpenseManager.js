window.addEventListener("load", function () {
  var form = document.getElementById("form");
  form.addEventListener("submit", onFormSubmit);
});

var onFormSubmit = function () {
  event.preventDefault();
  var elements = event.target.children;
  console.log("elements", elements);

  var type = elements[0].value;
  console.log("elements", type);

  var source = elements[2].value;
  console.log("source", source);

  var amount = elements[4].value;
  console.log("amount", amount);
};
