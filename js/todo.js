const todos = [
  {
    text: "Teach",
    completed: false
  },
  {
    text: "Go abroad",
    completed: false
  },
  {
    text: "Emmanuel",
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

let search = "";

//RENDERING
const renderTodos = function(todos, search) {
  const allTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });
  document.querySelector("#todos").innerHTML = "";
  allTodos.forEach(function(todo) {
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

renderTodos(todos, search);

//END OF RENDERING

//EVENT LISTENER

document.querySelector("#search-text").addEventListener("input", function(e) {
  search = e.target.value;
  renderTodos(todos, search);
});

//PUSHING ITEM INO THE ARRAY FOR RENDERING

document.querySelector("#todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false
  });
  renderTodos(todos, search);
  e.target.elements.todoText.value = "";
  console.log(todos);
});
