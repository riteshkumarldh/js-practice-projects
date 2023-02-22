const addBtn = document.querySelector(".add-btn");
const inputField = document.querySelector(".todo-input input");
const ul = document.querySelector(".all-todos");

let edit_id = null;
//getting saved todo
let taskTodo = JSON.parse(localStorage.getItem("taskTodo")) || [];

//displaying todos to dom
function displayTodo() {
  let li = "";
  if (taskTodo) {
    taskTodo.forEach((todo, i) => {
      li += `<li class="todo">
      <p>${todo.taskName} </p>
      <div class="btns">
        <i class="fa fa-pencil-square" onClick="editTodo(${i})" aria-hidden="true"></i>
        <i class="fa fa-trash" onClick="deleteTodo(${i})" aria-hidden="true"></i>
      </div>
    </li>`;
    });
  }
  ul.innerHTML = li;
}

//edit todo
function editTodo(editId) {
  edit_id = editId;
  inputField.value = taskTodo[edit_id].taskName;
  addBtn.textContent = "Update";
  // displayTodo();
}

// deleting todo
function deleteTodo(deleteId) {
  taskTodo.splice(deleteId, 1);
  displayTodo();

  //saving in localstorage after deleting
  localStorage.setItem("taskTodo", JSON.stringify(taskTodo));
}

window.addEventListener("DOMContentLoaded", () => {
  displayTodo();
});

// getting input and pushing into array and saving in local storage
inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let task = inputField.value.trim();
    if (edit_id != null) {
      // if clicked on edit then we will updated that todo
      taskTodo.splice(edit_id, 1, { taskName: task });
      // after updating again setting id to null
      edit_id = null;
    } else {
      // if not click on edit then insering
      if (inputField.value == "") return;
      taskTodo.push({ taskName: task });
    }
    inputField.value = "";

    // saving in local storage
    localStorage.setItem("taskTodo", JSON.stringify(taskTodo));
    displayTodo();

    // if edit then btn text reseting to default
    addBtn.textContent = "Add";
  }
});

// getting input and pushing into array and saving in local storage
addBtn.addEventListener("click", () => {
  let task = inputField.value.trim();
  if (edit_id != null) {
    // if clicked on edit then we will updated that todo
    taskTodo.splice(edit_id, 1, { taskName: task });
    // after updating again setting id to null
    edit_id = null;
  } else {
    // if not click on edit then insering
    if (inputField.value == "") return;
    taskTodo.push({ taskName: task });
  }
  inputField.value = "";

  // saving in local storage
  localStorage.setItem("taskTodo", JSON.stringify(taskTodo));

  displayTodo();

  // if edit then btn text reseting to default
  addBtn.textContent = "Add";
});
