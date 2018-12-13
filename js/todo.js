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

// Displaying todos left

const incompletedTodos = todos.filter(function (todo) {
    return !todo.completed;
})

const createTodoElement = document.createElement("h5");
createTodoElement.textContent = `Hi you have  ${incompletedTodos.length} left todos try to complete`
document.querySelector(".todos-left").appendChild(createTodoElement);

//End of Displaying todos left


//Displaying all todos

const DisplayAllTodo = function (todos) {
    const allTodos = todos.filter(function (todo) {
        return todo.text;
    })
    return allTodos;
}