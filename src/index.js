//default text color
let selectedColor = "black";

//changes the color of the tasks' priority
const priorityDropDown = document.getElementById("selectPriority");
priorityDropDown.addEventListener("change", selectHandler);

document.addEventListener("DOMContentLoaded", () => {
  //Select value for input field  (can't do the e.target."id".value way on the video since JS doesn't work well with taking hypens)
  const inputField = document.querySelector("#new-task-description")
  document.querySelector("form").addEventListener("submit", e => {
    //Prevents form from submitting
    e.preventDefault();
    //Call on buildToDoList function to build list
    buildToDoList(inputField.value);
  });  
});
//Build out to do list
function buildToDoList(task){
  //Create list item under to do list
  let listItem = document.createElement("li");
  //Create delete button
  let deleteBtn = document.createElement("button")
  //Create edit button
  let editBtn = document.createElement("button")
  //Create edit text box
  let editText = document.createElement("input");

  listItem.textContent = `${task} `;
  //Changes the priority color of the task
  listItem.style.color = selectedColor;
  //Delete button label
  deleteBtn.textContent = 'x';
  //Delete edit label
  editBtn.textContent = 'Edit';
  //Appends edit button to delete button 
  listItem.append(deleteBtn, editBtn)
  deleteBtn.addEventListener("click", deleteTask)
  //Edit button, click on edit button to generate text box for editing tasks
  editBtn.addEventListener("click", () => {
    listItem.append(editText);
  });
  //Edit a task (PRESS ENTER)
  editText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      listItem.textContent = editText.value;
      listItem.append(deleteBtn, editBtn);
    }
  })
  //Appends buttons to task
  document.querySelector("#tasks").appendChild(listItem);
}
//Deletes task
function deleteTask(e){
  e.target.parentNode.remove()
}

function selectHandler(event) {
  selectedColor = event.target.value;
}