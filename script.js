const table = document.querySelector("table");
const addNewRow = document.querySelector(".add-row-btn");

function Constructor(
  name,
  rollNo,
  subject,
  marks,
  markedBy
) {
  this.name = name;
  this.rollNo = rollNo;
  this.subject = subject;
  this.marks = marks;
  this.markedBy = markedBy;
}

addNewRow.addEventListener("click", createData);

function handleValue(buttonElement) {
  const parentElement =
    buttonElement.parentElement.parentElement;
  const cells = parentElement.cells;
  for (let i = 1; i < cells.length - 1; i++) {
    const value = cells[i].querySelector("input").value;
    console.log(value);
  }
}

function handleEdit(event) {
  const buttonElement = event.target;
  
  const parentElement =
    buttonElement.parentElement.parentElement;

  if (buttonElement.textContent === "Edit") {
    buttonElement.textContent = "Save";
    const inputs = parentElement.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = false;
    });
    
  } else {
    buttonElement.textContent = "Edit";
    const inputs = parentElement.querySelectorAll("input");
    inputs.forEach((input) => {
      input.disabled = true;
    });
    handleValue(buttonElement);
  }
}




function createData() {
  const newRow = document.createElement("tr");

  const newRowId = table.rows.length;
  const id = document.createElement("td");
  id.textContent = newRowId;
  id.setAttribute("style", "text-align: center;");

  const Namecell = document.createElement("td");
  const input = document.createElement("input");
  input.type = "text";
  input.disabled = true;
  Namecell.appendChild(input);

  const rollNocell = document.createElement("td");
  const inputrollNocell = document.createElement("input");
  inputrollNocell.type = "number";
  inputrollNocell.disabled = true;
  rollNocell.appendChild(inputrollNocell);

  const subjectcell = document.createElement("td");
  const inputsubject = document.createElement("input");
  inputsubject.type = "text";
  inputsubject.disabled = true;
  subjectcell.appendChild(inputsubject);

  const markscell = document.createElement("td");
  const inputmarks = document.createElement("input");
  inputmarks.type = "number";
  inputmarks.disabled = true;
  markscell.appendChild(inputmarks);

  const markedBycell = document.createElement("td");
  const inputmarkedBy = document.createElement("input");
  inputmarkedBy.type = "email";
  inputmarkedBy.disabled = true;
  markedBycell.appendChild(inputmarkedBy);

  const savecell = document.createElement("td");
  const saveButton = document.createElement("button");
  saveButton.textContent = "Edit";
  saveButton.classList.add("save-btn");
  saveButton.id = newRowId;
  saveButton.addEventListener("click", handleEdit);
  savecell.appendChild(saveButton);

  newRow.append(
    id,
    Namecell,
    rollNocell,
    subjectcell,
    markscell,
    markedBycell,
    savecell
  );
  table.append(newRow);
}
