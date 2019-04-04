///all my awesome co-dependencies uh i mean dependencies ;)
var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

///the stuff to connect to MySQL database Yahtzee!
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});
///The code to make sure the connection to database is...actually happening
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected");
});

///Calling the function that grabs the database and displays it
displayTable();

///Function that holds main menu inquirer UI
function startMenu() {
  // console.log("\n ------------------------- \n \n ");

  inquirer
    .prompt([
      {
        type: "input",
        name: "prompt1",
        message: "Please Enter product ID"
      },
      {
        type: "input",
        name: "prompt2",
        message: "How many would you like to purchase?"
      }
    ])
    .then(answers => {
      displayTable();
    });
}

///Function that grabs and display that sweet sweet database data..yum :P
function displayTable() {
  connection.query("select * from products", function(err, data) {
    if (err) {
      console.log(err);
    }

    console.table(data);
    startMenu();
  });
}
