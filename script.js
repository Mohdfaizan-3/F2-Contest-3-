const table = document.querySelector("table");
const addNewRow = document.querySelector(".add-row-btn");

function Constructor(
  name,
  rollNo,
  subject,
  marks,
  markedBy
) {
  name = this.name;
  rollNo = this.rollNo;
  subject = this.subject;
  marks = this.marks;
  markedBy = this.markedBy;
}

addNewRow.addEventListener("click", createData);

function createData() {
  const newRow = document.createElement("tr");

  const newRowId = table.rows.length;
  const id = document.createElement("td");
  id.textContent = newRowId;
  id.setAttribute("style", "text-align: center;");
  newRow.append(id);

  for (let i = 0; i < 5; i++) {
    const cell = document.createElement("td");
    newRow.appendChild(cell);
    const input = document.createElement("input");
    input.type = "text";
    cell.appendChild(input);
  }
  table.append(newRow);
}
