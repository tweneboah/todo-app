# todo-app

This is my next project am going to work on.

### Day 1 8/12/2018

```javascript
// //OBJECTS

let myBook = {
  title: "My mother",
  author: "Emmanuel",
  date: 2018
};

let otherBook = {
  title: "My father",
  author: "Tweneboah",
  date: 2001
};

let getSummary = function (book) {
    console.log(`The title of the book is  ${book.title} and the Author is ${book.author}`)
}

console.log(getSummary(myBook));
console.log(getSummary(otherBook));

//Using return Keyword

const getSummary2 = function(book) {
  return {
    getAuthor: `The author is ${book.author}`,
    getDate: `The date of the book is ${book.date}`
  };
};

const getDate = getSummary2(myBook);
console.log(getDate.getDate);

Object Reference
let myAccount = {
  name: "Emmanuel",
  expenses: 0,
  income: 0
};

Function to add expenses

let addExpense = function(acc, amount) {
  acc.expenses = acc.expenses + amount;
};

//Add income

let addIncome = function(account, income) {
  account.income = account.income + income;
};

let resetAccount = function(myAccount) {
  myAccount.income = 0;
  myAccount.expenses = 0;
};

let getAccountSummary = function(addIncome, addExpenses) {
  return `Your total income is {addIncome.resetAccount}`;
};

addExpense(myAccount, 400);
addIncome(myAccount, 800);
addIncome(myAccount, 800);

let ans = getAccountSummary(addIncome);

console.log(myAccount);
console.log(myAccount);
console.log(ans);

const todos = [
  "Teach",
  "Go abroad",
  "Learn React",
  "Birthdat Party",
  "Learn Chines"
];



console.log(`You have ${todos.length} left`);
todos.push("Node JS");
todos.forEach(function(todo, index) {
  const num = index + 1;
  console.log(`${num}. ${todo}`);
});

```
