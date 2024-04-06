const inputInput = document.querySelector("#todo-input");

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && inputInput.value !== "") {
    const todoList = document.querySelector("#todo-list");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.textContent = inputInput.value;
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    inputInput.value = "";
  }
};
