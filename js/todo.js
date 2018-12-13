const todos = [{
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

//SEARCHING



const filter = todos.filter(function (todos) {
    return todos.text;
});

filter.forEach(function (todoss) {
    const el = document.createElement("h2");
    el.textContent = todoss.text;
    document.querySelector("body").appendChild(el);
});


// const b = incompleteTodos(todos);
// console.log(b);
// console.log(`You have ${b.length} left`);
// // const filters = {
// //   searchTodos: ""
// // };

// const renderTodos = function(todos, filters) {
//   const filteredTodos = todos.filter(function(todo) {
//     return !todo.text.toLowerCase().includes(filters.searchTodos.toLowerCase());
//   });

//   //Find the incomplete todos
//   const incompleteTodos = todos.filter(function(todo) {
//     return !todo.completed;
//   });

//   document.querySelector("#todos").innerHTML = "";

//   //Next create a new html element using javascript and display to webpage
//   const summary = document.createElement("h2");
//   summary.textContent = `You have ${incompleteTodos.length} left`;
//   document.querySelector("#todos").appendChild(summary);

//   //Display all incompleted todos to webpage

//   filteredTodos.forEach(function(todo) {
//     //Create an element
//     const paragraph = document.createElement("p");
//     paragraph.textContent = todo.text;
//     document.querySelector("#todos").appendChild(paragraph);
//   });
// };
// renderTodos(todos, filters);

// //Eventlistener
// document.querySelector("#add-todo").addEventListener("click", function(e) {
//   console.log("ff");
// });

// //Listen for todo text change
// document
//   .querySelector("#new-todo-text")
//   .addEventListener("input", function(e) {});

// document.querySelector("#search-text").addEventListener("input", function(e) {
//   filters.searchTodos = e.target.value;
// });