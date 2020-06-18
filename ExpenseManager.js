// Global Object
var manager = {
  records: [],
  totalExpenses: 0,
  totalIncomes: 0,
  currentBalance: 0,

  // Add Transaction
  addTransaction: function (item) {
    // Push item in Global Array
    this.records.push(item);
    // Render table
    renderTable(this.records);
    console.log("records", this.records);
  },
};

window.addEventListener("load", function () {
  var form = document.getElementById("form");
  form.addEventListener("submit", onFormSubmit);
});

// On Form  Submit
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

  var data = {
    id: Number(manager.records.length) + 1,
    type: type,
    source: source,
    amount: amount,
  };

  manager.addTransaction(data);
};

// Render Table
var renderTable = function (item) {
  var recordsTable = document.getElementById("recordsTable");
  // Empty Table
  recordsTable.innerHTML = "";

  // First Row
  var firstRow = createRow({
    id: "Id",
    type: "Type",
    source: "Source",
    amount: "Amount",
  });

  recordsTable.append(firstRow);

  for (var i = 0; i < item.length; i++) {
    // Create Row
    var currentRow = createRow(item[i]);

    recordsTable.append(currentRow);
  }
};

var createRow = function (elem) {
  var row = document.createElement("tr");

  var idColumn = document.createElement("td");
  idColumn.textContent = elem.id;

  var typeColumn = document.createElement("td");
  typeColumn.textContent = elem.type;

  var sourceColumn = document.createElement("td");
  sourceColumn.textContent = elem.source;

  var amountColumn = document.createElement("td");
  amountColumn.textContent = elem.amount;

  row.append(idColumn, typeColumn, sourceColumn, amountColumn);

  return row;
};
