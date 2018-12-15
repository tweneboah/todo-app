const todos = [
  {
    text: "Teach",
    completed: false
  },
  {
    text: "Express JS",
    completed: false
  },
  {
    text: "MongoDB",
    completed: false
  },
  {
    text: "Learn React",
    completed: true
  },
  {
    text: "Birthdat Party",
    completed: false
  },
  {
    text: "Learn Chines",
    completed: true
  }
];

let filters = {
  searchText: "",
  hideCompleted: false
};

//RENDERING
const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  //Showing incmpleted todos
  //I have refilter my filtered todos to pull out all the incompleted ones
  //So i have to update my filteredTodos

  filteredTodos = filteredTodos.filter(function(todo) {
    if (filters.hideCompleted) {
      return !todo.completed;
    } else {
      return true;
    }
  });

  document.querySelector("#todos").innerHTML = "";

  filteredTodos.forEach(function(todo) {
    const eL = document.createElement("p");
    eL.textContent = todo.text;
    document.querySelector("#todos").appendChild(eL);
  });

  //Displaying incomplete todos remaining
  document.querySelector(".todos-left").innerHTML = "";
  const incompletedTodos = todos.filter(function(todo) {
    return !todo.completed;
  });

  const createTodoElement = document.createElement("h5");
  createTodoElement.textContent = `Hi you have  ${
    incompletedTodos.length
  } left todos try to complete`;
  document.querySelector(".todos-left").appendChild(createTodoElement);
  // END OF Displaying incomplete todos remaining
};

renderTodos(todos, filters);

//END OF RENDERING=====>

//EVENT LISTENER

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters); //This will reactivate or refresh the rendering functions
});

//PUSHING ITEM INO THE ARRAY FOR RENDERING

document.querySelector("#todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false
  });
  renderTodos(todos, filters); //Refreshing the rendering to take effect of this action
  e.target.elements.todoText.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
