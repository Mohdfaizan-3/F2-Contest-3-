const table = document.querySelector("table");
const addNewRow = document.querySelector(".add-row-btn");
const tableData = [];
function Constructor(
  id,
  student_name,
  student_roll,
  subject,
  marks,
  markedBy
) {
  this.id = id;
  this.student_name = student_name;
  this.student_roll = student_roll;
  this.subject = subject;
  this.marks = marks;
  this.markedBy = markedBy;
}

addNewRow.addEventListener("click", createData);

function handleValue(buttonElement) {
  const parentElement =
    buttonElement.parentElement.parentElement;
  const cells = parentElement.cells;
  const data = {};

  for (let i = 1; i < cells.length - 1; i++) {
    const input = cells[i].querySelector("input");
    data[input.name] = input.value;
  }

  const rowId = cells[0].textContent;
  console.log(rowId);
  const objIndex = rowId - 1;
  if (tableData[objIndex] !== undefined) {
    const obj = tableData[objIndex];
    obj.student_name = data.student_name;
    obj.student_roll = data.student_roll;
    obj.subject = data.subject;
    obj.marks = data.marks;
    obj.markedBy = data.markedBy;
  } else {
    const obj = new Constructor(
      cells[0].textContent,
      data.student_name,
      data.student_roll,
      data.subject,
      data.marks,
      data.markedBy
    );

    tableData.push(obj);
  }

  console.log(tableData);
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
  id.name = "id";
  id.setAttribute("style", "text-align: center;");

  const Namecell = document.createElement("td");
  const inputName = document.createElement("input");
  
  inputName.name = "student_name";
  inputName.type = "text";
  inputName.disabled = true;
  Namecell.appendChild(inputName);

  const rollNocell = document.createElement("td");
  const inputRollNo = document.createElement("input");
  inputRollNo.type = "number";
  inputRollNo.name = "student_roll";
  inputRollNo.disabled = true;
  rollNocell.appendChild(inputRollNo);

  const subjectcell = document.createElement("td");
  const inputsubject = document.createElement("input");
  inputsubject.type = "text";
  inputsubject.name = "subject";
  inputsubject.disabled = true;
  subjectcell.appendChild(inputsubject);

  const markscell = document.createElement("td");
  const inputmarks = document.createElement("input");
  inputmarks.type = "number";
  inputmarks.name = "marks";
  inputmarks.disabled = true;
  markscell.appendChild(inputmarks);

  const markedBycell = document.createElement("td");
  const inputmarkedBy = document.createElement("input");
  inputmarkedBy.type = "email";
  inputmarkedBy.name = "markedBy";
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
