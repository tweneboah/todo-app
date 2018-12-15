# TODO APP

This is an app that keep track of your todo's plan

```javascript
const todos = [
  {
    text: "Teach",
    completed: false
  },
  {
    text: "Go abroad",
    completed: true
  },
  {
    text: "Learn React",
    completed: false
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

// Displaying todos left

const incompletedTodos = todos.filter(function(todo) {
  return !todo.completed;
});

const createTodoElement = document.createElement("h5");
createTodoElement.textContent = `Hi you have  ${
  incompletedTodos.length
} left todos try to complete`;
document.querySelector(".todos-left").appendChild(createTodoElement);

//End of Displaying todos left

//Displaying all todos

const DisplayAllTodo = function(todos) {
  const allTodos = todos.filter(function(todo) {
    return todo.text;
  });
  return allTodos;
};
```

### EXPLANATION => STEPS

For me to able to display my data into the page. Since I am not going to use the function in anywhere I will not create a function but rather i will store the return data into a variable.

I use filter() method. filter() returns a new array base on criteria. So my criteria was to return all my todos text.
